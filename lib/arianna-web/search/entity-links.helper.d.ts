import { Subject } from 'rxjs';
declare const _default: {
    paginationState: any;
    paginate$: Subject<unknown>;
    listenToChanges(dataSource: any): import("rxjs").Observable<unknown>;
    onFacetsResponse(searchModel: any, facets: any): void;
    initPagination(searchModel: any): void;
    updateParamsOffset(params: any): void;
    resetOffset(): void;
    addInitialLoader(dataSource: any): void;
};
export default _default;
