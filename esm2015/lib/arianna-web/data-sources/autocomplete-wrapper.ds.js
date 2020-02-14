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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVO0lBQXZEOztRQWlDVSxlQUFVOzs7OztRQUFHLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRyxFQUFFO1lBQ3ZDOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFBO2FBQ3BDOztnQkFBTSxPQUFPLE1BQU0sQ0FBQTtRQUN0QixDQUFDLEVBQUE7SUFDSCxDQUFDOzs7Ozs7SUF4Q1csU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSTtRQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztjQUVLLFVBQVUsR0FBRyxFQUFFOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBQ2hFLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7UUFFNUUsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO2FBQ3RCOztrQkFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZCxJQUFJO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Q0FXRjs7Ozs7O0lBVEMsNkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyBrZXksIHJlc3BvbnNlIH0gPSBkYXRhO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbjogW10sIGxvYWRpbmc6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcclxuICAgIGNvbnN0IG1heExlbmd0aCA9IChjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSB8fCAyMClcclxuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoZWwgPT4gdHlwZW9mIGVsLmVudGl0eSA9PSAnb2JqZWN0JylcclxuXHJcbiAgICBmUmVzdWx0cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgaWYgKGVsLmVudGl0eS5pZCA9PSAnZmFsbGJhY2snKSB7IC8vIGJ1aWxkIGFuZCByZXR1cm4gZmFsbGJhY2sgZGF0YVxyXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBlbC5lbnRpdHkubGFiZWwsXHJcbiAgICAgICAgICBwYXlsb2FkOiAnZmFsbGJhY2stc2ltcGxlLWF1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdHJpbmdUcmltKGVsLmVudGl0eS5sYWJlbCwgbWF4TGVuZ3RoKVxyXG4gICAgICBzdWdnZXN0aW9uLnB1c2goe1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9ICggc3RyaW5nLCBsaW1pdCApID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFNsaWNlcyB0aGUgc3RyaW5nIGFuZCBhZGRzIHRyYWlsaW5nIGVsbGlwc2lzXHJcbiAgICAgIFRPRE86IERvIG5vdCBjdXQgdGhlIHN0cmluZyBpbiB0aGUgbWlkZGxlIG9mIGFuIEhUTUwgdGFnIVxyXG4gICAgKi9cclxuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gbGltaXQpIHtcclxuICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsaW1pdCkgKyAn4oCmJ1xyXG4gICAgfSBlbHNlIHJldHVybiBzdHJpbmdcclxuICB9XHJcbn0iXX0=