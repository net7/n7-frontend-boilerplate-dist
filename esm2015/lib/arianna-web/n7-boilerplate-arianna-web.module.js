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
import { AwCollectionLayoutComponent } from './layouts/collection-layout/collection-layout';
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
    AwCollectionLayoutComponent,
    AwEntitaLayoutComponent,
    AwFacetsWrapperComponent,
    AwGalleryLayoutComponent,
    AwHomeLayoutComponent,
    AwMapLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    AwTimelineLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    PdfViewerComponent,
    SchedaDropdownComponent,
    SmartBreadcrumbsComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkYsVUFBVTtBQUNWLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPO0FBRVAsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtDQUMxQixDQUFDO0FBY0YsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFDeEMsWUFDRSxVQUFpQyxFQUNqQyxNQUE0QjtRQUU1QixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMvQixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxhQUFhLENBQUM7WUFDMUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBWmUscUJBQXFCO1lBQ3pCLG9CQUFvQjs7QUFIbkIsNkJBQTZCO0lBWnpDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxVQUFVO1FBQ3hCLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHlCQUF5QjtZQUN6QiwwQkFBMEI7U0FDM0I7UUFDRCxlQUFlLEVBQUUsVUFBVTtRQUMzQixPQUFPLEVBQUUsVUFBVTtLQUNwQixDQUFDO3FDQUdjLHFCQUFxQjtRQUN6QixvQkFBb0I7R0FIbkIsNkJBQTZCLENBY3pDO1NBZFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uSW5pdFN0YXR1cyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlck1vZHVsZSB9IGZyb20gJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvY29sbGVjdGlvbi1sYXlvdXQvY29sbGVjdGlvbi1sYXlvdXQnO1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZW50aXRhLWxheW91dC9lbnRpdGEtbGF5b3V0JztcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dCc7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdNYXBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFwLWxheW91dC9tYXAtbGF5b3V0JztcbmltcG9ydCB7IEF3U2NoZWRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dCc7XG5pbXBvcnQgeyBBd1NlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdUaW1lbGluZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90aW1lbGluZS1sYXlvdXQvdGltZWxpbmUtbGF5b3V0Jztcbi8vIENPTVBPTkVOVFNcbmltcG9ydCB7IEF3RmFjZXRzV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlcic7XG5pbXBvcnQgeyBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnViYmxlLWNoYXJ0LXdyYXBwZXIvYnViYmxlLWNoYXJ0LXdyYXBwZXInO1xuaW1wb3J0IHsgQ2hhcnRUaXBweUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweSc7XG5pbXBvcnQgeyBQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGRmLXZpZXdlci9wZGYtdmlld2VyJztcbmltcG9ydCB7IFNjaGVkYURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NjaGVkYS1kcm9wZG93bi9zY2hlZGEtZHJvcGRvd24nO1xuaW1wb3J0IHsgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icyc7XG4vLyBMSUJTXG5cbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgYXBvbGxvQ29uZmlnIGZyb20gJy4vY29uZmlnL2Fwb2xsby5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQsXG4gIEF3RW50aXRhTGF5b3V0Q29tcG9uZW50LFxuICBBd0ZhY2V0c1dyYXBwZXJDb21wb25lbnQsXG4gIEF3R2FsbGVyeUxheW91dENvbXBvbmVudCxcbiAgQXdIb21lTGF5b3V0Q29tcG9uZW50LFxuICBBd01hcExheW91dENvbXBvbmVudCxcbiAgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQsXG4gIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50LFxuICBBd1RpbWVsaW5lTGF5b3V0Q29tcG9uZW50LFxuICBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQsXG4gIENoYXJ0VGlwcHlDb21wb25lbnQsXG4gIFBkZlZpZXdlckNvbXBvbmVudCxcbiAgU2NoZWRhRHJvcGRvd25Db21wb25lbnQsXG4gIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpbml0U3RhdHVzOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMsXG4gICAgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZVxuICApIHtcbiAgICAvLyBhZGQgYXBvbGxvIGNvbmZpZyBvbiBhcHAgaW5pdFxuICAgIC8vIG5vdGU6IHRoaXMgaXMganVzdCBmb3IgYXJpYW5uYSogc2l0ZXMhXG4gICAgaW5pdFN0YXR1cy5kb25lUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbW11bmljYXRpb24gPSBjb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciB9ID0gY29tbXVuaWNhdGlvbjtcbiAgICAgIGNvbW11bmljYXRpb24ucHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0uY29uZmlnID0gYXBvbGxvQ29uZmlnO1xuICAgICAgY29uZmlnLnNldCgnY29tbXVuaWNhdGlvbicsIGNvbW11bmljYXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=