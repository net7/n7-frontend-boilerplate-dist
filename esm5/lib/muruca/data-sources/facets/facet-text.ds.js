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
            this.update(__assign(__assign({}, this.input), { value: value || value === 0 ? "" + value : null }));
            // fix element update
            var el = document.getElementById(this.output.id);
            if (el) {
                el.value = value || value === 0 ? "" + value : null;
            }
        }
    };
    FacetTextDS.prototype.clear = function () {
        this.value = null;
    };
    return FacetTextDS;
}(DataSource));
export { FacetTextDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBQWlDLCtCQUFVO0lBQTNDO1FBQUEscUVBa0NDO1FBTEMsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUE3QlcsK0JBQVMsR0FBbkIsVUFBb0IsSUFBbUI7UUFDckMsNkJBQ0ssSUFBSSxLQUNQLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUNqQztJQUNKLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQy9DLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBcUIsQ0FBQztZQUN2RSxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLEtBQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3JEO1NBQ0Y7SUFDSCxDQUFDO0lBSUQsMkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBaUMsVUFBVSxHQWtDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0VGV4dERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZhY2V0VGV4dERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRUZXh0RGF0YSk6IElucHV0VGV4dERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgcGxhY2Vob2xkZXI6IF90KGRhdGEucGxhY2Vob2xkZXIpXG4gICAgfTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGAke3ZhbHVlfWAgOiBudWxsXG4gICAgICB9KTtcblxuICAgICAgLy8gZml4IGVsZW1lbnQgdXBkYXRlXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3V0cHV0LmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLnZhbHVlID0gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBgJHt2YWx1ZX1gIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=