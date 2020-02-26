/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/event-handlers/datepicker-wrapper.eh.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2V2ZW50LWhhbmRsZXJzL2RhdGVwaWNrZXItd3JhcHBlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBMkMsaURBQVk7SUFBdkQ7O0lBcUJBLENBQUM7Ozs7SUFwQlUsc0NBQU07OztJQUFiO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQ3hDLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssNkJBQTZCO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsSUFBRyxPQUFPLEtBQUssUUFBUSxFQUFFO3dCQUN2QixLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUNsQzt5QkFBSzt3QkFDSixLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUEyQyxZQUFZLEdBcUJ0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RGF0ZXBpY2tlcldyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRMYWJlbChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBpZihwYXlsb2FkID09PSBcIkJ5RGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3BlbkRhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VEYXRlcGlja2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIudG9nZ2xlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRHJvcERvd24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnZHYtZGF0ZXBpY2tlci13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExhYmVsKHBheWxvYWQuZGF0ZVN0cik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==