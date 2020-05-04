/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { fromEvent, Subject, of, merge, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
var AwSchedaLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaLayoutDS, _super);
    function AwSchedaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.stickyControlTrigger$ = new Subject();
        _this.contentParts = {};
        _this.sidebarIsSticky = false;
        _this.treeMaxHeight = '100%';
        _this.contentIsLoading = false;
        _this.currentId = null;
        _this.getTree = (/**
         * @return {?}
         */
        function () { return AwSchedaLayoutDS.tree; });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
        this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // sidebar sticky control
        this._sidebarStickyControl();
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { treeId: id },
        });
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.setTree = /**
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        AwSchedaLayoutDS.tree = tree;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.updateNavigation = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.one('aw-sidebar-header').update({ text: text });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { id: id, maxSimilarItems: maxSimilarItems },
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadContent = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasBubbles = Array.isArray(response.relatedEntities) && response.relatedEntities.length;
            this.hasImage = !!response.image;
            this.contentParts = [];
            /** @type {?} */
            var content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // image viewer
            if (response.images) {
                /** @type {?} */
                var viewerDataSource = this.getWidgetDataSource('aw-scheda-image');
                if (!viewerDataSource.hasInstance()) {
                    this.one('aw-scheda-image').update(response);
                }
                else {
                    viewerDataSource.updateImages(response);
                }
            }
            /** @type {?} */
            var titleObj = {
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
            this.one('aw-scheda-metadata').updateOptions({
                labels: this.configuration.get('labels'),
                metadataToExclude: this.configuration.get('scheda-layout')['metadata-to-exclude']
            });
            this.one('aw-scheda-metadata').update(response);
            // Breadcrumb section
            /** @type {?} */
            var breadcrumbs_1 = {
                items: [],
            };
            if (response.breadcrumbs) {
                response.breadcrumbs.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    breadcrumbs_1.items.push({
                        label: element.label,
                        anchor: {
                            href: [
                                _this.configuration.get('paths').schedaBasePath,
                                element.link + "/",
                                helpers.slugify(element.label),
                            ].join(''),
                        },
                    });
                }));
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
            }
            // update head title
            this.mainState.update('headTitle', "Arianna Web > Patrimonio > " + (response.title || response.label));
        }
        if (response.relatedItems) {
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        // control sticky
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.stickyControlTrigger$.next();
        }));
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.collapseSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    };
    /**
     * @private
     * @return {?}
     */
    AwSchedaLayoutDS.prototype._sidebarStickyControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        /** @type {?} */
        var source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var windowTop = window.pageYOffset;
            /** @type {?} */
            var windowBottom = window.scrollY + window.innerHeight;
            /** @type {?} */
            var wrapper = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
            /** @type {?} */
            var wrapperTop = wrapper.offsetTop;
            /** @type {?} */
            var wrapperBottom = wrapperTop + wrapper.clientHeight;
            _this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (_this.sidebarIsSticky && windowBottom < wrapperBottom) {
                _this.treeMaxHeight = windowBottom - windowTop - 50 + "px";
            }
            else if (_this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                _this.treeMaxHeight = wrapperBottom - windowTop - 50 + "px";
            }
            else if (windowBottom < wrapperBottom) {
                _this.treeMaxHeight = windowBottom - wrapperTop - 50 + "px";
            }
            else {
                _this.treeMaxHeight = wrapperBottom - wrapperTop - 50 + "px";
            }
        }));
    };
    AwSchedaLayoutDS.tree = null;
    return AwSchedaLayoutDS;
}(LayoutDataSource));
export { AwSchedaLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUM5QixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFpUEM7UUE5T1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QywyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQW9CckQsa0JBQVksR0FBUSxFQUFFLENBQUM7UUF3QnZCLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLG1CQUFhLEdBQUcsTUFBTSxDQUFDO1FBRXZCLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixlQUFTLEdBQWtCLElBQUksQ0FBQztRQXlEdkMsYUFBTzs7O1FBQUcsY0FBTSxPQUFBLGdCQUFnQixDQUFDLElBQUksRUFBckIsQ0FBcUIsRUFBQzs7SUFpSXhDLENBQUM7Ozs7O0lBdExDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUVOO1lBREMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSw4QkFBWSxFQUFFLGdDQUFhO1FBRXRFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFN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RWpDLG1EQUF1Qzs7SUFFdkMsb0RBQXdDOztJQUV4QyxnREFBb0M7O0lBRXBDLHVDQUE0Qjs7SUFFNUIsc0NBQTJCOztJQUUzQiwwQ0FBK0I7O0lBRS9CLDJDQUFnQzs7SUFFaEMsb0NBQXlCOztJQUV6Qiw4Q0FBK0I7O0lBRS9CLDJDQUErQjs7SUFFL0IseUNBQThCOztJQUU5Qiw0Q0FBZ0M7O0lBRWhDLHFDQUF1Qzs7SUFFdkMsc0NBQTBCOztJQXVEMUIsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcbmltcG9ydCB7XG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgc3RhdGljIHRyZWU6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc3RpY2t5Q29udHJvbFRyaWdnZXIkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcblxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgLy8gcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIC8vIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyB0cmVlOiBhbnk7XG5cbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNNZXRhZGF0YTogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzQnViYmxlczogYm9vbGVhbjtcblxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzSW1hZ2U6IGJvb2xlYW47XG5cbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xuXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcblxuICBwdWJsaWMgdHJlZU1heEhlaWdodCA9ICcxMDAlJztcblxuICBwdWJsaWMgY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBlbXB0eUxhYmVsOiBzdHJpbmc7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5idWJibGVDaGFydFNlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnYnViYmxlLWNoYXJ0J10udGl0bGU7XG4gICAgdGhpcy5zaW1pbGFySXRlbXNTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXS50aXRsZTtcbiAgICB0aGlzLm1ldGFkYXRhU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpLm1ldGFkYXRhLnRpdGxlO1xuICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgc2ltcGxlOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICB9KTtcbiAgICB0aGlzLmVtcHR5TGFiZWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWxhYmVsJ107XG4gICAgdGhpcy5vbmUoJ2F3LXRyZWUnKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpIH0pO1xuXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBQYXRyaW1vbmlvJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IHBhdHJpbW9uaW8gTGF5b3V0Jyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcblxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xuICAgICAgcmV0dXJuIG9mKEF3U2NoZWRhTGF5b3V0RFMudHJlZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRyZWUodHJlZSkge1xuICAgIEF3U2NoZWRhTGF5b3V0RFMudHJlZSA9IHRyZWU7XG4gIH1cblxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xuXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZSh7IHRleHQgfSk7XG4gIH1cblxuICBsb2FkSXRlbShpZCkge1xuICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGlkLCBtYXhTaW1pbGFySXRlbXMgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5maWVsZHMpICYmIHJlc3BvbnNlLmZpZWxkcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEl0ZW1zKSAmJiByZXNwb25zZS5yZWxhdGVkSXRlbXMubGVuZ3RoO1xuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5icmVhZGNydW1icykgJiYgcmVzcG9uc2UuYnJlYWRjcnVtYnMubGVuZ3RoO1xuICAgICAgdGhpcy5oYXNCdWJibGVzID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0ltYWdlID0gISFyZXNwb25zZS5pbWFnZTtcblxuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IGNvbnRlbnQ6IG51bGwgfTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnRleHQpIHtcbiAgICAgICAgY29udGVudC5jb250ZW50ID0gcmVzcG9uc2UudGV4dDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goY29udGVudCk7XG4gICAgICAvLyBpbWFnZSB2aWV3ZXJcbiAgICAgIGlmIChyZXNwb25zZS5pbWFnZXMpIHtcbiAgICAgICAgY29uc3Qgdmlld2VyRGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2NoZWRhLWltYWdlJyk7XG4gICAgICAgIGlmICghdmlld2VyRGF0YVNvdXJjZS5oYXNJbnN0YW5jZSgpKSB7XG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlld2VyRGF0YVNvdXJjZS51cGRhdGVJbWFnZXMocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xuICAgICAgICBpY29uOiByZXNwb25zZS5pY29uLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsLFxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgYWN0aW9uczoge30sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlT2JqKTtcblxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpLFxuICAgICAgICBtZXRhZGF0YVRvRXhjbHVkZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydtZXRhZGF0YS10by1leGNsdWRlJ11cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShyZXNwb25zZSk7XG5cbiAgICAgIC8vIEJyZWFkY3J1bWIgc2VjdGlvblxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChyZXNwb25zZS5icmVhZGNydW1icykge1xuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICBgJHtlbGVtZW50Lmxpbmt9L2AsXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxuICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYSBXZWIgPiBQYXRyaW1vbmlvID4gJHtyZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbH1gKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UucmVsYXRlZEl0ZW1zKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvLyBjb250cm9sIHN0aWNreVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGlja3lDb250cm9sVHJpZ2dlciQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICAvLyBubyBzdGlja3kgZm9yIEludGVybmV0IEV4cGxvcmVyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgbWVyZ2Uoc291cmNlJCwgdGhpcy5zdGlja3lDb250cm9sVHJpZ2dlciQpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB3cmFwcGVyVG9wID0gd3JhcHBlci5vZmZzZXRUb3A7XG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJUb3AgPD0gd2luZG93VG9wO1xuXG4gICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXG4gICAgICBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tIDwgd3JhcHBlckJvdHRvbSkge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA+PSB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=