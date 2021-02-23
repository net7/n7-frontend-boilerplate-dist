import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
export class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loadedResourceDetails = false;
        this.defaultDescription = '';
        this.eventDescription = '';
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
        this.one('mr-map').update({});
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
            this.eventHeader = res.sections.header.title;
            this.eventDescription = res.sections.header.content;
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
            this.loadedResourceDetails = true;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdkMsa0VBQWtFO0FBRWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBYVUsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUl4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsc0JBQWlCLEdBQTBCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFeEQscUJBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyxzQkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sV0FBTSxHQUFhO1lBQ3hCLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FB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V0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BDLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsQ0FBQzs0QkFDUixJQUFJLEVBQUUsRUFBRTs0QkFDUixJQUFJLEVBQUUsZUFBZTs0QkFDckIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxhQUFhOzZCQUN2Qjt5QkFDRixDQUFDO2lCQUNIO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEsIFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuXG4vLyBkZW1vIHBhZ2U6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC90aW1lbGluZS8yOTkyL21pc3Npb25lLXZlbmV6aWFcblxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgcHJpdmF0ZSBsb2FkZWRSZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcblxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xuXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcblxuICBwdWJsaWMgYmlibGlvZ3JhcGh5TW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXG4gICAgeyB0aXRsZTogJ00uSi5MLiBIb2NrZXIsIEJpYmxpb3RoZWNhIEhlaWxzYnJvbm5lbnNpcyBzaXZlIENhdGFsb2d1cyBsaWJyb3J1bSBvbW5pdW0uLi4sIE5raXJuYmVyZyAxNzMxLCA1NiBuLiA2OCAnIH0sXG4gICAgeyB0aXRsZTogJ0ouQy4gSXJtaXNjaGVyLCBIYW5kc2NocmlmdGVuLUthdGFsb2cgZGVyIEtnbC4gVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEZyYW5rZnVydCBhLiBNLi1FcmxhbmdlbiAxODUyLCAxOTEtMTkyIG4uIDY4NiAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZsaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxuICAgIHsgdGl0bGU6ICdBLiBTb3R0aWxpLCBJIGNvZGljaSBkZWwgUGV0cmFyY2EgbmVsbGEgR2VybWFuaWEgT2NjaWRlbnRhbGUsIGluIMKrSU1VwrssIFggKDE5NjcpLCBwcC4gNDg2LTQ4NyAnIH0sXG4gICAgeyB0aXRsZTogJ0YuIFBldHJhcmNhLCBTZW5pbGUgViAyLCBhIGN1cmEgZGkgTS4gQmVydMOpLCBGaXJlbnplIDE5OTgsIHBwLiAzOC0zOSAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXG4gIF07XG5cbiAgcHVibGljIGNvbm5lY3RlZE1hcHNNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcbiAgICB7IHRpdGxlOiAnS3VueXUgV2FuZ3VvIFF1YW50dScsIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsIGltYWdlOiAnL2Fzc2V0cy9tb2Nrcy9wYXBlci5wbmcnIH1cbiAgXVxuXG4gIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW1xuICAgICdodHRwczovL2kuaW1ndXIuY29tL1dNM0VHOWQucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9aRFFtbG5YLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vSGhLeG9aYi5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2MzdG9uQWoucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9FZjdpekdQLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vOFhwem9pZy5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL3loRjBMQ3QucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iTWZIZkVoLnBuZycsXG4gIF1cblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcbiAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHt9KTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZWxpbmVcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGUoZCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiB2aXMuVGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZUxpc3RlbmVyJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBkZXNjcmlwdGlvblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmVEZXNjcmlwdGlvbicsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgIHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uID0gZC50ZXh0O1xuICAgICAgdGhpcy5sb2FkRGVmYXVsdHMoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL3RpbWVsaW5lLycpO1xuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdMYSB2aXRhIGRpIFBldHJhcmNhJyB9IH0sXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvdGltZS1ldmVudHMnXG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XG4gICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnNlY3Rpb25zLmhlYWRlci50aXRsZTtcbiAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IHJlcy5zZWN0aW9ucy5oZWFkZXIuY29udGVudDtcbiAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogcmVzLnRpdGxlIH0gfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlRGV0YWlscyA9IHRydWU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==