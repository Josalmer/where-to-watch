import { Category, StreamingPlatform, StreamingPlatformContent, Content } from '../models';

const contentRepository: Content[] = [];
const categoryRepository: Category[] = [];
const streamingPlatformRepository: StreamingPlatform[] = [];
const streamingPlatformContentRepository: StreamingPlatformContent[] = [];

export {
    contentRepository,
    categoryRepository,
    streamingPlatformRepository,
    streamingPlatformContentRepository
}
