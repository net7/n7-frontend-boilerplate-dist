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
        const append = [];
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
            // let match = el.item.label.match(regex)
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
                append.push({ prefix, suffix, payload: el.item.id });
            }
        }));
        return { typed: key, append };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJOztjQUN4QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMseUJBQXlCOzs7O2NBQ3pFLE1BQU0sR0FBRyxFQUFFOztjQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2NBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUVsRSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTs7OztnQkFHdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxLQUFLLEVBQUU7O29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFzQjs7Z0JBQXRCLHNCQUFzQjtnQkFDdEIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUN4RTtnQkFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7aUJBQzVDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7YUFDckQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQy9CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknLCAnaScpIC8vICdpJyA9IGNhc2UgaW5zZW5zaXRpdmVcbiAgICBjb25zdCBhcHBlbmQgPSBbXVxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWdcbiAgICBjb25zdCBtYXhMZW5ndGggPSBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXSAvIDJcblxuICAgIHJlc3BvbnNlLml0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgLy8gZGl2aWRlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICAvLyBsZXQgbWF0Y2ggPSBlbC5pdGVtLmxhYmVsLm1hdGNoKHJlZ2V4KVxuICAgICAgbGV0IG1hdGNoID0gcmVnZXguZXhlYyhlbC5pdGVtLmxhYmVsKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBtYXRjaFsxXVxuICAgICAgICBsZXQgc3VmZml4ID0gbWF0Y2hbMl1cbiAgICAgICAgLy8gc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgICAgICBpZiAobWF4TGVuZ3RoICYmIChwcmVmaXgubGVuZ3RoID4gbWF4TGVuZ3RoKSkge1xuICAgICAgICAgIHByZWZpeCA9ICcuLi4nICsgcHJlZml4LnNsaWNlKHByZWZpeC5sZW5ndGggLSBtYXhMZW5ndGgsIHByZWZpeC5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiAoc3VmZml4Lmxlbmd0aCA+IG1heExlbmd0aCkpIHtcbiAgICAgICAgICBzdWZmaXggPSBzdWZmaXguc2xpY2UoMCwgbWF4TGVuZ3RoKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgYXBwZW5kLnB1c2goeyBwcmVmaXgsIHN1ZmZpeCwgcGF5bG9hZDogZWwuaXRlbS5pZCB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHR5cGVkOiBrZXksIGFwcGVuZCB9XG4gIH1cbn0iXX0=