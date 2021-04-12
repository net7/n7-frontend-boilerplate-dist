import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DatepickerWrapperComponent = class DatepickerWrapperComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    toggleDropDown(payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerWrapperComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerWrapperComponent.prototype, "emit", void 0);
DatepickerWrapperComponent = __decorate([
    Component({
        selector: 'dv-datepicker-wrapper',
        template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\r\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\r\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\r\n        <span class=\"{{data.select.icon}}\"></span>\r\n    </div>\r\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\r\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\r\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\r\n        </ul>\r\n    </div>\r\n    <n7-datepicker\r\n        [data]=\"data.datepicker.data\"\r\n        [emit]=\"emit\">\r\n    </n7-datepicker>\r\n</div>\r\n"
    })
], DatepickerWrapperComponent);
export { DatepickerWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQmpELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBS25DLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQU87UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0osQ0FBQTtBQWJZO0lBQVIsS0FBSyxFQUFFOzt3REFBNkI7QUFFNUI7SUFBUixLQUFLLEVBQUU7O3dEQUFXO0FBSFYsMEJBQTBCO0lBSnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsMjBCQUF3QztLQUN6QyxDQUFDO0dBQ1csMEJBQTBCLENBY3RDO1NBZFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyV3JhcHBlckRhdGEge1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcbiAgICBkYXRlcGlja2VyOiBhbnk7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGl0ZW1zOiBEcm9wZG93bkl0ZW1zW107XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcGRvd25JdGVtcyB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IERhdGVwaWNrZXJXcmFwcGVyRGF0YTtcclxuXHJcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEcm9wRG93bihwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuIl19