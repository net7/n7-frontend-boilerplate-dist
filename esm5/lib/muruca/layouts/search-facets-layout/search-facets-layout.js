/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var DATASOURCE_MAP = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
};
/** @type {?} */
var EVENTHANDLER_MAP = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
};
var MrSearchFacetsLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchFacetsLayoutComponent, _super);
    function MrSearchFacetsLayoutComponent() {
        return _super.call(this, config) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrSearchFacetsLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            searchService: this.searchService
        };
    };
    /**
     * @return {?}
     */
    MrSearchFacetsLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadWidgets();
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrSearchFacetsLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    /**
     * @return {?}
     */
    MrSearchFacetsLayoutComponent.prototype.loadWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var facets = this.searchService.getConfig().facets;
        this.widgets = [];
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var header = _a.header, inputs = _a.inputs;
            if (header) {
                _this.widgets.push({
                    id: header.id,
                    dataSource: DATASOURCE_MAP.header,
                    eventHandler: EVENTHANDLER_MAP.header
                });
            }
            inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                _this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[input.type],
                    eventHandler: EVENTHANDLER_MAP[input.type]
                });
            }));
        }));
    };
    MrSearchFacetsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-facets-layout',
                    template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-search-facets {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"!lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-search-facets__wrapper\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MrSearchFacetsLayoutComponent.ctorParameters = function () { return []; };
    MrSearchFacetsLayoutComponent.propDecorators = {
        searchService: [{ type: Input }]
    };
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
if (false) {
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixJQUFJLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBRTFELGNBQWMsR0FBRztJQUNyQixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztDQUNsQjs7SUFFSyxnQkFBZ0IsR0FBRztJQUN2QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztDQUNsQjtBQUVEO0lBSW1ELHlEQUFjO0lBRy9EO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFUyxtREFBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUFBLGlCQW1CQztRQWxCUyxJQUFBLDhDQUFNO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFrQjtnQkFBaEIsa0JBQU0sRUFBRSxrQkFBTTtZQUN2QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLFVBQVUsRUFBRSxjQUFjLENBQUMsTUFBTTtvQkFDakMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLE1BQU07aUJBQ3RDLENBQUMsQ0FBQzthQUNKO1lBQ0QsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEtBQUs7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1osVUFBVSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDM0MsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsbThEQUEwQztpQkFDM0M7Ozs7O2dDQUVFLEtBQUs7O0lBeUNSLG9DQUFDO0NBQUEsQUE5Q0QsQ0FJbUQsY0FBYyxHQTBDaEU7U0ExQ1ksNkJBQTZCOzs7SUFDeEMsc0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBGYWNldFRleHREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtdGV4dC5kcyc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmRzJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay5kcyc7XG5pbXBvcnQgeyBGYWNldEhlYWRlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZWgnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtdGV4dC5laCc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtY2hlY2tib3guZWgnO1xuaW1wb3J0IHsgRmFjZXRTZWxlY3RFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZWgnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbGluay5laCc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxufTtcblxuY29uc3QgRVZFTlRIQU5ETEVSX01BUCA9IHtcbiAgaGVhZGVyOiBGYWNldEhlYWRlckVILFxuICB0ZXh0OiBGYWNldFRleHRFSCxcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hFSCxcbiAgc2VsZWN0OiBGYWNldFNlbGVjdEVILFxuICBsaW5rOiBGYWNldExpbmtFSCxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2hTZXJ2aWNlOiB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaGVhZGVyLmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQLmhlYWRlcixcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVAuaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaW5wdXQuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbaW5wdXQudHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW2lucHV0LnR5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==