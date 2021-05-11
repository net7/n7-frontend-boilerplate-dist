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
        this.defaultDescription = '';
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
        this.eventDescription = this.defaultDescription;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CLE9BQU8sdUJBQXVCLENBQUM7QUFHL0IsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFBbkQ7O1FBZVMsWUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBb0pwRCxDQUFDO0lBeEhDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsaUJBQWlCO1FBQ2pC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SUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLE9BQU8sRUFBRSxDQUFDO2dDQUNSLElBQUksRUFBRSxFQUFFO2dDQUNSLElBQUksRUFBRSxlQUFlO2dDQUNyQixNQUFNLEVBQUU7b0NBQ04sT0FBTyxFQUFFLGFBQWE7aUNBQ3ZCOzZCQUNGLENBQUM7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldFJlc291cmNlUmVzcG9uc2UgfSBmcm9tICcuL21hcC1sYXlvdXQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTXJNYXBMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcGFnZUNvbmZpZztcblxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICBwdWJsaWMgbG9hZGluZyA9IHtcbiAgICByZXNvdXJjZURldGFpbHM6IHRydWUsXG4gICAgdGltZWxpbmU6IHRydWUsXG4gIH1cblxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xuXG4gIHB1YmxpYyByb3V0ZTtcblxuICBwdWJsaWMgbWFwTGlzdGVuZXIkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczoge1xuICAgICAgcGF5bG9hZD86IHtcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIH07XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIH1bXTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xsZWN0aW9uV29ya3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH1cblxuICBwdWJsaWMgY29sbGVjdGlvbldpdG5lc3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH07XG5cbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcblxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG5cbiAgICAvLyB1cGRhdGUgdGhlIG1hcFxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnbWFwJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKCh7IGRhdGFTZXQgfSkgPT4ge1xuICAgICAgaWYgKGRhdGFTZXQpIHsgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShkYXRhU2V0KTsgfVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnbXItbWFwJykubWFwTG9hZGVkJFxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgbWFwLCBtYXJrZXJzIH0pID0+IHtcbiAgICAgICAgdGhpcy5tYXBMaXN0ZW5lciQubmV4dCh7IG1hcCwgbWFya2VycyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xuICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvbWFwLycpO1xuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IF90KHRoaXMucGFnZUNvbmZpZy50aXRsZSkgfSB9LFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFnZURldGFpbHMoaWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZCwgdHlwZTogJ3ZpZXdzL3BsYWNlcydcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHJlczogR2V0UmVzb3VyY2VSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgJ2NvbGxlY3Rpb24tYmlibGlvZ3JhcGh5JzogYmliRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXdvcmtzJzogd29ya3NEYXRhLFxuICAgICAgICBnYWxsZXJ5LFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgIH0gPSByZXMuc2VjdGlvbnM7XG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xuICAgICAgICAvLyB0aGlzLmhhc01hcCA9IHRydWU7XG4gICAgICAgIHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUocGxhY2VzRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLmhhc01hcCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGJpYkRhdGEpIHtcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gYmliRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRuZXNzRGF0YSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHtcbiAgICAgICAgICBpdGVtczogd2l0bmVzc0RhdGEuaXRlbXMubWFwKCh3aXRuZXNzOiB7XG4gICAgICAgICAgICBsaW5rOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZztcbiAgICAgICAgICB9KTogSXRlbVByZXZpZXdEYXRhID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogd2l0bmVzcy50aXRsZSxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiB3aXRuZXNzLmxpbmssXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGhlYWRlcjogd2l0bmVzc0RhdGEuaGVhZGVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICh3b3Jrc0RhdGE/Lml0ZW1zKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHtcbiAgICAgICAgICBoZWFkZXI6IHdvcmtzRGF0YS5oZWFkZXIsXG4gICAgICAgICAgaXRlbXM6IHdvcmtzRGF0YS5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSBnYWxsZXJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xuICAgICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnRpdGxlO1xuICAgICAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogaGVhZGVyLnRpdGxlIH0gfSxcbiAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZy5yZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl19