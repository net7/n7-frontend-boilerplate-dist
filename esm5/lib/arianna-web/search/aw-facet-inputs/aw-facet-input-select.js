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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1mYWNldC1pbnB1dHMvYXctZmFjZXQtaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFBd0Msc0NBQVk7SUFBcEQ7O0lBMkJBLENBQUM7SUExQlcsc0NBQVMsR0FBbkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO29CQUFkLGdCQUFLLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUN4RCxrQkFBa0I7b0JBQ2xCLEtBQUssRUFBRSxLQUFHLEtBQU87b0JBQ2pCLEtBQUssT0FBQTtpQkFDTixDQUFDO1lBSnVELENBSXZELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ2hCLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUEzQixDQUEyQixDQUFDO2FBQy9DLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEzQkQsQ0FBd0MsWUFBWSxHQTJCbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0ZhY2V0SW5wdXQgfSBmcm9tICcuL2F3LWZhY2V0LWlucHV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRTZWxlY3QgZXh0ZW5kcyBBd0ZhY2V0SW5wdXQge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoe1xyXG4gICAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZVxyXG4gICAgICAgIHZhbHVlOiBgJHt2YWx1ZX1gLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICB9KSkgOiBbXSxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgc291cmNlOiAnaW5wdXQtc2VsZWN0JyxcclxuICAgICAgfSxcclxuICAgICAgX21ldGE6IHsgZmFjZXRJZCB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xyXG4gICAgdGhpcy5vdXRwdXQub3B0aW9uc1xyXG4gICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gZmFjZXRWYWx1ZSlcclxuICAgICAgLmZvckVhY2goKG9wdGlvbikgPT4geyBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9KTtcclxuICB9XHJcbn1cclxuIl19