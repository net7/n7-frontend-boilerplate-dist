/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBMEMsZ0RBQVU7SUFBcEQ7UUFBQSxxRUF5QkM7UUF4QlMsY0FBUSxHQUFXLE1BQU0sQ0FBQzs7SUF3QnBDLENBQUM7Ozs7OztJQXRCVyx3Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3ZELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN4RCxFQUFFO29CQUNELElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzNELENBQUM7U0FDSCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFTSwwQ0FBVzs7OztJQUFsQixVQUFtQixLQUFLO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBMEMsVUFBVSxHQXlCbkQ7Ozs7Ozs7SUF4QkMsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0VGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZyA9ICdsaXN0JztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIHJldHVybiB7IFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIHRleHQ6ICdMSVNUQScsIFxuICAgICAgICBwYXlsb2FkOiAnbGlzdCcsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdsaXN0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAnR1JBRklDTycsIFxuICAgICAgICBwYXlsb2FkOiAnY2hhcnQnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnY2hhcnQnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICdUSU1FTElORScsIFxuICAgICAgICBwYXlsb2FkOiAndGltZWxpbmUnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAndGltZWxpbmUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9XSBcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodGFiSWQpe1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0YWJJZDtcbiAgfVxuXG59Il19