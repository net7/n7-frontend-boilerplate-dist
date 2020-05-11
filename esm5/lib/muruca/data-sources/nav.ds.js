/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrNavDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrNavDS, _super);
    function MrNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrNavDS.prototype.transform = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var items = [];
        data.nav.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            items.push({
                text: el.title,
                anchor: {
                    href: "http://localhost:4200/mr/static/" + el.id,
                    target: '_blank',
                    payload: el.id
                }
            });
        }));
        return {
            items: items,
        };
    };
    return MrNavDS;
}(DataSource));
export { MrNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZCLG1DQUFVO0lBQXZDOztJQWtCQSxDQUFDO0lBakJDLDZEQUE2RDs7Ozs7OztJQUNuRCwyQkFBUzs7Ozs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixLQUFLLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQUU7WUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDVCxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxxQ0FBbUMsRUFBRSxDQUFDLEVBQUk7b0JBQ2hELE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUU7aUJBQ2Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLE9BQUE7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBbEJELENBQTZCLFVBQVUsR0FrQnRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGRhdGEubmF2LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogZWwudGl0bGUsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGBodHRwOi8vbG9jYWxob3N0OjQyMDAvbXIvc3RhdGljLyR7ZWwuaWR9YCxcbiAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgIHBheWxvYWQ6IGVsLmlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtcyxcbiAgICB9O1xuICB9XG59XG4iXX0=