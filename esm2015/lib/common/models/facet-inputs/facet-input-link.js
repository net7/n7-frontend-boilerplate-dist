/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* eslint-disable */
import { FacetInput } from './facet-input';
/** @type {?} */
const RESULTS_LIMIT = 1000;
export class FacetInputLink extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        /** @type {?} */
        const results = [];
        /** @type {?} */
        let resultsCounter = 0;
        for (const itemData of this.data) {
            const { label, counter, hidden } = itemData;
            let { value, options } = itemData;
            if (hidden) {
                continue;
            }
            resultsCounter += 1;
            if (resultsCounter > RESULTS_LIMIT) {
                break;
            }
            // normalize value
            value = `${value}`;
            options = options || {};
            /** @type {?} */
            const classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (this._isActive(this.facetValue, value)) {
                classes.push('is-active');
            }
            results.push({
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                    facetId,
                    source: 'input-link',
                    value,
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value },
            });
        }
        /* const results: any[] = this.data.map(({ label, value, counter, hidden, options }) => {
              if (hidden) {
                return;
              }
        
              resultsCounter += 1;
              // normalize value
              value = '' + value;
              options = options || {};
        
              const classes = [];
              if (options.classes) { classes.push(options.classes); }
              if (this._isActive(this.facetValue, value)) { classes.push('is-active'); }
        
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
            });
             */
        // empty state control
        /** @type {?} */
        const itemEmpty = results.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.id === 'empty'))[0];
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
                    _meta: { facetId: emptyId, value: null },
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
        (config) => {
            /** @type {?} */
            const isActive = this._isActive(facetValue, config._meta.value);
            /** @type {?} */
            let classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                (className) => className !== 'is-active'));
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
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
            || (facetValue === value));
    }
    /**
     * @return {?}
     */
    clear() {
        this.facetValue = [];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetInputLink.prototype.facetValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O01BRXJDLGFBQWEsR0FBRyxJQUFJO0FBRTFCLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFHbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDM0IsT0FBTyxHQUFHLEVBQUU7O1lBQ2QsY0FBYyxHQUFHLENBQUM7UUFFdEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2tCQUMxQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUTtnQkFDdkMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUTtZQUNqQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixTQUFTO2FBQ1Y7WUFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO1lBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtnQkFDbEMsTUFBTTthQUNQO1lBRUQsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztrQkFFbEIsT0FBTyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUks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O0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7Ozs7O0lBMUhDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAxMDAwO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcblxuICAgIGZvciAoY29uc3QgaXRlbURhdGEgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCB7IGxhYmVsLCBjb3VudGVyLCBoaWRkZW4gfSA9IGl0ZW1EYXRhO1xuICAgICAgbGV0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IGl0ZW1EYXRhO1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChyZXN1bHRzQ291bnRlciA+IFJFU1VMVFNfTElNSVQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBjb25zdCByZXN1bHRzOiBhbnlbXSA9IHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlLCBjb3VudGVyLCBoaWRkZW4sIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICBjb3VudGVyLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1saW5rJyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgICovXG5cbiAgICAvLyBlbXB0eSBzdGF0ZSBjb250cm9sXG4gICAgY29uc3QgaXRlbUVtcHR5ID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09ICdlbXB0eScpWzBdO1xuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZTtcbiAgICAgICAgY29uc3QgZW1wdHlJZCA9ICdlbXB0eS1saW5rJztcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgaWQ6IGVtcHR5SWQsXG4gICAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgICAgY2xhc3NlczogJ2VtcHR5LXRleHQtbGluaycsXG4gICAgICAgICAgX21ldGE6IHsgZmFjZXRJZDogZW1wdHlJZCwgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2lzQWN0aXZlKGZhY2V0VmFsdWUsIGNvbmZpZy5fbWV0YS52YWx1ZSk7XG4gICAgICBsZXQgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzID8gY29uZmlnLmNsYXNzZXMuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmUoZmFjZXRWYWx1ZSwgdmFsdWUpIHtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKVxuICAgICAgfHwgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5mYWNldFZhbHVlID0gW107XG4gIH1cbn1cbiJdfQ==