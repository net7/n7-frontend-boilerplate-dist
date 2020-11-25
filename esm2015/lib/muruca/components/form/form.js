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
        template: "<div *ngIf=\"form.loaded$ | async\" class=\"mr-form {{ group?.classes || '' }}\">\r\n    <div *ngFor=\"let section of sections\" class=\"mr-form__section {{ section.classes || '' }}\">\r\n        <h3 *ngIf=\"section.title\" class=\"mr-form__section-title\">{{ section.title }}</h3>\r\n        <p *ngIf=\"section.description\" class=\"mr-form__section-description\">{{ section.description }}</p>\r\n\r\n        <div class=\"mr-form__section-content\">\r\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-form__input {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text *ngSwitchCase=\"'text'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-text>\r\n\r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox *ngSwitchCase=\"'checkbox'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-checkbox>\r\n\r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select *ngSwitchCase=\"'select'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-select>\r\n\r\n                    <!-- DEFAULT (external template) -->\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"\r\n                        templateRef; \r\n                        context: { \r\n                            type: input.type, \r\n                            input: form.inputs[input.id] \r\n                        }\"></ng-template>\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
    })
], MrFormComponent);
export { MrFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQ3BELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNdEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQVUxQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUN0QyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsaUNBQzFDLE9BQU8sS0FDVixLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDeEIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQ3BDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDRixDQUFBO0FBeEJVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFdBQVc7NkNBQUM7QUFFbEI7SUFBUixLQUFLLEVBQUU7OzhDQUEyQjtBQUduQztJQURDLFlBQVksQ0FBQyxXQUFXLENBQUM7OEJBQ04sV0FBVztvREFBTTtBQU4xQixlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLHUrREFBMEI7S0FDM0IsQ0FBQztHQUNXLGVBQWUsQ0F5QjNCO1NBekJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgTXJGb3JtQ29uZmlnR3JvdXAsIE1yRm9ybUNvbmZpZ1NlY3Rpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmb3JtOiBNckZvcm1Nb2RlbDtcclxuXHJcbiAgQElucHV0KCkgZ3JvdXA/OiBNckZvcm1Db25maWdHcm91cDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcclxuICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHB1YmxpYyBzZWN0aW9uczogTXJGb3JtQ29uZmlnU2VjdGlvbltdO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3VwKSB7XHJcbiAgICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLmZvcm0uY29uZmlnLnNlY3Rpb25zXHJcbiAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiB0aGlzLmdyb3VwLnNlY3Rpb25zLmluY2x1ZGVzKGlkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlY3Rpb25zID0gdGhpcy5mb3JtLmNvbmZpZy5zZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cmFuc2xhdGlvbnNcclxuICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKHtcclxuICAgICAgLi4uc2VjdGlvbixcclxuICAgICAgdGl0bGU6IF90KHNlY3Rpb24udGl0bGUpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogX3Qoc2VjdGlvbi5kZXNjcmlwdGlvbilcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19