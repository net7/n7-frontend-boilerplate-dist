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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEO1FBQUEscUVBb0hDO1FBM0dXLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQTJHOUIsQ0FBQztJQXJHQyx5Q0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVB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LE9BQU8sQ0FBQyxVQUFDLFFBQVE7d0JBQ3JDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO3dCQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFwSEQsQ0FBOEMsZ0JBQWdCLEdBb0g3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGNsb25lRGVlcCwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJGb3JtTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBpbml0aWFsU3RhdGUgPSB7fTtcblxuICBwdWJsaWMgcGFnZUNvbmZpZztcblxuICBwdWJsaWMgZm9ybTogTXJGb3JtTW9kZWw7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG5cbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcblxuICAgIC8vIGluaXQgZm9ybVxuICAgIHRoaXMuZm9ybSA9IG5ldyBNckZvcm1Nb2RlbCgpO1xuICAgIC8vIGZvcm0gaW5pdFxuICAgIHRoaXMuZm9ybS5pbml0KHRoaXMucGFnZUNvbmZpZy5mb3JtQ29uZmlnKTtcbiAgICAvLyBzZXQgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gY2xvbmVEZWVwKHRoaXMuZm9ybS5nZXRTdGF0ZSgpKTtcblxuICAgIHRoaXMub25lKCdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJykudXBkYXRlKHtcbiAgICAgIGZvcm06IHRoaXMuZm9ybVxuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUhlYWRUaXRsZSgpIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XG4gIH1cblxuICBvblN1Ym1pdCh7IHN0YXRlIH0pIHtcbiAgICBpZiAoIWlzRW1wdHkoc3RhdGUpKSB7XG4gICAgICBjb25zdCB7IHJlc3VsdHNVcmwgfSA9IHRoaXMucGFnZUNvbmZpZztcbiAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKHN0YXRlKVxuICAgICAgICAuZmlsdGVyKChrZXkpID0+ICEoc3RhdGVba2V5XS5kaXNhYmxlZCB8fCBpc0VtcHR5KHN0YXRlW2tleV0udmFsdWUpKSlcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShzdGF0ZVtrZXldLnZhbHVlKVxuICAgICAgICAgICAgPyBzdGF0ZVtrZXldLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgICAgOiBzdGF0ZVtrZXldLnZhbHVlXG4gICAgICAgIH0pKVxuICAgICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YCk7XG4gICAgICBjb25zdCB1cmwgPSBgJHtyZXN1bHRzVXJsfT8ke3BhcmFtcy5qb2luKCcmJyl9YDtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXQoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5pbml0aWFsU3RhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLmluaXRpYWxTdGF0ZVtrZXldKTtcbiAgICAgIHRoaXMuZm9ybS5nZXRJbnB1dChrZXkpLnNldFN0YXRlKGlucHV0U3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRyYW5zbGF0aW9ucyhwYWdlQ29uZmlnKSB7XG4gICAgY29uc3QgeyBmb3JtQ29uZmlnIH0gPSBwYWdlQ29uZmlnO1xuICAgIC8vIHBhZ2UgdGl0bGVcbiAgICBwYWdlQ29uZmlnLnRpdGxlID0gX3QocGFnZUNvbmZpZy50aXRsZSk7XG4gICAgLy8gc3VibWl0XG4gICAgaWYgKGZvcm1Db25maWcuc3VibWl0QnV0dG9uKSB7XG4gICAgICBmb3JtQ29uZmlnLnN1Ym1pdEJ1dHRvbi5sYWJlbCA9IF90KGZvcm1Db25maWcuc3VibWl0QnV0dG9uLmxhYmVsKTtcbiAgICB9XG4gICAgLy8gcmVzZXRcbiAgICBpZiAoZm9ybUNvbmZpZy5yZXNldEJ1dHRvbikge1xuICAgICAgZm9ybUNvbmZpZy5yZXNldEJ1dHRvbi5sYWJlbCA9IF90KGZvcm1Db25maWcucmVzZXRCdXR0b24ubGFiZWwpO1xuICAgIH1cblxuICAgIGZvcm1Db25maWcuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgaWYgKHNlY3Rpb24udGl0bGUpIHtcbiAgICAgICAgc2VjdGlvbi50aXRsZSA9IF90KHNlY3Rpb24udGl0bGUpO1xuICAgICAgfVxuICAgICAgaWYgKHNlY3Rpb24uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvbiA9IF90KHNlY3Rpb24uZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEubGFiZWwpIHtcbiAgICAgICAgICBpbnB1dC5kYXRhLmxhYmVsID0gX3QoaW5wdXQuZGF0YS5sYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnB1dCB0ZXh0XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgaW5wdXQuZGF0YS5wbGFjZWhvbGRlciA9IF90KGlucHV0LmRhdGEucGxhY2Vob2xkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbnB1dCBjaGVja2JveFxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGlucHV0LmRhdGEuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tib3gubGFiZWwgPSBfdChjaGVja2JveC5sYWJlbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5wdXQgc2VsZWN0XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIGlucHV0LmRhdGEub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5sYWJlbCA9IF90KG9wdGlvbi5sYWJlbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=