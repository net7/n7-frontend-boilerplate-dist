import { __decorate, __extends, __metadata } from "tslib";
/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { SbImageViewerLayoutConfig as config } from './image-viewer-layout.config';
var SbImageViewerLayoutComponent = /** @class */ (function (_super) {
    __extends(SbImageViewerLayoutComponent, _super);
    function SbImageViewerLayoutComponent(configuration, communication) {
        var _this = _super.call(this, config) || this;
        _this.configuration = configuration;
        _this.communication = communication;
        return _this;
    }
    SbImageViewerLayoutComponent.prototype.initPayload = function () {
        return {
            configuration: this.configuration,
            communication: this.communication,
        };
    };
    SbImageViewerLayoutComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    SbImageViewerLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    SbImageViewerLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: CommunicationService }
    ]; };
    SbImageViewerLayoutComponent = __decorate([
        Component({
            selector: 'sb-image-viewer-layout',
            template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [ConfigurationService,
            CommunicationService])
    ], SbImageViewerLayoutComponent);
    return SbImageViewerLayoutComponent;
}(AbstractLayout));
export { SbImageViewerLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTW5GO0lBQWtELGdEQUFjO0lBQzlELHNDQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRjdDLFlBSUUsa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFKUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCOztJQUc3QyxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFuQndCLG9CQUFvQjtnQkFDcEIsb0JBQW9COztJQUhsQyw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxzZEFBeUM7U0FDMUMsQ0FBQzt5Q0FHeUIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtPQUhsQyw0QkFBNEIsQ0FzQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQXRCRCxDQUFrRCxjQUFjLEdBc0IvRDtTQXRCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYkltYWdlVmlld2VyTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vaW1hZ2Utdmlld2VyLWxheW91dC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=