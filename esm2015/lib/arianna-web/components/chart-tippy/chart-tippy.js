//---------------------------
// ChartTippy.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let ChartTippyComponent = class ChartTippyComponent {
    onClick(type, payload) {
        this.emit(type, payload);
    }
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
        template: "<div *ngIf=\"data\" style=\"display: none;\">\r\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\r\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\r\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\r\n      <p class=\"aw-bubble-popup-menu__text\">\r\n        {{ d.text }}\r\n      </p>\r\n\r\n      <div *ngIf=\"d.relation.value\" class=\"aw-item-preview-relation\">\r\n        <p class=\"aw-item-preview-relation__description\">Tipo di relazione \r\n          <!-- <span class=\"aw-item-preview-relation__key\">{{d.relation.key}}</span>: -->\r\n          <span class=\"aw-item-preview-relation__label\">{{d.relation.value}}</span>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"aw-bubble-popup-menu__actions\">\r\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\r\n          Vai alla scheda\r\n        </n7-anchor-wrapper>\r\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\r\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
    })
], ChartTippyComponent);
export { ChartTippyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFPOUIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7O2lEQUFXO0FBRVY7SUFBUixLQUFLLEVBQUU7O2lEQUFXO0FBRVY7SUFBUixLQUFLLEVBQUU7O3VEQUFpQjtBQUxkLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGl0Q0FBaUM7S0FDbEMsQ0FBQztHQUNXLG1CQUFtQixDQVUvQjtTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENoYXJ0VGlwcHkudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctY2hhcnQtdGlwcHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC10aXBweS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0VGlwcHlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBASW5wdXQoKSBhbmNob3JEYXRhOiBhbnk7XHJcblxyXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=