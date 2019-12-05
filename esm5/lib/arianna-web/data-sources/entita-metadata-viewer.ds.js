/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from "@n7-frontend/core";
import helpers from "../../common/helpers";
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
        var labels = this.options.labels;
        labels = labels || {};
        /** @type {?} */
        var unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
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
            function (item) { return item.label = helpers.prettifySnakeCase(item.label, labels[item.label]); }));
        }));
        return {
            group: unpackedData
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
            function (el) {
                return { label: el.key, value: el.value };
            }));
            return [{ items: extracted }];
        }
        if (!fields)
            return []; // if is empty → quit
        for (var i = 0; i < fields.length; i++) {
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
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));
export { AwEntitaMetadataViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEMsb0RBQVU7SUFBeEQ7O0lBb0VBLENBQUM7Ozs7OztJQW5FVyw0Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qjs7O1VBR0U7Ozs7O1FBRUksSUFBQSw0QkFBTTtRQUNaLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztZQUVoQixZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNoRSxrQkFBa0I7UUFDbEIsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDMUIsT0FBTyxDQUFDLEtBQUs7aUJBQ1YsTUFBTTs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7aUJBQzFCLE9BQU87Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDLENBQUM7UUFDN0YsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0scUNBQVk7Ozs7SUFBbkIsVUFBb0IsTUFBTTs7Ozs7Ozs7WUFPcEIsU0FBUyxHQUFHLEVBQUU7UUFDbEIscURBQXFEO1FBQ3JELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEVBQUU7Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMscUJBQXFCO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztnQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7Z0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7O2dCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztnQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7Z0JBQ3hCLElBQUksR0FBUSxFQUFFO1lBRWxCLElBQUksS0FBSyxFQUFFO2dCQUNULDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hCLDhDQUE4QztvQkFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7aUJBQy9FO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO2lCQUNyRjthQUNGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztTQUMxRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFwRUQsQ0FBOEMsVUFBVSxHQW9FdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSBcIkBuNy1mcm9udGVuZC9jb3JlXCI7XG5pbXBvcnQgaGVscGVycyBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvKlxuICAgICAgQWNjZXNzIGFuZCB1c2UgdGhpcy5vcHRpb25zIGlmIHRoZSByZW5kZXJpbmdcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cbiAgICAqL1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGFiZWxzID0gbGFiZWxzIHx8IHt9O1xuXG4gICAgY29uc3QgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhKTtcbiAgICAvLyBwcmV0dGlmeSBsYWJlbHNcbiAgICB1bnBhY2tlZERhdGEuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgIHNlY3Rpb24uaXRlbXNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ubGFiZWwpXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5sYWJlbCwgbGFiZWxzW2l0ZW0ubGFiZWxdKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwOiB1bnBhY2tlZERhdGFcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVucGFja0ZpZWxkcyhmaWVsZHMpIHtcbiAgICAvKlxuICAgICAgUmVjdXJzaXZlIHVucGFja2luZyBmb3IgcmVuZGVyaW5nIHJlcy5maWVsZHNcbiAgICAgIC0gLSAtXG4gICAgICBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybXMgdGhlIHJlc3BvbnNlIG9iamVjdCB0cmVlXG4gICAgICBpbnRvIGFuIGFycmF5LCB1c2FibGUgYnkgbWV0YWRhdGEtdmlld2VyLWNvbXBvbmVudFxuICAgICovXG4gICAgdmFyIGV4dHJhY3RlZCA9IFtdOyAvLyBob2xkcyB0cmFuc2Zvcm1lZCBvYmplY3RcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xuICAgIGlmIChmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZXh0cmFjdGVkID0gZmllbGRzLm1hcChlbCA9PiB7XG4gICAgICAgIHJldHVybiB7IGxhYmVsOiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3sgaXRlbXM6IGV4dHJhY3RlZCB9XTtcbiAgICB9XG4gICAgaWYgKCFmaWVsZHMpIHJldHVybiBbXTsgLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRoaXNGaWVsZCA9IGZpZWxkc1tpXTsgLy8gcmVuYW1lIGN1cnJlbnQgZmllbGRcbiAgICAgIHZhciB0aXRsZSA9IHRoaXNGaWVsZC5sYWJlbDsgLy8gZmllbGQgdGl0bGVcbiAgICAgIHZhciBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXNGaWVsZC52YWx1ZTsgLy8gaXRlbSB2YWx1ZVxuICAgICAgdmFyIGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkczsgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIHZhciB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gIH1cbn1cbiJdfQ==