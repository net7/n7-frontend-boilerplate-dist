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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLdkMsT0FBTyx1QkFBdUIsQ0FBQztBQUUvQixrRUFBa0U7QUFFbEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUF4RDs7UUFhVSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFFL0IsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWlCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFcEQscUJBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyxzQkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sV0FBTSxHQUFhO1lBQ3hCLGlDQUFpQztZ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QixFQUFFLGdCQUFnQixFQUMzQyxtQkFBbUIsRUFBRSxVQUFVLEVBQy9CLHNCQUFzQixFQUFFLFdBQVcsRUFDbkMsa0JBQWtCLEVBQUUsU0FBUztZQUM3QixtQkFBbUI7WUFDbkIsTUFBTSxFQUNOLEtBQUssR0FDTixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDakIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGFBQWE7NkJBQ3ZCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xuXG4vLyBkZW1vIHBhZ2U6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC90aW1lbGluZS8yOTkyL21pc3Npb25lLXZlbmV6aWFcblxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgcHJpdmF0ZSBsb2FkZWRSZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcblxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xuXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBwdWJsaWMgaGFzTWFwID0gZmFsc2U7XG5cbiAgcHVibGljIHRpbWVsaW5lTGlzdGVuZXIkOiBTdWJqZWN0PFRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcblxuICBwdWJsaWMgYmlibGlvZ3JhcGh5TW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXG4gICAgeyB0aXRsZTogJ00uSi5MLiBIb2NrZXIsIEJpYmxpb3RoZWNhIEhlaWxzYnJvbm5lbnNpcyBzaXZlIENhdGFsb2d1cyBsaWJyb3J1bSBvbW5pdW0uLi4sIE5raXJuYmVyZyAxNzMxLCA1NiBuLiA2OCAnIH0sXG4gICAgeyB0aXRsZTogJ0ouQy4gSXJtaXNjaGVyLCBIYW5kc2NocmlmdGVuLUthdGFsb2cgZGVyIEtnbC4gVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEZyYW5rZnVydCBhLiBNLi1FcmxhbmdlbiAxODUyLCAxOTEtMTkyIG4uIDY4NiAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZsaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxuICAgIHsgdGl0bGU6ICdBLiBTb3R0aWxpLCBJIGNvZGljaSBkZWwgUGV0cmFyY2EgbmVsbGEgR2VybWFuaWEgT2NjaWRlbnRhbGUsIGluIMKrSU1VwrssIFggKDE5NjcpLCBwcC4gNDg2LTQ4NyAnIH0sXG4gICAgeyB0aXRsZTogJ0YuIFBldHJhcmNhLCBTZW5pbGUgViAyLCBhIGN1cmEgZGkgTS4gQmVydMOpLCBGaXJlbnplIDE5OTgsIHBwLiAzOC0zOSAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXG4gIF07XG5cbiAgcHVibGljIGNvbm5lY3RlZE1hcHNNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcbiAgICB7IHRpdGxlOiAnS3VueXUgV2FuZ3VvIFF1YW50dScsIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsIGltYWdlOiAnL2Fzc2V0cy9tb2Nrcy9wYXBlci5wbmcnIH1cbiAgXVxuXG4gIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW1xuICAgICdodHRwczovL2kuaW1ndXIuY29tL1dNM0VHOWQucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9aRFFtbG5YLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vSGhLeG9aYi5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2MzdG9uQWoucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9FZjdpekdQLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vOFhwem9pZy5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL3loRjBMQ3QucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iTWZIZkVoLnBuZycsXG4gIF1cblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcblxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZWxpbmVcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGUoZCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiBUaW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xuICAgICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZURlc2NyaXB0aW9uJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XG4gICAgICB0aGlzLmxvYWREZWZhdWx0cyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbjtcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogJ0xhIHZpdGEgZGkgUGV0cmFyY2EnIH0gfSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgJ2NvbGxlY3Rpb24tYmlibGlvZ3JhcGh5JzogYmlibGlvZ3JhcGh5RGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXdvcmtzJzogd29ya3NEYXRhLFxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdGl0bGUsXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcbiAgICAgICAgdGhpcy5oYXNNYXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYXNNYXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSBoZWFkZXIudGl0bGU7XG4gICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBoZWFkZXIuY29udGVudDtcbiAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VEZXRhaWxzID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19