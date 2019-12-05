/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n</div>"
            }] }
];
/** @nocollapse */
DvExampleLayoutComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU0xRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYztJQUN4RDtRQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFmSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscTFCQUFvQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2R2LWV4YW1wbGUtbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxufSJdfQ==