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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVOzs7Ozs7SUFDNUMsU0FBUyxDQUFDLElBQUk7UUFDdEI7OztVQUdFOzs7OztZQUVFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUM5QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQzs7WUFFbEIsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFOztnQkFDckIsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLOztnQkFDM0UsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNuRSxZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQ25FO2FBQU07WUFDTCxZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO1FBQ0Qsa0JBQWtCO1FBQ2xCLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztpQkFDMUIsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM3RixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7Ozs7OztZQU9wQixTQUFTLEdBQUcsRUFBRTtRQUNsQixxREFBcUQ7UUFDckQsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUUsQ0FBQyxxQkFBcUI7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNoQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O2tCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztrQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7a0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSzs7O2tCQUN2QixLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU07OztrQkFDeEIsSUFBSSxHQUFRLEVBQUU7WUFFcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvKlxuICAgICAgQWNjZXNzIGFuZCB1c2UgdGhpcy5vcHRpb25zIGlmIHRoZSByZW5kZXJpbmdcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cbiAgICAqL1xuXG4gICAgbGV0IHsgY29udGV4dCwgbGFiZWxzLCBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG5cbiAgICBsZXQgdW5wYWNrZWREYXRhID0gW11cbiAgICBpZiAoY29udGV4dCA9PSAnb3ZlcnZpZXcnKSB7XG4gICAgICBsZXQgY29uZmlndXJlZEtleXMgPSAoKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpXG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoZCA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpXG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGZpbHRlcmVkRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcbiAgICB9XG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBzZWN0aW9uLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcbiAgICBpZiAoZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4geyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XG4gICAgfVxuICAgIGlmICghZmllbGRzKSB7IHJldHVybiBbXTsgfSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aGlzRmllbGQgPSBmaWVsZHNbaV07IC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzRmllbGQudmFsdWU7IC8vIGl0ZW0gdmFsdWVcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkczsgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cbiAgICAgICAgdGVtcC5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBncm91cCBoYXMgYSB0dXBsZSBvZiAobGFiZWwsIHZhbHVlKVxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAuZ3JvdXAgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBjaGlsZCBncm91cCBhcnJheVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHRyYWN0ZWQucHVzaCh0ZW1wKTsgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBuZXcgYXJyYXlcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgfVxufVxuIl19