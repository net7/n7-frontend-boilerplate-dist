/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject, of, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.stickyControlTrigger$ = new Subject();
        this.contentParts = {};
        this.sidebarIsSticky = false;
        this.treeMaxHeight = '100%';
        this.getTree = (/**
         * @return {?}
         */
        () => AwSchedaLayoutDS.tree);
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
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
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
     * @param {?} tree
     * @return {?}
     */
    setTree(tree) {
        AwSchedaLayoutDS.tree = tree;
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
            this.contentParts = [];
            /** @type {?} */
            const content = {};
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
            const titleObj = {
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
            // Breadcrumb section
            /** @type {?} */
            const breadcrumbs = {
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
        }
        // control sticky
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.stickyControlTrigger$.next();
        }));
    }
    /**
     * @return {?}
     */
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    /**
     * @private
     * @return {?}
     */
    _sidebarStickyControl() {
        /** @type {?} */
        const source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe((/**
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
AwSchedaLayoutDS.tree = null;
if (false) {
    /** @type {?} */
    AwSchedaLayoutDS.tree;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.stickyControlTrigger$;
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
    /** @type {?} */
    AwSchedaLayoutDS.prototype.getTree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFFVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekMsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFXckQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFXdkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUEwQzlCLFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBQztJQWlKeEMsQ0FBQzs7Ozs7SUF6TEMsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7UUFDL0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FB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QUMvRDtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFuTk0scUJBQUksR0FBUSxJQUFJLENBQUM7OztJQUF4QixzQkFBd0I7Ozs7O0lBQ3hCLHNDQUFpRDs7Ozs7SUFDakQsaURBQTREOzs7OztJQUM1RCx5Q0FBMkI7Ozs7O0lBQzNCLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlCOzs7OztJQUN6QixrQ0FBc0I7Ozs7O0lBQ3RCLHdDQUE0Qjs7SUFHNUIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBQ3pCLHlDQUE4Qjs7SUFDOUIsd0NBQThCOztJQUM5QixnQ0FBaUI7O0lBQ2pCLDRDQUFpQzs7SUFDakMsbURBQXVDOztJQUN2QyxvREFBd0M7O0lBQ3hDLGdEQUFvQzs7SUFDcEMsdUNBQTRCOztJQUM1QixzQ0FBMkI7O0lBQzNCLDBDQUErQjs7SUFDL0IsMkNBQWdDOztJQUNoQyw4Q0FBK0I7O0lBQy9CLDJDQUErQjs7SUFDL0IseUNBQThCOztJQTBDOUIsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHN0YXRpYyB0cmVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgc3RpY2t5Q29udHJvbFRyaWdnZXIkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcbiAgLy8gcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIC8vIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xuICBwdWJsaWMgdHJlZTogYW55O1xuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaW1pbGFySXRlbXNTZWN0aW9uVGl0bGU6IHN0cmluZztcbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBoYXNNZXRhZGF0YTogYm9vbGVhbjtcbiAgcHVibGljIGhhc0J1YmJsZXM6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2J1YmJsZS1jaGFydCddWyd0aXRsZSddO1xuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnbWV0YWRhdGEnXVsndGl0bGUnXTtcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7IHNpbXBsZTogdHJ1ZSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBwYXRyaW1vbmlvIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdhdy9wYXRyaW1vbmlvJyk7XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpe1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xuICAgICAgcmV0dXJuIG9mKEF3U2NoZWRhTGF5b3V0RFMudHJlZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VHJlZSh0cmVlKSB7XG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcbiAgfVxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xuXG4gIHVwZGF0ZU5hdmlnYXRpb24oZGF0YSkge1xuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcbiAgICAgIHRleHQ6IGRhdGFbJ2xhYmVsJ10sXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoaGVhZGVyKTtcbiAgfVxuXG4gIGxvYWRJdGVtKGlkKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBpZDogaWQsIG1heFNpbWlsYXJJdGVtczogbWF4U2ltaWxhckl0ZW1zIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRPRE86IHZhbG9yaSBzdGF0aWNpLCBkYSBwcmVuZGVyZSBkYSBjb25maWcgKi9cbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0NvbGxlemlvbmUgZFxcJ0FydGUnO1xuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDb2xsZXppb25lIGRcXCdBcnRlJyxcbiAgICAgICAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgZ3JhdmlkYSBzYWdpdHRpcyBwdWx2aW5hci4gRXRpYW0gaWFjdWxpcyBtYXhpbXVzIG1ldHVzLCBpZCB0aW5jaWR1bnQgbGliZXJvIGF1Y3RvciBldC4gUHJvaW4gdGVtcHVzIHR1cnBpcyB2ZWwgZXJhdCB1bHRyaWNlcywgaWQgdmVzdGlidWx1bSBhbnRlIGN1cnN1cy4gVmVzdGlidWx1bSBsb2JvcnRpcywgYW50ZSBhdCBlbGVpZmVuZCBjb25zZXF1YXQsIG1hc3NhIGxpYmVybyBiaWJlbmR1bSBqdXN0bywgaWQgZmVybWVudHVtIG1hZ25hIG9kaW8gYWMgbnVsbGEuIENyYXMgYWxpcXVldCBzY2VsZXJpc3F1ZSBtYWxlc3VhZGEuIE1hdXJpcyBjb25ndWUgZmVybWVudHVtIHRyaXN0aXF1ZS4gTnVsbGEgaW1wZXJkaWV0IGFjY3Vtc2FuIGR1aSwgdHJpc3RpcXVlIGxvYm9ydGlzIG1ldHVzIGVsZWlmZW5kIG5vbi4gRG9uZWMgcXVpcyBvZGlvIG1hc3NhLiBDcmFzIHNpdCBhbWV0IHNlbSBldSB0dXJwaXMgbW9sZXN0aWUgYmxhbmRpdCB2aXRhZSBzZWQgbmliaC4gUGVsbGVudGVzcXVlIG9ybmFyZSBlbmltIG5pc2wsIGV0IGVmZmljaXR1ciBhbnRlIGVsZW1lbnR1bSBhLiBVdCBuZWMgZXggZmluaWJ1cywgY29uZ3VlIGxpYmVybyBmZXVnaWF0LCBhbGlxdWFtIGFudGUuIENyYXMgc2VtIG5lcXVlLCBwZWxsZW50ZXNxdWUgZWdldCBtaSBhdCwgYXVjdG9yIHZ1bHB1dGF0ZSB0ZWxsdXMuIFNlZCBhbGlxdWFtIG1pIGEgdG9ydG9yIHVsdHJpY2llcyBpbnRlcmR1bS4gRXRpYW0gdGluY2lkdW50IG51bmMgY29tbW9kbyBudWxsYSBwb3J0dGl0b3Igc2VtcGVyLiBFdGlhbSBwb3J0YSBsYWNpbmlhIGxpYmVybyBhIG1hdHRpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGl0bGU6ICdDZW50cm8gQXJjaGl2aScsXG4gICAgICAgICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGdyYXZpZGEgc2FnaXR0aXMgcHVsdmluYXIuIEV0aWFtIGlhY3VsaXMgbWF4aW11cyBtZXR1cywgaWQgdGluY2lkdW50IGxpYmVybyBhdWN0b3IgZXQuIFByb2luIHRlbXB1cyB0dXJwaXMgdmVsIGVyYXQgdWx0cmljZXMsIGlkIHZlc3RpYnVsdW0gYW50ZSBjdXJzdXMuIFZlc3RpYnVsdW0gbG9ib3J0aXMsIGFudGUgYXQgZWxlaWZlbmQgY29uc2VxdWF0LCBtYXNzYSBsaWJlcm8gYmliZW5kdW0ganVzdG8sIGlkIGZlcm1lbnR1bSBtYWduYSBvZGlvIGFjIG51bGxhLiBDcmFzIGFsaXF1ZXQgc2NlbGVyaXNxdWUgbWFsZXN1YWRhLiBNYXVyaXMgY29uZ3VlIGZlcm1lbnR1bSB0cmlzdGlxdWUuIE51bGxhIGltcGVyZGlldCBhY2N1bXNhbiBkdWksIHRyaXN0aXF1ZSBsb2JvcnRpcyBtZXR1cyBlbGVpZmVuZCBub24uIERvbmVjIHF1aXMgb2RpbyBtYXNzYS4gQ3JhcyBzaXQgYW1ldCBzZW0gZXUgdHVycGlzIG1vbGVzdGllIGJsYW5kaXQgdml0YWUgc2VkIG5pYmguIFBlbGxlbnRlc3F1ZSBvcm5hcmUgZW5pbSBuaXNsLCBldCBlZmZpY2l0dXIgYW50ZSBlbGVtZW50dW0gYS4gVXQgbmVjIGV4IGZpbmlidXMsIGNvbmd1ZSBsaWJlcm8gZmV1Z2lhdCwgYWxpcXVhbSBhbnRlLiBDcmFzIHNlbSBuZXF1ZSwgcGVsbGVudGVzcXVlIGVnZXQgbWkgYXQsIGF1Y3RvciB2dWxwdXRhdGUgdGVsbHVzLiBTZWQgYWxpcXVhbSBtaSBhIHRvcnRvciB1bHRyaWNpZXMgaW50ZXJkdW0uIEV0aWFtIHRpbmNpZHVudCBudW5jIGNvbW1vZG8gbnVsbGEgcG9ydHRpdG9yIHNlbXBlci4gRXRpYW0gcG9ydGEgbGFjaW5pYSBsaWJlcm8gYSBtYXR0aXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIC8qQnJlYWRjcnVtYiBzZWN0aW9uKi9cbiAgICBsZXQgYnJlYWRjcnVtYnMgPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XG4gICAgICBjb25zdCBjb250ZW50ID0ge307XG5cbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XG4gICAgICAgIGNvbnRlbnRbJ2NvbnRlbnQnXSA9IHJlc3BvbnNlLnRleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmltYWdlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFt7IHR5cGU6ICdpbWFnZScsIHVybDogcmVzcG9uc2UuaW1hZ2UsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfV07XG4gICAgICAgIGlmICghdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHtcbiAgICAgICAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlVmlld2VySXN0YW5jZSA9IHZpZXdlcjtcbiAgICAgICAgICAgICAgdmlld2VyLm9wZW4oaW1hZ2VzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xuICAgICAgICBpY29uOiByZXNwb25zZS5pY29uLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsLFxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHM6IHJlc3BvbnNlLnN1YlRpdGxlLFxuICAgICAgICBhY3Rpb25zOiB7fVxuICAgICAgfTtcblxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZU9iaik7XG5cbiAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSByZXNwb25zZS5maWVsZHMgIT0gbnVsbDtcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGVPcHRpb25zKHsgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShyZXNwb25zZSk7XG5cbiAgICAgIC8vIEJyZWFkY3J1bWIgc2VjdGlvblxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWIpIHtcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgcGF5bG9hZDogZWxlbWVudC5saW5rXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gdHJ1ZTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiAnc2NoZWRhJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY29udHJvbCBzdGlja3lcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdpbmRvd0JvdHRvbSA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LXBhcmVudCcpWzBdLFxuICAgICAgICB3cmFwcGVyVG9wID0gd3JhcHBlclsnb2Zmc2V0VG9wJ10sXG4gICAgICAgIHdyYXBwZXJCb3R0b20gPSB3cmFwcGVyVG9wICsgd3JhcHBlci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcblxuICAgICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gKHdpbmRvd0JvdHRvbSAtIHdpbmRvd1RvcCAtIDUwKSArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSAod3JhcHBlckJvdHRvbSAtIHdpbmRvd1RvcCAtIDUwKSArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Qm90dG9tIDwgd3JhcHBlckJvdHRvbSkge1xuICAgICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9ICh3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTApICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSAod3JhcHBlckJvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==