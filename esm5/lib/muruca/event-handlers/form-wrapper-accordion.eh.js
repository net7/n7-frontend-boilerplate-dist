import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrFormWrapperAccordionEH = /** @class */ (function (_super) {
    __extends(MrFormWrapperAccordionEH, _super);
    function MrFormWrapperAccordionEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrFormWrapperAccordionEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-form-wrapper-accordion.submit': {
                    var form = _this.dataSource.output.form;
                    _this.emitOuter('submit', {
                        state: form.getState()
                    });
                    break;
                }
                case 'mr-form-wrapper-accordion.reset':
                    _this.dataSource.onReset();
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
    return MrFormWrapperAccordionEH;
}(EventHandler));
export { MrFormWrapperAccordionEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pEO0lBQThDLDRDQUFZO0lBQTFEOztJQXlCQSxDQUFDO0lBdEJRLHlDQUFNLEdBQWI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUMvQixJQUFBLG1DQUFJLENBQTRCO29CQUN4QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNELEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBOEMsWUFBWSxHQXlCekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMnO1xuXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgZGF0YVNvdXJjZTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRTO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0Jzoge1xuICAgICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5kYXRhU291cmNlLm91dHB1dDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc3VibWl0Jywge1xuICAgICAgICAgICAgc3RhdGU6IGZvcm0uZ2V0U3RhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24ucmVzZXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblJlc2V0KCk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3Jlc2V0Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19