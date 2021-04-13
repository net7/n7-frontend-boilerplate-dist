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
        var _b, _c;
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
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
        if ((_c = (_b = this.configuration.get('scheda-layout')) === null || _b === void 0 ? void 0 : _b.tree) === null || _c === void 0 ? void 0 : _c.lite) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBc1dDO1FBbldTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBNEJ2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBU3pCLDJEQUEyRDtRQUNuRCxrQkFBWSxHQUE4QixTQUFTLENBQUM7UUFvRTVELGFBQU8sR0FBRyxjQUFNLE9BQUEsZ0JBQWdCLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDOztJQTBOeEMsQ0FBQztJQTVSQyxpQ0FBTSxHQUFOLFVBQU8sRUFFTjtZQURDLGdD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QUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixPQUFPO29CQUNMLEVBQUUsRUFBRSxzQkFBc0I7b0JBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFPOzRCQUFMLFlBQUc7d0JBQU8sT0FBQSxDQUFDOzRCQUNqQyxHQUFHLEtBQUE7NEJBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3lCQUNmLENBQUM7b0JBSGdDLENBR2hDLENBQUM7aUJBQ0osQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwV00scUJBQUksR0FBUSxJQUFJLENBQUM7SUFxVzFCLHVCQUFDO0NBQUEsQUF0V0QsQ0FBc0MsZ0JBQWdCLEdBc1dyRDtTQXRXWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgdHJlZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHJlbGF0ZWRFbnRpdGllc0hlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNSZWxhdGVkRW50aXRpZXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNEaWdpdGFsT2JqZWN0czogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGRpZ2l0YWxPYmplY3RzOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50RGlnaXRhbE9iamVjdDogYW55O1xyXG5cclxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3RJbmRleDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHRyZWVNYXhIZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogU3dpdGNoIGxvYWRlZC1jb250ZW50IGFuZCBsb2FkZWQtZW1wdHkgc3RhdGVzICovXHJcbiAgcHVibGljIGhhc0NvbnRlbnQgPSB0cnVlO1xyXG5cclxuICAvKiogU3RyaW5nIHRvIHJlbmRlciBpbiB0aGUgbG9hZGVkLWVtcHR5IHN0YXRlICovXHJcbiAgcHVibGljIGVtcHR5U3RhdGVTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGV4dGVybmFsVXJsVGV4dDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzQ29udGV4dE1lbnU6ICgpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBOYW1lIG9mIHF1ZXJ5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKGNob3NlbiBpbiBjb25maWcpICovXHJcbiAgcHJpdmF0ZSBnZXRUcmVlUXVlcnk6ICdnZXRUcmVlJyB8ICdnZXRUcmVlTGl0ZScgPSAnZ2V0VHJlZSc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWxhdGVkRW50aXRpZXNIZWFkZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtZW50aXRpZXMnXS50aXRsZTtcclxuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ10udGl0bGU7XHJcbiAgICB0aGlzLmV4dGVybmFsVXJsVGV4dCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZXh0ZXJuYWwtdXJsLXRleHQnXTtcclxuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCk7XHJcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtcHR5TGFiZWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWxhYmVsJ107XHJcbiAgICB0aGlzLmVtcHR5U3RhdGVTdHJpbmcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWh0bWwnXTtcclxuICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSB9KTtcclxuXHJcbiAgICAvLyBzd2l0Y2ggdGhlIHRyZWUgcXVlcnkgdG8gdGhlIHNsaW0gdmVyc2lvblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKT8udHJlZT8ubGl0ZSkge1xyXG4gICAgICB0aGlzLmdldFRyZWVRdWVyeSA9ICdnZXRUcmVlTGl0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcclxuXHJcbiAgICAvLyBpbWFnZSB2aWV3ZXIgY29udGV4dC1tZW51IGNoZWNrXHJcbiAgICBjb25zdCBpbWFnZVZpZXdlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnaW1hZ2Utdmlld2VyJ10gfHwge307XHJcbiAgICB0aGlzLmhhc0NvbnRleHRNZW51ID0gKCkgPT4gISFpbWFnZVZpZXdlckNvbmZpZ1snY29udGV4dC1tZW51J107XHJcblxyXG4gICAgLy8gcGRmIHZpZXdlciBvcHRpb25zXHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZU9wdGlvbnModGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydwZGYtdmlld2VyJ10gfHwge30pO1xyXG5cclxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcclxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XHJcbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IGxheW91dENvbmZpZy5tZXRhZGF0YSB8fCB7fTtcclxuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xyXG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xyXG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQodGhpcy5nZXRUcmVlUXVlcnksIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VHJlZSh0cmVlKSB7XHJcbiAgICBBd1NjaGVkYUxheW91dERTLnRyZWUgPSB0cmVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJlZSA9ICgpID0+IEF3U2NoZWRhTGF5b3V0RFMudHJlZTtcclxuXHJcbiAgdXBkYXRlTmF2aWdhdGlvbih0ZXh0KSB7XHJcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEl0ZW0oaWQpIHtcclxuICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0Tm9kZScsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7IGlkLCBtYXhTaW1pbGFySXRlbXMgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAvLyByZXNldFxyXG4gICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmllbGRzID0gdGhpcy5nZXRGaWVsZHMocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gISEoQXJyYXkuaXNBcnJheShtZXRhZGF0YUZpZWxkcykgJiYgbWV0YWRhdGFGaWVsZHMubGVuZ3RoKTtcclxuICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykgJiYgcmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5icmVhZGNydW1icykgJiYgcmVzcG9uc2UuYnJlYWRjcnVtYnMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpXHJcbiAgICAgICAgJiYgcmVzcG9uc2UuZGlnaXRhbE9iamVjdHMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKVxyXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGhcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5oYXNDb250ZW50ID0gISEoXHJcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YVxyXG4gICAgICAgIHx8IHRoaXMuaGFzU2ltaWxhckl0ZW1zXHJcbiAgICAgICAgfHwgdGhpcy5oYXNSZWxhdGVkRW50aXRpZXNcclxuICAgICAgICB8fCB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0geyBjb250ZW50OiBudWxsIH07XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xyXG4gICAgICAgIGNvbnRlbnQuY29udGVudCA9IHJlc3BvbnNlLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIC8vIGRpZ2l0YWwgb2JqZWN0c1xyXG4gICAgICBpZiAodGhpcy5oYXNEaWdpdGFsT2JqZWN0cykge1xyXG4gICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzID0gdGhpcy5ub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbmUoJ2F3LXNjaGVkYS1kaWdpdGFsLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtZHJvcGRvd24nKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGlnaXRhbE9iamVjdHMgPSByZXNwb25zZS5kaWdpdGFsT2JqZWN0cztcclxuICAgICAgICB0aGlzLmNoYW5nZURpZ2l0YWxPYmplY3QoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xyXG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXHJcbiAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlT2JqKTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShtZXRhZGF0YUZpZWxkcyk7XHJcblxyXG4gICAgICAvLyBCcmVhZGNydW1iIHNlY3Rpb25cclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWJzKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgYCR7ZWxlbWVudC5saW5rfS9gLFxyXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxyXG4gICAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xyXG4gICAgICByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xyXG4gICAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IGxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgICA/IGAke2xhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICAgIDogbGFiZWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb250cm9sIHN0aWNreVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xyXG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xyXG5cclxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcclxuXHJcbiAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcclxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBkb2N1bWVudF90eXBlOiBkdCxcclxuICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb246IGRjXHJcbiAgICB9ID0gcmVzcG9uc2U7XHJcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcclxuICAgIGNvbnN0IGRjU2VnbWVudHMgPSB0eXBlb2YgZGMgPT09ICdzdHJpbmcnID8gZGMuc3BsaXQoJy4nKSA6IFtdO1xyXG4gICAgY29uc3QgZGNMYXN0U2VnbWVudCA9IGRjU2VnbWVudHNbZGNTZWdtZW50cy5sZW5ndGggLSAxXTtcclxuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIHt9KTtcclxuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGNMYXN0U2VnbWVudF0gfHwgbWV0YWRhdGFUb1Nob3dbZHRdIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICBmaWVsZHMsXHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIG1ldGFkYXRhVG9TaG93LFxyXG4gICAgICB0eXBlOiBkdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlRGlnaXRhbE9iamVjdChwYXlsb2FkKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ICE9PSBwYXlsb2FkKSB7XHJcbiAgICAgIC8vIGxpbmsgY2hlY2tcclxuICAgICAgaWYgKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udHlwZSA9PT0gJ2V4dGVybmFsJyAmJiB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXS51cmwsICdfYmxhbmsnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhbHdheXMgcmVzZXQgaW1hZ2Ugdmlld2VyXHJcbiAgICAgICAgY29uc3Qgc2NoZWRhSW1hZ2VEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2NoZWRhLWltYWdlJyk7XHJcbiAgICAgICAgc2NoZWRhSW1hZ2VEUy5yZXNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXggPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QgPSB0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XHJcbiAgICAgICAgICBpZiAoc2NoZWRhSW1hZ2VEUy5oYXNJbnN0YW5jZSgpKSB7XHJcbiAgICAgICAgICAgIHNjaGVkYUltYWdlRFMudXBkYXRlSW1hZ2VzKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ3BkZicpIHtcclxuICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtcGRmJykudXBkYXRlKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhkaWdpdGFsT2JqZWN0cykge1xyXG4gICAgcmV0dXJuIGRpZ2l0YWxPYmplY3RzLm1hcCgoJGRvKSA9PiB7XHJcbiAgICAgIGlmICgkZG8udHlwZS5pbmNsdWRlcygnaW1hZ2VzJykpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXHJcbiAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcclxuICAgICAgICAgIGxhYmVsOiAkZG8ubGFiZWwsXHJcbiAgICAgICAgICBoYXNOYXZpZ2F0aW9uOiAkZG8uaXRlbXMubGVuZ3RoID4gMSxcclxuICAgICAgICAgIGl0ZW1zOiAkZG8uaXRlbXMubWFwKCh7IHVybCB9KSA9PiAoe1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6ICRkby50eXBlLFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJGRvO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==