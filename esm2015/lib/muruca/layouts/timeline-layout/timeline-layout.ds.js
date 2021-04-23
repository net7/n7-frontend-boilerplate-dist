import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import 'leaflet.markercluster';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
export class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loadedResourceDetails = false;
        this.defaultDescription = '';
        this.eventDescription = '';
        this.hasMap = false;
        this.timelineListener$ = new Subject();
        this.bibliographyMock = [
            { title: 'M.J.L. Hocker, Bibliotheca Heilsbronnensis sive Catalogus librorum omnium..., Nkirnberg 1731, 56 n. 68 ' },
            { title: 'J.C. Irmischer, Handschriften-Katalog der Kgl. Universitàtsbibliothek Erlangen, Frankfurt a. M.-Erlangen 1852, 191-192 n. 686 ' },
            { title: 'H. Flischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
            { title: 'A. Sottili, I codici del Petrarca nella Germania Occidentale, in «IMU», X (1967), pp. 486-487 ' },
            { title: 'F. Petrarca, Senile V 2, a cura di M. Berté, Firenze 1998, pp. 38-39 ' },
            { title: 'H. Fischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
        ];
        this.connectedMapsMock = [
            { title: 'Kunyu Wanguo Quantu', text: 'Complete Map of all mountains and seas', image: '/assets/mocks/paper.png' }
        ];
        this.images = [
            'https://i.imgur.com/WM3EG9d.png',
            'https://i.imgur.com/ZDQmlnX.png',
            'https://i.imgur.com/HhKxoZb.png',
            'https://i.imgur.com/c3tonAj.png',
            'https://i.imgur.com/Ef7izGP.png',
            'https://i.imgur.com/8Xpzoig.png',
            'https://i.imgur.com/yhF0LCt.png',
            'https://i.imgur.com/bMfHfEh.png',
        ];
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe((d) => {
            this.timelineData = d;
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
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: 'La vita di Petrarca' } },
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
            'collection-bibliography': bibliographyData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, 
            /* eslint-enable */
            header, title, } = res.sections;
            if (placesData) {
                this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                this.hasMap = false;
            }
            this.eventHeader = header.title;
            this.eventDescription = header.content;
            this.one('mr-year-header').update({
                title: { main: { text: title } },
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
            this.loadedResourceDetails = true;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLdkMsT0FBTyx1QkFBdUIsQ0FBQztBQUUvQixrRUFBa0U7QUFFbEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUF4RDs7UUFhVSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFFL0IsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWlCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFcEQscUJBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyxzQkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sV0FBTSxHQUFhO1lBQ3hCLGlDQUFpQztZ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QixFQUFFLGdCQUFnQixFQUMzQyxtQkFBbUIsRUFBRSxVQUFVLEVBQy9CLHNCQUFzQixFQUFFLFdBQVcsRUFDbkMsa0JBQWtCLEVBQUUsU0FBUztZQUM3QixtQkFBbUI7WUFDbkIsTUFBTSxFQUNOLEtBQUssR0FDTixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDakIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGFBQWE7NkJBQ3ZCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuXHJcbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwcml2YXRlIGxvYWRlZFJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcclxuXHJcbiAgcHVibGljIGhhc01hcCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKVxyXG5cclxuICBwdWJsaWMgYmlibGlvZ3JhcGh5TW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXHJcbiAgICB7IHRpdGxlOiAnTS5KLkwuIEhvY2tlciwgQmlibGlvdGhlY2EgSGVpbHNicm9ubmVuc2lzIHNpdmUgQ2F0YWxvZ3VzIGxpYnJvcnVtIG9tbml1bS4uLiwgTmtpcm5iZXJnIDE3MzEsIDU2IG4uIDY4ICcgfSxcclxuICAgIHsgdGl0bGU6ICdKLkMuIElybWlzY2hlciwgSGFuZHNjaHJpZnRlbi1LYXRhbG9nIGRlciBLZ2wuIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBGcmFua2Z1cnQgYS4gTS4tRXJsYW5nZW4gMTg1MiwgMTkxLTE5MiBuLiA2ODYgJyB9LFxyXG4gICAgeyB0aXRsZTogJ0guIEZsaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxyXG4gICAgeyB0aXRsZTogJ0EuIFNvdHRpbGksIEkgY29kaWNpIGRlbCBQZXRyYXJjYSBuZWxsYSBHZXJtYW5pYSBPY2NpZGVudGFsZSwgaW4gwqtJTVXCuywgWCAoMTk2NyksIHBwLiA0ODYtNDg3ICcgfSxcclxuICAgIHsgdGl0bGU6ICdGLiBQZXRyYXJjYSwgU2VuaWxlIFYgMiwgYSBjdXJhIGRpIE0uIEJlcnTDqSwgRmlyZW56ZSAxOTk4LCBwcC4gMzgtMzkgJyB9LFxyXG4gICAgeyB0aXRsZTogJ0guIEZpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXHJcbiAgXTtcclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZE1hcHNNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcclxuICAgIHsgdGl0bGU6ICdLdW55dSBXYW5ndW8gUXVhbnR1JywgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJywgaW1hZ2U6ICcvYXNzZXRzL21vY2tzL3BhcGVyLnBuZycgfVxyXG4gIF1cclxuXHJcbiAgcHVibGljIGltYWdlczogc3RyaW5nW10gPSBbXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9XTTNFRzlkLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9aRFFtbG5YLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9IaEt4b1piLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9jM3RvbkFqLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9FZjdpekdQLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84WHB6b2lnLnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS95aEYwTEN0LnBuZycsXHJcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iTWZIZkVoLnBuZycsXHJcbiAgXVxyXG5cclxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIHRpbWVsaW5lXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKVxyXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVEYXRhID0gZDtcclxuICAgICAgdGhpcy5vbmUoJ21yLXRpbWVsaW5lJykudXBkYXRlKGQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmVMb2FkZWQkXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiBUaW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMaXN0ZW5lciQubmV4dCh0aW1lbGluZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb25cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmVEZXNjcmlwdGlvbicsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XHJcbiAgICAgIHRoaXMubG9hZERlZmF1bHRzKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZXZlbnRIZWFkZXIgPSAnJztcclxuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL3RpbWVsaW5lLycpO1xyXG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiAnTGEgdml0YSBkaSBQZXRyYXJjYScgfSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCwgdHlwZTogJ3ZpZXdzL3RpbWUtZXZlbnRzJ1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJsaW9ncmFwaHlEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgfSA9IHJlcy5zZWN0aW9ucztcclxuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShwbGFjZXNEYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSBoZWFkZXIudGl0bGU7XHJcbiAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xyXG4gICAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlRGV0YWlscyA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19