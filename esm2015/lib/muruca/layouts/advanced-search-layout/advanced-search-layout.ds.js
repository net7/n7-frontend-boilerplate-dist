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
    addTranslations(formConfig) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBQTlEOztRQVNZLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBd0c5QixDQUFDO0lBbEdDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakQsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxD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Q0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsZUFBZTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDcEMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgY2xvbmVEZWVwLCBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbiAgcHVibGljIHBhZ2VDb25maWc7XHJcblxyXG4gIHB1YmxpYyBmb3JtOiBNckZvcm1Nb2RlbDtcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xyXG5cclxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcclxuICAgIHRoaXMuYWRkVHJhbnNsYXRpb25zKHRoaXMucGFnZUNvbmZpZy5mb3JtQ29uZmlnKTtcclxuXHJcbiAgICAvLyBpbml0IGZvcm1cclxuICAgIHRoaXMuZm9ybSA9IG5ldyBNckZvcm1Nb2RlbCgpO1xyXG4gICAgLy8gZm9ybSBpbml0XHJcbiAgICB0aGlzLmZvcm0uaW5pdCh0aGlzLnBhZ2VDb25maWcuZm9ybUNvbmZpZyk7XHJcbiAgICAvLyBzZXQgaW5pdGlhbCBzdGF0ZVxyXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjbG9uZURlZXAodGhpcy5mb3JtLmdldFN0YXRlKCkpO1xyXG5cclxuICAgIHRoaXMub25lKCdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJykudXBkYXRlKHtcclxuICAgICAgZm9ybTogdGhpcy5mb3JtXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVIZWFkVGl0bGUoKSB7XHJcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKV0uam9pbignID4gJykpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoeyBzdGF0ZSB9KSB7XHJcbiAgICBpZiAoIWlzRW1wdHkoc3RhdGUpKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0c1VybCB9ID0gdGhpcy5wYWdlQ29uZmlnO1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhzdGF0ZSlcclxuICAgICAgICAuZmlsdGVyKChrZXkpID0+ICEoc3RhdGVba2V5XS5kaXNhYmxlZCB8fCBpc0VtcHR5KHN0YXRlW2tleV0udmFsdWUpKSlcclxuICAgICAgICAubWFwKChrZXkpID0+ICh7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShzdGF0ZVtrZXldLnZhbHVlKVxyXG4gICAgICAgICAgICA/IHN0YXRlW2tleV0udmFsdWUuam9pbignLCcpXHJcbiAgICAgICAgICAgIDogc3RhdGVba2V5XS52YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKTtcclxuICAgICAgY29uc3QgdXJsID0gYCR7cmVzdWx0c1VybH0/JHtwYXJhbXMuam9pbignJicpfWA7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXNldCgpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5pdGlhbFN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLmluaXRpYWxTdGF0ZVtrZXldKTtcclxuICAgICAgdGhpcy5mb3JtLmdldElucHV0KGtleSkuc2V0U3RhdGUoaW5wdXRTdGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhZGRUcmFuc2xhdGlvbnMoZm9ybUNvbmZpZykge1xyXG4gICAgLy8gc3VibWl0XHJcbiAgICBpZiAoZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24pIHtcclxuICAgICAgZm9ybUNvbmZpZy5zdWJtaXRCdXR0b24ubGFiZWwgPSBfdChmb3JtQ29uZmlnLnN1Ym1pdEJ1dHRvbi5sYWJlbCk7XHJcbiAgICB9XHJcbiAgICAvLyByZXNldFxyXG4gICAgaWYgKGZvcm1Db25maWcucmVzZXRCdXR0b24pIHtcclxuICAgICAgZm9ybUNvbmZpZy5yZXNldEJ1dHRvbi5sYWJlbCA9IF90KGZvcm1Db25maWcucmVzZXRCdXR0b24ubGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1Db25maWcuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBpZiAoc2VjdGlvbi50aXRsZSkge1xyXG4gICAgICAgIHNlY3Rpb24udGl0bGUgPSBfdChzZWN0aW9uLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2VjdGlvbi5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHNlY3Rpb24uZGVzY3JpcHRpb24gPSBfdChzZWN0aW9uLmRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC5kYXRhLmxhYmVsKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLmxhYmVsID0gX3QoaW5wdXQuZGF0YS5sYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbnB1dCB0ZXh0XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgaWYgKGlucHV0LmRhdGEucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZGF0YS5wbGFjZWhvbGRlciA9IF90KGlucHV0LmRhdGEucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnB1dCBjaGVja2JveFxyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tib3gubGFiZWwgPSBfdChjaGVja2JveC5sYWJlbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5wdXQgc2VsZWN0XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgICAgICBpbnB1dC5kYXRhLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5sYWJlbCA9IF90KG9wdGlvbi5sYWJlbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==