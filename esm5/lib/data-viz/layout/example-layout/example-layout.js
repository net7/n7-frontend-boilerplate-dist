/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { DvExampleLayoutConfig as config } from './example-layout.config';
var DvExampleLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DvExampleLayoutComponent, _super);
    function DvExampleLayoutComponent() {
        return _super.call(this, config) || this;
    }
    /**
     * @return {?}
     */
    DvExampleLayoutComponent.prototype.initPayload = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    DvExampleLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    DvExampleLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    DvExampleLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-example-layout',
                    template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n\n    <!-- Data widget wrapper with not-fixed height, two rows -->\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, two rows -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                Row content\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, one row -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n    \n    <dv-datepicker-wrapper \n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\n    </dv-datepicker-wrapper>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DvExampleLayoutComponent.ctorParameters = function () { return []; };
    return DvExampleLayoutComponent;
}(AbstractLayout));
export { DvExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixJQUFJLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFFO0lBSThDLG9EQUFjO0lBQzFEO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsdWpGQUFvQztpQkFDckM7Ozs7SUFpQkQsK0JBQUM7Q0FBQSxBQXBCRCxDQUk4QyxjQUFjLEdBZ0IzRDtTQWhCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi1leGFtcGxlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19