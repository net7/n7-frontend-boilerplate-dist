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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7Ozs7O0lBQ3BDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztnQkFFeEQsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFO2dCQUNqQixLQUFLO2FBQ04sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTztnQkFDUCxNQUFNLEVBQUUsY0FBYzthQUN2QjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDaEIsTUFBTTs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBQzthQUMvQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dFNlbGVjdCBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBvcHRpb25zOiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoe1xuICAgICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgICAgdmFsdWU6IGAke3ZhbHVlfWAsXG4gICAgICAgIGxhYmVsLFxuICAgICAgfSkpIDogW10sXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZhY2V0SWQsXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LXNlbGVjdCcsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zXG4gICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gZmFjZXRWYWx1ZSlcbiAgICAgIC5mb3JFYWNoKChvcHRpb24pID0+IHsgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfSk7XG4gIH1cbn1cbiJdfQ==