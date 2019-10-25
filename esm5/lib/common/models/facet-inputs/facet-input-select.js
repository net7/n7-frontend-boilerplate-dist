/**
 * @fileoverview added by tsickle
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
            options: this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var value = _a.value, label = _a.label;
                return ({
                    // normalize value
                    value: '' + value,
                    label: label
                });
            })),
            payload: {
                facetId: facetId,
                source: 'input-select',
            },
            _meta: { facetId: facetId }
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
        function (option) { return option.selected = true; }));
    };
    return FacetInputSelect;
}(FacetInput));
export { FacetInputSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBc0MsNENBQVU7SUFBaEQ7O0lBNkJBLENBQUM7Ozs7O0lBM0JXLG9DQUFTOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU87WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsQ0FBQzs7b0JBRTVDLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSztvQkFDakIsS0FBSyxPQUFBO2lCQUNOLENBQUM7WUFKMkMsQ0FJM0MsRUFBQztZQUNILE9BQU8sRUFBRTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxvQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUNoQixNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBM0IsQ0FBMkIsRUFBQzthQUM3QyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQy9DLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUE3QkQsQ0FBc0MsVUFBVSxHQTZCL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0U2VsZWN0IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpe1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuICAgICAgb3B0aW9uczogdGhpcy5kYXRhLm1hcCgoeyB2YWx1ZSwgbGFiZWwgfSkgPT4gKHtcbiAgICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICAgIHZhbHVlOiAnJyArIHZhbHVlLCBcbiAgICAgICAgbGFiZWxcbiAgICAgIH0pKSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtc2VsZWN0JyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKXtcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zXG4gICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZhY2V0VmFsdWUpXG4gICAgICAuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZSk7XG4gIH1cbiAgXG59Il19