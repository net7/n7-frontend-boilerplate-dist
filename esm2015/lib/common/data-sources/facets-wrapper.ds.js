/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets-wrapper.ds.ts
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
        (queryParams) => {
            this.searchModel.updateFiltersFromQueryParams(queryParams);
        });
        this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        (facetId) => this.searchModel.getInputByFacetId(facetId));
        this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        (target) => {
            this.searchModel.filterTarget(target);
        });
        this.updateInputsFromFilters = (/**
         * @return {?}
         */
        () => {
            this.searchModel.updateInputsFromFilters();
        });
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
        const groups = [];
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
            const sections = [];
            this.searchModel.getInputs()
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            (input) => input.getSectionIndex() === fieldIndex))
                .map((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput(),
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
                        facetId,
                    },
                });
            }));
            groups.push({
                header,
                facet: { sections },
                classes: `n7-facets-wrapper__${groupId}`,
                isOpen: true,
                _meta: {
                    groupId,
                },
            });
        }));
        return {
            groups,
            classes: `n7-facets-wrapper__${this.searchModel.getId()}`,
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
        (group) => {
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
        const filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
        /** @type {?} */
        const filterValue = filter.value;
        /** @type {?} */
        let remove = false;
        /** @type {?} */
        let value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = `${value}`;
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
        (group) => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        (facet) => facet.sections))
            .forEach((/**
         * @param {?} sections
         * @return {?}
         */
        (sections) => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            (section) => {
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
        (input) => input.getType() === 'link'))
            .map((/**
         * @param {?} input
         * @return {?}
         */
        (input) => input.getFacetId()));
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        (group) => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        (facet) => facet.sections))
            .forEach((/**
         * @param {?} sections
         * @return {?}
         */
        (sections) => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            (section) => {
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
     * @private
     * @param {?} type
     * @return {?}
     */
    _getSectionClasses(type) {
        /** @type {?} */
        const classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
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
                groupId,
            },
            _meta: {
                id: `${groupId}-header`,
            },
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
    /** @type {?} */
    FacetsWrapperDS.prototype.updateInputsFromFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFHekMsZ0JBQWdCLEdBQUcsb0JBQW9COztNQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFHL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFnSVMscUJBQWdCOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUM7UUFFN0QseUJBQW9COzs7O1FBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFFbkYsaUNBQTRCOzs7O1FBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQTtRQUVNLHNCQUFpQjs7OztRQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBRTdFLGlCQUFZOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUE7UUFFTSw0QkFBdUI7OztRQUFHLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFBO0lBNEJILENBQUM7Ozs7OztJQXpLVyxTQUFTLENB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Rjs7SUFFMUYsdURBRUM7O0lBRUQsNENBQW9GOztJQUVwRix1Q0FFQzs7SUFFRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gJy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG5cblxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbCA9IGRhdGEuc2VhcmNoTW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCk7XG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWVsZHMoKTtcblxuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xuXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcblxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFNlY3Rpb25JbmRleCgpID09PSBmaWVsZEluZGV4KVxuICAgICAgICAubWFwKChpbnB1dCkgPT4ge1xuICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXG4gICAgICAgICAgICB0eXBlOiBpbnB1dC5nZXRUeXBlKCksXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh7IHR5cGUsIG91dHB1dCwgZmFjZXRJZCB9KSA9PiB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBjbGFzc2VzOiB0aGlzLl9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSxcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXG4gICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBmYWNldDogeyBzZWN0aW9ucyB9LFxuICAgICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7Z3JvdXBJZH1gLFxuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgZ3JvdXBJZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwcyxcbiAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHt0aGlzLnNlYXJjaE1vZGVsLmdldElkKCl9YCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pIHtcbiAgICB0aGlzLm91dHB1dC5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGlmIChncm91cC5fbWV0YS5ncm91cElkID09PSBldmVudFBheWxvYWQuZ3JvdXBJZCkge1xuICAgICAgICBncm91cC5pc09wZW4gPSAhZ3JvdXAuaXNPcGVuO1xuICAgICAgICBncm91cC5oZWFkZXIuaWNvblJpZ2h0ID0gZ3JvdXAuaXNPcGVuID8gSEVBREVSX0lDT05fT1BFTiA6IEhFQURFUl9JQ09OX0NMT1NFO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSkge1xuICAgIGNvbnN0IHsgZmFjZXRJZCwgc291cmNlLCB0cmlnZ2VyIH0gPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkO1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKVswXSB8fCB7IHZhbHVlOiBudWxsIH07XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcblxuICAgIC8vIG5vcm1hbGl6ZVxuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcblxuICAgIC8vIHJlbW92ZSBjb250cm9sXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBpbnB1dCB0ZXh0IGNvbnRyb2xcbiAgICAvLyBUT0RPOiBnZXN0aXJlIGkgY2FzaSBlbnRlciAvIGljb24gY2xpY2sgbmVsIGlucHV0IHRleHRcbiAgICBpZiAoc291cmNlID09PSAnaW5wdXQtdGV4dCcgJiYgWydlbnRlcicsICdpY29uJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmUpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHNlY3Rpb24uX21ldGEuZmFjZXRJZCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFR5cGUoKSA9PT0gJ2xpbmsnKVxuICAgICAgLm1hcCgoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSk7XG5cbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHNlY3Rpb24uX21ldGEuZmFjZXRJZCk7XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zID0gKCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpIHtcbiAgICBjb25zdCBjbGFzc2VzTWFwID0ge1xuICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgY2hlY2tib3g6ICdjaGVja2JveGVzJyxcbiAgICAgIGxpbms6ICdsaW5rcycsXG4gICAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIH07XG5cbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCkge1xuICAgIHJldHVybiBoZWFkZXIgPyB7XG4gICAgICB0ZXh0OiBoZWFkZXIubGFiZWwsXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXG4gICAgICBjbGFzc2VzOiBoZWFkZXIuY2xhc3NlcyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICAgIGdyb3VwSWQsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICB9LFxuICAgIH0gOiBudWxsO1xuICB9XG59XG4iXX0=