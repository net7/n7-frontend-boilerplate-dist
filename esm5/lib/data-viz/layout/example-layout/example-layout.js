/**
 * @fileoverview added by tsickle
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
                    template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n    <dv-datepicker-wrapper \n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\n    </dv-datepicker-wrapper>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DvExampleLayoutComponent.ctorParameters = function () { return []; };
    return DvExampleLayoutComponent;
}(AbstractLayout));
export { DvExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRTtJQUk4QyxvREFBYztJQUN4RDtlQUNJLGtCQUFNLE1BQU0sQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBZkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNoQ0FBb0M7aUJBQ3ZDOzs7O0lBYUQsK0JBQUM7Q0FBQSxBQWhCRCxDQUk4QyxjQUFjLEdBWTNEO1NBWlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcbmltcG9ydCB7IER2RXhhbXBsZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2V4YW1wbGUtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHYtZXhhbXBsZS1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxufSJdfQ==