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
        template: "<div *ngIf=\"data\" class=\"mr-form-wrapper mr-form-wrapper-accordion\">\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\n        <div class=\"mr-form-wrapper__header\">\n            <n7-facet-header\n            *ngIf=\"group.options\"\n            [data]=\"group.options\"\n            [emit]=\"fakeEmit\"\n            ></n7-facet-header>\n        </div>\n\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper__content\" [attr.id]=\"group.id\">\n            <mr-form [form]=\"data.form\" [group]=\"group\">\n                <!-- CUSTOM INPUTS -->\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\n                    <ng-container [ngSwitch]=\"type\">\n                        \n                        <n7-tag *ngSwitchCase=\"'tag'\" \n                            [data]=\"input.ds.out$ | async\"\n                            [emit]=\"input.emit\"></n7-tag>\n    \n                    </ng-container>\n                </ng-template> -->\n            </mr-form>\n        </div>\n    </ng-container>\n    \n    <div class=\"mr-form-wrapper__actions\">\n        <a class=\"n7-btn n7-btn-danger\" (click)=\"onReset()\">RESET</a>\n        <a class=\"n7-btn n7-btn-info\" (click)=\"onSubmit()\">SUBMIT</a>\n    </div>\n</div>"
    })
], MrFormWrapperAccordionComponent);
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQUtFLGFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7SUFTSCxDQUFDO0lBUEMsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBbEJVO0lBQVIsS0FBSyxFQUFFOzs2REFBa0M7QUFFakM7SUFBUixLQUFLLEVBQUU7OzZEQUE2QztBQUgxQywrQkFBK0I7SUFKM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyw0eENBQTRDO0tBQzdDLENBQUM7R0FDVywrQkFBK0IsQ0FtQjNDO1NBbkJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcblxuZXhwb3J0IHR5cGUgTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEgPSB7XG4gIGZvcm06IE1yRm9ybU1vZGVsO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0td3JhcHBlci1hY2NvcmRpb24uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xuXG4gIGZha2VFbWl0ID0gKHR5cGUsIHBheWxvYWQ/KSA9PiB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLmZha2VFbWl0KCdyZXNldCcpO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5mYWtlRW1pdCgnc3VibWl0Jyk7XG4gIH1cbn1cbiJdfQ==