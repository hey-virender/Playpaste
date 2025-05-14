export interface Playlist {
    id: string;
    snippet: {
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: {
            default?: { url: string; width: number; height: number };
            medium?: { url: string; width: number; height: number };
            high?: { url: string; width: number; height: number };
        };
    };
}