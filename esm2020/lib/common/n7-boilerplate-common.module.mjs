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
import * as i0 from "@angular/core";
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    SmartPaginationComponent,
];
export class N7BoilerplateCommonModule {
    static forRoot(config) {
        return {
            ngModule: N7BoilerplateCommonModule,
            providers: [
                MainStateService,
                ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                { provide: 'config', useValue: config },
            ],
        };
    }
}
N7BoilerplateCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateCommonModule, declarations: [MainLayoutComponent,
        Page404LayoutComponent,
        SmartPaginationComponent], imports: [CommonModule,
        HttpClientModule,
        DvComponentsLibModule], exports: [MainLayoutComponent,
        Page404LayoutComponent,
        SmartPaginationComponent] });
N7BoilerplateCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateCommonModule, providers: [], imports: [[
            CommonModule,
            HttpClientModule,
            DvComponentsLibModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        DvComponentsLibModule,
                    ],
                    providers: [],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxXQUFXO0FBQ1gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsVUFBVTtBQUNWLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpGLGFBQWE7QUFDYixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFFMUYsTUFBTSxVQUFVLEdBQUc7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix3QkFBd0I7Q0FDekIsQ0FBQztBQVlGLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFZO1FBQ3pCLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixvQkFBb0I7Z0JBQ3BCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3NIQVpVLHlCQUF5Qjt1SEFBekIseUJBQXlCLGlCQWZwQyxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHdCQUF3QixhQU10QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLHFCQUFxQixhQVZ2QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHdCQUF3Qjt1SEFhYix5QkFBeUIsYUFIekIsRUFBRSxZQUxKO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixxQkFBcUI7U0FDdEI7MkZBSVUseUJBQXlCO2tCQVZyQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5cclxuLy8gc2VydmljZXNcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbi8vIGxheW91dHNcclxuaW1wb3J0IHsgTWFpbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dCc7XHJcbmltcG9ydCB7IFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQnO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc21hcnQtcGFnaW5hdGlvbi9zbWFydC1wYWdpbmF0aW9uJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgTWFpbkxheW91dENvbXBvbmVudCxcclxuICBQYWdlNDA0TGF5b3V0Q29tcG9uZW50LFxyXG4gIFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==