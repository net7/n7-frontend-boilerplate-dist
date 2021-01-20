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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHeEY7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUErQ0M7UUF4Q1MsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXdDbEQsQ0FBQztJQXRDUSxpQ0FBTSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRWhDLGVBQWU7b0JBQ2YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNDQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQztZQUNGLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUMsV0FBeUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUc7WUFDckYsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBbUMsV0FBYSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxFQUh1QyxDQUd2QyxDQUFDLENBQ0osQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBL0NELENBQXNDLFlBQVksR0ErQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLCBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0RFMgfSBmcm9tICcuL3N0YXRpYy1sYXlvdXQuZHMnO1xuXG5leHBvcnQgY2xhc3MgTXJTdGF0aWNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclN0YXRpY0xheW91dERTO1xuXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXN0YXRpYy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcblxuICAgICAgICAgIC8vIGxpc3RlbiByb3V0ZVxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zdGF0aWMtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcbiAgICB0aGlzLnJvdXRlLnVybC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ2NvbnRlbnQnLCBMYXlvdXRTdGF0ZS5MT0FESU5HKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1cmxTZWdtZW50czogVXJsU2VnbWVudFtdKSA9PiB0aGlzLmRhdGFTb3VyY2UucGFnZVJlcXVlc3QkKHVybFNlZ21lbnRzLCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyBzdGF0aWMgbGF5b3V0IGZvciAke3VybFNlZ21lbnRzfWAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ2NvbnRlbnQnLCBMYXlvdXRTdGF0ZS5FUlJPUik7XG4gICAgICB9KSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=