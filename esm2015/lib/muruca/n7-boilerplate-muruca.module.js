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
import { MrAdvancedResultsLayoutComponent } from './layouts/advanced-results-layout/advanced-results-layout';
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
import { MrPostsLayoutComponent } from './layouts';
const COMPONENTS = [
    // Layout components
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    MrAdvancedSearchLayoutComponent,
    MrAdvancedResultsLayoutComponent,
    MrTimelineLayoutComponent,
    MrPostsLayoutComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkQsTUFBTSxVQUFVLEdBQUc7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtDQUN6QixDQUFDO0FBb0JGLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBQUksQ0FBQTtBQUE3Qix5QkFBeUI7SUFsQnJDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGNBQWM7WUFDZCxVQUFVO1NBQ1g7UUFDRCxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUMxQjtRQUNELFNBQVMsRUFBRTtZQUNULGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsc0JBQXNCO1NBQ3ZCO1FBQ0QsZUFBZSxFQUFFLFVBQVU7UUFDM0IsT0FBTyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztHQUNXLHlCQUF5QixDQUFJO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBTRVJWSUNFU1xyXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XHJcbi8vIFBJUEVTXHJcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC9hZHZhbmNlZC1yZXN1bHRzLWxheW91dCc7XHJcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dCc7XHJcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcmVzb3VyY2UtbGF5b3V0L3Jlc291cmNlLWxheW91dCc7XHJcbmltcG9ydCB7IE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhdGljLWxheW91dC9zdGF0aWMtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90aW1lbGluZS1sYXlvdXQvdGltZWxpbmUtbGF5b3V0JztcclxuLy8gQ09NUE9ORU5UU1xyXG5pbXBvcnQgeyBSZWFkTW9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlJztcclxuaW1wb3J0IHsgTXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vZm9ybSc7XHJcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzb3VyY2UtbW9kYWwvcmVzb3VyY2UtbW9kYWwnO1xyXG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgLy8gTGF5b3V0IGNvbXBvbmVudHNcclxuICBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50LFxyXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcclxuICBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yU3RhdGljTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCxcclxuICBNclBvc3RzTGF5b3V0Q29tcG9uZW50LFxyXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXHJcbiAgUmVhZE1vcmVDb21wb25lbnQsXHJcbiAgTXJGb3JtQ29tcG9uZW50LFxyXG4gIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQsXHJcbiAgTXJSZXNvdXJjZU1vZGFsQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRXNjYXBlSHRtbFBpcGUsXHJcbiAgICBDT01QT05FTlRTXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXHJcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBNclNlYXJjaFNlcnZpY2UsXHJcbiAgICBNckxheW91dFN0YXRlU2VydmljZSxcclxuICAgIE1yUmVzb3VyY2VNb2RhbFNlcnZpY2VcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZU11cnVjYU1vZHVsZSB7IH1cclxuIl19