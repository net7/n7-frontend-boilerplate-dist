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
            template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\n    <n7-image-viewer \n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\n    </n7-image-viewer> \n    <n7-image-viewer-tools \n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\n    </n7-image-viewer-tools>\n</div>\n"
        }),
        __metadata("design:paramtypes", [ConfigurationService,
            CommunicationService])
    ], SbImageViewerLayoutComponent);
    return SbImageViewerLayoutComponent;
}(AbstractLayout));
export { SbImageViewerLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTW5GO0lBQWtELGdEQUFjO0lBQzlELHNDQUNVLGFBQW1DLEVBQ25DLGFBQW1DO1FBRjdDLFlBSUUsa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFKUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCOztJQUc3QyxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFuQndCLG9CQUFvQjtnQkFDcEIsb0JBQW9COztJQUhsQyw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxrY0FBeUM7U0FDMUMsQ0FBQzt5Q0FHeUIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtPQUhsQyw0QkFBNEIsQ0FzQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQXRCRCxDQUFrRCxjQUFjLEdBc0IvRDtTQXRCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9pbWFnZS12aWV3ZXItbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19