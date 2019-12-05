/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FacetInputCheckbox, FacetInputText, FacetInputLink, FacetInputSelect, } from '../models';
import * as i0 from "@angular/core";
/** @type {?} */
const INPUTS_MAP = {
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
export class SearchModel {
    /**
     * @param {?} id
     * @param {?} config
     */
    constructor(id, config) {
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = (/**
         * @return {?}
         */
        () => this._id);
        this.getFilters = (/**
         * @return {?}
         */
        () => this._filters);
        this.getFacets = (/**
         * @return {?}
         */
        () => this._facets);
        this.getInputs = (/**
         * @return {?}
         */
        () => this._inputs);
        this.getConfig = (/**
         * @return {?}
         */
        () => this._config);
        this.getTotalCount = (/**
         * @return {?}
         */
        () => this._totalCount);
        this.getFields = (/**
         * @return {?}
         */
        () => this._config.fields);
        this.getResults$ = (/**
         * @return {?}
         */
        () => this._results$);
        this.setResults = (/**
         * @param {?} results
         * @return {?}
         */
        (results) => this._results$.next(results));
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
    updateFilter(facetId, value, remove) {
        /** @type {?} */
        const selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item !== value));
            }
            else if (Array.isArray(filter.value) && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? value : null;
            }
        }));
    }
    /**
     * @param {?} queryParams
     * @return {?}
     */
    updateFiltersFromQueryParams(queryParams) {
        Object.keys(queryParams).forEach((/**
         * @param {?} facetId
         * @return {?}
         */
        facetId => {
            /** @type {?} */
            const selectedFilters = this.getFiltersByFacetId(facetId);
            /** @type {?} */
            const value = queryParams[facetId];
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            filter => {
                filter.value = filter.isArray ? value.split(',') : value;
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputsFromFilters() {
        this._filters.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value }) => {
            this.getInputByFacetId(facetId).setActive(value);
        }));
    }
    /**
     * @param {?} facets
     * @return {?}
     */
    updateFacets(facets) {
        facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, data }) => this.updateFacet(id, data)));
        this._setInputsData();
    }
    /**
     * @param {?} totalCount
     * @return {?}
     */
    updateTotalCount(totalCount) {
        this._totalCount = totalCount;
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    updateFacet(facetId, data) {
        /** @type {?} */
        let selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === facetId));
        if (!selectedFacets.length) {
            throw Error(`Facet with id "${facetId}" does not exists`);
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.data = data));
    }
    /**
     * @return {?}
     */
    reset() {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => filter.value = null));
    }
    /**
     * @return {?}
     */
    getRequestParams() {
        return {
            facets: this._facets,
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            filter => filter.context !== 'internal'))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })))
        };
    }
    /**
     * @return {?}
     */
    getInternalFilters() {
        return this._filters
            .filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            return (filter.context === 'internal') && ((Array.isArray(filter.value) && filter.value.length) ||
                (!Array.isArray(filter.value) && filter.value));
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })));
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    filtersAsQueryParams(filters) {
        /** @type {?} */
        let queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => queryParams[filter.facetId] = Array.isArray(filter.value) ? filter.value.join(',') : filter.value));
        return queryParams;
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getFiltersByFacetId(facetId) {
        return this._filters.filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => filter.facetId === facetId));
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getInputByFacetId(facetId) {
        return this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId() === facetId))[0];
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    setInputData(facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    }
    /**
     * @param {?} target
     * @return {?}
     */
    filterTarget(target) {
        /** @type {?} */
        const inputs = this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getTarget() === target));
        /** @type {?} */
        const targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        const facet = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === target))[0];
        /** @type {?} */
        const facetData = facet.data;
        /** @type {?} */
        let searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => {
            /** @type {?} */
            const filter = this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            const searchIn = input.getSearchIn();
            /** @type {?} */
            const value = filter.value;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => this._filterData(searchIns, item)));
        // update
        targetInput.setData(facetData);
        targetInput.update();
    }
    /**
     * @param {?} orderBy
     * @return {?}
     */
    setSearchConfigOrderBy(orderBy) {
        this._config.results.order.type = orderBy;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setSearchConfigDirection(direction) {
        this._config.results.order.direction = direction;
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setPageConfigOffset(offset) {
        this._config.page.offset = offset;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setPageConfigLimit(limit) {
        this._config.page.limit = limit;
    }
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    _filterData(searchIns, item) {
        searchIns.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([searchIn, value]) => {
            searchIn.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key, operator }) => {
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
                            const haystack = item.metadata[key].toLowerCase();
                            /** @type {?} */
                            const needle = value.toLocaleLowerCase();
                            item.hidden = !(haystack.indexOf(needle) !== -1);
                        }
                        break;
                    default:
                        console.warn(`SearchIn: operator ${operator} not supported`);
                        break;
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setFilters() {
        this._config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            input => this._filters.push(Object.assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setFacets() {
        this._facets = this._config.facets;
    }
    /**
     * @private
     * @return {?}
     */
    _setPage() {
        this._page = this._config.page;
    }
    /**
     * @private
     * @return {?}
     */
    _setTotalCount() {
        this._totalCount = this._config.totalCount;
    }
    /**
     * @private
     * @return {?}
     */
    _setInputs() {
        this._config.fields.forEach((/**
         * @param {?} sectionConfig
         * @param {?} sectionIndex
         * @return {?}
         */
        (sectionConfig, sectionIndex) => {
            sectionConfig.inputs.forEach((/**
             * @param {?} inputConfig
             * @param {?} inputIndex
             * @return {?}
             */
            (inputConfig, inputIndex) => {
                /** @type {?} */
                const inputModel = INPUTS_MAP[inputConfig.type];
                if (!inputModel)
                    throw Error(`Input type ${inputConfig.type} not supported`);
                this._inputs.push(new inputModel(Object.assign({}, inputConfig, { inputIndex, sectionIndex })));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputsData() {
        this._facets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => this.setInputData(facet.id, facet.data)));
    }
}
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
export class SearchService {
    constructor() {
        this._models = {};
    }
    /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    add(id, config) {
        if (this._models[id])
            throw Error(`Search model "${id}" already exists!`);
        this._models[id] = new SearchModel(id, config);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    model(id) {
        return this._models[id] || null;
    }
}
SearchService.queryParams = null;
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchService.queryParams;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxXQUFXLENBQUM7OztNQU1iLFVBQVUsR0FBRztJQUNqQixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDM0I7Ozs7QUFFRCxtQ0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQiwrQkFBWTs7SUFDWiw2QkFBVTs7SUFDVixnQ0FBYTs7SUFDYiwrQkFBWTs7Ozs7QUFHZCw0QkFLQzs7O0lBSkMsb0JBQVc7O0lBQ1gsc0JBQWlCOztJQUNqQiwwQkFBeUI7O0lBQ3pCLHNCQUFXOzs7OztBQUdiLDZCQVVDOzs7SUFUQywwQkFBZ0I7O0lBQ2hCLHdCQUFvRDs7SUFDcEQsMkJBR0c7O0lBQ0gsMEJBQWtCOztJQUNsQiwwQkFBa0M7O0lBQ2xDLHlCQUFnQjs7QUFHbEIsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBVXRCLFlBQVksRUFBVSxFQUFFLE1BQXFCO1FBUnJDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQWlCLEVBQUUsQ0FBQztRQUkzQixjQUFTLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7UUFjM0MsVUFBSzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztR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QUFNLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDOztBQVZNLHlCQUFXLEdBQVEsSUFBSSxDQUFDOztZQUxoQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBR0MsMEJBQStCOzs7OztJQUQvQixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBcbiAgRmFjZXRJbnB1dCwgXG4gIEZhY2V0SW5wdXRDaGVja2JveCxcbiAgRmFjZXRJbnB1dFRleHQsXG4gIEZhY2V0SW5wdXRMaW5rLFxuICBGYWNldElucHV0U2VsZWN0LFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgJ2NoZWNrYm94JzogRmFjZXRJbnB1dENoZWNrYm94LFxuICAndGV4dCc6IEZhY2V0SW5wdXRUZXh0LFxuICAnbGluayc6IEZhY2V0SW5wdXRMaW5rLFxuICAnc2VsZWN0JzogRmFjZXRJbnB1dFNlbGVjdCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENvbmZpZyB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgZmFjZXRzOiBhbnk7XG4gIHBhZ2U6IGFueTtcbiAgcmVzdWx0czogYW55O1xuICBmaWVsZHM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXQge1xuICBpZDogc3RyaW5nLFxuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlciB7XG4gIGZhY2V0SWQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBudWxsO1xuICBzZWFyY2hJbjogQXJyYXk8e1xuICAgIGtleTogc3RyaW5nOyAgXG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XG4gIH0+OyAgXG4gIGlzQXJyYXk/OiBib29sZWFuO1xuICBjb250ZXh0PzogJ2ludGVybmFsJyB8ICdleHRlcm5hbCc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsdGVyczogSUZpbHRlcltdID0gW107XG4gIHByaXZhdGUgX2ZhY2V0czogSUZhY2V0W10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5wdXRzOiBGYWNldElucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuICBwcml2YXRlIF90b3RhbENvdW50OiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9jb25maWc6IElTZWFyY2hDb25maWc7XG4gIHByaXZhdGUgX3Jlc3VsdHMkOiBTdWJqZWN0PGFueVtdPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBJU2VhcmNoQ29uZmlnKXtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuICBwdWJsaWMgZ2V0RmlsdGVycyA9ICgpID0+IHRoaXMuX2ZpbHRlcnM7XG4gIHB1YmxpYyBnZXRGYWNldHMgPSAoKSA9PiB0aGlzLl9mYWNldHM7XG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLl9jb25maWc7XG4gIHB1YmxpYyBnZXRUb3RhbENvdW50ID0gKCkgPT4gdGhpcy5fdG90YWxDb3VudDtcbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG4gIHB1YmxpYyBnZXRSZXN1bHRzJCA9ICgpID0+IHRoaXMuX3Jlc3VsdHMkO1xuXG4gIHB1YmxpYyBzZXRSZXN1bHRzID0gKHJlc3VsdHMpID0+IHRoaXMuX3Jlc3VsdHMkLm5leHQocmVzdWx0cyk7XG4gIFxuICBwdWJsaWMgdXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKXtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gZmlsdGVyLnZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSl7XG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9ICFyZW1vdmUgPyB2YWx1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykge1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGZhY2V0SWQgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpLFxuICAgICAgICB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2ZhY2V0SWRdO1xuXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBmaWx0ZXIudmFsdWUgPSBmaWx0ZXIuaXNBcnJheSA/IHZhbHVlLnNwbGl0KCcsJykgOiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCl7XG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKCh7IGZhY2V0SWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzLmZvckVhY2goKHsgaWQsIGRhdGEgfSkgPT4gdGhpcy51cGRhdGVGYWNldChpZCwgZGF0YSkpO1xuICAgIHRoaXMuX3NldElucHV0c0RhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XG4gICAgbGV0IHNlbGVjdGVkRmFjZXRzID0gdGhpcy5fZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XG4gICAgaWYoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCl7XG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCBcIiR7ZmFjZXRJZH1cIiBkb2VzIG5vdCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IGZhY2V0LmRhdGEgPSBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpe1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLnZhbHVlID0gbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpe1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldHM6IHRoaXMuX2ZhY2V0cyxcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXIgPT4geyBcbiAgICAgICAgICByZXR1cm4gKGZpbHRlci5jb250ZXh0ID09PSAnaW50ZXJuYWwnKSAmJiAoXG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIGZpbHRlci52YWx1ZS5sZW5ndGgpIHx8IFxuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgZmlsdGVyLnZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKHsgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluIH0pID0+ICh7IGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyl7XG4gICAgbGV0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKSA/IGZpbHRlci52YWx1ZS5qb2luKCcsJykgOiBmaWx0ZXIudmFsdWUpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpe1xuICAgIHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCkuc2V0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQodGFyZ2V0KXtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpLFxuICAgICAgdGFyZ2V0SW5wdXQgPSB0aGlzLmdldElucHV0QnlGYWNldElkKHRhcmdldCksXG4gICAgICBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQuaWQgPT09IHRhcmdldClbMF0sXG4gICAgICBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xuXG4gICAgbGV0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpbnB1dC5nZXRGYWNldElkKCkpWzBdLFxuICAgICAgICBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCksXG4gICAgICAgIHZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgICBzZWFyY2hJbnMucHVzaChbc2VhcmNoSW4sIHZhbHVlXSk7XG4gICAgfSk7XG5cbiAgICAvLyBmaWx0ZXJcbiAgICBmYWNldERhdGEuZm9yRWFjaChpdGVtID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSlcblxuICAgIC8vIHVwZGF0ZVxuICAgIHRhcmdldElucHV0LnNldERhdGEoZmFjZXREYXRhKTtcbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpe1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLnR5cGUgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pe1xuICAgIHRoaXMuX2NvbmZpZy5yZXN1bHRzLm9yZGVyLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCl7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2Uub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VDb25maWdMaW1pdChsaW1pdCl7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKXtcbiAgICBzZWFyY2hJbnMuZm9yRWFjaCgoW3NlYXJjaEluLCB2YWx1ZV0pID0+IHtcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XG4gICAgICAgIHN3aXRjaChvcGVyYXRvcil7XG4gICAgICAgICAgLy8gJz0nIEVRVUFMU1xuICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe1xuICAgICAgICAgICAgICBpdGVtLmhpZGRlbiA9ICEoIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKGl0ZW0ubWV0YWRhdGFba2V5XSkgIT09IC0xKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc+JyBHUkVBVEVSIFRIQU5cbiAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA+IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJzwnIExFU1MgVEhBTlxuICAgICAgICAgIGNhc2UgJzwnOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA8IGl0ZW0ubWV0YWRhdGFba2V5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gJz49JyBHUkVBVEVSIE9SIEVRVUFMU1xuICAgICAgICAgIGNhc2UgJz49JzogXG4gICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheSh2YWx1ZSkpe1xuICAgICAgICAgICAgICBpdGVtLmhpZGRlbiA9ICEodmFsdWUgJiYgdmFsdWUgPj0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAnPD0nIExFU1MgT1IgRVFVQUxTXG4gICAgICAgICAgY2FzZSAnPD0nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSA8PSBpdGVtLm1ldGFkYXRhW2tleV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vICc8PicgTk9UIEVRVUFMXG4gICAgICAgICAgY2FzZSAnPD4nOiBcbiAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSl7XG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gISh2YWx1ZSAmJiB2YWx1ZSAhPT0gaXRlbS5tZXRhZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyAgJ0xJS0UnXG4gICAgICAgICAgY2FzZSAnTElLRSc6XG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgdmFsdWUgJiYgXG4gICAgICAgICAgICAgIGl0ZW0ubWV0YWRhdGFba2V5XSAmJiBcbiAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBcbiAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0ubWV0YWRhdGFba2V5XSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gaXRlbS5tZXRhZGF0YVtrZXldLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gIShoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmlsdGVycygpe1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB0aGlzLl9maWx0ZXJzLnB1c2goeyBcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEZhY2V0cygpe1xuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYWdlKCl7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpe1xuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0cygpe1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBzZWN0aW9uQ29uZmlnLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbmZpZywgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dE1vZGVsID0gSU5QVVRTX01BUFtpbnB1dENvbmZpZy50eXBlXTtcbiAgICAgICAgaWYoIWlucHV0TW9kZWwpIHRocm93IEVycm9yKGBJbnB1dCB0eXBlICR7aW5wdXRDb25maWcudHlwZX0gbm90IHN1cHBvcnRlZGApO1xuXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKG5ldyBpbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpe1xuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKGZhY2V0ID0+IHRoaXMuc2V0SW5wdXREYXRhKGZhY2V0LmlkLCBmYWNldC5kYXRhKSk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XG4gIHN0YXRpYyBxdWVyeVBhcmFtczogYW55ID0gbnVsbDtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogSVNlYXJjaENvbmZpZyl7XG4gICAgaWYodGhpcy5fbW9kZWxzW2lkXSkgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCBcIiR7aWR9XCIgYWxyZWFkeSBleGlzdHMhYCk7XG5cbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IFNlYXJjaE1vZGVsKGlkLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBTZWFyY2hNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsc1tpZF0gfHwgbnVsbDtcbiAgfVxufSJdfQ==