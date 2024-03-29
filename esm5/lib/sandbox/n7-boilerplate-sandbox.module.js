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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9uNy1ib2lsZXJwbGF0ZS1zYW5kYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFVBQVU7QUFDVixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVoRyxJQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCLENBQUM7QUFZRjtJQUFBO0lBQTBDLENBQUM7SUFBOUIsMEJBQTBCO1FBVnRDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1csMEJBQTBCLENBQUk7SUFBRCxpQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBMQVlPVVRTXHJcbmltcG9ydCB7IFNiRXhhbXBsZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0JztcclxuaW1wb3J0IHsgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIFNiRXhhbXBsZUxheW91dENvbXBvbmVudCxcclxuICBTYkltYWdlVmlld2VyTGF5b3V0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVTYW5kYm94TW9kdWxlIHsgfVxyXG4iXX0=