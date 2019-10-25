/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect, } from '../models';
import * as i0 from "@angular/core";
/** @type {?} */
var INPUTS_MAP = {
    'checkbox': FacetInputCheckbox,
    'text': FacetInputText,
    'link': FacetInputLink,
    'select': FacetInputSelect,
};
/**
 * @record
 */
export function ISearchConfig() { }
if (false) {
    /** @type {?} */
    ISearchConfig.prototype.facets;
    /** @type {?} */
    ISearchConfig.prototype.page;
    /** @type {?} */
    ISearchConfig.prototype.results;
    /** @type {?} */
    ISearchConfig.prototype.fields;
    /** @type {?} */
    ISearchConfig.prototype.baseUrl;
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
            else if (Array.isArray(filter.value) && filter.value.indexOf(value) === -1) {
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
            _this._inputs
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.getFacetId() === facetId; }))
                .forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                input.setActive(value);
            }));
        }));
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
            throw Error("Facet with id \"" + facetId + "\" does not exists");
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.data = data; }));
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
        function (filter) { return filter.value = null; }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.getRequestParams = /**
     * @return {?}
     */
    function () {
        return {
            facets: this._facets,
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
            return (filter.context === 'internal') && ((Array.isArray(filter.value) && filter.value.length) ||
                (!Array.isArray(filter.value) && filter.value));
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
        function (filter) { return queryParams[filter.facetId] = Array.isArray(filter.value) ? filter.value.join(',') : filter.value; }));
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
        this._inputs
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getFacetId() === facetId; }))
            .forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.setData(data); }));
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
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === target; }))[0];
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
                switch (operator) {
                    // '=' EQUALS
                    case '=':
                        if (Array.isArray(value)) {
                            item.hidden = !(!value.length || value.indexOf(item.metadata[key]) !== -1);
                        }
                        else {
                            item.hidden = !(value && value === item.metadata[key]);
                        }
                        break;
                    // '>' GREATER THAN
                    case '>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value > item.metadata[key]);
                        }
                        break;
                    // '<' LESS THAN
                    case '<':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value < item.metadata[key]);
                        }
                        break;
                    // '>=' GREATER OR EQUALS
                    case '>=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value >= item.metadata[key]);
                        }
                        break;
                    // '<=' LESS OR EQUALS
                    case '<=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value <= item.metadata[key]);
                        }
                        break;
                    // '<>' NOT EQUAL
                    case '<>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value !== item.metadata[key]);
                        }
                        break;
                    //  'LIKE'
                    case 'LIKE':
                        if (value &&
                            item.metadata[key] &&
                            typeof value === 'string' &&
                            typeof item.metadata[key] === 'string') {
                            /** @type {?} */
                            var haystack = item.metadata[key].toLowerCase();
                            /** @type {?} */
                            var needle = value.toLocaleLowerCase();
                            item.hidden = !(haystack.indexOf(needle) !== -1);
                        }
                        break;
                    default:
                        console.warn("SearchIn: operator " + operator + " not supported");
                        break;
                }
            }));
        }));
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
                if (!inputModel)
                    throw Error("Input type " + inputConfig.type + " not supported");
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
        if (this._models[id])
            throw Error("Search model \"" + id + "\" already exists!");
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
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxXQUFXLENBQUM7OztJQU1iLFVBQVUsR0FBRztJQUNqQixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDM0I7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsK0JBQVk7O0lBQ1osNkJBQVU7O0lBQ1YsZ0NBQWE7O0lBQ2IsK0JBQVk7O0lBQ1osZ0NBQWdCOzs7OztBQUdsQiw0QkFLQzs7O0lBSkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLHNCQUFXOzs7OztBQUdiLDZCQVVDOzs7SUFUQywwQkFBZ0I7O0lBQ2hCLHdCQUFvRDs7SUFDcEQsMkJBR0c7O0lBQ0gsMEJBQWtCOztJQUNsQiwwQkFBa0M7O0lBQ2xDLHlCQUFnQjs7QUFHbEI7SUFTRSxxQkFBWSxFQUFVLEVBQUUsTUFBcUI7UUFBN0MsaUJBU0M7UUFoQk8sYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBaUIsRUFBRSxDQUFDO1FBRzNCLGNBQVMsR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWEzQyxVQUFLOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBUixDQUFRLEVBQUM7UUFD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QztJQUNqRCxDQUFDOzs7OztJQUVNLDZCQUFLOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQW5TRDtDQWdUQyxBQWZELElBZUM7U0FaWSxhQUFhOzs7Ozs7SUFDeEIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgXG4gIEZhY2V0SW5wdXQsIFxuICBGYWNldElucHV0Q2hlY2tib3gsXG4gIEZhY2V0SW5wdXRUZXh0LFxuICBGYWNldElucHV0TGluayxcbiAgRmFjZXRJbnB1dFNlbGVjdCxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JzID0gJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnPD4nIHwgJ0xJS0UnO1xuZXhwb3J0IHR5cGUgRmFjZXRUeXBlcyA9ICd2YWx1ZScgfCAncmFuZ2UnO1xuZXhwb3J0IHR5cGUgRmFjZXRPcGVyYXRvcnMgPSAnT1InIHwgJ0FORCc7XG5cbmNvbnN0IElOUFVUU19NQVAgPSB7XG4gICdjaGVja2JveCc6IEZhY2V0SW5wdXRDaGVja2JveCxcbiAgJ3RleHQnOiBGYWNldElucHV0VGV4dCxcbiAgJ2xpbmsnOiBGYWNldElucHV0TGluayxcbiAgJ3NlbGVjdCc6IEZhY2V0SW5wdXRTZWxlY3QsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hDb25maWcge1xuICBmYWNldHM6IGFueTtcbiAgcGFnZTogYW55O1xuICByZXN1bHRzOiBhbnk7XG4gIGZpZWxkczogYW55O1xuICBiYXNlVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0IHtcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZTogRmFjZXRUeXBlcztcbiAgb3BlcmF0b3I6IEZhY2V0T3BlcmF0b3JzO1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXIge1xuICBmYWNldElkOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgbnVsbDtcbiAgc2VhcmNoSW46IEFycmF5PHtcbiAgICBrZXk6IHN0cmluZzsgIFxuICAgIG9wZXJhdG9yPzogRmlsdGVyT3BlcmF0b3JzO1xuICB9PjsgIFxuICBpc0FycmF5PzogYm9vbGVhbjtcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbCB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbHRlcnM6IElGaWx0ZXJbXSA9IFtdO1xuICBwcml2YXRlIF9mYWNldHM6IElGYWNldFtdID0gW107XG4gIHByaXZhdGUgX2lucHV0czogRmFjZXRJbnB1dFtdID0gW107XG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJU2VhcmNoQ29uZmlnO1xuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZyl7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fc2V0RmFjZXRzKCk7XG4gICAgdGhpcy5fc2V0UGFnZSgpO1xuICAgIHRoaXMuX3NldElucHV0cygpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcblxuICBwdWJsaWMgc2V0UmVzdWx0cyA9IChyZXN1bHRzKSA9PiB0aGlzLl9yZXN1bHRzJC5uZXh0KHJlc3VsdHMpO1xuICBcbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKTtcbiAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSl7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpe1xuICAgICAgICBmaWx0ZXIudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gdmFsdWUgOiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpIHtcbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChmYWNldElkID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKSxcbiAgICAgICAgdmFsdWUgPSBxdWVyeVBhcmFtc1tmYWNldElkXTtcblxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLmlzQXJyYXkgPyB2YWx1ZS5zcGxpdCgnLCcpIDogdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpe1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoeyBmYWNldElkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLl9pbnB1dHNcbiAgICAgICAgLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkgPT09IGZhY2V0SWQpXG4gICAgICAgIC5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICBpbnB1dC5zZXRBY3RpdmUodmFsdWUpOyBcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgbGV0IHNlbGVjdGVkRmFjZXRzID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCl7XG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCBcIiR7ZmFjZXRJZH1cIiBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IGZhY2V0LmRhdGEgPSBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpe1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLnZhbHVlID0gbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpe1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldHM6IHRoaXMuX2ZhY2V0cyxcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4geyBcbiAgICAgICAgICByZXR1cm4gKGZpbHRlci5jb250ZXh0ID09PSAnaW50ZXJuYWwnKSAmJiAoXG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZS5sZW5ndGgpIHx8IFxuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyl7XG4gICAgbGV0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSA/IGZpbHRlci52YWx1ZS5qb2luKCcsJykgOiBmaWx0ZXIudmFsdWUpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpe1xuICAgIHRoaXMuX2lucHV0c1xuICAgICAgLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkgPT09IGZhY2V0SWQpXG4gICAgICAuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5zZXREYXRhKGRhdGEpKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KXtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpLFxuICAgICAgdGFyZ2V0SW5wdXQgPSB0aGlzLmdldElucHV0QnlGYWNldElkKHRhcmdldCksXG4gICAgICBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQuaWQgPT09IHRhcmdldClbMF0sXG4gICAgICBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgbGV0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpbnB1dC5nZXRGYWNldElkKCkpWzBdLFxuICAgICAgICBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCksXG4gICAgICAgIHZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgICBzZWFyY2hJbnMucHVzaChbc2VhcmNoSW4sIHZhbHVlXSk7XG4gICAgfSk7XG5cbiAgICAvLyBmaWx0ZXJcbiAgICBmYWNldERhdGEuZm9yRWFjaChpdGVtID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSlcblxuICAgIC8vIHVwZGF0ZVxuICAgIHRhcmdldElucHV0LnNldERhdGEoZmFjZXREYXRhKTtcbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKXtcbiAgICBzZWFyY2hJbnMuZm9yRWFjaCgoW3NlYXJjaEluLCB2YWx1ZV0pID0+IHtcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XG4gICAgICAgIHN3aXRjaChvcGVyYXRvcil7XG4gICAgICAgICAgLy8gJz0nIEVRVUFMU1xuICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe1xuICAgICAgICAgICAgICBpdGVtLmhpZGRlbiA9ICEoIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKGl0ZW0ubWV0YWRhdGFba2V5XSkgIT09IC0xKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc+JyBHUkVBVEVSIFRIQU5cbiAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA+IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJzwnIExFU1MgVEhBTlxuICAgICAgICAgIGNhc2UgJzwnOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA8IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJz49JyBHUkVBVEVSIE9SIEVRVUFMU1xuICAgICAgICAgIGNhc2UgJz49JzogXG4gICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheSh2YWx1ZSkpe1xuICAgICAgICAgICAgICBpdGVtLmhpZGRlbiA9ICEodmFsdWUgJiYgdmFsdWUgPj0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPD0nIExFU1MgT1IgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPD0nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA8PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc8PicgTk9UIEVRVUFMXG4gICAgICAgICAgY2FzZSAnPD4nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSAhPT0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAgJ0xJS0UnXG4gICAgICAgICAgY2FzZSAnTElLRSc6XG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgdmFsdWUgJiYgXG4gICAgICAgICAgICAgIGl0ZW0ubWV0YWRhdGFba2V5XSAmJiBcbiAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBcbiAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0ubWV0YWRhdGFba2V5XSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gaXRlbS5tZXRhZGF0YVtrZXldLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gIShoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmlsdGVycygpe1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB0aGlzLl9maWx0ZXJzLnB1c2goeyBcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZhY2V0cygpe1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCl7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzKCl7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZighaW5wdXRNb2RlbCkgdGhyb3cgRXJyb3IoYElucHV0IHR5cGUgJHtpbnB1dENvbmZpZy50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG5cbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2gobmV3IGlucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHNEYXRhKCl7XG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goZmFjZXQgPT4gdGhpcy5zZXRJbnB1dERhdGEoZmFjZXQuaWQsIGZhY2V0LmRhdGEpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZyl7XG4gICAgaWYodGhpcy5fbW9kZWxzW2lkXSkgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCBcIiR7aWR9XCIgYWxyZWFkeSBleGlzdHMhYCk7XG5cbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IFNlYXJjaE1vZGVsKGlkLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBTZWFyY2hNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsc1tpZF0gfHwgbnVsbDtcbiAgfVxufSJdfQ==