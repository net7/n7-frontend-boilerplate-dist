import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
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
        return __assign(__assign({}, data), { iconRight: data.iconRight || ICON_OPEN });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhlYWRlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSy9DLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQ3JDLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDO0FBRXhDO0lBQW1DLGlDQUFVO0lBQTdDO1FBQUEscUVBeUNDO1FBbEJDLGNBQVEsR0FBRyxjQUFtQixPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQWtCM0MsQ0FBQztJQXBDVyxpQ0FBUyxHQUFuQixVQUFvQixJQUFxQjtRQUN2Qyw2QkFDSyxJQUFJLEtBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxJQUN0QztJQUNKLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixjQUFjLEVBQUUsS0FBSyxJQUNyQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBSUQsOEJBQU0sR0FBTjtRQUNRLElBQUEsaUNBQVMsQ0FBaUI7UUFDaEMsU0FBUyxHQUFHLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLHVCQUNOLElBQUksQ0FBQyxLQUFLLEtBQ2IsU0FBUyxXQUFBLElBQ1QsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekNELENBQW1DLFVBQVUsR0F5QzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmcgfCBudWxsO1xuY29uc3QgSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtdXAnO1xuY29uc3QgSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEZhY2V0SGVhZGVyRGF0YSk6IEZhY2V0SGVhZGVyRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBpY29uUmlnaHQ6IGRhdGEuaWNvblJpZ2h0IHx8IElDT05fT1BFTlxuICAgIH07XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB7IGljb25SaWdodCB9ID0gdGhpcy5vdXRwdXQ7XG4gICAgaWNvblJpZ2h0ID0gaWNvblJpZ2h0ID09PSBJQ09OX09QRU4gPyBJQ09OX0NMT1NFIDogSUNPTl9PUEVOO1xuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICBpY29uUmlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQuaWNvblJpZ2h0ID09PSBJQ09OX09QRU47XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19