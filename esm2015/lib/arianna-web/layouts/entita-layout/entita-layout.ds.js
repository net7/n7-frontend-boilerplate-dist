import { LayoutDataSource } from '@n7-frontend/core';
import { of } from 'rxjs';
import { catchError, filter, first, tap } from 'rxjs/operators';
import { get as _get } from 'lodash';
import metadataHelper from '../../helpers/metadata.helper';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.hasMetadataFields = false;
        this.navHeader = {}; // nav-header (custom) data
        this.currentPage = 1; // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // ===== BUBBLE CHART =====
        this.bubblesSize = 10; // related entities (bubbles) page size
        this.fallbackText = '';
        this.loading = true;
        this.updateComponent = (id, data, options) => {
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        };
        /**
         * Updates the pagination component
         */
        this.drawPagination = (totalItems, pageSize) => {
            if (!this.getLinkedObjectItems())
                return;
            const { href, queryParams } = this._getPaginationURL();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: this.getPageCount(totalItems, pageSize),
                currentPage: +this.currentPage || 1,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: +this.pageSize,
                },
            });
        };
        /**
         * Updates the selected tab on tab change
         */
        this.handlePageNavigation = () => {
            if (!this.myResponse) {
                return;
            }
            this.getEntityDetailsPage(this.myResponse.id, +this.currentPage, +this.pageSize)
                .pipe(first())
                .subscribe({
                // Await for network response
                next: (data) => {
                    this.myResponse = data;
                    const { href, queryParams } = this._getPaginationURL();
                    // update layout state
                    this.pageSize = queryParams.size;
                    this.currentPage = queryParams.page;
                    // update components
                    this.drawPagination(this.getItemCount(), this.pageSize);
                    this.one('aw-linked-objects').updateOptions({
                        paginationParams: { href, queryParams },
                        context: this.selectedTab,
                        config: this.configuration,
                        dynamicPagination: {
                            total: this.getItemCount(),
                        },
                        page: queryParams.page,
                        size: queryParams.size,
                        pagination: true,
                    });
                    this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
                },
                error: (e) => catchError(e),
            });
        };
        this.handleNavUpdate = (tab) => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                dynamicPagination: {
                    total: this.getItemCount(),
                },
                page: this.currentPage,
                size: this.pageSize,
                pagination: true,
                paginationParams: this._getPaginationURL(),
            });
            this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
            // update the url with the correct page and size
            const queryParams = {
                page: this.currentPage, size: this.pageSize,
            };
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams,
                queryParamsHandling: 'merge'
            });
        };
    }
    onInit({ configuration, mainState, router, route, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page || 1;
        this.one('aw-related-entities').updateOptions({
            config: this.configuration,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // check if there is only one tab
        this.singleTabCheck();
    }
    singleTabCheck() {
        const navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter((output) => !!output))
            .subscribe(({ items }) => {
            // if there is only one tab
            // and there are no query params
            // navigate to the tab.
            if (items.length === 1 && !this.currentPage) {
                this.router.navigate([items[0].anchor.href], { replaceUrl: true });
            }
        });
    }
    updateWidgets(data) {
        /*
          Updates the widgets on this layout, based on route
        */
        const selected = this.selectedTab;
        Object.keys(data).forEach((k) => {
            if (Array.isArray(data[k]) && data[k].length === 0) {
                data[k] = null;
            }
        });
        this.one('aw-entita-nav').update({
            data,
            selected,
            basePath: this.getNavBasePath(),
        });
        this.updateComponent('aw-entita-metadata-viewer', this.getFields(this.myResponse));
        this.one('aw-related-entities').update(this.myResponse.relatedEntities);
        this.drawPagination(this.getItemCount(), this.pageSize);
    }
    /**
     * Given a page number and a list size, returns the data
     * for a single page of content.
     *
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    getEntityDetailsPage(id, pageNumber, pageSize) {
        return this.communication.request$('getEntityDetails', {
            onError: (error) => console.error(error),
            params: {
                entityId: id,
                itemsPagination: { offset: (pageNumber || 1) * pageSize, limit: +pageSize },
                entitiesListSize: this.bubblesSize
            },
        }).pipe(
        // global metadata tab control
        tap(({ fields, typeOfEntity }) => {
            this.hasMetadataFields = !!metadataHelper.normalize({
                fields,
                paths: this.configuration.get('paths'),
                labels: this.configuration.get('labels'),
                metadataToShow: _get(this.configuration.get('entita-layout'), 'metadata-to-show', []),
                type: typeOfEntity
            }).length;
        }));
    }
    /*
     * Loads the data for the selected nav item, into the adjacent text block.
     */
    loadItem(id, slug, tab) {
        this.loading = true;
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.getEntityDetailsPage(id, 1, this.pageSize);
        }
        this.pageTitle = 'Entità Test';
        return of(null);
    }
    loadContent(res) {
        this.loading = false;
        const config = this.configuration.get('config-keys')[res.typeOfEntity];
        this.myResponse = res;
        this.navHeader = {
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields,
            labels: this.configuration.get('labels')
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
        this.one('aw-linked-objects').updateOptions({
            context: this.selectedTab,
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            dynamicPagination: {
                total: this.getItemCount(),
            },
            paginationParams: this._getPaginationURL(),
            size: this.pageSize,
        });
        this.getLinkedObjectItems().forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        res.relatedEntities.forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
        this.one('aw-related-entities').update(res.relatedEntities);
        // fallback text
        if (!this.hasMetadataFields) {
            this.fallbackText = this.configuration.get('entita-layout').fallback;
        }
        // update head title
        this.mainState.update('headTitle', `Arianna4View - Entità - ${this.myResponse.label}`);
    }
    _getPaginationURL() {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                `${this.currentId}/`,
                this.currentSlug,
                `/${this.selectedTab}/`,
            ].join(''),
            queryParams: {
                page: this.currentPage || 1,
                size: this.pageSize,
            },
        };
    }
    getNavBasePath() {
        return [
            this.configuration.get('paths').entitaBasePath,
            `${this.currentId}/`,
            this.currentSlug,
        ].join('');
    }
    getItemCount() {
        switch (this.selectedTab) {
            case 'fondi-collegati':
                return this.myResponse.relatedLaTotalCount;
            case 'oggetti-collegati':
                return this.myResponse.relatedItemsTotalCount;
            default:
                return 0;
        }
    }
    getFields(response) {
        const { fields, typeOfEntity } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        let metadataToShow = _get(this.configuration.get('entita-layout'), 'metadata-to-show', []);
        if (this.selectedTab === 'overview') {
            metadataToShow = _get(this.configuration.get('entita-layout'), 'overview.informazioni', []);
        }
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: typeOfEntity
        });
    }
    getLinkedObjectItems() {
        return this.selectedTab === 'fondi-collegati'
            ? this.myResponse.relatedLa
            : this.myResponse.relatedItems;
    }
    /**
     * Calculates the total amount of pages
     *
     * @param items the number of records in the database
     * @param size the number of items shown on a page
     * @returns the total number of pages
     */
    getPageCount(items, size) {
        return Math.floor(items / size);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFckMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFHM0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFlUyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLG9CQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVEsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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Q0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLGlCQUFpQjtZQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLCBmaWx0ZXIsIGZpcnN0LCB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtZXRhZGF0YUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL21ldGFkYXRhLmhlbHBlcic7XG5pbXBvcnQgeyBFbnRpdGFMYXlvdXRSZXNwb25zZSB9IGZyb20gJy4vZW50aXRhLWxheW91dC50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaGFzTWV0YWRhdGFGaWVsZHMgPSBmYWxzZTtcblxuICBwdWJsaWMgbXlSZXNwb25zZTogRW50aXRhTGF5b3V0UmVzcG9uc2U7IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XG5cbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG5cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIGN1cnJlbnRTbHVnOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBjdXJyZW50UGFnZSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XG4gIHB1YmxpYyBidWJibGVzU2l6ZSA9IDEwOyAvLyByZWxhdGVkIGVudGl0aWVzIChidWJibGVzKSBwYWdlIHNpemVcblxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHB1YmxpYyBmYWxsYmFja1RleHQgPSAnJztcblxuICBwdWJsaWMgbG9hZGluZyA9IHRydWU7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcbiAgfSkge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9ICcnO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcy5wYWdlIHx8IDE7XG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnZW50aXRhJyk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEVudGl0w6AnKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxuICAgIHRoaXMuc2luZ2xlVGFiQ2hlY2soKTtcbiAgfVxuXG4gIHNpbmdsZVRhYkNoZWNrKCkge1xuICAgIGNvbnN0IG5hdkRTID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdhdy1lbnRpdGEtbmF2Jyk7XG4gICAgbmF2RFMub3V0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigob3V0cHV0KSA9PiAhIW91dHB1dClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWJcbiAgICAgICAgLy8gYW5kIHRoZXJlIGFyZSBubyBxdWVyeSBwYXJhbXNcbiAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIHRhYi5cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtc1swXS5hbmNob3IuaHJlZl0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICAgKi9cbiAgZHJhd1BhZ2luYXRpb24gPSAodG90YWxJdGVtcywgcGFnZVNpemUpID0+IHtcbiAgICBpZiAoIXRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbW9kZTogJ2hyZWYnLFxuICAgICAgaHJlZixcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcbiAgICAgIHRvdGFsUGFnZXM6IHRoaXMuZ2V0UGFnZUNvdW50KHRvdGFsSXRlbXMsIHBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiArdGhpcy5jdXJyZW50UGFnZSB8fCAxLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6ICt0aGlzLnBhZ2VTaXplLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxuICAgKi9cbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLm15UmVzcG9uc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZSh0aGlzLm15UmVzcG9uc2UuaWQsICt0aGlzLmN1cnJlbnRQYWdlLCArdGhpcy5wYWdlU2l6ZSlcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgLy8gQXdhaXQgZm9yIG5ldHdvcmsgcmVzcG9uc2VcbiAgICAgICAgbmV4dDogKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLm15UmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKTtcbiAgICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXG4gICAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHF1ZXJ5UGFyYW1zLnNpemU7XG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHF1ZXJ5UGFyYW1zLnBhZ2U7XG4gICAgICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKHRoaXMuZ2V0SXRlbUNvdW50KCksIHRoaXMucGFnZVNpemUpO1xuICAgICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxuICAgICAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZTogcXVlcnlQYXJhbXMucGFnZSxcbiAgICAgICAgICAgIHNpemU6IHF1ZXJ5UGFyYW1zLnNpemUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZSkgPT4gY2F0Y2hFcnJvcihlKSxcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gKHRhYikgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xuICAgICAgICB0b3RhbDogdGhpcy5nZXRJdGVtQ291bnQoKSxcbiAgICAgIH0sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCksXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcbiAgICAvLyB1cGRhdGUgdGhlIHVybCB3aXRoIHRoZSBjb3JyZWN0IHBhZ2UgYW5kIHNpemVcbiAgICBjb25zdCBxdWVyeVBhcmFtczogUGFyYW1zID0ge1xuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICB9O1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgW10sIHtcbiAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICAgKi9cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkgJiYgZGF0YVtrXS5sZW5ndGggPT09IDApIHsgZGF0YVtrXSA9IG51bGw7IH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSh7XG4gICAgICBkYXRhLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBiYXNlUGF0aDogdGhpcy5nZXROYXZCYXNlUGF0aCgpLFxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJywgdGhpcy5nZXRGaWVsZHModGhpcy5teVJlc3BvbnNlKSk7XG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbih0aGlzLmdldEl0ZW1Db3VudCgpLCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHBhZ2UgbnVtYmVyIGFuZCBhIGxpc3Qgc2l6ZSwgcmV0dXJucyB0aGUgZGF0YVxuICAgKiBmb3IgYSBzaW5nbGUgcGFnZSBvZiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZU51bWJlciBQYWdlIG51bWJlciB0byBsb2FkXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBIb3cgbWFueSBpdGVtcyBuZWVkIHRvIGJlIGxvYWRlZFxuICAgKi9cbiAgZ2V0RW50aXR5RGV0YWlsc1BhZ2UoaWQsIHBhZ2VOdW1iZXI6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAocGFnZU51bWJlciB8fCAxKSAqIHBhZ2VTaXplLCBsaW1pdDogK3BhZ2VTaXplIH0sXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemVcbiAgICAgIH0sXG4gICAgfSkucGlwZShcbiAgICAgIC8vIGdsb2JhbCBtZXRhZGF0YSB0YWIgY29udHJvbFxuICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YUZpZWxkcyA9ICEhbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcbiAgICAgICAgICBtZXRhZGF0YVRvU2hvdzogX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pLFxuICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgKi9cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgMSwgdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCc7XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxuICAgICAgaWNvbjogY29uZmlnID8gY29uZmlnLmljb24gOiAnJyxcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcbiAgICAgIGNvbG9yOiBjb25maWdbJ2NsYXNzLW5hbWUnXSxcbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLFxuICAgICAgaGFzTWV0YWRhdGFGaWVsZHM6IHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMsXG4gICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICA6IHJlcy5sYWJlbDtcbiAgICB9KTtcbiAgICByZXMucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICA6IHJlcy5sYWJlbDtcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlcy5yZWxhdGVkRW50aXRpZXMpO1xuICAgIC8vIGZhbGxiYWNrIHRleHRcbiAgICBpZiAoIXRoaXMuaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLmZhbGxiYWNrO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIEVudGl0w6AgLSAke3RoaXMubXlSZXNwb25zZS5sYWJlbH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25VUkwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IFtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgICAgIGAvJHt0aGlzLnNlbGVjdGVkVGFifS9gLFxuICAgICAgXS5qb2luKCcnKSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROYXZCYXNlUGF0aCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgIGAke3RoaXMuY3VycmVudElkfS9gLFxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcbiAgICBdLmpvaW4oJycpO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFRhYikge1xuICAgICAgY2FzZSAnZm9uZGktY29sbGVnYXRpJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFUb3RhbENvdW50O1xuICAgICAgY2FzZSAnb2dnZXR0aS1jb2xsZWdhdGknOlxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc1RvdGFsQ291bnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3Jykge1xuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmluZm9ybWF6aW9uaScsIFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIHBhdGhzLFxuICAgICAgbGFiZWxzLFxuICAgICAgbWV0YWRhdGFUb1Nob3csXG4gICAgICB0eXBlOiB0eXBlT2ZFbnRpdHlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdmb25kaS1jb2xsZWdhdGknXG4gICAgICA/IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFcbiAgICAgIDogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCBhbW91bnQgb2YgcGFnZXNcbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2VcbiAgICogQHBhcmFtIHNpemUgdGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBvbiBhIHBhZ2VcbiAgICogQHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYWdlQ291bnQoaXRlbXM6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaXRlbXMgLyBzaXplKTtcbiAgfVxufVxuIl19