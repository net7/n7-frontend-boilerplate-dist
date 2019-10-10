/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.allBubbles = null;
        this.selectedBubbles = [];
    }
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart']['title'];
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items']['title'];
        this.metadataSectionTitle = this.configuration.get('scheda-layout')['metadata']['title'];
        this.hasSimilarItems = false;
        this.hasBubbles = false;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { treeId: id }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateNavigation(data) {
        /** @type {?} */
        let header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-sidebar-header').update(header);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadItem(id) {
        if (id) {
            /** @type {?} */
            const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: { itemId: id, maxSimilarItems }
            });
        }
        else {
            /* TODO: valori statici, da prendere da config */
            this.pageTitle = 'Collezione d\'Arte';
            this.contentParts = [
                {
                    type: 'text',
                    title: 'Collezione d\'Arte',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    type: 'text',
                    title: 'Centro Archivi',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ];
        }
        /*Breadcrumb section*/
        /** @type {?} */
        let breadcrumbs = {
            items: []
        };
        this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loadContent(response) {
        if (response) {
            this.contentParts = [];
            /** @type {?} */
            let content = {};
            if (response.text) {
                content['content'] = response.text;
            }
            this.contentParts.push(content);
            if (response.image) {
                /** @type {?} */
                const images = [{ type: 'image', url: response.image, buildPyramid: false }];
                if (!this.imageViewerIstance) {
                    this.one('aw-scheda-image').update({
                        viewerId: 'scheda-layout-viewer',
                        _setViewer: (/**
                         * @param {?} viewer
                         * @return {?}
                         */
                        (viewer) => {
                            this.imageViewerIstance = viewer;
                            viewer.open(images);
                        }),
                    });
                }
                else {
                    this.imageViewerIstance.open(images);
                }
            }
            /** @type {?} */
            let titleObj = {
                icon: response.item.icon,
                title: {
                    main: {
                        text: response.title,
                        classes: 'bold',
                    }
                },
                tools: response.subTitle,
                actions: {}
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            /*Metadata section*/
            /** @type {?} */
            let group = { group: [] };
            if (response.fields) {
                this.hasMetadata = true;
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => {
                    /** @type {?} */
                    let items = [];
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        items.push({ label: item.key, value: item.value });
                    }));
                    group.group.push({
                        title: field.label,
                        items: items
                    });
                }));
            }
            this.one('aw-scheda-metadata').update(group);
            /*Breadcrumb section*/
            /** @type {?} */
            let breadcrumbs = {
                items: []
            };
            response.breadcrumbs.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                breadcrumbs.items.push({
                    label: element.label,
                    payload: element.link
                });
            }));
            this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
        }
        /* Related Entities */
        if (response.connectedEntities) {
            this.hasBubbles = true;
            this.setAllBubblesFromApolloQuery(response);
        }
        else {
            this.hasBubbles = false;
            this.one('aw-scheda-bubble-chart').update(null);
        }
        /* Similar item */
        if (response.similarItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', configKeys: this.configuration.get("config-keys") });
            this.one('aw-linked-objects').update(response.similarItems);
        }
        else {
            this.hasSimilarItems = false;
            this.one('aw-linked-objects').update(null);
        }
    }
    /**
     * @return {?}
     */
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    setAllBubblesFromApolloQuery(response, reset) {
        if (!response || !response.connectedEntities) {
            return;
        }
        this.allBubbles = [];
        for (let i = 0; i < response.connectedEntities.length; i++) {
            /** @type {?} */
            const color = this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(Object.assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
        }
        this.one('aw-scheda-bubble-chart').update({
            containerId: 'bubble-chart-container',
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles,
            reset: (reset ? reset : false)
        });
    }
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    convertEntityIdToBubbleId(entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    }
}
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.options;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBreadcrumb;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.contentParts;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.tree;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarCollapsed;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.bubbleChartSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.similarItemsSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.metadataSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasMetadata;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFVVSxlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO0lBZ05yQyxDQUFDOzs7Ozs7O0lBN0xDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFO1FBQzlFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMs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LHVDQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUMzQiwyQ0FBZ0M7O0lBQ2hDLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBoZXJlIHRvby5cbiAgKi9cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueTtcbiAgcHVibGljIHRyZWU6IGFueTtcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVDaGFydFNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNCdWJibGVzOiBib29sZWFuO1xuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBvbkluaXQoKSBwYXJhbWV0ZXJzIGFuZCBpbnNpZGUgdGhlIGZ1bmN0aW9uLlxuICAqL1xuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2J1YmJsZS1jaGFydCddWyd0aXRsZSddO1xuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnbWV0YWRhdGEnXVsndGl0bGUnXTtcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQnViYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbiggaWQgKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0VHJlZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZU5hdmlnYXRpb24oIGRhdGEgKSB7XG4gICAgbGV0IGhlYWRlciA9IHtcbiAgICAgIGljb25MZWZ0OiAnbjctaWNvbi10cmVlLWljb24nLFxuICAgICAgdGV4dDogIGRhdGFbJ2xhYmVsJ10sXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgfVxuXG4gIGxvYWRJdGVtKCBpZCApIHtcbiAgICBpZiAoIGlkICkge1xuICAgICAgY29uc3QgbWF4U2ltaWxhckl0ZW1zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ21heC1yZWxhdGVkLWl0ZW1zJ107XG4gICAgICByZXR1cm4gIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0SXRlbURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBpdGVtSWQ6IGlkLCBtYXhTaW1pbGFySXRlbXMgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLyogVE9ETzogdmFsb3JpIHN0YXRpY2ksIGRhIHByZW5kZXJlIGRhIGNvbmZpZyAqL1xuICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnQ29sbGV6aW9uZSBkXFwnQXJ0ZSc7XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB0aXRsZTogJ0NvbGxlemlvbmUgZFxcJ0FydGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBncmF2aWRhIHNhZ2l0dGlzIHB1bHZpbmFyLiBFdGlhbSBpYWN1bGlzIG1heGltdXMgbWV0dXMsIGlkIHRpbmNpZHVudCBsaWJlcm8gYXVjdG9yIGV0LiBQcm9pbiB0ZW1wdXMgdHVycGlzIHZlbCBlcmF0IHVsdHJpY2VzLCBpZCB2ZXN0aWJ1bHVtIGFudGUgY3Vyc3VzLiBWZXN0aWJ1bHVtIGxvYm9ydGlzLCBhbnRlIGF0IGVsZWlmZW5kIGNvbnNlcXVhdCwgbWFzc2EgbGliZXJvIGJpYmVuZHVtIGp1c3RvLCBpZCBmZXJtZW50dW0gbWFnbmEgb2RpbyBhYyBudWxsYS4gQ3JhcyBhbGlxdWV0IHNjZWxlcmlzcXVlIG1hbGVzdWFkYS4gTWF1cmlzIGNvbmd1ZSBmZXJtZW50dW0gdHJpc3RpcXVlLiBOdWxsYSBpbXBlcmRpZXQgYWNjdW1zYW4gZHVpLCB0cmlzdGlxdWUgbG9ib3J0aXMgbWV0dXMgZWxlaWZlbmQgbm9uLiBEb25lYyBxdWlzIG9kaW8gbWFzc2EuIENyYXMgc2l0IGFtZXQgc2VtIGV1IHR1cnBpcyBtb2xlc3RpZSBibGFuZGl0IHZpdGFlIHNlZCBuaWJoLiBQZWxsZW50ZXNxdWUgb3JuYXJlIGVuaW0gbmlzbCwgZXQgZWZmaWNpdHVyIGFudGUgZWxlbWVudHVtIGEuIFV0IG5lYyBleCBmaW5pYnVzLCBjb25ndWUgbGliZXJvIGZldWdpYXQsIGFsaXF1YW0gYW50ZS4gQ3JhcyBzZW0gbmVxdWUsIHBlbGxlbnRlc3F1ZSBlZ2V0IG1pIGF0LCBhdWN0b3IgdnVscHV0YXRlIHRlbGx1cy4gU2VkIGFsaXF1YW0gbWkgYSB0b3J0b3IgdWx0cmljaWVzIGludGVyZHVtLiBFdGlhbSB0aW5jaWR1bnQgbnVuYyBjb21tb2RvIG51bGxhIHBvcnR0aXRvciBzZW1wZXIuIEV0aWFtIHBvcnRhIGxhY2luaWEgbGliZXJvIGEgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB0aXRsZTogJ0NlbnRybyBBcmNoaXZpJyxcbiAgICAgICAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgIC8qQnJlYWRjcnVtYiBzZWN0aW9uKi9cbiAgICAgbGV0IGJyZWFkY3J1bWJzID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgICBpZihyZXNwb25zZSl7XG4gICAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XG4gICAgICAgIGxldCBjb250ZW50ID0ge307XG5cbiAgICAgICAgaWYgKCByZXNwb25zZS50ZXh0ICl7XG4gICAgICAgICAgY29udGVudFsnY29udGVudCddID0gcmVzcG9uc2UudGV4dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgICBpZiAoIHJlc3BvbnNlLmltYWdlICkge1xuICAgICAgICAgIGNvbnN0IGltYWdlcyA9ICBbe3R5cGU6ICdpbWFnZScsIHVybDogcmVzcG9uc2UuaW1hZ2UsIGJ1aWxkUHlyYW1pZDogZmFsc2V9XTtcbiAgICAgICAgICBpZiggIXRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlICkge1xuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgICAgICBfc2V0Vmlld2VyIDogKHZpZXdlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlID0gdmlld2VyO1xuICAgICAgICAgICAgICAgIHZpZXdlci5vcGVuKGltYWdlcyk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aXRsZU9iaiA9IHtcbiAgICAgICAgICBpY29uOiByZXNwb25zZS5pdGVtLmljb24sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgICBhY3Rpb25zOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuXG4gICAgICAgIC8qTWV0YWRhdGEgc2VjdGlvbiovXG4gICAgICAgIGxldCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG5cbiAgICAgICAgaWYgKCByZXNwb25zZS5maWVsZHMgKXtcbiAgICAgICAgICB0aGlzLmhhc01ldGFkYXRhID0gdHJ1ZTtcbiAgICAgICAgICByZXNwb25zZS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZpZWxkLmZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBpdGVtcy5wdXNoKCB7IGxhYmVsOiBpdGVtLmtleSwgdmFsdWU6IGl0ZW0udmFsdWV9IClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBncm91cC5ncm91cC5wdXNoKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUoZ3JvdXApO1xuXG4gICAgICAvKkJyZWFkY3J1bWIgc2VjdGlvbiovXG4gICAgICAgIGxldCBicmVhZGNydW1icyA9IHtcbiAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfTtcblxuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGVsZW1lbnQubGFiZWwsXG4gICAgICAgICAgICBwYXlsb2FkOiBlbGVtZW50LmxpbmtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbGF0ZWQgRW50aXRpZXMgKi9cbiAgICAgIGlmICggcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXMgKSB7XG4gICAgICAgIHRoaXMuaGFzQnViYmxlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc0J1YmJsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1idWJibGUtY2hhcnQnKS51cGRhdGUobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFNpbWlsYXIgaXRlbSAqL1xuICAgICAgaWYgKCByZXNwb25zZS5zaW1pbGFySXRlbXMgKSB7XG4gICAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIikgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLnNpbWlsYXJJdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUobnVsbCk7XG4gICAgICB9XG4gIH1cblxuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkoIHJlc3BvbnNlOiBhbnksIHJlc2V0PzogYm9vbGVhbiApe1xuICAgIGlmICggIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcyApIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXldID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIjtcblxuICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXS5lbnRpdHkuaWQgKSxcbiAgICAgICAgICAuLi5yZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXSxcbiAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAxLjgsXG4gICAgICBidWJibGVzOiB0aGlzLmFsbEJ1YmJsZXMsXG4gICAgICByZXNldDogKCByZXNldCA/IHJlc2V0IDogZmFsc2UgKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCBlbnRpdHlJZDogc3RyaW5nICk6IHN0cmluZyB7XG4gICAgaWYoICFlbnRpdHlJZCApIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoICdCXycgKyBlbnRpdHlJZC5yZXBsYWNlKC8tL2csICdfJykgKTtcbiAgfVxuXG5cbn1cbiJdfQ==