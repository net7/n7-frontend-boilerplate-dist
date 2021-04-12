import { LayoutDataSource, _t } from '@n7-frontend/core';
import { cloneDeep, isEmpty } from 'lodash';
import { MrFormModel } from '../../models/form.model';
export class MrAdvancedSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.initialState = {};
    }
    onInit(payload) {
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
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    onSubmit({ state }) {
        if (!isEmpty(state)) {
            const { resultsUrl } = this.pageConfig;
            const params = Object.keys(state)
                .filter((key) => !(state[key].disabled || isEmpty(state[key].value)))
                .map((key) => ({
                key,
                value: Array.isArray(state[key].value)
                    ? state[key].value.join(',')
                    : state[key].value
            }))
                .map(({ key, value }) => `${key}=${encodeURIComponent(value)}`);
            const url = `${resultsUrl}?${params.join('&')}`;
            window.open(url, '_blank');
        }
    }
    onReset() {
        Object.keys(this.initialState).forEach((key) => {
            const inputState = cloneDeep(this.initialState[key]);
            this.form.getInput(key).setState(inputState);
        });
    }
    addTranslations(pageConfig) {
        const { formConfig } = pageConfig;
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
        formConfig.sections.forEach((section) => {
            if (section.title) {
                section.title = _t(section.title);
            }
            if (section.description) {
                section.description = _t(section.description);
            }
            section.inputs.forEach((input) => {
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
                    input.data.checkboxes.forEach((checkbox) => {
                        checkbox.label = _t(checkbox.label);
                    });
                }
                // input select
                if (input.type === 'select') {
                    input.data.options.forEach((option) => {
                        option.label = _t(option.label);
                    });
                }
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBQTlEOztRQVNZLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBMkc5QixDQUFDO0lBckdDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxD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S0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7d0JBQ3pDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDcEMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgY2xvbmVEZWVwLCBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbiAgcHVibGljIHBhZ2VDb25maWc7XHJcblxyXG4gIHB1YmxpYyBmb3JtOiBNckZvcm1Nb2RlbDtcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xyXG5cclxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcclxuICAgIHRoaXMuYWRkVHJhbnNsYXRpb25zKHRoaXMucGFnZUNvbmZpZyk7XHJcblxyXG4gICAgLy8gaW5pdCBmb3JtXHJcbiAgICB0aGlzLmZvcm0gPSBuZXcgTXJGb3JtTW9kZWwoKTtcclxuICAgIC8vIGZvcm0gaW5pdFxyXG4gICAgdGhpcy5mb3JtLmluaXQodGhpcy5wYWdlQ29uZmlnLmZvcm1Db25maWcpO1xyXG4gICAgLy8gc2V0IGluaXRpYWwgc3RhdGVcclxuICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gY2xvbmVEZWVwKHRoaXMuZm9ybS5nZXRTdGF0ZSgpKTtcclxuXHJcbiAgICB0aGlzLm9uZSgnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIGZvcm06IHRoaXMuZm9ybVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlSGVhZFRpdGxlKCkge1xyXG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcclxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIF90KHBhZ2VUaXRsZSldLmpvaW4oJyA+ICcpKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KHsgc3RhdGUgfSkge1xyXG4gICAgaWYgKCFpc0VtcHR5KHN0YXRlKSkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdHNVcmwgfSA9IHRoaXMucGFnZUNvbmZpZztcclxuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoc3RhdGUpXHJcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiAhKHN0YXRlW2tleV0uZGlzYWJsZWQgfHwgaXNFbXB0eShzdGF0ZVtrZXldLnZhbHVlKSkpXHJcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgICAga2V5LFxyXG4gICAgICAgICAgdmFsdWU6IEFycmF5LmlzQXJyYXkoc3RhdGVba2V5XS52YWx1ZSlcclxuICAgICAgICAgICAgPyBzdGF0ZVtrZXldLnZhbHVlLmpvaW4oJywnKVxyXG4gICAgICAgICAgICA6IHN0YXRlW2tleV0udmFsdWVcclxuICAgICAgICB9KSlcclxuICAgICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YCk7XHJcbiAgICAgIGNvbnN0IHVybCA9IGAke3Jlc3VsdHNVcmx9PyR7cGFyYW1zLmpvaW4oJyYnKX1gO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzZXQoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmluaXRpYWxTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0U3RhdGUgPSBjbG9uZURlZXAodGhpcy5pbml0aWFsU3RhdGVba2V5XSk7XHJcbiAgICAgIHRoaXMuZm9ybS5nZXRJbnB1dChrZXkpLnNldFN0YXRlKGlucHV0U3RhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkVHJhbnNsYXRpb25zKHBhZ2VDb25maWcpIHtcclxuICAgIGNvbnN0IHsgZm9ybUNvbmZpZyB9ID0gcGFnZUNvbmZpZztcclxuICAgIC8vIHBhZ2UgdGl0bGVcclxuICAgIHBhZ2VDb25maWcudGl0bGUgPSBfdChwYWdlQ29uZmlnLnRpdGxlKTtcclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgaWYgKGZvcm1Db25maWcuc3VibWl0QnV0dG9uKSB7XHJcbiAgICAgIGZvcm1Db25maWcuc3VibWl0QnV0dG9uLmxhYmVsID0gX3QoZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24ubGFiZWwpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzZXRcclxuICAgIGlmIChmb3JtQ29uZmlnLnJlc2V0QnV0dG9uKSB7XHJcbiAgICAgIGZvcm1Db25maWcucmVzZXRCdXR0b24ubGFiZWwgPSBfdChmb3JtQ29uZmlnLnJlc2V0QnV0dG9uLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgaWYgKHNlY3Rpb24udGl0bGUpIHtcclxuICAgICAgICBzZWN0aW9uLnRpdGxlID0gX3Qoc2VjdGlvbi50aXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlY3Rpb24uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICBzZWN0aW9uLmRlc2NyaXB0aW9uID0gX3Qoc2VjdGlvbi5kZXNjcmlwdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXQuZGF0YS5sYWJlbCkge1xyXG4gICAgICAgICAgaW5wdXQuZGF0YS5sYWJlbCA9IF90KGlucHV0LmRhdGEubGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5wdXQgdGV4dFxyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIGlmIChpbnB1dC5kYXRhLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmRhdGEucGxhY2Vob2xkZXIgPSBfdChpbnB1dC5kYXRhLnBsYWNlaG9sZGVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5wdXQgY2hlY2tib3hcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgaW5wdXQuZGF0YS5jaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmxhYmVsID0gX3QoY2hlY2tib3gubGFiZWwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlucHV0IHNlbGVjdFxyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgaW5wdXQuZGF0YS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb24ubGFiZWwgPSBfdChvcHRpb24ubGFiZWwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=