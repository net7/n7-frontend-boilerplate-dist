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
        template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \n            class=\"mr-form-wrapper-accordion__header\">\n            <n7-facet-header\n                [data]=\"group.options\"\n                [emit]=\"fakeEmit\"\n            ></n7-facet-header>\n        </div>\n\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\n            <mr-form [form]=\"data.form\" [group]=\"group\">\n                <!-- CUSTOM INPUTS -->\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\n                    <ng-container [ngSwitch]=\"type\">\n                        \n                        <n7-tag *ngSwitchCase=\"'tag'\" \n                            [data]=\"input.ds.out$ | async\"\n                            [emit]=\"input.emit\"></n7-tag>\n    \n                    </ng-container>\n                </ng-template> -->\n            </mr-form>\n        </div>\n    </ng-container>\n    \n    <div class=\"mr-form-wrapper-accordion__actions\">\n        <a *ngIf=\"data.form.config.resetButton\" \n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\n        <a *ngIf=\"data.form.config.submitButton\" \n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\n    </div>\n</div>"
    })
], MrFormWrapperAccordionComponent);
export { MrFormWrapperAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQztBQVd2QixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQWFFLGFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7SUFTSCxDQUFDO0lBdEJDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBU0QsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBMUJVO0lBQVIsS0FBSyxFQUFFOzs2REFBa0M7QUFFakM7SUFBUixLQUFLLEVBQUU7OzZEQUE2QztBQUgxQywrQkFBK0I7SUFKM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyx1a0RBQTRDO0tBQzdDLENBQUM7R0FDVywrQkFBK0IsQ0EyQjNDO1NBM0JZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XG5cbmV4cG9ydCB0eXBlIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhID0ge1xuICBmb3JtOiBNckZvcm1Nb2RlbDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkYXRhOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmFrZUVtaXQoJ2luaXQnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZmFrZUVtaXQoJ2Rlc3Ryb3knKTtcbiAgfVxuXG4gIGZha2VFbWl0ID0gKHR5cGUsIHBheWxvYWQ/KSA9PiB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLmZha2VFbWl0KCdyZXNldCcpO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5mYWtlRW1pdCgnc3VibWl0Jyk7XG4gIH1cbn1cbiJdfQ==