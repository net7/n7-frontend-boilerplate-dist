import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export class SbImageViewerLayoutDS extends LayoutDataSource {
    onInit({ communication, configuration }) {
        this.communication = communication;
        this.configuration = configuration;
        console.log('communication config', this.configuration.get('communication'));
        this.communication.request$('posts', {
            method: 'GET',
            params: {
                id: 505
            },
            onError: (err) => {
                console.warn('err', err);
            }
        }).subscribe((response) => {
            console.log('response------------_>', response);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJN0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjtJQUt6RCxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDbkMsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLEdBQUc7YUFDUjtZQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgY29uZmlndXJhdGlvbiB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY29tbXVuaWNhdGlvbiBjb25maWcnLCB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJykpO1xyXG5cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncG9zdHMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiA1MDVcclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignZXJyJywgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UtLS0tLS0tLS0tLS1fPicsIHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=