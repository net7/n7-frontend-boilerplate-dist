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
import { FacetLinkMultipleDS } from '../../data-sources/facets/facet-link-multiple.ds';
import { FacetLinkMultipleEH } from '../../event-handlers/facets/facet-link-multiple.eh';
/** @type {?} */
var DATASOURCE_MAP = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
    'link-multiple': FacetLinkMultipleDS,
};
/** @type {?} */
var EVENTHANDLER_MAP = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
    'link-multiple': FacetLinkMultipleEH,
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
                /** @type {?} */
                var inputType = input.type;
                var multiple = input.schema.multiple;
                // multiple control
                if (multiple) {
                    inputType += '-multiple';
                }
                _this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[inputType],
                    eventHandler: EVENTHANDLER_MAP[inputType]
                });
            }));
        }));
    };
    MrSearchFacetsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-facets-layout',
                    template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-search-facets {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"!lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-search-facets__wrapper\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixJQUFJLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0lBRW5GLGNBQWMsR0FBRztJQUNyQixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixlQUFlLEVBQUUsbUJBQW1CO0NBQ3JDOztJQUVLLGdCQUFnQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLGVBQWUsRUFBRSxtQkFBbUI7Q0FDckM7QUFFRDtJQUltRCx5REFBYztJQUcvRDtlQUNFLGtCQUFNLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsbURBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFBQSxpQkF5QkM7UUF4QlMsSUFBQSw4Q0FBTTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBa0I7Z0JBQWhCLGtCQUFNLEVBQUUsa0JBQU07WUFDdkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDYixVQUFVLEVBQUUsY0FBYyxDQUFDLE1BQU07b0JBQ2pDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO2lCQUN0QyxDQUFDLENBQUM7YUFDSjtZQUNELE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLOztvQkFDZixTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUk7Z0JBQ2xCLElBQUEsZ0NBQVE7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osU0FBUyxJQUFJLFdBQVcsQ0FBQztpQkFDMUI7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDWixVQUFVLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDckMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztpQkFDMUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsMnRFQUEwQztpQkFDM0M7Ozs7O2dDQUVFLEtBQUs7O0lBK0NSLG9DQUFDO0NBQUEsQUFwREQsQ0FJbUQsY0FBYyxHQWdEaEU7U0FoRFksNkJBQTZCOzs7SUFDeEMsc0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBGYWNldFRleHREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtdGV4dC5kcyc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmRzJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay5kcyc7XG5pbXBvcnQgeyBGYWNldEhlYWRlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZWgnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtdGV4dC5laCc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtY2hlY2tib3guZWgnO1xuaW1wb3J0IHsgRmFjZXRTZWxlY3RFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZWgnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbGluay5laCc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBGYWNldExpbmtNdWx0aXBsZURTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzJztcbmltcG9ydCB7IEZhY2V0TGlua011bHRpcGxlRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbGluay1tdWx0aXBsZS5laCc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxuICAnbGluay1tdWx0aXBsZSc6IEZhY2V0TGlua011bHRpcGxlRFMsXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRUgsXG4gIHRleHQ6IEZhY2V0VGV4dEVILFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveEVILFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RUgsXG4gIGxpbms6IEZhY2V0TGlua0VILFxuICAnbGluay1tdWx0aXBsZSc6IEZhY2V0TGlua011bHRpcGxlRUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtZmFjZXRzLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoU2VydmljZTogdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGhlYWRlci5pZCxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUC5oZWFkZXIsXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQLmhlYWRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXRUeXBlID0gaW5wdXQudHlwZTtcbiAgICAgICAgY29uc3QgeyBtdWx0aXBsZSB9ID0gaW5wdXQuc2NoZW1hO1xuICAgICAgICAvLyBtdWx0aXBsZSBjb250cm9sXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgIGlucHV0VHlwZSArPSAnLW11bHRpcGxlJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGlucHV0LmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW2lucHV0VHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW2lucHV0VHlwZV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19