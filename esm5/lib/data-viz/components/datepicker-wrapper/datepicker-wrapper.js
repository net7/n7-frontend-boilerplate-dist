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
                    template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDJDQUlDOzs7SUFIRyx1Q0FBZTs7SUFDZiwyQ0FBZ0I7O0lBQ2hCLHdDQUFjOzs7OztBQUdsQixxQkFPQzs7O0lBTkcsb0JBQVc7O0lBQ1gsd0JBQWdCOztJQUNoQixzQkFBYzs7SUFDZCx1QkFBYzs7SUFDZCx1QkFBdUI7O0lBQ3ZCLHlCQUFpQjs7Ozs7QUFHckIsNEJBSUM7OztJQUhHLDZCQUFhOztJQUNiLGdDQUFhOztJQUNiLGdDQUFpQjs7QUFHckI7SUFBQTtJQWtCQSxDQUFDOzs7OztJQVRHLDRDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyw2eUJBQXdDO2lCQUN6Qzs7O3VCQUVJLEtBQUs7dUJBRUwsS0FBSzs7SUFXVixpQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBZFksMEJBQTBCOzs7SUFDbkMsMENBQXFDOztJQUVyQywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlcldyYXBwZXJEYXRhIHtcbiAgICBzZWxlY3Q6IFNlbGVjdDtcbiAgICBkYXRlcGlja2VyOiBhbnk7XG4gICAgcGF5bG9hZD86IGFueTtcbn1cblxuaW50ZXJmYWNlIFNlbGVjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBoaWRkZW46IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGl0ZW1zOiBEcm9wZG93bkl0ZW1zW107XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERyb3Bkb3duSXRlbXMge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtZGF0ZXBpY2tlci13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IERhdGVwaWNrZXJXcmFwcGVyRGF0YTtcblxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wRG93bihwYXlsb2FkKSB7XG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCBwYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=