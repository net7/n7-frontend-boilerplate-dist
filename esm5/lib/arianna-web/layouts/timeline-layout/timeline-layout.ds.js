import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import helpers from '../../../common/helpers';
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
                var titleData = {
                    title: {
                        main: { text: text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
                    },
                    actions: {
                        buttons: [{
                                anchor: {
                                    href: _this.configuration.get('paths').entitaBasePath + "/" + id + "/" + helpers.slugify(label),
                                },
                                text: 'Vedi Entità'
                            }]
                    }
                };
                _this.one('aw-scheda-inner-title').update(titleData);
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
                label: 'Numero di risultati',
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    };
    return AwTimelineLayoutDS;
}(LayoutDataSource));
export { AwTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBSTlDO0lBQXdDLHNDQUFnQjtJQUF4RDtRQUFBLHFFQTJKQztRQTlJUyxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWYsWUFBTSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUEwSTFCLENBQUM7SUFsSUMsbUNBQU0sR0FBTixVQUFPLEVBRU47UUFGRCxpQkFxQkM7WUFwQkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUU5RCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQVUs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QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTNKRCxDQUF3QyxnQkFBZ0IsR0EySnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcblxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcblxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSBwYWdlU2l6ZSA9IDEwO1xuXG4gIHB1YmxpYyBzdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdFTVBUWScpO1xuXG4gIHByaXZhdGUgY3VycmVudFBhZ2UgPSAxO1xuXG4gIHByaXZhdGUgcmVsYXRlZEl0ZW1zOiBhbnlbXTtcblxuICBwdWJsaWMgdG90YWw6IG51bWJlcjtcblxuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBUaW1lbGluZScpO1xuXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAndGltZWxpbmUnKTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RXZlbnRPYmplY3RzJywge1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5vbmUoJ2F3LXRpbWVsaW5lJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGltZWxpbmVDbGljayh7IGlkLCBsYWJlbCwgZGF0ZVRleHQgfSkge1xuICAgIGlmIChpc051bGwoaWQpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgICB0aGlzLmNsZWFyUmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb2FkaW5nIHJlc3VsdHNcbiAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ0xPQURJTkcnKTtcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5UmVsYXRlZEl0ZW1zJywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiBbaWRdXG4gICAgICAgIH1cbiAgICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgICAvLyBjbGVhciBsb2FkaW5nXG4gICAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ1NVQ0NFU1MnKTtcblxuICAgICAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IGl0ZW1zUGFnaW5hdGlvbi5pdGVtcztcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucmVsYXRlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0aSBjb2xsZWdhdGkgYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcbiAgICAgICAgaWYgKHRoaXMudG90YWwgPT09IDEpIHtcbiAgICAgICAgICB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBSaXN1bHRhdG8gY29sbGVnYXRvIGE8YnI+PHNwYW4gY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlLWJpZ1wiPiR7bGFiZWx9PC9zcGFuPmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aXRsZURhdGE6IElubmVyVGl0bGVEYXRhID0ge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBtYWluOiB7IHRleHQgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeTogZGF0ZVRleHQgPyB7XG4gICAgICAgICAgICAgIHRleHQ6IGRhdGVUZXh0XG4gICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgICAgaHJlZjogYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdWZWRpIEVudGl0w6AnXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh0aXRsZURhdGEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpdGVtc1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhZ2luYXRpb25cbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyUmVzdWx0cygpIHtcbiAgICBpZiAoIXRoaXMucmVsYXRlZEl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlc2V0XG4gICAgdGhpcy5zdGF0ZSQubmV4dCgnRU1QVFknKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gMTA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHsgdGV4dDogJycgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiBbXSB9KTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNoYW5nZSh7IHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gK3ZhbHVlO1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNsaWNrKHsgcGFnZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBwYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbXMoKSB7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnbWFwJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLnJlbGF0ZWRJdGVtcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbW9kZTogJ3BheWxvYWQnXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=