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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUF3Qyw4Q0FBVTtJQUFsRDs7SUE4QkEsQ0FBQzs7Ozs7SUE3Qlcsc0NBQVM7Ozs7SUFBbkI7UUFBQSxpQkFjQzs7WUFiTyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLEVBQWdCLEVBQUUsS0FBSztnQkFBckIsZ0JBQUssRUFBRSxnQkFBSztZQUFjLE9BQUEsQ0FBQztnQkFDakQsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBSyxLQUFJLENBQUMsS0FBSyxFQUFFLFNBQUksS0FBTztnQkFDOUIsS0FBSyxPQUFBO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxPQUFPLFNBQUE7b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSyxFQUFFLEtBQUcsS0FBTztpQkFDbEI7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUcsS0FBTyxFQUFFO2FBQ3RDLENBQUM7UUFWZ0QsQ0FVaEQsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxzQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQ2pCLElBQUEsMENBQU87UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQU07WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUF3QyxVQUFVLEdBOEJqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRDaGVja2JveCBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4gKHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogYCR7dGhpcy5nZXRJZCgpfS0ke2luZGV4fWAsXG4gICAgICBsYWJlbCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZTogYCR7dmFsdWV9YCB9LFxuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xuXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBpZiAoaXNBcnJheSAmJiBBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZihjb25maWcuX21ldGEudmFsdWUpICE9PSAtMSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=