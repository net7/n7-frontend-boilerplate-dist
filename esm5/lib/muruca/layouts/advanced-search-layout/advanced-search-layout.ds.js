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
        this.addTranslations(this.pageConfig);
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
    MrAdvancedSearchLayoutDS.prototype.addTranslations = function (pageConfig) {
        var formConfig = pageConfig.formConfig;
        // page title
        pageConfig.title = _t(pageConfig.title);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEO1FBQUEscUVBb0hDO1FBM0dXLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQTJHOUIsQ0FBQztJQXJHQyx5Q0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVB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LE9BQU8sQ0FBQyxVQUFDLFFBQVE7d0JBQ3JDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3dCQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFwSEQsQ0FBOEMsZ0JBQWdCLEdBb0g3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBjbG9uZURlZXAsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuICBwdWJsaWMgcGFnZUNvbmZpZztcclxuXHJcbiAgcHVibGljIGZvcm06IE1yRm9ybU1vZGVsO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XHJcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcclxuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XHJcblxyXG4gICAgLy8gYWRkIHRyYW5zbGF0aW9uc1xyXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcclxuXHJcbiAgICAvLyBpbml0IGZvcm1cclxuICAgIHRoaXMuZm9ybSA9IG5ldyBNckZvcm1Nb2RlbCgpO1xyXG4gICAgLy8gZm9ybSBpbml0XHJcbiAgICB0aGlzLmZvcm0uaW5pdCh0aGlzLnBhZ2VDb25maWcuZm9ybUNvbmZpZyk7XHJcbiAgICAvLyBzZXQgaW5pdGlhbCBzdGF0ZVxyXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjbG9uZURlZXAodGhpcy5mb3JtLmdldFN0YXRlKCkpO1xyXG5cclxuICAgIHRoaXMub25lKCdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJykudXBkYXRlKHtcclxuICAgICAgZm9ybTogdGhpcy5mb3JtXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVIZWFkVGl0bGUoKSB7XHJcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKV0uam9pbignID4gJykpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoeyBzdGF0ZSB9KSB7XHJcbiAgICBpZiAoIWlzRW1wdHkoc3RhdGUpKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0c1VybCB9ID0gdGhpcy5wYWdlQ29uZmlnO1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhzdGF0ZSlcclxuICAgICAgICAuZmlsdGVyKChrZXkpID0+ICEoc3RhdGVba2V5XS5kaXNhYmxlZCB8fCBpc0VtcHR5KHN0YXRlW2tleV0udmFsdWUpKSlcclxuICAgICAgICAubWFwKChrZXkpID0+ICh7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShzdGF0ZVtrZXldLnZhbHVlKVxyXG4gICAgICAgICAgICA/IHN0YXRlW2tleV0udmFsdWUuam9pbignLCcpXHJcbiAgICAgICAgICAgIDogc3RhdGVba2V5XS52YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKTtcclxuICAgICAgY29uc3QgdXJsID0gYCR7cmVzdWx0c1VybH0/JHtwYXJhbXMuam9pbignJicpfWA7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXNldCgpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5pdGlhbFN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLmluaXRpYWxTdGF0ZVtrZXldKTtcclxuICAgICAgdGhpcy5mb3JtLmdldElucHV0KGtleSkuc2V0U3RhdGUoaW5wdXRTdGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhZGRUcmFuc2xhdGlvbnMocGFnZUNvbmZpZykge1xyXG4gICAgY29uc3QgeyBmb3JtQ29uZmlnIH0gPSBwYWdlQ29uZmlnO1xyXG4gICAgLy8gcGFnZSB0aXRsZVxyXG4gICAgcGFnZUNvbmZpZy50aXRsZSA9IF90KHBhZ2VDb25maWcudGl0bGUpO1xyXG4gICAgLy8gc3VibWl0XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24pIHtcclxuICAgICAgZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24ubGFiZWwgPSBfdChmb3JtQ29uZmlnLnN1Ym1pdEJ1dHRvbi5sYWJlbCk7XHJcbiAgICB9XHJcbiAgICAvLyByZXNldFxyXG4gICAgaWYgKGZvcm1Db25maWcucmVzZXRCdXR0b24pIHtcclxuICAgICAgZm9ybUNvbmZpZy5yZXNldEJ1dHRvbi5sYWJlbCA9IF90KGZvcm1Db25maWcucmVzZXRCdXR0b24ubGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1Db25maWcuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBpZiAoc2VjdGlvbi50aXRsZSkge1xyXG4gICAgICAgIHNlY3Rpb24udGl0bGUgPSBfdChzZWN0aW9uLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2VjdGlvbi5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHNlY3Rpb24uZGVzY3JpcHRpb24gPSBfdChzZWN0aW9uLmRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC5kYXRhLmxhYmVsKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLmxhYmVsID0gX3QoaW5wdXQuZGF0YS5sYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbnB1dCB0ZXh0XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgaWYgKGlucHV0LmRhdGEucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZGF0YS5wbGFjZWhvbGRlciA9IF90KGlucHV0LmRhdGEucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnB1dCBjaGVja2JveFxyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tib3gubGFiZWwgPSBfdChjaGVja2JveC5sYWJlbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5wdXQgc2VsZWN0XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5sYWJlbCA9IF90KG9wdGlvbi5sYWJlbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==