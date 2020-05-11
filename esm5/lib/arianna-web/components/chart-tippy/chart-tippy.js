/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtJQWNBLENBQUM7Ozs7OztJQUhDLHFDQUFPOzs7OztJQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHlxQ0FBaUM7aUJBQ2xDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOzZCQUVMLEtBQUs7O0lBS1IsMEJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxtQkFBbUI7OztJQUM5QixtQ0FBbUI7O0lBRW5CLG1DQUFtQjs7SUFFbkIseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENoYXJ0VGlwcHkudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctY2hhcnQtdGlwcHknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtdGlwcHkuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0VGlwcHlDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIEBJbnB1dCgpIGFuY2hvckRhdGE6IGFueTtcblxuICBvbkNsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==