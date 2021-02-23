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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEO1FBQUEscUVBaUhDO1FBeEdXLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQXdHOUIsQ0FBQztJQWxHQyx5Q0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElB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QkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3dCQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFqSEQsQ0FBOEMsZ0JBQWdCLEdBaUg3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGNsb25lRGVlcCwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBpbml0aWFsU3RhdGUgPSB7fTtcblxuICBwdWJsaWMgcGFnZUNvbmZpZztcblxuICBwdWJsaWMgZm9ybTogTXJGb3JtTW9kZWw7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG5cbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnLmZvcm1Db25maWcpO1xuXG4gICAgLy8gaW5pdCBmb3JtXG4gICAgdGhpcy5mb3JtID0gbmV3IE1yRm9ybU1vZGVsKCk7XG4gICAgLy8gZm9ybSBpbml0XG4gICAgdGhpcy5mb3JtLmluaXQodGhpcy5wYWdlQ29uZmlnLmZvcm1Db25maWcpO1xuICAgIC8vIHNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjbG9uZURlZXAodGhpcy5mb3JtLmdldFN0YXRlKCkpO1xuXG4gICAgdGhpcy5vbmUoJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nKS51cGRhdGUoe1xuICAgICAgZm9ybTogdGhpcy5mb3JtXG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlSGVhZFRpdGxlKCkge1xuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIF90KHBhZ2VUaXRsZSldLmpvaW4oJyA+ICcpKTtcbiAgfVxuXG4gIG9uU3VibWl0KHsgc3RhdGUgfSkge1xuICAgIGlmICghaXNFbXB0eShzdGF0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcmVzdWx0c1VybCB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoc3RhdGUpXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gIShzdGF0ZVtrZXldLmRpc2FibGVkIHx8IGlzRW1wdHkoc3RhdGVba2V5XS52YWx1ZSkpKVxuICAgICAgICAubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KHN0YXRlW2tleV0udmFsdWUpXG4gICAgICAgICAgICA/IHN0YXRlW2tleV0udmFsdWUuam9pbignLCcpXG4gICAgICAgICAgICA6IHN0YXRlW2tleV0udmFsdWVcbiAgICAgICAgfSkpXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKTtcbiAgICAgIGNvbnN0IHVybCA9IGAke3Jlc3VsdHNVcmx9PyR7cGFyYW1zLmpvaW4oJyYnKX1gO1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmluaXRpYWxTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFN0YXRlID0gY2xvbmVEZWVwKHRoaXMuaW5pdGlhbFN0YXRlW2tleV0pO1xuICAgICAgdGhpcy5mb3JtLmdldElucHV0KGtleSkuc2V0U3RhdGUoaW5wdXRTdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVHJhbnNsYXRpb25zKGZvcm1Db25maWcpIHtcbiAgICAvLyBzdWJtaXRcbiAgICBpZiAoZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24pIHtcbiAgICAgIGZvcm1Db25maWcuc3VibWl0QnV0dG9uLmxhYmVsID0gX3QoZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24ubGFiZWwpO1xuICAgIH1cbiAgICAvLyByZXNldFxuICAgIGlmIChmb3JtQ29uZmlnLnJlc2V0QnV0dG9uKSB7XG4gICAgICBmb3JtQ29uZmlnLnJlc2V0QnV0dG9uLmxhYmVsID0gX3QoZm9ybUNvbmZpZy5yZXNldEJ1dHRvbi5sYWJlbCk7XG4gICAgfVxuXG4gICAgZm9ybUNvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoc2VjdGlvbi50aXRsZSkge1xuICAgICAgICBzZWN0aW9uLnRpdGxlID0gX3Qoc2VjdGlvbi50aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAoc2VjdGlvbi5kZXNjcmlwdGlvbikge1xuICAgICAgICBzZWN0aW9uLmRlc2NyaXB0aW9uID0gX3Qoc2VjdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZGF0YS5sYWJlbCkge1xuICAgICAgICAgIGlucHV0LmRhdGEubGFiZWwgPSBfdChpbnB1dC5kYXRhLmxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlucHV0IHRleHRcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGlmIChpbnB1dC5kYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhLnBsYWNlaG9sZGVyID0gX3QoaW5wdXQuZGF0YS5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlucHV0IGNoZWNrYm94XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgaW5wdXQuZGF0YS5jaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICBjaGVja2JveC5sYWJlbCA9IF90KGNoZWNrYm94LmxhYmVsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbnB1dCBzZWxlY3RcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgaW5wdXQuZGF0YS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLmxhYmVsID0gX3Qob3B0aW9uLmxhYmVsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==