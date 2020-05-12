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
        var metadataToShow = (config.get('entita-layout') || {})['metadata-to-show'];
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
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData, metadataToShow);
        }
        else {
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(data, metadataToShow);
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
     * @param {?=} metadataToShow
     * @return {?}
     */
    AwEntitaMetadataViewerDS.unpackFields = /**
     * @param {?} fields
     * @param {?=} metadataToShow
     * @return {?}
     */
    function (fields, metadataToShow) {
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
            extracted = fields
                .filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (Array.isArray(metadataToShow) && metadataToShow.length) {
                    return metadataToShow.indexOf(el.key) !== -1;
                }
                return false;
            }))
                .map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QyxvREFBVTtJQUF4RDs7SUFtRkEsQ0FBQzs7Ozs7O0lBbEZXLDRDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7UUFFSSxJQUFBLGlCQUFrQyxFQUFoQyxvQkFBTyxFQUFFLGtCQUF1Qjs7WUFDbEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUM7O1lBRTFFLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2dCQUM1QixnQkFBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLOztnQkFDM0UsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxnQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLEVBQUM7WUFDdkUsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDcEY7YUFBTTtZQUNMLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzVFO1FBQ0Qsa0JBQWtCO1FBQ2xCLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQzNCLE9BQU8sQ0FBQyxLQUFLO2lCQUNWLE1BQU07Ozs7WUFBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDO2lCQUM1QixPQUFPOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLHFDQUFZOzs7OztJQUFuQixVQUFvQixNQUFNLEVBQUUsY0FBZTs7Ozs7Ozs7WUFPckMsU0FBUyxHQUFHLEVBQUU7UUFDbEIscURBQXFEO1FBQ3JELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUcsTUFBTTtpQkFDZixNQUFNOzs7O1lBQUMsVUFBQyxFQUFFO2dCQUNULElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFO29CQUMxRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsRUFBQztpQkFDRCxHQUFHOzs7O1lBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFwQyxDQUFvQyxFQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUFDLHFCQUFxQjtRQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbkMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztnQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7Z0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7WUFDbkIsSUFBQSx1QkFBSzs7O2dCQUNQLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTs7O2dCQUN4QixJQUFJLEdBQVEsRUFBRTtZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO29CQUNoQiw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDckY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBbkZELENBQThDLFVBQVUsR0FtRnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvKlxuICAgICAgQWNjZXNzIGFuZCB1c2UgdGhpcy5vcHRpb25zIGlmIHRoZSByZW5kZXJpbmdcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cbiAgICAqL1xuXG4gICAgY29uc3QgeyBjb250ZXh0LCBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xuICAgIGNvbnN0IG1ldGFkYXRhVG9TaG93ID0gKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSlbJ21ldGFkYXRhLXRvLXNob3cnXTtcblxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ292ZXJ2aWV3JyAmJiBkYXRhKSB7XG4gICAgICBjb25zdCBjb25maWd1cmVkS2V5cyA9ICgoY29uZmlnLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGk7XG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZCkgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKTtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZmlsdGVyZWREYXRhLCBtZXRhZGF0YVRvU2hvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSwgbWV0YWRhdGFUb1Nob3cpO1xuICAgIH1cbiAgICAvLyBwcmV0dGlmeSBsYWJlbHNcbiAgICB1bnBhY2tlZERhdGEuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5pdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tpdGVtLmxhYmVsXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogdW5wYWNrZWREYXRhLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcywgbWV0YWRhdGFUb1Nob3c/KSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGFycmF5IG9mIGtleS12YWx1ZSB0dXBsZXNcbiAgICBpZiAoZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkc1xuICAgICAgICAuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1ldGFkYXRhVG9TaG93KSAmJiBtZXRhZGF0YVRvU2hvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGVsLmtleSkgIT09IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKGVsKSA9PiAoeyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfSkpO1xuICAgICAgcmV0dXJuIFt7IGl0ZW1zOiBleHRyYWN0ZWQgfV07XG4gICAgfVxuICAgIGlmICghZmllbGRzKSB7IHJldHVybiBbXTsgfSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0aGlzRmllbGQgPSBmaWVsZHNbaV07IC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpc0ZpZWxkLmtleTsgLy8gaXRlbSBsYWJlbFxuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpc0ZpZWxkOyAvLyBpdGVtIHZhbHVlXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gIH1cbn1cbiJdfQ==