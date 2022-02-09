// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { N7BoilerplateCommonModule } from '../common/n7-boilerplate-common.module';
// COMPONENTS
import { DataWidgetWrapperComponent } from './components/data-widget-wrapper/data-widget-wrapper';
import { DatepickerWrapperComponent } from './components/datepicker-wrapper/datepicker-wrapper';
import { CardComponent } from './components/card/card';
import { CardTextItemComponent } from './components/card-text-item/card-text-item';
// LAYOUTS
import { DvExampleLayoutComponent } from './layout/example-layout/example-layout';
import { DvCardExampleLayoutComponent } from './layout/card-example-layout/card-example-layout';
import * as i0 from "@angular/core";
const COMPONENTS = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
    CardComponent,
    CardTextItemComponent,
    DvExampleLayoutComponent,
    DvCardExampleLayoutComponent
];
export class N7BoilerplateDataVizModule {
}
N7BoilerplateDataVizModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateDataVizModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
N7BoilerplateDataVizModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateDataVizModule, declarations: [DataWidgetWrapperComponent,
        DatepickerWrapperComponent,
        CardComponent,
        CardTextItemComponent,
        DvExampleLayoutComponent,
        DvCardExampleLayoutComponent], imports: [CommonModule,
        DvComponentsLibModule,
        N7BoilerplateCommonModule], exports: [DataWidgetWrapperComponent,
        DatepickerWrapperComponent,
        CardComponent,
        CardTextItemComponent,
        DvExampleLayoutComponent,
        DvCardExampleLayoutComponent] });
N7BoilerplateDataVizModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateDataVizModule, providers: [], imports: [[
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: N7BoilerplateDataVizModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        DvComponentsLibModule,
                        N7BoilerplateCommonModule,
                    ],
                    providers: [],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovbjctYm9pbGVycGxhdGUtZGF0YS12aXoubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLFVBQVU7QUFDVixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFFaEcsTUFBTSxVQUFVLEdBQUc7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7Q0FDN0IsQ0FBQztBQVlGLE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixpQkFsQnJDLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsNEJBQTRCLGFBTTFCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIseUJBQXlCLGFBYjNCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsNEJBQTRCO3dIQWFqQiwwQkFBMEIsYUFIMUIsRUFBRSxZQUxKO1lBQ1AsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix5QkFBeUI7U0FDMUI7MkZBSVUsMEJBQTBCO2tCQVZ0QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IHsgRGF0YVdpZGdldFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS13aWRnZXQtd3JhcHBlci9kYXRhLXdpZGdldC13cmFwcGVyJztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci13cmFwcGVyL2RhdGVwaWNrZXItd3JhcHBlcic7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkJztcclxuaW1wb3J0IHsgQ2FyZFRleHRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtdGV4dC1pdGVtL2NhcmQtdGV4dC1pdGVtJztcclxuLy8gTEFZT1VUU1xyXG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dCc7XHJcbmltcG9ydCB7IER2Q2FyZEV4YW1wbGVMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0L2NhcmQtZXhhbXBsZS1sYXlvdXQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBEYXRhV2lkZ2V0V3JhcHBlckNvbXBvbmVudCxcclxuICBEYXRlcGlja2VyV3JhcHBlckNvbXBvbmVudCxcclxuICBDYXJkQ29tcG9uZW50LFxyXG4gIENhcmRUZXh0SXRlbUNvbXBvbmVudCxcclxuICBEdkV4YW1wbGVMYXlvdXRDb21wb25lbnQsXHJcbiAgRHZDYXJkRXhhbXBsZUxheW91dENvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRHZDb21wb25lbnRzTGliTW9kdWxlLFxyXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgeyB9XHJcbiJdfQ==