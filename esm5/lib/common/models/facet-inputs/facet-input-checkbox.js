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
            return ({
                type: 'checkbox',
                id: _this.getId() + "-" + index,
                label: label,
                payload: {
                    facetId: facetId,
                    source: 'input-checkbox',
                    value: "" + value,
                },
                _meta: { facetId: facetId, value: "" + value },
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUF3Qyw4Q0FBVTtJQUFsRDs7SUE4QkEsQ0FBQzs7Ozs7SUE3Qlcsc0NBQVM7Ozs7SUFBbkI7UUFBQSxpQkFjQzs7WUFiTyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLEVBQWdCLEVBQUUsS0FBSztnQkFBckIsZ0JBQUssRUFBRSxnQkFBSztZQUFjLE9BQUEsQ0FBQztnQkFDakQsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBSyxLQUFJLENBQUMsS0FBSyxFQUFFLFNBQUksS0FBTztnQkFDOUIsS0FBSyxPQUFBO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxPQUFPLFNBQUE7b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSyxFQUFFLEtBQUcsS0FBTztpQkFDbEI7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUcsS0FBTyxFQUFFO2FBQ3RDLENBQUM7UUFWZ0QsQ0FVaEQsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxzQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQ2pCLElBQUEsMENBQU87UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQU07WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUF3QyxVQUFVLEdBOEJqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldElucHV0Q2hlY2tib3ggZXh0ZW5kcyBGYWNldElucHV0IHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4gKHtcclxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgaWQ6IGAke3RoaXMuZ2V0SWQoKX0tJHtpbmRleH1gLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxyXG4gICAgICAgIHZhbHVlOiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZTogYCR7dmFsdWV9YCB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICBjb25zdCB7IGlzQXJyYXkgfSA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZztcclxuXHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgaWYgKGlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YoY29uZmlnLl9tZXRhLnZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmFjZXRWYWx1ZSA9PT0gY29uZmlnLl9tZXRhLnZhbHVlKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=