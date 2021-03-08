import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var ICON_OPEN = 'n7-icon-angle-up';
var ICON_CLOSE = 'n7-icon-angle-down';
var MrFormWrapperAccordionDS = /** @class */ (function (_super) {
    __extends(MrFormWrapperAccordionDS, _super);
    function MrFormWrapperAccordionDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrFormWrapperAccordionDS.prototype.transform = function (data) {
        var form = data.form;
        var groups = form.config.groups;
        // set accordion headers
        data.form.config.groups = groups.map(function (group) { return (__assign(__assign({}, group), { options: __assign(__assign({}, group.options), { text: group.options.label, payload: group.id, iconRight: group.options.isOpen ? ICON_OPEN : ICON_CLOSE, isOpen: group.options.isOpen }) })); });
        return data;
    };
    MrFormWrapperAccordionDS.prototype.toggleGroup = function (groupId) {
        this.output.form.config.groups.forEach(function (group) {
            if (group.id === groupId) {
                var isOpen = group.options.isOpen;
                group.options.iconRight = isOpen ? ICON_CLOSE : ICON_OPEN;
                group.options.isOpen = !group.options.isOpen;
            }
        });
    };
    return MrFormWrapperAccordionDS;
}(DataSource));
export { MrFormWrapperAccordionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxJQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztBQUNyQyxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQztBQUV4QztJQUE4Qyw0Q0FBVTtJQUF4RDs7SUE0QkEsQ0FBQztJQTNCVyw0Q0FBUyxHQUFuQixVQUFvQixJQUFnQztRQUMxQyxJQUFBLGdCQUFJLENBQVU7UUFDZCxJQUFBLDJCQUFNLENBQWlCO1FBRS9CLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLHVCQUMzQyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxLQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNqQixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUN4RCxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLE9BRTlCLEVBVDhDLENBUzlDLENBQUMsQ0FBQztRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDhDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUMzQyxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO2dCQUNoQixJQUFBLDZCQUFNLENBQW1CO2dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBNUJELENBQThDLFVBQVUsR0E0QnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbic7XHJcblxyXG5jb25zdCBJQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS11cCc7XHJcbmNvbnN0IElDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1kb3duJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhKTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEge1xyXG4gICAgY29uc3QgeyBmb3JtIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBncm91cHMgfSA9IGZvcm0uY29uZmlnO1xyXG5cclxuICAgIC8vIHNldCBhY2NvcmRpb24gaGVhZGVyc1xyXG4gICAgZGF0YS5mb3JtLmNvbmZpZy5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4gKHtcclxuICAgICAgLi4uZ3JvdXAsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAuLi5ncm91cC5vcHRpb25zLFxyXG4gICAgICAgIHRleHQ6IGdyb3VwLm9wdGlvbnMubGFiZWwsXHJcbiAgICAgICAgcGF5bG9hZDogZ3JvdXAuaWQsXHJcbiAgICAgICAgaWNvblJpZ2h0OiBncm91cC5vcHRpb25zLmlzT3BlbiA/IElDT05fT1BFTiA6IElDT05fQ0xPU0UsXHJcbiAgICAgICAgaXNPcGVuOiBncm91cC5vcHRpb25zLmlzT3BlblxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUdyb3VwKGdyb3VwSWQpIHtcclxuICAgIHRoaXMub3V0cHV0LmZvcm0uY29uZmlnLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICBpZiAoZ3JvdXAuaWQgPT09IGdyb3VwSWQpIHtcclxuICAgICAgICBjb25zdCB7IGlzT3BlbiB9ID0gZ3JvdXAub3B0aW9ucztcclxuICAgICAgICBncm91cC5vcHRpb25zLmljb25SaWdodCA9IGlzT3BlbiA/IElDT05fQ0xPU0UgOiBJQ09OX09QRU47XHJcbiAgICAgICAgZ3JvdXAub3B0aW9ucy5pc09wZW4gPSAhZ3JvdXAub3B0aW9ucy5pc09wZW47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=