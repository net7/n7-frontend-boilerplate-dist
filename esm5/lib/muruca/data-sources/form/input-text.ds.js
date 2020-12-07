import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrInputTextDS = /** @class */ (function (_super) {
    __extends(MrInputTextDS, _super);
    function MrInputTextDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: null,
            disabled: false,
            hidden: false,
        };
        _this.getState = function () { return _this.state; };
        return _this;
    }
    MrInputTextDS.prototype.transform = function (data) {
        return __assign(__assign({}, data), { placeholder: _t(data.placeholder) });
    };
    MrInputTextDS.prototype.setState = function (newState) {
        this.state = __assign(__assign({}, this.state), newState);
        this.refresh();
    };
    MrInputTextDS.prototype.clear = function () {
        this.setState({ value: null });
    };
    MrInputTextDS.prototype.refresh = function () {
        var _a = this.state, value = _a.value, hidden = _a.hidden, disabled = _a.disabled;
        // render value
        this.output.value = value;
        // fix element update
        var el = document.getElementById(this.id);
        if (el) {
            el.value = value;
        }
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    };
    return MrInputTextDS;
}(DataSource));
export { MrInputTextDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtdGV4dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRDtJQUFtQyxpQ0FBVTtJQUE3QztRQUFBLHFFQStDQztRQTVDUSxXQUFLLEdBQXVDO1lBQ2pELEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQStCOUIsQ0FBQztJQXRDVyxpQ0FBUyxHQUFuQixVQUFvQixJQUFtQjtRQUNyQyw2QkFDSyxJQUFJLEtBQ1AsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQ2pDO0lBQ0osQ0FBQztJQUlELGdDQUFRLEdBQVIsVUFBUyxRQUE0QztRQUNuRCxJQUFJLENBQUMsS0FBSyx5QkFDTCxJQUFJLENBQUMsS0FBSyxHQUNWLFFBQVEsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ1EsSUFBQSxlQUF3QyxFQUF0QyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsc0JBQXVCLENBQUM7UUFFL0MsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixxQkFBcUI7UUFDckIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFxQixDQUFDO1FBQ2hFLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbEI7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBbUMsVUFBVSxHQStDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTXJGb3JtSW5wdXRTdGF0ZSwgTXJJbnB1dERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE1ySW5wdXRUZXh0VmFsdWUgPSBzdHJpbmcgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW5wdXRUZXh0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgTXJJbnB1dERhdGFTb3VyY2U8TXJJbnB1dFRleHRWYWx1ZT4ge1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dFRleHRWYWx1ZT4gPSB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFRleHREYXRhKTogSW5wdXRUZXh0RGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBwbGFjZWhvbGRlcjogX3QoZGF0YS5wbGFjZWhvbGRlcilcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSA9ICgpID0+IHRoaXMuc3RhdGU7XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRUZXh0VmFsdWU+KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG51bGwgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgaGlkZGVuLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyByZW5kZXIgdmFsdWVcclxuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAvLyBmaXggZWxlbWVudCB1cGRhdGVcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbmRlciBkaXNhYmxlZFxyXG4gICAgdGhpcy5vdXRwdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuXHJcbiAgICAvLyByZW5kZXIgaGlkZGVuXHJcbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJztcclxuICB9XHJcbn1cclxuIl19