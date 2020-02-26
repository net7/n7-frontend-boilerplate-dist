/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/autocomplete-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwAutocompleteWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.stringTrim = (/**
         * @param {?} string
         * @param {?} limit
         * @return {?}
         */
        (string, limit) => {
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
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { key, response } = data;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        /** @type {?} */
        const suggestion = [];
        /** @type {?} */
        const config = this.options.config;
        /** @type {?} */
        const maxLength = (config.get('home-layout')['max-item-length'] || 20);
        /** @type {?} */
        const fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        el => typeof el.entity == 'object'));
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            if (el.entity.id == 'fallback') { // build and return fallback data
                suggestion.push({
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion };
            }
            /** @type {?} */
            const text = this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text,
                anchor: {
                    payload: el.entity.id
                }
            });
        }));
        return { suggestion };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwAutocompleteWrapperDS.prototype.stringTrim;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVO0lBQXZEOztRQWlDVSxlQUFVOzs7OztRQUFHLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRyxFQUFFO1lBQ3ZDOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFBO2FBQ3BDOztnQkFBTSxPQUFPLE1BQU0sQ0FBQTtRQUN0QixDQUFDLEVBQUE7SUFDSCxDQUFDOzs7Ozs7SUF4Q1csU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSTtRQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztjQUVLLFVBQVUsR0FBRyxFQUFFOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBQ2hFLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7UUFFNUUsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO2FBQ3RCOztrQkFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZCxJQUFJO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Q0FXRjs7Ozs7O0lBVEMsNkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGE7XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXVxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcbiAgICBjb25zdCBtYXhMZW5ndGggPSAoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gfHwgMjApXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcihlbCA9PiB0eXBlb2YgZWwuZW50aXR5ID09ICdvYmplY3QnKVxuXG4gICAgZlJlc3VsdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgdGV4dDogZWwuZW50aXR5LmxhYmVsLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdHJpbmdUcmltKGVsLmVudGl0eS5sYWJlbCwgbWF4TGVuZ3RoKVxuICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogZWwuZW50aXR5LmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBzdHJpbmdUcmltID0gKCBzdHJpbmcsIGxpbWl0ICkgPT4ge1xuICAgIC8qXG4gICAgICBTbGljZXMgdGhlIHN0cmluZyBhbmQgYWRkcyB0cmFpbGluZyBlbGxpcHNpc1xuICAgICAgVE9ETzogRG8gbm90IGN1dCB0aGUgc3RyaW5nIGluIHRoZSBtaWRkbGUgb2YgYW4gSFRNTCB0YWchXG4gICAgKi9cbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxpbWl0KSArICfigKYnXG4gICAgfSBlbHNlIHJldHVybiBzdHJpbmdcbiAgfVxufSJdfQ==