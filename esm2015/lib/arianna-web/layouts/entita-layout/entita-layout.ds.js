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
                    label: 'Numero di risultati',
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
        var _a;
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = (_a = +this.route.snapshot.queryParams.page) !== null && _a !== void 0 ? _a : 1;
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
     * @param id Entity ID
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    getEntityDetailsPage(id, pageNumber, pageSize) {
        return this.communication.request$('getEntityDetails', {
            onError: (error) => console.error(error),
            params: {
                entityId: id,
                itemsPagination: { offset: ((pageNumber || 1) - 1) * pageSize, limit: +pageSize },
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
            return this.getEntityDetailsPage(id, this.currentPage, this.pageSize);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFckMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFHM0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFlUyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLG9CQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVEsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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LEtBQUs7WUFDTCxNQUFNO1lBQ04sY0FBYztZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLGlCQUFpQjtZQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBjYXRjaEVycm9yLCBmaWx0ZXIsIGZpcnN0LCB0YXBcclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IG1ldGFkYXRhSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyJztcclxuaW1wb3J0IHsgRW50aXRhTGF5b3V0UmVzcG9uc2UgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQudHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBoYXNNZXRhZGF0YUZpZWxkcyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbXlSZXNwb25zZTogRW50aXRhTGF5b3V0UmVzcG9uc2U7IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxyXG5cclxuICBwdWJsaWMgbmF2SGVhZGVyOiBhbnkgPSB7fTsgLy8gbmF2LWhlYWRlciAoY3VzdG9tKSBkYXRhXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50U2x1Zzogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcclxuXHJcbiAgcHVibGljIGN1cnJlbnRQYWdlID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxyXG5cclxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXHJcblxyXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxyXG4gIHB1YmxpYyBidWJibGVzU2l6ZSA9IDEwOyAvLyByZWxhdGVkIGVudGl0aWVzIChidWJibGVzKSBwYWdlIHNpemVcclxuXHJcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHVibGljIGZhbGxiYWNrVGV4dCA9ICcnO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmN1cnJlbnRJZCA9ICcnO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnBhZ2UgPz8gMTtcclxuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdlbnRpdGEnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gRW50aXTDoCcpO1xyXG5cclxuICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxyXG4gICAgdGhpcy5zaW5nbGVUYWJDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2luZ2xlVGFiQ2hlY2soKSB7XHJcbiAgICBjb25zdCBuYXZEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctZW50aXRhLW5hdicpO1xyXG4gICAgbmF2RFMub3V0JFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKG91dHB1dCkgPT4gISFvdXRwdXQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUgdGFiXHJcbiAgICAgICAgLy8gYW5kIHRoZXJlIGFyZSBubyBxdWVyeSBwYXJhbXNcclxuICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgdGFiLlxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEgJiYgIXRoaXMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtc1swXS5hbmNob3IuaHJlZl0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgZHJhd1BhZ2luYXRpb24gPSAodG90YWxJdGVtcywgcGFnZVNpemUpID0+IHtcclxuICAgIGlmICghdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpKSByZXR1cm47XHJcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBtb2RlOiAnaHJlZicsXHJcbiAgICAgIGhyZWYsXHJcbiAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IHRoaXMuZ2V0UGFnZUNvdW50KHRvdGFsSXRlbXMsIHBhZ2VTaXplKSxcclxuICAgICAgY3VycmVudFBhZ2U6ICt0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgIHBhZ2VMaW1pdDogNSxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxyXG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcclxuICAgICAgICBhY3RpdmU6ICt0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxyXG4gICAqL1xyXG4gIGhhbmRsZVBhZ2VOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLm15UmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZSh0aGlzLm15UmVzcG9uc2UuaWQsICt0aGlzLmN1cnJlbnRQYWdlLCArdGhpcy5wYWdlU2l6ZSlcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgLy8gQXdhaXQgZm9yIG5ldHdvcmsgcmVzcG9uc2VcclxuICAgICAgICBuZXh0OiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5teVJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKTtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBsYXlvdXQgc3RhdGVcclxuICAgICAgICAgIHRoaXMucGFnZVNpemUgPSBxdWVyeVBhcmFtcy5zaXplO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHF1ZXJ5UGFyYW1zLnBhZ2U7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgY29tcG9uZW50c1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGFnaW5hdGlvbih0aGlzLmdldEl0ZW1Db3VudCgpLCB0aGlzLnBhZ2VTaXplKTtcclxuICAgICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uUGFyYW1zOiB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXHJcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlOiBxdWVyeVBhcmFtcy5wYWdlLFxyXG4gICAgICAgICAgICBzaXplOiBxdWVyeVBhcmFtcy5zaXplLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChlKSA9PiBjYXRjaEVycm9yKGUpLFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5hdlVwZGF0ZSA9ICh0YWIpID0+IHtcclxuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZGdldHModGhpcy5teVJlc3BvbnNlKTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcclxuICAgICAgICB0b3RhbDogdGhpcy5nZXRJdGVtQ291bnQoKSxcclxuICAgICAgfSxcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xyXG4gICAgLy8gdXBkYXRlIHRoZSB1cmwgd2l0aCB0aGUgY29ycmVjdCBwYWdlIGFuZCBzaXplXHJcbiAgICBjb25zdCBxdWVyeVBhcmFtczogUGFyYW1zID0ge1xyXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLCBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgfTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICBbXSwge1xyXG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgcXVlcnlQYXJhbXMsXHJcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XHJcbiAgICAvKlxyXG4gICAgICBVcGRhdGVzIHRoZSB3aWRnZXRzIG9uIHRoaXMgbGF5b3V0LCBiYXNlZCBvbiByb3V0ZVxyXG4gICAgKi9cclxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYjtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkgJiYgZGF0YVtrXS5sZW5ndGggPT09IDApIHsgZGF0YVtrXSA9IG51bGw7IH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoe1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBzZWxlY3RlZCxcclxuICAgICAgYmFzZVBhdGg6IHRoaXMuZ2V0TmF2QmFzZVBhdGgoKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInLCB0aGlzLmdldEZpZWxkcyh0aGlzLm15UmVzcG9uc2UpKTtcclxuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHRoaXMubXlSZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpO1xyXG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbih0aGlzLmdldEl0ZW1Db3VudCgpLCB0aGlzLnBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgcGFnZSBudW1iZXIgYW5kIGEgbGlzdCBzaXplLCByZXR1cm5zIHRoZSBkYXRhXHJcbiAgICogZm9yIGEgc2luZ2xlIHBhZ2Ugb2YgY29udGVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCBFbnRpdHkgSURcclxuICAgKiBAcGFyYW0gcGFnZU51bWJlciBQYWdlIG51bWJlciB0byBsb2FkXHJcbiAgICogQHBhcmFtIHBhZ2VTaXplIEhvdyBtYW55IGl0ZW1zIG5lZWQgdG8gYmUgbG9hZGVkXHJcbiAgICovXHJcbiAgZ2V0RW50aXR5RGV0YWlsc1BhZ2UoaWQsIHBhZ2VOdW1iZXI6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBlbnRpdHlJZDogaWQsXHJcbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7IG9mZnNldDogKChwYWdlTnVtYmVyIHx8IDEpIC0gMSkgKiBwYWdlU2l6ZSwgbGltaXQ6ICtwYWdlU2l6ZSB9LFxyXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemVcclxuICAgICAgfSxcclxuICAgIH0pLnBpcGUoXHJcbiAgICAgIC8vIGdsb2JhbCBtZXRhZGF0YSB0YWIgY29udHJvbFxyXG4gICAgICB0YXAoKHsgZmllbGRzLCB0eXBlT2ZFbnRpdHkgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMgPSAhIW1ldGFkYXRhSGVscGVyLm5vcm1hbGl6ZSh7XHJcbiAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICBwYXRoczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKSxcclxuICAgICAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXHJcbiAgICAgICAgICBtZXRhZGF0YVRvU2hvdzogX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pLFxyXG4gICAgICAgICAgdHlwZTogdHlwZU9mRW50aXR5XHJcbiAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTG9hZHMgdGhlIGRhdGEgZm9yIHRoZSBzZWxlY3RlZCBuYXYgaXRlbSwgaW50byB0aGUgYWRqYWNlbnQgdGV4dCBibG9jay5cclxuICAgKi9cclxuICBsb2FkSXRlbShpZCwgc2x1ZywgdGFiKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBpZiAoaWQgJiYgdGFiKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7IC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcclxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyA9IHNsdWc7IC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXHJcbiAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eURldGFpbHNQYWdlKGlkLCB0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLnBhZ2VTaXplKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCc7XHJcbiAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgfVxyXG5cclxuICBsb2FkQ29udGVudChyZXMpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcclxuICAgIHRoaXMubXlSZXNwb25zZSA9IHJlcztcclxuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcclxuICAgICAgaWNvbjogY29uZmlnID8gY29uZmlnLmljb24gOiAnJyxcclxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmxhYmVsLFxyXG4gICAgICBjb2xvcjogY29uZmlnWydjbGFzcy1uYW1lJ10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgYnViYmxlc0VuYWJsZWQ6IHRoaXMuYnViYmxlc0VuYWJsZWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLFxyXG4gICAgICBoYXNNZXRhZGF0YUZpZWxkczogdGhpcy5oYXNNZXRhZGF0YUZpZWxkcyxcclxuICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZSh0aGlzLmdldEZpZWxkcyhyZXMpKTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcclxuICAgICAgICB0b3RhbDogdGhpcy5nZXRJdGVtQ291bnQoKSxcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpLFxyXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxyXG4gICAgICAgIDogcmVzLmxhYmVsO1xyXG4gICAgfSk7XHJcbiAgICByZXMucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IHJlcy5sYWJlbC5sZW5ndGggPiAzMFxyXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICA6IHJlcy5sYWJlbDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcclxuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlcy5yZWxhdGVkRW50aXRpZXMpO1xyXG4gICAgLy8gZmFsbGJhY2sgdGV4dFxyXG4gICAgaWYgKCF0aGlzLmhhc01ldGFkYXRhRmllbGRzKSB7XHJcbiAgICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLmZhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIEVudGl0w6AgLSAke3RoaXMubXlSZXNwb25zZS5sYWJlbH1gKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25VUkwoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBocmVmOiBbXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbHVnLFxyXG4gICAgICAgIGAvJHt0aGlzLnNlbGVjdGVkVGFifS9gLFxyXG4gICAgICBdLmpvaW4oJycpLFxyXG4gICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UgfHwgMSxcclxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROYXZCYXNlUGF0aCgpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICAgIGAke3RoaXMuY3VycmVudElkfS9gLFxyXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnLFxyXG4gICAgXS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJdGVtQ291bnQoKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFRhYikge1xyXG4gICAgICBjYXNlICdmb25kaS1jb2xsZWdhdGknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZExhVG90YWxDb3VudDtcclxuICAgICAgY2FzZSAnb2dnZXR0aS1jb2xsZWdhdGknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zVG90YWxDb3VudDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgZmllbGRzLCB0eXBlT2ZFbnRpdHkgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XHJcbiAgICBsZXQgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCBbXSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3Jykge1xyXG4gICAgICBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnb3ZlcnZpZXcuaW5mb3JtYXppb25pJywgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICBmaWVsZHMsXHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIG1ldGFkYXRhVG9TaG93LFxyXG4gICAgICB0eXBlOiB0eXBlT2ZFbnRpdHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMaW5rZWRPYmplY3RJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVGFiID09PSAnZm9uZGktY29sbGVnYXRpJ1xyXG4gICAgICA/IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFcclxuICAgICAgOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyB0aGUgdG90YWwgYW1vdW50IG9mIHBhZ2VzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXRlbXMgdGhlIG51bWJlciBvZiByZWNvcmRzIGluIHRoZSBkYXRhYmFzZVxyXG4gICAqIEBwYXJhbSBzaXplIHRoZSBudW1iZXIgb2YgaXRlbXMgc2hvd24gb24gYSBwYWdlXHJcbiAgICogQHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0UGFnZUNvdW50KGl0ZW1zOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaXRlbXMgLyBzaXplKTtcclxuICB9XHJcbn1cclxuIl19