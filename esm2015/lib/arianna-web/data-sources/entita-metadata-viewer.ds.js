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
        const { context, config } = this.options;
        /** @type {?} */
        const labels = this.options.labels || {};
        /** @type {?} */
        let unpackedData = [];
        if (context === 'overview' && data) {
            /** @type {?} */
            const configuredKeys = ((config.get('entita-layout') || {}).overview || {}).campi;
            /** @type {?} */
            const filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            (d) => configuredKeys.includes(d.key)));
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
        (section) => {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item.label))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.label = helpers.prettifySnakeCase(item.label, labels[item.label]);
            }));
        }));
        return {
            group: unpackedData,
        };
    }
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
            (el) => ({ label: el.key, value: el.value })));
            return [{ items: extracted }];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (let i = 0; i < fields.length; i += 1) {
            /** @type {?} */
            const thisField = fields[i];
            // rename current field
            /** @type {?} */
            const title = thisField.label;
            // field title
            /** @type {?} */
            const label = thisField.key;
            // item label
            const { value } = thisField;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTs7Ozs7O0lBQzVDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7Y0FFSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FDbEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBRXBDLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2tCQUM1QixjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7O2tCQUMzRSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDdkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2lCQUM1QixPQUFPOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Ozs7O1lBT3BCLFNBQVMsR0FBRyxFQUFFO1FBQ2xCLHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUMscUJBQXFCO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNuQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O2tCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztrQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHOztrQkFDckIsRUFBRSxLQUFLLEVBQUUsR0FBRyxTQUFTOzs7a0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTs7O2tCQUN4QixJQUFJLEdBQVEsRUFBRTtZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO29CQUNoQiw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDckY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8qXG4gICAgICBBY2Nlc3MgYW5kIHVzZSB0aGlzLm9wdGlvbnMgaWYgdGhlIHJlbmRlcmluZ1xuICAgICAgY2hhbmdlcyBiYXNlZCBvbiBjb250ZXh0LlxuICAgICovXG5cbiAgICBjb25zdCB7IGNvbnRleHQsIGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge307XG5cbiAgICBsZXQgdW5wYWNrZWREYXRhID0gW107XG4gICAgaWYgKGNvbnRleHQgPT09ICdvdmVydmlldycgJiYgZGF0YSkge1xuICAgICAgY29uc3QgY29uZmlndXJlZEtleXMgPSAoKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpO1xuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGQpID0+IGNvbmZpZ3VyZWRLZXlzLmluY2x1ZGVzKGQua2V5KSk7XG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGZpbHRlcmVkRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSk7XG4gICAgfVxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xuICAgIHVucGFja2VkRGF0YS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5sYWJlbCwgbGFiZWxzW2l0ZW0ubGFiZWxdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwOiB1bnBhY2tlZERhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcbiAgICBpZiAoZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoKGVsKSA9PiAoeyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfSkpO1xuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XG4gICAgfVxuICAgIGlmICghZmllbGRzKSB7IHJldHVybiBbXTsgfSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0aGlzRmllbGQgPSBmaWVsZHNbaV07IC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpc0ZpZWxkOyAvLyBpdGVtIHZhbHVlXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gIH1cbn1cbiJdfQ==