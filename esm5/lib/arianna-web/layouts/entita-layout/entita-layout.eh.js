import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
var AwEntitaLayoutEH = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutEH, _super);
    function AwEntitaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.handlePageSizeChange = function (v) {
            _this.dataSource.pageSize = v;
            _this.dataSource.handleNavUpdate('oggetti-collegati');
        };
        return _this;
    }
    AwEntitaLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-entita-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.configuration = payload.configuration;
                    _this.route = payload.route;
                    _this.entityId = _this.route.snapshot.params.id || '';
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || 1;
                    _this.listenRoute(_this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-entita-nav.click':
                    if (payload) {
                        _this.dataSource.selectedTab = payload;
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.change':
                    { // changed page size value (pagination)
                        _this.dataSource.pageSize = payload;
                        _this.dataSource.currentPage = 1; // reset page
                        var options = {
                            context: _this.dataSource.selectedTab,
                            config: _this.dataSource.configuration,
                            page: _this.dataSource.currentPage,
                            pagination: true,
                            size: _this.dataSource.pageSize,
                        };
                        _this.dataSource.updateComponent('aw-linked-objects', { items: _this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'n7-smart-pagination.change':
                    _this.handlePageSizeChange(payload.value);
                    break;
                default:
                    break;
            }
        });
    };
    /**
     * Listens to routing events of this layout.
     */
    AwEntitaLayoutEH.prototype.listenRoute = function (selectedItem, forceReload) {
        var _this = this;
        if (selectedItem === void 0) { selectedItem = ''; }
        if (forceReload === void 0) { forceReload = false; }
        // listen for "page" query param changes
        this.route.queryParams.pipe(map(function (params) { return params.page; })).subscribe(function (page) {
            if (_this.dataSource.currentPage !== page) {
                _this.dataSource.currentPage = page;
                _this.dataSource.handlePageNavigation();
            }
        });
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe(function (params) {
            // look for id
            if (params.get('id')) {
                if (_this.dataSource.currentId === params.get('id') && !forceReload) {
                    if (_this.dataSource.selectedTab !== params.get('tab')) {
                        _this.dataSource.handleNavUpdate(params.get('tab'));
                    }
                    return;
                }
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
                    .subscribe(function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
                        // remove the entity of this page
                        _this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            _this.emitOuter('selectItem', selectedItem);
                        }
                    }
                });
            }
            else {
                _this.dataSource.loadItem();
            }
        });
    };
    return AwEntitaLayoutEH;
}(EventHandler));
export { AwEntitaLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDO0lBQXNDLG9DQUFZO0lBQWxEO1FBQUEscUVBa0hDO1FBakhTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFvRXpDLDBCQUFvQixHQUFHLFVBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUE7O0lBMENILENBQUM7SUF6R1EsaUNBQU0sR0FBYjtRQUFBLGlCQTBEQztRQXpEQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDbkUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVIsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksT0FBTyxFQUFFO3dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMxQztvQkFDRCxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxxQkFBcUI7b0JBQ3hCLElBQUksT0FBTyxFQUFFO3dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFDO29CQUNELE1BQU07Z0JBQ1IsS0FBSywwQkFBMEI7b0JBQUUsRUFBRSx1Q0FBdUM7d0JBQ3hFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYTt3QkFDOUMsSUFBTSxPQUFPLEdBQUc7NEJBQ2QsT0FBTyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVzs0QkFDcEMsTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTs0QkFDckMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVzs0QkFDakMsVUFBVSxFQUFFLElBQUk7NEJBQ2hCLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7eUJBQy9CLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQzdCLG1CQUFtQixFQUNuQixFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFDbEQsT0FBTyxDQUNSLENBQUM7cUJBQ0g7b0JBQUMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFPRDs7T0FFRztJQUNLLHNDQUFXLEdBQW5CLFVBQW9CLFlBQWlCLEVBQUUsV0FBbUI7UUFBMUQsaUJBb0NDO1FBcENtQiw2QkFBQSxFQUFBLGlCQUFpQjtRQUFFLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ3hELHdDQUF3QztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLEdBQUcsQ0FBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQVgsQ0FBVyxDQUFDLENBQ2xDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNmLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbkMsY0FBYztZQUNkLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsRSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDcEQ7b0JBQ0QsT0FBTztpQkFDUjtnQkFDRCw4REFBOEQ7Z0JBQzlELEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5RSxTQUFTLENBQUMsVUFBQyxHQUFHO29CQUNiLElBQUksR0FBRyxFQUFFO3dCQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQyxpQ0FBaUM7d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLFlBQVksRUFBRTs0QkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7eUJBQzVDO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxIRCxDQUFzQyxZQUFZLEdBa0hqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xyXG5cclxuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgJyc7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlIHx8IDE7XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKHRoaXMuZW50aXR5SWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuc2hvd21vcmUnOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLW5hdi5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogeyAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSAxOyAvLyByZXNldCBwYWdlXHJcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIsXHJcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5kYXRhU291cmNlLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTogdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgICdhdy1saW5rZWQtb2JqZWN0cycsXHJcbiAgICAgICAgICAgIHsgaXRlbXM6IHRoaXMuZGF0YVNvdXJjZS5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9LFxyXG4gICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZVNpemVDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9ICh2KSA9PiB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUgPSB2O1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZSgnb2dnZXR0aS1jb2xsZWdhdGknKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbnMgdG8gcm91dGluZyBldmVudHMgb2YgdGhpcyBsYXlvdXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZShzZWxlY3RlZEl0ZW0gPSAnJywgZm9yY2VSZWxvYWQgPSBmYWxzZSkge1xyXG4gICAgLy8gbGlzdGVuIGZvciBcInBhZ2VcIiBxdWVyeSBwYXJhbSBjaGFuZ2VzXHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcbiAgICAgIG1hcCgocGFyYW1zOiBhbnkpID0+IHBhcmFtcy5wYWdlKSxcclxuICAgICkuc3Vic2NyaWJlKChwYWdlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgIT09IHBhZ2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlTmF2aWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAvLyBsb29rIGZvciBpZFxyXG4gICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID09PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiAhPT0gcGFyYW1zLmdldCgndGFiJykpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXJhbXMuZ2V0KCd0YWInKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtcy5nZXQoJ2lkJyksIHBhcmFtcy5nZXQoJ3NsdWcnKSwgcGFyYW1zLmdldCgndGFiJykpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXMpO1xyXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50aXR5IG9mIHRoaXMgcGFnZVxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVXaWRnZXRzKHJlcyk7XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdEl0ZW0nLCBzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=