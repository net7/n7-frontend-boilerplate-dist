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
    ISearchConfig.prototype.totalCount;
    /** @type {?} */
    ISearchConfig.prototype.facets;
    /** @type {?} */
    ISearchConfig.prototype.page;
    /** @type {?} */
    ISearchConfig.prototype.results;
    /** @type {?} */
    ISearchConfig.prototype.fields;
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
        this.getTotalCount = (/**
         * @return {?}
         */
        () => this._totalCount);
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
        this._setTotalCount();
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
            this.getInputByFacetId(facetId).setActive(value);
        }));
    }
    /**
     * @param {?} facets
     * @return {?}
     */
    updateFacets(facets) {
        facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, data }) => this.updateFacet(id, data)));
        this._setInputsData();
    }
    /**
     * @param {?} totalCount
     * @return {?}
     */
    updateTotalCount(totalCount) {
        this._totalCount = totalCount;
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
        this.getInputByFacetId(facetId).setData(data);
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
     * @param {?} orderBy
     * @return {?}
     */
    setSearchConfigOrderBy(orderBy) {
        this._config.results.order.type = orderBy;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setSearchConfigDirection(direction) {
        this._config.results.order.direction = direction;
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setPageConfigOffset(offset) {
        this._config.page.offset = offset;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setPageConfigLimit(limit) {
        this._config.page.limit = limit;
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
    _setTotalCount() {
        this._totalCount = this._config.totalCount;
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
    SearchModel.prototype._totalCount;
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
    SearchModel.prototype.getTotalCount;
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
SearchService.queryParams = null;
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchService.queryParams;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQzs7O01BTWIsVUFBVSxHQUFHO0lBQ2pCLFVBQVUsRUFBRSxrQkFBa0I7SUFDOUIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLGNBQWM7SUFDdEIsUUFBUSxFQUFFLGdCQUFnQjtDQUMzQjs7OztBQUVELG1DQU1DOzs7SUFMQyxtQ0FBbUI7O0lBQ25CLCtCQUFZOztJQUNaLDZCQUFVOztJQUNWLGdDQUFhOztJQUNiLCtCQUFZOzs7OztBQUdkLDRCQUtDOzs7SUFKQyxvQkFBVzs7SUFDWCxzQkFBaUI7O0lBQ2pCLDBCQUF5Qjs7SUFDekIsc0JBQVc7Ozs7O0FBR2IsNkJBVUM7OztJQVRDLDBCQUFnQjs7SUFDaEIsd0JBQW9EOztJQUNwRCwyQkFHRzs7SUFDSCwwQkFBa0I7O0lBQ2xCLDBCQUFrQzs7SUFDbEMseUJBQWdCOztBQUdsQixNQUFNLE9BQU8sV0FBVzs7Ozs7SUFVdEIsWUFBWSxFQUFVLEVBQUUsTUFBcUI7UUFSckMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBaUIsRUFBRSxDQUFDO1FBSTNCLGNBQVMsR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWMzQyxVQUFLOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1FB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QU0sS0FBSyxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7O0FBVk0seUJBQVcsR0FBUSxJQUFJLENBQUM7O1lBTGhDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFHQywwQkFBK0I7Ozs7O0lBRC9CLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFxuICBGYWNldElucHV0LCBcbiAgRmFjZXRJbnB1dENoZWNrYm94LFxuICBGYWNldElucHV0VGV4dCxcbiAgRmFjZXRJbnB1dExpbmssXG4gIEZhY2V0SW5wdXRTZWxlY3QsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICAnY2hlY2tib3gnOiBGYWNldElucHV0Q2hlY2tib3gsXG4gICd0ZXh0JzogRmFjZXRJbnB1dFRleHQsXG4gICdsaW5rJzogRmFjZXRJbnB1dExpbmssXG4gICdzZWxlY3QnOiBGYWNldElucHV0U2VsZWN0LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoQ29uZmlnIHtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldCB7XG4gIGlkOiBzdHJpbmcsXG4gIHR5cGU6IEZhY2V0VHlwZXM7XG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyIHtcbiAgZmFjZXRJZDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XG4gIHNlYXJjaEluOiBBcnJheTx7XG4gICAga2V5OiBzdHJpbmc7ICBcbiAgICBvcGVyYXRvcj86IEZpbHRlck9wZXJhdG9ycztcbiAgfT47ICBcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9maWx0ZXJzOiBJRmlsdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfZmFjZXRzOiBJRmFjZXRbXSA9IFtdO1xuICBwcml2YXRlIF9pbnB1dHM6IEZhY2V0SW5wdXRbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZzogSVNlYXJjaENvbmZpZztcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpe1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fc2V0RmlsdGVycygpO1xuICAgIHRoaXMuX3NldEZhY2V0cygpO1xuICAgIHRoaXMuX3NldFBhZ2UoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHMoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xuICB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xuICBwdWJsaWMgZ2V0RmllbGRzID0gKCkgPT4gdGhpcy5fY29uZmlnLmZpZWxkcztcbiAgcHVibGljIGdldFJlc3VsdHMkID0gKCkgPT4gdGhpcy5fcmVzdWx0cyQ7XG5cbiAgcHVibGljIHNldFJlc3VsdHMgPSAocmVzdWx0cykgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcbiAgXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiByZW1vdmUpe1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xKXtcbiAgICAgICAgZmlsdGVyLnZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gIXJlbW92ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSB7XG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goZmFjZXRJZCA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCksXG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNbZmFjZXRJZF07XG5cbiAgICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci5pc0FycmF5ID8gdmFsdWUuc3BsaXQoJywnKSA6IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKXtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0cyhmYWNldHMpIHtcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBsZXQgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZighc2VsZWN0ZWRGYWNldHMubGVuZ3RoKXtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkIFwiJHtmYWNldElkfVwiIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goZmFjZXQgPT4gZmFjZXQuZGF0YSA9IGRhdGEpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCl7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIudmFsdWUgPSBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZmFjZXRzLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKXtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiB7IFxuICAgICAgICAgIHJldHVybiAoZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCcpICYmIChcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aCkgfHwgXG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKXtcbiAgICBsZXQgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gcXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKSA6IGZpbHRlci52YWx1ZSk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSl7XG4gICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCh0YXJnZXQpe1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0VGFyZ2V0KCkgPT09IHRhcmdldCksXG4gICAgICB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KSxcbiAgICAgIGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gdGFyZ2V0KVswXSxcbiAgICAgIGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XG5cbiAgICBsZXQgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF0sXG4gICAgICAgIHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKSxcbiAgICAgICAgdmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pKVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSl7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIudHlwZSA9IG9yZGVyQnk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbil7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdPZmZzZXQob2Zmc2V0KXtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KXtcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pe1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgc3dpdGNoKG9wZXJhdG9yKXtcbiAgICAgICAgICAvLyAnPScgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISghdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YoaXRlbS5tZXRhZGF0YVtrZXldKSAhPT0gLTEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlID09PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJz4nIEdSRUFURVIgVEhBTlxuICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlID4gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPCcgTEVTUyBUSEFOXG4gICAgICAgICAgY2FzZSAnPCc6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlIDwgaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPj0nIEdSRUFURVIgT1IgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPj0nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA+PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc8PScgTEVTUyBPUiBFUVVBTFNcbiAgICAgICAgICBjYXNlICc8PSc6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlIDw9IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJzw+JyBOT1QgRVFVQUxcbiAgICAgICAgICBjYXNlICc8Pic6IFxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKHZhbHVlICYmIHZhbHVlICE9PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAnTElLRSdcbiAgICAgICAgICBjYXNlICdMSUtFJzpcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICB2YWx1ZSAmJiBcbiAgICAgICAgICAgICAgaXRlbS5tZXRhZGF0YVtrZXldICYmIFxuICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIFxuICAgICAgICAgICAgICB0eXBlb2YgaXRlbS5tZXRhZGF0YVtrZXldID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgY29uc3QgaGF5c3RhY2sgPSBpdGVtLm1ldGFkYXRhW2tleV0udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTZWFyY2hJbjogb3BlcmF0b3IgJHtvcGVyYXRvcn0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCl7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHRoaXMuX2ZpbHRlcnMucHVzaCh7IFxuICAgICAgICAuLi5pbnB1dC5maWx0ZXJDb25maWcsXG4gICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXG4gICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCl7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKXtcbiAgICB0aGlzLl9wYWdlID0gdGhpcy5fY29uZmlnLnBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUb3RhbENvdW50KCl7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRoaXMuX2NvbmZpZy50b3RhbENvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCl7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZighaW5wdXRNb2RlbCkgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG5cbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2gobmV3IGlucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHNEYXRhKCl7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZmFjZXQgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcbiAgc3RhdGljIHF1ZXJ5UGFyYW1zOiBhbnkgPSBudWxsO1xuXG4gIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKXtcbiAgICBpZih0aGlzLl9tb2RlbHNbaWRdKSB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsIFwiJHtpZH1cIiBhbHJlYWR5IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59Il19