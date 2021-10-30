import { StreamingPlatform } from "../../models";

describe('StreamingPlatform model tests', () => {
    it('StreamingPlatform has correct attributes', () => {
        const attributes: {
            id: string,
            name: string
        } = { id: 'test_id', name: 'test_name' };
        const platform: StreamingPlatform = new StreamingPlatform(attributes);

        expect(platform.id).toBe(attributes.id);
        expect(platform.name).toBe(attributes.name);
    })
})
