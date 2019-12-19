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
            /** @type {?} */
            var isInternal = _this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7OztJQU1iLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O0lBRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7SUFDekIsR0FBRyxFQUFHLHdCQUF3QjtJQUM5QixHQUFHLEVBQUcscUJBQXFCO0lBQzNCLElBQUksRUFBRyw0QkFBNEI7SUFDbkMsSUFBSSxFQUFHLHlCQUF5QjtJQUNoQyxJQUFJLEVBQUcscUJBQXFCO0lBQzVCLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUI7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQiwrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7Ozs7QUFHZCw0QkFPQzs7O0lBTkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIsNEJBQXNCOztJQUN0QixzQkFBVzs7Ozs7QUFHYiw2QkFVQzs7O0lBVEMsMEJBQWdCOztJQUNoQix3QkFBb0Q7O0lBQ3BELDJCQUdHOztJ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QTZDOztJQUM3QyxrQ0FBMEM7O0lBRTFDLGlDQUE0RDs7QUFnVTlEO0lBQUE7UUFLVSxZQUFPLEdBQVEsRUFBRSxDQUFDO0tBbUIzQjs7Ozs7O0lBakJRLDJCQUFHOzs7OztJQUFWLFVBQVcsRUFBVSxFQUFFLE1BQXFCO1FBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssQ0FBQyxtQkFBaUIsRUFBRSxzQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSw4QkFBTTs7OztJQUFiLFVBQWMsRUFBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSw2QkFBSzs7OztJQUFaLFVBQWEsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFuQk0seUJBQVcsR0FBUSxJQUFJLENBQUM7O2dCQUpoQyxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0JBcGFEO0NBMGJDLEFBeEJELElBd0JDO1NBckJZLGFBQWE7OztJQUN4QiwwQkFBK0I7Ozs7O0lBQy9CLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEZhY2V0SW5wdXQsXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0XG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcbiAgbGluazogRmFjZXRJbnB1dExpbmssXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdFxufTtcblxuY29uc3QgRklMVEVSU19NQVAgPSB7XG4gICc9JyA6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JyA6ICdfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuJyxcbiAgJzwnIDogJ19maWx0ZXJEYXRhTGVzc1RoYW4nLFxuICAnPj0nIDogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JyA6ICdfZmlsdGVyRGF0YUxlc3NPckVxdWFscycsXG4gICc8PicgOiAnX2ZpbHRlckRhdGFOb3RFcXVhbCcsXG4gICdMSUtFJzogJ19maWx0ZXJEYXRhTGlrZSdcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENvbmZpZyB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgZmFjZXRzOiBhbnk7XG4gIHBhZ2U6IGFueTtcbiAgcmVzdWx0czogYW55O1xuICBmaWVsZHM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXQge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGhhc1N0YXRpY0RhdGE/OiBib29sZWFuO1xuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nO1xuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjtcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9maWx0ZXJzOiBJRmlsdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfZmFjZXRzOiBJRmFjZXRbXSA9IFtdO1xuICBwcml2YXRlIF9pbnB1dHM6IEZhY2V0SW5wdXRbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZzogSVNlYXJjaENvbmZpZztcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG4gIHB1YmxpYyBnZXRUb3RhbENvdW50ID0gKCkgPT4gdGhpcy5fdG90YWxDb3VudDtcbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gcmVzdWx0cyA9PiB0aGlzLl9yZXN1bHRzJC5uZXh0KHJlc3VsdHMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiZcbiAgICAgICAgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykge1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCksXG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdLFxuICAgICAgICBpc0ludGVybmFsID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChpZCkuZ2V0Q29udGV4dCgpID09PSAnaW50ZXJuYWwnO1xuXG4gICAgICBpZiAoaXNJbnRlcm5hbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIuaXNBcnJheSkge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlID8gdmFsdWUgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0cyhmYWNldHMpIHtcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZhY2V0KGZhY2V0SWQsIGRhdGEpIHtcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQuaWQgPT09IGZhY2V0SWQpO1xuICAgIGlmICghc2VsZWN0ZWRGYWNldHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCAnJHtmYWNldElkfScgZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRGYWNldHMuZm9yRWFjaChmYWNldCA9PiAoZmFjZXQuZGF0YSA9IGRhdGEpKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IChmaWx0ZXIudmFsdWUgPSBudWxsKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRzOiB0aGlzLl9nZXRSZXF1ZXN0RmFjZXRzKCksXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgcmVzdWx0czogdGhpcy5fY29uZmlnLnJlc3VsdHMsXG4gICAgICBmaWx0ZXJzOiB0aGlzLl9maWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5jb250ZXh0ICE9PSAnaW50ZXJuYWwnKVxuICAgICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgIC5maWx0ZXIoZmlsdGVyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBmaWx0ZXIuY29udGV4dCA9PT0gJ2ludGVybmFsJyAmJlxuICAgICAgICAgICgoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZS5sZW5ndGgpIHx8XG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goXG4gICAgICBmaWx0ZXIgPT5cbiAgICAgICAgKHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxuICAgICAgICAgID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgIDogZmlsdGVyLnZhbHVlKVxuICAgICk7XG5cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkgPT09IGZhY2V0SWQpWzBdO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0RGF0YShmYWNldElkLCBkYXRhKSB7XG4gICAgdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKS5zZXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCh0YXJnZXQpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpLFxuICAgICAgdGFyZ2V0SW5wdXQgPSB0aGlzLmdldElucHV0QnlGYWNldElkKHRhcmdldCksXG4gICAgICBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZiA9PiBmLmlkID09PSB0YXJnZXQpWzBdLFxuICAgICAgZmFjZXREYXRhID0gZmFjZXQuZGF0YTtcblxuICAgIGNvbnN0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpbnB1dC5nZXRGYWNldElkKCkpWzBdLFxuICAgICAgICBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCksXG4gICAgICAgIHZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgICBzZWFyY2hJbnMucHVzaChbc2VhcmNoSW4sIHZhbHVlXSk7XG4gICAgfSk7XG5cbiAgICAvLyBmaWx0ZXJcbiAgICBmYWNldERhdGEuZm9yRWFjaChpdGVtID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0YXJnZXRJbnB1dC5zZXREYXRhKGZhY2V0RGF0YSk7XG4gICAgdGFyZ2V0SW5wdXQudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIua2V5ID0gb3JkZXJCeTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdPZmZzZXQob2Zmc2V0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2Uub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdMaW1pdChsaW1pdCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLmxpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkge1xuICAgIC8vIHJlc2V0XG4gICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICBzZWFyY2hJbnMuZm9yRWFjaCgoW3NlYXJjaEluLCB2YWx1ZV0pID0+IHtcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmhpZGRlbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmVmFsdWUgPSBfZ2V0KGl0ZW0sIGtleSwgbnVsbCk7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignc2VhcmNoRGF0YScpICE9PSAtMSAmJiBBcnJheS5pc0FycmF5KGl0ZW0uc2VhcmNoRGF0YSkpIHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhS2V5ID0ga2V5LnJlcGxhY2UoJ3NlYXJjaERhdGEuJywgJycpO1xuICAgICAgICAgIGl0ZW0uc2VhcmNoRGF0YS5mb3JFYWNoKCh7IGtleTogZGF0YUtleSwgdmFsdWU6IGRhdGFWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YUtleSA9PT0gc2VhcmNoRGF0YUtleSkge1xuICAgICAgICAgICAgICByZWZWYWx1ZSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoRklMVEVSU19NQVBbb3BlcmF0b3JdKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0aGlzW0ZJTFRFUlNfTUFQW29wZXJhdG9yXV0odmFsdWUsIHJlZlZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNlYXJjaEluOiBvcGVyYXRvciAke29wZXJhdG9yfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZWYWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgaW5BcnJheSA9IHZhbHVlLmxlbmd0aCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmVmVmFsdWUuZm9yRWFjaChydiA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YocnYpICE9PSAtMSkge1xuICAgICAgICAgICAgaW5BcnJheSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEoaW5BcnJheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSAmJiByZWZWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICEoXG4gICAgICAgICAgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKHJlZlZhbHVlKSAhPT0gLTFcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID09PSByZWZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID4gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc1RoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPCByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPj0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc09yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDw9IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YU5vdEVxdWFsKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlICE9PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMaWtlKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChcbiAgICAgIHZhbHVlICYmXG4gICAgICByZWZWYWx1ZSAmJlxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgdHlwZW9mIHJlZlZhbHVlID09PSAnc3RyaW5nJ1xuICAgICkge1xuICAgICAgY29uc3QgaGF5c3RhY2sgPSByZWZWYWx1ZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgICByZXR1cm4gIShoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmlsdGVycygpIHtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgZmllbGQuaW5wdXRzLmZvckVhY2goaW5wdXQgPT5cbiAgICAgICAgdGhpcy5fZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAuLi5pbnB1dC5maWx0ZXJDb25maWcsXG4gICAgICAgICAgZmFjZXRJZDogaW5wdXQuZmFjZXRJZCxcbiAgICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGYWNldHMoKSB7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKSB7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5fY29uZmlnLnRvdGFsQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZiAoIWlucHV0TW9kZWwpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxuICAgICAgICAgIG5ldyBpbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHNEYXRhKCkge1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IHRoaXMuc2V0SW5wdXREYXRhKGZhY2V0LmlkLCBmYWNldC5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSZXF1ZXN0RmFjZXRzKCkge1xuICAgIGNvbnN0IHJlc3VsdHM6IElGYWNldFtdID0gW107XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBmYWNldENvbmZpZyA9IHsuLi5mfTtcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XG4gICAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5kYXRhO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XG5cbiAgICAgIC8vIHNlYXJjaERhdGEgY29udHJvbFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcbiAgICAgICAgZmFjZXRDb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoZGF0YUl0ZW0gPT4gdHlwZW9mIGRhdGFJdGVtLnNlYXJjaERhdGEgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgIC5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhSXRlbS5zZWFyY2hEYXRhO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0cy5wdXNoKGZhY2V0Q29uZmlnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgc3RhdGljIHF1ZXJ5UGFyYW1zOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9tb2RlbHM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTZWFyY2ggbW9kZWwgJyR7aWR9JyBhbHJlYWR5IGV4aXN0cyFgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IFNlYXJjaE1vZGVsKGlkLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbaWRdO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb2RlbChpZDogc3RyaW5nKTogU2VhcmNoTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==