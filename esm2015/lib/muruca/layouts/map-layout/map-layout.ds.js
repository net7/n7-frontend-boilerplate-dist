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
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header, } = res.sections;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CLE9BQU8sdUJBQXVCLENBQUM7QUFHL0IsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFBbkQ7O1FBZVMsWUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBSU0scUJBQWdCLEdBQUcsRUFBRSxDQUFBO1FBSXJCLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFvSnBELENBQUM7SUF4SEMsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENB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Q0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsQ0FBQztnQ0FDUixJQUFJLEVBQUUsRUFBRTtnQ0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0UmVzb3VyY2VSZXNwb25zZSB9IGZyb20gJy4vbWFwLWxheW91dC50eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHBhZ2VDb25maWc7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHtcclxuICAgIHJlc291cmNlRGV0YWlsczogdHJ1ZSxcclxuICAgIHRpbWVsaW5lOiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBldmVudERlc2NyaXB0aW9uID0gJydcclxuXHJcbiAgcHVibGljIHJvdXRlO1xyXG5cclxuICBwdWJsaWMgbWFwTGlzdGVuZXIkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgYmlibGlvZ3JhcGh5RGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHBheWxvYWQ/OiB7XHJcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldvcmtzRGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcblxyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFwXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ21hcCcsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pLnN1YnNjcmliZSgoeyBkYXRhU2V0IH0pID0+IHtcclxuICAgICAgaWYgKGRhdGFTZXQpIHsgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShkYXRhU2V0KTsgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLW1hcCcpLm1hcExvYWRlZCRcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoeyBtYXAsIG1hcmtlcnMgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwTGlzdGVuZXIkLm5leHQoeyBtYXAsIG1hcmtlcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBfdCh0aGlzLnBhZ2VDb25maWcuZGVmYXVsdFRleHQpO1xyXG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xyXG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL21hcC8nKTtcclxuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogX3QodGhpcy5wYWdlQ29uZmlnLnRpdGxlKSB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvcGxhY2VzJ1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlczogR2V0UmVzb3VyY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXHJcbiAgICAgICAgZ2FsbGVyeSxcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xyXG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xyXG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpYkRhdGEpIHtcclxuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSBiaWJEYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2l0bmVzc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHtcclxuICAgICAgICAgIGl0ZW1zOiB3aXRuZXNzRGF0YS5pdGVtcy5tYXAoKHdpdG5lc3M6IHtcclxuICAgICAgICAgICAgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICB9KTogSXRlbVByZXZpZXdEYXRhID0+ICh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB3aXRuZXNzLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiB3aXRuZXNzLmxpbmssXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGhlYWRlcjogd2l0bmVzc0RhdGEuaGVhZGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAod29ya3NEYXRhPy5pdGVtcykge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHtcclxuICAgICAgICAgIGhlYWRlcjogd29ya3NEYXRhLmhlYWRlcixcclxuICAgICAgICAgIGl0ZW1zOiB3b3Jrc0RhdGEuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcclxuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChnYWxsZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSBnYWxsZXJ5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBoZWFkZXIuY29udGVudDtcclxuICAgICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHJlcy50aXRsZSB9IH0sXHJcbiAgICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ2Nsb3NlYnV0dG9uJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRpbmcucmVzb3VyY2VEZXRhaWxzID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19