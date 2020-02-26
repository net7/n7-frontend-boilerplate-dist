/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwEntitaMetadataViewerDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /*
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        let { context, labels, config } = this.options;
        labels = labels || {};
        /** @type {?} */
        let unpackedData = [];
        if (context == 'overview' && data) {
            /** @type {?} */
            let configuredKeys = ((config.get('entita-layout') || {}).overview || {}).campi;
            /** @type {?} */
            let filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            d => configuredKeys.includes(d.key)));
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData);
        }
        else {
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
        }
        // prettify labels
        unpackedData.forEach((/**
         * @param {?} section
         * @return {?}
         */
        section => {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.label))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.label = helpers.prettifySnakeCase(item.label, labels[item.label])));
        }));
        return {
            group: unpackedData
        };
    }
    // tslint:disable-next-line: member-ordering
    /**
     * @param {?} fields
     * @return {?}
     */
    static unpackFields(fields) {
        /*
              Recursive unpacking for rendering res.fields
              - - -
              This function transforms the response object tree
              into an array, usable by metadata-viewer-component
            */
        /** @type {?} */
        let extracted = [];
        // if the server returns an array of key-value tuples
        if (fields instanceof Array) {
            extracted = fields.map((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                return { label: el.key, value: el.value };
            }));
            return [{ items: extracted }];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (let i = 0; i < fields.length; i++) {
            /** @type {?} */
            const thisField = fields[i];
            // rename current field
            /** @type {?} */
            const title = thisField.label;
            // field title
            /** @type {?} */
            const label = thisField.key;
            // item label
            /** @type {?} */
            const value = thisField.value;
            // item value
            /** @type {?} */
            const group = thisField.fields;
            // child group
            /** @type {?} */
            const temp = {};
            if (title) {
                // if there is a title, use it
                temp.title = title;
            }
            if (label && value) {
                // if there are a lable and value, use them
                temp.label = label;
                temp.value = value;
            }
            if (group) {
                // if there is a child group
                if (group[0].key) {
                    // if this group has a tuple of (label, value)
                    temp.items = AwEntitaMetadataViewerDS.unpackFields(group); // make items array
                }
                else {
                    temp.group = AwEntitaMetadataViewerDS.unpackFields(group); // make child group array
                }
            }
            extracted.push(temp); // add this object to the new array
        }
        return extracted;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTs7Ozs7O0lBQzVDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7WUFFRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDOUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O1lBRWxCLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2dCQUM3QixjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7O2dCQUMzRSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ25FLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDbkU7YUFBTTtZQUNMLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSztpQkFDVixNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2lCQUMxQixPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdGLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Ozs7O1lBT3BCLFNBQVMsR0FBRyxFQUFFO1FBQ2xCLHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUFDLHFCQUFxQjtRQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ2hDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7a0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSzs7O2tCQUN2QixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUc7OztrQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7a0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTs7O2tCQUN4QixJQUFJLEdBQVEsRUFBRTtZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO29CQUNoQiw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDckY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8qXG4gICAgICBBY2Nlc3MgYW5kIHVzZSB0aGlzLm9wdGlvbnMgaWYgdGhlIHJlbmRlcmluZ1xuICAgICAgY2hhbmdlcyBiYXNlZCBvbiBjb250ZXh0LlxuICAgICovXG5cbiAgICBsZXQgeyBjb250ZXh0LCBsYWJlbHMsIGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcblxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXVxuICAgIGlmIChjb250ZXh0ID09ICdvdmVydmlldycgJiYgZGF0YSkge1xuICAgICAgbGV0IGNvbmZpZ3VyZWRLZXlzID0gKChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JykgfHwge30pLm92ZXJ2aWV3IHx8IHt9KS5jYW1waVxuICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKGQgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKVxuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhmaWx0ZXJlZERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSk7XG4gICAgfVxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xuICAgIHVucGFja2VkRGF0YS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgc2VjdGlvbi5pdGVtc1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbClcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmxhYmVsLCBsYWJlbHNbaXRlbS5sYWJlbF0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YVxuICAgIH07XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcykge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBrZXktdmFsdWUgdHVwbGVzXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHMubWFwKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbeyBpdGVtczogZXh0cmFjdGVkIH1dO1xuICAgIH1cbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc0ZpZWxkLnZhbHVlOyAvLyBpdGVtIHZhbHVlXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gIH1cbn1cbiJdfQ==