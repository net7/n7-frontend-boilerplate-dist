import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import helpers from '../../../common/helpers';
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
                    _this.modalService = payload.modalService;
                    _this.dataSource.onInit(payload);
                    // listen route changes
                    _this.listenToRouterChanges();
                    // scroll top
                    window.scrollTo(0, 0);
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
                    _this.updateRouter({ limit: payload.value, page: 1 });
                    break;
                case 'mr-search-results-title.change':
                    _this.updateRouter({ sort: payload.value, page: 1 });
                    break;
                case 'mr-search-results.openresourcemodal': {
                    var id = payload.id, resourceType = payload.type;
                    _this.modalService.open(id, resourceType);
                    break;
                }
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
            // scroll to ref element
            if (!_this.scrollRefElement) {
                _this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                _this.scrollRefElement.scrollIntoView();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RjtJQUErQyw2Q0FBWTtJQUEzRDtRQUFBLHFFQW9HQztRQTNGVyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBMkZwRCxDQUFDO0lBckZRLDBDQUFNLEdBQWI7UUFBQSxpQkFtREM7UUFsREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztvQkFDekMsS0FBSSxDQUFD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QWdCLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzlELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLGdEQUFZLEdBQXRCLFVBQXVCLFdBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsYUFBQTtZQUNYLG1CQUFtQixFQUFFLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQXBHRCxDQUErQyxZQUFZLEdBb0cxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXREUyB9IGZyb20gJy4vYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSwgTGF5b3V0U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHNjcm9sbFJlZkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBkYXRhU291cmNlOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBwYXlsb2FkLmFjdGl2YXRlZFJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcclxuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBwYXlsb2FkLm1vZGFsU2VydmljZTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcblxyXG4gICAgICAgICAgLy8gbGlzdGVuIHJvdXRlIGNoYW5nZXNcclxuICAgICAgICAgIHRoaXMubGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbXItYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlcih7IHBhZ2U6IHBheWxvYWQucGFnZSB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlcih7IGxpbWl0OiBwYXlsb2FkLnZhbHVlLCBwYWdlOiAxIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlcih7IHNvcnQ6IHBheWxvYWQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMub3BlbnJlc291cmNlbW9kYWwnOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCB0eXBlOiByZXNvdXJjZVR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGlkLCByZXNvdXJjZVR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVSTCBjaGFuZ2VzICovXHJcbiAgcHJvdGVjdGVkIGxpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgTGF5b3V0U3RhdGUuTE9BRElORyk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVTZWFyY2hUYWdzKHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5yZXF1ZXN0JChwYXJhbXMsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdBZHZhbmNlZCBzZWFyY2ggZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIExheW91dFN0YXRlLkVSUk9SKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIGlzRW1wdHkocmVzcG9uc2UucmVzdWx0cykgPyBMYXlvdXRTdGF0ZS5FTVBUWSA6IExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAvLyBzY3JvbGwgdG8gcmVmIGVsZW1lbnRcclxuICAgICAgaWYgKCF0aGlzLnNjcm9sbFJlZkVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFJlZkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXJlZicpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFoZWxwZXJzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zY3JvbGxSZWZFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsUmVmRWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVSb3V0ZXIocXVlcnlQYXJhbXMpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19