import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// SERVICES
import { MrSearchService } from './services/search.service';
import { MrLayoutStateService } from './services/layout-state.service';
// PIPES
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
// LAYOUTS
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrResourceLayoutComponent } from './layouts/resource-layout/resource-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
import { MrAdvancedSearchLayoutComponent } from './layouts/advanced-search-layout/advanced-search-layout';
// COMPONENTS
import { ReadMoreComponent } from './components/read-more/read-more';
import { MrFormComponent } from './components/form/form';
import { MrFormWrapperAccordionComponent } from './components/form-wrapper-accordion/form-wrapper-accordion';
var COMPONENTS = [
    // Layout components
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    MrAdvancedSearchLayoutComponent,
    // Custom components
    ReadMoreComponent,
    MrFormComponent,
    MrFormWrapperAccordionComponent
];
var N7BoilerplateMurucaModule = /** @class */ (function () {
    function N7BoilerplateMurucaModule() {
    }
    N7BoilerplateMurucaModule = __decorate([
        NgModule({
            declarations: [
                EscapeHtmlPipe,
                COMPONENTS
            ],
            imports: [
                CommonModule,
                DvComponentsLibModule,
                N7BoilerplateCommonModule,
            ],
            providers: [
                MrSearchService,
                MrLayoutStateService
            ],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], N7BoilerplateMurucaModule);
    return N7BoilerplateMurucaModule;
}());
export { N7BoilerplateMurucaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU3RyxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLCtCQUErQjtDQUNoQyxDQUFDO0FBbUJGO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFqQnJDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixjQUFjO2dCQUNkLFVBQVU7YUFDWDtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysb0JBQW9CO2FBQ3JCO1lBQ0QsZUFBZSxFQUFFLFVBQVU7WUFDM0IsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztPQUNXLHlCQUF5QixDQUFJO0lBQUQsZ0NBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vLyBTRVJWSUNFU1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuLy8gUElQRVNcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJIb21lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0JztcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcmVzb3VyY2UtbGF5b3V0L3Jlc291cmNlLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhdGljLWxheW91dC9zdGF0aWMtbGF5b3V0JztcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYWR2YW5jZWQtc2VhcmNoLWxheW91dC9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0Jztcbi8vIENPTVBPTkVOVFNcbmltcG9ydCB7IFJlYWRNb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUnO1xuaW1wb3J0IHsgTXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vZm9ybSc7XG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbic7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIC8vIExheW91dCBjb21wb25lbnRzXG4gIE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQsXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcbiAgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQsXG4gIE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50LFxuICBNclN0YXRpY0xheW91dENvbXBvbmVudCxcbiAgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCxcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHNcbiAgUmVhZE1vcmVDb21wb25lbnQsXG4gIE1yRm9ybUNvbXBvbmVudCxcbiAgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXNjYXBlSHRtbFBpcGUsXG4gICAgQ09NUE9ORU5UU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNclNlYXJjaFNlcnZpY2UsXG4gICAgTXJMYXlvdXRTdGF0ZVNlcnZpY2VcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIHsgfVxuIl19