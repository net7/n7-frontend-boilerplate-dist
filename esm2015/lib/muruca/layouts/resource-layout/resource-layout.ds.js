import { LayoutDataSource, _t } from '@n7-frontend/core';
export class MrResourceLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        /** Stores "max height" for the read-more-wrapper from configuration */
        this.readMoreConfig = {
            limit: 130,
            label: _t('readmore#label')
        };
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.tabConfig = this.configuration.get('tabs')[this.pageConfig.tabs];
        this.readMoreConfig.limit = this.configuration.get(this.configId).maxHeight;
        // add translations
        ['top', 'content'].forEach((type) => {
            this.pageConfig.sections[type] = this.pageConfig.sections[type].map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title) })));
        });
    }
    /** Request the configured widgets data */
    pageRequest$(id, onError) {
        const { top, content } = this.pageConfig.sections;
        const sections = top.concat(content);
        return this.communication.request$('resource', {
            onError,
            method: 'POST',
            params: {
                id,
                type: this.pageConfig.type,
                sections: sections.map((s) => s.id),
            }
        });
    }
    handleResponse(response) {
        this.initSections(response);
        this.updateHeadTitle(response);
    }
    /** Load all the configured widgets */
    initSections(response) {
        const { top, content } = this.pageConfig.sections;
        const sections = top.concat(content);
        sections.forEach(({ id }) => {
            const widgetDataSource = this.getWidgetDataSource(id);
            if (!widgetDataSource)
                return;
            const responseSection = response.sections[id];
            // set id
            widgetDataSource.id = id;
            // update data
            if (responseSection) {
                this.one(id).update(responseSection);
            }
        });
        // update tabs
        if (this.tabConfig) {
            const tabSection = sections.find(({ type }) => type === 'tabs');
            this.one(tabSection.id).updateOptions({
                id: this.id,
                root: this.pageConfig.tabs,
                slug: this.slug,
                currentTab: this.tab
            });
            this.one(tabSection.id).update(this.tabConfig);
        }
    }
    updateHeadTitle({ title: resourceTitle }) {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, pageTitle, resourceTitle].join(' > '));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXpELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBbUJFLHVFQUF1RTtRQUNoRSxtQkFBYyxHQUdqQjtZQUNGLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFBO1FBRU0sZUFBVSxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTdDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBMEVsRSxDQUFDO0lBeEVDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUss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R0FBRzthQUNyQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7UUFDOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc6IGFueTtcblxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XG5cbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgcHVibGljIHRhYjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XG5cbiAgLyoqIFN0b3JlcyBcIm1heCBoZWlnaHRcIiBmb3IgdGhlIHJlYWQtbW9yZS13cmFwcGVyIGZyb20gY29uZmlndXJhdGlvbiAqL1xuICBwdWJsaWMgcmVhZE1vcmVDb25maWc6IHtcbiAgICBsaW1pdDogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gIH0gPSB7XG4gICAgbGltaXQ6IDEzMCwgLy8gZGVmYXVsdCBsaW1pdFxuICAgIGxhYmVsOiBfdCgncmVhZG1vcmUjbGFiZWwnKVxuICB9XG5cbiAgcHVibGljIGVycm9yVGl0bGUgPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl90aXRsZScpO1xuXG4gIHB1YmxpYyBlcnJvckRlc2NyaXB0aW9uID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfZGVzY3JpcHRpb24nKTtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuICAgIHRoaXMudGFiQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgndGFicycpW3RoaXMucGFnZUNvbmZpZy50YWJzXTtcbiAgICB0aGlzLnJlYWRNb3JlQ29uZmlnLmxpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKS5tYXhIZWlnaHQ7XG5cbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXG4gICAgWyd0b3AnLCAnY29udGVudCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XG4gICAgICAgIC4uLnNlY3Rpb24sXG4gICAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlcXVlc3QgdGhlIGNvbmZpZ3VyZWQgd2lkZ2V0cyBkYXRhICovXG4gIHBhZ2VSZXF1ZXN0JChpZCwgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3IsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogdGhpcy5wYWdlQ29uZmlnLnR5cGUsXG4gICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucy5tYXAoKHMpID0+IHMuaWQpLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB0aGlzLmluaXRTZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqIExvYWQgYWxsIHRoZSBjb25maWd1cmVkIHdpZGdldHMgKi9cbiAgcHJpdmF0ZSBpbml0U2VjdGlvbnMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xuICAgICAgaWYgKCF3aWRnZXREYXRhU291cmNlKSByZXR1cm47XG4gICAgICBjb25zdCByZXNwb25zZVNlY3Rpb24gPSByZXNwb25zZS5zZWN0aW9uc1tpZF07XG4gICAgICAvLyBzZXQgaWRcbiAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpZDtcbiAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICBpZiAocmVzcG9uc2VTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUocmVzcG9uc2VTZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSB0YWJzXG4gICAgaWYgKHRoaXMudGFiQ29uZmlnKSB7XG4gICAgICBjb25zdCB0YWJTZWN0aW9uID0gc2VjdGlvbnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09ICd0YWJzJyk7XG4gICAgICB0aGlzLm9uZSh0YWJTZWN0aW9uLmlkKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHJvb3Q6IHRoaXMucGFnZUNvbmZpZy50YWJzLFxuICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgIGN1cnJlbnRUYWI6IHRoaXMudGFiXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZSh0aGlzLnRhYkNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIZWFkVGl0bGUoeyB0aXRsZTogcmVzb3VyY2VUaXRsZSB9KSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgcGFnZVRpdGxlLCByZXNvdXJjZVRpdGxlXS5qb2luKCcgPiAnKSk7XG4gIH1cbn1cbiJdfQ==