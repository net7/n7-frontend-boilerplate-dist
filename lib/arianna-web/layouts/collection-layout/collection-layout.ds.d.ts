import { InnerTitleData, ItemPreviewData } from '@n7-frontend/components';
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
export declare class AwCollectionLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    private layoutOptions;
    private route;
    collectionID: string;
    innerTitleData: BehaviorSubject<InnerTitleData>;
    collectionDescription: BehaviorSubject<string>;
    pageSize: number;
    currentOffset: number;
    loadedCollections: BehaviorSubject<ItemPreviewData[] | []>;
    loadMoreButton: BehaviorSubject<boolean>;
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
}
