import { __extends } from "tslib";
import { Subject } from 'rxjs';
import { EventHandler } from '@n7-frontend/core';
import { takeUntil, switchMap, tap } from 'rxjs/operators';
import { LayoutState } from '../../services/layout-state.service';
var MrStaticLayoutEH = /** @class */ (function (_super) {
    __extends(MrStaticLayoutEH, _super);
    function MrStaticLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrStaticLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-static-layout.init':
                    _this.route = payload.route;
                    _this.layoutState = payload.layoutState;
                    _this.dataSource.onInit(payload);
                    // listen route
                    _this.listenRoute();
                    break;
                case 'mr-static-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    MrStaticLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        this.route.url.pipe(takeUntil(this.destroy$), tap(function () {
            _this.layoutState.set('content', LayoutState.LOADING);
        }), switchMap(function (urlSegments) { return _this.dataSource.pageRequest$(urlSegments, function (err) {
            console.warn("Error loading static layout for " + urlSegments, err.message);
            _this.layoutState.set('content', LayoutState.ERROR);
        }); })).subscribe(function (response) {
            _this.layoutState.set('content', LayoutState.SUCCESS);
            _this.dataSource.handleResponse(response);
        });
    };
    return MrStaticLayoutEH;
}(EventHandler));
export { MrStaticLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHeEY7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUErQ0M7UUF4Q1MsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXdDbEQsQ0FBQztJQXRDUSxpQ0FBTSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRWhDLGVBQWU7b0JBQ2YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNDQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQztZQUNGLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUMsV0FBeUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUc7WUFDckYsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBbUMsV0FBYSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxFQUh1QyxDQUd2QyxDQUFDLENBQ0osQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBL0NELENBQXNDLFlBQVksR0ErQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNclN0YXRpY0xheW91dERTIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1yU3RhdGljTGF5b3V0RFM7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc3RhdGljLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG5cclxuICAgICAgICAgIC8vIGxpc3RlbiByb3V0ZVxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21yLXN0YXRpYy1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUudXJsLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkxPQURJTkcpO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKCh1cmxTZWdtZW50czogVXJsU2VnbWVudFtdKSA9PiB0aGlzLmRhdGFTb3VyY2UucGFnZVJlcXVlc3QkKHVybFNlZ21lbnRzLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIHN0YXRpYyBsYXlvdXQgZm9yICR7dXJsU2VnbWVudHN9YCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuRVJST1IpO1xyXG4gICAgICB9KSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==