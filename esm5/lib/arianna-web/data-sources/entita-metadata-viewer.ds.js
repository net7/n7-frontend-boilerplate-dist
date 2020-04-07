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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEMsb0RBQVU7SUFBeEQ7O0lBMkVBLENBQUM7Ozs7OztJQTFFVyw0Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qjs7O1VBR0U7Ozs7O1FBRUksSUFBQSxpQkFBa0MsRUFBaEMsb0JBQU8sRUFBRSxrQkFBdUI7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFOztZQUVwQyxZQUFZLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU8sS0FBSyxVQUFVLElBQUksSUFBSSxFQUFFOztnQkFDNUIsZ0JBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSzs7Z0JBQzNFLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixFQUFDO1lBQ3ZFLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDM0IsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7aUJBQzVCLE9BQU87Ozs7WUFBQyxVQUFDLElBQUk7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxxQ0FBWTs7OztJQUFuQixVQUFvQixNQUFNOzs7Ozs7OztZQU9wQixTQUFTLEdBQUcsRUFBRTtRQUNsQixxREFBcUQ7UUFDckQsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBcEMsQ0FBb0MsRUFBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUUsQ0FBQyxxQkFBcUI7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ25DLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Z0JBQ3JCLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSzs7O2dCQUN2QixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUc7O1lBQ25CLElBQUEsdUJBQUs7OztnQkFDUCxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU07OztnQkFDeEIsSUFBSSxHQUFRLEVBQUU7WUFFcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTNFRCxDQUE4QyxVQUFVLEdBMkV2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cblxuICAgIGNvbnN0IHsgY29udGV4dCwgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fTtcblxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ292ZXJ2aWV3JyAmJiBkYXRhKSB7XG4gICAgICBjb25zdCBjb25maWd1cmVkS2V5cyA9ICgoY29uZmlnLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGk7XG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZCkgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKTtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZmlsdGVyZWREYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcbiAgICB9XG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaXRlbXNcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sYWJlbClcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmxhYmVsLCBsYWJlbHNbaXRlbS5sYWJlbF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVucGFja0ZpZWxkcyhmaWVsZHMpIHtcbiAgICAvKlxuICAgICAgUmVjdXJzaXZlIHVucGFja2luZyBmb3IgcmVuZGVyaW5nIHJlcy5maWVsZHNcbiAgICAgIC0gLSAtXG4gICAgICBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybXMgdGhlIHJlc3BvbnNlIG9iamVjdCB0cmVlXG4gICAgICBpbnRvIGFuIGFycmF5LCB1c2FibGUgYnkgbWV0YWRhdGEtdmlld2VyLWNvbXBvbmVudFxuICAgICovXG4gICAgbGV0IGV4dHJhY3RlZCA9IFtdOyAvLyBob2xkcyB0cmFuc2Zvcm1lZCBvYmplY3RcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xuICAgIGlmIChmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZXh0cmFjdGVkID0gZmllbGRzLm1hcCgoZWwpID0+ICh7IGxhYmVsOiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSB9KSk7XG4gICAgICByZXR1cm4gW3sgaXRlbXM6IGV4dHJhY3RlZCB9XTtcbiAgICB9XG4gICAgaWYgKCFmaWVsZHMpIHsgcmV0dXJuIFtdOyB9IC8vIGlmIGlzIGVtcHR5IOKGkiBxdWl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRoaXNGaWVsZCA9IGZpZWxkc1tpXTsgLy8gcmVuYW1lIGN1cnJlbnQgZmllbGRcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpc0ZpZWxkLmxhYmVsOyAvLyBmaWVsZCB0aXRsZVxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzRmllbGQua2V5OyAvLyBpdGVtIGxhYmVsXG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzRmllbGQ7IC8vIGl0ZW0gdmFsdWVcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkczsgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cbiAgICAgICAgdGVtcC5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBncm91cCBoYXMgYSB0dXBsZSBvZiAobGFiZWwsIHZhbHVlKVxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAuZ3JvdXAgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBjaGlsZCBncm91cCBhcnJheVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHRyYWN0ZWQucHVzaCh0ZW1wKTsgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBuZXcgYXJyYXlcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgfVxufVxuIl19