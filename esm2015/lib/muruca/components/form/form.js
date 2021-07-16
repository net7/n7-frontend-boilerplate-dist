import { __decorate, __metadata } from "tslib";
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
import { MrFormModel } from '../../models/form.model';
let MrFormComponent = class MrFormComponent {
    ngOnInit() {
        if (this.group) {
            this.sections = this.form.config.sections
                .filter(({ id }) => this.group.sections.includes(id));
        }
        else {
            this.sections = this.form.config.sections;
        }
        // translations
        this.sections = this.sections.map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title), description: _t(section.description) })));
    }
};
__decorate([
    Input(),
    __metadata("design:type", MrFormModel)
], MrFormComponent.prototype, "form", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrFormComponent.prototype, "group", void 0);
__decorate([
    ContentChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], MrFormComponent.prototype, "templateRef", void 0);
MrFormComponent = __decorate([
    Component({
        selector: 'mr-form',
        template: "<div *ngIf=\"form.loaded$ | async\" class=\"mr-form {{ group?.classes || '' }}\">\n    <div *ngFor=\"let section of sections\" class=\"mr-form__section {{ section.classes || '' }}\" \n         [ngClass]=\"{ 'mr-form__section-advanced' : section.advancedSection  }\" >\n        \n        <div class=\"mr-form__section-header\">\n            <h3 *ngIf=\"section.title\" class=\"mr-form__section-title\">{{ section.title }}</h3>\n            <p *ngIf=\"section.description\" class=\"mr-form__section-description\">{{ section.description }}</p>\n        </div>\n        \n        <div class=\"mr-form__section-content\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-form__element {{ input.options?.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n\n                    <!-- INPUT TEXT -->\n                    <n7-input-text *ngSwitchCase=\"'text'\" \n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-text>\n\n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox *ngSwitchCase=\"'checkbox'\" \n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-checkbox>\n\n                    <!-- INPUT SELECT -->\n                    <n7-input-select *ngSwitchCase=\"'select'\" \n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-select>\n\n                    <!-- DEFAULT (external template) -->\n                    <ng-container *ngSwitchDefault>\n                        <ng-template *ngTemplateOutlet=\"\n                        templateRef; \n                        context: { \n                            type: input.type, \n                            input: form.inputs[input.id] \n                        }\"></ng-template>\n                    </ng-container>\n\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], MrFormComponent);
export { MrFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQ3BELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNdEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQVUxQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUN0QyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsaUNBQzFDLE9BQU8sS0FDVixLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDeEIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQ3BDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFBO0FBeEJVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFdBQVc7NkNBQUM7QUFFbEI7SUFBUixLQUFLLEVBQUU7OzhDQUEyQjtBQUduQztJQURDLFlBQVksQ0FBQyxXQUFXLENBQUM7OEJBQ04sV0FBVztvREFBTTtBQU4xQixlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLHNsRUFBMEI7S0FDM0IsQ0FBQztHQUNXLGVBQWUsQ0F5QjNCO1NBekJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1yRm9ybUNvbmZpZ0dyb3VwLCBNckZvcm1Db25maWdTZWN0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBNckZvcm1Nb2RlbDtcblxuICBASW5wdXQoKSBncm91cD86IE1yRm9ybUNvbmZpZ0dyb3VwO1xuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwdWJsaWMgc2VjdGlvbnM6IE1yRm9ybUNvbmZpZ1NlY3Rpb25bXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5zZWN0aW9ucyA9IHRoaXMuZm9ybS5jb25maWcuc2VjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiB0aGlzLmdyb3VwLnNlY3Rpb25zLmluY2x1ZGVzKGlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLmZvcm0uY29uZmlnLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIC8vIHRyYW5zbGF0aW9uc1xuICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKHtcbiAgICAgIC4uLnNlY3Rpb24sXG4gICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSksXG4gICAgICBkZXNjcmlwdGlvbjogX3Qoc2VjdGlvbi5kZXNjcmlwdGlvbilcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==