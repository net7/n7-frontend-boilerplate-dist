/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEMsb0RBQVU7SUFBeEQ7O0lBMkVBLENBQUM7Ozs7OztJQTFFVyw0Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qjs7O1VBR0U7Ozs7O1FBRUksSUFBQSxpQkFBa0MsRUFBaEMsb0JBQU8sRUFBRSxrQkFBdUI7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFOztZQUVwQyxZQUFZLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU8sS0FBSyxVQUFVLElBQUksSUFBSSxFQUFFOztnQkFDNUIsZ0JBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSzs7Z0JBQzNFLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixFQUFDO1lBQ3ZFLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDM0IsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7aUJBQzVCLE9BQU87Ozs7WUFBQyxVQUFDLElBQUk7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxxQ0FBWTs7OztJQUFuQixVQUFvQixNQUFNOzs7Ozs7OztZQU9wQixTQUFTLEdBQUcsRUFBRTtRQUNsQixxREFBcUQ7UUFDckQsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBcEMsQ0FBb0MsRUFBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUUsQ0FBQyxxQkFBcUI7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ25DLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Z0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSzs7O2dCQUN2QixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUc7O1lBQ25CLElBQUEsdUJBQUs7OztnQkFDUCxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU07OztnQkFDeEIsSUFBSSxHQUFRLEVBQUU7WUFFcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTNFRCxDQUE4QyxVQUFVLEdBMkV2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIC8qXHJcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXHJcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cclxuICAgICovXHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0LCBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge307XHJcblxyXG4gICAgbGV0IHVucGFja2VkRGF0YSA9IFtdO1xyXG4gICAgaWYgKGNvbnRleHQgPT09ICdvdmVydmlldycgJiYgZGF0YSkge1xyXG4gICAgICBjb25zdCBjb25maWd1cmVkS2V5cyA9ICgoY29uZmlnLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpO1xyXG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGZpbHRlcmVkRGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXHJcbiAgICB1bnBhY2tlZERhdGEuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBzZWN0aW9uLml0ZW1zXHJcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sYWJlbClcclxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5sYWJlbCwgbGFiZWxzW2l0ZW0ubGFiZWxdKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcykge1xyXG4gICAgLypcclxuICAgICAgUmVjdXJzaXZlIHVucGFja2luZyBmb3IgcmVuZGVyaW5nIHJlcy5maWVsZHNcclxuICAgICAgLSAtIC1cclxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxyXG4gICAgICBpbnRvIGFuIGFycmF5LCB1c2FibGUgYnkgbWV0YWRhdGEtdmlld2VyLWNvbXBvbmVudFxyXG4gICAgKi9cclxuICAgIGxldCBleHRyYWN0ZWQgPSBbXTsgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XHJcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xyXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGV4dHJhY3RlZCA9IGZpZWxkcy5tYXAoKGVsKSA9PiAoeyBsYWJlbDogZWwua2V5LCB2YWx1ZTogZWwudmFsdWUgfSkpO1xyXG4gICAgICByZXR1cm4gW3sgaXRlbXM6IGV4dHJhY3RlZCB9XTtcclxuICAgIH1cclxuICAgIGlmICghZmllbGRzKSB7IHJldHVybiBbXTsgfSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxyXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzRmllbGQua2V5OyAvLyBpdGVtIGxhYmVsXHJcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXNGaWVsZDsgLy8gaXRlbSB2YWx1ZVxyXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXHJcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XHJcblxyXG4gICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcclxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxyXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxyXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcclxuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcclxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXh0cmFjdGVkO1xyXG4gIH1cclxufVxyXG4iXX0=