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
            template: "<div *ngIf=\"data\" class=\"mr-form-wrapper mr-form-wrapper-accordion\">\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\n        <div class=\"mr-form-wrapper__header\">\n            <n7-facet-header\n            *ngIf=\"group.options\"\n            [data]=\"group.options\"\n            [emit]=\"fakeEmit\"\n            ></n7-facet-header>\n        </div>\n\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper__content\" [attr.id]=\"group.id\">\n            <mr-form [form]=\"data.form\" [group]=\"group\">\n                <!-- CUSTOM INPUTS -->\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\n                    <ng-container [ngSwitch]=\"type\">\n                        \n                        <n7-tag *ngSwitchCase=\"'tag'\" \n                            [data]=\"input.ds.out$ | async\"\n                            [emit]=\"input.emit\"></n7-tag>\n    \n                    </ng-container>\n                </ng-template> -->\n            </mr-form>\n        </div>\n    </ng-container>\n    \n    <div class=\"mr-form-wrapper__actions\">\n        <a class=\"n7-btn n7-btn-danger\" (click)=\"onReset()\">RESET</a>\n        <a class=\"n7-btn n7-btn-info\" (click)=\"onSubmit()\">SUBMIT</a>\n    </div>\n</div>"
        })
    ], MrFormWrapperAccordionComponent);
    return MrFormWrapperAccordionComponent;
}());
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QjtJQUFBO1FBQUEsaUJBbUJDO1FBZEMsYUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLE9BQVE7WUFDeEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO0lBU0gsQ0FBQztJQVBDLGlEQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBakJRO1FBQVIsS0FBSyxFQUFFOztpRUFBa0M7SUFFakM7UUFBUixLQUFLLEVBQUU7O2lFQUE2QztJQUgxQywrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyw0eENBQTRDO1NBQzdDLENBQUM7T0FDVywrQkFBK0IsQ0FtQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XG5cbmV4cG9ydCB0eXBlIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhID0ge1xuICBmb3JtOiBNckZvcm1Nb2RlbDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IGFueSkgPT4gdm9pZDtcblxuICBmYWtlRW1pdCA9ICh0eXBlLCBwYXlsb2FkPykgPT4ge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uUmVzZXQoKSB7XG4gICAgdGhpcy5mYWtlRW1pdCgncmVzZXQnKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZmFrZUVtaXQoJ3N1Ym1pdCcpO1xuICB9XG59XG4iXX0=