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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QztJQUFtQyxpQ0FBZ0I7SUFBbkQ7UUFBQSxxRUErSEM7UUFsSFMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBOEcxQixDQUFDO0lBeEdDLDhCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBZ0JDO1lBZkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUUzRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDOUQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEVBQWE7UUFBMUIsaUJBOEJDO1lBOUJjLFVBQUUsRUFBRSxnQkFBSztRQUN0QixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDOUMsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBZ0I7Z0JBQWQsOEJBQVk7WUFDMUIsZ0JBQWdCO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBRyxhQUFXLEtBQUksQ0FBQyxLQUFLLDBGQUFtRixLQUFLLFlBQVMsQ0FBQztZQUNsSSxJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLEdBQUcsYUFBVyxLQUFJLENBQUMsS0FBSywwRkFBbUYsS0FBSyxZQUFTLENBQUM7YUFDL0g7WUFFRCxLQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7aUJBQ2Y7YUFDRixDQUFDLENBQUM7WUFFSCxlQUFlO1lBQ2YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTthQUNuQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLEVBQVM7WUFBUCxnQkFBSztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEVBQVE7WUFBTixjQUFJO1FBQ3RCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxtQ0FBVyxHQUFuQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDMUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9IRCxDQUFtQyxnQkFBZ0IsR0ErSGxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcblxuZXhwb3J0IGNsYXNzIEF3TWFwTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcGFnZVNpemUgPSAxMDtcblxuICBwdWJsaWMgc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8TGF5b3V0U3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnRU1QVFknKTtcblxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcblxuICBwcml2YXRlIHJlbGF0ZWRJdGVtczogYW55W107XG5cbiAgcHVibGljIHRvdGFsOiBudW1iZXI7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIE1hcHBhJyk7XG5cbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdtYXBwYScpO1xuXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRNYXBPYmplY3RzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5vbmUoJ2F3LW1hcCcpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1hcmtlck9wZW4oeyBpZCwgbGFiZWwgfSkge1xuICAgIC8vIGxvYWRpbmcgcmVzdWx0c1xuICAgIHRoaXMuc3RhdGUkLm5leHQoJ0xPQURJTkcnKTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgoeyByZWxhdGVkSXRlbXMgfSkgPT4ge1xuICAgICAgLy8gY2xlYXIgbG9hZGluZ1xuICAgICAgdGhpcy5zdGF0ZSQubmV4dCgnU1VDQ0VTUycpO1xuXG4gICAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IHJlbGF0ZWRJdGVtcztcbiAgICAgIHRoaXMudG90YWwgPSByZWxhdGVkSXRlbXMubGVuZ3RoO1xuICAgICAgbGV0IHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IE9nZ2V0dGkgY29sbGVnYXRpIGE8YnI+PHNwYW4gY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlLWJpZ1wiPiR7bGFiZWx9PC9zcGFuPmA7XG4gICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xuICAgICAgICB0ZXh0ID0gYDxzdHJvbmc+JHt0aGlzLnRvdGFsfTwvc3Ryb25nPiBPZ2dldHRvIGNvbGxlZ2F0byBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7IHRleHQgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gdXBkYXRlIGl0ZW1zXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG5cbiAgICAgIC8vIHVwZGF0ZSBwYWdpbmF0aW9uXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTWFya2VyQ2xvc2UoKSB7XG4gICAgLy8gcmVzZXRcbiAgICB0aGlzLnN0YXRlJC5uZXh0KCdFTVBUWScpO1xuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnJlbGF0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMub25lKCdhdy1zY2hlZGEtaW5uZXItdGl0bGUnKS51cGRhdGUoe1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjogeyB0ZXh0OiAnJyB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IFtdIH0pO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHsgdmFsdWUgfSkge1xuICAgIHRoaXMucGFnZVNpemUgPSArdmFsdWU7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2xpY2soeyBwYWdlIH0pIHtcbiAgICBpZiAodHlwZW9mIHBhZ2UgPT09ICdudW1iZXInICYmIHBhZ2UgIT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdtYXAnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAncGF5bG9hZCdcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==