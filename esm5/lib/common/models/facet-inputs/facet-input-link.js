/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRXJDLGFBQWEsR0FBRyxJQUFJO0FBRTFCO0lBQW9DLDBDQUFVO0lBQTlDOztJQTJIQSxDQUFDOzs7OztJQXhIVyxrQ0FBUzs7OztJQUFuQjs7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBQzNCLE9BQU8sR0FBRyxFQUFFOztZQUNkLGNBQWMsR0FBRyxDQUFDOztZQUV0QixLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBN0IsSUFBTSxRQUFRLFdBQUE7Z0JBQ1QsSUFBQSxzQkFBSyxFQUFFLDBCQUFPLEVBQUUsd0JBQU07Z0JBQ3hCLElBQUEsc0JBQUssRUFBRSwwQkFBTztnQkFDcEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsU0FBUztpQkFDVjtnQkFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUVwQixJQUFJLGNBQWMsR0FBRyxhQUFhLEVBQUU7b0JBQ2xDLE1BQU07aUJBQ1A7Z0JBRUQsa0JBQWtCO2dCQUNsQixLQUFLLEdBQUcsS0FBRyxLQUFPLENBQUM7Z0JBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztvQkFFbEIsT0FBTyxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFBRTtnQkFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FB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QUFDLENBQUMsQ0FBQztlQUM1RCxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSw4QkFBSzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBM0hELENBQW9DLFVBQVUsR0EySDdDOzs7Ozs7O0lBMUhDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAxMDAwO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcblxuICAgIGZvciAoY29uc3QgaXRlbURhdGEgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCB7IGxhYmVsLCBjb3VudGVyLCBoaWRkZW4gfSA9IGl0ZW1EYXRhO1xuICAgICAgbGV0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IGl0ZW1EYXRhO1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChyZXN1bHRzQ291bnRlciA+IFJFU1VMVFNfTElNSVQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBjb25zdCByZXN1bHRzOiBhbnlbXSA9IHRoaXMuZGF0YS5tYXAoKHsgbGFiZWwsIHZhbHVlLCBjb3VudGVyLCBoaWRkZW4sIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgICBpZiAob3B0aW9ucy5jbGFzc2VzKSB7IGNsYXNzZXMucHVzaChvcHRpb25zLmNsYXNzZXMpOyB9XG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICBjb3VudGVyLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1saW5rJyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIF9tZXRhOiB7IGZhY2V0SWQsIHZhbHVlIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgICovXG5cbiAgICAvLyBlbXB0eSBzdGF0ZSBjb250cm9sXG4gICAgY29uc3QgaXRlbUVtcHR5ID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09ICdlbXB0eScpWzBdO1xuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgICAgaXRlbUVtcHR5LmNsYXNzZXMgPSAnZW1wdHktdGV4dC1saW5rJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZTtcbiAgICAgICAgY29uc3QgZW1wdHlJZCA9ICdlbXB0eS1saW5rJztcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgaWQ6IGVtcHR5SWQsXG4gICAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgICAgY2xhc3NlczogJ2VtcHR5LXRleHQtbGluaycsXG4gICAgICAgICAgX21ldGE6IHsgZmFjZXRJZDogZW1wdHlJZCwgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2lzQWN0aXZlKGZhY2V0VmFsdWUsIGNvbmZpZy5fbWV0YS52YWx1ZSk7XG4gICAgICBsZXQgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzID8gY29uZmlnLmNsYXNzZXMuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmUoZmFjZXRWYWx1ZSwgdmFsdWUpIHtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKVxuICAgICAgfHwgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5mYWNldFZhbHVlID0gW107XG4gIH1cbn1cbiJdfQ==