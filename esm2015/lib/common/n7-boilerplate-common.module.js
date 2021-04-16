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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLFdBQVc7QUFDWCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxVQUFVO0FBQ1YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsYUFBYTtBQUNiLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRTFGLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQ3pCLENBQUM7QUFhRixJQUFhLHlCQUF5QixpQ0FBdEMsTUFBYSx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFXO1FBQ3hCLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixvQkFBb0I7Z0JBQ3BCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlkseUJBQXlCO0lBWHJDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxVQUFVO1FBQ3hCLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIscUJBQXFCO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUUsVUFBVTtRQUMzQixPQUFPLEVBQUUsVUFBVTtLQUNwQixDQUFDO0dBQ1cseUJBQXlCLENBYXJDO1NBYlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5cclxuLy8gc2VydmljZXNcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbi8vIGxheW91dHNcclxuaW1wb3J0IHsgTWFpbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dCc7XHJcbmltcG9ydCB7IFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQnO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc21hcnQtcGFnaW5hdGlvbi9zbWFydC1wYWdpbmF0aW9uJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgTWFpbkxheW91dENvbXBvbmVudCxcclxuICBQYWdlNDA0TGF5b3V0Q29tcG9uZW50LFxyXG4gIFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgICAgICBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=