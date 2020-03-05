/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/n7-boilerplate-data-viz.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// COMPONENTS
import { DataWidgetWrapperComponent } from './components/data-widget-wrapper/data-widget-wrapper';
import { DatepickerWrapperComponent } from './components/datepicker-wrapper/datepicker-wrapper';
// LAYOUTS
import { DvExampleLayoutComponent } from './layout/example-layout/example-layout';
/** @type {?} */
const COMPONENTS = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
    DvExampleLayoutComponent,
];
export class N7BoilerplateDataVizModule {
}
N7BoilerplateDataVizModule.decorators = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBRWhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztNQUU1RSxVQUFVLEdBQUc7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix3QkFBd0I7Q0FDekI7QUFZRCxNQUFNLE9BQU8sMEJBQTBCOzs7WUFWdEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER2Q29tcG9uZW50c0xpYk1vZHVsZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9uNy1ib2lsZXJwbGF0ZS1jb21tb24ubW9kdWxlJztcclxuLy8gQ09NUE9ORU5UU1xyXG5pbXBvcnQgeyBEYXRhV2lkZ2V0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLXdpZGdldC13cmFwcGVyL2RhdGEtd2lkZ2V0LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlcGlja2VyLXdyYXBwZXIvZGF0ZXBpY2tlci13cmFwcGVyJztcclxuLy8gTEFZT1VUU1xyXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50LFxyXG4gIERhdGVwaWNrZXJXcmFwcGVyQ29tcG9uZW50LFxyXG4gIER2RXhhbXBsZUxheW91dENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIER2Q29tcG9uZW50c0xpYk1vZHVsZSxcclxuICAgIE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlRGF0YVZpek1vZHVsZSB7IH1cclxuIl19