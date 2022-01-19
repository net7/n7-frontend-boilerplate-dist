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
            template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\r\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \r\n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\r\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\r\n        <n7-facet-header\r\n        *ngIf=\"section.header\"\r\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\r\n        [emit]=\"lb.widgets[section.header.id].emit\"\r\n        ></n7-facet-header>\r\n\r\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\r\n            <div *ngFor=\"let input of section.inputs\" \r\n            [attr.id]=\"'facet-container-' + input.id\"\r\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n    \r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text \r\n                    *ngSwitchCase=\"'text'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\r\n    \r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox \r\n                    *ngSwitchCase=\"'checkbox'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\r\n                    \r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select \r\n                    *ngSwitchCase=\"'select'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\r\n                    \r\n                    <!-- INPUT LINK -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'link'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n\r\n                    <!-- INPUT LINKMULTI -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'linkMulti'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n                    \r\n                    <!-- INPUT MAP -->\r\n                    <n7-map \r\n                    *ngSwitchCase=\"'map'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-map>\r\n\r\n                    <!-- INPUT HISTOGRAM -->\r\n                    <n7-histogram-range \r\n                    *ngSwitchCase=\"'histogram'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-histogram-range>\r\n                \r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [])
    ], MrSearchFacetsLayoutComponent);
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLEdBQUcsRUFBRSxVQUFVO0lBQ2YsaUVBQWlFO0lBQ2pFLGNBQWMsRUFBRSxVQUFVO0lBQzFCLGVBQWUsRUFBRSxtQkFBbUI7SUFDcEMsU0FBUyxFQUFFLGdCQUFnQjtDQUM1QixDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixHQUFHLEVBQUUsVUFBVTtJQUNmLGlFQUFpRTtJQUNqRSxjQUFjLEVBQUUsVUFBVTtJQUMxQixlQUFlLEVBQUUsbUJBQW1CO0lBQ3BDLFNBQVMsRUFBRSxnQkFBZ0I7Q0FDNUIsQ0FBQztBQU1GO0lBQW1ELGlEQUFjO0lBRy9EO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVTLG1EQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtREFBVyxHQUFYO1FBQUEsaUJBNEJDO1FBM0JTLElBQUEsOENBQU0sQ0FBb0M7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFrQjtnQkFBaEIsa0JBQU0sRUFBRSxrQkFBTTtZQUN2QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLFVBQVUsRUFBRSxjQUFjLENBQUMsTUFBTTtvQkFDakMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLE1BQU07aUJBQ3RDLENBQUMsQ0FBQzthQUNKO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ25CLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLElBQUEsZ0NBQVEsQ0FBa0I7Z0JBQ2xDLG1CQUFtQjtnQkFDbkIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osU0FBUyxJQUFJLFdBQVcsQ0FBQztpQkFDMUI7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDWixPQUFPLEVBQUU7d0JBQ1AsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRO3FCQUN2QjtvQkFDRCxVQUFVLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDckMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztpQkFDMUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqRFE7UUFBUixLQUFLLEVBQUU7a0NBQWdCLGVBQWU7d0VBQUM7SUFEN0IsNkJBQTZCO1FBSnpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsK21HQUEwQztTQUMzQyxDQUFDOztPQUNXLDZCQUE2QixDQW1EekM7SUFBRCxvQ0FBQztDQUFBLEFBbkRELENBQW1ELGNBQWMsR0FtRGhFO1NBbkRZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0LmNvbmZpZyc7XHJcbmltcG9ydCB7IEZhY2V0VGV4dERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzJztcclxuaW1wb3J0IHsgRmFjZXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5kcyc7XHJcbmltcG9ydCB7IEZhY2V0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcyc7XHJcbmltcG9ydCB7IEZhY2V0TGlua0RTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzJztcclxuaW1wb3J0IHsgRmFjZXRIZWFkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGVhZGVyLmRzJztcclxuaW1wb3J0IHsgRmFjZXRIZWFkZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZWgnO1xyXG5pbXBvcnQgeyBGYWNldFRleHRFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC10ZXh0LmVoJztcclxuaW1wb3J0IHsgRmFjZXRDaGVja2JveEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmVoJztcclxuaW1wb3J0IHsgRmFjZXRTZWxlY3RFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZWgnO1xyXG5pbXBvcnQgeyBGYWNldExpbmtFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1saW5rLmVoJztcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGYWNldExpbmtNdWx0aXBsZURTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzJztcclxuaW1wb3J0IHsgRmFjZXRMaW5rTXVsdGlwbGVFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmVoJztcclxuaW1wb3J0IHsgRmFjZXRNYXBEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbWFwLmRzJztcclxuaW1wb3J0IHsgRmFjZXRNYXBFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1tYXAuZWgnO1xyXG5pbXBvcnQgeyBGYWNldEhpc3RvZ3JhbUVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5laCc7XHJcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcyc7XHJcblxyXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcclxuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXHJcbiAgdGV4dDogRmFjZXRUZXh0RFMsXHJcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hEUyxcclxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXHJcbiAgbGluazogRmFjZXRMaW5rRFMsXHJcbiAgbWFwOiBGYWNldE1hcERTLFxyXG4gIC8vIGlmIHRoZSBmYWNldCB2YWx1ZSBpcyBhbiBhcnJheSB5b3UgTVVTVCBpbmNsdWRlIGl0IGluIHRoZSBuYW1lXHJcbiAgJ21hcC1tdWx0aXBsZSc6IEZhY2V0TWFwRFMsXHJcbiAgJ2xpbmstbXVsdGlwbGUnOiBGYWNldExpbmtNdWx0aXBsZURTLFxyXG4gIGhpc3RvZ3JhbTogRmFjZXRIaXN0b2dyYW1EUyxcclxufTtcclxuXHJcbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XHJcbiAgaGVhZGVyOiBGYWNldEhlYWRlckVILFxyXG4gIHRleHQ6IEZhY2V0VGV4dEVILFxyXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RUgsXHJcbiAgc2VsZWN0OiBGYWNldFNlbGVjdEVILFxyXG4gIGxpbms6IEZhY2V0TGlua0VILFxyXG4gIG1hcDogRmFjZXRNYXBFSCxcclxuICAvLyBpZiB0aGUgZmFjZXQgdmFsdWUgaXMgYW4gYXJyYXkgeW91IE1VU1QgaW5jbHVkZSBpdCBpbiB0aGUgbmFtZVxyXG4gICdtYXAtbXVsdGlwbGUnOiBGYWNldE1hcEVILFxyXG4gICdsaW5rLW11bHRpcGxlJzogRmFjZXRMaW5rTXVsdGlwbGVFSCxcclxuICBoaXN0b2dyYW06IEZhY2V0SGlzdG9ncmFtRUgsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWFyY2hTZXJ2aWNlOiB0aGlzLnNlYXJjaFNlcnZpY2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubG9hZFdpZGdldHMoKTtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkV2lkZ2V0cygpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCk7XHJcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcclxuICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBoZWFkZXIuaWQsXHJcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUC5oZWFkZXIsXHJcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVAuaGVhZGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGlucHV0LnR5cGU7XHJcbiAgICAgICAgY29uc3QgeyBtdWx0aXBsZSB9ID0gaW5wdXQuc2NoZW1hO1xyXG4gICAgICAgIC8vIG11bHRpcGxlIGNvbnRyb2xcclxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlucHV0VHlwZSArPSAnLW11bHRpcGxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGlucHV0LmlkLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBpc011bHRpcGxlOiAhIW11bHRpcGxlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW2lucHV0VHlwZV0sXHJcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbaW5wdXRUeXBlXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=