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
        const regex = new RegExp('(.*?)' + key + '(.*)');
        /** @type {?} */
        const append = [];
        response.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            /** @type {?} */
            let position = el.item.label.indexOf(key)
            // if the typed text is not in the label, skip it
            ;
            // if the typed text is not in the label, skip it
            if (position < 0) {
                return;
            }
            // divide prefix and suffix
            /** @type {?} */
            let match = el.item.label.match(regex);
            /** @type {?} */
            let prefix = match[1];
            /** @type {?} */
            let suffix = match[2];
            append.push({ prefix, suffix, payload: el.item.id });
        }));
        return { typed: key, append };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7Ozs7OztJQUUzQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJOztjQUN4QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7O2NBQzFDLE1BQU0sR0FBRyxFQUFFO1FBRWpCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFOztnQkFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDekMsaURBQWlEOztZQUFqRCxpREFBaUQ7WUFDakQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixPQUFPO2FBQ1I7OztnQkFFRyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7Z0JBQ2xDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN0RCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQy9CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsga2V5LCByZXNwb25zZSB9ID0gZGF0YVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC4qPyknICsga2V5ICsgJyguKiknKVxuICAgIGNvbnN0IGFwcGVuZCA9IFtdXG5cbiAgICByZXNwb25zZS5pdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IGVsLml0ZW0ubGFiZWwuaW5kZXhPZihrZXkpXG4gICAgICAvLyBpZiB0aGUgdHlwZWQgdGV4dCBpcyBub3QgaW4gdGhlIGxhYmVsLCBza2lwIGl0XG4gICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGRpdmlkZSBwcmVmaXggYW5kIHN1ZmZpeFxuICAgICAgbGV0IG1hdGNoID0gZWwuaXRlbS5sYWJlbC5tYXRjaChyZWdleClcbiAgICAgIGxldCBwcmVmaXggPSBtYXRjaFsxXVxuICAgICAgbGV0IHN1ZmZpeCA9IG1hdGNoWzJdXG4gICAgICBhcHBlbmQucHVzaCh7IHByZWZpeCwgc3VmZml4LCBwYXlsb2FkOiBlbC5pdGVtLmlkIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdHlwZWQ6IGtleSwgYXBwZW5kIH1cbiAgfVxufSJdfQ==