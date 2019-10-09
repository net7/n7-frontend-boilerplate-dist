/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwEntitaNavDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwEntitaNavDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var navigation = {
            items: [
                {
                    text: 'OVERVIEW',
                    payload: 'overview',
                },
                {
                    text: 'CAMPI',
                    payload: 'campi',
                },
                {
                    text: 'OGGETTI COLLEGATI',
                    payload: 'oggetti-collegati',
                },
                {
                    text: 'ENTITA COLLEGATE',
                    payload: 'entita-collegate',
                },
                {
                    text: 'MAXXI',
                    payload: 'maxxi',
                },
                {
                    text: 'WIKIPEDIA',
                    payload: 'wiki',
                },
            ],
            payload: 'entita-nav'
        };
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFtQyx5Q0FBVTtJQUE3Qzs7SUFrQ0EsQ0FBQzs7Ozs7O0lBaENXLGlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixVQUFVLEdBQVE7WUFDdEIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtpQkFDcEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxtQkFBbUI7b0JBQ3pCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQzdCO2dCQUNEO29CQUNFLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzVCO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsWUFBWTtTQUN0QjtRQUNELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBbUMsVUFBVSxHQWtDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgY29uc3QgbmF2aWdhdGlvbjogYW55ID0ge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICAgICAgcGF5bG9hZDogJ292ZXJ2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgICAgcGF5bG9hZDogJ2NhbXBpJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPR0dFVFRJIENPTExFR0FUSScsXG4gICAgICAgICAgcGF5bG9hZDogJ29nZ2V0dGktY29sbGVnYXRpJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFTlRJVEEgQ09MTEVHQVRFJyxcbiAgICAgICAgICBwYXlsb2FkOiAnZW50aXRhLWNvbGxlZ2F0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTUFYWEknLFxuICAgICAgICAgIHBheWxvYWQ6ICdtYXh4aScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV0lLSVBFRElBJyxcbiAgICAgICAgICBwYXlsb2FkOiAnd2lraScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGF5bG9hZDogJ2VudGl0YS1uYXYnXG4gICAgfVxuICAgIHJldHVybiBuYXZpZ2F0aW9uXG4gIH1cbn0iXX0=