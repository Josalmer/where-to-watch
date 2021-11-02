import { Category, StreamingPlatform } from '.';
import { streamingPlatformRepository } from '../repositories';

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
        return streamingPlatformRepository.filter(platform => {
            const contents = platform.contents.filter(c => {
                return c.content.id === this.id && c.active(date)
            });
            return contents.length > 0;
        });
    }
}
