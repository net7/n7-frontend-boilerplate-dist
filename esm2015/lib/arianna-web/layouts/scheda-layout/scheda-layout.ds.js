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
        this.getTree = () => AwSchedaLayoutDS.tree;
    }
    onInit({ configuration, mainState, router, options, titleService, communication, }) {
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
        return this.communication.request$('getTree', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUM5QixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQXREOztRQUdVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QywwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCckQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUE0QnZCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQWtCLElBQUksQ0FBQztRQUl2QyxvREFBb0Q7UUFDN0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQXNFekIsWUFBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQTBOeEMsQ0FBQztJQXZSQyxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsR0FDdkU7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Q0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNqQyxHQUFHO3dCQUNILElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDZixDQUFDLENBQUM7aUJBQ0osQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBNVZNLHFCQUFJLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBmcm9tRXZlbnQsIFN1YmplY3QsIG9mLCBtZXJnZSxcclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IG1ldGFkYXRhSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgc3RhdGljIHRyZWU6IGFueSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBzdGlja3lDb250cm9sVHJpZ2dlciQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBoYXNCcmVhZGNydW1iOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29udGVudFBhcnRzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIHRyZWU6IGFueTtcclxuXHJcbiAgcHVibGljIHNpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyByZWxhdGVkRW50aXRpZXNIZWFkZXI6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbWV0YWRhdGFTZWN0aW9uVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc01ldGFkYXRhOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzUmVsYXRlZEVudGl0aWVzOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzU2ltaWxhckl0ZW1zOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaGFzRGlnaXRhbE9iamVjdHM6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBkaWdpdGFsT2JqZWN0czogYW55O1xyXG5cclxuICBwdWJsaWMgY3VycmVudERpZ2l0YWxPYmplY3Q6IGFueTtcclxuXHJcbiAgcHVibGljIGN1cnJlbnREaWdpdGFsT2JqZWN0SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGltYWdlVmlld2VySXN0YW5jZTogYW55O1xyXG5cclxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB0cmVlTWF4SGVpZ2h0ID0gJzEwMCUnO1xyXG5cclxuICBwdWJsaWMgY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGVtcHR5TGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFN3aXRjaCBsb2FkZWQtY29udGVudCBhbmQgbG9hZGVkLWVtcHR5IHN0YXRlcyAqL1xyXG4gIHB1YmxpYyBoYXNDb250ZW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFN0cmluZyB0byByZW5kZXIgaW4gdGhlIGxvYWRlZC1lbXB0eSBzdGF0ZSAqL1xyXG4gIHB1YmxpYyBlbXB0eVN0YXRlU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBleHRlcm5hbFVybFRleHQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhhc0NvbnRleHRNZW51OiAoKSA9PiBib29sZWFuO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnNpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucmVsYXRlZEVudGl0aWVzSGVhZGVyID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydyZWxhdGVkLWVudGl0aWVzJ10udGl0bGU7XHJcbiAgICB0aGlzLnNpbWlsYXJJdGVtc1NlY3Rpb25UaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1pdGVtcyddLnRpdGxlO1xyXG4gICAgdGhpcy5leHRlcm5hbFVybFRleHQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2V4dGVybmFsLXVybC10ZXh0J107XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VjdGlvblRpdGxlID0gdGhpcy5nZXRNZXRhZGF0YVNlY3Rpb25UaXRsZSgpO1xyXG4gICAgdGhpcy5oYXNTaW1pbGFySXRlbXMgPSBmYWxzZTtcclxuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5lbXB0eUxhYmVsID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydlbXB0eS1sYWJlbCddO1xyXG4gICAgdGhpcy5lbXB0eVN0YXRlU3RyaW5nID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydlbXB0eS1odG1sJ107XHJcbiAgICB0aGlzLm9uZSgnYXctdHJlZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbycpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3BhdHJpbW9uaW8nKTtcclxuXHJcbiAgICAvLyBpbWFnZSB2aWV3ZXIgY29udGV4dC1tZW51IGNoZWNrXHJcbiAgICBjb25zdCBpbWFnZVZpZXdlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsnaW1hZ2Utdmlld2VyJ10gfHwge307XHJcbiAgICB0aGlzLmhhc0NvbnRleHRNZW51ID0gKCkgPT4gISFpbWFnZVZpZXdlckNvbmZpZ1snY29udGV4dC1tZW51J107XHJcblxyXG4gICAgLy8gcGRmIHZpZXdlciBvcHRpb25zXHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZU9wdGlvbnModGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpWydwZGYtdmlld2VyJ10gfHwge30pO1xyXG5cclxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcclxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XHJcbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IGxheW91dENvbmZpZy5tZXRhZGF0YSB8fCB7fTtcclxuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xyXG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xyXG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRyZWUodHJlZSkge1xyXG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcclxuICB9XHJcblxyXG4gIGdldFRyZWUgPSAoKSA9PiBBd1NjaGVkYUxheW91dERTLnRyZWU7XHJcblxyXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xyXG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKHsgdGV4dCB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRJdGVtKGlkKSB7XHJcbiAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyBpZCwgbWF4U2ltaWxhckl0ZW1zIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gcmVzZXRcclxuICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3RJbmRleCA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCBtZXRhZGF0YUZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKHJlc3BvbnNlKTtcclxuICAgICAgdGhpcy5oYXNNZXRhZGF0YSA9ICEhKEFycmF5LmlzQXJyYXkobWV0YWRhdGFGaWVsZHMpICYmIG1ldGFkYXRhRmllbGRzLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuaGFzU2ltaWxhckl0ZW1zID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkSXRlbXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFzQnJlYWRjcnVtYiA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UuYnJlYWRjcnVtYnMpICYmIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNEaWdpdGFsT2JqZWN0cyA9IChcclxuICAgICAgICBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzKVxyXG4gICAgICAgICYmIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmxlbmd0aFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllcyA9IChcclxuICAgICAgICBBcnJheS5pc0FycmF5KHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcylcclxuICAgICAgICAmJiByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9ICEhKFxyXG4gICAgICAgIHRoaXMuaGFzTWV0YWRhdGFcclxuICAgICAgICB8fCB0aGlzLmhhc1NpbWlsYXJJdGVtc1xyXG4gICAgICAgIHx8IHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzXHJcbiAgICAgICAgfHwgdGhpcy5oYXNEaWdpdGFsT2JqZWN0c1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5jb250ZW50UGFydHMgPSBbXTtcclxuICAgICAgY29uc3QgY29udGVudCA9IHsgY29udGVudDogbnVsbCB9O1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnRleHQpIHtcclxuICAgICAgICBjb250ZW50LmNvbnRlbnQgPSByZXNwb25zZS50ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGVudFBhcnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAvLyBkaWdpdGFsIG9iamVjdHNcclxuICAgICAgaWYgKHRoaXMuaGFzRGlnaXRhbE9iamVjdHMpIHtcclxuICAgICAgICByZXNwb25zZS5kaWdpdGFsT2JqZWN0cyA9IHRoaXMubm9ybWFsaXplRGlnaXRhbE9iamVjdHMocmVzcG9uc2UuZGlnaXRhbE9iamVjdHMpO1xyXG4gICAgICAgIC8vIHRoaXMub25lKCdhdy1zY2hlZGEtZGlnaXRhbC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzKTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWRyb3Bkb3duJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmRpZ2l0YWxPYmplY3RzID0gcmVzcG9uc2UuZGlnaXRhbE9iamVjdHM7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaWdpdGFsT2JqZWN0KDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0aXRsZU9iaiA9IHtcclxuICAgICAgICBpY29uOiByZXNwb25zZS5pY29uLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHM6IHJlc3BvbnNlLnN1YlRpdGxlLFxyXG4gICAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZU9iaik7XHJcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtbWV0YWRhdGEnKS51cGRhdGUobWV0YWRhdGFGaWVsZHMpO1xyXG5cclxuICAgICAgLy8gQnJlYWRjcnVtYiBzZWN0aW9uXHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0ge1xyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5icmVhZGNydW1icykge1xyXG4gICAgICAgIHJlc3BvbnNlLmJyZWFkY3J1bWJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGJyZWFkY3J1bWJzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogZWxlbWVudC5sYWJlbCxcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgaHJlZjogW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcclxuICAgICAgICAgICAgICAgIGAke2VsZW1lbnQubGlua30vYCxcclxuICAgICAgICAgICAgICAgIGhlbHBlcnMuc2x1Z2lmeShlbGVtZW50LmxhYmVsKSxcclxuICAgICAgICAgICAgICBdLmpvaW4oJycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1icmVhZGNydW1icycpLnVwZGF0ZShicmVhZGNydW1icyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIFBhdHJpbW9uaW8gLSAke3Jlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpIHtcclxuICAgICAgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbDtcclxuICAgICAgICBlbC5yZWxhdGlvbk5hbWUgPSBsYWJlbC5sZW5ndGggPiAzMFxyXG4gICAgICAgICAgPyBgJHtsYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXHJcbiAgICAgICAgICA6IGxhYmVsO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICBjb250ZXh0OiAnc2NoZWRhJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sIGxpc3Q6ICdyZWxhdGVkRW50aXRpZXMnLCB0aXRsZTogcmVzcG9uc2UudGl0bGVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udHJvbCBzdGlja3lcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcclxuICAgIHRoaXMuc2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLnNpZGViYXJDb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcclxuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcclxuXHJcbiAgICBtZXJnZShzb3VyY2UkLCB0aGlzLnN0aWNreUNvbnRyb2xUcmlnZ2VyJCkucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgY29uc3Qgd2luZG93Qm90dG9tID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJUb3AgPSB3cmFwcGVyLm9mZnNldFRvcDtcclxuICAgICAgY29uc3Qgd3JhcHBlckJvdHRvbSA9IHdyYXBwZXJUb3AgKyB3cmFwcGVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlclRvcCA8PSB3aW5kb3dUb3A7XHJcblxyXG4gICAgICAvLyB0cmVlIGhlaWdodCBjb250cm9sXHJcbiAgICAgIGlmICh0aGlzLnNpZGViYXJJc1N0aWNreSAmJiB3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA+PSB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d3JhcHBlckJvdHRvbSAtIHdpbmRvd1RvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3dCb3R0b20gPCB3cmFwcGVyQm90dG9tKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTWF4SGVpZ2h0ID0gYCR7d2luZG93Qm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd3JhcHBlclRvcCAtIDUwfXB4YDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgZG9jdW1lbnRfdHlwZTogZHQsXHJcbiAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBkY1xyXG4gICAgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XHJcbiAgICBjb25zdCBkY1NlZ21lbnRzID0gdHlwZW9mIGRjID09PSAnc3RyaW5nJyA/IGRjLnNwbGl0KCcuJykgOiBbXTtcclxuICAgIGNvbnN0IGRjTGFzdFNlZ21lbnQgPSBkY1NlZ21lbnRzW2RjU2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCB7fSk7XHJcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93W2RjTGFzdFNlZ21lbnRdIHx8IG1ldGFkYXRhVG9TaG93W2R0XSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBwYXRocyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgICAgdHlwZTogZHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZURpZ2l0YWxPYmplY3QocGF5bG9hZCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudERpZ2l0YWxPYmplY3RJbmRleCAhPT0gcGF5bG9hZCkge1xyXG4gICAgICAvLyBsaW5rIGNoZWNrXHJcbiAgICAgIGlmICh0aGlzLmRpZ2l0YWxPYmplY3RzW3BheWxvYWRdLnR5cGUgPT09ICdleHRlcm5hbCcgJiYgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZGlnaXRhbE9iamVjdHNbcGF5bG9hZF0udXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0IGltYWdlIHZpZXdlclxyXG4gICAgICAgIGNvbnN0IHNjaGVkYUltYWdlRFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LXNjaGVkYS1pbWFnZScpO1xyXG4gICAgICAgIHNjaGVkYUltYWdlRFMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdEluZGV4ID0gcGF5bG9hZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0ID0gdGhpcy5kaWdpdGFsT2JqZWN0c1twYXlsb2FkXTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdC50eXBlLmluY2x1ZGVzKCdpbWFnZXMnKSkge1xyXG4gICAgICAgICAgaWYgKHNjaGVkYUltYWdlRFMuaGFzSW5zdGFuY2UoKSkge1xyXG4gICAgICAgICAgICBzY2hlZGFJbWFnZURTLnVwZGF0ZUltYWdlcyh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW1hZ2UnKS51cGRhdGUodGhpcy5jdXJyZW50RGlnaXRhbE9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdwZGYnKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLXBkZicpLnVwZGF0ZSh0aGlzLmN1cnJlbnREaWdpdGFsT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm9ybWFsaXplRGlnaXRhbE9iamVjdHMoZGlnaXRhbE9iamVjdHMpIHtcclxuICAgIHJldHVybiBkaWdpdGFsT2JqZWN0cy5tYXAoKCRkbykgPT4ge1xyXG4gICAgICBpZiAoJGRvLnR5cGUuaW5jbHVkZXMoJ2ltYWdlcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxyXG4gICAgICAgICAgdHlwZTogJGRvLnR5cGUsXHJcbiAgICAgICAgICBsYWJlbDogJGRvLmxhYmVsLFxyXG4gICAgICAgICAgaGFzTmF2aWdhdGlvbjogJGRvLml0ZW1zLmxlbmd0aCA+IDEsXHJcbiAgICAgICAgICBpdGVtczogJGRvLml0ZW1zLm1hcCgoeyB1cmwgfSkgPT4gKHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiAkZG8udHlwZSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICRkbztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=