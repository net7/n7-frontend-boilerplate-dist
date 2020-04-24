/**
 * @fileoverview added by tsickle
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
            if (response.image) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQzlCLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQWlQQztRQTlPUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpDLDJCQUFxQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBb0JyRCxrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQXdCdkIscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsbUJBQWEsR0FBRyxNQUFNLENBQUM7UUFFdkIsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBeUR2QyxhQUFPOzs7UUFBRyxjQUFNLE9BQUEsZ0JBQWdCLENBQUMsSUFBSSxFQUFyQixDQUFxQixFQUFDOztJQWlJeEMsQ0FBQzs7Ozs7SUF0TEMsaUNBQU07Ozs7SUFBTixVQUFPLEVBRU47WUFEQyxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFFdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0s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akMsbURBQXVDOztJQUV2QyxvREFBd0M7O0lBRXhDLGdEQUFvQzs7SUFFcEMsdUNBQTRCOztJQUU1QixzQ0FBMkI7O0lBRTNCLDBDQUErQjs7SUFFL0IsMkNBQWdDOztJQUVoQyxvQ0FBeUI7O0lBRXpCLDhDQUErQjs7SUFFL0IsMkNBQStCOztJQUUvQix5Q0FBOEI7O0lBRTlCLDRDQUFnQzs7SUFFaEMscUNBQXVDOztJQUV2QyxzQ0FBMEI7O0lBdUQxQixtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9sYXlvdXQtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHtcbiAgZnJvbUV2ZW50LCBTdWJqZWN0LCBvZiwgbWVyZ2UsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzdGlja3lDb250cm9sVHJpZ2dlciQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICAvLyBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgLy8gcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnRlbnRQYXJ0czogYW55ID0ge307XG5cbiAgcHVibGljIHRyZWU6IGFueTtcblxuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgYnViYmxlQ2hhcnRTZWN0aW9uVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xuXG4gIHB1YmxpYyBoYXNCdWJibGVzOiBib29sZWFuO1xuXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xuXG4gIHB1YmxpYyBoYXNJbWFnZTogYm9vbGVhbjtcblxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydidWJibGUtY2hhcnQnXS50aXRsZTtcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JykubWV0YWRhdGEudGl0bGU7XG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpLmJ1YmJsZWNoYXJ0IDogZmFsc2U7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBzaW1wbGU6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgIH0pO1xuICAgIHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZW1wdHktbGFiZWwnXTtcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IFBhdHJpbW9uaW8nKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogcGF0cmltb25pbyBMYXlvdXQnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncGF0cmltb25pbycpO1xuXG4gICAgLy8gc2lkZWJhciBzdGlja3kgY29udHJvbFxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICBpZiAoQXdTY2hlZGFMYXlvdXREUy50cmVlKSB7XG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0VHJlZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2V0VHJlZSh0cmVlKSB7XG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcbiAgfVxuXG4gIGdldFRyZWUgPSAoKSA9PiBBd1NjaGVkYUxheW91dERTLnRyZWU7XG5cbiAgdXBkYXRlTmF2aWdhdGlvbih0ZXh0KSB7XG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKHsgdGV4dCB9KTtcbiAgfVxuXG4gIGxvYWRJdGVtKGlkKSB7XG4gICAgY29uc3QgbWF4U2ltaWxhckl0ZW1zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ21heC1yZWxhdGVkLWl0ZW1zJ107XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0Tm9kZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgaWQsIG1heFNpbWlsYXJJdGVtcyB9LFxuICAgIH0pO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmZpZWxkcykgJiYgcmVzcG9uc2UuZmllbGRzLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkSXRlbXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0J1YmJsZXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykgJiYgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzSW1hZ2UgPSAhIXJlc3BvbnNlLmltYWdlO1xuXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xuICAgICAgY29uc3QgY29udGVudCA9IHsgY29udGVudDogbnVsbCB9O1xuXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xuICAgICAgICBjb250ZW50LmNvbnRlbnQgPSByZXNwb25zZS50ZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcbiAgICAgIC8vIGltYWdlIHZpZXdlclxuICAgICAgaWYgKHJlc3BvbnNlLmltYWdlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdlckRhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LXNjaGVkYS1pbWFnZScpO1xuICAgICAgICBpZiAoIXZpZXdlckRhdGFTb3VyY2UuaGFzSW5zdGFuY2UoKSkge1xuICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW1hZ2UnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXdlckRhdGFTb3VyY2UudXBkYXRlSW1hZ2VzKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZU9iaiA9IHtcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXG4gICAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZU9iaik7XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcbiAgICAgICAgbWV0YWRhdGFUb0V4Y2x1ZGU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnbWV0YWRhdGEtdG8tZXhjbHVkZSddXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgICAvLyBCcmVhZGNydW1iIHNlY3Rpb25cbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0ge1xuICAgICAgICBpdGVtczogW10sXG4gICAgICB9O1xuXG4gICAgICBpZiAocmVzcG9uc2UuYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGVsZW1lbnQubGFiZWwsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogW1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgICAgICAgICAgYCR7ZWxlbWVudC5saW5rfS9gLFxuICAgICAgICAgICAgICAgIGhlbHBlcnMuc2x1Z2lmeShlbGVtZW50LmxhYmVsKSxcbiAgICAgICAgICAgICAgXS5qb2luKCcnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmEgV2ViID4gUGF0cmltb25pbyA+ICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLy8gY29udHJvbCBzdGlja3lcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgY29uc3Qgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LXBhcmVudCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xuICAgICAgY29uc3Qgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcblxuICAgICAgLy8gdHJlZSBoZWlnaHQgY29udHJvbFxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPj0gd3JhcHBlckJvdHRvbSkge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dpbmRvd0JvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19