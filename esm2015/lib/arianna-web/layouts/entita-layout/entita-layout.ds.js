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
            // this.one('aw-bubble-chart').updateComponent(
            //   'aw-bubble-chart',
            //   this.myResponse.relatedEntities,
            //   {
            //     simple: true,
            //     config: this.configuration,
            //     limit: this.route.snapshot.params.tab == 'overview' ? 3 : this.configuration.get('bubble-chart').bubbleLimit
            //   }
            // );
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
                () => { this.updateBubbes(this.myResponse); }), 800);
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
        this.one('aw-bubble-chart').update(data.relatedEntities);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFVUyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBUSxFQUFFLENBQUMsQ0FBQywwQkFBMEI7O1FBRWhELGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBR2hELGFBQVEsR0FBVyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7OztRQUVsRCxnQkFBVyxHQUFXLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQTZCakUsb0JBQWU7Ozs7OztRQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLENBQUMsRUFBQTs7OztRQWVELHlCQUFvQjs7O1FBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNo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QixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMxQixPQUFPLEVBQUUsUUFBUTthQUNsQixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEUsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Q0FDRjs7Ozs7O0lBL0xDLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlCOzs7OztJQUN6QixrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUF3Qjs7Ozs7SUFDeEIsd0NBQTRCOzs7OztJQUM1QixpQ0FBcUI7O0lBRXJCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUN6QixzQ0FBbUM7O0lBQ25DLHNDQUE0Qjs7SUFDNUIsdUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsdUNBQXdCOztJQUN4QixvQ0FBNkI7O0lBRTdCLHVDQUFnQzs7SUFDaEMsMENBQStCOzs7OztJQUUvQix5Q0FBMkI7O0lBMEIzQiwyQ0FLQzs7SUFlRCxnREFVRTs7SUFFRiwyQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIGxvY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2hvd0ZpZWxkczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbXlSZXNwb25zZTogYW55ID0ge307IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxuICBwdWJsaWMgbmF2SGVhZGVyOiBhbnkgPSB7fTsgLy8gbmF2LWhlYWRlciAoY3VzdG9tKSBkYXRhXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55OyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuICAvLyBCVUJCTEUgQ0hBUlQgREFUQSDihpNcbiAgcHVibGljIGJ1YmJsZXNTaXplOiBudW1iZXIgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIGxvY2F0aW9uLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jdXJyZW50SWQgPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG4gICAgdGhpcy5idWJibGVzU2l6ZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKVsnZW50aXRpZXNRdWVyeVNpemUnXSA6IHRoaXMuYnViYmxlc1NpemU7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgc2ltcGxlOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXG4gICAgICBzbWFsbENoYXJ0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLm92ZXJ2aWV3LnNtYWxsQ2hhcnRTaXplXG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gRW50aXTDoCcpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKVxuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIC8qXG4gICAgICBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlcyBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxuICAqL1xuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICB9KVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIHRoaXMubG9jYXRpb24uZ28oYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0ke3RoaXMuY3VycmVudElkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RoaXMuY3VycmVudFBhZ2V9YClcbiAgfTtcblxuICBoYW5kbGVOYXZVcGRhdGUgPSB0YWIgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWJcbiAgICAvLyB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlQ29tcG9uZW50KFxuICAgIC8vICAgJ2F3LWJ1YmJsZS1jaGFydCcsXG4gICAgLy8gICB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLFxuICAgIC8vICAge1xuICAgIC8vICAgICBzaW1wbGU6IHRydWUsXG4gICAgLy8gICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgIC8vICAgICBsaW1pdDogdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMudGFiID09ICdvdmVydmlldycgPyAzIDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXRcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyh0aGlzLm15UmVzcG9uc2UpXG4gICAgY29uc3QgcGFnZSA9IHRhYiA9PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gXCIvMVwiIDogXCJcIjtcbiAgICBpZiAodGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PSBcIm92ZXJ2aWV3XCIpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PSBcIm92ZXJ2aWV3XCIgfHwgdGFiID09IFwiZW50aXRhLWNvbGxlZ2F0ZVwiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy51cGRhdGVCdWJiZXModGhpcy5teVJlc3BvbnNlKSB9LCA4MDApO1xuICAgIH1cbiAgICB0aGlzLmxvY2F0aW9uLmdvKGAke3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGh9JHt0aGlzLmN1cnJlbnRJZH0vJHt0YWJ9JHtwYWdlfWApXG4gIH1cblxuICAvKlxuICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICovXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYlxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHsgZGF0YSwgc2VsZWN0ZWQgfSlcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJyxcbiAgICAgIHRoaXMubXlSZXNwb25zZS5maWVsZHMsXG4gICAgICB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJsYWJlbHNcIilcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgLypcbiAgICBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBncmFwaFxuICAqL1xuICB1cGRhdGVCdWJiZXMoZGF0YSkge1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUoZGF0YS5yZWxhdGVkRW50aXRpZXMpO1xuICB9XG5cbiAgLypcbiAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAqL1xuICBsb2FkSXRlbShpZCwgdGFiKSB7XG4gICAgaWYgKGlkICYmIHRhYikge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZCAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiIC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxuICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coJyhlbnRpdGEpIEFwb2xsbyByZXNwb25kZWQgd2l0aDogJywgeyByZXMgfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICBpZiAoKHJlcy5maWVsZHMgfHwgW10pLmZpbHRlcihmaWVsZCA9PiAoKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpLmluY2x1ZGVzKGZpZWxkLmtleSkpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGxvb2sgYXQgdGhlIHJlc3BvbnNlIGFycmF5LCBmaWx0ZXJlZCBieSBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAgICAgIC8vIGlmIHRoZSBmaWx0ZXJlZCByZXNwb25zZSBoYXMgc29tZSB2YWx1ZXMsIHNob3cgdGhlIGZpZWxkcyBzZWN0aW9uLlxuICAgICAgdGhpcy5zaG93RmllbGRzID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dGaWVsZHMgPSBmYWxzZVxuICAgIH1cbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eV0gPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eV0uaWNvbiA6IFwiXCIsXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UubGFiZWwsXG4gICAgICBjb2xvcjogdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJylcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGVPcHRpb25zKHsgYnViYmxlc0VuYWJsZWQ6IHRoaXMuYnViYmxlc0VuYWJsZWQgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiwgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZShyZXMuZmllbGRzKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogcmVzLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmEgV2ViID4gRW50aXTDoCA+ICR7dGhpcy5teVJlc3BvbnNlLmxhYmVsfWApO1xuICB9XG59Il19