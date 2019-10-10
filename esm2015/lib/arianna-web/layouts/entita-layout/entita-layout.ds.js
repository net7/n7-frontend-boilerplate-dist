/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.myResponse = {}; // backend response object
        // selected nav item
        this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        /*
          Requests data from communication provider
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
        /*
              Updates the widgets on this layout, based on route
            */
        /** @type {?} */
        const selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data, selected });
    }
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, tab) {
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
        console.log('Apollo responded with: ', { res });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFTUyxlQUFVLEdBQVEsRUFBRSxDQUFDLENBQUMsMEJBQTBCOztRQUVoRCxjQUFTLEdBQVEsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztRQUdoRCxhQUFRLEdBQVcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO0lBaUczRCxDQUFDOzs7OztJQTdGQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFPLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFTLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFVLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFJLFlBQVksQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxFQUFFO1FBQ2Q7O1dBRUc7UUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JELE9BQU87Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4QyxNQUFNLEVBQUUsRUFBRSxR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QUUsSUFBSSxDQUFDLFdBQVc7d0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUNwQixDQUFDLENBQUE7b0JBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pEO2dCQUFDLE1BQU07WUFFUixLQUFLLGtCQUFrQjtnQkFBRTtvQkFDdkIsU0FBUztpQkFDVjtnQkFBQyxNQUFNO1lBRVIsS0FBSyxPQUFPO2dCQUFFO29CQUNaLFFBQVE7aUJBQ1Q7Z0JBQUMsTUFBTTtZQUVSLEtBQUssTUFBTTtnQkFBRTtvQkFDWCxPQUFPO2lCQUNSO2dCQUFDLE1BQU07WUFFUjtnQkFDRSxnREFBZ0Q7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUE5R0MseUNBQTZCOzs7OztJQUM3QixxQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFzQjs7Ozs7SUFDdEIsd0NBQTRCOztJQUU1QixtQ0FBb0I7O0lBQ3BCLHFDQUF5Qjs7SUFFekIsc0NBQTRCOztJQUM1Qix1Q0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFDM0IscUNBQXlCOztJQUN6Qix1Q0FBd0I7O0lBQ3hCLG9DQUE2Qjs7Ozs7SUFFN0IseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG15UmVzcG9uc2U6IGFueSA9IHt9OyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgICAgID0gbWFpblN0YXRlO1xuICAgIHRoaXMub3B0aW9ucyAgICAgICA9IG9wdGlvbnM7XG4gICAgdGhpcy5yb3V0ZXIgICAgICAgID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlICA9IHRpdGxlU2VydmljZTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvKlxuICAgICAgUmVxdWVzdHMgZGF0YSBmcm9tIGNvbW11bmljYXRpb24gcHJvdmlkZXJcbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgICAqL1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYlxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKCB7IGRhdGEsIHNlbGVjdGVkIH0gKVxuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHRhYikge1xuICAgIC8qXG4gICAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgICovXG4gICAgaWYgKGlkICYmIHRhYikgeyBcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYiAvLyBzdG9yZSBzZWxlY3RlZCB0YWIgZnJvbSB1cmxcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHtlbnRpdHlJZDogaWR9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCdcbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICBjb25zb2xlLmxvZygnQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCB7cmVzfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLmVudGl0eS50eXBlT2ZFbnRpdHkuY29uZmlnS2V5XS5pY29uLFxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmVudGl0eS5sYWJlbCxcbiAgICAgIGNvbG9yOiB0aGlzLm15UmVzcG9uc2UuZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXlcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkVGFiKSB7IC8vIG1ha2UgZHluYW1pYyBjb250ZW50IGRlcGVuZGluZyBvbiByZXF1ZXN0XG4gICAgICBjYXNlICdvdmVydmlldyc6IHtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkc1RhYik7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBzaXplOiAzLCBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIikgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlcy5pdGVtcyk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlICdjYW1waSc6IHtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkc1RhYik7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdvZ2dldHRpLWNvbGxlZ2F0aSc6IHtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IFxuICAgICAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZ0tleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKSxcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXMuaXRlbXMpO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnZW50aXRhLWNvbGxlZ2F0ZSc6IHtcbiAgICAgICAgLy8gZW50aXRhXG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdtYXh4aSc6IHtcbiAgICAgICAgLy8gbWF4eGlcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3dpa2knOiB7XG4gICAgICAgIC8vIHdpa2lcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRoZSB1cmwgaXMgYXcvZW50aXRhL3NvbWV0aGluZy8gPz8/IOKGkiB1bmtub3duXG4gICAgICAgIGNvbnNvbGUud2FybignVW5oYW5kbGVkIG5hdmlnYXRpb24gcGFnZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn0iXX0=