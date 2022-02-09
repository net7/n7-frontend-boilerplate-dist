import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrPostsLayoutConfig as config } from './posts-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../common/services/main-state.service";
import * as i3 from "../../../common/services/configuration.service";
import * as i4 from "../../../common/services/communication.service";
import * as i5 from "../../services/layout-state.service";
import * as i6 from "../../../common/services/layouts-configuration.service";
import * as i7 from "@n7-frontend/components";
import * as i8 from "../../../common/components/smart-pagination/smart-pagination";
import * as i9 from "@angular/common";
export class MrPostsLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrPostsLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
        this.communication = communication;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            layoutState: this.layoutState,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
MrPostsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrPostsLayoutComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.MainStateService }, { token: i3.ConfigurationService }, { token: i4.CommunicationService }, { token: i5.MrLayoutStateService }, { token: i6.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
MrPostsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MrPostsLayoutComponent, selector: "mr-posts-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n", components: [{ type: i7.InnerTitleComponent, selector: "n7-inner-title", inputs: ["data", "emit"] }, { type: i7.TagComponent, selector: "n7-tag", inputs: ["data", "emit"] }, { type: i7.ContentPlaceholderComponent, selector: "n7-content-placeholder", inputs: ["data"] }, { type: i7.ItemPreviewComponent, selector: "n7-item-preview", inputs: ["data", "emit"] }, { type: i8.SmartPaginationComponent, selector: "n7-smart-pagination", inputs: ["data", "emit"] }], directives: [{ type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i9.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], pipes: { "async": i9.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrPostsLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-posts-layout', template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.MainStateService }, { type: i3.ConfigurationService }, { type: i4.CommunicationService }, { type: i5.MrLayoutStateService }, { type: i6.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2xheW91dHMvcG9zdHMtbGF5b3V0L3Bvc3RzLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFLeEUsT0FBTyxFQUFFLG1CQUFtQixJQUFJLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7OztBQU90RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYztJQUd0RCxZQUNRLE1BQWMsRUFDZCxjQUE4QixFQUM5QixTQUEyQixFQUMzQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNwQyxXQUFpQyxFQUN4QyxvQkFBaUQ7UUFFL0MsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBUjNELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFJeEMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzttSEF2Q1Esc0JBQXNCO3VHQUF0QixzQkFBc0IsOEVDZG5DLDhuS0E0RkE7MkZEOUVhLHNCQUFzQjtrQkFKbEMsU0FBUzsrQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcG9zdHMtbGF5b3V0LmNvbmZpZyc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1wb3N0cy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0cy1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclBvc3RzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclBvc3RzTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXHJcbiAgICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcclxuICAgICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXHJcbiAgICAgICAgYWN0aXZhdGVkUm91dGU6IHRoaXMuYWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgbGF5b3V0U3RhdGU6IHRoaXMubGF5b3V0U3RhdGUsXHJcbiAgICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xyXG4gICAgICAgIC8vIGFkZCBsYXlvdXQgc3RhdGVzXHJcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoWydyZXN1bHRzJ10pO1xyXG4gICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtci1zZWFyY2ggbXItbGF5b3V0XCJcclxuICAgICAqbmdJZj1cImxiLmRhdGFTb3VyY2VcIj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibXItbGF5b3V0X19tYXh3aWR0aCBtci1zaWRlLW1hcmdpblwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXItc2VhcmNoX190aXRsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXJlZlwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgICA8bjctaW5uZXItdGl0bGVcclxuICAgICAgICAgICAgW2RhdGFdPVwibGIud2lkZ2V0c1snbXItc2VhcmNoLXBhZ2UtdGl0bGUnXS5kcy5vdXQkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzWydtci1zZWFyY2gtcGFnZS10aXRsZSddLmVtaXRcIj5cclxuICAgICAgICAgICAgPC9uNy1pbm5lci10aXRsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXItc2VhcmNoX19yZXN1bHRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLXNlYXJjaF9fcmVzdWx0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItc2VhcmNoX19yZXN1bHRzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bjctaW5uZXItdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWydtci1zZWFyY2gtcmVzdWx0cy10aXRsZSddLmRzLm91dCQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1snbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnXS5lbWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uNy1pbm5lci10aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZ1snZmlsdGVycyddXCIgY2xhc3M9XCJtci1zZWFyY2hfX3Jlc3VsdHMtZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnWydmaWx0ZXJzJ10udGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLXNlYXJjaF9fcmVzdWx0cy1maWx0ZXJzLXRpdGxlXCI+e3sgbGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnWydmaWx0ZXJzJ10udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLXNlYXJjaF9fcmVzdWx0cy1maWx0ZXJzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG43LXRhZyAqbmdGb3I9XCJsZXQgdGFnIG9mIChsYi53aWRnZXRzWydtci1hZHZhbmNlZC1zZWFyY2gtdGFncyddLmRzLm91dCQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwidGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbjctdGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1yLXNlYXJjaF9fcmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU0VBUkNIIFJFU1VMVFMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibGF5b3V0U3RhdGUuZ2V0JCgncmVzdWx0cycpIHwgYXN5bmNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gbG9hZGluZyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xPQURJTkcnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItc2VhcmNoX19yZXN1bHRzLWxvYWRpbmcgbjctZ3JpZC17eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZ3JpZCB8fCAzIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG43LWNvbnRlbnQtcGxhY2Vob2xkZXIgKm5nRm9yPVwibGV0IG4gb2YgWzAsMSwyLDMsNCw1LDYsNyw4LDldXCIgW2RhdGFdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NlczogJ3NlYXJjaC1yZXN1bHQtcGxhY2Vob2xkZXItdGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzZXM6ICdzZWFyY2gtcmVzdWx0LXBsYWNlaG9sZGVyLW1ldGFkYXRhJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc2VzOiAnc2VhcmNoLXJlc3VsdC1wbGFjZWhvbGRlci1tZXRhZGF0YScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NlczogJ3NlYXJjaC1yZXN1bHQtcGxhY2Vob2xkZXItbWV0YWRhdGEnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj48L243LWNvbnRlbnQtcGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHN1Y2Nlc3M6IGl0ZW1zID4gMCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1NVQ0NFU1MnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctZ3JpZC17eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZ3JpZCB8fCAzIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG43LWl0ZW0tcHJldmlldyAqbmdGb3I9XCJsZXQgaXRlbSBvZiAobGIud2lkZ2V0c1snbXItc2VhcmNoLXJlc3VsdHMnXS5kcy5vdXQkIHwgYXN5bmMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uNy1pdGVtLXByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGVtcHR5OiBpdGVtcyA9PT0gMCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0VNUFRZJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLXNlYXJjaF9fcmVzdWx0cy1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXItc2VhcmNoX19yZXN1bHRzLWZhbGxiYWNrLXN0cmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZmFsbGJhY2sudGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibjctYnRuIG1yLXNlYXJjaF9fcmVzdWx0cy1mYWxsYmFjay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignc2VhcmNocmVzZXQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZmFsbGJhY2suYnV0dG9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGVycm9yOiByZXF1ZXN0IHByb2JsZW0gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidFUlJPUidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXItc2VhcmNoX19yZXN1bHRzLWtvLXN0cmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy5rby50ZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibjctYnRuIG1yLXNlYXJjaF9fcmVzdWx0cy1rby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdzZWFyY2hyZXNldCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnLmtvLmJ1dHRvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxuNy1zbWFydC1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIihsYXlvdXRTdGF0ZS5nZXQkKCdyZXN1bHRzJykgfCBhc3luYykgPT09ICdTVUNDRVNTJ1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWyduNy1zbWFydC1wYWdpbmF0aW9uJ10uZHMub3V0JCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbJ243LXNtYXJ0LXBhZ2luYXRpb24nXS5lbWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8L243LXNtYXJ0LXBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuPC9kaXY+XHJcbiJdfQ==