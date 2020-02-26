/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/smart-pagination/smart-pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SmartPaginationComponent = /** @class */ (function () {
    function SmartPaginationComponent() {
        this.handlePaginationEvent.bind(this);
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    SmartPaginationComponent.prototype.handlePaginationEvent = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    };
    SmartPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-smart-pagination',
                    template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SmartPaginationComponent.ctorParameters = function () { return []; };
    SmartPaginationComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SmartPaginationComponent;
}());
export { SmartPaginationComponent };
if (false) {
    /** @type {?} */
    SmartPaginationComponent.prototype.data;
    /** @type {?} */
    SmartPaginationComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQVNFO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCx3REFBcUI7Ozs7O0lBQXJCLFVBQXNCLElBQUksRUFBRSxPQUFPO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix1SkFBc0M7aUJBQ3ZDOzs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7O0lBVVIsK0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLHdCQUF3Qjs7O0lBQ25DLHdDQUFtQjs7SUFDbkIsd0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXBhZ2luYXRpb24uaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uRXZlbnQuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlUGFnaW5hdGlvbkV2ZW50KHR5cGUsIHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgcGF5bG9hZClcbiAgfVxufVxuIl19