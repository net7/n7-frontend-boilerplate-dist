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
var COMPONENTS = [
    AwAboutLayoutComponent,
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwWorksLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    SmartBreadcrumbsComponent
];
var N7BoilerplateAriannaWebModule = /** @class */ (function () {
    function N7BoilerplateAriannaWebModule() {
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
    return N7BoilerplateAriannaWebModule;
}());
export { N7BoilerplateAriannaWebModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRWhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztJQUV2RixVQUFVLEdBQUc7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtDQUMxQjtBQUdEO0lBQUE7SUFVNkMsQ0FBQzs7Z0JBVjdDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxVQUFVO2lCQUNwQjs7SUFDNEMsb0NBQUM7Q0FBQSxBQVY5QyxJQVU4QztTQUFqQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBBd0Fib3V0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2Fib3V0LWxheW91dC9hYm91dC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dFwiO1xuaW1wb3J0IHsgQXdIb21lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0JztcbmltcG9ydCB7IEF3U2NoZWRhTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dCc7XG5pbXBvcnQgeyBBd1dvcmtzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3dvcmtzLWxheW91dC93b3Jrcy1sYXlvdXQnO1xuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0Jztcbi8vIENPTVBPTkVOVFNcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlcic7XG5pbXBvcnQgeyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LWJyZWFkY3J1bWJzL3NtYXJ0LWJyZWFkY3J1bWJzJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgQXdBYm91dExheW91dENvbXBvbmVudCxcbiAgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQsXG4gIEF3SG9tZUxheW91dENvbXBvbmVudCxcbiAgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQsXG4gIEF3V29ya3NMYXlvdXRDb21wb25lbnQsXG4gIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50LFxuICBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQsXG4gIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnRcbl07XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVBcmlhbm5hV2ViTW9kdWxlIHsgfVxuIl19