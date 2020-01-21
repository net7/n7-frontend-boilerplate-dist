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
                payload: el.entity.id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTZDLG1EQUFVO0lBQXZEO1FBQUEscUVBd0NDO1FBVFMsZ0JBQVU7Ozs7O1FBQUcsVUFBRSxNQUFNLEVBQUUsS0FBSztZQUNsQzs7O2NBR0U7WUFDRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUNwQzs7Z0JBQU0sT0FBTyxNQUFNLENBQUE7UUFDdEIsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7OztJQXRDVywyQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkEyQkM7UUExQlMsSUFBQSxjQUFHLEVBQUUsd0JBQVE7UUFFckIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQzs7WUFFSyxVQUFVLEdBQUcsRUFBRTs7WUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM1QixTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOztZQUNoRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxPQUFPLEVBQUUsQ0FBQyxNQUFNLElBQUksUUFBUSxFQUE1QixDQUE0QixFQUFDO1FBRTVFLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLE9BQU8sRUFBRSw4QkFBOEI7aUJBQ3hDLENBQUMsQ0FBQTtnQkFDRixPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTthQUN0Qjs7Z0JBQ0ssSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSSxNQUFBO2dCQUNKLE9BQU8sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFDLENBQUE7UUFDRixPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBV0gsOEJBQUM7QUFBRCxDQUFDLEFBeENELENBQTZDLFVBQVUsR0F3Q3REOzs7Ozs7O0lBVEMsNkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGE7XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXVxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcbiAgICBjb25zdCBtYXhMZW5ndGggPSAoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gfHwgMjApXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcihlbCA9PiB0eXBlb2YgZWwuZW50aXR5ID09ICdvYmplY3QnKVxuXG4gICAgZlJlc3VsdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgdGV4dDogZWwuZW50aXR5LmxhYmVsLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdHJpbmdUcmltKGVsLmVudGl0eS5sYWJlbCwgbWF4TGVuZ3RoKVxuICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgcGF5bG9hZDogZWwuZW50aXR5LmlkXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gIH1cbiAgXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9ICggc3RyaW5nLCBsaW1pdCApID0+IHtcbiAgICAvKlxuICAgICAgU2xpY2VzIHRoZSBzdHJpbmcgYW5kIGFkZHMgdHJhaWxpbmcgZWxsaXBzaXNcbiAgICAgIFRPRE86IERvIG5vdCBjdXQgdGhlIHN0cmluZyBpbiB0aGUgbWlkZGxlIG9mIGFuIEhUTUwgdGFnIVxuICAgICovXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsaW1pdCkgKyAn4oCmJ1xuICAgIH0gZWxzZSByZXR1cm4gc3RyaW5nXG4gIH1cbn0iXX0=