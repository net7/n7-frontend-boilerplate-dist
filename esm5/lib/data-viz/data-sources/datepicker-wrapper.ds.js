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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyx5Q0FBVTtJQUFyRDtRQUFBLHFFQW9EQztRQW5EVyxpQkFBVyxHQUFRLElBQUksQ0FBQzs7SUFtRHBDLENBQUM7SUFqRFcseUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFM0IsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQjtnQkFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUM3QjtZQUNELGFBQWE7WUFDYixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFO29CQUNKLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7b0JBQ3RDLFdBQVcsRUFBRSxVQUFDLFVBQVUsSUFBTyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ2hFO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFBQSxpQkFJQztRQUhDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsT0FBTztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsOENBQWMsR0FBZDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUEyQyxVQUFVLEdBb0RwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkRhdGVwaWNrZXJXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIF9kYXRlcGlja2VyOiBhbnkgPSBudWxsO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IGFueSB7XG4gICAgaWYgKCFkYXRhKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gc2V0IHNlbGVjdCBvcHRpb25cbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogZGF0YS5zZWxlY3QuaWQsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgaWNvbjogZGF0YS5zZWxlY3QuaWNvbiB8fCAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgbGFiZWw6IGRhdGEuc2VsZWN0LmxhYmVsLFxuICAgICAgICBpdGVtczogZGF0YS5zZWxlY3QuaXRlbXMsXG4gICAgICAgIGNsYXNzZXM6IGRhdGEuc2VsZWN0LmNsYXNzZXMsXG4gICAgICB9LFxuICAgICAgLy8gc2V0IHBpY2tlclxuICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogZGF0YS5kYXRlcGlja2VyLmlkLFxuICAgICAgICAgIGxpYk9wdGlvbnM6IGRhdGEuZGF0ZXBpY2tlci5saWJPcHRpb25zLFxuICAgICAgICAgIGdldEluc3RhbmNlOiAoZGF0ZXBpY2tlcikgPT4geyB0aGlzLl9kYXRlcGlja2VyID0gZGF0ZXBpY2tlcjsgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5EYXRlcGlja2VyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCkpO1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZURhdGVwaWNrZXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLmNsb3NlKCkpO1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHNldExhYmVsKHBheWxvYWQpIHtcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QubGFiZWwgPSBwYXlsb2FkO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCkge1xuICAgIGlmICh0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==