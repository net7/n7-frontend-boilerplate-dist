import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
var AwMapLayoutDS = /** @class */ (function (_super) {
    __extends(AwMapLayoutDS, _super);
    function AwMapLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageSize = 10;
        _this.state$ = new BehaviorSubject('EMPTY');
        _this.currentPage = 1;
        return _this;
    }
    AwMapLayoutDS.prototype.onInit = function (_a) {
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Mappa');
        // navigation update
        this.mainState.updateCustom('currentNav', 'mappa');
        this.communication.request$('getMapObjects').subscribe(function (response) {
            _this.one('aw-map').update(response);
        });
    };
    AwMapLayoutDS.prototype.onMarkerOpen = function (_a) {
        var _this = this;
        var id = _a.id, label = _a.label;
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
    };
    AwMapLayoutDS.prototype.onMarkerClose = function () {
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
    AwMapLayoutDS.prototype.onPaginationChange = function (_a) {
        var value = _a.value;
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    };
    AwMapLayoutDS.prototype.onPaginationClick = function (_a) {
        var page = _a.page;
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    };
    AwMapLayoutDS.prototype.updateItems = function () {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    };
    AwMapLayoutDS.prototype.updatePagination = function () {
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
    return AwMapLayoutDS;
}(LayoutDataSource));
export { AwMapLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QztJQUFtQyxpQ0FBZ0I7SUFBbkQ7UUFBQSxxRUErSEM7UUFsSFMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBOEcxQixDQUFDO0lBeEdDLDhCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBZ0JDO1lBZkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUUzRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDOUQsS0FB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R0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU8sd0NBQWdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTthQUN0QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvSEQsQ0FBbUMsZ0JBQWdCLEdBK0hsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxudHlwZSBMYXlvdXRTdGF0ZSA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnU1VDQ0VTUyc7XG5cbmV4cG9ydCBjbGFzcyBBd01hcExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIHBhZ2VTaXplID0gMTA7XG5cbiAgcHVibGljIHN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PExheW91dFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ0VNUFRZJyk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XG5cbiAgcHJpdmF0ZSByZWxhdGVkSXRlbXM6IGFueVtdO1xuXG4gIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBNYXBwYScpO1xuXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnbWFwcGEnKTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0TWFwT2JqZWN0cycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMub25lKCdhdy1tYXAnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgb25NYXJrZXJPcGVuKHsgaWQsIGxhYmVsIH0pIHtcbiAgICAvLyBsb2FkaW5nIHJlc3VsdHNcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdMT0FESU5HJyk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlSZWxhdGVkSXRlbXMnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogW2lkXVxuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgLy8gY2xlYXIgbG9hZGluZ1xuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnU1VDQ0VTUycpO1xuXG4gICAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IGl0ZW1zUGFnaW5hdGlvbi5pdGVtcztcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLnJlbGF0ZWRJdGVtcy5sZW5ndGg7XG4gICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgaWYgKHRoaXMudG90YWwgPT09IDEpIHtcbiAgICAgICAgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7IHRleHQgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gdXBkYXRlIGl0ZW1zXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG5cbiAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTWFya2VyQ2xvc2UoKSB7XG4gICAgLy8gcmVzZXRcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjogeyB0ZXh0OiAnJyB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IFtdIH0pO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHsgdmFsdWUgfSkge1xuICAgIHRoaXMucGFnZVNpemUgPSArdmFsdWU7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2xpY2soeyBwYWdlIH0pIHtcbiAgICBpZiAodHlwZW9mIHBhZ2UgPT09ICdudW1iZXInICYmIHBhZ2UgIT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdtYXAnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAncGF5bG9hZCdcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==