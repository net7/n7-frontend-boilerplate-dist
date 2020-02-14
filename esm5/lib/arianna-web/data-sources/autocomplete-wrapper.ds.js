/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/autocomplete-wrapper.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE2QyxtREFBVTtJQUF2RDtRQUFBLHFFQTBDQztRQVRTLGdCQUFVOzs7OztRQUFHLFVBQUUsTUFBTSxFQUFFLEtBQUs7WUFDbEM7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUE7YUFDcEM7O2dCQUFNLE9BQU8sTUFBTSxDQUFBO1FBQ3RCLENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7Ozs7SUF4Q1csMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBNkJDO1FBNUJTLElBQUEsY0FBRyxFQUFFLHdCQUFRO1FBRXJCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7O1lBRUssVUFBVSxHQUFHLEVBQUU7O1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDNUIsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDaEUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBNUIsQ0FBNEIsRUFBQztRQUU1RSxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUE7YUFDdEI7O2dCQUNLLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNkLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtRQUNGLE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFXSCw4QkFBQztBQUFELENBQUMsQUExQ0QsQ0FBNkMsVUFBVSxHQTBDdEQ7Ozs7Ozs7SUFUQyw2Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXVxyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xyXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIHx8IDIwKVxyXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcihlbCA9PiB0eXBlb2YgZWwuZW50aXR5ID09ICdvYmplY3QnKVxyXG5cclxuICAgIGZSZXN1bHRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXHJcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IGVsLmVudGl0eS5sYWJlbCxcclxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0cmluZ1RyaW0oZWwuZW50aXR5LmxhYmVsLCBtYXhMZW5ndGgpXHJcbiAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBzdHJpbmdUcmltID0gKCBzdHJpbmcsIGxpbWl0ICkgPT4ge1xyXG4gICAgLypcclxuICAgICAgU2xpY2VzIHRoZSBzdHJpbmcgYW5kIGFkZHMgdHJhaWxpbmcgZWxsaXBzaXNcclxuICAgICAgVE9ETzogRG8gbm90IGN1dCB0aGUgc3RyaW5nIGluIHRoZSBtaWRkbGUgb2YgYW4gSFRNTCB0YWchXHJcbiAgICAqL1xyXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxpbWl0KSArICfigKYnXHJcbiAgICB9IGVsc2UgcmV0dXJuIHN0cmluZ1xyXG4gIH1cclxufSJdfQ==