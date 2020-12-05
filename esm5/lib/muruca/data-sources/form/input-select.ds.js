import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrInputSelectDS = /** @class */ (function (_super) {
    __extends(MrInputSelectDS, _super);
    function MrInputSelectDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: null,
            disabled: false,
            hidden: false,
        };
        _this.getState = function () { return _this.state; };
        return _this;
    }
    MrInputSelectDS.prototype.transform = function (data) {
        return __assign(__assign({}, data), { options: this.getOptions(data.options) });
    };
    MrInputSelectDS.prototype.setState = function (newState) {
        this.state = __assign(__assign({}, this.state), newState);
        this.refresh();
    };
    MrInputSelectDS.prototype.clear = function () {
        this.setState({ value: null });
    };
    MrInputSelectDS.prototype.refresh = function () {
        var _a = this.state, hidden = _a.hidden, disabled = _a.disabled;
        // render value
        this.output.options = this.getOptions(this.output.options);
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    };
    MrInputSelectDS.prototype.getOptions = function (options) {
        var value = this.state.value;
        return options.map(function (option) { return (__assign(__assign({}, option), { label: _t(option.label), selected: value === option.value })); });
    };
    return MrInputSelectDS;
}(DataSource));
export { MrInputSelectDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC1zZWxlY3QuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQ7SUFBcUMsbUNBQVU7SUFBL0M7UUFBQSxxRUFtREM7UUFoRFEsV0FBSyxHQUF5QztZQUNuRCxLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBU0YsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFtQzlCLENBQUM7SUExQ1csbUNBQVMsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsNkJBQ0ssSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFDdEM7SUFDSixDQUFDO0lBSUQsa0NBQVEsR0FBUixVQUFTLFFBQThDO1FBQ3JELElBQUksQ0FBQyxLQUFLLHlCQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsUUFBUSxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDUSxJQUFBLGVBQWlDLEVBQS9CLGtCQUFNLEVBQUUsc0JBQXVCLENBQUM7UUFFeEMsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFTyxvQ0FBVSxHQUFsQixVQUFtQixPQUFPO1FBQ2hCLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsdUJBQzFCLE1BQU0sS0FDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUo2QixDQUk3QixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkRELENBQXFDLFVBQVUsR0FtRDlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IElucHV0U2VsZWN0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTXJGb3JtSW5wdXRTdGF0ZSwgTXJJbnB1dERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcclxuXHJcbnR5cGUgTXJJbnB1dFNlbGVjdFZhbHVlID0gc3RyaW5nIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBNcklucHV0U2VsZWN0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgTXJJbnB1dERhdGFTb3VyY2U8TXJJbnB1dFNlbGVjdFZhbHVlPiB7XHJcbiAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0U2VsZWN0VmFsdWU+ID0ge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBoaWRkZW46IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRTZWxlY3REYXRhKTogSW5wdXRTZWxlY3REYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuZ2V0T3B0aW9ucyhkYXRhLm9wdGlvbnMpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUgPSAoKSA9PiB0aGlzLnN0YXRlO1xyXG5cclxuICBzZXRTdGF0ZShuZXdTdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0U2VsZWN0VmFsdWU+KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG51bGwgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgY29uc3QgeyBoaWRkZW4sIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIHJlbmRlciB2YWx1ZVxyXG4gICAgdGhpcy5vdXRwdXQub3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh0aGlzLm91dHB1dC5vcHRpb25zKTtcclxuXHJcbiAgICAvLyByZW5kZXIgZGlzYWJsZWRcclxuICAgIHRoaXMub3V0cHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcblxyXG4gICAgLy8gcmVuZGVyIGhpZGRlblxyXG4gICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGhpZGRlbiA/ICdpcy1oaWRkZW4nIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xyXG4gICAgICAuLi5vcHRpb24sXHJcbiAgICAgIGxhYmVsOiBfdChvcHRpb24ubGFiZWwpLFxyXG4gICAgICBzZWxlY3RlZDogdmFsdWUgPT09IG9wdGlvbi52YWx1ZVxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=