import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DatepickerWrapperComponent = /** @class */ (function () {
    function DatepickerWrapperComponent() {
    }
    DatepickerWrapperComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    DatepickerWrapperComponent.prototype.toggleDropDown = function (payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
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
    return DatepickerWrapperComponent;
}());
export { DatepickerWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQmpEO0lBQUE7SUFjQSxDQUFDO0lBVEcsNENBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxtREFBYyxHQUFkLFVBQWUsT0FBTztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFaUTtRQUFSLEtBQUssRUFBRTs7NERBQTZCO0lBRTVCO1FBQVIsS0FBSyxFQUFFOzs0REFBVztJQUhWLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLDIwQkFBd0M7U0FDekMsQ0FBQztPQUNXLDBCQUEwQixDQWN0QztJQUFELGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyV3JhcHBlckRhdGEge1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcbiAgICBkYXRlcGlja2VyOiBhbnk7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGl0ZW1zOiBEcm9wZG93bkl0ZW1zW107XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcGRvd25JdGVtcyB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IERhdGVwaWNrZXJXcmFwcGVyRGF0YTtcclxuXHJcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEcm9wRG93bihwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuIl19