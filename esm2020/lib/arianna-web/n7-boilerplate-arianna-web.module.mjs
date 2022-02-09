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
N7BoilerplateAriannaWebModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateAriannaWebModule, deps: [{ token: i0.ApplicationInitStatus }, { token: i1.ConfigurationService }], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateAriannaWebModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateAriannaWebModule, declarations: [AwCollectionLayoutComponent,
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
N7BoilerplateAriannaWebModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateAriannaWebModule, imports: [[
            CommonModule,
            RouterModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
            NgxExtendedPdfViewerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateAriannaWebModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsNkRBQTZEO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixVQUFVO0FBQ1YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsYUFBYTtBQUNiLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTdGLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFbEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtDQUMxQixDQUFDO0FBYUYsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUNFLFVBQWlDLEVBQ2pDLE1BQTRCO1FBRTVCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQy9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLGFBQWEsQ0FBQztZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswSEFiVSw2QkFBNkI7MkhBQTdCLDZCQUE2QixpQkEzQnhDLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFNdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLDBCQUEwQixhQXZCNUIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjsySEFjZCw2QkFBNkIsWUFUL0I7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix5QkFBeUI7WUFDekIsMEJBQTBCO1NBQzNCOzJGQUdVLDZCQUE2QjtrQkFYekMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIH0gZnJvbSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBMQVlPVVRTXHJcbmltcG9ydCB7IEF3Q29sbGVjdGlvbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dCc7XHJcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dCc7XHJcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dCc7XHJcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XHJcbmltcG9ydCB7IEF3TWFwTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dCc7XHJcbmltcG9ydCB7IEF3U2NoZWRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dCc7XHJcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XHJcbmltcG9ydCB7IEF3VGltZWxpbmVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dCc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgQXdGYWNldHNXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F3LWZhY2V0cy13cmFwcGVyL2F3LWZhY2V0cy13cmFwcGVyJztcclxuaW1wb3J0IHsgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC13cmFwcGVyL2J1YmJsZS1jaGFydC13cmFwcGVyJztcclxuaW1wb3J0IHsgQ2hhcnRUaXBweUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweSc7XHJcbmltcG9ydCB7IFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtdmlld2VyL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBTY2hlZGFEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlZGEtZHJvcGRvd24vc2NoZWRhLWRyb3Bkb3duJztcclxuaW1wb3J0IHsgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icyc7XHJcbi8vIExJQlNcclxuXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCBhcG9sbG9Db25maWcgZnJvbSAnLi9jb25maWcvYXBvbGxvLmNvbmZpZyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIEF3Q29sbGVjdGlvbkxheW91dENvbXBvbmVudCxcclxuICBBd0VudGl0YUxheW91dENvbXBvbmVudCxcclxuICBBd0ZhY2V0c1dyYXBwZXJDb21wb25lbnQsXHJcbiAgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50LFxyXG4gIEF3SG9tZUxheW91dENvbXBvbmVudCxcclxuICBBd01hcExheW91dENvbXBvbmVudCxcclxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcclxuICBBd1NlYXJjaExheW91dENvbXBvbmVudCxcclxuICBBd1RpbWVsaW5lTGF5b3V0Q29tcG9uZW50LFxyXG4gIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCxcclxuICBDaGFydFRpcHB5Q29tcG9uZW50LFxyXG4gIFBkZlZpZXdlckNvbXBvbmVudCxcclxuICBTY2hlZGFEcm9wZG93bkNvbXBvbmVudCxcclxuICBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBDT01QT05FTlRTXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbml0U3RhdHVzOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMsXHJcbiAgICBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICAvLyBhZGQgYXBvbGxvIGNvbmZpZyBvbiBhcHAgaW5pdFxyXG4gICAgLy8gbm90ZTogdGhpcyBpcyBqdXN0IGZvciBhcmlhbm5hKiBzaXRlcyFcclxuICAgIGluaXRTdGF0dXMuZG9uZVByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW11bmljYXRpb24gPSBjb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XHJcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyIH0gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgICBjb21tdW5pY2F0aW9uLnByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdLmNvbmZpZyA9IGFwb2xsb0NvbmZpZztcclxuICAgICAgY29uZmlnLnNldCgnY29tbXVuaWNhdGlvbicsIGNvbW11bmljYXRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==