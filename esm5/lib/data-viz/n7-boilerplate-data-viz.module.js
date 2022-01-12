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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLGFBQWE7QUFDYixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsVUFBVTtBQUNWLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWhHLElBQU0sVUFBVSxHQUFHO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCLENBQUM7QUFhRjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBWHRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixlQUFlLEVBQUUsVUFBVTtZQUMzQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1csMEJBQTBCLENBQUk7SUFBRCxpQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIENPTVBPTkVOVFNcbmltcG9ydCB7IERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0LXdyYXBwZXIvZGF0YS13aWRnZXQtd3JhcHBlcic7XG5pbXBvcnQgeyBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlcGlja2VyLXdyYXBwZXIvZGF0ZXBpY2tlci13cmFwcGVyJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkJztcbmltcG9ydCB7IENhcmRUZXh0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dCc7XG5pbXBvcnQgeyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgRGF0YVdpZGdldFdyYXBwZXJDb21wb25lbnQsXG4gIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50LFxuICBDYXJkQ29tcG9uZW50LFxuICBDYXJkVGV4dEl0ZW1Db21wb25lbnQsXG4gIER2RXhhbXBsZUxheW91dENvbXBvbmVudCxcbiAgRHZDYXJkRXhhbXBsZUxheW91dENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVEYXRhVml6TW9kdWxlIHsgfVxuIl19