/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const DATASOURCE_MAP = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
    'link-multiple': FacetLinkMultipleDS,
};
/** @type {?} */
const EVENTHANDLER_MAP = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
    'link-multiple': FacetLinkMultipleEH,
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
            searchService: this.searchService
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
        const { facets } = this.searchService.getConfig();
        this.widgets = [];
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            if (header) {
                this.widgets.push({
                    id: header.id,
                    dataSource: DATASOURCE_MAP.header,
                    eventHandler: EVENTHANDLER_MAP.header
                });
            }
            inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                /** @type {?} */
                let inputType = input.type;
                const { multiple } = input.schema;
                // multiple control
                if (multiple) {
                    inputType += '-multiple';
                }
                this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[inputType],
                    eventHandler: EVENTHANDLER_MAP[inputType]
                });
            }));
        }));
    }
}
MrSearchFacetsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-search-facets-layout',
                template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-search-facets {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"!lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-search-facets__wrapper\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>"
            }] }
];
/** @nocollapse */
MrSearchFacetsLayoutComponent.ctorParameters = () => [];
MrSearchFacetsLayoutComponent.propDecorators = {
    searchService: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MrSearchFacetsLayoutComponent.prototype.searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7TUFFbkYsY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLGVBQWUsRUFBRSxtQkFBbUI7Q0FDckM7O01BRUssZ0JBQWdCLEdBQUc7SUFDdkIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLGVBQWU7SUFDekIsTUFBTSxFQUFFLGFBQWE7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsZUFBZSxFQUFFLG1CQUFtQjtDQUNyQztBQU1ELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxjQUFjO0lBRy9EO1FBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFdBQVc7Y0FDSCxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDaEIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLFVBQVUsRUFBRSxjQUFjLENBQUMsTUFBTTtvQkFDakMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLE1BQU07aUJBQ3RDLENBQUMsQ0FBQzthQUNKO1lBQ0QsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztvQkFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJO3NCQUNwQixFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNO2dCQUNqQyxtQkFBbUI7Z0JBQ25CLElBQUksUUFBUSxFQUFFO29CQUNaLFNBQVMsSUFBSSxXQUFXLENBQUM7aUJBQzFCO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1osVUFBVSxFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7aUJBQzFDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDJ0RUFBMEM7YUFDM0M7Ozs7OzRCQUVFLEtBQUs7Ozs7SUFBTixzREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IEZhY2V0VGV4dERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzJztcbmltcG9ydCB7IEZhY2V0Q2hlY2tib3hEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMnO1xuaW1wb3J0IHsgRmFjZXRTZWxlY3REUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtc2VsZWN0LmRzJztcbmltcG9ydCB7IEZhY2V0TGlua0RTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhlYWRlci5kcyc7XG5pbXBvcnQgeyBGYWNldEhlYWRlckVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWhlYWRlci5laCc7XG5pbXBvcnQgeyBGYWNldFRleHRFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC10ZXh0LmVoJztcbmltcG9ydCB7IEZhY2V0Q2hlY2tib3hFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5laCc7XG5pbXBvcnQgeyBGYWNldFNlbGVjdEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5laCc7XG5pbXBvcnQgeyBGYWNldExpbmtFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1saW5rLmVoJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IEZhY2V0TGlua011bHRpcGxlRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZHMnO1xuaW1wb3J0IHsgRmFjZXRMaW5rTXVsdGlwbGVFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmVoJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIGhlYWRlcjogRmFjZXRIZWFkZXJEUyxcbiAgdGV4dDogRmFjZXRUZXh0RFMsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RFMsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3REUyxcbiAgbGluazogRmFjZXRMaW5rRFMsXG4gICdsaW5rLW11bHRpcGxlJzogRmFjZXRMaW5rTXVsdGlwbGVEUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIGhlYWRlcjogRmFjZXRIZWFkZXJFSCxcbiAgdGV4dDogRmFjZXRUZXh0RUgsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RUgsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3RFSCxcbiAgbGluazogRmFjZXRMaW5rRUgsXG4gICdsaW5rLW11bHRpcGxlJzogRmFjZXRMaW5rTXVsdGlwbGVFSCxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mYWNldHMtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoRmFjZXRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2hTZXJ2aWNlOiB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaGVhZGVyLmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQLmhlYWRlcixcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVAuaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBpbnB1dC50eXBlO1xuICAgICAgICBjb25zdCB7IG11bHRpcGxlIH0gPSBpbnB1dC5zY2hlbWE7XG4gICAgICAgIC8vIG11bHRpcGxlIGNvbnRyb2xcbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgaW5wdXRUeXBlICs9ICctbXVsdGlwbGUnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZDogaW5wdXQuaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbaW5wdXRUeXBlXSxcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbaW5wdXRUeXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=