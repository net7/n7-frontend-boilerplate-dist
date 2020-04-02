/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FacetInput } from './facet-input';
export class FacetInputSelect extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data ? this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ value, label }) => ({
                // normalize value
                value: `${value}`,
                label,
            }))) : [],
            payload: {
                facetId,
                source: 'input-select',
            },
            _meta: { facetId },
        };
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.options
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => option.value === facetValue))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => { option.selected = true; }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTs7Ozs7SUFDcEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7O2dCQUV4RCxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUU7Z0JBQ2pCLEtBQUs7YUFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUNoQixNQUFNOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFDO2FBQy9DLE9BQU87Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0U2VsZWN0IGV4dGVuZHMgRmFjZXRJbnB1dCB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcbiAgICAgIG9wdGlvbnM6IHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+ICh7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgICAgbGFiZWwsXG4gICAgICB9KSkgOiBbXSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtc2VsZWN0JyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0Lm9wdGlvbnNcbiAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBmYWNldFZhbHVlKVxuICAgICAgLmZvckVhY2goKG9wdGlvbikgPT4geyBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9KTtcbiAgfVxufVxuIl19