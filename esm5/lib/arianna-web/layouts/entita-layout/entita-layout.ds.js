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
        _this.myResponse = {}; // store response object
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
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.options = options;
        this.communication = communication;
        // this.communication.request$('getEntityDetails', {
        //   onError: (error) => console.log(error),
        //   params: { entityId: "test" }
        // }).subscribe((response) => {
        //   console.log('apollo-response', { response })
        // });
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
        /**
         * Requests data from communication provider
         *
         * @param id - the id of the item to get
         * @returns the response of getEntityDetails with entityId === id
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
        /**
         * Updates the widgets on this layout, based on route
         *
         * @param data - communication reponse object
         */
        /**
         * Updates the widgets on this layout, based on route
         *
         * \@param data - communication reponse object
         * @type {?}
         */
        var navigation = { items: [
                {
                    text: 'OVERVIEW',
                    payload: 'overview',
                },
                {
                    text: 'CAMPI',
                    payload: 'campi',
                },
                {
                    text: 'OGGETTI COLLEGATI',
                    payload: 'oggetti-collegati',
                },
                {
                    text: 'ENTITA COLLEGATE',
                    payload: 'entita-collegate',
                },
                {
                    text: 'MAXXI',
                    payload: 'maxxi',
                },
                {
                    text: 'WIKIPEDIA',
                    payload: 'wiki',
                },
            ],
            payload: 'entita-nav'
        };
        this.one('aw-entita-nav').update(navigation);
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
        /**
         * Loads the data for the selected nav item, into the adjacent text block.
         *
         * @param id - id of item to request
         * @param tab - selected nav tab
         */
        if (id && tab) {
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
        console.log('loadcontent-response: ', { res: res });
        this.myResponse = res;
        this.entityTitle = res.entity.label;
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
    AwEntitaLayoutDS.prototype.entityTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.selectedTab;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQTJHQztRQWxHUSxnQkFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLHdCQUF3Qjs7SUFrR3ZELENBQUM7Ozs7O0lBNUZDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUEwRTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsb0RBQW9EO1FBQ3BELDRDQUE0QztRQUM1QyxpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGlEQUFpRDtRQUNqRCxNQUFNO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsRUFBRTtRQUNkOzs7OztXQUtHO1FBQ0gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtZQUNyRCxPQUFPOzs7O1lBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFBO1lBQ3hDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7U0FDekIsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsSUFBSTtRQUNoQjs7OztXQUlHOzs7Ozs7O1lBRUcsVUFBVSxHQUFRLEVBQUUsS0FBSyxFQUFFO2dCQUMvQjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixPQUFPLEVBQUUsbUJBQW1CO2lCQUM3QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixPQUFPLEVBQUUsa0JBQWtCO2lCQUM1QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsT0FBTztpQkFDakI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU8sRUFBRSxNQUFNO2lCQUNoQjthQUNGO1lBQ0MsT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFFQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5QyxDQUFDOzs7Ozs7SUFFRCxtQ0FBUTs7Ozs7SUFBUixVQUFTLEVBQUUsRUFBRSxHQUFHO1FBQ2Q7Ozs7O1dBS0c7UUFDSCxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQSxDQUFDLDhCQUE4QjtZQUNyRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO2dCQUNyRCxPQUFPOzs7O2dCQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQTtnQkFDdEMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQzthQUN2QixDQUFDLENBQUE7U0FDSDthQUNJO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUE7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLEdBQUcsS0FBQSxFQUFDLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ3JDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUEzR0QsQ0FBc0MsZ0JBQWdCLEdBMkdyRDs7Ozs7OztJQTFHQyx5Q0FBNkI7Ozs7O0lBQzdCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0Qix3Q0FBNEI7O0lBRTVCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUV6QixzQ0FBNEI7O0lBQzVCLHVDQUEwQjs7SUFDMUIsdUNBQTBCOzs7OztJQUUxQix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgcHJvbWlzZSB9IGZyb20gJ3Byb3RyYWN0b3InO1xuaW1wb3J0IHsgSnNvbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICduNy1ib2lsZXJwbGF0ZS1saWIvbGliL2NvbW1vbi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gc3RvcmUgcmVzcG9uc2Ugb2JqZWN0XG4gIHB1YmxpYyBlbnRpdHlUaXRsZTpzdHJpbmc7IC8vIGVudGl0eSBoZWFkZXJcbiAgcHVibGljIHNlbGVjdGVkVGFiOnN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcblxuICAgIC8vIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAvLyAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgIC8vICAgcGFyYW1zOiB7IGVudGl0eUlkOiBcInRlc3RcIiB9XG4gICAgLy8gfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2Fwb2xsby1yZXNwb25zZScsIHsgcmVzcG9uc2UgfSlcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgaXRlbSB0byBnZXRcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzcG9uc2Ugb2YgZ2V0RW50aXR5RGV0YWlscyB3aXRoIGVudGl0eUlkID09PSBpZFxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIGRhdGEgLSBjb21tdW5pY2F0aW9uIHJlcG9uc2Ugb2JqZWN0XG4gICAgICovXG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uOiBhbnkgPSB7IGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICAgIHBheWxvYWQ6ICdvdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ0FNUEknLFxuICAgICAgICBwYXlsb2FkOiAnY2FtcGknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgcGF5bG9hZDogJ29nZ2V0dGktY29sbGVnYXRpJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdFTlRJVEEgQ09MTEVHQVRFJyxcbiAgICAgICAgcGF5bG9hZDogJ2VudGl0YS1jb2xsZWdhdGUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgcGF5bG9hZDogJ21heHhpJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBwYXlsb2FkOiAnd2lraScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgICBwYXlsb2FkOiAnZW50aXRhLW5hdidcbiAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUobmF2aWdhdGlvbilcbiAgfVxuXG4gIGxvYWRJdGVtKGlkLCB0YWIpIHtcbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpZCAtIGlkIG9mIGl0ZW0gdG8gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB0YWIgLSBzZWxlY3RlZCBuYXYgdGFiXG4gICAgICovXG4gICAgaWYgKGlkICYmIHRhYikgeyBcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7ZW50aXR5SWQ6IGlkfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgY29uc29sZS5sb2coJ2xvYWRjb250ZW50LXJlc3BvbnNlOiAnLCB7cmVzfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICB0aGlzLmVudGl0eVRpdGxlID0gcmVzLmVudGl0eS5sYWJlbFxuICB9XG59Il19