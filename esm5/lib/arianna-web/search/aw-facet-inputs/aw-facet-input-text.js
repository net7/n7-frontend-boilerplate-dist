import { __assign, __extends } from "tslib";
import { AwFacetInput } from './aw-facet-input';
import helpers from '../../../common/helpers';
var AwFacetInputText = /** @class */ (function (_super) {
    __extends(AwFacetInputText, _super);
    function AwFacetInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwFacetInputText.prototype.transform = function () {
        var facetId = this.getFacetId();
        var payload = {
            facetId: facetId,
            source: 'input-text',
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: __assign(__assign({}, payload), { trigger: 'input' }),
            enterPayload: __assign(__assign({}, payload), { trigger: 'enter' }),
            iconPayload: __assign(__assign({}, payload), { trigger: 'icon' }),
            _meta: { facetId: facetId },
        };
    };
    AwFacetInputText.prototype.setActive = function (facetValue) {
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
    };
    return AwFacetInputText;
}(AwFacetInput));
export { AwFacetInputText };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFzQyxvQ0FBWTtJQUFsRDs7SUFrQ0EsQ0FBQztJQWpDVyxvQ0FBUyxHQUFuQjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE9BQU8sR0FBRztZQUNkLE9BQU8sU0FBQTtZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUM7UUFFRixPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksd0JBQ1AsT0FBTyxLQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSx3QkFDUCxPQUFPLEtBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLHdCQUNOLE9BQU8sS0FDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sb0NBQVMsR0FBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBbENELENBQXNDLFlBQVksR0FrQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdGYWNldElucHV0IH0gZnJvbSAnLi9hdy1mYWNldC1pbnB1dCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgQXdGYWNldElucHV0IHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgZmFjZXRJZCxcclxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcixcclxuICAgICAgaWNvbjogdGhpcy5jb25maWcuaWNvbixcclxuICAgICAgaW5wdXRQYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaW5wdXQnLFxyXG4gICAgICB9LFxyXG4gICAgICBlbnRlclBheWxvYWQ6IHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIHRyaWdnZXI6ICdlbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb25QYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcclxuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gaGVscGVycy51bmVzY2FwZVF1b3RlcyhmYWNldFZhbHVlKSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=