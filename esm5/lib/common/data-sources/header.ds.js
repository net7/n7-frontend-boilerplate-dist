/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var HeaderDS = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderDS, _super);
    function HeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    HeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.items;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    HeaderDS.prototype.onCurrentNavChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item._meta.id === payload) {
                item.classes = 'is-current';
            }
            else {
                item.classes = '';
            }
        }));
    };
    return HeaderDS;
}(DataSource));
export { HeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQThCLG9DQUFVO0lBQXhDOztJQWNBLENBQUM7Ozs7OztJQWJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLHFDQUFrQjs7OztJQUF6QixVQUEyQixPQUFPO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBOEIsVUFBVSxHQWN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJSGVhZGVyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IElIZWFkZXJEYXRhIHtcbiAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgfVxuXG4gIHB1YmxpYyBvbkN1cnJlbnROYXZDaGFuZ2UgKHBheWxvYWQpIHtcbiAgICB0aGlzLm91dHB1dC5uYXYuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLl9tZXRhLmlkID09PSBwYXlsb2FkKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICdpcy1jdXJyZW50JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=