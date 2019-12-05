/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-select.ts
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
            options: this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ value, label }) => ({
                // normalize value
                value: '' + value,
                label
            }))),
            payload: {
                facetId,
                source: 'input-select',
            },
            _meta: { facetId }
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
        option => option.value === facetValue))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => option.selected = true));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7Ozs7O0lBRXBDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztnQkFFNUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLO2dCQUNqQixLQUFLO2FBQ04sQ0FBQyxFQUFDO1lBQ0gsT0FBTyxFQUFFO2dCQUNQLE9BQU87Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ2hCLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFDO2FBQzdDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFDLENBQUM7SUFDL0MsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dFNlbGVjdCBleHRlbmRzIEZhY2V0SW5wdXQge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKXtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG5cbiAgICByZXR1cm4geyBcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcbiAgICAgIG9wdGlvbnM6IHRoaXMuZGF0YS5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+ICh7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgICB2YWx1ZTogJycgKyB2YWx1ZSwgXG4gICAgICAgIGxhYmVsXG4gICAgICB9KSksXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZhY2V0SWQsXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LXNlbGVjdCcsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XG4gICAgdGhpcy5vdXRwdXQub3B0aW9uc1xuICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmYWNldFZhbHVlKVxuICAgICAgLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHRydWUpO1xuICB9XG4gIFxufSJdfQ==