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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXdDLDhDQUFVO0lBQWxEOztJQThCQSxDQUFDOzs7OztJQTdCVyxzQ0FBUzs7OztJQUFuQjtRQUFBLGlCQWNDOztZQWJPLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsRUFBZ0IsRUFBRSxLQUFLO2dCQUFyQixnQkFBSyxFQUFFLGdCQUFLO1lBQWMsT0FBQSxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsRUFBRSxFQUFLLEtBQUksQ0FBQyxLQUFLLEVBQUUsU0FBSSxLQUFPO2dCQUM5QixLQUFLLE9BQUE7Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLE9BQU8sU0FBQTtvQkFDUCxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixLQUFLLEVBQUUsS0FBRyxLQUFPO2lCQUNsQjtnQkFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLEVBQUUsS0FBRyxLQUFPLEVBQUU7YUFDdEMsQ0FBQztRQVZnRCxDQVVoRCxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVNLHNDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDakIsSUFBQSwwQ0FBTztRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBTTtZQUN6QixJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDekYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxVQUFVLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOUJELENBQXdDLFVBQVUsR0E4QmpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dENoZWNrYm94IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlIH0sIGluZGV4KSA9PiAoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGlkOiBgJHt0aGlzLmdldElkKCl9LSR7aW5kZXh9YCxcbiAgICAgIGxhYmVsLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmYWNldElkLFxuICAgICAgICBzb3VyY2U6ICdpbnB1dC1jaGVja2JveCcsXG4gICAgICAgIHZhbHVlOiBgJHt2YWx1ZX1gLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlOiBgJHt2YWx1ZX1gIH0sXG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgY29uc3QgeyBpc0FycmF5IH0gPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWc7XG5cbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIGlmIChpc0FycmF5ICYmIEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKGNvbmZpZy5fbWV0YS52YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmFjZXRWYWx1ZSA9PT0gY29uZmlnLl9tZXRhLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==