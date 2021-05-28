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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFckMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFHM0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFlUyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLG9CQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVEsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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YztZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLGlCQUFpQjtZQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBjYXRjaEVycm9yLCBmaWx0ZXIsIGZpcnN0LCB0YXBcclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IG1ldGFkYXRhSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyJztcclxuaW1wb3J0IHsgRW50aXRhTGF5b3V0UmVzcG9uc2UgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQudHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBoYXNNZXRhZGF0YUZpZWxkcyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbXlSZXNwb25zZTogRW50aXRhTGF5b3V0UmVzcG9uc2U7IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxyXG5cclxuICBwdWJsaWMgbmF2SGVhZGVyOiBhbnkgPSB7fTsgLy8gbmF2LWhlYWRlciAoY3VzdG9tKSBkYXRhXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50U2x1Zzogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcclxuXHJcbiAgcHVibGljIGN1cnJlbnRQYWdlID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxyXG5cclxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXHJcblxyXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxyXG4gIHB1YmxpYyBidWJibGVzU2l6ZSA9IDEwOyAvLyByZWxhdGVkIGVudGl0aWVzIChidWJibGVzKSBwYWdlIHNpemVcclxuXHJcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHVibGljIGZhbGxiYWNrVGV4dCA9ICcnO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLmN1cnJlbnRJZCA9ICcnO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnBhZ2UgPz8gMTtcclxuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdlbnRpdGEnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gRW50aXTDoCcpO1xyXG5cclxuICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxyXG4gICAgdGhpcy5zaW5nbGVUYWJDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2luZ2xlVGFiQ2hlY2soKSB7XHJcbiAgICBjb25zdCBuYXZEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctZW50aXRhLW5hdicpO1xyXG4gICAgbmF2RFMub3V0JFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKG91dHB1dCkgPT4gISFvdXRwdXQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUgdGFiXHJcbiAgICAgICAgLy8gYW5kIHRoZXJlIGFyZSBubyBxdWVyeSBwYXJhbXNcclxuICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgdGFiLlxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEgJiYgIXRoaXMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtc1swXS5hbmNob3IuaHJlZl0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgZHJhd1BhZ2luYXRpb24gPSAodG90YWxJdGVtcywgcGFnZVNpemUpID0+IHtcclxuICAgIGlmICghdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpKSByZXR1cm47XHJcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBtb2RlOiAnaHJlZicsXHJcbiAgICAgIGhyZWYsXHJcbiAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IHRoaXMuZ2V0UGFnZUNvdW50KHRvdGFsSXRlbXMsIHBhZ2VTaXplKSxcclxuICAgICAgY3VycmVudFBhZ2U6ICt0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgIHBhZ2VMaW1pdDogNSxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiArdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcclxuICAgKi9cclxuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5teVJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RW50aXR5RGV0YWlsc1BhZ2UodGhpcy5teVJlc3BvbnNlLmlkLCArdGhpcy5jdXJyZW50UGFnZSwgK3RoaXMucGFnZVNpemUpXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIC8vIEF3YWl0IGZvciBuZXR3b3JrIHJlc3BvbnNlXHJcbiAgICAgICAgbmV4dDogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMubXlSZXNwb25zZSA9IGRhdGE7XHJcbiAgICAgICAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXHJcbiAgICAgICAgICB0aGlzLnBhZ2VTaXplID0gcXVlcnlQYXJhbXMuc2l6ZTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBxdWVyeVBhcmFtcy5wYWdlO1xyXG4gICAgICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudHNcclxuICAgICAgICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5nZXRJdGVtQ291bnQoKSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxyXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICB0b3RhbDogdGhpcy5nZXRJdGVtQ291bnQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZTogcXVlcnlQYXJhbXMucGFnZSxcclxuICAgICAgICAgICAgc2l6ZTogcXVlcnlQYXJhbXMuc2l6ZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZSkgPT4gY2F0Y2hFcnJvcihlKSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYXZVcGRhdGUgPSAodGFiKSA9PiB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xyXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgdXJsIHdpdGggdGhlIGNvcnJlY3QgcGFnZSBhbmQgc2l6ZVxyXG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IFBhcmFtcyA9IHtcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgW10sIHtcclxuICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xyXG4gICAgLypcclxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcclxuICAgICovXHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba10pICYmIGRhdGFba10ubGVuZ3RoID09PSAwKSB7IGRhdGFba10gPSBudWxsOyB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHtcclxuICAgICAgZGF0YSxcclxuICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmdldE5hdkJhc2VQYXRoKCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJywgdGhpcy5nZXRGaWVsZHModGhpcy5teVJlc3BvbnNlKSk7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZSh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5nZXRJdGVtQ291bnQoKSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhZ2UgbnVtYmVyIGFuZCBhIGxpc3Qgc2l6ZSwgcmV0dXJucyB0aGUgZGF0YVxyXG4gICAqIGZvciBhIHNpbmdsZSBwYWdlIG9mIGNvbnRlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWQgRW50aXR5IElEXHJcbiAgICogQHBhcmFtIHBhZ2VOdW1iZXIgUGFnZSBudW1iZXIgdG8gbG9hZFxyXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBIb3cgbWFueSBpdGVtcyBuZWVkIHRvIGJlIGxvYWRlZFxyXG4gICAqL1xyXG4gIGdldEVudGl0eURldGFpbHNQYWdlKGlkLCBwYWdlTnVtYmVyOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxyXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6ICgocGFnZU51bWJlciB8fCAxKSAtIDEpICogcGFnZVNpemUsIGxpbWl0OiArcGFnZVNpemUgfSxcclxuICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplXHJcbiAgICAgIH0sXHJcbiAgICB9KS5waXBlKFxyXG4gICAgICAvLyBnbG9iYWwgbWV0YWRhdGEgdGFiIGNvbnRyb2xcclxuICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcclxuICAgICAgICB0aGlzLmhhc01ldGFkYXRhRmllbGRzID0gISFtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICAgICAgZmllbGRzLFxyXG4gICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpLFxyXG4gICAgICAgICAgbWV0YWRhdGFUb1Nob3c6IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKSxcclxuICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxyXG4gICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXHJcbiAgICovXHJcbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKGlkICYmIHRhYikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXHJcbiAgICAgIHRoaXMuY3VycmVudFNsdWcgPSBzbHVnOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7IC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxyXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnO1xyXG4gICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgbG9hZENvbnRlbnQocmVzKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbcmVzLnR5cGVPZkVudGl0eV07XHJcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XHJcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXHJcbiAgICAgIGljb246IGNvbmZpZyA/IGNvbmZpZy5pY29uIDogJycsXHJcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcclxuICAgICAgY29sb3I6IGNvbmZpZ1snY2xhc3MtbmFtZSddLFxyXG4gICAgfTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJ1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSxcclxuICAgICAgaGFzTWV0YWRhdGFGaWVsZHM6IHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMsXHJcbiAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJylcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IHJlcy5sYWJlbC5sZW5ndGggPiAzMFxyXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICA6IHJlcy5sYWJlbDtcclxuICAgIH0pO1xyXG4gICAgcmVzLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcclxuICAgICAgICA/IGAke3Jlcy5sYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXHJcbiAgICAgICAgOiByZXMubGFiZWw7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZShyZXMucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIC8vIGZhbGxiYWNrIHRleHRcclxuICAgIGlmICghdGhpcy5oYXNNZXRhZGF0YUZpZWxkcykge1xyXG4gICAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKS5mYWxsYmFjaztcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIGBBcmlhbm5hNFZpZXcgLSBFbnRpdMOgIC0gJHt0aGlzLm15UmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uVVJMKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHJlZjogW1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgICAgICBgLyR7dGhpcy5zZWxlY3RlZFRhYn0vYCxcclxuICAgICAgXS5qb2luKCcnKSxcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcclxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgIF0uam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SXRlbUNvdW50KCk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRUYWIpIHtcclxuICAgICAgY2FzZSAnZm9uZGktY29sbGVnYXRpJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRMYVRvdGFsQ291bnQ7XHJcbiAgICAgIGNhc2UgJ29nZ2V0dGktY29sbGVnYXRpJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc1RvdGFsQ291bnQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcclxuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xyXG4gICAgbGV0IG1ldGFkYXRhVG9TaG93ID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdvdmVydmlldycpIHtcclxuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmluZm9ybWF6aW9uaScsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBwYXRocyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgICAgdHlwZTogdHlwZU9mRW50aXR5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYiA9PT0gJ2ZvbmRpLWNvbGxlZ2F0aSdcclxuICAgICAgPyB0aGlzLm15UmVzcG9uc2UucmVsYXRlZExhXHJcbiAgICAgIDogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgdGhlIHRvdGFsIGFtb3VudCBvZiBwYWdlc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGl0ZW1zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2VcclxuICAgKiBAcGFyYW0gc2l6ZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIG9uIGEgcGFnZVxyXG4gICAqIEByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcclxuICAgKi9cclxuICBwcml2YXRlIGdldFBhZ2VDb3VudChpdGVtczogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKGl0ZW1zIC8gc2l6ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==