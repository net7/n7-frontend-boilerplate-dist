/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwAutocompleteWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwAutocompleteWrapperDS, _super);
    function AwAutocompleteWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stringTrim = (/**
         * @param {?} string
         * @param {?} limit
         * @return {?}
         */
        function (string, limit) {
            /*
              Slices the string and adds trailing ellipsis
              TODO: Do not cut the string in the middle of an HTML tag!
            */
            if (string.length > limit) {
                return string.slice(0, limit) + '…';
            }
            else
                return string;
        });
        return _this;
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
        var _this = this;
        var key = data.key, response = data.response;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        /** @type {?} */
        var suggestion = [];
        /** @type {?} */
        var config = this.options.config;
        /** @type {?} */
        var maxLength = (config.get('home-layout')['max-item-length'] || 20);
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
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion: suggestion };
            }
            /** @type {?} */
            var text = _this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text: text,
                anchor: {
                    payload: el.entity.id
                }
            });
        }));
        return { suggestion: suggestion };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwAutocompleteWrapperDS.prototype.stringTrim;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEO1FBQUEscUVBMENDO1FBVFMsZ0JBQVU7Ozs7O1FBQUcsVUFBRSxNQUFNLEVBQUUsS0FBSztZQUNsQzs7O2NBR0U7WUFDRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUNwQzs7Z0JBQU0sT0FBTyxNQUFNLENBQUE7UUFDdEIsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7OztJQXhDVywyQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkE2QkM7UUE1QlMsSUFBQSxjQUFHLEVBQUUsd0JBQVE7UUFFckIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQzs7WUFFSyxVQUFVLEdBQUcsRUFBRTs7WUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM1QixTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOztZQUNoRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxPQUFPLEVBQUUsQ0FBQyxNQUFNLElBQUksUUFBUSxFQUE1QixDQUE0QixFQUFDO1FBRTVFLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLE9BQU8sRUFBRSw4QkFBOEI7aUJBQ3hDLENBQUMsQ0FBQTtnQkFDRixPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTthQUN0Qjs7Z0JBQ0ssSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSSxNQUFBO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQVdILDhCQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUE2QyxVQUFVLEdBMEN0RDs7Ozs7OztJQVRDLDZDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBrZXksIHJlc3BvbnNlIH0gPSBkYXRhO1xuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbjogW10sIGxvYWRpbmc6IHRydWUgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIHx8IDIwKVxuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoZWwgPT4gdHlwZW9mIGVsLmVudGl0eSA9PSAnb2JqZWN0JylcblxuICAgIGZSZXN1bHRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmVudGl0eS5pZCA9PSAnZmFsbGJhY2snKSB7IC8vIGJ1aWxkIGFuZCByZXR1cm4gZmFsbGJhY2sgZGF0YVxuICAgICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICAgIHRleHQ6IGVsLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBwYXlsb2FkOiAnZmFsbGJhY2stc2ltcGxlLWF1dG9jb21wbGV0ZScsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICAgICAgfVxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RyaW5nVHJpbShlbC5lbnRpdHkubGFiZWwsIG1heExlbmd0aClcbiAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gIH1cbiAgXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9ICggc3RyaW5nLCBsaW1pdCApID0+IHtcbiAgICAvKlxuICAgICAgU2xpY2VzIHRoZSBzdHJpbmcgYW5kIGFkZHMgdHJhaWxpbmcgZWxsaXBzaXNcbiAgICAgIFRPRE86IERvIG5vdCBjdXQgdGhlIHN0cmluZyBpbiB0aGUgbWlkZGxlIG9mIGFuIEhUTUwgdGFnIVxuICAgICovXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsaW1pdCkgKyAn4oCmJ1xuICAgIH0gZWxzZSByZXR1cm4gc3RyaW5nXG4gIH1cbn0iXX0=