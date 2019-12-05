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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsb0NBQVU7SUFBeEM7O0lBa0JBLENBQUM7Ozs7OztJQWpCVyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxnQkFBSSxFQUFFLG9CQUFNLEVBQUUsc0NBQWUsRUFBRSxrQkFBSztRQUVuRCxPQUFPO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1lBQ0osZUFBZSxpQkFBQTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFsQkQsQ0FBOEIsVUFBVSxHQWtCdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zdCB7IHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICB0ZXh0LFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICBwYXlsb2FkOiBcImNlcmNhXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2EtaW4tbWF4eGlcIlxuICAgICAgfVxuICAgIH07XG4gIH1cbn0iXX0=