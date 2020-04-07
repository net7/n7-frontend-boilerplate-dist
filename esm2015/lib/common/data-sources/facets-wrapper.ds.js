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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFHekMsZ0JBQWdCLEdBQUcsb0JBQW9COztNQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFnSVMscUJBQWdCOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUM7UUFFN0QseUJBQW9COzs7O1FBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFFbkYsaUNBQTRCOzs7O1FBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQTtRQUVNLHNCQUFpQjs7OztRQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBRTdFLGlCQUFZOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUE7UUFFTSw0QkFBdUI7OztRQUFHLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFBO0lBNEJILENBQUM7Ozs7OztJQXpLVyxTQUFTLENB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Rjs7SUFFMUYsdURBRUM7O0lBRUQsNENBQW9GOztJQUVwRix1Q0FFQzs7SUFFRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gJy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoTW9kZWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwgPSBkYXRhLnNlYXJjaE1vZGVsO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XG5cbiAgICBjb25zdCBncm91cHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZENvbmZpZywgZmllbGRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGBncm91cC0ke2lkfS0ke2ZpZWxkSW5kZXh9YDtcblxuICAgICAgLy8gaGVhZGVyIGNvbmZpZ1xuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5faGVhZGVyQ29uZmlnKGZpZWxkQ29uZmlnLmhlYWRlciwgZ3JvdXBJZCk7XG5cbiAgICAgIC8vIGlucHV0cyBjb25maWdcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRTZWN0aW9uSW5kZXgoKSA9PT0gZmllbGRJbmRleClcbiAgICAgICAgLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZXRJZDogaW5wdXQuZ2V0RmFjZXRJZCgpLFxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgb3V0cHV0OiBpbnB1dC5nZXRPdXRwdXQoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXG4gICAgICAgICAgICBpbnB1dHM6IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IG91dHB1dCA6IFtvdXRwdXRdLFxuICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBncm91cHMucHVzaCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgIGdyb3VwSWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cHMsXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWAsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVHcm91cCh7IGV2ZW50UGF5bG9hZCB9KSB7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBpZiAoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gIWdyb3VwLmlzT3BlbjtcbiAgICAgICAgZ3JvdXAuaGVhZGVyLmljb25SaWdodCA9IGdyb3VwLmlzT3BlbiA/IEhFQURFUl9JQ09OX09QRU4gOiBIRUFERVJfSUNPTl9DTE9TRTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pIHtcbiAgICBjb25zdCB7IGZhY2V0SWQsIHNvdXJjZSwgdHJpZ2dlciB9ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZDtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwgeyB2YWx1ZTogbnVsbCB9O1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuICAgIGxldCB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XG5cbiAgICAvLyBub3JtYWxpemVcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cbiAgICAvLyByZW1vdmUgY29udHJvbFxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXG4gICAgLy8gVE9ETzogZ2VzdGlyZSBpIGNhc2kgZW50ZXIgLyBpY29uIGNsaWNrIG5lbCBpbnB1dCB0ZXh0XG4gICAgaWYgKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHRhcmdldCk7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKChmYWNldCkgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChzZWN0aW9uLl9tZXRhLmZhY2V0SWQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0TGlua3MoKSB7XG4gICAgY29uc3QgbGlua3NGYWNldElkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUeXBlKCkgPT09ICdsaW5rJylcbiAgICAgIC5tYXAoKGlucHV0KSA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xuXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKChmYWNldCkgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChsaW5rc0ZhY2V0SWRzLmluZGV4T2Yoc2VjdGlvbi5fbWV0YS5mYWNldElkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChzZWN0aW9uLl9tZXRhLmZhY2V0SWQpO1xuICAgICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcyA9ICgpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyA9IChmaWx0ZXJzKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZCA9IChmYWNldElkKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpO1xuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycyA9ICgpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSB7XG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcbiAgICAgIHRleHQ6ICd0ZXh0JyxcbiAgICAgIGNoZWNrYm94OiAnY2hlY2tib3hlcycsXG4gICAgICBsaW5rOiAnbGlua3MnLFxuICAgICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC0ke2NsYXNzZXNNYXBbdHlwZV19YDtcbiAgfVxuXG4gIHByaXZhdGUgX2hlYWRlckNvbmZpZyhoZWFkZXIsIGdyb3VwSWQpIHtcbiAgICByZXR1cm4gaGVhZGVyID8ge1xuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxuICAgICAgaWNvblJpZ2h0OiBIRUFERVJfSUNPTl9PUEVOLFxuICAgICAgY2xhc3NlczogaGVhZGVyLmNsYXNzZXMsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ2dyb3VwLWhlYWRlcicsXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgICBncm91cElkLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7XG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgfSxcbiAgICB9IDogbnVsbDtcbiAgfVxufVxuIl19