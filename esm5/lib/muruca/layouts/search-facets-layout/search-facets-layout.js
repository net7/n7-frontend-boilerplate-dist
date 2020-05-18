/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
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
            data: this.data,
            guestEmit$: this.guestEmit$,
            hostEmit$: this.hostEmit$
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
                    template: "<div *ngIf=\"lb.dataSource.data\" class=\"mr-search-facets {{ lb.dataSource.data.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.data.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"!lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-search-facets__wrapper\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MrSearchFacetsLayoutComponent.ctorParameters = function () { return []; };
    MrSearchFacetsLayoutComponent.propDecorators = {
        data: [{ type: Input }],
        guestEmit$: [{ type: Input }],
        hostEmit$: [{ type: Input }]
    };
    return MrSearchFacetsLayoutComponent;
}(AbstractLayout));
export { MrSearchFacetsLayoutComponent };
if (false) {
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.data;
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.guestEmit$;
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.hostEmit$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztJQUVsRSxjQUFjLEdBQUc7SUFDckIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLGVBQWU7SUFDekIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7Q0FDbEI7O0lBRUssZ0JBQWdCLEdBQUc7SUFDdkIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLGVBQWU7SUFDekIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7Q0FDbEI7QUFFRDtJQUltRCx5REFBYztJQU8vRDtlQUNFLGtCQUFNLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsbURBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGdEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQWtCO2dCQUFoQixrQkFBTSxFQUFFLGtCQUFNO1lBQzFDLElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQ2IsVUFBVSxFQUFFLGNBQWMsQ0FBQyxNQUFNO29CQUNqQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsTUFBTTtpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBSztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDWixVQUFVLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUMzQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyw2N0RBQTBDO2lCQUMzQzs7Ozs7dUJBRUUsS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7O0lBMENSLG9DQUFDO0NBQUEsQUFuREQsQ0FJbUQsY0FBYyxHQStDaEU7U0EvQ1ksNkJBQTZCOzs7SUFDeEMsNkNBQWtDOztJQUVsQyxtREFBa0M7O0lBRWxDLGtEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5pbXBvcnQgeyBGYWNldFRleHREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtdGV4dC5kcyc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmRzJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcyc7XG5pbXBvcnQgeyBGYWNldExpbmtEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbGluay5kcyc7XG5pbXBvcnQgeyBGYWNldEhlYWRlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZWgnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtdGV4dC5laCc7XG5pbXBvcnQgeyBGYWNldENoZWNrYm94RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtY2hlY2tib3guZWgnO1xuaW1wb3J0IHsgRmFjZXRTZWxlY3RFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZWgnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbGluay5laCc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBoZWFkZXI6IEZhY2V0SGVhZGVyRFMsXG4gIHRleHQ6IEZhY2V0VGV4dERTLFxuICBjaGVja2JveDogRmFjZXRDaGVja2JveERTLFxuICBzZWxlY3Q6IEZhY2V0U2VsZWN0RFMsXG4gIGxpbms6IEZhY2V0TGlua0RTLFxufTtcblxuY29uc3QgRVZFTlRIQU5ETEVSX01BUCA9IHtcbiAgaGVhZGVyOiBGYWNldEhlYWRlckVILFxuICB0ZXh0OiBGYWNldFRleHRFSCxcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hFSCxcbiAgc2VsZWN0OiBGYWNldFNlbGVjdEVILFxuICBsaW5rOiBGYWNldExpbmtFSCxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRhdGE6IFNlYXJjaEZhY2V0c0NvbmZpZztcblxuICBASW5wdXQoKSBndWVzdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgQElucHV0KCkgaG9zdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgZ3Vlc3RFbWl0JDogdGhpcy5ndWVzdEVtaXQkLFxuICAgICAgaG9zdEVtaXQkOiB0aGlzLmhvc3RFbWl0JFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICB0aGlzLmRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaGVhZGVyLmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQLmhlYWRlcixcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVAuaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaW5wdXQuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbaW5wdXQudHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW2lucHV0LnR5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==