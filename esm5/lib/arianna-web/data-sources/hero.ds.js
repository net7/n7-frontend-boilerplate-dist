/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQXVCQztRQXRCUSx1QkFBaUIsR0FBRyxFQUFFLENBQUM7O0lBc0JoQyxDQUFDOzs7Ozs7SUFwQlcsNEJBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFFcEIsSUFBQSxrQkFBSyxFQUFFLGdCQUFJLEVBQUUsb0JBQU0sRUFBRSxzQ0FBZSxFQUFFLGtCQUFLO1FBRTdDLE9BQU87WUFDTCxLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7WUFDSixlQUFlLGlCQUFBO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF2QkQsQ0FBOEIsVUFBVSxHQXVCdkM7Ozs7SUF0QkMscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZSA9ICcnO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQsXG4gICAgfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dCxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2NlcmNhJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBheWxvYWQ6ICdjZXJjYS1pbi1tYXh4aScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==