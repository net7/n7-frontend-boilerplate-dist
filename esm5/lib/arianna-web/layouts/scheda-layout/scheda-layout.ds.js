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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBdVhDO1FBcFhTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFvQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBNEJ2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBU3pCLDJEQUEyRDtRQUNuRCxrQkFBWSxHQUE4QixTQUFTLENBQUM7UUF5RTVELGFBQU8sR0FBRyxjQUFNLE9BQUEsZ0JBQWdCLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDOztJQW9PeEMsQ0FBQztJQTNTQyxpQ0FBTSxHQUFOLFVBQU8sRUFFTjtZQURDLGdD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QixDQUFDLENBQUM7cUJBQy9EO2lCQUNGO3FCQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sa0RBQXVCLEdBQS9CLFVBQWdDLGNBQWM7UUFDNUMsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUM1QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixPQUFPO29CQUNMLEVBQUUsRUFBRSxzQkFBc0I7b0JBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLGFBQWEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFPOzRCQUFMLFlBQUc7d0JBQU8sT0FBQSxDQUFDOzRCQUNqQyxHQUFHLEtBQUE7NEJBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3lCQUNmLENBQUM7b0JBSGdDLENBR2hDLENBQUM7aUJBQ0osQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyWE0scUJBQUksR0FBUSxJQUFJLENBQUM7SUFzWDFCLHVCQUFDO0NBQUEsQUF2WEQsQ0FBc0MsZ0JBQWdCLEdBdVhyRDtTQXZYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0Q29uZmlnO1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIHRyZWU6IGFueTtcclxuXHJcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyByZWxhdGVkRW50aXRpZXNIZWFkZXI6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbWV0YWRhdGFTZWN0aW9uVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzUmVsYXRlZEVudGl0aWVzOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzRGlnaXRhbE9iamVjdHM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBkaWdpdGFsT2JqZWN0czogYW55O1xyXG5cclxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3Q6IGFueTtcclxuXHJcbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xyXG5cclxuICBwdWJsaWMgY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFN3aXRjaCBsb2FkZWQtY29udGVudCBhbmQgbG9hZGVkLWVtcHR5IHN0YXRlcyAqL1xyXG4gIHB1YmxpYyBoYXNDb250ZW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFN0cmluZyB0byByZW5kZXIgaW4gdGhlIGxvYWRlZC1lbXB0eSBzdGF0ZSAqL1xyXG4gIHB1YmxpYyBlbXB0eVN0YXRlU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBleHRlcm5hbFVybFRleHQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc0NvbnRleHRNZW51OiAoKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogTmFtZSBvZiBxdWVyeSB0aGF0IHNob3VsZCBiZSB1c2VkIChjaG9zZW4gaW4gY29uZmlnKSAqL1xyXG4gIHByaXZhdGUgZ2V0VHJlZVF1ZXJ5OiAnZ2V0VHJlZScgfCAnZ2V0VHJlZUxpdGUnID0gJ2dldFRyZWUnO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICB0aGlzLmxheW91dENvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKTtcclxuICAgIH1cclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgaWYgKCF0aGlzLnNpZGViYXJDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gdGhpcy5sYXlvdXRDb25maWcudHJlZS5jb2xsYXBzZWRCeURlZmF1bHQgPz8gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbGF0ZWRFbnRpdGllc0hlYWRlciA9IHRoaXMubGF5b3V0Q29uZmlnWydyZWxhdGVkLWVudGl0aWVzJ10udGl0bGU7XHJcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMubGF5b3V0Q29uZmlnWydyZWxhdGVkLWl0ZW1zJ10udGl0bGU7XHJcbiAgICB0aGlzLmV4dGVybmFsVXJsVGV4dCA9IHRoaXMubGF5b3V0Q29uZmlnWydleHRlcm5hbC11cmwtdGV4dCddO1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlY3Rpb25UaXRsZSA9IHRoaXMuZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKTtcclxuICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMubGF5b3V0Q29uZmlnWydlbXB0eS1sYWJlbCddO1xyXG4gICAgdGhpcy5lbXB0eVN0YXRlU3RyaW5nID0gdGhpcy5sYXlvdXRDb25maWdbJ2VtcHR5LWh0bWwnXTtcclxuICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSB9KTtcclxuXHJcbiAgICAvLyBzd2l0Y2ggdGhlIHRyZWUgcXVlcnkgdG8gdGhlIHNsaW0gdmVyc2lvblxyXG4gICAgaWYgKHRoaXMubGF5b3V0Q29uZmlnPy50cmVlPy5saXRlKSB7XHJcbiAgICAgIHRoaXMuZ2V0VHJlZVF1ZXJ5ID0gJ2dldFRyZWVMaXRlJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncGF0cmltb25pbycpO1xyXG5cclxuICAgIC8vIGltYWdlIHZpZXdlciBjb250ZXh0LW1lbnUgY2hlY2tcclxuICAgIGNvbnN0IGltYWdlVmlld2VyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydpbWFnZS12aWV3ZXInXSB8fCB7fTtcclxuICAgIHRoaXMuaGFzQ29udGV4dE1lbnUgPSAoKSA9PiAhIWltYWdlVmlld2VyQ29uZmlnWydjb250ZXh0LW1lbnUnXTtcclxuXHJcbiAgICAvLyBwZGYgdmlld2VyIG9wdGlvbnNcclxuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtcGRmJykudXBkYXRlT3B0aW9ucyh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3BkZi12aWV3ZXInXSB8fCB7fSk7XHJcblxyXG4gICAgLy8gc2lkZWJhciBzdGlja3kgY29udHJvbFxyXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRhZGF0YVNlY3Rpb25UaXRsZSgpIHtcclxuICAgIGNvbnN0IGxheW91dENvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKTtcclxuICAgIGNvbnN0IG1ldGFkYXRhQ29uZmlnID0gbGF5b3V0Q29uZmlnLm1ldGFkYXRhIHx8IHt9O1xyXG4gICAgcmV0dXJuIG1ldGFkYXRhQ29uZmlnLnRpdGxlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XHJcbiAgICBpZiAoQXdTY2hlZGFMYXlvdXREUy50cmVlKSB7XHJcbiAgICAgIHJldHVybiBvZihBd1NjaGVkYUxheW91dERTLnRyZWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCh0aGlzLmdldFRyZWVRdWVyeSwge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmVlKHRyZWUpIHtcclxuICAgIEF3U2NoZWRhTGF5b3V0RFMudHJlZSA9IHRyZWU7XHJcbiAgfVxyXG5cclxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xyXG5cclxuICB1cGRhdGVOYXZpZ2F0aW9uKHRleHQpIHtcclxuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZSh7IHRleHQsIGlzRXhwYW5kZWQ6ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkSXRlbShpZCkge1xyXG4gICAgY29uc3QgbWF4U2ltaWxhckl0ZW1zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ21heC1yZWxhdGVkLWl0ZW1zJ107XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXROb2RlJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHsgaWQsIG1heFNpbWlsYXJJdGVtcyB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgY29udGVudCBvZiB0aGUgc2VsZWN0ZWQgdHJlZSBpdGVtIGluIHRoZSByaWdodCBwb3J0aW9uIG9mIHRoZSB2aWV3LlxyXG4gICAqIEBwYXJhbSByZXNwb25zZSBodHRwIHJlc3BvbnNlIGZvciB0aGUgdHJlZSBpdGVtXHJcbiAgICovXHJcbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAvLyByZXNldFxyXG4gICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmllbGRzID0gdGhpcy5nZXRGaWVsZHMocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gISEoQXJyYXkuaXNBcnJheShtZXRhZGF0YUZpZWxkcykgJiYgbWV0YWRhdGFGaWVsZHMubGVuZ3RoKTtcclxuICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykgJiYgcmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5icmVhZGNydW1icykgJiYgcmVzcG9uc2UuYnJlYWRjcnVtYnMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpXHJcbiAgICAgICAgJiYgcmVzcG9uc2UuZGlnaXRhbE9iamVjdHMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKVxyXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGhcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5oYXNDb250ZW50ID0gISEoXHJcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YVxyXG4gICAgICAgIHx8IHRoaXMuaGFzU2ltaWxhckl0ZW1zXHJcbiAgICAgICAgfHwgdGhpcy5oYXNSZWxhdGVkRW50aXRpZXNcclxuICAgICAgICB8fCB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0geyBjb250ZW50OiBudWxsIH07XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xyXG4gICAgICAgIGNvbnRlbnQuY29udGVudCA9IHJlc3BvbnNlLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIC8vIGRpZ2l0YWwgb2JqZWN0c1xyXG4gICAgICBpZiAodGhpcy5oYXNEaWdpdGFsT2JqZWN0cykge1xyXG4gICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzID0gdGhpcy5ub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbmUoJ2F3LXNjaGVkYS1kaWdpdGFsLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtZHJvcGRvd24nKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGlnaXRhbE9iamVjdHMgPSByZXNwb25zZS5kaWdpdGFsT2JqZWN0cztcclxuICAgICAgICB0aGlzLmNoYW5nZURpZ2l0YWxPYmplY3QoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xyXG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXHJcbiAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlT2JqKTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShtZXRhZGF0YUZpZWxkcyk7XHJcblxyXG4gICAgICAvLyBCcmVhZGNydW1iIHNlY3Rpb25cclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWJzKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgYCR7ZWxlbWVudC5saW5rfS9gLFxyXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxyXG4gICAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xyXG4gICAgICByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xyXG4gICAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IGxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgICA/IGAke2xhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICAgIDogbGFiZWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb250cm9sIHN0aWNreVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIGJldHdlZW4gdGhlIHRyZWUncyBjb2xsYXBzZWQgb3IgZXhwYW5kZWQgc3RhdGUuXHJcbiAgICovXHJcbiAgY29sbGFwc2VTaWRlYmFyKCkge1xyXG4gICAgLy8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmF0aW9uIHRvIHByZXZlbnQgdW53YW50ZWQgY2hhbmdlcyB0byB0aGUgdHJlZSBzdGF0ZS5cclxuICAgIHRoaXMubGF5b3V0Q29uZmlnLnRyZWUuY29sbGFwc2VkQnlEZWZhdWx0ID0gIXRoaXMubGF5b3V0Q29uZmlnLnRyZWUuY29sbGFwc2VkQnlEZWZhdWx0O1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcclxuICAgIHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2lkZWJhci1oZWFkZXInKS50b2dnbGVTaWRlYmFyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcclxuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcclxuXHJcbiAgICBtZXJnZShzb3VyY2UkLCB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJCkucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgY29uc3Qgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJUb3AgPSB3cmFwcGVyLm9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlclRvcCA8PSB3aW5kb3dUb3A7XHJcblxyXG4gICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXHJcbiAgICAgIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA+PSB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d3JhcHBlckJvdHRvbSAtIHdpbmRvd1RvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgZG9jdW1lbnRfdHlwZTogZHQsXHJcbiAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBkY1xyXG4gICAgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XHJcbiAgICBjb25zdCBkY1NlZ21lbnRzID0gdHlwZW9mIGRjID09PSAnc3RyaW5nJyA/IGRjLnNwbGl0KCcuJykgOiBbXTtcclxuICAgIGNvbnN0IGRjTGFzdFNlZ21lbnQgPSBkY1NlZ21lbnRzW2RjU2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCB7fSk7XHJcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93W2RjTGFzdFNlZ21lbnRdIHx8IG1ldGFkYXRhVG9TaG93W2R0XSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBwYXRocyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgICAgdHlwZTogZHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZURpZ2l0YWxPYmplY3QocGF5bG9hZCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3RJbmRleCAhPT0gcGF5bG9hZCkge1xyXG4gICAgICAvLyBsaW5rIGNoZWNrXHJcbiAgICAgIGlmICh0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdLnR5cGUgPT09ICdleHRlcm5hbCcgJiYgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0IGltYWdlIHZpZXdlclxyXG4gICAgICAgIGNvbnN0IHNjaGVkYUltYWdlRFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LXNjaGVkYS1pbWFnZScpO1xyXG4gICAgICAgIHNjaGVkYUltYWdlRFMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gcGF5bG9hZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gdGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdC50eXBlLmluY2x1ZGVzKCdpbWFnZXMnKSkge1xyXG4gICAgICAgICAgaWYgKHNjaGVkYUltYWdlRFMuaGFzSW5zdGFuY2UoKSkge1xyXG4gICAgICAgICAgICBzY2hlZGFJbWFnZURTLnVwZGF0ZUltYWdlcyh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW1hZ2UnKS51cGRhdGUodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdwZGYnKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm9ybWFsaXplRGlnaXRhbE9iamVjdHMoZGlnaXRhbE9iamVjdHMpIHtcclxuICAgIHJldHVybiBkaWdpdGFsT2JqZWN0cy5tYXAoKCRkbykgPT4ge1xyXG4gICAgICBpZiAoJGRvLnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxyXG4gICAgICAgICAgdHlwZTogJGRvLnR5cGUsXHJcbiAgICAgICAgICBsYWJlbDogJGRvLmxhYmVsLFxyXG4gICAgICAgICAgaGFzTmF2aWdhdGlvbjogJGRvLml0ZW1zLmxlbmd0aCA+IDEsXHJcbiAgICAgICAgICBpdGVtczogJGRvLml0ZW1zLm1hcCgoeyB1cmwgfSkgPT4gKHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICRkbztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=