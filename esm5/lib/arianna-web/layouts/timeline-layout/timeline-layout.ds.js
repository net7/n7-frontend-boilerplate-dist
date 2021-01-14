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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDLElBQU0sWUFBWSxHQUFHO0lBQ25CO1FBQ0UsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxPQUFPLEVBQUUsNERBQTREO1FBQ3JFLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7QUFFRjtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFpSkM7UUFwSVMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBZ0kxQixDQUFDO0lBeEhDLG1DQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBd0JDO1lBdkJDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFFOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFB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Q0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sNkNBQWdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTthQUN0QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFqSkQsQ0FBd0MsZ0JBQWdCLEdBaUp2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxudHlwZSBMYXlvdXRTdGF0ZSA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnU1VDQ0VTUyc7XHJcblxyXG5jb25zdCB0aW1lbGluZU1vY2sgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdjNjdiM2E4Yi01ZWM5LTRjODItYjc3Yy02MTQyZTQ5Y2ZhZDQnLFxyXG4gICAgY29udGVudDogJ01vc3RyYSBpbnRlcm5hemlvbmFsZSBkaSBlZGlsaXppYSBvc3BlZGFsaWVyYSwgUm9tYSAoMTkzNSknLFxyXG4gICAgc3RhcnQ6ICcxOTM1J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdiNzg4YmNhMS1jZTExLTQ2MTgtYjI4My1hNjU0ZDE2YjRhMTAnLFxyXG4gICAgY29udGVudDogJ01vc3RyYSBkaSBlZGlsaXppYSBvc3BlZGFsaWVyYSwgRml1Z2dpJyxcclxuICAgIHN0YXJ0OiAnMTk0MidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNWRhZTc2ZTMtN2JkZS00NmU1LTgzNzEtYTY4OWUzODM3OGE0JyxcclxuICAgIGNvbnRlbnQ6ICdJIENvbmdyZXNzbyBtb25kaWFsZSBkaSBzb2Npb2xvZ2lhJyxcclxuICAgIHN0YXJ0OiAnMTk1MSdcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemUgPSAxMDtcclxuXHJcbiAgcHVibGljIHN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PExheW91dFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ0VNUFRZJyk7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBwcml2YXRlIHJlbGF0ZWRJdGVtczogYW55W107XHJcblxyXG4gIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIFRpbWVsaW5lJyk7XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICd0aW1lbGluZScpO1xyXG5cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RXZlbnRPYmplY3RzJywge1xyXG4gICAgICBwYXJhbXM6IHt9LFxyXG4gICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcblxyXG4gICAgICAgIC8vIEZJWE1FOiB0b2dsaWVyZVxyXG4gICAgICAgIHRoaXMub25lKCdhdy10aW1lbGluZScpLnVwZGF0ZSh0aW1lbGluZU1vY2spO1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdhdy10aW1lbGluZScpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVGltZWxpbmVDbGljayh7IGlkLCBsYWJlbCB9KSB7XHJcbiAgICBpZiAoaXNOdWxsKGlkKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBsb2FkaW5nIHJlc3VsdHNcclxuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnTE9BRElORycpO1xyXG4gICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eVJlbGF0ZWRJdGVtcycsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IFtpZF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICAgIC8vIGNsZWFyIGxvYWRpbmdcclxuICAgICAgICB0aGlzLnN0YXRlJC5uZXh0KCdTVUNDRVNTJyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gaXRlbXNQYWdpbmF0aW9uLml0ZW1zO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0aSBjb2xsZWdhdGkgYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcclxuICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xyXG4gICAgICAgICAgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh7XHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBtYWluOiB7IHRleHQgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgaXRlbXNcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHJlc2V0XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBtYWluOiB7IHRleHQ6ICcnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogW10gfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DaGFuZ2UoeyB2YWx1ZSB9KSB7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DbGljayh7IHBhZ2UgfSkge1xyXG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnbWFwJyxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIG1vZGU6ICdwYXlsb2FkJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=