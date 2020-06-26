import { __decorate, __metadata } from "tslib";
// MODULES
import { NgModule, ApplicationInitStatus } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterModule } from '@angular/router';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwEntitaLayoutComponent } from './layouts/entita-layout/entita-layout';
import { AwGalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout';
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwMapLayoutComponent } from './layouts/map-layout/map-layout';
import { AwSchedaLayoutComponent } from './layouts/scheda-layout/scheda-layout';
import { AwSearchLayoutComponent } from './layouts/search-layout/search-layout';
// COMPONENTS
import { ChartTippyComponent } from './components/chart-tippy/chart-tippy';
import { BubbleChartWrapperComponent } from './components/bubble-chart-wrapper/bubble-chart-wrapper';
import { SmartBreadcrumbsComponent } from './components/smart-breadcrumbs/smart-breadcrumbs';
import { ConfigurationService } from '../common/services/configuration.service';
import apolloConfig from './config/apollo.config';
var COMPONENTS = [
    AwEntitaLayoutComponent,
    AwGalleryLayoutComponent,
    AwHomeLayoutComponent,
    AwMapLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    SmartBreadcrumbsComponent,
];
var N7BoilerplateAriannaWebModule = /** @class */ (function () {
    function N7BoilerplateAriannaWebModule(initStatus, config) {
        // add apollo config on app init
        // note: this is just for arianna* sites!
        initStatus.donePromise.then(function () {
            var communication = config.get('communication');
            var defaultProvider = communication.defaultProvider;
            communication.providers[defaultProvider].config = apolloConfig;
            config.set('communication', communication);
        });
    }
    N7BoilerplateAriannaWebModule.ctorParameters = function () { return [
        { type: ApplicationInitStatus },
        { type: ConfigurationService }
    ]; };
    N7BoilerplateAriannaWebModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            imports: [
                CommonModule,
                RouterModule,
                DvComponentsLibModule,
                N7BoilerplateCommonModule,
            ],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        }),
        __metadata("design:paramtypes", [ApplicationInitStatus,
            ConfigurationService])
    ], N7BoilerplateAriannaWebModule);
    return N7BoilerplateAriannaWebModule;
}());
export { N7BoilerplateAriannaWebModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkYsVUFBVTtBQUNWLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLGFBQWE7QUFDYixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUVsRCxJQUFNLFVBQVUsR0FBRztJQUNqQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtDQUMxQixDQUFDO0FBYUY7SUFDRSx1Q0FDRSxVQUFpQyxFQUNqQyxNQUE0QjtRQUU1QixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUMsSUFBQSwrQ0FBZSxDQUFtQjtZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFYYSxxQkFBcUI7Z0JBQ3pCLG9CQUFvQjs7SUFIbkIsNkJBQTZCO1FBWHpDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQix5QkFBeUI7YUFDMUI7WUFDRCxlQUFlLEVBQUUsVUFBVTtZQUMzQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO3lDQUdjLHFCQUFxQjtZQUN6QixvQkFBb0I7T0FIbkIsNkJBQTZCLENBY3pDO0lBQUQsb0NBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSwgQXBwbGljYXRpb25Jbml0U3RhdHVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBBd0VudGl0YUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dhbGxlcnktbGF5b3V0L2dhbGxlcnktbGF5b3V0JztcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBBd01hcExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0JztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XG4vLyBDT01QT05FTlRTXG5pbXBvcnQgeyBDaGFydFRpcHB5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0LXRpcHB5L2NoYXJ0LXRpcHB5JztcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlcic7XG5pbXBvcnQgeyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LWJyZWFkY3J1bWJzL3NtYXJ0LWJyZWFkY3J1bWJzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgYXBvbGxvQ29uZmlnIGZyb20gJy4vY29uZmlnL2Fwb2xsby5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBd0VudGl0YUxheW91dENvbXBvbmVudCxcbiAgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50LFxuICBBd0hvbWVMYXlvdXRDb21wb25lbnQsXG4gIEF3TWFwTGF5b3V0Q29tcG9uZW50LFxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcbiAgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCxcbiAgQ2hhcnRUaXBweUNvbXBvbmVudCxcbiAgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpbml0U3RhdHVzOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMsXG4gICAgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZVxuICApIHtcbiAgICAvLyBhZGQgYXBvbGxvIGNvbmZpZyBvbiBhcHAgaW5pdFxuICAgIC8vIG5vdGU6IHRoaXMgaXMganVzdCBmb3IgYXJpYW5uYSogc2l0ZXMhXG4gICAgaW5pdFN0YXR1cy5kb25lUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbW11bmljYXRpb24gPSBjb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciB9ID0gY29tbXVuaWNhdGlvbjtcbiAgICAgIGNvbW11bmljYXRpb24ucHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0uY29uZmlnID0gYXBvbGxvQ29uZmlnO1xuICAgICAgY29uZmlnLnNldCgnY29tbXVuaWNhdGlvbicsIGNvbW11bmljYXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=