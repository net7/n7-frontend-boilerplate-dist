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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQ7SUFBOEMsNENBQVk7SUFBMUQ7UUFBQSxxRUEyQ0M7UUExQ1MsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQTBDbEQsQ0FBQztJQXRDUSx5Q0FBTSxHQUFiO1FBQUEsaUJBMEJDO1FBekJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZ0NBQWdDO29CQUNuQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDUixLQUFLLGtDQUFrQyxDQUFDLENBQUM7b0JBQy9CLElBQUEsbUNBQUksQ0FBNEI7b0JBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtxQkFDdkIsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9EQUFpQixHQUF6QjtRQUFBLGlCQVNDO1FBUkMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUNULE1BQU0sQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBckIsQ0FBcUIsQ0FBQyxFQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBM0NELENBQThDLFlBQVksR0EyQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XG5cbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBkYXRhU291cmNlOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFM7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5pbml0JzpcbiAgICAgICAgICB0aGlzLmxpc3RlbktleVVwRXZlbnRzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0Jzoge1xuICAgICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5kYXRhU291cmNlLm91dHB1dDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc3VibWl0Jywge1xuICAgICAgICAgICAgc3RhdGU6IGZvcm0uZ2V0U3RhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24ucmVzZXQnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyZXNldCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlR3JvdXAocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbktleVVwRXZlbnRzKCkge1xuICAgIGNvbnN0IGtleXVwJCA9IGZyb21FdmVudCh3aW5kb3csICdrZXl1cCcpO1xuXG4gICAga2V5dXAkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0SW5uZXIoJ3N1Ym1pdCcpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=