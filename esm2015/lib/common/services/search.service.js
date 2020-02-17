/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { get as _get } from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect } from '../models';
import helpers from '../helpers';
import * as i0 from "@angular/core";
/** @type {?} */
const INPUTS_MAP = {
    checkbox: FacetInputCheckbox,
    text: FacetInputText,
    link: FacetInputLink,
    select: FacetInputSelect
};
/** @type {?} */
const FILTERS_MAP = {
    '=': '_filterDataEquals',
    '>': '_filterDataGreaterThan',
    '<': '_filterDataLessThan',
    '>=': '_filterDataGreaterOrEquals',
    '<=': '_filterDataLessOrEquals',
    '<>': '_filterDataNotEqual',
    'LIKE': '_filterDataLike'
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
    IFacet.prototype.hasStaticData;
    /** @type {?|undefined} */
    IFacet.prototype.searchData;
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
        results => this._results$.next(results));
        this._id = id;
        this._config = config;
        this._setFilters();
        this._setFacets();
        this._setPage();
        this._setInputs();
        this._setInputsData();
        this._setTotalCount();
        // query params control
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
        filter => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item !== value));
            }
            else if (Array.isArray(filter.value) &&
                filter.value.indexOf(value) === -1) {
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
            filter => {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value ? value : null;
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
        facet => facet.id === facetId));
        if (!selectedFacets.length) {
            throw Error(`Facet with id '${facetId}' does not exists`);
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => (facet.data = data)));
    }
    /**
     * @return {?}
     */
    reset() {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => (filter.value = null)));
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
            return (filter.context === 'internal' &&
                ((Array.isArray(filter.value) && filter.value.length) ||
                    (!Array.isArray(filter.value) && filter.value)));
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
        const queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => (queryParams[filter.facetId] = Array.isArray(filter.value)
            ? filter.value.join(',')
            : filter.value)));
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
         * @param {?} f
         * @return {?}
         */
        f => f.id === target))[0];
        /** @type {?} */
        const facetData = facet.data;
        /** @type {?} */
        const searchIns = [];
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
        if (targetInput.getConfig().emptyState) {
            /** @type {?} */
            const isEmpty = !facetData.filter((/**
             * @param {?} data
             * @return {?}
             */
            data => !data.hidden)).length;
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
        input => {
            input.clear();
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
                let inArray = value.length === 0 ? true : false;
                refValue.forEach((/**
                 * @param {?} rv
                 * @return {?}
                 */
                rv => {
                    if (value.indexOf(rv) !== -1) {
                        inArray = true;
                    }
                }));
                return !(inArray);
            }
            else {
                return !(value && refValue.indexOf(value) !== -1);
            }
        }
        else {
            if (Array.isArray(value)) {
                return !(!value.length || value.indexOf(refValue) !== -1);
            }
            else {
                return !(value && value === refValue);
            }
        }
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
        if (value &&
            typeof value === 'string' &&
            typeof refValue === 'string') {
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
                if (!inputModel) {
                    throw Error(`Input type ${inputConfig.type} not supported`);
                }
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
        f => {
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
                dataItem => typeof dataItem.searchData !== 'undefined'))
                    .forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                dataItem => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDOzs7TUFNM0IsVUFBVSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtDQUN6Qjs7TUFFSyxXQUFXLEdBQUc7SUFDbEIsR0FBRyxFQUFHLG1CQUFtQjtJQUN6QixHQUFHLEVBQUcsd0JBQXdCO0lBQzlCLEdBQUcsRUFBRyxxQkFBcUI7SUFDM0IsSUFBSSxFQUFHLDRCQUE0QjtJQUNuQyxJQUFJLEVBQUcseUJBQXlCO0lBQ2hDLElBQUksRUFBRyxxQkFBcUI7SUFDNUIsTUFBTSxFQUFFLGlCQUFpQjtDQUMxQjs7OztBQUVELG1DQU1DOzs7SUFMQyxtQ0FBbUI7O0lBQ25CLCtCQUFZOztJQUNaLDZCQUFVOztJQUNWLGdDQUFhOztJQUNiLCtCQUFZOzs7OztBQUdkLDRCQU9DOzs7SUFOQyxvQkFBVzs7SUFDWCxzQkFBaUI7O0lBQ2pCLDBCQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4Qiw0QkFBc0I7O0lBQ3RCLHNCQUFXOzs7OztBQUdiLDZCQVVDOzs7SUFUQywwQkFB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SUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsRUFBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7O0FBbkJNLHlCQUFXLEdBQVEsSUFBSSxDQUFDOztZQUpoQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsMEJBQStCOzs7OztJQUMvQixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBGYWNldElucHV0LFxuICBGYWNldElucHV0Q2hlY2tib3gsXG4gIEZhY2V0SW5wdXRUZXh0LFxuICBGYWNldElucHV0TGluayxcbiAgRmFjZXRJbnB1dFNlbGVjdFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcbiAgbGluazogRmFjZXRJbnB1dExpbmssXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdFxufTtcblxuY29uc3QgRklMVEVSU19NQVAgPSB7XG4gICc9JyA6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JyA6ICdfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuJyxcbiAgJzwnIDogJ19maWx0ZXJEYXRhTGVzc1RoYW4nLFxuICAnPj0nIDogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JyA6ICdfZmlsdGVyRGF0YUxlc3NPckVxdWFscycsXG4gICc8PicgOiAnX2ZpbHRlckRhdGFOb3RFcXVhbCcsXG4gICdMSUtFJzogJ19maWx0ZXJEYXRhTGlrZSdcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENvbmZpZyB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgZmFjZXRzOiBhbnk7XG4gIHBhZ2U6IGFueTtcbiAgcmVzdWx0czogYW55O1xuICBmaWVsZHM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXQge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGhhc1N0YXRpY0RhdGE/OiBib29sZWFuO1xuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nO1xuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjtcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9maWx0ZXJzOiBJRmlsdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfZmFjZXRzOiBJRmFjZXRbXSA9IFtdO1xuICBwcml2YXRlIF9pbnB1dHM6IEZhY2V0SW5wdXRbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZzogSVNlYXJjaENvbmZpZztcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG4gIHB1YmxpYyBnZXRUb3RhbENvdW50ID0gKCkgPT4gdGhpcy5fdG90YWxDb3VudDtcbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gcmVzdWx0cyA9PiB0aGlzLl9yZXN1bHRzJC5uZXh0KHJlc3VsdHMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiZcbiAgICAgICAgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyBoZWxwZXJzLmVzY2FwZURvdWJsZVF1b3Rlcyh2YWx1ZSkgOiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyh7fSwgdHJ1ZSk7XG4gICAgdGhpcy5fY2xlYXJJbnB1dHMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBjbGVhckFsbDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlkKSxcbiAgICAgICAgdmFsdWUgPSBxdWVyeVBhcmFtc1tpZF0sXG4gICAgICAgIGlzSW50ZXJuYWwgPSB0aGlzLmdldElucHV0QnlGYWNldElkKGlkKS5nZXRDb250ZXh0KCkgPT09ICdpbnRlcm5hbCc7XG5cbiAgICAgIGlmIChpc0ludGVybmFsICYmICFjbGVhckFsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIuaXNBcnJheSkge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlID8gdmFsdWUgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0cyhmYWNldHMpIHtcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQuaWQgPT09IGZhY2V0SWQpO1xuICAgIGlmICghc2VsZWN0ZWRGYWNldHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCAnJHtmYWNldElkfScgZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRGYWNldHMuZm9yRWFjaChmYWNldCA9PiAoZmFjZXQuZGF0YSA9IGRhdGEpKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IChmaWx0ZXIudmFsdWUgPSBudWxsKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRzOiB0aGlzLl9nZXRSZXF1ZXN0RmFjZXRzKCksXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgcmVzdWx0czogdGhpcy5fY29uZmlnLnJlc3VsdHMsXG4gICAgICBmaWx0ZXJzOiB0aGlzLl9maWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5jb250ZXh0ICE9PSAnaW50ZXJuYWwnKVxuICAgICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgIC5maWx0ZXIoZmlsdGVyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBmaWx0ZXIuY29udGV4dCA9PT0gJ2ludGVybmFsJyAmJlxuICAgICAgICAgICgoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZS5sZW5ndGgpIHx8XG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goXG4gICAgICBmaWx0ZXIgPT5cbiAgICAgICAgKHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxuICAgICAgICAgID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgIDogZmlsdGVyLnZhbHVlKVxuICAgICk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkgPT09IGZhY2V0SWQpWzBdO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0RGF0YShmYWNldElkLCBkYXRhKSB7XG4gICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCh0YXJnZXQpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpLFxuICAgICAgdGFyZ2V0SW5wdXQgPSB0aGlzLmdldElucHV0QnlGYWNldElkKHRhcmdldCksXG4gICAgICBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZiA9PiBmLmlkID09PSB0YXJnZXQpWzBdLFxuICAgICAgZmFjZXREYXRhID0gZmFjZXQuZGF0YTtcblxuICAgIGNvbnN0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpbnB1dC5nZXRGYWNldElkKCkpWzBdLFxuICAgICAgICBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCksXG4gICAgICAgIHZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgICBzZWFyY2hJbnMucHVzaChbc2VhcmNoSW4sIHZhbHVlXSk7XG4gICAgfSk7XG5cbiAgICAvLyBmaWx0ZXJcbiAgICBmYWNldERhdGEuZm9yRWFjaChpdGVtID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0YXJnZXRJbnB1dC5zZXREYXRhKGZhY2V0RGF0YSk7XG5cbiAgICBpZiAodGFyZ2V0SW5wdXQuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZSkge1xuICAgICAgY29uc3QgaXNFbXB0eSA9ICFmYWNldERhdGEuZmlsdGVyKGRhdGEgPT4gIWRhdGEuaGlkZGVuKS5sZW5ndGg7XG4gICAgICB0YXJnZXRJbnB1dC5zZXRJc0VtcHR5KGlzRW1wdHkpO1xuICAgIH1cbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5rZXkgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXRzKCl7XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQuY2xlYXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKHJ2ID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihydikgIT09IC0xKSB7XG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlICYmIHJlZlZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gIShcbiAgICAgICAgICAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YocmVmVmFsdWUpICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPT09IHJlZlZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgcmV0dXJuICEoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZpbHRlcnMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+XG4gICAgICAgIHRoaXMuX2ZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXG4gICAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCkge1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xuICAgIHRoaXMuX3BhZ2UgPSB0aGlzLl9jb25maWcucGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRvdGFsQ291bnQoKSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRoaXMuX2NvbmZpZy50b3RhbENvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dE1vZGVsID0gSU5QVVRTX01BUFtpbnB1dENvbmZpZy50eXBlXTtcbiAgICAgICAgaWYgKCFpbnB1dE1vZGVsKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChcbiAgICAgICAgICBuZXcgaW5wdXRNb2RlbCh7IC4uLmlucHV0Q29uZmlnLCBpbnB1dEluZGV4LCBzZWN0aW9uSW5kZXggfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmYWNldCA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcbiAgICBjb25zdCByZXN1bHRzOiBJRmFjZXRbXSA9IFtdO1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7Li4uZn07XG4gICAgICBpZiAoIWYuaGFzU3RhdGljRGF0YSkge1xuICAgICAgICBkZWxldGUgZmFjZXRDb25maWcuZGF0YTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5oYXNTdGF0aWNEYXRhO1xuXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZhY2V0Q29uZmlnLmRhdGEpKSB7XG4gICAgICAgIGZhY2V0Q29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKGRhdGFJdGVtID0+IHR5cGVvZiBkYXRhSXRlbS5zZWFyY2hEYXRhICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaChkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHN0YXRpYyBxdWVyeVBhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsICcke2lkfScgYWxyZWFkeSBleGlzdHMhYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzW2lkXSA9IG5ldyBTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW2lkXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59XG4iXX0=