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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQzs7O01BTTNCLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O01BRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtJQUM3QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLElBQUksRUFBRSxpQkFBaUI7Q0FDeEI7Ozs7QUFFRCxrQ0FNQzs7O0lBTEMsa0NBQW1COztJQUNuQiw4QkFBWTs7SUFDWiw0QkFBVTs7SUFDViwrQkFBYTs7SUFDYiw4QkFBWTs7Ozs7QUFHZCwyQkFPQzs7O0lBTkMsbUJBQVc7O0lBQ1gscUJBQWlCOztJQUNqQix5QkFBeUI7O0lBQ3pCLDhCQUF3Qjs7SUFDeEIsMkJBQXNCOztJQUN0QixxQkFBVzs7Ozs7QUFHYiw0QkFVQzs7O0lBVEMseUJB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O0FBZ1ZoRSxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQU1VLFlBQU8sR0FBUSxFQUFFLENBQUM7S0FtQjNCOzs7Ozs7SUFqQlEsR0FBRyxDQUFDLEVBQVUsRUFBRSxNQUFvQjtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsTUFBTSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDOztBQXBCTSx5QkFBVyxHQUFRLElBQUksQ0FBQzs7WUFKaEMsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLDBCQUErQjs7Ozs7SUFFL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEZhY2V0SW5wdXQsXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0LFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcbiAgbGluazogRmFjZXRJbnB1dExpbmssXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdCxcbn07XG5cbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xuICAnPSc6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JzogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxuICAnPCc6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcbiAgJz49JzogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JzogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcbiAgJzw+JzogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxuICBMSUtFOiAnX2ZpbHRlckRhdGFMaWtlJyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQ29uZmlnIHtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogRmFjZXRUeXBlcztcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcbiAgc2VhcmNoRGF0YT86IHN0cmluZ1tdO1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nO1xuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjtcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZmFjZXRzOiBGYWNldFtdID0gW107XG5cbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcblxuICBwcml2YXRlIF9wYWdlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIF9jb25maWc6IFNlYXJjaENvbmZpZztcblxuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQ29uZmlnKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XG4gICAgdGhpcy5fc2V0UGFnZSgpO1xuICAgIHRoaXMuX3NldElucHV0cygpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgICB0aGlzLl9zZXRUb3RhbENvdW50KCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcblxuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG5cbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcblxuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG5cbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xuXG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xuXG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gKHJlc3VsdHMpID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcbiAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcbiAgICAgICAgJiYgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyBoZWxwZXJzLmVzY2FwZURvdWJsZVF1b3Rlcyh2YWx1ZSkgOiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyh7fSwgdHJ1ZSk7XG4gICAgdGhpcy5fY2xlYXJJbnB1dHMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBjbGVhckFsbCA9IGZhbHNlKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlkKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdO1xuICAgICAgY29uc3QgaXNJbnRlcm5hbCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoaWQpLmdldENvbnRleHQoKSA9PT0gJ2ludGVybmFsJztcblxuICAgICAgaWYgKGlzSW50ZXJuYWwgJiYgIWNsZWFyQWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyLmlzQXJyYXkpIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0cyhmYWNldHMpIHtcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYgKCFzZWxlY3RlZEZhY2V0cy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkICcke2ZhY2V0SWR9JyBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4geyBmYWNldC5kYXRhID0gZGF0YTsgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHsgZmlsdGVyLnZhbHVlID0gbnVsbDsgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRzOiB0aGlzLl9nZXRSZXF1ZXN0RmFjZXRzKCksXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgcmVzdWx0czogdGhpcy5fY29uZmlnLnJlc3VsdHMsXG4gICAgICBmaWx0ZXJzOiB0aGlzLl9maWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gKFxuICAgICAgICBmaWx0ZXIuY29udGV4dCA9PT0gJ2ludGVybmFsJ1xuICAgICAgICAmJiAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKVxuICAgICAgICAgIHx8ICghQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZSkpXG4gICAgICApKVxuICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChcbiAgICAgIChmaWx0ZXIpID0+IHtcbiAgICAgICAgcXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgPyBmaWx0ZXIudmFsdWUuam9pbignLCcpXG4gICAgICAgICAgOiBmaWx0ZXIudmFsdWU7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIGNvbnN0IGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcigoZikgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgY29uc3Qgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXTtcbiAgICAgIGNvbnN0IHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKTtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbHRlcjtcblxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0YXJnZXRJbnB1dC5zZXREYXRhKGZhY2V0RGF0YSk7XG5cbiAgICBpZiAodGFyZ2V0SW5wdXQuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZSkge1xuICAgICAgY29uc3QgaXNFbXB0eSA9ICFmYWNldERhdGEuZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIHRhcmdldElucHV0LnNldElzRW1wdHkoaXNFbXB0eSk7XG4gICAgfVxuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmtleSA9IG9yZGVyQnk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdUeXBlKHR5cGUpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnTGltaXQobGltaXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJJbnB1dHMoKSB7XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKChydikgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKGluQXJyYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKHJlZlZhbHVlKSAhPT0gLTFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID09PSByZWZWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVcbiAgICAgICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICYmIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gdGhpcy5fZmlsdGVycy5wdXNoKHtcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGwsXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGYWNldHMoKSB7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKSB7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5fY29uZmlnLnRvdGFsQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IElucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZiAoIUlucHV0TW9kZWwpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxuICAgICAgICAgIG5ldyBJbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHRoaXMuc2V0SW5wdXREYXRhKGZhY2V0LmlkLCBmYWNldC5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSZXF1ZXN0RmFjZXRzKCkge1xuICAgIGNvbnN0IHJlc3VsdHM6IEZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7IC4uLmYgfTtcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XG4gICAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5kYXRhO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XG5cbiAgICAgIC8vIHNlYXJjaERhdGEgY29udHJvbFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcbiAgICAgICAgZmFjZXRDb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKGRhdGFJdGVtKSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTZWFyY2ggbW9kZWwgJyR7aWR9JyBhbHJlYWR5IGV4aXN0cyFgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IFNlYXJjaE1vZGVsKGlkLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbaWRdO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb2RlbChpZDogc3RyaW5nKTogU2VhcmNoTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==