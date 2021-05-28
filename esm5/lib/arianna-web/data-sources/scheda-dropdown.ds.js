import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaDropdownDS = /** @class */ (function (_super) {
    __extends(AwSchedaDropdownDS, _super);
    function AwSchedaDropdownDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaDropdownDS.prototype.transform = function (response) {
        var digitalObjects = response.digitalObjects;
        var firstObject = digitalObjects[0];
        return {
            header: {
                label: firstObject.label,
                icon: {
                    id: 'n7-icon-caret-down'
                },
                payload: 'toggle',
            },
            items: digitalObjects.map(function (_a, index) {
                var label = _a.label, type = _a.type;
                return ({
                    label: label,
                    type: type,
                    payload: index,
                    selected: index === 0,
                });
            })
        };
    };
    AwSchedaDropdownDS.prototype.toggle = function () {
        var classes = this.output.classes;
        this.output.classes = classes ? null : 'is-open';
    };
    AwSchedaDropdownDS.prototype.onChange = function (payload) {
        var _this = this;
        // link check
        if (this.output.items[payload].type !== 'external') {
            this.output.items.forEach(function (item) {
                item.selected = item.payload === payload;
                if (item.selected) {
                    _this.output.header.label = item.label;
                }
            });
        }
        // close
        this.toggle();
    };
    return AwSchedaDropdownDS;
}(DataSource));
export { AwSchedaDropdownDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtZHJvcGRvd24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUF3QyxzQ0FBVTtJQUFsRDs7SUF1Q0EsQ0FBQztJQXRDVyxzQ0FBUyxHQUFuQixVQUFvQixRQUFRO1FBQ2xCLElBQUEsd0NBQWMsQ0FBYztRQUNwQyxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixFQUFFLEVBQUUsb0JBQW9CO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsUUFBUTthQUNsQjtZQUNELEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZSxFQUFFLEtBQUs7b0JBQXBCLGdCQUFLLEVBQUUsY0FBSTtnQkFBYyxPQUFBLENBQUM7b0JBQ3JELEtBQUssT0FBQTtvQkFDTCxJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDO2lCQUN0QixDQUFDO1lBTG9ELENBS3BELENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDVSxJQUFBLDZCQUFPLENBQWlCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxPQUFPO1FBQWhCLGlCQVlDO1FBWEMsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBd0MsVUFBVSxHQXVDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2hlZGFEcm9wZG93bkRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYURyb3Bkb3duRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHJlc3BvbnNlKTogU2NoZWRhRHJvcGRvd25EYXRhIHtcclxuICAgIGNvbnN0IHsgZGlnaXRhbE9iamVjdHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgZmlyc3RPYmplY3QgPSBkaWdpdGFsT2JqZWN0c1swXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGxhYmVsOiBmaXJzdE9iamVjdC5sYWJlbCxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBpZDogJ243LWljb24tY2FyZXQtZG93bidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogZGlnaXRhbE9iamVjdHMubWFwKCh7IGxhYmVsLCB0eXBlIH0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcGF5bG9hZDogaW5kZXgsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSAwLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGNsYXNzZXMgPyBudWxsIDogJ2lzLW9wZW4nO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZCkge1xyXG4gICAgLy8gbGluayBjaGVja1xyXG4gICAgaWYgKHRoaXMub3V0cHV0Lml0ZW1zW3BheWxvYWRdLnR5cGUgIT09ICdleHRlcm5hbCcpIHtcclxuICAgICAgdGhpcy5vdXRwdXQuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtLnBheWxvYWQgPT09IHBheWxvYWQ7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMub3V0cHV0LmhlYWRlci5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGNsb3NlXHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=