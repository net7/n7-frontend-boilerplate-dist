import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetCheckboxDS = /** @class */ (function (_super) {
    __extends(FacetCheckboxDS, _super);
    function FacetCheckboxDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = [];
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetCheckboxDS.prototype.transform = function (data) {
        return data;
    };
    FacetCheckboxDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            var checkboxes = this.input.checkboxes;
            var updatedCheckboxes = checkboxes.map(function (checkbox) { return (__assign(__assign({}, checkbox), { checked: _this.value.indexOf(checkbox.payload) !== -1 })); });
            this.update(__assign(__assign({}, this.input), { checkboxes: updatedCheckboxes }));
        }
    };
    FacetCheckboxDS.prototype.toggleValue = function (_a) {
        var inputPayload = _a.inputPayload, isChecked = _a.value;
        var exists = this.value.indexOf(inputPayload) !== -1;
        if (isChecked && !exists) {
            this.value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            this.value.splice(this.value.indexOf(inputPayload), 1);
        }
    };
    FacetCheckboxDS.prototype.clear = function () {
        this.value = [];
    };
    return FacetCheckboxDS;
}(DataSource));
export { FacetCheckboxDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQztJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQXVDQztRQXBDQyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQStCeEIsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUFsQ1csbUNBQVMsR0FBbkIsVUFBb0IsSUFBdUI7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUEzQyxpQkFjQztRQWQ0Qix1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLGtDQUFVLENBQWdCO1lBQ2xDLElBQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQXVCLElBQUssT0FBQSx1QkFDakUsUUFBUSxLQUNYLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQ3BELEVBSG9FLENBR3BFLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLHVCQUNOLElBQUksQ0FBQyxLQUFLLEtBQ2IsVUFBVSxFQUFFLGlCQUFpQixJQUM3QixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQWtDO1lBQWhDLDhCQUFZLEVBQUUsb0JBQWdCO1FBQzFDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBSUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBcUMsVUFBVSxHQXVDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgY29uc3QgeyBjaGVja2JveGVzIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMubWFwKChjaGVja2JveDogSW5wdXRDaGVja2JveCkgPT4gKHtcclxuICAgICAgICAuLi5jaGVja2JveCxcclxuICAgICAgICBjaGVja2VkOiB0aGlzLnZhbHVlLmluZGV4T2YoY2hlY2tib3gucGF5bG9hZCkgIT09IC0xXHJcbiAgICAgIH0pKTtcclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgY2hlY2tib3hlczogdXBkYXRlZENoZWNrYm94ZXNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWYWx1ZSh7IGlucHV0UGF5bG9hZCwgdmFsdWU6IGlzQ2hlY2tlZCB9KSB7XHJcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluZGV4T2YoaW5wdXRQYXlsb2FkKSAhPT0gLTE7XHJcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5wdXNoKGlucHV0UGF5bG9hZCk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc0NoZWNrZWQgJiYgZXhpc3RzKSB7XHJcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=