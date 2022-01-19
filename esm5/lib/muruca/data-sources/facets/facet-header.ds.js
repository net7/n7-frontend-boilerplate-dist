import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var ICON_OPEN = 'n7-icon-angle-up';
var ICON_CLOSE = 'n7-icon-angle-down';
var FacetHeaderDS = /** @class */ (function (_super) {
    __extends(FacetHeaderDS, _super);
    function FacetHeaderDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetHeaderDS.prototype.transform = function (data) {
        return __assign(__assign({}, data), { text: _t(data.text), iconRight: data.iconRight || ICON_OPEN });
    };
    FacetHeaderDS.prototype.setValue = function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            this.update(__assign(__assign({}, this.input), { additionalText: value }));
        }
    };
    FacetHeaderDS.prototype.toggle = function () {
        var iconRight = this.output.iconRight;
        iconRight = iconRight === ICON_OPEN ? ICON_CLOSE : ICON_OPEN;
        this.update(__assign(__assign({}, this.input), { iconRight: iconRight }));
    };
    FacetHeaderDS.prototype.isOpen = function () {
        return this.output.iconRight === ICON_OPEN;
    };
    FacetHeaderDS.prototype.clear = function () {
        this.value = null;
    };
    return FacetHeaderDS;
}(DataSource));
export { FacetHeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhlYWRlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtuRCxJQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztBQUNyQyxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQztBQUV4QztJQUFtQyxpQ0FBVTtJQUE3QztRQUFBLHFFQTBDQztRQWxCQyxjQUFRLEdBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFrQjNDLENBQUM7SUFyQ1csaUNBQVMsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsNkJBQ0ssSUFBSSxLQUNQLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQ3RDO0lBQ0osQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFrQixFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLGNBQWMsRUFBRSxLQUFLLElBQ3JCLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCw4QkFBTSxHQUFOO1FBQ1EsSUFBQSxpQ0FBUyxDQUFpQjtRQUNoQyxTQUFTLEdBQUcsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixTQUFTLFdBQUEsSUFDVCxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUExQ0QsQ0FBbUMsVUFBVSxHQTBDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgRmFjZXRIZWFkZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZyB8IG51bGw7XHJcbmNvbnN0IElDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLXVwJztcclxuY29uc3QgSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogRmFjZXRIZWFkZXJEYXRhKTogRmFjZXRIZWFkZXJEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIHRleHQ6IF90KGRhdGEudGV4dCksXHJcbiAgICAgIGljb25SaWdodDogZGF0YS5pY29uUmlnaHQgfHwgSUNPTl9PUEVOXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IHsgaWNvblJpZ2h0IH0gPSB0aGlzLm91dHB1dDtcclxuICAgIGljb25SaWdodCA9IGljb25SaWdodCA9PT0gSUNPTl9PUEVOID8gSUNPTl9DTE9TRSA6IElDT05fT1BFTjtcclxuICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgLi4udGhpcy5pbnB1dCxcclxuICAgICAgaWNvblJpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLm91dHB1dC5pY29uUmlnaHQgPT09IElDT05fT1BFTjtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==