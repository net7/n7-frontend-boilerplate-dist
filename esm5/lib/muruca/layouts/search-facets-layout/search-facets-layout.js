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
import { FacetGenericEH } from '../../event-handlers/facets/facet-generic.eh';
/** @type {?} */
var DATASOURCE_MAP = {
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
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
            data: this.data
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
        this.widgets = [];
        this.data.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                _this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[input.type],
                    eventHandler: FacetGenericEH
                });
            }));
        }));
    };
    MrSearchFacetsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-facets-layout',
                    template: "<div *ngIf=\"lb.dataSource.data\" class=\"mr-search-facets {{ lb.dataSource.data.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.data.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"section.header\"\n        ></n7-facet-header>\n\n        <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n            <ng-container [ngSwitch]=\"input.type\">\n\n                <!-- INPUT TEXT -->\n                <n7-input-text \n                *ngSwitchCase=\"'text'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n\n                <!-- INPUT CHECKBOX -->\n                <n7-input-checkbox \n                *ngSwitchCase=\"'checkbox'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                \n                <!-- INPUT SELECT -->\n                <n7-input-select \n                *ngSwitchCase=\"'select'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                \n                <!-- INPUT LINK -->\n                <n7-input-link \n                *ngSwitchCase=\"'link'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n            \n            </ng-container>\n        </div>\n        \n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MrSearchFacetsLayoutComponent.ctorParameters = function () { return []; };
    MrSearchFacetsLayoutComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
if (false) {
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixJQUFJLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7O0lBRXhFLGNBQWMsR0FBRztJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztDQUNsQjtBQUVEO0lBSW1ELHlEQUFjO0lBRy9EO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFUyxtREFBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEtBQUs7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1osVUFBVSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsY0FBYztpQkFDN0IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsa25EQUEwQztpQkFDM0M7Ozs7O3VCQUVFLEtBQUs7O0lBaUNSLG9DQUFDO0NBQUEsQUF0Q0QsQ0FJbUQsY0FBYyxHQWtDaEU7U0FsQ1ksNkJBQTZCOzs7SUFDeEMsNkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcbmltcG9ydCB7IEZhY2V0VGV4dERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzJztcbmltcG9ydCB7IEZhY2V0Q2hlY2tib3hEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMnO1xuaW1wb3J0IHsgRmFjZXRTZWxlY3REUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtc2VsZWN0LmRzJztcbmltcG9ydCB7IEZhY2V0TGlua0RTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzJztcbmltcG9ydCB7IEZhY2V0R2VuZXJpY0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWdlbmVyaWMuZWgnO1xuXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcbiAgdGV4dDogRmFjZXRUZXh0RFMsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RFMsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3REUyxcbiAgbGluazogRmFjZXRMaW5rRFMsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtZmFjZXRzLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkYXRhOiBTZWFyY2hGYWNldHNDb25maWc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5kYXRhXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIHRoaXMuZGF0YS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGlucHV0LmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW2lucHV0LnR5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRmFjZXRHZW5lcmljRUhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19