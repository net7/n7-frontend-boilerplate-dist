/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
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
        /** @type {?} */
        const unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
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
        var extracted = [] // holds transformed object
        // if the server returns an array of key-value tuples
        ;
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
            var thisField = fields[i] // rename current field
            ;
            // rename current field
            /** @type {?} */
            var title = thisField.label // field title
            ;
            // field title
            /** @type {?} */
            var label = thisField.key // item label
            ;
            // item label
            /** @type {?} */
            var value = thisField.value // item value
            ;
            // item value
            /** @type {?} */
            var group = thisField.fields // child group
            ;
            // child group
            /** @type {?} */
            var temp = {} // temporary object
            ;
            if (title) { // if there is a title, use it
                temp.title = title;
            }
            if (label && value) { // if there are a lable and value, use them
                temp.label = label;
                temp.value = value;
            }
            if (group) { // if there is a child group
                if (group[0].key) { // if this group has a tuple of (label, value)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVOzs7Ozs7SUFFNUMsU0FBUyxDQUFDLElBQUk7Ozs7OztjQUtoQixZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNoRSxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7Ozs7OztZQU9wQixTQUFTLEdBQUcsRUFBRSxDQUFDLDJCQUEyQjtRQUM5QyxxREFBcUQ7O1FBQXJELHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzNDLENBQUMsRUFBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7U0FDOUI7UUFDRCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sRUFBRSxDQUFBLENBQUMscUJBQXFCO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBSyx1QkFBdUI7Ozs7Z0JBQ2pELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGNBQWM7Ozs7Z0JBQ3hDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFLLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFFLGNBQWM7Ozs7Z0JBQ3hDLElBQUksR0FBUSxFQUFFLENBQWEsbUJBQW1COztZQUVsRCxJQUFJLEtBQUssRUFBRSxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7YUFDbkI7WUFBQyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRSwyQ0FBMkM7Z0JBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTthQUNuQjtZQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsNEJBQTRCO2dCQUN6QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSw4Q0FBOEM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsbUJBQW1CO2lCQUM5RTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLHlCQUF5QjtpQkFDcEY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxtQ0FBbUM7U0FDekQ7UUFDRCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cbiAgICBjb25zdCB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGRhdGEpO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhLFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIHZhciBleHRyYWN0ZWQgPSBbXSAvLyBob2xkcyB0cmFuc2Zvcm1lZCBvYmplY3RcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xuICAgIGlmIChmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZXh0cmFjdGVkID0gZmllbGRzLm1hcChlbCA9PiB7XG4gICAgICAgIHJldHVybiB7IGxhYmVsOiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV1cbiAgICB9XG4gICAgaWYgKCFmaWVsZHMpIHJldHVybiBbXSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdGhpc0ZpZWxkID0gZmllbGRzW2ldICAgICAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgdmFyIHRpdGxlID0gdGhpc0ZpZWxkLmxhYmVsICAgLy8gZmllbGQgdGl0bGVcbiAgICAgIHZhciBsYWJlbCA9IHRoaXNGaWVsZC5rZXkgICAgIC8vIGl0ZW0gbGFiZWxcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXNGaWVsZC52YWx1ZSAgIC8vIGl0ZW0gdmFsdWVcbiAgICAgIHZhciBncm91cCA9IHRoaXNGaWVsZC5maWVsZHMgIC8vIGNoaWxkIGdyb3VwXG4gICAgICB2YXIgdGVtcDogYW55ID0ge30gICAgICAgICAgICAgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHsgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZVxuICAgICAgfSBpZiAobGFiZWwgJiYgdmFsdWUpIHsgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWxcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlXG4gICAgICB9IGlmIChncm91cCkgeyAvLyBpZiB0aGVyZSBpcyBhIGNoaWxkIGdyb3VwXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHsgLy8gaWYgdGhpcyBncm91cCBoYXMgYSB0dXBsZSBvZiAobGFiZWwsIHZhbHVlKVxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKSAvLyBtYWtlIGl0ZW1zIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApIC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCkgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBuZXcgYXJyYXlcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZFxuICB9XG5cbn0iXX0=