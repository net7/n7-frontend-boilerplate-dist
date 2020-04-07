/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* eslint-disable max-classes-per-file */
import { get as _get } from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect, } from '../models';
import helpers from '../helpers';
import * as i0 from "@angular/core";
/** @type {?} */
var INPUTS_MAP = {
    checkbox: FacetInputCheckbox,
    text: FacetInputText,
    link: FacetInputLink,
    select: FacetInputSelect,
};
/** @type {?} */
var FILTERS_MAP = {
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
            else if (Array.isArray(filter.value)
                && filter.value.indexOf(value) === -1) {
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
                    filter.value = value || null;
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
        function (facet) { facet.data = data; }));
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
        function (filter) { filter.value = null; }));
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
            })),
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
        function (filter) { return (filter.context === 'internal'
            && ((Array.isArray(filter.value) && filter.value.length)
                || (!Array.isArray(filter.value) && filter.value))); }))
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
            queryParams[filter.facetId] = Array.isArray(filter.value)
                ? filter.value.join(',')
                : filter.value;
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
                var inArray_1 = value.length === 0;
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
            return !(value && refValue.indexOf(value) !== -1);
        }
        if (Array.isArray(value)) {
            return !(!value.length || value.indexOf(refValue) !== -1);
        }
        return !(value && value === refValue);
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
        if (value
            && typeof value === 'string'
            && typeof refValue === 'string') {
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
            function (input) { return _this._filters.push(tslib_1.__assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null })); }));
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
                var InputModel = INPUTS_MAP[inputConfig.type];
                if (!InputModel) {
                    throw Error("Input type " + inputConfig.type + " not supported");
                }
                _this._inputs.push(new InputModel(tslib_1.__assign({}, inputConfig, { inputIndex: inputIndex, sectionIndex: sectionIndex })));
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
                    providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7OztJQU0zQixVQUFVLEdBQUc7SUFDakIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixJQUFJLEVBQUUsY0FBYztJQUNwQixJQUFJLEVBQUUsY0FBYztJQUNwQixNQUFNLEVBQUUsZ0JBQWdCO0NBQ3pCOztJQUVLLFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLEdBQUcsRUFBRSx3QkFBd0I7SUFDN0IsR0FBRyxFQUFFLHFCQUFxQjtJQUMxQixJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCOzs7O0FBRUQsa0NBTUM7OztJQUxDLGtDQUFtQjs7SUFDbkIsOEJBQVk7O0lBQ1osNEJBQVU7O0lBQ1YsK0JBQWE7O0lBQ2IsOEJBQVk7Ozs7O0FBR2QsMkJBT0M7OztJQU5DLG1CQUFXOztJQUNYLHFCQUFpQjs7SUFDakIseUJBQXlCOztJQUN6Qiw4QkFBd0I7O0lBQ3hCLDJCQUFzQjs7SUFDdEIscUJBQVc7Ozs7O0FBR2IsNEJBVUM7OztJQVRDLHlC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TyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSw2QkFBSzs7OztJQUFaLFVBQWEsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFwQk0seUJBQVcsR0FBUSxJQUFJLENBQUM7O2dCQUpoQyxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0JBbGNEO0NBeWRDLEFBekJELElBeUJDO1NBdEJZLGFBQWE7OztJQUN4QiwwQkFBK0I7Ozs7O0lBRS9CLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBGYWNldElucHV0LFxuICBGYWNldElucHV0Q2hlY2tib3gsXG4gIEZhY2V0SW5wdXRUZXh0LFxuICBGYWNldElucHV0TGluayxcbiAgRmFjZXRJbnB1dFNlbGVjdCxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgY2hlY2tib3g6IEZhY2V0SW5wdXRDaGVja2JveCxcbiAgdGV4dDogRmFjZXRJbnB1dFRleHQsXG4gIGxpbms6IEZhY2V0SW5wdXRMaW5rLFxuICBzZWxlY3Q6IEZhY2V0SW5wdXRTZWxlY3QsXG59O1xuXG5jb25zdCBGSUxURVJTX01BUCA9IHtcbiAgJz0nOiAnX2ZpbHRlckRhdGFFcXVhbHMnLFxuICAnPic6ICdfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuJyxcbiAgJzwnOiAnX2ZpbHRlckRhdGFMZXNzVGhhbicsXG4gICc+PSc6ICdfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscycsXG4gICc8PSc6ICdfZmlsdGVyRGF0YUxlc3NPckVxdWFscycsXG4gICc8Pic6ICdfZmlsdGVyRGF0YU5vdEVxdWFsJyxcbiAgTElLRTogJ19maWx0ZXJEYXRhTGlrZScsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaENvbmZpZyB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgZmFjZXRzOiBhbnk7XG4gIHBhZ2U6IGFueTtcbiAgcmVzdWx0czogYW55O1xuICBmaWVsZHM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IEZhY2V0VHlwZXM7XG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcbiAgaGFzU3RhdGljRGF0YT86IGJvb2xlYW47XG4gIHNlYXJjaERhdGE/OiBzdHJpbmdbXTtcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xuICBmYWNldElkOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgbnVsbDtcbiAgc2VhcmNoSW46IEFycmF5PHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBvcGVyYXRvcj86IEZpbHRlck9wZXJhdG9ycztcbiAgfT47XG4gIGlzQXJyYXk/OiBib29sZWFuO1xuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICBwcml2YXRlIF9maWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2ZhY2V0czogRmFjZXRbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2lucHV0czogRmFjZXRJbnB1dFtdID0gW107XG5cbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuXG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBTZWFyY2hDb25maWc7XG5cbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IFNlYXJjaENvbmZpZykge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fc2V0RmlsdGVycygpO1xuICAgIHRoaXMuX3NldEZhY2V0cygpO1xuICAgIHRoaXMuX3NldFBhZ2UoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHMoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xuXG4gICAgLy8gcXVlcnkgcGFyYW1zIGNvbnRyb2xcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICBpZiAoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpO1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XG5cbiAgcHVibGljIGdldEZpbHRlcnMgPSAoKSA9PiB0aGlzLl9maWx0ZXJzO1xuXG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG5cbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcblxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5fY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRUb3RhbENvdW50ID0gKCkgPT4gdGhpcy5fdG90YWxDb3VudDtcblxuICBwdWJsaWMgZ2V0RmllbGRzID0gKCkgPT4gdGhpcy5fY29uZmlnLmZpZWxkcztcblxuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcblxuICBwdWJsaWMgc2V0UmVzdWx0cyA9IChyZXN1bHRzKSA9PiB0aGlzLl9yZXN1bHRzJC5uZXh0KHJlc3VsdHMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiByZW1vdmUpIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLnZhbHVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXG4gICAgICAgICYmIGZpbHRlci52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBmaWx0ZXIudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gaGVscGVycy5lc2NhcGVEb3VibGVRdW90ZXModmFsdWUpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoe30sIHRydWUpO1xuICAgIHRoaXMuX2NsZWFySW5wdXRzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcywgY2xlYXJBbGwgPSBmYWxzZSkge1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2lkXTtcbiAgICAgIGNvbnN0IGlzSW50ZXJuYWwgPSB0aGlzLmdldElucHV0QnlGYWNldElkKGlkKS5nZXRDb250ZXh0KCkgPT09ICdpbnRlcm5hbCc7XG5cbiAgICAgIGlmIChpc0ludGVybmFsICYmICFjbGVhckFsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgaWYgKGZpbHRlci5pc0FycmF5KSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnLCcpIDogW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKChmYWNldCkgPT4gZmFjZXQuaWQgPT09IGZhY2V0SWQpO1xuICAgIGlmICghc2VsZWN0ZWRGYWNldHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCAnJHtmYWNldElkfScgZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRGYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHsgZmFjZXQuZGF0YSA9IGRhdGE7IH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7IGZpbHRlci52YWx1ZSA9IG51bGw7IH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKChmaWx0ZXIpID0+IGZpbHRlci5jb250ZXh0ICE9PSAnaW50ZXJuYWwnKVxuICAgICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXG4gICAgICAuZmlsdGVyKChmaWx0ZXIpID0+IChcbiAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCdcbiAgICAgICAgJiYgKChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aClcbiAgICAgICAgICB8fCAoIUFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUpKVxuICAgICAgKSlcbiAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goXG4gICAgICAoZmlsdGVyKSA9PiB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxuICAgICAgICAgID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgIDogZmlsdGVyLnZhbHVlO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKChmaWx0ZXIpID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpIHtcbiAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldERhdGEoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICBjb25zdCBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGYpID0+IGYuaWQgPT09IHRhcmdldClbMF07XG4gICAgY29uc3QgZmFjZXREYXRhID0gZmFjZXQuZGF0YTtcblxuICAgIGNvbnN0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF07XG4gICAgICBjb25zdCBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCk7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBmaWx0ZXI7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuXG4gICAgaWYgKHRhcmdldElucHV0LmdldENvbmZpZygpLmVtcHR5U3RhdGUpIHtcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSAhZmFjZXREYXRhLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuaGlkZGVuKS5sZW5ndGg7XG4gICAgICB0YXJnZXRJbnB1dC5zZXRJc0VtcHR5KGlzRW1wdHkpO1xuICAgIH1cbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5rZXkgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIudHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXRzKCkge1xuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkge1xuICAgIC8vIHJlc2V0XG4gICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICBzZWFyY2hJbnMuZm9yRWFjaCgoW3NlYXJjaEluLCB2YWx1ZV0pID0+IHtcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmhpZGRlbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVmFsdWUgPSBfZ2V0KGl0ZW0sIGtleSwgbnVsbCk7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignc2VhcmNoRGF0YScpICE9PSAtMSAmJiBBcnJheS5pc0FycmF5KGl0ZW0uc2VhcmNoRGF0YSkpIHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhS2V5ID0ga2V5LnJlcGxhY2UoJ3NlYXJjaERhdGEuJywgJycpO1xuICAgICAgICAgIGl0ZW0uc2VhcmNoRGF0YS5mb3JFYWNoKCh7IGtleTogZGF0YUtleSwgdmFsdWU6IGRhdGFWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YUtleSA9PT0gc2VhcmNoRGF0YUtleSkge1xuICAgICAgICAgICAgICByZWZWYWx1ZSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoRklMVEVSU19NQVBbb3BlcmF0b3JdKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0aGlzW0ZJTFRFUlNfTUFQW29wZXJhdG9yXV0odmFsdWUsIHJlZlZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNlYXJjaEluOiBvcGVyYXRvciAke29wZXJhdG9yfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZWYWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgaW5BcnJheSA9IHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgcmVmVmFsdWUuZm9yRWFjaCgocnYpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihydikgIT09IC0xKSB7XG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHJlZlZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEoXG4gICAgICAgICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUuaW5kZXhPZihyZWZWYWx1ZSkgIT09IC0xXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gcmVmVmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID4gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc1RoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPCByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPj0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc09yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDw9IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YU5vdEVxdWFsKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlICE9PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMaWtlKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChcbiAgICAgIHZhbHVlXG4gICAgICAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAmJiB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IHJlZlZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgICByZXR1cm4gIShoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmlsdGVycygpIHtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHRoaXMuX2ZpbHRlcnMucHVzaCh7XG4gICAgICAgIC4uLmlucHV0LmZpbHRlckNvbmZpZyxcbiAgICAgICAgZmFjZXRJZDogaW5wdXQuZmFjZXRJZCxcbiAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsLFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCkge1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xuICAgIHRoaXMuX3BhZ2UgPSB0aGlzLl9jb25maWcucGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRvdGFsQ291bnQoKSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRoaXMuX2NvbmZpZy50b3RhbENvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBJbnB1dE1vZGVsID0gSU5QVVRTX01BUFtpbnB1dENvbmZpZy50eXBlXTtcbiAgICAgICAgaWYgKCFJbnB1dE1vZGVsKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChcbiAgICAgICAgICBuZXcgSW5wdXRNb2RlbCh7IC4uLmlucHV0Q29uZmlnLCBpbnB1dEluZGV4LCBzZWN0aW9uSW5kZXggfSksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0c0RhdGEoKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcbiAgICBjb25zdCByZXN1bHRzOiBGYWNldFtdID0gW107XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0geyAuLi5mIH07XG4gICAgICBpZiAoIWYuaGFzU3RhdGljRGF0YSkge1xuICAgICAgICBkZWxldGUgZmFjZXRDb25maWcuZGF0YTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5oYXNTdGF0aWNEYXRhO1xuXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZhY2V0Q29uZmlnLmRhdGEpKSB7XG4gICAgICAgIGZhY2V0Q29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKChkYXRhSXRlbSkgPT4gdHlwZW9mIGRhdGFJdGVtLnNlYXJjaERhdGEgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgIC5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFJdGVtLnNlYXJjaERhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goZmFjZXRDb25maWcpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgc3RhdGljIHF1ZXJ5UGFyYW1zOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XG5cbiAgcHVibGljIGFkZChpZDogc3RyaW5nLCBjb25maWc6IFNlYXJjaENvbmZpZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsICcke2lkfScgYWxyZWFkeSBleGlzdHMhYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzW2lkXSA9IG5ldyBTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW2lkXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59XG4iXX0=