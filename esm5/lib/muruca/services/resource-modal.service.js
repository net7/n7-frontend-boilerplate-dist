import { __assign, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { _t } from '@n7-frontend/core';
import { ConfigurationService } from '../../common/services/configuration.service';
import { CommunicationService } from '../../common/services/communication.service';
var MrResourceModalService = /** @class */ (function () {
    function MrResourceModalService(configuration, communication) {
        this.configuration = configuration;
        this.communication = communication;
        this.state$ = new Subject();
        // default state
        this.state$.next({ status: 'IDLE' });
    }
    MrResourceModalService.prototype.open = function (resourceId, configId) {
        var _this = this;
        this.state$.next({ status: 'LOADING' });
        var config = this.configuration.get("resource-modal-" + configId);
        // add translations
        ['top', 'content'].forEach(function (type) {
            config.sections[type] = config.sections[type].map(function (section) { return (__assign(__assign({}, section), { title: _t(section.title) })); });
        });
        this.pageRequest$(resourceId, config, function (err) {
            console.warn("Error loading resource modal for " + resourceId, err.message);
            _this.state$.next({ status: 'ERROR' });
        }).subscribe(function (response) {
            _this.state$.next({ response: response, config: config, status: 'SUCCESS', });
        });
    };
    MrResourceModalService.prototype.close = function () {
        this.state$.next({ status: 'IDLE' });
    };
    MrResourceModalService.prototype.pageRequest$ = function (id, config, onError) {
        var _a = config.sections, top = _a.top, content = _a.content;
        var sections = top.concat(content);
        return this.communication.request$('resource', {
            onError: onError,
            method: 'POST',
            params: {
                id: id,
                type: config.type,
                sections: sections.map(function (s) { return s.id; }),
            }
        });
    };
    MrResourceModalService.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: CommunicationService }
    ]; };
    MrResourceModalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ConfigurationService,
            CommunicationService])
    ], MrResourceModalService);
    return MrResourceModalService;
}());
export { MrResourceModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2Evc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQVduRjtJQUdFLGdDQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKN0MsV0FBTSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTFDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBSSxHQUFKLFVBQUssVUFBMkIsRUFBRSxRQUFnQjtRQUFsRCxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsUUFBVSxDQUFDLENBQUM7UUFDcEUsbUJBQW1CO1FBQ25CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUMxRCxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3hCLEVBSDZELENBRzdELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRztZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFvQyxVQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUEyQjtRQUM1QyxJQUFBLG9CQUFrQyxFQUFoQyxZQUFHLEVBQUUsb0JBQTJCLENBQUM7UUFDekMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUM3QyxPQUFPLFNBQUE7WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUN3QixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjs7SUFMbEMsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTt5Q0FLYyxvQkFBb0I7WUFDcEIsb0JBQW9CO09BTGxDLHNCQUFzQixDQStDbEM7SUFBRCw2QkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGFsU3RhdHVzID0gJ0xPQURJTkcnIHwgJ0VSUk9SJyB8ICdTVUNDRVNTJyB8ICdFTVBUWScgfCAnSURMRSc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbFN0YXRlID0ge1xyXG4gIHN0YXR1czogTW9kYWxTdGF0dXM7XHJcbiAgcmVzcG9uc2U/OiBhbnk7XHJcbiAgY29uZmlnPzogYW55O1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB7XHJcbiAgc3RhdGUkOiBTdWJqZWN0PE1vZGFsU3RhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIC8vIGRlZmF1bHQgc3RhdGVcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoeyBzdGF0dXM6ICdJRExFJyB9KTtcclxuICB9XHJcblxyXG4gIG9wZW4ocmVzb3VyY2VJZDogc3RyaW5nIHwgbnVtYmVyLCBjb25maWdJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnTE9BRElORycgfSk7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KGByZXNvdXJjZS1tb2RhbC0ke2NvbmZpZ0lkfWApO1xyXG4gICAgLy8gYWRkIHRyYW5zbGF0aW9uc1xyXG4gICAgWyd0b3AnLCAnY29udGVudCddLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgICAgY29uZmlnLnNlY3Rpb25zW3R5cGVdID0gY29uZmlnLnNlY3Rpb25zW3R5cGVdLm1hcCgoc2VjdGlvbikgPT4gKHtcclxuICAgICAgICAuLi5zZWN0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhZ2VSZXF1ZXN0JChyZXNvdXJjZUlkLCBjb25maWcsIChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIHJlc291cmNlIG1vZGFsIGZvciAke3Jlc291cmNlSWR9YCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnRVJST1InIH0pO1xyXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgcmVzcG9uc2UsIGNvbmZpZywgc3RhdHVzOiAnU1VDQ0VTUycsIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoeyBzdGF0dXM6ICdJRExFJyB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2VSZXF1ZXN0JChpZCwgY29uZmlnLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IGNvbmZpZy5zZWN0aW9ucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgdHlwZTogY29uZmlnLnR5cGUsXHJcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLm1hcCgocykgPT4gcy5pZCksXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=