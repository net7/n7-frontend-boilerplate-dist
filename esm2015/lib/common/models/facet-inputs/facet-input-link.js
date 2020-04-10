/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFckMsYUFBYSxHQUFHLElBQUk7QUFFMUIsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVOzs7OztJQUdsQyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztjQUMzQixPQUFPLEdBQUcsRUFBRTs7WUFDZCxjQUFjLEdBQUcsQ0FBQztRQUV0QixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7a0JBQzFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRO2dCQUN2QyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRO1lBQ2pDLElBQUksTUFBTSxFQUFFO2dCQUNWLFNBQVM7YUFDVjtZQUNELGNBQWMsSUFBSSxDQUFDLENBQUM7WUFFcEIsSUFBSSxjQUFjLEdBQUcsYUFBYSxFQUFFO2dCQUNsQyxNQUFNO2FBQ1A7WUFFRCxrQkFBa0I7WUFDbEIsS0FBSyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDbkIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7O2tCQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxD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SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7Ozs7SUExSEMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEZhY2V0SW5wdXQgfSBmcm9tICcuL2ZhY2V0LWlucHV0JztcblxuY29uc3QgUkVTVUxUU19MSU1JVCA9IDEwMDA7XG5cbmV4cG9ydCBjbGFzcyBGYWNldElucHV0TGluayBleHRlbmRzIEZhY2V0SW5wdXQge1xuICBwcml2YXRlIGZhY2V0VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBsZXQgcmVzdWx0c0NvdW50ZXIgPSAwO1xuXG4gICAgZm9yIChjb25zdCBpdGVtRGF0YSBvZiB0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IHsgbGFiZWwsIGNvdW50ZXIsIGhpZGRlbiB9ID0gaXRlbURhdGE7XG4gICAgICBsZXQgeyB2YWx1ZSwgb3B0aW9ucyB9ID0gaXRlbURhdGE7XG4gICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0c0NvdW50ZXIgKz0gMTtcblxuICAgICAgaWYgKHJlc3VsdHNDb3VudGVyID4gUkVTVUxUU19MSU1JVCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSB7IGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7IH1cblxuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgY291bnRlcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0c0NvdW50ZXIgKz0gMTtcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICAgKi9cblxuICAgIC8vIGVtcHR5IHN0YXRlIGNvbnRyb2xcbiAgICBjb25zdCBpdGVtRW1wdHkgPSByZXN1bHRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gJ2VtcHR5JylbMF07XG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xuICAgICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlO1xuICAgICAgICBjb25zdCBlbXB0eUlkID0gJ2VtcHR5LWxpbmsnO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBpZDogZW1wdHlJZCxcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcbiAgICAgICAgICBfbWV0YTogeyBmYWNldElkOiBlbXB0eUlkLCB2YWx1ZTogbnVsbCB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGl0ZW1FbXB0eSkge1xuICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rIGlzLWhpZGRlbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoZmFjZXRWYWx1ZSwgY29uZmlnLl9tZXRhLnZhbHVlKTtcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW107XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcigoY2xhc3NOYW1lKSA9PiBjbGFzc05hbWUgIT09ICdpcy1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IGZhY2V0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgKEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpXG4gICAgICB8fCAoZmFjZXRWYWx1ZSA9PT0gdmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBbXTtcbiAgfVxufVxuIl19