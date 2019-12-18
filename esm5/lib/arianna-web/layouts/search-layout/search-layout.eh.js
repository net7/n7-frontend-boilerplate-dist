/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
var AwSearchLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutEH, _super);
    function AwSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.facetsChange$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwSearchLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-search-layout.init':
                    _this.route = payload.route;
                    _this.configuration = payload.configuration;
                    _this.dataSource.onInit(payload);
                    _this._listenToFacetsChange();
                    _this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    _this.dataSource.onOrderByChange(payload);
                    _this.facetsChange$.next();
                    break;
                case 'aw-search-layout.searchreset':
                    _this.dataSource.resetButtonEnabled = false;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get('paths').searchBasePath]
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facetschange':
                    _this.dataSource.resetPagination();
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.onPaginationChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed) {
                            _this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.change':
                    _this.dataSource.onResultsLimitChange(payload);
                    _this.facetsChange$.next();
                    break;
                case 'aw-linked-objects.goto':
                    _this.dataSource.onPaginationGoToChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed) {
                            _this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    var paths = _this.dataSource.configuration.get('paths');
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [paths.entitaBasePath, payload]
                    });
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutEH.prototype._listenToFacetsChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            function () {
                _this.dataSource.onSearchResponse();
                _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutEH.prototype._listenToRouterChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.emitOuter('queryparamschange', params);
            _this.facetsChange$.next();
        }));
    };
    return AwSearchLayoutEH;
}(EventHandler));
export { AwSearchLayoutEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUFxR0M7UUFwR1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQWtHdEQsQ0FBQzs7OztJQS9GUSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkF5RUM7UUF4RUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QixLQUFJLENBQUMsVUFB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TyxpREFBc0I7Ozs7SUFBOUI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUFyR0QsQ0FBc0MsWUFBWSxHQXFHakQ7Ozs7Ozs7SUFwR0Msc0NBQWlEOzs7OztJQUNqRCxpQ0FBbUI7Ozs7O0lBQ25CLHlDQUFvRDs7Ozs7SUFDcEQseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG4gIHByaXZhdGUgZmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5vcmRlcmJ5Y2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0QnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoc2VhcmNoKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRzY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMucGFnaW5hdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShwYXlsb2FkKS5zdWJzY3JpYmUoY2hhbmdlZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZ290byc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCkuc3Vic2NyaWJlKGNoYW5nZWQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgY29uc3QgcGF0aHMgPSB0aGlzLmRhdGFTb3VyY2UuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3BhdGhzLmVudGl0YUJhc2VQYXRoLCBwYXlsb2FkXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9GYWNldHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5mYWNldHNDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uU2VhcmNoUmVzcG9uc2UoKTtcbiAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3F1ZXJ5cGFyYW1zY2hhbmdlJywgcGFyYW1zKTtcbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19