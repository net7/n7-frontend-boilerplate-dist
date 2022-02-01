import { Component, Input } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchFacetsLayoutConfig as config } from './search-facets-layout.config';
import { FacetTextDS } from '../../data-sources/facets/facet-text.ds';
import { FacetCheckboxDS } from '../../data-sources/facets/facet-checkbox.ds';
import { FacetSelectDS } from '../../data-sources/facets/facet-select.ds';
import { FacetLinkDS } from '../../data-sources/facets/facet-link.ds';
import { FacetHeaderDS } from '../../data-sources/facets/facet-header.ds';
import { FacetHeaderEH } from '../../event-handlers/facets/facet-header.eh';
import { FacetTextEH } from '../../event-handlers/facets/facet-text.eh';
import { FacetCheckboxEH } from '../../event-handlers/facets/facet-checkbox.eh';
import { FacetSelectEH } from '../../event-handlers/facets/facet-select.eh';
import { FacetLinkEH } from '../../event-handlers/facets/facet-link.eh';
import { FacetLinkMultipleDS } from '../../data-sources/facets/facet-link-multiple.ds';
import { FacetLinkMultipleEH } from '../../event-handlers/facets/facet-link-multiple.eh';
import { FacetMapDS } from '../../data-sources/facets/facet-map.ds';
import { FacetMapEH } from '../../event-handlers/facets/facet-map.eh';
import { FacetHistogramEH } from '../../event-handlers/facets/facet-histogram.eh';
import { FacetHistogramDS } from '../../data-sources/facets/facet-histogram.ds';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
const DATASOURCE_MAP = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
    map: FacetMapDS,
    // if the facet value is an array you MUST include it in the name
    'map-multiple': FacetMapDS,
    'link-multiple': FacetLinkMultipleDS,
    histogram: FacetHistogramDS,
};
const EVENTHANDLER_MAP = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
    map: FacetMapEH,
    // if the facet value is an array you MUST include it in the name
    'map-multiple': FacetMapEH,
    'link-multiple': FacetLinkMultipleEH,
    histogram: FacetHistogramEH,
};
export class MrSearchFacetsLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
    }
    initPayload() {
        return {
            searchService: this.searchService
        };
    }
    ngOnInit() {
        this.loadWidgets();
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const { facets } = this.searchService.getConfig();
        this.widgets = [];
        facets.sections.forEach(({ header, inputs }) => {
            if (header) {
                this.widgets.push({
                    id: header.id,
                    dataSource: DATASOURCE_MAP.header,
                    eventHandler: EVENTHANDLER_MAP.header
                });
            }
            inputs.forEach((input) => {
                let inputType = input.type;
                const { multiple } = input.schema;
                // multiple control
                if (multiple) {
                    inputType += '-multiple';
                }
                this.widgets.push({
                    id: input.id,
                    options: {
                        isMultiple: !!multiple,
                        libOptions: input.libOptions ?? undefined,
                    },
                    dataSource: DATASOURCE_MAP[inputType],
                    eventHandler: EVENTHANDLER_MAP[inputType]
                });
            });
        });
    }
}
MrSearchFacetsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrSearchFacetsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MrSearchFacetsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MrSearchFacetsLayoutComponent, selector: "mr-search-facets-layout", inputs: { searchService: "searchService" }, usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\n        <n7-facet-header\n        *ngIf=\"section.header\"\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\n            <div *ngFor=\"let input of section.inputs\" \n            [attr.id]=\"'facet-container-' + input.id\"\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                    \n                    <!-- INPUT MAP -->\n                    <n7-map \n                    *ngSwitchCase=\"'map'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-map>\n\n                    <!-- INPUT HISTOGRAM -->\n                    <n7-histogram-range \n                    *ngSwitchCase=\"'histogram'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-histogram-range>\n                \n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n", components: [{ type: i1.FacetHeaderComponent, selector: "n7-facet-header", inputs: ["data", "emit"] }, { type: i1.InputTextComponent, selector: "n7-input-text", inputs: ["data", "emit"] }, { type: i1.InputCheckboxComponent, selector: "n7-input-checkbox", inputs: ["data", "emit"] }, { type: i1.InputSelectComponent, selector: "n7-input-select", inputs: ["data", "emit"] }, { type: i1.InputLinkComponent, selector: "n7-input-link", inputs: ["data", "emit"] }, { type: i1.MapComponent, selector: "n7-map", inputs: ["data", "emit"] }, { type: i1.HistogramRangeComponent, selector: "n7-histogram-range", inputs: ["data", "emit"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrSearchFacetsLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-search-facets-layout', template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\n        <n7-facet-header\n        *ngIf=\"section.header\"\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\n            <div *ngFor=\"let input of section.inputs\" \n            [attr.id]=\"'facet-container-' + input.id\"\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                    \n                    <!-- INPUT MAP -->\n                    <n7-map \n                    *ngSwitchCase=\"'map'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-map>\n\n                    <!-- INPUT HISTOGRAM -->\n                    <n7-histogram-range \n                    *ngSwitchCase=\"'histogram'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-histogram-range>\n                \n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { searchService: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1B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QUFDLFNBQVMsQ0FBQztvQkFDckMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztpQkFDMUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBIQW5EVSw2QkFBNkI7OEdBQTdCLDZCQUE2QixrSUN4RDFDLHUrRkErREE7MkZEUGEsNkJBQTZCO2tCQUp6QyxTQUFTOytCQUNFLHlCQUF5QjswRUFJMUIsYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXRleHQuZHMnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5kcyc7XG5pbXBvcnQgeyBGYWNldFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZHMnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGVhZGVyLmRzJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGVhZGVyLmVoJztcbmltcG9ydCB7IEZhY2V0VGV4dEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmVoJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtc2VsZWN0LmVoJztcbmltcG9ydCB7IEZhY2V0TGlua0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFjZXRMaW5rTXVsdGlwbGVEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay1tdWx0aXBsZS5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtNdWx0aXBsZUVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZWgnO1xuaW1wb3J0IHsgRmFjZXRNYXBEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbWFwLmRzJztcbmltcG9ydCB7IEZhY2V0TWFwRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoJztcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmVoJztcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxuICBtYXA6IEZhY2V0TWFwRFMsXG4gIC8vIGlmIHRoZSBmYWNldCB2YWx1ZSBpcyBhbiBhcnJheSB5b3UgTVVTVCBpbmNsdWRlIGl0IGluIHRoZSBuYW1lXG4gICdtYXAtbXVsdGlwbGUnOiBGYWNldE1hcERTLFxuICAnbGluay1tdWx0aXBsZSc6IEZhY2V0TGlua011bHRpcGxlRFMsXG4gIGhpc3RvZ3JhbTogRmFjZXRIaXN0b2dyYW1EUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIGhlYWRlcjogRmFjZXRIZWFkZXJFSCxcbiAgdGV4dDogRmFjZXRUZXh0RUgsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RUgsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3RFSCxcbiAgbGluazogRmFjZXRMaW5rRUgsXG4gIG1hcDogRmFjZXRNYXBFSCxcbiAgLy8gaWYgdGhlIGZhY2V0IHZhbHVlIGlzIGFuIGFycmF5IHlvdSBNVVNUIGluY2x1ZGUgaXQgaW4gdGhlIG5hbWVcbiAgJ21hcC1tdWx0aXBsZSc6IEZhY2V0TWFwRUgsXG4gICdsaW5rLW11bHRpcGxlJzogRmFjZXRMaW5rTXVsdGlwbGVFSCxcbiAgaGlzdG9ncmFtOiBGYWNldEhpc3RvZ3JhbUVILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaFNlcnZpY2U6IHRoaXMuc2VhcmNoU2VydmljZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkOiBoZWFkZXIuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVAuaGVhZGVyLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUC5oZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGlucHV0LnR5cGU7XG4gICAgICAgIGNvbnN0IHsgbXVsdGlwbGUgfSA9IGlucHV0LnNjaGVtYTtcbiAgICAgICAgLy8gbXVsdGlwbGUgY29udHJvbFxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICBpbnB1dFR5cGUgKz0gJy1tdWx0aXBsZSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkOiBpbnB1dC5pZCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBpc011bHRpcGxlOiAhIW11bHRpcGxlLFxuICAgICAgICAgICAgbGliT3B0aW9uczogaW5wdXQubGliT3B0aW9ucyA/PyB1bmRlZmluZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFtpbnB1dFR5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFtpbnB1dFR5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJsYi5kYXRhU291cmNlLmZhY2V0c1wiIGNsYXNzPVwibXItZmFjZXRzX19mYWNldHMtd3JhcHBlciB7eyBsYi5kYXRhU291cmNlLmZhY2V0cy5jbGFzc2VzIHx8ICcnIH19XCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBsYi5kYXRhU291cmNlLmZhY2V0cy5zZWN0aW9uc1wiIFxuICAgIGNsYXNzPVwibXItZmFjZXRzX19zaW5nbGUtZmFjZXQge3sgc2VjdGlvbi5jbGFzc2VzIHx8ICcnIH19XCJcbiAgICBbbmdDbGFzc109XCJsYi5kYXRhU291cmNlLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKCdzZWN0aW9uJywgc2VjdGlvbi5pZCkgfCBhc3luY1wiPlxuICAgICAgICA8bjctZmFjZXQtaGVhZGVyXG4gICAgICAgICpuZ0lmPVwic2VjdGlvbi5oZWFkZXJcIlxuICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzW3NlY3Rpb24uaGVhZGVyLmlkXS5kcy5vdXQkIHwgYXN5bmNcIlxuICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzW3NlY3Rpb24uaGVhZGVyLmlkXS5lbWl0XCJcbiAgICAgICAgPjwvbjctZmFjZXQtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XCJzZWN0aW9uLmhlYWRlciAmJiAhbGIud2lkZ2V0c1tzZWN0aW9uLmhlYWRlci5pZF0uZHMuaXNPcGVuKClcIiBjbGFzcz1cIm1yLWZhY2V0c19fc2luZ2xlLWZhY2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGlucHV0IG9mIHNlY3Rpb24uaW5wdXRzXCIgXG4gICAgICAgICAgICBbYXR0ci5pZF09XCInZmFjZXQtY29udGFpbmVyLScgKyBpbnB1dC5pZFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1yLWZhY2V0c19fc2luZ2xlLWZhY2V0LWlubmVyLWNvbnRlbnQge3sgaW5wdXQuY2xhc3NlcyB8fCAnJyB9fVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImlucHV0LnR5cGVcIj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBJTlBVVCBURVhUIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bjctaW5wdXQtdGV4dCBcbiAgICAgICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbaW5wdXQuaWRdLmRzLm91dCQgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbaW5wdXQuaWRdLmVtaXRcIj48L243LWlucHV0LXRleHQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSU5QVVQgQ0hFQ0tCT1ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuNy1pbnB1dC1jaGVja2JveCBcbiAgICAgICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5kcy5vdXQkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5lbWl0XCI+PC9uNy1pbnB1dC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSU5QVVQgU0VMRUNUIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bjctaW5wdXQtc2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5kcy5vdXQkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5lbWl0XCI+PC9uNy1pbnB1dC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8IS0tIElOUFVUIExJTksgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuNy1pbnB1dC1saW5rIFxuICAgICAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibGIud2lkZ2V0c1tpbnB1dC5pZF0uZHMub3V0JCB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1tpbnB1dC5pZF0uZW1pdFwiPjwvbjctaW5wdXQtbGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIElOUFVUIExJTktNVUxUSSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG43LWlucHV0LWxpbmsgXG4gICAgICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGlua011bHRpJ1wiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImxiLndpZGdldHNbaW5wdXQuaWRdLmRzLm91dCQgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgIFtlbWl0XT1cImxiLndpZGdldHNbaW5wdXQuaWRdLmVtaXRcIj48L243LWlucHV0LWxpbms+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8IS0tIElOUFVUIE1BUCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG43LW1hcCBcbiAgICAgICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidtYXAnXCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwibGIud2lkZ2V0c1tpbnB1dC5pZF0uZHMub3V0JCB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwibGIud2lkZ2V0c1tpbnB1dC5pZF0uZW1pdFwiPjwvbjctbWFwPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSU5QVVQgSElTVE9HUkFNIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bjctaGlzdG9ncmFtLXJhbmdlIFxuICAgICAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2hpc3RvZ3JhbSdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5kcy5vdXQkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbZW1pdF09XCJsYi53aWRnZXRzW2lucHV0LmlkXS5lbWl0XCI+PC9uNy1oaXN0b2dyYW0tcmFuZ2U+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==