// MODULES
import { NgModule } from '@angular/core';
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
import apolloConfig from './config/apollo.config';
import * as i0 from "@angular/core";
import * as i1 from "../common/services/configuration.service";
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
export class N7BoilerplateAriannaWebModule {
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
}
N7BoilerplateAriannaWebModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateAriannaWebModule, deps: [{ token: i0.ApplicationInitStatus }, { token: i1.ConfigurationService }], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateAriannaWebModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateAriannaWebModule, declarations: [AwCollectionLayoutComponent,
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
        SmartBreadcrumbsComponent], imports: [CommonModule,
        RouterModule,
        DvComponentsLibModule,
        N7BoilerplateCommonModule,
        NgxExtendedPdfViewerModule], exports: [AwCollectionLayoutComponent,
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
        SmartBreadcrumbsComponent] });
N7BoilerplateAriannaWebModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateAriannaWebModule, imports: [[
            CommonModule,
            RouterModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
            NgxExtendedPdfViewerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateAriannaWebModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        RouterModule,
                        DvComponentsLibModule,
                        N7BoilerplateCommonModule,
                        NgxExtendedPdfViewerModule
                    ],
                    exports: COMPONENTS
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationInitStatus }, { type: i1.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsNkRBQTZEO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixVQUFVO0FBQ1YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsYUFBYTtBQUNiLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTdGLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFbEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtDQUMxQixDQUFDO0FBYUYsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUNFLFVBQWlDLEVBQ2pDLE1BQTRCO1FBRTVCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQy9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLGFBQWEsQ0FBQztZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswSEFiVSw2QkFBNkI7MkhBQTdCLDZCQUE2QixpQkEzQnhDLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFNdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLDBCQUEwQixhQXZCNUIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjsySEFjZCw2QkFBNkIsWUFUL0I7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix5QkFBeUI7WUFDekIsMEJBQTBCO1NBQzNCOzJGQUdVLDZCQUE2QjtrQkFYekMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSwgQXBwbGljYXRpb25Jbml0U3RhdHVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIH0gZnJvbSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IEF3Q29sbGVjdGlvbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dCc7XG5pbXBvcnQgeyBBd0VudGl0YUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dhbGxlcnktbGF5b3V0L2dhbGxlcnktbGF5b3V0JztcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBBd01hcExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0JztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XG5pbXBvcnQgeyBBd1RpbWVsaW5lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQnO1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IHsgQXdGYWNldHNXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F3LWZhY2V0cy13cmFwcGVyL2F3LWZhY2V0cy13cmFwcGVyJztcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlcic7XG5pbXBvcnQgeyBDaGFydFRpcHB5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0LXRpcHB5L2NoYXJ0LXRpcHB5JztcbmltcG9ydCB7IFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtdmlld2VyL3BkZi12aWV3ZXInO1xuaW1wb3J0IHsgU2NoZWRhRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NoZWRhLWRyb3Bkb3duL3NjaGVkYS1kcm9wZG93bic7XG5pbXBvcnQgeyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LWJyZWFkY3J1bWJzL3NtYXJ0LWJyZWFkY3J1bWJzJztcbi8vIExJQlNcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBhcG9sbG9Db25maWcgZnJvbSAnLi9jb25maWcvYXBvbGxvLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEF3Q29sbGVjdGlvbkxheW91dENvbXBvbmVudCxcbiAgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQsXG4gIEF3RmFjZXRzV3JhcHBlckNvbXBvbmVudCxcbiAgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50LFxuICBBd0hvbWVMYXlvdXRDb21wb25lbnQsXG4gIEF3TWFwTGF5b3V0Q29tcG9uZW50LFxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcbiAgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIEF3VGltZWxpbmVMYXlvdXRDb21wb25lbnQsXG4gIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCxcbiAgQ2hhcnRUaXBweUNvbXBvbmVudCxcbiAgUGRmVmlld2VyQ29tcG9uZW50LFxuICBTY2hlZGFEcm9wZG93bkNvbXBvbmVudCxcbiAgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGluaXRTdGF0dXM6IEFwcGxpY2F0aW9uSW5pdFN0YXR1cyxcbiAgICBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIC8vIGFkZCBhcG9sbG8gY29uZmlnIG9uIGFwcCBpbml0XG4gICAgLy8gbm90ZTogdGhpcyBpcyBqdXN0IGZvciBhcmlhbm5hKiBzaXRlcyFcbiAgICBpbml0U3RhdHVzLmRvbmVQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29tbXVuaWNhdGlvbiA9IGNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyIH0gPSBjb21tdW5pY2F0aW9uO1xuICAgICAgY29tbXVuaWNhdGlvbi5wcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXS5jb25maWcgPSBhcG9sbG9Db25maWc7XG4gICAgICBjb25maWcuc2V0KCdjb21tdW5pY2F0aW9uJywgY29tbXVuaWNhdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==