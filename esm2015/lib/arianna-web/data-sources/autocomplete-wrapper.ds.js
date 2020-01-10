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
        if (!response) {
            return { suggestion: [], loading: true };
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO1FBRTlCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7O2NBRUssS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLHlCQUF5Qjs7OztjQUN6RSxVQUFVLEdBQUcsRUFBRTs7Y0FDZixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztjQUM1QixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7O2NBQzVELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7UUFFNUUsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLGlDQUFpQztnQkFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsOEJBQThCO29CQUN2QyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN2QixNQUFNLEVBQUUsRUFBRTtpQkFDWCxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO2FBQ3RCOzs7Z0JBRUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxLQUFLLEVBQUU7O29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFzQjs7Z0JBQXRCLHNCQUFzQjtnQkFDdEIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUN4RTtnQkFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7aUJBQzVDO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUN2RSxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGE7XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknLCAnaScpIC8vICdpJyA9IGNhc2UgaW5zZW5zaXRpdmVcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gLyAyXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcihlbCA9PiB0eXBlb2YgZWwuZW50aXR5ID09ICdvYmplY3QnKVxuXG4gICAgZlJlc3VsdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6ICcnLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBwcmVmaXg6IGVsLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfVxuICAgICAgfVxuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICBsZXQgbWF0Y2ggPSByZWdleC5leGVjKGVsLmVudGl0eS5sYWJlbClcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgcHJlZml4ID0gbWF0Y2hbMV1cbiAgICAgICAgbGV0IHN1ZmZpeCA9IG1hdGNoWzJdXG4gICAgICAgIC8vIHN0cmluZyBtYW5pcHVsYXRpb25cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAocHJlZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBwcmVmaXggPSAnLi4uJyArIHByZWZpeC5zbGljZShwcmVmaXgubGVuZ3RoIC0gbWF4TGVuZ3RoLCBwcmVmaXgubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHN1ZmZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgc3VmZml4ID0gc3VmZml4LnNsaWNlKDAsIG1heExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6IG1hdGNoLmlucHV0LnNsaWNlKG1hdGNoWzFdLmxlbmd0aCwgbWF0Y2hbMV0ubGVuZ3RoICsga2V5Lmxlbmd0aCksXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgfVxufSJdfQ==