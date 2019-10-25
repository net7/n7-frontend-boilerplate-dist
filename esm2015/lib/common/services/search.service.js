/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect, } from '../models';
import * as i0 from "@angular/core";
/** @type {?} */
const INPUTS_MAP = {
    'checkbox': FacetInputCheckbox,
    'text': FacetInputText,
    'link': FacetInputLink,
    'select': FacetInputSelect,
};
/**
 * @record
 */
export function ISearchConfig() { }
if (false) {
    /** @type {?} */
    ISearchConfig.prototype.facets;
    /** @type {?} */
    ISearchConfig.prototype.page;
    /** @type {?} */
    ISearchConfig.prototype.results;
    /** @type {?} */
    ISearchConfig.prototype.fields;
    /** @type {?} */
    ISearchConfig.prototype.baseUrl;
}
/**
 * @record
 */
export function IFacet() { }
if (false) {
    /** @type {?} */
    IFacet.prototype.id;
    /** @type {?} */
    IFacet.prototype.type;
    /** @type {?} */
    IFacet.prototype.operator;
    /** @type {?|undefined} */
    IFacet.prototype.data;
}
/**
 * @record
 */
export function IFilter() { }
if (false) {
    /** @type {?} */
    IFilter.prototype.facetId;
    /** @type {?} */
    IFilter.prototype.value;
    /** @type {?} */
    IFilter.prototype.searchIn;
    /** @type {?|undefined} */
    IFilter.prototype.isArray;
    /** @type {?|undefined} */
    IFilter.prototype.context;
    /** @type {?|undefined} */
    IFilter.prototype.target;
}
export class SearchModel {
    /**
     * @param {?} id
     * @param {?} config
     */
    constructor(id, config) {
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = (/**
         * @return {?}
         */
        () => this._id);
        this.getFilters = (/**
         * @return {?}
         */
        () => this._filters);
        this.getFacets = (/**
         * @return {?}
         */
        () => this._facets);
        this.getInputs = (/**
         * @return {?}
         */
        () => this._inputs);
        this.getConfig = (/**
         * @return {?}
         */
        () => this._config);
        this.getFields = (/**
         * @return {?}
         */
        () => this._config.fields);
        this.getResults$ = (/**
         * @return {?}
         */
        () => this._results$);
        this.setResults = (/**
         * @param {?} results
         * @return {?}
         */
        (results) => this._results$.next(results));
        this._id = id;
        this._config = config;
        this._setFilters();
        this._setFacets();
        this._setPage();
        this._setInputs();
        this._setInputsData();
    }
    /**
     * @param {?} facetId
     * @param {?} value
     * @param {?=} remove
     * @return {?}
     */
    updateFilter(facetId, value, remove) {
        /** @type {?} */
        const selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item !== value));
            }
            else if (Array.isArray(filter.value) && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? value : null;
            }
        }));
    }
    /**
     * @param {?} queryParams
     * @return {?}
     */
    updateFiltersFromQueryParams(queryParams) {
        Object.keys(queryParams).forEach((/**
         * @param {?} facetId
         * @return {?}
         */
        facetId => {
            /** @type {?} */
            const selectedFilters = this.getFiltersByFacetId(facetId);
            /** @type {?} */
            const value = queryParams[facetId];
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            filter => {
                filter.value = filter.isArray ? value.split(',') : value;
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputsFromFilters() {
        this._filters.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value }) => {
            this._inputs
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            input => input.getFacetId() === facetId))
                .forEach((/**
             * @param {?} input
             * @return {?}
             */
            input => {
                input.setActive(value);
            }));
        }));
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    updateFacet(facetId, data) {
        /** @type {?} */
        let selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === facetId));
        if (!selectedFacets.length) {
            throw Error(`Facet with id "${facetId}" does not exists`);
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.data = data));
    }
    /**
     * @return {?}
     */
    reset() {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => filter.value = null));
    }
    /**
     * @return {?}
     */
    getRequestParams() {
        return {
            facets: this._facets,
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            filter => filter.context !== 'internal'))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })))
        };
    }
    /**
     * @return {?}
     */
    getInternalFilters() {
        return this._filters
            .filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            return (filter.context === 'internal') && ((Array.isArray(filter.value) && filter.value.length) ||
                (!Array.isArray(filter.value) && filter.value));
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })));
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    filtersAsQueryParams(filters) {
        /** @type {?} */
        let queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => queryParams[filter.facetId] = Array.isArray(filter.value) ? filter.value.join(',') : filter.value));
        return queryParams;
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getFiltersByFacetId(facetId) {
        return this._filters.filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => filter.facetId === facetId));
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getInputByFacetId(facetId) {
        return this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId() === facetId))[0];
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    setInputData(facetId, data) {
        this._inputs
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId() === facetId))
            .forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => input.setData(data)));
    }
    /**
     * @param {?} target
     * @return {?}
     */
    filterTarget(target) {
        /** @type {?} */
        const inputs = this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getTarget() === target));
        /** @type {?} */
        const targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        const facet = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === target))[0];
        /** @type {?} */
        const facetData = facet.data;
        /** @type {?} */
        let searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => {
            /** @type {?} */
            const filter = this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            const searchIn = input.getSearchIn();
            /** @type {?} */
            const value = filter.value;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => this._filterData(searchIns, item)));
        // update
        targetInput.setData(facetData);
        targetInput.update();
    }
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    _filterData(searchIns, item) {
        searchIns.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([searchIn, value]) => {
            searchIn.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key, operator }) => {
                switch (operator) {
                    // '=' EQUALS
                    case '=':
                        if (Array.isArray(value)) {
                            item.hidden = !(!value.length || value.indexOf(item.metadata[key]) !== -1);
                        }
                        else {
                            item.hidden = !(value && value === item.metadata[key]);
                        }
                        break;
                    // '>' GREATER THAN
                    case '>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value > item.metadata[key]);
                        }
                        break;
                    // '<' LESS THAN
                    case '<':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value < item.metadata[key]);
                        }
                        break;
                    // '>=' GREATER OR EQUALS
                    case '>=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value >= item.metadata[key]);
                        }
                        break;
                    // '<=' LESS OR EQUALS
                    case '<=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value <= item.metadata[key]);
                        }
                        break;
                    // '<>' NOT EQUAL
                    case '<>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value !== item.metadata[key]);
                        }
                        break;
                    //  'LIKE'
                    case 'LIKE':
                        if (value &&
                            item.metadata[key] &&
                            typeof value === 'string' &&
                            typeof item.metadata[key] === 'string') {
                            /** @type {?} */
                            const haystack = item.metadata[key].toLowerCase();
                            /** @type {?} */
                            const needle = value.toLocaleLowerCase();
                            item.hidden = !(haystack.indexOf(needle) !== -1);
                        }
                        break;
                    default:
                        console.warn(`SearchIn: operator ${operator} not supported`);
                        break;
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setFilters() {
        this._config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            input => this._filters.push(Object.assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setFacets() {
        this._facets = this._config.facets;
    }
    /**
     * @private
     * @return {?}
     */
    _setPage() {
        this._page = this._config.page;
    }
    /**
     * @private
     * @return {?}
     */
    _setInputs() {
        this._config.fields.forEach((/**
         * @param {?} sectionConfig
         * @param {?} sectionIndex
         * @return {?}
         */
        (sectionConfig, sectionIndex) => {
            sectionConfig.inputs.forEach((/**
             * @param {?} inputConfig
             * @param {?} inputIndex
             * @return {?}
             */
            (inputConfig, inputIndex) => {
                /** @type {?} */
                const inputModel = INPUTS_MAP[inputConfig.type];
                if (!inputModel)
                    throw Error(`Input type ${inputConfig.type} not supported`);
                this._inputs.push(new inputModel(Object.assign({}, inputConfig, { inputIndex, sectionIndex })));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputsData() {
        this._facets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => this.setInputData(facet.id, facet.data)));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._id;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._filters;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._facets;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._inputs;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._page;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._config;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._results$;
    /** @type {?} */
    SearchModel.prototype.getId;
    /** @type {?} */
    SearchModel.prototype.getFilters;
    /** @type {?} */
    SearchModel.prototype.getFacets;
    /** @type {?} */
    SearchModel.prototype.getInputs;
    /** @type {?} */
    SearchModel.prototype.getConfig;
    /** @type {?} */
    SearchModel.prototype.getFields;
    /** @type {?} */
    SearchModel.prototype.getResults$;
    /** @type {?} */
    SearchModel.prototype.setResults;
}
export class SearchService {
    constructor() {
        this._models = {};
    }
    /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    add(id, config) {
        if (this._models[id])
            throw Error(`Search model "${id}" already exists!`);
        this._models[id] = new SearchModel(id, config);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    model(id) {
        return this._models[id] || null;
    }
}
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQzs7O01BTWIsVUFBVSxHQUFHO0lBQ2pCLFVBQVUsRUFBRSxrQkFBa0I7SUFDOUIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsUUFBUSxFQUFFLGdCQUFnQjtDQUMzQjs7OztBQUVELG1DQU1DOzs7SUFMQywrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7SUFDWixnQ0FBZ0I7Ozs7O0FBR2xCLDRCQUtDOzs7SUFKQyxvQkFBVzs7SUFDWCxzQkFBaUI7O0lBQ2pCLDBCQUF5Qjs7SUFDekIsc0JBQVc7Ozs7O0FBR2IsNkJBVUM7OztJQVRDLDBCQUFnQjs7SUFDaEIsd0JBQW9EOztJQUNwRCwyQkFHRzs7SUFDSCwwQkFBa0I7O0lBQ2xCLDBCQUFrQzs7SUFDbEMseUJBQWdCOztBQUdsQixNQUFNLE9BQU8sV0FBVzs7Ozs7SUFTdEIsWUFBWSxFQUFVLEVBQUUsTUFBcUI7UUFQckMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBaUIsRUFBRSxDQUFDO1FBRzNCLGNBQVMsR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWEzQyxVQUFLOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1FB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K0I7Ozs7O0lBQy9CLGdDQUFrRDs7SUFhbEQsNEJBQThCOztJQUM5QixpQ0FBd0M7O0lBQ3hDLGdDQUFzQzs7SUFDdEMsZ0NBQXNDOztJQUN0QyxnQ0FBc0M7O0lBQ3RDLGdDQUE2Qzs7SUFDN0Msa0NBQTBDOztJQUUxQyxpQ0FBOEQ7O0FBd05oRSxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUlVLFlBQU8sR0FBUSxFQUFFLENBQUM7S0FXM0I7Ozs7OztJQVRRLEdBQUcsQ0FBQyxFQUFVLEVBQUUsTUFBcUI7UUFDMUMsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFFQyxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBcbiAgRmFjZXRJbnB1dCwgXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0LFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgJ2NoZWNrYm94JzogRmFjZXRJbnB1dENoZWNrYm94LFxuICAndGV4dCc6IEZhY2V0SW5wdXRUZXh0LFxuICAnbGluayc6IEZhY2V0SW5wdXRMaW5rLFxuICAnc2VsZWN0JzogRmFjZXRJbnB1dFNlbGVjdCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENvbmZpZyB7XG4gIGZhY2V0czogYW55O1xuICBwYWdlOiBhbnk7XG4gIHJlc3VsdHM6IGFueTtcbiAgZmllbGRzOiBhbnk7XG4gIGJhc2VVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXQge1xuICBpZDogc3RyaW5nLFxuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nOyAgXG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XG4gIH0+OyAgXG4gIGlzQXJyYXk/OiBib29sZWFuO1xuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsdGVyczogSUZpbHRlcltdID0gW107XG4gIHByaXZhdGUgX2ZhY2V0czogSUZhY2V0W10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuICBwcml2YXRlIF9jb25maWc6IElTZWFyY2hDb25maWc7XG4gIHByaXZhdGUgX3Jlc3VsdHMkOiBTdWJqZWN0PGFueVtdPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKXtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gKHJlc3VsdHMpID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG4gIFxuICBwdWJsaWMgdXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKXtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSl7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykge1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGZhY2V0SWQgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpLFxuICAgICAgICB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2ZhY2V0SWRdO1xuXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIuaXNBcnJheSA/IHZhbHVlLnNwbGl0KCcsJykgOiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCl7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuX2lucHV0c1xuICAgICAgICAuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClcbiAgICAgICAgLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgIGlucHV0LnNldEFjdGl2ZSh2YWx1ZSk7IFxuICAgICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBsZXQgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZighc2VsZWN0ZWRGYWNldHMubGVuZ3RoKXtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkIFwiJHtmYWNldElkfVwiIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goZmFjZXQgPT4gZmFjZXQuZGF0YSA9IGRhdGEpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCl7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIudmFsdWUgPSBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZmFjZXRzLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKXtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiB7IFxuICAgICAgICAgIHJldHVybiAoZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCcpICYmIChcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aCkgfHwgXG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKXtcbiAgICBsZXQgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gcXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKSA6IGZpbHRlci52YWx1ZSk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSl7XG4gICAgdGhpcy5faW5wdXRzXG4gICAgICAuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClcbiAgICAgIC5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnNldERhdGEoZGF0YSkpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCh0YXJnZXQpe1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0VGFyZ2V0KCkgPT09IHRhcmdldCksXG4gICAgICB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KSxcbiAgICAgIGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gdGFyZ2V0KVswXSxcbiAgICAgIGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XG5cbiAgICBsZXQgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF0sXG4gICAgICAgIHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKSxcbiAgICAgICAgdmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pKVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pe1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgc3dpdGNoKG9wZXJhdG9yKXtcbiAgICAgICAgICAvLyAnPScgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISghdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YoaXRlbS5tZXRhZGF0YVtrZXldKSAhPT0gLTEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlID09PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJz4nIEdSRUFURVIgVEhBTlxuICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlID4gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPCcgTEVTUyBUSEFOXG4gICAgICAgICAgY2FzZSAnPCc6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlIDwgaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPj0nIEdSRUFURVIgT1IgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPj0nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA+PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc8PScgTEVTUyBPUiBFUVVBTFNcbiAgICAgICAgICBjYXNlICc8PSc6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlIDw9IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJzw+JyBOT1QgRVFVQUxcbiAgICAgICAgICBjYXNlICc8Pic6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlICE9PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAnTElLRSdcbiAgICAgICAgICBjYXNlICdMSUtFJzpcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICB2YWx1ZSAmJiBcbiAgICAgICAgICAgICAgaXRlbS5tZXRhZGF0YVtrZXldICYmIFxuICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIFxuICAgICAgICAgICAgICB0eXBlb2YgaXRlbS5tZXRhZGF0YVtrZXldID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgY29uc3QgaGF5c3RhY2sgPSBpdGVtLm1ldGFkYXRhW2tleV0udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTZWFyY2hJbjogb3BlcmF0b3IgJHtvcGVyYXRvcn0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCl7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHRoaXMuX2ZpbHRlcnMucHVzaCh7IFxuICAgICAgICAuLi5pbnB1dC5maWx0ZXJDb25maWcsXG4gICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXG4gICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCl7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKXtcbiAgICB0aGlzLl9wYWdlID0gdGhpcy5fY29uZmlnLnBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHMoKXtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKHNlY3Rpb25Db25maWcsIHNlY3Rpb25JbmRleCkgPT4ge1xuICAgICAgc2VjdGlvbkNvbmZpZy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb25maWcsIGlucHV0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XG4gICAgICAgIGlmKCFpbnB1dE1vZGVsKSB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcblxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChuZXcgaW5wdXRNb2RlbCh7IC4uLmlucHV0Q29uZmlnLCBpbnB1dEluZGV4LCBzZWN0aW9uSW5kZXggfSkpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0c0RhdGEoKXtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmYWNldCA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIF9tb2RlbHM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKXtcbiAgICBpZih0aGlzLl9tb2RlbHNbaWRdKSB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsIFwiJHtpZH1cIiBhbHJlYWR5IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59Il19