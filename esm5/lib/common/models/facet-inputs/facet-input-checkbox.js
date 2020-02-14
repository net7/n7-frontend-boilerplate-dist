/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
var FacetInputCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(FacetInputCheckbox, _super);
    function FacetInputCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputCheckbox.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @param {?} index
         * @return {?}
         */
        function (_a, index) {
            var label = _a.label, value = _a.value;
            // normalize value
            value = '' + value;
            return {
                type: 'checkbox',
                id: _this.getId() + '-' + index,
                label: label,
                payload: {
                    facetId: facetId,
                    source: 'input-checkbox',
                    value: value
                },
                _meta: { facetId: facetId, value: value }
            };
        }));
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputCheckbox.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        var isArray = this.config.filterConfig.isArray;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        }));
    };
    return FacetInputCheckbox;
}(FacetInput));
export { FacetInputCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUF3Qyw4Q0FBVTtJQUFsRDs7SUFxQ0EsQ0FBQzs7Ozs7SUFuQ1csc0NBQVM7Ozs7SUFBbkI7UUFBQSxpQkFtQkM7O1lBbEJPLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsRUFBZ0IsRUFBRSxLQUFLO2dCQUFyQixnQkFBSyxFQUFFLGdCQUFLO1lBQ2xDLGtCQUFrQjtZQUNsQixLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUVuQixPQUFPO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLO2dCQUM5QixLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxTQUFBO29CQUNQLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLEtBQUssT0FBQTtpQkFDTjtnQkFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTthQUMxQixDQUFBO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLHNDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDakIsSUFBQSwwQ0FBTztRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTtZQUN4QixJQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDdkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU0sSUFBRyxVQUFVLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzNDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBckNELENBQXdDLFVBQVUsR0FxQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRDaGVja2JveCBleHRlbmRzIEZhY2V0SW5wdXQge1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCl7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXHJcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgXHJcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSArICctJyArIGluZGV4LCBcclxuICAgICAgICBsYWJlbDogbGFiZWwsIFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1jaGVja2JveCcsXHJcbiAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH0gXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKXtcclxuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xyXG4gICAgXHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKGNvbmZpZyA9PiB7XHJcbiAgICAgIGlmKGlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YoY29uZmlnLl9tZXRhLnZhbHVlKSAhPT0gLTEpe1xyXG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn0iXX0=