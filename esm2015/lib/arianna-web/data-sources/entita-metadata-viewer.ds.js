/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from "@n7-frontend/core";
import helpers from "../../common/helpers";
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
        let { labels } = this.options;
        labels = labels || {};
        /** @type {?} */
        const unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
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
        var extracted = [];
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
        if (!fields)
            return []; // if is empty → quit
        for (let i = 0; i < fields.length; i++) {
            /** @type {?} */
            var thisField = fields[i];
            // rename current field
            /** @type {?} */
            var title = thisField.label;
            // field title
            /** @type {?} */
            var label = thisField.key;
            // item label
            /** @type {?} */
            var value = thisField.value;
            // item value
            /** @type {?} */
            var group = thisField.fields;
            // child group
            /** @type {?} */
            var temp = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTs7Ozs7O0lBQzVDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7WUFFRSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzdCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztjQUVoQixZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNoRSxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSztpQkFDVixNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2lCQUMxQixPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdGLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTTs7Ozs7Ozs7WUFPcEIsU0FBUyxHQUFHLEVBQUU7UUFDbEIscURBQXFEO1FBQ3JELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7UUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O2dCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztnQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7Z0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSzs7O2dCQUN2QixLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU07OztnQkFDeEIsSUFBSSxHQUFRLEVBQUU7WUFFbEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gXCJAbjctZnJvbnRlbmQvY29yZVwiO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSBcIi4uLy4uL2NvbW1vbi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cblxuICAgIGxldCB7IGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcblxuICAgIGNvbnN0IHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSk7XG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBzZWN0aW9uLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIHZhciBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcbiAgICBpZiAoZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4geyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XG4gICAgfVxuICAgIGlmICghZmllbGRzKSByZXR1cm4gW107IC8vIGlmIGlzIGVtcHR5IOKGkiBxdWl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0aGlzRmllbGQgPSBmaWVsZHNbaV07IC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICB2YXIgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICB2YXIgbGFiZWwgPSB0aGlzRmllbGQua2V5OyAvLyBpdGVtIGxhYmVsXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzRmllbGQudmFsdWU7IC8vIGl0ZW0gdmFsdWVcbiAgICAgIHZhciBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXG4gICAgICB2YXIgdGVtcDogYW55ID0ge307IC8vIHRlbXBvcmFyeSBvYmplY3RcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdGl0bGUsIHVzZSBpdFxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XG4gICAgICB9XG4gICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGNoaWxkIGdyb3VwXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXG4gICAgICAgICAgdGVtcC5pdGVtcyA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGl0ZW1zIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApOyAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkO1xuICB9XG59XG4iXX0=