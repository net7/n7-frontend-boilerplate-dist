import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule } from '@n7-frontend/components';
// services
import { ConfigurationService } from './services/configuration.service';
import { LayoutsConfigurationService } from './services/layouts-configuration.service';
import { MainStateService } from './services/main-state.service';
import { CommunicationService } from './services/communication.service';
// layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { Page404LayoutComponent } from './layouts/page404-layout/page404-layout';
// components
import { SmartPaginationComponent } from './components/smart-pagination/smart-pagination';
var COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    SmartPaginationComponent,
];
var N7BoilerplateCommonModule = /** @class */ (function () {
    function N7BoilerplateCommonModule() {
    }
    N7BoilerplateCommonModule_1 = N7BoilerplateCommonModule;
    N7BoilerplateCommonModule.forRoot = function (config) {
        return {
            ngModule: N7BoilerplateCommonModule_1,
            providers: [
                MainStateService,
                ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                { provide: 'config', useValue: config },
            ],
        };
    };
    var N7BoilerplateCommonModule_1;
    N7BoilerplateCommonModule = N7BoilerplateCommonModule_1 = __decorate([
        NgModule({
            declarations: COMPONENTS,
            imports: [
                CommonModule,
                HttpClientModule,
                DvComponentsLibModule,
            ],
            providers: [],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], N7BoilerplateCommonModule);
    return N7BoilerplateCommonModule;
}());
export { N7BoilerplateCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLFdBQVc7QUFDWCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxVQUFVO0FBQ1YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsYUFBYTtBQUNiLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRTFGLElBQU0sVUFBVSxHQUFHO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQ3pCLENBQUM7QUFhRjtJQUFBO0lBYUEsQ0FBQztrQ0FiWSx5QkFBeUI7SUFDN0IsaUNBQU8sR0FBZCxVQUFlLE1BQVk7UUFDekIsT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBeUI7WUFDbkMsU0FBUyxFQUFFO2dCQUNULGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQiwyQkFBMkI7Z0JBQzNCLG9CQUFvQjtnQkFDcEIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFaVSx5QkFBeUI7UUFYckMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLFVBQVU7WUFDeEIsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixxQkFBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLGVBQWUsRUFBRSxVQUFVO1lBQzNCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7T0FDVyx5QkFBeUIsQ0FhckM7SUFBRCxnQ0FBQztDQUFBLEFBYkQsSUFhQztTQWJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbi8vIHNlcnZpY2VzXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcblxyXG4vLyBsYXlvdXRzXHJcbmltcG9ydCB7IE1haW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQnO1xyXG5pbXBvcnQgeyBQYWdlNDA0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3BhZ2U0MDQtbGF5b3V0L3BhZ2U0MDQtbGF5b3V0JztcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LXBhZ2luYXRpb24vc21hcnQtcGFnaW5hdGlvbic7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIE1haW5MYXlvdXRDb21wb25lbnQsXHJcbiAgUGFnZTQwNExheW91dENvbXBvbmVudCxcclxuICBTbWFydFBhZ2luYXRpb25Db21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==