import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrGlossaryLayoutConfig as config } from './glossary-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/services/layouts-configuration.service";
import * as i2 from "@angular/common";
export class MrGlossaryLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('MrGlossaryLayoutConfig') || config);
    }
    initPayload() {
        return {
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
MrGlossaryLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrGlossaryLayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
MrGlossaryLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MrGlossaryLayoutComponent, selector: "mr-glossary-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Glossary layout!\n</div>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrGlossaryLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-glossary-layout', template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Glossary layout!\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvc3NhcnktbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjO0lBQzNELFlBQ0Usb0JBQWlEO1FBRWpELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3NIQW5CVSx5QkFBeUI7MEdBQXpCLHlCQUF5QixpRkNUdEMscUdBR0E7MkZETWEseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9nbG9zc2FyeS1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItZ2xvc3NhcnktbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsb3NzYXJ5LWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJHbG9zc2FyeUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJnbG9zc2FyeS1sYXlvdXRcIiAqbmdJZj1cImxiLmRhdGFTb3VyY2VcIj5cbiAgICBIZWxsbywgZnJvbSBHbG9zc2FyeSBsYXlvdXQhXG48L2Rpdj5cbiJdfQ==