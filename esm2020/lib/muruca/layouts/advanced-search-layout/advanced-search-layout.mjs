import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrAdvancedSearchLayoutConfig as config } from './advanced-search-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../common/services/main-state.service";
import * as i3 from "../../../common/services/configuration.service";
import * as i4 from "../../../common/services/layouts-configuration.service";
import * as i5 from "@n7-frontend/components";
import * as i6 from "../../components/form-wrapper-accordion/form-wrapper-accordion";
import * as i7 from "@angular/common";
export class MrAdvancedSearchLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrAdvancedSearchLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
MrAdvancedSearchLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrAdvancedSearchLayoutComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.MainStateService }, { token: i3.ConfigurationService }, { token: i4.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
MrAdvancedSearchLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MrAdvancedSearchLayoutComponent, selector: "mr-advanced-search-layout", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search mr-layout\">\n    <div class=\"mr-layout__maxwidth mr-side-margin\">\n\n        <n7-inner-title [data]=\"{\n            title: {\n                main: {\n                    text: lb.dataSource.pageConfig.title\n                }\n            }\n        }\"></n7-inner-title>\n\n        <mr-form-wrapper-accordion \n            [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\n        </mr-form-wrapper-accordion>\n    </div>\n</div>", components: [{ type: i5.InnerTitleComponent, selector: "n7-inner-title", inputs: ["data", "emit"] }, { type: i6.MrFormWrapperAccordionComponent, selector: "mr-form-wrapper-accordion", inputs: ["data", "emit"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i7.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrAdvancedSearchLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-advanced-search-layout', template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search mr-layout\">\n    <div class=\"mr-layout__maxwidth mr-side-margin\">\n\n        <n7-inner-title [data]=\"{\n            title: {\n                main: {\n                    text: lb.dataSource.pageConfig.title\n                }\n            }\n        }\"></n7-inner-title>\n\n        <mr-form-wrapper-accordion \n            [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\n        </mr-form-wrapper-accordion>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.MainStateService }, { type: i3.ConfigurationService }, { type: i4.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUl4RSxPQUFPLEVBQUUsNEJBQTRCLElBQUksTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztBQU16RixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsY0FBYztJQUdqRSxZQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixTQUEyQixFQUMzQixhQUFtQyxFQUMzQyxvQkFBaUQ7UUFFakQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBTmxFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBSTdDLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs0SEFqQ1UsK0JBQStCO2dIQUEvQiwrQkFBK0Isd0ZDWjVDLHFrQkFnQk07MkZESk8sK0JBQStCO2tCQUozQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtc2VhcmNoLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJBZHZhbmNlZFNlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBhY3RpdmF0ZWRSb3V0ZTogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJsYi5kYXRhU291cmNlXCIgY2xhc3M9XCJtci1hZHZhbmNlZC1zZWFyY2ggbXItbGF5b3V0XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1yLWxheW91dF9fbWF4d2lkdGggbXItc2lkZS1tYXJnaW5cIj5cblxuICAgICAgICA8bjctaW5uZXItdGl0bGUgW2RhdGFdPVwie1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy50aXRsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVwiPjwvbjctaW5uZXItdGl0bGU+XG5cbiAgICAgICAgPG1yLWZvcm0td3JhcHBlci1hY2NvcmRpb24gXG4gICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWydtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uJ10uZHMub3V0JCB8IGFzeW5jXCJcbiAgICAgICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nXS5lbWl0XCI+XG4gICAgICAgIDwvbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==