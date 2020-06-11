/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import helpers from '../../../common/helpers';
var AwEntitaLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutEH, _super);
    function AwEntitaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.handlePageSizeChange = (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            _this.dataSource.pageSize = v;
            _this.dataSource.handleNavUpdate('oggetti-collegati');
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listen = /**
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
                case 'aw-entita-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.configuration = payload.configuration;
                    _this.route = payload.route;
                    _this.entityId = _this.route.snapshot.params.id || '';
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || 1;
                    _this.listenRoute(_this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                default:
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
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    _this.emitOuter('d3end', payload);
                    break;
                case 'aw-entita-nav.click':
                    if (payload) {
                        _this.dataSource.selectedTab = payload;
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.change':
                    { // changed page size value (pagination)
                        _this.dataSource.pageSize = payload;
                        _this.dataSource.currentPage = 1; // reset page
                        // reset page
                        /** @type {?} */
                        var options = {
                            context: _this.dataSource.selectedTab,
                            config: _this.dataSource.configuration,
                            page: _this.dataSource.currentPage,
                            pagination: true,
                            size: _this.dataSource.pageSize,
                        };
                        _this.dataSource.updateComponent('aw-linked-objects', { items: _this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    {
                        var id = payload.id, label = payload.label;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [
                                _this.configuration.get('paths').entitaBasePath,
                                id,
                                helpers.slugify(label),
                                'overview',
                            ],
                        });
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (_this.dataSource.selectedTab === 'overview' || _this.dataSource.selectedTab === 'entita-collegate') {
                        _this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                    }
                    break;
                case 'n7-smart-pagination.change':
                    _this.handlePageSizeChange(payload.value);
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * Listens to routing events of this layout.
     */
    /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listenRoute = /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    function (selectedItem, forceReload) {
        var _this = this;
        if (selectedItem === void 0) { selectedItem = ''; }
        if (forceReload === void 0) { forceReload = false; }
        // listen for "page" query param changes
        this.route.queryParams.pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return params.page; }))).subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.dataSource.currentPage !== page) {
                _this.dataSource.currentPage = page;
                _this.dataSource.handlePageNavigation();
            }
        }));
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // look for id
            if (params.get('id')) {
                if (_this.dataSource.currentId === params.get('id') && !forceReload) {
                    if (_this.dataSource.selectedTab !== params.get('tab')) {
                        _this.dataSource.handleNavUpdate(params.get('tab'));
                    }
                    return;
                }
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
                        // remove the entity of this page
                        /** @type {?} */
                        var entities = res.relatedEntities.filter((/**
                         * @param {?} entity
                         * @return {?}
                         */
                        function (entity) { return entity.id !== params.get('id'); }));
                        _this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            _this.emitOuter('selectItem', selectedItem);
                        }
                        _this.emitOuter('filterbubbleresponse', entities);
                    }
                }));
            }
            else {
                _this.dataSource.loadItem();
            }
        }));
    };
    return AwEntitaLayoutEH;
}(EventHandler));
export { AwEntitaLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.entityId;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.handlePageSizeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFzQyw0Q0FBWTtJQUFsRDtRQUFBLHFFQXdJQztRQXZJUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBd0Z6QywwQkFBb0I7Ozs7UUFBRyxVQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFBOztJQTRDSCxDQUFDOzs7O0lBL0hRLGlDQUFNOzs7SUFBYjtRQUFBLGlCQThFQztRQTdFQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLEtB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eyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgJyc7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZSB8fCAxO1xuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuc2hvd21vcmUnOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IC8vIGJvdW5jZSB0aGUgZXZlbnQsIGZyb20gYnViYmxlLWNoYXJ0IHRvIGNoYXJ0LXRpcHB5XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IHsgLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSAxOyAvLyByZXNldCBwYWdlXG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5kYXRhU291cmNlLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICdhdy1saW5rZWQtb2JqZWN0cycsXG4gICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLmRhdGFTb3VyY2UubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGxhYmVsKSxcbiAgICAgICAgICAgICAgJ292ZXJ2aWV3JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtZmlsdGVyZWQnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT09ICdvdmVydmlldycgfHwgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09PSAnZW50aXRhLWNvbGxlZ2F0ZScpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHBheWxvYWQucmVsYXRlZEVudGl0aWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2VTaXplQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9ICh2KSA9PiB7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gdjtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKCdvZ2dldHRpLWNvbGxlZ2F0aScpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gcm91dGluZyBldmVudHMgb2YgdGhpcyBsYXlvdXQuXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblJvdXRlKHNlbGVjdGVkSXRlbSA9ICcnLCBmb3JjZVJlbG9hZCA9IGZhbHNlKSB7XG4gICAgLy8gbGlzdGVuIGZvciBcInBhZ2VcIiBxdWVyeSBwYXJhbSBjaGFuZ2VzXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgbWFwKChwYXJhbXM6IGFueSkgPT4gcGFyYW1zLnBhZ2UpLFxuICAgICkuc3Vic2NyaWJlKChwYWdlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlICE9PSBwYWdlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIC8vIGxvb2sgZm9yIGlkXG4gICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PT0gcGFyYW1zLmdldCgnaWQnKSAmJiAhZm9yY2VSZWxvYWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiICE9PSBwYXJhbXMuZ2V0KCd0YWInKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXJhbXMuZ2V0KCd0YWInKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSwgcGFyYW1zLmdldCgnc2x1ZycpLCBwYXJhbXMuZ2V0KCd0YWInKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlcyk7XG4gICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50aXR5IG9mIHRoaXMgcGFnZVxuICAgICAgICAgICAgICBjb25zdCBlbnRpdGllcyA9IHJlcy5yZWxhdGVkRW50aXRpZXMuZmlsdGVyKChlbnRpdHkpID0+IGVudGl0eS5pZCAhPT0gcGFyYW1zLmdldCgnaWQnKSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVXaWRnZXRzKHJlcyk7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgZW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==