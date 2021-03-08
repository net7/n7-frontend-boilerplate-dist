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
        // add translations
        this.addTranslations(this.pageConfig.formConfig);
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
    MrAdvancedSearchLayoutDS.prototype.addTranslations = function (formConfig) {
        // submit
        if (formConfig.submitButton) {
            formConfig.submitButton.label = _t(formConfig.submitButton.label);
        }
        // reset
        if (formConfig.resetButton) {
            formConfig.resetButton.label = _t(formConfig.resetButton.label);
        }
        formConfig.sections.forEach(function (section) {
            if (section.title) {
                section.title = _t(section.title);
            }
            if (section.description) {
                section.description = _t(section.description);
            }
            section.inputs.forEach(function (input) {
                if (input.data.label) {
                    input.data.label = _t(input.data.label);
                }
                // input text
                if (input.type === 'text') {
                    if (input.data.placeholder) {
                        input.data.placeholder = _t(input.data.placeholder);
                    }
                }
                // input checkbox
                if (input.type === 'checkbox') {
                    input.data.checkboxes.forEach(function (checkbox) {
                        checkbox.label = _t(checkbox.label);
                    });
                }
                // input select
                if (input.type === 'select') {
                    input.data.options.forEach(function (option) {
                        option.label = _t(option.label);
                    });
                }
            });
        });
    };
    return MrAdvancedSearchLayoutDS;
}(LayoutDataSource));
export { MrAdvancedSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEO1FBQUEscUVBaUhDO1FBeEdXLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQXdHOUIsQ0FBQztJQWxHQyx5Q0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElB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QkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3dCQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFqSEQsQ0FBOEMsZ0JBQWdCLEdBaUg3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBjbG9uZURlZXAsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuICBwdWJsaWMgcGFnZUNvbmZpZztcclxuXHJcbiAgcHVibGljIGZvcm06IE1yRm9ybU1vZGVsO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XHJcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcclxuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XHJcblxyXG4gICAgLy8gYWRkIHRyYW5zbGF0aW9uc1xyXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnLmZvcm1Db25maWcpO1xyXG5cclxuICAgIC8vIGluaXQgZm9ybVxyXG4gICAgdGhpcy5mb3JtID0gbmV3IE1yRm9ybU1vZGVsKCk7XHJcbiAgICAvLyBmb3JtIGluaXRcclxuICAgIHRoaXMuZm9ybS5pbml0KHRoaXMucGFnZUNvbmZpZy5mb3JtQ29uZmlnKTtcclxuICAgIC8vIHNldCBpbml0aWFsIHN0YXRlXHJcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLmZvcm0uZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgdGhpcy5vbmUoJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nKS51cGRhdGUoe1xyXG4gICAgICBmb3JtOiB0aGlzLmZvcm1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUhlYWRUaXRsZSgpIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCh7IHN0YXRlIH0pIHtcclxuICAgIGlmICghaXNFbXB0eShzdGF0ZSkpIHtcclxuICAgICAgY29uc3QgeyByZXN1bHRzVXJsIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKHN0YXRlKVxyXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gIShzdGF0ZVtrZXldLmRpc2FibGVkIHx8IGlzRW1wdHkoc3RhdGVba2V5XS52YWx1ZSkpKVxyXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHtcclxuICAgICAgICAgIGtleSxcclxuICAgICAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KHN0YXRlW2tleV0udmFsdWUpXHJcbiAgICAgICAgICAgID8gc3RhdGVba2V5XS52YWx1ZS5qb2luKCcsJylcclxuICAgICAgICAgICAgOiBzdGF0ZVtrZXldLnZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWApO1xyXG4gICAgICBjb25zdCB1cmwgPSBgJHtyZXN1bHRzVXJsfT8ke3BhcmFtcy5qb2luKCcmJyl9YDtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc2V0KCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5pbml0aWFsU3RhdGUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFN0YXRlID0gY2xvbmVEZWVwKHRoaXMuaW5pdGlhbFN0YXRlW2tleV0pO1xyXG4gICAgICB0aGlzLmZvcm0uZ2V0SW5wdXQoa2V5KS5zZXRTdGF0ZShpbnB1dFN0YXRlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFkZFRyYW5zbGF0aW9ucyhmb3JtQ29uZmlnKSB7XHJcbiAgICAvLyBzdWJtaXRcclxuICAgIGlmIChmb3JtQ29uZmlnLnN1Ym1pdEJ1dHRvbikge1xyXG4gICAgICBmb3JtQ29uZmlnLnN1Ym1pdEJ1dHRvbi5sYWJlbCA9IF90KGZvcm1Db25maWcuc3VibWl0QnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuICAgIC8vIHJlc2V0XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5yZXNldEJ1dHRvbikge1xyXG4gICAgICBmb3JtQ29uZmlnLnJlc2V0QnV0dG9uLmxhYmVsID0gX3QoZm9ybUNvbmZpZy5yZXNldEJ1dHRvbi5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybUNvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChzZWN0aW9uLnRpdGxlKSB7XHJcbiAgICAgICAgc2VjdGlvbi50aXRsZSA9IF90KHNlY3Rpb24udGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZWN0aW9uLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvbiA9IF90KHNlY3Rpb24uZGVzY3JpcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LmRhdGEubGFiZWwpIHtcclxuICAgICAgICAgIGlucHV0LmRhdGEubGFiZWwgPSBfdChpbnB1dC5kYXRhLmxhYmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlucHV0IHRleHRcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICBpbnB1dC5kYXRhLnBsYWNlaG9sZGVyID0gX3QoaW5wdXQuZGF0YS5wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlucHV0IGNoZWNrYm94XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgIGlucHV0LmRhdGEuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja2JveC5sYWJlbCA9IF90KGNoZWNrYm94LmxhYmVsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnB1dCBzZWxlY3RcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgIGlucHV0LmRhdGEub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uLmxhYmVsID0gX3Qob3B0aW9uLmxhYmVsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19