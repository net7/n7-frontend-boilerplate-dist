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
                    template: "<div class=\"dv-example-layout\" id=\"example-layout\">\r\n\r\n    <!-- Data widget wrapper with not-fixed height, two rows -->\r\n    <dv-data-widget-wrapper>\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-chart\r\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\r\n                </n7-chart>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, two rows -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                Row content\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, one row -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n    \r\n    <dv-datepicker-wrapper \r\n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\r\n    </dv-datepicker-wrapper>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DvExampleLayoutComponent.ctorParameters = function () { return []; };
    return DvExampleLayoutComponent;
}(AbstractLayout));
export { DvExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixJQUFJLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFFO0lBSThDLG9EQUFjO0lBQzFEO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbXJGQUFvQztpQkFDckM7Ozs7SUFpQkQsK0JBQUM7Q0FBQSxBQXBCRCxDQUk4QyxjQUFjLEdBZ0IzRDtTQWhCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdi1leGFtcGxlLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==