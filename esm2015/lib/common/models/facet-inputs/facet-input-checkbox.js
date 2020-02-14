/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FacetInput } from './facet-input';
export class FacetInputCheckbox extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @param {?} index
         * @return {?}
         */
        ({ label, value }, index) => {
            // normalize value
            value = '' + value;
            return {
                type: 'checkbox',
                id: this.getId() + '-' + index,
                label: label,
                payload: {
                    facetId,
                    source: 'input-checkbox',
                    value
                },
                _meta: { facetId, value }
            };
        }));
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        const { isArray } = this.config.filterConfig;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVOzs7OztJQUV0QyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0Msa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBRW5CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUs7Z0JBQzlCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxPQUFPO29CQUNQLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLEtBQUs7aUJBQ047Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUMxQixDQUFBO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO2NBQ25CLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN2RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldElucHV0Q2hlY2tib3ggZXh0ZW5kcyBGYWNldElucHV0IHtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpe1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxyXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIFxyXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCkgKyAnLScgKyBpbmRleCwgXHJcbiAgICAgICAgbGFiZWw6IGxhYmVsLCBcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBmYWNldElkLFxyXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxyXG4gICAgICAgICAgdmFsdWVcclxuICAgICAgICB9LCBcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9IFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XHJcbiAgICBjb25zdCB7IGlzQXJyYXkgfSA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZztcclxuICAgIFxyXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBpZihpc0FycmF5ICYmIEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKGNvbmZpZy5fbWV0YS52YWx1ZSkgIT09IC0xKXtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZihmYWNldFZhbHVlID09PSBjb25maWcuX21ldGEudmFsdWUpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59Il19