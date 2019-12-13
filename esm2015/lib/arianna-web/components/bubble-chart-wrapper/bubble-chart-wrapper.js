/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { Component, Input } from '@angular/core';
export class BubbleChartWrapperComponent {
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    onClick(type, payload) {
        this.emit(type, payload);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onMouseOut(type) {
        this.emit(type);
    }
    /**
     * @return {?}
     */
    onDestroy() {
        console.log("destroyed");
    }
}
BubbleChartWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-bubble-chart-wrapper',
                template: "<div class=\"aw-bubble-chart-wrapper\">\n    <div class=\"bubble-chart__tippy-template\" style=\"display: none;\">\n        <!-- <button id=\"bubble-popup-menu_closebutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-close-click')\"></button> -->\n        <button id=\"bubble-popup-menu_gotobutton\" class=\"bubble-popup-menu_gotobutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-goto-click', {})\"></button>\n        <button id=\"bubble-popup-menu_selectbutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-select-click', {})\"></button>\n        <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n            <h2 class=\"aw-bubble-popup-menu__title\">\n                <!-- Set by tippy builder fuction -->\n            </h2>\n            <!-- <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n                onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\">\n            </span> -->\n            <p class=\"aw-bubble-popup-menu__text\">\n                <!-- Set by tippy builder fuction -->\n            </p>\n            <div class=\"aw-bubble-popup-menu__actions\">\n                <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                    onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n                <ng-container *ngIf=\"buttons.length > 1\"></ng-container>\n                <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                    onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">\n                    <!-- Set by tippy builder function -->\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <ng-content></ng-content>\n</div>"
            }] }
];
BubbleChartWrapperComponent.propDecorators = {
    hover: [{ type: Input }],
    emit: [{ type: Input }],
    container: [{ type: Input }],
    buttons: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBTXRDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxzMkRBQTBDO2FBQzNDOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUhOLDRDQUFvQjs7SUFDcEIsMkNBQW1COztJQUNuQixnREFBMkI7O0lBQzNCLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCdWJibGVDaGFydFdyYXBwZXIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctYnViYmxlLWNoYXJ0LXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0LXdyYXBwZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaG92ZXI6IGFueTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcbiAgQElucHV0KCkgYnV0dG9uczogYW55O1xuXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHRoaXMuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgfVxuICBvbk1vdXNlT3V0KHR5cGUpIHtcbiAgICB0aGlzLmVtaXQodHlwZSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveWVkXCIpO1xuICB9XG59Il19