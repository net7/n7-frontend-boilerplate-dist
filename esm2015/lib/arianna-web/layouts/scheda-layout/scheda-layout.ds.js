import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject, of, merge, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { get as _get } from 'lodash';
import helpers from '../../../common/helpers';
import metadataHelper from '../../helpers/metadata.helper';
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
        /** Switch loaded-content and loaded-empty states */
        this.hasContent = true;
        /** Name of query that should be used (chosen in config) */
        this.getTreeQuery = 'getTree';
        this.getTree = () => AwSchedaLayoutDS.tree;
    }
    onInit({ configuration, mainState, router, options, titleService, communication, }) {
        var _a, _b;
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
        if ((_b = (_a = this.configuration.get('scheda-layout')) === null || _a === void 0 ? void 0 : _a.tree) === null || _b === void 0 ? void 0 : _b.lite) {
            this.getTreeQuery = 'getTreeLite';
        }
        this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
        this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // image viewer context-menu check
        const imageViewerConfig = this.configuration.get('scheda-layout')['image-viewer'] || {};
        this.hasContextMenu = () => !!imageViewerConfig['context-menu'];
        // pdf viewer options
        this.one('aw-scheda-pdf').updateOptions(this.configuration.get('scheda-layout')['pdf-viewer'] || {});
        // sidebar sticky control
        this._sidebarStickyControl();
    }
    onDestroy() {
        this.destroyed$.next();
    }
    getMetadataSectionTitle() {
        const layoutConfig = this.configuration.get('scheda-layout');
        const metadataConfig = layoutConfig.metadata || {};
        return metadataConfig.title || null;
    }
    getNavigation(id) {
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
        return this.communication.request$(this.getTreeQuery, {
            onError: (error) => console.error(error),
            params: { treeId: id },
        });
    }
    setTree(tree) {
        AwSchedaLayoutDS.tree = tree;
    }
    updateNavigation(text) {
        this.one('aw-sidebar-header').update({ text });
    }
    loadItem(id) {
        const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: (error) => console.error(error),
            params: { id, maxSimilarItems },
        });
    }
    loadContent(response) {
        if (response) {
            // reset
            this.currentDigitalObject = null;
            this.currentDigitalObjectIndex = null;
            const metadataFields = this.getFields(response);
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
            const content = { content: null };
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
            this.one('aw-scheda-metadata').update(metadataFields);
            // Breadcrumb section
            const breadcrumbs = {
                items: [],
            };
            if (response.breadcrumbs) {
                response.breadcrumbs.forEach((element) => {
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
                });
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
            }
            // update head title
            this.mainState.update('headTitle', `Arianna4View - Patrimonio - ${response.title || response.label}`);
        }
        if (response.relatedItems) {
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        if (response.relatedEntities) {
            response.relatedEntities.forEach((el) => {
                const label = response.title || response.label;
                el.relationName = label.length > 30
                    ? `${label.substr(0, 30)}... `
                    : label;
            });
            this.one('aw-related-entities').updateOptions({
                context: 'scheda', config: this.configuration, list: 'relatedEntities', title: response.title
            });
            this.one('aw-related-entities').update(response.relatedEntities);
        }
        // control sticky
        setTimeout(() => {
            this.stickyControlTrigger$.next();
        });
    }
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    _sidebarStickyControl() {
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        const source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe(() => {
            const windowTop = window.pageYOffset;
            const windowBottom = window.scrollY + window.innerHeight;
            const wrapper = document.getElementsByClassName('sticky-parent')[0];
            const wrapperTop = wrapper.offsetTop;
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
        });
    }
    getFields(response) {
        const { fields, document_type: dt, document_classification: dc } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        const dcSegments = typeof dc === 'string' ? dc.split('.') : [];
        const dcLastSegment = dcSegments[dcSegments.length - 1];
        let metadataToShow = _get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[dcLastSegment] || metadataToShow[dt] || [];
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: dt
        });
    }
    changeDigitalObject(payload) {
        if (this.currentDigitalObjectIndex !== payload) {
            // link check
            if (this.digitalObjects[payload].type === 'external' && this.currentDigitalObject) {
                window.open(this.digitalObjects[payload].url, '_blank');
            }
            else {
                // always reset image viewer
                const schedaImageDS = this.getWidgetDataSource('aw-scheda-image');
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
    }
    normalizeDigitalObjects(digitalObjects) {
        return digitalObjects.map(($do) => {
            if ($do.type.includes('images')) {
                return {
                    id: 'scheda-layout-viewer',
                    type: $do.type,
                    label: $do.label,
                    hasNavigation: $do.items.length > 1,
                    items: $do.items.map(({ url }) => ({
                        url,
                        type: $do.type,
                    }))
                };
            }
            return $do;
        });
    }
}
AwSchedaLayoutDS.tree = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUM5QixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQXREOztRQUdVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QywwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCckQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUE0QnZCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQWtCLElBQUksQ0FBQztRQUl2QyxvREFBb0Q7UUFDN0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQVN6QiwyREFBMkQ7UUFDbkQsaUJBQVksR0FBOEIsU0FBUyxDQUFDO1FBb0U1RCxZQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBME54QyxDQUFDO0lBNVJDLE1BQU0sQ0FBQyxFQUNMLGFBQWEsRUFBRSxTQUFTLEVBQUUs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b0JBQ0wsRUFBRSxFQUFFLHNCQUFzQjtvQkFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDaEIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ2pDLEdBQUc7d0JBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUNmLENBQUMsQ0FBQztpQkFDSixDQUFDO2FBQ0g7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFwV00scUJBQUksR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGZyb21FdmVudCwgU3ViamVjdCwgb2YsIG1lcmdlLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBzdGF0aWMgdHJlZTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHN0aWNreUNvbnRyb2xUcmlnZ2VyJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc0JyZWFkY3J1bWI6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb250ZW50UGFydHM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgdHJlZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHJlbGF0ZWRFbnRpdGllc0hlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBtZXRhZGF0YVNlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzTWV0YWRhdGE6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNSZWxhdGVkRW50aXRpZXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNTaW1pbGFySXRlbXM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBoYXNEaWdpdGFsT2JqZWN0czogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGRpZ2l0YWxPYmplY3RzOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50RGlnaXRhbE9iamVjdDogYW55O1xyXG5cclxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3RJbmRleDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHRyZWVNYXhIZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogU3dpdGNoIGxvYWRlZC1jb250ZW50IGFuZCBsb2FkZWQtZW1wdHkgc3RhdGVzICovXHJcbiAgcHVibGljIGhhc0NvbnRlbnQgPSB0cnVlO1xyXG5cclxuICAvKiogU3RyaW5nIHRvIHJlbmRlciBpbiB0aGUgbG9hZGVkLWVtcHR5IHN0YXRlICovXHJcbiAgcHVibGljIGVtcHR5U3RhdGVTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGV4dGVybmFsVXJsVGV4dDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzQ29udGV4dE1lbnU6ICgpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBOYW1lIG9mIHF1ZXJ5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKGNob3NlbiBpbiBjb25maWcpICovXHJcbiAgcHJpdmF0ZSBnZXRUcmVlUXVlcnk6ICdnZXRUcmVlJyB8ICdnZXRUcmVlTGl0ZScgPSAnZ2V0VHJlZSc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWxhdGVkRW50aXRpZXNIZWFkZXIgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtZW50aXRpZXMnXS50aXRsZTtcclxuICAgIHRoaXMuc2ltaWxhckl0ZW1zU2VjdGlvblRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWl0ZW1zJ10udGl0bGU7XHJcbiAgICB0aGlzLmV4dGVybmFsVXJsVGV4dCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnZXh0ZXJuYWwtdXJsLXRleHQnXTtcclxuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCk7XHJcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtcHR5TGFiZWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWxhYmVsJ107XHJcbiAgICB0aGlzLmVtcHR5U3RhdGVTdHJpbmcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWh0bWwnXTtcclxuICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSB9KTtcclxuXHJcbiAgICAvLyBzd2l0Y2ggdGhlIHRyZWUgcXVlcnkgdG8gdGhlIHNsaW0gdmVyc2lvblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKT8udHJlZT8ubGl0ZSkge1xyXG4gICAgICB0aGlzLmdldFRyZWVRdWVyeSA9ICdnZXRUcmVlTGl0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcclxuXHJcbiAgICAvLyBpbWFnZSB2aWV3ZXIgY29udGV4dC1tZW51IGNoZWNrXHJcbiAgICBjb25zdCBpbWFnZVZpZXdlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnaW1hZ2Utdmlld2VyJ10gfHwge307XHJcbiAgICB0aGlzLmhhc0NvbnRleHRNZW51ID0gKCkgPT4gISFpbWFnZVZpZXdlckNvbmZpZ1snY29udGV4dC1tZW51J107XHJcblxyXG4gICAgLy8gcGRmIHZpZXdlciBvcHRpb25zXHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZU9wdGlvbnModGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydwZGYtdmlld2VyJ10gfHwge30pO1xyXG5cclxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcclxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XHJcbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IGxheW91dENvbmZpZy5tZXRhZGF0YSB8fCB7fTtcclxuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xyXG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xyXG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQodGhpcy5nZXRUcmVlUXVlcnksIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7IHRyZWVJZDogaWQgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VHJlZSh0cmVlKSB7XHJcbiAgICBBd1NjaGVkYUxheW91dERTLnRyZWUgPSB0cmVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJlZSA9ICgpID0+IEF3U2NoZWRhTGF5b3V0RFMudHJlZTtcclxuXHJcbiAgdXBkYXRlTmF2aWdhdGlvbih0ZXh0KSB7XHJcbiAgICB0aGlzLm9uZSgnYXctc2lkZWJhci1oZWFkZXInKS51cGRhdGUoeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEl0ZW0oaWQpIHtcclxuICAgIGNvbnN0IG1heFNpbWlsYXJJdGVtcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddWydtYXgtcmVsYXRlZC1pdGVtcyddO1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0Tm9kZScsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7IGlkLCBtYXhTaW1pbGFySXRlbXMgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZENvbnRlbnQocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAvLyByZXNldFxyXG4gICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmllbGRzID0gdGhpcy5nZXRGaWVsZHMocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmhhc01ldGFkYXRhID0gISEoQXJyYXkuaXNBcnJheShtZXRhZGF0YUZpZWxkcykgJiYgbWV0YWRhdGFGaWVsZHMubGVuZ3RoKTtcclxuICAgICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykgJiYgcmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNCcmVhZGNydW1iID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5icmVhZGNydW1icykgJiYgcmVzcG9uc2UuYnJlYWRjcnVtYnMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpXHJcbiAgICAgICAgJiYgcmVzcG9uc2UuZGlnaXRhbE9iamVjdHMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzID0gKFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKVxyXG4gICAgICAgICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGhcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5oYXNDb250ZW50ID0gISEoXHJcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YVxyXG4gICAgICAgIHx8IHRoaXMuaGFzU2ltaWxhckl0ZW1zXHJcbiAgICAgICAgfHwgdGhpcy5oYXNSZWxhdGVkRW50aXRpZXNcclxuICAgICAgICB8fCB0aGlzLmhhc0RpZ2l0YWxPYmplY3RzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0geyBjb250ZW50OiBudWxsIH07XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UudGV4dCkge1xyXG4gICAgICAgIGNvbnRlbnQuY29udGVudCA9IHJlc3BvbnNlLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZW50UGFydHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgIC8vIGRpZ2l0YWwgb2JqZWN0c1xyXG4gICAgICBpZiAodGhpcy5oYXNEaWdpdGFsT2JqZWN0cykge1xyXG4gICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzID0gdGhpcy5ub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhyZXNwb25zZS5kaWdpdGFsT2JqZWN0cyk7XHJcbiAgICAgICAgLy8gdGhpcy5vbmUoJ2F3LXNjaGVkYS1kaWdpdGFsLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtZHJvcGRvd24nKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGlnaXRhbE9iamVjdHMgPSByZXNwb25zZS5kaWdpdGFsT2JqZWN0cztcclxuICAgICAgICB0aGlzLmNoYW5nZURpZ2l0YWxPYmplY3QoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlT2JqID0ge1xyXG4gICAgICAgIGljb246IHJlc3BvbnNlLmljb24sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWwsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sczogcmVzcG9uc2Uuc3ViVGl0bGUsXHJcbiAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlT2JqKTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1tZXRhZGF0YScpLnVwZGF0ZShtZXRhZGF0YUZpZWxkcyk7XHJcblxyXG4gICAgICAvLyBCcmVhZGNydW1iIHNlY3Rpb25cclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWJzKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgYCR7ZWxlbWVudC5saW5rfS9gLFxyXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxyXG4gICAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xyXG4gICAgICByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xyXG4gICAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IGxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgICA/IGAke2xhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICAgIDogbGFiZWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb250cm9sIHN0aWNreVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xyXG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xyXG5cclxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcclxuXHJcbiAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcclxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBkb2N1bWVudF90eXBlOiBkdCxcclxuICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb246IGRjXHJcbiAgICB9ID0gcmVzcG9uc2U7XHJcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcclxuICAgIGNvbnN0IGRjU2VnbWVudHMgPSB0eXBlb2YgZGMgPT09ICdzdHJpbmcnID8gZGMuc3BsaXQoJy4nKSA6IFtdO1xyXG4gICAgY29uc3QgZGNMYXN0U2VnbWVudCA9IGRjU2VnbWVudHNbZGNTZWdtZW50cy5sZW5ndGggLSAxXTtcclxuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIHt9KTtcclxuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGNMYXN0U2VnbWVudF0gfHwgbWV0YWRhdGFUb1Nob3dbZHRdIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICBmaWVsZHMsXHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIG1ldGFkYXRhVG9TaG93LFxyXG4gICAgICB0eXBlOiBkdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlRGlnaXRhbE9iamVjdChwYXlsb2FkKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ICE9PSBwYXlsb2FkKSB7XHJcbiAgICAgIC8vIGxpbmsgY2hlY2tcclxuICAgICAgaWYgKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udHlwZSA9PT0gJ2V4dGVybmFsJyAmJiB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXS51cmwsICdfYmxhbmsnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhbHdheXMgcmVzZXQgaW1hZ2Ugdmlld2VyXHJcbiAgICAgICAgY29uc3Qgc2NoZWRhSW1hZ2VEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctc2NoZWRhLWltYWdlJyk7XHJcbiAgICAgICAgc2NoZWRhSW1hZ2VEUy5yZXNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXggPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QgPSB0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XHJcbiAgICAgICAgICBpZiAoc2NoZWRhSW1hZ2VEUy5oYXNJbnN0YW5jZSgpKSB7XHJcbiAgICAgICAgICAgIHNjaGVkYUltYWdlRFMudXBkYXRlSW1hZ2VzKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbWFnZScpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ3BkZicpIHtcclxuICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtcGRmJykudXBkYXRlKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemVEaWdpdGFsT2JqZWN0cyhkaWdpdGFsT2JqZWN0cykge1xyXG4gICAgcmV0dXJuIGRpZ2l0YWxPYmplY3RzLm1hcCgoJGRvKSA9PiB7XHJcbiAgICAgIGlmICgkZG8udHlwZS5pbmNsdWRlcygnaW1hZ2VzJykpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXHJcbiAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcclxuICAgICAgICAgIGxhYmVsOiAkZG8ubGFiZWwsXHJcbiAgICAgICAgICBoYXNOYXZpZ2F0aW9uOiAkZG8uaXRlbXMubGVuZ3RoID4gMSxcclxuICAgICAgICAgIGl0ZW1zOiAkZG8uaXRlbXMubWFwKCh7IHVybCB9KSA9PiAoe1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6ICRkby50eXBlLFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJGRvO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==