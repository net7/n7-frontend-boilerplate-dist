import { LayoutDataSource, _t } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import 'leaflet.markercluster';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
export class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        this.defaultDescription = '';
        this.eventDescription = '';
        this.hasMap = false;
        this.mapHeader = _t('timeline#mapheader');
        this.timelineListener$ = new Subject();
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe((d) => {
            this.timelineData = d;
            this.loading.timeline = false;
            this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$
            .pipe(first())
            .subscribe((timeline) => {
            this.timelineListener$.next(timeline);
        });
        // update the description
        this.communication.request$('timelineDescription', {
            method: 'GET',
            onError: (e) => console.error(e),
        }).subscribe((d) => {
            this.defaultDescription = d.text;
            this.loadDefaults(false);
        });
    }
    loadDefaults(navigate) {
        const timelineInstance = this.getWidgetDataSource('mr-timeline').timeline;
        if (timelineInstance) {
            timelineInstance.setSelection([]);
        }
        this.eventDescription = this.defaultDescription;
        this.eventHeader = '';
        this.hasMap = false;
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/time-events'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            const { 
            /* eslint-disable */
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header, } = res.sections;
            if (placesData) {
                this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                this.hasMap = false;
            }
            if (bibData) {
                this.bibliographyData = bibData;
            }
            else {
                this.bibliographyData = undefined;
            }
            if (witnessData) {
                this.collectionWitnessData = {
                    items: witnessData.items.map((witness) => ({
                        title: witness.title,
                        anchor: {
                            href: witness.link,
                        }
                    })),
                    header: witnessData.header
                };
            }
            else {
                this.collectionWitnessData = undefined;
            }
            if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                this.collectionWorksData = {
                    header: worksData.header,
                    items: worksData.items.map((item) => ({
                        image: item.image,
                        title: item.title,
                        anchor: item.link ? {
                            href: item.link,
                        } : undefined,
                        text: item.text,
                    }))
                };
            }
            else {
                this.collectionWorksData = undefined;
            }
            if (gallery) {
                this.collectionGalleryData = gallery;
            }
            else {
                this.collectionGalleryData = undefined;
            }
            if (header) {
                this.eventDescription = header.content;
                this.eventHeader = res.title;
                this.one('mr-year-header').update({
                    title: { main: { text: header.title } },
                    actions: {
                        buttons: [{
                                text: '',
                                icon: 'n7-icon-close',
                                anchor: {
                                    payload: 'closebutton'
                                }
                            }]
                    }
                });
            }
            this.loading.resourceDetails = false;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3ZDLE9BQU8sdUJBQXVCLENBQUM7QUFHL0Isa0VBQWtFO0FBRWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBZVMsWUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsY0FBUyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLHNCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFBO0lBb0s3RCxDQUFDO0lBeElDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJ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SUFBSSxFQUFFLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLGVBQWU7Z0NBQ3JCLE1BQU0sRUFBRTtvQ0FDTixPQUFPLEVBQUUsYUFBYTtpQ0FDdkI7NkJBQ0YsQ0FBQztxQkFDSDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3Zpcy10aW1lbGluZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0UmVzb3VyY2VSZXNwb25zZSB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LnR5cGVzJztcblxuLy8gZGVtbyBwYWdlOiBodHRwOi8vbG9jYWxob3N0OjQyMDAvdGltZWxpbmUvMjk5Mi9taXNzaW9uZS12ZW5lemlhXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc7XG5cbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgcHVibGljIGxvYWRpbmcgPSB7XG4gICAgcmVzb3VyY2VEZXRhaWxzOiB0cnVlLFxuICAgIHRpbWVsaW5lOiB0cnVlLFxuICB9XG5cbiAgcHVibGljIGRlZmF1bHREZXNjcmlwdGlvbiA9ICcnO1xuXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBldmVudERlc2NyaXB0aW9uID0gJydcblxuICBwdWJsaWMgdGltZWxpbmVEYXRhOiBUaW1lbGluZURhdGE7XG5cbiAgcHVibGljIGhhc01hcCA9IGZhbHNlO1xuXG4gIHB1YmxpYyByb3V0ZTtcblxuICBwdWJsaWMgbWFwSGVhZGVyID0gX3QoJ3RpbWVsaW5lI21hcGhlYWRlcicpO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxpc3RlbmVyJDogU3ViamVjdDxUaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpXG5cbiAgcHVibGljIGJpYmxpb2dyYXBoeURhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiB7XG4gICAgICBwYXlsb2FkPzoge1xuICAgICAgICBhY3Rpb246IHN0cmluZztcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgfTtcbiAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgfVtdO1xuICB9XG5cbiAgcHVibGljIGNvbGxlY3Rpb25Xb3Jrc0RhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcbiAgfTtcblxuICBwdWJsaWMgY29sbGVjdGlvbkdhbGxlcnlEYXRhO1xuXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xuXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZWxpbmVcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XG4gICAgICB0aGlzLmxvYWRpbmcudGltZWxpbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcbiAgICB9KTtcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmVMb2FkZWQkXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgodGltZWxpbmU6IFRpbWVsaW5lKSA9PiB7XG4gICAgICAgIHRoaXMudGltZWxpbmVMaXN0ZW5lciQubmV4dCh0aW1lbGluZSk7XG4gICAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb25cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lRGVzY3JpcHRpb24nLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbiA9IGQudGV4dDtcbiAgICAgIHRoaXMubG9hZERlZmF1bHRzKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWREZWZhdWx0cyhuYXZpZ2F0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHRpbWVsaW5lSW5zdGFuY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmUgYXMgVGltZWxpbmU7XG4gICAgaWYgKHRpbWVsaW5lSW5zdGFuY2UpIHtcbiAgICAgIHRpbWVsaW5lSW5zdGFuY2Uuc2V0U2VsZWN0aW9uKFtdKTtcbiAgICB9XG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xuICAgIHRoaXMuaGFzTWFwID0gZmFsc2U7XG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICBpZiAobmF2aWdhdGUpIHRoaXMubG9jYXRpb24uZ28oJy90aW1lbGluZS8nKTtcbiAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBfdCh0aGlzLnBhZ2VDb25maWcudGl0bGUpIH0gfSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHJlczogR2V0UmVzb3VyY2VSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgJ2NvbGxlY3Rpb24tYmlibGlvZ3JhcGh5JzogYmliRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXdvcmtzJzogd29ya3NEYXRhLFxuICAgICAgICBnYWxsZXJ5LFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgIH0gPSByZXMuc2VjdGlvbnM7XG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xuICAgICAgICB0aGlzLmhhc01hcCA9IHRydWU7XG4gICAgICAgIHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUocGxhY2VzRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGJpYkRhdGEpIHtcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gYmliRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRuZXNzRGF0YSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHtcbiAgICAgICAgICBpdGVtczogd2l0bmVzc0RhdGEuaXRlbXMubWFwKCh3aXRuZXNzOiB7XG4gICAgICAgICAgICBsaW5rOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZztcbiAgICAgICAgICB9KTogSXRlbVByZXZpZXdEYXRhID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogd2l0bmVzcy50aXRsZSxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiB3aXRuZXNzLmxpbmssXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGhlYWRlcjogd2l0bmVzc0RhdGEuaGVhZGVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICh3b3Jrc0RhdGE/Lml0ZW1zKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHtcbiAgICAgICAgICBoZWFkZXI6IHdvcmtzRGF0YS5oZWFkZXIsXG4gICAgICAgICAgaXRlbXM6IHdvcmtzRGF0YS5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSBnYWxsZXJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xuICAgICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnRpdGxlO1xuICAgICAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogaGVhZGVyLnRpdGxlIH0gfSxcbiAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZy5yZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl19