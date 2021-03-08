import { InnerTitleData, ItemPreviewData } from '@n7-frontend/components';
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
export declare class AwCollectionLayoutDS extends LayoutDataSource {
    private communication;
    innerTitleData: InnerTitleData;
    pageSize: number;
    currentOffset: number;
    loadedCollections: BehaviorSubject<ItemPreviewData[]>;
    onInit(payload: any): void;
    loadMore(): void;
}
