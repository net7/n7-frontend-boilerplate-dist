import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { SbExampleLayoutComponent } from './layout/example-layout/example-layout';
var COMPONENTS = [
    SbExampleLayoutComponent,
];
var N7BoilerplateSandboxModule = /** @class */ (function () {
    function N7BoilerplateSandboxModule() {
    }
    N7BoilerplateSandboxModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            imports: [
                CommonModule,
                DvComponentsLibModule,
                N7BoilerplateCommonModule,
            ],
            providers: [],
            exports: COMPONENTS,
        })
    ], N7BoilerplateSandboxModule);
    return N7BoilerplateSandboxModule;
}());
export { N7BoilerplateSandboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9uNy1ib2lsZXJwbGF0ZS1zYW5kYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFVBQVU7QUFDVixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRixJQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7Q0FDekIsQ0FBQztBQVlGO0lBQUE7SUFBMEMsQ0FBQztJQUE5QiwwQkFBMEI7UUFWdEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLFVBQVU7WUFDeEIsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQix5QkFBeUI7YUFDMUI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7T0FDVywwQkFBMEIsQ0FBSTtJQUFELGlDQUFDO0NBQUEsQUFBM0MsSUFBMkM7U0FBOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuLy8gTEFZT1VUU1xuaW1wb3J0IHsgU2JFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBTYkV4YW1wbGVMYXlvdXRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVTYW5kYm94TW9kdWxlIHsgfVxuIl19