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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVqQztJQUF5Qyx1Q0FBVTtJQUFuRDtRQUFBLHFFQXdEQztRQXJEQyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUgsY0FBUSxHQUFHLEtBQUssQ0FBQztRQThDekIsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLOUIsQ0FBQztJQWpEVyx1Q0FBUyxHQUFuQixVQUFvQixJQUFtQjtRQUM3QixJQUFBLGtCQUFLLENBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQzt3QkFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixPQUFPLEVBQUUsSUFBSTtxQkFDZCxDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFjO1FBQTlCLGlCQWVDO1FBZmUsdUJBQUEsRUFBQSxjQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRXZCLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSx3QkFBSyxDQUFnQjtZQUM3QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsdUJBQy9DLElBQUksS0FDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDOUQsRUFIa0QsQ0FHbEQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLFNBQVM7UUFDbkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFJRCxtQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXhERCxDQUF5QyxVQUFVLEdBd0RsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dExpbmssIElucHV0TGlua0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XHJcblxyXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldExpbmtNdWx0aXBsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWUgPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpc1VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0TGlua0RhdGEpOiBJbnB1dExpbmtEYXRhIHtcclxuICAgIGNvbnN0IHsgbGlua3MgfSA9IGRhdGE7XHJcbiAgICAvLyBlbXB0eSBzdGF0ZSBjaGVja1xyXG4gICAgaWYgKHRoaXMuaXNVcGRhdGUgJiYgIWxpbmtzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbmtzOiBbe1xyXG4gICAgICAgICAgdGV4dDogX3QoJ2dsb2JhbCNmYWNldF9lbXB0eV90ZXh0JyksXHJcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcclxuICAgICAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUsIHVwZGF0ZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcclxuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBJbnB1dExpbmspID0+ICh7XHJcbiAgICAgICAgLi4ubGluayxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlLmluY2x1ZGVzKGxpbmsucGF5bG9hZCkgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xyXG4gICAgICB9KSk7XHJcbiAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAuLi50aGlzLmlucHV0LFxyXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcclxuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5jbHVkZXMobGlua1ZhbHVlKTtcclxuICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgIHRoaXMudmFsdWUucHVzaChsaW5rVmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UodGhpcy52YWx1ZS5pbmRleE9mKGxpbmtWYWx1ZSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==