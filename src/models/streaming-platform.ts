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
        return this.contents.filter(streamingContent => 
            streamingContent.active(date)
        ).map(streamingContent => streamingContent.content);
    }

    findContentById(id: string, date = null): StreamingPlatformContent[] {
        return this.contents.filter((streamingContent) => 
            streamingContent.content.id === id && (!date || streamingContent.active(date))
        );;
    }

    findContentByTitle(title: string, date = null): StreamingPlatformContent[] {
        return this.contents.filter((streamingContent) => 
            streamingContent.content.title === title && (!date || streamingContent.active(date))
        );
    }

    addContent(content: Content, from: Date = new Date()): void {
        const newContent = new StreamingPlatformContent({ content, from });
        this.contents.push(newContent);
    }

    removeContent({ contentId = null, contentTitle = null }, to: Date = new Date()): void {
        let target: StreamingPlatformContent;
        const now = new Date();
        if (contentId) {
            target = this.findContentById(contentId, now)[0];
        } else if (contentTitle) {
            target = this.findContentByTitle(contentTitle, now)[0];
        }

        if (target) {
            target.to = to;
        }
    }
}
