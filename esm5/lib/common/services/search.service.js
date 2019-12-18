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
     * @param {?} queryParams
     * @return {?}
     */
    SearchModel.prototype.updateFiltersFromQueryParams = /**
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7OztJQU1iLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O0lBRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7SUFDekIsR0FBRyxFQUFHLHdCQUF3QjtJQUM5QixHQUFHLEVBQUcscUJBQXFCO0lBQzNCLElBQUksRUFBRyw0QkFBNEI7SUFDbkMsSUFBSSxFQUFHLHlCQUF5QjtJQUNoQyxJQUFJLEVBQUcscUJBQXFCO0lBQzVCLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUI7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQiwrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7Ozs7QUFHZCw0QkFPQzs7O0lBTkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIsNEJBQXNCOztJQUN0QixzQkFBVzs7Ozs7QUFHYiw2QkFVQzs7O0lBVEMsMEJBQWdCOztJQUNoQix3QkFBb0Q7O0lBQ3BELDJCQUdHOztJ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RUFBRSxNQUFxQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsTUFBTSxLQUFLLENBQUMsbUJBQWlCLEVBQUUsc0JBQW1CLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU0sOEJBQU07Ozs7SUFBYixVQUFjLEVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRU0sNkJBQUs7Ozs7SUFBWixVQUFhLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBbkJNLHlCQUFXLEdBQVEsSUFBSSxDQUFDOztnQkFKaEMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQS9aRDtDQXFiQyxBQXhCRCxJQXdCQztTQXJCWSxhQUFhOzs7SUFDeEIsMEJBQStCOzs7OztJQUMvQixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBGYWNldElucHV0LFxuICBGYWNldElucHV0Q2hlY2tib3gsXG4gIEZhY2V0SW5wdXRUZXh0LFxuICBGYWNldElucHV0TGluayxcbiAgRmFjZXRJbnB1dFNlbGVjdFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgY2hlY2tib3g6IEZhY2V0SW5wdXRDaGVja2JveCxcbiAgdGV4dDogRmFjZXRJbnB1dFRleHQsXG4gIGxpbms6IEZhY2V0SW5wdXRMaW5rLFxuICBzZWxlY3Q6IEZhY2V0SW5wdXRTZWxlY3Rcbn07XG5cbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xuICAnPScgOiAnX2ZpbHRlckRhdGFFcXVhbHMnLFxuICAnPicgOiAnX2ZpbHRlckRhdGFHcmVhdGVyVGhhbicsXG4gICc8JyA6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcbiAgJz49JyA6ICdfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscycsXG4gICc8PScgOiAnX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHMnLFxuICAnPD4nIDogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxuICAnTElLRSc6ICdfZmlsdGVyRGF0YUxpa2UnXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hDb25maWcge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG4gIGZhY2V0czogYW55O1xuICBwYWdlOiBhbnk7XG4gIHJlc3VsdHM6IGFueTtcbiAgZmllbGRzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogRmFjZXRUeXBlcztcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcbiAgc2VhcmNoRGF0YT86IHN0cmluZ1tdO1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXIge1xuICBmYWNldElkOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgbnVsbDtcbiAgc2VhcmNoSW46IEFycmF5PHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBvcGVyYXRvcj86IEZpbHRlck9wZXJhdG9ycztcbiAgfT47XG4gIGlzQXJyYXk/OiBib29sZWFuO1xuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsdGVyczogSUZpbHRlcltdID0gW107XG4gIHByaXZhdGUgX2ZhY2V0czogSUZhY2V0W10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuICBwcml2YXRlIF90b3RhbENvdW50OiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9jb25maWc6IElTZWFyY2hDb25maWc7XG4gIHByaXZhdGUgX3Jlc3VsdHMkOiBTdWJqZWN0PGFueVtdPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XG4gICAgdGhpcy5fc2V0UGFnZSgpO1xuICAgIHRoaXMuX3NldElucHV0cygpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgICB0aGlzLl9zZXRUb3RhbENvdW50KCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcbiAgcHVibGljIGdldEZpbHRlcnMgPSAoKSA9PiB0aGlzLl9maWx0ZXJzO1xuICBwdWJsaWMgZ2V0RmFjZXRzID0gKCkgPT4gdGhpcy5fZmFjZXRzO1xuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5fY29uZmlnO1xuICBwdWJsaWMgZ2V0VG90YWxDb3VudCA9ICgpID0+IHRoaXMuX3RvdGFsQ291bnQ7XG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcblxuICBwdWJsaWMgc2V0UmVzdWx0cyA9IHJlc3VsdHMgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIudmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmXG4gICAgICAgIGZpbHRlci52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBmaWx0ZXIudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gdmFsdWUgOiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaWQpLFxuICAgICAgICB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2lkXTtcblxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgaWYgKGZpbHRlci5pc0FycmF5KSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnLCcpIDogW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoeyBmYWNldElkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXRzKGZhY2V0cykge1xuICAgIGZhY2V0cy5mb3JFYWNoKCh7IGlkLCBkYXRhIH0pID0+IHRoaXMudXBkYXRlRmFjZXQoaWQsIGRhdGEpKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXQoZmFjZXRJZCwgZGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkRmFjZXRzID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYgKCFzZWxlY3RlZEZhY2V0cy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBGYWNldCB3aXRoIGlkICcke2ZhY2V0SWR9JyBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IChmYWNldC5kYXRhID0gZGF0YSkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gKGZpbHRlci52YWx1ZSA9IG51bGwpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldHM6IHRoaXMuX2dldFJlcXVlc3RGYWNldHMoKSxcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldEludGVybmFsRmlsdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyc1xuICAgICAgLmZpbHRlcihmaWx0ZXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGZpbHRlci5jb250ZXh0ID09PSAnaW50ZXJuYWwnICYmXG4gICAgICAgICAgKChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmxlbmd0aCkgfHxcbiAgICAgICAgICAgICghQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IGFueSA9IHt9O1xuICAgIGZpbHRlcnMuZm9yRWFjaChcbiAgICAgIGZpbHRlciA9PlxuICAgICAgICAocXVlcnlQYXJhbXNbZmlsdGVyLmZhY2V0SWRdID0gQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpXG4gICAgICAgICAgPyBmaWx0ZXIudmFsdWUuam9pbignLCcpXG4gICAgICAgICAgOiBmaWx0ZXIudmFsdWUpXG4gICAgKTtcblxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpIHtcbiAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldERhdGEoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0VGFyZ2V0KCkgPT09IHRhcmdldCksXG4gICAgICB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KSxcbiAgICAgIGZhY2V0ID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmID0+IGYuaWQgPT09IHRhcmdldClbMF0sXG4gICAgICBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgY29uc3Qgc2VhcmNoSW5zID0gW107XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF0sXG4gICAgICAgIHNlYXJjaEluID0gaW5wdXQuZ2V0U2VhcmNoSW4oKSxcbiAgICAgICAgdmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pKTtcblxuICAgIC8vIHVwZGF0ZVxuICAgIHRhcmdldElucHV0LnNldERhdGEoZmFjZXREYXRhKTtcbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5rZXkgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKHJ2ID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihydikgIT09IC0xKSB7XG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlICYmIHJlZlZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gIShcbiAgICAgICAgICAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YocmVmVmFsdWUpICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPT09IHJlZlZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgJiZcbiAgICAgIHJlZlZhbHVlICYmXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IHJlZlZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PlxuICAgICAgICB0aGlzLl9maWx0ZXJzLnB1c2goe1xuICAgICAgICAgIC4uLmlucHV0LmZpbHRlckNvbmZpZyxcbiAgICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZhY2V0cygpIHtcbiAgICB0aGlzLl9mYWNldHMgPSB0aGlzLl9jb25maWcuZmFjZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0UGFnZSgpIHtcbiAgICB0aGlzLl9wYWdlID0gdGhpcy5fY29uZmlnLnBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUb3RhbENvdW50KCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0cygpIHtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKHNlY3Rpb25Db25maWcsIHNlY3Rpb25JbmRleCkgPT4ge1xuICAgICAgc2VjdGlvbkNvbmZpZy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb25maWcsIGlucHV0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XG4gICAgICAgIGlmICghaW5wdXRNb2RlbCkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBJbnB1dCB0eXBlICR7aW5wdXRDb25maWcudHlwZX0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2goXG4gICAgICAgICAgbmV3IGlucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0c0RhdGEoKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZmFjZXQgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFJlcXVlc3RGYWNldHMoKSB7XG4gICAgY29uc3QgcmVzdWx0czogSUZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0gey4uLmZ9O1xuICAgICAgaWYgKCFmLmhhc1N0YXRpY0RhdGEpIHtcbiAgICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmRhdGE7XG4gICAgICB9XG4gICAgICBkZWxldGUgZmFjZXRDb25maWcuaGFzU3RhdGljRGF0YTtcblxuICAgICAgLy8gc2VhcmNoRGF0YSBjb250cm9sXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmYWNldENvbmZpZy5kYXRhKSkge1xuICAgICAgICBmYWNldENvbmZpZy5kYXRhXG4gICAgICAgICAgLmZpbHRlcihkYXRhSXRlbSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFJdGVtLnNlYXJjaERhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goZmFjZXRDb25maWcpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XG5cbiAgcHVibGljIGFkZChpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tpZF07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBTZWFyY2hNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsc1tpZF0gfHwgbnVsbDtcbiAgfVxufVxuIl19