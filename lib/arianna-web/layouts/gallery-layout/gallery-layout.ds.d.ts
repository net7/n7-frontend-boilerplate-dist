import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { Observable, BehaviorSubject } from 'rxjs';
export declare class AwGalleryLayoutDS extends LayoutDataSource {
    private destroyed$;
    private communication;
    private configuration;
    private mainState;
    private search;
    private searchModel;
    private prettifyLabels;
    private configKeys;
    private fallback;
    private resetButtonEnabled;
    pageTitle: string;
    resultsTitle: string;
    totalCount: number;
    currentPage: any;
    pageSize: number;
    sidebarIsSticky: boolean;
    isFirstLoading: boolean;
    resultsLoading: boolean;
    /** True when the user has input a text string */
    isSearchingText: BehaviorSubject<boolean>;
    /** Current order method */
    orderBy: string;
    /** Current order direction */
    orderDirection: string;
    options: any;
    orderByLabel: string;
    orderByOptions: any;
    onInit({ configuration, mainState, options, communication, search, }: {
        configuration: any;
        mainState: any;
        options: any;
        communication: any;
        search: any;
    }): void;
    onDestroy(): void;
    onSearchResponse(): void;
    /**
    * Handles changes of the HTMLSelect order control
    * @param payload _score_DESC, label_sort_ASC, label_sort_DESC
    */
    onOrderByChange(payload: any): void;
    onPageSizeChange(size: any): Observable<boolean>;
    onPaginationChange(payload: any): Observable<boolean>;
    onPaginationGoToChange(payload: any): Observable<boolean>;
    drawPagination: () => void;
    resetPagination(): void;
    onResultsLimitChange(payload: any): void;
    setLimit(payload: any): void;
    getSearchModelId: () => string;
    doSearchRequest$(): Observable<any>;
    private _updateSearchPage;
    private _addFacetsLabels;
    private _addFacetsOptions;
    private _normalizeItems;
    private _sidebarStickyControl;
    private _getPaginationParams;
}
