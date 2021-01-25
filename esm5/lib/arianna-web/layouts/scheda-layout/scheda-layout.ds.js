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
        _this.getTree = function () { return AwSchedaLayoutDS.tree; };
        return _this;
    }
    AwSchedaLayoutDS.prototype.onInit = function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
        this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
        this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
        this.mainState.updateCustom('currentNav', 'patrimonio');
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
        return this.communication.request$('getTree', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBcVZDO1FBbFZTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBNEJ2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBNkR6QixhQUFPLEdBQUcsY0FBTSxPQUFBLGdCQUFnQixDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQzs7SUEwTnhDLENBQUM7SUFoUkMsaUNBQU0sR0FBTixVQUFPLEVBRU47WUFEQyxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFF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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7XG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCBtZXRhZGF0YUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL21ldGFkYXRhLmhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHN0YXRpYyB0cmVlOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyB0cmVlOiBhbnk7XG5cbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlbGF0ZWRFbnRpdGllc0hlYWRlcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzaW1pbGFySXRlbXNTZWN0aW9uVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgbWV0YWRhdGFTZWN0aW9uVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XG5cbiAgcHVibGljIGhhc1JlbGF0ZWRFbnRpdGllczogYm9vbGVhbjtcblxuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xuXG4gIHB1YmxpYyBoYXNEaWdpdGFsT2JqZWN0czogYm9vbGVhbjtcblxuICBwdWJsaWMgZGlnaXRhbE9iamVjdHM6IGFueTtcblxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3Q6IGFueTtcblxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3RJbmRleDogbnVtYmVyO1xuXG4gIHB1YmxpYyBpbWFnZVZpZXdlcklzdGFuY2U6IGFueTtcblxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG5cbiAgcHVibGljIHRyZWVNYXhIZWlnaHQgPSAnMTAwJSc7XG5cbiAgcHVibGljIGNvbnRlbnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBTd2l0Y2ggbG9hZGVkLWNvbnRlbnQgYW5kIGxvYWRlZC1lbXB0eSBzdGF0ZXMgKi9cbiAgcHVibGljIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gIC8qKiBTdHJpbmcgdG8gcmVuZGVyIGluIHRoZSBsb2FkZWQtZW1wdHkgc3RhdGUgKi9cbiAgcHVibGljIGVtcHR5U3RhdGVTdHJpbmc6IHN0cmluZztcblxuICBwdWJsaWMgZXh0ZXJuYWxVcmxUZXh0OiBzdHJpbmc7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZWxhdGVkRW50aXRpZXNIZWFkZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtZW50aXRpZXMnXS50aXRsZTtcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xuICAgIHRoaXMuZXh0ZXJuYWxVcmxUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydleHRlcm5hbC11cmwtdGV4dCddO1xuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCk7XG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgIH0pO1xuICAgIHRoaXMuZW1wdHlMYWJlbCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZW1wdHktbGFiZWwnXTtcbiAgICB0aGlzLmVtcHR5U3RhdGVTdHJpbmcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWh0bWwnXTtcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdwYXRyaW1vbmlvJyk7XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpO1xuICAgIGNvbnN0IG1ldGFkYXRhQ29uZmlnID0gbGF5b3V0Q29uZmlnLm1ldGFkYXRhIHx8IHt9O1xuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIGlmIChBd1NjaGVkYUxheW91dERTLnRyZWUpIHtcbiAgICAgIHJldHVybiBvZihBd1NjaGVkYUxheW91dERTLnRyZWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRUcmVlJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBzZXRUcmVlKHRyZWUpIHtcbiAgICBBd1NjaGVkYUxheW91dERTLnRyZWUgPSB0cmVlO1xuICB9XG5cbiAgZ2V0VHJlZSA9ICgpID0+IEF3U2NoZWRhTGF5b3V0RFMudHJlZTtcblxuICB1cGRhdGVOYXZpZ2F0aW9uKHRleHQpIHtcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoeyB0ZXh0IH0pO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQpIHtcbiAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXROb2RlJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBpZCwgbWF4U2ltaWxhckl0ZW1zIH0sXG4gICAgfSk7XG4gIH1cblxuICBsb2FkQ29udGVudChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgLy8gcmVzZXRcbiAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QgPSBudWxsO1xuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gbnVsbDtcblxuICAgICAgY29uc3QgbWV0YWRhdGFGaWVsZHMgPSB0aGlzLmdldEZpZWxkcyhyZXNwb25zZSk7XG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gISEoQXJyYXkuaXNBcnJheShtZXRhZGF0YUZpZWxkcykgJiYgbWV0YWRhdGFGaWVsZHMubGVuZ3RoKTtcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkSXRlbXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzID0gKFxuICAgICAgICBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzKVxuICAgICAgICAmJiByZXNwb25zZS5kaWdpdGFsT2JqZWN0cy5sZW5ndGhcbiAgICAgICk7XG4gICAgICB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllcyA9IChcbiAgICAgICAgQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICk7XG4gICAgICB0aGlzLmhhc0NvbnRlbnQgPSAhIShcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YVxuICAgICAgICB8fCB0aGlzLmhhc1NpbWlsYXJJdGVtc1xuICAgICAgICB8fCB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllc1xuICAgICAgICB8fCB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzXG4gICAgICApO1xuXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xuICAgICAgY29uc3QgY29udGVudCA9IHsgY29udGVudDogbnVsbCB9O1xuXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xuICAgICAgICBjb250ZW50LmNvbnRlbnQgPSByZXNwb25zZS50ZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcblxuICAgICAgLy8gZGlnaXRhbCBvYmplY3RzXG4gICAgICBpZiAodGhpcy5oYXNEaWdpdGFsT2JqZWN0cykge1xuICAgICAgICByZXNwb25zZS5kaWdpdGFsT2JqZWN0cyA9IHRoaXMubm9ybWFsaXplRGlnaXRhbE9iamVjdHMocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xuICAgICAgICAvLyB0aGlzLm9uZSgnYXctc2NoZWRhLWRpZ2l0YWwtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtZHJvcGRvd24nKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmRpZ2l0YWxPYmplY3RzID0gcmVzcG9uc2UuZGlnaXRhbE9iamVjdHM7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlnaXRhbE9iamVjdCgwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGl0bGVPYmogPSB7XG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHM6IHJlc3BvbnNlLnN1YlRpdGxlLFxuICAgICAgICBhY3Rpb25zOiB7fSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShtZXRhZGF0YUZpZWxkcyk7XG5cbiAgICAgIC8vIEJyZWFkY3J1bWIgc2VjdGlvblxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChyZXNwb25zZS5icmVhZGNydW1icykge1xuICAgICAgICByZXNwb25zZS5icmVhZGNydW1icy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICBgJHtlbGVtZW50Lmxpbmt9L2AsXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxuICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnKS51cGRhdGUoYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xuICAgICAgICBlbC5yZWxhdGlvbk5hbWUgPSBsYWJlbC5sZW5ndGggPiAzMFxuICAgICAgICAgID8gYCR7bGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICAgIDogbGFiZWw7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpO1xuICAgIH1cblxuICAgIC8vIGNvbnRyb2wgc3RpY2t5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICBpZiAoaGVscGVycy5icm93c2VySXNJRSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBtZXJnZShzb3VyY2UkLCB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGNvbnN0IHdpbmRvd0JvdHRvbSA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHdyYXBwZXJUb3AgPSB3cmFwcGVyLm9mZnNldFRvcDtcbiAgICAgIGNvbnN0IHdyYXBwZXJCb3R0b20gPSB3cmFwcGVyVG9wICsgd3JhcHBlci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlclRvcCA8PSB3aW5kb3dUb3A7XG5cbiAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcbiAgICAgIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dpbmRvd0JvdHRvbSAtIHdpbmRvd1RvcCAtIDUwfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d3JhcHBlckJvdHRvbSAtIHdpbmRvd1RvcCAtIDUwfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Qm90dG9tIDwgd3JhcHBlckJvdHRvbSkge1xuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d3JhcHBlckJvdHRvbSAtIHdyYXBwZXJUb3AgLSA1MH1weGA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzLFxuICAgICAgZG9jdW1lbnRfdHlwZTogZHQsXG4gICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvbjogZGNcbiAgICB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIGNvbnN0IGRjU2VnbWVudHMgPSB0eXBlb2YgZGMgPT09ICdzdHJpbmcnID8gZGMuc3BsaXQoJy4nKSA6IFtdO1xuICAgIGNvbnN0IGRjTGFzdFNlZ21lbnQgPSBkY1NlZ21lbnRzW2RjU2VnbWVudHMubGVuZ3RoIC0gMV07XG4gICAgbGV0IG1ldGFkYXRhVG9TaG93ID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93Jywge30pO1xuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGNMYXN0U2VnbWVudF0gfHwgbWV0YWRhdGFUb1Nob3dbZHRdIHx8IFtdO1xuXG4gICAgcmV0dXJuIG1ldGFkYXRhSGVscGVyLm5vcm1hbGl6ZSh7XG4gICAgICBmaWVsZHMsXG4gICAgICBwYXRocyxcbiAgICAgIGxhYmVscyxcbiAgICAgIG1ldGFkYXRhVG9TaG93LFxuICAgICAgdHlwZTogZHRcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VEaWdpdGFsT2JqZWN0KHBheWxvYWQpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ICE9PSBwYXlsb2FkKSB7XG4gICAgICAvLyBsaW5rIGNoZWNrXG4gICAgICBpZiAodGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXS50eXBlID09PSAnZXh0ZXJuYWwnICYmIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXS51cmwsICdfYmxhbmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsd2F5cyByZXNldCBpbWFnZSB2aWV3ZXJcbiAgICAgICAgY29uc3Qgc2NoZWRhSW1hZ2VEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2NoZWRhLWltYWdlJyk7XG4gICAgICAgIHNjaGVkYUltYWdlRFMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXggPSBwYXlsb2FkO1xuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gdGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QudHlwZS5pbmNsdWRlcygnaW1hZ2VzJykpIHtcbiAgICAgICAgICBpZiAoc2NoZWRhSW1hZ2VEUy5oYXNJbnN0YW5jZSgpKSB7XG4gICAgICAgICAgICBzY2hlZGFJbWFnZURTLnVwZGF0ZUltYWdlcyh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdC50eXBlID09PSAncGRmJykge1xuICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtcGRmJykudXBkYXRlKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhkaWdpdGFsT2JqZWN0cykge1xuICAgIHJldHVybiBkaWdpdGFsT2JqZWN0cy5tYXAoKCRkbykgPT4ge1xuICAgICAgaWYgKCRkby50eXBlLmluY2x1ZGVzKCdpbWFnZXMnKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgICAgIHR5cGU6ICRkby50eXBlLFxuICAgICAgICAgIGxhYmVsOiAkZG8ubGFiZWwsXG4gICAgICAgICAgaGFzTmF2aWdhdGlvbjogJGRvLml0ZW1zLmxlbmd0aCA+IDEsXG4gICAgICAgICAgaXRlbXM6ICRkby5pdGVtcy5tYXAoKHsgdXJsIH0pID0+ICh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkZG87XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==