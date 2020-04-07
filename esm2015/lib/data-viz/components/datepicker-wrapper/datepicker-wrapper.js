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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDJDQUlDOzs7SUFIRyx1Q0FBZTs7SUFDZiwyQ0FBZ0I7O0lBQ2hCLHdDQUFjOzs7OztBQUdsQixxQkFPQzs7O0lBTkcsb0JBQVc7O0lBQ1gsd0JBQWdCOztJQUNoQixzQkFBYzs7SUFDZCx1QkFBYzs7SUFDZCx1QkFBdUI7O0lBQ3ZCLHlCQUFpQjs7Ozs7QUFHckIsNEJBSUM7OztJQUhHLDZCQUFhOztJQUNiLGdDQUFhOztJQUNiLGdDQUFpQjs7QUFPckIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFLbkMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQU87UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFqQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDZ5QkFBd0M7YUFDekM7OzttQkFFSSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiwwQ0FBcUM7O0lBRXJDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyV3JhcHBlckRhdGEge1xuICAgIHNlbGVjdDogU2VsZWN0O1xuICAgIGRhdGVwaWNrZXI6IGFueTtcbiAgICBwYXlsb2FkPzogYW55O1xufVxuXG5pbnRlcmZhY2UgU2VsZWN0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGhpZGRlbjogYm9vbGVhbjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaXRlbXM6IERyb3Bkb3duSXRlbXNbXTtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRHJvcGRvd25JdGVtcyB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi1kYXRlcGlja2VyLXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogRGF0ZXBpY2tlcldyYXBwZXJEYXRhO1xuXG4gICAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gICAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3BEb3duKHBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZScsIHBheWxvYWQpO1xuICAgIH1cbn1cbiJdfQ==