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
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || '';
                    _this.listenRoute();
                    _this.loadNavigation(_this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
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
                case 'aw-linked-objects.pagination':
                    _this.dataSource.currentPage = payload.split('-')[1];
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + _this.route.snapshot.params.id + "/oggetti-collegati/" + payload.split('-')[1]]
                    });
                    break;
                case 'aw-linked-objects.goto':
                    /** @type {?} */
                    var targetPage = Number(payload.replace('goto-', ''))
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    ;
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    break;
                case 'aw-linked-objects.change':
                    _this.dataSource.pageSize = payload;
                    _this.listenRoute(); // reloads the page content with the new page size
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId + "/overview"]
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
    AwEntitaLayoutEH.prototype.listenRoute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * Listens to routing events of this layout.
         */
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // look for id
            if (params.get('id')) {
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
                        res['connectedEntities'] = res.entities;
                        /** @type {?} */
                        var connectedEntities = { source: res };
                        if (_this.dataSource.bubblesEnabled) {
                            _this.emitOuter('filterbubbleresponse', connectedEntities);
                        }
                    }
                }));
            }
            else {
                _this.dataSource.loadItem();
            }
        }));
    };
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.loadNavigation = /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        var _this = this;
        console.log('LOAD NAVIGATION');
        this.dataSource.getNavigation(selectedItem).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                _this.dataSource.updateWidgets(response);
            }
            if (selectedItem) {
                _this.emitOuter('selectItem', selectedItem);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQXNDLDRDQUFZO0lBQWxEO1FBQUEscUVBa0lDO1FBaklTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBaUluRCxDQUFDO0lBN0hDLCtCQUErQjs7Ozs7SUFFeEIsaUNBQU07Ozs7O0lBQWI7UUFBQSxpQkFvRkM7UUFuRkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3BFLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGNB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SSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDNUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUFsSUQsQ0FBc0MsWUFBWSxHQWtJakQ7Ozs7Ozs7SUFqSUMsc0NBQWlEOzs7OztJQUNqRCx5Q0FBMkI7Ozs7O0lBQzNCLGlDQUFtQjs7Ozs7SUFDbkIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuICAvLyBwcml2YXRlIHNlbGVjdGVkVGFiOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgXCJcIjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlIHx8ICcnO1xuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHRoaXMuZW50aXR5SWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LnNob3dtb3JlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUlkXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZSggcGF5bG9hZCApXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5SWRcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLnBhZ2luYXRpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBheWxvYWQuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7cGF5bG9hZC5zcGxpdCgnLScpWzFdfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZ290byc6XG4gICAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSBOdW1iZXIocGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKSlcbiAgICAgICAgICAvLyB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgLy8gICBwYXRoOiBbYGF3L2VudGl0YS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RhcmdldFBhZ2V9YF1cbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpIC8vIHJlbG9hZHMgdGhlIHBhZ2UgY29udGVudCB3aXRoIHRoZSBuZXcgcGFnZSBzaXplXG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgICAgaWYoIXBheWxvYWQgfHwgIXBheWxvYWQuZW50aXR5SWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYGF3L2VudGl0YS8ke3BheWxvYWQuZW50aXR5SWR9L292ZXJ2aWV3YF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgLyoqXG4gICAgICogTGlzdGVucyB0byByb3V0aW5nIGV2ZW50cyBvZiB0aGlzIGxheW91dC5cbiAgICAgKi9cbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gbG9vayBmb3IgaWRcbiAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCd0YWInKSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgICAgICAgICAgIHJlc1snY29ubmVjdGVkRW50aXRpZXMnXSA9cmVzLmVudGl0aWVzXG4gICAgICAgICAgICBsZXQgY29ubmVjdGVkRW50aXRpZXMgPSB7c291cmNlOiByZXN9O1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCApIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY29ubmVjdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ0xPQUQgTkFWSUdBVElPTicpXG4gICAgdGhpcy5kYXRhU291cmNlLmdldE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==