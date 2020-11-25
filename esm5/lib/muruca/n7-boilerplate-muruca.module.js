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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU3RyxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLCtCQUErQjtDQUNoQyxDQUFDO0FBbUJGO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFqQnJDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixjQUFjO2dCQUNkLFVBQVU7YUFDWDtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysb0JBQW9CO2FBQ3JCO1lBQ0QsZUFBZSxFQUFFLFVBQVU7WUFDM0IsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztPQUNXLHlCQUF5QixDQUFJO0lBQUQsZ0NBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcclxuLy8gU0VSVklDRVNcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbi8vIFBJUEVTXHJcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nbG9zc2FyeS1sYXlvdXQvZ2xvc3NhcnktbGF5b3V0JztcclxuaW1wb3J0IHsgTXJIb21lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9yZXNvdXJjZS1sYXlvdXQvcmVzb3VyY2UtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dCc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgUmVhZE1vcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZSc7XHJcbmltcG9ydCB7IE1yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xyXG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbic7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIC8vIExheW91dCBjb21wb25lbnRzXHJcbiAgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCxcclxuICBNckhvbWVMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCxcclxuICBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCxcclxuICBNclNlYXJjaExheW91dENvbXBvbmVudCxcclxuICBNclN0YXRpY0xheW91dENvbXBvbmVudCxcclxuICBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50LFxyXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXHJcbiAgUmVhZE1vcmVDb21wb25lbnQsXHJcbiAgTXJGb3JtQ29tcG9uZW50LFxyXG4gIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFc2NhcGVIdG1sUGlwZSxcclxuICAgIENPTVBPTkVOVFNcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcclxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1yU2VhcmNoU2VydmljZSxcclxuICAgIE1yTGF5b3V0U3RhdGVTZXJ2aWNlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgeyB9XHJcbiJdfQ==