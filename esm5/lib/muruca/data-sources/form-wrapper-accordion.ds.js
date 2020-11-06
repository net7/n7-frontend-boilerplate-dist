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
    MrFormWrapperAccordionDS.prototype.onReset = function () {
        var form = this.output.form;
        var inputs = form.getInputs();
        Object.keys(inputs).forEach(function (id) {
            inputs[id].clear();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxJQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztBQUNyQyxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQztBQUV4QztJQUE4Qyw0Q0FBVTtJQUF4RDs7SUFvQ0EsQ0FBQztJQW5DVyw0Q0FBUyxHQUFuQixVQUFvQixJQUFnQztRQUMxQyxJQUFBLGdCQUFJLENBQVU7UUFDZCxJQUFBLDJCQUFNLENBQWlCO1FBRS9CLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLHVCQUMzQyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxLQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNqQixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUN4RCxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLE9BRTlCLEVBVDhDLENBUzlDLENBQUMsQ0FBQztRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDVSxJQUFBLHVCQUFJLENBQWlCO1FBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUMzQyxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO2dCQUNoQixJQUFBLDZCQUFNLENBQW1CO2dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBcENELENBQThDLFVBQVUsR0FvQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24nO1xuXG5jb25zdCBJQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS11cCc7XG5jb25zdCBJQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtZG93bic7XG5cbmV4cG9ydCBjbGFzcyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YSk6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhIHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IGRhdGE7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IGZvcm0uY29uZmlnO1xuXG4gICAgLy8gc2V0IGFjY29yZGlvbiBoZWFkZXJzXG4gICAgZGF0YS5mb3JtLmNvbmZpZy5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4gKHtcbiAgICAgIC4uLmdyb3VwLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAuLi5ncm91cC5vcHRpb25zLFxuICAgICAgICB0ZXh0OiBncm91cC5vcHRpb25zLmxhYmVsLFxuICAgICAgICBwYXlsb2FkOiBncm91cC5pZCxcbiAgICAgICAgaWNvblJpZ2h0OiBncm91cC5vcHRpb25zLmlzT3BlbiA/IElDT05fT1BFTiA6IElDT05fQ0xPU0UsXG4gICAgICAgIGlzT3BlbjogZ3JvdXAub3B0aW9ucy5pc09wZW5cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvblJlc2V0KCkge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5vdXRwdXQ7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5nZXRJbnB1dHMoKTtcbiAgICBPYmplY3Qua2V5cyhpbnB1dHMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBpbnB1dHNbaWRdLmNsZWFyKCk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVHcm91cChncm91cElkKSB7XG4gICAgdGhpcy5vdXRwdXQuZm9ybS5jb25maWcuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBpZiAoZ3JvdXAuaWQgPT09IGdyb3VwSWQpIHtcbiAgICAgICAgY29uc3QgeyBpc09wZW4gfSA9IGdyb3VwLm9wdGlvbnM7XG4gICAgICAgIGdyb3VwLm9wdGlvbnMuaWNvblJpZ2h0ID0gaXNPcGVuID8gSUNPTl9DTE9TRSA6IElDT05fT1BFTjtcbiAgICAgICAgZ3JvdXAub3B0aW9ucy5pc09wZW4gPSAhZ3JvdXAub3B0aW9ucy5pc09wZW47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==