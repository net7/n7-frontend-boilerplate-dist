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
        var _a = this.state, value = _a.value, disabled = _a.disabled;
        return checkboxes.map(function (checkbox) { return (__assign(__assign({}, checkbox), { disabled: disabled, label: _t(checkbox.label), checked: !!(value.includes(checkbox.payload)) })); });
    };
    return MrInputCheckboxDS;
}(DataSource));
export { MrInputCheckboxDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELG1DQUFtQztBQUNuQztJQUF1QyxxQ0FBVTtJQUFqRDtRQUFBLHFFQTREQztRQXpEUSxXQUFLLEdBQTJDO1lBQ3JELEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQTRDOUIsQ0FBQztJQW5EVyxxQ0FBUyxHQUFuQixVQUFvQixJQUF1QjtRQUN6Qyw2QkFDSyxJQUFJLEtBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUMvQztJQUNKLENBQUM7SUFJRCxvQ0FBUSxHQUFSLFVBQVMsUUFBZ0Q7UUFDdkQsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixRQUFRLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNVLElBQUEsMEJBQU0sQ0FBZ0I7UUFFOUIsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEVBQWtDO1lBQWhDLDhCQUFZLEVBQUUsb0JBQWdCO1FBQ2xDLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixVQUFVO1FBQ3hCLElBQUEsZUFBZ0MsRUFBOUIsZ0JBQUssRUFBRSxzQkFBdUIsQ0FBQztRQUN2QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSx1QkFDL0IsUUFBUSxLQUNYLFFBQVEsVUFBQSxFQUNSLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUN6QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFDN0MsRUFMa0MsQ0FLbEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUF1QyxVQUFVLEdBNERoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTXJGb3JtSW5wdXRTdGF0ZSwgTXJJbnB1dERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcclxuXHJcbnR5cGUgTXJJbnB1dENoZWNrYm94VmFsdWUgPSBzdHJpbmdbXTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbmV4cG9ydCBjbGFzcyBNcklucHV0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBNcklucHV0RGF0YVNvdXJjZTxNcklucHV0Q2hlY2tib3hWYWx1ZT4ge1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dENoZWNrYm94VmFsdWU+ID0ge1xyXG4gICAgdmFsdWU6IFtdLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaGlkZGVuOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0Q2hlY2tib3hEYXRhKTogSW5wdXRDaGVja2JveERhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgY2hlY2tib3hlczogdGhpcy5nZXRDaGVja2JveGVzKGRhdGEuY2hlY2tib3hlcylcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSA9ICgpID0+IHRoaXMuc3RhdGU7XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRDaGVja2JveFZhbHVlPikge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgLi4ubmV3U3RhdGVcclxuICAgIH07XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBjb25zdCB7IGhpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyByZW5kZXIgdmFsdWVcclxuICAgIHRoaXMub3V0cHV0LmNoZWNrYm94ZXMgPSB0aGlzLmdldENoZWNrYm94ZXModGhpcy5vdXRwdXQuY2hlY2tib3hlcyk7XHJcblxyXG4gICAgLy8gcmVuZGVyIGhpZGRlblxyXG4gICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGhpZGRlbiA/ICdpcy1oaWRkZW4nIDogJyc7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWYWx1ZSh7IGlucHV0UGF5bG9hZCwgdmFsdWU6IGlzQ2hlY2tlZCB9KSB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZXhpc3RzID0gISEodmFsdWUuaW5jbHVkZXMoaW5wdXRQYXlsb2FkKSk7XHJcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcclxuICAgICAgdmFsdWUucHVzaChpbnB1dFBheWxvYWQpO1xyXG4gICAgfSBlbHNlIGlmICghaXNDaGVja2VkICYmIGV4aXN0cykge1xyXG4gICAgICB2YWx1ZS5zcGxpY2UodmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hlY2tib3hlcyhjaGVja2JveGVzKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiBjaGVja2JveGVzLm1hcCgoY2hlY2tib3gpID0+ICh7XHJcbiAgICAgIC4uLmNoZWNrYm94LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgbGFiZWw6IF90KGNoZWNrYm94LmxhYmVsKSxcclxuICAgICAgY2hlY2tlZDogISEodmFsdWUuaW5jbHVkZXMoY2hlY2tib3gucGF5bG9hZCkpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==