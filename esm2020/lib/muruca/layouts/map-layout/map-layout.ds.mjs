import { LayoutDataSource, _t } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'leaflet.markercluster';
export class MrMapLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        this.eventDescription = '';
        this.mapListener$ = new Subject();
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // overwrite leaflet options with configuration.libOptions
        this.one('mr-map').updateOptions({ libOptions: this.pageConfig.libOptions });
        // update the map
        this.communication.request$('map', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe(({ dataSet }) => {
            if (dataSet) {
                this.one('mr-map').update(dataSet);
            }
        });
        this.getWidgetDataSource('mr-map').mapLoaded$
            .pipe(first())
            .subscribe(({ map, markers }) => {
            this.mapListener$.next({ map, markers });
        });
    }
    loadDefaults(navigate) {
        this.eventDescription = _t(this.pageConfig.defaultText);
        this.eventHeader = '';
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/map/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/places'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            const { 
            /* eslint-disable */
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header,
            /* eslint-enable */
             } = res.sections;
            if (placesData) {
                // this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                // this.hasMap = false;
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
            if (worksData?.items) {
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
                    title: { main: { text: res.title } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsT0FBTyx1QkFBdUIsQ0FBQztBQUcvQixNQUFNLE9BQU8sYUFBYyxTQUFRLGdCQUFnQjtJQUFuRDs7UUFlUyxZQUFPLEdBQUc7WUFDZixlQUFlLEVBQUUsSUFBSTtZQUNyQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUE7UUFJTSxxQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXNKcEQsQ0FBQztJQTFIQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlELDBEQUEwRDtRQUMxRCxJQUFJ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QUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDcEMsT0FBTyxFQUFFO3dCQUNQLE9BQU8sRUFBRSxDQUFDO2dDQUNSLElBQUksRUFBRSxFQUFFO2dDQUNSLElBQUksRUFBRSxlQUFlO2dDQUNyQixNQUFNLEVBQUU7b0NBQ04sT0FBTyxFQUFFLGFBQWE7aUNBQ3ZCOzZCQUNGLENBQUM7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldFJlc291cmNlUmVzcG9uc2UgfSBmcm9tICcuL21hcC1sYXlvdXQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTXJNYXBMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcGFnZUNvbmZpZztcblxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICBwdWJsaWMgbG9hZGluZyA9IHtcbiAgICByZXNvdXJjZURldGFpbHM6IHRydWUsXG4gICAgdGltZWxpbmU6IHRydWUsXG4gIH1cblxuICBwdWJsaWMgZXZlbnRIZWFkZXI6IHN0cmluZztcblxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXG5cbiAgcHVibGljIHJvdXRlO1xuXG4gIHB1YmxpYyBtYXBMaXN0ZW5lciQ6IFN1YmplY3Q8TWFwPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGJpYmxpb2dyYXBoeURhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiB7XG4gICAgICBwYXlsb2FkPzoge1xuICAgICAgICBhY3Rpb246IHN0cmluZztcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgfTtcbiAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgfVtdO1xuICB9XG5cbiAgcHVibGljIGNvbGxlY3Rpb25Xb3Jrc0RhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcbiAgfTtcblxuICBwdWJsaWMgY29sbGVjdGlvbkdhbGxlcnlEYXRhO1xuXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xuXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcbiAgICAvLyBvdmVyd3JpdGUgbGVhZmxldCBvcHRpb25zIHdpdGggY29uZmlndXJhdGlvbi5saWJPcHRpb25zXG4gICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZU9wdGlvbnMoeyBsaWJPcHRpb25zOiB0aGlzLnBhZ2VDb25maWcubGliT3B0aW9ucyB9KTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdtYXAnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9KS5zdWJzY3JpYmUoKHsgZGF0YVNldCB9KSA9PiB7XG4gICAgICBpZiAoZGF0YVNldCkgeyB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKGRhdGFTZXQpOyB9XG4gICAgfSk7XG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci1tYXAnKS5tYXBMb2FkZWQkXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoeyBtYXAsIG1hcmtlcnMgfSkgPT4ge1xuICAgICAgICB0aGlzLm1hcExpc3RlbmVyJC5uZXh0KHsgbWFwLCBtYXJrZXJzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBfdCh0aGlzLnBhZ2VDb25maWcuZGVmYXVsdFRleHQpO1xuICAgIHRoaXMuZXZlbnRIZWFkZXIgPSAnJztcbiAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL21hcC8nKTtcbiAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBfdCh0aGlzLnBhZ2VDb25maWcudGl0bGUpIH0gfSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy9wbGFjZXMnXG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChyZXM6IEdldFJlc291cmNlUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XG4gICAgICBjb25zdCB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICdjb2xsZWN0aW9uLWJpYmxpb2dyYXBoeSc6IGJpYkRhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXdpdG5lc3Nlcyc6IHdpdG5lc3NEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi13b3Jrcyc6IHdvcmtzRGF0YSxcbiAgICAgICAgZ2FsbGVyeSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcbiAgICAgICAgLy8gdGhpcy5oYXNNYXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy5oYXNNYXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChiaWJEYXRhKSB7XG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IGJpYkRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAod2l0bmVzc0RhdGEpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB7XG4gICAgICAgICAgaXRlbXM6IHdpdG5lc3NEYXRhLml0ZW1zLm1hcCgod2l0bmVzczoge1xuICAgICAgICAgICAgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgfSk6IEl0ZW1QcmV2aWV3RGF0YSA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6IHdpdG5lc3MudGl0bGUsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogd2l0bmVzcy5saW5rLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBoZWFkZXI6IHdpdG5lc3NEYXRhLmhlYWRlclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAod29ya3NEYXRhPy5pdGVtcykge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB7XG4gICAgICAgICAgaGVhZGVyOiB3b3Jrc0RhdGEuaGVhZGVyLFxuICAgICAgICAgIGl0ZW1zOiB3b3Jrc0RhdGEuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcbiAgICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcbiAgICAgICAgICAgICAgaHJlZjogaXRlbS5saW5rLFxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gZ2FsbGVyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBoZWFkZXIuY29udGVudDtcbiAgICAgICAgdGhpcy5ldmVudEhlYWRlciA9IHJlcy50aXRsZTtcbiAgICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHJlcy50aXRsZSB9IH0sXG4gICAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ2Nsb3NlYnV0dG9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcucmVzb3VyY2VEZXRhaWxzID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==