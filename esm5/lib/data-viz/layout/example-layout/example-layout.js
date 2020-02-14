/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN2RSxPQUFPLEVBQUUscUJBQXFCLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUU7SUFJOEMsb0RBQWM7SUFDeEQ7ZUFDSSxrQkFBTSxNQUFNLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQWZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixtckZBQW9DO2lCQUN2Qzs7OztJQWFELCtCQUFDO0NBQUEsQUFoQkQsQ0FJOEMsY0FBYyxHQVkzRDtTQVpZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcclxuaW1wb3J0IHsgRHZFeGFtcGxlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vZXhhbXBsZS1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkdi1leGFtcGxlLWxheW91dCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKXtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG59Il19