/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// LAYOUTS
import { AwHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { AwAboutLayoutComponent } from './layouts/about-layout/about-layout';
import { AwWorksLayoutComponent } from './layouts/works-layout/works-layout';
import { AwPatrimonioLayoutComponent } from './layouts/patrimonio-layout/patrimonio-layout';
/** @type {?} */
const COMPONENTS = [
    AwHomeLayoutComponent,
    AwAboutLayoutComponent,
    AwWorksLayoutComponent,
    AwPatrimonioLayoutComponent,
];
export class N7BoilerplateAriannaWebModule {
}
N7BoilerplateAriannaWebModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL243LWJvaWxlcnBsYXRlLWFyaWFubmEtd2ViLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUVuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7TUFFdEYsVUFBVSxHQUFHO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtDQUM1QjtBQWFELE1BQU0sT0FBTyw2QkFBNkI7OztZQVZ6QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIseUJBQXlCO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHZDb21wb25lbnRzTGliTW9kdWxlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcbi8vIExBWU9VVFNcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dCc7XG5pbXBvcnQgeyBBd0Fib3V0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2Fib3V0LWxheW91dC9hYm91dC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdXb3Jrc0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy93b3Jrcy1sYXlvdXQvd29ya3MtbGF5b3V0JztcbmltcG9ydCB7IEF3UGF0cmltb25pb0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9wYXRyaW1vbmlvLWxheW91dC9wYXRyaW1vbmlvLWxheW91dCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEF3SG9tZUxheW91dENvbXBvbmVudCxcbiAgQXdBYm91dExheW91dENvbXBvbmVudCxcbiAgQXdXb3Jrc0xheW91dENvbXBvbmVudCxcbiAgQXdQYXRyaW1vbmlvTGF5b3V0Q29tcG9uZW50LFxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZUFyaWFubmFXZWJNb2R1bGUgeyB9XG4iXX0=