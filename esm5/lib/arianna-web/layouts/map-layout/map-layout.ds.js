import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import helpers from '../../../common/helpers';
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
            var titleData = {
                title: {
                    main: { text: text },
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
                label: 'Numero di risultati',
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    };
    return AwMapLayoutDS;
}(LayoutDataSource));
export { AwMapLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUk5QztJQUFtQyxpQ0FBZ0I7SUFBbkQ7UUFBQSxxRUF5SUM7UUE1SFMsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU0sR0FBaUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBd0gxQixDQUFDO0lBbEhDLDhCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBZ0JDO1lBZkMsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTtRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUUzRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxD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QixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXpJRCxDQUFtQyxnQkFBZ0IsR0F5SWxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG50eXBlIExheW91dFN0YXRlID0gJ0xPQURJTkcnIHwgJ0VNUFRZJyB8ICdTVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd01hcExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemUgPSAxMDtcclxuXHJcbiAgcHVibGljIHN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PExheW91dFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ0VNUFRZJyk7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBwcml2YXRlIHJlbGF0ZWRJdGVtczogYW55W107XHJcblxyXG4gIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIE1hcHBhJyk7XHJcblxyXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdtYXBwYScpO1xyXG5cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0TWFwT2JqZWN0cycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LW1hcCcpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTWFya2VyT3Blbih7IGlkLCBsYWJlbCB9KSB7XHJcbiAgICAvLyBsb2FkaW5nIHJlc3VsdHNcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoJ0xPQURJTkcnKTtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5UmVsYXRlZEl0ZW1zJywge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiBbaWRdXHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgoeyBpdGVtc1BhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICAvLyBjbGVhciBsb2FkaW5nXHJcbiAgICAgIHRoaXMuc3RhdGUkLm5leHQoJ1NVQ0NFU1MnKTtcclxuXHJcbiAgICAgIHRoaXMucmVsYXRlZEl0ZW1zID0gaXRlbXNQYWdpbmF0aW9uLml0ZW1zO1xyXG4gICAgICB0aGlzLnRvdGFsID0gdGhpcy5yZWxhdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICBsZXQgdGV4dCA9IGA8c3Ryb25nPiR7dGhpcy50b3RhbH08L3N0cm9uZz4gUmlzdWx0YXRpIGNvbGxlZ2F0aSBhPGJyPjxzcGFuIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy10aXRsZS1iaWdcIj4ke2xhYmVsfTwvc3Bhbj5gO1xyXG4gICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xyXG4gICAgICAgIHRleHQgPSBgPHN0cm9uZz4ke3RoaXMudG90YWx9PC9zdHJvbmc+IFJpc3VsdGF0byBjb2xsZWdhdG8gYTxicj48c3BhbiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX3Jlc3VsdHMtdGl0bGUtYmlnXCI+JHtsYWJlbH08L3NwYW4+YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGl0bGVEYXRhOiBJbm5lclRpdGxlRGF0YSA9IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgbWFpbjogeyB0ZXh0IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRofS8ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dDogJ1ZlZGkgRW50aXTDoCdcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm9uZSgnYXctc2NoZWRhLWlubmVyLXRpdGxlJykudXBkYXRlKHRpdGxlRGF0YSk7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgaXRlbXNcclxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIHBhZ2luYXRpb25cclxuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTWFya2VyQ2xvc2UoKSB7XHJcbiAgICAvLyByZXNldFxyXG4gICAgdGhpcy5zdGF0ZSQubmV4dCgnRU1QVFknKTtcclxuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgdGhpcy5yZWxhdGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgdGhpcy5vbmUoJ2F3LXNjaGVkYS1pbm5lci10aXRsZScpLnVwZGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFpbjogeyB0ZXh0OiAnJyB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IFtdIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHsgdmFsdWUgfSkge1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9ICt2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcclxuICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25QYWdpbmF0aW9uQ2xpY2soeyBwYWdlIH0pIHtcclxuICAgIGlmICh0eXBlb2YgcGFnZSA9PT0gJ251bWJlcicgJiYgcGFnZSAhPT0gdGhpcy5jdXJyZW50UGFnZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSXRlbXMoKSB7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogJ21hcCcsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5yZWxhdGVkSXRlbXMgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBhZ2luYXRpb24oKSB7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBtb2RlOiAncGF5bG9hZCdcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpLFxyXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgcGFnZUxpbWl0OiA1LFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXHJcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=