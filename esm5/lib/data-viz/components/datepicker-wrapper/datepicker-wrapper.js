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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDRDQUlDOzs7SUFIRyx3Q0FBZ0I7O0lBQ2hCLDRDQUFnQjs7SUFDaEIseUNBQWM7Ozs7O0FBR2xCLHNCQU9DOzs7SUFORyxxQkFBVzs7SUFDWCx5QkFBZ0I7O0lBQ2hCLHVCQUFjOztJQUNkLHdCQUFjOztJQUNkLHdCQUF3Qjs7SUFDeEIsMEJBQWlCOzs7OztBQUdyQiw2QkFJQzs7O0lBSEcsOEJBQWE7O0lBQ2IsaUNBQWE7O0lBQ2IsaUNBQWlCOztBQUdyQjtJQUFBO0lBa0JBLENBQUM7Ozs7O0lBVkcsNENBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDWCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsbURBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZ5QkFBd0M7aUJBQzNDOzs7dUJBRUksS0FBSzt1QkFDTCxLQUFLOztJQVlWLGlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSwwQkFBMEI7OztJQUNuQywwQ0FBc0M7O0lBQ3RDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZXBpY2tlcldyYXBwZXJEYXRhIHtcbiAgICBzZWxlY3Q6IElTZWxlY3QsXG4gICAgZGF0ZXBpY2tlcjogYW55O1xuICAgIHBheWxvYWQ/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJU2VsZWN0IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhpZGRlbjogYm9vbGVhbixcbiAgICBpY29uPzogc3RyaW5nLFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgaXRlbXM6IElEcm9wZG93bkl0ZW1zW10sXG4gICAgY2xhc3Nlcz86IHN0cmluZyxcbn1cblxuaW50ZXJmYWNlIElEcm9wZG93bkl0ZW1zIHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgcGF5bG9hZDogYW55LFxuICAgIGNsYXNzZXM/OiBzdHJpbmcsXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHYtZGF0ZXBpY2tlci13cmFwcGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudHtcbiAgICBASW5wdXQoKSBkYXRhOiBJRGF0ZXBpY2tlcldyYXBwZXJEYXRhO1xuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wRG93bihwYXlsb2FkKSB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCBwYXlsb2FkKTtcbiAgICB9XG5cbn1cbiAgIl19