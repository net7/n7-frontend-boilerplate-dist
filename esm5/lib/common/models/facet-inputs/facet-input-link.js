/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                value = '' + value;
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
                        value: value
                    },
                    icon: options.icon || null,
                    classes: classes.join(' '),
                    _meta: { facetId: facetId, value: value }
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
                    _meta: { facetId: emptyId, value: null }
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
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1) ||
            (facetValue === value));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFckMsYUFBYSxHQUFHLElBQUk7QUFFMUI7SUFBb0MsMENBQVU7SUFBOUM7O0lBMkhBLENBQUM7Ozs7O0lBeEhXLGtDQUFTOzs7O0lBQW5COzs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFDM0IsT0FBTyxHQUFHLEVBQUU7O1lBQ2QsY0FBYyxHQUFHLENBQUM7O1lBRXRCLEtBQXVCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QixJQUFNLFFBQVEsV0FBQTtnQkFDVCxJQUFBLHNCQUFLLEVBQUUsMEJBQU8sRUFBRSx3QkFBTTtnQkFDeEIsSUFBQSxzQkFBSyxFQUFFLDBCQUFPO2dCQUNwQixJQUFJLE1BQU0sRUFBRTtvQkFDVixTQUFTO2lCQUNWO2dCQUNELGNBQWMsSUFBSSxDQUFDLENBQUM7Z0JBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtvQkFDbEMsTUFBTTtpQkFDUDtnQkFFRCxrQkFBa0I7Z0JBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7b0JBRWxCLE9BQU8sR0FBRyxFQUFFO2dCQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFF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QUssQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sOEJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNIRCxDQUFvQyxVQUFVLEdBMkg3Qzs7Ozs7OztJQTFIQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldElucHV0IH0gZnJvbSAnLi9mYWNldC1pbnB1dCc7XG5cbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAxMDAwO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcblxuICAgIGZvciAoY29uc3QgaXRlbURhdGEgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCB7IGxhYmVsLCBjb3VudGVyLCBoaWRkZW4gfSA9IGl0ZW1EYXRhO1xuICAgICAgbGV0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IGl0ZW1EYXRhO1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChyZXN1bHRzQ291bnRlciA+IFJFU1VMVFNfTElNSVQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgY2xhc3Nlcy5wdXNoKG9wdGlvbnMuY2xhc3Nlcyk7IH1cbiAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZSh0aGlzLmZhY2V0VmFsdWUsIHZhbHVlKSkgeyBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpOyB9XG5cbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogY29uc3QgcmVzdWx0czogYW55W10gPSB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSwgY291bnRlciwgaGlkZGVuLCBvcHRpb25zIH0pID0+IHtcbiAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzQ291bnRlciArPSAxO1xuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSB7IGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7IH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgY291bnRlcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uIHx8IG51bGwsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgICAqL1xuXG4gICAgLy8gZW1wdHkgc3RhdGUgY29udHJvbFxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gJ2VtcHR5JylbMF07XG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xuICAgICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlLFxuICAgICAgICAgIGVtcHR5SWQgPSAnZW1wdHktbGluayc7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtRW1wdHkpIHtcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaChjb25maWcgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xuICAgICAgbGV0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcyA/IGNvbmZpZy5jbGFzc2VzLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKGNsYXNzTmFtZSA9PiBjbGFzc05hbWUgIT09ICdpcy1hY3RpdmUnKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IGZhY2V0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgKEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHx8XG4gICAgICAoZmFjZXRWYWx1ZSA9PT0gdmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpe1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=