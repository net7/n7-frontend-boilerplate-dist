/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.showFields = false;
        this.myResponse = {}; // backend response object
        // selected nav item
        this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // linked objects page size
        // BUBBLE CHART DATA ↓
        this.bubblesSize = 10; // related entities (bubbles) page size
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        (id, data, options) => {
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        });
        /*
            Updates selected tab on tab change
          */
        this.handlePageNavigation = (/**
         * @return {?}
         */
        () => {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            this.location.go(`${this.configuration.get('paths').entitaBasePath}${this.currentId}/oggetti-collegati/${this.currentPage}`);
        });
        this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            /** @type {?} */
            const page = tab == 'oggetti-collegati' ? "/1" : "";
            if (tab == 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    size: this.pageSize,
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            else if (tab == "overview") {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita'
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            if (tab == "overview" || tab == "entita-collegate") {
                setTimeout((/**
                 * @return {?}
                 */
                () => { this.updateBubbes(this.myResponse.relatedEntities); }), 800);
            }
            this.location.go(`${this.configuration.get('paths').entitaBasePath}${this.currentId}/${tab}${page}`);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, route, location, options, titleService, communication }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = "";
        this.currentPage = +this.route.snapshot.params.page;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['entitiesQuerySize'] : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
            smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna Web > Entità');
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
            params: { entityId: id, entitiesListSize: this.bubblesSize }
        });
    }
    /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    updateWidgets(data) {
        /** @type {?} */
        const selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data, selected });
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get("labels")
        });
    }
    /*
        Helper function to update the graph
      */
    /**
     * @param {?} data
     * @return {?}
     */
    updateBubbes(data) {
        this.one('aw-bubble-chart').update(data);
    }
    /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, tab) {
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => console.error(error)),
                params: { entityId: id, entitiesListSize: this.bubblesSize }
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
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        if ((res.fields || []).filter((/**
         * @param {?} field
         * @return {?}
         */
        field => ((this.configuration.get('entita-layout') || {}).overview || {}).campi.includes(field.key))).length > 0) {
            // look at the response array, filtered by configuration values.
            // if the filtered response has some values, show the fields section.
            this.showFields = true;
        }
        else {
            this.showFields = false;
        }
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity.replace(/ /g, '-')
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get("labels"), config: this.configuration });
        this.one('aw-entita-metadata-viewer').update(res.fields);
        if (this.selectedTab == 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita'
            });
        }
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        // update head title
        this.mainState.update('headTitle', `Arianna Web > Entità > ${this.myResponse.label}`);
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
    AwEntitaLayoutDS.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.titleService;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.route;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.showFields;
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
    AwEntitaLayoutDS.prototype.bubblesSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesEnabled;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.updateComponent;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handlePageNavigation;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFVUyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBUSxFQUFFLENBQUMsQ0FBQywwQkFBMEI7O1FBRWhELGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBR2hELGFBQVEsR0FBVyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7OztRQUVsRCxnQkFBVyxHQUFXLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQWdDakUsb0JBQWU7Ozs7OztRQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLENBQUMsRUFBQTs7OztRQWVELHlCQUFvQjs7O1FBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNo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QUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQzFCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNsRSxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLDBCQUEwQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEYsQ0FBQztDQUNGOzs7Ozs7SUF6TEMseUNBQTZCOzs7OztJQUM3QixxQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQXdCOzs7OztJQUN4Qix3Q0FBNEI7Ozs7O0lBQzVCLGlDQUFxQjs7SUFFckIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBQ3pCLHNDQUFtQzs7SUFDbkMsc0NBQTRCOztJQUM1Qix1Q0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFDM0IscUNBQXlCOztJQUN6Qix1Q0FBd0I7O0lBQ3hCLG9DQUE2Qjs7SUFFN0IsdUNBQWdDOztJQUNoQywwQ0FBK0I7Ozs7O0lBRS9CLHlDQUEyQjs7SUE2QjNCLDJDQUtDOztJQWVELGdEQVVFOztJQUVGLDJDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgbG9jYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93RmllbGRzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnk7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG4gIC8vIEJVQkJMRSBDSEFSVCBEQVRBIOKGk1xuICBwdWJsaWMgYnViYmxlc1NpemU6IG51bWJlciA9IDEwOyAvLyByZWxhdGVkIGVudGl0aWVzIChidWJibGVzKSBwYWdlIHNpemVcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCByb3V0ZSwgbG9jYXRpb24sIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbiB9KSB7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNTaXplID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpWydlbnRpdGllc1F1ZXJ5U2l6ZSddIDogdGhpcy5idWJibGVzU2l6ZTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBzaW1wbGU6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICAgIHNtYWxsQ2hhcnRTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0Jykub3ZlcnZpZXcuc21hbGxDaGFydFNpemVcbiAgICB9KTtcblxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2VudGl0YScpO1xuXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEVudGl0w6AnKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvKlxuICAgICAgUmVxdWVzdHMgZGF0YSBmcm9tIGNvbW11bmljYXRpb24gcHJvdmlkZXJcbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfVxuICAgIH0pXG4gIH1cblxuICAvKlxuICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgKi9cbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSlcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB0aGlzLmxvY2F0aW9uLmdvKGAke3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGh9JHt0aGlzLmN1cnJlbnRJZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHt0aGlzLmN1cnJlbnRQYWdlfWApXG4gIH07XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gdGFiID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSlcbiAgICBjb25zdCBwYWdlID0gdGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScgPyBcIi8xXCIgOiBcIlwiO1xuICAgIGlmICh0YWIgPT0gJ29nZ2V0dGktY29sbGVnYXRpJykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH0gZWxzZSBpZiAodGFiID09IFwib3ZlcnZpZXdcIikge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBjb250ZXh0OiAnZW50aXRhJ1xuICAgICAgfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH1cbiAgICBpZiAodGFiID09IFwib3ZlcnZpZXdcIiB8fCB0YWIgPT0gXCJlbnRpdGEtY29sbGVnYXRlXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZUJ1YmJlcyh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKSB9LCA4MDApO1xuICAgIH1cbiAgICB0aGlzLmxvY2F0aW9uLmdvKGAke3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGh9JHt0aGlzLmN1cnJlbnRJZH0vJHt0YWJ9JHtwYWdlfWApXG4gIH1cblxuICAvKlxuICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICovXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYlxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHsgZGF0YSwgc2VsZWN0ZWQgfSlcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJyxcbiAgICAgIHRoaXMubXlSZXNwb25zZS5maWVsZHMsXG4gICAgICB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJsYWJlbHNcIilcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgLypcbiAgICBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBncmFwaFxuICAqL1xuICB1cGRhdGVCdWJiZXMoZGF0YSkge1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICAvKlxuICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICovXG4gIGxvYWRJdGVtKGlkLCB0YWIpIHtcbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkIC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCdcbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnKGVudGl0YSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCB7IHJlcyB9KVxuICAgIHRoaXMubXlSZXNwb25zZSA9IHJlc1xuICAgIGlmICgocmVzLmZpZWxkcyB8fCBbXSkuZmlsdGVyKGZpZWxkID0+ICgodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGkuaW5jbHVkZXMoZmllbGQua2V5KSkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gbG9vayBhdCB0aGUgcmVzcG9uc2UgYXJyYXksIGZpbHRlcmVkIGJ5IGNvbmZpZ3VyYXRpb24gdmFsdWVzLlxuICAgICAgLy8gaWYgdGhlIGZpbHRlcmVkIHJlc3BvbnNlIGhhcyBzb21lIHZhbHVlcywgc2hvdyB0aGUgZmllbGRzIHNlY3Rpb24uXG4gICAgICB0aGlzLnNob3dGaWVsZHMgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0ZpZWxkcyA9IGZhbHNlXG4gICAgfVxuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcbiAgICAgIGljb246IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5XSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5XS5pY29uIDogXCJcIixcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcbiAgICAgIGNvbG9yOiB0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoeyBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCB9KTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLCBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJsYWJlbHNcIiksIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHMpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiByZXMucmVsYXRlZEl0ZW1zIH0pO1xuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYSBXZWIgPiBFbnRpdMOgID4gJHt0aGlzLm15UmVzcG9uc2UubGFiZWx9YCk7XG4gIH1cbn0iXX0=