import { Content, StreamingPlatformContent } from '.';

export class StreamingPlatform {
    id: string;
    name: string;
    contents: StreamingPlatformContent[];

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.name = obj.name;
        this.contents = [];
    }

    static createStreamingPlatform(): StreamingPlatform {
        throw new Error("not Implemented");
    }

    getAvailableContent(date: Date = new Date()): Content[] {
        throw new Error("not Implemented");
    }

    addContent(content: Content, from: Date = new Date()): void {
        const newContent = new StreamingPlatformContent({content, from});
        this.contents.push(newContent);
    }

    removeContent(content: Content, to: Date = new Date()): void {
        throw new Error("not Implemented");
    }
}
