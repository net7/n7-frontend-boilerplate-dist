import { ItemPreviewData, MetadataGroup } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
declare type MrSearchResponse = {
    limit: number;
    offset: number;
    results: MrSearchResult[];
    sort: string;
    total_count: number;
};
declare type HighlightItem = [string, [string]] | {
    link?: string;
    text?: string;
    label?: string;
};
interface MrSearchResult extends ItemPreviewData {
    /** relative path */
    link: string;
    /** items that matched the search input */
    highlights?: HighlightItem[];
    /** unique id for the search result entry */
    id: number;
}
export declare class MrSearchResultsDS extends DataSource {
    protected transform(data: MrSearchResponse): {
        metadata: MetadataGroup[];
        classes: any;
        anchor: {
            href: string;
            queryParams: {};
            target: string;
        };
        /** relative path */
        link: string;
        /** items that matched the search input */
        highlights?: HighlightItem[];
        /** unique id for the search result entry */
        id: number;
        image?: string;
        color?: string;
        title: string;
        text?: string;
    }[];
}
export {};
