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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFHbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNsRSxrQkFBa0I7WUFDbEIsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7O2dCQUVwQixPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFHLE9BQU8sQ0FBQyxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUcsTUFBTTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXJFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU87Z0JBQ1AsT0FBTyxFQUFFO29CQUNQLE9BQU87b0JBQ1AsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLEtBQUs7aUJBQ047Z0JBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSTtnQkFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMxQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2FBQzFCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2dCQUMzRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDM0QsSUFBRyxDQUFDLFFBQVEsRUFBQztnQkFDWCxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7Z0JBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUFDLENBQUM7YUFDbEU7aUJBQU0sSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixPQUFPLENBQ0wsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQ3ZCLENBQUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQXJEQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0TGluayBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcml2YXRlIGZhY2V0VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKXtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG4gIFxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSwgY291bnRlciwgaGlkZGVuLCBvcHRpb25zIH0pID0+IHtcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGxldCBjbGFzc2VzID0gW107XG4gICAgICBpZihvcHRpb25zLmNsYXNzZXMpIGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgaWYoaGlkZGVuKSBjbGFzc2VzLnB1c2goJ2lzLWhpZGRlbicpO1xuICAgICAgaWYodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG5cbiAgICAgIHJldHVybiB7IFxuICAgICAgICB0eXBlOiAnbGluaycsIFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLCBcbiAgICAgICAgdGV4dDogbGFiZWwsIFxuICAgICAgICBjb3VudGVyLCBcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uIHx8IG51bGwsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9IFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xuICAgICAgbGV0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcyA/IGNvbmZpZy5jbGFzc2VzLnNwbGl0KCcgJykgOiBbXSxcbiAgICAgICAgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xuICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUgIT09ICdpcy1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSBpZihjbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgICAgY29uZmlnLmNsYXNzZXMgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBfaXNBY3RpdmUoZmFjZXRWYWx1ZSwgdmFsdWUpe1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IGZhY2V0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgKEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHx8IFxuICAgICAgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxuICAgICk7XG4gIH1cbn0iXX0=