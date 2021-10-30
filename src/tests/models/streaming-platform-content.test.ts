import { StreamingPlatformContent, Content } from "../../models";

describe('StreamingPlatformContent model tests', () => {
    const now = new Date();
    const weekBefore = new Date(now);
    weekBefore.setDate(weekBefore.getDate() - 7);
    const weekAfter = new Date(now);
    weekAfter.setDate(weekAfter.getDate() + 7);
    let attributes: {
        id: string,
        content: Content,
        from: Date,
        to: Date,
    };
    let platformContent: StreamingPlatformContent;

    beforeAll(() => {
        attributes = {
            id: 'test_id',
            content: new Content({id: 'test_content_id'}),
            from: weekBefore,
            to: weekAfter
        };
        platformContent = new StreamingPlatformContent(attributes);
    })

    afterEach(() => {
        platformContent.from = weekBefore;
        platformContent.to = weekAfter;
    })

    it('StreamingPlatformContent has correct attributes', () => {
        expect(platformContent.id).toBe(attributes.id);
        expect(platformContent.content).toBe(platformContent.content);
        expect(platformContent.from).toBe(platformContent.from);
        expect(platformContent.to).toBe(platformContent.to);
    })

    it('active method return true if selected date is between from and to', () => {
        expect(platformContent.active()).toBe(true);
    })

    it('active method return false if selected date is not between from and to', () => {
        const expiredDate = new Date(now.getDate() - 2);
        platformContent.to = expiredDate;
        expect(platformContent.active()).toBe(false);
    })
})
