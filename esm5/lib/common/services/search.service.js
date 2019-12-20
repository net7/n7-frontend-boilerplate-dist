/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { get as _get } from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect } from '../models';
import * as i0 from "@angular/core";
/** @type {?} */
var INPUTS_MAP = {
    checkbox: FacetInputCheckbox,
    text: FacetInputText,
    link: FacetInputLink,
    select: FacetInputSelect
};
/** @type {?} */
var FILTERS_MAP = {
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
var SearchModel = /** @class */ (function () {
    function SearchModel(id, config) {
        var _this = this;
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = (/**
         * @return {?}
         */
        function () { return _this._id; });
        this.getFilters = (/**
         * @return {?}
         */
        function () { return _this._filters; });
        this.getFacets = (/**
         * @return {?}
         */
        function () { return _this._facets; });
        this.getInputs = (/**
         * @return {?}
         */
        function () { return _this._inputs; });
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this._config; });
        this.getTotalCount = (/**
         * @return {?}
         */
        function () { return _this._totalCount; });
        this.getFields = (/**
         * @return {?}
         */
        function () { return _this._config.fields; });
        this.getResults$ = (/**
         * @return {?}
         */
        function () { return _this._results$; });
        this.setResults = (/**
         * @param {?} results
         * @return {?}
         */
        function (results) { return _this._results$.next(results); });
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
    SearchModel.prototype.updateFilter = /**
     * @param {?} facetId
     * @param {?} value
     * @param {?=} remove
     * @return {?}
     */
    function (facetId, value, remove) {
        /** @type {?} */
        var selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== value; }));
            }
            else if (Array.isArray(filter.value) &&
                filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? value : null;
            }
        }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.updateFiltersFromQueryParams({}, true);
    };
    /**
     * @param {?} queryParams
     * @param {?=} clearAll
     * @return {?}
     */
    SearchModel.prototype.updateFiltersFromQueryParams = /**
     * @param {?} queryParams
     * @param {?=} clearAll
     * @return {?}
     */
    function (queryParams, clearAll) {
        var _this = this;
        if (clearAll === void 0) { clearAll = false; }
        this._facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id;
            /** @type {?} */
            var selectedFilters = _this.getFiltersByFacetId(id);
            /** @type {?} */
            var value = queryParams[id];
            /** @type {?} */
            var isInternal = _this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal && !clearAll) {
                return;
            }
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value ? value : null;
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.updateInputsFromFilters = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._filters.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var facetId = _a.facetId, value = _a.value;
            _this.getInputByFacetId(facetId).setActive(value);
        }));
    };
    /**
     * @param {?} facets
     * @return {?}
     */
    SearchModel.prototype.updateFacets = /**
     * @param {?} facets
     * @return {?}
     */
    function (facets) {
        var _this = this;
        facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, data = _a.data;
            return _this.updateFacet(id, data);
        }));
        this._setInputsData();
    };
    /**
     * @param {?} totalCount
     * @return {?}
     */
    SearchModel.prototype.updateTotalCount = /**
     * @param {?} totalCount
     * @return {?}
     */
    function (totalCount) {
        this._totalCount = totalCount;
    };
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    SearchModel.prototype.updateFacet = /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    function (facetId, data) {
        /** @type {?} */
        var selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === facetId; }));
        if (!selectedFacets.length) {
            throw Error("Facet with id '" + facetId + "' does not exists");
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return (facet.data = data); }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.reset = /**
     * @return {?}
     */
    function () {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return (filter.value = null); }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.getRequestParams = /**
     * @return {?}
     */
    function () {
        return {
            facets: this._getRequestFacets(),
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return filter.context !== 'internal'; }))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
                return ({ facetId: facetId, value: value, searchIn: searchIn });
            }))
        };
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.getInternalFilters = /**
     * @return {?}
     */
    function () {
        return this._filters
            .filter((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            return (filter.context === 'internal' &&
                ((Array.isArray(filter.value) && filter.value.length) ||
                    (!Array.isArray(filter.value) && filter.value)));
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
            return ({ facetId: facetId, value: value, searchIn: searchIn });
        }));
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    SearchModel.prototype.filtersAsQueryParams = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        /** @type {?} */
        var queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            return (queryParams[filter.facetId] = Array.isArray(filter.value)
                ? filter.value.join(',')
                : filter.value);
        }));
        return queryParams;
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    SearchModel.prototype.getFiltersByFacetId = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        return this._filters.filter((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return filter.facetId === facetId; }));
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    SearchModel.prototype.getInputByFacetId = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        return this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getFacetId() === facetId; }))[0];
    };
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    SearchModel.prototype.setInputData = /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    function (facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    };
    /**
     * @param {?} target
     * @return {?}
     */
    SearchModel.prototype.filterTarget = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        /** @type {?} */
        var inputs = this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getTarget() === target; }));
        /** @type {?} */
        var targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        var facet = this._facets.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.id === target; }))[0];
        /** @type {?} */
        var facetData = facet.data;
        /** @type {?} */
        var searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            /** @type {?} */
            var filter = _this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            var searchIn = input.getSearchIn();
            /** @type {?} */
            var value = filter.value;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._filterData(searchIns, item); }));
        // update
        targetInput.setData(facetData);
        if (targetInput.getConfig().emptyState) {
            /** @type {?} */
            var isEmpty = !facetData.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return !data.hidden; })).length;
            targetInput.setIsEmpty(isEmpty);
        }
        targetInput.update();
    };
    /**
     * @param {?} orderBy
     * @return {?}
     */
    SearchModel.prototype.setSearchConfigOrderBy = /**
     * @param {?} orderBy
     * @return {?}
     */
    function (orderBy) {
        this._config.results.order.key = orderBy;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    SearchModel.prototype.setSearchConfigDirection = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this._config.results.order.direction = direction;
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    SearchModel.prototype.setPageConfigOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this._config.page.offset = offset;
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    SearchModel.prototype.setPageConfigLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._config.page.limit = limit;
    };
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    SearchModel.prototype._filterData = /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    function (searchIns, item) {
        var _this = this;
        // reset
        item.hidden = false;
        searchIns.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), searchIn = _b[0], value = _b[1];
            searchIn.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key, operator = _a.operator;
                if (item.hidden) {
                    return;
                }
                /** @type {?} */
                var refValue = _get(item, key, null);
                if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                    /** @type {?} */
                    var searchDataKey_1 = key.replace('searchData.', '');
                    item.searchData.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var dataKey = _a.key, dataValue = _a.value;
                        if (dataKey === searchDataKey_1) {
                            refValue = dataValue;
                        }
                    }));
                }
                if (refValue === null) {
                    item.hidden = true;
                }
                else if (FILTERS_MAP[operator]) {
                    item.hidden = _this[FILTERS_MAP[operator]](value, refValue);
                }
                else {
                    console.warn("SearchIn: operator " + operator + " not supported");
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataEquals = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (Array.isArray(refValue)) {
            if (Array.isArray(value)) {
                /** @type {?} */
                var inArray_1 = value.length === 0 ? true : false;
                refValue.forEach((/**
                 * @param {?} rv
                 * @return {?}
                 */
                function (rv) {
                    if (value.indexOf(rv) !== -1) {
                        inArray_1 = true;
                    }
                }));
                return !(inArray_1);
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
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataGreaterThan = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value > refValue);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataLessThan = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value < refValue);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataGreaterOrEquals = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value >= refValue);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataLessOrEquals = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value <= refValue);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataNotEqual = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value !== refValue);
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    SearchModel.prototype._filterDataLike = /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    function (value, refValue) {
        if (value &&
            refValue &&
            typeof value === 'string' &&
            typeof refValue === 'string') {
            /** @type {?} */
            var haystack = refValue.toLowerCase();
            /** @type {?} */
            var needle = value.toLocaleLowerCase();
            return !(haystack.indexOf(needle) !== -1);
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setFilters = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                return _this._filters.push(tslib_1.__assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }));
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setFacets = /**
     * @private
     * @return {?}
     */
    function () {
        this._facets = this._config.facets;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setPage = /**
     * @private
     * @return {?}
     */
    function () {
        this._page = this._config.page;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setTotalCount = /**
     * @private
     * @return {?}
     */
    function () {
        this._totalCount = this._config.totalCount;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setInputs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._config.fields.forEach((/**
         * @param {?} sectionConfig
         * @param {?} sectionIndex
         * @return {?}
         */
        function (sectionConfig, sectionIndex) {
            sectionConfig.inputs.forEach((/**
             * @param {?} inputConfig
             * @param {?} inputIndex
             * @return {?}
             */
            function (inputConfig, inputIndex) {
                /** @type {?} */
                var inputModel = INPUTS_MAP[inputConfig.type];
                if (!inputModel) {
                    throw Error("Input type " + inputConfig.type + " not supported");
                }
                _this._inputs.push(new inputModel(tslib_1.__assign({}, inputConfig, { inputIndex: inputIndex, sectionIndex: sectionIndex })));
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setInputsData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._facets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return _this.setInputData(facet.id, facet.data); }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._getRequestFacets = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var results = [];
        this._facets.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            /** @type {?} */
            var facetConfig = tslib_1.__assign({}, f);
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
                function (dataItem) { return typeof dataItem.searchData !== 'undefined'; }))
                    .forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                function (dataItem) {
                    delete dataItem.searchData;
                }));
            }
            results.push(facetConfig);
        }));
        return results;
    };
    return SearchModel;
}());
export { SearchModel };
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
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._models = {};
    }
    /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    SearchService.prototype.add = /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    function (id, config) {
        if (this._models[id]) {
            throw Error("Search model '" + id + "' already exists!");
        }
        this._models[id] = new SearchModel(id, config);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SearchService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this._models[id]) {
            delete this._models[id];
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SearchService.prototype.model = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._models[id] || null;
    };
    SearchService.queryParams = null;
    SearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
    return SearchService;
}());
export { SearchService };
if (false) {
    /** @type {?} */
    SearchService.queryParams;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7OztJQU1iLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O0lBRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7SUFDekIsR0FBRyxFQUFHLHdCQUF3QjtJQUM5QixHQUFHLEVBQUcscUJBQXFCO0lBQzNCLElBQUksRUFBRyw0QkFBNEI7SUFDbkMsSUFBSSxFQUFHLHlCQUF5QjtJQUNoQyxJQUFJLEVBQUcscUJBQXFCO0lBQzVCLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUI7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQiwrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7Ozs7QUFHZCw0QkFPQzs7O0lBTkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIsNEJBQXNCOztJQUN0QixzQkFBVzs7Ozs7QUFHYiw2QkFVQzs7O0lBVEMsMEJBQWdCOztJQUNoQix3QkFBb0Q7O0lBQ3BELDJCQUdHOztJ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QW5CTSx5QkFBVyxHQUFRLElBQUksQ0FBQzs7Z0JBSmhDLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkE3YUQ7Q0FtY0MsQUF4QkQsSUF3QkM7U0FyQlksYUFBYTs7O0lBQ3hCLDBCQUErQjs7Ozs7SUFDL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRmFjZXRJbnB1dCxcbiAgRmFjZXRJbnB1dENoZWNrYm94LFxuICBGYWNldElucHV0VGV4dCxcbiAgRmFjZXRJbnB1dExpbmssXG4gIEZhY2V0SW5wdXRTZWxlY3Rcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JzID0gJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnPD4nIHwgJ0xJS0UnO1xuZXhwb3J0IHR5cGUgRmFjZXRUeXBlcyA9ICd2YWx1ZScgfCAncmFuZ2UnO1xuZXhwb3J0IHR5cGUgRmFjZXRPcGVyYXRvcnMgPSAnT1InIHwgJ0FORCc7XG5cbmNvbnN0IElOUFVUU19NQVAgPSB7XG4gIGNoZWNrYm94OiBGYWNldElucHV0Q2hlY2tib3gsXG4gIHRleHQ6IEZhY2V0SW5wdXRUZXh0LFxuICBsaW5rOiBGYWNldElucHV0TGluayxcbiAgc2VsZWN0OiBGYWNldElucHV0U2VsZWN0XG59O1xuXG5jb25zdCBGSUxURVJTX01BUCA9IHtcbiAgJz0nIDogJ19maWx0ZXJEYXRhRXF1YWxzJyxcbiAgJz4nIDogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxuICAnPCcgOiAnX2ZpbHRlckRhdGFMZXNzVGhhbicsXG4gICc+PScgOiAnX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHMnLFxuICAnPD0nIDogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcbiAgJzw+JyA6ICdfZmlsdGVyRGF0YU5vdEVxdWFsJyxcbiAgJ0xJS0UnOiAnX2ZpbHRlckRhdGFMaWtlJ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoQ29uZmlnIHtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IEZhY2V0VHlwZXM7XG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcbiAgaGFzU3RhdGljRGF0YT86IGJvb2xlYW47XG4gIHNlYXJjaERhdGE/OiBzdHJpbmdbXTtcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyIHtcbiAgZmFjZXRJZDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XG4gIHNlYXJjaEluOiBBcnJheTx7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XG4gIH0+O1xuICBpc0FycmF5PzogYm9vbGVhbjtcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbCB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbHRlcnM6IElGaWx0ZXJbXSA9IFtdO1xuICBwcml2YXRlIF9mYWNldHM6IElGYWNldFtdID0gW107XG4gIHByaXZhdGUgX2lucHV0czogRmFjZXRJbnB1dFtdID0gW107XG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcbiAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJU2VhcmNoQ29uZmlnO1xuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZykge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fc2V0RmlsdGVycygpO1xuICAgIHRoaXMuX3NldEZhY2V0cygpO1xuICAgIHRoaXMuX3NldFBhZ2UoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHMoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xuXG4gICAgLy8gcXVlcnkgcGFyYW1zIGNvbnRyb2xcbiAgICBpZiAoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpO1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xuICBwdWJsaWMgZ2V0RmllbGRzID0gKCkgPT4gdGhpcy5fY29uZmlnLmZpZWxkcztcbiAgcHVibGljIGdldFJlc3VsdHMkID0gKCkgPT4gdGhpcy5fcmVzdWx0cyQ7XG5cbiAgcHVibGljIHNldFJlc3VsdHMgPSByZXN1bHRzID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcbiAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiByZW1vdmUpIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJlxuICAgICAgICBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gIXJlbW92ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoe30sIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMsIGNsZWFyQWxsOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaWQpLFxuICAgICAgICB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2lkXSxcbiAgICAgICAgaXNJbnRlcm5hbCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoaWQpLmdldENvbnRleHQoKSA9PT0gJ2ludGVybmFsJztcblxuICAgICAgaWYgKGlzSW50ZXJuYWwgJiYgIWNsZWFyQWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgaWYgKGZpbHRlci5pc0FycmF5KSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnLCcpIDogW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoeyBmYWNldElkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXRzKGZhY2V0cykge1xuICAgIGZhY2V0cy5mb3JFYWNoKCh7IGlkLCBkYXRhIH0pID0+IHRoaXMudXBkYXRlRmFjZXQoaWQsIGRhdGEpKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXQoZmFjZXRJZCwgZGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkRmFjZXRzID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYgKCFzZWxlY3RlZEZhY2V0cy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkICcke2ZhY2V0SWR9JyBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IChmYWNldC5kYXRhID0gZGF0YSkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gKGZpbHRlci52YWx1ZSA9IG51bGwpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldHM6IHRoaXMuX2dldFJlcXVlc3RGYWNldHMoKSxcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldEludGVybmFsRmlsdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyc1xuICAgICAgLmZpbHRlcihmaWx0ZXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGZpbHRlci5jb250ZXh0ID09PSAnaW50ZXJuYWwnICYmXG4gICAgICAgICAgKChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aCkgfHxcbiAgICAgICAgICAgICghQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChcbiAgICAgIGZpbHRlciA9PlxuICAgICAgICAocXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgPyBmaWx0ZXIudmFsdWUuam9pbignLCcpXG4gICAgICAgICAgOiBmaWx0ZXIudmFsdWUpXG4gICAgKTtcblxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpIHtcbiAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldERhdGEoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0VGFyZ2V0KCkgPT09IHRhcmdldCksXG4gICAgICB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KSxcbiAgICAgIGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmID0+IGYuaWQgPT09IHRhcmdldClbMF0sXG4gICAgICBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgY29uc3Qgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF0sXG4gICAgICAgIHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKSxcbiAgICAgICAgdmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pKTtcblxuICAgIC8vIHVwZGF0ZVxuICAgIHRhcmdldElucHV0LnNldERhdGEoZmFjZXREYXRhKTtcblxuICAgIGlmICh0YXJnZXRJbnB1dC5nZXRDb25maWcoKS5lbXB0eVN0YXRlKSB7XG4gICAgICBjb25zdCBpc0VtcHR5ID0gIWZhY2V0RGF0YS5maWx0ZXIoZGF0YSA9PiAhZGF0YS5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIHRhcmdldElucHV0LnNldElzRW1wdHkoaXNFbXB0eSk7XG4gICAgfVxuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmtleSA9IG9yZGVyQnk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnTGltaXQobGltaXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pIHtcbiAgICAvLyByZXNldFxuICAgIGl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgc2VhcmNoSW5zLmZvckVhY2goKFtzZWFyY2hJbiwgdmFsdWVdKSA9PiB7XG4gICAgICBzZWFyY2hJbi5mb3JFYWNoKCh7IGtleSwgb3BlcmF0b3IgfSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5oaWRkZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlZhbHVlID0gX2dldChpdGVtLCBrZXksIG51bGwpO1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3NlYXJjaERhdGEnKSAhPT0gLTEgJiYgQXJyYXkuaXNBcnJheShpdGVtLnNlYXJjaERhdGEpKSB7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoRGF0YUtleSA9IGtleS5yZXBsYWNlKCdzZWFyY2hEYXRhLicsICcnKTtcbiAgICAgICAgICBpdGVtLnNlYXJjaERhdGEuZm9yRWFjaCgoeyBrZXk6IGRhdGFLZXksIHZhbHVlOiBkYXRhVmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXkgPT09IHNlYXJjaERhdGFLZXkpIHtcbiAgICAgICAgICAgICAgcmVmVmFsdWUgPSBkYXRhVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZlZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKEZJTFRFUlNfTUFQW29wZXJhdG9yXSkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdGhpc1tGSUxURVJTX01BUFtvcGVyYXRvcl1dKHZhbHVlLCByZWZWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTZWFyY2hJbjogb3BlcmF0b3IgJHtvcGVyYXRvcn0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVmVmFsdWUpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IGluQXJyYXkgPSB2YWx1ZS5sZW5ndGggPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJlZlZhbHVlLmZvckVhY2gocnYgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKGluQXJyYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAhKFxuICAgICAgICAgICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUuaW5kZXhPZihyZWZWYWx1ZSkgIT09IC0xXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gcmVmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxlc3NUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDwgcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID49IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxlc3NPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFOb3RFcXVhbCh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSAhPT0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGlrZSh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAmJlxuICAgICAgcmVmVmFsdWUgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgcmV0dXJuICEoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZpbHRlcnMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+XG4gICAgICAgIHRoaXMuX2ZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXG4gICAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCkge1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xuICAgIHRoaXMuX3BhZ2UgPSB0aGlzLl9jb25maWcucGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRvdGFsQ291bnQoKSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRoaXMuX2NvbmZpZy50b3RhbENvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dE1vZGVsID0gSU5QVVRTX01BUFtpbnB1dENvbmZpZy50eXBlXTtcbiAgICAgICAgaWYgKCFpbnB1dE1vZGVsKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChcbiAgICAgICAgICBuZXcgaW5wdXRNb2RlbCh7IC4uLmlucHV0Q29uZmlnLCBpbnB1dEluZGV4LCBzZWN0aW9uSW5kZXggfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmYWNldCA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcbiAgICBjb25zdCByZXN1bHRzOiBJRmFjZXRbXSA9IFtdO1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7Li4uZn07XG4gICAgICBpZiAoIWYuaGFzU3RhdGljRGF0YSkge1xuICAgICAgICBkZWxldGUgZmFjZXRDb25maWcuZGF0YTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5oYXNTdGF0aWNEYXRhO1xuXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZhY2V0Q29uZmlnLmRhdGEpKSB7XG4gICAgICAgIGZhY2V0Q29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKGRhdGFJdGVtID0+IHR5cGVvZiBkYXRhSXRlbS5zZWFyY2hEYXRhICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaChkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHN0YXRpYyBxdWVyeVBhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsICcke2lkfScgYWxyZWFkeSBleGlzdHMhYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzW2lkXSA9IG5ldyBTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW2lkXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59XG4iXX0=