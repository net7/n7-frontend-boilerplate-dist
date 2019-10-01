/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.myResponse = {}; // store response object
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
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
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
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
            (error) => console.error(error)),
            params: { entityId: id }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateWidgets(data) {
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
        const navigation = { items: [
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
    }
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, tab) {
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
                error => console.error(error)),
                params: { entityId: id }
            });
        }
        else {
            this.pageTitle = 'Entità Test';
        }
    }
    /**
     * @param {?} res
     * @return {?}
     */
    loadContent(res) {
        console.log('loadcontent-response: ', { res });
        this.myResponse = res;
        this.entityTitle = res.entity.label;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFTUyxlQUFVLEdBQVEsRUFBRSxDQUFDLENBQUMsd0JBQXdCO0lBa0d2RCxDQUFDOzs7OztJQTVGQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxvREFBb0Q7UUFDcEQsNENBQTRDO1FBQzVDLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0IsaURBQWlEO1FBQ2pELE1BQU07SUFDUixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxFQUFFO1FBQ2Q7Ozs7O1dBS0c7UUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JELE9BQU87Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4QyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDaEI7Ozs7V0FJRzs7Ozs7OztjQUVHLFVBQVUsR0FBUSxFQUFFLEtBQUssRUFBRTtnQkFDL0I7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsT0FBTztpQkFDakI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjtvQkFDekIsT0FBTyxFQUFFLG1CQUFtQjtpQkFDN0I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsT0FBTyxFQUFFLGtCQUFrQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPLEVBQUUsTUFBTTtpQkFDaEI7YUFDRjtZQUNDLE9BQU8sRUFBRSxZQUFZO1NBQ3hCO1FBRUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHO1FBQ2Q7Ozs7O1dBS0c7UUFDSCxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQSxDQUFDLDhCQUE4QjtZQUNyRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO2dCQUNyRCxPQUFPOzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQzthQUN2QixDQUFDLENBQUE7U0FDSDthQUNJO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUE7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUE7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUNyQyxDQUFDO0NBQ0Y7Ozs7OztJQTFHQyx5Q0FBNkI7Ozs7O0lBQzdCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0Qix3Q0FBNEI7O0lBRTVCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUV6QixzQ0FBNEI7O0lBQzVCLHVDQUEwQjs7SUFDMUIsdUNBQTBCOzs7OztJQUUxQix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgcHJvbWlzZSB9IGZyb20gJ3Byb3RyYWN0b3InO1xuaW1wb3J0IHsgSnNvbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICduNy1ib2lsZXJwbGF0ZS1saWIvbGliL2NvbW1vbi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gc3RvcmUgcmVzcG9uc2Ugb2JqZWN0XG4gIHB1YmxpYyBlbnRpdHlUaXRsZTpzdHJpbmc7IC8vIGVudGl0eSBoZWFkZXJcbiAgcHVibGljIHNlbGVjdGVkVGFiOnN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcblxuICAgIC8vIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAvLyAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgIC8vICAgcGFyYW1zOiB7IGVudGl0eUlkOiBcInRlc3RcIiB9XG4gICAgLy8gfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2Fwb2xsby1yZXNwb25zZScsIHsgcmVzcG9uc2UgfSlcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgaXRlbSB0byBnZXRcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzcG9uc2Ugb2YgZ2V0RW50aXR5RGV0YWlscyB3aXRoIGVudGl0eUlkID09PSBpZFxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIGRhdGEgLSBjb21tdW5pY2F0aW9uIHJlcG9uc2Ugb2JqZWN0XG4gICAgICovXG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uOiBhbnkgPSB7IGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICAgIHBheWxvYWQ6ICdvdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ0FNUEknLFxuICAgICAgICBwYXlsb2FkOiAnY2FtcGknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgcGF5bG9hZDogJ29nZ2V0dGktY29sbGVnYXRpJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdFTlRJVEEgQ09MTEVHQVRFJyxcbiAgICAgICAgcGF5bG9hZDogJ2VudGl0YS1jb2xsZWdhdGUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgcGF5bG9hZDogJ21heHhpJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBwYXlsb2FkOiAnd2lraScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgICBwYXlsb2FkOiAnZW50aXRhLW5hdidcbiAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUobmF2aWdhdGlvbilcbiAgfVxuXG4gIGxvYWRJdGVtKGlkLCB0YWIpIHtcbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpZCAtIGlkIG9mIGl0ZW0gdG8gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB0YWIgLSBzZWxlY3RlZCBuYXYgdGFiXG4gICAgICovXG4gICAgaWYgKGlkICYmIHRhYikgeyBcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7ZW50aXR5SWQ6IGlkfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgY29uc29sZS5sb2coJ2xvYWRjb250ZW50LXJlc3BvbnNlOiAnLCB7cmVzfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICB0aGlzLmVudGl0eVRpdGxlID0gcmVzLmVudGl0eS5sYWJlbFxuICB9XG59Il19