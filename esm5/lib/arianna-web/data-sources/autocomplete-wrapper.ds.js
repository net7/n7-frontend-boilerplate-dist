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
        var append = [];
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
            // let match = el.item.label.match(regex)
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
                append.push({ prefix: prefix, suffix: suffix, payload: el.item.id });
            }
        }));
        return { typed: key, append: append };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEOztJQTRCQSxDQUFDOzs7Ozs7SUExQlcsMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGNBQUcsRUFBRSx3QkFBUTs7WUFDZixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O1lBQ3pFLE1BQU0sR0FBRyxFQUFFOztZQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUU7Ozs7Z0JBR25CLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JDLElBQUksS0FBSyxFQUFFOztvQkFDTCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixzQkFBc0I7O2dCQUF0QixzQkFBc0I7Z0JBQ3RCLElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDeEU7Z0JBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO2lCQUM1QztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTthQUNyRDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBNUJELENBQTZDLFVBQVUsR0E0QnREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBrZXksIHJlc3BvbnNlIH0gPSBkYXRhXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoLio/KScgKyBrZXkgKyAnKC4qKScsICdpJykgLy8gJ2knID0gY2FzZSBpbnNlbnNpdGl2ZVxuICAgIGNvbnN0IGFwcGVuZCA9IFtdXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xuICAgIGNvbnN0IG1heExlbmd0aCA9IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIC8gMlxuXG4gICAgcmVzcG9uc2UuaXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAvLyBkaXZpZGUgcHJlZml4IGFuZCBzdWZmaXhcbiAgICAgIC8vIGxldCBtYXRjaCA9IGVsLml0ZW0ubGFiZWwubWF0Y2gocmVnZXgpXG4gICAgICBsZXQgbWF0Y2ggPSByZWdleC5leGVjKGVsLml0ZW0ubGFiZWwpXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHByZWZpeCA9IG1hdGNoWzFdXG4gICAgICAgIGxldCBzdWZmaXggPSBtYXRjaFsyXVxuICAgICAgICAvLyBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHByZWZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgcHJlZml4ID0gJy4uLicgKyBwcmVmaXguc2xpY2UocHJlZml4Lmxlbmd0aCAtIG1heExlbmd0aCwgcHJlZml4Lmxlbmd0aClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChzdWZmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zbGljZSgwLCBtYXhMZW5ndGgpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICBhcHBlbmQucHVzaCh7IHByZWZpeCwgc3VmZml4LCBwYXlsb2FkOiBlbC5pdGVtLmlkIH0pXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdHlwZWQ6IGtleSwgYXBwZW5kIH1cbiAgfVxufSJdfQ==