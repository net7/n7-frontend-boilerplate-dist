import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import { cloneDeep, isEmpty } from 'lodash';
import { MrFormModel } from '../../models/form.model';
var MrAdvancedSearchLayoutDS = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchLayoutDS, _super);
    function MrAdvancedSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialState = {};
        return _this;
    }
    MrAdvancedSearchLayoutDS.prototype.onInit = function (payload) {
        this.router = payload.router;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // init form
        this.form = new MrFormModel();
        // form init
        this.form.init(this.pageConfig.formConfig);
        // set initial state
        this.initialState = cloneDeep(this.form.getState());
        this.one('mr-form-wrapper-accordion').update({
            form: this.form
        });
        // update head title
        this.updateHeadTitle();
    };
    MrAdvancedSearchLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    };
    MrAdvancedSearchLayoutDS.prototype.onSubmit = function (_a) {
        var state = _a.state;
        if (!isEmpty(state)) {
            var resultsUrl = this.pageConfig.resultsUrl;
            var params = Object.keys(state)
                .filter(function (key) { return !(state[key].disabled || isEmpty(state[key].value)); })
                .map(function (key) { return ({
                key: key,
                value: Array.isArray(state[key].value)
                    ? state[key].value.join(',')
                    : state[key].value
            }); })
                .map(function (_a) {
                var key = _a.key, value = _a.value;
                return key + "=" + encodeURIComponent(value);
            });
            var url = resultsUrl + "?" + params.join('&');
            window.open(url, '_blank');
        }
    };
    MrAdvancedSearchLayoutDS.prototype.onReset = function () {
        var _this = this;
        Object.keys(this.initialState).forEach(function (key) {
            var inputState = cloneDeep(_this.initialState[key]);
            _this.form.getInput(key).setState(inputState);
        });
    };
    return MrAdvancedSearchLayoutDS;
}(LayoutDataSource));
export { MrAdvancedSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEO1FBQUEscUVBa0VDO1FBekRXLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQXlEOUIsQ0FBQztJQW5EQyx5Q0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsa0RBQWUsR0FBekI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxFQUFTO1lBQVAsZ0JBQUs7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsSUFBQSx1Q0FBVSxDQUFxQjtZQUN2QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDOUIsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2lCQUNwRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO2dCQUNiLEdBQUcsS0FBQTtnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNwQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7YUFDckIsQ0FBQyxFQUxZLENBS1osQ0FBQztpQkFDRixHQUFHLENBQUMsVUFBQyxFQUFjO29CQUFaLFlBQUcsRUFBRSxnQkFBSztnQkFBTyxPQUFHLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUc7WUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1lBQ2xFLElBQU0sR0FBRyxHQUFNLFVBQVUsU0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFBQSxpQkFLQztRQUpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDekMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBbEVELENBQThDLGdCQUFnQixHQWtFN0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcm90ZWN0ZWQgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgaW5pdGlhbFN0YXRlID0ge307XG5cbiAgcHVibGljIHBhZ2VDb25maWc7XG5cbiAgcHVibGljIGZvcm06IE1yRm9ybU1vZGVsO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gaW5pdCBmb3JtXG4gICAgdGhpcy5mb3JtID0gbmV3IE1yRm9ybU1vZGVsKCk7XG4gICAgLy8gZm9ybSBpbml0XG4gICAgdGhpcy5mb3JtLmluaXQodGhpcy5wYWdlQ29uZmlnLmZvcm1Db25maWcpO1xuICAgIC8vIHNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjbG9uZURlZXAodGhpcy5mb3JtLmdldFN0YXRlKCkpO1xuXG4gICAgdGhpcy5vbmUoJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nKS51cGRhdGUoe1xuICAgICAgZm9ybTogdGhpcy5mb3JtXG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlSGVhZFRpdGxlKCkge1xuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIF90KHBhZ2VUaXRsZSldLmpvaW4oJyA+ICcpKTtcbiAgfVxuXG4gIG9uU3VibWl0KHsgc3RhdGUgfSkge1xuICAgIGlmICghaXNFbXB0eShzdGF0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcmVzdWx0c1VybCB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoc3RhdGUpXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gIShzdGF0ZVtrZXldLmRpc2FibGVkIHx8IGlzRW1wdHkoc3RhdGVba2V5XS52YWx1ZSkpKVxuICAgICAgICAubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KHN0YXRlW2tleV0udmFsdWUpXG4gICAgICAgICAgICA/IHN0YXRlW2tleV0udmFsdWUuam9pbignLCcpXG4gICAgICAgICAgICA6IHN0YXRlW2tleV0udmFsdWVcbiAgICAgICAgfSkpXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKTtcbiAgICAgIGNvbnN0IHVybCA9IGAke3Jlc3VsdHNVcmx9PyR7cGFyYW1zLmpvaW4oJyYnKX1gO1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmluaXRpYWxTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFN0YXRlID0gY2xvbmVEZWVwKHRoaXMuaW5pdGlhbFN0YXRlW2tleV0pO1xuICAgICAgdGhpcy5mb3JtLmdldElucHV0KGtleSkuc2V0U3RhdGUoaW5wdXRTdGF0ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==