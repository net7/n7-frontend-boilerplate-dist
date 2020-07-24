import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwPatrimonioLayoutConfig as config } from './scheda-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
let AwSchedaLayoutComponent = class AwSchedaLayoutComponent extends AbstractLayout {
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService, communication) {
        super(layoutsConfiguration.get('AwPatrimonioLayoutConfig') || config);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
        this.communication = communication;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
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
};
AwSchedaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title },
    { type: CommunicationService }
];
AwSchedaLayoutComponent = __decorate([
    Component({
        selector: 'aw-scheda-layout',
        template: "<div class=\"aw-scheda\"\n     id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n        <ng-container *ngTemplateOutlet=\"tree\"></ng-container>\n\n        <div class=\"aw-scheda__scheda-wrapper\"\n             [hidden]=\"lb.dataSource.contentIsLoading\">\n\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-smart-breadcrumbs>\n\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\n                 class=\"aw-scheda__fake-breadcrumbs\">\n            </div>\n\n            <div *ngIf=\"!lb.dataSource.currentId\"\n                 class=\"aw-scheda__intro-text\"\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\n            </div>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <!-- Empty state -->\n            <ng-container *ngIf=\"!lb.dataSource.hasContent\">\n                <ng-container *ngTemplateOutlet=\"empty\"></ng-container>\n            </ng-container>\n\n            <!-- Content sections -->\n            <ng-container *ngIf=\"lb.dataSource.hasContent\">\n                <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n            </ng-container>\n\n        </div>\n\n    </div>\n</div>\n\n<ng-template #tree>\n    <div class=\"aw-scheda__tree sticky-target\"\n         [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n        <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                           [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n        <div class=\"aw-scheda__tree-content-loading\"\n             *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n                                    [data]=\"{\n                            blocks: [{\n                                classes: 'tree-placeholder-item'\n                            }]\n                        }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-scheda__tree-content\"\n             (click)=\"lb.eventHandler.emitOuter('treeposition', $event)\"\n             [ngStyle]=\"{\n                            'max-height': lb.dataSource.treeMaxHeight,\n                            'overflow': 'auto'\n                        }\">\n            <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                     [emit]=\"lb.widgets['aw-tree'].emit\"\n                     *ngIf=\"!lb.dataSource.sidebarCollapsed\">\n            </n7-tree>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #empty>\n    <section class=\"aw-scheda__section aw-scheda__empty\"\n             [innerHTML]=\"lb.dataSource.emptyStateString\">\n    </section>\n</ng-template>\n\n<ng-template #content>\n    <section class=\"aw-scheda__section aw-scheda__image-viewer\"\n             [ngClass]=\"{ 'navigation-hidden': !lb.widgets['aw-scheda-image'].ds.hasNavigation }\"\n             [hidden]=\"!lb.dataSource.hasImage\">\n        <n7-image-viewer [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n        </n7-image-viewer>\n    </section>\n\n    <section class=\"aw-scheda__section aw-scheda__description\"\n             *ngIf=\"lb.dataSource.contentParts.content\">\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\n            <div [innerHTML]=\"part.content\"></div>\n        </div>\n    </section>\n\n    <section class=\"aw-scheda__section aw-scheda__metadata\"\n             *ngIf=\"lb.dataSource.hasMetadata\">\n        <div class=\"aw-scheda__inner-title\"\n             *ngIf=\"lb.dataSource.metadataSectionTitle\">\n            {{lb.dataSource.metadataSectionTitle}}\n        </div>\n        <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n        </n7-metadata-viewer>\n    </section>\n\n    <!-- ENTITA COLLEGATE -->\n    <section *ngIf=\"lb.dataSource.hasRelatedEntities\"\n             id=\"related-item-container\"\n             class=\"aw-scheda__section aw-scheda__related\">\n        <div class=\"aw-scheda__inner-title\">\n            {{lb.dataSource.relatedEntitiesHeader}}\n        </div>\n        <div class=\"aw-scheda__related-items n7-grid-2\">\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\n                <n7-item-preview [data]=\"preview\"\n                                 [emit]=\"lb.widgets['aw-related-entities'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n    </section>\n\n    <!-- OGGETTI CULTURALI SIMILI -->\n    <section *ngIf=\"lb.dataSource.hasSimilarItems\"\n             id=\"related-item-container\"\n             class=\"aw-scheda__section aw-scheda__related\">\n        <div class=\"aw-scheda__inner-title\">\n            {{lb.dataSource.similarItemsSectionTitle}}\n        </div>\n        <div class=\"aw-scheda__related-items n7-grid-2\">\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                <n7-item-preview [data]=\"preview\"\n                                 [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n    </section>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        Title,
        CommunicationService])
], AwSchedaLayoutComponent);
export { AwSchedaLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQU90RixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF3QixTQUFRLGNBQWM7SUFDekQsWUFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CLEVBQ25CLGFBQW1DO1FBRzNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQVQ5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBSTdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQXBDbUIsTUFBTTtZQUNQLGNBQWM7WUFDTixvQkFBb0I7WUFDYiwyQkFBMkI7WUFDdEMsZ0JBQWdCO1lBQ2IsS0FBSztZQUNKLG9CQUFvQjs7QUFSbEMsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsaWlMQUFtQztLQUNwQyxDQUFDO3FDQUlrQixNQUFNO1FBQ1AsY0FBYztRQUNOLG9CQUFvQjtRQUNiLDJCQUEyQjtRQUN0QyxnQkFBZ0I7UUFDYixLQUFLO1FBQ0osb0JBQW9CO0dBUmxDLHVCQUF1QixDQXNDbkM7U0F0Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF3UGF0cmltb25pb0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXNjaGVkYS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZWRhLWxheW91dC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAqIElmIHJlbW92ZWQsIHRoZXkgbXVzdCBhbHNvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGF5b3V0J3MgRGF0YVNvdXJjZSBmaWxlLFxuICAgKiBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIHRpdGxlU2VydmljZTogdGhpcy50aXRsZVNlcnZpY2UsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19