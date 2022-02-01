import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { AwMapLayoutConfig as config } from './map-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/services/configuration.service";
import * as i2 from "../../../common/services/layouts-configuration.service";
import * as i3 from "../../../common/services/communication.service";
import * as i4 from "../../../common/services/main-state.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@n7-frontend/components";
import * as i7 from "../../components/smart-breadcrumbs/smart-breadcrumbs";
import * as i8 from "../../../common/components/smart-pagination/smart-pagination";
import * as i9 from "@angular/common";
export class AwMapLayoutComponent extends AbstractLayout {
    constructor(configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwMapLayoutConfig') || config);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwMapLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: AwMapLayoutComponent, deps: [{ token: i1.ConfigurationService }, { token: i2.LayoutsConfigurationService }, { token: i3.CommunicationService }, { token: i4.MainStateService }, { token: i5.Title }], target: i0.ɵɵFactoryTarget.Component });
AwMapLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: AwMapLayoutComponent, selector: "aw-map-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\n    <n7-inner-title [data]=\"{\n        title: {\n            main: {\n                    text: 'I luoghi dell\\'archivio'\n            }\n        }\n    }\">\n    </n7-inner-title>\n\n    <!-- Map -->\n    <div class=\"aw-multimedia__map\">\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\n    </div>\n    <!-- END // Map -->\n\n    <!-- RESULTS -->\n    <div class=\"aw-multimedia__results\">\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\n            <ng-container>\n                <n7-loader></n7-loader>\n            </ng-container>\n        </div>\n\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\n            <ng-container>\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\n            </ng-container>\n        </div>\n        \n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\n            <div class=\"aw-multimedia__results-title\">\n                <n7-inner-title \n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n                </n7-inner-title>\n            </div>\n            <div class=\"aw-multimedia__results-wrapper\">\n                <div>\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs \n                            [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview \n                            [data]=\"preview\" \n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </div>\n                </div>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </ng-container>\n    </div>\n</div>", components: [{ type: i6.InnerTitleComponent, selector: "n7-inner-title", inputs: ["data", "emit"] }, { type: i6.MapComponent, selector: "n7-map", inputs: ["data", "emit"] }, { type: i6.LoaderComponent, selector: "n7-loader", inputs: ["data"] }, { type: i7.SmartBreadcrumbsComponent, selector: "n7-smart-breadcrumbs", inputs: ["data", "emit"] }, { type: i6.ItemPreviewComponent, selector: "n7-item-preview", inputs: ["data", "emit"] }, { type: i8.SmartPaginationComponent, selector: "n7-smart-pagination", inputs: ["data", "emit"] }], directives: [{ type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i9.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: AwMapLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-map-layout', template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\n    <n7-inner-title [data]=\"{\n        title: {\n            main: {\n                    text: 'I luoghi dell\\'archivio'\n            }\n        }\n    }\">\n    </n7-inner-title>\n\n    <!-- Map -->\n    <div class=\"aw-multimedia__map\">\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\n    </div>\n    <!-- END // Map -->\n\n    <!-- RESULTS -->\n    <div class=\"aw-multimedia__results\">\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\n            <ng-container>\n                <n7-loader></n7-loader>\n            </ng-container>\n        </div>\n\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\n            <ng-container>\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\n            </ng-container>\n        </div>\n        \n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\n            <div class=\"aw-multimedia__results-title\">\n                <n7-inner-title \n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n                </n7-inner-title>\n            </div>\n            <div class=\"aw-multimedia__results-wrapper\">\n                <div>\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs \n                            [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview \n                            [data]=\"preview\" \n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </div>\n                </div>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </ng-container>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.LayoutsConfigurationService }, { type: i3.CommunicationService }, { type: i4.MainStateService }, { type: i5.Title }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2xheW91dHMvbWFwLWxheW91dC9tYXAtbGF5b3V0LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJeEUsT0FBTyxFQUFFLGlCQUFpQixJQUFJLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztBQU9sRSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQUN0RCxZQUNVLGFBQW1DLEVBQ25DLG9CQUFpRCxFQUNqRCxhQUFtQyxFQUNuQyxTQUEyQixFQUMzQixZQUFtQjtRQUUzQixLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFOdkQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFPO0lBRzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztpSEFoQ1Usb0JBQW9CO3FHQUFwQixvQkFBb0IsNEVDYmpDLG94RUF1RE07MkZEMUNPLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBd01hcExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL21hcC1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LW1hcC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXdNYXBMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdNYXBMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgLypcbiAgICBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAgSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXG4gICAgYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhdy1tdWx0aW1lZGlhXCIgaWQ9XCJtYXAtbGF5b3V0XCIgKm5nSWY9XCJsYi5kYXRhU291cmNlXCI+XG4gICAgPG43LWlubmVyLXRpdGxlIFtkYXRhXT1cIntcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0kgbHVvZ2hpIGRlbGxcXCdhcmNoaXZpbydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cIj5cbiAgICA8L243LWlubmVyLXRpdGxlPlxuXG4gICAgPCEtLSBNYXAgLS0+XG4gICAgPGRpdiBjbGFzcz1cImF3LW11bHRpbWVkaWFfX21hcFwiPlxuICAgICAgICA8bjctbWFwIFtkYXRhXT1cImxiLndpZGdldHNbJ2F3LW1hcCddLmRzLm91dCQgfCBhc3luY1wiPjwvbjctbWFwPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gRU5EIC8vIE1hcCAtLT5cblxuICAgIDwhLS0gUkVTVUxUUyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXctbXVsdGltZWRpYV9fbG9hZGVyXCIgKm5nSWY9XCIobGIuZGF0YVNvdXJjZS5zdGF0ZSQgfCBhc3luYykgPT09ICdMT0FESU5HJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bjctbG9hZGVyPjwvbjctbG9hZGVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19lbXB0eVwiICpuZ0lmPVwiKGxiLmRhdGFTb3VyY2Uuc3RhdGUkIHwgYXN5bmMpID09PSAnRU1QVFknXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXctbXVsdGltZWRpYV9fZW1wdHktdGV4dFwiPkNsaWNjYSBzdSB1biBsdW9nbyBkZWxsYSBtYXBwYSBwZXIgdmVkZXJlIHR1dHRpIGdsaSBvZ2dldHRpIGNvbGxlZ2F0aS48L3A+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKGxiLmRhdGFTb3VyY2Uuc3RhdGUkIHwgYXN5bmMpID09PSAnU1VDQ0VTUydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdy1tdWx0aW1lZGlhX19yZXN1bHRzLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPG43LWlubmVyLXRpdGxlIFxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWydhdy1zY2hlZGEtaW5uZXItdGl0bGUnXS5kcy5vdXQkIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICA8L243LWlubmVyLXRpdGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXctbXVsdGltZWRpYV9fcmVzdWx0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF3LWl0ZW0tcHJldmlldy13cmFwcGVyXCIgKm5nRm9yPVwibGV0IHByZXZpZXcgb2YgKGxiLndpZGdldHNbJ2F3LWxpbmtlZC1vYmplY3RzJ10uZHMub3V0JCB8IGFzeW5jKT8ucHJldmlld3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuNy1zbWFydC1icmVhZGNydW1icyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJwcmV2aWV3LmJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L243LXNtYXJ0LWJyZWFkY3J1bWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG43LWl0ZW0tcHJldmlldyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJwcmV2aWV3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1snYXctbGlua2VkLW9iamVjdHMnXS5lbWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L243LWl0ZW0tcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG43LXNtYXJ0LXBhZ2luYXRpb24gKm5nSWY9XCJsYi5kYXRhU291cmNlLnRvdGFsID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ243LXNtYXJ0LXBhZ2luYXRpb24nXS5kcy5vdXQkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzWyduNy1zbWFydC1wYWdpbmF0aW9uJ10uZW1pdFwiPlxuICAgICAgICAgICAgICAgIDwvbjctc21hcnQtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==