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
// COMPONENTS
import { DataWidgetWrapperComponent } from './components/data-widget-wrapper/data-widget-wrapper';
import { DatepickerWrapperComponent } from './components/datepicker-wrapper/datepicker-wrapper';
// LAYOUTS
import { DvExampleLayoutComponent } from './layout/example-layout/example-layout';
/** @type {?} */
var COMPONENTS = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
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
                    exports: COMPONENTS,
                },] }
    ];
    return N7BoilerplateDataVizModule;
}());
export { N7BoilerplateDataVizModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBRWhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztJQUU1RSxVQUFVLEdBQUc7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix3QkFBd0I7Q0FDekI7QUFFRDtJQUFBO0lBVTBDLENBQUM7O2dCQVYxQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsVUFBVTtpQkFDcEI7O0lBQ3lDLGlDQUFDO0NBQUEsQUFWM0MsSUFVMkM7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgRGF0YVdpZGdldFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS13aWRnZXQtd3JhcHBlci9kYXRhLXdpZGdldC13cmFwcGVyJztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlcic7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBEYXRhV2lkZ2V0V3JhcHBlckNvbXBvbmVudCxcclxuICBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCxcclxuICBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXHJcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgeyB9XHJcbiJdfQ==