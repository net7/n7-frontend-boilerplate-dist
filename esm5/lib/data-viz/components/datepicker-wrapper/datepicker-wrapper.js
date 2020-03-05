/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/components/datepicker-wrapper/datepicker-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function DatepickerWrapperData() { }
if (false) {
    /** @type {?} */
    DatepickerWrapperData.prototype.select;
    /** @type {?} */
    DatepickerWrapperData.prototype.datepicker;
    /** @type {?|undefined} */
    DatepickerWrapperData.prototype.payload;
}
/**
 * @record
 */
function Select() { }
if (false) {
    /** @type {?} */
    Select.prototype.id;
    /** @type {?} */
    Select.prototype.hidden;
    /** @type {?|undefined} */
    Select.prototype.icon;
    /** @type {?} */
    Select.prototype.label;
    /** @type {?} */
    Select.prototype.items;
    /** @type {?|undefined} */
    Select.prototype.classes;
}
/**
 * @record
 */
function DropdownItems() { }
if (false) {
    /** @type {?} */
    DropdownItems.prototype.text;
    /** @type {?} */
    DropdownItems.prototype.payload;
    /** @type {?|undefined} */
    DropdownItems.prototype.classes;
}
var DatepickerWrapperComponent = /** @class */ (function () {
    function DatepickerWrapperComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DatepickerWrapperComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    DatepickerWrapperComponent.prototype.toggleDropDown = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    };
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
    return DatepickerWrapperComponent;
}());
export { DatepickerWrapperComponent };
if (false) {
    /** @type {?} */
    DatepickerWrapperComponent.prototype.data;
    /** @type {?} */
    DatepickerWrapperComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDJDQUlDOzs7SUFIRyx1Q0FBZTs7SUFDZiwyQ0FBZ0I7O0lBQ2hCLHdDQUFjOzs7OztBQUdsQixxQkFPQzs7O0lBTkcsb0JBQVc7O0lBQ1gsd0JBQWdCOztJQUNoQixzQkFBYzs7SUFDZCx1QkFBYzs7SUFDZCx1QkFBdUI7O0lBQ3ZCLHlCQUFpQjs7Ozs7QUFHckIsNEJBSUM7OztJQUhHLDZCQUFhOztJQUNiLGdDQUFhOztJQUNiLGdDQUFpQjs7QUFHckI7SUFBQTtJQWtCQSxDQUFDOzs7OztJQVRHLDRDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywyMEJBQXdDO2lCQUN6Qzs7O3VCQUVJLEtBQUs7dUJBRUwsS0FBSzs7SUFXVixpQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBZFksMEJBQTBCOzs7SUFDbkMsMENBQXFDOztJQUVyQywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJXcmFwcGVyRGF0YSB7XHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuICAgIGRhdGVwaWNrZXI6IGFueTtcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3Qge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgaXRlbXM6IERyb3Bkb3duSXRlbXNbXTtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEcm9wZG93bkl0ZW1zIHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHYtZGF0ZXBpY2tlci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZGF0YTogRGF0ZXBpY2tlcldyYXBwZXJEYXRhO1xyXG5cclxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURyb3BEb3duKHBheWxvYWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=