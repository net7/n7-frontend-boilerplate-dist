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
        if (!response) {
            return { suggestion: [], loading: true };
        }
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
        /** @type {?} */
        var fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return typeof el.entity == 'object'; }));
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            if (el.entity.id == 'fallback') { // build and return fallback data
                suggestion.push({
                    match: '',
                    payload: 'fallback-simple-autocomplete',
                    prefix: el.entity.label,
                    suffix: ''
                });
                return { suggestion: suggestion };
            }
            // divide prefix and suffix
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEOztJQStDQSxDQUFDOzs7Ozs7SUE3Q1csMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGNBQUcsRUFBRSx3QkFBUTtRQUVyQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztZQUVLLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyx5QkFBeUI7Ozs7WUFDekUsVUFBVSxHQUFHLEVBQUU7O1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDNUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDOztZQUM1RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxPQUFPLEVBQUUsQ0FBQyxNQUFNLElBQUksUUFBUSxFQUE1QixDQUE0QixFQUFDO1FBRTVFLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxFQUFFO29CQUNULE9BQU8sRUFBRSw4QkFBOEI7b0JBQ3ZDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFO2lCQUNYLENBQUMsQ0FBQTtnQkFDRixPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTthQUN0Qjs7O2dCQUVHLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxFQUFFOztvQkFDTCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixzQkFBc0I7O2dCQUF0QixzQkFBc0I7Z0JBQ3RCLElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDeEU7Z0JBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO2lCQUM1QztnQkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztvQkFDdkUsTUFBTSxRQUFBO29CQUNOLE1BQU0sUUFBQTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQS9DRCxDQUE2QyxVQUFVLEdBK0N0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YTtcblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb246IFtdLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoLio/KScgKyBrZXkgKyAnKC4qKScsICdpJykgLy8gJ2knID0gY2FzZSBpbnNlbnNpdGl2ZVxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXVxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcbiAgICBjb25zdCBtYXhMZW5ndGggPSBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSAvIDJcbiAgICBjb25zdCBmUmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHMuZmlsdGVyKGVsID0+IHR5cGVvZiBlbC5lbnRpdHkgPT0gJ29iamVjdCcpXG5cbiAgICBmUmVzdWx0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC5lbnRpdHkuaWQgPT0gJ2ZhbGxiYWNrJykgeyAvLyBidWlsZCBhbmQgcmV0dXJuIGZhbGxiYWNrIGRhdGFcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICBtYXRjaDogJycsXG4gICAgICAgICAgcGF5bG9hZDogJ2ZhbGxiYWNrLXNpbXBsZS1hdXRvY29tcGxldGUnLFxuICAgICAgICAgIHByZWZpeDogZWwuZW50aXR5LmxhYmVsLFxuICAgICAgICAgIHN1ZmZpeDogJydcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gICAgICB9XG4gICAgICAvLyBkaXZpZGUgcHJlZml4IGFuZCBzdWZmaXhcbiAgICAgIGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMoZWwuZW50aXR5LmxhYmVsKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBtYXRjaFsxXVxuICAgICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbMl1cbiAgICAgICAgLy8gc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChwcmVmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHByZWZpeCA9ICcuLi4nICsgcHJlZml4LnNsaWNlKHByZWZpeC5sZW5ndGggLSBtYXhMZW5ndGgsIHByZWZpeC5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAoc3VmZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBzdWZmaXggPSBzdWZmaXguc2xpY2UoMCwgbWF4TGVuZ3RoKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2guaW5wdXQuc2xpY2UobWF0Y2hbMV0ubGVuZ3RoLCBtYXRjaFsxXS5sZW5ndGggKyBrZXkubGVuZ3RoKSxcbiAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgc3VmZml4LFxuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICB9XG59Il19