import { Content } from '.';

export class Category {
    id: string;
    code: string;
    name: string;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.code = obj.code;
        this.name = obj.name;
    }

    getContents(): Content[] {
        throw new Error("not Implemented");
    }
}
