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
            template: "<div *ngIf=\"form.loaded$ | async\" class=\"mr-form {{ group?.classes || '' }}\">\r\n    <div *ngFor=\"let section of sections\" class=\"mr-form__section {{ section.classes || '' }}\">\r\n        <h3 *ngIf=\"section.title\" class=\"mr-form__section-title\">{{ section.title }}</h3>\r\n        <p *ngIf=\"section.description\" class=\"mr-form__section-description\">{{ section.description }}</p>\r\n\r\n        <div class=\"mr-form__section-content\">\r\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-form__input {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text *ngSwitchCase=\"'text'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-text>\r\n\r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox *ngSwitchCase=\"'checkbox'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-checkbox>\r\n\r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select *ngSwitchCase=\"'select'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-select>\r\n\r\n                    <!-- DEFAULT (external template) -->\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"\r\n                        templateRef; \r\n                        context: { \r\n                            type: input.type, \r\n                            input: form.inputs[input.id] \r\n                        }\"></ng-template>\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
        })
    ], MrFormComponent);
    return MrFormComponent;
}());
export { MrFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQ3BELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNdEQ7SUFBQTtJQXlCQSxDQUFDO0lBZkMsa0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUN0QyxNQUFNLENBQUMsVUFBQyxFQUFNO29CQUFKLFVBQUU7Z0JBQU8sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQWhDLENBQWdDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUMxQyxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3hCLFdBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUNwQyxFQUo2QyxDQUk3QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBdkJRO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFdBQVc7aURBQUM7SUFFbEI7UUFBUixLQUFLLEVBQUU7O2tEQUEyQjtJQUduQztRQURDLFlBQVksQ0FBQyxXQUFXLENBQUM7a0NBQ04sV0FBVzt3REFBTTtJQU4xQixlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHUrREFBMEI7U0FDM0IsQ0FBQztPQUNXLGVBQWUsQ0F5QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE1yRm9ybUNvbmZpZ0dyb3VwLCBNckZvcm1Db25maWdTZWN0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybTogTXJGb3JtTW9kZWw7XHJcblxyXG4gIEBJbnB1dCgpIGdyb3VwPzogTXJGb3JtQ29uZmlnR3JvdXA7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgc2VjdGlvbnM6IE1yRm9ybUNvbmZpZ1NlY3Rpb25bXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLnNlY3Rpb25zID0gdGhpcy5mb3JtLmNvbmZpZy5zZWN0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gdGhpcy5ncm91cC5zZWN0aW9ucy5pbmNsdWRlcyhpZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWN0aW9ucyA9IHRoaXMuZm9ybS5jb25maWcuc2VjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHJhbnNsYXRpb25zXHJcbiAgICB0aGlzLnNlY3Rpb25zID0gdGhpcy5zZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+ICh7XHJcbiAgICAgIC4uLnNlY3Rpb24sXHJcbiAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKSxcclxuICAgICAgZGVzY3JpcHRpb246IF90KHNlY3Rpb24uZGVzY3JpcHRpb24pXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==