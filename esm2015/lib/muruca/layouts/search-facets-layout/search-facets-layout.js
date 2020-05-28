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
/** @type {?} */
const DATASOURCE_MAP = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
};
/** @type {?} */
const EVENTHANDLER_MAP = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
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
                this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP[input.type],
                    eventHandler: EVENTHANDLER_MAP[input.type]
                });
            }));
        }));
    }
}
MrSearchFacetsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-search-facets-layout',
                template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-search-facets {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"!lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-search-facets__wrapper\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7TUFFMUQsY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0NBQ2xCOztNQUVLLGdCQUFnQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLElBQUksRUFBRSxXQUFXO0NBQ2xCO0FBTUQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGNBQWM7SUFHL0Q7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsV0FBVztjQUNILEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQzdDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQ2IsVUFBVSxFQUFFLGNBQWMsQ0FBQyxNQUFNO29CQUNqQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsTUFBTTtpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1osVUFBVSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDM0MsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsbThEQUEwQzthQUMzQzs7Ozs7NEJBRUUsS0FBSzs7OztJQUFOLHNEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgRmFjZXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXRleHQuZHMnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5kcyc7XG5pbXBvcnQgeyBGYWNldFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1zZWxlY3QuZHMnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xuaW1wb3J0IHsgRmFjZXRIZWFkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGVhZGVyLmRzJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGVhZGVyLmVoJztcbmltcG9ydCB7IEZhY2V0VGV4dEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgnO1xuaW1wb3J0IHsgRmFjZXRDaGVja2JveEVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWNoZWNrYm94LmVoJztcbmltcG9ydCB7IEZhY2V0U2VsZWN0RUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtc2VsZWN0LmVoJztcbmltcG9ydCB7IEZhY2V0TGlua0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcbiAgaGVhZGVyOiBGYWNldEhlYWRlckRTLFxuICB0ZXh0OiBGYWNldFRleHREUyxcbiAgY2hlY2tib3g6IEZhY2V0Q2hlY2tib3hEUyxcbiAgc2VsZWN0OiBGYWNldFNlbGVjdERTLFxuICBsaW5rOiBGYWNldExpbmtEUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIGhlYWRlcjogRmFjZXRIZWFkZXJFSCxcbiAgdGV4dDogRmFjZXRUZXh0RUgsXG4gIGNoZWNrYm94OiBGYWNldENoZWNrYm94RUgsXG4gIHNlbGVjdDogRmFjZXRTZWxlY3RFSCxcbiAgbGluazogRmFjZXRMaW5rRUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtZmFjZXRzLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtZmFjZXRzLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaEZhY2V0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoU2VydmljZTogdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGhlYWRlci5pZCxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUC5oZWFkZXIsXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQLmhlYWRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGlucHV0LmlkLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW2lucHV0LnR5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFtpbnB1dC50eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=