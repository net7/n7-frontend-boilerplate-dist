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
N7BoilerplateMurucaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateMurucaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateMurucaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateMurucaModule, declarations: [EscapeHtmlPipe, 
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
N7BoilerplateMurucaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateMurucaModule, providers: [
        MrSearchService,
        MrLayoutStateService,
        MrResourceModalService
    ], imports: [[
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateMurucaModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9uNy1ib2lsZXJwbGF0ZS1tdXJ1Y2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixXQUFXO0FBQ1gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLFFBQVE7QUFDUixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsVUFBVTtBQUNWLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFD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QkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcclxuLy8gU0VSVklDRVNcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xyXG4vLyBQSVBFU1xyXG5pbXBvcnQgeyBFc2NhcGVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMva2VlcC1odG1sLnBpcGUnO1xyXG4vLyBMQVlPVVRTXHJcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0L2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0JztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNckl0aW5lcmFyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9pdGluZXJhcnktbGF5b3V0L2l0aW5lcmFyeS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNck1hcExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dCc7XHJcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dCc7XHJcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3N0YXRpYy1sYXlvdXQvc3RhdGljLWxheW91dCc7XHJcbmltcG9ydCB7IE1yVGltZWxpbmVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dCc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgUmVhZE1vcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZSc7XHJcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWR2YW5jZWQtcmVzdWx0L2FkdmFuY2VkLXJlc3VsdCc7XHJcbmltcG9ydCB7IE1yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xyXG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbic7XHJcbmltcG9ydCB7IE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jlc291cmNlLW1vZGFsL3Jlc291cmNlLW1vZGFsJztcclxuaW1wb3J0IHsgTXJHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeSc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIC8vIExheW91dCBjb21wb25lbnRzXHJcbiAgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCxcclxuICBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50LFxyXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcclxuICBNckl0aW5lcmFyeUxheW91dENvbXBvbmVudCxcclxuICBNck1hcExheW91dENvbXBvbmVudCxcclxuICBNclBvc3RzTGF5b3V0Q29tcG9uZW50LFxyXG4gIE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQsXHJcbiAgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCxcclxuICAvLyBDdXN0b20gY29tcG9uZW50c1xyXG4gIFJlYWRNb3JlQ29tcG9uZW50LFxyXG4gIE1yRm9ybUNvbXBvbmVudCxcclxuICBNckZvcm1XcmFwcGVyQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gIE1yU2VhcmNoUGFnZURlc2NyaXB0aW9uQ29tcG9uZW50LFxyXG4gIE1yUmVzb3VyY2VNb2RhbENvbXBvbmVudCxcclxuICBNckdhbGxlcnlDb21wb25lbnQsXHJcbiAgTXJBZHZhbmNlZFJlc3VsdENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFc2NhcGVIdG1sUGlwZSxcclxuICAgIENPTVBPTkVOVFNcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcclxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1yU2VhcmNoU2VydmljZSxcclxuICAgIE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxyXG4gICAgTXJSZXNvdXJjZU1vZGFsU2VydmljZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZU11cnVjYU1vZHVsZSB7IH1cclxuIl19