import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import helpers from '../../../common/helpers';
export class AwMapLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.pageSize = 10;
        this.state$ = new BehaviorSubject('EMPTY');
        this.currentPage = 1;
    }
    onInit({ configuration, mainState, options, titleService, communication, }) {
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Mappa');
        // navigation update
        this.mainState.updateCustom('currentNav', 'mappa');
        this.communication.request$('getMapObjects').subscribe((response) => {
            this.one('aw-map').update(response);
        });
    }
    onMarkerOpen({ id, label }) {
        // loading results
        this.state$.next('LOADING');
        this.communication.request$('getEntityRelatedItems', {
            params: {
                selectedEntitiesIds: [id]
            }
        }).subscribe(({ itemsPagination }) => {
            // clear loading
            this.state$.next('SUCCESS');
            this.relatedItems = itemsPagination.items;
            this.total = this.relatedItems.length;
            let text = `<strong>${this.total}</strong> Risultati collegati a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
            if (this.total === 1) {
                text = `<strong>${this.total}</strong> Risultato collegato a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
            }
            const titleData = {
                title: {
                    main: { text },
                },
                actions: {
                    buttons: [{
                            anchor: {
                                href: `${this.configuration.get('paths').entitaBasePath}/${id}/${helpers.slugify(label)}`,
                            },
                            text: 'Vedi Entità'
                        }]
                }
            };
            this.one('aw-scheda-inner-title').update(titleData);
            // update items
            this.updateItems();
            // update pagination
            this.updatePagination();
        });
    }
    onMarkerClose() {
        // reset
        this.state$.next('EMPTY');
        this.pageSize = 10;
        this.currentPage = 1;
        this.relatedItems = [];
        this.total = 0;
        this.one('aw-scheda-inner-title').update({
            title: {
                main: { text: '' }
            }
        });
        this.one('aw-linked-objects').update({ items: [] });
    }
    onPaginationChange({ value }) {
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    }
    onPaginationClick({ page }) {
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    }
    updateItems() {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    }
    updatePagination() {
        this.one('n7-smart-pagination').updateOptions({
            mode: 'payload'
        });
        this.one('n7-smart-pagination').update({
            totalPages: Math.ceil(this.total / this.pageSize),
            currentPage: this.currentPage,
            pageLimit: 5,
            sizes: {
                label: 'Numero di risultati',
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBSTlDLE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCO0lBQW5EOztRQWFVLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZixXQUFNLEdBQWlDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5FLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBd0gxQixDQUFDO0lBbEhDLE1BQU0sQ0FBQyxFQUNMLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEdBQy9EO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFM0Qsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3hCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtZQUNuRCxNQUFNLEVBQUU7Z0JBQ04sbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDMUI7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFO1lBQ25DLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLElBQUksR0FBRyxXQUFXLElBQUksQ0FBQyxLQUFLLHFGQUFxRixLQUFLLFNBQVMsQ0FBQztZQUNwSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxxRkFBcUYsS0FBSyxTQUFTLENBQUM7YUFDakk7WUFFRCxNQUFNLFNBQVMsR0FBbUI7Z0JBQ2hDLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUU7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7NkJBQzFGOzRCQUNELElBQUksRUFBRSxhQUFhO3lCQUNwQixDQUFDO2lCQUNIO2FBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFcEQsZUFBZTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuQixvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdkMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7YUFDbkI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtCQUFrQixDQUFDLEVBQUUsS0FBSyxFQUFFO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRTtRQUN4QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxudHlwZSBMYXlvdXRTdGF0ZSA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnU1VDQ0VTUyc7XG5cbmV4cG9ydCBjbGFzcyBBd01hcExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XG5cbiAgcHVibGljIHN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PExheW91dFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ0VNUFRZJyk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XG5cbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xuXG4gIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBNYXBwYScpO1xuXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnbWFwcGEnKTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0TWFwT2JqZWN0cycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMub25lKCdhdy1tYXAnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgb25NYXJrZXJPcGVuKHsgaWQsIGxhYmVsIH0pIHtcbiAgICAvLyBsb2FkaW5nIHJlc3VsdHNcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdMT0FESU5HJyk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlSZWxhdGVkSXRlbXMnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogW2lkXVxuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgLy8gY2xlYXIgbG9hZGluZ1xuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnU1VDQ0VTUycpO1xuXG4gICAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IGl0ZW1zUGFnaW5hdGlvbi5pdGVtcztcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgaWYgKHRoaXMudG90YWwgPT09IDEpIHtcbiAgICAgICAgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZURhdGE6IElubmVyVGl0bGVEYXRhID0ge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIG1haW46IHsgdGV4dCB9LFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRofS8ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiAnVmVkaSBFbnRpdMOgJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlRGF0YSk7XG5cbiAgICAgIC8vIHVwZGF0ZSBpdGVtc1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuXG4gICAgICAvLyB1cGRhdGUgcGFnaW5hdGlvblxuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1hcmtlckNsb3NlKCkge1xuICAgIC8vIHJlc2V0XG4gICAgdGhpcy5zdGF0ZSQubmV4dCgnRU1QVFknKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gMTA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHsgdGV4dDogJycgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiBbXSB9KTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNoYW5nZSh7IHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNsaWNrKHsgcGFnZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbXMoKSB7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnbWFwJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbW9kZTogJ3BheWxvYWQnXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=