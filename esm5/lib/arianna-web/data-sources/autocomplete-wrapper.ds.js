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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE2QyxtREFBVTtJQUF2RDtRQUFBLHFFQTBDQztRQVRTLGdCQUFVOzs7OztRQUFHLFVBQUUsTUFBTSxFQUFFLEtBQUs7WUFDbEM7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUE7YUFDcEM7O2dCQUFNLE9BQU8sTUFBTSxDQUFBO1FBQ3RCLENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7Ozs7SUF4Q1csMkNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBNkJDO1FBNUJTLElBQUEsY0FBRyxFQUFFLHdCQUFRO1FBRXJCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7O1lBRUssVUFBVSxHQUFHLEVBQUU7O1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDNUIsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDaEUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBNUIsQ0FBNEIsRUFBQztRQUU1RSxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUE7YUFDdEI7O2dCQUNLLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNkLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtRQUNGLE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFXSCw4QkFBQztBQUFELENBQUMsQUExQ0QsQ0FBNkMsVUFBVSxHQTBDdEQ7Ozs7Ozs7SUFUQyw2Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YTtcblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb246IFtdLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IFtdXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xuICAgIGNvbnN0IG1heExlbmd0aCA9IChjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSB8fCAyMClcbiAgICBjb25zdCBmUmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHMuZmlsdGVyKGVsID0+IHR5cGVvZiBlbC5lbnRpdHkgPT0gJ29iamVjdCcpXG5cbiAgICBmUmVzdWx0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC5lbnRpdHkuaWQgPT0gJ2ZhbGxiYWNrJykgeyAvLyBidWlsZCBhbmQgcmV0dXJuIGZhbGxiYWNrIGRhdGFcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBlbC5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgcGF5bG9hZDogJ2ZhbGxiYWNrLXNpbXBsZS1hdXRvY29tcGxldGUnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0cmluZ1RyaW0oZWwuZW50aXR5LmxhYmVsLCBtYXhMZW5ndGgpXG4gICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICB0ZXh0LFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICB9XG4gIFxuICBwcml2YXRlIHN0cmluZ1RyaW0gPSAoIHN0cmluZywgbGltaXQgKSA9PiB7XG4gICAgLypcbiAgICAgIFNsaWNlcyB0aGUgc3RyaW5nIGFuZCBhZGRzIHRyYWlsaW5nIGVsbGlwc2lzXG4gICAgICBUT0RPOiBEbyBub3QgY3V0IHRoZSBzdHJpbmcgaW4gdGhlIG1pZGRsZSBvZiBhbiBIVE1MIHRhZyFcbiAgICAqL1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGltaXQpICsgJ+KApidcbiAgICB9IGVsc2UgcmV0dXJuIHN0cmluZ1xuICB9XG59Il19