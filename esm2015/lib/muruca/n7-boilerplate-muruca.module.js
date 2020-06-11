import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
// LAYOUTS
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchService } from './services/search.service';
const COMPONENTS = [
    MrHomeLayoutComponent,
    MrSearchLayoutComponent,
    MrGlossaryLayoutComponent,
    MrStaticLayoutComponent,
    MrSearchFacetsLayoutComponent,
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
            MrSearchService
        ],
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], N7BoilerplateMurucaModule);
export { N7BoilerplateMurucaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7Q0FDOUIsQ0FBQztBQWtCRixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtDQUFJLENBQUE7QUFBN0IseUJBQXlCO0lBaEJyQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixjQUFjO1lBQ2QsVUFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix5QkFBeUI7U0FDMUI7UUFDRCxTQUFTLEVBQUU7WUFDVCxlQUFlO1NBQ2hCO1FBQ0QsZUFBZSxFQUFFLFVBQVU7UUFDM0IsT0FBTyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztHQUNXLHlCQUF5QixDQUFJO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0JztcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ2xvc3NhcnktbGF5b3V0L2dsb3NzYXJ5LWxheW91dCc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQsXG4gIE1yU3RhdGljTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEVzY2FwZUh0bWxQaXBlLFxuICAgIENPTVBPTkVOVFNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBEdkNvbXBvbmVudHNMaWJNb2R1bGUsXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTXJTZWFyY2hTZXJ2aWNlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZU11cnVjYU1vZHVsZSB7IH1cbiJdfQ==