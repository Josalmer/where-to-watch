import { Category } from "../../models";

describe('Category model tests', () => {
    it('Category has correct attributes', () => {
        const attributes: {
            id: string,
            name: string
        } = { id: 'test_id', name: 'test_name' };
        const category: Category = new Category(attributes);

        expect(category.id).toBe(attributes.id);
        expect(category.name).toBe(attributes.name);
    })
})
