import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSearchLayoutTabsDS = /** @class */ (function (_super) {
    __extends(AwSearchLayoutTabsDS, _super);
    function AwSearchLayoutTabsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selected = 'list';
        return _this;
    }
    AwSearchLayoutTabsDS.prototype.transform = function () {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : '',
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : '',
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : '',
                }],
        };
    };
    AwSearchLayoutTabsDS.prototype.setSelected = function (tabId) {
        this.selected = tabId;
    };
    return AwSearchLayoutTabsDS;
}(DataSource));
export { AwSearchLayoutTabsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEwQyx3Q0FBVTtJQUFwRDtRQUFBLHFFQXdCQztRQXZCUyxjQUFRLEdBQUcsTUFBTSxDQUFDOztJQXVCNUIsQ0FBQztJQXJCVyx3Q0FBUyxHQUFuQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0QsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRU0sMENBQVcsR0FBbEIsVUFBbUIsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBeEJELENBQTBDLFVBQVUsR0F3Qm5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0VGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VsZWN0ZWQgPSAnbGlzdCc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIHRleHQ6ICdMSVNUQScsXG4gICAgICAgIHBheWxvYWQ6ICdsaXN0JyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2xpc3QnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAnR1JBRklDTycsXG4gICAgICAgIHBheWxvYWQ6ICdjaGFydCcsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdjaGFydCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICdUSU1FTElORScsXG4gICAgICAgIHBheWxvYWQ6ICd0aW1lbGluZScsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICd0aW1lbGluZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9XSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkKHRhYklkKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRhYklkO1xuICB9XG59XG4iXX0=