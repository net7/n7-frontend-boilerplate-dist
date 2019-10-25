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
        this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /*
              Updates selected tab on tab change
            */
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
        });
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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFTUyxlQUFVLEdBQVEsRUFBRSxDQUFDLENBQUMsMEJBQTBCOztRQUVoRCxjQUFTLEdBQVEsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztRQUdoRCxhQUFRLEdBQVcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBMEJ6RCxvQkFBZTs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCOztjQUVFO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUE7UUFDdkMsQ0FBQyxFQUFBO0lBdUZILENBQUM7Ozs7O0lBbEhDLE1BQU0sQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFO1FBQy9FLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQU8sU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQVMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQVUsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUksWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFH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QUFpQixFQUFFLHNCQUFzQjt3QkFDekMsV0FBVyxFQUFFLHdCQUF3QjtxQkFDdEMsQ0FBQyxDQUFDO2lCQUNKO2dCQUFDLE1BQU07WUFFUixLQUFLLE9BQU87Z0JBQUU7b0JBQ1osUUFBUTtpQkFDVDtnQkFBQyxNQUFNO1lBRVIsS0FBSyxNQUFNO2dCQUFFO29CQUNYLE9BQU87aUJBQ1I7Z0JBQUMsTUFBTTtZQUVSO2dCQUNFLGdEQUFnRDtnQkFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQXBJQyx5Q0FBNkI7Ozs7O0lBQzdCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0Qix3Q0FBNEI7O0lBRTVCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUV6QixzQ0FBNEI7O0lBQzVCLHVDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQixxQ0FBeUI7O0lBQ3pCLHVDQUF3Qjs7SUFDeEIsb0NBQTZCOztJQUM3QiwwQ0FBK0I7Ozs7O0lBRS9CLHlDQUEyQjs7SUF1QjNCLDJDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG15UmVzcG9uc2U6IGFueSA9IHt9OyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSAgICAgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zICAgICAgID0gb3B0aW9ucztcbiAgICB0aGlzLnJvdXRlciAgICAgICAgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcblxuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIC8qXG4gICAgICBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU5hdlVwZGF0ZSA9IHRhYiA9PiB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgICAqL1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWJcbiAgICB0aGlzLnVwZGF0ZVdpZGdldHMoIHRoaXMubXlSZXNwb25zZSApXG4gIH1cblxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgICAqL1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYlxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKCB7IGRhdGEsIHNlbGVjdGVkIH0gKVxuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHRhYikge1xuICAgIC8qXG4gICAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgICovXG4gICAgaWYgKGlkICYmIHRhYikge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZCAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiIC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxuICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczoge2VudGl0eUlkOiBpZH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0J1xuICAgIH1cbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlcykge1xuICAgIGNvbnNvbGUubG9nKCdBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHtyZXN9KVxuICAgIHRoaXMubXlSZXNwb25zZSA9IHJlc1xuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcbiAgICAgIGljb246IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0aGlzLm15UmVzcG9uc2UuZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXldLmljb24sXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UuZW50aXR5LmxhYmVsLFxuICAgICAgY29sb3I6IHRoaXMubXlSZXNwb25zZS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleVxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRUYWIpIHsgLy8gbWFrZSBkeW5hbWljIGNvbnRlbnQgZGVwZW5kaW5nIG9uIHJlcXVlc3RcbiAgICAgIGNhc2UgJ292ZXJ2aWV3Jzoge1xuICAgICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NjaGVkYScsXG4gICAgICAgICAgY29uZmlnS2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpLFxuICAgICAgICAgIGJ1YmJsZUNvbnRhaW5lcklkOiAnb3ZlcnZpZXdCdWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICAgICAgY29udGFpbmVySWQ6ICdidWJibGUtY2hhcnQtY29udGFpbmVyLW92ZXJ2aWV3JyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHNUYWIpO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgc2l6ZTogMywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sIGNvbnRleHQ6ICdlbnRpdGEnIH0pXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXMuaXRlbXMpO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnY2FtcGknOiB7XG4gICAgICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHNUYWIpO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnb2dnZXR0aS1jb2xsZWdhdGknOiB7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlcy5pdGVtcyk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdlbnRpdGEtY29sbGVnYXRlJzoge1xuICAgICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NjaGVkYScsXG4gICAgICAgICAgY29uZmlnS2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpLFxuICAgICAgICAgIGJ1YmJsZUNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICAgIH0pO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnbWF4eGknOiB7XG4gICAgICAgIC8vIG1heHhpXG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICd3aWtpJzoge1xuICAgICAgICAvLyB3aWtpXG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB0aGUgdXJsIGlzIGF3L2VudGl0YS9zb21ldGhpbmcvID8/PyDihpIgdW5rbm93blxuICAgICAgICBjb25zb2xlLndhcm4oJ1VuaGFuZGxlZCBuYXZpZ2F0aW9uIHBhZ2UnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59Il19