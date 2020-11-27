import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetSelectDS = /** @class */ (function (_super) {
    __extends(FacetSelectDS, _super);
    function FacetSelectDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetSelectDS.prototype.transform = function (data) {
        return data;
    };
    FacetSelectDS.prototype.setValue = function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            var options = this.input.options;
            var updatedOptions = options.map(function (option) { return (__assign(__assign({}, option), { selected: value === option.value })); });
            this.update(__assign(__assign({}, this.input), { options: updatedOptions }));
        }
    };
    FacetSelectDS.prototype.clear = function () {
        this.value = null;
    };
    return FacetSelectDS;
}(DataSource));
export { FacetSelectDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DO0lBQW1DLGlDQUFVO0lBQTdDO1FBQUEscUVBOEJDO1FBTEMsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUF6QlcsaUNBQVMsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUFkLHVCQUFBLEVBQUEsY0FBYztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNGLElBQUEsNEJBQU8sQ0FBZ0I7WUFDL0IsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLHVCQUMxQyxNQUFNLEtBQ1QsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUg2QyxDQUc3QyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLE9BQU8sRUFBRSxjQUFjLElBQ3ZCLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUFtQyxVQUFVLEdBOEI1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFNlbGVjdERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZhY2V0U2VsZWN0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFNlbGVjdERhdGEpOiBJbnB1dFNlbGVjdERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICBzZWxlY3RlZDogdmFsdWUgPT09IG9wdGlvbi52YWx1ZVxuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBvcHRpb25zOiB1cGRhdGVkT3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19