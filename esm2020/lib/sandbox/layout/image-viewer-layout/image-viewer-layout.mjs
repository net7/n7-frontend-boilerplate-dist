/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SbImageViewerLayoutConfig as config } from './image-viewer-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/services/configuration.service";
import * as i2 from "../../../common/services/communication.service";
import * as i3 from "@n7-frontend/components";
import * as i4 from "@angular/common";
export class SbImageViewerLayoutComponent extends AbstractLayout {
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
}
SbImageViewerLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SbImageViewerLayoutComponent, deps: [{ token: i1.ConfigurationService }, { token: i2.CommunicationService }], target: i0.ɵɵFactoryTarget.Component });
SbImageViewerLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: SbImageViewerLayoutComponent, selector: "sb-image-viewer-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n", components: [{ type: i3.ImageViewerComponent, selector: "n7-image-viewer", inputs: ["data", "emit"] }, { type: i3.ImageViewerToolsComponent, selector: "n7-image-viewer-tools", inputs: ["data", "emit"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SbImageViewerLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sb-image-viewer-layout', template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.CommunicationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFNbkYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQWM7SUFDOUQsWUFDVSxhQUFtQyxFQUNuQyxhQUFtQztRQUUzQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFITixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBRzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3lIQXJCVSw0QkFBNEI7NkdBQTVCLDRCQUE0QixxRkNYekMsNGNBVUE7MkZEQ2EsNEJBQTRCO2tCQUp4QyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9pbWFnZS12aWV3ZXItbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXItbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzYi1pbWFnZS12aWV3ZXItbGF5b3V0XCIgaWQ9XCJpbWFnZS12aWV3ZXItbGF5b3V0XCI+XHJcbiAgICA8bjctaW1hZ2Utdmlld2VyIFxyXG4gICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ3NiLWltYWdlLXZpZXdlciddLmRzLm91dCQgfCBhc3luY1wiXHJcbiAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1snc2ItaW1hZ2Utdmlld2VyJ10uZW1pdFwiPlxyXG4gICAgPC9uNy1pbWFnZS12aWV3ZXI+IFxyXG4gICAgPG43LWltYWdlLXZpZXdlci10b29scyBcclxuICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWydzYi1pbWFnZS12aWV3ZXItdG9vbHMnXS5kcy5vdXQkIHwgYXN5bmNcIlxyXG4gICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbJ3NiLWltYWdlLXZpZXdlci10b29scyddLmVtaXRcIj5cclxuICAgIDwvbjctaW1hZ2Utdmlld2VyLXRvb2xzPlxyXG48L2Rpdj5cclxuIl19