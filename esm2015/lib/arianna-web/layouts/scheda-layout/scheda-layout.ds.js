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
            this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasRelatedEntities = Array.isArray(response.relatedEntities)
                && response.relatedEntities.length;
            this.hasImage = !!response.image;
            this.hasContent = !!(this.hasMetadata || this.hasSimilarItems
                || this.hasRelatedEntities || this.hasImage);
            this.contentParts = [];
            const content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // image viewer
            if (response.images) {
                const viewerDataSource = this.getWidgetDataSource('aw-scheda-image');
                if (!viewerDataSource.hasInstance()) {
                    this.one('aw-scheda-image').update(response);
                }
                else {
                    viewerDataSource.updateImages(response);
                }
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
            this.one('aw-scheda-metadata').update(this.getFields(response));
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
        const { fields, document_type: documenType } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        let metadataToShow = _get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[documenType] || [];
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: documenType
        });
    }
}
AwSchedaLayoutDS.tree = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUM5QixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQXREOztRQUdVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QywwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCckQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFzQnZCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQWtCLElBQUksQ0FBQztRQUl2QyxvREFBb0Q7UUFDN0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQTBEekIsWUFBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQTJKeEMsQ0FBQztJQWhOQyxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsR0FDdkU7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9GLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO1NBQ3pELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFeEQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ25ELE9BQU8sY0FBYyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7WUFDekIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3hDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBQ1YsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBSUQsZ0JBQWdCLENBQUMsSUFBSTtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQUU7UUFDVCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RHLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDeEMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVE7UUFDbEIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDNUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN4RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO21CQUM1RCxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZTttQkFDeEQsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixNQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUVsQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLGVBQWU7WUFDZixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNGO1lBRUQsTUFBTSxRQUFRLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLO3dCQUN0QyxPQUFPLEVBQUUsTUFBTTtxQkFDaEI7aUJBQ0Y7Z0JBQ0QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLEVBQUUsRUFBRTthQUNaLENBQUM7WUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRWhFLHFCQUFxQjtZQUNyQixNQUFNLFdBQVcsR0FBRztnQkFDbEIsS0FBSyxFQUFFLEVBQUU7YUFDVixDQUFDO1lBRUYsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUN4QixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUN2QyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDckIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO3dCQUNwQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFO2dDQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7Z0NBQzlDLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRztnQ0FDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzZCQUMvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7eUJBQ1g7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdkQ7WUFFRCxvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLCtCQUErQixRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDL0MsRUFBRSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUU7b0JBQ2pDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNO29CQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7YUFDOUYsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEU7UUFFRCxpQkFBaUI7UUFDakIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFTyxxQkFBcUI7UUFDM0Isa0NBQWtDO1FBQ2xDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQzdDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNmLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDckMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3pELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDbkYsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQyxNQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUV4RCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsSUFBSSxTQUFTLENBQUM7WUFFL0Msc0JBQXNCO1lBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxZQUFZLEdBQUcsYUFBYSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsWUFBWSxHQUFHLFNBQVMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUMzRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLGFBQWEsR0FBRyxTQUFTLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDNUQ7aUJBQU0sSUFBSSxZQUFZLEdBQUcsYUFBYSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsWUFBWSxHQUFHLFVBQVUsR0FBRyxFQUFFLElBQUksQ0FBQzthQUM1RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsYUFBYSxHQUFHLFVBQVUsR0FBRyxFQUFFLElBQUksQ0FBQzthQUM3RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFNBQVMsQ0FBQyxRQUFRO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0YsY0FBYyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzlCLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTTtZQUNOLGNBQWM7WUFDZCxJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOztBQTNRTSxxQkFBSSxHQUFRLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgZnJvbUV2ZW50LCBTdWJqZWN0LCBvZiwgbWVyZ2UsXHJcbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBtZXRhZGF0YUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL21ldGFkYXRhLmhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHN0YXRpYyB0cmVlOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgc3RpY2t5Q29udHJvbFRyaWdnZXIkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzQnJlYWRjcnVtYjogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGNvbnRlbnRQYXJ0czogYW55ID0ge307XHJcblxyXG4gIHB1YmxpYyB0cmVlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgcmVsYXRlZEVudGl0aWVzSGVhZGVyOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzaW1pbGFySXRlbXNTZWN0aW9uVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIG1ldGFkYXRhU2VjdGlvblRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBoYXNNZXRhZGF0YTogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGhhc1JlbGF0ZWRFbnRpdGllczogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGhhc1NpbWlsYXJJdGVtczogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGhhc0ltYWdlOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgaW1hZ2VWaWV3ZXJJc3RhbmNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHRyZWVNYXhIZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBjb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZW1wdHlMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogU3dpdGNoIGxvYWRlZC1jb250ZW50IGFuZCBsb2FkZWQtZW1wdHkgc3RhdGVzICovXHJcbiAgcHVibGljIGhhc0NvbnRlbnQgPSB0cnVlO1xyXG5cclxuICAvKiogU3RyaW5nIHRvIHJlbmRlciBpbiB0aGUgbG9hZGVkLWVtcHR5IHN0YXRlICovXHJcbiAgcHVibGljIGVtcHR5U3RhdGVTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHtcclxuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbGF0ZWRFbnRpdGllc0hlYWRlciA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NjaGVkYS1sYXlvdXQnKVsncmVsYXRlZC1lbnRpdGllcyddLnRpdGxlO1xyXG4gICAgdGhpcy5zaW1pbGFySXRlbXNTZWN0aW9uVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXS50aXRsZTtcclxuICAgIHRoaXMubWV0YWRhdGFTZWN0aW9uVGl0bGUgPSB0aGlzLmdldE1ldGFkYXRhU2VjdGlvblRpdGxlKCk7XHJcbiAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVtcHR5TGFiZWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWxhYmVsJ107XHJcbiAgICB0aGlzLmVtcHR5U3RhdGVTdHJpbmcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ2VtcHR5LWh0bWwnXTtcclxuICAgIHRoaXMub25lKCdhdy10cmVlJykudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSB9KTtcclxuXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBQYXRyaW1vbmlvJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncGF0cmltb25pbycpO1xyXG5cclxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcclxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YWRhdGFTZWN0aW9uVGl0bGUoKSB7XHJcbiAgICBjb25zdCBsYXlvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0Jyk7XHJcbiAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IGxheW91dENvbmZpZy5tZXRhZGF0YSB8fCB7fTtcclxuICAgIHJldHVybiBtZXRhZGF0YUNvbmZpZy50aXRsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xyXG4gICAgaWYgKEF3U2NoZWRhTGF5b3V0RFMudHJlZSkge1xyXG4gICAgICByZXR1cm4gb2YoQXdTY2hlZGFMYXlvdXREUy50cmVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldFRyZWUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyB0cmVlSWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRyZWUodHJlZSkge1xyXG4gICAgQXdTY2hlZGFMYXlvdXREUy50cmVlID0gdHJlZTtcclxuICB9XHJcblxyXG4gIGdldFRyZWUgPSAoKSA9PiBBd1NjaGVkYUxheW91dERTLnRyZWU7XHJcblxyXG4gIHVwZGF0ZU5hdmlnYXRpb24odGV4dCkge1xyXG4gICAgdGhpcy5vbmUoJ2F3LXNpZGViYXItaGVhZGVyJykudXBkYXRlKHsgdGV4dCB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRJdGVtKGlkKSB7XHJcbiAgICBjb25zdCBtYXhTaW1pbGFySXRlbXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzY2hlZGEtbGF5b3V0JylbJ3JlbGF0ZWQtaXRlbXMnXVsnbWF4LXJlbGF0ZWQtaXRlbXMnXTtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldE5vZGUnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczogeyBpZCwgbWF4U2ltaWxhckl0ZW1zIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRDb250ZW50KHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5oYXNNZXRhZGF0YSA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZmllbGRzKSAmJiByZXNwb25zZS5maWVsZHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc1NpbWlsYXJJdGVtcyA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEl0ZW1zKSAmJiByZXNwb25zZS5yZWxhdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhc0JyZWFkY3J1bWIgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmJyZWFkY3J1bWJzKSAmJiByZXNwb25zZS5icmVhZGNydW1icy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFzUmVsYXRlZEVudGl0aWVzID0gQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpXHJcbiAgICAgICAgJiYgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5oYXNJbWFnZSA9ICEhcmVzcG9uc2UuaW1hZ2U7XHJcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9ICEhKHRoaXMuaGFzTWV0YWRhdGEgfHwgdGhpcy5oYXNTaW1pbGFySXRlbXNcclxuICAgICAgICB8fCB0aGlzLmhhc1JlbGF0ZWRFbnRpdGllcyB8fCB0aGlzLmhhc0ltYWdlKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudFBhcnRzID0gW107XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IGNvbnRlbnQ6IG51bGwgfTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XHJcbiAgICAgICAgY29udGVudC5jb250ZW50ID0gcmVzcG9uc2UudGV4dDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRlbnRQYXJ0cy5wdXNoKGNvbnRlbnQpO1xyXG4gICAgICAvLyBpbWFnZSB2aWV3ZXJcclxuICAgICAgaWYgKHJlc3BvbnNlLmltYWdlcykge1xyXG4gICAgICAgIGNvbnN0IHZpZXdlckRhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LXNjaGVkYS1pbWFnZScpO1xyXG4gICAgICAgIGlmICghdmlld2VyRGF0YVNvdXJjZS5oYXNJbnN0YW5jZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWltYWdlJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmlld2VyRGF0YVNvdXJjZS51cGRhdGVJbWFnZXMocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGl0bGVPYmogPSB7XHJcbiAgICAgICAgaWNvbjogcmVzcG9uc2UuaWNvbixcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS50aXRsZSB8fCByZXNwb25zZS5sYWJlbCxcclxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2xzOiByZXNwb25zZS5zdWJUaXRsZSxcclxuICAgICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUodGl0bGVPYmopO1xyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLW1ldGFkYXRhJykudXBkYXRlKHRoaXMuZ2V0RmllbGRzKHJlc3BvbnNlKSk7XHJcblxyXG4gICAgICAvLyBCcmVhZGNydW1iIHNlY3Rpb25cclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmJyZWFkY3J1bWJzKSB7XHJcbiAgICAgICAgcmVzcG9uc2UuYnJlYWRjcnVtYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgYnJlYWRjcnVtYnMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlbGVtZW50LmxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgYCR7ZWxlbWVudC5saW5rfS9gLFxyXG4gICAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGVsZW1lbnQubGFiZWwpLFxyXG4gICAgICAgICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWJyZWFkY3J1bWJzJykudXBkYXRlKGJyZWFkY3J1bWJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gUGF0cmltb25pbyAtICR7cmVzcG9uc2UudGl0bGUgfHwgcmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogJ3NjaGVkYScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xyXG4gICAgICByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHJlc3BvbnNlLnRpdGxlIHx8IHJlc3BvbnNlLmxhYmVsO1xyXG4gICAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IGxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgICA/IGAke2xhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICAgIDogbGFiZWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbnRleHQ6ICdzY2hlZGEnLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiwgbGlzdDogJ3JlbGF0ZWRFbnRpdGllcycsIHRpdGxlOiByZXNwb25zZS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb250cm9sIHN0aWNreVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuc2lkZWJhckNvbGxhcHNlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xyXG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xyXG5cclxuICAgIG1lcmdlKHNvdXJjZSQsIHRoaXMuc3RpY2t5Q29udHJvbFRyaWdnZXIkKS5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBjb25zdCB3aW5kb3dCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgd3JhcHBlclRvcCA9IHdyYXBwZXIub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCB3cmFwcGVyQm90dG9tID0gd3JhcHBlclRvcCArIHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyVG9wIDw9IHdpbmRvd1RvcDtcclxuXHJcbiAgICAgIC8vIHRyZWUgaGVpZ2h0IGNvbnRyb2xcclxuICAgICAgaWYgKHRoaXMuc2lkZWJhcklzU3RpY2t5ICYmIHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3aW5kb3dUb3AgLSA1MH1weGA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaWRlYmFySXNTdGlja3kgJiYgd2luZG93Qm90dG9tID49IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3cmFwcGVyQm90dG9tIC0gd2luZG93VG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvd0JvdHRvbSA8IHdyYXBwZXJCb3R0b20pIHtcclxuICAgICAgICB0aGlzLnRyZWVNYXhIZWlnaHQgPSBgJHt3aW5kb3dCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJlZU1heEhlaWdodCA9IGAke3dyYXBwZXJCb3R0b20gLSB3cmFwcGVyVG9wIC0gNTB9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgZmllbGRzLCBkb2N1bWVudF90eXBlOiBkb2N1bWVuVHlwZSB9ID0gcmVzcG9uc2U7XHJcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcclxuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2NoZWRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIHt9KTtcclxuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZG9jdW1lblR5cGVdIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICBmaWVsZHMsXHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIG1ldGFkYXRhVG9TaG93LFxyXG4gICAgICB0eXBlOiBkb2N1bWVuVHlwZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==