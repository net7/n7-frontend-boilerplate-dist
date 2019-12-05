/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/n7-boilerplate-arianna-web.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwAboutLayoutComponent } from './layouts/about-layout/about-layout';
import { AwEntitaLayoutComponent } from "./layouts/entita-layout/entita-layout";
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwSchedaLayoutComponent } from './layouts/scheda-layout/scheda-layout';
import { AwWorksLayoutComponent } from './layouts/works-layout/works-layout';
import { AwSearchLayoutComponent } from './layouts/search-layout/search-layout';
// COMPONENTS
import { BubbleChartWrapperComponent } from './components/bubble-chart-wrapper/bubble-chart-wrapper';
import { SmartBreadcrumbsComponent } from './components/smart-breadcrumbs/smart-breadcrumbs';
/** @type {?} */
const COMPONENTS = [
    AwAboutLayoutComponent,
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwWorksLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    SmartBreadcrumbsComponent
];
export class N7BoilerplateAriannaWebModule {
}
N7BoilerplateAriannaWebModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRWhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztNQUV2RixVQUFVLEdBQUc7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtDQUMxQjtBQWFELE1BQU0sT0FBTyw2QkFBNkI7OztZQVZ6QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIseUJBQXlCO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IEF3QWJvdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYWJvdXQtbGF5b3V0L2Fib3V0LWxheW91dCc7XG5pbXBvcnQgeyBBd0VudGl0YUxheW91dENvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dHMvZW50aXRhLWxheW91dC9lbnRpdGEtbGF5b3V0XCI7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0JztcbmltcG9ydCB7IEF3V29ya3NMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvd29ya3MtbGF5b3V0L3dvcmtzLWxheW91dCc7XG5pbXBvcnQgeyBBd1NlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IHsgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC13cmFwcGVyL2J1YmJsZS1jaGFydC13cmFwcGVyJztcbmltcG9ydCB7IFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc21hcnQtYnJlYWRjcnVtYnMvc21hcnQtYnJlYWRjcnVtYnMnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBd0Fib3V0TGF5b3V0Q29tcG9uZW50LFxuICBBd0VudGl0YUxheW91dENvbXBvbmVudCxcbiAgQXdIb21lTGF5b3V0Q29tcG9uZW50LFxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcbiAgQXdXb3Jrc0xheW91dENvbXBvbmVudCxcbiAgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCxcbiAgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudFxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUgeyB9XG4iXX0=