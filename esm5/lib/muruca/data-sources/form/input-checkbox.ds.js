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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELG1DQUFtQztBQUNuQztJQUF1QyxxQ0FBVTtJQUFqRDtRQUFBLHFFQTREQztRQXpEUSxXQUFLLEdBQTJDO1lBQ3JELEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQTRDOUIsQ0FBQztJQW5EVyxxQ0FBUyxHQUFuQixVQUFvQixJQUF1QjtRQUN6Qyw2QkFDSyxJQUFJLEtBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUMvQztJQUNKLENBQUM7SUFJRCxvQ0FBUSxHQUFSLFVBQVMsUUFBZ0Q7UUFDdkQsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixRQUFRLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNVLElBQUEsMEJBQU0sQ0FBZ0I7UUFFOUIsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEVBQWtDO1lBQWhDLDhCQUFZLEVBQUUsb0JBQWdCO1FBQ2xDLElBQUEsd0JBQUssQ0FBZ0I7UUFDN0IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixVQUFVO1FBQ3hCLElBQUEsZUFBZ0MsRUFBOUIsZ0JBQUssRUFBRSxzQkFBdUIsQ0FBQztRQUN2QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSx1QkFDL0IsUUFBUSxLQUNYLFFBQVEsVUFBQSxFQUNSLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUN6QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFDN0MsRUFMa0MsQ0FLbEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUF1QyxVQUFVLEdBNERoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRDaGVja2JveERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNckZvcm1JbnB1dFN0YXRlLCBNcklucHV0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuXG50eXBlIE1ySW5wdXRDaGVja2JveFZhbHVlID0gc3RyaW5nW107XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5leHBvcnQgY2xhc3MgTXJJbnB1dENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgTXJJbnB1dERhdGFTb3VyY2U8TXJJbnB1dENoZWNrYm94VmFsdWU+IHtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRDaGVja2JveFZhbHVlPiA9IHtcbiAgICB2YWx1ZTogW10sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhpZGRlbjogZmFsc2UsXG4gIH07XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGNoZWNrYm94ZXM6IHRoaXMuZ2V0Q2hlY2tib3hlcyhkYXRhLmNoZWNrYm94ZXMpXG4gICAgfTtcbiAgfVxuXG4gIGdldFN0YXRlID0gKCkgPT4gdGhpcy5zdGF0ZTtcblxuICBzZXRTdGF0ZShuZXdTdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0Q2hlY2tib3hWYWx1ZT4pIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIC4uLm5ld1N0YXRlXG4gICAgfTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gcmVuZGVyIHZhbHVlXG4gICAgdGhpcy5vdXRwdXQuY2hlY2tib3hlcyA9IHRoaXMuZ2V0Q2hlY2tib3hlcyh0aGlzLm91dHB1dC5jaGVja2JveGVzKTtcblxuICAgIC8vIHJlbmRlciBoaWRkZW5cbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJztcbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHsgaW5wdXRQYXlsb2FkLCB2YWx1ZTogaXNDaGVja2VkIH0pIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGV4aXN0cyA9ICEhKHZhbHVlLmluY2x1ZGVzKGlucHV0UGF5bG9hZCkpO1xuICAgIGlmIChpc0NoZWNrZWQgJiYgIWV4aXN0cykge1xuICAgICAgdmFsdWUucHVzaChpbnB1dFBheWxvYWQpO1xuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiBleGlzdHMpIHtcbiAgICAgIHZhbHVlLnNwbGljZSh2YWx1ZS5pbmRleE9mKGlucHV0UGF5bG9hZCksIDEpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoZWNrYm94ZXMoY2hlY2tib3hlcykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiBjaGVja2JveGVzLm1hcCgoY2hlY2tib3gpID0+ICh7XG4gICAgICAuLi5jaGVja2JveCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWw6IF90KGNoZWNrYm94LmxhYmVsKSxcbiAgICAgIGNoZWNrZWQ6ICEhKHZhbHVlLmluY2x1ZGVzKGNoZWNrYm94LnBheWxvYWQpKVxuICAgIH0pKTtcbiAgfVxufVxuIl19