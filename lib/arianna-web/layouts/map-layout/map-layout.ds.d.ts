import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
declare type LayoutState = 'LOADING' | 'EMPTY' | 'SUCCESS';
export declare class AwMapLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    private communication;
    private pageSize;
    state$: BehaviorSubject<LayoutState>;
    private currentPage;
    private relatedItems;
    total: number;
    onInit({ configuration, mainState, options, titleService, communication, }: {
        configuration: any;
        mainState: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    onMarkerOpen({ id, label }: {
        id: any;
        label: any;
    }): void;
    onMarkerClose(): void;
    onPaginationChange({ value }: {
        value: any;
    }): void;
    onPaginationClick({ page }: {
        page: any;
    }): void;
    private updateItems;
    private updatePagination;
}
export {};
