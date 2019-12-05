/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
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
        ({ label, value, counter, hidden, options }) => {
            // normalize value
            value = '' + value;
            options = options || {};
            /** @type {?} */
            let classes = [];
            if (options.classes)
                classes.push(options.classes);
            if (hidden)
                classes.push('is-hidden');
            if (this._isActive(this.facetValue, value))
                classes.push('is-active');
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
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value }
            };
        }));
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            let classes = config.classes ? config.classes.split(' ') : [];
            /** @type {?} */
            let isActive = this._isActive(facetValue, config._meta.value);
            if (!isActive) {
                classes = classes.filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => className !== 'is-active'));
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        }));
    }
    /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    _isActive(facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1) ||
            (facetValue === value));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetInputLink.prototype.facetValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7O0lBR2xDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDbEUsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztnQkFFcEIsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBRyxPQUFPLENBQUMsT0FBTztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFHLE1BQU07Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRSxPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLEVBQUUsS0FBSztnQkFDWCxPQUFPO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixLQUFLO2lCQUNOO2dCQUNELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUk7Z0JBQzFCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUMxQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDdkIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFDM0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzNELElBQUcsQ0FBQyxRQUFRLEVBQUM7Z0JBQ1gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUs7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsT0FBTyxDQUNMLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7SUFyREMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCl7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICBcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBsZXQgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYob3B0aW9ucy5jbGFzc2VzKSBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGlmKGhpZGRlbikgY2xhc3Nlcy5wdXNoKCdpcy1oaWRkZW4nKTtcbiAgICAgIGlmKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuXG4gICAgICByZXR1cm4geyBcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSwgXG4gICAgICAgIHRleHQ6IGxhYmVsLCBcbiAgICAgICAgY291bnRlciwgXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpe1xuICAgIHRoaXMub3V0cHV0LmZvckVhY2goY29uZmlnID0+IHtcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW10sXG4gICAgICAgIGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoZmFjZXRWYWx1ZSwgY29uZmlnLl9tZXRhLnZhbHVlKTtcbiAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcihjbGFzc05hbWUgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgX2lzQWN0aXZlKGZhY2V0VmFsdWUsIHZhbHVlKXtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB8fCBcbiAgICAgIChmYWNldFZhbHVlID09PSB2YWx1ZSlcbiAgICApO1xuICB9XG59Il19