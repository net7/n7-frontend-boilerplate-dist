/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/chart-tippy/chart-tippy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ChartTippy.ts
//---------------------------
import { Component, Input } from '@angular/core';
var ChartTippyComponent = /** @class */ (function () {
    function ChartTippyComponent() {
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    ChartTippyComponent.prototype.onClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        this.emit(type, payload);
    };
    ChartTippyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-chart-tippy',
                    template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n\n      <div *ngIf=\"d.relation.value\" class=\"aw-bubble-popup-menu__relation\">\n        <p class=\"aw-bubble-popup-menu__relation-description\">Relazione con \n          <span class=\"aw-bubble-popup-menu__relation-key\">{{d.relation.key}}</span>: \n          <span class=\"aw-bubble-popup-menu__relation-label\"> {{d.relation.value}}</span>\n        </p>\n      </div>\n\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    ChartTippyComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }],
        anchorData: [{ type: Input }]
    };
    return ChartTippyComponent;
}());
export { ChartTippyComponent };
if (false) {
    /** @type {?} */
    ChartTippyComponent.prototype.data;
    /** @type {?} */
    ChartTippyComponent.prototype.emit;
    /** @type {?} */
    ChartTippyComponent.prototype.anchorData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7SUFjQSxDQUFDOzs7Ozs7SUFIQyxxQ0FBTzs7Ozs7SUFBUCxVQUFRLElBQUksRUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix5cUNBQWlDO2lCQUNsQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxLQUFLOztJQUtSLDBCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksbUJBQW1COzs7SUFDOUIsbUNBQW1COztJQUVuQixtQ0FBbUI7O0lBRW5CLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDaGFydFRpcHB5LnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWNoYXJ0LXRpcHB5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LXRpcHB5Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydFRpcHB5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBASW5wdXQoKSBhbmNob3JEYXRhOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=