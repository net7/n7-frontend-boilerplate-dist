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
import { MrSearchPageDescriptionComponent } from './components/search-page-description/search-page-description';
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
    MrFormWrapperAccordionComponent,
    MrSearchPageDescriptionComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLFdBQVc7QUFDWCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUcsYUFBYTtBQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVoSCxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixnQ0FBZ0M7Q0FDakMsQ0FBQztBQW1CRjtJQUFBO0lBQXlDLENBQUM7SUFBN0IseUJBQXlCO1FBakJyQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osY0FBYztnQkFDZCxVQUFVO2FBQ1g7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLHlCQUF5QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLG9CQUFvQjthQUNyQjtZQUNELGVBQWUsRUFBRSxVQUFVO1lBQzNCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7T0FDVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUEsQUFBMUMsSUFBMEM7U0FBN0IseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuLy8gU0VSVklDRVNcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbi8vIFBJUEVTXG5pbXBvcnQgeyBFc2NhcGVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMva2VlcC1odG1sLnBpcGUnO1xuLy8gTEFZT1VUU1xuaW1wb3J0IHsgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nbG9zc2FyeS1sYXlvdXQvZ2xvc3NhcnktbGF5b3V0JztcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3N0YXRpYy1sYXlvdXQvc3RhdGljLWxheW91dCc7XG5pbXBvcnQgeyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dCc7XG4vLyBDT01QT05FTlRTXG5pbXBvcnQgeyBSZWFkTW9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlJztcbmltcG9ydCB7IE1yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xuaW1wb3J0IHsgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24nO1xuaW1wb3J0IHsgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24nO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICAvLyBMYXlvdXQgY29tcG9uZW50c1xuICBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50LFxuICBNckhvbWVMYXlvdXRDb21wb25lbnQsXG4gIE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQsXG4gIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaExheW91dENvbXBvbmVudCxcbiAgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQsXG4gIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXG4gIFJlYWRNb3JlQ29tcG9uZW50LFxuICBNckZvcm1Db21wb25lbnQsXG4gIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQsXG4gIE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFc2NhcGVIdG1sUGlwZSxcbiAgICBDT01QT05FTlRTXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1yU2VhcmNoU2VydmljZSxcbiAgICBNckxheW91dFN0YXRlU2VydmljZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgeyB9XG4iXX0=