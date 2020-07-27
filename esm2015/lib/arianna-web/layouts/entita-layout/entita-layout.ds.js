import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { get as _get } from 'lodash';
import metadataHelper from '../../helpers/metadata.helper';
export class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.hasMetadataFields = false;
        this.navHeader = {}; // nav-header (custom) data
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
        this.drawPagination = () => {
            if (!this.myResponse.relatedItems)
                return;
            const { href, queryParams } = this._getPaginationParams();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(this.myResponse.relatedItems.length / this.pageSize),
                currentPage: this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: this.pageSize,
                },
            });
        };
        this.handlePageNavigation = () => {
            /*
              Updates selected tab on tab change
            */
            if (!this.myResponse) {
                return;
            }
            const { href, queryParams } = this._getPaginationParams();
            this.drawPagination();
            this.one('aw-linked-objects').updateOptions({
                paginationParams: { href, queryParams },
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
        };
        this.handleNavUpdate = (tab) => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            if (tab === 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    paginationParams: this._getPaginationParams(),
                    size: this.pageSize,
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            else if (tab === 'overview' && this.myResponse.relatedItems) {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita',
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
        };
    }
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page;
        this.one('aw-related-entities').updateOptions({
            config: this.configuration,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // one tab control
        this.oneTabControl();
    }
    oneTabControl() {
        const navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter((output) => !!output))
            .subscribe(({ items }) => {
            if (items.length === 1) {
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
        this.drawPagination();
    }
    loadItem(id, slug, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        this.loading = true;
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (error) => console.error(error),
                params: { entityId: id, entitiesListSize: this.bubblesSize },
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
        this.pageTitle = 'Entità Test';
        return of(null);
    }
    loadContent(res) {
        this.loading = false;
        const config = this.configuration.get('config-keys')[res.typeOfEntity];
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        this.navHeader = {
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
        if (this.selectedTab === 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                paginationParams: this._getPaginationParams(),
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita',
            });
        }
        res.relatedItems.forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        this.one('aw-related-entities').update(res.relatedEntities);
        this.drawPagination();
        // fallback text
        if (!this.hasMetadataFields) {
            this.fallbackText = this.configuration.get('entita-layout').fallback;
        }
        // update head title
        this.mainState.update('headTitle', `Arianna4View - Entità - ${this.myResponse.label}`);
    }
    _getPaginationParams() {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                `${this.currentId}/`,
                this.currentSlug,
                '/oggetti-collegati/',
            ].join(''),
            queryParams: {
                page: this.currentPage,
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFFM0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFpQlMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBTTFCLGNBQVMsR0FBUSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7UUFRaEQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQUVqRCwyQkFBMkI7UUFDcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7UUFPekQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQTBDZixvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdB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LE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQzFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1lBQ25DLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDOUIsTUFBTTtZQUNOLEtBQUs7WUFDTCxNQUFNO1lBQ04sY0FBYztZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGxvY2F0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNNZXRhZGF0YUZpZWxkcyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnk7IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XG5cbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG5cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIGN1cnJlbnRTbHVnOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55OyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxuICBwdWJsaWMgYnViYmxlc1NpemUgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXG5cbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwdWJsaWMgZmFsbGJhY2tUZXh0ID0gJyc7XG5cbiAgcHVibGljIGxvYWRpbmcgPSB0cnVlO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIHJvdXRlLCBsb2NhdGlvbiwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9ICcnO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcy5wYWdlO1xuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICB9KTtcblxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2VudGl0YScpO1xuXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBFbnRpdMOgJyk7XG5cbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcbiAgICB0aGlzLm9uZVRhYkNvbnRyb2woKTtcbiAgfVxuXG4gIG9uZVRhYkNvbnRyb2woKSB7XG4gICAgY29uc3QgbmF2RFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LWVudGl0YS1uYXYnKTtcbiAgICBuYXZEUy5vdXQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChvdXRwdXQpID0+ICEhb3V0cHV0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbXNbMF0uYW5jaG9yLmhyZWZdLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBkcmF3UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMpIHJldHVybjtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIG1vZGU6ICdocmVmJyxcbiAgICAgIGhyZWYsXG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgICAqL1xuICAgIGlmICghdGhpcy5teVJlc3BvbnNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKTtcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKCk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBwYWdpbmF0aW9uUGFyYW1zOiB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0sXG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gIH1cblxuICBoYW5kbGVOYXZVcGRhdGUgPSAodGFiKSA9PiB7XG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICB0aGlzLnVwZGF0ZVdpZGdldHModGhpcy5teVJlc3BvbnNlKTtcbiAgICBpZiAodGFiID09PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT09ICdvdmVydmlldycgJiYgdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBjb250ZXh0OiAnZW50aXRhJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXG4gICAgKi9cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkgJiYgZGF0YVtrXS5sZW5ndGggPT09IDApIHsgZGF0YVtrXSA9IG51bGw7IH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSh7XG4gICAgICBkYXRhLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBiYXNlUGF0aDogdGhpcy5nZXROYXZCYXNlUGF0aCgpLFxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJywgdGhpcy5nZXRGaWVsZHModGhpcy5teVJlc3BvbnNlKSk7XG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLypcbiAgICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICAgKi9cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmIChpZCAmJiB0YWIpIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7IC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuY3VycmVudFNsdWcgPSBzbHVnOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiOyAvLyBzdG9yZSBzZWxlY3RlZCB0YWIgZnJvbSB1cmxcbiAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfSxcbiAgICAgIH0pLnBpcGUoXG4gICAgICAgIC8vIGdsb2JhbCBtZXRhZGF0YSB0YWIgY29udHJvbFxuICAgICAgICB0YXAoKHsgZmllbGRzLCB0eXBlT2ZFbnRpdHkgfSkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMgPSAhIW1ldGFkYXRhSGVscGVyLm5vcm1hbGl6ZSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBwYXRoczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKSxcbiAgICAgICAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXG4gICAgICAgICAgICBtZXRhZGF0YVRvU2hvdzogX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pLFxuICAgICAgICAgICAgdHlwZTogdHlwZU9mRW50aXR5XG4gICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0JztcbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlcy50eXBlT2ZFbnRpdHldO1xuICAgIC8vIGNvbnNvbGUubG9nKCcoZW50aXRhKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHsgcmVzIH0pXG4gICAgdGhpcy5teVJlc3BvbnNlID0gcmVzO1xuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcbiAgICAgIGljb246IGNvbmZpZyA/IGNvbmZpZy5pY29uIDogJycsXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UubGFiZWwsXG4gICAgICBjb2xvcjogY29uZmlnWydjbGFzcy1uYW1lJ10sXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYnViYmxlc0VuYWJsZWQ6IHRoaXMuYnViYmxlc0VuYWJsZWQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSxcbiAgICAgIGhhc01ldGFkYXRhRmllbGRzOiB0aGlzLmhhc01ldGFkYXRhRmllbGRzXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVzLnJlbGF0ZWRJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcbiAgICAgICAgOiByZXMubGFiZWw7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHJlcy5yZWxhdGVkSXRlbXMgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICAgIC8vIGZhbGxiYWNrIHRleHRcbiAgICBpZiAoIXRoaXMuaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLmZhbGxiYWNrO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIEVudGl0w6AgLSAke3RoaXMubXlSZXNwb25zZS5sYWJlbH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25QYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IFtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgICAgICcvb2dnZXR0aS1jb2xsZWdhdGkvJyxcbiAgICAgIF0uam9pbignJyksXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldE5hdkJhc2VQYXRoKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnLFxuICAgIF0uam9pbignJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3Jykge1xuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmluZm9ybWF6aW9uaScsIFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIHBhdGhzLFxuICAgICAgbGFiZWxzLFxuICAgICAgbWV0YWRhdGFUb1Nob3csXG4gICAgICB0eXBlOiB0eXBlT2ZFbnRpdHlcbiAgICB9KTtcbiAgfVxufVxuIl19