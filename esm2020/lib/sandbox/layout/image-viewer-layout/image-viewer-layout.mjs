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
SbImageViewerLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SbImageViewerLayoutComponent, deps: [{ token: i1.ConfigurationService }, { token: i2.CommunicationService }], target: i0.ɵɵFactoryTarget.Component });
SbImageViewerLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: SbImageViewerLayoutComponent, selector: "sb-image-viewer-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\n    <n7-image-viewer \n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\n    </n7-image-viewer> \n    <n7-image-viewer-tools \n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\n    </n7-image-viewer-tools>\n</div>\n", components: [{ type: i3.ImageViewerComponent, selector: "n7-image-viewer", inputs: ["data", "emit"] }, { type: i3.ImageViewerToolsComponent, selector: "n7-image-viewer-tools", inputs: ["data", "emit"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SbImageViewerLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sb-image-viewer-layout', template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\n    <n7-image-viewer \n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\n    </n7-image-viewer> \n    <n7-image-viewer-tools \n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\n    </n7-image-viewer-tools>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.CommunicationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHlCQUF5QixJQUFJLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFNbkYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQWM7SUFDOUQsWUFDVSxhQUFtQyxFQUNuQyxhQUFtQztRQUUzQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFITixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBRzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3lIQXJCVSw0QkFBNEI7NkdBQTVCLDRCQUE0QixxRkNYekMsd2JBVUE7MkZEQ2EsNEJBQTRCO2tCQUp4QyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2JJbWFnZVZpZXdlckxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2ltYWdlLXZpZXdlci1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItaW1hZ2Utdmlld2VyLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXItbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2ItaW1hZ2Utdmlld2VyLWxheW91dFwiIGlkPVwiaW1hZ2Utdmlld2VyLWxheW91dFwiPlxuICAgIDxuNy1pbWFnZS12aWV3ZXIgXG4gICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ3NiLWltYWdlLXZpZXdlciddLmRzLm91dCQgfCBhc3luY1wiXG4gICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbJ3NiLWltYWdlLXZpZXdlciddLmVtaXRcIj5cbiAgICA8L243LWltYWdlLXZpZXdlcj4gXG4gICAgPG43LWltYWdlLXZpZXdlci10b29scyBcbiAgICAgICAgW2RhdGFdPVwibGIud2lkZ2V0c1snc2ItaW1hZ2Utdmlld2VyLXRvb2xzJ10uZHMub3V0JCB8IGFzeW5jXCJcbiAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1snc2ItaW1hZ2Utdmlld2VyLXRvb2xzJ10uZW1pdFwiPlxuICAgIDwvbjctaW1hZ2Utdmlld2VyLXRvb2xzPlxuPC9kaXY+XG4iXX0=