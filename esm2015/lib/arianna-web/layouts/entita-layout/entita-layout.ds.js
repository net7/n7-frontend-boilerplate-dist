/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { of } from 'rxjs';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.showFields = false;
        // selected nav item
        this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // linked objects page size
        // ===== BUBBLE CHART =====
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
        this.drawPagination = (/**
         * @return {?}
         */
        () => {
            const { href, queryParams } = this._getPaginationParams();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(this.myResponse.relatedItems.length / this.pageSize),
                currentPage: this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: this.pageSize,
                },
            });
        });
        this.handlePageNavigation = (/**
         * @return {?}
         */
        () => {
            /*
              Updates selected tab on tab change
            */
            if (!this.myResponse) {
                return;
            }
            const { href, queryParams } = this._getPaginationParams();
            this.drawPagination();
            this.one('aw-linked-objects').updateOptions({
                paginationParams: { href, queryParams },
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
        });
        this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            if (tab === 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    paginationParams: this._getPaginationParams(),
                    size: this.pageSize,
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            else if (tab === 'overview') {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita',
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            if (tab === 'overview' || tab === 'entita-collegate') {
                setTimeout((/**
                 * @return {?}
                 */
                () => { this.updateBubbes(this.myResponse.relatedEntities); }), 800);
            }
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout').entitiesQuerySize : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
            smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
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
            params: { entityId: id, entitiesListSize: this.bubblesSize },
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
        Object.keys(data).forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => {
            if (Array.isArray(data[k]) && data[k].length === 0) {
                data[k] = null;
            }
        }));
        this.one('aw-entita-nav').update({
            data,
            selected,
            basePath: this.getNavBasePath(),
        });
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get('labels'),
        });
        this.drawPagination();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateBubbes(data) {
        /*
          Helper function to update the graph
        */
        this.one('aw-bubble-chart').update(data);
    }
    /**
     * @param {?} id
     * @param {?} slug
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, slug, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: { entityId: id, entitiesListSize: this.bubblesSize },
            });
        }
        this.pageTitle = 'Entità Test';
        return of(null);
    }
    /**
     * @param {?} res
     * @return {?}
     */
    loadContent(res) {
        /** @type {?} */
        const config = this.configuration.get('config-keys')[res.typeOfEntity];
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        if ((res.fields || []).filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => ((this.configuration.get('entita-layout') || {}).overview || {}).campi.includes(field.key))).length > 0) {
            // look at the response array, filtered by configuration values.
            // if the filtered response has some values, show the fields section.
            this.showFields = true;
        }
        else {
            this.showFields = false;
        }
        this.navHeader = {
            // always render nav header
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get('labels'), config: this.configuration });
        this.one('aw-entita-metadata-viewer').update(res.fields);
        if (this.selectedTab === 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                paginationParams: this._getPaginationParams(),
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita',
            });
        }
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        this.drawPagination();
        // update head title
        this.mainState.update('headTitle', `Arianna Web > Entità > ${this.myResponse.label}`);
    }
    /**
     * @private
     * @return {?}
     */
    _getPaginationParams() {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                `${this.currentId}/`,
                this.currentSlug,
                '/oggetti-collegati/',
            ].join(''),
            queryParams: {
                page: this.currentPage,
            },
        };
    }
    /**
     * @return {?}
     */
    getNavBasePath() {
        return [
            this.configuration.get('paths').entitaBasePath,
            `${this.currentId}/`,
            this.currentSlug,
        ].join('');
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
    AwEntitaLayoutDS.prototype.currentSlug;
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
    AwEntitaLayoutDS.prototype.drawPagination;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handlePageNavigation;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFpQlMsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFNbkIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFRaEQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7O1FBRzFDLGdCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBd0N6RCxvQkFBZTs7Ozs7O1FBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVEsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFBO1FBWUQsbUJBQWM7OztRQUFHLEdBQUcsRUFBRTtrQkFDZCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDNUMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSTtnQkFDSixXQUFXO2FBQ1osQ0FBQyxDQUFDO1lBQ0gs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ekIsa0NBQXNCOzs7OztJQUV0QixvQ0FBd0I7Ozs7O0lBRXhCLHdDQUE0Qjs7Ozs7SUFFNUIsaUNBQXFCOztJQUVyQixtQ0FBb0I7O0lBRXBCLHFDQUF5Qjs7SUFFekIsc0NBQTBCOztJQUUxQixzQ0FBdUI7O0lBRXZCLHVDQUEyQjs7SUFFM0IscUNBQTJCOztJQUUzQixxQ0FBeUI7O0lBRXpCLHVDQUEyQjs7SUFFM0IsdUNBQXdCOztJQUV4QixvQ0FBcUI7O0lBR3JCLHVDQUF3Qjs7SUFFeEIsMENBQStCOzs7OztJQUcvQix5Q0FBMkI7O0lBbUMzQiwyQ0FLQzs7SUFZRCwwQ0FnQkM7O0lBRUQsZ0RBa0JDOztJQUVELDJDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbG9jYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc2hvd0ZpZWxkcyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbXlSZXNwb25zZTogYW55OyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cclxuXHJcbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxyXG5cclxuICBwdWJsaWMgY3VycmVudFNsdWc6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55OyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcclxuXHJcbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XHJcbiAgcHVibGljIGJ1YmJsZXNTaXplID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxyXG5cclxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIHJvdXRlLCBsb2NhdGlvbiwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMuY3VycmVudElkID0gJyc7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gK3RoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMucGFnZTtcclxuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykuYnViYmxlY2hhcnQgOiBmYWxzZTtcclxuICAgIHRoaXMuYnViYmxlc1NpemUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykuZW50aXRpZXNRdWVyeVNpemUgOiB0aGlzLmJ1YmJsZXNTaXplO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgc2ltcGxlOiB0cnVlLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxyXG4gICAgICBzbWFsbENoYXJ0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLm92ZXJ2aWV3LnNtYWxsQ2hhcnRTaXplLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2VudGl0YScpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEVudGl0w6AnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XHJcbiAgICAvKlxyXG4gICAgICBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxyXG4gICAgICovXHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkLCBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXdQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ2hyZWYnLFxyXG4gICAgICBocmVmLFxyXG4gICAgICBxdWVyeVBhcmFtcyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSxcclxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2VMaW1pdDogNSxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcclxuICAgICovXHJcbiAgICBpZiAoIXRoaXMubXlSZXNwb25zZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XHJcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKCk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxyXG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYXZVcGRhdGUgPSAodGFiKSA9PiB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xyXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSk7XHJcbiAgICBpZiAodGFiID09PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcclxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ292ZXJ2aWV3Jykge1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICBzaXplOiAzLFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFiID09PSAnb3ZlcnZpZXcnIHx8IHRhYiA9PT0gJ2VudGl0YS1jb2xsZWdhdGUnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZUJ1YmJlcyh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTsgfSwgODAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xyXG4gICAgLypcclxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcclxuICAgICovXHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba10pICYmIGRhdGFba10ubGVuZ3RoID09PSAwKSB7IGRhdGFba10gPSBudWxsOyB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHtcclxuICAgICAgZGF0YSxcclxuICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmdldE5hdkJhc2VQYXRoKCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KFxyXG4gICAgICAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsXHJcbiAgICAgIHRoaXMubXlSZXNwb25zZS5maWVsZHMsXHJcbiAgICAgIHtcclxuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQnViYmVzKGRhdGEpIHtcclxuICAgIC8qXHJcbiAgICAgIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdyYXBoXHJcbiAgICAqL1xyXG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIGxvYWRJdGVtKGlkLCBzbHVnLCB0YWIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLypcclxuICAgICAgTG9hZHMgdGhlIGRhdGEgZm9yIHRoZSBzZWxlY3RlZCBuYXYgaXRlbSwgaW50byB0aGUgYWRqYWNlbnQgdGV4dCBibG9jay5cclxuICAgICovXHJcbiAgICBpZiAoaWQgJiYgdGFiKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7IC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcclxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyA9IHNsdWc7IC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XHJcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkLCBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0JztcclxuICAgIHJldHVybiBvZihudWxsKTtcclxuICB9XHJcblxyXG4gIGxvYWRDb250ZW50KHJlcykge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCcoZW50aXRhKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHsgcmVzIH0pXHJcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XHJcbiAgICBpZiAoKHJlcy5maWVsZHMgfHwgW10pLmZpbHRlcigoZmllbGQpID0+ICgodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGkuaW5jbHVkZXMoZmllbGQua2V5KSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBsb29rIGF0IHRoZSByZXNwb25zZSBhcnJheSwgZmlsdGVyZWQgYnkgY29uZmlndXJhdGlvbiB2YWx1ZXMuXHJcbiAgICAgIC8vIGlmIHRoZSBmaWx0ZXJlZCByZXNwb25zZSBoYXMgc29tZSB2YWx1ZXMsIHNob3cgdGhlIGZpZWxkcyBzZWN0aW9uLlxyXG4gICAgICB0aGlzLnNob3dGaWVsZHMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93RmllbGRzID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXHJcbiAgICAgIGljb246IGNvbmZpZyA/IGNvbmZpZy5pY29uIDogJycsXHJcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcclxuICAgICAgY29sb3I6IGNvbmZpZ1snY2xhc3MtbmFtZSddLFxyXG4gICAgfTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7IGJ1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiwgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZShyZXMuZmllbGRzKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcclxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIHNpemU6IDMsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgY29udGV4dDogJ2VudGl0YScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHJlcy5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKCk7XHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYSBXZWIgPiBFbnRpdMOgID4gJHt0aGlzLm15UmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uUGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHJlZjogW1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgICAgICAnL29nZ2V0dGktY29sbGVnYXRpLycsXHJcbiAgICAgIF0uam9pbignJyksXHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcclxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgIF0uam9pbignJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==