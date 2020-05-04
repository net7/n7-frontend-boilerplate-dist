/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/hero.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHeroDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHeroDS, _super);
    function AwHeroDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentInputValue = '';
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHeroDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var title = data.title, text = data.text, button = data.button, backgroundImage = data.backgroundImage, input = data.input;
        return {
            title: title,
            text: text,
            backgroundImage: backgroundImage,
            button: {
                text: button.text,
                anchor: {
                    payload: 'cerca',
                },
            },
            input: {
                placeholder: input.placeholder,
                payload: 'cerca-in-maxxi',
            },
        };
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
if (false) {
    /** @type {?} */
    AwHeroDS.prototype.currentInputValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsb0NBQVU7SUFBeEM7UUFBQSxxRUF1QkM7UUF0QlEsdUJBQWlCLEdBQUcsRUFBRSxDQUFDOztJQXNCaEMsQ0FBQzs7Ozs7O0lBcEJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBRXBCLElBQUEsa0JBQUssRUFBRSxnQkFBSSxFQUFFLG9CQUFNLEVBQUUsc0NBQWUsRUFBRSxrQkFBSztRQUU3QyxPQUFPO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1lBQ0osZUFBZSxpQkFBQTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBdkJELENBQThCLFVBQVUsR0F1QnZDOzs7O0lBdEJDLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY3VycmVudElucHV0VmFsdWUgPSAnJztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0LFxuICAgIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHRleHQsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdjZXJjYScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwYXlsb2FkOiAnY2VyY2EtaW4tbWF4eGknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=