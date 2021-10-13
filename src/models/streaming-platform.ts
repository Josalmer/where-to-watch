import { Content } from '.';

export class StreamingPlatform {
    id: string;
    name: string;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.name = obj.name;
    }

    static createStreamingPlatform(): StreamingPlatform {
        throw new Error("not Implemented");
    }

    getAvailableContent(date: Date = new Date()): Content[] {
        throw new Error("not Implemented");
    }

    addContent(content: Content, from: Date = new Date()): void {
        throw new Error("not Implemented");
    }

    removeContent(content: Content, to: Date = new Date()): void {
        throw new Error("not Implemented");
    }
}
