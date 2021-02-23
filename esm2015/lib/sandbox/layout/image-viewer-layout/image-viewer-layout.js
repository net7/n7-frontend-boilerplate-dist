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
        template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\n    <n7-image-viewer \n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\n    </n7-image-viewer> \n    <n7-image-viewer-tools \n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\n    </n7-image-viewer-tools>\n</div>\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CommunicationService])
], SbImageViewerLayoutComponent);
export { SbImageViewerLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTW5GLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTZCLFNBQVEsY0FBYztJQUM5RCxZQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRTNDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUhOLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFHN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBcEIwQixvQkFBb0I7WUFDcEIsb0JBQW9COztBQUhsQyw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxrY0FBeUM7S0FDMUMsQ0FBQztxQ0FHeUIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtHQUhsQyw0QkFBNEIsQ0FzQnhDO1NBdEJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2JJbWFnZVZpZXdlckxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2ltYWdlLXZpZXdlci1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItaW1hZ2Utdmlld2VyLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXItbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=