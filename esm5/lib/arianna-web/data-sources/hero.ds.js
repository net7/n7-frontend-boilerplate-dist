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
                    payload: 'cerca'
                }
            },
            input: {
                placeholder: input.placeholder,
                payload: 'cerca-in-maxxi'
            }
        };
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
if (false) {
    /** @type {?} */
    AwHeroDS.prototype.currentInputValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsb0NBQVU7SUFBeEM7UUFBQSxxRUFxQkM7UUFwQlEsdUJBQWlCLEdBQUcsRUFBRSxDQUFDOztJQW9CaEMsQ0FBQzs7Ozs7O0lBbEJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSxrQkFBSyxFQUFFLGdCQUFJLEVBQUUsb0JBQU0sRUFBRSxzQ0FBZSxFQUFFLGtCQUFLO1FBQ25ELE9BQU87WUFDTCxLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7WUFDSixlQUFlLGlCQUFBO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFyQkQsQ0FBOEIsVUFBVSxHQXFCdkM7Ozs7SUFwQkMscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZSA9ICcnO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgY29uc3QgeyB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0IH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHRleHQsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdjZXJjYSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBpbnB1dC5wbGFjZWhvbGRlcixcbiAgICAgICAgcGF5bG9hZDogJ2NlcmNhLWluLW1heHhpJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0iXX0=