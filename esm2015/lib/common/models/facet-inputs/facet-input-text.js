/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FacetInput } from './facet-input';
import helpers from '../../helpers';
export class FacetInputText extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        /** @type {?} */
        const payload = {
            facetId,
            source: 'input-text',
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: Object.assign({}, payload, { trigger: 'input' }),
            enterPayload: Object.assign({}, payload, { trigger: 'enter' }),
            iconPayload: Object.assign({}, payload, { trigger: 'icon' }),
            _meta: { facetId },
        };
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.value = helpers.unescapeDoubleQuotes(facetValue) || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFFcEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVOzs7OztJQUNsQyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztjQUMzQixPQUFPLEdBQUc7WUFDZCxPQUFPO1lBQ1AsTUFBTSxFQUFFLFlBQVk7U0FDckI7UUFFRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksb0JBQ1AsT0FBTyxJQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSxvQkFDUCxPQUFPLElBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLG9CQUNOLE9BQU8sSUFDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dFRleHQgZXh0ZW5kcyBGYWNldElucHV0IHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgZmFjZXRJZCxcclxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcixcclxuICAgICAgaWNvbjogdGhpcy5jb25maWcuaWNvbixcclxuICAgICAgaW5wdXRQYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaW5wdXQnLFxyXG4gICAgICB9LFxyXG4gICAgICBlbnRlclBheWxvYWQ6IHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIHRyaWdnZXI6ICdlbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb25QYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcclxuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gaGVscGVycy51bmVzY2FwZURvdWJsZVF1b3RlcyhmYWNldFZhbHVlKSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=