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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVOzs7OztJQUN0QyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksRUFBRSxVQUFVO1lBQ2hCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDOUIsS0FBSztZQUNMLE9BQU8sRUFBRTtnQkFDUCxPQUFPO2dCQUNQLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRTthQUNsQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRTtTQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7Y0FDbkIsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDekYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxVQUFVLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0Q2hlY2tib3ggZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSwgaW5kZXgpID0+ICh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQ6IGAke3RoaXMuZ2V0SWQoKX0tJHtpbmRleH1gLFxuICAgICAgbGFiZWwsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZhY2V0SWQsXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LWNoZWNrYm94JyxcbiAgICAgICAgdmFsdWU6IGAke3ZhbHVlfWAsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWU6IGAke3ZhbHVlfWAgfSxcbiAgICB9KSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcbiAgICBjb25zdCB7IGlzQXJyYXkgfSA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZztcblxuICAgIHRoaXMub3V0cHV0LmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgaWYgKGlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YoY29uZmlnLl9tZXRhLnZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmYWNldFZhbHVlID09PSBjb25maWcuX21ldGEudmFsdWUpIHtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19