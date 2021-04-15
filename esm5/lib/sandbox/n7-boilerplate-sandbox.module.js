import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { SbExampleLayoutComponent } from './layout/example-layout/example-layout';
import { SbImageViewerLayoutComponent } from './layout/image-viewer-layout/image-viewer-layout';
var COMPONENTS = [
    SbExampleLayoutComponent,
    SbImageViewerLayoutComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9uNy1ib2lsZXJwbGF0ZS1zYW5kYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFVBQVU7QUFDVixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVoRyxJQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCLENBQUM7QUFZRjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBVnRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1csMEJBQTBCLENBQUk7SUFBRCxpQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IFNiRXhhbXBsZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0JztcbmltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBTYkV4YW1wbGVMYXlvdXRDb21wb25lbnQsXG4gIFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVTYW5kYm94TW9kdWxlIHsgfVxuIl19