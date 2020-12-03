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
            this.communication.request$('getEntityDetails', {
                params: {
                    entityId: id,
                }
            }).subscribe(function (_a) {
                var relatedItems = _a.relatedItems;
                // clear loading
                _this.state$.next('SUCCESS');
                _this.relatedItems = relatedItems;
                _this.total = relatedItems.length;
                var text = "<strong>" + _this.total + "</strong> Oggetti collegati a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                if (_this.total === 1) {
                    text = "<strong>" + _this.total + "</strong> Oggetto collegato a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDLElBQU0sWUFBWSxHQUFHO0lBQ25CO1FBQ0UsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxPQUFPLEVBQUUsNERBQTREO1FBQ3JFLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7QUFFRjtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFpSkM7UUFwSVMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBZ0kxQixDQUFDO0lBeEhDLG1DQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBd0JDO1lBdkJDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxvQkFBTyxFQUFFLDhCQUFZLEVBQUUsZ0NBQWE7UUFFOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFB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QUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWpKRCxDQUF3QyxnQkFBZ0IsR0FpSnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcclxuXHJcbmNvbnN0IHRpbWVsaW5lTW9jayA9IFtcclxuICB7XHJcbiAgICBpZDogJ2M2N2IzYThiLTVlYzktNGM4Mi1iNzdjLTYxNDJlNDljZmFkNCcsXHJcbiAgICBjb250ZW50OiAnTW9zdHJhIGludGVybmF6aW9uYWxlIGRpIGVkaWxpemlhIG9zcGVkYWxpZXJhLCBSb21hICgxOTM1KScsXHJcbiAgICBzdGFydDogJzE5MzUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2I3ODhiY2ExLWNlMTEtNDYxOC1iMjgzLWE2NTRkMTZiNGExMCcsXHJcbiAgICBjb250ZW50OiAnTW9zdHJhIGRpIGVkaWxpemlhIG9zcGVkYWxpZXJhLCBGaXVnZ2knLFxyXG4gICAgc3RhcnQ6ICcxOTQyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1ZGFlNzZlMy03YmRlLTQ2ZTUtODM3MS1hNjg5ZTM4Mzc4YTQnLFxyXG4gICAgY29udGVudDogJ0kgQ29uZ3Jlc3NvIG1vbmRpYWxlIGRpIHNvY2lvbG9naWEnLFxyXG4gICAgc3RhcnQ6ICcxOTUxJ1xyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZSA9IDEwO1xyXG5cclxuICBwdWJsaWMgc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8TGF5b3V0U3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnRU1QVFknKTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XHJcblxyXG4gIHByaXZhdGUgcmVsYXRlZEl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgcHVibGljIHRvdGFsOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gVGltZWxpbmUnKTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3RpbWVsaW5lJyk7XHJcblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFdmVudE9iamVjdHMnLCB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcclxuXHJcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlXHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHRpbWVsaW5lTW9jayk7XHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25UaW1lbGluZUNsaWNrKHsgaWQsIGxhYmVsIH0pIHtcclxuICAgIGlmIChpc051bGwoaWQpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGxvYWRpbmcgcmVzdWx0c1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KCdMT0FESU5HJyk7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGVudGl0eUlkOiBpZCxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgoeyByZWxhdGVkSXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIC8vIGNsZWFyIGxvYWRpbmdcclxuICAgICAgICB0aGlzLnN0YXRlJC5uZXh0KCdTVUNDRVNTJyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gcmVsYXRlZEl0ZW1zO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSByZWxhdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBPZ2dldHRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsID09PSAxKSB7XHJcbiAgICAgICAgICB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBPZ2dldHRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh7XHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBtYWluOiB7IHRleHQgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgaXRlbXNcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHJlc2V0XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBtYWluOiB7IHRleHQ6ICcnIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogW10gfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DaGFuZ2UoeyB2YWx1ZSB9KSB7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DbGljayh7IHBhZ2UgfSkge1xyXG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnbWFwJyxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIG1vZGU6ICdwYXlsb2FkJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=