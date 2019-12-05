/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-hero-patrimonio.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeHeroPatrimonioDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeHeroPatrimonioDS, _super);
    function AwHomeHeroPatrimonioDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeHeroPatrimonioDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var title = data.title, backgroundImage = data.backgroundImage, image = data.image, text = data.text, button = data.button;
        return {
            title: title,
            backgroundImage: backgroundImage,
            image: image,
            text: text,
            button: {
                text: button.text,
                payload: "naviga-patrimonio"
            }
        };
    };
    return AwHomeHeroPatrimonioDS;
}(DataSource));
export { AwHomeHeroPatrimonioDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE0QyxrREFBVTtJQUF0RDs7SUFnQkEsQ0FBQzs7Ozs7O0lBZFcsMENBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGtCQUFLLEVBQUUsc0NBQWUsRUFBRSxrQkFBSyxFQUFFLGdCQUFJLEVBQUUsb0JBQU07UUFFbkQsT0FBTztZQUNMLEtBQUssT0FBQTtZQUNMLGVBQWUsaUJBQUE7WUFDZixLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixPQUFPLEVBQUUsbUJBQW1CO2FBQzdCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFoQkQsQ0FBNEMsVUFBVSxHQWdCckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lSGVyb1BhdHJpbW9uaW9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGJhY2tncm91bmRJbWFnZSwgaW1hZ2UsIHRleHQsIGJ1dHRvbiB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGltYWdlLFxuICAgICAgdGV4dCxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgcGF5bG9hZDogXCJuYXZpZ2EtcGF0cmltb25pb1wiXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSJdfQ==