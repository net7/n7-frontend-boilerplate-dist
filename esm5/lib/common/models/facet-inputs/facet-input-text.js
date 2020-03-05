/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
import helpers from '../../helpers';
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
            source: 'input-text',
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
            _meta: { facetId: facetId },
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
        this.output.value = helpers.unescapeDoubleQuotes(facetValue) || null;
    };
    return FacetInputText;
}(FacetInput));
export { FacetInputText };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBRXBDO0lBQW9DLDBDQUFVO0lBQTlDOztJQWtDQSxDQUFDOzs7OztJQWpDVyxrQ0FBUzs7OztJQUFuQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFDM0IsT0FBTyxHQUFHO1lBQ2QsT0FBTyxTQUFBO1lBQ1AsTUFBTSxFQUFFLFlBQVk7U0FDckI7UUFFRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksdUJBQ1AsT0FBTyxJQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSx1QkFDUCxPQUFPLElBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLHVCQUNOLE9BQU8sSUFDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLGtDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN2RSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbENELENBQW9DLFVBQVUsR0FrQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldElucHV0VGV4dCBleHRlbmRzIEZhY2V0SW5wdXQge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBmYWNldElkLFxyXG4gICAgICBzb3VyY2U6ICdpbnB1dC10ZXh0JyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcclxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyLFxyXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZy5pY29uLFxyXG4gICAgICBpbnB1dFBheWxvYWQ6IHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIHRyaWdnZXI6ICdpbnB1dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVudGVyUGF5bG9hZDoge1xyXG4gICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgdHJpZ2dlcjogJ2VudGVyJyxcclxuICAgICAgfSxcclxuICAgICAgaWNvblBheWxvYWQ6IHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIHRyaWdnZXI6ICdpY29uJyxcclxuICAgICAgfSxcclxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xyXG4gICAgdGhpcy5vdXRwdXQudmFsdWUgPSBoZWxwZXJzLnVuZXNjYXBlRG91YmxlUXVvdGVzKGZhY2V0VmFsdWUpIHx8IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==