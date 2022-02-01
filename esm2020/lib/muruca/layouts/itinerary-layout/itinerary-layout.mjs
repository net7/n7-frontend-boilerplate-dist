import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { MrItineraryLayoutConfig as config } from './itinerary-layout.config';
import { MrCollectionDS, MrGalleryDS, MrMetadataDS, } from '../../data-sources';
import { MrCollectionEH, MrGalleryEH } from '../../event-handlers';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/services/layouts-configuration.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../common/services/configuration.service";
import * as i4 from "../../../common/services/communication.service";
import * as i5 from "../../../common/services/main-state.service";
import * as i6 from "../../services/layout-state.service";
import * as i7 from "../../services/resource-modal.service";
import * as i8 from "@n7-frontend/components";
import * as i9 from "../../components/read-more/read-more";
import * as i10 from "../../components/gallery/gallery";
import * as i11 from "@angular/common";
import * as i12 from "../../pipes/keep-html.pipe";
const DATASOURCE_MAP = {
    collection: MrCollectionDS,
    metadata: MrMetadataDS,
    gallery: MrGalleryDS,
};
const EVENTHANDLER_MAP = {
    collection: MrCollectionEH,
    gallery: MrGalleryEH,
};
export class MrItineraryLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
        super(layoutsConfiguration.get('MrItineraryLayoutConfig') || config);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.router = router;
        this.layoutState = layoutState;
        this.modalService = modalService;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            modalService: this.modalService,
            options: this.config.options || {},
            route: this.route,
            router: this.router
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.layoutState.add('content');
            this.configId = data.configId;
            this.loadWidgets();
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const { sections } = this.configuration.get(this.configId);
        if (sections) {
            sections.forEach(({ id, type, options }) => {
                this.widgets.push({
                    id,
                    options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            });
        }
    }
}
MrItineraryLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrItineraryLayoutComponent, deps: [{ token: i1.LayoutsConfigurationService }, { token: i2.ActivatedRoute }, { token: i3.ConfigurationService }, { token: i4.CommunicationService }, { token: i5.MainStateService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i6.MrLayoutStateService }, { token: i7.MrResourceModalService }], target: i0.ɵɵFactoryTarget.Component });
MrItineraryLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MrItineraryLayoutComponent, selector: "mr-itinerary-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"mr-static mr-layout\" \n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- ITINERARY LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <div class=\"mr-static__top\">\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\n                <div class=\"mr-static__metadata\">\n                    <n7-metadata-viewer \n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\n                    </n7-metadata-viewer>\n                </div>\n            </div>\n\n            <div class=\"mr-static__content mr-side-margin\">\n                <!-- Page content html -->\n                <div class=\"mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\n    \n                <!-- Pass the list of blocks to render to the block template -->\n                <div class=\"mr-static__related-resources\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: lb.dataSource.pageConfig.sections }\"></ng-container>\n                </div>\n            </div>\n        </ng-container>\n\n    </ng-container>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n    \n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    \n                    <div class=\"mr-content-block mr-content-block-metadata\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-read-more [data]=\"section.readmore\">\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                                    [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-metadata-viewer>\n                            </mr-read-more>\n                        </div>\n                    </div>\n\n                </ng-container>\n    \n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\n                        \n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                                {{ section.title }}\n                            </h3>\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n\n                    </ng-container>\n                </ng-container>\n    \n                <!-- GALLERY -->\n                <ng-container *ngSwitchCase=\"'gallery'\">\n                    <div class=\"mr-content-block mr-content-block-gallery\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-gallery [grid]=\"section.grid\" [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \n                            </mr-gallery>\n                        </div>\n                    </div>\n                </ng-container>\n\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n", components: [{ type: i8.LoaderComponent, selector: "n7-loader", inputs: ["data"] }, { type: i8.MetadataViewerComponent, selector: "n7-metadata-viewer", inputs: ["data", "emit"] }, { type: i9.ReadMoreComponent, selector: "mr-read-more", inputs: ["data"] }, { type: i8.ItemPreviewComponent, selector: "n7-item-preview", inputs: ["data", "emit"] }, { type: i10.MrGalleryComponent, selector: "mr-gallery", inputs: ["data", "emit", "grid"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i11.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i11.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i11.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i11.AsyncPipe, "keepHtml": i12.EscapeHtmlPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrItineraryLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-itinerary-layout', template: "<div class=\"mr-static mr-layout\" \n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- ITINERARY LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <div class=\"mr-static__top\">\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\n                <div class=\"mr-static__metadata\">\n                    <n7-metadata-viewer \n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\n                    </n7-metadata-viewer>\n                </div>\n            </div>\n\n            <div class=\"mr-static__content mr-side-margin\">\n                <!-- Page content html -->\n                <div class=\"mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\n    \n                <!-- Pass the list of blocks to render to the block template -->\n                <div class=\"mr-static__related-resources\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: lb.dataSource.pageConfig.sections }\"></ng-container>\n                </div>\n            </div>\n        </ng-container>\n\n    </ng-container>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n    \n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    \n                    <div class=\"mr-content-block mr-content-block-metadata\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-read-more [data]=\"section.readmore\">\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                                    [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-metadata-viewer>\n                            </mr-read-more>\n                        </div>\n                    </div>\n\n                </ng-container>\n    \n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\n                        \n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                                {{ section.title }}\n                            </h3>\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n\n                    </ng-container>\n                </ng-container>\n    \n                <!-- GALLERY -->\n                <ng-container *ngSwitchCase=\"'gallery'\">\n                    <div class=\"mr-content-block mr-content-block-gallery\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-gallery [grid]=\"section.grid\" [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \n                            </mr-gallery>\n                        </div>\n                    </div>\n                </ng-container>\n\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LayoutsConfigurationService }, { type: i2.ActivatedRoute }, { type: i3.ConfigurationService }, { type: i4.CommunicationService }, { type: i5.MainStateService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i6.MrLayoutStateService }, { type: i7.MrResourceModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRpbmVyYXJ5LWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2l0aW5lcmFyeS1sYXlvdXQvaXRpbmVyYXJ5LWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2l0aW5lcmFyeS1sYXlvdXQvaXRpbmVyYXJ5LWxheW91dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU94RSxPQUFPLEVBQUUsdUJBQXVCLElBQUksTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUNMLGNBQWMsRUFDZCxXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUNMLGNBQWMsRUFDZCxXQUFXLEVBQ1osTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsTUFBTSxjQUFjLEdBQUc7SUFDckIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsT0FBTyxFQUFFLFdBQVc7Q0FDckIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsT0FBTyxFQUFFLFdBQVc7Q0FDckIsQ0FBQztBQU1GLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFjO0lBRzVELFlBQ0Usb0JBQWlELEVBQ3pDLGNBQThCLEVBQzlCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLFNBQTJCLEVBQzNCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZixXQUFpQyxFQUNqQyxZQUFvQztRQUUzQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFUN0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7SUFHN0MsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFO29CQUNGLE9BQU87b0JBQ1AsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzt1SEF4RFUsMEJBQTBCOzJHQUExQiwwQkFBMEIsa0ZDbkN2Qyw2M0pBMkdBOzJGRHhFYSwwQkFBMEI7a0JBSnRDLFNBQVM7K0JBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJJdGluZXJhcnlMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9pdGluZXJhcnktbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQge1xuICBNckNvbGxlY3Rpb25EUyxcbiAgTXJHYWxsZXJ5RFMsXG4gIE1yTWV0YWRhdGFEUyxcbn0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCB7XG4gIE1yQ29sbGVjdGlvbkVILFxuICBNckdhbGxlcnlFSFxufSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcbiAgbWV0YWRhdGE6IE1yTWV0YWRhdGFEUyxcbiAgZ2FsbGVyeTogTXJHYWxsZXJ5RFMsXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25FSCxcbiAgZ2FsbGVyeTogTXJHYWxsZXJ5RUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1pdGluZXJhcnktbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0aW5lcmFyeS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1ySXRpbmVyYXJ5TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01ySXRpbmVyYXJ5TGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgbGF5b3V0U3RhdGU6IHRoaXMubGF5b3V0U3RhdGUsXG4gICAgICBtb2RhbFNlcnZpY2U6IHRoaXMubW9kYWxTZXJ2aWNlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlclxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG4gICAgaWYgKHNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkLCB0eXBlLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbdHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW3R5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibXItc3RhdGljIG1yLWxheW91dFwiIFxuICAgICAqbmdJZj1cImxiLmRhdGFTb3VyY2UgJiYgbGIuZGF0YVNvdXJjZS5wYWdlQ29uZmlnXCJcbiAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnaXMtbG9hZGluZyc6ICggbGF5b3V0U3RhdGUuZ2V0JCgnY29udGVudCcpIHwgYXN5bmMgKSA9PSAnTE9BRElORycsXG4gICAgICAgICdpcy1lcnJvcic6ICggbGF5b3V0U3RhdGUuZ2V0JCgnY29udGVudCcpIHwgYXN5bmMgKSA9PSAnRVJST1InXG4gICAgICB9XCI+XG4gICAgPCEtLSBJVElORVJBUlkgTEFZT1VUIENPTlRFTlQgLS0+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibGF5b3V0U3RhdGUuZ2V0JCgnY29udGVudCcpIHwgYXN5bmNcIj5cbiAgICAgICAgPCEtLSBsb2FkaW5nIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTE9BRElORydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1sYXlvdXRfX2xvYWRlclwiPlxuICAgICAgICAgICAgICAgIDxuNy1sb2FkZXI+PC9uNy1sb2FkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBlcnJvciAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0VSUk9SJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLWxheW91dF9fZXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8aDI+e3sgbGIuZGF0YVNvdXJjZS5lcnJvclRpdGxlIH19PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57eyBsYi5kYXRhU291cmNlLmVycm9yRGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBzdWNjZXNzIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInU1VDQ0VTUydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1zdGF0aWNfX3RvcFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1yLXN0YXRpY19fdGl0bGUgbXItZ2VuZXJhdGVkLXRpdGxlLVdQXCI+e3tsYi5kYXRhU291cmNlLnRpdGxlfX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1zdGF0aWNfX21ldGFkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuNy1tZXRhZGF0YS12aWV3ZXIgXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ21yLXN0YXRpYy1tZXRhZGF0YSddLmRzLm91dCQgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgICAgICA8L243LW1ldGFkYXRhLXZpZXdlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItc3RhdGljX19jb250ZW50IG1yLXNpZGUtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBQYWdlIGNvbnRlbnQgaHRtbCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItd3AtY29udGVudFwiIFtpbm5lckhUTUxdPVwibGIuZGF0YVNvdXJjZS5jb250ZW50IHwga2VlcEh0bWxcIj48L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8IS0tIFBhc3MgdGhlIGxpc3Qgb2YgYmxvY2tzIHRvIHJlbmRlciB0byB0aGUgYmxvY2sgdGVtcGxhdGUgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLXN0YXRpY19fcmVsYXRlZC1yZXNvdXJjZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJsb2NrczsgY29udGV4dDogeyAkaW1wbGljaXQ6IGxiLmRhdGFTb3VyY2UucGFnZUNvbmZpZy5zZWN0aW9ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2Jsb2NrcyBsZXQtbGlzdD5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIGxpc3RcIj5cbiAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJsYi53aWRnZXRzW3NlY3Rpb24uaWRdLmRzLm91dCQgfCBhc3luY1wiXG4gICAgICAgIGNsYXNzPVwie3sgJ21yLXJlc291cmNlX19zZWN0aW9uIG1yLXJlc291cmNlX18nICsgc2VjdGlvbi50eXBlIH19XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzZWN0aW9uLnR5cGVcIj5cbiAgICBcbiAgICAgICAgICAgICAgICA8IS0tIE1FVEFEQVRBIFZJRVdFUiAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbWV0YWRhdGEnXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItY29udGVudC1ibG9jayBtci1jb250ZW50LWJsb2NrLW1ldGFkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgKm5nSWY9XCJzZWN0aW9uLnRpdGxlXCIgY2xhc3M9XCJtci1jb250ZW50LWJsb2NrX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlY3Rpb24udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItY29udGVudC1ibG9ja19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtci1yZWFkLW1vcmUgW2RhdGFdPVwic2VjdGlvbi5yZWFkbW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bjctbWV0YWRhdGEtdmlld2VyIFtkYXRhXT1cImxiLndpZGdldHNbc2VjdGlvbi5pZF0uZHMub3V0JCB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbc2VjdGlvbi5pZF0uZW1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L243LW1ldGFkYXRhLXZpZXdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21yLXJlYWQtbW9yZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gQ09MTEVDVElPTiAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY29sbGVjdGlvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxiLndpZGdldHNbc2VjdGlvbi5pZF0uZHMub3V0JCB8IGFzeW5jIGFzIGNvbGxlY3Rpb24kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2xsZWN0aW9uJC5pdGVtcz8ubGVuZ3RoID4gMFwiIGNsYXNzPVwibXItY29udGVudC1ibG9jayBtci1jb250ZW50LWJsb2NrLWNvbGxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgKm5nSWY9XCJzZWN0aW9uLnRpdGxlXCIgY2xhc3M9XCJtci1jb250ZW50LWJsb2NrX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZWN0aW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItY29udGVudC1ibG9ja19fY29udGVudCB7eyBzZWN0aW9uLmdyaWQgPyAnbjctZ3JpZC0nICsgc2VjdGlvbi5ncmlkIDogJycgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG43LWl0ZW0tcHJldmlldyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb2xsZWN0aW9uJD8uaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiaXRlbVwiIFtlbWl0XT1cImxiLndpZGdldHNbc2VjdGlvbi5pZF0uZW1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L243LWl0ZW0tcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gR0FMTEVSWSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZ2FsbGVyeSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLWNvbnRlbnQtYmxvY2sgbXItY29udGVudC1ibG9jay1nYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgKm5nSWY9XCJzZWN0aW9uLnRpdGxlXCIgY2xhc3M9XCJtci1jb250ZW50LWJsb2NrX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlY3Rpb24udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItY29udGVudC1ibG9ja19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtci1nYWxsZXJ5IFtncmlkXT1cInNlY3Rpb24uZ3JpZFwiIFtkYXRhXT1cImxiLndpZGdldHNbc2VjdGlvbi5pZF0uZHMub3V0JCB8IGFzeW5jXCIgW2VtaXRdPVwibGIud2lkZ2V0c1tzZWN0aW9uLmlkXS5lbWl0XCI+ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21yLWdhbGxlcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuIl19