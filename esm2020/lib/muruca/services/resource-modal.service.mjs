import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { _t } from '@n7-frontend/core';
import * as i0 from "@angular/core";
import * as i1 from "../../common/services/configuration.service";
import * as i2 from "../../common/services/communication.service";
export class MrResourceModalService {
    constructor(configuration, communication) {
        this.configuration = configuration;
        this.communication = communication;
        this.state$ = new Subject();
        // default state
        this.state$.next({ status: 'IDLE' });
    }
    open(resourceId, configId) {
        this.state$.next({ status: 'LOADING' });
        const config = this.configuration.get(`resource-modal-${configId}`);
        // add translations
        ['top', 'content'].forEach((type) => {
            config.sections[type] = config.sections[type].map((section) => ({
                ...section,
                title: _t(section.title)
            }));
        });
        this.pageRequest$(resourceId, config, (err) => {
            console.warn(`Error loading resource modal for ${resourceId}`, err.message);
            this.state$.next({ status: 'ERROR' });
        }).subscribe((response) => {
            this.state$.next({ response, config, status: 'SUCCESS', });
        });
    }
    close() {
        this.state$.next({ status: 'IDLE' });
    }
    pageRequest$(id, config, onError) {
        const { top, content } = config.sections;
        const sections = top.concat(content);
        return this.communication.request$('resource', {
            onError,
            method: 'POST',
            params: {
                id,
                type: config.type,
                sections: sections.map((s) => s.id),
            }
        });
    }
}
MrResourceModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrResourceModalService, deps: [{ token: i1.ConfigurationService }, { token: i2.CommunicationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrResourceModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrResourceModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrResourceModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.CommunicationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFhdkMsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKN0MsV0FBTSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTFDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLENBQUMsVUFBMkIsRUFBRSxRQUFnQjtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLG1CQUFtQjtRQUNuQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxHQUFHLE9BQU87Z0JBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQTJCO1FBQ2xELE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQzdDLE9BQU87WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTixFQUFFO2dCQUNGLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDcEM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzttSEE5Q1Usc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGFsU3RhdHVzID0gJ0xPQURJTkcnIHwgJ0VSUk9SJyB8ICdTVUNDRVNTJyB8ICdFTVBUWScgfCAnSURMRSc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbFN0YXRlID0ge1xyXG4gIHN0YXR1czogTW9kYWxTdGF0dXM7XHJcbiAgcmVzcG9uc2U/OiBhbnk7XHJcbiAgY29uZmlnPzogYW55O1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB7XHJcbiAgc3RhdGUkOiBTdWJqZWN0PE1vZGFsU3RhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIC8vIGRlZmF1bHQgc3RhdGVcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoeyBzdGF0dXM6ICdJRExFJyB9KTtcclxuICB9XHJcblxyXG4gIG9wZW4ocmVzb3VyY2VJZDogc3RyaW5nIHwgbnVtYmVyLCBjb25maWdJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnTE9BRElORycgfSk7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KGByZXNvdXJjZS1tb2RhbC0ke2NvbmZpZ0lkfWApO1xyXG4gICAgLy8gYWRkIHRyYW5zbGF0aW9uc1xyXG4gICAgWyd0b3AnLCAnY29udGVudCddLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgICAgY29uZmlnLnNlY3Rpb25zW3R5cGVdID0gY29uZmlnLnNlY3Rpb25zW3R5cGVdLm1hcCgoc2VjdGlvbikgPT4gKHtcclxuICAgICAgICAuLi5zZWN0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhZ2VSZXF1ZXN0JChyZXNvdXJjZUlkLCBjb25maWcsIChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIHJlc291cmNlIG1vZGFsIGZvciAke3Jlc291cmNlSWR9YCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnRVJST1InIH0pO1xyXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgcmVzcG9uc2UsIGNvbmZpZywgc3RhdHVzOiAnU1VDQ0VTUycsIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuc3RhdGUkLm5leHQoeyBzdGF0dXM6ICdJRExFJyB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2VSZXF1ZXN0JChpZCwgY29uZmlnLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IGNvbmZpZy5zZWN0aW9ucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgdHlwZTogY29uZmlnLnR5cGUsXHJcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLm1hcCgocykgPT4gcy5pZCksXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=