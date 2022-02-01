import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
export class DatepickerWrapperComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    toggleDropDown(payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    }
}
DatepickerWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: DatepickerWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: DatepickerWrapperComponent, selector: "dv-datepicker-wrapper", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n", components: [{ type: i1.DatepickerComponent, selector: "n7-datepicker", inputs: ["data", "emit"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: DatepickerWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-datepicker-wrapper', template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovY29tcG9uZW50cy9kYXRlcGlja2VyLXdyYXBwZXIvZGF0ZXBpY2tlci13cmFwcGVyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovY29tcG9uZW50cy9kYXRlcGlja2VyLXdyYXBwZXIvZGF0ZXBpY2tlci13cmFwcGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUEyQmpELE1BQU0sT0FBTywwQkFBMEI7SUFLbkMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBTztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O3VIQWJRLDBCQUEwQjsyR0FBMUIsMEJBQTBCLHFHQzNCdkMsbXlCQWVBOzJGRFlhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSx1QkFBdUI7OEJBSXRCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlcldyYXBwZXJEYXRhIHtcbiAgICBzZWxlY3Q6IFNlbGVjdDtcbiAgICBkYXRlcGlja2VyOiBhbnk7XG4gICAgcGF5bG9hZD86IGFueTtcbn1cblxuaW50ZXJmYWNlIFNlbGVjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBoaWRkZW46IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGl0ZW1zOiBEcm9wZG93bkl0ZW1zW107XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERyb3Bkb3duSXRlbXMge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtZGF0ZXBpY2tlci13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXItd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IERhdGVwaWNrZXJXcmFwcGVyRGF0YTtcblxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wRG93bihwYXlsb2FkKSB7XG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCBwYXlsb2FkKTtcbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwiZHYtZGF0ZXBpY2tlci13cmFwcGVyIHt7IGRhdGEuc2VsZWN0LmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHYtZGF0ZXBpY2tlci13cmFwcGVyX19sYWJlbFwiIChjbGljayk9XCJ0b2dnbGVEcm9wRG93bihkYXRhLnBheWxvYWQpXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJkYXRhLnNlbGVjdC5sYWJlbFwiIFtyZWFkT25seV09XCJ0cnVlXCIvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7ZGF0YS5zZWxlY3QuaWNvbn19XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkdi1kYXRlcGlja2VyLXdyYXBwZXJfX2Ryb3Bkb3duXCIgW2hpZGRlbl09XCJkYXRhLnNlbGVjdC5oaWRkZW5cIj5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHYtZGF0ZXBpY2tlci13cmFwcGVyX19kcm9wZG93bi1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkdi1kYXRlcGlja2VyLXdyYXBwZXJfX2Ryb3Bkb3duLWxpc3Qtb3B0aW9uIHt7IG9wdC5jbGFzc2VzIHx8ICcnIH19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiBkYXRhLnNlbGVjdC5pdGVtc1wiIChjbGljayk9XCJvbkNsaWNrKG9wdC5wYXlsb2FkKVwiPnt7b3B0LnRleHR9fTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPG43LWRhdGVwaWNrZXJcbiAgICAgICAgW2RhdGFdPVwiZGF0YS5kYXRlcGlja2VyLmRhdGFcIlxuICAgICAgICBbZW1pdF09XCJlbWl0XCI+XG4gICAgPC9uNy1kYXRlcGlja2VyPlxuPC9kaXY+XG4iXX0=