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
        /** @type {?} */
        const results = this.data.map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ label, value, counter, hidden, options }) => {
            // normalize value
            value = '' + value;
            options = options || {};
            /** @type {?} */
            const classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (hidden) {
                classes.push('is-hidden');
            }
            if (this._isActive(this.facetValue, value)) {
                classes.push('is-active');
            }
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
        // empty state control
        /** @type {?} */
        const itemEmpty = results.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.id === 'empty'))[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                const { label } = this.getConfig().emptyState;
                /** @type {?} */
                const emptyId = 'empty-link';
                results.push({
                    type: 'link',
                    id: emptyId,
                    text: label,
                    classes: 'empty-text-link',
                    _meta: { facetId: emptyId, value: null }
                });
            }
        }
        else if (itemEmpty) {
            itemEmpty.classes = 'empty-text-link is-hidden';
        }
        return results;
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
            const isActive = this._isActive(facetValue, config._meta.value);
            /** @type {?} */
            let classes = config.classes ? config.classes.split(' ') : [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFHbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FFM0IsT0FBTyxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNsRixrQkFBa0I7WUFDbEIsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7O2tCQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTtZQUN2RCxJQUFJLE1BQU0sRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUFFO1lBRTFFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU87Z0JBQ1AsT0FBTyxFQUFFO29CQUNQLE9BQU87b0JBQ1AsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLEtBQUs7aUJBQ047Z0JBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSTtnQkFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMxQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2FBQzFCLENBQUM7UUFDSixDQUFDLEVBQUM7OztjQUdJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7YUFDdkM7aUJBQU07c0JBQ0MsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVTs7c0JBQzNDLE9BQU8sR0FBRyxZQUFZO2dCQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLEVBQUUsRUFBRSxPQUFPO29CQUNYLElBQUksRUFBRSxLQUFLO29CQUNYLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksU0FBUyxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsMkJBQTJCLENBQUM7U0FDakQ7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztnQkFDM0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUs7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsT0FBTyxDQUNMLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7SUEzRUMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XG4gICAgICBpZiAoaGlkZGVuKSB7IGNsYXNzZXMucHVzaCgnaXMtaGlkZGVuJyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIGVtcHR5IHN0YXRlIGNvbnRyb2xcbiAgICBjb25zdCBpdGVtRW1wdHkgPSByZXN1bHRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09ICdlbXB0eScpWzBdO1xuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZSxcbiAgICAgICAgICBlbXB0eUlkID0gJ2VtcHR5LWxpbmsnO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBpZDogZW1wdHlJZCxcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcbiAgICAgICAgICBfbWV0YTogeyBmYWNldElkOiBlbXB0eUlkLCB2YWx1ZTogbnVsbCB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbUVtcHR5KSB7XG4gICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsgaXMtaGlkZGVuJztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0LmZvckVhY2goY29uZmlnID0+IHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoZmFjZXRWYWx1ZSwgY29uZmlnLl9tZXRhLnZhbHVlKTtcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW107XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcihjbGFzc05hbWUgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmUoZmFjZXRWYWx1ZSwgdmFsdWUpIHtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB8fFxuICAgICAgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==