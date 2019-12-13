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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDakIsTUFBTSxXQUFXLENBQUM7OztJQU1iLFVBQVUsR0FBRztJQUNqQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekI7O0lBRUssV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7SUFDekIsR0FBRyxFQUFHLHdCQUF3QjtJQUM5QixHQUFHLEVBQUcscUJBQXFCO0lBQzNCLElBQUksRUFBRyw0QkFBNEI7SUFDbkMsSUFBSSxFQUFHLHlCQUF5QjtJQUNoQyxJQUFJLEVBQUcscUJBQXFCO0lBQzVCLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUI7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQiwrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7Ozs7QUFHZCw0QkFPQzs7O0lBTkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIsNEJBQXNCOztJQUN0QixzQkFBVzs7Ozs7QUFHYiw2QkFVQzs7O0lBVEMsMEJBQWdCOztJQUNoQix3QkFBb0Q7O0lBQ3BELDJCQUdHOztJQUNILDBCQUFrQjs7SUFDbEIsMEJBQWtDOztJQUNsQyx5QkFBZ0I7O0FBR2xCO0lBVUUscUJBQVksRUFBVSxFQUFFLE1BQXFCO1FBQTdDLGlCQWdCQztRQXhCTyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFpQixFQUFFLENBQUM7UUFJM0IsY0FBUyxHQUFtQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBb0IzQyxVQUFLOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBUixDQUFRLEVBQUM7UUFDdkIsZUFBVTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksRUFBQztRQUMvQixjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLEVBQUM7UUFDL0IsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDO1FBQy9CLGtCQUFhOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBaEIsQ0FBZ0IsRUFBQztRQUN2QyxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQW5CLENBQW1CLEVBQUM7UUFDdEMsZ0JBQVc7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFkLENBQWMsRUFBQztRQUVuQyxlQUFVOzs7O1FBQUcsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsRUFBQztRQTFCMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0Qix1QkFBdUI7UUFDdkIsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0QsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7O0lBYU0sa0NBQVk7Ozs7OztJQUFuQixVQUFvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQWdCOztZQUM1QyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztRQUN6RCxlQUFlLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTtZQUM1QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDekMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssS0FBSyxFQUFkLENBQWMsRUFBQyxDQUFDO2FBQzVEO2lCQUFNLElBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbEM7Z0JBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sa0RBQTRCOzs7O0lBQW5DLFVBQW9DLFdBQVc7UUFBL0MsaUJBYUM7UUFaQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQU07Z0JBQUosVUFBRTs7Z0JBQ2xCLGVBQWUsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDOztnQkFDbEQsS0FBSyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFFekIsZUFBZSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQzVCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUNyQztZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sNkNBQXVCOzs7SUFBOUI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBa0I7Z0JBQWhCLG9CQUFPLEVBQUUsZ0JBQUs7WUFDckMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sa0NBQVk7Ozs7SUFBbkIsVUFBb0IsTUFBTTtRQUExQixpQkFHQztRQUZDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFZO2dCQUFWLFVBQUUsRUFBRSxjQUFJO1lBQU8sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7UUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLHNDQUFnQjs7OztJQUF2QixVQUF3QixVQUFVO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVNLGlDQUFXOzs7OztJQUFsQixVQUFtQixPQUFPLEVBQUUsSUFBSTs7WUFDeEIsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQXBCLENBQW9CLEVBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsTUFBTSxLQUFLLENBQUMsb0JBQWtCLE9BQU8sc0JBQW1CLENBQUMsQ0FBQztTQUMzRDtRQUVELGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRU0sMkJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRU0sc0NBQWdCOzs7SUFBdkI7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ25CLE1BQU07Ozs7WUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUE3QixDQUE2QixFQUFDO2lCQUMvQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUE0QjtvQkFBMUIsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLHNCQUFRO2dCQUFPLE9BQUEsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7WUFBOUIsQ0FBOEIsRUFBQztTQUN6RSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHdDQUFrQjs7O0lBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNqQixNQUFNOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ1osT0FBTyxDQUNMLE1BQU0sQ0FBQyxPQUFPLEtBQUssVUFBVTtnQkFDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNuRCxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xELENBQUM7UUFDSixDQUFDLEVBQUM7YUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUE0QjtnQkFBMUIsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLHNCQUFRO1lBQU8sT0FBQSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUE5QixDQUE4QixFQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFTSwwQ0FBb0I7Ozs7SUFBM0IsVUFBNEIsT0FBTzs7WUFDM0IsV0FBVyxHQUFRLEVBQUU7UUFDM0IsT0FBTyxDQUFDLE9BQU87Ozs7UUFDYixVQUFBLE1BQU07WUFDSixPQUFBLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRmpCLENBRWlCLEVBQ3BCLENBQUM7UUFFRixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLHlDQUFtQjs7OztJQUExQixVQUEyQixPQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRU0sdUNBQWlCOzs7O0lBQXhCLFVBQXlCLE9BQWU7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxPQUFPLEVBQTlCLENBQThCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTSxrQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsT0FBTyxFQUFFLElBQUk7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLGtDQUFZOzs7O0lBQW5CLFVBQW9CLE1BQU07UUFBMUIsaUJBcUJDOztZQXBCTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssTUFBTSxFQUE1QixDQUE0QixFQUFDOztZQUN2RSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs7WUFDNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWYsQ0FBZSxFQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNwRCxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUk7O1lBRWxCLFNBQVMsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLOztnQkFDWixNQUFNLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzVELFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFOztnQkFDOUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO1lBRXRCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztRQUU3RCxTQUFTO1FBQ1QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSw0Q0FBc0I7Ozs7SUFBN0IsVUFBOEIsT0FBTztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVNLDhDQUF3Qjs7OztJQUEvQixVQUFnQyxTQUFTO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0seUNBQW1COzs7O0lBQTFCLFVBQTJCLE1BQU07UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVNLHdDQUFrQjs7OztJQUF6QixVQUEwQixLQUFLO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVPLGlDQUFXOzs7Ozs7SUFBbkIsVUFBb0IsU0FBUyxFQUFFLElBQUk7UUFBbkMsaUJBMEJDO1FBekJDLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWpCLDBCQUFpQixFQUFoQixnQkFBUSxFQUFFLGFBQUs7WUFDakMsUUFBUSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQWlCO29CQUFmLFlBQUcsRUFBRSxzQkFBUTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLE9BQU87aUJBQ1I7O29CQUNHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ3BDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7d0JBQ2hFLGVBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLEVBQWtDOzRCQUFoQyxnQkFBWSxFQUFFLG9CQUFnQjt3QkFDdkQsSUFBSSxPQUFPLEtBQUssZUFBYSxFQUFFOzRCQUM3QixRQUFRLEdBQUcsU0FBUyxDQUFDO3lCQUN0QjtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM1RDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUFzQixRQUFRLG1CQUFnQixDQUFDLENBQUM7aUJBQzlEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyx1Q0FBaUI7Ozs7OztJQUF6QixVQUEwQixLQUFLLEVBQUUsUUFBUTtRQUN2QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDcEIsU0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQy9DLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsRUFBRTtvQkFDakIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUM1QixTQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUNoQjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsQ0FBQyxTQUFPLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7YUFBTTtZQUNMLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLENBQ04sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2hELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sNENBQXNCOzs7Ozs7SUFBOUIsVUFBK0IsS0FBSyxFQUFFLFFBQVE7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQUVPLHlDQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLEtBQUssRUFBRSxRQUFRO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFFTyxnREFBMEI7Ozs7OztJQUFsQyxVQUFtQyxLQUFLLEVBQUUsUUFBUTtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU8sNkNBQXVCOzs7Ozs7SUFBL0IsVUFBZ0MsS0FBSyxFQUFFLFFBQVE7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQUVPLHlDQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLEtBQUssRUFBRSxRQUFRO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFFTyxxQ0FBZTs7Ozs7O0lBQXZCLFVBQXdCLEtBQUssRUFBRSxRQUFRO1FBQ3JDLElBQ0UsS0FBSztZQUNMLFFBQVE7WUFDUixPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ3pCLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFDNUI7O2dCQUNNLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFOztnQkFDckMsTUFBTSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUVwQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU8saUNBQVc7Ozs7SUFBbkI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUN4QixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFDYixLQUFLLENBQUMsWUFBWSxJQUNyQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDdEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFDN0M7WUFKRixDQUlFLEVBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxnQ0FBVTs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyw4QkFBUTs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTyxvQ0FBYzs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTyxnQ0FBVTs7OztJQUFsQjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLGFBQWEsRUFBRSxZQUFZO1lBQ3RELGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLFdBQVcsRUFBRSxVQUFVOztvQkFDN0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLE1BQU0sS0FBSyxDQUFDLGdCQUFjLFdBQVcsQ0FBQyxJQUFJLG1CQUFnQixDQUFDLENBQUM7aUJBQzdEO2dCQUVELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksVUFBVSxzQkFBTSxXQUFXLElBQUUsVUFBVSxZQUFBLEVBQUUsWUFBWSxjQUFBLElBQUcsQ0FDN0QsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLG9DQUFjOzs7O0lBQXRCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVPLHVDQUFpQjs7OztJQUF6Qjs7WUFDUSxPQUFPLEdBQWEsRUFBRTtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUNkLFdBQVcsd0JBQU8sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFO2dCQUNwQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDekI7WUFDRCxPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFFakMscUJBQXFCO1lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLFdBQVcsQ0FBQyxJQUFJO3FCQUNiLE1BQU07Ozs7Z0JBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLFFBQVEsQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUExQyxDQUEwQyxFQUFDO3FCQUM5RCxPQUFPOzs7O2dCQUFDLFVBQUEsUUFBUTtvQkFDZixPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLENBQUMsRUFBQyxDQUFDO2FBQ047WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTlWRCxJQThWQzs7Ozs7OztJQTdWQywwQkFBb0I7Ozs7O0lBQ3BCLCtCQUFpQzs7Ozs7SUFDakMsOEJBQStCOzs7OztJQUMvQiw4QkFBbUM7Ozs7O0lBQ25DLDRCQUFtQjs7Ozs7SUFDbkIsa0NBQW1DOzs7OztJQUNuQyw4QkFBK0I7Ozs7O0lBQy9CLGdDQUFrRDs7SUFvQmxELDRCQUE4Qjs7SUFDOUIsaUNBQXdDOztJQUN4QyxnQ0FBc0M7O0lBQ3RDLGdDQUFzQzs7SUFDdEMsZ0NBQXNDOztJQUN0QyxvQ0FBOEM7O0lBQzlDLGdDQUE2Qzs7SUFDN0Msa0NBQTBDOztJQUUxQyxpQ0FBNEQ7O0FBMlQ5RDtJQUFBO1FBS1UsWUFBTyxHQUFRLEVBQUUsQ0FBQztLQWEzQjs7Ozs7O0lBWFEsMkJBQUc7Ozs7O0lBQVYsVUFBVyxFQUFVLEVBQUUsTUFBcUI7UUFDMUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sS0FBSyxDQUFDLG1CQUFpQixFQUFFLHNCQUFtQixDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLDZCQUFLOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQWJNLHlCQUFXLEdBQVEsSUFBSSxDQUFDOztnQkFKaEMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQS9aRDtDQSthQyxBQWxCRCxJQWtCQztTQWZZLGFBQWE7OztJQUN4QiwwQkFBK0I7Ozs7O0lBQy9CLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEZhY2V0SW5wdXQsXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0XG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9ycyA9ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJzw+JyB8ICdMSUtFJztcbmV4cG9ydCB0eXBlIEZhY2V0VHlwZXMgPSAndmFsdWUnIHwgJ3JhbmdlJztcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xuXG5jb25zdCBJTlBVVFNfTUFQID0ge1xuICBjaGVja2JveDogRmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBGYWNldElucHV0VGV4dCxcbiAgbGluazogRmFjZXRJbnB1dExpbmssXG4gIHNlbGVjdDogRmFjZXRJbnB1dFNlbGVjdFxufTtcblxuY29uc3QgRklMVEVSU19NQVAgPSB7XG4gICc9JyA6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JyA6ICdfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuJyxcbiAgJzwnIDogJ19maWx0ZXJEYXRhTGVzc1RoYW4nLFxuICAnPj0nIDogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JyA6ICdfZmlsdGVyRGF0YUxlc3NPckVxdWFscycsXG4gICc8PicgOiAnX2ZpbHRlckRhdGFOb3RFcXVhbCcsXG4gICdMSUtFJzogJ19maWx0ZXJEYXRhTGlrZSdcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENvbmZpZyB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgZmFjZXRzOiBhbnk7XG4gIHBhZ2U6IGFueTtcbiAgcmVzdWx0czogYW55O1xuICBmaWVsZHM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXQge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGhhc1N0YXRpY0RhdGE/OiBib29sZWFuO1xuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nO1xuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjtcbiAgaXNBcnJheT86IGJvb2xlYW47XG4gIGNvbnRleHQ/OiAnaW50ZXJuYWwnIHwgJ2V4dGVybmFsJztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9maWx0ZXJzOiBJRmlsdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfZmFjZXRzOiBJRmFjZXRbXSA9IFtdO1xuICBwcml2YXRlIF9pbnB1dHM6IEZhY2V0SW5wdXRbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZzogSVNlYXJjaENvbmZpZztcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjb25maWc6IElTZWFyY2hDb25maWcpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG4gIHB1YmxpYyBnZXRUb3RhbENvdW50ID0gKCkgPT4gdGhpcy5fdG90YWxDb3VudDtcbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gcmVzdWx0cyA9PiB0aGlzLl9yZXN1bHRzJC5uZXh0KHJlc3VsdHMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiZcbiAgICAgICAgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykge1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCksXG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdO1xuXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyLmlzQXJyYXkpIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGYWNldHMgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoYEZhY2V0IHdpdGggaWQgJyR7ZmFjZXRJZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goZmFjZXQgPT4gKGZhY2V0LmRhdGEgPSBkYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiAoZmlsdGVyLnZhbHVlID0gbnVsbCkpO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIHJlc3VsdHM6IHRoaXMuX2NvbmZpZy5yZXN1bHRzLFxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkgPT4gKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXG4gICAgICAuZmlsdGVyKGZpbHRlciA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCcgJiZcbiAgICAgICAgICAoKEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoKSB8fFxuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAubWFwKCh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSA9PiAoeyBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4gfSkpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtczogYW55ID0ge307XG4gICAgZmlsdGVycy5mb3JFYWNoKFxuICAgICAgZmlsdGVyID0+XG4gICAgICAgIChxdWVyeVBhcmFtc1tmaWx0ZXIuZmFjZXRJZF0gPSBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcbiAgICAgICAgICA/IGZpbHRlci52YWx1ZS5qb2luKCcsJylcbiAgICAgICAgICA6IGZpbHRlci52YWx1ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIuZmFjZXRJZCA9PT0gZmFjZXRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpID09PSBmYWNldElkKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnB1dERhdGEoZmFjZXRJZCwgZGF0YSkge1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KSxcbiAgICAgIHRhcmdldElucHV0ID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpLFxuICAgICAgZmFjZXQgPSB0aGlzLl9mYWNldHMuZmlsdGVyKGYgPT4gZi5pZCA9PT0gdGFyZ2V0KVswXSxcbiAgICAgIGZhY2V0RGF0YSA9IGZhY2V0LmRhdGE7XG5cbiAgICBjb25zdCBzZWFyY2hJbnMgPSBbXTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaW5wdXQuZ2V0RmFjZXRJZCgpKVswXSxcbiAgICAgICAgc2VhcmNoSW4gPSBpbnB1dC5nZXRTZWFyY2hJbigpLFxuICAgICAgICB2YWx1ZSA9IGZpbHRlci52YWx1ZTtcblxuICAgICAgc2VhcmNoSW5zLnB1c2goW3NlYXJjaEluLCB2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyXG4gICAgZmFjZXREYXRhLmZvckVhY2goaXRlbSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmtleSA9IG9yZGVyQnk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCkge1xuICAgIHRoaXMuX2NvbmZpZy5wYWdlLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnTGltaXQobGltaXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pIHtcbiAgICAvLyByZXNldFxuICAgIGl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgc2VhcmNoSW5zLmZvckVhY2goKFtzZWFyY2hJbiwgdmFsdWVdKSA9PiB7XG4gICAgICBzZWFyY2hJbi5mb3JFYWNoKCh7IGtleSwgb3BlcmF0b3IgfSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5oaWRkZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZlZhbHVlID0gX2dldChpdGVtLCBrZXksIG51bGwpO1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3NlYXJjaERhdGEnKSAhPT0gLTEgJiYgQXJyYXkuaXNBcnJheShpdGVtLnNlYXJjaERhdGEpKSB7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoRGF0YUtleSA9IGtleS5yZXBsYWNlKCdzZWFyY2hEYXRhLicsICcnKTtcbiAgICAgICAgICBpdGVtLnNlYXJjaERhdGEuZm9yRWFjaCgoeyBrZXk6IGRhdGFLZXksIHZhbHVlOiBkYXRhVmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXkgPT09IHNlYXJjaERhdGFLZXkpIHtcbiAgICAgICAgICAgICAgcmVmVmFsdWUgPSBkYXRhVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZlZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKEZJTFRFUlNfTUFQW29wZXJhdG9yXSkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdGhpc1tGSUxURVJTX01BUFtvcGVyYXRvcl1dKHZhbHVlLCByZWZWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTZWFyY2hJbjogb3BlcmF0b3IgJHtvcGVyYXRvcn0gbm90IHN1cHBvcnRlZGApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVmVmFsdWUpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IGluQXJyYXkgPSB2YWx1ZS5sZW5ndGggPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJlZlZhbHVlLmZvckVhY2gocnYgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKGluQXJyYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAhKFxuICAgICAgICAgICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUuaW5kZXhPZihyZWZWYWx1ZSkgIT09IC0xXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gcmVmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFHcmVhdGVyVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxlc3NUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlIDwgcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID49IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxlc3NPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFOb3RFcXVhbCh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSAhPT0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGlrZSh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAmJlxuICAgICAgcmVmVmFsdWUgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgcmV0dXJuICEoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZpbHRlcnMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+XG4gICAgICAgIHRoaXMuX2ZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXG4gICAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmFjZXRzKCkge1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xuICAgIHRoaXMuX3BhZ2UgPSB0aGlzLl9jb25maWcucGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRvdGFsQ291bnQoKSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRoaXMuX2NvbmZpZy50b3RhbENvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dE1vZGVsID0gSU5QVVRTX01BUFtpbnB1dENvbmZpZy50eXBlXTtcbiAgICAgICAgaWYgKCFpbnB1dE1vZGVsKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChcbiAgICAgICAgICBuZXcgaW5wdXRNb2RlbCh7IC4uLmlucHV0Q29uZmlnLCBpbnB1dEluZGV4LCBzZWN0aW9uSW5kZXggfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaChmYWNldCA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcbiAgICBjb25zdCByZXN1bHRzOiBJRmFjZXRbXSA9IFtdO1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7Li4uZn07XG4gICAgICBpZiAoIWYuaGFzU3RhdGljRGF0YSkge1xuICAgICAgICBkZWxldGUgZmFjZXRDb25maWcuZGF0YTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5oYXNTdGF0aWNEYXRhO1xuXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZhY2V0Q29uZmlnLmRhdGEpKSB7XG4gICAgICAgIGZhY2V0Q29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKGRhdGFJdGVtID0+IHR5cGVvZiBkYXRhSXRlbS5zZWFyY2hEYXRhICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaChkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHN0YXRpYyBxdWVyeVBhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2VhcmNoIG1vZGVsICcke2lkfScgYWxyZWFkeSBleGlzdHMhYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzW2lkXSA9IG5ldyBTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb2RlbChpZDogc3RyaW5nKTogU2VhcmNoTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==