/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import { SearchService } from '../services/search.service';
/** @type {?} */
const HEADER_ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
const HEADER_ICON_CLOSE = 'n7-icon-angle-right';
export class FacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getRequestParams = (/**
         * @return {?}
         */
        () => this.searchModel.getRequestParams());
        this.filtersAsQueryParams = (/**
         * @param {?} filters
         * @return {?}
         */
        (filters) => this.searchModel.filtersAsQueryParams(filters));
        this.updateFiltersFromQueryParams = (/**
         * @param {?} queryParams
         * @return {?}
         */
        (queryParams) => this.searchModel.updateFiltersFromQueryParams(queryParams));
        this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        (facetId) => this.searchModel.getInputByFacetId(facetId));
        this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        (target) => this.searchModel.filterTarget(target));
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
        }
        /** @type {?} */
        const id = this.searchModel.getId();
        /** @type {?} */
        const fields = this.searchModel.getFields();
        /** @type {?} */
        let groups = [];
        fields.forEach((/**
         * @param {?} fieldConfig
         * @param {?} fieldIndex
         * @return {?}
         */
        (fieldConfig, fieldIndex) => {
            /** @type {?} */
            const groupId = `group-${id}-${fieldIndex}`;
            // header config
            /** @type {?} */
            const header = this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            /** @type {?} */
            let sections = [];
            this.searchModel.getInputs()
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            input => input.getSectionIndex() === fieldIndex))
                .map((/**
             * @param {?} input
             * @return {?}
             */
            input => {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput()
                };
            }))
                .forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, output, facetId }) => {
                sections.push({
                    classes: this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId
                    }
                });
            }));
            groups.push({
                header,
                facet: { sections },
                classes: `n7-facets-wrapper__${groupId}`,
                isOpen: true,
                _meta: {
                    groupId
                }
            });
        }));
        // query params control
        if (SearchService.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
            this.searchModel.updateInputsFromFilters();
            // reset queryparams
            SearchService.queryParams = null;
        }
        return {
            groups,
            classes: `n7-facets-wrapper__${this.searchModel.getId()}`
        };
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    toggleGroup({ eventPayload }) {
        this.output.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        }));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onFacetChange({ eventPayload }) {
        const { facetId, source, trigger } = eventPayload.inputPayload;
        /** @type {?} */
        const filter = this.searchModel.getFiltersByFacetId(facetId)[0] || {};
        /** @type {?} */
        const filterValue = filter['value'];
        /** @type {?} */
        let remove = false;
        /** @type {?} */
        let value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = '' + value;
        // remove control
        if (Array.isArray(filterValue)) {
            remove = filterValue.indexOf(value) !== -1;
        }
        else {
            remove = filterValue === value;
        }
        // input text control
        // TODO: gestire i casi enter / icon click nel input text
        if (source === 'input-text' && ['enter', 'icon'].indexOf(trigger) !== -1)
            return;
        this.searchModel.updateFilter(facetId, value, remove);
        this.searchModel.updateInputsFromFilters();
    }
    /**
     * @param {?} target
     * @return {?}
     */
    updateFilteredTarget(target) {
        /** @type {?} */
        const input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        group => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.sections))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        sections => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            section => {
                if (section._meta.facetId === target) {
                    /** @type {?} */
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputLinks() {
        /** @type {?} */
        const linksFacetIds = this.searchModel.getInputs()
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getType() === 'link'))
            .map((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId()));
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        group => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.sections))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        sections => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            section => {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    /** @type {?} */
                    const input = this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    /** @type {?} */
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputsFromFilters() {
        this.searchModel.updateInputsFromFilters();
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    _getSectionClasses(type) {
        /** @type {?} */
        const classesMap = {
            'text': 'text',
            'checkbox': 'checkboxes',
            'link': 'links',
            'select': 'select'
        };
        return `n7-facet__section-input-${classesMap[type]}`;
    }
    /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    _headerConfig(header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: `${groupId}-header`,
                groupId: groupId
            },
            _meta: {
                id: `${groupId}-header`
            }
        } : null;
    }
}
if (false) {
    /** @type {?} */
    FacetsWrapperDS.prototype.searchModel;
    /** @type {?} */
    FacetsWrapperDS.prototype.getRequestParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.filtersAsQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.updateFiltersFromQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.getInputByFacetId;
    /** @type {?} */
    FacetsWrapperDS.prototype.filterTarget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBZSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7TUFFbEUsZ0JBQWdCLEdBQUcsb0JBQW9COztNQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUEwSVMscUJBQWdCOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUM7UUFDN0QseUJBQW9COzs7O1FBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFDbkYsaUNBQTRCOzs7O1FBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLEVBQUM7UUFDM0csc0JBQWlCOzs7O1FBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFDN0UsaUJBQVk7Ozs7UUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUM7SUFpQzFFLENBQUM7Ozs7OztJQTVLVyxTQUFTLENBQUMsSUFBSTtRQUV0QixJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FB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QkFDTCxFQUFFLEVBQUUsR0FBRyxPQUFPLFNBQVM7YUFDeEI7U0FDRixDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDVixDQUFDO0NBRUY7OztJQTlLQyxzQ0FBZ0M7O0lBeUloQywyQ0FBb0U7O0lBQ3BFLCtDQUEwRjs7SUFDMUYsdURBQWtIOztJQUNsSCw0Q0FBb0Y7O0lBQ3BGLHVDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCwgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcblxuICAgIGlmKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKSxcbiAgICAgIGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XG4gICAgXG4gICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xuICAgICAgXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcblxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0U2VjdGlvbkluZGV4KCkgPT09IGZpZWxkSW5kZXgpXG4gICAgICAgIC5tYXAoaW5wdXQgPT4ge1xuICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXG4gICAgICAgICAgICB0eXBlOiBpbnB1dC5nZXRUeXBlKCksXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goeyBcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpLFxuICAgICAgICAgICAgaW5wdXRzOiBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBvdXRwdXQgOiBbb3V0cHV0XSxcbiAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgIGZhY2V0SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdyb3Vwcy5wdXNoKHsgXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLCBcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICBncm91cElkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpe1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuXG4gICAgICAvLyByZXNldCBxdWVyeXBhcmFtc1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICBncm91cHMsIFxuICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke3RoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKX1gIFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlR3JvdXAoeyBldmVudFBheWxvYWQgfSl7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgaWYoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gIWdyb3VwLmlzT3BlbjtcbiAgICAgICAgZ3JvdXAuaGVhZGVyLmljb25SaWdodCA9IGdyb3VwLmlzT3BlbiA/IEhFQURFUl9JQ09OX09QRU4gOiBIRUFERVJfSUNPTl9DTE9TRTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSl7XG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQsXG4gICAgICBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwge30sXG4gICAgICBmaWx0ZXJWYWx1ZSA9IGZpbHRlclsndmFsdWUnXTtcblxuICAgIGxldCByZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgIHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcblxuICAgIC8vIG5vcm1hbGl6ZVxuICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgIFxuICAgIC8vIHJlbW92ZSBjb250cm9sXG4gICAgaWYoQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpe1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXG4gICAgLy8gVE9ETzogZ2VzdGlyZSBpIGNhc2kgZW50ZXIgLyBpY29uIGNsaWNrIG5lbCBpbnB1dCB0ZXh0XG4gICAgaWYoc291cmNlID09PSAnaW5wdXQtdGV4dCcgJiYgWydlbnRlcicsICdpY29uJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmUpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpe1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcChncm91cCA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoZmFjZXQgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAubWFwKHNlY3Rpb25zID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICBpZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQgPT09IHRhcmdldCl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRMaW5rcygpe1xuICAgIGNvbnN0IGxpbmtzRmFjZXRJZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFR5cGUoKSA9PT0gJ2xpbmsnKVxuICAgICAgLm1hcChpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xuXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKGdyb3VwID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcChmYWNldCA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5tYXAoc2VjdGlvbnMgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIGlmKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCl7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSl7XG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcbiAgICAgICd0ZXh0JzogJ3RleHQnLFxuICAgICAgJ2NoZWNrYm94JzogJ2NoZWNrYm94ZXMnLFxuICAgICAgJ2xpbmsnOiAnbGlua3MnLFxuICAgICAgJ3NlbGVjdCc6ICdzZWxlY3QnXG4gICAgfTtcblxuICAgIHJldHVybiBgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtJHtjbGFzc2VzTWFwW3R5cGVdfWA7XG4gIH1cblxuICBwcml2YXRlIF9oZWFkZXJDb25maWcoaGVhZGVyLCBncm91cElkKXtcbiAgICByZXR1cm4gaGVhZGVyID8ge1xuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxuICAgICAgaWNvblJpZ2h0OiBIRUFERVJfSUNPTl9PUEVOLFxuICAgICAgY2xhc3NlczogaGVhZGVyLmNsYXNzZXMsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ2dyb3VwLWhlYWRlcicsXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgICBncm91cElkOiBncm91cElkXG4gICAgICB9LFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmBcbiAgICAgIH1cbiAgICB9OiBudWxsO1xuICB9XG5cbn0iXX0=