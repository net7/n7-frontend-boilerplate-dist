/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var AwEntitaLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutDS, _super);
    function AwEntitaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myResponse = {}; // backend response object
        // selected nav item
        _this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /*
          Requests data from communication provider
         */
        return this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { entityId: id }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateWidgets = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
          Updates the widgets on this layout, based on route
        */
        this.one('aw-entita-nav').update('some data');
    };
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    function (id, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { entityId: id }
            });
        }
        else {
            this.pageTitle = 'Entità Test';
        }
    };
    /**
     * @param {?} res
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadContent = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        console.log('Apollo responded with: ', { res: res });
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.entity.typeOfEntity.configKey].icon,
            text: this.myResponse.entity.label
        };
        switch (this.selectedTab) { // make dynamic content depending on request
            case 'overview':
                {
                    this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                    this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                    this.one('aw-linked-objects').updateOptions({ size: 3, configKeys: this.configuration.get("config-keys") });
                    this.one('aw-linked-objects').update(res.items);
                }
                break;
            case 'campi':
                {
                    this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                    this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                }
                break;
            case 'oggetti-collegati':
                {
                    this.one('aw-linked-objects').updateOptions({
                        context: this.selectedTab,
                        configKeys: this.configuration.get("config-keys"),
                        page: this.currentPage,
                        size: this.pageSize,
                    });
                    this.one('aw-linked-objects').update(res.items);
                }
                break;
            case 'entita-collegate':
                {
                    // entita
                }
                break;
            case 'maxxi':
                {
                    // maxxi
                }
                break;
            case 'wiki':
                {
                    // wiki
                }
                break;
            default:
                // the url is aw/entita/something/ ??? → unknown
                console.warn('Unhandled navigation page');
                break;
        }
    };
    return AwEntitaLayoutDS;
}(LayoutDataSource));
export { AwEntitaLayoutDS };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.titleService;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.myResponse;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.selectedTab;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.navHeader;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQTZHQztRQXBHUSxnQkFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjs7UUFFaEQsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFHaEQsY0FBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7SUErRjNELENBQUM7Ozs7O0lBM0ZDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUEwRTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBTyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBUyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBVSxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBSSxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsRUFBRTtRQUNkOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtZQUNyRCxPQUFPOzs7O1lBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixD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QVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUNwQixDQUFDLENBQUE7b0JBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pEO2dCQUFDLE1BQU07WUFFUixLQUFLLGtCQUFrQjtnQkFBRTtvQkFDdkIsU0FBUztpQkFDVjtnQkFBQyxNQUFNO1lBRVIsS0FBSyxPQUFPO2dCQUFFO29CQUNaLFFBQVE7aUJBQ1Q7Z0JBQUMsTUFBTTtZQUVSLEtBQUssTUFBTTtnQkFBRTtvQkFDWCxPQUFPO2lCQUNSO2dCQUFDLE1BQU07WUFFUjtnQkFDRSxnREFBZ0Q7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTdHRCxDQUFzQyxnQkFBZ0IsR0E2R3JEOzs7Ozs7O0lBNUdDLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlCOzs7OztJQUN6QixrQ0FBc0I7Ozs7O0lBQ3RCLHdDQUE0Qjs7SUFFNUIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBRXpCLHNDQUE0Qjs7SUFDNUIsdUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsdUNBQXdCOztJQUN4QixvQ0FBNkI7Ozs7O0lBRTdCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnk7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbiB9KSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlICAgICA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyICAgICAgICA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSAgPSB0aXRsZVNlcnZpY2U7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgLypcbiAgICAgIFJlcXVlc3RzIGRhdGEgZnJvbSBjb21tdW5pY2F0aW9uIHByb3ZpZGVyXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICAgKi9cbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSggJ3NvbWUgZGF0YScgKVxuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHRhYikge1xuICAgIC8qXG4gICAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgICovXG4gICAgaWYgKGlkICYmIHRhYikgeyBcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYiAvLyBzdG9yZSBzZWxlY3RlZCB0YWIgZnJvbSB1cmxcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHtlbnRpdHlJZDogaWR9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCdcbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICBjb25zb2xlLmxvZygnQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCB7cmVzfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLmVudGl0eS50eXBlT2ZFbnRpdHkuY29uZmlnS2V5XS5pY29uLFxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmVudGl0eS5sYWJlbFxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRUYWIpIHsgLy8gbWFrZSBkeW5hbWljIGNvbnRlbnQgZGVwZW5kaW5nIG9uIHJlcXVlc3RcbiAgICAgIGNhc2UgJ292ZXJ2aWV3Jzoge1xuICAgICAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZShyZXMuZmllbGRzVGFiKTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IHNpemU6IDMsIGNvbmZpZ0tleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKSB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzLml0ZW1zKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBcbiAgICAgIGNhc2UgJ2NhbXBpJzoge1xuICAgICAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZShyZXMuZmllbGRzVGFiKTtcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29nZ2V0dGktY29sbGVnYXRpJzoge1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICAgICAgY29uZmlnS2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlcy5pdGVtcyk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdlbnRpdGEtY29sbGVnYXRlJzoge1xuICAgICAgICAvLyBlbnRpdGFcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21heHhpJzoge1xuICAgICAgICAvLyBtYXh4aVxuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnd2lraSc6IHtcbiAgICAgICAgLy8gd2lraVxuICAgICAgfSBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdGhlIHVybCBpcyBhdy9lbnRpdGEvc29tZXRoaW5nLyA/Pz8g4oaSIHVua25vd25cbiAgICAgICAgY29uc29sZS53YXJuKCdVbmhhbmRsZWQgbmF2aWdhdGlvbiBwYWdlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufSJdfQ==