/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/n7-boilerplate-muruca.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { MrHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { MrSearchLayoutComponent } from './layouts/search-layout/search-layout';
import { MrGlossaryLayoutComponent } from './layouts/glossary-layout/glossary-layout';
import { MrStaticLayoutComponent } from './layouts/static-layout/static-layout';
import { MrSearchFacetsLayoutComponent } from './layouts/search-facets-layout/search-facets-layout';
import { MrSearchTestLayoutComponent } from './layouts/search-test-layout/search-test-layout';
/** @type {?} */
const COMPONENTS = [
    MrHomeLayoutComponent,
    MrSearchLayoutComponent,
    MrGlossaryLayoutComponent,
    MrStaticLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchTestLayoutComponent,
];
export class N7BoilerplateMurucaModule {
}
N7BoilerplateMurucaModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbjctYm9pbGVycGxhdGUtbXVydWNhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7O01BRXhGLFVBQVUsR0FBRztJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDJCQUEyQjtDQUM1QjtBQVlELE1BQU0sT0FBTyx5QkFBeUI7OztZQVZyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIseUJBQXlCO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQnO1xuaW1wb3J0IHsgTXJHbG9zc2FyeUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9nbG9zc2FyeS1sYXlvdXQvZ2xvc3NhcnktbGF5b3V0JztcbmltcG9ydCB7IE1yU3RhdGljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3N0YXRpYy1sYXlvdXQvc3RhdGljLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dCc7XG5pbXBvcnQgeyBNclNlYXJjaFRlc3RMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2VhcmNoLXRlc3QtbGF5b3V0L3NlYXJjaC10ZXN0LWxheW91dCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIE1ySG9tZUxheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQsXG4gIE1yR2xvc3NhcnlMYXlvdXRDb21wb25lbnQsXG4gIE1yU3RhdGljTGF5b3V0Q29tcG9uZW50LFxuICBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCxcbiAgTXJTZWFyY2hUZXN0TGF5b3V0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcbiAgICBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlIHsgfVxuIl19