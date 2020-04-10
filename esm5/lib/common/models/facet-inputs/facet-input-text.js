/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFFcEM7SUFBb0MsMENBQVU7SUFBOUM7O0lBa0NBLENBQUM7Ozs7O0lBakNXLGtDQUFTOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztZQUMzQixPQUFPLEdBQUc7WUFDZCxPQUFPLFNBQUE7WUFDUCxNQUFNLEVBQUUsWUFBWTtTQUNyQjtRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDdEIsWUFBWSx1QkFDUCxPQUFPLElBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxZQUFZLHVCQUNQLE9BQU8sSUFDVixPQUFPLEVBQUUsT0FBTyxHQUNqQjtZQUNELFdBQVcsdUJBQ04sT0FBTyxJQUNWLE9BQU8sRUFBRSxNQUFNLEdBQ2hCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sa0NBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZFLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBb0MsVUFBVSxHQWtDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBmYWNldElkLFxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCcsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyLFxuICAgICAgaWNvbjogdGhpcy5jb25maWcuaWNvbixcbiAgICAgIGlucHV0UGF5bG9hZDoge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB0cmlnZ2VyOiAnaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIGVudGVyUGF5bG9hZDoge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB0cmlnZ2VyOiAnZW50ZXInLFxuICAgICAgfSxcbiAgICAgIGljb25QYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpY29uJyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gaGVscGVycy51bmVzY2FwZURvdWJsZVF1b3RlcyhmYWNldFZhbHVlKSB8fCBudWxsO1xuICB9XG59XG4iXX0=