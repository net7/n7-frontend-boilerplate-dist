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
        if (context == 'overview') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTs7Ozs7O0lBQzVDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7WUFFRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDOUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O1lBRWxCLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTs7Z0JBQ3JCLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSzs7Z0JBQzNFLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDbkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNuRTthQUFNO1lBQ0wsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLO2lCQUNWLE1BQU07Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7aUJBQzFCLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDN0YsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTTs7Ozs7Ozs7WUFPcEIsU0FBUyxHQUFHLEVBQUU7UUFDbEIscURBQXFEO1FBQ3JELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUMscUJBQXFCO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDaEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztrQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7a0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7O2tCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztrQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7a0JBQ3hCLElBQUksR0FBUSxFQUFFO1lBRXBCLElBQUksS0FBSyxFQUFFO2dCQUNULDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hCLDhDQUE4QztvQkFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7aUJBQy9FO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO2lCQUNyRjthQUNGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztTQUMxRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIC8qXHJcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXHJcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cclxuICAgICovXHJcblxyXG4gICAgbGV0IHsgY29udGV4dCwgbGFiZWxzLCBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcclxuXHJcbiAgICBsZXQgdW5wYWNrZWREYXRhID0gW11cclxuICAgIGlmIChjb250ZXh0ID09ICdvdmVydmlldycpIHtcclxuICAgICAgbGV0IGNvbmZpZ3VyZWRLZXlzID0gKChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JykgfHwge30pLm92ZXJ2aWV3IHx8IHt9KS5jYW1waVxyXG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoZCA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpXHJcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZmlsdGVyZWREYXRhKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcclxuICAgIH1cclxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xyXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgIHNlY3Rpb24uaXRlbXNcclxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbClcclxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBncm91cDogdW5wYWNrZWREYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcykge1xyXG4gICAgLypcclxuICAgICAgUmVjdXJzaXZlIHVucGFja2luZyBmb3IgcmVuZGVyaW5nIHJlcy5maWVsZHNcclxuICAgICAgLSAtIC1cclxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxyXG4gICAgICBpbnRvIGFuIGFycmF5LCB1c2FibGUgYnkgbWV0YWRhdGEtdmlld2VyLWNvbXBvbmVudFxyXG4gICAgKi9cclxuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XHJcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xyXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IGxhYmVsOiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XHJcbiAgICB9XHJcbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRoaXNGaWVsZCA9IGZpZWxkc1tpXTsgLy8gcmVuYW1lIGN1cnJlbnQgZmllbGRcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXNGaWVsZC52YWx1ZTsgLy8gaXRlbSB2YWx1ZVxyXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXHJcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XHJcblxyXG4gICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcclxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxyXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxyXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcclxuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcclxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXh0cmFjdGVkO1xyXG4gIH1cclxufVxyXG4iXX0=