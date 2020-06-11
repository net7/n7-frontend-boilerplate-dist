import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N7BoilerplateCommonModule } from './common/n7-boilerplate-common.module';
import { N7BoilerplateAriannaWebModule } from './arianna-web/n7-boilerplate-arianna-web.module';
import { N7BoilerplateDataVizModule } from './data-viz/n7-boilerplate-data-viz.module';
import { N7BoilerplateMurucaModule } from './muruca/n7-boilerplate-muruca.module';
var N7BoilerplateLibModule = /** @class */ (function () {
    function N7BoilerplateLibModule() {
    }
    N7BoilerplateLibModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            providers: [],
            exports: [
                // COMMON
                N7BoilerplateCommonModule,
                // AW
                N7BoilerplateAriannaWebModule,
                // DV
                N7BoilerplateDataVizModule,
                // MR
                N7BoilerplateMurucaModule,
            ],
        })
    ], N7BoilerplateLibModule);
    return N7BoilerplateLibModule;
}());
export { N7BoilerplateLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uNy1ib2lsZXJwbGF0ZS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWtCbEY7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQWhCbEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLFNBQVM7Z0JBQ1QseUJBQXlCO2dCQUN6QixLQUFLO2dCQUNMLDZCQUE2QjtnQkFDN0IsS0FBSztnQkFDTCwwQkFBMEI7Z0JBQzFCLEtBQUs7Z0JBQ0wseUJBQXlCO2FBQzFCO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVBcmlhbm5hV2ViTW9kdWxlIH0gZnJvbSAnLi9hcmlhbm5hLXdlYi9uNy1ib2lsZXJwbGF0ZS1hcmlhbm5hLXdlYi5tb2R1bGUnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgfSBmcm9tICcuL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZSc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIH0gZnJvbSAnLi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICAvLyBDT01NT05cbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICAgIC8vIEFXXG4gICAgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUsXG4gICAgLy8gRFZcbiAgICBON0JvaWxlcnBsYXRlRGF0YVZpek1vZHVsZSxcbiAgICAvLyBNUlxuICAgIE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVMaWJNb2R1bGUgeyB9XG4iXX0=