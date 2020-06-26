import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MrInnerTitleDS } from '../../data-sources/inner-title.ds';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrResourceLayoutConfig as config } from './resource-layout.config';
import { MrImageViewerDS } from '../../data-sources/image-viewer.ds';
import { MrImageViewerEH } from '../../event-handlers/image-viewer.eh';
import { MrMetadataDS } from '../../data-sources/metadata.ds';
import { MrItemPreviewDS } from '../../data-sources/item-preview.ds';
import { MrCollectionDS } from '../../data-sources/collection.ds';
const DATASOURCE_MAP = {
    viewer: MrImageViewerDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    title: MrInnerTitleDS,
    collection: MrCollectionDS
};
const EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
};
let MrResourceLayoutComponent = class MrResourceLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || config);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            options: this.config.options || {},
            route: this.route
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
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
        this.widgets = [];
        if (sections) {
            sections.forEach(({ id, type }) => {
                this.widgets.push({
                    id,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            });
        }
    }
};
MrResourceLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: ActivatedRoute }
];
MrResourceLayoutComponent = __decorate([
    Component({
        selector: 'mr-resource-layout',
        template: "<div class=\"mr-resource mr-layout\"\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\">\n  <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\"\n           class=\"{{ 'mr-layout__' + section.type }}\">\n    <ng-container [ngSwitch]=\"section.type\">\n\n      <!-- INNER TITLE -->\n      <ng-container *ngSwitchCase=\"'title'\">\n        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n        </n7-inner-title>\n      </ng-container>\n\n      <!-- IMAGE VIEWER -->\n      <ng-container *ngSwitchCase=\"'viewer'\">\n        <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-image-viewer>\n      </ng-container>\n\n      <!-- METADATA VIEWER -->\n      <ng-container *ngSwitchCase=\"'metadata'\">\n        <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n        </n7-metadata-viewer>\n      </ng-container>\n\n      <!-- COLLECTION -->\n      <ng-container *ngSwitchCase=\"'collection'\">\n        <div class=\"mr-layout__maxwidth mr-items-preview\">\n          <n7-inner-title [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n          <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n            <n7-item-preview *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                             [data]=\"item\"\n                             [emit]=\"lb.widgets[section.id].emit\">\n            </n7-item-preview>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- ITEM PREVIEW -->\n      <ng-container *ngSwitchCase=\"'preview'\">\n        <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-item-preview>\n      </ng-container>\n\n    </ng-container>\n  </section>\n</div>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute])
], MrResourceLayoutComponent);
export { MrResourceLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLFVBQVUsRUFBRSxjQUFjO0NBQzNCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxlQUFlO0NBQ3hCLENBQUM7QUFNRixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUEwQixTQUFRLGNBQWM7SUFHM0QsWUFDRSxvQkFBaUQsRUFDekMsY0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsS0FBcUI7UUFFN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBTjVELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBRy9CLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7WUFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFO29CQUNGLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUNoQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2lCQUNyQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBL0N5QiwyQkFBMkI7WUFDekIsY0FBYztZQUNmLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ3BCLGNBQWM7O0FBVHBCLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGttRUFBcUM7S0FDdEMsQ0FBQztxQ0FLd0IsMkJBQTJCO1FBQ3pCLGNBQWM7UUFDZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3hCLGdCQUFnQjtRQUNwQixjQUFjO0dBVHBCLHlCQUF5QixDQW1EckM7U0FuRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTXJJbm5lclRpdGxlRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvaW5uZXItdGl0bGUuZHMnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcmVzb3VyY2UtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBNckltYWdlVmlld2VyRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ltYWdlLXZpZXdlci5laCc7XG5pbXBvcnQgeyBNck1ldGFkYXRhRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvbWV0YWRhdGEuZHMnO1xuaW1wb3J0IHsgTXJJdGVtUHJldmlld0RTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2l0ZW0tcHJldmlldy5kcyc7XG5pbXBvcnQgeyBNckNvbGxlY3Rpb25EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9jb2xsZWN0aW9uLmRzJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIHZpZXdlcjogTXJJbWFnZVZpZXdlckRTLFxuICBtZXRhZGF0YTogTXJNZXRhZGF0YURTLFxuICBwcmV2aWV3OiBNckl0ZW1QcmV2aWV3RFMsXG4gIHRpdGxlOiBNcklubmVyVGl0bGVEUyxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRFNcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIHZpZXdlcjogTXJJbWFnZVZpZXdlckVILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItcmVzb3VyY2UtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc291cmNlLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclJlc291cmNlTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgaWYgKHNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkLCB0eXBlIH0pID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19