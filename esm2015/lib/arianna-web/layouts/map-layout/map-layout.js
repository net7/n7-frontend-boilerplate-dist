import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwMapLayoutConfig as config } from './map-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
let AwMapLayoutComponent = class AwMapLayoutComponent extends AbstractLayout {
    constructor(configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwMapLayoutConfig') || config);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
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
AwMapLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwMapLayoutComponent = __decorate([
    Component({
        selector: 'aw-map-layout',
        template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n        title: {\r\n            main: {\r\n                    text: 'I luoghi dell\\'archivio'\r\n            }\r\n        }\r\n    }\">\r\n    </n7-inner-title>\r\n\r\n    <!-- Map -->\r\n    <div class=\"aw-multimedia__map\">\r\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\r\n    </div>\r\n    <!-- END // Map -->\r\n\r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title \r\n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs \r\n                            [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview \r\n                            [data]=\"preview\" \r\n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        LayoutsConfigurationService,
        CommunicationService,
        MainStateService,
        Title])
], AwMapLayoutComponent);
export { AwMapLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLElBQUksTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFNdEYsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxjQUFjO0lBQ3RELFlBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELGFBQW1DLEVBQ25DLFNBQTJCLEVBQzNCLFlBQW1CO1FBRTNCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQU52RCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87SUFHN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQS9CMEIsb0JBQW9CO1lBQ2IsMkJBQTJCO1lBQ2xDLG9CQUFvQjtZQUN4QixnQkFBZ0I7WUFDYixLQUFLOztBQU5sQixvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsNDRFQUFnQztLQUNqQyxDQUFDO3FDQUd5QixvQkFBb0I7UUFDYiwyQkFBMkI7UUFDbEMsb0JBQW9CO1FBQ3hCLGdCQUFnQjtRQUNiLEtBQUs7R0FObEIsb0JBQW9CLENBaUNoQztTQWpDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEF3TWFwTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vbWFwLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1tYXAtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF3TWFwTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd01hcExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxyXG4gICAgSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXHJcbiAgICBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIHRpdGxlU2VydmljZTogdGhpcy50aXRsZVNlcnZpY2UsXHJcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==