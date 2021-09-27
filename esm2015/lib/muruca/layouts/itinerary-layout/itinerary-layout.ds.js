import { LayoutDataSource, _t } from '@n7-frontend/core';
export class MrItineraryLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // add translations
        this.pageConfig.sections = this.pageConfig.sections.map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title) })));
    }
    pageRequest$(id, onError) {
        return this.communication.request$('itinerary', {
            onError,
            method: 'GET',
            urlParams: id
        });
    }
    handleResponse(response) {
        this.updateTitle(response);
        this.updateContent(response);
        this.updateMetadata(response);
        this.initSections(response);
        this.updateHeadTitle(response);
    }
    updateTitle({ title }) {
        this.title = title;
    }
    updateContent({ content }) {
        this.content = content;
    }
    updateMetadata(response) {
        this.one('mr-static-metadata').update(response);
    }
    initSections(response) {
        const { sections } = this.pageConfig;
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
    }
    updateHeadTitle({ title: itineraryTitle }) {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle), itineraryTitle].join(' > '));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRpbmVyYXJ5LWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9pdGluZXJhcnktbGF5b3V0L2l0aW5lcmFyeS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS3pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFBekQ7O1FBZVMsZUFBVSxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTdDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBZ0VsRSxDQUFDO0lBOURDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLGlDQUNoRSxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3hCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxZQUFZLENBQUMsRUFBRSxFQUFFLE9BQTJCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzlDLE9BQU87WUFDUCxNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFRO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUFRO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFlBQVksQ0FBQyxRQUFRO1FBQzNCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGdCQUFnQjtnQkFBRSxPQUFPO1lBQzlCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsU0FBUztZQUNULGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDekIsY0FBYztZQUNkLElBQUksZUFBZSxFQUFFO2dCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJJdGluZXJhcnlMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2VcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBwYWdlQ29uZmlnOiBhbnk7XG5cbiAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XG5cbiAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCBudWxsO1xuXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcblxuICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbiA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcblxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcbiAgICB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMgPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoe1xuICAgICAgLi4uc2VjdGlvbixcbiAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxuICAgIH0pKTtcbiAgfVxuXG4gIHBhZ2VSZXF1ZXN0JChpZCwgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdpdGluZXJhcnknLCB7XG4gICAgICBvbkVycm9yLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybFBhcmFtczogaWRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy51cGRhdGVUaXRsZShyZXNwb25zZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZU1ldGFkYXRhKHJlc3BvbnNlKTtcbiAgICB0aGlzLmluaXRTZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaXRsZSh7IHRpdGxlIH0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoeyBjb250ZW50IH0pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZXRhZGF0YShyZXNwb25zZSkge1xuICAgIHRoaXMub25lKCdtci1zdGF0aWMtbWV0YWRhdGEnKS51cGRhdGUocmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2VjdGlvbnMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICAgIGlmICghd2lkZ2V0RGF0YVNvdXJjZSkgcmV0dXJuO1xuICAgICAgY29uc3QgcmVzcG9uc2VTZWN0aW9uID0gcmVzcG9uc2Uuc2VjdGlvbnNbaWRdO1xuICAgICAgLy8gc2V0IGlkXG4gICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgaWYgKHJlc3BvbnNlU2VjdGlvbikge1xuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSh7IHRpdGxlOiBpdGluZXJhcnlUaXRsZSB9KSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKSwgaXRpbmVyYXJ5VGl0bGVdLmpvaW4oJyA+ICcpKTtcbiAgfVxufVxuIl19