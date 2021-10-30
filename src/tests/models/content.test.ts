import { Category, Content } from "../../models";

describe('Content model tests', () => {
    it('Content has correct attributes', () => {
        const attributes: {
            id: string,
            title: string,
            description: string,
            releasedAt: Date,
            categories: Category[],
        } = {
            id: 'test_id',
            title: 'test_title',
            description: 'test_description',
            releasedAt: new Date(),
            categories: []
        };
        const content: Content = new Content(attributes);

        expect(content.id).toBe(attributes.id);
        expect(content.title).toBe(attributes.title);
        expect(content.description).toBe(attributes.description);
        expect(content.releasedAt).toBe(attributes.releasedAt);
        expect(content.categories).toBe(attributes.categories);
    })
})
