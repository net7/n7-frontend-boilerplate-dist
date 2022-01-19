import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import helpers from '../../../common/helpers';
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
            var _a;
            this.one('aw-timeline').updateOptions({
                configuration: (_a = this.configuration.get('timeline-layout')) === null || _a === void 0 ? void 0 : _a.timeline
            });
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
                const titleData = {
                    title: {
                        main: { text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
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
                label: 'Numero di risultati',
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFJOUMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUF4RDs7UUFhVSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQTZJMUIsQ0FBQztJQXJJQyxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxHQUMvRDtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEQsSUFBSSxD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QyxhQUFhO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbnR5cGUgTGF5b3V0U3RhdGUgPSAnTE9BRElORycgfCAnRU1QVFknIHwgJ1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdFTVBUWScpO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xyXG5cclxuICBwdWJsaWMgdG90YWw6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHtcclxuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBUaW1lbGluZScpO1xyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAndGltZWxpbmUnKTtcclxuXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEV2ZW50T2JqZWN0cycsIHtcclxuICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdhdy10aW1lbGluZScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RpbWVsaW5lLWxheW91dCcpPy50aW1lbGluZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25UaW1lbGluZUNsaWNrKHsgaWQsIGxhYmVsLCBkYXRlVGV4dCB9KSB7XHJcbiAgICBpZiAoaXNOdWxsKGlkKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBsb2FkaW5nIHJlc3VsdHNcclxuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnTE9BRElORycpO1xyXG4gICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eVJlbGF0ZWRJdGVtcycsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IFtpZF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICAgIC8vIGNsZWFyIGxvYWRpbmdcclxuICAgICAgICB0aGlzLnN0YXRlJC5uZXh0KCdTVUNDRVNTJyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gaXRlbXNQYWdpbmF0aW9uLml0ZW1zO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0aSBjb2xsZWdhdGkgYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcclxuICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xyXG4gICAgICAgICAgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVEYXRhOiBJbm5lclRpdGxlRGF0YSA9IHtcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIG1haW46IHsgdGV4dCB9LFxyXG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRhdGVUZXh0ID8ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGRhdGVUZXh0XHJcbiAgICAgICAgICAgIH0gOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0ZXh0OiAnVmVkaSBFbnRpdMOgJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZURhdGEpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgaXRlbXNcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHJlc2V0XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBtYWluOiB7IHRleHQ6ICcnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogW10gfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DaGFuZ2UoeyB2YWx1ZSB9KSB7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DbGljayh7IHBhZ2UgfSkge1xyXG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnbWFwJyxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIG1vZGU6ICdwYXlsb2FkJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==