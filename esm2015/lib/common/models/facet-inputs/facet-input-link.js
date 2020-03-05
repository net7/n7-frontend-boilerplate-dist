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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O01BRXJDLGFBQWEsR0FBRyxJQUFJO0FBRTFCLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7SUFHbEMsU0FBUzs7Y0FDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDM0IsT0FBTyxHQUFHLEVBQUU7O1lBQ2QsY0FBYyxHQUFHLENBQUM7UUFFdEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2tCQUMxQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUTtnQkFDdkMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUTtZQUNqQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixTQUFTO2FBQ1Y7WUFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO1lBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtnQkFDbEMsTUFBTTthQUNQO1lBRUQsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztrQkFFbEIsT0FBTyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUks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O0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7Ozs7O0lBMUhDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcclxuXHJcbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAxMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SW5wdXRMaW5rIGV4dGVuZHMgRmFjZXRJbnB1dCB7XHJcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGxldCByZXN1bHRzQ291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtRGF0YSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgY29uc3QgeyBsYWJlbCwgY291bnRlciwgaGlkZGVuIH0gPSBpdGVtRGF0YTtcclxuICAgICAgbGV0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IGl0ZW1EYXRhO1xyXG4gICAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0c0NvdW50ZXIgKz0gMTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHRzQ291bnRlciA+IFJFU1VMVFNfTElNSVQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXHJcbiAgICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcclxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cclxuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSB7IGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7IH1cclxuXHJcbiAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgICAgY291bnRlcixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBmYWNldElkLFxyXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxyXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XHJcbiAgICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxyXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XHJcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XHJcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxyXG4gICAgICAgICAgdmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxyXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgICovXHJcblxyXG4gICAgLy8gZW1wdHkgc3RhdGUgY29udHJvbFxyXG4gICAgY29uc3QgaXRlbUVtcHR5ID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09ICdlbXB0eScpWzBdO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xyXG4gICAgICBpZiAoaXRlbUVtcHR5KSB7XHJcbiAgICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLmdldENvbmZpZygpLmVtcHR5U3RhdGU7XHJcbiAgICAgICAgY29uc3QgZW1wdHlJZCA9ICdlbXB0eS1saW5rJztcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgaWQ6IGVtcHR5SWQsXHJcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxyXG4gICAgICAgICAgX21ldGE6IHsgZmFjZXRJZDogZW1wdHlJZCwgdmFsdWU6IG51bGwgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpdGVtRW1wdHkpIHtcclxuICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rIGlzLWhpZGRlbic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcclxuICAgIHRoaXMub3V0cHV0LmZvckVhY2goKGNvbmZpZykgPT4ge1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2lzQWN0aXZlKGZhY2V0VmFsdWUsIGNvbmZpZy5fbWV0YS52YWx1ZSk7XHJcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzQWN0aXZlKGZhY2V0VmFsdWUsIHZhbHVlKSB7XHJcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKVxyXG4gICAgICB8fCAoZmFjZXRWYWx1ZSA9PT0gdmFsdWUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==