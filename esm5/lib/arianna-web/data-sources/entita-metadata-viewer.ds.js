/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
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
          // console.log('metadata options: ', this.options);
          - - -
          Access and use this.options if the rendering
          changes based on context.
        */
        return {
            group: AwEntitaMetadataViewerDS.unpackFields(data)
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
        var extracted = [] // holds transformed object
        ;
        if (!fields)
            return []; // if is empty → quit
        for (var i = 0; i < fields.length; i++) {
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
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));
export { AwEntitaMetadataViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QyxvREFBVTtJQUF4RDs7SUFpREEsQ0FBQzs7Ozs7O0lBL0NXLDRDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCOzs7OztVQUtFO1FBRUYsT0FBTztZQUNMLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ25ELENBQUE7SUFDSCxDQUFDOzs7OztJQUVNLHFDQUFZOzs7O0lBQW5CLFVBQXFCLE1BQU07Ozs7Ozs7O1lBT3JCLFNBQVMsR0FBRyxFQUFFLENBQUssMkJBQTJCOztRQUNsRCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sRUFBRSxDQUFBLENBQUMscUJBQXFCO1FBQzVDLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHOztnQkFDcEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBSyx1QkFBdUI7Ozs7Z0JBQ2pELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGNBQWM7Ozs7Z0JBQ3hDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFLLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFFLGNBQWM7Ozs7Z0JBQ3hDLElBQUksR0FBTyxFQUFFLENBQWEsbUJBQW1COztZQUVqRCxJQUFJLEtBQUssRUFBRSxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7YUFDbkI7WUFBQyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRSwyQ0FBMkM7Z0JBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTthQUNuQjtZQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsNEJBQTRCO2dCQUN6QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSw4Q0FBOEM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsbUJBQW1CO2lCQUM5RTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLHlCQUF5QjtpQkFDcEY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxtQ0FBbUM7U0FDekQ7UUFDRCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0lBRUgsK0JBQUM7QUFBRCxDQUFDLEFBakRELENBQThDLFVBQVUsR0FpRHZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgLypcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBvcHRpb25zOiAnLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLSAtIC1cbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nIFxuICAgICAgY2hhbmdlcyBiYXNlZCBvbiBjb250ZXh0LlxuICAgICovXG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdW5wYWNrRmllbGRzKCBmaWVsZHMgKSB7XG4gICAgLypcbiAgICAgIFJlY3Vyc2l2ZSB1bnBhY2tpbmcgZm9yIHJlbmRlcmluZyByZXMuZmllbGRzXG4gICAgICAtIC0gLVxuICAgICAgVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSByZXNwb25zZSBvYmplY3QgdHJlZVxuICAgICAgaW50byBhbiBhcnJheSwgdXNhYmxlIGJ5IG1ldGFkYXRhLXZpZXdlci1jb21wb25lbnRcbiAgICAqL1xuICAgIHZhciBleHRyYWN0ZWQgPSBbXSAgICAgLy8gaG9sZHMgdHJhbnNmb3JtZWQgb2JqZWN0XG4gICAgaWYgKCFmaWVsZHMpIHJldHVybiBbXSAvLyBpZiBpcyBlbXB0eSDihpIgcXVpdFxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciB0aGlzRmllbGQgPSBmaWVsZHNbaV0gICAgIC8vIHJlbmFtZSBjdXJyZW50IGZpZWxkXG4gICAgICB2YXIgdGl0bGUgPSB0aGlzRmllbGQubGFiZWwgICAvLyBmaWVsZCB0aXRsZVxuICAgICAgdmFyIGxhYmVsID0gdGhpc0ZpZWxkLmtleSAgICAgLy8gaXRlbSBsYWJlbFxuICAgICAgdmFyIHZhbHVlID0gdGhpc0ZpZWxkLnZhbHVlICAgLy8gaXRlbSB2YWx1ZVxuICAgICAgdmFyIGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkcyAgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIHZhciB0ZW1wOmFueSA9IHt9ICAgICAgICAgICAgIC8vIHRlbXBvcmFyeSBvYmplY3RcblxuICAgICAgaWYgKHRpdGxlKSB7IC8vIGlmIHRoZXJlIGlzIGEgdGl0bGUsIHVzZSBpdFxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGVcbiAgICAgIH0gaWYgKGxhYmVsICYmIHZhbHVlKSB7IC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cbiAgICAgICAgdGVtcC5sYWJlbCA9IGxhYmVsXG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWx1ZVxuICAgICAgfSBpZiAoZ3JvdXApIHsgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7IC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCkgLy8gbWFrZSBpdGVtcyBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAuZ3JvdXAgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKSAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApIC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWRcbiAgfVxuXG59Il19