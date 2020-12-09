import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var ACTIVE_CLASS = 'is-active';
var FacetLinkDS = /** @class */ (function (_super) {
    __extends(FacetLinkDS, _super);
    function FacetLinkDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.isUpdate = false;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetLinkDS.prototype.transform = function (data) {
        var links = data.links;
        // empty state check
        if (this.isUpdate && !links.length) {
            return {
                links: [{
                        text: _t('global#facet_empty_text'),
                        classes: 'empty-text-link',
                        payload: null,
                    }]
            };
        }
        return data;
    };
    FacetLinkDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = value;
        this.isUpdate = update;
        if (update) {
            var links = this.input.links;
            var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value === link.payload ? ACTIVE_CLASS : '' })); });
            this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
        }
    };
    FacetLinkDS.prototype.toggleValue = function (linkValue) {
        // update
        this.setValue(this.value !== linkValue ? linkValue : null, true);
    };
    FacetLinkDS.prototype.clear = function () {
        this.value = null;
    };
    return FacetLinkDS;
}(DataSource));
export { FacetLinkDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVqQztJQUFpQywrQkFBVTtJQUEzQztRQUFBLHFFQWlEQztRQTlDQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsY0FBUSxHQUFHLEtBQUssQ0FBQztRQXVDekIsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLOUIsQ0FBQztJQTFDVywrQkFBUyxHQUFuQixVQUFvQixJQUFtQjtRQUM3QixJQUFBLGtCQUFLLENBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQzt3QkFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixPQUFPLEVBQUUsSUFBSTtxQkFDZCxDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFjO1FBQTlCLGlCQWVDO1FBZmUsdUJBQUEsRUFBQSxjQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRXZCLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSx3QkFBSyxDQUFnQjtZQUM3QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsdUJBQy9DLElBQUksS0FDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDeEQsRUFIa0QsQ0FHbEQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLFNBQVM7UUFDbkIsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFJRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWpERCxDQUFpQyxVQUFVLEdBaUQxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gbnVsbDtcblxuICBwcml2YXRlIGlzVXBkYXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dExpbmtEYXRhKTogSW5wdXRMaW5rRGF0YSB7XG4gICAgY29uc3QgeyBsaW5rcyB9ID0gZGF0YTtcbiAgICAvLyBlbXB0eSBzdGF0ZSBjaGVja1xuICAgIGlmICh0aGlzLmlzVXBkYXRlICYmICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmtzOiBbe1xuICAgICAgICAgIHRleHQ6IF90KCdnbG9iYWwjZmFjZXRfZW1wdHlfdGV4dCcpLFxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxuICAgICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgICAgIH1dXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogSW5wdXRMaW5rKSA9PiAoe1xuICAgICAgICAuLi5saW5rLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlID09PSBsaW5rLnBheWxvYWQgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcbiAgICAvLyB1cGRhdGVcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUgIT09IGxpbmtWYWx1ZSA/IGxpbmtWYWx1ZSA6IG51bGwsIHRydWUpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=