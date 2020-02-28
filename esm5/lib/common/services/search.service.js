/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { get as _get } from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect } from '../models';
import helpers from '../helpers';
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
                filter.value = !remove ? helpers.escapeDoubleQuotes(value) : null;
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
        this._clearInputs();
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
     * @param {?} type
     * @return {?}
     */
    SearchModel.prototype.setSearchConfigType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._config.results.order.type = type;
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
     * @return {?}
     */
    SearchModel.prototype._clearInputs = /**
     * @private
     * @return {?}
     */
    function () {
        this._inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            input.clear();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDOzs7SUFNM0IsVUFBVSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtDQUN6Qjs7SUFFSyxXQUFXLEdBQUc7SUFDbEIsR0FBRyxFQUFHLG1CQUFtQjtJQUN6QixHQUFHLEVBQUcsd0JBQXdCO0lBQzlCLEdBQUcsRUFBRyxxQkFBcUI7SUFDM0IsSUFBSSxFQUFHLDRCQUE0QjtJQUNuQyxJQUFJLEVBQUcseUJBQXlCO0lBQ2hDLElBQUksRUFBRyxxQkFBcUI7SUFDNUIsTUFBTSxFQUFFLGlCQUFpQjtDQUMxQjs7OztBQUVELG1DQU1DOzs7SUFMQyxtQ0FBbUI7O0lBQ25CLCtCQUFZOztJQUNaLDZCQUFVOztJQUNWLGdDQUFhOztJQUNiLCtCQUFZOzs7OztBQUdkLDRCQU9DOzs7SUFOQyxvQkFBVzs7SUFDWCxzQkFBaUI7O0lBQ2pCLDBCQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4Qiw0QkFBc0I7O0lBQ3RCLHNCQUFXOzs7OztBQUdiLDZCQVVDOzs7SUFUQywwQkFB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QUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLDhCQUFNOzs7O0lBQWIsVUFBYyxFQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVNLDZCQUFLOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQW5CTSx5QkFBVyxHQUFRLElBQUksQ0FBQzs7Z0JBSmhDLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkF4YkQ7Q0E4Y0MsQUF4QkQsSUF3QkM7U0FyQlksYUFBYTs7O0lBQ3hCLDBCQUErQjs7Ozs7SUFDL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRmFjZXRJbnB1dCxcbiAgRmFjZXRJbnB1dENoZWNrYm94LFxuICBGYWNldElucHV0VGV4dCxcbiAgRmFjZXRJbnB1dExpbmssXG4gIEZhY2V0SW5wdXRTZWxlY3Rcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgY2hlY2tib3g6IEZhY2V0SW5wdXRDaGVja2JveCxcbiAgdGV4dDogRmFjZXRJbnB1dFRleHQsXG4gIGxpbms6IEZhY2V0SW5wdXRMaW5rLFxuICBzZWxlY3Q6IEZhY2V0SW5wdXRTZWxlY3Rcbn07XG5cbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xuICAnPScgOiAnX2ZpbHRlckRhdGFFcXVhbHMnLFxuICAnPicgOiAnX2ZpbHRlckRhdGFHcmVhdGVyVGhhbicsXG4gICc8JyA6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcbiAgJz49JyA6ICdfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscycsXG4gICc8PScgOiAnX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHMnLFxuICAnPD4nIDogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxuICAnTElLRSc6ICdfZmlsdGVyRGF0YUxpa2UnXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hDb25maWcge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG4gIGZhY2V0czogYW55O1xuICBwYWdlOiBhbnk7XG4gIHJlc3VsdHM6IGFueTtcbiAgZmllbGRzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogRmFjZXRUeXBlcztcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcbiAgc2VhcmNoRGF0YT86IHN0cmluZ1tdO1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXIge1xuICBmYWNldElkOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgbnVsbDtcbiAgc2VhcmNoSW46IEFycmF5PHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBvcGVyYXRvcj86IEZpbHRlck9wZXJhdG9ycztcbiAgfT47XG4gIGlzQXJyYXk/OiBib29sZWFuO1xuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsdGVyczogSUZpbHRlcltdID0gW107XG4gIHByaXZhdGUgX2ZhY2V0czogSUZhY2V0W10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuICBwcml2YXRlIF90b3RhbENvdW50OiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9jb25maWc6IElTZWFyY2hDb25maWc7XG4gIHByaXZhdGUgX3Jlc3VsdHMkOiBTdWJqZWN0PGFueVtdPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XG4gICAgdGhpcy5fc2V0UGFnZSgpO1xuICAgIHRoaXMuX3NldElucHV0cygpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgICB0aGlzLl9zZXRUb3RhbENvdW50KCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcbiAgcHVibGljIGdldEZpbHRlcnMgPSAoKSA9PiB0aGlzLl9maWx0ZXJzO1xuICBwdWJsaWMgZ2V0RmFjZXRzID0gKCkgPT4gdGhpcy5fZmFjZXRzO1xuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5fY29uZmlnO1xuICBwdWJsaWMgZ2V0VG90YWxDb3VudCA9ICgpID0+IHRoaXMuX3RvdGFsQ291bnQ7XG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcblxuICBwdWJsaWMgc2V0UmVzdWx0cyA9IHJlc3VsdHMgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmXG4gICAgICAgIGZpbHRlci52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBmaWx0ZXIudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gaGVscGVycy5lc2NhcGVEb3VibGVRdW90ZXModmFsdWUpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoe30sIHRydWUpO1xuICAgIHRoaXMuX2NsZWFySW5wdXRzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcywgY2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCksXG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdLFxuICAgICAgICBpc0ludGVybmFsID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChpZCkuZ2V0Q29udGV4dCgpID09PSAnaW50ZXJuYWwnO1xuXG4gICAgICBpZiAoaXNJbnRlcm5hbCAmJiAhY2xlYXJBbGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyLmlzQXJyYXkpIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoYEZhY2V0IHdpdGggaWQgJyR7ZmFjZXRJZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goZmFjZXQgPT4gKGZhY2V0LmRhdGEgPSBkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiAoZmlsdGVyLnZhbHVlID0gbnVsbCkpO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXG4gICAgICAuZmlsdGVyKGZpbHRlciA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCcgJiZcbiAgICAgICAgICAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKSB8fFxuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtczogYW55ID0ge307XG4gICAgZmlsdGVycy5mb3JFYWNoKFxuICAgICAgZmlsdGVyID0+XG4gICAgICAgIChxdWVyeVBhcmFtc1tmaWx0ZXIuZmFjZXRJZF0gPSBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcbiAgICAgICAgICA/IGZpbHRlci52YWx1ZS5qb2luKCcsJylcbiAgICAgICAgICA6IGZpbHRlci52YWx1ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuZmFjZXRJZCA9PT0gZmFjZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KSxcbiAgICAgIHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpLFxuICAgICAgZmFjZXQgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGYgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXSxcbiAgICAgIGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XG5cbiAgICBjb25zdCBzZWFyY2hJbnMgPSBbXTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXSxcbiAgICAgICAgc2VhcmNoSW4gPSBpbnB1dC5nZXRTZWFyY2hJbigpLFxuICAgICAgICB2YWx1ZSA9IGZpbHRlci52YWx1ZTtcblxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyXG4gICAgZmFjZXREYXRhLmZvckVhY2goaXRlbSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuXG4gICAgaWYgKHRhcmdldElucHV0LmdldENvbmZpZygpLmVtcHR5U3RhdGUpIHtcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSAhZmFjZXREYXRhLmZpbHRlcihkYXRhID0+ICFkYXRhLmhpZGRlbikubGVuZ3RoO1xuICAgICAgdGFyZ2V0SW5wdXQuc2V0SXNFbXB0eShpc0VtcHR5KTtcbiAgICB9XG4gICAgdGFyZ2V0SW5wdXQudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIua2V5ID0gb3JkZXJCeTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ1R5cGUodHlwZSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdPZmZzZXQob2Zmc2V0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2Uub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdMaW1pdChsaW1pdCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLmxpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0cygpe1xuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGlucHV0LmNsZWFyKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkge1xuICAgIC8vIHJlc2V0XG4gICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICBzZWFyY2hJbnMuZm9yRWFjaCgoW3NlYXJjaEluLCB2YWx1ZV0pID0+IHtcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmhpZGRlbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVmFsdWUgPSBfZ2V0KGl0ZW0sIGtleSwgbnVsbCk7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignc2VhcmNoRGF0YScpICE9PSAtMSAmJiBBcnJheS5pc0FycmF5KGl0ZW0uc2VhcmNoRGF0YSkpIHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhS2V5ID0ga2V5LnJlcGxhY2UoJ3NlYXJjaERhdGEuJywgJycpO1xuICAgICAgICAgIGl0ZW0uc2VhcmNoRGF0YS5mb3JFYWNoKCh7IGtleTogZGF0YUtleSwgdmFsdWU6IGRhdGFWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YUtleSA9PT0gc2VhcmNoRGF0YUtleSkge1xuICAgICAgICAgICAgICByZWZWYWx1ZSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoRklMVEVSU19NQVBbb3BlcmF0b3JdKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0aGlzW0ZJTFRFUlNfTUFQW29wZXJhdG9yXV0odmFsdWUsIHJlZlZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNlYXJjaEluOiBvcGVyYXRvciAke29wZXJhdG9yfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZWYWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgaW5BcnJheSA9IHZhbHVlLmxlbmd0aCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmVmVmFsdWUuZm9yRWFjaChydiA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YocnYpICE9PSAtMSkge1xuICAgICAgICAgICAgaW5BcnJheSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEoaW5BcnJheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSAmJiByZWZWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICEoXG4gICAgICAgICAgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKHJlZlZhbHVlKSAhPT0gLTFcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID09PSByZWZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID4gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc1RoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPCByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPj0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc09yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDw9IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YU5vdEVxdWFsKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlICE9PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMaWtlKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChcbiAgICAgIHZhbHVlICYmXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IHJlZlZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PlxuICAgICAgICB0aGlzLl9maWx0ZXJzLnB1c2goe1xuICAgICAgICAgIC4uLmlucHV0LmZpbHRlckNvbmZpZyxcbiAgICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZhY2V0cygpIHtcbiAgICB0aGlzLl9mYWNldHMgPSB0aGlzLl9jb25maWcuZmFjZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0UGFnZSgpIHtcbiAgICB0aGlzLl9wYWdlID0gdGhpcy5fY29uZmlnLnBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUb3RhbENvdW50KCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0cygpIHtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKHNlY3Rpb25Db25maWcsIHNlY3Rpb25JbmRleCkgPT4ge1xuICAgICAgc2VjdGlvbkNvbmZpZy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb25maWcsIGlucHV0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XG4gICAgICAgIGlmICghaW5wdXRNb2RlbCkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBJbnB1dCB0eXBlICR7aW5wdXRDb25maWcudHlwZX0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2goXG4gICAgICAgICAgbmV3IGlucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0c0RhdGEoKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZmFjZXQgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFJlcXVlc3RGYWNldHMoKSB7XG4gICAgY29uc3QgcmVzdWx0czogSUZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0gey4uLmZ9O1xuICAgICAgaWYgKCFmLmhhc1N0YXRpY0RhdGEpIHtcbiAgICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmRhdGE7XG4gICAgICB9XG4gICAgICBkZWxldGUgZmFjZXRDb25maWcuaGFzU3RhdGljRGF0YTtcblxuICAgICAgLy8gc2VhcmNoRGF0YSBjb250cm9sXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmYWNldENvbmZpZy5kYXRhKSkge1xuICAgICAgICBmYWNldENvbmZpZy5kYXRhXG4gICAgICAgICAgLmZpbHRlcihkYXRhSXRlbSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFJdGVtLnNlYXJjaERhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goZmFjZXRDb25maWcpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XG5cbiAgcHVibGljIGFkZChpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tpZF07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBTZWFyY2hNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsc1tpZF0gfHwgbnVsbDtcbiAgfVxufVxuIl19