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
                    /** @type {?} */
                    var paramId = _this.route.snapshot.params.id || "";
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || '';
                    _this.listenRoute();
                    _this.loadNavigation(paramId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
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
                        _this.emitGlobal('navigate', {
                            path: [
                                _this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    _this.route.snapshot.params.id
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
        /**
         * Fetches the content for this page, based on the URL.
         *
         * @param selectItem - item to get from the communication provider
         */
        this.dataSource.getNavigation('entita').subscribe((/**
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQXNDLDRDQUFZO0lBQWxEO1FBQUEscUVBdUdDO1FBdEdTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBc0duRCxDQUFDOzs7O0lBbEdRLGlDQUFNOzs7SUFBYjtRQUFBLGlCQTREQztRQTNEQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDOzt3QkFDdkIsT0FBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRTtvQkFDakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3BFLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0Is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LGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ3pELElBQUksUUFBUSxFQUFFO2dCQUNaLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBdkdELENBQXNDLFlBQVksR0F1R2pEOzs7Ozs7O0lBdEdDLHNDQUFpRDs7Ozs7SUFDakQseUNBQTJCOzs7OztJQUMzQixpQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgbGV0IHBhcmFtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCBcIlwiO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnBhZ2UgfHwgJyc7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb24ocGFyYW1JZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLW5hdi5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7IFxuICAgICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLnBhZ2luYXRpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBheWxvYWQuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7cGF5bG9hZC5zcGxpdCgnLScpWzFdfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZ290byc6XG4gICAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSBOdW1iZXIocGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKSlcbiAgICAgICAgICAvLyB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgLy8gICBwYXRoOiBbYGF3L2VudGl0YS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RhcmdldFBhZ2V9YF1cbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpIC8vIHJlbG9hZHMgdGhlIHBhZ2UgY29udGVudCB3aXRoIHRoZSBuZXcgcGFnZSBzaXplXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxuICAgICAqL1xuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAvLyBsb29rIGZvciBpZFxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcbiAgICAgICAgLy8gZ2V0IGl0ZW0gZnJvbSByZXNwb25zZSB3aXRoIGlkID09PSBpZCBhbmQgcmV0dXJuIGFzIHByb21pc2VcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtcy5nZXQoJ2lkJyksIHBhcmFtcy5nZXQoJ3RhYicpKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgY29udGVudCBmb3IgdGhpcyBwYWdlLCBiYXNlZCBvbiB0aGUgVVJMLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBzZWxlY3RJdGVtIC0gaXRlbSB0byBnZXQgZnJvbSB0aGUgY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqL1xuICAgIHRoaXMuZGF0YVNvdXJjZS5nZXROYXZpZ2F0aW9uKCdlbnRpdGEnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==