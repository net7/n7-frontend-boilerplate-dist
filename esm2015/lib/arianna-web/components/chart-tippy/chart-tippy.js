/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ChartTippy.ts
//---------------------------
import { Component, Input } from '@angular/core';
export class ChartTippyComponent {
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    onClick(type, payload) {
        this.emit(type, payload);
    }
}
ChartTippyComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-chart-tippy',
                template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
            }] }
];
ChartTippyComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }],
    anchorData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ChartTippyComponent.prototype.data;
    /** @type {?} */
    ChartTippyComponent.prototype.emit;
    /** @type {?} */
    ChartTippyComponent.prototype.anchorData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBTzlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsaXpCQUFpQzthQUNsQzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzt5QkFFTCxLQUFLOzs7O0lBSk4sbUNBQW1COztJQUVuQixtQ0FBbUI7O0lBRW5CLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDaGFydFRpcHB5LnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWNoYXJ0LXRpcHB5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LXRpcHB5Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydFRpcHB5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBASW5wdXQoKSBhbmNob3JEYXRhOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=