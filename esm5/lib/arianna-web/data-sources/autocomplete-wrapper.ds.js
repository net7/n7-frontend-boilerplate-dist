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
        var regex = new RegExp('(.*?)' + key + '(.*)', 'i') // 'i' = case insensitive
        ;
        // 'i' = case insensitive
        /** @type {?} */
        var suggestion = [];
        /** @type {?} */
        var config = this.options.config;
        /** @type {?} */
        var maxLength = config.get('home-layout')['max-item-length'] / 2;
        response.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            // divide prefix and suffix
            /** @type {?} */
            var match = regex.exec(el.item.label);
            if (match) {
                /** @type {?} */
                var prefix = match[1];
                /** @type {?} */
                var suffix = match[2]
                // string manipulation
                ;
                // string manipulation
                if (maxLength && (prefix.length > maxLength)) {
                    prefix = '...' + prefix.slice(prefix.length - maxLength, prefix.length);
                }
                if (maxLength && (suffix.length > maxLength)) {
                    suffix = suffix.slice(0, maxLength) + '...';
                }
                suggestion.push({
                    match: match.input.slice(match[1].length, match[1].length + key.length),
                    prefix: prefix,
                    suffix: suffix,
                    payload: el.item.id
                });
            }
        }));
        return { suggestion: suggestion };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEOztJQWdDQSxDQUFDOzs7Ozs7SUE5QlcsMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGNBQUcsRUFBRSx3QkFBUTs7WUFDZixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O1lBQ3pFLFVBQVUsR0FBRyxFQUFFOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUU7OztnQkFFbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxLQUFLLEVBQUU7O29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFzQjs7Z0JBQXRCLHNCQUFzQjtnQkFDdEIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUN4RTtnQkFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7aUJBQzVDO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUN2RSxNQUFNLFFBQUE7b0JBQ04sTUFBTSxRQUFBO29CQUNOLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7aUJBQ3BCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBaENELENBQTZDLFVBQVUsR0FnQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBrZXksIHJlc3BvbnNlIH0gPSBkYXRhXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoLio/KScgKyBrZXkgKyAnKC4qKScsICdpJykgLy8gJ2knID0gY2FzZSBpbnNlbnNpdGl2ZVxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXVxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcbiAgICBjb25zdCBtYXhMZW5ndGggPSBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSAvIDJcblxuICAgIHJlc3BvbnNlLml0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICBsZXQgbWF0Y2ggPSByZWdleC5leGVjKGVsLml0ZW0ubGFiZWwpXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHByZWZpeCA9IG1hdGNoWzFdXG4gICAgICAgIGxldCBzdWZmaXggPSBtYXRjaFsyXVxuICAgICAgICAvLyBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHByZWZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgcHJlZml4ID0gJy4uLicgKyBwcmVmaXguc2xpY2UocHJlZml4Lmxlbmd0aCAtIG1heExlbmd0aCwgcHJlZml4Lmxlbmd0aClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChzdWZmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zbGljZSgwLCBtYXhMZW5ndGgpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICAgIG1hdGNoOiBtYXRjaC5pbnB1dC5zbGljZShtYXRjaFsxXS5sZW5ndGgsIG1hdGNoWzFdLmxlbmd0aCArIGtleS5sZW5ndGgpLFxuICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgcGF5bG9hZDogZWwuaXRlbS5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICB9XG59Il19