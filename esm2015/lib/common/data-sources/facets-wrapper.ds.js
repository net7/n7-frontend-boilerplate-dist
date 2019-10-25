/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
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
        /** @type {?} */
        let groups = [];
        if (!this.searchModel)
            this.searchModel = data.searchModel;
        /** @type {?} */
        const id = this.searchModel.getId();
        /** @type {?} */
        const fields = this.searchModel.getFields();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUd6QyxnQkFBZ0IsR0FBRyxvQkFBb0I7O01BQ3ZDLGlCQUFpQixHQUFHLHFCQUFxQjtBQUUvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQTJHUyxxQkFBZ0I7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQztRQUM3RCx5QkFBb0I7Ozs7UUFBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBQztRQUNuRixpQ0FBNEI7Ozs7UUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsRUFBQztRQUMzRyxzQkFBaUI7Ozs7UUFBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBQztRQUM3RSxpQkFBWTs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQztJQWlDMUUsQ0FBQzs7Ozs7O0lBN0lXLFNBQVMsQ0FBQyxJQUFJOztZQUNsQixNQUFNLEdBQUcsRUFBRTtRQUVmLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Y0FFcEQsRUFBRSxHQUFH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dCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IEhFQURFUl9JQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbmNvbnN0IEhFQURFUl9JQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgaWYoIXRoaXMuc2VhcmNoTW9kZWwpIHRoaXMuc2VhcmNoTW9kZWwgPSBkYXRhLnNlYXJjaE1vZGVsO1xuXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCksXG4gICAgICBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xuICAgICAgXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcblxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0U2VjdGlvbkluZGV4KCkgPT09IGZpZWxkSW5kZXgpXG4gICAgICAgIC5tYXAoaW5wdXQgPT4ge1xuICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXG4gICAgICAgICAgICB0eXBlOiBpbnB1dC5nZXRUeXBlKCksXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goeyBcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpLFxuICAgICAgICAgICAgaW5wdXRzOiBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBvdXRwdXQgOiBbb3V0cHV0XSxcbiAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgIGZhY2V0SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdyb3Vwcy5wdXNoKHsgXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLCBcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICBncm91cElkXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7IFxuICAgICAgZ3JvdXBzLCBcbiAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHt0aGlzLnNlYXJjaE1vZGVsLmdldElkKCl9YCBcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pe1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGlmKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9ICFncm91cC5pc09wZW47XG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pe1xuICAgIGNvbnN0IHsgZmFjZXRJZCwgc291cmNlLCB0cmlnZ2VyIH0gPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLFxuICAgICAgZmlsdGVyID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpWzBdIHx8IHt9LFxuICAgICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJbJ3ZhbHVlJ107XG5cbiAgICBsZXQgcmVtb3ZlOiBib29sZWFuID0gZmFsc2UsXG4gICAgICB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XG5cbiAgICAvLyBub3JtYWxpemVcbiAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICBcbiAgICAvLyByZW1vdmUgY29udHJvbFxuICAgIGlmKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKXtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlucHV0IHRleHQgY29udHJvbFxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxuICAgIGlmKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KXtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoZ3JvdXAgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKGZhY2V0ID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLm1hcChzZWN0aW9ucyA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgaWYoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpe1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCl7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSl7XG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcbiAgICAgICd0ZXh0JzogJ3RleHQnLFxuICAgICAgJ2NoZWNrYm94JzogJ2NoZWNrYm94ZXMnLFxuICAgICAgJ2xpbmsnOiAnbGlua3MnLFxuICAgICAgJ3NlbGVjdCc6ICdzZWxlY3QnXG4gICAgfTtcblxuICAgIHJldHVybiBgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtJHtjbGFzc2VzTWFwW3R5cGVdfWA7XG4gIH1cblxuICBwcml2YXRlIF9oZWFkZXJDb25maWcoaGVhZGVyLCBncm91cElkKXtcbiAgICByZXR1cm4gaGVhZGVyID8ge1xuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxuICAgICAgaWNvblJpZ2h0OiBIRUFERVJfSUNPTl9PUEVOLFxuICAgICAgY2xhc3NlczogaGVhZGVyLmNsYXNzZXMsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ2dyb3VwLWhlYWRlcicsXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgICBncm91cElkOiBncm91cElkXG4gICAgICB9LFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmBcbiAgICAgIH1cbiAgICB9OiBudWxsO1xuICB9XG5cbn0iXX0=