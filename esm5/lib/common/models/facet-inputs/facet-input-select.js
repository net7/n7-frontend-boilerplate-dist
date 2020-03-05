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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXNDLDRDQUFVO0lBQWhEOztJQTJCQSxDQUFDOzs7OztJQTFCVyxvQ0FBUzs7OztJQUFuQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFBTyxPQUFBLENBQUM7O29CQUV4RCxLQUFLLEVBQUUsS0FBRyxLQUFPO29CQUNqQixLQUFLLE9BQUE7aUJBQ04sQ0FBQztZQUp1RCxDQUl2RCxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxTQUFBO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sb0NBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDaEIsTUFBTTs7OztRQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQTNCLENBQTJCLEVBQUM7YUFDL0MsT0FBTzs7OztRQUFDLFVBQUMsTUFBTSxJQUFPLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFzQyxVQUFVLEdBMkIvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldElucHV0U2VsZWN0IGV4dGVuZHMgRmFjZXRJbnB1dCB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+ICh7XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXHJcbiAgICAgICAgdmFsdWU6IGAke3ZhbHVlfWAsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgIH0pKSA6IFtdLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICBzb3VyY2U6ICdpbnB1dC1zZWxlY3QnLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zXHJcbiAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBmYWNldFZhbHVlKVxyXG4gICAgICAuZm9yRWFjaCgob3B0aW9uKSA9PiB7IG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH0pO1xyXG4gIH1cclxufVxyXG4iXX0=