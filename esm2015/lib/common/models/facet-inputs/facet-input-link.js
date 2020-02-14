/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            value = '' + value;
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
                    value
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFckMsYUFBYSxHQUFHLElBQUk7QUFFMUIsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVOzs7OztJQUdsQyxTQUFTOztjQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztjQUMzQixPQUFPLEdBQUcsRUFBRTs7WUFDZCxjQUFjLEdBQUcsQ0FBQztRQUV0QixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7a0JBQzFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRO2dCQUN2QyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRO1lBQ2pDLElBQUksTUFBTSxFQUFFO2dCQUNWLFNBQVM7YUFDVjtZQUNELGNBQWMsSUFBSSxDQUFDLENBQUM7WUFFcEIsSUFBSSxjQUFjLEdBQUcsYUFBYSxFQUFFO2dCQUNsQyxNQUFNO2FBQ1A7WUFFRCxrQkFBa0I7WUFDbEIsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7O2tCQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxD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SUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7Ozs7SUExSEMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xyXG5cclxuY29uc3QgUkVTVUxUU19MSU1JVCA9IDEwMDA7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcclxuICBwcml2YXRlIGZhY2V0VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW1EYXRhIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICBjb25zdCB7IGxhYmVsLCBjb3VudGVyLCBoaWRkZW4gfSA9IGl0ZW1EYXRhO1xyXG4gICAgICBsZXQgeyB2YWx1ZSwgb3B0aW9ucyB9ID0gaXRlbURhdGE7XHJcbiAgICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzQ291bnRlciArPSAxO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdHNDb3VudGVyID4gUkVTVUxUU19MSU1JVCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcclxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xyXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxyXG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxyXG5cclxuICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICB0eXBlOiAnbGluaycsXHJcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICBjb3VudGVyLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1saW5rJyxcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcclxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XHJcbiAgICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxyXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XHJcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XHJcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxyXG4gICAgICAgICAgdmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxyXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgICovXHJcblxyXG4gICAgLy8gZW1wdHkgc3RhdGUgY29udHJvbFxyXG4gICAgY29uc3QgaXRlbUVtcHR5ID0gcmVzdWx0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSAnZW1wdHknKVswXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcclxuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xyXG4gICAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlLFxyXG4gICAgICAgICAgZW1wdHlJZCA9ICdlbXB0eS1saW5rJztcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgaWQ6IGVtcHR5SWQsXHJcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxyXG4gICAgICAgICAgX21ldGE6IHsgZmFjZXRJZDogZW1wdHlJZCwgdmFsdWU6IG51bGwgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW1FbXB0eSkge1xyXG4gICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsgaXMtaGlkZGVuJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xyXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2lzQWN0aXZlKGZhY2V0VmFsdWUsIGNvbmZpZy5fbWV0YS52YWx1ZSk7XHJcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTmFtZSAhPT0gJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gZmFjZXRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSkgfHxcclxuICAgICAgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpe1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==