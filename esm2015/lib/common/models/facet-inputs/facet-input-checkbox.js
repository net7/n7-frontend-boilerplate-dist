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
        ({ label, value }, index) => ({
            type: 'checkbox',
            id: `${this.getId()}-${index}`,
            label,
            payload: {
                facetId,
                source: 'input-checkbox',
                value: `${value}`,
            },
            _meta: { facetId, value: `${value}` },
        })));
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
        (config) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVOzs7OztJQUN0QyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksRUFBRSxVQUFVO1lBQ2hCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDOUIsS0FBSztZQUNMLE9BQU8sRUFBRTtnQkFDUCxPQUFPO2dCQUNQLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRTthQUNsQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRTtTQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7Y0FDbkIsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDekYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxVQUFVLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dENoZWNrYm94IGV4dGVuZHMgRmFjZXRJbnB1dCB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSwgaW5kZXgpID0+ICh7XHJcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgIGlkOiBgJHt0aGlzLmdldElkKCl9LSR7aW5kZXh9YCxcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBmYWNldElkLFxyXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LWNoZWNrYm94JyxcclxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcclxuICAgICAgfSxcclxuICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWU6IGAke3ZhbHVlfWAgfSxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xyXG4gICAgY29uc3QgeyBpc0FycmF5IH0gPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWc7XHJcblxyXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XHJcbiAgICAgIGlmIChpc0FycmF5ICYmIEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKGNvbmZpZy5fbWV0YS52YWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19