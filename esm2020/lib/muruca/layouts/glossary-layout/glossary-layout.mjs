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
MrGlossaryLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrGlossaryLayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
MrGlossaryLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MrGlossaryLayoutComponent, selector: "mr-glossary-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\r\n    Hello, from Glossary layout!\r\n</div>\r\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrGlossaryLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-glossary-layout', template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\r\n    Hello, from Glossary layout!\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvc3NhcnktbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjO0lBQzNELFlBQ0Usb0JBQWlEO1FBRWpELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3NIQW5CVSx5QkFBeUI7MEdBQXpCLHlCQUF5QixpRkNUdEMsMkdBR0E7MkZETWEseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9nbG9zc2FyeS1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItZ2xvc3NhcnktbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvc3NhcnktbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckdsb3NzYXJ5TGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJnbG9zc2FyeS1sYXlvdXRcIiAqbmdJZj1cImxiLmRhdGFTb3VyY2VcIj5cclxuICAgIEhlbGxvLCBmcm9tIEdsb3NzYXJ5IGxheW91dCFcclxuPC9kaXY+XHJcbiJdfQ==