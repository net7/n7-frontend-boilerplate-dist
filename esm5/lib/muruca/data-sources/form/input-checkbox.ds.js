import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
// eslint-disable-next-line max-len
var MrInputCheckboxDS = /** @class */ (function (_super) {
    __extends(MrInputCheckboxDS, _super);
    function MrInputCheckboxDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: [],
            disabled: false,
            hidden: false,
        };
        _this.getState = function () { return _this.state; };
        return _this;
    }
    MrInputCheckboxDS.prototype.transform = function (data) {
        return __assign(__assign({}, data), { checkboxes: this.getCheckboxes(data.checkboxes) });
    };
    MrInputCheckboxDS.prototype.setState = function (newState) {
        this.state = __assign(__assign({}, this.state), newState);
        this.refresh();
    };
    MrInputCheckboxDS.prototype.clear = function () {
        this.setState({ value: [] });
    };
    MrInputCheckboxDS.prototype.refresh = function () {
        var hidden = this.state.hidden;
        // render value
        this.output.checkboxes = this.getCheckboxes(this.output.checkboxes);
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    };
    MrInputCheckboxDS.prototype.toggleValue = function (_a) {
        var inputPayload = _a.inputPayload, isChecked = _a.value;
        var value = this.state.value;
        var exists = !!(value.includes(inputPayload));
        if (isChecked && !exists) {
            value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            value.splice(value.indexOf(inputPayload), 1);
        }
        this.setState({ value: value });
    };
    MrInputCheckboxDS.prototype.getCheckboxes = function (checkboxes) {
        var _this = this;
        var _a = this.state, value = _a.value, disabled = _a.disabled;
        return checkboxes.map(function (checkbox, index) { return (__assign(__assign({}, checkbox), { id: _this.id + "-" + index, disabled: disabled, label: _t(checkbox.label), checked: !!(value.includes(checkbox.payload)) })); });
    };
    return MrInputCheckboxDS;
}(DataSource));
export { MrInputCheckboxDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELG1DQUFtQztBQUNuQztJQUF1QyxxQ0FBVTtJQUFqRDtRQUFBLHFFQTZEQztRQTFEUSxXQUFLLEdBQTJDO1lBQ3JELEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQTZDOUIsQ0FBQztJQXBEVyxxQ0FBUyxHQUFuQixVQUFvQixJQUF1QjtRQUN6Qyw2QkFDSyxJQUFJLEtBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUMvQztJQUNKLENBQUM7SUFJRCxvQ0FBUSxHQUFSLFVBQVMsUUFBZ0Q7UUFDdkQsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixRQUFRLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNVLElBQUEsMEJBQU0sQ0FBZ0I7UUFFOUIsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEVBQWtDO1lBQWhDLDhCQUFZLEVBQUUsb0JBQWdCO1FBQ2xDLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixVQUFVO1FBQWhDLGlCQVNDO1FBUk8sSUFBQSxlQUFnQyxFQUE5QixnQkFBSyxFQUFFLHNCQUF1QixDQUFDO1FBQ3ZDLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsRUFBRSxLQUFLLElBQUssT0FBQSx1QkFDdEMsUUFBUSxLQUNYLEVBQUUsRUFBSyxLQUFJLENBQUMsRUFBRSxTQUFJLEtBQU8sRUFDekIsUUFBUSxVQUFBLEVBQ1IsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUM3QyxFQU55QyxDQU16QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBN0RELENBQXVDLFVBQVUsR0E2RGhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Q2hlY2tib3hEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBNckZvcm1JbnB1dFN0YXRlLCBNcklucHV0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xyXG5cclxudHlwZSBNcklucHV0Q2hlY2tib3hWYWx1ZSA9IHN0cmluZ1tdO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuZXhwb3J0IGNsYXNzIE1ySW5wdXRDaGVja2JveERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIE1ySW5wdXREYXRhU291cmNlPE1ySW5wdXRDaGVja2JveFZhbHVlPiB7XHJcbiAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0Q2hlY2tib3hWYWx1ZT4gPSB7XHJcbiAgICB2YWx1ZTogW10sXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBoaWRkZW46IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRDaGVja2JveERhdGEpOiBJbnB1dENoZWNrYm94RGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBjaGVja2JveGVzOiB0aGlzLmdldENoZWNrYm94ZXMoZGF0YS5jaGVja2JveGVzKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlID0gKCkgPT4gdGhpcy5zdGF0ZTtcclxuXHJcbiAgc2V0U3RhdGUobmV3U3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dENoZWNrYm94VmFsdWU+KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIGNvbnN0IHsgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIHJlbmRlciB2YWx1ZVxyXG4gICAgdGhpcy5vdXRwdXQuY2hlY2tib3hlcyA9IHRoaXMuZ2V0Q2hlY2tib3hlcyh0aGlzLm91dHB1dC5jaGVja2JveGVzKTtcclxuXHJcbiAgICAvLyByZW5kZXIgaGlkZGVuXHJcbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZhbHVlKHsgaW5wdXRQYXlsb2FkLCB2YWx1ZTogaXNDaGVja2VkIH0pIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBleGlzdHMgPSAhISh2YWx1ZS5pbmNsdWRlcyhpbnB1dFBheWxvYWQpKTtcclxuICAgIGlmIChpc0NoZWNrZWQgJiYgIWV4aXN0cykge1xyXG4gICAgICB2YWx1ZS5wdXNoKGlucHV0UGF5bG9hZCk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc0NoZWNrZWQgJiYgZXhpc3RzKSB7XHJcbiAgICAgIHZhbHVlLnNwbGljZSh2YWx1ZS5pbmRleE9mKGlucHV0UGF5bG9hZCksIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGVja2JveGVzKGNoZWNrYm94ZXMpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIGNoZWNrYm94ZXMubWFwKChjaGVja2JveCwgaW5kZXgpID0+ICh7XHJcbiAgICAgIC4uLmNoZWNrYm94LFxyXG4gICAgICBpZDogYCR7dGhpcy5pZH0tJHtpbmRleH1gLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgbGFiZWw6IF90KGNoZWNrYm94LmxhYmVsKSxcclxuICAgICAgY2hlY2tlZDogISEodmFsdWUuaW5jbHVkZXMoY2hlY2tib3gucGF5bG9hZCkpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==