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
                template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [hidden]=\"data.datepicker.hidden\"\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDRDQUlDOzs7SUFIRyx3Q0FBZ0I7O0lBQ2hCLDRDQUFnQjs7SUFDaEIseUNBQWM7Ozs7O0FBR2xCLHNCQU9DOzs7SUFORyxxQkFBVzs7SUFDWCx5QkFBZ0I7O0lBQ2hCLHVCQUFjOztJQUNkLHdCQUFjOztJQUNkLHdCQUF3Qjs7SUFDeEIsMEJBQWlCOzs7OztBQUdyQiw2QkFJQzs7O0lBSEcsOEJBQWE7O0lBQ2IsaUNBQWE7O0lBQ2IsaUNBQWlCOztBQU9yQixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUluQyxPQUFPLENBQUMsT0FBTztRQUNYLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBTztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWhCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsMDFCQUF3QzthQUMzQzs7O21CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDBDQUFzQzs7SUFDdEMsMENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlcGlja2VyV3JhcHBlckRhdGEge1xuICAgIHNlbGVjdDogSVNlbGVjdCxcbiAgICBkYXRlcGlja2VyOiBhbnk7XG4gICAgcGF5bG9hZD86IGFueTtcbn1cblxuaW50ZXJmYWNlIElTZWxlY3Qge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgaGlkZGVuOiBib29sZWFuLFxuICAgIGljb24/OiBzdHJpbmcsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBpdGVtczogSURyb3Bkb3duSXRlbXNbXSxcbiAgICBjbGFzc2VzPzogc3RyaW5nLFxufVxuXG5pbnRlcmZhY2UgSURyb3Bkb3duSXRlbXMge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBhbnksXG4gICAgY2xhc3Nlcz86IHN0cmluZyxcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkdi1kYXRlcGlja2VyLXdyYXBwZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50e1xuICAgIEBJbnB1dCgpIGRhdGE6IElEYXRlcGlja2VyV3JhcHBlckRhdGE7XG4gICAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gICAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3BEb3duKHBheWxvYWQpIHtcbiAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ3RvZ2dsZScsIHBheWxvYWQpO1xuICAgIH1cblxufVxuICAiXX0=