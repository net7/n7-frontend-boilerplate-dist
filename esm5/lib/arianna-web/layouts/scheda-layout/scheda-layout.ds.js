import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject, of, merge, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { get as _get } from 'lodash';
import helpers from '../../../common/helpers';
import metadataHelper from '../../helpers/metadata.helper';
var AwSchedaLayoutDS = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutDS, _super);
    function AwSchedaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.stickyControlTrigger$ = new Subject();
        _this.contentParts = {};
        _this.sidebarIsSticky = false;
        _this.treeMaxHeight = '100%';
        _this.contentIsLoading = false;
        _this.currentId = null;
        /** Switch loaded-content and loaded-empty states */
        _this.hasContent = true;
        /** Name of query that should be used (chosen in config) */
        _this.getTreeQuery = 'getTree';
        _this.getTree = function () { return AwSchedaLayoutDS.tree; };
        return _this;
    }
    AwSchedaLayoutDS.prototype.onInit = function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        var _b, _c, _d;
        if (configuration) {
            this.configuration = configuration;
            this.layoutConfig = this.configuration.get('scheda-layout');
        }
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        if (!this.sidebarCollapsed) {
            this.sidebarCollapsed = (_b = this.layoutConfig.tree.collapsedByDefault) !== null && _b !== void 0 ? _b : false;
        }
        this.relatedEntitiesHeader = this.layoutConfig['related-entities'].title;
        this.similarItemsSectionTitle = this.layoutConfig['related-items'].title;
        this.externalUrlText = this.layoutConfig['external-url-text'];
        this.metadataSectionTitle = this.getMetadataSectionTitle();
        this.hasSimilarItems = false;
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        this.emptyLabel = this.layoutConfig['empty-label'];
        this.emptyStateString = this.layoutConfig['empty-html'];
        this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
        // switch the tree query to the slim version
        if ((_d = (_c = this.layoutConfig) === null || _c === void 0 ? void 0 : _c.tree) === null || _d === void 0 ? void 0 : _d.lite) {
            this.getTreeQuery = 'getTreeLite';
        }
        this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
        this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // image viewer context-menu check
        var imageViewerConfig = this.configuration.get('scheda-layout')['image-viewer'] || {};
        this.hasContextMenu = function () { return !!imageViewerConfig['context-menu']; };
        // pdf viewer options
        this.one('aw-scheda-pdf').updateOptions(this.configuration.get('scheda-layout')['pdf-viewer'] || {});
        // sidebar sticky control
        this._sidebarStickyControl();
    };
    AwSchedaLayoutDS.prototype.onDestroy = function () {
        this.destroyed$.next();
    };
    AwSchedaLayoutDS.prototype.getMetadataSectionTitle = function () {
        var layoutConfig = this.configuration.get('scheda-layout');
        var metadataConfig = layoutConfig.metadata || {};
        return metadataConfig.title || null;
    };
    AwSchedaLayoutDS.prototype.getNavigation = function (id) {
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
        return this.communication.request$(this.getTreeQuery, {
            onError: function (error) { return console.error(error); },
            params: { treeId: id },
        });
    };
    AwSchedaLayoutDS.prototype.setTree = function (tree) {
        AwSchedaLayoutDS.tree = tree;
    };
    AwSchedaLayoutDS.prototype.updateNavigation = function (text) {
        this.one('aw-sidebar-header').update({ text: text, isExpanded: !this.sidebarCollapsed });
    };
    AwSchedaLayoutDS.prototype.loadItem = function (id) {
        var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: function (error) { return console.error(error); },
            params: { id: id, maxSimilarItems: maxSimilarItems },
        });
    };
    /**
     * Loads the content of the selected tree item in the right portion of the view.
     * @param response http response for the tree item
     */
    AwSchedaLayoutDS.prototype.loadContent = function (response) {
        var _this = this;
        if (response) {
            // reset
            this.currentDigitalObject = null;
            this.currentDigitalObjectIndex = null;
            var metadataFields = this.getFields(response);
            this.hasMetadata = !!(Array.isArray(metadataFields) && metadataFields.length);
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasDigitalObjects = (Array.isArray(response.digitalObjects)
                && response.digitalObjects.length);
            this.hasRelatedEntities = (Array.isArray(response.relatedEntities)
                && response.relatedEntities.length);
            this.hasContent = !!(this.hasMetadata
                || this.hasSimilarItems
                || this.hasRelatedEntities
                || this.hasDigitalObjects);
            this.contentParts = [];
            var content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // digital objects
            if (this.hasDigitalObjects) {
                response.digitalObjects = this.normalizeDigitalObjects(response.digitalObjects);
                // this.one('aw-scheda-digital-objects').update(response.digitalObjects);
                this.one('aw-scheda-dropdown').update(response);
                this.digitalObjects = response.digitalObjects;
                this.changeDigitalObject(0);
            }
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
            this.one('aw-scheda-metadata').update(metadataFields);
            // Breadcrumb section
            var breadcrumbs_1 = {
                items: [],
            };
            if (response.breadcrumbs) {
                response.breadcrumbs.forEach(function (element) {
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
                });
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
            }
            // update head title
            this.mainState.update('headTitle', "Arianna4View - Patrimonio - " + (response.title || response.label));
        }
        if (response.relatedItems) {
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        if (response.relatedEntities) {
            response.relatedEntities.forEach(function (el) {
                var label = response.title || response.label;
                el.relationName = label.length > 30
                    ? label.substr(0, 30) + "... "
                    : label;
            });
            this.one('aw-related-entities').updateOptions({
                context: 'scheda', config: this.configuration, list: 'relatedEntities', title: response.title
            });
            this.one('aw-related-entities').update(response.relatedEntities);
        }
        // control sticky
        setTimeout(function () {
            _this.stickyControlTrigger$.next();
        });
    };
    /**
     * Toggle between the tree's collapsed or expanded state.
     */
    AwSchedaLayoutDS.prototype.collapseSidebar = function () {
        // overwrite the configuration to prevent unwanted changes to the tree state.
        this.layoutConfig.tree.collapsedByDefault = !this.layoutConfig.tree.collapsedByDefault;
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.getWidgetDataSource('aw-sidebar-header').toggleSidebar();
    };
    AwSchedaLayoutDS.prototype._sidebarStickyControl = function () {
        var _this = this;
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        var source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe(function () {
            var windowTop = window.pageYOffset;
            var windowBottom = window.scrollY + window.innerHeight;
            var wrapper = document.getElementsByClassName('sticky-parent')[0];
            var wrapperTop = wrapper.offsetTop;
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
        });
    };
    AwSchedaLayoutDS.prototype.getFields = function (response) {
        var fields = response.fields, dt = response.document_type, dc = response.document_classification;
        var paths = this.configuration.get('paths');
        var labels = this.configuration.get('labels');
        var dcSegments = typeof dc === 'string' ? dc.split('.') : [];
        var dcLastSegment = dcSegments[dcSegments.length - 1];
        var metadataToShow = _get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[dcLastSegment] || metadataToShow[dt] || [];
        return metadataHelper.normalize({
            fields: fields,
            paths: paths,
            labels: labels,
            metadataToShow: metadataToShow,
            type: dt
        });
    };
    AwSchedaLayoutDS.prototype.changeDigitalObject = function (payload) {
        if (this.currentDigitalObjectIndex !== payload) {
            // link check
            if (this.digitalObjects[payload].type === 'external' && this.currentDigitalObject) {
                window.open(this.digitalObjects[payload].url, '_blank');
            }
            else {
                // always reset image viewer
                var schedaImageDS = this.getWidgetDataSource('aw-scheda-image');
                schedaImageDS.reset();
                this.currentDigitalObjectIndex = payload;
                this.currentDigitalObject = this.digitalObjects[payload];
                if (this.currentDigitalObject.type.includes('images')) {
                    if (schedaImageDS.hasInstance()) {
                        schedaImageDS.updateImages(this.currentDigitalObject);
                    }
                    else {
                        this.one('aw-scheda-image').update(this.currentDigitalObject);
                    }
                }
                else if (this.currentDigitalObject.type === 'pdf') {
                    this.one('aw-scheda-pdf').update(this.currentDigitalObject);
                }
            }
        }
    };
    AwSchedaLayoutDS.prototype.normalizeDigitalObjects = function (digitalObjects) {
        return digitalObjects.map(function ($do) {
            if ($do.type.includes('images')) {
                return {
                    id: 'scheda-layout-viewer',
                    type: $do.type,
                    label: $do.label,
                    hasNavigation: $do.items.length > 1,
                    items: $do.items.map(function (_a) {
                        var url = _a.url, iiifImages = _a.iiifImages;
                        return ({
                            url: url,
                            iiifImages: iiifImages,
                            type: $do.type,
                        });
                    })
                };
            }
            return $do;
        });
    };
    AwSchedaLayoutDS.tree = null;
    return AwSchedaLayoutDS;
}(LayoutDataSource));
export { AwSchedaLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBd1hDO1FBclhTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFvQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBNEJ2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBU3pCLDJEQUEyRDtRQUNuRCxrQkFBWSxHQUE4QixTQUFTLENBQUM7UUF5RTVELGFBQU8sR0FBRyxjQUFNLE9BQUEsZ0JBQWdCLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDOztJQXFPeEMsQ0FBQztJQTVTQyxpQ0FBTSxHQUFOLFVBQU8sRUFFTjtZQURDLGdD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QixDQUFDLENBQUM7cUJBQy9EO2lCQUNGO3FCQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sa0RBQXVCLEdBQS9CLFVBQWdDLGNBQWM7UUFDNUMsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUM1QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixPQUFPO29CQUNMLEVBQUUsRUFBRSxzQkFBc0I7b0JBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFtQjs0QkFBakIsWUFBRyxFQUFFLDBCQUFVO3dCQUFPLE9BQUEsQ0FBQzs0QkFDN0MsR0FBRyxLQUFBOzRCQUNILFVBQVUsWUFBQTs0QkFDVixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7eUJBQ2YsQ0FBQztvQkFKNEMsQ0FJNUMsQ0FBQztpQkFDSixDQUFDO2FBQ0g7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRYTSxxQkFBSSxHQUFRLElBQUksQ0FBQztJQXVYMUIsdUJBQUM7Q0FBQSxBQXhYRCxDQUFzQyxnQkFBZ0IsR0F3WHJEO1NBeFhZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQge1xuICBmcm9tRXZlbnQsIFN1YmplY3QsIG9mLCBtZXJnZSxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzdGlja3lDb250cm9sVHJpZ2dlciQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHByaXZhdGUgbGF5b3V0Q29uZmlnO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgdHJlZTogYW55O1xuXG4gIHB1YmxpYyBzaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWxhdGVkRW50aXRpZXNIZWFkZXI6IHN0cmluZztcblxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xuXG4gIHB1YmxpYyBoYXNSZWxhdGVkRW50aXRpZXM6IGJvb2xlYW47XG5cbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzRGlnaXRhbE9iamVjdHM6IGJvb2xlYW47XG5cbiAgcHVibGljIGRpZ2l0YWxPYmplY3RzOiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0OiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblxuICAvKiogU3dpdGNoIGxvYWRlZC1jb250ZW50IGFuZCBsb2FkZWQtZW1wdHkgc3RhdGVzICovXG4gIHB1YmxpYyBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAvKiogU3RyaW5nIHRvIHJlbmRlciBpbiB0aGUgbG9hZGVkLWVtcHR5IHN0YXRlICovXG4gIHB1YmxpYyBlbXB0eVN0YXRlU3RyaW5nOiBzdHJpbmc7XG5cbiAgcHVibGljIGV4dGVybmFsVXJsVGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNDb250ZXh0TWVudTogKCkgPT4gYm9vbGVhbjtcblxuICAvKiogTmFtZSBvZiBxdWVyeSB0aGF0IHNob3VsZCBiZSB1c2VkIChjaG9zZW4gaW4gY29uZmlnKSAqL1xuICBwcml2YXRlIGdldFRyZWVRdWVyeTogJ2dldFRyZWUnIHwgJ2dldFRyZWVMaXRlJyA9ICdnZXRUcmVlJztcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMubGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpO1xuICAgIH1cbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKCF0aGlzLnNpZGViYXJDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IHRoaXMubGF5b3V0Q29uZmlnLnRyZWUuY29sbGFwc2VkQnlEZWZhdWx0ID8/IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlbGF0ZWRFbnRpdGllc0hlYWRlciA9IHRoaXMubGF5b3V0Q29uZmlnWydyZWxhdGVkLWVudGl0aWVzJ10udGl0bGU7XG4gICAgdGhpcy5zaW1pbGFySXRlbXNTZWN0aW9uVGl0bGUgPSB0aGlzLmxheW91dENvbmZpZ1sncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xuICAgIHRoaXMuZXh0ZXJuYWxVcmxUZXh0ID0gdGhpcy5sYXlvdXRDb25maWdbJ2V4dGVybmFsLXVybC10ZXh0J107XG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKTtcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgfSk7XG4gICAgdGhpcy5lbXB0eUxhYmVsID0gdGhpcy5sYXlvdXRDb25maWdbJ2VtcHR5LWxhYmVsJ107XG4gICAgdGhpcy5lbXB0eVN0YXRlU3RyaW5nID0gdGhpcy5sYXlvdXRDb25maWdbJ2VtcHR5LWh0bWwnXTtcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG5cbiAgICAvLyBzd2l0Y2ggdGhlIHRyZWUgcXVlcnkgdG8gdGhlIHNsaW0gdmVyc2lvblxuICAgIGlmICh0aGlzLmxheW91dENvbmZpZz8udHJlZT8ubGl0ZSkge1xuICAgICAgdGhpcy5nZXRUcmVlUXVlcnkgPSAnZ2V0VHJlZUxpdGUnO1xuICAgIH1cblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIFBhdHJpbW9uaW8nKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcblxuICAgIC8vIGltYWdlIHZpZXdlciBjb250ZXh0LW1lbnUgY2hlY2tcbiAgICBjb25zdCBpbWFnZVZpZXdlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnaW1hZ2Utdmlld2VyJ10gfHwge307XG4gICAgdGhpcy5oYXNDb250ZXh0TWVudSA9ICgpID0+ICEhaW1hZ2VWaWV3ZXJDb25maWdbJ2NvbnRleHQtbWVudSddO1xuXG4gICAgLy8gcGRmIHZpZXdlciBvcHRpb25zXG4gICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1wZGYnKS51cGRhdGVPcHRpb25zKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncGRmLXZpZXdlciddIHx8IHt9KTtcblxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBnZXRNZXRhZGF0YVNlY3Rpb25UaXRsZSgpIHtcbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk7XG4gICAgY29uc3QgbWV0YWRhdGFDb25maWcgPSBsYXlvdXRDb25maWcubWV0YWRhdGEgfHwge307XG4gICAgcmV0dXJuIG1ldGFkYXRhQ29uZmlnLnRpdGxlIHx8IG51bGw7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xuICAgICAgcmV0dXJuIG9mKEF3U2NoZWRhTGF5b3V0RFMudHJlZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQodGhpcy5nZXRUcmVlUXVlcnksIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2V0VHJlZSh0cmVlKSB7XG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcbiAgfVxuXG4gIGdldFRyZWUgPSAoKSA9PiBBd1NjaGVkYUxheW91dERTLnRyZWU7XG5cbiAgdXBkYXRlTmF2aWdhdGlvbih0ZXh0KSB7XG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKHsgdGV4dCwgaXNFeHBhbmRlZDogIXRoaXMuc2lkZWJhckNvbGxhcHNlZCB9KTtcbiAgfVxuXG4gIGxvYWRJdGVtKGlkKSB7XG4gICAgY29uc3QgbWF4U2ltaWxhckl0ZW1zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ21heC1yZWxhdGVkLWl0ZW1zJ107XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0Tm9kZScsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgaWQsIG1heFNpbWlsYXJJdGVtcyB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCB0cmVlIGl0ZW0gaW4gdGhlIHJpZ2h0IHBvcnRpb24gb2YgdGhlIHZpZXcuXG4gICAqIEBwYXJhbSByZXNwb25zZSBodHRwIHJlc3BvbnNlIGZvciB0aGUgdHJlZSBpdGVtXG4gICAqL1xuICBsb2FkQ29udGVudChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgLy8gcmVzZXRcbiAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QgPSBudWxsO1xuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gbnVsbDtcblxuICAgICAgY29uc3QgbWV0YWRhdGFGaWVsZHMgPSB0aGlzLmdldEZpZWxkcyhyZXNwb25zZSk7XG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gISEoQXJyYXkuaXNBcnJheShtZXRhZGF0YUZpZWxkcykgJiYgbWV0YWRhdGFGaWVsZHMubGVuZ3RoKTtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkSXRlbXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzID0gKFxuICAgICAgICBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzKVxuICAgICAgICAmJiByZXNwb25zZS5kaWdpdGFsT2JqZWN0cy5sZW5ndGhcbiAgICAgICk7XG4gICAgICB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllcyA9IChcbiAgICAgICAgQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICk7XG4gICAgICB0aGlzLmhhc0NvbnRlbnQgPSAhIShcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YVxuICAgICAgICB8fCB0aGlzLmhhc1NpbWlsYXJJdGVtc1xuICAgICAgICB8fCB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllc1xuICAgICAgICB8fCB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzXG4gICAgICApO1xuXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xuICAgICAgY29uc3QgY29udGVudCA9IHsgY29udGVudDogbnVsbCB9O1xuXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xuICAgICAgICBjb250ZW50LmNvbnRlbnQgPSByZXNwb25zZS50ZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcblxuICAgICAgLy8gZGlnaXRhbCBvYmplY3RzXG4gICAgICBpZiAodGhpcy5oYXNEaWdpdGFsT2JqZWN0cykge1xuICAgICAgICByZXNwb25zZS5kaWdpdGFsT2JqZWN0cyA9IHRoaXMubm9ybWFsaXplRGlnaXRhbE9iamVjdHMocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xuICAgICAgICAvLyB0aGlzLm9uZSgnYXctc2NoZWRhLWRpZ2l0YWwtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtZHJvcGRvd24nKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmRpZ2l0YWxPYmplY3RzID0gcmVzcG9uc2UuZGlnaXRhbE9iamVjdHM7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlnaXRhbE9iamVjdCgwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGl0bGVPYmogPSB7XG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHM6IHJlc3BvbnNlLnN1YlRpdGxlLFxuICAgICAgICBhY3Rpb25zOiB7fSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShtZXRhZGF0YUZpZWxkcyk7XG5cbiAgICAgIC8vIEJyZWFkY3J1bWIgc2VjdGlvblxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChyZXNwb25zZS5icmVhZGNydW1icykge1xuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICBgJHtlbGVtZW50Lmxpbmt9L2AsXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxuICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xuICAgICAgICBlbC5yZWxhdGlvbk5hbWUgPSBsYWJlbC5sZW5ndGggPiAzMFxuICAgICAgICAgID8gYCR7bGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICAgIDogbGFiZWw7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpO1xuICAgIH1cblxuICAgIC8vIGNvbnRyb2wgc3RpY2t5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJldHdlZW4gdGhlIHRyZWUncyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdGUuXG4gICAqL1xuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgLy8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmF0aW9uIHRvIHByZXZlbnQgdW53YW50ZWQgY2hhbmdlcyB0byB0aGUgdHJlZSBzdGF0ZS5cbiAgICB0aGlzLmxheW91dENvbmZpZy50cmVlLmNvbGxhcHNlZEJ5RGVmYXVsdCA9ICF0aGlzLmxheW91dENvbmZpZy50cmVlLmNvbGxhcHNlZEJ5RGVmYXVsdDtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICAgIHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2lkZWJhci1oZWFkZXInKS50b2dnbGVTaWRlYmFyKCk7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICAvLyBubyBzdGlja3kgZm9yIEludGVybmV0IEV4cGxvcmVyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgbWVyZ2Uoc291cmNlJCwgdGhpcy5zdGlja3lDb250cm9sVHJpZ2dlciQpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB3cmFwcGVyVG9wID0gd3JhcHBlci5vZmZzZXRUb3A7XG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJUb3AgPD0gd2luZG93VG9wO1xuXG4gICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXG4gICAgICBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tIDwgd3JhcHBlckJvdHRvbSkge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA+PSB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIGRvY3VtZW50X3R5cGU6IGR0LFxuICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb246IGRjXG4gICAgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcbiAgICBjb25zdCBkY1NlZ21lbnRzID0gdHlwZW9mIGRjID09PSAnc3RyaW5nJyA/IGRjLnNwbGl0KCcuJykgOiBbXTtcbiAgICBjb25zdCBkY0xhc3RTZWdtZW50ID0gZGNTZWdtZW50c1tkY1NlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIHt9KTtcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93W2RjTGFzdFNlZ21lbnRdIHx8IG1ldGFkYXRhVG9TaG93W2R0XSB8fCBbXTtcblxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xuICAgICAgZmllbGRzLFxuICAgICAgcGF0aHMsXG4gICAgICBsYWJlbHMsXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcbiAgICAgIHR5cGU6IGR0XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlRGlnaXRhbE9iamVjdChwYXlsb2FkKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3RJbmRleCAhPT0gcGF5bG9hZCkge1xuICAgICAgLy8gbGluayBjaGVja1xuICAgICAgaWYgKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udHlwZSA9PT0gJ2V4dGVybmFsJyAmJiB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udXJsLCAnX2JsYW5rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHdheXMgcmVzZXQgaW1hZ2Ugdmlld2VyXG4gICAgICAgIGNvbnN0IHNjaGVkYUltYWdlRFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LXNjaGVkYS1pbWFnZScpO1xuICAgICAgICBzY2hlZGFJbWFnZURTLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCA9IHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF07XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XG4gICAgICAgICAgaWYgKHNjaGVkYUltYWdlRFMuaGFzSW5zdGFuY2UoKSkge1xuICAgICAgICAgICAgc2NoZWRhSW1hZ2VEUy51cGRhdGVJbWFnZXModGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW1hZ2UnKS51cGRhdGUodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ3BkZicpIHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplRGlnaXRhbE9iamVjdHMoZGlnaXRhbE9iamVjdHMpIHtcbiAgICByZXR1cm4gZGlnaXRhbE9iamVjdHMubWFwKCgkZG8pID0+IHtcbiAgICAgIGlmICgkZG8udHlwZS5pbmNsdWRlcygnaW1hZ2VzJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogJ3NjaGVkYS1sYXlvdXQtdmlld2VyJyxcbiAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcbiAgICAgICAgICBsYWJlbDogJGRvLmxhYmVsLFxuICAgICAgICAgIGhhc05hdmlnYXRpb246ICRkby5pdGVtcy5sZW5ndGggPiAxLFxuICAgICAgICAgIGl0ZW1zOiAkZG8uaXRlbXMubWFwKCh7IHVybCwgaWlpZkltYWdlcyB9KSA9PiAoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgaWlpZkltYWdlcyxcbiAgICAgICAgICAgIHR5cGU6ICRkby50eXBlLFxuICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuICRkbztcbiAgICB9KTtcbiAgfVxufVxuIl19