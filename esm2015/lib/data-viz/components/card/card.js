import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let CardComponent = class CardComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CardComponent.prototype, "emit", void 0);
CardComponent = __decorate([
    Component({
        selector: 'dv-card',
        template: "<div *ngIf=\"data\" class=\"dv-card {{ data.classes || '' }}\">\r\n    <ng-container *ngFor=\"let area of ['header', 'content', 'footer']\">\r\n        <div *ngIf=\"data[area]\" class=\"dv-card__{{ area }}\">\r\n            <section *ngFor=\"let section of data[area].sections\" class=\"dv-card__section {{ section.classes || '' }}\">\r\n                <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: section.items }\"></ng-container>\r\n            </section>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-items>\r\n    <ng-container *ngFor=\"let item of items\">\r\n        <div class=\"{{ 'dv-card__item dv-card__' + item.type }}\">\r\n            <!-- TEXT -->\r\n            <ng-container *ngIf=\"item.type === 'text'\">\r\n                <dv-card-text-item \r\n                [data]=\"data.widgets[item.id].ds.out$ | async\"\r\n                [emit]=\"data.widgets[item.id].emit\"></dv-card-text-item> \r\n            </ng-container> \r\n\r\n            <!-- DATA WIDGET -->\r\n            <ng-container *ngIf=\"item.type === 'data-widget'\">\r\n                <n7-data-widget \r\n                [data]=\"data.widgets[item.id].ds.out$ | async\"\r\n                [emit]=\"data.widgets[item.id].emit\"></n7-data-widget> \r\n            </ng-container> \r\n\r\n            <!-- TABLE -->\r\n            <ng-container *ngIf=\"item.type === 'table'\">\r\n                <n7-table \r\n                [data]=\"data.widgets[item.id].ds.out$ | async\"\r\n                [emit]=\"data.widgets[item.id].emit\"></n7-table> \r\n            </ng-container> \r\n\r\n            <!-- INNER TITLE -->\r\n            <ng-container *ngIf=\"item.type === 'inner-title'\">\r\n                <n7-inner-title \r\n                [data]=\"data.widgets[item.id].ds.out$ | async\"\r\n                [emit]=\"data.widgets[item.id].emit\"></n7-inner-title> \r\n            </ng-container> \r\n\r\n            <!-- SELECT -->\r\n            <ng-container *ngIf=\"item.type === 'select'\">\r\n                <n7-input-select \r\n                [data]=\"data.widgets[item.id].ds.out$ | async\"\r\n                [emit]=\"data.widgets[item.id].emit\"></n7-input-select> \r\n            </ng-container> \r\n\r\n            <!-- APEX CHARTS -->\r\n            <ng-container *ngIf=\"item.type.includes('apex')\">\r\n                <n7-chart [data]=\"data.widgets[item.id].ds.out$ | async\"></n7-chart> \r\n            </ng-container> \r\n\r\n            <!-- MAP -->\r\n            <ng-container *ngIf=\"item.type === 'map'\">\r\n                <n7-map [data]=\"data.widgets[item.id].ds.out$ | async\"></n7-map> \r\n            </ng-container> \r\n        </div>\r\n    </ng-container>\r\n</ng-template>"
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9jb21wb25lbnRzL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQUl6QixDQUFBO0FBSFk7SUFBUixLQUFLLEVBQUU7OzJDQUEyQjtBQUUxQjtJQUFSLEtBQUssRUFBRTs7MkNBQTRDO0FBSDNDLGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIscXNGQUEwQjtLQUMzQixDQUFDO0dBQ1csYUFBYSxDQUl6QjtTQUpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhcmREYXRhV2l0aFdpZGdldHMgfSBmcm9tICcuLi8uLi90eXBlcy9jYXJkLnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHYtY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IENhcmREYXRhV2l0aFdpZGdldHM7XHJcblxyXG4gICAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSA9PiB2b2lkO1xyXG59XHJcbiJdfQ==