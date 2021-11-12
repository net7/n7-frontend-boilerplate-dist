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
    ngOnInit() {
        this.fakeEmit('init');
    }
    ngOnDestroy() {
        this.fakeEmit('destroy');
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
        template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>"
    })
], MrFormWrapperAccordionComponent);
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQWFFLGFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7SUFTSCxDQUFDO0lBdEJDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBU0QsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBMUJVO0lBQVIsS0FBSyxFQUFFOzs2REFBa0M7QUFFakM7SUFBUixLQUFLLEVBQUU7OzZEQUE2QztBQUgxQywrQkFBK0I7SUFKM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQywyb0RBQTRDO0tBQzdDLENBQUM7R0FDVywrQkFBK0IsQ0EyQjNDO1NBM0JZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XHJcblxyXG5leHBvcnQgdHlwZSBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YSA9IHtcclxuICBmb3JtOiBNckZvcm1Nb2RlbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS13cmFwcGVyLWFjY29yZGlvbi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZGF0YTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpID0+IHZvaWQ7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgnaW5pdCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmZha2VFbWl0KCdkZXN0cm95Jyk7XHJcbiAgfVxyXG5cclxuICBmYWtlRW1pdCA9ICh0eXBlLCBwYXlsb2FkPykgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25SZXNldCgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ3Jlc2V0Jyk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ3N1Ym1pdCcpO1xyXG4gIH1cclxufVxyXG4iXX0=