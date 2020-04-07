/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/smart-pagination/smart-pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SmartPaginationComponent {
    constructor() {
        this.handlePaginationEvent.bind(this);
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    handlePaginationEvent(type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
}
SmartPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-smart-pagination',
                template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>"
            }] }
];
/** @nocollapse */
SmartPaginationComponent.ctorParameters = () => [];
SmartPaginationComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SmartPaginationComponent.prototype.data;
    /** @type {?} */
    SmartPaginationComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sd0JBQXdCO0lBS25DO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsdUpBQXNDO2FBQ3ZDOzs7OzttQkFHRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTix3Q0FBbUI7O0lBRW5CLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1wYWdpbmF0aW9uLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uRXZlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25FdmVudCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=