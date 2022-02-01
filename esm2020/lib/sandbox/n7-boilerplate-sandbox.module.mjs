// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { SbExampleLayoutComponent } from './layout/example-layout/example-layout';
import { SbImageViewerLayoutComponent } from './layout/image-viewer-layout/image-viewer-layout';
import * as i0 from "@angular/core";
const COMPONENTS = [
    SbExampleLayoutComponent,
    SbImageViewerLayoutComponent,
];
export class N7BoilerplateSandboxModule {
}
N7BoilerplateSandboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateSandboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateSandboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateSandboxModule, declarations: [SbExampleLayoutComponent,
        SbImageViewerLayoutComponent], imports: [CommonModule,
        DvComponentsLibModule,
        N7BoilerplateCommonModule], exports: [SbExampleLayoutComponent,
        SbImageViewerLayoutComponent] });
N7BoilerplateSandboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateSandboxModule, providers: [], imports: [[
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateSandboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        DvComponentsLibModule,
                        N7BoilerplateCommonModule,
                    ],
                    providers: [],
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9zYW5kYm94L243LWJvaWxlcnBsYXRlLXNhbmRib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixVQUFVO0FBQ1YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBRWhHLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7Q0FDN0IsQ0FBQztBQVlGLE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixpQkFkckMsd0JBQXdCO1FBQ3hCLDRCQUE0QixhQU0xQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHlCQUF5QixhQVQzQix3QkFBd0I7UUFDeEIsNEJBQTRCO3dIQWFqQiwwQkFBMEIsYUFIMUIsRUFBRSxZQUxKO1lBQ1AsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix5QkFBeUI7U0FDMUI7MkZBSVUsMEJBQTBCO2tCQVZ0QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuLy8gTEFZT1VUU1xuaW1wb3J0IHsgU2JFeGFtcGxlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQnO1xuaW1wb3J0IHsgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQvaW1hZ2Utdmlld2VyLWxheW91dCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNiRXhhbXBsZUxheW91dENvbXBvbmVudCxcbiAgU2JJbWFnZVZpZXdlckxheW91dENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZVNhbmRib3hNb2R1bGUgeyB9XG4iXX0=