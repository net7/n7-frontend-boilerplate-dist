/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FacetInput } from './facet-input';
export class FacetInputLink extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ label, value, counter, hidden }) => {
            // normalize value
            value = '' + value;
            return {
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                    facetId,
                    source: 'input-link',
                    value
                },
                classes: hidden ? 'is-hidden' : '',
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
                config.classes = 'is-active';
            }
            else if (facetValue === config._meta.value) {
                config.classes = 'is-active';
            }
            else {
                config.classes = null;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFFbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQ3pELGtCQUFrQjtZQUNsQixLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUVuQixPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLEVBQUUsS0FBSztnQkFDWCxPQUFPO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixLQUFLO2lCQUNOO2dCQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUMxQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO2NBQ25CLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN2RixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQzthQUM5QjtpQkFBTSxJQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRMaW5rIGV4dGVuZHMgRmFjZXRJbnB1dCB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpe1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlLCBjb3VudGVyLCBoaWRkZW4gfSkgPT4ge1xuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG5cbiAgICAgIHJldHVybiB7IFxuICAgICAgICB0eXBlOiAnbGluaycsIFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLCBcbiAgICAgICAgdGV4dDogbGFiZWwsIFxuICAgICAgICBjb3VudGVyLCBcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJyxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpe1xuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xuXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xuICAgICAgaWYoaXNBcnJheSAmJiBBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZihjb25maWcuX21ldGEudmFsdWUpICE9PSAtMSl7XG4gICAgICAgIGNvbmZpZy5jbGFzc2VzID0gJ2lzLWFjdGl2ZSc7XG4gICAgICB9IGVsc2UgaWYoZmFjZXRWYWx1ZSA9PT0gY29uZmlnLl9tZXRhLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5jbGFzc2VzID0gJ2lzLWFjdGl2ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuY2xhc3NlcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG59Il19