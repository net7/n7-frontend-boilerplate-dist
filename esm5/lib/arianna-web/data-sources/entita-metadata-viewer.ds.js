/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaMetadataViewerDS, _super);
    function AwEntitaMetadataViewerDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwEntitaMetadataViewerDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        var _a = this.options, context = _a.context, config = _a.config;
        /** @type {?} */
        var labels = this.options.labels || {};
        /** @type {?} */
        var unpackedData = [];
        if (context === 'overview' && data) {
            /** @type {?} */
            var configuredKeys_1 = ((config.get('entita-layout') || {}).overview || {}).campi;
            /** @type {?} */
            var filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return configuredKeys_1.includes(d.key); }));
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
        function (section) {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.label = helpers.prettifySnakeCase(item.label, labels[item.label]);
            }));
        }));
        return {
            group: unpackedData,
        };
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    AwEntitaMetadataViewerDS.unpackFields = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
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
            function (el) { return ({ label: el.key, value: el.value }); }));
            return [{ items: extracted }];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (var i = 0; i < fields.length; i += 1) {
            /** @type {?} */
            var thisField = fields[i];
            // rename current field
            /** @type {?} */
            var title = thisField.label;
            // field title
            /** @type {?} */
            var label = thisField.key;
            // item label
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
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));
export { AwEntitaMetadataViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QyxvREFBVTtJQUF4RDs7SUEyRUEsQ0FBQzs7Ozs7O0lBMUVXLDRDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7UUFFSSxJQUFBLGlCQUFrQyxFQUFoQyxvQkFBTyxFQUFFLGtCQUF1Qjs7WUFDbEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBRXBDLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2dCQUM1QixnQkFBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLOztnQkFDM0UsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxnQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLEVBQUM7WUFDdkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUMzQixPQUFPLENBQUMsS0FBSztpQkFDVixNQUFNOzs7O1lBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztpQkFDNUIsT0FBTzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLHFDQUFZOzs7O0lBQW5CLFVBQW9CLE1BQU07Ozs7Ozs7O1lBT3BCLFNBQVMsR0FBRyxFQUFFO1FBQ2xCLHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUFDLHFCQUFxQjtRQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbkMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztnQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7Z0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7WUFDbkIsSUFBQSx1QkFBSzs7O2dCQUNQLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTs7O2dCQUN4QixJQUFJLEdBQVEsRUFBRTtZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO29CQUNoQiw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDckY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBM0VELENBQThDLFVBQVUsR0EyRXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvKlxuICAgICAgQWNjZXNzIGFuZCB1c2UgdGhpcy5vcHRpb25zIGlmIHRoZSByZW5kZXJpbmdcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cbiAgICAqL1xuXG4gICAgY29uc3QgeyBjb250ZXh0LCBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xuXG4gICAgbGV0IHVucGFja2VkRGF0YSA9IFtdO1xuICAgIGlmIChjb250ZXh0ID09PSAnb3ZlcnZpZXcnICYmIGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRLZXlzID0gKChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JykgfHwge30pLm92ZXJ2aWV3IHx8IHt9KS5jYW1waTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpO1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhmaWx0ZXJlZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGRhdGEpO1xuICAgIH1cbiAgICAvLyBwcmV0dGlmeSBsYWJlbHNcbiAgICB1bnBhY2tlZERhdGEuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5pdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcykge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBrZXktdmFsdWUgdHVwbGVzXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHMubWFwKChlbCkgPT4gKHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlIH0pKTtcbiAgICAgIHJldHVybiBbeyBpdGVtczogZXh0cmFjdGVkIH1dO1xuICAgIH1cbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXNGaWVsZDsgLy8gaXRlbSB2YWx1ZVxuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzRmllbGQuZmllbGRzOyAvLyBjaGlsZCBncm91cFxuICAgICAgY29uc3QgdGVtcDogYW55ID0ge307IC8vIHRlbXBvcmFyeSBvYmplY3RcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdGl0bGUsIHVzZSBpdFxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XG4gICAgICB9XG4gICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGNoaWxkIGdyb3VwXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXG4gICAgICAgICAgdGVtcC5pdGVtcyA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGl0ZW1zIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApOyAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkO1xuICB9XG59XG4iXX0=