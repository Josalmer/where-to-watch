import { Content } from '.';
import { contentRepository } from '../repositories';

export class Category {
    id: string;
    name: string;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.name = obj.name;
    }

    static createCategory(): Category {
        throw new Error("not Implemented");
    }

    getContents(): Content[] {
        return contentRepository.filter(c => c.hasCategory({ categoryId: this.id }));
    }
}
