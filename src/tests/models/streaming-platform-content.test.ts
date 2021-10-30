import { StreamingPlatformContent, Content } from "../../models";

describe('StreamingPlatformContent model tests', () => {
    it('StreamingPlatformContent has correct attributes', () => {
        const attributes: {
            id: string,
            content: Content,
            from: Date,
            to: Date,
        } = {
            id: 'test_id',
            content: new Content({id: 'test_content_id'}),
            from: new Date(),
            to: new Date()
        };
        const platformContent: StreamingPlatformContent = new StreamingPlatformContent(attributes);

        expect(platformContent.id).toBe(attributes.id);
        expect(platformContent.content).toBe(platformContent.content);
        expect(platformContent.from).toBe(platformContent.from);
        expect(platformContent.to).toBe(platformContent.to);
    })
})
