/**
 * @fileoverview added by tsickle
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
                template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakQsNENBSUM7OztJQUhHLHdDQUFnQjs7SUFDaEIsNENBQWdCOztJQUNoQix5Q0FBYzs7Ozs7QUFHbEIsc0JBT0M7OztJQU5HLHFCQUFXOztJQUNYLHlCQUFnQjs7SUFDaEIsdUJBQWM7O0lBQ2Qsd0JBQWM7O0lBQ2Qsd0JBQXdCOztJQUN4QiwwQkFBaUI7Ozs7O0FBR3JCLDZCQUlDOzs7SUFIRyw4QkFBYTs7SUFDYixpQ0FBYTs7SUFDYixpQ0FBaUI7O0FBT3JCLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBSW5DLE9BQU8sQ0FBQyxPQUFPO1FBQ1gsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBaEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2eUJBQXdDO2FBQzNDOzs7bUJBRUksS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sMENBQXNDOztJQUN0QywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVwaWNrZXJXcmFwcGVyRGF0YSB7XG4gICAgc2VsZWN0OiBJU2VsZWN0LFxuICAgIGRhdGVwaWNrZXI6IGFueTtcbiAgICBwYXlsb2FkPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSVNlbGVjdCB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoaWRkZW46IGJvb2xlYW4sXG4gICAgaWNvbj86IHN0cmluZyxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGl0ZW1zOiBJRHJvcGRvd25JdGVtc1tdLFxuICAgIGNsYXNzZXM/OiBzdHJpbmcsXG59XG5cbmludGVyZmFjZSBJRHJvcGRvd25JdGVtcyB7XG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHBheWxvYWQ6IGFueSxcbiAgICBjbGFzc2VzPzogc3RyaW5nLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnR7XG4gICAgQElucHV0KCkgZGF0YTogSURhdGVwaWNrZXJXcmFwcGVyRGF0YTtcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcERvd24ocGF5bG9hZCkge1xuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgcGF5bG9hZCk7XG4gICAgfVxuXG59XG4gICJdfQ==