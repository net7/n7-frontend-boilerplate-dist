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
            group: AwEntitaMetadataViewerDS.unpackFields(data),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QyxvREFBVTtJQUF4RDs7SUFpREEsQ0FBQzs7Ozs7O0lBL0NXLDRDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCOzs7OztVQUtFO1FBRUYsT0FBTztZQUNMLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ25ELENBQUE7SUFDSCxDQUFDOzs7OztJQUVNLHFDQUFZOzs7O0lBQW5CLFVBQXFCLE1BQU07Ozs7Ozs7O1lBT3JCLFNBQVMsR0FBRyxFQUFFLENBQUssMkJBQTJCOztRQUNsRCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sRUFBRSxDQUFBLENBQUMscUJBQXFCO1FBQzVDLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHOztnQkFDcEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBSyx1QkFBdUI7Ozs7Z0JBQ2pELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGNBQWM7Ozs7Z0JBQ3hDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFLLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFHLGFBQWE7Ozs7Z0JBQ3ZDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFFLGNBQWM7Ozs7Z0JBQ3hDLElBQUksR0FBTyxFQUFFLENBQWEsbUJBQW1COztZQUVqRCxJQUFJLEtBQUssRUFBRSxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7YUFDbkI7WUFBQyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRSwyQ0FBMkM7Z0JBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTthQUNuQjtZQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsNEJBQTRCO2dCQUN6QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSw4Q0FBOEM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsbUJBQW1CO2lCQUM5RTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLHlCQUF5QjtpQkFDcEY7YUFDRjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxtQ0FBbUM7U0FDekQ7UUFDRCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0lBRUgsK0JBQUM7QUFBRCxDQUFDLEFBakRELENBQThDLFVBQVUsR0FpRHZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgLypcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBvcHRpb25zOiAnLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLSAtIC1cbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nIFxuICAgICAgY2hhbmdlcyBiYXNlZCBvbiBjb250ZXh0LlxuICAgICovXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSksXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVucGFja0ZpZWxkcyggZmllbGRzICkge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICB2YXIgZXh0cmFjdGVkID0gW10gICAgIC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIGlmICghZmllbGRzKSByZXR1cm4gW10gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgdGhpc0ZpZWxkID0gZmllbGRzW2ldICAgICAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgdmFyIHRpdGxlID0gdGhpc0ZpZWxkLmxhYmVsICAgLy8gZmllbGQgdGl0bGVcbiAgICAgIHZhciBsYWJlbCA9IHRoaXNGaWVsZC5rZXkgICAgIC8vIGl0ZW0gbGFiZWxcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXNGaWVsZC52YWx1ZSAgIC8vIGl0ZW0gdmFsdWVcbiAgICAgIHZhciBncm91cCA9IHRoaXNGaWVsZC5maWVsZHMgIC8vIGNoaWxkIGdyb3VwXG4gICAgICB2YXIgdGVtcDphbnkgPSB7fSAgICAgICAgICAgICAvLyB0ZW1wb3Jhcnkgb2JqZWN0XG5cbiAgICAgIGlmICh0aXRsZSkgeyAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlXG4gICAgICB9IGlmIChsYWJlbCAmJiB2YWx1ZSkgeyAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbFxuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWVcbiAgICAgIH0gaWYgKGdyb3VwKSB7IC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkgeyAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXG4gICAgICAgICAgdGVtcC5pdGVtcyA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApIC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCkgLy8gbWFrZSBjaGlsZCBncm91cCBhcnJheVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHRyYWN0ZWQucHVzaCh0ZW1wKSAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkXG4gIH1cblxufSJdfQ==