import { __extends } from "tslib";
import { AwFacetInput } from './aw-facet-input';
var AwFacetInputSelect = /** @class */ (function (_super) {
    __extends(AwFacetInputSelect, _super);
    function AwFacetInputSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwFacetInputSelect.prototype.transform = function () {
        var facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data ? this.data.map(function (_a) {
                var value = _a.value, label = _a.label;
                return ({
                    // normalize value
                    value: "" + value,
                    label: label,
                });
            }) : [],
            payload: {
                facetId: facetId,
                source: 'input-select',
            },
            _meta: { facetId: facetId },
        };
    };
    AwFacetInputSelect.prototype.setActive = function (facetValue) {
        this.output.options
            .filter(function (option) { return option.value === facetValue; })
            .forEach(function (option) { option.selected = true; });
    };
    return AwFacetInputSelect;
}(AwFacetInput));
export { AwFacetInputSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1mYWNldC1pbnB1dHMvYXctZmFjZXQtaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFBd0Msc0NBQVk7SUFBcEQ7O0lBMkJBLENBQUM7SUExQlcsc0NBQVMsR0FBbkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO29CQUFkLGdCQUFLLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUN4RCxrQkFBa0I7b0JBQ2xCLEtBQUssRUFBRSxLQUFHLEtBQU87b0JBQ2pCLEtBQUssT0FBQTtpQkFDTixDQUFDO1lBSnVELENBSXZELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ2hCLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUEzQixDQUEyQixDQUFDO2FBQy9DLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEzQkQsQ0FBd0MsWUFBWSxHQTJCbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0ZhY2V0SW5wdXQgfSBmcm9tICcuL2F3LWZhY2V0LWlucHV0JztcblxuZXhwb3J0IGNsYXNzIEF3RmFjZXRJbnB1dFNlbGVjdCBleHRlbmRzIEF3RmFjZXRJbnB1dCB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcbiAgICAgIG9wdGlvbnM6IHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+ICh7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgICAgbGFiZWwsXG4gICAgICB9KSkgOiBbXSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtc2VsZWN0JyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0Lm9wdGlvbnNcbiAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBmYWNldFZhbHVlKVxuICAgICAgLmZvckVhY2goKG9wdGlvbikgPT4geyBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9KTtcbiAgfVxufVxuIl19