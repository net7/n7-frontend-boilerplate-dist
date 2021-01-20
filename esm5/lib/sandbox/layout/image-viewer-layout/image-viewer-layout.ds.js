import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
var SbImageViewerLayoutDS = /** @class */ (function (_super) {
    __extends(SbImageViewerLayoutDS, _super);
    function SbImageViewerLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbImageViewerLayoutDS.prototype.onInit = function (_a) {
        var communication = _a.communication, configuration = _a.configuration;
        this.communication = communication;
        this.configuration = configuration;
        console.log('communication config', this.configuration.get('communication'));
        this.communication.request$('posts', {
            method: 'GET',
            params: {
                id: 505
            },
            onError: function (err) {
                console.warn('err', err);
            }
        }).subscribe(function (response) {
            console.log('response------------_>', response);
        });
    };
    return SbImageViewerLayoutDS;
}(LayoutDataSource));
export { SbImageViewerLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSTdFO0lBQTJDLHlDQUFnQjtJQUEzRDs7SUF1QkEsQ0FBQztJQWxCQyxzQ0FBTSxHQUFOLFVBQU8sRUFBZ0M7WUFBOUIsZ0NBQWEsRUFBRSxnQ0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ25DLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxHQUFHO2FBQ1I7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUEyQyxnQkFBZ0IsR0F1QjFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBjb25maWd1cmF0aW9uIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICBjb25zb2xlLmxvZygnY29tbXVuaWNhdGlvbiBjb25maWcnLCB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJykpO1xuXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdwb3N0cycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IDUwNVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdlcnInLCBlcnIpO1xuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZS0tLS0tLS0tLS0tLV8+JywgcmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=