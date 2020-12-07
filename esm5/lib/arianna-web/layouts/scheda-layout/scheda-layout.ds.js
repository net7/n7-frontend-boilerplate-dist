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
            this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasRelatedEntities = Array.isArray(response.relatedEntities)
                && response.relatedEntities.length;
            this.hasImage = !!response.image;
            this.hasContent = !!(this.hasMetadata || this.hasSimilarItems
                || this.hasRelatedEntities || this.hasImage);
            this.contentParts = [];
            var content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // image viewer
            if (response.images) {
                var viewerDataSource = this.getWidgetDataSource('aw-scheda-image');
                if (!viewerDataSource.hasInstance()) {
                    this.one('aw-scheda-image').update(response);
                }
                else {
                    viewerDataSource.updateImages(response);
                }
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
            this.one('aw-scheda-metadata').update(this.getFields(response));
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
        var fields = response.fields, documenType = response.document_type;
        var paths = this.configuration.get('paths');
        var labels = this.configuration.get('labels');
        var metadataToShow = _get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[documenType] || [];
        return metadataHelper.normalize({
            fields: fields,
            paths: paths,
            labels: labels,
            metadataToShow: metadataToShow,
            type: documenType
        });
    };
    AwSchedaLayoutDS.tree = null;
    return AwSchedaLayoutDS;
}(LayoutDataSource));
export { AwSchedaLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FDOUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0Q7SUFBc0Msb0NBQWdCO0lBQXREO1FBQUEscUVBNlFDO1FBMVFTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekMsMkJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnJELGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBc0J2QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUV2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFJdkMsb0RBQW9EO1FBQzdDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBMER6QixhQUFPLEdBQUcsY0FBTSxPQUFBLGdCQUFnQixDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQzs7SUEySnhDLENBQUM7SUFoTkMsaUNBQU0sR0FBTixVQUFPLEVBRU47WUFEQyxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFF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QUM1RDtpQkFBTSxJQUFJLFlBQVksR0FBRyxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQU0sWUFBWSxHQUFHLFVBQVUsR0FBRyxFQUFFLE9BQUksQ0FBQzthQUM1RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsYUFBYSxHQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxPQUFJLENBQUM7YUFDN0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQ0FBUyxHQUFoQixVQUFpQixRQUFRO1FBQ2YsSUFBQSx3QkFBTSxFQUFFLG9DQUEwQixDQUFjO1FBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRixjQUFjLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDOUIsTUFBTSxRQUFBO1lBQ04sS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1lBQ04sY0FBYyxnQkFBQTtZQUNkLElBQUksRUFBRSxXQUFXO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUEzUU0scUJBQUksR0FBUSxJQUFJLENBQUM7SUE0UTFCLHVCQUFDO0NBQUEsQUE3UUQsQ0FBc0MsZ0JBQWdCLEdBNlFyRDtTQTdRWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgdHJlZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHJlbGF0ZWRFbnRpdGllc0hlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNSZWxhdGVkRW50aXRpZXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNJbWFnZTogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xyXG5cclxuICBwdWJsaWMgY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFN3aXRjaCBsb2FkZWQtY29udGVudCBhbmQgbG9hZGVkLWVtcHR5IHN0YXRlcyAqL1xyXG4gIHB1YmxpYyBoYXNDb250ZW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFN0cmluZyB0byByZW5kZXIgaW4gdGhlIGxvYWRlZC1lbXB0eSBzdGF0ZSAqL1xyXG4gIHB1YmxpYyBlbXB0eVN0YXRlU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWxhdGVkRW50aXRpZXNIZWFkZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtZW50aXRpZXMnXS50aXRsZTtcclxuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ10udGl0bGU7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VjdGlvblRpdGxlID0gdGhpcy5nZXRNZXRhZGF0YVNlY3Rpb25UaXRsZSgpO1xyXG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcclxuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbXB0eUxhYmVsID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydlbXB0eS1sYWJlbCddO1xyXG4gICAgdGhpcy5lbXB0eVN0YXRlU3RyaW5nID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydlbXB0eS1odG1sJ107XHJcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcclxuXHJcbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXHJcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCkge1xyXG4gICAgY29uc3QgbGF5b3V0Q29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpO1xyXG4gICAgY29uc3QgbWV0YWRhdGFDb25maWcgPSBsYXlvdXRDb25maWcubWV0YWRhdGEgfHwge307XHJcbiAgICByZXR1cm4gbWV0YWRhdGFDb25maWcudGl0bGUgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcclxuICAgIGlmIChBd1NjaGVkYUxheW91dERTLnRyZWUpIHtcclxuICAgICAgcmV0dXJuIG9mKEF3U2NoZWRhTGF5b3V0RFMudHJlZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRUcmVlJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHsgdHJlZUlkOiBpZCB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmVlKHRyZWUpIHtcclxuICAgIEF3U2NoZWRhTGF5b3V0RFMudHJlZSA9IHRyZWU7XHJcbiAgfVxyXG5cclxuICBnZXRUcmVlID0gKCkgPT4gQXdTY2hlZGFMYXlvdXREUy50cmVlO1xyXG5cclxuICB1cGRhdGVOYXZpZ2F0aW9uKHRleHQpIHtcclxuICAgIHRoaXMub25lKCdhdy1zaWRlYmFyLWhlYWRlcicpLnVwZGF0ZSh7IHRleHQgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkSXRlbShpZCkge1xyXG4gICAgY29uc3QgbWF4U2ltaWxhckl0ZW1zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ11bJ21heC1yZWxhdGVkLWl0ZW1zJ107XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXROb2RlJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHsgaWQsIG1heFNpbWlsYXJJdGVtcyB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkQ29udGVudChyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoaXMuaGFzTWV0YWRhdGEgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmZpZWxkcykgJiYgcmVzcG9uc2UuZmllbGRzLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykgJiYgcmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5icmVhZGNydW1icykgJiYgcmVzcG9uc2UuYnJlYWRjcnVtYnMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllcyA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKVxyXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFzSW1hZ2UgPSAhIXJlc3BvbnNlLmltYWdlO1xyXG4gICAgICB0aGlzLmhhc0NvbnRlbnQgPSAhISh0aGlzLmhhc01ldGFkYXRhIHx8IHRoaXMuaGFzU2ltaWxhckl0ZW1zXHJcbiAgICAgICAgfHwgdGhpcy5oYXNSZWxhdGVkRW50aXRpZXMgfHwgdGhpcy5oYXNJbWFnZSk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0geyBjb250ZW50OiBudWxsIH07XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xyXG4gICAgICAgIGNvbnRlbnQuY29udGVudCA9IHJlc3BvbnNlLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcclxuICAgICAgLy8gaW1hZ2Ugdmlld2VyXHJcbiAgICAgIGlmIChyZXNwb25zZS5pbWFnZXMpIHtcclxuICAgICAgICBjb25zdCB2aWV3ZXJEYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdhdy1zY2hlZGEtaW1hZ2UnKTtcclxuICAgICAgICBpZiAoIXZpZXdlckRhdGFTb3VyY2UuaGFzSW5zdGFuY2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZpZXdlckRhdGFTb3VyY2UudXBkYXRlSW1hZ2VzKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xyXG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXHJcbiAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlT2JqKTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZSh0aGlzLmdldEZpZWxkcyhyZXNwb25zZSkpO1xyXG5cclxuICAgICAgLy8gQnJlYWRjcnVtYiBzZWN0aW9uXHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0ge1xyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5icmVhZGNydW1icykge1xyXG4gICAgICAgIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgaHJlZjogW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcclxuICAgICAgICAgICAgICAgIGAke2VsZW1lbnQubGlua30vYCxcclxuICAgICAgICAgICAgICAgIGhlbHBlcnMuc2x1Z2lmeShlbGVtZW50LmxhYmVsKSxcclxuICAgICAgICAgICAgICBdLmpvaW4oJycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIFBhdHJpbW9uaW8gLSAke3Jlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpIHtcclxuICAgICAgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbDtcclxuICAgICAgICBlbC5yZWxhdGlvbk5hbWUgPSBsYWJlbC5sZW5ndGggPiAzMFxyXG4gICAgICAgICAgPyBgJHtsYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXHJcbiAgICAgICAgICA6IGxhYmVsO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICBjb250ZXh0OiAnc2NoZWRhJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sIGxpc3Q6ICdyZWxhdGVkRW50aXRpZXMnLCB0aXRsZTogcmVzcG9uc2UudGl0bGVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udHJvbCBzdGlja3lcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcclxuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcclxuXHJcbiAgICBtZXJnZShzb3VyY2UkLCB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJCkucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgY29uc3Qgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJUb3AgPSB3cmFwcGVyLm9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlclRvcCA8PSB3aW5kb3dUb3A7XHJcblxyXG4gICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXHJcbiAgICAgIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA+PSB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d3JhcHBlckJvdHRvbSAtIHdpbmRvd1RvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGZpZWxkcywgZG9jdW1lbnRfdHlwZTogZG9jdW1lblR5cGUgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XHJcbiAgICBsZXQgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCB7fSk7XHJcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93W2RvY3VtZW5UeXBlXSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBwYXRocyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgICAgdHlwZTogZG9jdW1lblR5cGVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=