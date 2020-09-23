import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var ACTIVE_CLASS = 'is-active';
var FacetLinkMultipleDS = /** @class */ (function (_super) {
    __extends(FacetLinkMultipleDS, _super);
    function FacetLinkMultipleDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = [];
        _this.isUpdate = false;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetLinkMultipleDS.prototype.transform = function (data) {
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
    FacetLinkMultipleDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = value;
        this.isUpdate = update;
        if (update) {
            var links = this.input.links;
            var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value.includes(link.payload) ? ACTIVE_CLASS : '' })); });
            this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
        }
    };
    FacetLinkMultipleDS.prototype.toggleValue = function (linkValue) {
        var exists = this.value.includes(linkValue);
        if (!exists) {
            this.value.push(linkValue);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(linkValue), 1);
        }
        // update
        this.setValue(this.value, true);
    };
    FacetLinkMultipleDS.prototype.clear = function () {
        this.value = [];
    };
    return FacetLinkMultipleDS;
}(DataSource));
export { FacetLinkMultipleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVqQztJQUF5Qyx1Q0FBVTtJQUFuRDtRQUFBLHFFQXdEQztRQXJEQyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUgsY0FBUSxHQUFHLEtBQUssQ0FBQztRQThDekIsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLOUIsQ0FBQztJQWpEVyx1Q0FBUyxHQUFuQixVQUFvQixJQUFtQjtRQUM3QixJQUFBLGtCQUFLLENBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQzt3QkFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixPQUFPLEVBQUUsSUFBSTtxQkFDZCxDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFjO1FBQTlCLGlCQWVDO1FBZmUsdUJBQUEsRUFBQSxjQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRXZCLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSx3QkFBSyxDQUFnQjtZQUM3QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsdUJBQy9DLElBQUksS0FDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDOUQsRUFIa0QsQ0FHbEQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLFNBQVM7UUFDbkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFJRCxtQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXhERCxDQUF5QyxVQUFVLEdBd0RsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtNdWx0aXBsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWUgPSBbXTtcblxuICBwcml2YXRlIGlzVXBkYXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dExpbmtEYXRhKTogSW5wdXRMaW5rRGF0YSB7XG4gICAgY29uc3QgeyBsaW5rcyB9ID0gZGF0YTtcbiAgICAvLyBlbXB0eSBzdGF0ZSBjaGVja1xuICAgIGlmICh0aGlzLmlzVXBkYXRlICYmICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmtzOiBbe1xuICAgICAgICAgIHRleHQ6IF90KCdnbG9iYWwjZmFjZXRfZW1wdHlfdGV4dCcpLFxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxuICAgICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgICAgIH1dXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogSW5wdXRMaW5rKSA9PiAoe1xuICAgICAgICAuLi5saW5rLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlLmluY2x1ZGVzKGxpbmsucGF5bG9hZCkgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKGxpbmtWYWx1ZSk7XG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChsaW5rVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnNwbGljZSh0aGlzLnZhbHVlLmluZGV4T2YobGlua1ZhbHVlKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gW107XG4gIH1cbn1cbiJdfQ==