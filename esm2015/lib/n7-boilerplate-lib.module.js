import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N7BoilerplateCommonModule } from './common/n7-boilerplate-common.module';
import { N7BoilerplateAriannaWebModule } from './arianna-web/n7-boilerplate-arianna-web.module';
import { N7BoilerplateDataVizModule } from './data-viz/n7-boilerplate-data-viz.module';
import { N7BoilerplateMurucaModule } from './muruca/n7-boilerplate-muruca.module';
let N7BoilerplateLibModule = class N7BoilerplateLibModule {
};
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
export { N7BoilerplateLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uNy1ib2lsZXJwbGF0ZS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWtCbEYsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FBSSxDQUFBO0FBQTFCLHNCQUFzQjtJQWhCbEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDUCxTQUFTO1lBQ1QseUJBQXlCO1lBQ3pCLEtBQUs7WUFDTCw2QkFBNkI7WUFDN0IsS0FBSztZQUNMLDBCQUEwQjtZQUMxQixLQUFLO1lBQ0wseUJBQXlCO1NBQzFCO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUgfSBmcm9tICcuL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlRGF0YVZpek1vZHVsZSB9IGZyb20gJy4vZGF0YS12aXovbjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgfSBmcm9tICcuL211cnVjYS9uNy1ib2lsZXJwbGF0ZS1tdXJ1Y2EubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIC8vIENPTU1PTlxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gICAgLy8gQVdcbiAgICBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSxcbiAgICAvLyBEVlxuICAgIE43Qm9pbGVycGxhdGVEYXRhVml6TW9kdWxlLFxuICAgIC8vIE1SXG4gICAgTjdCb2lsZXJwbGF0ZU11cnVjYU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUxpYk1vZHVsZSB7IH1cbiJdfQ==