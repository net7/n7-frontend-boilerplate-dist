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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7Ozs7O0lBRXRDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxrQkFBa0I7WUFDbEIsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFFbkIsT0FBTztnQkFDTCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSztnQkFDOUIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFO29CQUNQLE9BQU87b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSztpQkFDTjtnQkFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2FBQzFCLENBQUE7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7Y0FDbkIsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsSUFBRyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7Z0JBQ3ZGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUMzQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dENoZWNrYm94IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpe1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlIH0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCkgKyAnLScgKyBpbmRleCwgXG4gICAgICAgIGxhYmVsOiBsYWJlbCwgXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWNoZWNrYm94JyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9LCBcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XG4gICAgY29uc3QgeyBpc0FycmF5IH0gPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWc7XG4gICAgXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xuICAgICAgaWYoaXNBcnJheSAmJiBBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZihjb25maWcuX21ldGEudmFsdWUpICE9PSAtMSl7XG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZihmYWNldFZhbHVlID09PSBjb25maWcuX21ldGEudmFsdWUpIHtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbn0iXX0=