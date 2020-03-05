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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTBDLGdEQUFVO0lBQXBEO1FBQUEscUVBd0JDO1FBdkJTLGNBQVEsR0FBRyxNQUFNLENBQUM7O0lBdUI1QixDQUFDOzs7OztJQXJCVyx3Q0FBUzs7OztJQUFuQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0QsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVNLDBDQUFXOzs7O0lBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEwQyxVQUFVLEdBd0JuRDs7Ozs7OztJQXZCQyx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0VGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZCA9ICdsaXN0JztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgIHRleHQ6ICdMSVNUQScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdsaXN0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdHUkFGSUNPJyxcclxuICAgICAgICBwYXlsb2FkOiAnY2hhcnQnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdjaGFydCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0ZXh0OiAnVElNRUxJTkUnLFxyXG4gICAgICAgIHBheWxvYWQ6ICd0aW1lbGluZScsXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlbGVjdGVkKHRhYklkKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==