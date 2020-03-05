/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { fromEvent, Subject, of, merge, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
export class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.stickyControlTrigger$ = new Subject();
        this.contentParts = {};
        this.sidebarIsSticky = false;
        this.treeMaxHeight = '100%';
        this.contentIsLoading = false;
        this.currentId = null;
        this.getTree = (/**
         * @return {?}
         */
        () => AwSchedaLayoutDS.tree);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication, }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart'].title;
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items'].title;
        this.metadataSectionTitle = this.configuration.get('scheda-layout').metadata.title;
        this.hasSimilarItems = false;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'patrimonio');
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
            params: { treeId: id },
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
     * @param {?} text
     * @return {?}
     */
    updateNavigation(text) {
        this.one('aw-sidebar-header').update({ text });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadItem(id) {
        /** @type {?} */
        const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { id, maxSimilarItems },
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loadContent(response) {
        if (response) {
            this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasBubbles = Array.isArray(response.relatedEntities) && response.relatedEntities.length;
            this.hasImage = !!response.image;
            this.contentParts = [];
            /** @type {?} */
            const content = { content: null };
            if (response.text) {
                content.content = response.text;
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
                    },
                },
                tools: response.subTitle,
                actions: {},
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            this.one('aw-scheda-metadata').updateOptions({ labels: this.configuration.get('labels') });
            this.one('aw-scheda-metadata').update(response);
            // Breadcrumb section
            /** @type {?} */
            const breadcrumbs = {
                items: [],
            };
            if (response.breadcrumbs) {
                response.breadcrumbs.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    breadcrumbs.items.push({
                        label: element.label,
                        anchor: {
                            href: [
                                this.configuration.get('paths').schedaBasePath,
                                `${element.link}/`,
                                helpers.slugify(element.label),
                            ].join(''),
                        },
                    });
                }));
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
            }
            // update head title
            this.mainState.update('headTitle', `Arianna Web > Patrimonio > ${response.title || response.label}`);
        }
        if (response.relatedItems) {
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
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
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
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
            const wrapper = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
            /** @type {?} */
            const wrapperTop = wrapper.offsetTop;
            /** @type {?} */
            const wrapperBottom = wrapperTop + wrapper.clientHeight;
            this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (this.sidebarIsSticky && windowBottom < wrapperBottom) {
                this.treeMaxHeight = `${windowBottom - windowTop - 50}px`;
            }
            else if (this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                this.treeMaxHeight = `${wrapperBottom - windowTop - 50}px`;
            }
            else if (windowBottom < wrapperBottom) {
                this.treeMaxHeight = `${windowBottom - wrapperTop - 50}px`;
            }
            else {
                this.treeMaxHeight = `${wrapperBottom - wrapperTop - 50}px`;
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
    AwSchedaLayoutDS.prototype.hasImage;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.treeMaxHeight;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.contentIsLoading;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.emptyLabel;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.getTree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQzlCLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFBdEQ7O1FBR1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpDLDBCQUFxQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBb0JyRCxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQXdCdkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGNBQVMsR0FBa0IsSUFBSSxDQUFDO1FBd0R2QyxZQUFPOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUM7SUFtSXhDLENBQUM7Ozs7O0lBdkxDLE1BQU0sQ0FBQyxFQUNMLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxHQUN2RTtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JC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RS9CLHlDQUE4Qjs7SUFFOUIsNENBQWdDOztJQUVoQyxxQ0FBdUM7O0lBRXZDLHNDQUEwQjs7SUFzRDFCLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7XHJcbiAgZnJvbUV2ZW50LCBTdWJqZWN0LCBvZiwgbWVyZ2UsXHJcbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIC8vIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xyXG4gIC8vIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGNvbnRlbnRQYXJ0czogYW55ID0ge307XHJcblxyXG4gIHB1YmxpYyB0cmVlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbWV0YWRhdGFTZWN0aW9uVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzQnViYmxlczogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzSW1hZ2U6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBpbWFnZVZpZXdlcklzdGFuY2U6IGFueTtcclxuXHJcbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdHJlZU1heEhlaWdodCA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIGNvbnRlbnRJc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBlbXB0eUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5idWJibGVDaGFydFNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnYnViYmxlLWNoYXJ0J10udGl0bGU7XHJcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKS5tZXRhZGF0YS50aXRsZTtcclxuICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XHJcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpLmJ1YmJsZWNoYXJ0IDogZmFsc2U7XHJcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICBzaW1wbGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbXB0eUxhYmVsID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydlbXB0eS1sYWJlbCddO1xyXG5cclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IHBhdHJpbW9uaW8gTGF5b3V0Jyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncGF0cmltb25pbycpO1xyXG5cclxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcclxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xyXG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xyXG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRyZWUodHJlZSkge1xyXG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcclxuICB9XHJcblxyXG4gIGdldFRyZWUgPSAoKSA9PiBBd1NjaGVkYUxheW91dERTLnRyZWU7XHJcblxyXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xyXG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKHsgdGV4dCB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRJdGVtKGlkKSB7XHJcbiAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyBpZCwgbWF4U2ltaWxhckl0ZW1zIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5oYXNNZXRhZGF0YSA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZmllbGRzKSAmJiByZXNwb25zZS5maWVsZHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEl0ZW1zKSAmJiByZXNwb25zZS5yZWxhdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFzQnViYmxlcyA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKSAmJiByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0ltYWdlID0gISFyZXNwb25zZS5pbWFnZTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IGNvbnRlbnQ6IG51bGwgfTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XHJcbiAgICAgICAgY29udGVudC5jb250ZW50ID0gcmVzcG9uc2UudGV4dDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xyXG4gICAgICBpZiAocmVzcG9uc2UuaW1hZ2UpIHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbeyB0eXBlOiAnaW1hZ2UnLCB1cmw6IHJlc3BvbnNlLmltYWdlLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH1dO1xyXG4gICAgICAgIGlmICghdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UpIHtcclxuICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW1hZ2UnKS51cGRhdGUoe1xyXG4gICAgICAgICAgICB2aWV3ZXJJZDogJ3NjaGVkYS1sYXlvdXQtdmlld2VyJyxcclxuICAgICAgICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlID0gdmlld2VyO1xyXG4gICAgICAgICAgICAgIHZpZXdlci5vcGVuKGltYWdlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2Uub3BlbihpbWFnZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGl0bGVPYmogPSB7XHJcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcclxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcclxuICAgICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xyXG5cclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZU9wdGlvbnMoeyBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIC8vIEJyZWFkY3J1bWIgc2VjdGlvblxyXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHtcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuYnJlYWRjcnVtYnMpIHtcclxuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgbGFiZWw6IGVsZW1lbnQubGFiZWwsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBgJHtlbGVtZW50Lmxpbmt9L2AsXHJcbiAgICAgICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkoZWxlbWVudC5sYWJlbCksXHJcbiAgICAgICAgICAgICAgXS5qb2luKCcnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIGBBcmlhbm5hIFdlYiA+IFBhdHJpbW9uaW8gPiAke3Jlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb250cm9sIHN0aWNreVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xyXG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xyXG5cclxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcclxuXHJcbiAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcclxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19