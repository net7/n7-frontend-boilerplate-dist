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
DvCardExampleLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: DvCardExampleLayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }, { token: i2.ConfigurationService }, { token: i3.CommunicationService }, { token: i4.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
DvCardExampleLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: DvCardExampleLayoutComponent, selector: "dv-card-example-layout", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\r\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\r\n        <dv-card [data]=\"card\"></dv-card>\r\n    </ng-container>\r\n</div>", components: [{ type: i5.CardComponent, selector: "dv-card", inputs: ["data", "emit"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: DvCardExampleLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-card-example-layout', template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\r\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\r\n        <dv-card [data]=\"card\"></dv-card>\r\n    </ng-container>\r\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }, { type: i2.ConfigurationService }, { type: i3.CommunicationService }, { type: i4.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2RhdGEtdml6L2xheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0L2NhcmQtZXhhbXBsZS1sYXlvdXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSXhFLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7O0FBTXRELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxjQUFjO0lBSzlELFlBQ0Usb0JBQWlELEVBQ3pDLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGNBQThCO1FBRXRDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUo1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUd4QyxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7eUhBbkNVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHFGQ2J6Qyx3T0FJTTsyRkRTTyw0QkFBNEI7a0JBSnhDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vY2FyZC1leGFtcGxlLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDYXJkTG9hZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhcmQtbG9hZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHYtY2FyZC1leGFtcGxlLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtZXhhbXBsZS1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNhcmRMb2FkZXI6IENhcmRMb2FkZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yUmVzb3VyY2VMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBjYXJkTG9hZGVyOiB0aGlzLmNhcmRMb2FkZXIsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xyXG4gICAgICBjb25zdCBwYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuICAgICAgdGhpcy5jYXJkTG9hZGVyID0gbmV3IENhcmRMb2FkZXIodGhpcywgcGFnZUNvbmZpZyk7XHJcbiAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cImxiLmRhdGFTb3VyY2UgJiYgbGIuZGF0YVNvdXJjZS5jYXJkc1wiIGNsYXNzPVwiZHYtY2FyZC1leGFtcGxlLWxheW91dFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2FyZCBvZiBsYi5kYXRhU291cmNlLmNhcmRzXCI+XHJcbiAgICAgICAgPGR2LWNhcmQgW2RhdGFdPVwiY2FyZFwiPjwvZHYtY2FyZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj4iXX0=