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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DO0lBQW1DLGlDQUFVO0lBQTdDO1FBQUEscUVBOEJDO1FBTEMsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUF6QlcsaUNBQVMsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUFkLHVCQUFBLEVBQUEsY0FBYztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNGLElBQUEsNEJBQU8sQ0FBZ0I7WUFDL0IsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLHVCQUMxQyxNQUFNLEtBQ1QsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUg2QyxDQUc3QyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLE9BQU8sRUFBRSxjQUFjLElBQ3ZCLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUFtQyxVQUFVLEdBOEI1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IElucHV0U2VsZWN0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmcgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0U2VsZWN0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRTZWxlY3REYXRhKTogSW5wdXRTZWxlY3REYXRhIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XHJcbiAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlXHJcbiAgICAgIH0pKTtcclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgb3B0aW9uczogdXBkYXRlZE9wdGlvbnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=