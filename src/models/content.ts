import { Category, StreamingPlatform } from '.';

export class Content {
    id: string;
    title: string;
    description: string;
    releasedAt: Date;
    categories: Category[];

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.releasedAt = obj.releasedAt;
        this.categories = obj.categories;
    }

    static createContent(): Content {
        throw new Error("not Implemented");
    }

    addCategory(category: Category): void {
        if (!this.categories.find(c => c.id === category.id)) {
            this.categories.push(category);
        }
    }

    deleteCategory(category: Category): void {
        throw new Error("not Implemented");
    }

    getAvailablePlatforms(date: Date = new Date()): StreamingPlatform[] {
        throw new Error("not Implemented");
    }
}
