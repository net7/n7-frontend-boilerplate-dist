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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDJDQUlDOzs7SUFIRyx1Q0FBZTs7SUFDZiwyQ0FBZ0I7O0lBQ2hCLHdDQUFjOzs7OztBQUdsQixxQkFPQzs7O0lBTkcsb0JBQVc7O0lBQ1gsd0JBQWdCOztJQUNoQixzQkFBYzs7SUFDZCx1QkFBYzs7SUFDZCx1QkFBdUI7O0lBQ3ZCLHlCQUFpQjs7Ozs7QUFHckIsNEJBSUM7OztJQUhHLDZCQUFhOztJQUNiLGdDQUFhOztJQUNiLGdDQUFpQjs7QUFPckIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFLbkMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQU87UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFqQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDIwQkFBd0M7YUFDekM7OzttQkFFSSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiwwQ0FBcUM7O0lBRXJDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlcldyYXBwZXJEYXRhIHtcclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG4gICAgZGF0ZXBpY2tlcjogYW55O1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBpdGVtczogRHJvcGRvd25JdGVtc1tdO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIERyb3Bkb3duSXRlbXMge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdi1kYXRlcGlja2VyLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXdyYXBwZXIuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRlcGlja2VyV3JhcHBlckRhdGE7XHJcblxyXG4gICAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRHJvcERvd24ocGF5bG9hZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZScsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==