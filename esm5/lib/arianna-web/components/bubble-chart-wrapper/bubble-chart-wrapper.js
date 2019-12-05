/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/bubble-chart-wrapper/bubble-chart-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { Component, Input } from '@angular/core';
var BubbleChartWrapperComponent = /** @class */ (function () {
    function BubbleChartWrapperComponent() {
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        this.emit(type, payload);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onMouseOut = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.emit(type);
    };
    /**
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        console.log("destroyed");
    };
    BubbleChartWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-bubble-chart-wrapper',
                    template: "<div class=\"aw-bubble-chart-wrapper\" >\n    <button style=\"display: none;\" id=\"bubble-popup-menu_closebutton\"\n        (click)=\"onClick('bubble-tooltip-close-click',{entityId: (hover ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_gotobutton\"\n        (click)=\"onClick('bubble-tooltip-goto-click',{entityId:(hover  ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_selectbutton\"\n        (click)=\"onClick('bubble-tooltip-select-click',{entityId:(hover ? hover.id : null)} )\"></button>\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( hover ? hover.label : '' ) }}</h2>\n        <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n            onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( hover ? '\u00C8 collegato a '+ hover.count + ' entit\u00E0' : '' ) }}\n        </p>\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <ng-container *ngIf=\"buttons.length > 1\"></ng-container>\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n    <div [id]=\"container\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                }] }
    ];
    BubbleChartWrapperComponent.propDecorators = {
        hover: [{ type: Input }],
        emit: [{ type: Input }],
        container: [{ type: Input }],
        buttons: [{ type: Input }]
    };
    return BubbleChartWrapperComponent;
}());
export { BubbleChartWrapperComponent };
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.hover;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7O0lBVEMsNkNBQU87Ozs7O0lBQVAsVUFBUSxJQUFJLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUNELGdEQUFVOzs7O0lBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsK0NBQVM7OztJQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG11REFBMEM7aUJBQzNDOzs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFXUixrQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBZlksMkJBQTJCOzs7SUFDdEMsNENBQW9COztJQUNwQiwyQ0FBbUI7O0lBQ25CLGdEQUEyQjs7SUFDM0IsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQtd3JhcHBlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBob3ZlcjogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG4gIG9uTW91c2VPdXQodHlwZSkge1xuICAgIHRoaXMuZW1pdCh0eXBlKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coXCJkZXN0cm95ZWRcIik7XG4gIH1cbn1cbiJdfQ==