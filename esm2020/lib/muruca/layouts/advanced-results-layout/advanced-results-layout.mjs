import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrAdvancedResultsLayoutConfig as config } from './advanced-results-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../common/services/main-state.service";
import * as i3 from "../../../common/services/configuration.service";
import * as i4 from "../../../common/services/communication.service";
import * as i5 from "../../services/layout-state.service";
import * as i6 from "../../services/resource-modal.service";
import * as i7 from "../../../common/services/layouts-configuration.service";
import * as i8 from "@n7-frontend/components";
import * as i9 from "../../components/advanced-result/advanced-result";
import * as i10 from "../../../common/components/smart-pagination/smart-pagination";
import * as i11 from "@angular/common";
export class MrAdvancedResultsLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, communication, layoutState, modalService, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrAdvancedResultsLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
        this.communication = communication;
        this.layoutState = layoutState;
        this.modalService = modalService;
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
            modalService: this.modalService,
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
MrAdvancedResultsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrAdvancedResultsLayoutComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.MainStateService }, { token: i3.ConfigurationService }, { token: i4.CommunicationService }, { token: i5.MrLayoutStateService }, { token: i6.MrResourceModalService }, { token: i7.LayoutsConfigurationService }], target: i0.ɵɵFactoryTarget.Component });
MrAdvancedResultsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MrAdvancedResultsLayoutComponent, selector: "mr-advanced-results-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"mr-advanced-results mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-advanced-results__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-advanced-results__results-content\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <div class=\"mr-advanced-results__results-wrapper\">\r\n                \r\n                <div class=\"mr-advanced-results__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters'] \r\n                            && (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)?.length\" \r\n                     class=\"mr-active-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-advanced-results__results\">\r\n                    \r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-advanced-results__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <!-- Use a custom item preview with clickable metadata items -->\r\n                                <mr-advanced-result\r\n                                    *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\r\n                                </mr-advanced-result>\r\n                                <!-- ../../components/advanced-result/advanced-result.html -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div *ngIf=\"lb.dataSource.pageConfig?.fallback?.text\" class=\"mr-advanced-results__results-fallback\">\r\n                                <p class=\"mr-advanced-results__feedback-text\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                    <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                        {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                    </button>\r\n                                </div> -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p *ngIf=\"lb.dataSource.pageConfig?.ko?.text\" class=\"mr-advanced-results__feedback-text\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.ko.button }}\r\n                                </button>\r\n                            </div> -->\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                \r\n                <n7-smart-pagination\r\n                    *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n", components: [{ type: i8.InnerTitleComponent, selector: "n7-inner-title", inputs: ["data", "emit"] }, { type: i8.TagComponent, selector: "n7-tag", inputs: ["data", "emit"] }, { type: i8.ContentPlaceholderComponent, selector: "n7-content-placeholder", inputs: ["data"] }, { type: i9.MrAdvancedResultComponent, selector: "mr-advanced-result", inputs: ["data", "emit"] }, { type: i10.SmartPaginationComponent, selector: "n7-smart-pagination", inputs: ["data", "emit"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i11.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], pipes: { "async": i11.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrAdvancedResultsLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-advanced-results-layout', template: "<div class=\"mr-advanced-results mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-advanced-results__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-advanced-results__results-content\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <div class=\"mr-advanced-results__results-wrapper\">\r\n                \r\n                <div class=\"mr-advanced-results__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters'] \r\n                            && (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)?.length\" \r\n                     class=\"mr-active-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-advanced-results__results\">\r\n                    \r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-advanced-results__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <!-- Use a custom item preview with clickable metadata items -->\r\n                                <mr-advanced-result\r\n                                    *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\r\n                                </mr-advanced-result>\r\n                                <!-- ../../components/advanced-result/advanced-result.html -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div *ngIf=\"lb.dataSource.pageConfig?.fallback?.text\" class=\"mr-advanced-results__results-fallback\">\r\n                                <p class=\"mr-advanced-results__feedback-text\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                    <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                        {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                    </button>\r\n                                </div> -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p *ngIf=\"lb.dataSource.pageConfig?.ko?.text\" class=\"mr-advanced-results__feedback-text\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.ko.button }}\r\n                                </button>\r\n                            </div> -->\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                \r\n                <n7-smart-pagination\r\n                    *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.MainStateService }, { type: i3.ConfigurationService }, { type: i4.CommunicationService }, { type: i5.MrLayoutStateService }, { type: i6.MrResourceModalService }, { type: i7.LayoutsConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0L2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBTXhFLE9BQU8sRUFBRSw2QkFBNkIsSUFBSSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7OztBQU8zRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsY0FBYztJQUdoRSxZQUNRLE1BQWMsRUFDZCxjQUE4QixFQUM5QixTQUEyQixFQUMzQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNwQyxXQUFpQyxFQUNqQyxZQUFvQyxFQUMzQyxvQkFBaUQ7UUFFL0MsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBVHJFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQXdCO0lBSTNDLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OzZIQXpDUSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQyx5RkNmN0MscW1NQTBHQTsyRkQzRmEsZ0NBQWdDO2tCQUo1QyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UsXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcclxuICAgICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcclxuICAgICAgICBhY3RpdmF0ZWRSb3V0ZTogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcclxuICAgICAgICBtb2RhbFNlcnZpY2U6IHRoaXMubW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgICAvLyBhZGQgbGF5b3V0IHN0YXRlc1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKFsncmVzdWx0cyddKTtcclxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXItYWR2YW5jZWQtcmVzdWx0cyBtci1sYXlvdXRcIlxyXG4gICAgICpuZ0lmPVwibGIuZGF0YVNvdXJjZVwiPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtci1sYXlvdXRfX21heHdpZHRoIG1yLXNpZGUtbWFyZ2luXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX190aXRsZVwiPlxyXG4gICAgICAgICAgICA8bjctaW5uZXItdGl0bGVcclxuICAgICAgICAgICAgW2RhdGFdPVwibGIud2lkZ2V0c1snbXItc2VhcmNoLXBhZ2UtdGl0bGUnXS5kcy5vdXQkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzWydtci1zZWFyY2gtcGFnZS10aXRsZSddLmVtaXRcIj5cclxuICAgICAgICAgICAgPC9uNy1pbm5lci10aXRsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXItYWR2YW5jZWQtcmVzdWx0c19fcmVzdWx0cy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtcmVmXCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19yZXN1bHRzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLWFkdmFuY2VkLXJlc3VsdHNfX3Jlc3VsdHMtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuNy1pbm5lci10aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJ10uZHMub3V0JCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzWydtci1zZWFyY2gtcmVzdWx0cy10aXRsZSddLmVtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L243LWlubmVyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsYi5kYXRhU291cmNlLnBhZ2VDb25maWdbJ2ZpbHRlcnMnXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChsYi53aWRnZXRzWydtci1hZHZhbmNlZC1zZWFyY2gtdGFncyddLmRzLm91dCQgfCBhc3luYyk/Lmxlbmd0aFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLWFjdGl2ZS1maWx0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsYi5kYXRhU291cmNlLnBhZ2VDb25maWdbJ2ZpbHRlcnMnXS50aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItYWN0aXZlLWZpbHRlcnNfX2xhYmVsXCI+e3sgbGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnWydmaWx0ZXJzJ10udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLWFjdGl2ZS1maWx0ZXJzX190YWdzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG43LXRhZyAqbmdGb3I9XCJsZXQgdGFnIG9mIChsYi53aWRnZXRzWydtci1hZHZhbmNlZC1zZWFyY2gtdGFncyddLmRzLm91dCQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwidGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbjctdGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19yZXN1bHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTRUFSQ0ggUkVTVUxUUyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJsYXlvdXRTdGF0ZS5nZXQkKCdyZXN1bHRzJykgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBsb2FkaW5nIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTE9BRElORydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19yZXN1bHRzLWxvYWRpbmcgbjctZ3JpZC17eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZ3JpZCB8fCAzIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG43LWNvbnRlbnQtcGxhY2Vob2xkZXIgKm5nRm9yPVwibGV0IG4gb2YgWzAsMSwyLDMsNCw1LDYsNyw4LDldXCIgW2RhdGFdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NlczogJ3NlYXJjaC1yZXN1bHQtcGxhY2Vob2xkZXItdGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzZXM6ICdzZWFyY2gtcmVzdWx0LXBsYWNlaG9sZGVyLW1ldGFkYXRhJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc2VzOiAnc2VhcmNoLXJlc3VsdC1wbGFjZWhvbGRlci1tZXRhZGF0YScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NlczogJ3NlYXJjaC1yZXN1bHQtcGxhY2Vob2xkZXItbWV0YWRhdGEnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj48L243LWNvbnRlbnQtcGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHN1Y2Nlc3M6IGl0ZW1zID4gMCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1NVQ0NFU1MnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctZ3JpZC17eyBsYi5kYXRhU291cmNlLnBhZ2VDb25maWcuZ3JpZCB8fCAzIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2UgYSBjdXN0b20gaXRlbSBwcmV2aWV3IHdpdGggY2xpY2thYmxlIG1ldGFkYXRhIGl0ZW1zIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtci1hZHZhbmNlZC1yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGxiLndpZGdldHNbJ21yLXNlYXJjaC1yZXN1bHRzJ10uZHMub3V0JCB8IGFzeW5jKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIml0ZW1cIiBbZW1pdF09XCJsYi53aWRnZXRzWydtci1zZWFyY2gtcmVzdWx0cyddLmVtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21yLWFkdmFuY2VkLXJlc3VsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC4uLy4uL2NvbXBvbmVudHMvYWR2YW5jZWQtcmVzdWx0L2FkdmFuY2VkLXJlc3VsdC5odG1sIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBlbXB0eTogaXRlbXMgPT09IDAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidFTVBUWSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsYi5kYXRhU291cmNlLnBhZ2VDb25maWc/LmZhbGxiYWNrPy50ZXh0XCIgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19yZXN1bHRzLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19mZWVkYmFjay10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy5mYWxsYmFjay50ZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm1yLWFkdmFuY2VkLXJlc3VsdHNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm43LWJ0biBuNy1idG4teGwgbXItYWR2YW5jZWQtcmVzdWx0c19fcmVzdWx0cy1mYWxsYmFjay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignc2VhcmNocmVzZXQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnLmZhbGxiYWNrLmJ1dHRvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGVycm9yOiByZXF1ZXN0IHByb2JsZW0gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidFUlJPUidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnPy5rbz8udGV4dFwiIGNsYXNzPVwibXItYWR2YW5jZWQtcmVzdWx0c19fZmVlZGJhY2stdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy5rby50ZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJtci1hZHZhbmNlZC1yZXN1bHRzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm43LWJ0biBuNy1idG4teGwgbXItYWR2YW5jZWQtcmVzdWx0c19fcmVzdWx0cy1rby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdzZWFyY2hyZXNldCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy5rby5idXR0b24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bjctc21hcnQtcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKGxheW91dFN0YXRlLmdldCQoJ3Jlc3VsdHMnKSB8IGFzeW5jKSA9PT0gJ1NVQ0NFU1MnXCJcclxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzWyduNy1zbWFydC1wYWdpbmF0aW9uJ10uZHMub3V0JCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzWyduNy1zbWFydC1wYWdpbmF0aW9uJ10uZW1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9uNy1zbWFydC1wYWdpbmF0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PlxyXG4iXX0=