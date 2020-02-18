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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQXFCQztRQXBCUSx1QkFBaUIsR0FBRyxFQUFFLENBQUM7O0lBb0JoQyxDQUFDOzs7Ozs7SUFsQlcsNEJBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGtCQUFLLEVBQUUsZ0JBQUksRUFBRSxvQkFBTSxFQUFFLHNDQUFlLEVBQUUsa0JBQUs7UUFDbkQsT0FBTztZQUNMLEtBQUssT0FBQTtZQUNMLElBQUksTUFBQTtZQUNKLGVBQWUsaUJBQUE7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUE4QixVQUFVLEdBcUJ2Qzs7OztJQXBCQyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGN1cnJlbnRJbnB1dFZhbHVlID0gJyc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zdCB7IHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQgfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dCxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2NlcmNhJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwYXlsb2FkOiAnY2VyY2EtaW4tbWF4eGknXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSJdfQ==