import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// COMPONENTS
import { DataWidgetWrapperComponent } from './components/data-widget-wrapper/data-widget-wrapper';
import { DatepickerWrapperComponent } from './components/datepicker-wrapper/datepicker-wrapper';
import { CardComponent } from './components/card/card';
import { CardTextItemComponent } from './components/card-text-item/card-text-item';
// LAYOUTS
import { DvExampleLayoutComponent } from './layout/example-layout/example-layout';
import { DvCardExampleLayoutComponent } from './layout/card-example-layout/card-example-layout';
var COMPONENTS = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
    CardComponent,
    CardTextItemComponent,
    DvExampleLayoutComponent,
    DvCardExampleLayoutComponent
];
var N7BoilerplateDataVizModule = /** @class */ (function () {
    function N7BoilerplateDataVizModule() {
    }
    N7BoilerplateDataVizModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            imports: [
                CommonModule,
                DvComponentsLibModule,
                N7BoilerplateCommonModule,
            ],
            providers: [],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], N7BoilerplateDataVizModule);
    return N7BoilerplateDataVizModule;
}());
export { N7BoilerplateDataVizModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLGFBQWE7QUFDYixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsVUFBVTtBQUNWLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWhHLElBQU0sVUFBVSxHQUFHO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCLENBQUM7QUFhRjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBWHRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixlQUFlLEVBQUUsVUFBVTtZQUMzQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1csMEJBQTBCLENBQUk7SUFBRCxpQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBDT01QT05FTlRTXHJcbmltcG9ydCB7IERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0LXdyYXBwZXIvZGF0YS13aWRnZXQtd3JhcHBlcic7XHJcbmltcG9ydCB7IERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGVwaWNrZXItd3JhcHBlci9kYXRlcGlja2VyLXdyYXBwZXInO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZCc7XHJcbmltcG9ydCB7IENhcmRUZXh0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbSc7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgRGF0YVdpZGdldFdyYXBwZXJDb21wb25lbnQsXHJcbiAgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQsXHJcbiAgQ2FyZENvbXBvbmVudCxcclxuICBDYXJkVGV4dEl0ZW1Db21wb25lbnQsXHJcbiAgRHZFeGFtcGxlTGF5b3V0Q29tcG9uZW50LFxyXG4gIER2Q2FyZEV4YW1wbGVMYXlvdXRDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcclxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgeyB9XHJcbiJdfQ==