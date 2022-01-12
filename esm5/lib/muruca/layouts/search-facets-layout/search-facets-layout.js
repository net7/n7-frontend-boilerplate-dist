import { __decorate, __extends, __metadata } from "tslib";
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
import { MrSearchService } from '../../services/search.service';
import { FacetLinkMultipleDS } from '../../data-sources/facets/facet-link-multiple.ds';
import { FacetLinkMultipleEH } from '../../event-handlers/facets/facet-link-multiple.eh';
import { FacetMapDS } from '../../data-sources/facets/facet-map.ds';
import { FacetMapEH } from '../../event-handlers/facets/facet-map.eh';
import { FacetHistogramEH } from '../../event-handlers/facets/facet-histogram.eh';
import { FacetHistogramDS } from '../../data-sources/facets/facet-histogram.ds';
var DATASOURCE_MAP = {
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
var EVENTHANDLER_MAP = {
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
var MrSearchFacetsLayoutComponent = /** @class */ (function (_super) {
    __extends(MrSearchFacetsLayoutComponent, _super);
    function MrSearchFacetsLayoutComponent() {
        return _super.call(this, config) || this;
    }
    MrSearchFacetsLayoutComponent.prototype.initPayload = function () {
        return {
            searchService: this.searchService
        };
    };
    MrSearchFacetsLayoutComponent.prototype.ngOnInit = function () {
        this.loadWidgets();
        this.onInit();
    };
    MrSearchFacetsLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrSearchFacetsLayoutComponent.prototype.loadWidgets = function () {
        var _this = this;
        var facets = this.searchService.getConfig().facets;
        this.widgets = [];
        facets.sections.forEach(function (_a) {
            var header = _a.header, inputs = _a.inputs;
            if (header) {
                _this.widgets.push({
                    id: header.id,
                    dataSource: DATASOURCE_MAP.header,
                    eventHandler: EVENTHANDLER_MAP.header
                });
            }
            inputs.forEach(function (input) {
                var inputType = input.type;
                var multiple = input.schema.multiple;
                // multiple control
                if (multiple) {
                    inputType += '-multiple';
                }
                _this.widgets.push({
                    id: input.id,
                    options: {
                        isMultiple: !!multiple,
                    },
                    dataSource: DATASOURCE_MAP[inputType],
                    eventHandler: EVENTHANDLER_MAP[inputType]
                });
            });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", MrSearchService)
    ], MrSearchFacetsLayoutComponent.prototype, "searchService", void 0);
    MrSearchFacetsLayoutComponent = __decorate([
        Component({
            selector: 'mr-search-facets-layout',
            template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\n        <n7-facet-header\n        *ngIf=\"section.header\"\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\n            <div *ngFor=\"let input of section.inputs\" \n            [attr.id]=\"'facet-container-' + input.id\"\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                    \n                    <!-- INPUT MAP -->\n                    <n7-map \n                    *ngSwitchCase=\"'map'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-map>\n\n                    <!-- INPUT HISTOGRAM -->\n                    <n7-histogram-range \n                    *ngSwitchCase=\"'histogram'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-histogram-range>\n                \n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [])
    ], MrSearchFacetsLayoutComponent);
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0Qs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QUEwQztTQUMzQyxDQUFDOztPQUNXLDZCQUE2QixDQW1EekM7SUFBRCxvQ0FBQztDQUFBLEFBbkRELENBQW1ELGNBQWMsR0FtRGhFO1NBbkRZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXRleHQuZHMnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5kcyc7XG5pbXBvcnQgeyBGYWNldFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZHMnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGVhZGVyLmRzJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGVhZGVyLmVoJztcbmltcG9ydCB7IEZhY2V0VGV4dEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmVoJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtc2VsZWN0LmVoJztcbmltcG9ydCB7IEZhY2V0TGlua0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFjZXRMaW5rTXVsdGlwbGVEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay1tdWx0aXBsZS5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtNdWx0aXBsZUVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZWgnO1xuaW1wb3J0IHsgRmFjZXRNYXBEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbWFwLmRzJztcbmltcG9ydCB7IEZhY2V0TWFwRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoJztcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmVoJztcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxuICBtYXA6IEZhY2V0TWFwRFMsXG4gIC8vIGlmIHRoZSBmYWNldCB2YWx1ZSBpcyBhbiBhcnJheSB5b3UgTVVTVCBpbmNsdWRlIGl0IGluIHRoZSBuYW1lXG4gICdtYXAtbXVsdGlwbGUnOiBGYWNldE1hcERTLFxuICAnbGluay1tdWx0aXBsZSc6IEZhY2V0TGlua011bHRpcGxlRFMsXG4gIGhpc3RvZ3JhbTogRmFjZXRIaXN0b2dyYW1EUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIGhlYWRlcjogRmFjZXRIZWFkZXJFSCxcbiAgdGV4dDogRmFjZXRUZXh0RUgsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RUgsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3RFSCxcbiAgbGluazogRmFjZXRMaW5rRUgsXG4gIG1hcDogRmFjZXRNYXBFSCxcbiAgLy8gaWYgdGhlIGZhY2V0IHZhbHVlIGlzIGFuIGFycmF5IHlvdSBNVVNUIGluY2x1ZGUgaXQgaW4gdGhlIG5hbWVcbiAgJ21hcC1tdWx0aXBsZSc6IEZhY2V0TWFwRUgsXG4gICdsaW5rLW11bHRpcGxlJzogRmFjZXRMaW5rTXVsdGlwbGVFSCxcbiAgaGlzdG9ncmFtOiBGYWNldEhpc3RvZ3JhbUVILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaFNlcnZpY2U6IHRoaXMuc2VhcmNoU2VydmljZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkOiBoZWFkZXIuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVAuaGVhZGVyLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUC5oZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGlucHV0LnR5cGU7XG4gICAgICAgIGNvbnN0IHsgbXVsdGlwbGUgfSA9IGlucHV0LnNjaGVtYTtcbiAgICAgICAgLy8gbXVsdGlwbGUgY29udHJvbFxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICBpbnB1dFR5cGUgKz0gJy1tdWx0aXBsZSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkOiBpbnB1dC5pZCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBpc011bHRpcGxlOiAhIW11bHRpcGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbaW5wdXRUeXBlXSxcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbaW5wdXRUeXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=