import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MrFormWrapperAccordionComponent = class MrFormWrapperAccordionComponent {
    constructor() {
        this.fakeEmit = (type, payload) => {
            if (!this.emit) {
                return;
            }
            this.emit(type, payload);
        };
    }
    onReset() {
        this.fakeEmit('reset');
    }
    onSubmit() {
        this.fakeEmit('submit');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrFormWrapperAccordionComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrFormWrapperAccordionComponent.prototype, "emit", void 0);
MrFormWrapperAccordionComponent = __decorate([
    Component({
        selector: 'mr-form-wrapper-accordion',
        template: "<div *ngIf=\"data\" class=\"mr-form-wrapper mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div class=\"mr-form-wrapper__header\">\r\n            <n7-facet-header\r\n            *ngIf=\"group.options\"\r\n            [data]=\"group.options\"\r\n            [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper__actions\">\r\n        <a class=\"n7-btn n7-btn-danger\" (click)=\"onReset()\">RESET</a>\r\n        <a class=\"n7-btn n7-btn-info\" (click)=\"onSubmit()\">SUBMIT</a>\r\n    </div>\r\n</div>"
    })
], MrFormWrapperAccordionComponent);
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQUtFLGFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7SUFTSCxDQUFDO0lBUEMsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBbEJVO0lBQVIsS0FBSyxFQUFFOzs2REFBa0M7QUFFakM7SUFBUixLQUFLLEVBQUU7OzZEQUE2QztBQUgxQywrQkFBK0I7SUFKM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyx3MUNBQTRDO0tBQzdDLENBQUM7R0FDVywrQkFBK0IsQ0FtQjNDO1NBbkJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhID0ge1xyXG4gIGZvcm06IE1yRm9ybU1vZGVsO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpID0+IHZvaWQ7XHJcblxyXG4gIGZha2VFbWl0ID0gKHR5cGUsIHBheWxvYWQ/KSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvblJlc2V0KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgncmVzZXQnKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgnc3VibWl0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==