import { ItemPreviewData, MetadataGroup } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
declare type MrSearchResponse = {
    limit: number;
    offset: number;
    results: MrSearchResult[];
    sort: string;
    total_count: number;
};
interface MrSearchResult extends ItemPreviewData {
    /** relative path */
    link: string;
    /** items that matched the search input */
    highlights?: {
        [x: string]: [string];
    };
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
        highlights?: {
            [x: string]: [string];
        };
        /** unique id for the search result entry */
        id: number;
        image?: string;
        title: string;
        text?: string;
    }[];
}
export {};
