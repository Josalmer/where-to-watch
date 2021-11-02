import { Category, Content } from "../../models";

describe('Content model tests', () => {
    let content: Content;
    let attributes: {
        id: string,
        title: string,
        description: string,
        releasedAt: Date,
        categories: Category[],
    };

    beforeAll(() => {
        attributes = { id: 'test_id', title: 'test_title', description: 'test_description', releasedAt: new Date(), categories: [] };
        content = new Content(attributes);
    })

    afterEach(() => {
        if (content.categories?.length > 0) {
            content.categories = [];
        }
    })

    it('Content has correct attributes', () => {
        expect(content.id).toBe(attributes.id);
        expect(content.title).toBe(attributes.title);
        expect(content.description).toBe(attributes.description);
        expect(content.releasedAt).toBe(attributes.releasedAt);
        expect(content.categories).toBe(attributes.categories);
    })

    it('addCategory should add the category if not exists', () => {
        const category = new Category({id: 'test_id'});

        content.addCategory(category);

        expect(content.categories.length).toBe(1);
        expect(content.categories[0]).toBeInstanceOf(Category);
        expect(content.categories[0].id).toBe(category.id);
    })

    it('addCategory should not add the category if the content already has this category', () => {
        const category = new Category({id: 'test_id'});

        content.addCategory(category);
        content.addCategory(category);

        expect(content.categories.length).toBe(1);
    })

    it('deleteCategory should remove the specified category', () => {
        const category = new Category({id: 'test_id'});

        content.addCategory(category);
        expect(content.categories.length).toBe(1);

        content.deleteCategory({categoryId: category.id});
        expect(content.categories.length).toBe(0);
    })
})
