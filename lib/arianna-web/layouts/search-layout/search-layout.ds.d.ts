import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
export declare class AwSearchLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    private mainState;
    private search;
    private searchModel;
    private prettifyLabels;
    private configKeys;
    pageTitle: string;
    resultsTitle: string;
    totalCount: number;
    currentPage: any;
    pageSize: number;
    sidebarIsSticky: boolean;
    options: any;
    orderByLabel: string;
    orderByOptions: any;
    onInit({ configuration, mainState, options, communication, search }: {
        configuration: any;
        mainState: any;
        options: any;
        communication: any;
        search: any;
    }): void;
    onOrderByChange(payload: any): void;
    onPaginationChange(payload: any): Observable<boolean>;
    onPaginationGoToChange(payload: any): Observable<boolean>;
    onResultsLimitChange(payload: any): void;
    getSearchModelId: () => string;
    doSearchRequest$(): Observable<any>;
    private _updateSearchPage;
    private _addFacetsLabels;
    private _addFacetsOptions;
    private _normalizeItems;
    private _sidebarStickyControl;
}
