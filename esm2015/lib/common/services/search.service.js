/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* eslint-disable max-classes-per-file */
import { get as _get } from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect, } from '../models';
import helpers from '../helpers';
import * as i0 from "@angular/core";
/** @type {?} */
const INPUTS_MAP = {
    checkbox: FacetInputCheckbox,
    text: FacetInputText,
    link: FacetInputLink,
    select: FacetInputSelect,
};
/** @type {?} */
const FILTERS_MAP = {
    '=': '_filterDataEquals',
    '>': '_filterDataGreaterThan',
    '<': '_filterDataLessThan',
    '>=': '_filterDataGreaterOrEquals',
    '<=': '_filterDataLessOrEquals',
    '<>': '_filterDataNotEqual',
    LIKE: '_filterDataLike',
};
/**
 * @record
 */
export function SearchConfig() { }
if (false) {
    /** @type {?} */
    SearchConfig.prototype.totalCount;
    /** @type {?} */
    SearchConfig.prototype.facets;
    /** @type {?} */
    SearchConfig.prototype.page;
    /** @type {?} */
    SearchConfig.prototype.results;
    /** @type {?} */
    SearchConfig.prototype.fields;
}
/**
 * @record
 */
export function Facet() { }
if (false) {
    /** @type {?} */
    Facet.prototype.id;
    /** @type {?} */
    Facet.prototype.type;
    /** @type {?} */
    Facet.prototype.operator;
    /** @type {?|undefined} */
    Facet.prototype.hasStaticData;
    /** @type {?|undefined} */
    Facet.prototype.searchData;
    /** @type {?|undefined} */
    Facet.prototype.data;
}
/**
 * @record
 */
export function Filter() { }
if (false) {
    /** @type {?} */
    Filter.prototype.facetId;
    /** @type {?} */
    Filter.prototype.value;
    /** @type {?} */
    Filter.prototype.searchIn;
    /** @type {?|undefined} */
    Filter.prototype.isArray;
    /** @type {?|undefined} */
    Filter.prototype.context;
    /** @type {?|undefined} */
    Filter.prototype.target;
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
        // query params control
        /* eslint-disable @typescript-eslint/no-use-before-define */
        if (SearchService.queryParams) {
            this.updateFiltersFromQueryParams(SearchService.queryParams);
            SearchService.queryParams = null;
        }
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
        (filter) => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item !== value));
            }
            else if (Array.isArray(filter.value)
                && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? helpers.escapeDoubleQuotes(value) : null;
            }
        }));
    }
    /**
     * @return {?}
     */
    clear() {
        this.updateFiltersFromQueryParams({}, true);
        this._clearInputs();
    }
    /**
     * @param {?} queryParams
     * @param {?=} clearAll
     * @return {?}
     */
    updateFiltersFromQueryParams(queryParams, clearAll = false) {
        this._facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => {
            /** @type {?} */
            const selectedFilters = this.getFiltersByFacetId(id);
            /** @type {?} */
            const value = queryParams[id];
            /** @type {?} */
            const isInternal = this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal && !clearAll) {
                return;
            }
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value || null;
                }
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
        const selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        (facet) => facet.id === facetId));
        if (!selectedFacets.length) {
            throw Error(`Facet with id '${facetId}' does not exists`);
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        (facet) => { facet.data = data; }));
    }
    /**
     * @return {?}
     */
    reset() {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => { filter.value = null; }));
    }
    /**
     * @return {?}
     */
    getRequestParams() {
        return {
            facets: this._getRequestFacets(),
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => filter.context !== 'internal'))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ facetId, value, searchIn }) => ({ facetId, value, searchIn }))),
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
        (filter) => (filter.context === 'internal'
            && ((Array.isArray(filter.value) && filter.value.length)
                || (!Array.isArray(filter.value) && filter.value)))))
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
        const queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            queryParams[filter.facetId] = Array.isArray(filter.value)
                ? filter.value.join(',')
                : filter.value;
        }));
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
        (filter) => filter.facetId === facetId));
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
        (input) => input.getFacetId() === facetId))[0];
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
        (input) => input.getTarget() === target));
        /** @type {?} */
        const targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        const facet = this._facets.filter((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.id === target))[0];
        /** @type {?} */
        const facetData = facet.data;
        /** @type {?} */
        const searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            /** @type {?} */
            const filter = this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            const searchIn = input.getSearchIn();
            const { value } = filter;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this._filterData(searchIns, item)));
        // update
        targetInput.setData(facetData);
        if (targetInput.getConfig().emptyState) {
            /** @type {?} */
            const isEmpty = !facetData.filter((/**
             * @param {?} data
             * @return {?}
             */
            (data) => !data.hidden)).length;
            targetInput.setIsEmpty(isEmpty);
        }
        targetInput.update();
    }
    /**
     * @param {?} orderBy
     * @return {?}
     */
    setSearchConfigOrderBy(orderBy) {
        this._config.results.order.key = orderBy;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setSearchConfigDirection(direction) {
        this._config.results.order.direction = direction;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setSearchConfigType(type) {
        this._config.results.order.type = type;
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
     * @return {?}
     */
    _clearInputs() {
        this._inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
        }));
    }
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    _filterData(searchIns, item) {
        // reset
        item.hidden = false;
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
                if (item.hidden) {
                    return;
                }
                /** @type {?} */
                let refValue = _get(item, key, null);
                if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                    /** @type {?} */
                    const searchDataKey = key.replace('searchData.', '');
                    item.searchData.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ key: dataKey, value: dataValue }) => {
                        if (dataKey === searchDataKey) {
                            refValue = dataValue;
                        }
                    }));
                }
                if (refValue === null) {
                    item.hidden = true;
                }
                else if (FILTERS_MAP[operator]) {
                    item.hidden = this[FILTERS_MAP[operator]](value, refValue);
                }
                else {
                    console.warn(`SearchIn: operator ${operator} not supported`);
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataEquals(value, refValue) {
        if (Array.isArray(refValue)) {
            if (Array.isArray(value)) {
                /** @type {?} */
                let inArray = value.length === 0;
                refValue.forEach((/**
                 * @param {?} rv
                 * @return {?}
                 */
                (rv) => {
                    if (value.indexOf(rv) !== -1) {
                        inArray = true;
                    }
                }));
                return !(inArray);
            }
            return !(value && refValue.indexOf(value) !== -1);
        }
        if (Array.isArray(value)) {
            return !(!value.length || value.indexOf(refValue) !== -1);
        }
        return !(value && value === refValue);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataGreaterThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value > refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLessThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value < refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataGreaterOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value >= refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLessOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value <= refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataNotEqual(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value !== refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLike(value, refValue) {
        if (value
            && typeof value === 'string'
            && typeof refValue === 'string') {
            /** @type {?} */
            const haystack = refValue.toLowerCase();
            /** @type {?} */
            const needle = value.toLocaleLowerCase();
            return !(haystack.indexOf(needle) !== -1);
        }
        return false;
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
        (field) => {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => this._filters.push(Object.assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }))));
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
                const InputModel = INPUTS_MAP[inputConfig.type];
                if (!InputModel) {
                    throw Error(`Input type ${inputConfig.type} not supported`);
                }
                this._inputs.push(new InputModel(Object.assign({}, inputConfig, { inputIndex, sectionIndex })));
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
        (facet) => this.setInputData(facet.id, facet.data)));
    }
    /**
     * @private
     * @return {?}
     */
    _getRequestFacets() {
        /** @type {?} */
        const results = [];
        this._facets.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            /** @type {?} */
            const facetConfig = Object.assign({}, f);
            if (!f.hasStaticData) {
                delete facetConfig.data;
            }
            delete facetConfig.hasStaticData;
            // searchData control
            if (Array.isArray(facetConfig.data)) {
                facetConfig.data
                    .filter((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                (dataItem) => typeof dataItem.searchData !== 'undefined'))
                    .forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                (dataItem) => {
                    delete dataItem.searchData;
                }));
            }
            results.push(facetConfig);
        }));
        return results;
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
        if (this._models[id]) {
            throw Error(`Search model '${id}' already exists!`);
        }
        this._models[id] = new SearchModel(id, config);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        if (this._models[id]) {
            delete this._models[id];
        }
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
                providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQzs7O01BTTNCLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O01BRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtJQUM3QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLElBQUksRUFBRSxpQkFBaUI7Q0FDeEI7Ozs7QUFFRCxrQ0FNQzs7O0lBTEMsa0NBQW1COztJQUNuQiw4QkFBWTs7SUFDWiw0QkFBVTs7SUFDViwrQkFBYTs7SUFDYiw4QkFBWTs7Ozs7QUFHZCwyQkFPQzs7O0lBTkMsbUJBQVc7O0lBQ1gscUJBQWlCOztJQUNqQix5QkFBeUI7O0lBQ3pCLDhCQUF3Qjs7SUFDeEIsMkJBQXNCOztJQUN0QixxQkFBVzs7Ozs7QUFHYiw0QkFVQzs7O0lBVEMseUJB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O0FBZ1ZoRSxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQU1VLFlBQU8sR0FBUSxFQUFFLENBQUM7S0FtQjNCOzs7Ozs7SUFqQlEsR0FBRyxDQUFDLEVBQVUsRUFBRSxNQUFvQjtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsTUFBTSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDOztBQXBCTSx5QkFBVyxHQUFRLElBQUksQ0FBQzs7WUFKaEMsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLDBCQUErQjs7Ozs7SUFFL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBGYWNldElucHV0LFxyXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcclxuICBGYWNldElucHV0VGV4dCxcclxuICBGYWNldElucHV0TGluayxcclxuICBGYWNldElucHV0U2VsZWN0LFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JzID0gJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnPD4nIHwgJ0xJS0UnO1xyXG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XHJcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xyXG5cclxuY29uc3QgSU5QVVRTX01BUCA9IHtcclxuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxyXG4gIHRleHQ6IEZhY2V0SW5wdXRUZXh0LFxyXG4gIGxpbms6IEZhY2V0SW5wdXRMaW5rLFxyXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdCxcclxufTtcclxuXHJcbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xyXG4gICc9JzogJ19maWx0ZXJEYXRhRXF1YWxzJyxcclxuICAnPic6ICdfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuJyxcclxuICAnPCc6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcclxuICAnPj0nOiAnX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHMnLFxyXG4gICc8PSc6ICdfZmlsdGVyRGF0YUxlc3NPckVxdWFscycsXHJcbiAgJzw+JzogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxyXG4gIExJS0U6ICdfZmlsdGVyRGF0YUxpa2UnLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hDb25maWcge1xyXG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcclxuICBmYWNldHM6IGFueTtcclxuICBwYWdlOiBhbnk7XHJcbiAgcmVzdWx0czogYW55O1xyXG4gIGZpZWxkczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHR5cGU6IEZhY2V0VHlwZXM7XHJcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xyXG4gIGhhc1N0YXRpY0RhdGE/OiBib29sZWFuO1xyXG4gIHNlYXJjaERhdGE/OiBzdHJpbmdbXTtcclxuICBkYXRhPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XHJcbiAgZmFjZXRJZDogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgbnVsbDtcclxuICBzZWFyY2hJbjogQXJyYXk8e1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBvcGVyYXRvcj86IEZpbHRlck9wZXJhdG9ycztcclxuICB9PjtcclxuICBpc0FycmF5PzogYm9vbGVhbjtcclxuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XHJcbiAgdGFyZ2V0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2ZhY2V0czogRmFjZXRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9pbnB1dHM6IEZhY2V0SW5wdXRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9wYWdlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2NvbmZpZzogU2VhcmNoQ29uZmlnO1xyXG5cclxuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IFNlYXJjaENvbmZpZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XHJcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcclxuICAgIHRoaXMuX3NldFBhZ2UoKTtcclxuICAgIHRoaXMuX3NldElucHV0cygpO1xyXG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xyXG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xyXG5cclxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcclxuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcclxuXHJcbiAgcHVibGljIGdldEZpbHRlcnMgPSAoKSA9PiB0aGlzLl9maWx0ZXJzO1xyXG5cclxuICBwdWJsaWMgZ2V0RmFjZXRzID0gKCkgPT4gdGhpcy5fZmFjZXRzO1xyXG5cclxuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5fY29uZmlnO1xyXG5cclxuICBwdWJsaWMgZ2V0VG90YWxDb3VudCA9ICgpID0+IHRoaXMuX3RvdGFsQ291bnQ7XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xyXG5cclxuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcclxuXHJcbiAgcHVibGljIHNldFJlc3VsdHMgPSAocmVzdWx0cykgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xyXG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xyXG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcclxuICAgICAgICAmJiBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xXHJcbiAgICAgICkge1xyXG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gaGVscGVycy5lc2NhcGVEb3VibGVRdW90ZXModmFsdWUpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoe30sIHRydWUpO1xyXG4gICAgdGhpcy5fY2xlYXJJbnB1dHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBjbGVhckFsbCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdO1xyXG4gICAgICBjb25zdCBpc0ludGVybmFsID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChpZCkuZ2V0Q29udGV4dCgpID09PSAnaW50ZXJuYWwnO1xyXG5cclxuICAgICAgaWYgKGlzSW50ZXJuYWwgJiYgIWNsZWFyQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc0FycmF5KSB7XHJcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldEFjdGl2ZSh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XHJcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XHJcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KSB7XHJcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XHJcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCAnJHtmYWNldElkfScgZG9lcyBub3QgZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRGYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHsgZmFjZXQuZGF0YSA9IGRhdGE7IH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHsgZmlsdGVyLnZhbHVlID0gbnVsbDsgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxyXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxyXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcclxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xyXG4gICAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXHJcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcclxuICAgICAgLmZpbHRlcigoZmlsdGVyKSA9PiAoXHJcbiAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCdcclxuICAgICAgICAmJiAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKVxyXG4gICAgICAgICAgfHwgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKSlcclxuICAgICAgKSlcclxuICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKSB7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtczogYW55ID0ge307XHJcbiAgICBmaWx0ZXJzLmZvckVhY2goXHJcbiAgICAgIChmaWx0ZXIpID0+IHtcclxuICAgICAgICBxdWVyeVBhcmFtc1tmaWx0ZXIuZmFjZXRJZF0gPSBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcclxuICAgICAgICAgID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKVxyXG4gICAgICAgICAgOiBmaWx0ZXIudmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKChmaWx0ZXIpID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xyXG4gICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXREYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbHRlclRhcmdldCh0YXJnZXQpIHtcclxuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KTtcclxuICAgIGNvbnN0IHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xyXG4gICAgY29uc3QgZmFjZXQgPSB0aGlzLl9mYWNldHMuZmlsdGVyKChmKSA9PiBmLmlkID09PSB0YXJnZXQpWzBdO1xyXG4gICAgY29uc3QgZmFjZXREYXRhID0gZmFjZXQuZGF0YTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hJbnMgPSBbXTtcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXTtcclxuICAgICAgY29uc3Qgc2VhcmNoSW4gPSBpbnB1dC5nZXRTZWFyY2hJbigpO1xyXG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBmaWx0ZXI7XHJcblxyXG4gICAgICBzZWFyY2hJbnMucHVzaChbc2VhcmNoSW4sIHZhbHVlXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmaWx0ZXJcclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xyXG5cclxuICAgIC8vIHVwZGF0ZVxyXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xyXG5cclxuICAgIGlmICh0YXJnZXRJbnB1dC5nZXRDb25maWcoKS5lbXB0eVN0YXRlKSB7XHJcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSAhZmFjZXREYXRhLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuaGlkZGVuKS5sZW5ndGg7XHJcbiAgICAgIHRhcmdldElucHV0LnNldElzRW1wdHkoaXNFbXB0eSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmtleSA9IG9yZGVyQnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ1R5cGUodHlwZSkge1xyXG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIudHlwZSA9IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5wYWdlLm9mZnNldCA9IG9mZnNldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnTGltaXQobGltaXQpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5wYWdlLmxpbWl0ID0gbGltaXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jbGVhcklucHV0cygpIHtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pIHtcclxuICAgIC8vIHJlc2V0XHJcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgc2VhcmNoSW5zLmZvckVhY2goKFtzZWFyY2hJbiwgdmFsdWVdKSA9PiB7XHJcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3NlYXJjaERhdGEnKSAhPT0gLTEgJiYgQXJyYXkuaXNBcnJheShpdGVtLnNlYXJjaERhdGEpKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhS2V5ID0ga2V5LnJlcGxhY2UoJ3NlYXJjaERhdGEuJywgJycpO1xyXG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFLZXkgPT09IHNlYXJjaERhdGFLZXkpIHtcclxuICAgICAgICAgICAgICByZWZWYWx1ZSA9IGRhdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoRklMVEVSU19NQVBbb3BlcmF0b3JdKSB7XHJcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNlYXJjaEluOiBvcGVyYXRvciAke29wZXJhdG9yfSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsZXQgaW5BcnJheSA9IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKChydikgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YocnYpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiByZWZWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUuaW5kZXhPZihyZWZWYWx1ZSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gcmVmVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+IHJlZlZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPCByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc09yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlICE9PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGlrZSh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmIChcclxuICAgICAgdmFsdWVcclxuICAgICAgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgICAmJiB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgaGF5c3RhY2sgPSByZWZWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgcmV0dXJuICEoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xyXG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHRoaXMuX2ZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxyXG4gICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXHJcbiAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsLFxyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldEZhY2V0cygpIHtcclxuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xyXG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcclxuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldElucHV0cygpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XHJcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgSW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XHJcbiAgICAgICAgaWYgKCFJbnB1dE1vZGVsKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxyXG4gICAgICAgICAgbmV3IElucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJbnB1dHNEYXRhKCkge1xyXG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IEZhY2V0W10gPSBbXTtcclxuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0geyAuLi5mIH07XHJcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XHJcbiAgICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XHJcblxyXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcclxuICAgICAgICBmYWNldENvbmZpZy5kYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKChkYXRhSXRlbSkgPT4gdHlwZW9mIGRhdGFJdGVtLnNlYXJjaERhdGEgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhSXRlbS5zZWFyY2hEYXRhO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKGZhY2V0Q29uZmlnKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XHJcbiAgc3RhdGljIHF1ZXJ5UGFyYW1zOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9tb2RlbHM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQ29uZmlnKSB7XHJcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsICcke2lkfScgYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbW9kZWxzW2lkXSA9IG5ldyBTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tpZF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==