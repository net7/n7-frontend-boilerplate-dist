/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHeroDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHeroDS, _super);
    function AwHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                payload: "cerca"
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFrQkEsQ0FBQzs7Ozs7O0lBakJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSxrQkFBSyxFQUFFLGdCQUFJLEVBQUUsb0JBQU0sRUFBRSxzQ0FBZSxFQUFFLGtCQUFLO1FBRW5ELE9BQU87WUFDTCxLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7WUFDSixlQUFlLGlCQUFBO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUE4QixVQUFVLEdBa0J2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGNvbnN0IHsgdGl0bGUsIHRleHQsIGJ1dHRvbiwgYmFja2dyb3VuZEltYWdlLCBpbnB1dCB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHRleHQsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2FcIlxuICAgICAgfSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBpbnB1dC5wbGFjZWhvbGRlcixcbiAgICAgICAgcGF5bG9hZDogXCJjZXJjYS1pbi1tYXh4aVwiXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSJdfQ==