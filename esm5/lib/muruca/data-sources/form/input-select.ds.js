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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC1zZWxlY3QuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQ7SUFBcUMsbUNBQVU7SUFBL0M7UUFBQSxxRUFtREM7UUFoRFEsV0FBSyxHQUF5QztZQUNuRCxLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBU0YsY0FBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFtQzlCLENBQUM7SUExQ1csbUNBQVMsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsNkJBQ0ssSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFDdEM7SUFDSixDQUFDO0lBSUQsa0NBQVEsR0FBUixVQUFTLFFBQThDO1FBQ3JELElBQUksQ0FBQyxLQUFLLHlCQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsUUFBUSxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDUSxJQUFBLGVBQWlDLEVBQS9CLGtCQUFNLEVBQUUsc0JBQXVCLENBQUM7UUFFeEMsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFTyxvQ0FBVSxHQUFsQixVQUFtQixPQUFPO1FBQ2hCLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsdUJBQzFCLE1BQU0sS0FDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUo2QixDQUk3QixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkRELENBQXFDLFVBQVUsR0FtRDlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFNlbGVjdERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNckZvcm1JbnB1dFN0YXRlLCBNcklucHV0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuXG50eXBlIE1ySW5wdXRTZWxlY3RWYWx1ZSA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBNcklucHV0U2VsZWN0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgTXJJbnB1dERhdGFTb3VyY2U8TXJJbnB1dFNlbGVjdFZhbHVlPiB7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0U2VsZWN0VmFsdWU+ID0ge1xuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoaWRkZW46IGZhbHNlLFxuICB9O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRTZWxlY3REYXRhKTogSW5wdXRTZWxlY3REYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuZ2V0T3B0aW9ucyhkYXRhLm9wdGlvbnMpXG4gICAgfTtcbiAgfVxuXG4gIGdldFN0YXRlID0gKCkgPT4gdGhpcy5zdGF0ZTtcblxuICBzZXRTdGF0ZShuZXdTdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0U2VsZWN0VmFsdWU+KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi5uZXdTdGF0ZVxuICAgIH07XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG51bGwgfSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIC8vIHJlbmRlciB2YWx1ZVxuICAgIHRoaXMub3V0cHV0Lm9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModGhpcy5vdXRwdXQub3B0aW9ucyk7XG5cbiAgICAvLyByZW5kZXIgZGlzYWJsZWRcbiAgICB0aGlzLm91dHB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgLy8gcmVuZGVyIGhpZGRlblxuICAgIHRoaXMub3V0cHV0LmNsYXNzZXMgPSBoaWRkZW4gPyAnaXMtaGlkZGVuJyA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgLi4ub3B0aW9uLFxuICAgICAgbGFiZWw6IF90KG9wdGlvbi5sYWJlbCksXG4gICAgICBzZWxlY3RlZDogdmFsdWUgPT09IG9wdGlvbi52YWx1ZVxuICAgIH0pKTtcbiAgfVxufVxuIl19