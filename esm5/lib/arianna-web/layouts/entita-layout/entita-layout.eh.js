/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import helpers from '../../../common/helpers';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    // private selectedTab: string;
    // private selectedTab: string;
    /**
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listen = 
    // private selectedTab: string;
    /**
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
                    _this.entityId = _this.route.snapshot.params.id || "";
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
                case 'aw-linked-objects.change': // changed page size value (pagination)
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
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    var id = payload.id, label = payload.label;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [
                            _this.configuration.get('paths').entitaBasePath,
                            id,
                            helpers.slugify(label),
                            'overview'
                        ]
                    });
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (_this.dataSource.selectedTab == "overview" || _this.dataSource.selectedTab == "entita-collegate") {
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
                _this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab')).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUFzSUM7UUFySVMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQXVGekMsMEJBQW9COzs7O1FBQUcsVUFBQSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3RELENBQUMsRUFBQTs7SUEyQ0gsQ0FBQztJQWpJQywrQkFBK0I7Ozs7O0lBRXhCLGlDQUFNOzs7OztJQUFiO1FBQUEsaUJBK0VDO1FBOUVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUks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YW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuICAvLyBwcml2YXRlIHNlbGVjdGVkVGFiOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgXCJcIjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlIHx8IDE7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSh0aGlzLmVudGl0eUlkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5zaG93bW9yZSc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gYm91bmNlIHRoZSBldmVudCwgZnJvbSBidWJibGUtY2hhcnQgdG8gY2hhcnQtdGlwcHlcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZDNlbmQnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbmF2LmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gMTsgLy8gcmVzZXQgcGFnZVxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAnYXctbGlua2VkLW9iamVjdHMnLFxuICAgICAgICAgICAgeyBpdGVtczogdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0sXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHsgaWQsIGxhYmVsIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtcbiAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGhlbHBlcnMuc2x1Z2lmeShsYWJlbCksXG4gICAgICAgICAgICAgICdvdmVydmlldydcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9PSBcIm92ZXJ2aWV3XCIgfHwgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09IFwiZW50aXRhLWNvbGxlZ2F0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBwYXlsb2FkLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVQYWdlU2l6ZUNoYW5nZShwYXlsb2FkLnZhbHVlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGFnZVNpemVDaGFuZ2UgPSB2ID0+IHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUgPSB2O1xuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUoJ29nZ2V0dGktY29sbGVnYXRpJylcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZShzZWxlY3RlZEl0ZW0gPSAnJywgZm9yY2VSZWxvYWQgPSBmYWxzZSkge1xuICAgIC8vIGxpc3RlbiBmb3IgXCJwYWdlXCIgcXVlcnkgcGFyYW0gY2hhbmdlc1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIG1hcCgocGFyYW1zOiBhbnkpID0+IHBhcmFtcy5wYWdlKVxuICAgICkuc3Vic2NyaWJlKHBhZ2UgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSAhPT0gcGFnZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gbG9vayBmb3IgaWRcbiAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID09PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgIT09IHBhcmFtcy5nZXQoJ3RhYicpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBhcmFtcy5nZXQoJ3RhYicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCdzbHVnJyksIHBhcmFtcy5nZXQoJ3RhYicpKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50aXR5IG9mIHRoaXMgcGFnZVxuICAgICAgICAgICAgY29uc3QgZW50aXRpZXMgPSByZXMucmVsYXRlZEVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdEl0ZW0nLCBzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgZW50aXRpZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==