import { Content } from '.';

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
        throw new Error("not Implemented");
    }
}
