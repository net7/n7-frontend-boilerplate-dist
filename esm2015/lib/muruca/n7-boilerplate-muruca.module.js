import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// SERVICES
import { MrSearchService } from './services/search.service';
import { MrLayoutStateService } from './services/layout-state.service';
import { MrResourceModalService } from './services/resource-modal.service';
// PIPES
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
// LAYOUTS
import { MrAdvancedSearchLayoutComponent } from './layouts/advanced-search-layout/advanced-search-layout';
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrResourceLayoutComponent } from './layouts/resource-layout/resource-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
import { MrTimelineLayoutComponent } from './layouts/timeline-layout/timeline-layout';
// COMPONENTS
import { ReadMoreComponent } from './components/read-more/read-more';
import { MrFormComponent } from './components/form/form';
import { MrFormWrapperAccordionComponent } from './components/form-wrapper-accordion/form-wrapper-accordion';
import { MrSearchPageDescriptionComponent } from './components/search-page-description/search-page-description';
import { MrResourceModalComponent } from './components/resource-modal/resource-modal';
const COMPONENTS = [
    // Layout components
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    MrAdvancedSearchLayoutComponent,
    MrTimelineLayoutComponent,
    // Custom components
    ReadMoreComponent,
    MrFormComponent,
    MrFormWrapperAccordionComponent,
    MrSearchPageDescriptionComponent,
    MrResourceModalComponent
];
let N7BoilerplateMurucaModule = class N7BoilerplateMurucaModule {
};
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
            MrLayoutStateService,
            MrResourceModalService
        ],
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], N7BoilerplateMurucaModule);
export { N7BoilerplateMurucaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RixNQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtDQUN6QixDQUFDO0FBb0JGLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBQUksQ0FBQTtBQUE3Qix5QkFBeUI7SUFsQnJDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGNBQWM7WUFDZCxVQUFVO1NBQ1g7UUFDRCxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUMxQjtRQUNELFNBQVMsRUFBRTtZQUNULGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsc0JBQXNCO1NBQ3ZCO1FBQ0QsZUFBZSxFQUFFLFVBQVU7UUFDM0IsT0FBTyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztHQUNXLHlCQUF5QixDQUFJO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIFNFUlZJQ0VTXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlJztcbi8vIFBJUEVTXG5pbXBvcnQgeyBFc2NhcGVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMva2VlcC1odG1sLnBpcGUnO1xuLy8gTEFZT1VUU1xuaW1wb3J0IHsgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nbG9zc2FyeS1sYXlvdXQvZ2xvc3NhcnktbGF5b3V0JztcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3N0YXRpYy1sYXlvdXQvc3RhdGljLWxheW91dCc7XG5pbXBvcnQgeyBNclRpbWVsaW5lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQnO1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IHsgUmVhZE1vcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZSc7XG5pbXBvcnQgeyBNckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9mb3JtJztcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uJztcbmltcG9ydCB7IE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJztcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNvdXJjZS1tb2RhbC9yZXNvdXJjZS1tb2RhbCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIC8vIExheW91dCBjb21wb25lbnRzXG4gIE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQsXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcbiAgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQsXG4gIE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50LFxuICBNclN0YXRpY0xheW91dENvbXBvbmVudCxcbiAgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCxcbiAgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCxcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHNcbiAgUmVhZE1vcmVDb21wb25lbnQsXG4gIE1yRm9ybUNvbXBvbmVudCxcbiAgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCxcbiAgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIE1yUmVzb3VyY2VNb2RhbENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXNjYXBlSHRtbFBpcGUsXG4gICAgQ09NUE9ORU5UU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNclNlYXJjaFNlcnZpY2UsXG4gICAgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgeyB9XG4iXX0=