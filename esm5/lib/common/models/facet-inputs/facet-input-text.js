/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
var FacetInputText = /** @class */ (function (_super) {
    tslib_1.__extends(FacetInputText, _super);
    function FacetInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputText.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var facetId = this.getFacetId();
        /** @type {?} */
        var payload = {
            facetId: facetId,
            source: 'input-text'
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: tslib_1.__assign({}, payload, { trigger: 'input' }),
            enterPayload: tslib_1.__assign({}, payload, { trigger: 'enter' }),
            iconPayload: tslib_1.__assign({}, payload, { trigger: 'icon' }),
            _meta: { facetId: facetId }
        };
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputText.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        this.output.value = facetValue || null;
    };
    return FacetInputText;
}(FacetInput));
export { FacetInputText };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUFxQ0EsQ0FBQzs7Ozs7SUFuQ1csa0NBQVM7Ozs7SUFBbkI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRTNCLE9BQU8sR0FBRztZQUNkLE9BQU8sU0FBQTtZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN0QixZQUFZLHVCQUNQLE9BQU8sSUFDVixPQUFPLEVBQUUsT0FBTyxHQUNqQjtZQUNELFlBQVksdUJBQ1AsT0FBTyxJQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsV0FBVyx1QkFDTixPQUFPLElBQ1YsT0FBTyxFQUFFLE1BQU0sR0FDaEI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxrQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFvQyxVQUFVLEdBcUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpe1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIGZhY2V0SWQsXG4gICAgICBzb3VyY2U6ICdpbnB1dC10ZXh0J1xuICAgIH07XG5cbiAgICByZXR1cm4geyBcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jb25maWcucGxhY2Vob2xkZXIsXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZy5pY29uLFxuICAgICAgaW5wdXRQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpbnB1dCdcbiAgICAgIH0sXG4gICAgICBlbnRlclBheWxvYWQ6IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgdHJpZ2dlcjogJ2VudGVyJ1xuICAgICAgfSxcbiAgICAgIGljb25QYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpY29uJ1xuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpe1xuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gZmFjZXRWYWx1ZSB8fCBudWxsO1xuICB9XG4gIFxufSJdfQ==