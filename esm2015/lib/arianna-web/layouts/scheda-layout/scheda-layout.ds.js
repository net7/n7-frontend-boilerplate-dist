/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.contentParts = {};
        this.sidebarIsSticky = false;
        this.treeMaxHeight = '100%';
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
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart']['title'];
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items']['title'];
        this.metadataSectionTitle = this.configuration.get('scheda-layout')['metadata']['title'];
        this.hasSimilarItems = false;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-bubble-chart').updateOptions({ simple: true, config: this.configuration });
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'aw/patrimonio');
        // sidebar sticky control
        this._sidebarStickyControl();
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
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
            // this.one('aw-bubble-chart').updateOptions({
            // context: 'scheda',
            // configKeys: this.configuration.get("config-keys"),
            // bubbleContainerId: 'bubbleChartContainer',
            // containerId: 'bubble-chart-container',
            // });
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
    // setAllBubblesFromApolloQuery( response: any, reset?: boolean ){
    //   if ( !response || !response.relatedEntities ) { this.hasBubbles = false; return; }
    //   this.allBubbles = [];
    //   for ( let i = 0; i < response.relatedEntities.length; i++ ){
    // const color = this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
    // this.allBubbles.push(
    //   {
    //     id: this.convertEntityIdToBubbleId( response.relatedEntities[i].entity.id ),
    //     ...response.relatedEntities[i],
    //     color: color
    //   });
    // }
    // this.one('aw-scheda-bubble-chart').update({
    //   containerId: 'bubble-chart-container',
    //   width: window.innerWidth / 1.8,
    //   bubbles: this.allBubbles,
    //   reset: (reset ? reset : false)
    // });
    // }
    // private convertEntityIdToBubbleId(entityId: string): string {
    //   if (!entityId) return null;
    //   return ('B_' + entityId.replace(/-/g, '_'));
    // }
    /**
     * @private
     * @return {?}
     */
    _sidebarStickyControl() {
        /** @type {?} */
        const source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const windowTop = window.pageYOffset;
            /** @type {?} */
            const windowBottom = window.scrollY + window.innerHeight;
            /** @type {?} */
            const wrapper = document.getElementsByClassName('sticky-parent')[0];
            /** @type {?} */
            const wrapperTop = wrapper['offsetTop'];
            /** @type {?} */
            const wrapperBottom = wrapperTop + wrapper.clientHeight;
            this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (this.sidebarIsSticky && windowBottom < wrapperBottom) {
                this.treeMaxHeight = (windowBottom - windowTop - 50) + 'px';
            }
            else if (this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                this.treeMaxHeight = (wrapperBottom - windowTop - 50) + 'px';
            }
            else if (windowBottom < wrapperBottom) {
                this.treeMaxHeight = (windowBottom - wrapperTop - 50) + 'px';
            }
            else {
                this.treeMaxHeight = (wrapperBottom - wrapperTop - 50) + 'px';
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.destroyed$;
    /**
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
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.treeMaxHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFBdEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBVzFDLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBV3ZCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO0lBcU5oQyxDQUFDOzs7OztJQW5OQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENB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QzdCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0Qix3Q0FBNEI7O0lBRzVCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUN6Qix5Q0FBOEI7O0lBQzlCLHdDQUE4Qjs7SUFDOUIsZ0NBQWlCOztJQUNqQiw0Q0FBaUM7O0lBQ2pDLG1EQUF1Qzs7SUFDdkMsb0RBQXdDOztJQUN4QyxnREFBb0M7O0lBQ3BDLHVDQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUMzQiwwQ0FBK0I7O0lBQy9CLDJDQUFnQzs7SUFDaEMsOENBQStCOztJQUMvQiwyQ0FBK0I7O0lBQy9CLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcbiAgLy8gcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIC8vIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xuICBwdWJsaWMgdHJlZTogYW55O1xuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaW1pbGFySXRlbXNTZWN0aW9uVGl0bGU6IHN0cmluZztcbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBoYXNNZXRhZGF0YTogYm9vbGVhbjtcbiAgcHVibGljIGhhc0J1YmJsZXM6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2J1YmJsZS1jaGFydCddWyd0aXRsZSddO1xuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnbWV0YWRhdGEnXVsndGl0bGUnXTtcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7IHNpbXBsZTogdHJ1ZSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBwYXRyaW1vbmlvIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdhdy9wYXRyaW1vbmlvJyk7XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpe1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0VHJlZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZU5hdmlnYXRpb24oZGF0YSkge1xuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6IGRhdGFbJ2xhYmVsJ10sXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgfVxuXG4gIGxvYWRJdGVtKGlkKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBpZDogaWQsIG1heFNpbWlsYXJJdGVtczogbWF4U2ltaWxhckl0ZW1zIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRPRE86IHZhbG9yaSBzdGF0aWNpLCBkYSBwcmVuZGVyZSBkYSBjb25maWcgKi9cbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0NvbGxlemlvbmUgZFxcJ0FydGUnO1xuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDb2xsZXppb25lIGRcXCdBcnRlJyxcbiAgICAgICAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDZW50cm8gQXJjaGl2aScsXG4gICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIC8qQnJlYWRjcnVtYiBzZWN0aW9uKi9cbiAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcoU2NoZWRhKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHJlc3BvbnNlKVxuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcbiAgICAgIGxldCBjb250ZW50ID0ge307XG5cbiAgICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGljb25zOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3RyZWUnXVxuICAgICAgfSlcbiAgICAgIC8qIFJlbGF0ZWQgRW50aXRpZXMgKi9cbiAgICAgIC8vIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIC8vIGNvbnRleHQ6ICdzY2hlZGEnLFxuICAgICAgLy8gY29uZmlnS2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpLFxuICAgICAgLy8gYnViYmxlQ29udGFpbmVySWQ6ICdidWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICAvLyBjb250YWluZXJJZDogJ2J1YmJsZS1jaGFydC1jb250YWluZXInLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XG4gICAgICAgIGNvbnRlbnRbJ2NvbnRlbnQnXSA9IHJlc3BvbnNlLnRleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmltYWdlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFt7IHR5cGU6ICdpbWFnZScsIHVybDogcmVzcG9uc2UuaW1hZ2UsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfV07XG4gICAgICAgIGlmICghdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHtcbiAgICAgICAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlVmlld2VySXN0YW5jZSA9IHZpZXdlcjtcbiAgICAgICAgICAgICAgdmlld2VyLm9wZW4oaW1hZ2VzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0aXRsZU9iaiA9IHtcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgYWN0aW9uczoge31cbiAgICAgIH07XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuXG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gcmVzcG9uc2UuZmllbGRzICE9IG51bGw7XG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlT3B0aW9ucyh7IGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImxhYmVsc1wiKSB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgICAvKkJyZWFkY3J1bWIgc2VjdGlvbiovXG4gICAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWIpIHtcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgcGF5bG9hZDogZWxlbWVudC5saW5rXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gdHJ1ZTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiAnc2NoZWRhJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XG4gICAgICAvL3RoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShbXSk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxuICAvLyBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KCByZXNwb25zZTogYW55LCByZXNldD86IGJvb2xlYW4gKXtcbiAgLy8gICBpZiAoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzICkgeyB0aGlzLmhhc0J1YmJsZXMgPSBmYWxzZTsgcmV0dXJuOyB9XG4gIC8vICAgdGhpcy5hbGxCdWJibGVzID0gW107XG5cbiAgLy8gICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoOyBpKysgKXtcbiAgLy8gY29uc3QgY29sb3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV0gPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIjtcbiAgLy8gdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gIC8vICAge1xuICAvLyAgICAgaWQ6IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZCggcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS5pZCApLFxuICAvLyAgICAgLi4ucmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLFxuICAvLyAgICAgY29sb3I6IGNvbG9yXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy8gdGhpcy5vbmUoJ2F3LXNjaGVkYS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAvLyAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gIC8vICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMS44LFxuICAvLyAgIGJ1YmJsZXM6IHRoaXMuYWxsQnViYmxlcyxcbiAgLy8gICByZXNldDogKHJlc2V0ID8gcmVzZXQgOiBmYWxzZSlcbiAgLy8gfSk7XG4gIC8vIH1cblxuICAvLyBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vICAgaWYgKCFlbnRpdHlJZCkgcmV0dXJuIG51bGw7XG4gIC8vICAgcmV0dXJuICgnQl8nICsgZW50aXR5SWQucmVwbGFjZSgvLS9nLCAnXycpKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0sXG4gICAgICAgIHdyYXBwZXJUb3AgPSB3cmFwcGVyWydvZmZzZXRUb3AnXSxcbiAgICAgICAgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJUb3AgPD0gd2luZG93VG9wO1xuXG4gICAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSAod2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTApICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPj0gd3JhcHBlckJvdHRvbSkge1xuICAgICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9ICh3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTApICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gKHdpbmRvd0JvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MCkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9ICh3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwKSArICdweCc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19