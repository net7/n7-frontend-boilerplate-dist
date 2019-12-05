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
        /** @type {?} */
        var fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return typeof el.entity == 'object'; })) // filter only entities (no cultural objects)
        ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE2QyxtREFBVTtJQUF2RDs7SUEyQ0EsQ0FBQzs7Ozs7O0lBekNXLDJDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSxjQUFHLEVBQUUsd0JBQVE7O1lBQ2YsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLHlCQUF5Qjs7OztZQUN6RSxVQUFVLEdBQUcsRUFBRTs7WUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM1QixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7O1lBQzVELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQTVCLENBQTRCLEVBQUMsQ0FBQyw2Q0FBNkM7O1FBRTFILFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxFQUFFO29CQUNULE9BQU8sRUFBRSw4QkFBOEI7b0JBQ3ZDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFO2lCQUNYLENBQUMsQ0FBQTtnQkFDRixPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTthQUN0Qjs7OztnQkFHRyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLEtBQUssRUFBRTs7b0JBQ0wsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckIsc0JBQXNCOztnQkFBdEIsc0JBQXNCO2dCQUN0QixJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQ3hFO2dCQUNELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtpQkFDNUM7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7b0JBQ3ZFLE1BQU0sUUFBQTtvQkFDTixNQUFNLFFBQUE7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBNkMsVUFBVSxHQTJDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGFcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJyguKj8pJyArIGtleSArICcoLiopJywgJ2knKSAvLyAnaScgPSBjYXNlIGluc2Vuc2l0aXZlXG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IFtdXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xuICAgIGNvbnN0IG1heExlbmd0aCA9IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIC8gMlxuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoZWwgPT4gdHlwZW9mIGVsLmVudGl0eSA9PSAnb2JqZWN0JykgLy8gZmlsdGVyIG9ubHkgZW50aXRpZXMgKG5vIGN1bHR1cmFsIG9iamVjdHMpXG4gICAgXG4gICAgZlJlc3VsdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBwcmVmaXg6IGVsLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICAgICAgfVxuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICAvLyBsZXQgbWF0Y2ggPSBlbC5pdGVtLmxhYmVsLm1hdGNoKHJlZ2V4KVxuICAgICAgbGV0IG1hdGNoID0gcmVnZXguZXhlYyhlbC5lbnRpdHkubGFiZWwpXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHByZWZpeCA9IG1hdGNoWzFdXG4gICAgICAgIGxldCBzdWZmaXggPSBtYXRjaFsyXVxuICAgICAgICAvLyBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHByZWZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgcHJlZml4ID0gJy4uLicgKyBwcmVmaXguc2xpY2UocHJlZml4Lmxlbmd0aCAtIG1heExlbmd0aCwgcHJlZml4Lmxlbmd0aClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChzdWZmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zbGljZSgwLCBtYXhMZW5ndGgpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICAgIG1hdGNoOiBtYXRjaC5pbnB1dC5zbGljZShtYXRjaFsxXS5sZW5ndGgsIG1hdGNoWzFdLmxlbmd0aCArIGtleS5sZW5ndGgpLFxuICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgcGF5bG9hZDogZWwuZW50aXR5LmlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gIH1cbn0iXX0=