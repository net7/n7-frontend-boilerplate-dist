import { __assign, __decorate, __metadata } from "tslib";
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
import { MrFormModel } from '../../models/form.model';
var MrFormComponent = /** @class */ (function () {
    function MrFormComponent() {
    }
    MrFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group) {
            this.sections = this.form.config.sections
                .filter(function (_a) {
                var id = _a.id;
                return _this.group.sections.includes(id);
            });
        }
        else {
            this.sections = this.form.config.sections;
        }
        // translations
        this.sections = this.sections.map(function (section) { return (__assign(__assign({}, section), { title: _t(section.title), description: _t(section.description) })); });
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
    return MrFormComponent;
}());
export { MrFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQ3BELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNdEQ7SUFBQTtJQXlCQSxDQUFDO0lBZkMsa0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUN0QyxNQUFNLENBQUMsVUFBQyxFQUFNO29CQUFKLFVBQUU7Z0JBQU8sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQWhDLENBQWdDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUMxQyxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3hCLFdBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUNwQyxFQUo2QyxDQUk3QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBdkJRO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFdBQVc7aURBQUM7SUFFbEI7UUFBUixLQUFLLEVBQUU7O2tEQUEyQjtJQUduQztRQURDLFlBQVksQ0FBQyxXQUFXLENBQUM7a0NBQ04sV0FBVzt3REFBTTtJQU4xQixlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHNsRUFBMEI7U0FDM0IsQ0FBQztPQUNXLGVBQWUsQ0F5QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBNckZvcm1Db25maWdHcm91cCwgTXJGb3JtQ29uZmlnU2VjdGlvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybTogTXJGb3JtTW9kZWw7XG5cbiAgQElucHV0KCkgZ3JvdXA/OiBNckZvcm1Db25maWdHcm91cDtcblxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxuICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHVibGljIHNlY3Rpb25zOiBNckZvcm1Db25maWdTZWN0aW9uW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLmZvcm0uY29uZmlnLnNlY3Rpb25zXG4gICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gdGhpcy5ncm91cC5zZWN0aW9ucy5pbmNsdWRlcyhpZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY3Rpb25zID0gdGhpcy5mb3JtLmNvbmZpZy5zZWN0aW9ucztcbiAgICB9XG5cbiAgICAvLyB0cmFuc2xhdGlvbnNcbiAgICB0aGlzLnNlY3Rpb25zID0gdGhpcy5zZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+ICh7XG4gICAgICAuLi5zZWN0aW9uLFxuICAgICAgdGl0bGU6IF90KHNlY3Rpb24udGl0bGUpLFxuICAgICAgZGVzY3JpcHRpb246IF90KHNlY3Rpb24uZGVzY3JpcHRpb24pXG4gICAgfSkpO1xuICB9XG59XG4iXX0=