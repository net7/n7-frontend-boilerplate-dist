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
            template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
        })
    ], DatepickerWrapperComponent);
    return DatepickerWrapperComponent;
}());
export { DatepickerWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUEyQmpEO0lBQUE7SUFjQSxDQUFDO0lBVEcsNENBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxtREFBYyxHQUFkLFVBQWUsT0FBTztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFaUTtRQUFSLEtBQUssRUFBRTs7NERBQTZCO0lBRTVCO1FBQVIsS0FBSyxFQUFFOzs0REFBVztJQUhWLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLDZ5QkFBd0M7U0FDekMsQ0FBQztPQUNXLDBCQUEwQixDQWN0QztJQUFELGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJXcmFwcGVyRGF0YSB7XG4gICAgc2VsZWN0OiBTZWxlY3Q7XG4gICAgZGF0ZXBpY2tlcjogYW55O1xuICAgIHBheWxvYWQ/OiBhbnk7XG59XG5cbmludGVyZmFjZSBTZWxlY3Qge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaGlkZGVuOiBib29sZWFuO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBpdGVtczogRHJvcGRvd25JdGVtc1tdO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEcm9wZG93bkl0ZW1zIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRlcGlja2VyV3JhcHBlckRhdGE7XG5cbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcERvd24ocGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgcGF5bG9hZCk7XG4gICAgfVxufVxuIl19