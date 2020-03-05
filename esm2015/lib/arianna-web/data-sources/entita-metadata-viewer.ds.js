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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTs7Ozs7O0lBQzVDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7Y0FFSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FDbEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBRXBDLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2tCQUM1QixjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7O2tCQUMzRSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDdkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2lCQUM1QixPQUFPOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Ozs7O1lBT3BCLFNBQVMsR0FBRyxFQUFFO1FBQ2xCLHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUMscUJBQXFCO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNuQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O2tCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztrQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHOztrQkFDckIsRUFBRSxLQUFLLEVBQUUsR0FBRyxTQUFTOzs7a0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTs7O2tCQUN4QixJQUFJLEdBQVEsRUFBRTtZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO29CQUNoQiw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDckY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICAvKlxyXG4gICAgICBBY2Nlc3MgYW5kIHVzZSB0aGlzLm9wdGlvbnMgaWYgdGhlIHJlbmRlcmluZ1xyXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IHsgY29udGV4dCwgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xyXG5cclxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXTtcclxuICAgIGlmIChjb250ZXh0ID09PSAnb3ZlcnZpZXcnICYmIGRhdGEpIHtcclxuICAgICAgY29uc3QgY29uZmlndXJlZEtleXMgPSAoKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZCkgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKTtcclxuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhmaWx0ZXJlZERhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcclxuICAgIH1cclxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xyXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgc2VjdGlvbi5pdGVtc1xyXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwOiB1bnBhY2tlZERhdGEsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVucGFja0ZpZWxkcyhmaWVsZHMpIHtcclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXHJcbiAgICAgIC0gLSAtXHJcbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcclxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcclxuICAgICovXHJcbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxyXG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcclxuICAgIGlmIChmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHMubWFwKChlbCkgPT4gKHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlIH0pKTtcclxuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XHJcbiAgICB9XHJcbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRoaXNGaWVsZCA9IGZpZWxkc1tpXTsgLy8gcmVuYW1lIGN1cnJlbnQgZmllbGRcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxyXG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzRmllbGQ7IC8vIGl0ZW0gdmFsdWVcclxuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzRmllbGQuZmllbGRzOyAvLyBjaGlsZCBncm91cFxyXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxyXG5cclxuICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XHJcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xyXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cclxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcclxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXHJcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApOyAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcclxuICB9XHJcbn1cclxuIl19