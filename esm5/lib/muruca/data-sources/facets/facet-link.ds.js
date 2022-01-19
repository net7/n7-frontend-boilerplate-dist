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
            var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value && (_this.value === link.payload) ? ACTIVE_CLASS : '' })); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSW5ELElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVqQztJQUFpQywrQkFBVTtJQUEzQztRQUFBLHFFQWlEQztRQTlDQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsY0FBUSxHQUFHLEtBQUssQ0FBQztRQXVDekIsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLOUIsQ0FBQztJQTFDVywrQkFBUyxHQUFuQixVQUFvQixJQUFtQjtRQUM3QixJQUFBLGtCQUFLLENBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQzt3QkFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixPQUFPLEVBQUUsSUFBSTtxQkFDZCxDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFjO1FBQTlCLGlCQWVDO1FBZmUsdUJBQUEsRUFBQSxjQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRXZCLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSx3QkFBSyxDQUFnQjtZQUM3QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsdUJBQy9DLElBQUksS0FDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDeEUsRUFIa0QsQ0FHbEQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLFNBQVM7UUFDbkIsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFJRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWpERCxDQUFpQyxVQUFVLEdBaUQxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dExpbmssIElucHV0TGlua0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XHJcblxyXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldExpbmtEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHZhbHVlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBpc1VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0TGlua0RhdGEpOiBJbnB1dExpbmtEYXRhIHtcclxuICAgIGNvbnN0IHsgbGlua3MgfSA9IGRhdGE7XHJcbiAgICAvLyBlbXB0eSBzdGF0ZSBjaGVja1xyXG4gICAgaWYgKHRoaXMuaXNVcGRhdGUgJiYgIWxpbmtzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbmtzOiBbe1xyXG4gICAgICAgICAgdGV4dDogX3QoJ2dsb2JhbCNmYWNldF9lbXB0eV90ZXh0JyksXHJcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcclxuICAgICAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUsIHVwZGF0ZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcclxuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBJbnB1dExpbmspID0+ICh7XHJcbiAgICAgICAgLi4ubGluayxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlICYmICh0aGlzLnZhbHVlID09PSBsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcclxuICAgICAgfSkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcclxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmFsdWUobGlua1ZhbHVlKSB7XHJcbiAgICAvLyB1cGRhdGVcclxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSAhPT0gbGlua1ZhbHVlID8gbGlua1ZhbHVlIDogbnVsbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMudmFsdWU7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==