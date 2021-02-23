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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pEO0lBQThDLDRDQUFZO0lBQTFEOztJQXdCQSxDQUFDO0lBckJRLHlDQUFNLEdBQWI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUMvQixJQUFBLG1DQUFJLENBQTRCO29CQUN4QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNELEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBOEMsWUFBWSxHQXdCekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0Jzoge1xyXG4gICAgICAgICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLmRhdGFTb3VyY2Uub3V0cHV0O1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3N1Ym1pdCcsIHtcclxuICAgICAgICAgICAgc3RhdGU6IGZvcm0uZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5yZXNldCc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncmVzZXQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19