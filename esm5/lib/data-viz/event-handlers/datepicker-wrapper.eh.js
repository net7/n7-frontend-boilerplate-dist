/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var DvDatepickerWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(DvDatepickerWrapperEH, _super);
    function DvDatepickerWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DvDatepickerWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'dv-datepicker-wrapper.click':
                    _this.dataSource.setLabel(payload);
                    if (payload === "ByDate") {
                        _this.dataSource.openDatepicker();
                    }
                    else {
                        _this.dataSource.closeDatepicker();
                    }
                    break;
                case 'dv-datepicker-wrapper.toggle':
                    _this.dataSource.toggleDropDown();
                    break;
                case 'dv-datepicker-wrapper.change':
                    _this.dataSource.setLabel(payload.dateStr);
                    break;
            }
        }));
    };
    return DvDatepickerWrapperEH;
}(EventHandler));
export { DvDatepickerWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2V2ZW50LWhhbmRsZXJzL2RhdGVwaWNrZXItd3JhcHBlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUEyQyxpREFBWTtJQUF2RDs7SUFxQkEsQ0FBQzs7OztJQXBCVSxzQ0FBTTs7O0lBQWI7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDeEMsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw2QkFBNkI7b0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxJQUFHLE9BQU8sS0FBSyxRQUFRLEVBQUU7d0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQ2xDO3lCQUFLO3dCQUNKLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQ25DO29CQUNELE1BQU07Z0JBQ1IsS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDVCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBckJELENBQTJDLFlBQVksR0FxQnREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExhYmVsKHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGlmKHBheWxvYWQgPT09IFwiQnlEYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vcGVuRGF0ZXBpY2tlcigpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZURhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci50b2dnbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEcm9wRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGFiZWwocGF5bG9hZC5kYXRlU3RyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG59Il19