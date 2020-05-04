/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/n7-boilerplate-common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { FacetsWrapperComponent } from './components/facets-wrapper/facets-wrapper';
import { SmartPaginationComponent } from './components/smart-pagination/smart-pagination';
/** @type {?} */
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    FacetsWrapperComponent,
    SmartPaginationComponent,
];
export class N7BoilerplateCommonModule {
    /**
     * @param {?} config
     * @return {?}
     */
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
N7BoilerplateCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    HttpClientModule,
                    DvComponentsLibModule,
                ],
                providers: [],
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUdoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBR2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztNQUVwRixVQUFVLEdBQUc7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQ3pCO0FBWUQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFXO1FBQ3hCLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixvQkFBb0I7Z0JBQ3BCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXRCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIscUJBQXFCO2lCQUN0QjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbi8vIHNlcnZpY2VzXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuXG4vLyBsYXlvdXRzXG5pbXBvcnQgeyBNYWluTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0JztcbmltcG9ydCB7IFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQnO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgeyBGYWNldHNXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZhY2V0cy13cmFwcGVyL2ZhY2V0cy13cmFwcGVyJztcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24nO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBNYWluTGF5b3V0Q29tcG9uZW50LFxuICBQYWdlNDA0TGF5b3V0Q29tcG9uZW50LFxuICBGYWNldHNXcmFwcGVyQ29tcG9uZW50LFxuICBTbWFydFBhZ2luYXRpb25Db21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNYWluU3RhdGVTZXJ2aWNlLFxuICAgICAgICBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICAgICAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICAgICBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=