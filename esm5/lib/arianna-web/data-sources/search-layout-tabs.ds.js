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
     * @return {?}
     */
    AwSearchLayoutTabsDS.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : '',
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : '',
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : '',
                }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTBDLGdEQUFVO0lBQXBEO1FBQUEscUVBd0JDO1FBdkJTLGNBQVEsR0FBRyxNQUFNLENBQUM7O0lBdUI1QixDQUFDOzs7OztJQXJCVyx3Q0FBUzs7OztJQUFuQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0QsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVNLDBDQUFXOzs7O0lBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEwQyxVQUFVLEdBd0JuRDs7Ozs7OztJQXZCQyx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRUYWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZCA9ICdsaXN0JztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgdGV4dDogJ0xJU1RBJyxcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnbGlzdCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICdHUkFGSUNPJyxcbiAgICAgICAgcGF5bG9hZDogJ2NoYXJ0JyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2NoYXJ0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogJ1RJTUVMSU5FJyxcbiAgICAgICAgcGF5bG9hZDogJ3RpbWVsaW5lJyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH1dLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodGFiSWQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XG4gIH1cbn1cbiJdfQ==