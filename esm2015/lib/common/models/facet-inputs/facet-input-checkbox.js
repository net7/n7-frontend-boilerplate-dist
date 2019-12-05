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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVOzs7OztJQUV0QyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0Msa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBRW5CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUs7Z0JBQzlCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxPQUFPO29CQUNQLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLEtBQUs7aUJBQ047Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUMxQixDQUFBO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO2NBQ25CLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN2RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRDaGVja2JveCBleHRlbmRzIEZhY2V0SW5wdXQge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKXtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG4gIFxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4ge1xuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpICsgJy0nICsgaW5kZXgsIFxuICAgICAgICBsYWJlbDogbGFiZWwsIFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1jaGVja2JveCcsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSwgXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH0gXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpe1xuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xuICAgIFxuICAgIHRoaXMub3V0cHV0LmZvckVhY2goY29uZmlnID0+IHtcbiAgICAgIGlmKGlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YoY29uZmlnLl9tZXRhLnZhbHVlKSAhPT0gLTEpe1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYoZmFjZXRWYWx1ZSA9PT0gY29uZmlnLl9tZXRhLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG59Il19