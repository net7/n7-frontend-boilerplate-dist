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
        response.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            // divide prefix and suffix
            /** @type {?} */
            let match = regex.exec(el.item.label);
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
                    payload: el.item.id
                });
            }
        }));
        return { suggestion };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJOztjQUN4QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O2NBQ3pFLFVBQVUsR0FBRyxFQUFFOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTs7O2dCQUV0QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLEtBQUssRUFBRTs7b0JBQ0wsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckIsc0JBQXNCOztnQkFBdEIsc0JBQXNCO2dCQUN0QixJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQ3hFO2dCQUNELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtpQkFDNUM7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7b0JBQ3ZFLE1BQU07b0JBQ04sTUFBTTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2lCQUNwQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknLCAnaScpIC8vICdpJyA9IGNhc2UgaW5zZW5zaXRpdmVcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW11cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gLyAyXG5cbiAgICByZXNwb25zZS5pdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIC8vIGRpdmlkZSBwcmVmaXggYW5kIHN1ZmZpeFxuICAgICAgbGV0IG1hdGNoID0gcmVnZXguZXhlYyhlbC5pdGVtLmxhYmVsKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBtYXRjaFsxXVxuICAgICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbMl1cbiAgICAgICAgLy8gc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChwcmVmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHByZWZpeCA9ICcuLi4nICsgcHJlZml4LnNsaWNlKHByZWZpeC5sZW5ndGggLSBtYXhMZW5ndGgsIHByZWZpeC5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAoc3VmZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBzdWZmaXggPSBzdWZmaXguc2xpY2UoMCwgbWF4TGVuZ3RoKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2guaW5wdXQuc2xpY2UobWF0Y2hbMV0ubGVuZ3RoLCBtYXRjaFsxXS5sZW5ndGggKyBrZXkubGVuZ3RoKSxcbiAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgc3VmZml4LFxuICAgICAgICAgIHBheWxvYWQ6IGVsLml0ZW0uaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgfVxufSJdfQ==