import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { LayoutState } from '../../services/layout-state.service';
var MrAdvancedResultsLayoutEH = /** @class */ (function (_super) {
    __extends(MrAdvancedResultsLayoutEH, _super);
    function MrAdvancedResultsLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrAdvancedResultsLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-advanced-results-layout.init':
                    _this.activatedRoute = payload.activatedRoute;
                    _this.router = payload.router;
                    _this.layoutState = payload.layoutState;
                    _this.dataSource.onInit(payload);
                    // listen route changes
                    _this.listenToRouterChanges();
                    break;
                case 'mr-advanced-results-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'n7-smart-pagination.click':
                    _this.updateRouter({ page: payload.page });
                    break;
                case 'n7-smart-pagination.change':
                    _this.updateRouter({ limit: payload.value });
                    break;
                case 'mr-search-results-title.change':
                    _this.updateRouter({ sort: payload.value });
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    /** URL changes */
    MrAdvancedResultsLayoutEH.prototype.listenToRouterChanges = function () {
        var _this = this;
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$), tap(function () {
            _this.layoutState.set('results', LayoutState.LOADING);
        }), switchMap(function (params) {
            _this.dataSource.updateSearchTags(params);
            return _this.dataSource.request$(params, function (error) {
                console.warn('Advanced search error', error);
                _this.layoutState.set('results', LayoutState.ERROR);
            });
        })).subscribe(function (response) {
            _this.dataSource.handleResponse(response);
            _this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
        });
    };
    MrAdvancedResultsLayoutEH.prototype.updateRouter = function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge'
        });
    };
    return MrAdvancedResultsLayoutEH;
}(EventHandler));
export { MrAdvancedResultsLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV4RjtJQUErQyw2Q0FBWTtJQUEzRDtRQUFBLHFFQWlGQztRQTFFVyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBMEVwRCxDQUFDO0lBdEVRLDBDQUFNLEdBQWI7UUFBQSxpQkEwQ0M7UUF6Q0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoQyx1QkFBdUI7b0JBQ3ZCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixNQUFNO2dCQUVSLEtBQUssb0NBQW9DO29CQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBRVIsS0FBSyxnQ0FBZ0M7b0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzNDLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO0lBQ1IseURBQXFCLEdBQS9CO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsR0FBRyxDQUFDO1lBQ0YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUs7Z0JBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxnREFBWSxHQUF0QixVQUF1QixXQUFXO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLGFBQUE7WUFDWCxtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFqRkQsQ0FBK0MsWUFBWSxHQWlGMUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLCBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBkYXRhU291cmNlOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBwYXlsb2FkLmFjdGl2YXRlZFJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcclxuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgICAvLyBsaXN0ZW4gcm91dGUgY2hhbmdlc1xyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgcGFnZTogcGF5bG9hZC5wYWdlIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgbGltaXQ6IHBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUuY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgc29ydDogcGF5bG9hZC52YWx1ZSB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVSTCBjaGFuZ2VzICovXHJcbiAgcHJvdGVjdGVkIGxpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgTGF5b3V0U3RhdGUuTE9BRElORyk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVTZWFyY2hUYWdzKHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5yZXF1ZXN0JChwYXJhbXMsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdBZHZhbmNlZCBzZWFyY2ggZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIExheW91dFN0YXRlLkVSUk9SKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIGlzRW1wdHkocmVzcG9uc2UucmVzdWx0cykgPyBMYXlvdXRTdGF0ZS5FTVBUWSA6IExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlUm91dGVyKHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==