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
        _this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            /*
              Updates selected tab on tab change
            */
            _this.selectedTab = tab;
            _this.updateWidgets(_this.myResponse);
        });
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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
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
        /** @type {?} */
        var selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data: data, selected: selected });
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
            text: this.myResponse.entity.label,
            color: this.myResponse.entity.typeOfEntity.configKey
        };
        switch (this.selectedTab) { // make dynamic content depending on request
            case 'overview':
                {
                    this.one('aw-bubble-chart').updateOptions({
                        context: 'scheda',
                        configKeys: this.configuration.get("config-keys"),
                        bubbleContainerId: 'overviewBubbleChartContainer',
                        containerId: 'bubble-chart-container-overview',
                    });
                    this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                    this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                    this.one('aw-linked-objects').updateOptions({ size: 3, config: this.configuration, context: 'entita' });
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
                        config: this.configuration,
                        page: this.currentPage,
                        size: this.pageSize,
                    });
                    this.one('aw-linked-objects').update(res.items);
                }
                break;
            case 'entita-collegate':
                {
                    this.one('aw-bubble-chart').updateOptions({
                        context: 'scheda',
                        configKeys: this.configuration.get("config-keys"),
                        bubbleContainerId: 'bubbleChartContainer',
                        containerId: 'bubble-chart-container',
                    });
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
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesEnabled;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQXFJQztRQTVIUSxnQkFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjs7UUFFaEQsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFHaEQsY0FBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQTBCekQscUJBQWU7Ozs7UUFBRyxVQUFBLEdBQUc7WUFDbkI7O2NBRUU7WUFDRixLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQTtZQUN0QixLQUFJLENBQUMsYUFBYSxDQUFFLEtBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQTtRQUN2QyxDQUFDLEVBQUE7O0lBdUZILENBQUM7Ozs7O0lBbEhDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUEwRTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBTyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBUyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBVSxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBSSxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFB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LE9BQU8sRUFBRSxRQUFRO3dCQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO3dCQUNqRCxpQkFBaUIsRUFBRSxzQkFBc0I7d0JBQ3pDLFdBQVcsRUFBRSx3QkFBd0I7cUJBQ3RDLENBQUMsQ0FBQztpQkFDSjtnQkFBQyxNQUFNO1lBRVIsS0FBSyxPQUFPO2dCQUFFO29CQUNaLFFBQVE7aUJBQ1Q7Z0JBQUMsTUFBTTtZQUVSLEtBQUssTUFBTTtnQkFBRTtvQkFDWCxPQUFPO2lCQUNSO2dCQUFDLE1BQU07WUFFUjtnQkFDRSxnREFBZ0Q7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXJJRCxDQUFzQyxnQkFBZ0IsR0FxSXJEOzs7Ozs7O0lBcElDLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlCOzs7OztJQUN6QixrQ0FBc0I7Ozs7O0lBQ3RCLHdDQUE0Qjs7SUFFNUIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBRXpCLHNDQUE0Qjs7SUFDNUIsdUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsdUNBQXdCOztJQUN4QixvQ0FBNkI7O0lBQzdCLDBDQUErQjs7Ozs7SUFFL0IseUNBQTJCOztJQXVCM0IsMkNBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgbXlSZXNwb25zZTogYW55ID0ge307IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxuICBwdWJsaWMgbmF2SGVhZGVyOiBhbnkgPSB7fTsgLy8gbmF2LWhlYWRlciAoY3VzdG9tKSBkYXRhXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55OyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbiB9KSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlICAgICA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyICAgICAgICA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSAgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuXG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgLypcbiAgICAgIFJlcXVlc3RzIGRhdGEgZnJvbSBjb21tdW5pY2F0aW9uIHByb3ZpZGVyXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gdGFiID0+IHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxuICAgICovXG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYlxuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyggdGhpcy5teVJlc3BvbnNlIClcbiAgfVxuXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIC8qXG4gICAgICBVcGRhdGVzIHRoZSB3aWRnZXRzIG9uIHRoaXMgbGF5b3V0LCBiYXNlZCBvbiByb3V0ZVxuICAgICovXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoIHsgZGF0YSwgc2VsZWN0ZWQgfSApXG4gIH1cblxuICBsb2FkSXRlbShpZCwgdGFiKSB7XG4gICAgLypcbiAgICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICAgKi9cbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkIC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7ZW50aXR5SWQ6IGlkfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgY29uc29sZS5sb2coJ0Fwb2xsbyByZXNwb25kZWQgd2l0aDogJywge3Jlc30pXG4gICAgdGhpcy5teVJlc3BvbnNlID0gcmVzXG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxuICAgICAgaWNvbjogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW3RoaXMubXlSZXNwb25zZS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV0uaWNvbixcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5lbnRpdHkubGFiZWwsXG4gICAgICBjb2xvcjogdGhpcy5teVJlc3BvbnNlLmVudGl0eS50eXBlT2ZFbnRpdHkuY29uZmlnS2V5XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFRhYikgeyAvLyBtYWtlIGR5bmFtaWMgY29udGVudCBkZXBlbmRpbmcgb24gcmVxdWVzdFxuICAgICAgY2FzZSAnb3ZlcnZpZXcnOiB7XG4gICAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2NoZWRhJyxcbiAgICAgICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICAgICAgYnViYmxlQ29udGFpbmVySWQ6ICdvdmVydmlld0J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgICAgICBjb250YWluZXJJZDogJ2J1YmJsZS1jaGFydC1jb250YWluZXItb3ZlcnZpZXcnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkc1RhYik7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBzaXplOiAzLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgY29udGV4dDogJ2VudGl0YScgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlcy5pdGVtcyk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdjYW1waSc6IHtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkc1RhYik7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdvZ2dldHRpLWNvbGxlZ2F0aSc6IHtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzLml0ZW1zKTtcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VudGl0YS1jb2xsZWdhdGUnOiB7XG4gICAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2NoZWRhJyxcbiAgICAgICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICAgICAgYnViYmxlQ29udGFpbmVySWQ6ICdidWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICAgICAgY29udGFpbmVySWQ6ICdidWJibGUtY2hhcnQtY29udGFpbmVyJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdtYXh4aSc6IHtcbiAgICAgICAgLy8gbWF4eGlcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3dpa2knOiB7XG4gICAgICAgIC8vIHdpa2lcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRoZSB1cmwgaXMgYXcvZW50aXRhL3NvbWV0aGluZy8gPz8/IOKGkiB1bmtub3duXG4gICAgICAgIGNvbnNvbGUud2FybignVW5oYW5kbGVkIG5hdmlnYXRpb24gcGFnZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn0iXX0=