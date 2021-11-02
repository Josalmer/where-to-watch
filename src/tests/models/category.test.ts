import { Category, Content } from "../../models";
import { contentRepository } from "../../repositories";

describe('Category model tests', () => {
    let category: Category;
    let attributes: {
        id: string,
        name: string
    };

    beforeAll(() => {
        attributes = { id: 'test_id', name: 'test_name' };
        category = new Category(attributes);
    })

    it('Category has correct attributes', () => {
        expect(category.id).toBe(attributes.id);
        expect(category.name).toBe(attributes.name);
    })

    it('getContents return all the Content that belongs to that category', () => {
        expect(category.getContents().length).toBe(0);

        const content = new Content({ id: 'content_id' });
        content.addCategory(category);
        contentRepository.push(content);

        expect(category.getContents().length).toBe(1);
    })
})
