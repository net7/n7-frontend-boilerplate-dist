/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwAutocompleteWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwAutocompleteWrapperDS, _super);
    function AwAutocompleteWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwAutocompleteWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var key = data.key, response = data.response;
        /** @type {?} */
        var regex = new RegExp('(.*?)' + key + '(.*)');
        /** @type {?} */
        var append = [];
        response.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var position = el.item.label.indexOf(key)
            // if the typed text is not in the label, skip it
            ;
            // if the typed text is not in the label, skip it
            if (position < 0) {
                return;
            }
            // divide prefix and suffix
            /** @type {?} */
            var match = el.item.label.match(regex);
            /** @type {?} */
            var prefix = match[1];
            /** @type {?} */
            var suffix = match[2];
            append.push({ prefix: prefix, suffix: suffix, payload: el.item.id });
        }));
        return { typed: key, append: append };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEOztJQXFCQSxDQUFDOzs7Ozs7SUFuQlcsMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGNBQUcsRUFBRSx3QkFBUTs7WUFDZixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7O1lBQzFDLE1BQU0sR0FBRyxFQUFFO1FBRWpCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsRUFBRTs7Z0JBQ25CLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3pDLGlEQUFpRDs7WUFBakQsaURBQWlEO1lBQ2pELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDaEIsT0FBTzthQUNSOzs7Z0JBRUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7O2dCQUNsQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBckJELENBQTZDLFVBQVUsR0FxQnREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBrZXksIHJlc3BvbnNlIH0gPSBkYXRhXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoLio/KScgKyBrZXkgKyAnKC4qKScpXG4gICAgY29uc3QgYXBwZW5kID0gW11cblxuICAgIHJlc3BvbnNlLml0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uID0gZWwuaXRlbS5sYWJlbC5pbmRleE9mKGtleSlcbiAgICAgIC8vIGlmIHRoZSB0eXBlZCB0ZXh0IGlzIG5vdCBpbiB0aGUgbGFiZWwsIHNraXAgaXRcbiAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICBsZXQgbWF0Y2ggPSBlbC5pdGVtLmxhYmVsLm1hdGNoKHJlZ2V4KVxuICAgICAgbGV0IHByZWZpeCA9IG1hdGNoWzFdXG4gICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbMl1cbiAgICAgIGFwcGVuZC5wdXNoKHsgcHJlZml4LCBzdWZmaXgsIHBheWxvYWQ6IGVsLml0ZW0uaWQgfSlcbiAgICB9KTtcbiAgICByZXR1cm4geyB0eXBlZDoga2V5LCBhcHBlbmQgfVxuICB9XG59Il19