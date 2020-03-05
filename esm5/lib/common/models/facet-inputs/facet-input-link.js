/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* eslint-disable */
import { FacetInput } from './facet-input';
/** @type {?} */
var RESULTS_LIMIT = 1000;
var FacetInputLink = /** @class */ (function (_super) {
    tslib_1.__extends(FacetInputLink, _super);
    function FacetInputLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputLink.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var facetId = this.getFacetId();
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var resultsCounter = 0;
        try {
            for (var _b = tslib_1.__values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var itemData = _c.value;
                var label = itemData.label, counter = itemData.counter, hidden = itemData.hidden;
                var value = itemData.value, options = itemData.options;
                if (hidden) {
                    continue;
                }
                resultsCounter += 1;
                if (resultsCounter > RESULTS_LIMIT) {
                    break;
                }
                // normalize value
                value = "" + value;
                options = options || {};
                /** @type {?} */
                var classes = [];
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
                    counter: counter,
                    payload: {
                        facetId: facetId,
                        source: 'input-link',
                        value: value,
                    },
                    icon: options.icon || null,
                    classes: classes.join(' '),
                    _meta: { facetId: facetId, value: value },
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
        var itemEmpty = results.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === 'empty'; }))[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                var label = this.getConfig().emptyState.label;
                /** @type {?} */
                var emptyId = 'empty-link';
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
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputLink.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        var _this = this;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var isActive = _this._isActive(facetValue, config._meta.value);
            /** @type {?} */
            var classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) { return className !== 'is-active'; }));
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        }));
    };
    /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    FacetInputLink.prototype._isActive = /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    function (facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
            || (facetValue === value));
    };
    /**
     * @return {?}
     */
    FacetInputLink.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.facetValue = [];
    };
    return FacetInputLink;
}(FacetInput));
export { FacetInputLink };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetInputLink.prototype.facetValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUVyQyxhQUFhLEdBQUcsSUFBSTtBQUUxQjtJQUFvQywwQ0FBVTtJQUE5Qzs7SUEySEEsQ0FBQzs7Ozs7SUF4SFcsa0NBQVM7Ozs7SUFBbkI7OztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztZQUMzQixPQUFPLEdBQUcsRUFBRTs7WUFDZCxjQUFjLEdBQUcsQ0FBQzs7WUFFdEIsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTdCLElBQU0sUUFBUSxXQUFBO2dCQUNULElBQUEsc0JBQUssRUFBRSwwQkFBTyxFQUFFLHdCQUFNO2dCQUN4QixJQUFBLHNCQUFLLEVBQUUsMEJBQU87Z0JBQ3BCLElBQUksTUFBTSxFQUFFO29CQUNWLFNBQVM7aUJBQ1Y7Z0JBQ0QsY0FBYyxJQUFJLENBQUMsQ0FBQztnQkFFcEIsSUFBSSxjQUFjLEdBQUcsYUFBYSxFQUFFO29CQUNsQyxNQUFNO2lCQUNQO2dCQUVELGtCQUFrQjtnQkFDbEIsS0FBSyxHQUFHLEtBQUcsS0FBTyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7b0JBRWxCLE9BQU8sR0FBRyxFQUFFO2dCQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtB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Q0FBQyxDQUFDLENBQUM7ZUFDNUQsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sOEJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNIRCxDQUFvQyxVQUFVLEdBMkg3Qzs7Ozs7OztJQTFIQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XHJcblxyXG5jb25zdCBSRVNVTFRTX0xJTUlUID0gMTAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldElucHV0TGluayBleHRlbmRzIEZhY2V0SW5wdXQge1xyXG4gIHByaXZhdGUgZmFjZXRWYWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBsZXQgcmVzdWx0c0NvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbURhdGEgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IHsgbGFiZWwsIGNvdW50ZXIsIGhpZGRlbiB9ID0gaXRlbURhdGE7XHJcbiAgICAgIGxldCB7IHZhbHVlLCBvcHRpb25zIH0gPSBpdGVtRGF0YTtcclxuICAgICAgaWYgKGhpZGRlbikge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XHJcblxyXG4gICAgICBpZiAocmVzdWx0c0NvdW50ZXIgPiBSRVNVTFRTX0xJTUlUKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxyXG4gICAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XHJcbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XHJcblxyXG4gICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcclxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBjb25zdCByZXN1bHRzOiBhbnlbXSA9IHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlLCBjb3VudGVyLCBoaWRkZW4sIG9wdGlvbnMgfSkgPT4ge1xyXG4gICAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHRzQ291bnRlciArPSAxO1xyXG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcclxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xyXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxyXG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsXHJcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICBjb3VudGVyLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1saW5rJyxcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcclxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgICAqL1xyXG5cclxuICAgIC8vIGVtcHR5IHN0YXRlIGNvbnRyb2xcclxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSAnZW1wdHknKVswXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcclxuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xyXG4gICAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5SWQgPSAnZW1wdHktbGluayc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxyXG4gICAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcclxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXRlbUVtcHR5KSB7XHJcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xyXG4gICAgICBsZXQgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzID8gY29uZmlnLmNsYXNzZXMuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gZmFjZXRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSlcclxuICAgICAgfHwgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=