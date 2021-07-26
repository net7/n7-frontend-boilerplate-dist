import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import helpers from '../../../common/helpers';
import { LayoutState } from '../../services/layout-state.service';
var MrPostsLayoutEH = /** @class */ (function (_super) {
    __extends(MrPostsLayoutEH, _super);
    function MrPostsLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrPostsLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-posts-layout.init':
                    _this.activatedRoute = payload.activatedRoute;
                    _this.router = payload.router;
                    _this.layoutState = payload.layoutState;
                    _this.dataSource.onInit(payload);
                    // listen route changes
                    _this.listenToRouterChanges();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-posts-layout.destroy':
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
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    /** URL changes */
    MrPostsLayoutEH.prototype.listenToRouterChanges = function () {
        var _this = this;
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$), tap(function () {
            _this.layoutState.set('results', LayoutState.LOADING);
        }), switchMap(function (params) {
            _this.dataSource.updateSearchTags(params);
            return _this.dataSource.request$(params, function (error) {
                console.warn('Posts search error', error);
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
    MrPostsLayoutEH.prototype.updateRouter = function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge'
        });
    };
    return MrPostsLayoutEH;
}(EventHandler));
export { MrPostsLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV4RjtJQUFxQyxtQ0FBWTtJQUFqRDtRQUFBLHFFQTJGQztRQXBGVyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBb0ZwRCxDQUFDO0lBOUVRLGdDQUFNLEdBQWI7UUFBQSxpQkE0Q0M7UUEzQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0I7b0JBQ3pCLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoQyx1QkFBdUI7b0JBQ3ZCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxD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QztJQUVTLHNDQUFZLEdBQXRCLFVBQXVCLFdBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsYUFBQTtZQUNYLG1CQUFtQixFQUFFLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNGRCxDQUFxQyxZQUFZLEdBMkZoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTXJQb3N0c0xheW91dERTIH0gZnJvbSAnLi9wb3N0cy1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSwgTGF5b3V0U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJQb3N0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgc2Nyb2xsUmVmRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGRhdGFTb3VyY2U6IE1yUG9zdHNMYXlvdXREUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItcG9zdHMtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZSA9IHBheWxvYWQuYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xyXG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG5cclxuICAgICAgICAgIC8vIGxpc3RlbiByb3V0ZSBjaGFuZ2VzXHJcbiAgICAgICAgICB0aGlzLmxpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xyXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21yLXBvc3RzLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgcGFnZTogcGF5bG9hZC5wYWdlIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgbGltaXQ6IHBheWxvYWQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUuY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgc29ydDogcGF5bG9hZC52YWx1ZSwgcGFnZTogMSB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVSTCBjaGFuZ2VzICovXHJcbiAgcHJvdGVjdGVkIGxpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgTGF5b3V0U3RhdGUuTE9BRElORyk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVTZWFyY2hUYWdzKHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5yZXF1ZXN0JChwYXJhbXMsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdQb3N0cyBzZWFyY2ggZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIExheW91dFN0YXRlLkVSUk9SKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIGlzRW1wdHkocmVzcG9uc2UucmVzdWx0cykgPyBMYXlvdXRTdGF0ZS5FTVBUWSA6IExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAvLyBzY3JvbGwgdG8gcmVmIGVsZW1lbnRcclxuICAgICAgaWYgKCF0aGlzLnNjcm9sbFJlZkVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFJlZkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXJlZicpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFoZWxwZXJzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zY3JvbGxSZWZFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsUmVmRWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVSb3V0ZXIocXVlcnlQYXJhbXMpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19