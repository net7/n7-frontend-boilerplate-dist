/**
 * @fileoverview added by tsickle
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
            var label = _a.label, value = _a.value, counter = _a.counter, hidden = _a.hidden;
            // normalize value
            value = '' + value;
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
                classes: hidden ? 'is-hidden' : '',
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
        var isArray = this.config.filterConfig.isArray;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.classes = 'is-active';
            }
            else if (facetValue === config._meta.value) {
                config.classes = 'is-active';
            }
            else {
                config.classes = null;
            }
        }));
    };
    return FacetInputLink;
}(FacetInput));
export { FacetInputLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbW9kZWxzL2ZhY2V0LWlucHV0cy9mYWNldC1pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUF1Q0EsQ0FBQzs7Ozs7SUFyQ1csa0NBQVM7Ozs7SUFBbkI7UUFBQSxpQkFxQkM7O1lBcEJPLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxFQUFpQztnQkFBL0IsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLG9CQUFPLEVBQUUsa0JBQU07WUFDbkQsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBRW5CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU8sU0FBQTtnQkFDUCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxTQUFBO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixLQUFLLE9BQUE7aUJBQ047Z0JBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTthQUMxQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLGtDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDakIsSUFBQSwwQ0FBTztRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTtZQUN4QixJQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDdkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDOUI7aUJBQU0sSUFBRyxVQUFVLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzNDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBdkNELENBQW9DLFVBQVUsR0F1QzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBGYWNldElucHV0IHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCl7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICBcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoeyBsYWJlbCwgdmFsdWUsIGNvdW50ZXIsIGhpZGRlbiB9KSA9PiB7XG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcbiAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHsgXG4gICAgICAgIHR5cGU6ICdsaW5rJywgXG4gICAgICAgIGlkOiB0aGlzLmdldElkKCksIFxuICAgICAgICB0ZXh0OiBsYWJlbCwgXG4gICAgICAgIGNvdW50ZXIsIFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICBzb3VyY2U6ICdpbnB1dC1saW5rJyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBoaWRkZW4gPyAnaXMtaGlkZGVuJyA6ICcnLFxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9IFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XG4gICAgY29uc3QgeyBpc0FycmF5IH0gPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWc7XG5cbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgICBpZihpc0FycmF5ICYmIEFycmF5LmlzQXJyYXkoZmFjZXRWYWx1ZSkgJiYgZmFjZXRWYWx1ZS5pbmRleE9mKGNvbmZpZy5fbWV0YS52YWx1ZSkgIT09IC0xKXtcbiAgICAgICAgY29uZmlnLmNsYXNzZXMgPSAnaXMtYWN0aXZlJztcbiAgICAgIH0gZWxzZSBpZihmYWNldFZhbHVlID09PSBjb25maWcuX21ldGEudmFsdWUpIHtcbiAgICAgICAgY29uZmlnLmNsYXNzZXMgPSAnaXMtYWN0aXZlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5jbGFzc2VzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbn0iXX0=