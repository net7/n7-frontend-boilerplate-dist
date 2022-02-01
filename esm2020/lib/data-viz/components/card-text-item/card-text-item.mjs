import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardTextItemComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
CardTextItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardTextItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardTextItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: CardTextItemComponent, selector: "dv-card-text-item", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardTextItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-card-text-item', template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10ZXh0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9jb21wb25lbnRzL2NhcmQtdGV4dC1pdGVtL2NhcmQtdGV4dC1pdGVtLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZakQsTUFBTSxPQUFPLHFCQUFxQjtJQUs5QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7a0hBVFEscUJBQXFCO3NHQUFyQixxQkFBcUIsaUdDWmxDLGtLQUVNOzJGRFVPLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBSWxCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIENhcmRUZXh0SXRlbURhdGEgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtY2FyZC10ZXh0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC10ZXh0LWl0ZW0uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRUZXh0SXRlbUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogQ2FyZFRleHRJdGVtRGF0YTtcblxuICAgIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkgPT4gdm9pZDtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJkdi1jYXJkLXRleHQtaXRlbSB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImRhdGEudGV4dFwiIChjbGljayk9XCJvbkNsaWNrKGRhdGEucGF5bG9hZClcIj48L3NwYW4+XG48L2Rpdj4iXX0=