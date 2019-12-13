/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwAutocompleteWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { key, response } = data;
        /** @type {?} */
        const regex = new RegExp('(.*?)' + key + '(.*)', 'i') // 'i' = case insensitive
        ;
        // 'i' = case insensitive
        /** @type {?} */
        const suggestion = [];
        /** @type {?} */
        const config = this.options.config;
        /** @type {?} */
        const maxLength = config.get('home-layout')['max-item-length'] / 2;
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
                    match: '',
                    payload: 'fallback-simple-autocomplete',
                    prefix: el.entity.label,
                    suffix: ''
                });
                return { suggestion };
            }
            // divide prefix and suffix
            /** @type {?} */
            let match = regex.exec(el.entity.label);
            if (match) {
                /** @type {?} */
                let prefix = match[1];
                /** @type {?} */
                let suffix = match[2]
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
                    prefix,
                    suffix,
                    payload: el.entity.id
                });
            }
        }));
        return { suggestion };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJOztjQUN4QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O2NBQ3pFLFVBQVUsR0FBRyxFQUFFOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQzs7Y0FDNUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBQztRQUU1RSxRQUFRLENBQUMsT0FBTzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLEtBQUssRUFBRSxFQUFFO29CQUNULE9BQU8sRUFBRSw4QkFBOEI7b0JBQ3ZDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFO2lCQUNYLENBQUMsQ0FBQTtnQkFDRixPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUE7YUFDdEI7OztnQkFFRyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLEtBQUssRUFBRTs7b0JBQ0wsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckIsc0JBQXNCOztnQkFBdEIsc0JBQXNCO2dCQUN0QixJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQ3hFO2dCQUNELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtpQkFDNUM7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7b0JBQ3ZFLE1BQU07b0JBQ04sTUFBTTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknLCAnaScpIC8vICdpJyA9IGNhc2UgaW5zZW5zaXRpdmVcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gLyAyXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcihlbCA9PiB0eXBlb2YgZWwuZW50aXR5ID09ICdvYmplY3QnKVxuXG4gICAgZlJlc3VsdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBwcmVmaXg6IGVsLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICAgICAgfVxuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICBsZXQgbWF0Y2ggPSByZWdleC5leGVjKGVsLmVudGl0eS5sYWJlbClcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgcHJlZml4ID0gbWF0Y2hbMV1cbiAgICAgICAgbGV0IHN1ZmZpeCA9IG1hdGNoWzJdXG4gICAgICAgIC8vIHN0cmluZyBtYW5pcHVsYXRpb25cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAocHJlZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBwcmVmaXggPSAnLi4uJyArIHByZWZpeC5zbGljZShwcmVmaXgubGVuZ3RoIC0gbWF4TGVuZ3RoLCBwcmVmaXgubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHN1ZmZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgc3VmZml4ID0gc3VmZml4LnNsaWNlKDAsIG1heExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6IG1hdGNoLmlucHV0LnNsaWNlKG1hdGNoWzFdLmxlbmd0aCwgbWF0Y2hbMV0ubGVuZ3RoICsga2V5Lmxlbmd0aCksXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgfVxufSJdfQ==