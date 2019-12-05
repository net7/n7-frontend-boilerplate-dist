/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ds.ts
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
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'aw/patrimonio');
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
            return this.communication.request$('getNode', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: { id: id, maxSimilarItems: maxSimilarItems }
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
            console.log('(Scheda) Apollo responded with: ', response);
            this.contentParts = [];
            /** @type {?} */
            let content = {};
            this.one('aw-tree').updateOptions({
                icons: this.configuration.get('scheda-layout')['tree']
            });
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
                icon: response.icon,
                title: {
                    main: {
                        text: response.title || response.label,
                        classes: 'bold',
                    }
                },
                tools: response.subTitle,
                actions: {}
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            this.hasMetadata = response.fields != null;
            this.one('aw-scheda-metadata').updateOptions({ labels: this.configuration.get("labels") });
            this.one('aw-scheda-metadata').update(response);
            /*Breadcrumb section*/
            /** @type {?} */
            let breadcrumbs = {
                items: []
            };
            if (response.breadcrumb) {
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
        }
        if (response.relatedItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        else {
            this.hasSimilarItems = false;
            //this.one('aw-linked-objects').update([]);
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
        if (!response || !response.relatedEntities) {
            this.hasBubbles = false;
            return;
        }
        this.allBubbles = [];
        for (let i = 0; i < response.relatedEntities.length; i++) {
            /** @type {?} */
            const color = this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(Object.assign({ id: this.convertEntityIdToBubbleId(response.relatedEntities[i].entity.id) }, response.relatedEntities[i], { color: color }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFBdEQ7O1FBVVUsZUFBVSxHQUFVLElBQUksQ0FBQztRQUMxQixvQkFBZSxHQUFVLEVBQUUsQ0FBQztJQXdNckMsQ0FBQzs7Ozs7OztJQXBMQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFD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QUVuQyxtQ0FBb0I7O0lBQ3BCLHFDQUF5Qjs7SUFDekIseUNBQThCOztJQUM5Qix3Q0FBeUI7O0lBQ3pCLGdDQUFpQjs7SUFDakIsNENBQWlDOztJQUNqQyxtREFBdUM7O0lBQ3ZDLG9EQUF3Qzs7SUFDeEMsZ0RBQW9DOztJQUNwQyx1Q0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFDM0IsMENBQStCOztJQUMvQiwyQ0FBZ0M7O0lBQ2hDLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIC8qKlxuICAqIElmIHlvdSBhcmUgbm90IHVzaW5nIHRoZXNlIHZhcmlhYmxlcyAoZnJvbSB5b3VyLWxheW91dC50cyksXG4gICogcmVtb3ZlIHRoZW0gZnJvbSBoZXJlIHRvby5cbiAgKi9cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueTtcbiAgcHVibGljIHRyZWU6IGFueTtcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVDaGFydFNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNCdWJibGVzOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XG4gIHB1YmxpYyBpbWFnZVZpZXdlcklzdGFuY2U6IGFueTtcbiAgLyoqXG4gICogSWYgeW91IGFyZSBub3QgdXNpbmcgdGhlc2UgdmFyaWFibGVzIChmcm9tIHlvdXItbGF5b3V0LnRzKSxcbiAgKiByZW1vdmUgdGhlbSBmcm9tIG9uSW5pdCgpIHBhcmFtZXRlcnMgYW5kIGluc2lkZSB0aGUgZnVuY3Rpb24uXG4gICovXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2J1YmJsZS1jaGFydCddWyd0aXRsZSddO1xuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnbWV0YWRhdGEnXVsndGl0bGUnXTtcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBwYXRyaW1vbmlvIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdhdy9wYXRyaW1vbmlvJyk7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0VHJlZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZU5hdmlnYXRpb24oZGF0YSkge1xuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6IGRhdGFbJ2xhYmVsJ10sXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgfVxuXG4gIGxvYWRJdGVtKGlkKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcbiAgICAgIHJldHVybiAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXROb2RlJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IGlkLCBtYXhTaW1pbGFySXRlbXM6IG1heFNpbWlsYXJJdGVtcyB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUT0RPOiB2YWxvcmkgc3RhdGljaSwgZGEgcHJlbmRlcmUgZGEgY29uZmlnICovXG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdDb2xsZXppb25lIGRcXCdBcnRlJztcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRpdGxlOiAnQ29sbGV6aW9uZSBkXFwnQXJ0ZScsXG4gICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRpdGxlOiAnQ2VudHJvIEFyY2hpdmknLFxuICAgICAgICAgIGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBncmF2aWRhIHNhZ2l0dGlzIHB1bHZpbmFyLiBFdGlhbSBpYWN1bGlzIG1heGltdXMgbWV0dXMsIGlkIHRpbmNpZHVudCBsaWJlcm8gYXVjdG9yIGV0LiBQcm9pbiB0ZW1wdXMgdHVycGlzIHZlbCBlcmF0IHVsdHJpY2VzLCBpZCB2ZXN0aWJ1bHVtIGFudGUgY3Vyc3VzLiBWZXN0aWJ1bHVtIGxvYm9ydGlzLCBhbnRlIGF0IGVsZWlmZW5kIGNvbnNlcXVhdCwgbWFzc2EgbGliZXJvIGJpYmVuZHVtIGp1c3RvLCBpZCBmZXJtZW50dW0gbWFnbmEgb2RpbyBhYyBudWxsYS4gQ3JhcyBhbGlxdWV0IHNjZWxlcmlzcXVlIG1hbGVzdWFkYS4gTWF1cmlzIGNvbmd1ZSBmZXJtZW50dW0gdHJpc3RpcXVlLiBOdWxsYSBpbXBlcmRpZXQgYWNjdW1zYW4gZHVpLCB0cmlzdGlxdWUgbG9ib3J0aXMgbWV0dXMgZWxlaWZlbmQgbm9uLiBEb25lYyBxdWlzIG9kaW8gbWFzc2EuIENyYXMgc2l0IGFtZXQgc2VtIGV1IHR1cnBpcyBtb2xlc3RpZSBibGFuZGl0IHZpdGFlIHNlZCBuaWJoLiBQZWxsZW50ZXNxdWUgb3JuYXJlIGVuaW0gbmlzbCwgZXQgZWZmaWNpdHVyIGFudGUgZWxlbWVudHVtIGEuIFV0IG5lYyBleCBmaW5pYnVzLCBjb25ndWUgbGliZXJvIGZldWdpYXQsIGFsaXF1YW0gYW50ZS4gQ3JhcyBzZW0gbmVxdWUsIHBlbGxlbnRlc3F1ZSBlZ2V0IG1pIGF0LCBhdWN0b3IgdnVscHV0YXRlIHRlbGx1cy4gU2VkIGFsaXF1YW0gbWkgYSB0b3J0b3IgdWx0cmljaWVzIGludGVyZHVtLiBFdGlhbSB0aW5jaWR1bnQgbnVuYyBjb21tb2RvIG51bGxhIHBvcnR0aXRvciBzZW1wZXIuIEV0aWFtIHBvcnRhIGxhY2luaWEgbGliZXJvIGEgbWF0dGlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgICAvKkJyZWFkY3J1bWIgc2VjdGlvbiovXG4gICAgbGV0IGJyZWFkY3J1bWJzID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnKFNjaGVkYSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCByZXNwb25zZSlcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XG4gICAgICBsZXQgY29udGVudCA9IHt9O1xuXG4gICAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBpY29uczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWyd0cmVlJ11cbiAgICAgIH0pXG4gICAgICAvKiBSZWxhdGVkIEVudGl0aWVzICovXG4gICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLFxuICAgICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICAgIGJ1YmJsZUNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgICBjb250YWluZXJJZDogJ2J1YmJsZS1jaGFydC1jb250YWluZXInLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XG4gICAgICAgIGNvbnRlbnRbJ2NvbnRlbnQnXSA9IHJlc3BvbnNlLnRleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmltYWdlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFt7IHR5cGU6ICdpbWFnZScsIHVybDogcmVzcG9uc2UuaW1hZ2UsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfV07XG4gICAgICAgIGlmICghdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHtcbiAgICAgICAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlVmlld2VySXN0YW5jZSA9IHZpZXdlcjtcbiAgICAgICAgICAgICAgdmlld2VyLm9wZW4oaW1hZ2VzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0aXRsZU9iaiA9IHtcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgYWN0aW9uczoge31cbiAgICAgIH07XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuICAgICAgXG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gcmVzcG9uc2UuZmllbGRzICE9IG51bGw7XG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlT3B0aW9ucyh7IGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImxhYmVsc1wiKSB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgICAvKkJyZWFkY3J1bWIgc2VjdGlvbiovXG4gICAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYoIHJlc3BvbnNlLmJyZWFkY3J1bWIgKXtcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgcGF5bG9hZDogZWxlbWVudC5saW5rXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgICAgaWYgKCByZXNwb25zZS5yZWxhdGVkSXRlbXMgKSB7XG4gICAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoW10pO1xuICAgICAgfVxuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KCByZXNwb25zZTogYW55LCByZXNldD86IGJvb2xlYW4gKXtcbiAgICBpZiAoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzICkgeyB0aGlzLmhhc0J1YmJsZXMgPSBmYWxzZTsgcmV0dXJuOyB9XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV0gPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIjtcblxuICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0uZW50aXR5LmlkICksXG4gICAgICAgICAgLi4ucmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLFxuICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgY29udGFpbmVySWQ6ICdidWJibGUtY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDEuOCxcbiAgICAgIGJ1YmJsZXM6IHRoaXMuYWxsQnViYmxlcyxcbiAgICAgIHJlc2V0OiAocmVzZXQgPyByZXNldCA6IGZhbHNlKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW50aXR5SWQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoJ0JfJyArIGVudGl0eUlkLnJlcGxhY2UoLy0vZywgJ18nKSk7XG4gIH1cblxuXG59XG4iXX0=