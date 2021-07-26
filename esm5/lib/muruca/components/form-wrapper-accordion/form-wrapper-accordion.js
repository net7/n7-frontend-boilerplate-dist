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
    MrFormWrapperAccordionComponent.prototype.ngOnInit = function () {
        this.fakeEmit('init');
    };
    MrFormWrapperAccordionComponent.prototype.ngOnDestroy = function () {
        this.fakeEmit('destroy');
    };
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
            template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>"
        })
    ], MrFormWrapperAccordionComponent);
    return MrFormWrapperAccordionComponent;
}());
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QjtJQUFBO1FBQUEsaUJBMkJDO1FBZEMsYUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLE9BQVE7WUFDeEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO0lBU0gsQ0FBQztJQXRCQyxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQscURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVNELGlEQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBekJRO1FBQVIsS0FBSyxFQUFFOztpRUFBa0M7SUFFakM7UUFBUixLQUFLLEVBQUU7O2lFQUE2QztJQUgxQywrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQywyb0RBQTRDO1NBQzdDLENBQUM7T0FDVywrQkFBK0IsQ0EyQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEgPSB7XHJcbiAgZm9ybTogTXJGb3JtTW9kZWw7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0td3JhcHBlci1hY2NvcmRpb24uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ2luaXQnKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgnZGVzdHJveScpO1xyXG4gIH1cclxuXHJcbiAgZmFrZUVtaXQgPSAodHlwZSwgcGF5bG9hZD8pID0+IHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCh0eXBlLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uUmVzZXQoKSB7XHJcbiAgICB0aGlzLmZha2VFbWl0KCdyZXNldCcpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICB0aGlzLmZha2VFbWl0KCdzdWJtaXQnKTtcclxuICB9XHJcbn1cclxuIl19