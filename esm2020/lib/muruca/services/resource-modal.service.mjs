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
MrResourceModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrResourceModalService, deps: [{ token: i1.ConfigurationService }, { token: i2.CommunicationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrResourceModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrResourceModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrResourceModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.CommunicationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFhdkMsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKN0MsV0FBTSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTFDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLENBQUMsVUFBMkIsRUFBRSxRQUFnQjtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLG1CQUFtQjtRQUNuQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxHQUFHLE9BQU87Z0JBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQTJCO1FBQ2xELE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQzdDLE9BQU87WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTixFQUFFO2dCQUNGLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDcEM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzttSEE5Q1Usc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU3RhdHVzID0gJ0xPQURJTkcnIHwgJ0VSUk9SJyB8ICdTVUNDRVNTJyB8ICdFTVBUWScgfCAnSURMRSc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU3RhdGUgPSB7XG4gIHN0YXR1czogTW9kYWxTdGF0dXM7XG4gIHJlc3BvbnNlPzogYW55O1xuICBjb25maWc/OiBhbnk7XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB7XG4gIHN0YXRlJDogU3ViamVjdDxNb2RhbFN0YXRlPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHtcbiAgICAvLyBkZWZhdWx0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSQubmV4dCh7IHN0YXR1czogJ0lETEUnIH0pO1xuICB9XG5cbiAgb3BlbihyZXNvdXJjZUlkOiBzdHJpbmcgfCBudW1iZXIsIGNvbmZpZ0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnTE9BRElORycgfSk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChgcmVzb3VyY2UtbW9kYWwtJHtjb25maWdJZH1gKTtcbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXG4gICAgWyd0b3AnLCAnY29udGVudCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIGNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IGNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XG4gICAgICAgIC4uLnNlY3Rpb24sXG4gICAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlUmVxdWVzdCQocmVzb3VyY2VJZCwgY29uZmlnLCAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oYEVycm9yIGxvYWRpbmcgcmVzb3VyY2UgbW9kYWwgZm9yICR7cmVzb3VyY2VJZH1gLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnRVJST1InIH0pO1xuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUkLm5leHQoeyByZXNwb25zZSwgY29uZmlnLCBzdGF0dXM6ICdTVUNDRVNTJywgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHsgc3RhdHVzOiAnSURMRScgfSk7XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoaWQsIGNvbmZpZywgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gY29uZmlnLnNlY3Rpb25zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3IsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogY29uZmlnLnR5cGUsXG4gICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucy5tYXAoKHMpID0+IHMuaWQpLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=