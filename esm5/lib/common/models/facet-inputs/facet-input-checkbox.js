/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXdDLDhDQUFVO0lBQWxEOztJQXFDQSxDQUFDOzs7OztJQW5DVyxzQ0FBUzs7OztJQUFuQjtRQUFBLGlCQW1CQzs7WUFsQk8sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxFQUFnQixFQUFFLEtBQUs7Z0JBQXJCLGdCQUFLLEVBQUUsZ0JBQUs7WUFDbEMsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBRW5CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUs7Z0JBQzlCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxPQUFPLFNBQUE7b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSyxPQUFBO2lCQUNOO2dCQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFO2FBQzFCLENBQUE7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sc0NBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBVTtRQUNqQixJQUFBLDBDQUFPO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3hCLElBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN2RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx5QkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBd0MsVUFBVSxHQXFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0Q2hlY2tib3ggZXh0ZW5kcyBGYWNldElucHV0IHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCl7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICBcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSArICctJyArIGluZGV4LCBcbiAgICAgICAgbGFiZWw6IGxhYmVsLCBcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sIFxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9IFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKXtcbiAgICBjb25zdCB7IGlzQXJyYXkgfSA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZztcbiAgICBcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgICBpZihpc0FycmF5ICYmIEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKGNvbmZpZy5fbWV0YS52YWx1ZSkgIT09IC0xKXtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxufSJdfQ==