import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
var timelineMock = [
    {
        id: 'c67b3a8b-5ec9-4c82-b77c-6142e49cfad4',
        content: 'Mostra internazionale di edilizia ospedaliera, Roma (1935)',
        start: '1935'
    },
    {
        id: 'b788bca1-ce11-4618-b283-a654d16b4a10',
        content: 'Mostra di edilizia ospedaliera, Fiuggi',
        start: '1942'
    },
    {
        id: '5dae76e3-7bde-46e5-8371-a689e38378a4',
        content: 'I Congresso mondiale di sociologia',
        start: '1951'
    }
];
var AwTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(AwTimelineLayoutDS, _super);
    function AwTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageSize = 10;
        _this.state$ = new BehaviorSubject('EMPTY');
        _this.currentPage = 1;
        return _this;
    }
    AwTimelineLayoutDS.prototype.onInit = function (_a) {
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
            onError: function (err) {
                console.warn(err);
                // FIXME: togliere
                _this.one('aw-timeline').update(timelineMock);
            }
        }).subscribe(function (response) {
            _this.one('aw-timeline').update(response);
        });
    };
    AwTimelineLayoutDS.prototype.onTimelineClick = function (_a) {
        var _this = this;
        var id = _a.id, label = _a.label;
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
            }).subscribe(function (_a) {
                var itemsPagination = _a.itemsPagination;
                // clear loading
                _this.state$.next('SUCCESS');
                _this.relatedItems = itemsPagination.items;
                _this.total = _this.relatedItems.length;
                var text = "<strong>" + _this.total + "</strong> Risultati collegati a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                if (_this.total === 1) {
                    text = "<strong>" + _this.total + "</strong> Risultato collegato a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                }
                _this.one('aw-scheda-inner-title').update({
                    title: {
                        main: { text: text }
                    }
                });
                // update items
                _this.updateItems();
                // update pagination
                _this.updatePagination();
            });
        }
    };
    AwTimelineLayoutDS.prototype.clearResults = function () {
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
    };
    AwTimelineLayoutDS.prototype.onPaginationChange = function (_a) {
        var value = _a.value;
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    };
    AwTimelineLayoutDS.prototype.onPaginationClick = function (_a) {
        var page = _a.page;
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    };
    AwTimelineLayoutDS.prototype.updateItems = function () {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    };
    AwTimelineLayoutDS.prototype.updatePagination = function () {
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
    };
    return AwTimelineLayoutDS;
}(LayoutDataSource));
export { AwTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDLElBQU0sWUFBWSxHQUFHO0lBQ25CO1FBQ0UsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxPQUFPLEVBQUUsNERBQTREO1FBQ3JFLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7QUFFRjtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFpSkM7UUFwSVMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBZ0kxQixDQUFDO0lBeEhDLG1DQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBd0JDO1lBdkJDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFFOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFB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Q0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sNkNBQWdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTthQUN0QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFqSkQsQ0FBd0MsZ0JBQWdCLEdBaUp2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbnR5cGUgTGF5b3V0U3RhdGUgPSAnTE9BRElORycgfCAnRU1QVFknIHwgJ1NVQ0NFU1MnO1xuXG5jb25zdCB0aW1lbGluZU1vY2sgPSBbXG4gIHtcbiAgICBpZDogJ2M2N2IzYThiLTVlYzktNGM4Mi1iNzdjLTYxNDJlNDljZmFkNCcsXG4gICAgY29udGVudDogJ01vc3RyYSBpbnRlcm5hemlvbmFsZSBkaSBlZGlsaXppYSBvc3BlZGFsaWVyYSwgUm9tYSAoMTkzNSknLFxuICAgIHN0YXJ0OiAnMTkzNSdcbiAgfSxcbiAge1xuICAgIGlkOiAnYjc4OGJjYTEtY2UxMS00NjE4LWIyODMtYTY1NGQxNmI0YTEwJyxcbiAgICBjb250ZW50OiAnTW9zdHJhIGRpIGVkaWxpemlhIG9zcGVkYWxpZXJhLCBGaXVnZ2knLFxuICAgIHN0YXJ0OiAnMTk0MidcbiAgfSxcbiAge1xuICAgIGlkOiAnNWRhZTc2ZTMtN2JkZS00NmU1LTgzNzEtYTY4OWUzODM3OGE0JyxcbiAgICBjb250ZW50OiAnSSBDb25ncmVzc28gbW9uZGlhbGUgZGkgc29jaW9sb2dpYScsXG4gICAgc3RhcnQ6ICcxOTUxJ1xuICB9XG5dO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XG5cbiAgcHVibGljIHN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PExheW91dFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ0VNUFRZJyk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XG5cbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xuXG4gIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xuXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIFRpbWVsaW5lJyk7XG5cbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICd0aW1lbGluZScpO1xuXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFdmVudE9iamVjdHMnLCB7XG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcblxuICAgICAgICAvLyBGSVhNRTogdG9nbGllcmVcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHRpbWVsaW5lTW9jayk7XG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGltZWxpbmVDbGljayh7IGlkLCBsYWJlbCB9KSB7XG4gICAgaWYgKGlzTnVsbChpZCkpIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvYWRpbmcgcmVzdWx0c1xuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnTE9BRElORycpO1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlSZWxhdGVkSXRlbXMnLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IFtpZF1cbiAgICAgICAgfVxuICAgICAgfSkuc3Vic2NyaWJlKCh7IGl0ZW1zUGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGxvYWRpbmdcbiAgICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnU1VDQ0VTUycpO1xuXG4gICAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gaXRlbXNQYWdpbmF0aW9uLml0ZW1zO1xuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5yZWxhdGVkSXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xuICAgICAgICAgIHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0byBjb2xsZWdhdG8gYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBtYWluOiB7IHRleHQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGl0ZW1zXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFnaW5hdGlvblxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJSZXN1bHRzKCkge1xuICAgIGlmICghdGhpcy5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcmVzZXRcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjogeyB0ZXh0OiAnJyB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IFtdIH0pO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHsgdmFsdWUgfSkge1xuICAgIHRoaXMucGFnZVNpemUgPSArdmFsdWU7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2xpY2soeyBwYWdlIH0pIHtcbiAgICBpZiAodHlwZW9mIHBhZ2UgPT09ICdudW1iZXInICYmIHBhZ2UgIT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdtYXAnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAncGF5bG9hZCdcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==