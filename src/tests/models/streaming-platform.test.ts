import { Content, StreamingPlatform, StreamingPlatformContent } from "../../models";

describe('StreamingPlatform model tests', () => {
    let platform: StreamingPlatform;
    let attributes: {
        id: string,
        name: string
    };

    beforeAll(() => {
        attributes = { id: 'test_id', name: 'test_name' };
        platform = new StreamingPlatform(attributes);
    })

    afterEach(() => {
        if (platform.contents?.length > 0) {
            platform.contents = [];
        }
    })

    it('StreamingPlatform has correct attributes', () => {
        expect(platform.id).toBe(attributes.id);
        expect(platform.name).toBe(attributes.name);
        expect(platform.contents.length).toBe(0);
    })

    it('addContent creates a new StreamingPlatformContent for that platform', () => {
        const content = new Content({id: 'content_id'});
        platform.addContent(content, new Date());

        expect(platform.contents.length).toBe(1);
        expect(platform.contents[0]).toBeInstanceOf(StreamingPlatformContent);
        expect(platform.contents[0].content).toBe(content);
    })

    it('removeContent fill to field of the active Content identified by it id', () => {
        const content = new Content({id: 'content_id'});
        platform.addContent(content, new Date());

        const expirationDate = new Date();

        expect(platform.contents[0].to).toBeUndefined();
        platform.removeContent({contentId: content.id}, expirationDate);
        expect(platform.contents[0].to).toBe(expirationDate);
    })

    it('removeContent fill to field of the active Content identified by it title', () => {
        const content = new Content({title: 'content_title'});
        platform.addContent(content, new Date());

        const expirationDate = new Date();

        expect(platform.contents[0].to).toBeUndefined();
        platform.removeContent({contentTitle: content.title}, expirationDate);
        expect(platform.contents[0].to).toBe(expirationDate);
    })

    it('getAvailableContent return available (active) content of the platform', () => {
        const content = new Content({id: 'content_id'});
        platform.addContent(content, new Date());

        const availableContent = platform.getAvailableContent();
        expect(availableContent.length).toBe(1);
        expect(availableContent[0]).toBe(content);
    })
})
