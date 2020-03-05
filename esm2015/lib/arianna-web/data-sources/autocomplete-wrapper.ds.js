/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/autocomplete-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core/dist/data-source';
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
                return `${string.slice(0, limit)}…`;
            }
            return string;
        });
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { response } = data;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        /** @type {?} */
        const suggestion = [];
        const { config } = this.options;
        /** @type {?} */
        const maxLength = (config.get('home-layout')['max-item-length'] || 20);
        /** @type {?} */
        const fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => typeof el.entity === 'object'));
        // eslint-disable-next-line consistent-return
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            if (el.entity.id === 'fallback') { // build and return fallback data
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
                    payload: el.entity.id,
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWhFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVO0lBQXZEOztRQWlDVSxlQUFVOzs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JDOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBekNXLFNBQVMsQ0FBQyxJQUFJO2NBQ2hCLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSTtRQUV6QixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzFDOztjQUVLLFVBQVUsR0FBRyxFQUFFO2NBQ2YsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FDekIsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Y0FDaEUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFDO1FBRS9FLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUUsRUFBRSxpQ0FBaUM7Z0JBQ2xFLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDckIsT0FBTyxFQUFFLDhCQUE4QjtpQkFDeEMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUN2Qjs7a0JBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBV0Y7Ozs7OztJQVRDLDZDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvZGF0YS1zb3VyY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBkYXRhO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbjogW10sIGxvYWRpbmc6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW107XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIHx8IDIwKTtcclxuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwuZW50aXR5ID09PSAnb2JqZWN0Jyk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgICBmUmVzdWx0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09PSAnZmFsbGJhY2snKSB7IC8vIGJ1aWxkIGFuZCByZXR1cm4gZmFsbGJhY2sgZGF0YVxyXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBlbC5lbnRpdHkubGFiZWwsXHJcbiAgICAgICAgICBwYXlsb2FkOiAnZmFsbGJhY2stc2ltcGxlLWF1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0cmluZ1RyaW0oZWwuZW50aXR5LmxhYmVsLCBtYXhMZW5ndGgpO1xyXG4gICAgICBzdWdnZXN0aW9uLnB1c2goe1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9IChzdHJpbmcsIGxpbWl0KSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBTbGljZXMgdGhlIHN0cmluZyBhbmQgYWRkcyB0cmFpbGluZyBlbGxpcHNpc1xyXG4gICAgICBUT0RPOiBEbyBub3QgY3V0IHRoZSBzdHJpbmcgaW4gdGhlIG1pZGRsZSBvZiBhbiBIVE1MIHRhZyFcclxuICAgICovXHJcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IGxpbWl0KSB7XHJcbiAgICAgIHJldHVybiBgJHtzdHJpbmcuc2xpY2UoMCwgbGltaXQpfeKApmA7XHJcbiAgICB9IHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==