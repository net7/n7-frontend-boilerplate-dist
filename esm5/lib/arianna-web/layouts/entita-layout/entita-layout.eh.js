/**
 * @fileoverview added by tsickle
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
                        console.log('filter bubble response', { payload: payload });
                        _this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                        //this.dataSource.updateBubbes(payload);
                    }
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    var paths = _this.configuration.get('paths');
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [paths.schedaBasePath, payload]
                    });
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
                        // remove the entity of this page
                        /** @type {?} */
                        var entities = res.relatedEntities.filter((/**
                         * @param {?} entity
                         * @return {?}
                         */
                        function (entity) { return entity.id !== params.get('id'); }));
                        _this.emitOuter('filterbubbleresponse', entities);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQXNDLDRDQUFZO0lBQWxEO1FBQUEscUVBNklDO1FBNUlTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBNEluRCxDQUFDO0lBeElDLCtCQUErQjs7Ozs7SUFFeEIsaUNBQU07Ozs7O0lBQWI7UUFBQSxpQkF3R0M7UUF2R0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBQ25FLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFD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QkFDMUUsOERBQThEO2dCQUM5RCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsR0FBRztvQkFDekUsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs0QkFFN0IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTTs7Ozt3QkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBOUIsQ0FBOEIsRUFBQzt3QkFDbkYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFFakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25DLElBQUksWUFBWSxFQUFFOzRCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkFDNUM7cUJBQ0Y7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBN0lELENBQXNDLFlBQVksR0E2SWpEOzs7Ozs7O0lBNUlDLHNDQUFpRDs7Ozs7SUFDakQseUNBQTJCOzs7OztJQUMzQixpQ0FBbUI7Ozs7O0lBQ25CLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG4gIHByaXZhdGUgZW50aXR5SWQ6IHN0cmluZztcbiAgLy8gcHJpdmF0ZSBzZWxlY3RlZFRhYjogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8IFwiXCI7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZSB8fCAxO1xuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgLy90aGlzLmxvYWROYXZpZ2F0aW9uKHRoaXMuZW50aXR5SWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LnNob3dtb3JlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUlkXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMucGFnaW5hdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGF5bG9hZC5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlTmF2aWdhdGlvbigpXG4gICAgICAgICAgLyp0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYGF3L2VudGl0YS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3BheWxvYWQuc3BsaXQoJy0nKVsxXX1gXVxuICAgICAgICAgIH0pOyovXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZ290byc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gTnVtYmVyKHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJykpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VOYXZpZ2F0aW9uKClcbiAgICAgICAgICAvLyB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgLy8gICBwYXRoOiBbYGF3L2VudGl0YS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RhcmdldFBhZ2V9YF1cbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOiAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IDEgLy8gcmVzZXQgcGFnZVxuICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmRhdGFTb3VyY2UuY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgICBzaXplOiB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUsXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAnYXctbGlua2VkLW9iamVjdHMnLFxuICAgICAgICAgICAgeyBpdGVtczogdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0sXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgKVxuICAgICAgICAvLyB0aGlzLmxpc3RlblJvdXRlKFwiXCIsIHRydWUpIC8vIHJlbG9hZHMgdGhlIHBhZ2UgY29udGVudCB3aXRoIHRoZSBuZXcgcGFnZSBzaXplXG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH1gXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLWZpbHRlcmVkJzpcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09IFwib3ZlcnZpZXdcIiB8fCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT0gXCJlbnRpdGEtY29sbGVnYXRlXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXIgYnViYmxlIHJlc3BvbnNlJywge3BheWxvYWR9KVxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcGF5bG9hZC5yZWxhdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgLy90aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmVzKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbcGF0aHMuc2NoZWRhQmFzZVBhdGgsIHBheWxvYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gcm91dGluZyBldmVudHMgb2YgdGhpcyBsYXlvdXQuXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblJvdXRlKHNlbGVjdGVkSXRlbSA9IFwiXCIsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gbG9vayBmb3IgaWRcbiAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID09IHBhcmFtcy5nZXQoJ2lkJykgJiYgIWZvcmNlUmVsb2FkKSByZXR1cm47XG4gICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCd0YWInKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlcyk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVudGl0eSBvZiB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGxldCBlbnRpdGllcyA9IHJlcy5yZWxhdGVkRW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuaWQgIT09IHBhcmFtcy5nZXQoJ2lkJykpXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBlbnRpdGllcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVXaWRnZXRzKHJlcyk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=