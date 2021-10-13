import { Category, StreamingPlatform } from '.';

export class Content {
    id: string;
    code: string;
    name: string;
    description: string;
    releasedAt: Date;
    categories: Category[];

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.code = obj.code;
        this.name = obj.name;
        this.description = obj.description;
        this.releasedAt = obj.releasedAt;
        this.categories = obj.categories;
    }

    static createContent(): Content {
        throw new Error("not Implemented");
    }

    addCategory(category: Category): void {
        throw new Error("not Implemented");
    }

    deleteCategory(category: Category): void {
        throw new Error("not Implemented");
    }

    getAvailablePlatforms(date: Date = new Date()): StreamingPlatform[] {
        throw new Error("not Implemented");
    }
}
