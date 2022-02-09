import { LayoutDataSource } from '@n7-frontend/core';
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
            console.log('response------------>', response);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUlyRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCO0lBS3pELE1BQU0sQ0FBQyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUU7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNuQyxNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsR0FBRzthQUNSO1lBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNGLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBjb25maWd1cmF0aW9uIH0pIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjb21tdW5pY2F0aW9uIGNvbmZpZycsIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKSk7XHJcblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdwb3N0cycsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IDUwNVxyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdlcnInLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZS0tLS0tLS0tLS0tLT4nLCByZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19