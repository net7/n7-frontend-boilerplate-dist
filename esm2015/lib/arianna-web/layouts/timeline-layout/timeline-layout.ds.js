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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFJOUMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUF4RDs7UUFhVSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQTBJMUIsQ0FBQztJQWxJQyxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxHQUMvRDtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEQsSUFBSSxD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LENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZSA9IDEwO1xyXG5cclxuICBwdWJsaWMgc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8TGF5b3V0U3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnRU1QVFknKTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XHJcblxyXG4gIHByaXZhdGUgcmVsYXRlZEl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgcHVibGljIHRvdGFsOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gVGltZWxpbmUnKTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3RpbWVsaW5lJyk7XHJcblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFdmVudE9iamVjdHMnLCB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uZSgnYXctdGltZWxpbmUnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRpbWVsaW5lQ2xpY2soeyBpZCwgbGFiZWwsIGRhdGVUZXh0IH0pIHtcclxuICAgIGlmIChpc051bGwoaWQpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGxvYWRpbmcgcmVzdWx0c1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KCdMT0FESU5HJyk7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5UmVsYXRlZEl0ZW1zJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogW2lkXVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuc3Vic2NyaWJlKCh7IGl0ZW1zUGFnaW5hdGlvbiB9KSA9PiB7XHJcbiAgICAgICAgLy8gY2xlYXIgbG9hZGluZ1xyXG4gICAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ1NVQ0NFU1MnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBpdGVtc1BhZ2luYXRpb24uaXRlbXM7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsID09PSAxKSB7XHJcbiAgICAgICAgICB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBSaXN1bHRhdG8gY29sbGVnYXRvIGE8YnI+PHNwYW4gY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlLWJpZ1wiPiR7bGFiZWx9PC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZURhdGE6IElubmVyVGl0bGVEYXRhID0ge1xyXG4gICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgbWFpbjogeyB0ZXh0IH0sXHJcbiAgICAgICAgICAgIHNlY29uZGFyeTogZGF0ZVRleHQgPyB7XHJcbiAgICAgICAgICAgICAgdGV4dDogZGF0ZVRleHRcclxuICAgICAgICAgICAgfSA6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRofS8ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdWZWRpIEVudGl0w6AnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlRGF0YSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBpdGVtc1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHBhZ2luYXRpb25cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyUmVzdWx0cygpIHtcclxuICAgIGlmICghdGhpcy5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzZXRcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoJ0VNUFRZJyk7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gMTA7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnRvdGFsID0gMDtcclxuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHsgdGV4dDogJycgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiBbXSB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnaW5hdGlvbkNoYW5nZSh7IHZhbHVlIH0pIHtcclxuICAgIHRoaXMucGFnZVNpemUgPSArdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uUGFnaW5hdGlvbkNsaWNrKHsgcGFnZSB9KSB7XHJcbiAgICBpZiAodHlwZW9mIHBhZ2UgPT09ICdudW1iZXInICYmIHBhZ2UgIT09IHRoaXMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUl0ZW1zKCkge1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbnRleHQ6ICdtYXAnLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMucmVsYXRlZEl0ZW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ3BheWxvYWQnXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcclxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBhZ2VTaXplKSxcclxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2VMaW1pdDogNSxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxyXG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcclxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19