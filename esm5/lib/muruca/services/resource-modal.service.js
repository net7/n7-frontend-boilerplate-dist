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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2Evc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQVduRjtJQUdFLGdDQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKN0MsV0FBTSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTFDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBSSxHQUFKLFVBQUssVUFBMkIsRUFBRSxRQUFnQjtRQUFsRCxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsUUFBVSxDQUFDLENBQUM7UUFDcEUsbUJBQW1CO1FBQ25CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUMxRCxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3hCLEVBSDZELENBRzdELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRztZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFvQyxVQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUEyQjtRQUM1QyxJQUFBLG9CQUFrQyxFQUFoQyxZQUFHLEVBQUUsb0JBQTJCLENBQUM7UUFDekMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUM3QyxPQUFPLFNBQUE7WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUN3QixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjs7SUFMbEMsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTt5Q0FLYyxvQkFBb0I7WUFDcEIsb0JBQW9CO09BTGxDLHNCQUFzQixDQStDbEM7SUFBRCw2QkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU3RhdHVzID0gJ0xPQURJTkcnIHwgJ0VSUk9SJyB8ICdTVUNDRVNTJyB8ICdFTVBUWScgfCAnSURMRSc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU3RhdGUgPSB7XG4gIHN0YXR1czogTW9kYWxTdGF0dXM7XG4gIHJlc3BvbnNlPzogYW55O1xuICBjb25maWc/OiBhbnk7XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB7XG4gIHN0YXRlJDogU3ViamVjdDxNb2RhbFN0YXRlPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHtcbiAgICAvLyBkZWZhdWx0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSQubmV4dCh7IHN0YXR1czogJ0lETEUnIH0pO1xuICB9XG5cbiAgb3BlbihyZXNvdXJjZUlkOiBzdHJpbmcgfCBudW1iZXIsIGNvbmZpZ0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnTE9BRElORycgfSk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChgcmVzb3VyY2UtbW9kYWwtJHtjb25maWdJZH1gKTtcbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXG4gICAgWyd0b3AnLCAnY29udGVudCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIGNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IGNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XG4gICAgICAgIC4uLnNlY3Rpb24sXG4gICAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlUmVxdWVzdCQocmVzb3VyY2VJZCwgY29uZmlnLCAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oYEVycm9yIGxvYWRpbmcgcmVzb3VyY2UgbW9kYWwgZm9yICR7cmVzb3VyY2VJZH1gLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnRVJST1InIH0pO1xuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUkLm5leHQoeyByZXNwb25zZSwgY29uZmlnLCBzdGF0dXM6ICdTVUNDRVNTJywgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnSURMRScgfSk7XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoaWQsIGNvbmZpZywgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gY29uZmlnLnNlY3Rpb25zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3IsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogY29uZmlnLnR5cGUsXG4gICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucy5tYXAoKHMpID0+IHMuaWQpLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=