/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7Ozs7O0lBQ3RDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakQsSUFBSSxFQUFFLFVBQVU7WUFDaEIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRTtZQUM5QixLQUFLO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLE9BQU87Z0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ2xCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFO1NBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsVUFBVTtjQUNuQixFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFJLFVBQVUsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRDaGVja2JveCBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4gKHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogYCR7dGhpcy5nZXRJZCgpfS0ke2luZGV4fWAsXG4gICAgICBsYWJlbCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZTogYCR7dmFsdWV9YCB9LFxuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xuXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBpZiAoaXNBcnJheSAmJiBBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZihjb25maWcuX21ldGEudmFsdWUpICE9PSAtMSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=