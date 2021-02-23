import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
export class AwTimelineLayoutDS extends LayoutDataSource {
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
        this.mainState.update('headTitle', 'Arianna4View - Timeline');
        // navigation update
        this.mainState.updateCustom('currentNav', 'timeline');
        this.communication.request$('getEventObjects', {
            params: {},
            onError: (err) => {
                console.warn(err);
            }
        }).subscribe((response) => {
            this.one('aw-timeline').update(response);
        });
    }
    onTimelineClick({ id, label, dateText }) {
        if (isNull(id)) {
            this.currentId = null;
            this.clearResults();
        }
        else {
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
                this.one('aw-scheda-inner-title').update({
                    title: {
                        main: { text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
                    }
                });
                // update items
                this.updateItems();
                // update pagination
                this.updatePagination();
            });
        }
    }
    clearResults() {
        if (!this.relatedItems) {
            return;
        }
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
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUF4RDs7UUFhVSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQWdJMUIsQ0FBQztJQXhIQyxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxHQUMvRDtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVB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LElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbnR5cGUgTGF5b3V0U3RhdGUgPSAnTE9BRElORycgfCAnRU1QVFknIHwgJ1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdFTVBUWScpO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xyXG5cclxuICBwdWJsaWMgdG90YWw6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHtcclxuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBUaW1lbGluZScpO1xyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAndGltZWxpbmUnKTtcclxuXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEV2ZW50T2JqZWN0cycsIHtcclxuICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdhdy10aW1lbGluZScpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVGltZWxpbmVDbGljayh7IGlkLCBsYWJlbCwgZGF0ZVRleHQgfSkge1xyXG4gICAgaWYgKGlzTnVsbChpZCkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNsZWFyUmVzdWx0cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbG9hZGluZyByZXN1bHRzXHJcbiAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ0xPQURJTkcnKTtcclxuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlSZWxhdGVkSXRlbXMnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiBbaWRdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5zdWJzY3JpYmUoKHsgaXRlbXNQYWdpbmF0aW9uIH0pID0+IHtcclxuICAgICAgICAvLyBjbGVhciBsb2FkaW5nXHJcbiAgICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnU1VDQ0VTUycpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IGl0ZW1zUGFnaW5hdGlvbi5pdGVtcztcclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5yZWxhdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBSaXN1bHRhdGkgY29sbGVnYXRpIGE8YnI+PHNwYW4gY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlLWJpZ1wiPiR7bGFiZWx9PC9zcGFuPmA7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWwgPT09IDEpIHtcclxuICAgICAgICAgIHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0byBjb2xsZWdhdG8gYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xyXG4gICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgbWFpbjogeyB0ZXh0IH0sXHJcbiAgICAgICAgICAgIHNlY29uZGFyeTogZGF0ZVRleHQgPyB7XHJcbiAgICAgICAgICAgICAgdGV4dDogZGF0ZVRleHRcclxuICAgICAgICAgICAgfSA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGl0ZW1zXHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgcGFnaW5hdGlvblxyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgaWYgKCF0aGlzLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyByZXNldFxyXG4gICAgdGhpcy5zdGF0ZSQubmV4dCgnRU1QVFknKTtcclxuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFpbjogeyB0ZXh0OiAnJyB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IFtdIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHsgdmFsdWUgfSkge1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9ICt2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25QYWdpbmF0aW9uQ2xpY2soeyBwYWdlIH0pIHtcclxuICAgIGlmICh0eXBlb2YgcGFnZSA9PT0gJ251bWJlcicgJiYgcGFnZSAhPT0gdGhpcy5jdXJyZW50UGFnZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSXRlbXMoKSB7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogJ21hcCcsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBtb2RlOiAncGF5bG9hZCdcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpLFxyXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnZUxpbWl0OiA1LFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcclxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19