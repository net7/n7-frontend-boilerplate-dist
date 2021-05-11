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
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = (_b = this.configuration.get('scheda-layout').tree.collapsedByDefault) !== null && _b !== void 0 ? _b : false;
        this.relatedEntitiesHeader = this.configuration.get('scheda-layout')['related-entities'].title;
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items'].title;
        this.externalUrlText = this.configuration.get('scheda-layout')['external-url-text'];
        this.metadataSectionTitle = this.getMetadataSectionTitle();
        this.hasSimilarItems = false;
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
        this.emptyStateString = this.configuration.get('scheda-layout')['empty-html'];
        this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
        // switch the tree query to the slim version
        if ((_d = (_c = this.configuration.get('scheda-layout')) === null || _c === void 0 ? void 0 : _c.tree) === null || _d === void 0 ? void 0 : _d.lite) {
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
        this.one('aw-sidebar-header').update({ text: text });
    };
    AwSchedaLayoutDS.prototype.loadItem = function (id) {
        var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: function (error) { return console.error(error); },
            params: { id: id, maxSimilarItems: maxSimilarItems },
        });
    };
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
    AwSchedaLayoutDS.prototype.collapseSidebar = function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
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
                        var url = _a.url;
                        return ({
                            url: url,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBc1dDO1FBbldTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBNEJ2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBU3pCLDJEQUEyRDtRQUNuRCxrQkFBWSxHQUE4QixTQUFTLENBQUM7UUFvRTVELGFBQU8sR0FBRyxjQUFNLE9BQUEsZ0JBQWdCLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDOztJQTBOeEMsQ0FBQztJQTVSQyxpQ0FBTSxHQUFOLFVBQU8sRUFFTjtZQURDLGdD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dUIsR0FBL0IsVUFBZ0MsY0FBYztRQUM1QyxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQzVCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU87b0JBQ0wsRUFBRSxFQUFFLHNCQUFzQjtvQkFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDaEIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQU87NEJBQUwsWUFBRzt3QkFBTyxPQUFBLENBQUM7NEJBQ2pDLEdBQUcsS0FBQTs0QkFDSCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7eUJBQ2YsQ0FBQztvQkFIZ0MsQ0FHaEMsQ0FBQztpQkFDSixDQUFDO2FBQ0g7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXBXTSxxQkFBSSxHQUFRLElBQUksQ0FBQztJQXFXMUIsdUJBQUM7Q0FBQSxBQXRXRCxDQUFzQyxnQkFBZ0IsR0FzV3JEO1NBdFdZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQge1xuICBmcm9tRXZlbnQsIFN1YmplY3QsIG9mLCBtZXJnZSxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzdGlja3lDb250cm9sVHJpZ2dlciQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgdHJlZTogYW55O1xuXG4gIHB1YmxpYyBzaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWxhdGVkRW50aXRpZXNIZWFkZXI6IHN0cmluZztcblxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xuXG4gIHB1YmxpYyBoYXNSZWxhdGVkRW50aXRpZXM6IGJvb2xlYW47XG5cbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzRGlnaXRhbE9iamVjdHM6IGJvb2xlYW47XG5cbiAgcHVibGljIGRpZ2l0YWxPYmplY3RzOiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0OiBhbnk7XG5cbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xuXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcblxuICAvKiogU3dpdGNoIGxvYWRlZC1jb250ZW50IGFuZCBsb2FkZWQtZW1wdHkgc3RhdGVzICovXG4gIHB1YmxpYyBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAvKiogU3RyaW5nIHRvIHJlbmRlciBpbiB0aGUgbG9hZGVkLWVtcHR5IHN0YXRlICovXG4gIHB1YmxpYyBlbXB0eVN0YXRlU3RyaW5nOiBzdHJpbmc7XG5cbiAgcHVibGljIGV4dGVybmFsVXJsVGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNDb250ZXh0TWVudTogKCkgPT4gYm9vbGVhbjtcblxuICAvKiogTmFtZSBvZiBxdWVyeSB0aGF0IHNob3VsZCBiZSB1c2VkIChjaG9zZW4gaW4gY29uZmlnKSAqL1xuICBwcml2YXRlIGdldFRyZWVRdWVyeTogJ2dldFRyZWUnIHwgJ2dldFRyZWVMaXRlJyA9ICdnZXRUcmVlJztcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JykudHJlZS5jb2xsYXBzZWRCeURlZmF1bHQgPz8gZmFsc2U7XG4gICAgdGhpcy5yZWxhdGVkRW50aXRpZXNIZWFkZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtZW50aXRpZXMnXS50aXRsZTtcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xuICAgIHRoaXMuZXh0ZXJuYWxVcmxUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydleHRlcm5hbC11cmwtdGV4dCddO1xuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCk7XG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgIH0pO1xuICAgIHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZW1wdHktbGFiZWwnXTtcbiAgICB0aGlzLmVtcHR5U3RhdGVTdHJpbmcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWh0bWwnXTtcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG5cbiAgICAvLyBzd2l0Y2ggdGhlIHRyZWUgcXVlcnkgdG8gdGhlIHNsaW0gdmVyc2lvblxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk/LnRyZWU/LmxpdGUpIHtcbiAgICAgIHRoaXMuZ2V0VHJlZVF1ZXJ5ID0gJ2dldFRyZWVMaXRlJztcbiAgICB9XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdwYXRyaW1vbmlvJyk7XG5cbiAgICAvLyBpbWFnZSB2aWV3ZXIgY29udGV4dC1tZW51IGNoZWNrXG4gICAgY29uc3QgaW1hZ2VWaWV3ZXJDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2ltYWdlLXZpZXdlciddIHx8IHt9O1xuICAgIHRoaXMuaGFzQ29udGV4dE1lbnUgPSAoKSA9PiAhIWltYWdlVmlld2VyQ29uZmlnWydjb250ZXh0LW1lbnUnXTtcblxuICAgIC8vIHBkZiB2aWV3ZXIgb3B0aW9uc1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtcGRmJykudXBkYXRlT3B0aW9ucyh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3BkZi12aWV3ZXInXSB8fCB7fSk7XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpO1xuICAgIGNvbnN0IG1ldGFkYXRhQ29uZmlnID0gbGF5b3V0Q29uZmlnLm1ldGFkYXRhIHx8IHt9O1xuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIGlmIChBd1NjaGVkYUxheW91dERTLnRyZWUpIHtcbiAgICAgIHJldHVybiBvZihBd1NjaGVkYUxheW91dERTLnRyZWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHRoaXMuZ2V0VHJlZVF1ZXJ5LCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRyZWUodHJlZSkge1xuICAgIEF3U2NoZWRhTGF5b3V0RFMudHJlZSA9IHRyZWU7XG4gIH1cblxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xuXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZSh7IHRleHQgfSk7XG4gIH1cblxuICBsb2FkSXRlbShpZCkge1xuICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGlkLCBtYXhTaW1pbGFySXRlbXMgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAvLyByZXNldFxuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCA9IG51bGw7XG4gICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXggPSBudWxsO1xuXG4gICAgICBjb25zdCBtZXRhZGF0YUZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSAhIShBcnJheS5pc0FycmF5KG1ldGFkYXRhRmllbGRzKSAmJiBtZXRhZGF0YUZpZWxkcy5sZW5ndGgpO1xuICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykgJiYgcmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzQnJlYWRjcnVtYiA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UuYnJlYWRjcnVtYnMpICYmIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmxlbmd0aDtcbiAgICAgIHRoaXMuaGFzRGlnaXRhbE9iamVjdHMgPSAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpXG4gICAgICAgICYmIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmxlbmd0aFxuICAgICAgKTtcbiAgICAgIHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzID0gKFxuICAgICAgICBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcylcbiAgICAgICAgJiYgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aFxuICAgICAgKTtcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9ICEhKFxuICAgICAgICB0aGlzLmhhc01ldGFkYXRhXG4gICAgICAgIHx8IHRoaXMuaGFzU2ltaWxhckl0ZW1zXG4gICAgICAgIHx8IHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzXG4gICAgICAgIHx8IHRoaXMuaGFzRGlnaXRhbE9iamVjdHNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XG4gICAgICBjb25zdCBjb250ZW50ID0geyBjb250ZW50OiBudWxsIH07XG5cbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XG4gICAgICAgIGNvbnRlbnQuY29udGVudCA9IHJlc3BvbnNlLnRleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICAvLyBkaWdpdGFsIG9iamVjdHNcbiAgICAgIGlmICh0aGlzLmhhc0RpZ2l0YWxPYmplY3RzKSB7XG4gICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzID0gdGhpcy5ub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XG4gICAgICAgIC8vIHRoaXMub25lKCdhdy1zY2hlZGEtZGlnaXRhbC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzKTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1kcm9wZG93bicpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuZGlnaXRhbE9iamVjdHMgPSByZXNwb25zZS5kaWdpdGFsT2JqZWN0cztcbiAgICAgICAgdGhpcy5jaGFuZ2VEaWdpdGFsT2JqZWN0KDApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZU9iaiA9IHtcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXG4gICAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZU9iaik7XG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlKG1ldGFkYXRhRmllbGRzKTtcblxuICAgICAgLy8gQnJlYWRjcnVtYiBzZWN0aW9uXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHtcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgfTtcblxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWJzKSB7XG4gICAgICAgIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBicmVhZGNydW1icy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgIGAke2VsZW1lbnQubGlua30vYCxcbiAgICAgICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkoZWxlbWVudC5sYWJlbCksXG4gICAgICAgICAgICAgIF0uam9pbignJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIGBBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvIC0gJHtyZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbH1gKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UucmVsYXRlZEl0ZW1zKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWw7XG4gICAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IGxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgICAgPyBgJHtsYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXG4gICAgICAgICAgOiBsYWJlbDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLCBsaXN0OiAncmVsYXRlZEVudGl0aWVzJywgdGl0bGU6IHJlc3BvbnNlLnRpdGxlXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgfVxuXG4gICAgLy8gY29udHJvbCBzdGlja3lcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5zaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgY29uc3Qgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LXBhcmVudCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xuICAgICAgY29uc3Qgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcblxuICAgICAgLy8gdHJlZSBoZWlnaHQgY29udHJvbFxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPj0gd3JhcHBlckJvdHRvbSkge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dpbmRvd0JvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MH1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsXG4gICAgICBkb2N1bWVudF90eXBlOiBkdCxcbiAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBkY1xuICAgIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XG4gICAgY29uc3QgZGNTZWdtZW50cyA9IHR5cGVvZiBkYyA9PT0gJ3N0cmluZycgPyBkYy5zcGxpdCgnLicpIDogW107XG4gICAgY29uc3QgZGNMYXN0U2VnbWVudCA9IGRjU2VnbWVudHNbZGNTZWdtZW50cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCB7fSk7XG4gICAgbWV0YWRhdGFUb1Nob3cgPSBtZXRhZGF0YVRvU2hvd1tkY0xhc3RTZWdtZW50XSB8fCBtZXRhZGF0YVRvU2hvd1tkdF0gfHwgW107XG5cbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIHBhdGhzLFxuICAgICAgbGFiZWxzLFxuICAgICAgbWV0YWRhdGFUb1Nob3csXG4gICAgICB0eXBlOiBkdFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZURpZ2l0YWxPYmplY3QocGF5bG9hZCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXggIT09IHBheWxvYWQpIHtcbiAgICAgIC8vIGxpbmsgY2hlY2tcbiAgICAgIGlmICh0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdLnR5cGUgPT09ICdleHRlcm5hbCcgJiYgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCkge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdLnVybCwgJ19ibGFuaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0IGltYWdlIHZpZXdlclxuICAgICAgICBjb25zdCBzY2hlZGFJbWFnZURTID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdhdy1zY2hlZGEtaW1hZ2UnKTtcbiAgICAgICAgc2NoZWRhSW1hZ2VEUy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3RJbmRleCA9IHBheWxvYWQ7XG4gICAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QgPSB0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdC50eXBlLmluY2x1ZGVzKCdpbWFnZXMnKSkge1xuICAgICAgICAgIGlmIChzY2hlZGFJbWFnZURTLmhhc0luc3RhbmNlKCkpIHtcbiAgICAgICAgICAgIHNjaGVkYUltYWdlRFMudXBkYXRlSW1hZ2VzKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdwZGYnKSB7XG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1wZGYnKS51cGRhdGUodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZURpZ2l0YWxPYmplY3RzKGRpZ2l0YWxPYmplY3RzKSB7XG4gICAgcmV0dXJuIGRpZ2l0YWxPYmplY3RzLm1hcCgoJGRvKSA9PiB7XG4gICAgICBpZiAoJGRvLnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXG4gICAgICAgICAgdHlwZTogJGRvLnR5cGUsXG4gICAgICAgICAgbGFiZWw6ICRkby5sYWJlbCxcbiAgICAgICAgICBoYXNOYXZpZ2F0aW9uOiAkZG8uaXRlbXMubGVuZ3RoID4gMSxcbiAgICAgICAgICBpdGVtczogJGRvLml0ZW1zLm1hcCgoeyB1cmwgfSkgPT4gKHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHR5cGU6ICRkby50eXBlLFxuICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuICRkbztcbiAgICB9KTtcbiAgfVxufVxuIl19