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
            template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \n            class=\"mr-form-wrapper-accordion__header\">\n            <n7-facet-header\n                [data]=\"group.options\"\n                [emit]=\"fakeEmit\"\n            ></n7-facet-header>\n        </div>\n\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\n            <mr-form [form]=\"data.form\" [group]=\"group\">\n                <!-- CUSTOM INPUTS -->\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\n                    <ng-container [ngSwitch]=\"type\">\n                        \n                        <n7-tag *ngSwitchCase=\"'tag'\" \n                            [data]=\"input.ds.out$ | async\"\n                            [emit]=\"input.emit\"></n7-tag>\n    \n                    </ng-container>\n                </ng-template> -->\n            </mr-form>\n        </div>\n    </ng-container>\n    \n    <div class=\"mr-form-wrapper-accordion__actions\">\n        <a *ngIf=\"data.form.config.resetButton\" \n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\n        <a *ngIf=\"data.form.config.submitButton\" \n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\n    </div>\n</div>"
        })
    ], MrFormWrapperAccordionComponent);
    return MrFormWrapperAccordionComponent;
}());
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QjtJQUFBO1FBQUEsaUJBMkJDO1FBZEMsYUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLE9BQVE7WUFDeEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO0lBU0gsQ0FBQztJQXRCQyxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQscURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVNELGlEQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBekJRO1FBQVIsS0FBSyxFQUFFOztpRUFBa0M7SUFFakM7UUFBUixLQUFLLEVBQUU7O2lFQUE2QztJQUgxQywrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyx1a0RBQTRDO1NBQzdDLENBQUM7T0FDVywrQkFBK0IsQ0EyQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xuXG5leHBvcnQgdHlwZSBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YSA9IHtcbiAgZm9ybTogTXJGb3JtTW9kZWw7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS13cmFwcGVyLWFjY29yZGlvbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGF0YTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IGFueSkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZha2VFbWl0KCdpbml0Jyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZha2VFbWl0KCdkZXN0cm95Jyk7XG4gIH1cblxuICBmYWtlRW1pdCA9ICh0eXBlLCBwYXlsb2FkPykgPT4ge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uUmVzZXQoKSB7XG4gICAgdGhpcy5mYWtlRW1pdCgncmVzZXQnKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZmFrZUVtaXQoJ3N1Ym1pdCcpO1xuICB9XG59XG4iXX0=