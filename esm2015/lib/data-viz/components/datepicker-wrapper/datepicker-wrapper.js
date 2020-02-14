/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/components/datepicker-wrapper/datepicker-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IDatepickerWrapperData() { }
if (false) {
    /** @type {?} */
    IDatepickerWrapperData.prototype.select;
    /** @type {?} */
    IDatepickerWrapperData.prototype.datepicker;
    /** @type {?|undefined} */
    IDatepickerWrapperData.prototype.payload;
}
/**
 * @record
 */
function ISelect() { }
if (false) {
    /** @type {?} */
    ISelect.prototype.id;
    /** @type {?} */
    ISelect.prototype.hidden;
    /** @type {?|undefined} */
    ISelect.prototype.icon;
    /** @type {?} */
    ISelect.prototype.label;
    /** @type {?} */
    ISelect.prototype.items;
    /** @type {?|undefined} */
    ISelect.prototype.classes;
}
/**
 * @record
 */
function IDropdownItems() { }
if (false) {
    /** @type {?} */
    IDropdownItems.prototype.text;
    /** @type {?} */
    IDropdownItems.prototype.payload;
    /** @type {?|undefined} */
    IDropdownItems.prototype.classes;
}
export class DatepickerWrapperComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    toggleDropDown(payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    }
}
DatepickerWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-datepicker-wrapper',
                template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\r\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\r\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\r\n        <span class=\"{{data.select.icon}}\"></span>\r\n    </div>\r\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\r\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\r\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\r\n        </ul>\r\n    </div>\r\n    <n7-datepicker\r\n        [data]=\"data.datepicker.data\"\r\n        [emit]=\"emit\">\r\n    </n7-datepicker>\r\n</div>\r\n"
            }] }
];
DatepickerWrapperComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatepickerWrapperComponent.prototype.data;
    /** @type {?} */
    DatepickerWrapperComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDRDQUlDOzs7SUFIRyx3Q0FBZ0I7O0lBQ2hCLDRDQUFnQjs7SUFDaEIseUNBQWM7Ozs7O0FBR2xCLHNCQU9DOzs7SUFORyxxQkFBVzs7SUFDWCx5QkFBZ0I7O0lBQ2hCLHVCQUFjOztJQUNkLHdCQUFjOztJQUNkLHdCQUF3Qjs7SUFDeEIsMEJBQWlCOzs7OztBQUdyQiw2QkFJQzs7O0lBSEcsOEJBQWE7O0lBQ2IsaUNBQWE7O0lBQ2IsaUNBQWlCOztBQU9yQixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUluQyxPQUFPLENBQUMsT0FBTztRQUNYLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBTztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWhCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsMjBCQUF3QzthQUMzQzs7O21CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDBDQUFzQzs7SUFDdEMsMENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZXBpY2tlcldyYXBwZXJEYXRhIHtcclxuICAgIHNlbGVjdDogSVNlbGVjdCxcclxuICAgIGRhdGVwaWNrZXI6IGFueTtcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU2VsZWN0IHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBoaWRkZW46IGJvb2xlYW4sXHJcbiAgICBpY29uPzogc3RyaW5nLFxyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIGl0ZW1zOiBJRHJvcGRvd25JdGVtc1tdLFxyXG4gICAgY2xhc3Nlcz86IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElEcm9wZG93bkl0ZW1zIHtcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHBheWxvYWQ6IGFueSxcclxuICAgIGNsYXNzZXM/OiBzdHJpbmcsXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkdi1kYXRlcGlja2VyLXdyYXBwZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgZGF0YTogSURhdGVwaWNrZXJXcmFwcGVyRGF0YTtcclxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURyb3BEb3duKHBheWxvYWQpIHtcclxuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCBwYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbn1cclxuICAiXX0=