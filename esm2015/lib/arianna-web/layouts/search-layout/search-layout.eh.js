/**
 * @fileoverview added by tsickle
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
                    this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    this.dataSource.onOrderByChange(payload);
                    this.facetsChange$.next();
                    break;
                case 'aw-search-layout.searchreset':
                    this.dataSource.resetButtonEnabled = false;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get('paths').searchBasePath]
                    });
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
                case 'aw-linked-objects.pagination':
                    this.dataSource.onPaginationChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    changed => {
                        if (changed) {
                            this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.change':
                    this.dataSource.onResultsLimitChange(payload);
                    this.facetsChange$.next();
                    break;
                case 'aw-linked-objects.goto':
                    this.dataSource.onPaginationGoToChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    changed => {
                        if (changed) {
                            this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.dataSource.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id]
                    });
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
            this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            () => {
                this.dataSource.onSearchResponse();
                this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
            }));
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
        params => {
            this.emitOuter('queryparamschange', params);
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
    AwSearchLayoutEH.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWtHdEQsQ0FBQzs7OztJQS9GUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVB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QUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN4RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7Ozs7OztJQXBHQyxzQ0FBaUQ7Ozs7O0lBQ2pELGlDQUFtQjs7Ozs7SUFDbkIseUNBQW9EOzs7OztJQUNwRCx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0Lm9yZGVyYnljaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhzZWFyY2gpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5wYWdpbmF0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpLnN1YnNjcmliZShjaGFuZ2VkID0+IHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5nb3RvJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKS5zdWJzY3JpYmUoY2hhbmdlZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNsaWNrJzpcbiAgICAgICAgICBjb25zdCBwYXRocyA9IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbcGF5bG9hZC50eXBlID09IHVuZGVmaW5lZCA/IHBhdGhzLnNjaGVkYUJhc2VQYXRoIDogcGF0aHMuZW50aXRhQmFzZVBhdGgsIHBheWxvYWQuaWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=