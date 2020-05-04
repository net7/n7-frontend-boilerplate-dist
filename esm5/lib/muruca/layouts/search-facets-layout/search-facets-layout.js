/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztJQUV4RSxjQUFjLEdBQUc7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLGVBQWU7SUFDekIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7Q0FDbEI7QUFFRDtJQUltRCx5REFBYztJQUcvRDtlQUNFLGtCQUFNLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsbURBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNaLFVBQVUsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDdEMsWUFBWSxFQUFFLGNBQWM7aUJBQzdCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGtuREFBMEM7aUJBQzNDOzs7Ozt1QkFFRSxLQUFLOztJQWlDUixvQ0FBQztDQUFBLEFBdENELENBSW1ELGNBQWMsR0FrQ2hFO1NBbENZLDZCQUE2Qjs7O0lBQ3hDLDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5pbXBvcnQgeyBGYWNldFRleHREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtdGV4dC5kcyc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmRzJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay5kcyc7XG5pbXBvcnQgeyBGYWNldEdlbmVyaWNFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1nZW5lcmljLmVoJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hGYWNldHNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHRoaXMuZGF0YVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICB0aGlzLmRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkOiBpbnB1dC5pZCxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFtpbnB1dC50eXBlXSxcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEZhY2V0R2VuZXJpY0VIXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==