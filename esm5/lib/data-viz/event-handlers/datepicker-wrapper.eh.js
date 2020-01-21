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
                    _this.dataSource.setLabel(payload);
                    break;
            }
        }));
    };
    return DvDatepickerWrapperEH;
}(EventHandler));
export { DvDatepickerWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2V2ZW50LWhhbmRsZXJzL2RhdGVwaWNrZXItd3JhcHBlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUEyQyxpREFBWTtJQUF2RDs7SUFvQkEsQ0FBQzs7OztJQW5CVSxzQ0FBTTs7O0lBQWI7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDeEMsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUcsT0FBTyxLQUFLLFFBQVEsRUFBRTt3QkFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDbEM7eUJBQUs7d0JBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDbkM7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUEyQyxZQUFZLEdBb0J0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RGF0ZXBpY2tlcldyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgICAgICAgIGlmKHBheWxvYWQgPT09IFwiQnlEYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vcGVuRGF0ZXBpY2tlcigpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZURhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci50b2dnbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEcm9wRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGFiZWwocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==