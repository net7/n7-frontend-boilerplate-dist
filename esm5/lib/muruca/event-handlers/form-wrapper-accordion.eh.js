import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
var MrFormWrapperAccordionEH = /** @class */ (function (_super) {
    __extends(MrFormWrapperAccordionEH, _super);
    function MrFormWrapperAccordionEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrFormWrapperAccordionEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-form-wrapper-accordion.init':
                    _this.listenKeyUpEvents();
                    break;
                case 'mr-form-wrapper-accordion.destroy':
                    _this.destroy$.next();
                    break;
                case 'mr-form-wrapper-accordion.submit': {
                    var form = _this.dataSource.output.form;
                    _this.emitOuter('submit', {
                        state: form.getState()
                    });
                    break;
                }
                case 'mr-form-wrapper-accordion.reset':
                    _this.emitOuter('reset');
                    break;
                case 'mr-form-wrapper-accordion.click':
                    _this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
    };
    MrFormWrapperAccordionEH.prototype.listenKeyUpEvents = function () {
        var _this = this;
        var keyup$ = fromEvent(window, 'keyup');
        keyup$.pipe(filter(function (event) { return event.key === 'Enter'; }), takeUntil(this.destroy$)).subscribe(function () {
            _this.emitInner('submit');
        });
    };
    return MrFormWrapperAccordionEH;
}(EventHandler));
export { MrFormWrapperAccordionEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQ7SUFBOEMsNENBQVk7SUFBMUQ7UUFBQSxxRUEyQ0M7UUExQ1MsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQTBDbEQsQ0FBQztJQXRDUSx5Q0FBTSxHQUFiO1FBQUEsaUJBMEJDO1FBekJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZ0NBQWdDO29CQUNuQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDUixLQUFLLGtDQUFrQyxDQUFDLENBQUM7b0JBQy9CLElBQUEsbUNBQUksQ0FBNEI7b0JBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtxQkFDdkIsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9EQUFpQixHQUF6QjtRQUFBLGlCQVNDO1FBUkMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUNULE1BQU0sQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBckIsQ0FBcUIsQ0FBQyxFQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBM0NELENBQThDLFlBQVksR0EyQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgZGF0YVNvdXJjZTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5LZXlVcEV2ZW50cygpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5zdWJtaXQnOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuZGF0YVNvdXJjZS5vdXRwdXQ7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc3VibWl0Jywge1xyXG4gICAgICAgICAgICBzdGF0ZTogZm9ybS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnJlc2V0JzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyZXNldCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlR3JvdXAocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5LZXlVcEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGtleXVwJCA9IGZyb21FdmVudCh3aW5kb3csICdrZXl1cCcpO1xyXG5cclxuICAgIGtleXVwJC5waXBlKFxyXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lbWl0SW5uZXIoJ3N1Ym1pdCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==