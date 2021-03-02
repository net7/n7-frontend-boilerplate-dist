import { __extends } from "tslib";
import { AwFacetInput } from './aw-facet-input';
var AwFacetInputCheckbox = /** @class */ (function (_super) {
    __extends(AwFacetInputCheckbox, _super);
    function AwFacetInputCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwFacetInputCheckbox.prototype.transform = function () {
        var _this = this;
        var facetId = this.getFacetId();
        return this.data.map(function (_a, index) {
            var label = _a.label, value = _a.value;
            return ({
                type: 'checkbox',
                id: _this.getId() + "-" + index,
                label: label,
                payload: {
                    facetId: facetId,
                    source: 'input-checkbox',
                    value: "" + value,
                },
                _meta: { facetId: facetId, value: "" + value },
            });
        });
    };
    AwFacetInputCheckbox.prototype.setActive = function (facetValue) {
        var isArray = this.config.filterConfig.isArray;
        this.output.forEach(function (config) {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        });
    };
    return AwFacetInputCheckbox;
}(AwFacetInput));
export { AwFacetInputCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvc2VhcmNoL2F3LWZhY2V0LWlucHV0cy9hdy1mYWNldC1pbnB1dC1jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBQTBDLHdDQUFZO0lBQXREOztJQThCQSxDQUFDO0lBN0JXLHdDQUFTLEdBQW5CO1FBQUEsaUJBY0M7UUFiQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCLEVBQUUsS0FBSztnQkFBckIsZ0JBQUssRUFBRSxnQkFBSztZQUFjLE9BQUEsQ0FBQztnQkFDakQsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBSyxLQUFJLENBQUMsS0FBSyxFQUFFLFNBQUksS0FBTztnQkFDOUIsS0FBSyxPQUFBO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxPQUFPLFNBQUE7b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSyxFQUFFLEtBQUcsS0FBTztpQkFDbEI7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUcsS0FBTyxFQUFFO2FBQ3RDLENBQUM7UUFWZ0QsQ0FVaEQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLFVBQVU7UUFDakIsSUFBQSwwQ0FBTyxDQUE4QjtRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUEwQyxZQUFZLEdBOEJyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3RmFjZXRJbnB1dCB9IGZyb20gJy4vYXctZmFjZXQtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgQXdGYWNldElucHV0Q2hlY2tib3ggZXh0ZW5kcyBBd0ZhY2V0SW5wdXQge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcblxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4gKHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogYCR7dGhpcy5nZXRJZCgpfS0ke2luZGV4fWAsXG4gICAgICBsYWJlbCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgICAgICB2YWx1ZTogYCR7dmFsdWV9YCxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZTogYCR7dmFsdWV9YCB9LFxuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIGNvbnN0IHsgaXNBcnJheSB9ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnO1xuXG4gICAgdGhpcy5vdXRwdXQuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBpZiAoaXNBcnJheSAmJiBBcnJheS5pc0FycmF5KGZhY2V0VmFsdWUpICYmIGZhY2V0VmFsdWUuaW5kZXhPZihjb25maWcuX21ldGEudmFsdWUpICE9PSAtMSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZhY2V0VmFsdWUgPT09IGNvbmZpZy5fbWV0YS52YWx1ZSkge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=