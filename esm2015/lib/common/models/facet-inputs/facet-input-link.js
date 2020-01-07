/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztNQUVyQyxhQUFhLEdBQUcsSUFBSTtBQUUxQixNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7O0lBR2xDLFNBQVM7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O2NBQzNCLE9BQU8sR0FBRyxFQUFFOztZQUNkLGNBQWMsR0FBRyxDQUFDO1FBRXRCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtrQkFDMUIsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVE7Z0JBQ3ZDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVE7WUFDakMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsU0FBUzthQUNWO1lBQ0QsY0FBYyxJQUFJLENBQUMsQ0FBQztZQUVwQixJQUFJLGNBQWMsR0FBRyxhQUFhLEVBQUU7Z0JBQ2xDLE1BQU07YUFDUDtZQUVELGtCQUFrQjtZQUNsQixLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7a0JBRWxCLE9BQU8sR0FBRyxFQUFFO1lBQ2xCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFO1lBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFBRTtZQUUxRSxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLEVBQUUsS0FBSztnQkFDWCxPQUFPO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixLQUFLO2lCQUNOO2dCQUNELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUk7Z0JBQzFCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTthQUMxQixDQUFDLENBQUM7U0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBa0NLLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7YUFDdkM7aUJBQU07c0JBQ0MsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVTs7c0JBQzNDLE9BQU8sR0FBRyxZQUFZO2dCQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLEVBQUUsRUFBRSxPQUFPO29CQUNYLElBQUksRUFBRSxLQUFLO29CQUNYLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksU0FBUyxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsMkJBQTJCLENBQUM7U0FDakQ7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztnQkFDM0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUs7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsT0FBTyxDQUNMLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7Ozs7OztJQTFIQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAxMDAwO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcblxuICAgIGZvciAoY29uc3QgaXRlbURhdGEgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCB7IGxhYmVsLCBjb3VudGVyLCBoaWRkZW4gfSA9IGl0ZW1EYXRhO1xuICAgICAgbGV0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IGl0ZW1EYXRhO1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChyZXN1bHRzQ291bnRlciA+IFJFU1VMVFNfTElNSVQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogY29uc3QgcmVzdWx0czogYW55W10gPSB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSwgY291bnRlciwgaGlkZGVuLCBvcHRpb25zIH0pID0+IHtcbiAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzQ291bnRlciArPSAxO1xuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSB7IGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7IH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgY291bnRlcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uIHx8IG51bGwsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgICAqL1xuXG4gICAgLy8gZW1wdHkgc3RhdGUgY29udHJvbFxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gJ2VtcHR5JylbMF07XG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xuICAgICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlLFxuICAgICAgICAgIGVtcHR5SWQgPSAnZW1wdHktbGluayc7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xuICAgICAgbGV0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcyA/IGNvbmZpZy5jbGFzc2VzLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUgIT09ICdpcy1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IGZhY2V0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgKEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHx8XG4gICAgICAoZmFjZXRWYWx1ZSA9PT0gdmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpe1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=