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
import { MrAdvancedResultsLayoutComponent } from './layouts/advanced-results-layout/advanced-results-layout';
import { MrAdvancedSearchLayoutComponent } from './layouts/advanced-search-layout/advanced-search-layout';
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrItineraryLayoutComponent } from './layouts/itinerary-layout/itinerary-layout';
import { MrMapLayoutComponent } from './layouts/map-layout/map-layout';
import { MrPostsLayoutComponent } from './layouts/posts-layout/posts-layout';
import { MrResourceLayoutComponent } from './layouts/resource-layout/resource-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
import { MrTimelineLayoutComponent } from './layouts/timeline-layout/timeline-layout';
// COMPONENTS
import { ReadMoreComponent } from './components/read-more/read-more';
import { MrAdvancedResultComponent } from './components/advanced-result/advanced-result';
import { MrFormComponent } from './components/form/form';
import { MrFormWrapperAccordionComponent } from './components/form-wrapper-accordion/form-wrapper-accordion';
import { MrSearchPageDescriptionComponent } from './components/search-page-description/search-page-description';
import { MrResourceModalComponent } from './components/resource-modal/resource-modal';
import { MrGalleryComponent } from './components/gallery/gallery';
var COMPONENTS = [
    // Layout components
    MrAdvancedResultsLayoutComponent,
    MrAdvancedSearchLayoutComponent,
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrItineraryLayoutComponent,
    MrMapLayoutComponent,
    MrPostsLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    MrTimelineLayoutComponent,
    // Custom components
    ReadMoreComponent,
    MrFormComponent,
    MrFormWrapperAccordionComponent,
    MrSearchPageDescriptionComponent,
    MrResourceModalComponent,
    MrGalleryComponent,
    MrAdvancedResultComponent,
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
                MrLayoutStateService,
                MrResourceModalService
            ],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], N7BoilerplateMurucaModule);
    return N7BoilerplateMurucaModule;
}());
export { N7BoilerplateMurucaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0csT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtDQUMxQixDQUFDO0FBb0JGO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFsQnJDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixjQUFjO2dCQUNkLFVBQVU7YUFDWDtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIseUJBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysb0JBQW9CO2dCQUNwQixzQkFBc0I7YUFDdkI7WUFDRCxlQUFlLEVBQUUsVUFBVTtZQUMzQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1cseUJBQXlCLENBQUk7SUFBRCxnQ0FBQztDQUFBLEFBQTFDLElBQTBDO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG4vLyBTRVJWSUNFU1xyXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XHJcbi8vIFBJUEVTXHJcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XHJcbi8vIExBWU9VVFNcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dCc7XHJcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dCc7XHJcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XHJcbmltcG9ydCB7IE1ySXRpbmVyYXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2l0aW5lcmFyeS1sYXlvdXQvaXRpbmVyYXJ5LWxheW91dCc7XHJcbmltcG9ydCB7IE1yTWFwTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dCc7XHJcbmltcG9ydCB7IE1yUG9zdHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcG9zdHMtbGF5b3V0L3Bvc3RzLWxheW91dCc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcmVzb3VyY2UtbGF5b3V0L3Jlc291cmNlLWxheW91dCc7XHJcbmltcG9ydCB7IE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhdGljLWxheW91dC9zdGF0aWMtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90aW1lbGluZS1sYXlvdXQvdGltZWxpbmUtbGF5b3V0JztcclxuLy8gQ09NUE9ORU5UU1xyXG5pbXBvcnQgeyBSZWFkTW9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZHZhbmNlZC1yZXN1bHQvYWR2YW5jZWQtcmVzdWx0JztcclxuaW1wb3J0IHsgTXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vZm9ybSc7XHJcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzb3VyY2UtbW9kYWwvcmVzb3VyY2UtbW9kYWwnO1xyXG5pbXBvcnQgeyBNckdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgLy8gTGF5b3V0IGNvbXBvbmVudHNcclxuICBNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbXBvbmVudCxcclxuICBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJIb21lTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1ySXRpbmVyYXJ5TGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yTWFwTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yUG9zdHNMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCxcclxuICBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCxcclxuICBNclNlYXJjaExheW91dENvbXBvbmVudCxcclxuICBNclN0YXRpY0xheW91dENvbXBvbmVudCxcclxuICBNclRpbWVsaW5lTGF5b3V0Q29tcG9uZW50LFxyXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXHJcbiAgUmVhZE1vcmVDb21wb25lbnQsXHJcbiAgTXJGb3JtQ29tcG9uZW50LFxyXG4gIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQsXHJcbiAgTXJSZXNvdXJjZU1vZGFsQ29tcG9uZW50LFxyXG4gIE1yR2FsbGVyeUNvbXBvbmVudCxcclxuICBNckFkdmFuY2VkUmVzdWx0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEVzY2FwZUh0bWxQaXBlLFxyXG4gICAgQ09NUE9ORU5UU1xyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTXJTZWFyY2hTZXJ2aWNlLFxyXG4gICAgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXHJcbiAgICBNclJlc291cmNlTW9kYWxTZXJ2aWNlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgeyB9XHJcbiJdfQ==