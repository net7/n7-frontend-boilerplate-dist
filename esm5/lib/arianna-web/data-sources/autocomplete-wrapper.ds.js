import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwAutocompleteWrapperDS = /** @class */ (function (_super) {
    __extends(AwAutocompleteWrapperDS, _super);
    function AwAutocompleteWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Given a string, it trims it to the specified length.
         *
         * @param string an input string
         * @param limit character limit
         * @returns the resulting trimmed string
         */
        _this.stringTrim = function (string, limit) {
            if (string.length > limit) {
                return string.slice(0, limit) + "\u2026";
            }
            return string;
        };
        return _this;
    }
    AwAutocompleteWrapperDS.prototype.transform = function (data) {
        var _this = this;
        var response = data.response;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        var suggestion = [];
        var config = this.options.config;
        var maxLength = (config.get('home-layout')['max-item-length'] || 20);
        var fResults = response.results.filter(function (el) { return typeof el.entity === 'object'; });
        // eslint-disable-next-line consistent-return
        fResults.forEach(function (el) {
            if (el.entity.id === 'fallback') { // build and return fallback data
                suggestion.push({
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion: suggestion };
            }
            var text = _this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text: text,
                anchor: {
                    payload: el.entity.id,
                },
            });
        });
        return { suggestion: suggestion };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));
export { AwAutocompleteWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBNkMsMkNBQVU7SUFBdkQ7UUFBQSxxRUE2Q0M7UUFaQzs7Ozs7O1dBTUc7UUFDSyxnQkFBVSxHQUFHLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDakMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBOztJQUNILENBQUM7SUE1Q1csMkNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkE4QkM7UUE3QlMsSUFBQSx3QkFBUSxDQUFVO1FBRTFCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFBLDRCQUFNLENBQWtCO1FBQ2hDLElBQU0sU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBRWhGLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDbEUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSSxNQUFBO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWNILDhCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUE2QyxVQUFVLEdBNkN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXTtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBtYXhMZW5ndGggPSAoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gfHwgMjApO1xyXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbC5lbnRpdHkgPT09ICdvYmplY3QnKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuICAgIGZSZXN1bHRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGlmIChlbC5lbnRpdHkuaWQgPT09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXHJcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IGVsLmVudGl0eS5sYWJlbCxcclxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RyaW5nVHJpbShlbC5lbnRpdHkubGFiZWwsIG1heExlbmd0aCk7XHJcbiAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBzdHJpbmcsIGl0IHRyaW1zIGl0IHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0cmluZyBhbiBpbnB1dCBzdHJpbmdcclxuICAgKiBAcGFyYW0gbGltaXQgY2hhcmFjdGVyIGxpbWl0XHJcbiAgICogQHJldHVybnMgdGhlIHJlc3VsdGluZyB0cmltbWVkIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9IChzdHJpbmcsIGxpbWl0KSA9PiB7XHJcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IGxpbWl0KSB7XHJcbiAgICAgIHJldHVybiBgJHtzdHJpbmcuc2xpY2UoMCwgbGltaXQpfeKApmA7XHJcbiAgICB9IHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==