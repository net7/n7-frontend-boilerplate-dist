/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFaEUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7SUFBdkQ7O1FBaUNVLGVBQVU7Ozs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckM7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDckM7WUFBQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLEVBQUE7SUFDSCxDQUFDOzs7Ozs7SUF6Q1csU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO1FBRXpCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7O2NBRUssVUFBVSxHQUFHLEVBQUU7Y0FDZixFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUN6QixTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOztjQUNoRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUM7UUFFL0UsNkNBQTZDO1FBQzdDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN0QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDbEUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNyQixPQUFPLEVBQUUsOEJBQThCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3ZCOztrQkFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZCxJQUFJO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FXRjs7Ozs7O0lBVEMsNkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9kYXRhLXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBkYXRhO1xuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbjogW10sIGxvYWRpbmc6IHRydWUgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW107XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBtYXhMZW5ndGggPSAoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gfHwgMjApO1xuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwuZW50aXR5ID09PSAnb2JqZWN0Jyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICBmUmVzdWx0cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmVudGl0eS5pZCA9PT0gJ2ZhbGxiYWNrJykgeyAvLyBidWlsZCBhbmQgcmV0dXJuIGZhbGxiYWNrIGRhdGFcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBlbC5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgcGF5bG9hZDogJ2ZhbGxiYWNrLXNpbXBsZS1hdXRvY29tcGxldGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RyaW5nVHJpbShlbC5lbnRpdHkubGFiZWwsIG1heExlbmd0aCk7XG4gICAgICBzdWdnZXN0aW9uLnB1c2goe1xuICAgICAgICB0ZXh0LFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIHN0cmluZ1RyaW0gPSAoc3RyaW5nLCBsaW1pdCkgPT4ge1xuICAgIC8qXG4gICAgICBTbGljZXMgdGhlIHN0cmluZyBhbmQgYWRkcyB0cmFpbGluZyBlbGxpcHNpc1xuICAgICAgVE9ETzogRG8gbm90IGN1dCB0aGUgc3RyaW5nIGluIHRoZSBtaWRkbGUgb2YgYW4gSFRNTCB0YWchXG4gICAgKi9cbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICByZXR1cm4gYCR7c3RyaW5nLnNsaWNlKDAsIGxpbWl0KX3igKZgO1xuICAgIH0gcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIl19