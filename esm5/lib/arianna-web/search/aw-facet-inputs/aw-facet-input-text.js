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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFzQyxvQ0FBWTtJQUFsRDs7SUFrQ0EsQ0FBQztJQWpDVyxvQ0FBUyxHQUFuQjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFNLE9BQU8sR0FBRztZQUNkLE9BQU8sU0FBQTtZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUM7UUFFRixPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksd0JBQ1AsT0FBTyxLQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSx3QkFDUCxPQUFPLEtBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLHdCQUNOLE9BQU8sS0FDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sb0NBQVMsR0FBaEIsVUFBaUIsVUFBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBbENELENBQXNDLFlBQVksR0FrQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdGYWNldElucHV0IH0gZnJvbSAnLi9hdy1mYWNldC1pbnB1dCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgQXdGYWNldElucHV0IHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIGZhY2V0SWQsXG4gICAgICBzb3VyY2U6ICdpbnB1dC10ZXh0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jb25maWcucGxhY2Vob2xkZXIsXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZy5pY29uLFxuICAgICAgaW5wdXRQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpbnB1dCcsXG4gICAgICB9LFxuICAgICAgZW50ZXJQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdlbnRlcicsXG4gICAgICB9LFxuICAgICAgaWNvblBheWxvYWQ6IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgdHJpZ2dlcjogJ2ljb24nLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQudmFsdWUgPSBoZWxwZXJzLnVuZXNjYXBlUXVvdGVzKGZhY2V0VmFsdWUpIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==