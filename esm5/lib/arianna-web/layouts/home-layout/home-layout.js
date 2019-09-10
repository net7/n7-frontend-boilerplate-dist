/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { AwHomeLayoutConfig as config } from './home-layout.config';
var AwHomeLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutComponent, _super);
    function AwHomeLayoutComponent() {
        return _super.call(this, config) || this;
    }
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwHomeLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-home-layout',
                    template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    <n7-table\n    [data]=\"lb.widgets['aw-table'].ds.out$ | async\"\n    [emit]=\"lb.widgets['aw-table'].emit\">\n    </n7-table>\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwHomeLayoutComponent.ctorParameters = function () { return []; };
    return AwHomeLayoutComponent;
}(AbstractLayout));
export { AwHomeLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLElBQUksTUFBTSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEU7SUFJMkMsaURBQWM7SUFDdkQ7ZUFFRSxrQkFBTSxNQUFNLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixnTUFBaUM7aUJBQ2xDOzs7O0lBZUQsNEJBQUM7Q0FBQSxBQWxCRCxDQUkyQyxjQUFjLEdBY3hEO1NBZFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9ob21lLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1ob21lLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICl7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG59Il19