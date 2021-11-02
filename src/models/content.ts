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
        this.categories = obj.categories || [];
    }

    static createContent(): Content {
        throw new Error("not Implemented");
    }

    addCategory(category: Category): void {
        if (!this.categories.find(c => c.id === category.id)) {
            this.categories.push(category);
        }
    }

    hasCategory({ categoryId = null, categoryName = null }): boolean {
        const category = this.categories.find(c => c.id === categoryId || c.name === categoryName);
        return !!category;
    }

    deleteCategory({ categoryId = null, categoryName = null }): void {
        const category = this.categories.find(c => c.id === categoryId || c.name === categoryName);

        if (category) {
            this.categories = this.categories.filter(c => c.id !== category.id);
        }
    }

    getAvailablePlatforms(date: Date = new Date()): StreamingPlatform[] {
        throw new Error("not Implemented");
    }
}
