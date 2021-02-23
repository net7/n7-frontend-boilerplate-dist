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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtdGV4dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRDtJQUFtQyxpQ0FBVTtJQUE3QztRQUFBLHFFQStDQztRQTVDUSxXQUFLLEdBQXVDO1lBQ2pELEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFTRixjQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDOztJQStCOUIsQ0FBQztJQXRDVyxpQ0FBUyxHQUFuQixVQUFvQixJQUFtQjtRQUNyQyw2QkFDSyxJQUFJLEtBQ1AsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQ2pDO0lBQ0osQ0FBQztJQUlELGdDQUFRLEdBQVIsVUFBUyxRQUE0QztRQUNuRCxJQUFJLENBQUMsS0FBSyx5QkFDTCxJQUFJLENBQUMsS0FBSyxHQUNWLFFBQVEsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ1EsSUFBQSxlQUF3QyxFQUF0QyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsc0JBQXVCLENBQUM7UUFFL0MsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixxQkFBcUI7UUFDckIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFxQixDQUFDO1FBQ2hFLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbEI7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBbUMsVUFBVSxHQStDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0VGV4dERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNckZvcm1JbnB1dFN0YXRlLCBNcklucHV0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgdHlwZSBNcklucHV0VGV4dFZhbHVlID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIE1ySW5wdXRUZXh0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgTXJJbnB1dERhdGFTb3VyY2U8TXJJbnB1dFRleHRWYWx1ZT4ge1xuICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dFRleHRWYWx1ZT4gPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhpZGRlbjogZmFsc2UsXG4gIH07XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFRleHREYXRhKTogSW5wdXRUZXh0RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBwbGFjZWhvbGRlcjogX3QoZGF0YS5wbGFjZWhvbGRlcilcbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RhdGUgPSAoKSA9PiB0aGlzLnN0YXRlO1xuXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRUZXh0VmFsdWU+KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi5uZXdTdGF0ZVxuICAgIH07XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG51bGwgfSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGhpZGRlbiwgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyByZW5kZXIgdmFsdWVcbiAgICB0aGlzLm91dHB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIC8vIGZpeCBlbGVtZW50IHVwZGF0ZVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIGRpc2FibGVkXG4gICAgdGhpcy5vdXRwdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIC8vIHJlbmRlciBoaWRkZW5cbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJztcbiAgfVxufVxuIl19