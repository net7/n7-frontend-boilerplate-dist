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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBc0MsNENBQVU7SUFBaEQ7O0lBMkJBLENBQUM7Ozs7O0lBMUJXLG9DQUFTOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU87WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsQ0FBQzs7b0JBRXhELEtBQUssRUFBRSxLQUFHLEtBQU87b0JBQ2pCLEtBQUssT0FBQTtpQkFDTixDQUFDO1lBSnVELENBSXZELEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxvQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUNoQixNQUFNOzs7O1FBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBM0IsQ0FBMkIsRUFBQzthQUMvQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFNLElBQU8sTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBM0JELENBQXNDLFVBQVUsR0EyQi9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dFNlbGVjdCBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBvcHRpb25zOiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoe1xuICAgICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgICAgdmFsdWU6IGAke3ZhbHVlfWAsXG4gICAgICAgIGxhYmVsLFxuICAgICAgfSkpIDogW10sXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZhY2V0SWQsXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LXNlbGVjdCcsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zXG4gICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gZmFjZXRWYWx1ZSlcbiAgICAgIC5mb3JFYWNoKChvcHRpb24pID0+IHsgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfSk7XG4gIH1cbn1cbiJdfQ==