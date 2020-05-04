/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
var FacetInputSelect = /** @class */ (function (_super) {
    tslib_1.__extends(FacetInputSelect, _super);
    function FacetInputSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputSelect.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data ? this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var value = _a.value, label = _a.label;
                return ({
                    // normalize value
                    value: "" + value,
                    label: label,
                });
            })) : [],
            payload: {
                facetId: facetId,
                source: 'input-select',
            },
            _meta: { facetId: facetId },
        };
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputSelect.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        this.output.options
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.value === facetValue; }))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { option.selected = true; }));
    };
    return FacetInputSelect;
}(FacetInput));
export { FacetInputSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXNDLDRDQUFVO0lBQWhEOztJQTJCQSxDQUFDOzs7OztJQTFCVyxvQ0FBUzs7OztJQUFuQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFBTyxPQUFBLENBQUM7O29CQUV4RCxLQUFLLEVBQUUsS0FBRyxLQUFPO29CQUNqQixLQUFLLE9BQUE7aUJBQ04sQ0FBQztZQUp1RCxDQUl2RCxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxTQUFBO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sb0NBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDaEIsTUFBTTs7OztRQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQTNCLENBQTJCLEVBQUM7YUFDL0MsT0FBTzs7OztRQUFDLFVBQUMsTUFBTSxJQUFPLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFzQyxVQUFVLEdBMkIvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRTZWxlY3QgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuICAgICAgb3B0aW9uczogdGhpcy5kYXRhID8gdGhpcy5kYXRhLm1hcCgoeyB2YWx1ZSwgbGFiZWwgfSkgPT4gKHtcbiAgICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICAgIHZhbHVlOiBgJHt2YWx1ZX1gLFxuICAgICAgICBsYWJlbCxcbiAgICAgIH0pKSA6IFtdLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmYWNldElkLFxuICAgICAgICBzb3VyY2U6ICdpbnB1dC1zZWxlY3QnLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQub3B0aW9uc1xuICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGZhY2V0VmFsdWUpXG4gICAgICAuZm9yRWFjaCgob3B0aW9uKSA9PiB7IG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH0pO1xuICB9XG59XG4iXX0=