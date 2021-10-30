import { Content } from '.';

export class StreamingPlatformContent {
    id: string;
    content: Content;
    from: Date;
    to: Date;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.content = obj.content;
        this.from = obj.from;
        this.to = obj.to;
    }

    active(date = new Date()): boolean {
        return this.from <= date && (!this.to || this.to >= date);
    }
}
