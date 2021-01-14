import { __decorate, __metadata } from "tslib";
/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { SbImageViewerLayoutConfig as config } from './image-viewer-layout.config';
let SbImageViewerLayoutComponent = class SbImageViewerLayoutComponent extends AbstractLayout {
    constructor(configuration, communication) {
        super(config);
        this.configuration = configuration;
        this.communication = communication;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            communication: this.communication,
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
SbImageViewerLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: CommunicationService }
];
SbImageViewerLayoutComponent = __decorate([
    Component({
        selector: 'sb-image-viewer-layout',
        template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CommunicationService])
], SbImageViewerLayoutComponent);
export { SbImageViewerLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTW5GLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTZCLFNBQVEsY0FBYztJQUM5RCxZQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRTNDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUhOLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFHN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBcEIwQixvQkFBb0I7WUFDcEIsb0JBQW9COztBQUhsQyw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxzZEFBeUM7S0FDMUMsQ0FBQztxQ0FHeUIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtHQUhsQyw0QkFBNEIsQ0FzQnhDO1NBdEJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9pbWFnZS12aWV3ZXItbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXItbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==