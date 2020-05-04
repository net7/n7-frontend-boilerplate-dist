/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/chart-tippy/chart-tippy.ts
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
                template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n\n      <div *ngIf=\"d.relation.value\" class=\"aw-bubble-popup-menu__relation\">\n        <p class=\"aw-bubble-popup-menu__relation-description\">Relazione con \n          <span class=\"aw-bubble-popup-menu__relation-key\">{{d.relation.key}}</span>: \n          <span class=\"aw-bubble-popup-menu__relation-label\"> {{d.relation.value}}</span>\n        </p>\n      </div>\n\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHlxQ0FBaUM7YUFDbEM7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7eUJBRUwsS0FBSzs7OztJQUpOLG1DQUFtQjs7SUFFbkIsbUNBQW1COztJQUVuQix5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2hhcnRUaXBweS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1jaGFydC10aXBweScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC10aXBweS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRUaXBweUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgQElucHV0KCkgYW5jaG9yRGF0YTogYW55O1xuXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHRoaXMuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19