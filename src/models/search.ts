import { Content } from '.';

export class Search {
    id: string;
    search: string;
    ip: string;
    userAgent: string;
    country: string;
    searchedAt: Date;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.search = obj.search;
        this.ip = obj.ip;
        this.userAgent = obj.userAgent;
        this.country = obj.country;
        this.searchedAt = obj.searchedAt;
    }

    static createSearch(): Search {
        throw new Error("not Implemented");
    }

    getMatchedContent(): Content[] {
        throw new Error("not Implemented");
    }
}
