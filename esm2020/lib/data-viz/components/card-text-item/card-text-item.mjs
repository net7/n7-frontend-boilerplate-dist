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
CardTextItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CardTextItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardTextItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: CardTextItemComponent, selector: "dv-card-text-item", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\r\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\r\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CardTextItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-card-text-item', template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\r\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\r\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10ZXh0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9jb21wb25lbnRzL2NhcmQtdGV4dC1pdGVtL2NhcmQtdGV4dC1pdGVtLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZakQsTUFBTSxPQUFPLHFCQUFxQjtJQUs5QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7a0hBVFEscUJBQXFCO3NHQUFyQixxQkFBcUIsaUdDWmxDLHNLQUVNOzJGRFVPLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBSWxCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBDYXJkVGV4dEl0ZW1EYXRhID0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHYtY2FyZC10ZXh0LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXRleHQtaXRlbS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRUZXh0SXRlbUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBDYXJkVGV4dEl0ZW1EYXRhO1xyXG5cclxuICAgIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwiZHYtY2FyZC10ZXh0LWl0ZW0ge3sgZGF0YS5jbGFzc2VzIHx8ICcnIH19XCI+XHJcbiAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImRhdGEudGV4dFwiIChjbGljayk9XCJvbkNsaWNrKGRhdGEucGF5bG9hZClcIj48L3NwYW4+XHJcbjwvZGl2PiJdfQ==