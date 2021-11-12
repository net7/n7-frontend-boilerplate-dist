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
            template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\r\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \r\n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\r\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\r\n        <n7-facet-header\r\n        *ngIf=\"section.header\"\r\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\r\n        [emit]=\"lb.widgets[section.header.id].emit\"\r\n        ></n7-facet-header>\r\n\r\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\r\n            <div *ngFor=\"let input of section.inputs\" \r\n            [attr.id]=\"'facet-container-' + input.id\"\r\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n    \r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text \r\n                    *ngSwitchCase=\"'text'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\r\n    \r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox \r\n                    *ngSwitchCase=\"'checkbox'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\r\n                    \r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select \r\n                    *ngSwitchCase=\"'select'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\r\n                    \r\n                    <!-- INPUT LINK -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'link'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n\r\n                    <!-- INPUT LINKMULTI -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'linkMulti'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n                    \r\n                    <!-- INPUT MAP -->\r\n                    <n7-map \r\n                    *ngSwitchCase=\"'map'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-map>\r\n                \r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [])
    ], MrSearchFacetsLayoutComponent);
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0Qs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biAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgU2VhcmNoRmFjZXRzTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuY29uZmlnJztcclxuaW1wb3J0IHsgRmFjZXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXRleHQuZHMnO1xyXG5pbXBvcnQgeyBGYWNldENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmRzJztcclxuaW1wb3J0IHsgRmFjZXRTZWxlY3REUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtc2VsZWN0LmRzJztcclxuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xyXG5pbXBvcnQgeyBGYWNldEhlYWRlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZHMnO1xyXG5pbXBvcnQgeyBGYWNldEhlYWRlckVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWhlYWRlci5laCc7XHJcbmltcG9ydCB7IEZhY2V0VGV4dEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgnO1xyXG5pbXBvcnQgeyBGYWNldENoZWNrYm94RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtY2hlY2tib3guZWgnO1xyXG5pbXBvcnQgeyBGYWNldFNlbGVjdEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5laCc7XHJcbmltcG9ydCB7IEZhY2V0TGlua0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgnO1xyXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IEZhY2V0TGlua011bHRpcGxlRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZHMnO1xyXG5pbXBvcnQgeyBGYWNldExpbmtNdWx0aXBsZUVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZWgnO1xyXG5pbXBvcnQgeyBGYWNldE1hcERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1tYXAuZHMnO1xyXG5pbXBvcnQgeyBGYWNldE1hcEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LW1hcC5laCc7XHJcblxyXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcclxuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXHJcbiAgdGV4dDogRmFjZXRUZXh0RFMsXHJcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hEUyxcclxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXHJcbiAgbGluazogRmFjZXRMaW5rRFMsXHJcbiAgbWFwOiBGYWNldE1hcERTLFxyXG4gIC8vIGlmIHRoZSBmYWNldCB2YWx1ZSBpcyBhbiBhcnJheSB5b3UgTVVTVCBpbmNsdWRlIGl0IGluIHRoZSBuYW1lXHJcbiAgJ21hcC1tdWx0aXBsZSc6IEZhY2V0TWFwRFMsXHJcbiAgJ2xpbmstbXVsdGlwbGUnOiBGYWNldExpbmtNdWx0aXBsZURTLFxyXG59O1xyXG5cclxuY29uc3QgRVZFTlRIQU5ETEVSX01BUCA9IHtcclxuICBoZWFkZXI6IEZhY2V0SGVhZGVyRUgsXHJcbiAgdGV4dDogRmFjZXRUZXh0RUgsXHJcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hFSCxcclxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RUgsXHJcbiAgbGluazogRmFjZXRMaW5rRUgsXHJcbiAgbWFwOiBGYWNldE1hcEVILFxyXG4gIC8vIGlmIHRoZSBmYWNldCB2YWx1ZSBpcyBhbiBhcnJheSB5b3UgTVVTVCBpbmNsdWRlIGl0IGluIHRoZSBuYW1lXHJcbiAgJ21hcC1tdWx0aXBsZSc6IEZhY2V0TWFwRUgsXHJcbiAgJ2xpbmstbXVsdGlwbGUnOiBGYWNldExpbmtNdWx0aXBsZUVILFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtZmFjZXRzLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VhcmNoU2VydmljZTogdGhpcy5zZWFyY2hTZXJ2aWNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XHJcbiAgICB0aGlzLm9uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFdpZGdldHMoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xyXG4gICAgdGhpcy53aWRnZXRzID0gW107XHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XHJcbiAgICAgICAgICBpZDogaGVhZGVyLmlkLFxyXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVAuaGVhZGVyLFxyXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQLmhlYWRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBpbnB1dC50eXBlO1xyXG4gICAgICAgIGNvbnN0IHsgbXVsdGlwbGUgfSA9IGlucHV0LnNjaGVtYTtcclxuICAgICAgICAvLyBtdWx0aXBsZSBjb250cm9sXHJcbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpbnB1dFR5cGUgKz0gJy1tdWx0aXBsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpbnB1dC5pZCxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaXNNdWx0aXBsZTogISFtdWx0aXBsZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFtpbnB1dFR5cGVdLFxyXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW2lucHV0VHlwZV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19