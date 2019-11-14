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
        response.entities.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            // divide prefix and suffix
            // let match = el.item.label.match(regex)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJOztjQUN4QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O2NBQ3pFLFVBQVUsR0FBRyxFQUFFOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTs7OztnQkFHekIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxLQUFLLEVBQUU7O29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFzQjs7Z0JBQXRCLHNCQUFzQjtnQkFDdEIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUN4RTtnQkFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7aUJBQzVDO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUN2RSxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGtleSwgcmVzcG9uc2UgfSA9IGRhdGFcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJyguKj8pJyArIGtleSArICcoLiopJywgJ2knKSAvLyAnaScgPSBjYXNlIGluc2Vuc2l0aXZlXG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IFtdXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xuICAgIGNvbnN0IG1heExlbmd0aCA9IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIC8gMlxuXG4gICAgcmVzcG9uc2UuZW50aXRpZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAvLyBkaXZpZGUgcHJlZml4IGFuZCBzdWZmaXhcbiAgICAgIC8vIGxldCBtYXRjaCA9IGVsLml0ZW0ubGFiZWwubWF0Y2gocmVnZXgpXG4gICAgICBsZXQgbWF0Y2ggPSByZWdleC5leGVjKGVsLmVudGl0eS5sYWJlbClcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgcHJlZml4ID0gbWF0Y2hbMV1cbiAgICAgICAgbGV0IHN1ZmZpeCA9IG1hdGNoWzJdXG4gICAgICAgIC8vIHN0cmluZyBtYW5pcHVsYXRpb25cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAocHJlZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBwcmVmaXggPSAnLi4uJyArIHByZWZpeC5zbGljZShwcmVmaXgubGVuZ3RoIC0gbWF4TGVuZ3RoLCBwcmVmaXgubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgKHN1ZmZpeC5sZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgc3VmZml4ID0gc3VmZml4LnNsaWNlKDAsIG1heExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgbWF0Y2g6IG1hdGNoLmlucHV0LnNsaWNlKG1hdGNoWzFdLmxlbmd0aCwgbWF0Y2hbMV0ubGVuZ3RoICsga2V5Lmxlbmd0aCksXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBzdWdnZXN0aW9uIH1cbiAgfVxufSJdfQ==