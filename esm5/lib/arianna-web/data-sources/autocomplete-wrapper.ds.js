/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/autocomplete-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core/dist/data-source';
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
                return string.slice(0, limit) + "\u2026";
            }
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
        var response = data.response;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        /** @type {?} */
        var suggestion = [];
        var config = this.options.config;
        /** @type {?} */
        var maxLength = (config.get('home-layout')['max-item-length'] || 20);
        /** @type {?} */
        var fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return typeof el.entity === 'object'; }));
        // eslint-disable-next-line consistent-return
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            if (el.entity.id === 'fallback') { // build and return fallback data
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
                    payload: el.entity.id,
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVoRTtJQUE2QyxtREFBVTtJQUF2RDtRQUFBLHFFQTBDQztRQVRTLGdCQUFVOzs7OztRQUFHLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDakM7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7OztJQXpDVywyQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkE4QkM7UUE3QlMsSUFBQSx3QkFBUTtRQUVoQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztZQUVLLFVBQVUsR0FBRyxFQUFFO1FBQ2IsSUFBQSw0QkFBTTs7WUFDUixTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOztZQUNoRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUE3QixDQUE2QixFQUFDO1FBRS9FLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDbEUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7YUFDdkI7O2dCQUNLLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNkLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFXSCw4QkFBQztBQUFELENBQUMsQUExQ0QsQ0FBNkMsVUFBVSxHQTBDdEQ7Ozs7Ozs7SUFUQyw2Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gZGF0YTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb246IFtdLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IG1heExlbmd0aCA9IChjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSB8fCAyMCk7XHJcbiAgICBjb25zdCBmUmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHMuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsLmVudGl0eSA9PT0gJ29iamVjdCcpO1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gICAgZlJlc3VsdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgaWYgKGVsLmVudGl0eS5pZCA9PT0gJ2ZhbGxiYWNrJykgeyAvLyBidWlsZCBhbmQgcmV0dXJuIGZhbGxiYWNrIGRhdGFcclxuICAgICAgICBzdWdnZXN0aW9uLnB1c2goe1xyXG4gICAgICAgICAgdGV4dDogZWwuZW50aXR5LmxhYmVsLFxyXG4gICAgICAgICAgcGF5bG9hZDogJ2ZhbGxiYWNrLXNpbXBsZS1hdXRvY29tcGxldGUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdHJpbmdUcmltKGVsLmVudGl0eS5sYWJlbCwgbWF4TGVuZ3RoKTtcclxuICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogZWwuZW50aXR5LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0cmluZ1RyaW0gPSAoc3RyaW5nLCBsaW1pdCkgPT4ge1xyXG4gICAgLypcclxuICAgICAgU2xpY2VzIHRoZSBzdHJpbmcgYW5kIGFkZHMgdHJhaWxpbmcgZWxsaXBzaXNcclxuICAgICAgVE9ETzogRG8gbm90IGN1dCB0aGUgc3RyaW5nIGluIHRoZSBtaWRkbGUgb2YgYW4gSFRNTCB0YWchXHJcbiAgICAqL1xyXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICByZXR1cm4gYCR7c3RyaW5nLnNsaWNlKDAsIGxpbWl0KX3igKZgO1xyXG4gICAgfSByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxufVxyXG4iXX0=