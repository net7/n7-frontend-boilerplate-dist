/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets-wrapper.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O01BRWxFLGdCQUFnQixHQUFHLG9CQUFvQjs7TUFDdkMsaUJBQWlCLEdBQUcscUJBQXFCO0FBRS9DLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBMElTLHFCQUFnQjs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDO1FBQzdELHlCQUFvQjs7OztRQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ25GLGlDQUE0Qjs7OztRQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxFQUFDO1FBQzNHLHNCQUFpQjs7OztRQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQzdFLGlCQUFZOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDO0lBaUMxRSxDQUFDOzs7Ozs7SUE1S1csU0FBUyxDQUFDLElBQUk7UUFFdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENB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Z0JBQ0wsRUFBRSxFQUFFLEdBQUcsT0FBTyxTQUFTO2FBQ3hCO1NBQ0YsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1YsQ0FBQztDQUVGOzs7SUE5S0Msc0NBQWdDOztJQXlJaEMsMkNBQW9FOztJQUNwRSwrQ0FBMEY7O0lBQzFGLHVEQUFrSDs7SUFDbEgsNENBQW9GOztJQUNwRix1Q0FBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwsIFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IEhFQURFUl9JQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbmNvbnN0IEhFQURFUl9JQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG5cbiAgICBpZighdGhpcy5zZWFyY2hNb2RlbCkge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbCA9IGRhdGEuc2VhcmNoTW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCksXG4gICAgICBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xuICAgIFxuICAgIGxldCBncm91cHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZENvbmZpZywgZmllbGRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGBncm91cC0ke2lkfS0ke2ZpZWxkSW5kZXh9YDtcbiAgICAgIFxuICAgICAgLy8gaGVhZGVyIGNvbmZpZ1xuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5faGVhZGVyQ29uZmlnKGZpZWxkQ29uZmlnLmhlYWRlciwgZ3JvdXBJZCk7XG5cbiAgICAgIC8vIGlucHV0cyBjb25maWdcbiAgICAgIGxldCBzZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgICAuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFNlY3Rpb25JbmRleCgpID09PSBmaWVsZEluZGV4KVxuICAgICAgICAubWFwKGlucHV0ID0+IHtcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZXRJZDogaW5wdXQuZ2V0RmFjZXRJZCgpLFxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgb3V0cHV0OiBpbnB1dC5nZXRPdXRwdXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHsgdHlwZSwgb3V0cHV0LCBmYWNldElkIH0pID0+IHtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHsgXG4gICAgICAgICAgICBjbGFzc2VzOiB0aGlzLl9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSxcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXG4gICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICBmYWNldElkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBncm91cHMucHVzaCh7IFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGZhY2V0OiB7IHNlY3Rpb25zIH0sXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXG4gICAgICAgIGlzT3BlbjogdHJ1ZSwgXG4gICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgZ3JvdXBJZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gcXVlcnkgcGFyYW1zIGNvbnRyb2xcbiAgICBpZihTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKXtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcblxuICAgICAgLy8gcmVzZXQgcXVlcnlwYXJhbXNcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgZ3JvdXBzLCBcbiAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHt0aGlzLnNlYXJjaE1vZGVsLmdldElkKCl9YCBcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pe1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGlmKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9ICFncm91cC5pc09wZW47XG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pe1xuICAgIGNvbnN0IHsgZmFjZXRJZCwgc291cmNlLCB0cmlnZ2VyIH0gPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLFxuICAgICAgZmlsdGVyID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpWzBdIHx8IHt9LFxuICAgICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJbJ3ZhbHVlJ107XG5cbiAgICBsZXQgcmVtb3ZlOiBib29sZWFuID0gZmFsc2UsXG4gICAgICB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XG5cbiAgICAvLyBub3JtYWxpemVcbiAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICBcbiAgICAvLyByZW1vdmUgY29udHJvbFxuICAgIGlmKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKXtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlucHV0IHRleHQgY29udHJvbFxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxuICAgIGlmKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KXtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoZ3JvdXAgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKGZhY2V0ID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLm1hcChzZWN0aW9ucyA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgaWYoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0TGlua3MoKXtcbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRUeXBlKCkgPT09ICdsaW5rJylcbiAgICAgIC5tYXAoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpKTtcblxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcChncm91cCA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoZmFjZXQgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAubWFwKHNlY3Rpb25zID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICBpZihsaW5rc0ZhY2V0SWRzLmluZGV4T2Yoc2VjdGlvbi5fbWV0YS5mYWNldElkKSAhPT0gLTEpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHNlY3Rpb24uX21ldGEuZmFjZXRJZCk7XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zID0gKCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyA9IChmaWx0ZXJzKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpO1xuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyA9IChxdWVyeVBhcmFtcykgPT4gdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQgPSAodGFyZ2V0KSA9PiB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpe1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpe1xuICAgIGNvbnN0IGNsYXNzZXNNYXAgPSB7XG4gICAgICAndGV4dCc6ICd0ZXh0JyxcbiAgICAgICdjaGVja2JveCc6ICdjaGVja2JveGVzJyxcbiAgICAgICdsaW5rJzogJ2xpbmtzJyxcbiAgICAgICdzZWxlY3QnOiAnc2VsZWN0J1xuICAgIH07XG5cbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCl7XG4gICAgcmV0dXJuIGhlYWRlciA/IHtcbiAgICAgIHRleHQ6IGhlYWRlci5sYWJlbCxcbiAgICAgIGljb25SaWdodDogSEVBREVSX0lDT05fT1BFTixcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICdncm91cC1oZWFkZXInLFxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgICAgZ3JvdXBJZDogZ3JvdXBJZFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7XG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgXG4gICAgICB9XG4gICAgfTogbnVsbDtcbiAgfVxuXG59Il19