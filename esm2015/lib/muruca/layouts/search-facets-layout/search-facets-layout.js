/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchFacetsLayoutConfig as config } from './search-facets-layout.config';
import { FacetTextDS } from '../../data-sources/facets/facet-text.ds';
import { FacetCheckboxDS } from '../../data-sources/facets/facet-checkbox.ds';
import { FacetSelectDS } from '../../data-sources/facets/facet-select.ds';
import { FacetLinkDS } from '../../data-sources/facets/facet-link.ds';
import { FacetGenericEH } from '../../event-handlers/facets/facet-generic.eh';
/** @type {?} */
const DATASOURCE_MAP = {
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
};
export class MrSearchFacetsLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            data: this.data
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadWidgets();
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
    /**
     * @return {?}
     */
    loadWidgets() {
        this.widgets = [];
        this.data.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        (section) => {
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[input.type],
                    eventHandler: FacetGenericEH
                });
            }));
        }));
    }
}
MrSearchFacetsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-search-facets-layout',
                template: "<div *ngIf=\"lb.dataSource.data\" class=\"mr-search-facets {{ lb.dataSource.data.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.data.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"section.header\"\n        ></n7-facet-header>\n\n        <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n            <ng-container [ngSwitch]=\"input.type\">\n\n                <!-- INPUT TEXT -->\n                <n7-input-text \n                *ngSwitchCase=\"'text'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n\n                <!-- INPUT CHECKBOX -->\n                <n7-input-checkbox \n                *ngSwitchCase=\"'checkbox'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                \n                <!-- INPUT SELECT -->\n                <n7-input-select \n                *ngSwitchCase=\"'select'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                \n                <!-- INPUT LINK -->\n                <n7-input-link \n                *ngSwitchCase=\"'link'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n            \n            </ng-container>\n        </div>\n        \n    </div>\n</div>"
            }] }
];
/** @nocollapse */
MrSearchFacetsLayoutComponent.ctorParameters = () => [];
MrSearchFacetsLayoutComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixJQUFJLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRW5GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7O01BRXhFLGNBQWMsR0FBRztJQUNyQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsZUFBZTtJQUN6QixNQUFNLEVBQUUsYUFBYTtJQUNyQixJQUFJLEVBQUUsV0FBVztDQUNsQjtBQU1ELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxjQUFjO0lBRy9EO1FBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNaLFVBQVUsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDdEMsWUFBWSxFQUFFLGNBQWM7aUJBQzdCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGtuREFBMEM7YUFDM0M7Ozs7O21CQUVFLEtBQUs7Ozs7SUFBTiw2Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXRleHQuZHMnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5kcyc7XG5pbXBvcnQgeyBGYWNldFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZHMnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xuaW1wb3J0IHsgRmFjZXRHZW5lcmljRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtZ2VuZXJpYy5laCc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICB0ZXh0OiBGYWNldFRleHREUyxcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hEUyxcbiAgc2VsZWN0OiBGYWNldFNlbGVjdERTLFxuICBsaW5rOiBGYWNldExpbmtEUyxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRhdGE6IFNlYXJjaEZhY2V0c0NvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB0aGlzLmRhdGFcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgdGhpcy5kYXRhLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaW5wdXQuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbaW5wdXQudHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBGYWNldEdlbmVyaWNFSFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=