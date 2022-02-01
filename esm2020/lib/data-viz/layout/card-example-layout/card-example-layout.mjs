import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { DvCardExampleLayoutConfig as config } from './card-example-layout.config';
import { CardLoader } from '../../models/card-loader';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/services/layouts-configuration.service";
import * as i2 from "../../../common/services/configuration.service";
import * as i3 from "../../../common/services/communication.service";
import * as i4 from "@angular/router";
import * as i5 from "../../components/card/card";
import * as i6 from "@angular/common";
export class DvCardExampleLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, configuration, communication, activatedRoute) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || config);
        this.configuration = configuration;
        this.communication = communication;
        this.activatedRoute = activatedRoute;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            cardLoader: this.cardLoader,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            const pageConfig = this.configuration.get(this.configId);
            this.cardLoader = new CardLoader(this, pageConfig);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
DvCardExampleLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: DvCardExampleLayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }, { token: i2.ConfigurationService }, { token: i3.CommunicationService }, { token: i4.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
DvCardExampleLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: DvCardExampleLayoutComponent, selector: "dv-card-example-layout", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\n        <dv-card [data]=\"card\"></dv-card>\n    </ng-container>\n</div>", components: [{ type: i5.CardComponent, selector: "dv-card", inputs: ["data", "emit"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: DvCardExampleLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-card-example-layout', template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\n        <dv-card [data]=\"card\"></dv-card>\n    </ng-container>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }, { type: i2.ConfigurationService }, { type: i3.CommunicationService }, { type: i4.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2RhdGEtdml6L2xheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0L2NhcmQtZXhhbXBsZS1sYXlvdXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSXhFLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0FBTXRELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxjQUFjO0lBSzlELFlBQ0Usb0JBQWlELEVBQ3pDLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGNBQThCO1FBRXRDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUo1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUd4QyxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7eUhBbkNVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHFGQ2J6QyxnT0FJTTsyRkRTTyw0QkFBNEI7a0JBSnhDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vY2FyZC1leGFtcGxlLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQ2FyZExvYWRlciB9IGZyb20gJy4uLy4uL21vZGVscy9jYXJkLWxvYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LWNhcmQtZXhhbXBsZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1leGFtcGxlLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHZDYXJkRXhhbXBsZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjYXJkTG9hZGVyOiBDYXJkTG9hZGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yUmVzb3VyY2VMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIGNhcmRMb2FkZXI6IHRoaXMuY2FyZExvYWRlcixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgY29uc3QgcGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG4gICAgICB0aGlzLmNhcmRMb2FkZXIgPSBuZXcgQ2FyZExvYWRlcih0aGlzLCBwYWdlQ29uZmlnKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwibGIuZGF0YVNvdXJjZSAmJiBsYi5kYXRhU291cmNlLmNhcmRzXCIgY2xhc3M9XCJkdi1jYXJkLWV4YW1wbGUtbGF5b3V0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2FyZCBvZiBsYi5kYXRhU291cmNlLmNhcmRzXCI+XG4gICAgICAgIDxkdi1jYXJkIFtkYXRhXT1cImNhcmRcIj48L2R2LWNhcmQ+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=