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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7OztJQU0zQixVQUFVLEdBQUc7SUFDakIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixJQUFJLEVBQUUsY0FBYztJQUNwQixJQUFJLEVBQUUsY0FBYztJQUNwQixNQUFNLEVBQUUsZ0JBQWdCO0NBQ3pCOztJQUVLLFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLEdBQUcsRUFBRSx3QkFBd0I7SUFDN0IsR0FBRyxFQUFFLHFCQUFxQjtJQUMxQixJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCOzs7O0FBRUQsa0NBTUM7OztJQUxDLGtDQUFtQjs7SUFDbkIsOEJBQVk7O0lBQ1osNEJBQVU7O0lBQ1YsK0JBQWE7O0lBQ2IsOEJBQVk7Ozs7O0FBR2QsMkJBT0M7OztJQU5DLG1CQUFXOztJQUNYLHFCQUFpQjs7SUFDakIseUJBQXlCOztJQUN6Qiw4QkFBd0I7O0lBQ3hCLDJCQUFzQjs7SUFDdEIscUJBQVc7Ozs7O0FBR2IsNEJBVUM7OztJQVRDLHlC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TyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSw2QkFBSzs7OztJQUFaLFVBQWEsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFwQk0seUJBQVcsR0FBUSxJQUFJLENBQUM7O2dCQUpoQyxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0JBbGNEO0NBeWRDLEFBekJELElBeUJDO1NBdEJZLGFBQWE7OztJQUN4QiwwQkFBK0I7Ozs7O0lBRS9CLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgRmFjZXRJbnB1dCxcclxuICBGYWNldElucHV0Q2hlY2tib3gsXHJcbiAgRmFjZXRJbnB1dFRleHQsXHJcbiAgRmFjZXRJbnB1dExpbmssXHJcbiAgRmFjZXRJbnB1dFNlbGVjdCxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcclxuZXhwb3J0IHR5cGUgRmFjZXRUeXBlcyA9ICd2YWx1ZScgfCAncmFuZ2UnO1xyXG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcclxuXHJcbmNvbnN0IElOUFVUU19NQVAgPSB7XHJcbiAgY2hlY2tib3g6IEZhY2V0SW5wdXRDaGVja2JveCxcclxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcclxuICBsaW5rOiBGYWNldElucHV0TGluayxcclxuICBzZWxlY3Q6IEZhY2V0SW5wdXRTZWxlY3QsXHJcbn07XHJcblxyXG5jb25zdCBGSUxURVJTX01BUCA9IHtcclxuICAnPSc6ICdfZmlsdGVyRGF0YUVxdWFscycsXHJcbiAgJz4nOiAnX2ZpbHRlckRhdGFHcmVhdGVyVGhhbicsXHJcbiAgJzwnOiAnX2ZpbHRlckRhdGFMZXNzVGhhbicsXHJcbiAgJz49JzogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcclxuICAnPD0nOiAnX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHMnLFxyXG4gICc8Pic6ICdfZmlsdGVyRGF0YU5vdEVxdWFsJyxcclxuICBMSUtFOiAnX2ZpbHRlckRhdGFMaWtlJyxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQ29uZmlnIHtcclxuICB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgZmFjZXRzOiBhbnk7XHJcbiAgcGFnZTogYW55O1xyXG4gIHJlc3VsdHM6IGFueTtcclxuICBmaWVsZHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBGYWNldFR5cGVzO1xyXG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcclxuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcclxuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XHJcbiAgZGF0YT86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xyXG4gIGZhY2V0SWQ6IHN0cmluZztcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XHJcbiAgc2VhcmNoSW46IEFycmF5PHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XHJcbiAgfT47XHJcbiAgaXNBcnJheT86IGJvb2xlYW47XHJcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xyXG4gIHRhcmdldD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcclxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9maWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9mYWNldHM6IEZhY2V0W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xyXG5cclxuICBwcml2YXRlIF90b3RhbENvdW50OiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIF9jb25maWc6IFNlYXJjaENvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBTZWFyY2hDb25maWcpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgdGhpcy5fc2V0RmlsdGVycygpO1xyXG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XHJcbiAgICB0aGlzLl9zZXRQYWdlKCk7XHJcbiAgICB0aGlzLl9zZXRJbnB1dHMoKTtcclxuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcclxuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcclxuXHJcbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbiAgICBpZiAoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XHJcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XHJcblxyXG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcclxuXHJcbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcclxuXHJcbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcclxuXHJcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcclxuXHJcbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzID0gKCkgPT4gdGhpcy5fY29uZmlnLmZpZWxkcztcclxuXHJcbiAgcHVibGljIGdldFJlc3VsdHMkID0gKCkgPT4gdGhpcy5fcmVzdWx0cyQ7XHJcblxyXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gKHJlc3VsdHMpID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcclxuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiByZW1vdmUpIHtcclxuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXHJcbiAgICAgICAgJiYgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxyXG4gICAgICApIHtcclxuICAgICAgICBmaWx0ZXIudmFsdWUucHVzaCh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gIXJlbW92ZSA/IGhlbHBlcnMuZXNjYXBlRG91YmxlUXVvdGVzKHZhbHVlKSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHt9LCB0cnVlKTtcclxuICAgIHRoaXMuX2NsZWFySW5wdXRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcywgY2xlYXJBbGwgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaWQpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2lkXTtcclxuICAgICAgY29uc3QgaXNJbnRlcm5hbCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoaWQpLmdldENvbnRleHQoKSA9PT0gJ2ludGVybmFsJztcclxuXHJcbiAgICAgIGlmIChpc0ludGVybmFsICYmICFjbGVhckFsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXIuaXNBcnJheSkge1xyXG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnLCcpIDogW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlIHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCkge1xyXG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcclxuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRmFjZXRzKGZhY2V0cykge1xyXG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xyXG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xyXG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRmFjZXQoZmFjZXRJZCwgZGF0YSkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKChmYWNldCkgPT4gZmFjZXQuaWQgPT09IGZhY2V0SWQpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEZhY2V0cy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEZhY2V0IHdpdGggaWQgJyR7ZmFjZXRJZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7IGZhY2V0LmRhdGEgPSBkYXRhOyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7IGZpbHRlci52YWx1ZSA9IG51bGw7IH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmYWNldHM6IHRoaXMuX2dldFJlcXVlc3RGYWNldHMoKSxcclxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcclxuICAgICAgcmVzdWx0czogdGhpcy5fY29uZmlnLnJlc3VsdHMsXHJcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcclxuICAgICAgICAuZmlsdGVyKChmaWx0ZXIpID0+IGZpbHRlci5jb250ZXh0ICE9PSAnaW50ZXJuYWwnKVxyXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEludGVybmFsRmlsdGVycygpIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXHJcbiAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gKFxyXG4gICAgICAgIGZpbHRlci5jb250ZXh0ID09PSAnaW50ZXJuYWwnXHJcbiAgICAgICAgJiYgKChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aClcclxuICAgICAgICAgIHx8ICghQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZSkpXHJcbiAgICAgICkpXHJcbiAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycykge1xyXG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xyXG4gICAgZmlsdGVycy5mb3JFYWNoKFxyXG4gICAgICAoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXHJcbiAgICAgICAgICA/IGZpbHRlci52YWx1ZS5qb2luKCcsJylcclxuICAgICAgICAgIDogZmlsdGVyLnZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzLmZpbHRlcigoZmlsdGVyKSA9PiBmaWx0ZXIuZmFjZXRJZCA9PT0gZmFjZXRJZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpIHtcclxuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0VGFyZ2V0KCkgPT09IHRhcmdldCk7XHJcbiAgICBjb25zdCB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcclxuICAgIGNvbnN0IGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcigoZikgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXTtcclxuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoSW5zID0gW107XHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF07XHJcbiAgICAgIGNvbnN0IHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKTtcclxuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZmlsdGVyO1xyXG5cclxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyXHJcbiAgICBmYWNldERhdGEuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5fZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pKTtcclxuXHJcbiAgICAvLyB1cGRhdGVcclxuICAgIHRhcmdldElucHV0LnNldERhdGEoZmFjZXREYXRhKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0SW5wdXQuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZSkge1xyXG4gICAgICBjb25zdCBpc0VtcHR5ID0gIWZhY2V0RGF0YS5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmhpZGRlbikubGVuZ3RoO1xyXG4gICAgICB0YXJnZXRJbnB1dC5zZXRJc0VtcHR5KGlzRW1wdHkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0SW5wdXQudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KSB7XHJcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5rZXkgPSBvcmRlckJ5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdUeXBlKHR5cGUpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLnR5cGUgPSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBhZ2VDb25maWdPZmZzZXQob2Zmc2V0KSB7XHJcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XHJcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJJbnB1dHMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XHJcbiAgICAvLyByZXNldFxyXG4gICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xyXG4gICAgICBzZWFyY2hJbi5mb3JFYWNoKCh7IGtleSwgb3BlcmF0b3IgfSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmhpZGRlbikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVmVmFsdWUgPSBfZ2V0KGl0ZW0sIGtleSwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xyXG4gICAgICAgICAgY29uc3Qgc2VhcmNoRGF0YUtleSA9IGtleS5yZXBsYWNlKCdzZWFyY2hEYXRhLicsICcnKTtcclxuICAgICAgICAgIGl0ZW0uc2VhcmNoRGF0YS5mb3JFYWNoKCh7IGtleTogZGF0YUtleSwgdmFsdWU6IGRhdGFWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XHJcbiAgICAgICAgICAgICAgcmVmVmFsdWUgPSBkYXRhVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVmVmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEZJTFRFUlNfTUFQW29wZXJhdG9yXSkge1xyXG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0aGlzW0ZJTFRFUlNfTUFQW29wZXJhdG9yXV0odmFsdWUsIHJlZlZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBTZWFyY2hJbjogb3BlcmF0b3IgJHtvcGVyYXRvcn0gbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZWYWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IGluQXJyYXkgPSB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgcmVmVmFsdWUuZm9yRWFjaCgocnYpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaW5BcnJheSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICEoaW5BcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gIShcclxuICAgICAgICAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YocmVmVmFsdWUpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPT09IHJlZlZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc1RoYW4odmFsdWUsIHJlZlZhbHVlKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDwgcmVmVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPj0gcmVmVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxlc3NPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YU5vdEVxdWFsKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSAhPT0gcmVmVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcclxuICAgICAgJiYgdHlwZW9mIHJlZlZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0RmlsdGVycygpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgZmllbGQuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB0aGlzLl9maWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIC4uLmlucHV0LmZpbHRlckNvbmZpZyxcclxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxyXG4gICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbCxcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRGYWNldHMoKSB7XHJcbiAgICB0aGlzLl9mYWNldHMgPSB0aGlzLl9jb25maWcuZmFjZXRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0UGFnZSgpIHtcclxuICAgIHRoaXMuX3BhZ2UgPSB0aGlzLl9jb25maWcucGFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRvdGFsQ291bnQoKSB7XHJcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5fY29uZmlnLnRvdGFsQ291bnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJbnB1dHMoKSB7XHJcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKHNlY3Rpb25Db25maWcsIHNlY3Rpb25JbmRleCkgPT4ge1xyXG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IElucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xyXG4gICAgICAgIGlmICghSW5wdXRNb2RlbCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChcclxuICAgICAgICAgIG5ldyBJbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcclxuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFJlcXVlc3RGYWNldHMoKSB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBGYWNldFtdID0gW107XHJcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBjb25zdCBmYWNldENvbmZpZyA9IHsgLi4uZiB9O1xyXG4gICAgICBpZiAoIWYuaGFzU3RhdGljRGF0YSkge1xyXG4gICAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5oYXNTdGF0aWNEYXRhO1xyXG5cclxuICAgICAgLy8gc2VhcmNoRGF0YSBjb250cm9sXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZhY2V0Q29uZmlnLmRhdGEpKSB7XHJcbiAgICAgICAgZmFjZXRDb25maWcuZGF0YVxyXG4gICAgICAgICAgLmZpbHRlcigoZGF0YUl0ZW0pID0+IHR5cGVvZiBkYXRhSXRlbS5zZWFyY2hEYXRhICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgIC5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBxdWVyeVBhcmFtczogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIGFkZChpZDogc3RyaW5nLCBjb25maWc6IFNlYXJjaENvbmZpZykge1xyXG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbaWRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBTZWFyY2hNb2RlbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=