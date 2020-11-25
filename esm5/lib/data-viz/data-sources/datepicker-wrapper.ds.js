import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var DvDatepickerWrapperDS = /** @class */ (function (_super) {
    __extends(DvDatepickerWrapperDS, _super);
    function DvDatepickerWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._datepicker = null;
        return _this;
    }
    DvDatepickerWrapperDS.prototype.transform = function (data) {
        var _this = this;
        if (!data) {
            return null;
        }
        return {
            // set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || 'n7-icon-angle-down',
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            // set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: function (datepicker) { _this._datepicker = datepicker; },
                },
            },
        };
    };
    DvDatepickerWrapperDS.prototype.openDatepicker = function () {
        var _this = this;
        setTimeout(function () { return _this._datepicker.open(); });
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    };
    DvDatepickerWrapperDS.prototype.closeDatepicker = function () {
        var _this = this;
        setTimeout(function () { return _this._datepicker.close(); });
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    };
    DvDatepickerWrapperDS.prototype.setLabel = function (payload) {
        this.output.select.label = payload;
        this.output.datepicker.hidden = true;
    };
    DvDatepickerWrapperDS.prototype.toggleDropDown = function () {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    };
    return DvDatepickerWrapperDS;
}(DataSource));
export { DvDatepickerWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyx5Q0FBVTtJQUFyRDtRQUFBLHFFQW9EQztRQW5EVyxpQkFBVyxHQUFRLElBQUksQ0FBQzs7SUFtRHBDLENBQUM7SUFqRFcseUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFM0IsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQjtnQkFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUM3QjtZQUNELGFBQWE7WUFDYixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFO29CQUNKLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7b0JBQ3RDLFdBQVcsRUFBRSxVQUFDLFVBQVUsSUFBTyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ2hFO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFBQSxpQkFJQztRQUhDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsT0FBTztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsOENBQWMsR0FBZDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUEyQyxVQUFVLEdBb0RwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIF9kYXRlcGlja2VyOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gc2V0IHNlbGVjdCBvcHRpb25cclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IGRhdGEuc2VsZWN0LmlkLFxyXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcclxuICAgICAgICBpY29uOiBkYXRhLnNlbGVjdC5pY29uIHx8ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgIGxhYmVsOiBkYXRhLnNlbGVjdC5sYWJlbCxcclxuICAgICAgICBpdGVtczogZGF0YS5zZWxlY3QuaXRlbXMsXHJcbiAgICAgICAgY2xhc3NlczogZGF0YS5zZWxlY3QuY2xhc3NlcyxcclxuICAgICAgfSxcclxuICAgICAgLy8gc2V0IHBpY2tlclxyXG4gICAgICBkYXRlcGlja2VyOiB7XHJcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmRhdGVwaWNrZXIuaWQsXHJcbiAgICAgICAgICBsaWJPcHRpb25zOiBkYXRhLmRhdGVwaWNrZXIubGliT3B0aW9ucyxcclxuICAgICAgICAgIGdldEluc3RhbmNlOiAoZGF0ZXBpY2tlcikgPT4geyB0aGlzLl9kYXRlcGlja2VyID0gZGF0ZXBpY2tlcjsgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9wZW5EYXRlcGlja2VyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKSk7XHJcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZURhdGVwaWNrZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIuY2xvc2UoKSk7XHJcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsKHBheWxvYWQpIHtcclxuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5sYWJlbCA9IHBheWxvYWQ7XHJcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wRG93bigpIHtcclxuICAgIGlmICh0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19