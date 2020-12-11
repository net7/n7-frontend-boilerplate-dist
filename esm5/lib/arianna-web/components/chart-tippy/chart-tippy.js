//---------------------------
// ChartTippy.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ChartTippyComponent = /** @class */ (function () {
    function ChartTippyComponent() {
    }
    ChartTippyComponent.prototype.onClick = function (type, payload) {
        this.emit(type, payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartTippyComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartTippyComponent.prototype, "emit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartTippyComponent.prototype, "anchorData", void 0);
    ChartTippyComponent = __decorate([
        Component({
            selector: 'aw-chart-tippy',
            template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n\n      <div *ngIf=\"d.relation.value\" class=\"aw-item-preview-relation\">\n        <p class=\"aw-item-preview-relation__description\">Tipo di relazione \n          <!-- <span class=\"aw-item-preview-relation__key\">{{d.relation.key}}</span>: -->\n          <span class=\"aw-item-preview-relation__label\">{{d.relation.value}}</span>\n        </p>\n      </div>\n\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
        })
    ], ChartTippyComponent);
    return ChartTippyComponent;
}());
export { ChartTippyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFBQTtJQVVBLENBQUM7SUFIQyxxQ0FBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOztxREFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOztxREFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOzsyREFBaUI7SUFMZCxtQkFBbUI7UUFKL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiwrcENBQWlDO1NBQ2xDLENBQUM7T0FDVyxtQkFBbUIsQ0FVL0I7SUFBRCwwQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDaGFydFRpcHB5LnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWNoYXJ0LXRpcHB5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LXRpcHB5Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydFRpcHB5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBASW5wdXQoKSBhbmNob3JEYXRhOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=