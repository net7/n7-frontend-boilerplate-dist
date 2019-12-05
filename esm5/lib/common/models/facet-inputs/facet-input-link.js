/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
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
        var _this = this;
        /** @type {?} */
        var facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var label = _a.label, value = _a.value, counter = _a.counter, hidden = _a.hidden, options = _a.options;
            // normalize value
            value = '' + value;
            options = options || {};
            /** @type {?} */
            var classes = [];
            if (options.classes)
                classes.push(options.classes);
            if (hidden)
                classes.push('is-hidden');
            if (_this._isActive(_this.facetValue, value))
                classes.push('is-active');
            return {
                type: 'link',
                id: _this.getId(),
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
            };
        }));
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
            var classes = config.classes ? config.classes.split(' ') : [];
            /** @type {?} */
            var isActive = _this._isActive(facetValue, config._meta.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBc0RBLENBQUM7Ozs7O0lBbkRXLGtDQUFTOzs7O0lBQW5CO1FBQUEsaUJBNEJDOztZQTNCTyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsRUFBMEM7Z0JBQXhDLGdCQUFLLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLGtCQUFNLEVBQUUsb0JBQU87WUFDNUQsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztnQkFFcEIsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBRyxPQUFPLENBQUMsT0FBTztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFHLE1BQU07Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRSxPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLEVBQUUsS0FBSztnQkFDWCxPQUFPLFNBQUE7Z0JBQ1AsT0FBTyxFQUFFO29CQUNQLE9BQU8sU0FBQTtvQkFDUCxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsS0FBSyxPQUFBO2lCQUNOO2dCQUNELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUk7Z0JBQzFCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUU7YUFDMUIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxrQ0FBUzs7OztJQUFoQixVQUFpQixVQUFVO1FBQTNCLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNOztnQkFDcEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFDM0QsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzNELElBQUcsQ0FBQyxRQUFRLEVBQUM7Z0JBQ1gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxrQ0FBUzs7Ozs7O0lBQWpCLFVBQWtCLFVBQVUsRUFBRSxLQUFLO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLE9BQU8sQ0FDTCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF0REQsQ0FBb0MsVUFBVSxHQXNEN0M7Ozs7Ozs7SUFyREMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCl7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICBcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBsZXQgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYob3B0aW9ucy5jbGFzc2VzKSBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGlmKGhpZGRlbikgY2xhc3Nlcy5wdXNoKCdpcy1oaWRkZW4nKTtcbiAgICAgIGlmKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuXG4gICAgICByZXR1cm4geyBcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBcbiAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSwgXG4gICAgICAgIHRleHQ6IGxhYmVsLCBcbiAgICAgICAgY291bnRlciwgXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpe1xuICAgIHRoaXMub3V0cHV0LmZvckVhY2goY29uZmlnID0+IHtcbiAgICAgIGxldCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMgPyBjb25maWcuY2xhc3Nlcy5zcGxpdCgnICcpIDogW10sXG4gICAgICAgIGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoZmFjZXRWYWx1ZSwgY29uZmlnLl9tZXRhLnZhbHVlKTtcbiAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcihjbGFzc05hbWUgPT4gY2xhc3NOYW1lICE9PSAnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYoY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgX2lzQWN0aXZlKGZhY2V0VmFsdWUsIHZhbHVlKXtcbiAgICB0aGlzLmZhY2V0VmFsdWUgPSBmYWNldFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIChBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB8fCBcbiAgICAgIChmYWNldFZhbHVlID09PSB2YWx1ZSlcbiAgICApO1xuICB9XG59Il19