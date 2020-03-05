/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/n7-boilerplate-arianna-web.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwEntitaLayoutComponent } from './layouts/entita-layout/entita-layout';
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwSchedaLayoutComponent } from './layouts/scheda-layout/scheda-layout';
import { AwSearchLayoutComponent } from './layouts/search-layout/search-layout';
// COMPONENTS
import { ChartTippyComponent } from './components/chart-tippy/chart-tippy';
import { BubbleChartWrapperComponent } from './components/bubble-chart-wrapper/bubble-chart-wrapper';
import { SmartBreadcrumbsComponent } from './components/smart-breadcrumbs/smart-breadcrumbs';
/** @type {?} */
const COMPONENTS = [
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    SmartBreadcrumbsComponent,
];
export class N7BoilerplateAriannaWebModule {
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
                providers: [],
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBRW5GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQUVoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7TUFFdkYsVUFBVSxHQUFHO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtDQUMxQjtBQWNELE1BQU0sT0FBTyw2QkFBNkI7OztZQVh6QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQix5QkFBeUI7aUJBQzFCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZW50aXRhLWxheW91dC9lbnRpdGEtbGF5b3V0JztcclxuaW1wb3J0IHsgQXdIb21lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0JztcclxuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0JztcclxuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcclxuLy8gQ09NUE9ORU5UU1xyXG5pbXBvcnQgeyBDaGFydFRpcHB5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0LXRpcHB5L2NoYXJ0LXRpcHB5JztcclxuaW1wb3J0IHsgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC13cmFwcGVyL2J1YmJsZS1jaGFydC13cmFwcGVyJztcclxuaW1wb3J0IHsgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIEF3RW50aXRhTGF5b3V0Q29tcG9uZW50LFxyXG4gIEF3SG9tZUxheW91dENvbXBvbmVudCxcclxuICBBd1NjaGVkYUxheW91dENvbXBvbmVudCxcclxuICBBd1NlYXJjaExheW91dENvbXBvbmVudCxcclxuICBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQsXHJcbiAgQ2hhcnRUaXBweUNvbXBvbmVudCxcclxuICBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcclxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB7IH1cclxuIl19