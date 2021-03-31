import { InnerTitleData, ItemPreviewData } from '@n7-frontend/components';
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
export declare class AwCollectionLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    private layoutOptions;
    private route;
    collectionID: string;
    private classificationsMap;
    innerTitleData: BehaviorSubject<InnerTitleData>;
    collectionDescription: BehaviorSubject<string>;
    pageSize: number;
    /** Necessary to iterate with the loading item placeholder HTML */
    pageSizeList: any[];
    currentOffset: number;
    loadedCollections: BehaviorSubject<ItemPreviewData[] | []>;
    /** Button that loads more content into the layout */
    loadMoreButton: BehaviorSubject<boolean>;
    /** Controls the loading state of the layout */
    loading: boolean;
    onInit(payload: any): void;
    /**
     * After the collection ID has been loaded
     */
    onCollectionID(): void;
    loadMore(reload?: boolean): void;
    /**
     * Builds a URL from entity type,
     * entity id, and a slug string.
     *
     * @param type entity type
     * @param id entity ID
     * @param title human-readable title
     * @returns URL string including a slug
     */
    urlBuilder(id: any, title: any, type: string): string | undefined;
    stringLimiter(content: string, options: {
        maxLength: number;
        char: string;
    }): string;
    setTitle(title: string): void;
    /**
     * Convert classification strings to css classes.
     *
     * @param classification a classification string like "a4.oc.ua"
     * @returns a CSS class
     */
    classMap(classification: string): string;
}
