import { Component } from '@angular/core';
import { AbstractLayout } from '../../models/abstract-layout';
import { Page404LayoutConfig as config } from './page404-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "../../services/layouts-configuration.service";
export class Page404LayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || config);
    }
    initPayload() {
        return {
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
Page404LayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: Page404LayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
Page404LayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: Page404LayoutComponent, selector: "n7-page404-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"n7-page404-layout\">\r\n    404 - Resource not found\r\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: Page404LayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-page404-layout', template: "<div class=\"n7-page404-layout\">\r\n    404 - Resource not found\r\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9jb21tb24vbGF5b3V0cy9wYWdlNDA0LWxheW91dC9wYWdlNDA0LWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9sYXlvdXRzL3BhZ2U0MDQtbGF5b3V0L3BhZ2U0MDQtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjO0lBQ3hELFlBQ0Usb0JBQWlEO1FBRWpELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O21IQW5CVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixnRkNUbkMsNkVBRU07MkZET08sc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlNDA0TGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcGFnZTQwNC1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctcGFnZTQwNC1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlNDA0LWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ1BhZ2U0MDRMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuNy1wYWdlNDA0LWxheW91dFwiPlxyXG4gICAgNDA0IC0gUmVzb3VyY2Ugbm90IGZvdW5kXHJcbjwvZGl2PiJdfQ==