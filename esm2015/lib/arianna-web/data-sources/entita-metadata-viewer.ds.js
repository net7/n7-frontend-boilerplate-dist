/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVOzs7Ozs7SUFDNUMsU0FBUyxDQUFDLElBQUk7UUFDdEI7OztVQUdFOzs7OztZQUVFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUM5QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQzs7WUFFbEIsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTs7Z0JBQzdCLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSzs7Z0JBQzNFLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDbkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNuRTthQUFNO1lBQ0wsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLO2lCQUNWLE1BQU07Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7aUJBQzFCLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDN0YsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTTs7Ozs7Ozs7WUFPcEIsU0FBUyxHQUFHLEVBQUU7UUFDbEIscURBQXFEO1FBQ3JELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUMscUJBQXFCO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDaEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztrQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7a0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7O2tCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztrQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7a0JBQ3hCLElBQUksR0FBUSxFQUFFO1lBRXBCLElBQUksS0FBSyxFQUFFO2dCQUNULDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hCLDhDQUE4QztvQkFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7aUJBQy9FO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO2lCQUNyRjthQUNGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztTQUMxRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cblxuICAgIGxldCB7IGNvbnRleHQsIGxhYmVscywgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGFiZWxzID0gbGFiZWxzIHx8IHt9O1xuXG4gICAgbGV0IHVucGFja2VkRGF0YSA9IFtdXG4gICAgaWYgKGNvbnRleHQgPT0gJ292ZXJ2aWV3JyAmJiBkYXRhKSB7XG4gICAgICBsZXQgY29uZmlndXJlZEtleXMgPSAoKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpXG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoZCA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpXG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGZpbHRlcmVkRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcbiAgICB9XG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBzZWN0aW9uLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcbiAgICBpZiAoZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4geyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XG4gICAgfVxuICAgIGlmICghZmllbGRzKSB7IHJldHVybiBbXTsgfSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aGlzRmllbGQgPSBmaWVsZHNbaV07IC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzRmllbGQudmFsdWU7IC8vIGl0ZW0gdmFsdWVcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkczsgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cbiAgICAgICAgdGVtcC5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBncm91cCBoYXMgYSB0dXBsZSBvZiAobGFiZWwsIHZhbHVlKVxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAuZ3JvdXAgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBjaGlsZCBncm91cCBhcnJheVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHRyYWN0ZWQucHVzaCh0ZW1wKTsgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBuZXcgYXJyYXlcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgfVxufVxuIl19