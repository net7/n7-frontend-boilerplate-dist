import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
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
            }
        }).subscribe(function (response) {
            _this.one('aw-timeline').update(response);
        });
    };
    AwTimelineLayoutDS.prototype.onTimelineClick = function (_a) {
        var _this = this;
        var id = _a.id, label = _a.label, dateText = _a.dateText;
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
                        main: { text: text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDO0lBQXdDLHNDQUFnQjtJQUF4RDtRQUFBLHFFQWlKQztRQXBJUyxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsWUFBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUFnSTFCLENBQUM7SUF4SEMsbUNBQU0sR0FBTixVQUFPLEVBRU47UUFGRCxpQkFxQkM7WUFwQkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUU5RCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENB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QUM7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWpKRCxDQUF3QyxnQkFBZ0IsR0FpSnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZSA9IDEwO1xyXG5cclxuICBwdWJsaWMgc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8TGF5b3V0U3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnRU1QVFknKTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XHJcblxyXG4gIHByaXZhdGUgcmVsYXRlZEl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgcHVibGljIHRvdGFsOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gVGltZWxpbmUnKTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3RpbWVsaW5lJyk7XHJcblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFdmVudE9iamVjdHMnLCB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uZSgnYXctdGltZWxpbmUnKS51cGRhdGUocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRpbWVsaW5lQ2xpY2soeyBpZCwgbGFiZWwsIGRhdGVUZXh0IH0pIHtcclxuICAgIGlmIChpc051bGwoaWQpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGxvYWRpbmcgcmVzdWx0c1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KCdMT0FESU5HJyk7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5UmVsYXRlZEl0ZW1zJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogW2lkXVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuc3Vic2NyaWJlKCh7IGl0ZW1zUGFnaW5hdGlvbiB9KSA9PiB7XHJcbiAgICAgICAgLy8gY2xlYXIgbG9hZGluZ1xyXG4gICAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ1NVQ0NFU1MnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBpdGVtc1BhZ2luYXRpb24uaXRlbXM7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucmVsYXRlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsID09PSAxKSB7XHJcbiAgICAgICAgICB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBSaXN1bHRhdG8gY29sbGVnYXRvIGE8YnI+PHNwYW4gY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlLWJpZ1wiPiR7bGFiZWx9PC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIG1haW46IHsgdGV4dCB9LFxyXG4gICAgICAgICAgICBzZWNvbmRhcnk6IGRhdGVUZXh0ID8ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGRhdGVUZXh0XHJcbiAgICAgICAgICAgIH0gOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBpdGVtc1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHBhZ2luYXRpb25cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyUmVzdWx0cygpIHtcclxuICAgIGlmICghdGhpcy5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzZXRcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoJ0VNUFRZJyk7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gMTA7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnRvdGFsID0gMDtcclxuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHsgdGV4dDogJycgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiBbXSB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnaW5hdGlvbkNoYW5nZSh7IHZhbHVlIH0pIHtcclxuICAgIHRoaXMucGFnZVNpemUgPSArdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uUGFnaW5hdGlvbkNsaWNrKHsgcGFnZSB9KSB7XHJcbiAgICBpZiAodHlwZW9mIHBhZ2UgPT09ICdudW1iZXInICYmIHBhZ2UgIT09IHRoaXMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUl0ZW1zKCkge1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbnRleHQ6ICdtYXAnLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMucmVsYXRlZEl0ZW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ3BheWxvYWQnXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcclxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBhZ2VTaXplKSxcclxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2VMaW1pdDogNSxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==