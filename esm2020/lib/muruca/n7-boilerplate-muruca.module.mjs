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
import * as i0 from "@angular/core";
const COMPONENTS = [
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
export class N7BoilerplateMurucaModule {
}
N7BoilerplateMurucaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateMurucaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateMurucaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateMurucaModule, declarations: [EscapeHtmlPipe, 
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
        MrAdvancedResultComponent], imports: [CommonModule,
        DvComponentsLibModule,
        N7BoilerplateCommonModule], exports: [
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
        MrAdvancedResultComponent] });
N7BoilerplateMurucaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateMurucaModule, providers: [
        MrSearchService,
        MrLayoutStateService,
        MrResourceModalService
    ], imports: [[
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: N7BoilerplateMurucaModule, decorators: [{
            type: NgModule,
            args: [{
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
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9uNy1ib2lsZXJwbGF0ZS1tdXJ1Y2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixXQUFXO0FBQ1gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLFFBQVE7QUFDUixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsVUFBVTtBQUNWLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFD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QkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG4vLyBTRVJWSUNFU1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XG4vLyBQSVBFU1xuaW1wb3J0IHsgRXNjYXBlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL2tlZXAtaHRtbC5waXBlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0L2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0JztcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYWR2YW5jZWQtc2VhcmNoLWxheW91dC9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0JztcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dCc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJJdGluZXJhcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaXRpbmVyYXJ5LWxheW91dC9pdGluZXJhcnktbGF5b3V0JztcbmltcG9ydCB7IE1yTWFwTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dCc7XG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9yZXNvdXJjZS1sYXlvdXQvcmVzb3VyY2UtbGF5b3V0JztcbmltcG9ydCB7IE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtbGF5b3V0JztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90aW1lbGluZS1sYXlvdXQvdGltZWxpbmUtbGF5b3V0Jztcbi8vIENPTVBPTkVOVFNcbmltcG9ydCB7IFJlYWRNb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUnO1xuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZHZhbmNlZC1yZXN1bHQvYWR2YW5jZWQtcmVzdWx0JztcbmltcG9ydCB7IE1yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xuaW1wb3J0IHsgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uL2Zvcm0td3JhcHBlci1hY2NvcmRpb24nO1xuaW1wb3J0IHsgTXJTZWFyY2hQYWdlRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jlc291cmNlLW1vZGFsL3Jlc291cmNlLW1vZGFsJztcbmltcG9ydCB7IE1yR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICAvLyBMYXlvdXQgY29tcG9uZW50c1xuICBNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbXBvbmVudCxcbiAgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCxcbiAgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCxcbiAgTXJIb21lTGF5b3V0Q29tcG9uZW50LFxuICBNckl0aW5lcmFyeUxheW91dENvbXBvbmVudCxcbiAgTXJNYXBMYXlvdXRDb21wb25lbnQsXG4gIE1yUG9zdHNMYXlvdXRDb21wb25lbnQsXG4gIE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQsXG4gIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaExheW91dENvbXBvbmVudCxcbiAgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQsXG4gIE1yVGltZWxpbmVMYXlvdXRDb21wb25lbnQsXG4gIC8vIEN1c3RvbSBjb21wb25lbnRzXG4gIFJlYWRNb3JlQ29tcG9uZW50LFxuICBNckZvcm1Db21wb25lbnQsXG4gIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25Db21wb25lbnQsXG4gIE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICBNclJlc291cmNlTW9kYWxDb21wb25lbnQsXG4gIE1yR2FsbGVyeUNvbXBvbmVudCxcbiAgTXJBZHZhbmNlZFJlc3VsdENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEVzY2FwZUh0bWxQaXBlLFxuICAgIENPTVBPTkVOVFNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTXJTZWFyY2hTZXJ2aWNlLFxuICAgIE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICAgIE1yUmVzb3VyY2VNb2RhbFNlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIHsgfVxuIl19