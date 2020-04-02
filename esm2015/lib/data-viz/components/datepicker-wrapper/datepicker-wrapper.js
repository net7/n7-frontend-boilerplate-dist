/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakQsMkNBSUM7OztJQUhHLHVDQUFlOztJQUNmLDJDQUFnQjs7SUFDaEIsd0NBQWM7Ozs7O0FBR2xCLHFCQU9DOzs7SUFORyxvQkFBVzs7SUFDWCx3QkFBZ0I7O0lBQ2hCLHNCQUFjOztJQUNkLHVCQUFjOztJQUNkLHVCQUF1Qjs7SUFDdkIseUJBQWlCOzs7OztBQUdyQiw0QkFJQzs7O0lBSEcsNkJBQWE7O0lBQ2IsZ0NBQWE7O0lBQ2IsZ0NBQWlCOztBQU9yQixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUtuQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBTztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNnlCQUF3QzthQUN6Qzs7O21CQUVJLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDBDQUFxQzs7SUFFckMsMENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJXcmFwcGVyRGF0YSB7XG4gICAgc2VsZWN0OiBTZWxlY3Q7XG4gICAgZGF0ZXBpY2tlcjogYW55O1xuICAgIHBheWxvYWQ/OiBhbnk7XG59XG5cbmludGVyZmFjZSBTZWxlY3Qge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaGlkZGVuOiBib29sZWFuO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBpdGVtczogRHJvcGRvd25JdGVtc1tdO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEcm9wZG93bkl0ZW1zIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRlcGlja2VyV3JhcHBlckRhdGE7XG5cbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcERvd24ocGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgcGF5bG9hZCk7XG4gICAgfVxufVxuIl19