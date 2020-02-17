/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/search-layout-tabs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSearchLayoutTabsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutTabsDS, _super);
    function AwSearchLayoutTabsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selected = 'list';
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSearchLayoutTabsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : ''
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : ''
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : ''
                }]
        };
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    AwSearchLayoutTabsDS.prototype.setSelected = /**
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        this.selected = tabId;
    };
    return AwSearchLayoutTabsDS;
}(DataSource));
export { AwSearchLayoutTabsDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutTabsDS.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTBDLGdEQUFVO0lBQXBEO1FBQUEscUVBeUJDO1FBeEJTLGNBQVEsR0FBVyxNQUFNLENBQUM7O0lBd0JwQyxDQUFDOzs7Ozs7SUF0Qlcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDdEIsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDO29CQUNOLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN2RCxFQUFFO29CQUNELElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDeEQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzRCxDQUFDO1NBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRU0sMENBQVc7Ozs7SUFBbEIsVUFBbUIsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDLEFBekJELENBQTBDLFVBQVUsR0F5Qm5EOzs7Ozs7O0lBeEJDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dFRhYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNlbGVjdGVkOiBzdHJpbmcgPSAnbGlzdCc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICByZXR1cm4geyBcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICB0ZXh0OiAnTElTVEEnLCBcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnbGlzdCcgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogJ0dSQUZJQ08nLCBcbiAgICAgICAgcGF5bG9hZDogJ2NoYXJ0JyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2NoYXJ0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAnVElNRUxJTkUnLCBcbiAgICAgICAgcGF5bG9hZDogJ3RpbWVsaW5lJyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfV0gXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkKHRhYklkKXtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XG4gIH1cblxufSJdfQ==