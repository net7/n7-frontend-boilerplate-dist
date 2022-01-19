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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBQWlDLCtCQUFVO0lBQTNDO1FBQUEscUVBa0NDO1FBTEMsY0FBUSxHQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7O0lBSzNDLENBQUM7SUE3QlcsK0JBQVMsR0FBbkIsVUFBb0IsSUFBbUI7UUFDckMsNkJBQ0ssSUFBSSxLQUNQLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUNqQztJQUNKLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQy9DLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBcUIsQ0FBQztZQUN2RSxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLEtBQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3JEO1NBQ0Y7SUFDSCxDQUFDO0lBSUQsMkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBaUMsVUFBVSxHQWtDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0VGV4dERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0VGV4dERhdGEpOiBJbnB1dFRleHREYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBfdChkYXRhLnBsYWNlaG9sZGVyKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAuLi50aGlzLmlucHV0LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGAke3ZhbHVlfWAgOiBudWxsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gZml4IGVsZW1lbnQgdXBkYXRlXHJcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdXRwdXQuaWQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnZhbHVlID0gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBgJHt2YWx1ZX1gIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19