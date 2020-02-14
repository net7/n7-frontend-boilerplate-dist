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
                    value: '' + value,
                    label: label
                });
            })) : [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBc0MsNENBQVU7SUFBaEQ7O0lBNEJBLENBQUM7Ozs7O0lBMUJXLG9DQUFTOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU87WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsQ0FBQzs7b0JBRXhELEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSztvQkFDakIsS0FBSyxPQUFBO2lCQUNOLENBQUM7WUFKdUQsQ0FJdkQsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sU0FBQTtnQkFDUCxNQUFNLEVBQUUsY0FBYzthQUN2QjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLG9DQUFTOzs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ2hCLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUEzQixDQUEyQixFQUFDO2FBQzdDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUF0QixDQUFzQixFQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFzQyxVQUFVLEdBNEIvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRTZWxlY3QgZXh0ZW5kcyBGYWNldElucHV0IHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBvcHRpb25zOiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoe1xuICAgICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgICAgdmFsdWU6ICcnICsgdmFsdWUsXG4gICAgICAgIGxhYmVsXG4gICAgICB9KSkgOiBbXSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtc2VsZWN0JyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKXtcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zXG4gICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZhY2V0VmFsdWUpXG4gICAgICAuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==