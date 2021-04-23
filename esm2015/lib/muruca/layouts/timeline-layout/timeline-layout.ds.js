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
            if (gallery) {
                this.collectionGalleryData = gallery;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3ZDLE9BQU8sdUJBQXVCLENBQUM7QUFHL0Isa0VBQWtFO0FBRWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBZVMsWUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsY0FBUyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLHNCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFBO0lBd0o3RCxDQUFDO0lBNUhDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJ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QyxLQUFLO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3lCQUNoQixDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDaEIsQ0FBQyxDQUFDO2lCQUNKLENBQUM7YUFDSDtZQUNELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUM7YUFDdEM7WUFDRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO29CQUNoQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN2QyxPQUFPLEVBQUU7d0JBQ1AsT0FBTyxFQUFFLENBQUM7Z0NBQ1IsSUFBSSxFQUFFLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLGVBQWU7Z0NBQ3JCLE1BQU0sRUFBRTtvQ0FDTixPQUFPLEVBQUUsYUFBYTtpQ0FDdkI7NkJBQ0YsQ0FBQztxQkFDSDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEsIFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldFJlc291cmNlUmVzcG9uc2UgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC50eXBlcyc7XHJcblxyXG4vLyBkZW1vIHBhZ2U6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC90aW1lbGluZS8yOTkyL21pc3Npb25lLXZlbmV6aWFcclxuXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBwYWdlQ29uZmlnO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHJcbiAgcHVibGljIGxvYWRpbmcgPSB7XHJcbiAgICByZXNvdXJjZURldGFpbHM6IHRydWUsXHJcbiAgICB0aW1lbGluZTogdHJ1ZSxcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWZhdWx0RGVzY3JpcHRpb24gPSAnJztcclxuXHJcbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBldmVudERlc2NyaXB0aW9uID0gJydcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lRGF0YTogVGltZWxpbmVEYXRhO1xyXG5cclxuICBwdWJsaWMgaGFzTWFwID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyByb3V0ZTtcclxuXHJcbiAgcHVibGljIG1hcEhlYWRlciA9IF90KCd0aW1lbGluZSNtYXBoZWFkZXInKTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTGlzdGVuZXIkOiBTdWJqZWN0PFRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgcHVibGljIGJpYmxpb2dyYXBoeURhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczoge1xyXG4gICAgICBwYXlsb2FkPzoge1xyXG4gICAgICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25Xb3Jrc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldpdG5lc3NEYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xyXG4gICAgaXRlbXM6IEl0ZW1QcmV2aWV3RGF0YVtdO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uR2FsbGVyeURhdGE7XHJcblxyXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xyXG5cclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIHRpbWVsaW5lXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKVxyXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVEYXRhID0gZDtcclxuICAgICAgdGhpcy5sb2FkaW5nLnRpbWVsaW5lID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lbGluZTogVGltZWxpbmUpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lRGVzY3JpcHRpb24nLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxyXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uID0gZC50ZXh0O1xyXG4gICAgICB0aGlzLmxvYWREZWZhdWx0cyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWREZWZhdWx0cyhuYXZpZ2F0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XHJcbiAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL3RpbWVsaW5lLycpO1xyXG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBfdCh0aGlzLnBhZ2VDb25maWcudGl0bGUpIH0gfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFnZURldGFpbHMoaWQpIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcclxuICAgICAgfVxyXG4gICAgfSkuc3Vic2NyaWJlKChyZXM6IEdldFJlc291cmNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24tYmlibGlvZ3JhcGh5JzogYmliRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi1wbGFjZXMnOiBwbGFjZXNEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXdpdG5lc3Nlcyc6IHdpdG5lc3NEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXdvcmtzJzogd29ya3NEYXRhLFxyXG4gICAgICAgIGdhbGxlcnksXHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgICAgfSA9IHJlcy5zZWN0aW9ucztcclxuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShwbGFjZXNEYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChiaWJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gYmliRGF0YTtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2l0bmVzc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHtcclxuICAgICAgICAgIGl0ZW1zOiB3aXRuZXNzRGF0YS5pdGVtcy5tYXAoKHdpdG5lc3M6IHtcclxuICAgICAgICAgICAgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICB9KTogSXRlbVByZXZpZXdEYXRhID0+ICh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB3aXRuZXNzLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiB3aXRuZXNzLmxpbmssXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGhlYWRlcjogd2l0bmVzc0RhdGEuaGVhZGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAod29ya3NEYXRhPy5pdGVtcykge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHtcclxuICAgICAgICAgIGhlYWRlcjogd29ya3NEYXRhLmhlYWRlcixcclxuICAgICAgICAgIGl0ZW1zOiB3b3Jrc0RhdGEuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcclxuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IGdhbGxlcnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogaGVhZGVyLnRpdGxlIH0gfSxcclxuICAgICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZGluZy5yZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=