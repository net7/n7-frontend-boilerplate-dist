/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FacetInput } from './facet-input';
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
            source: 'input-text'
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
            _meta: { facetId }
        };
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.value = facetValue || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFFbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDM0IsT0FBTyxHQUFHO1lBQ2QsT0FBTztZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN0QixZQUFZLG9CQUNQLE9BQU8sSUFDVixPQUFPLEVBQUUsT0FBTyxHQUNqQjtZQUNELFlBQVksb0JBQ1AsT0FBTyxJQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsV0FBVyxvQkFDTixPQUFPLElBQ1YsT0FBTyxFQUFFLE1BQU0sR0FDaEI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQztJQUN6QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0VGV4dCBleHRlbmRzIEZhY2V0SW5wdXQge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBmYWNldElkLFxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jb25maWcucGxhY2Vob2xkZXIsXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZy5pY29uLFxuICAgICAgaW5wdXRQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpbnB1dCdcbiAgICAgIH0sXG4gICAgICBlbnRlclBheWxvYWQ6IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgdHJpZ2dlcjogJ2VudGVyJ1xuICAgICAgfSxcbiAgICAgIGljb25QYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpY29uJ1xuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcbiAgICB0aGlzLm91dHB1dC52YWx1ZSA9IGZhY2V0VmFsdWUgfHwgbnVsbDtcbiAgfVxufVxuIl19