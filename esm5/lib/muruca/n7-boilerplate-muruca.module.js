/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
var COMPONENTS = [
    MrHomeLayoutComponent,
    MrSearchLayoutComponent,
    MrGlossaryLayoutComponent,
    MrStaticLayoutComponent,
    MrSearchFacetsLayoutComponent,
];
var N7BoilerplateMurucaModule = /** @class */ (function () {
    function N7BoilerplateMurucaModule() {
    }
    N7BoilerplateMurucaModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return N7BoilerplateMurucaModule;
}());
export { N7BoilerplateMurucaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUV0RCxVQUFVLEdBQUc7SUFDakIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtDQUM5QjtBQUVEO0lBQUE7SUFnQnlDLENBQUM7O2dCQWhCekMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3FCQUNoQjtvQkFDRCxlQUFlLEVBQUUsVUFBVTtvQkFDM0IsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCOztJQUN3QyxnQ0FBQztDQUFBLEFBaEIxQyxJQWdCMEM7U0FBN0IseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgRXNjYXBlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL2tlZXAtaHRtbC5waXBlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nbG9zc2FyeS1sYXlvdXQvZ2xvc3NhcnktbGF5b3V0JztcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3N0YXRpYy1sYXlvdXQvc3RhdGljLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgTXJIb21lTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaExheW91dENvbXBvbmVudCxcbiAgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCxcbiAgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQsXG4gIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXNjYXBlSHRtbFBpcGUsXG4gICAgQ09NUE9ORU5UU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNclNlYXJjaFNlcnZpY2VcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIHsgfVxuIl19