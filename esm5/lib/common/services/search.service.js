/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
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
        Object.keys(queryParams).forEach((/**
         * @param {?} facetId
         * @return {?}
         */
        function (facetId) {
            /** @type {?} */
            var selectedFilters = _this.getFiltersByFacetId(facetId);
            /** @type {?} */
            var value = queryParams[facetId];
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                filter.value = filter.isArray ? value.split(',') : value;
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
        this._config.results.order.type = orderBy;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2pCLE1BQU0sV0FBVyxDQUFDOzs7SUFNYixVQUFVLEdBQUc7SUFDakIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixJQUFJLEVBQUUsY0FBYztJQUNwQixJQUFJLEVBQUUsY0FBYztJQUNwQixNQUFNLEVBQUUsZ0JBQWdCO0NBQ3pCOztJQUVLLFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUcsbUJBQW1CO0lBQ3pCLEdBQUcsRUFBRyx3QkFBd0I7SUFDOUIsR0FBRyxFQUFHLHFCQUFxQjtJQUMzQixJQUFJLEVBQUcsNEJBQTRCO0lBQ25DLElBQUksRUFBRyx5QkFBeUI7SUFDaEMsSUFBSSxFQUFHLHFCQUFxQjtJQUM1QixNQUFNLEVBQUUsaUJBQWlCO0NBQzFCOzs7O0FBRUQsbUNBTUM7OztJQUxDLG1DQUFtQjs7SUFDbkIsK0JBQVk7O0lBQ1osNkJBQVU7O0lBQ1YsZ0NBQWE7O0lBQ2IsK0JBQVk7Ozs7O0FBR2QsNEJBT0M7OztJQU5DLG9CQUFXOztJQUNYLHNCQUFpQjs7SUFDakIsMEJBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLDRCQUFzQjs7SUFDdEIsc0JBQVc7Ozs7O0FBR2IsNkJBVUM7OztJQVRDLDBCQUFnQjs7SUFDaEIsd0JBQW9EOztJQUNwRCwyQkFHRzs7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QUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBYk0seUJBQVcsR0FBUSxJQUFJLENBQUM7O2dCQUpoQyxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0JBclpEO0NBcWFDLEFBbEJELElBa0JDO1NBZlksYUFBYTs7O0lBQ3hCLDBCQUErQjs7Ozs7SUFDL0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRmFjZXRJbnB1dCxcbiAgRmFjZXRJbnB1dENoZWNrYm94LFxuICBGYWNldElucHV0VGV4dCxcbiAgRmFjZXRJbnB1dExpbmssXG4gIEZhY2V0SW5wdXRTZWxlY3Rcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JzID0gJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnPD4nIHwgJ0xJS0UnO1xuZXhwb3J0IHR5cGUgRmFjZXRUeXBlcyA9ICd2YWx1ZScgfCAncmFuZ2UnO1xuZXhwb3J0IHR5cGUgRmFjZXRPcGVyYXRvcnMgPSAnT1InIHwgJ0FORCc7XG5cbmNvbnN0IElOUFVUU19NQVAgPSB7XG4gIGNoZWNrYm94OiBGYWNldElucHV0Q2hlY2tib3gsXG4gIHRleHQ6IEZhY2V0SW5wdXRUZXh0LFxuICBsaW5rOiBGYWNldElucHV0TGluayxcbiAgc2VsZWN0OiBGYWNldElucHV0U2VsZWN0XG59O1xuXG5jb25zdCBGSUxURVJTX01BUCA9IHtcbiAgJz0nIDogJ19maWx0ZXJEYXRhRXF1YWxzJyxcbiAgJz4nIDogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxuICAnPCcgOiAnX2ZpbHRlckRhdGFMZXNzVGhhbicsXG4gICc+PScgOiAnX2ZpbHRlckRhdGFHcmVhdGVyT3JFcXVhbHMnLFxuICAnPD0nIDogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcbiAgJzw+JyA6ICdfZmlsdGVyRGF0YU5vdEVxdWFsJyxcbiAgJ0xJS0UnOiAnX2ZpbHRlckRhdGFMaWtlJ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoQ29uZmlnIHtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IEZhY2V0VHlwZXM7XG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcbiAgaGFzU3RhdGljRGF0YT86IGJvb2xlYW47XG4gIHNlYXJjaERhdGE/OiBzdHJpbmdbXTtcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyIHtcbiAgZmFjZXRJZDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XG4gIHNlYXJjaEluOiBBcnJheTx7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XG4gIH0+O1xuICBpc0FycmF5PzogYm9vbGVhbjtcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbCB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbHRlcnM6IElGaWx0ZXJbXSA9IFtdO1xuICBwcml2YXRlIF9mYWNldHM6IElGYWNldFtdID0gW107XG4gIHByaXZhdGUgX2lucHV0czogRmFjZXRJbnB1dFtdID0gW107XG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcbiAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJU2VhcmNoQ29uZmlnO1xuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZykge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fc2V0RmlsdGVycygpO1xuICAgIHRoaXMuX3NldEZhY2V0cygpO1xuICAgIHRoaXMuX3NldFBhZ2UoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHMoKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xuICB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5faWQ7XG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcbiAgcHVibGljIGdldEZhY2V0cyA9ICgpID0+IHRoaXMuX2ZhY2V0cztcbiAgcHVibGljIGdldElucHV0cyA9ICgpID0+IHRoaXMuX2lucHV0cztcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcbiAgcHVibGljIGdldFRvdGFsQ291bnQgPSAoKSA9PiB0aGlzLl90b3RhbENvdW50O1xuICBwdWJsaWMgZ2V0RmllbGRzID0gKCkgPT4gdGhpcy5fY29uZmlnLmZpZWxkcztcbiAgcHVibGljIGdldFJlc3VsdHMkID0gKCkgPT4gdGhpcy5fcmVzdWx0cyQ7XG5cbiAgcHVibGljIHNldFJlc3VsdHMgPSByZXN1bHRzID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcbiAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiByZW1vdmUpIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJlxuICAgICAgICBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gIXJlbW92ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSB7XG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goZmFjZXRJZCA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCksXG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNbZmFjZXRJZF07XG5cbiAgICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci5pc0FycmF5ID8gdmFsdWUuc3BsaXQoJywnKSA6IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoYEZhY2V0IHdpdGggaWQgJyR7ZmFjZXRJZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goZmFjZXQgPT4gKGZhY2V0LmRhdGEgPSBkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiAoZmlsdGVyLnZhbHVlID0gbnVsbCkpO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXG4gICAgICAuZmlsdGVyKGZpbHRlciA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCcgJiZcbiAgICAgICAgICAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKSB8fFxuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtczogYW55ID0ge307XG4gICAgZmlsdGVycy5mb3JFYWNoKFxuICAgICAgZmlsdGVyID0+XG4gICAgICAgIChxdWVyeVBhcmFtc1tmaWx0ZXIuZmFjZXRJZF0gPSBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcbiAgICAgICAgICA/IGZpbHRlci52YWx1ZS5qb2luKCcsJylcbiAgICAgICAgICA6IGZpbHRlci52YWx1ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuZmFjZXRJZCA9PT0gZmFjZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KSxcbiAgICAgIHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpLFxuICAgICAgZmFjZXQgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGYgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXSxcbiAgICAgIGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XG5cbiAgICBjb25zdCBzZWFyY2hJbnMgPSBbXTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXSxcbiAgICAgICAgc2VhcmNoSW4gPSBpbnB1dC5nZXRTZWFyY2hJbigpLFxuICAgICAgICB2YWx1ZSA9IGZpbHRlci52YWx1ZTtcblxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyXG4gICAgZmFjZXREYXRhLmZvckVhY2goaXRlbSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLnR5cGUgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKHJ2ID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihydikgIT09IC0xKSB7XG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlICYmIHJlZlZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gIShcbiAgICAgICAgICAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YocmVmVmFsdWUpICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPT09IHJlZlZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgJiZcbiAgICAgIHJlZlZhbHVlICYmXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IHJlZlZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PlxuICAgICAgICB0aGlzLl9maWx0ZXJzLnB1c2goe1xuICAgICAgICAgIC4uLmlucHV0LmZpbHRlckNvbmZpZyxcbiAgICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICAgIHZhbHVlOiBpbnB1dC5maWx0ZXJDb25maWcuaXNBcnJheSA/IFtdIDogbnVsbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZhY2V0cygpIHtcbiAgICB0aGlzLl9mYWNldHMgPSB0aGlzLl9jb25maWcuZmFjZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0UGFnZSgpIHtcbiAgICB0aGlzLl9wYWdlID0gdGhpcy5fY29uZmlnLnBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUb3RhbENvdW50KCkge1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0cygpIHtcbiAgICB0aGlzLl9jb25maWcuZmllbGRzLmZvckVhY2goKHNlY3Rpb25Db25maWcsIHNlY3Rpb25JbmRleCkgPT4ge1xuICAgICAgc2VjdGlvbkNvbmZpZy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb25maWcsIGlucHV0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XG4gICAgICAgIGlmICghaW5wdXRNb2RlbCkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBJbnB1dCB0eXBlICR7aW5wdXRDb25maWcudHlwZX0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2goXG4gICAgICAgICAgbmV3IGlucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0c0RhdGEoKSB7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZmFjZXQgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFJlcXVlc3RGYWNldHMoKSB7XG4gICAgY29uc3QgcmVzdWx0czogSUZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0gey4uLmZ9O1xuICAgICAgaWYgKCFmLmhhc1N0YXRpY0RhdGEpIHtcbiAgICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmRhdGE7XG4gICAgICB9XG4gICAgICBkZWxldGUgZmFjZXRDb25maWcuaGFzU3RhdGljRGF0YTtcblxuICAgICAgLy8gc2VhcmNoRGF0YSBjb250cm9sXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmYWNldENvbmZpZy5kYXRhKSkge1xuICAgICAgICBmYWNldENvbmZpZy5kYXRhXG4gICAgICAgICAgLmZpbHRlcihkYXRhSXRlbSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFJdGVtLnNlYXJjaERhdGE7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goZmFjZXRDb25maWcpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XG5cbiAgcHVibGljIGFkZChpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgU2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IFNlYXJjaE1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzW2lkXSB8fCBudWxsO1xuICB9XG59XG4iXX0=