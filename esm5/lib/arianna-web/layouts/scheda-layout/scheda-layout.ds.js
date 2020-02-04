/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject, of, merge } from 'rxjs';
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
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart']['title'];
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items']['title'];
        this.metadataSectionTitle = this.configuration.get('scheda-layout')['metadata']['title'];
        this.hasSimilarItems = false;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths')['entitaBasePath']
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
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
            params: { treeId: id }
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
            params: { id: id, maxSimilarItems: maxSimilarItems }
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
            var content = {};
            if (response.text) {
                content['content'] = response.text;
            }
            this.contentParts.push(content);
            if (response.image) {
                /** @type {?} */
                var images_1 = [{ type: 'image', url: response.image, buildPyramid: false }];
                if (!this.imageViewerIstance) {
                    this.one('aw-scheda-image').update({
                        viewerId: 'scheda-layout-viewer',
                        _setViewer: (/**
                         * @param {?} viewer
                         * @return {?}
                         */
                        function (viewer) {
                            _this.imageViewerIstance = viewer;
                            viewer.open(images_1);
                        }),
                    });
                }
                else {
                    this.imageViewerIstance.open(images_1);
                }
            }
            /** @type {?} */
            var titleObj = {
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
            this.one('aw-scheda-metadata').updateOptions({ labels: this.configuration.get('labels') });
            this.one('aw-scheda-metadata').update(response);
            // Breadcrumb section
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
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
                                element.link + '/',
                                helpers.slugify(element.label)
                            ].join('')
                        }
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
            var wrapper = document.getElementsByClassName('sticky-parent')[0];
            /** @type {?} */
            var wrapperTop = wrapper['offsetTop'];
            /** @type {?} */
            var wrapperBottom = wrapperTop + wrapper.clientHeight;
            _this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (_this.sidebarIsSticky && windowBottom < wrapperBottom) {
                _this.treeMaxHeight = (windowBottom - windowTop - 50) + 'px';
            }
            else if (_this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                _this.treeMaxHeight = (wrapperBottom - windowTop - 50) + 'px';
            }
            else if (windowBottom < wrapperBottom) {
                _this.treeMaxHeight = (windowBottom - wrapperTop - 50) + 'px';
            }
            else {
                _this.treeMaxHeight = (wrapperBottom - wrapperTop - 50) + 'px';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQW9OQztRQWxOUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLDJCQUFxQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBV3JELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBWXZCLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFTLEdBQWtCLElBQUksQ0FBQztRQW9EdkMsYUFBTzs7O1FBQUcsY0FBTSxPQUFBLGdCQUFnQixDQUFDLElBQUksRUFBckIsQ0FBcUIsRUFBQzs7SUFtSXhDLENBQUM7Ozs7O0lBcExDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUEwRTtZQUF4RSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0s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QixtQ0FBb0I7O0lBQ3BCLHFDQUF5Qjs7SUFDekIseUNBQThCOztJQUM5Qix3Q0FBOEI7O0lBQzlCLGdDQUFpQjs7SUFDakIsNENBQWlDOztJQUNqQyxtREFBdUM7O0lBQ3ZDLG9EQUF3Qzs7SUFDeEMsZ0RBQW9DOztJQUNwQyx1Q0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFDM0IsMENBQStCOztJQUMvQiwyQ0FBZ0M7O0lBQ2hDLG9DQUF5Qjs7SUFDekIsOENBQStCOztJQUMvQiwyQ0FBK0I7O0lBQy9CLHlDQUE4Qjs7SUFDOUIsNENBQWdDOztJQUNoQyxxQ0FBdUM7O0lBQ3ZDLHNDQUEwQjs7SUFtRDFCLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG4gIC8vIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICAvLyBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnkgPSB7fTtcbiAgcHVibGljIHRyZWU6IGFueTtcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVDaGFydFNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNCdWJibGVzOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XG4gIHB1YmxpYyBoYXNJbWFnZTogYm9vbGVhbjtcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuICBwdWJsaWMgY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZUNoYXJ0U2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydidWJibGUtY2hhcnQnXVsndGl0bGUnXTtcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWyd0aXRsZSddO1xuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ21ldGFkYXRhJ11bJ3RpdGxlJ107XG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBzaW1wbGU6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJylbJ2VudGl0YUJhc2VQYXRoJ11cbiAgICB9KVxuICAgIHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZW1wdHktbGFiZWwnXTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBwYXRyaW1vbmlvIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdwYXRyaW1vbmlvJyk7XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpe1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xuICAgICAgcmV0dXJuIG9mKEF3U2NoZWRhTGF5b3V0RFMudHJlZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VHJlZSh0cmVlKSB7XG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcbiAgfVxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xuXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZSh7IHRleHQgfSk7XG4gIH1cblxuICBsb2FkSXRlbShpZCkge1xuICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGlkOiBpZCwgbWF4U2ltaWxhckl0ZW1zOiBtYXhTaW1pbGFySXRlbXMgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmZpZWxkcykgJiYgcmVzcG9uc2UuZmllbGRzLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkSXRlbXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0J1YmJsZXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykgJiYgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzSW1hZ2UgPSAhIXJlc3BvbnNlLmltYWdlO1xuXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xuICAgICAgY29uc3QgY29udGVudCA9IHt9O1xuXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xuICAgICAgICBjb250ZW50Wydjb250ZW50J10gPSByZXNwb25zZS50ZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcbiAgICAgIGlmIChyZXNwb25zZS5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBbeyB0eXBlOiAnaW1hZ2UnLCB1cmw6IHJlc3BvbnNlLmltYWdlLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH1dO1xuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlKSB7XG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh7XG4gICAgICAgICAgICB2aWV3ZXJJZDogJ3NjaGVkYS1sYXlvdXQtdmlld2VyJyxcbiAgICAgICAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZVZpZXdlcklzdGFuY2UgPSB2aWV3ZXI7XG4gICAgICAgICAgICAgIHZpZXdlci5vcGVuKGltYWdlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW1hZ2VWaWV3ZXJJc3RhbmNlLm9wZW4oaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZU9iaiA9IHtcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcbiAgICAgICAgYWN0aW9uczoge31cbiAgICAgIH07XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlT3B0aW9ucyh7IGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJykgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlKHJlc3BvbnNlKTtcblxuICAgICAgLy8gQnJlYWRjcnVtYiBzZWN0aW9uXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHtcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9O1xuXG4gICAgICBpZiAocmVzcG9uc2UuYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQubGluayArICcvJyxcbiAgICAgICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkoZWxlbWVudC5sYWJlbClcbiAgICAgICAgICAgICAgXS5qb2luKCcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmEgV2ViID4gUGF0cmltb25pbyA+ICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KVxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvLyBjb250cm9sIHN0aWNreVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGlja3lDb250cm9sVHJpZ2dlciQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICAvLyBubyBzdGlja3kgZm9yIEludGVybmV0IEV4cGxvcmVyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgbWVyZ2Uoc291cmNlJCwgdGhpcy5zdGlja3lDb250cm9sVHJpZ2dlciQpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0sXG4gICAgICAgIHdyYXBwZXJUb3AgPSB3cmFwcGVyWydvZmZzZXRUb3AnXSxcbiAgICAgICAgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJUb3AgPD0gd2luZG93VG9wO1xuXG4gICAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSAod2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTApICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPj0gd3JhcHBlckJvdHRvbSkge1xuICAgICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9ICh3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTApICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gKHdpbmRvd0JvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MCkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9ICh3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwKSArICdweCc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19