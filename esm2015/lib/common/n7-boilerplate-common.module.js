var N7BoilerplateCommonModule_1;
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
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    SmartPaginationComponent,
];
let N7BoilerplateCommonModule = N7BoilerplateCommonModule_1 = class N7BoilerplateCommonModule {
    static forRoot(config) {
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
    }
};
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
export { N7BoilerplateCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxXQUFXO0FBQ1gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsVUFBVTtBQUNWLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpGLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUUxRixNQUFNLFVBQVUsR0FBRztJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUN6QixDQUFDO0FBYUYsSUFBYSx5QkFBeUIsaUNBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBWTtRQUN6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUF5QjtZQUNuQyxTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFDM0Isb0JBQW9CO2dCQUNwQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWJZLHlCQUF5QjtJQVhyQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsVUFBVTtRQUN4QixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLHFCQUFxQjtTQUN0QjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsZUFBZSxFQUFFLFVBQVU7UUFDM0IsT0FBTyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztHQUNXLHlCQUF5QixDQWFyQztTQWJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbi8vIHNlcnZpY2VzXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcblxyXG4vLyBsYXlvdXRzXHJcbmltcG9ydCB7IE1haW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQnO1xyXG5pbXBvcnQgeyBQYWdlNDA0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3BhZ2U0MDQtbGF5b3V0L3BhZ2U0MDQtbGF5b3V0JztcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NtYXJ0LXBhZ2luYXRpb24vc21hcnQtcGFnaW5hdGlvbic7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIE1haW5MYXlvdXRDb21wb25lbnQsXHJcbiAgUGFnZTQwNExheW91dENvbXBvbmVudCxcclxuICBTbWFydFBhZ2luYXRpb25Db21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==