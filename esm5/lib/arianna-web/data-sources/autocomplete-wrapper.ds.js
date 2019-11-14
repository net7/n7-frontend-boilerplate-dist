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
        response.entities.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            // divide prefix and suffix
            // let match = el.item.label.match(regex)
            /** @type {?} */
            var match = regex.exec(el.entity.label);
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
                    payload: el.entity.id
                });
            }
        }));
        return { suggestion: suggestion };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEOztJQWlDQSxDQUFDOzs7Ozs7SUEvQlcsMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGNBQUcsRUFBRSx3QkFBUTs7WUFDZixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O1lBQ3pFLFVBQVUsR0FBRyxFQUFFOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUU7Ozs7Z0JBR3RCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxFQUFFOztvQkFDTCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixzQkFBc0I7O2dCQUF0QixzQkFBc0I7Z0JBQ3RCLElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDeEU7Z0JBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO2lCQUM1QztnQkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztvQkFDdkUsTUFBTSxRQUFBO29CQUNOLE1BQU0sUUFBQTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUE2QyxVQUFVLEdBaUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknLCAnaScpIC8vICdpJyA9IGNhc2UgaW5zZW5zaXRpdmVcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gLyAyXG5cbiAgICByZXNwb25zZS5lbnRpdGllcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIC8vIGRpdmlkZSBwcmVmaXggYW5kIHN1ZmZpeFxuICAgICAgLy8gbGV0IG1hdGNoID0gZWwuaXRlbS5sYWJlbC5tYXRjaChyZWdleClcbiAgICAgIGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMoZWwuZW50aXR5LmxhYmVsKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBtYXRjaFsxXVxuICAgICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbMl1cbiAgICAgICAgLy8gc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChwcmVmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHByZWZpeCA9ICcuLi4nICsgcHJlZml4LnNsaWNlKHByZWZpeC5sZW5ndGggLSBtYXhMZW5ndGgsIHByZWZpeC5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAoc3VmZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBzdWZmaXggPSBzdWZmaXguc2xpY2UoMCwgbWF4TGVuZ3RoKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2guaW5wdXQuc2xpY2UobWF0Y2hbMV0ubGVuZ3RoLCBtYXRjaFsxXS5sZW5ndGggKyBrZXkubGVuZ3RoKSxcbiAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgc3VmZml4LFxuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICB9XG59Il19