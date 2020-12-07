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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsV0FBVztBQUNYLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhFLFVBQVU7QUFDVixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVqRixhQUFhO0FBQ2IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFMUYsSUFBTSxVQUFVLEdBQUc7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix3QkFBd0I7Q0FDekIsQ0FBQztBQWFGO0lBQUE7SUFhQSxDQUFDO2tDQWJZLHlCQUF5QjtJQUM3QixpQ0FBTyxHQUFkLFVBQWUsTUFBVztRQUN4QixPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUF5QjtZQUNuQyxTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFDM0Isb0JBQW9CO2dCQUNwQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7SUFDSixDQUFDOztJQVpVLHlCQUF5QjtRQVhyQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsVUFBVTtZQUN4QixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjthQUN0QjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsZUFBZSxFQUFFLFVBQVU7WUFDM0IsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztPQUNXLHlCQUF5QixDQWFyQztJQUFELGdDQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuLy8gc2VydmljZXNcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbi8vIGxheW91dHNcbmltcG9ydCB7IE1haW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQnO1xuaW1wb3J0IHsgUGFnZTQwNExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9wYWdlNDA0LWxheW91dC9wYWdlNDA0LWxheW91dCc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24nO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBNYWluTGF5b3V0Q29tcG9uZW50LFxuICBQYWdlNDA0TGF5b3V0Q29tcG9uZW50LFxuICBTbWFydFBhZ2luYXRpb25Db21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICAgICBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgICAgIENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==