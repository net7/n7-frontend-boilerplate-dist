/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var AwEntitaLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutEH, _super);
    function AwEntitaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
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
                    //this.loadNavigation(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        _this.dataSource.handleNavUpdate(payload);
                        _this.emitGlobal('navigate', {
                            path: [
                                _this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    _this.entityId
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
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
                case 'aw-entita-nav.click':
                    if (payload) {
                        _this.dataSource.selectedTab = payload;
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.currentPage = payload.split('-')[1];
                    _this.dataSource.handlePageNavigation();
                    /*this.emitGlobal('navigate', {
                      handler: 'router',
                      path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });*/
                    break;
                case 'aw-linked-objects.goto':
                    _this.dataSource.currentPage = Number(payload.replace('goto-', ''));
                    _this.dataSource.handlePageNavigation();
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
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
                // this.listenRoute("", true) // reloads the page content with the new page size
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId]
                    });
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (_this.dataSource.selectedTab == "overview" || _this.dataSource.selectedTab == "entita-collegate") {
                        payload.reload = true;
                        payload.reset = true;
                        _this.emitOuter('filterbubbleresponse', payload);
                        //this.dataSource.updateBubbes(payload);
                    }
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
        if (selectedItem === void 0) { selectedItem = ""; }
        if (forceReload === void 0) { forceReload = false; }
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // look for id
            if (params.get('id')) {
                if (_this.dataSource.currentId == params.get('id') && !forceReload)
                    return;
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
                        _this.dataSource.bubbleLoaded = false;
                        /** @type {?} */
                        var connectedEntities = {
                            source: res,
                            reload: false
                        };
                        _this.emitOuter('filterbubbleresponse', connectedEntities);
                        _this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            _this.emitOuter('selectItem', selectedItem);
                        }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFzQyw0Q0FBWTtJQUFsRDtRQUFBLHFFQTJJQztRQTFJUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQTBJbkQsQ0FBQztJQXRJQywrQkFBK0I7Ozs7O0lBRXhCLGlDQUFNOzs7OztJQUFiO1FBQUEsaUJBa0dDO1FBakdDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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QUM7d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzs7NEJBQ2pDLGlCQUFpQixHQUFHOzRCQUN0QixNQUFNLEVBQUUsR0FBRzs0QkFDWCxNQUFNLEVBQUUsS0FBSzt5QkFDZDt3QkFFRCxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDLENBQUM7d0JBRTFELEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLFlBQVksRUFBRTs0QkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7eUJBQzVDO3FCQUNGO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTNJRCxDQUFzQyxZQUFZLEdBMklqRDs7Ozs7OztJQTFJQyxzQ0FBaUQ7Ozs7O0lBQ2pELHlDQUEyQjs7Ozs7SUFDM0IsaUNBQW1COzs7OztJQUNuQixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XG4gIC8vIHByaXZhdGUgc2VsZWN0ZWRUYWI6IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCBcIlwiO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnBhZ2UgfHwgMTtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKHRoaXMuZW50aXR5SWQpO1xuICAgICAgICAgIC8vdGhpcy5sb2FkTmF2aWdhdGlvbih0aGlzLmVudGl0eUlkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5zaG93bW9yZSc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZClcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIHBhdGg6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuZW50aXRhQmFzZVBhdGhcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlJZFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbmF2LmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLnBhZ2luYXRpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBheWxvYWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKVxuICAgICAgICAgIC8qdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHtwYXlsb2FkLnNwbGl0KCctJylbMV19YF1cbiAgICAgICAgICB9KTsqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmdvdG8nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IE51bWJlcihwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlTmF2aWdhdGlvbigpXG4gICAgICAgICAgLy8gdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAvLyAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIC8vICAgcGF0aDogW2Bhdy9lbnRpdGEvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHt0YXJnZXRQYWdlfWBdXG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSAxIC8vIHJlc2V0IHBhZ2VcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5kYXRhU291cmNlLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplLFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgJ2F3LWxpbmtlZC1vYmplY3RzJyxcbiAgICAgICAgICAgIHsgaXRlbXM6IHRoaXMuZGF0YVNvdXJjZS5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgIClcbiAgICAgICAgLy8gdGhpcy5saXN0ZW5Sb3V0ZShcIlwiLCB0cnVlKSAvLyByZWxvYWRzIHRoZSBwYWdlIGNvbnRlbnQgd2l0aCB0aGUgbmV3IHBhZ2Ugc2l6ZVxuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuZW50aXR5SWQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYGF3L2VudGl0YS8ke3BheWxvYWQuZW50aXR5SWR9YF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9PSBcIm92ZXJ2aWV3XCIgfHwgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09IFwiZW50aXRhLWNvbGxlZ2F0ZVwiKSB7XG4gICAgICAgICAgICBwYXlsb2FkLnJlbG9hZCA9IHRydWU7XG4gICAgICAgICAgICBwYXlsb2FkLnJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHBheWxvYWQpO1xuICAgICAgICAgICAgLy90aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmVzKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZShzZWxlY3RlZEl0ZW0gPSBcIlwiLCBmb3JjZVJlbG9hZCA9IGZhbHNlKSB7XG4gICAgLy8gZ2V0IFVSTCBwYXJhbWV0ZXJzIHdpdGggYW5ndWxhcidzIHBhcmFtTWFwXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIC8vIGxvb2sgZm9yIGlkXG4gICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkgcmV0dXJuO1xuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSwgcGFyYW1zLmdldCgndGFiJykpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXMpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1YmJsZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGNvbm5lY3RlZEVudGl0aWVzID0ge1xuICAgICAgICAgICAgICBzb3VyY2U6IHJlcyxcbiAgICAgICAgICAgICAgcmVsb2FkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY29ubmVjdGVkRW50aXRpZXMpO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlV2lkZ2V0cyhyZXMpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19