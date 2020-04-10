/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQzs7O0lBTTNCLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O0lBRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtJQUM3QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLElBQUksRUFBRSxpQkFBaUI7Q0FDeEI7Ozs7QUFFRCxrQ0FNQzs7O0lBTEMsa0NBQW1COztJQUNuQiw4QkFBWTs7SUFDWiw0QkFBVTs7SUFDViwrQkFBYTs7SUFDYiw4QkFBWTs7Ozs7QUFHZCwyQkFPQzs7O0lBTkMsbUJBQVc7O0lBQ1gscUJBQWlCOztJQUNqQix5QkFBeUI7O0lBQ3pCLDhCQUF3Qjs7SUFDeEIsMkJBQXNCOztJQUN0QixxQkFBVzs7Ozs7QUFHYiw0QkFVQzs7O0lBVEMseUJB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LElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVNLDZCQUFLOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQXBCTSx5QkFBVyxHQUFRLElBQUksQ0FBQzs7Z0JBSmhDLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFsY0Q7Q0F5ZEMsQUF6QkQsSUF5QkM7U0F0QlksYUFBYTs7O0lBQ3hCLDBCQUErQjs7Ozs7SUFFL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEZhY2V0SW5wdXQsXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0LFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcbiAgbGluazogRmFjZXRJbnB1dExpbmssXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdCxcbn07XG5cbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xuICAnPSc6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JzogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxuICAnPCc6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcbiAgJz49JzogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JzogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcbiAgJzw+JzogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxuICBMSUtFOiAnX2ZpbHRlckRhdGFMaWtlJyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQ29uZmlnIHtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogRmFjZXRUeXBlcztcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcbiAgc2VhcmNoRGF0YT86IHN0cmluZ1tdO1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nO1xuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjtcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZmFjZXRzOiBGYWNldFtdID0gW107XG5cbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcblxuICBwcml2YXRlIF9wYWdlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIF9jb25maWc6IFNlYXJjaENvbmZpZztcblxuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQ29uZmlnKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XG4gICAgdGhpcy5fc2V0UGFnZSgpO1xuICAgIHRoaXMuX3NldElucHV0cygpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgICB0aGlzLl9zZXRUb3RhbENvdW50KCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcblxuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG5cbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcblxuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG5cbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xuXG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xuXG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gKHJlc3VsdHMpID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcbiAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcbiAgICAgICAgJiYgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyBoZWxwZXJzLmVzY2FwZURvdWJsZVF1b3Rlcyh2YWx1ZSkgOiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyh7fSwgdHJ1ZSk7XG4gICAgdGhpcy5fY2xlYXJJbnB1dHMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBjbGVhckFsbCA9IGZhbHNlKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlkKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdO1xuICAgICAgY29uc3QgaXNJbnRlcm5hbCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoaWQpLmdldENvbnRleHQoKSA9PT0gJ2ludGVybmFsJztcblxuICAgICAgaWYgKGlzSW50ZXJuYWwgJiYgIWNsZWFyQWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyLmlzQXJyYXkpIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0cyhmYWNldHMpIHtcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYgKCFzZWxlY3RlZEZhY2V0cy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkICcke2ZhY2V0SWR9JyBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4geyBmYWNldC5kYXRhID0gZGF0YTsgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHsgZmlsdGVyLnZhbHVlID0gbnVsbDsgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRzOiB0aGlzLl9nZXRSZXF1ZXN0RmFjZXRzKCksXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgcmVzdWx0czogdGhpcy5fY29uZmlnLnJlc3VsdHMsXG4gICAgICBmaWx0ZXJzOiB0aGlzLl9maWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gKFxuICAgICAgICBmaWx0ZXIuY29udGV4dCA9PT0gJ2ludGVybmFsJ1xuICAgICAgICAmJiAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKVxuICAgICAgICAgIHx8ICghQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZSkpXG4gICAgICApKVxuICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChcbiAgICAgIChmaWx0ZXIpID0+IHtcbiAgICAgICAgcXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgPyBmaWx0ZXIudmFsdWUuam9pbignLCcpXG4gICAgICAgICAgOiBmaWx0ZXIudmFsdWU7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIGNvbnN0IGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcigoZikgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgY29uc3Qgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXTtcbiAgICAgIGNvbnN0IHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKTtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbHRlcjtcblxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0YXJnZXRJbnB1dC5zZXREYXRhKGZhY2V0RGF0YSk7XG5cbiAgICBpZiAodGFyZ2V0SW5wdXQuZ2V0Q29uZmlnKCkuZW1wdHlTdGF0ZSkge1xuICAgICAgY29uc3QgaXNFbXB0eSA9ICFmYWNldERhdGEuZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIHRhcmdldElucHV0LnNldElzRW1wdHkoaXNFbXB0eSk7XG4gICAgfVxuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmtleSA9IG9yZGVyQnk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdUeXBlKHR5cGUpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnTGltaXQobGltaXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJJbnB1dHMoKSB7XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKChydikgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKGluQXJyYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKHJlZlZhbHVlKSAhPT0gLTFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID09PSByZWZWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVcbiAgICAgICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICYmIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gdGhpcy5fZmlsdGVycy5wdXNoKHtcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGwsXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGYWNldHMoKSB7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKSB7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5fY29uZmlnLnRvdGFsQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IElucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZiAoIUlucHV0TW9kZWwpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxuICAgICAgICAgIG5ldyBJbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHRoaXMuc2V0SW5wdXREYXRhKGZhY2V0LmlkLCBmYWNldC5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSZXF1ZXN0RmFjZXRzKCkge1xuICAgIGNvbnN0IHJlc3VsdHM6IEZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7IC4uLmYgfTtcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XG4gICAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5kYXRhO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XG5cbiAgICAgIC8vIHNlYXJjaERhdGEgY29udHJvbFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcbiAgICAgICAgZmFjZXRDb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKGRhdGFJdGVtKSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTZWFyY2ggbW9kZWwgJyR7aWR9JyBhbHJlYWR5IGV4aXN0cyFgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IFNlYXJjaE1vZGVsKGlkLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbaWRdO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb2RlbChpZDogc3RyaW5nKTogU2VhcmNoTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==