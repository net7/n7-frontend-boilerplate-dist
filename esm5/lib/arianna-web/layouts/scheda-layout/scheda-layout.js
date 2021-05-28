import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwPatrimonioLayoutConfig as config } from './scheda-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
var AwSchedaLayoutComponent = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutComponent, _super);
    function AwSchedaLayoutComponent(router, route, configuration, layoutsConfiguration, mainState, titleService, communication) {
        var _this = _super.call(this, layoutsConfiguration.get('AwPatrimonioLayoutConfig') || config) || this;
        _this.router = router;
        _this.route = route;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.titleService = titleService;
        _this.communication = communication;
        return _this;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    AwSchedaLayoutComponent.prototype.initPayload = function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    };
    AwSchedaLayoutComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    AwSchedaLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    AwSchedaLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: Title },
        { type: CommunicationService }
    ]; };
    AwSchedaLayoutComponent = __decorate([
        Component({
            selector: 'aw-scheda-layout',
            template: "<div class=\"aw-scheda\"\r\n     id=\"scheda-layout\">\r\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\r\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\r\n\r\n        <ng-container *ngTemplateOutlet=\"tree\"></ng-container>\r\n\r\n        <div class=\"aw-scheda__scheda-wrapper\"\r\n             [hidden]=\"lb.dataSource.contentIsLoading\">\r\n\r\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\r\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\r\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\r\n            </n7-smart-breadcrumbs>\r\n\r\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\r\n                 class=\"aw-scheda__fake-breadcrumbs\"\r\n                 (click)=\"lb.eventHandler.emitInner('togglesidebar', {})\">\r\n                 <p class=\"aw-scheda__fake-breadcrumbs-open\" \r\n                    *ngIf=\"lb.dataSource.sidebarCollapsed\">\r\n                    Consulta il patrimonio\r\n                 </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"!lb.dataSource.currentId\"\r\n                 class=\"aw-scheda__intro-text\"\r\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\r\n            </div>\r\n\r\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n\r\n            <!-- Empty state -->\r\n            <ng-container *ngIf=\"!lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"empty\"></ng-container>\r\n            </ng-container>\r\n\r\n            <!-- Content sections -->\r\n            <ng-container *ngIf=\"lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #tree>\r\n    <div class=\"aw-scheda__tree sticky-target\"\r\n         [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n        <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\r\n                           [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\r\n        <div class=\"aw-scheda__tree-content-loading\"\r\n             *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n                                    [data]=\"{\r\n                            blocks: [{\r\n                                classes: 'tree-placeholder-item'\r\n                            }]\r\n                        }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-scheda__tree-content\"\r\n             (click)=\"lb.eventHandler.emitOuter('treeposition', $event)\"\r\n             [ngStyle]=\"{\r\n                            'max-height': lb.dataSource.treeMaxHeight,\r\n                            'overflow': 'auto'\r\n                        }\">\r\n            <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\r\n                     [emit]=\"lb.widgets['aw-tree'].emit\"\r\n                     *ngIf=\"!lb.dataSource.sidebarCollapsed\">\r\n            </n7-tree>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #empty>\r\n    <section class=\"aw-scheda__section aw-scheda__empty\"\r\n             [innerHTML]=\"lb.dataSource.emptyStateString\">\r\n    </section>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n    <!-- Digital Object selection dropdown -->\r\n    <section class=\"aw-scheda__digital-object-dropdown\"\r\n            *ngIf=\"(\r\n                lb.dataSource.hasDigitalObjects \r\n                && lb.dataSource.digitalObjects.length > 1\r\n            )\">\r\n        <p class=\"aw-scheda__digital-object-dropdown-label\">\r\n            Seleziona l'oggetto digitale da visualizzare:\r\n        </p>\r\n        <aw-scheda-dropdown \r\n        [data]=\"lb.widgets['aw-scheda-dropdown'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['aw-scheda-dropdown'].emit\">\r\n        </aw-scheda-dropdown>\r\n    </section>\r\n    <!-- END // Digital Object selection dropdown -->\r\n\r\n    <!-- Digital Objects: images, IIP, PDFs, external links -->\r\n    <section *ngIf=\"lb.dataSource.currentDigitalObject as $do\" \r\n        class=\"aw-scheda__media aw-scheda__{{ $do.type }}\"\r\n        [ngClass]=\"{ \r\n            'navigation-hidden': !$do.hasNavigation\r\n        }\">\r\n        <ng-container [ngSwitch]=\"$do.type\">\r\n            <!-- IMAGE VIEWER (IIIF) -->\r\n            <ng-container *ngSwitchCase=\"'images-iiif'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\" \r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n\r\n            <!-- IMAGE VIEWER (Simple: jpg, png) -->\r\n            <ng-container *ngSwitchCase=\"'images-simple'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\"\r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- PDF -->\r\n            <ng-container *ngSwitchCase=\"'pdf'\">\r\n                <aw-pdf-viewer \r\n                [data]=\"lb.widgets['aw-scheda-pdf'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-scheda-pdf'].emit\">\r\n                </aw-pdf-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- EXTERNAL URL -->\r\n            <ng-container *ngSwitchCase=\"'external'\">\r\n                <div class=\"aw-scheda__external-url\">\r\n                    <a class=\"aw-scheda__external-url-link\" href=\"{{ $do.url }}\" target=\"_blank\">\r\n                        {{ $do.label || lb.dataSource.externalUrlText }}\r\n                        <span class=\"n7-icon-external-link\"></span>\r\n                    </a>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n    </section>\r\n    <!-- END // Digital Objects -->\r\n\r\n    <section class=\"aw-scheda__section aw-scheda__description\"\r\n             *ngIf=\"lb.dataSource.contentParts.content\">\r\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\r\n            <div [innerHTML]=\"part.content\"></div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Metadata -->\r\n    <section class=\"aw-scheda__section aw-scheda__metadata\"\r\n             *ngIf=\"lb.dataSource.hasMetadata\">\r\n        <div class=\"aw-scheda__inner-title\"\r\n             *ngIf=\"lb.dataSource.metadataSectionTitle\">\r\n            {{lb.dataSource.metadataSectionTitle}}\r\n        </div>\r\n        <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\r\n        </n7-metadata-viewer>\r\n    </section>\r\n    <!-- END // Metadata -->\r\n\r\n    <!-- Related entities -->\r\n    <section *ngIf=\"lb.dataSource.hasRelatedEntities\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.relatedEntitiesHeader}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                     [emit]=\"lb.widgets['aw-related-entities'].emit\">\r\n                    </n7-item-preview>\r\n                    <!-- Relation -->\r\n                    <div class=\"aw-item-preview-relation\"\r\n                         *ngIf=\"preview.relation?.value\">\r\n                        <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                            <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                            <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Related entities -->\r\n\r\n    <!-- Similar Objects -->\r\n    <section *ngIf=\"lb.dataSource.hasSimilarItems\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.similarItemsSectionTitle}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                    </n7-item-preview>\r\n                </div> \r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Similar Objects -->\r\n</ng-template>\r\n"
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            ConfigurationService,
            LayoutsConfigurationService,
            MainStateService,
            Title,
            CommunicationService])
    ], AwSchedaLayoutComponent);
    return AwSchedaLayoutComponent;
}(AbstractLayout));
export { AwSchedaLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQU90RjtJQUE2QywyQ0FBYztJQUN6RCxpQ0FDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CLEVBQ25CLGFBQW1DO1FBUDdDLFlBVUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ3RFO1FBVlMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ25CLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjs7SUFJN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyw2Q0FBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBbkNpQixNQUFNO2dCQUNQLGNBQWM7Z0JBQ04sb0JBQW9CO2dCQUNiLDJCQUEyQjtnQkFDdEMsZ0JBQWdCO2dCQUNiLEtBQUs7Z0JBQ0osb0JBQW9COztJQVJsQyx1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixvdlNBQW1DO1NBQ3BDLENBQUM7eUNBSWtCLE1BQU07WUFDUCxjQUFjO1lBQ04sb0JBQW9CO1lBQ2IsMkJBQTJCO1lBQ3RDLGdCQUFnQjtZQUNiLEtBQUs7WUFDSixvQkFBb0I7T0FSbEMsdUJBQXVCLENBc0NuQztJQUFELDhCQUFDO0NBQUEsQUF0Q0QsQ0FBNkMsY0FBYyxHQXNDMUQ7U0F0Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1zY2hlZGEtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZWRhLWxheW91dC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3UGF0cmltb25pb0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXHJcbiAgICogSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXHJcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19