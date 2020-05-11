/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule, ApplicationInitStatus } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterModule } from '@angular/router';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwEntitaLayoutComponent } from './layouts/entita-layout/entita-layout';
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwSchedaLayoutComponent } from './layouts/scheda-layout/scheda-layout';
import { AwSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { AwGalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout';
// COMPONENTS
import { ChartTippyComponent } from './components/chart-tippy/chart-tippy';
import { BubbleChartWrapperComponent } from './components/bubble-chart-wrapper/bubble-chart-wrapper';
import { SmartBreadcrumbsComponent } from './components/smart-breadcrumbs/smart-breadcrumbs';
import { ConfigurationService } from '../common/services/configuration.service';
import apolloConfig from './config/apollo.config';
/** @type {?} */
const COMPONENTS = [
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    AwGalleryLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    SmartBreadcrumbsComponent,
];
export class N7BoilerplateAriannaWebModule {
    /**
     * @param {?} initStatus
     * @param {?} config
     */
    constructor(initStatus, config) {
        // add apollo config on app init
        // note: this is just for arianna* sites!
        initStatus.donePromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const communication = config.get('communication');
            const { defaultProvider } = communication;
            communication.providers[defaultProvider].config = apolloConfig;
            config.set('communication', communication);
        }));
    }
}
N7BoilerplateAriannaWebModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    RouterModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
/** @nocollapse */
N7BoilerplateAriannaWebModule.ctorParameters = () => [
    { type: ApplicationInitStatus },
    { type: ConfigurationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBRW5GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQUVuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQzs7TUFFNUMsVUFBVSxHQUFHO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix5QkFBeUI7Q0FDMUI7QUFhRCxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUN4QyxZQUNFLFVBQWlDLEVBQ2pDLE1BQTRCO1FBRTVCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUN6QixhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7a0JBQzNDLEVBQUUsZUFBZSxFQUFFLEdBQUcsYUFBYTtZQUN6QyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIseUJBQXlCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsVUFBVTtnQkFDM0IsT0FBTyxFQUFFLFVBQVU7YUFDcEI7Ozs7WUF4Q2tCLHFCQUFxQjtZQWdCL0Isb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uSW5pdFN0YXR1cyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuLy8gTEFZT1VUU1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZW50aXRhLWxheW91dC9lbnRpdGEtbGF5b3V0JztcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dCc7XG4vLyBDT01QT05FTlRTXG5pbXBvcnQgeyBDaGFydFRpcHB5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0LXRpcHB5L2NoYXJ0LXRpcHB5JztcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlcic7XG5pbXBvcnQgeyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LWJyZWFkY3J1bWJzL3NtYXJ0LWJyZWFkY3J1bWJzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgYXBvbGxvQ29uZmlnIGZyb20gJy4vY29uZmlnL2Fwb2xsby5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBd0VudGl0YUxheW91dENvbXBvbmVudCxcbiAgQXdIb21lTGF5b3V0Q29tcG9uZW50LFxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcbiAgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIEF3R2FsbGVyeUxheW91dENvbXBvbmVudCxcbiAgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50LFxuICBDaGFydFRpcHB5Q29tcG9uZW50LFxuICBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGluaXRTdGF0dXM6IEFwcGxpY2F0aW9uSW5pdFN0YXR1cyxcbiAgICBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIC8vIGFkZCBhcG9sbG8gY29uZmlnIG9uIGFwcCBpbml0XG4gICAgLy8gbm90ZTogdGhpcyBpcyBqdXN0IGZvciBhcmlhbm5hKiBzaXRlcyFcbiAgICBpbml0U3RhdHVzLmRvbmVQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29tbXVuaWNhdGlvbiA9IGNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyIH0gPSBjb21tdW5pY2F0aW9uO1xuICAgICAgY29tbXVuaWNhdGlvbi5wcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXS5jb25maWcgPSBhcG9sbG9Db25maWc7XG4gICAgICBjb25maWcuc2V0KCdjb21tdW5pY2F0aW9uJywgY29tbXVuaWNhdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==