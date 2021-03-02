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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELG1DQUFtQztBQUNuQztJQUF1QyxxQ0FBVTtJQUFqRDtRQUFBLHFFQTZEQztRQTFEUSxXQUFLLEdBQTJDO1lBQ3JELEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQTZDOUIsQ0FBQztJQXBEVyxxQ0FBUyxHQUFuQixVQUFvQixJQUF1QjtRQUN6Qyw2QkFDSyxJQUFJLEtBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUMvQztJQUNKLENBQUM7SUFJRCxvQ0FBUSxHQUFSLFVBQVMsUUFBZ0Q7UUFDdkQsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixRQUFRLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNVLElBQUEsMEJBQU0sQ0FBZ0I7UUFFOUIsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEVBQWtDO1lBQWhDLDhCQUFZLEVBQUUsb0JBQWdCO1FBQ2xDLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixVQUFVO1FBQWhDLGlCQVNDO1FBUk8sSUFBQSxlQUFnQyxFQUE5QixnQkFBSyxFQUFFLHNCQUF1QixDQUFDO1FBQ3ZDLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsRUFBRSxLQUFLLElBQUssT0FBQSx1QkFDdEMsUUFBUSxLQUNYLEVBQUUsRUFBSyxLQUFJLENBQUMsRUFBRSxTQUFJLEtBQU8sRUFDekIsUUFBUSxVQUFBLEVBQ1IsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUM3QyxFQU55QyxDQU16QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBN0RELENBQXVDLFVBQVUsR0E2RGhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE1yRm9ybUlucHV0U3RhdGUsIE1ySW5wdXREYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbnR5cGUgTXJJbnB1dENoZWNrYm94VmFsdWUgPSBzdHJpbmdbXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmV4cG9ydCBjbGFzcyBNcklucHV0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBNcklucHV0RGF0YVNvdXJjZTxNcklucHV0Q2hlY2tib3hWYWx1ZT4ge1xuICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dENoZWNrYm94VmFsdWU+ID0ge1xuICAgIHZhbHVlOiBbXSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgfTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0Q2hlY2tib3hEYXRhKTogSW5wdXRDaGVja2JveERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgY2hlY2tib3hlczogdGhpcy5nZXRDaGVja2JveGVzKGRhdGEuY2hlY2tib3hlcylcbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RhdGUgPSAoKSA9PiB0aGlzLnN0YXRlO1xuXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRDaGVja2JveFZhbHVlPikge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4ubmV3U3RhdGVcbiAgICB9O1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyByZW5kZXIgdmFsdWVcbiAgICB0aGlzLm91dHB1dC5jaGVja2JveGVzID0gdGhpcy5nZXRDaGVja2JveGVzKHRoaXMub3V0cHV0LmNoZWNrYm94ZXMpO1xuXG4gICAgLy8gcmVuZGVyIGhpZGRlblxuICAgIHRoaXMub3V0cHV0LmNsYXNzZXMgPSBoaWRkZW4gPyAnaXMtaGlkZGVuJyA6ICcnO1xuICB9XG5cbiAgdG9nZ2xlVmFsdWUoeyBpbnB1dFBheWxvYWQsIHZhbHVlOiBpc0NoZWNrZWQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZXhpc3RzID0gISEodmFsdWUuaW5jbHVkZXMoaW5wdXRQYXlsb2FkKSk7XG4gICAgaWYgKGlzQ2hlY2tlZCAmJiAhZXhpc3RzKSB7XG4gICAgICB2YWx1ZS5wdXNoKGlucHV0UGF5bG9hZCk7XG4gICAgfSBlbHNlIGlmICghaXNDaGVja2VkICYmIGV4aXN0cykge1xuICAgICAgdmFsdWUuc3BsaWNlKHZhbHVlLmluZGV4T2YoaW5wdXRQYXlsb2FkKSwgMSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tib3hlcyhjaGVja2JveGVzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGNoZWNrYm94ZXMubWFwKChjaGVja2JveCwgaW5kZXgpID0+ICh7XG4gICAgICAuLi5jaGVja2JveCxcbiAgICAgIGlkOiBgJHt0aGlzLmlkfS0ke2luZGV4fWAsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhYmVsOiBfdChjaGVja2JveC5sYWJlbCksXG4gICAgICBjaGVja2VkOiAhISh2YWx1ZS5pbmNsdWRlcyhjaGVja2JveC5wYXlsb2FkKSlcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==