import { __decorate } from "tslib";
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
// LAYOUTS
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrResourceLayoutComponent } from './layouts/resource-layout/resource-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrSearchService } from './services/search.service';
import { MrLayoutStateService } from './services/layout-state.service';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
var COMPONENTS = [
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWhGLElBQU0sVUFBVSxHQUFHO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFtQkY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLHlCQUF5QjtRQWpCckMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGNBQWM7Z0JBQ2QsVUFBVTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQix5QkFBeUI7YUFDMUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixvQkFBb0I7YUFDckI7WUFDRCxlQUFlLEVBQUUsVUFBVTtZQUMzQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO09BQ1cseUJBQXlCLENBQUk7SUFBRCxnQ0FBQztDQUFBLEFBQTFDLElBQTBDO1NBQTdCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IEVzY2FwZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWVwLWh0bWwucGlwZSc7XG4vLyBMQVlPVVRTXG5pbXBvcnQgeyBNckdsb3NzYXJ5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQnO1xuaW1wb3J0IHsgTXJIb21lTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0JztcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvcmVzb3VyY2UtbGF5b3V0L3Jlc291cmNlLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhdGljLWxheW91dC9zdGF0aWMtbGF5b3V0JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCxcbiAgTXJIb21lTGF5b3V0Q29tcG9uZW50LFxuICBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIE1yU3RhdGljTGF5b3V0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXNjYXBlSHRtbFBpcGUsXG4gICAgQ09NUE9ORU5UU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNclNlYXJjaFNlcnZpY2UsXG4gICAgTXJMYXlvdXRTdGF0ZVNlcnZpY2VcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIHsgfVxuIl19