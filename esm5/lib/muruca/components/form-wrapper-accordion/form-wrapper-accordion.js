import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var MrFormWrapperAccordionComponent = /** @class */ (function () {
    function MrFormWrapperAccordionComponent() {
        var _this = this;
        this.fakeEmit = function (type, payload) {
            if (!_this.emit) {
                return;
            }
            _this.emit(type, payload);
        };
    }
    MrFormWrapperAccordionComponent.prototype.onReset = function () {
        this.fakeEmit('reset');
    };
    MrFormWrapperAccordionComponent.prototype.onSubmit = function () {
        this.fakeEmit('submit');
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
            template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n            *ngIf=\"group.options\"\r\n            [data]=\"group.options\"\r\n            [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>"
        })
    ], MrFormWrapperAccordionComponent);
    return MrFormWrapperAccordionComponent;
}());
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QjtJQUFBO1FBQUEsaUJBbUJDO1FBZEMsYUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLE9BQVE7WUFDeEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO0lBU0gsQ0FBQztJQVBDLGlEQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBakJRO1FBQVIsS0FBSyxFQUFFOztpRUFBa0M7SUFFakM7UUFBUixLQUFLLEVBQUU7O2lFQUE2QztJQUgxQywrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQywyakRBQTRDO1NBQzdDLENBQUM7T0FDVywrQkFBK0IsQ0FtQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XHJcblxyXG5leHBvcnQgdHlwZSBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YSA9IHtcclxuICBmb3JtOiBNckZvcm1Nb2RlbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS13cmFwcGVyLWFjY29yZGlvbi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xyXG5cclxuICBmYWtlRW1pdCA9ICh0eXBlLCBwYXlsb2FkPykgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25SZXNldCgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ3Jlc2V0Jyk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ3N1Ym1pdCcpO1xyXG4gIH1cclxufVxyXG4iXX0=