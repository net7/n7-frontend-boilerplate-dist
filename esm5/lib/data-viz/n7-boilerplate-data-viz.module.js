/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/n7-boilerplate-data-viz.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
//COMPONENTS
import { DataWidgetWrapperComponent } from './components/data-widget-wrapper/data-widget-wrapper';
// LAYOUTS
import { DvExampleLayoutComponent } from './layout/example-layout/example-layout';
/** @type {?} */
var COMPONENTS = [
    DataWidgetWrapperComponent,
    DvExampleLayoutComponent,
];
var N7BoilerplateDataVizModule = /** @class */ (function () {
    function N7BoilerplateDataVizModule() {
    }
    N7BoilerplateDataVizModule.decorators = [
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
    return N7BoilerplateDataVizModule;
}());
export { N7BoilerplateDataVizModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBRWxHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztJQUU1RSxVQUFVLEdBQUc7SUFDakIsMEJBQTBCO0lBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0lBQUE7SUFVMEMsQ0FBQzs7Z0JBVjFDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxVQUFVO2lCQUNwQjs7SUFDeUMsaUNBQUM7Q0FBQSxBQVYzQyxJQVUyQztTQUE5QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vL0NPTVBPTkVOVFNcbmltcG9ydCB7IERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0LXdyYXBwZXIvZGF0YS13aWRnZXQtd3JhcHBlcic7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50LFxuICBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgeyB9Il19