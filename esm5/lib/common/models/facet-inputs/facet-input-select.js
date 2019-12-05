/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FacetInput } from './facet-input';
var FacetInputSelect = /** @class */ (function (_super) {
    tslib_1.__extends(FacetInputSelect, _super);
    function FacetInputSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputSelect.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var value = _a.value, label = _a.label;
                return ({
                    // normalize value
                    value: '' + value,
                    label: label
                });
            })),
            payload: {
                facetId: facetId,
                source: 'input-select',
            },
            _meta: { facetId: facetId }
        };
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputSelect.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        this.output.options
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.value === facetValue; }))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.selected = true; }));
    };
    return FacetInputSelect;
}(FacetInput));
export { FacetInputSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvZmFjZXQtaW5wdXRzL2ZhY2V0LWlucHV0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXNDLDRDQUFVO0lBQWhEOztJQTZCQSxDQUFDOzs7OztJQTNCVyxvQ0FBUzs7OztJQUFuQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUVqQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFBTyxPQUFBLENBQUM7O29CQUU1QyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUs7b0JBQ2pCLEtBQUssT0FBQTtpQkFDTixDQUFDO1lBSjJDLENBSTNDLEVBQUM7WUFDSCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxTQUFBO2dCQUNQLE1BQU0sRUFBRSxjQUFjO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUU7U0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sb0NBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDaEIsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQTNCLENBQTJCLEVBQUM7YUFDN0MsT0FBTzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBN0JELENBQXNDLFVBQVUsR0E2Qi9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXRJbnB1dCB9IGZyb20gJy4vZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRJbnB1dFNlbGVjdCBleHRlbmRzIEZhY2V0SW5wdXQge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKXtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG5cbiAgICByZXR1cm4geyBcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcbiAgICAgIG9wdGlvbnM6IHRoaXMuZGF0YS5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+ICh7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgICB2YWx1ZTogJycgKyB2YWx1ZSwgXG4gICAgICAgIGxhYmVsXG4gICAgICB9KSksXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZhY2V0SWQsXG4gICAgICAgIHNvdXJjZTogJ2lucHV0LXNlbGVjdCcsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSl7XG4gICAgdGhpcy5vdXRwdXQub3B0aW9uc1xuICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmYWNldFZhbHVlKVxuICAgICAgLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHRydWUpO1xuICB9XG4gIFxufSJdfQ==