import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
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
            template: "<div *ngIf=\"data\" class=\"dv-card {{ data.classes || '' }}\">\n    <ng-container *ngFor=\"let area of ['header', 'content', 'footer']\">\n        <div *ngIf=\"data[area]\" class=\"dv-card__{{ area }}\">\n            <section *ngFor=\"let section of data[area].sections\" class=\"dv-card__section {{ section.classes || '' }}\">\n                <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: section.items }\"></ng-container>\n            </section>\n        </div>\n    </ng-container>\n</div>\n\n<ng-template #blocks let-items>\n    <ng-container *ngFor=\"let item of items\">\n        <div class=\"{{ 'dv-card__item dv-card__' + item.type }}\">\n            <!-- TEXT -->\n            <ng-container *ngIf=\"item.type === 'text'\">\n                <dv-card-text-item \n                [data]=\"data.widgets[item.id].ds.out$ | async\"\n                [emit]=\"data.widgets[item.id].emit\"></dv-card-text-item> \n            </ng-container> \n\n            <!-- DATA WIDGET -->\n            <ng-container *ngIf=\"item.type === 'data-widget'\">\n                <n7-data-widget \n                [data]=\"data.widgets[item.id].ds.out$ | async\"\n                [emit]=\"data.widgets[item.id].emit\"></n7-data-widget> \n            </ng-container> \n\n            <!-- TABLE -->\n            <ng-container *ngIf=\"item.type === 'table'\">\n                <n7-table \n                [data]=\"data.widgets[item.id].ds.out$ | async\"\n                [emit]=\"data.widgets[item.id].emit\"></n7-table> \n            </ng-container> \n\n            <!-- INNER TITLE -->\n            <ng-container *ngIf=\"item.type === 'inner-title'\">\n                <n7-inner-title \n                [data]=\"data.widgets[item.id].ds.out$ | async\"\n                [emit]=\"data.widgets[item.id].emit\"></n7-inner-title> \n            </ng-container> \n\n            <!-- SELECT -->\n            <ng-container *ngIf=\"item.type === 'select'\">\n                <n7-input-select \n                [data]=\"data.widgets[item.id].ds.out$ | async\"\n                [emit]=\"data.widgets[item.id].emit\"></n7-input-select> \n            </ng-container> \n\n            <!-- APEX CHARTS -->\n            <ng-container *ngIf=\"item.type.includes('apex')\">\n                <n7-chart [data]=\"data.widgets[item.id].ds.out$ | async\"></n7-chart> \n            </ng-container> \n\n            <!-- MAP -->\n            <ng-container *ngIf=\"item.type === 'map'\">\n                <n7-map [data]=\"data.widgets[item.id].ds.out$ | async\"></n7-map> \n            </ng-container> \n        </div>\n    </ng-container>\n</ng-template>"
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9jb21wb25lbnRzL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFBQTtJQUlBLENBQUM7SUFIWTtRQUFSLEtBQUssRUFBRTs7K0NBQTJCO0lBRTFCO1FBQVIsS0FBSyxFQUFFOzsrQ0FBNEM7SUFIM0MsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiwra0ZBQTBCO1NBQzNCLENBQUM7T0FDVyxhQUFhLENBSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZERhdGFXaXRoV2lkZ2V0cyB9IGZyb20gJy4uLy4uL3R5cGVzL2NhcmQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IENhcmREYXRhV2l0aFdpZGdldHM7XG5cbiAgICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpID0+IHZvaWQ7XG59XG4iXX0=