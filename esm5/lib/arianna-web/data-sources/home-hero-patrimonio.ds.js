/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTRDLGtEQUFVO0lBQXREOztJQWdCQSxDQUFDOzs7Ozs7SUFkVywwQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxzQ0FBZSxFQUFFLGtCQUFLLEVBQUUsZ0JBQUksRUFBRSxvQkFBTTtRQUVuRCxPQUFPO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsZUFBZSxpQkFBQTtZQUNmLEtBQUssT0FBQTtZQUNMLElBQUksTUFBQTtZQUNKLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7YUFDN0I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUE0QyxVQUFVLEdBZ0JyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVIZXJvUGF0cmltb25pb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgYmFja2dyb3VuZEltYWdlLCBpbWFnZSwgdGV4dCwgYnV0dG9uIH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgaW1hZ2UsXG4gICAgICB0ZXh0LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICBwYXlsb2FkOiBcIm5hdmlnYS1wYXRyaW1vbmlvXCJcbiAgICAgIH1cbiAgICB9O1xuICB9XG59Il19