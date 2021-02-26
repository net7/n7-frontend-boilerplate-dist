import { __decorate, __metadata } from "tslib";
// MODULES
import { NgModule, ApplicationInitStatus } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterModule } from '@angular/router';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwEntitaLayoutComponent } from './layouts/entita-layout/entita-layout';
import { AwGalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout';
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwMapLayoutComponent } from './layouts/map-layout/map-layout';
import { AwSchedaLayoutComponent } from './layouts/scheda-layout/scheda-layout';
import { AwSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { AwTimelineLayoutComponent } from './layouts/timeline-layout/timeline-layout';
// COMPONENTS
import { AwFacetsWrapperComponent } from './components/aw-facets-wrapper/aw-facets-wrapper';
import { BubbleChartWrapperComponent } from './components/bubble-chart-wrapper/bubble-chart-wrapper';
import { ChartTippyComponent } from './components/chart-tippy/chart-tippy';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer';
import { SchedaDropdownComponent } from './components/scheda-dropdown/scheda-dropdown';
import { SmartBreadcrumbsComponent } from './components/smart-breadcrumbs/smart-breadcrumbs';
// LIBS
import { ConfigurationService } from '../common/services/configuration.service';
import apolloConfig from './config/apollo.config';
const COMPONENTS = [
    AwEntitaLayoutComponent,
    AwGalleryLayoutComponent,
    AwHomeLayoutComponent,
    AwMapLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    AwTimelineLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    SmartBreadcrumbsComponent,
    AwFacetsWrapperComponent,
    PdfViewerComponent,
    SchedaDropdownComponent,
];
let N7BoilerplateAriannaWebModule = class N7BoilerplateAriannaWebModule {
    constructor(initStatus, config) {
        // add apollo config on app init
        // note: this is just for arianna* sites!
        initStatus.donePromise.then(() => {
            const communication = config.get('communication');
            const { defaultProvider } = communication;
            communication.providers[defaultProvider].config = apolloConfig;
            config.set('communication', communication);
        });
    }
};
N7BoilerplateAriannaWebModule.ctorParameters = () => [
    { type: ApplicationInitStatus },
    { type: ConfigurationService }
];
N7BoilerplateAriannaWebModule = __decorate([
    NgModule({
        declarations: COMPONENTS,
        imports: [
            CommonModule,
            RouterModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
            NgxExtendedPdfViewerModule
        ],
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    }),
    __metadata("design:paramtypes", [ApplicationInitStatus,
        ConfigurationService])
], N7BoilerplateAriannaWebModule);
export { N7BoilerplateAriannaWebModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkYsVUFBVTtBQUNWLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPO0FBRVAsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUJBQXVCO0NBQ3hCLENBQUM7QUFjRixJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQUN4QyxZQUNFLFVBQWlDLEVBQ2pDLE1BQTRCO1FBRTVCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQy9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLGFBQWEsQ0FBQztZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUFaZSxxQkFBcUI7WUFDekIsb0JBQW9COztBQUhuQiw2QkFBNkI7SUFaekMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLFVBQVU7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixxQkFBcUI7WUFDckIseUJBQXlCO1lBQ3pCLDBCQUEwQjtTQUMzQjtRQUNELGVBQWUsRUFBRSxVQUFVO1FBQzNCLE9BQU8sRUFBRSxVQUFVO0tBQ3BCLENBQUM7cUNBR2MscUJBQXFCO1FBQ3pCLG9CQUFvQjtHQUhuQiw2QkFBNkIsQ0FjekM7U0FkWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIH0gZnJvbSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBMQVlPVVRTXHJcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dCc7XHJcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dCc7XHJcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XHJcbmltcG9ydCB7IEF3TWFwTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dCc7XHJcbmltcG9ydCB7IEF3U2NoZWRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dCc7XHJcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XHJcbmltcG9ydCB7IEF3VGltZWxpbmVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dCc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgQXdGYWNldHNXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F3LWZhY2V0cy13cmFwcGVyL2F3LWZhY2V0cy13cmFwcGVyJztcclxuaW1wb3J0IHsgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC13cmFwcGVyL2J1YmJsZS1jaGFydC13cmFwcGVyJztcclxuaW1wb3J0IHsgQ2hhcnRUaXBweUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweSc7XHJcbmltcG9ydCB7IFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtdmlld2VyL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBTY2hlZGFEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlZGEtZHJvcGRvd24vc2NoZWRhLWRyb3Bkb3duJztcclxuaW1wb3J0IHsgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icyc7XHJcbi8vIExJQlNcclxuXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCBhcG9sbG9Db25maWcgZnJvbSAnLi9jb25maWcvYXBvbGxvLmNvbmZpZyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIEF3RW50aXRhTGF5b3V0Q29tcG9uZW50LFxyXG4gIEF3R2FsbGVyeUxheW91dENvbXBvbmVudCxcclxuICBBd0hvbWVMYXlvdXRDb21wb25lbnQsXHJcbiAgQXdNYXBMYXlvdXRDb21wb25lbnQsXHJcbiAgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQsXHJcbiAgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQsXHJcbiAgQXdUaW1lbGluZUxheW91dENvbXBvbmVudCxcclxuICBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQsXHJcbiAgQ2hhcnRUaXBweUNvbXBvbmVudCxcclxuICBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG4gIEF3RmFjZXRzV3JhcHBlckNvbXBvbmVudCxcclxuICBQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgU2NoZWRhRHJvcGRvd25Db21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXHJcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5pdFN0YXR1czogQXBwbGljYXRpb25Jbml0U3RhdHVzLFxyXG4gICAgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gYWRkIGFwb2xsbyBjb25maWcgb24gYXBwIGluaXRcclxuICAgIC8vIG5vdGU6IHRoaXMgaXMganVzdCBmb3IgYXJpYW5uYSogc2l0ZXMhXHJcbiAgICBpbml0U3RhdHVzLmRvbmVQcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tdW5pY2F0aW9uID0gY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciB9ID0gY29tbXVuaWNhdGlvbjtcclxuICAgICAgY29tbXVuaWNhdGlvbi5wcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXS5jb25maWcgPSBhcG9sbG9Db25maWc7XHJcbiAgICAgIGNvbmZpZy5zZXQoJ2NvbW11bmljYXRpb24nLCBjb21tdW5pY2F0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=