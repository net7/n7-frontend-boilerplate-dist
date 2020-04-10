/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBVUU7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELHdEQUFxQjs7Ozs7SUFBckIsVUFBc0IsSUFBSSxFQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHVKQUFzQztpQkFDdkM7Ozs7O3VCQUdFLEtBQUs7dUJBRUwsS0FBSzs7SUFVUiwrQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksd0JBQXdCOzs7SUFDbkMsd0NBQW1COztJQUVuQix3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtcGFnaW5hdGlvbi5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUGFnaW5hdGlvbkV2ZW50LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVQYWdpbmF0aW9uRXZlbnQodHlwZSwgcGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19