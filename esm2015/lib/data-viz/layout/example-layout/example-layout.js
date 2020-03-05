/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { DvExampleLayoutConfig as config } from './example-layout.config';
export class DvExampleLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
    }
    /**
     * @return {?}
     */
    initPayload() {
        return {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
DvExampleLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-example-layout',
                template: "<div class=\"dv-example-layout\" id=\"example-layout\">\r\n\r\n    <!-- Data widget wrapper with not-fixed height, two rows -->\r\n    <dv-data-widget-wrapper>\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-chart\r\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\r\n                </n7-chart>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, two rows -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                Row content\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, one row -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n    \r\n    <dv-datepicker-wrapper \r\n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\r\n    </dv-datepicker-wrapper>\r\n</div>"
            }] }
];
/** @nocollapse */
DvExampleLayoutComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNMUUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFDMUQ7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbXJGQUFvQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IER2RXhhbXBsZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2V4YW1wbGUtbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R2LWV4YW1wbGUtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19