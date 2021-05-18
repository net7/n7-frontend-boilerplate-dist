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
    /** unique id for the search result entry */
    id: number;
    /** relative path */
    link?: string;
    /** items that matched the search input */
    highlights?: HighlightItem[];
    /** payload for item anchor */
    payload?: {
        action: string;
        id: string | number;
        type: string;
    };
}
export declare class MrSearchResultsDS extends DataSource {
    protected transform(data: MrSearchResponse): {
        metadata: MetadataGroup[];
        anchor: any;
        highlights: any[];
        classes: any;
        /** unique id for the search result entry */
        id: number;
        /** relative path */
        link?: string;
        /** payload for item anchor */
        payload?: {
            action: string;
            id: string | number;
            type: string;
        };
        image?: string;
        color?: string;
        title: string;
        text?: string;
    }[];
}
export {};
