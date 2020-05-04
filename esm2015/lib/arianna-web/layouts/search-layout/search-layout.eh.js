/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class AwSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.facetsChange$ = new Subject();
        this.aditionalParamsChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-search-layout.init':
                    this.route = payload.route;
                    this.configuration = payload.configuration;
                    this.dataSource.onInit(payload);
                    this._listenToFacetsChange();
                    this._listenToAditionalParamsChange();
                    this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    this.dataSource.onOrderByChange(payload);
                    this.aditionalParamsChange$.next();
                    break;
                case 'aw-search-layout.searchreset':
                    this.dataSource.resetButtonEnabled = false;
                    this.dataSource.searchModel.clear();
                    this.aditionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facetschange':
                    this.dataSource.resetPagination();
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.onResultsLimitChange(payload.value);
                    this.aditionalParamsChange$.next();
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToFacetsChange() {
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        () => {
            this.dataSource.resultsLoading = true;
            this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            () => {
                this.dataSource.resultsLoading = false;
                this.dataSource.onSearchResponse();
                this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToAditionalParamsChange() {
        this.aditionalParamsChange$.subscribe((/**
         * @return {?}
         */
        () => {
            const { searchModel } = this.dataSource;
            /** @type {?} */
            const requestParams = searchModel.getRequestParams();
            /** @type {?} */
            const queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => { queryParams[key] = queryParams[key] || null; }));
            // aditional params
            queryParams.orderby = this.dataSource.orderBy;
            queryParams.orderdirection = this.dataSource.orderDirection;
            queryParams.page = this.dataSource.currentPage;
            queryParams.limit = this.dataSource.pageSize;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToRouterChanges() {
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.emitOuter('queryparamschange', params);
            // aditional params control
            if (params.orderby && params.orderdirection) {
                this.dataSource.onOrderByChange(`${params.orderby}_${params.orderdirection}`);
            }
            if (params.page) {
                this.dataSource.onPaginationChange(`page-${params.page}`);
            }
            if (params.limit) {
                this.dataSource.setLimit(+params.limit);
            }
            this.facetsChange$.next();
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.facetsChange$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.aditionalParamsChange$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSXpDLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFNUMsMkJBQXNCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUE2Ry9ELENBQUM7Ozs7SUF6R1EsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29C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RDs7Ozs7SUFFakQsaUNBQW1COzs7OztJQUVuQix5Q0FBb0Q7Ozs7O0lBRXBELGtEQUE2RDs7Ozs7SUFFN0QseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwcml2YXRlIGZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBhZGl0aW9uYWxQYXJhbXNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9GYWNldHNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0FkaXRpb25hbFBhcmFtc0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5vcmRlcmJ5Y2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuYWRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0QnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhzZWFyY2gpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRzY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB0aGlzLmFkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZG9TZWFyY2hSZXF1ZXN0JCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvQWRpdGlvbmFsUGFyYW1zQ2hhbmdlKCkge1xuICAgIHRoaXMuYWRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBzZWFyY2hNb2RlbCB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcblxuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJieSA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckJ5O1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJEaXJlY3Rpb247XG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlO1xuICAgICAgcXVlcnlQYXJhbXMubGltaXQgPSB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemU7XG5cbiAgICAgIC8vIHJvdXRlciBzaWduYWxcbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtcyBjb250cm9sXG4gICAgICBpZiAocGFyYW1zLm9yZGVyYnkgJiYgcGFyYW1zLm9yZGVyZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoYCR7cGFyYW1zLm9yZGVyYnl9XyR7cGFyYW1zLm9yZGVyZGlyZWN0aW9ufWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5wYWdlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblBhZ2luYXRpb25DaGFuZ2UoYHBhZ2UtJHtwYXJhbXMucGFnZX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMubGltaXQpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExpbWl0KCtwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19