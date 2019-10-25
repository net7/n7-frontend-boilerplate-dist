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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
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
            /* Related Entities */
            this.one('aw-bubble-chart').updateOptions({
                context: 'scheda',
                configKeys: this.configuration.get("config-keys"),
                bubbleContainerId: 'bubbleChartContainer',
                containerId: 'bubble-chart-container',
            });
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
        /*if ( response.connectedEntities ) {
          this.hasBubbles = true;
          this.setAllBubblesFromApolloQuery(response);
        } else {
          this.hasBubbles = false;
          this.one('aw-scheda-bubble-chart').update(null);
        }*/
        /* Similar item */
        if (response.similarItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
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
    AwSchedaLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFVVSxlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO0lBeU5yQyxDQUFDOzs7Ozs7O0lBck1DLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFO1FBQzlFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMs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Qix3Q0FBeUI7O0lBQ3pCLGdDQUFpQjs7SUFDakIsNENBQWlDOztJQUNqQyxtREFBdUM7O0lBQ3ZDLG9EQUF3Qzs7SUFDeEMsZ0RBQW9DOztJQUNwQyx1Q0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFDM0IsMENBQStCOztJQUMvQiwyQ0FBZ0M7O0lBQ2hDLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBoZXJlIHRvby5cbiAgKi9cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueTtcbiAgcHVibGljIHRyZWU6IGFueTtcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVDaGFydFNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNCdWJibGVzOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XG4gIHB1YmxpYyBpbWFnZVZpZXdlcklzdGFuY2U6IGFueTtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSxcbiAgKiByZW1vdmUgdGhlbSBmcm9tIG9uSW5pdCgpIHBhcmFtZXRlcnMgYW5kIGluc2lkZSB0aGUgZnVuY3Rpb24uXG4gICovXG4gIG9uSW5pdCh7Y29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbiB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5idWJibGVDaGFydFNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnYnViYmxlLWNoYXJ0J11bJ3RpdGxlJ107XG4gICAgdGhpcy5zaW1pbGFySXRlbXNTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsndGl0bGUnXTtcbiAgICB0aGlzLm1ldGFkYXRhU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydtZXRhZGF0YSddWyd0aXRsZSddO1xuICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuXG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKCBpZCApIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRUcmVlJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlTmF2aWdhdGlvbiggZGF0YSApIHtcbiAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgaWNvbkxlZnQ6ICduNy1pY29uLXRyZWUtaWNvbicsXG4gICAgICB0ZXh0OiAgZGF0YVsnbGFiZWwnXSxcbiAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtbGVmdCcsXG4gICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgcGF5bG9hZDogJ2hlYWRlcidcbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZShoZWFkZXIpO1xuICB9XG5cbiAgbG9hZEl0ZW0oIGlkICkge1xuICAgIGlmICggaWQgKSB7XG4gICAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcbiAgICAgIHJldHVybiAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRJdGVtRGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7IGl0ZW1JZDogaWQsIG1heFNpbWlsYXJJdGVtcyB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUT0RPOiB2YWxvcmkgc3RhdGljaSwgZGEgcHJlbmRlcmUgZGEgY29uZmlnICovXG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdDb2xsZXppb25lIGRcXCdBcnRlJztcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRpdGxlOiAnQ29sbGV6aW9uZSBkXFwnQXJ0ZScsXG4gICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRpdGxlOiAnQ2VudHJvIEFyY2hpdmknLFxuICAgICAgICAgIGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBncmF2aWRhIHNhZ2l0dGlzIHB1bHZpbmFyLiBFdGlhbSBpYWN1bGlzIG1heGltdXMgbWV0dXMsIGlkIHRpbmNpZHVudCBsaWJlcm8gYXVjdG9yIGV0LiBQcm9pbiB0ZW1wdXMgdHVycGlzIHZlbCBlcmF0IHVsdHJpY2VzLCBpZCB2ZXN0aWJ1bHVtIGFudGUgY3Vyc3VzLiBWZXN0aWJ1bHVtIGxvYm9ydGlzLCBhbnRlIGF0IGVsZWlmZW5kIGNvbnNlcXVhdCwgbWFzc2EgbGliZXJvIGJpYmVuZHVtIGp1c3RvLCBpZCBmZXJtZW50dW0gbWFnbmEgb2RpbyBhYyBudWxsYS4gQ3JhcyBhbGlxdWV0IHNjZWxlcmlzcXVlIG1hbGVzdWFkYS4gTWF1cmlzIGNvbmd1ZSBmZXJtZW50dW0gdHJpc3RpcXVlLiBOdWxsYSBpbXBlcmRpZXQgYWNjdW1zYW4gZHVpLCB0cmlzdGlxdWUgbG9ib3J0aXMgbWV0dXMgZWxlaWZlbmQgbm9uLiBEb25lYyBxdWlzIG9kaW8gbWFzc2EuIENyYXMgc2l0IGFtZXQgc2VtIGV1IHR1cnBpcyBtb2xlc3RpZSBibGFuZGl0IHZpdGFlIHNlZCBuaWJoLiBQZWxsZW50ZXNxdWUgb3JuYXJlIGVuaW0gbmlzbCwgZXQgZWZmaWNpdHVyIGFudGUgZWxlbWVudHVtIGEuIFV0IG5lYyBleCBmaW5pYnVzLCBjb25ndWUgbGliZXJvIGZldWdpYXQsIGFsaXF1YW0gYW50ZS4gQ3JhcyBzZW0gbmVxdWUsIHBlbGxlbnRlc3F1ZSBlZ2V0IG1pIGF0LCBhdWN0b3IgdnVscHV0YXRlIHRlbGx1cy4gU2VkIGFsaXF1YW0gbWkgYSB0b3J0b3IgdWx0cmljaWVzIGludGVyZHVtLiBFdGlhbSB0aW5jaWR1bnQgbnVuYyBjb21tb2RvIG51bGxhIHBvcnR0aXRvciBzZW1wZXIuIEV0aWFtIHBvcnRhIGxhY2luaWEgbGliZXJvIGEgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgICAgLypCcmVhZGNydW1iIHNlY3Rpb24qL1xuICAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB7fTtcblxuICAgICAgICAvKiBSZWxhdGVkIEVudGl0aWVzICovXG4gICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLFxuICAgICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICAgIGJ1YmJsZUNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgICBjb250YWluZXJJZDogJ2J1YmJsZS1jaGFydC1jb250YWluZXInLFxuICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCByZXNwb25zZS50ZXh0ICl7XG4gICAgICAgICAgY29udGVudFsnY29udGVudCddID0gcmVzcG9uc2UudGV4dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgICBpZiAoIHJlc3BvbnNlLmltYWdlICkge1xuICAgICAgICAgIGNvbnN0IGltYWdlcyA9ICBbe3R5cGU6ICdpbWFnZScsIHVybDogcmVzcG9uc2UuaW1hZ2UsIGJ1aWxkUHlyYW1pZDogZmFsc2V9XTtcbiAgICAgICAgICBpZiggIXRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlICkge1xuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgICAgICBfc2V0Vmlld2VyIDogKHZpZXdlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlID0gdmlld2VyO1xuICAgICAgICAgICAgICAgIHZpZXdlci5vcGVuKGltYWdlcyk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aXRsZU9iaiA9IHtcbiAgICAgICAgICBpY29uOiByZXNwb25zZS5pdGVtLmljb24sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgICBhY3Rpb25zOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuXG4gICAgICAgIC8qTWV0YWRhdGEgc2VjdGlvbiovXG4gICAgICAgIGxldCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG5cbiAgICAgICAgaWYgKCByZXNwb25zZS5maWVsZHMgKXtcbiAgICAgICAgICB0aGlzLmhhc01ldGFkYXRhID0gdHJ1ZTtcbiAgICAgICAgICByZXNwb25zZS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZpZWxkLmZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBpdGVtcy5wdXNoKCB7IGxhYmVsOiBpdGVtLmtleSwgdmFsdWU6IGl0ZW0udmFsdWV9IClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBncm91cC5ncm91cC5wdXNoKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUoZ3JvdXApO1xuXG4gICAgICAvKkJyZWFkY3J1bWIgc2VjdGlvbiovXG4gICAgICAgIGxldCBicmVhZGNydW1icyA9IHtcbiAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfTtcblxuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGVsZW1lbnQubGFiZWwsXG4gICAgICAgICAgICBwYXlsb2FkOiBlbGVtZW50LmxpbmtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XG4gICAgICB9XG5cbiAgICAgIC8qaWYgKCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcyApIHtcbiAgICAgICAgdGhpcy5oYXNCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzQnViYmxlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZShudWxsKTtcbiAgICAgIH0qL1xuXG4gICAgICAvKiBTaW1pbGFyIGl0ZW0gKi9cbiAgICAgIGlmICggcmVzcG9uc2Uuc2ltaWxhckl0ZW1zICkge1xuICAgICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IHRydWU7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiAnc2NoZWRhJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLnNpbWlsYXJJdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUobnVsbCk7XG4gICAgICB9XG4gIH1cblxuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkoIHJlc3BvbnNlOiBhbnksIHJlc2V0PzogYm9vbGVhbiApe1xuICAgIGlmICggIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcyApIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXldID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIjtcblxuICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCByZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXS5lbnRpdHkuaWQgKSxcbiAgICAgICAgICAuLi5yZXNwb25zZS5jb25uZWN0ZWRFbnRpdGllc1tpXSxcbiAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAxLjgsXG4gICAgICBidWJibGVzOiB0aGlzLmFsbEJ1YmJsZXMsXG4gICAgICByZXNldDogKCByZXNldCA/IHJlc2V0IDogZmFsc2UgKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCBlbnRpdHlJZDogc3RyaW5nICk6IHN0cmluZyB7XG4gICAgaWYoICFlbnRpdHlJZCApIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoICdCXycgKyBlbnRpdHlJZC5yZXBsYWNlKC8tL2csICdfJykgKTtcbiAgfVxuXG5cbn1cbiJdfQ==