/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/n7-boilerplate-arianna-web.module.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7O01BRTVDLFVBQVUsR0FBRztJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0NBQzFCO0FBYUQsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFDeEMsWUFDRSxVQUFpQyxFQUNqQyxNQUE0QjtRQUU1QixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDekIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2tCQUMzQyxFQUFFLGVBQWUsRUFBRSxHQUFHLGFBQWE7WUFDekMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsZUFBZSxFQUFFLFVBQVU7Z0JBQzNCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCOzs7O1lBeENrQixxQkFBcUI7WUFnQi9CLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dCc7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0JztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XG5pbXBvcnQgeyBBd0dhbGxlcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ2FsbGVyeS1sYXlvdXQvZ2FsbGVyeS1sYXlvdXQnO1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IHsgQ2hhcnRUaXBweUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC10aXBweS9jaGFydC10aXBweSc7XG5pbXBvcnQgeyBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnViYmxlLWNoYXJ0LXdyYXBwZXIvYnViYmxlLWNoYXJ0LXdyYXBwZXInO1xuaW1wb3J0IHsgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IGFwb2xsb0NvbmZpZyBmcm9tICcuL2NvbmZpZy9hcG9sbG8uY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQsXG4gIEF3SG9tZUxheW91dENvbXBvbmVudCxcbiAgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQsXG4gIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50LFxuICBBd0dhbGxlcnlMYXlvdXRDb21wb25lbnQsXG4gIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCxcbiAgQ2hhcnRUaXBweUNvbXBvbmVudCxcbiAgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBpbml0U3RhdHVzOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMsXG4gICAgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZVxuICApIHtcbiAgICAvLyBhZGQgYXBvbGxvIGNvbmZpZyBvbiBhcHAgaW5pdFxuICAgIC8vIG5vdGU6IHRoaXMgaXMganVzdCBmb3IgYXJpYW5uYSogc2l0ZXMhXG4gICAgaW5pdFN0YXR1cy5kb25lUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbW11bmljYXRpb24gPSBjb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciB9ID0gY29tbXVuaWNhdGlvbjtcbiAgICAgIGNvbW11bmljYXRpb24ucHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0uY29uZmlnID0gYXBvbGxvQ29uZmlnO1xuICAgICAgY29uZmlnLnNldCgnY29tbXVuaWNhdGlvbicsIGNvbW11bmljYXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=