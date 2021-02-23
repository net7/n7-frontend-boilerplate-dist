import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var FacetTextDS = /** @class */ (function (_super) {
    __extends(FacetTextDS, _super);
    function FacetTextDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetTextDS.prototype.transform = function (data) {
        return __assign(__assign({}, data), { placeholder: _t(data.placeholder) });
    };
    FacetTextDS.prototype.setValue = function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            this.update(__assign(__assign({}, this.input), { value: value }));
            // fix element update
            var el = document.getElementById(this.output.id);
            if (el) {
                el.value = value;
            }
        }
    };
    FacetTextDS.prototype.clear = function () {
        this.value = null;
    };
    return FacetTextDS;
}(DataSource));
export { FacetTextDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBQWlDLCtCQUFVO0lBQTNDO1FBQUEscUVBa0NDO1FBTEMsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUE3QlcsK0JBQVMsR0FBbkIsVUFBb0IsSUFBbUI7UUFDckMsNkJBQ0ssSUFBSSxLQUNQLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUNqQztJQUNKLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLE9BQUEsSUFDTCxDQUFDO1lBRUgscUJBQXFCO1lBQ3JCLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQXFCLENBQUM7WUFDdkUsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFJRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFpQyxVQUFVLEdBa0MxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZyB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRUZXh0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRUZXh0RGF0YSk6IElucHV0VGV4dERhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcGxhY2Vob2xkZXI6IF90KGRhdGEucGxhY2Vob2xkZXIpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBmaXggZWxlbWVudCB1cGRhdGVcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm91dHB1dC5pZCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19