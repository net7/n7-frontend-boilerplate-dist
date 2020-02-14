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
                    template: "<div *ngIf=\"data\" style=\"display: none;\">\r\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\r\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\r\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\r\n      <p class=\"aw-bubble-popup-menu__text\">\r\n        {{ d.text }}\r\n      </p>\r\n      <div class=\"aw-bubble-popup-menu__actions\">\r\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\r\n          Vai alla scheda\r\n        </n7-anchor-wrapper>\r\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\r\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7SUFZQSxDQUFDOzs7Ozs7SUFIQyxxQ0FBTzs7Ozs7SUFBUCxVQUFRLElBQUksRUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixtMUJBQWlDO2lCQUNsQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQUtSLDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksbUJBQW1COzs7SUFDOUIsbUNBQW1COztJQUNuQixtQ0FBbUI7O0lBQ25CLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENoYXJ0VGlwcHkudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctY2hhcnQtdGlwcHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC10aXBweS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRUaXBweUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuICBASW5wdXQoKSBhbmNob3JEYXRhOiBhbnk7XHJcblxyXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==