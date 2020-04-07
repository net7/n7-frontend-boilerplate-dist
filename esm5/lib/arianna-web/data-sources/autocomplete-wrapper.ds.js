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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVoRTtJQUE2QyxtREFBVTtJQUF2RDtRQUFBLHFFQTBDQztRQVRTLGdCQUFVOzs7OztRQUFHLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDakM7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7OztJQXpDVywyQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkE4QkM7UUE3QlMsSUFBQSx3QkFBUTtRQUVoQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztZQUVLLFVBQVUsR0FBRyxFQUFFO1FBQ2IsSUFBQSw0QkFBTTs7WUFDUixTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOztZQUNoRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUE3QixDQUE2QixFQUFDO1FBRS9FLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDbEUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7YUFDdkI7O2dCQUNLLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNkLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFXSCw4QkFBQztBQUFELENBQUMsQUExQ0QsQ0FBNkMsVUFBVSxHQTBDdEQ7Ozs7Ozs7SUFUQyw2Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcblxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGRhdGE7XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXTtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IChjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSB8fCAyMCk7XG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbC5lbnRpdHkgPT09ICdvYmplY3QnKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIGZSZXN1bHRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09PSAnZmFsbGJhY2snKSB7IC8vIGJ1aWxkIGFuZCByZXR1cm4gZmFsbGJhY2sgZGF0YVxuICAgICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICAgIHRleHQ6IGVsLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBwYXlsb2FkOiAnZmFsbGJhY2stc2ltcGxlLWF1dG9jb21wbGV0ZScsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uIH07XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdHJpbmdUcmltKGVsLmVudGl0eS5sYWJlbCwgbWF4TGVuZ3RoKTtcbiAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfTtcbiAgfVxuXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9IChzdHJpbmcsIGxpbWl0KSA9PiB7XG4gICAgLypcbiAgICAgIFNsaWNlcyB0aGUgc3RyaW5nIGFuZCBhZGRzIHRyYWlsaW5nIGVsbGlwc2lzXG4gICAgICBUT0RPOiBEbyBub3QgY3V0IHRoZSBzdHJpbmcgaW4gdGhlIG1pZGRsZSBvZiBhbiBIVE1MIHRhZyFcbiAgICAqL1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgIHJldHVybiBgJHtzdHJpbmcuc2xpY2UoMCwgbGltaXQpfeKApmA7XG4gICAgfSByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iXX0=