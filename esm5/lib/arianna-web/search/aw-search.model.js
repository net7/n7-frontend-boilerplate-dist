import { __assign, __read } from "tslib";
/* eslint-disable max-classes-per-file */
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { Subject } from 'rxjs';
import { AwFacetInputCheckbox, AwFacetInputText, AwFacetInputLink, AwFacetInputSelect, } from './aw-facet-inputs';
import helpers from '../../common/helpers';
var INPUTS_MAP = {
    checkbox: AwFacetInputCheckbox,
    text: AwFacetInputText,
    link: AwFacetInputLink,
    select: AwFacetInputSelect,
};
var FILTERS_MAP = {
    '=': '_filterDataEquals',
    '>': '_filterDataGreaterThan',
    '<': '_filterDataLessThan',
    '>=': '_filterDataGreaterOrEquals',
    '<=': '_filterDataLessOrEquals',
    '<>': '_filterDataNotEqual',
    LIKE: '_filterDataLike',
};
var AwSearchModel = /** @class */ (function () {
    function AwSearchModel(id, config) {
        var _this = this;
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = function () { return _this._id; };
        this.getFilters = function () { return _this._filters; };
        this.getFacets = function () { return _this._facets; };
        this.getInputs = function () { return _this._inputs; };
        this.getConfig = function () { return _this._config; };
        this.getTotalCount = function () { return _this._totalCount; };
        this.getFields = function () { return _this._config.fields; };
        this.getResults$ = function () { return _this._results$; };
        this.setResults = function (results) { return _this._results$.next(results); };
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
        if (AwSearchModel.queryParams) {
            this.updateFiltersFromQueryParams(AwSearchModel.queryParams);
            AwSearchModel.queryParams = null;
        }
    }
    AwSearchModel.prototype.updateFilter = function (facetId, value, remove) {
        var selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach(function (filter) {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter(function (item) { return item !== value; });
            }
            else if (Array.isArray(filter.value)
                && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? helpers.escapeDoubleQuotes(value) : null;
            }
        });
    };
    AwSearchModel.prototype.clear = function () {
        this.updateFiltersFromQueryParams({}, true);
        this._clearInputs();
    };
    AwSearchModel.prototype.updateFiltersFromQueryParams = function (queryParams, clearAll) {
        var _this = this;
        if (clearAll === void 0) { clearAll = false; }
        this._facets.forEach(function (_a) {
            var id = _a.id;
            var selectedFilters = _this.getFiltersByFacetId(id);
            var value = queryParams[id];
            var isInternal = _this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal && !clearAll) {
                return;
            }
            selectedFilters.forEach(function (filter) {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value || null;
                }
            });
        });
    };
    AwSearchModel.prototype.updateInputsFromFilters = function () {
        var _this = this;
        this._filters.forEach(function (_a) {
            var facetId = _a.facetId, value = _a.value;
            _this.getInputByFacetId(facetId).setActive(value);
        });
    };
    AwSearchModel.prototype.updateFacets = function (facets) {
        var _this = this;
        facets.forEach(function (_a) {
            var id = _a.id, data = _a.data;
            return _this.updateFacet(id, data);
        });
        this._setInputsData();
    };
    AwSearchModel.prototype.updateTotalCount = function (totalCount) {
        this._totalCount = totalCount;
    };
    AwSearchModel.prototype.updateFacet = function (facetId, data) {
        var selectedFacets = this._facets.filter(function (facet) { return facet.id === facetId; });
        if (!selectedFacets.length) {
            throw Error("Facet with id '" + facetId + "' does not exists");
        }
        selectedFacets.forEach(function (facet) { facet.data = data; });
    };
    AwSearchModel.prototype.reset = function () {
        this._filters.forEach(function (filter) { filter.value = null; });
    };
    AwSearchModel.prototype.getRequestParams = function () {
        return {
            facets: this._getRequestFacets(),
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter(function (filter) { return filter.context !== 'internal'; })
                .map(function (_a) {
                var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn, pagination = _a.pagination;
                return (pagination ? {
                    facetId: facetId, value: value, searchIn: searchIn, pagination: pagination
                } : {
                    facetId: facetId, value: value, searchIn: searchIn
                });
            }),
        };
    };
    AwSearchModel.prototype.getInternalFilters = function () {
        return this._filters
            .filter(function (filter) { return (filter.context === 'internal'
            && !_isEmpty(filter.value)); })
            .map(function (_a) {
            var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
            return ({
                facetId: facetId, value: value, searchIn: searchIn
            });
        });
    };
    AwSearchModel.prototype.filtersAsQueryParams = function (filters) {
        var queryParams = {};
        filters.forEach(function (filter) {
            queryParams[filter.facetId] = Array.isArray(filter.value)
                ? filter.value.join(',')
                : filter.value;
        });
        return queryParams;
    };
    AwSearchModel.prototype.getFiltersByFacetId = function (facetId) {
        return this._filters.filter(function (filter) { return filter.facetId === facetId; });
    };
    AwSearchModel.prototype.getInputByFacetId = function (facetId) {
        return this._inputs.filter(function (input) { return input.getFacetId() === facetId; })[0];
    };
    AwSearchModel.prototype.setInputData = function (facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    };
    AwSearchModel.prototype.filterTarget = function (target) {
        var _this = this;
        var inputs = this._inputs.filter(function (input) { return input.getTarget() === target; });
        var targetInput = this.getInputByFacetId(target);
        var facet = this._facets.filter(function (f) { return f.id === target; })[0];
        var facetData = facet.data;
        var searchIns = [];
        inputs.forEach(function (input) {
            var filter = _this.getFiltersByFacetId(input.getFacetId())[0];
            var searchIn = input.getSearchIn();
            var value = filter.value;
            searchIns.push([searchIn, value]);
        });
        // filter
        facetData.forEach(function (item) { return _this._filterData(searchIns, item); });
        // update
        targetInput.setData(facetData);
        if (targetInput.getConfig().emptyState) {
            var isEmpty = !facetData.filter(function (data) { return !data.hidden; }).length;
            targetInput.setIsEmpty(isEmpty);
        }
        targetInput.update();
    };
    AwSearchModel.prototype.setSearchConfigOrderBy = function (orderBy) {
        this._config.results.order.key = orderBy;
    };
    AwSearchModel.prototype.setSearchConfigDirection = function (direction) {
        this._config.results.order.direction = direction;
    };
    AwSearchModel.prototype.setSearchConfigType = function (type) {
        this._config.results.order.type = type;
    };
    AwSearchModel.prototype.setPageConfigOffset = function (offset) {
        this._config.page.offset = offset;
    };
    AwSearchModel.prototype.setPageConfigLimit = function (limit) {
        this._config.page.limit = limit;
    };
    AwSearchModel.prototype._clearInputs = function () {
        // do nothing
    };
    AwSearchModel.prototype._filterData = function (searchIns, item) {
        var _this = this;
        // reset
        item.hidden = false;
        searchIns.forEach(function (_a) {
            var _b = __read(_a, 2), searchIn = _b[0], value = _b[1];
            searchIn.forEach(function (_a) {
                var key = _a.key, operator = _a.operator;
                if (item.hidden) {
                    return;
                }
                var refValue = _get(item, key, null);
                if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                    var searchDataKey_1 = key.replace('searchData.', '');
                    item.searchData.forEach(function (_a) {
                        var dataKey = _a.key, dataValue = _a.value;
                        if (dataKey === searchDataKey_1) {
                            refValue = dataValue;
                        }
                    });
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
            });
        });
    };
    AwSearchModel.prototype._filterDataEquals = function (value, refValue) {
        if (Array.isArray(refValue)) {
            if (Array.isArray(value)) {
                var inArray_1 = value.length === 0;
                refValue.forEach(function (rv) {
                    if (value.indexOf(rv) !== -1) {
                        inArray_1 = true;
                    }
                });
                return !(inArray_1);
            }
            return !(value && refValue.indexOf(value) !== -1);
        }
        if (Array.isArray(value)) {
            return !(!value.length || value.indexOf(refValue) !== -1);
        }
        return !(value && value === refValue);
    };
    AwSearchModel.prototype._filterDataGreaterThan = function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value > refValue);
        }
        return false;
    };
    AwSearchModel.prototype._filterDataLessThan = function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value < refValue);
        }
        return false;
    };
    AwSearchModel.prototype._filterDataGreaterOrEquals = function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value >= refValue);
        }
        return false;
    };
    AwSearchModel.prototype._filterDataLessOrEquals = function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value <= refValue);
        }
        return false;
    };
    AwSearchModel.prototype._filterDataNotEqual = function (value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value !== refValue);
        }
        return false;
    };
    AwSearchModel.prototype._filterDataLike = function (value, refValue) {
        if (value
            && typeof value === 'string'
            && typeof refValue === 'string') {
            var haystack = refValue.toLowerCase();
            var needle = value.toLocaleLowerCase();
            return !(haystack.indexOf(needle) !== -1);
        }
        return false;
    };
    AwSearchModel.prototype._setFilters = function () {
        var _this = this;
        this._config.fields.forEach(function (field) {
            field.inputs.forEach(function (input) { return _this._filters.push(__assign(__assign({}, input.filterConfig), { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null })); });
        });
    };
    AwSearchModel.prototype._setFacets = function () {
        this._facets = this._config.facets;
    };
    AwSearchModel.prototype._setPage = function () {
        this._page = this._config.page;
    };
    AwSearchModel.prototype._setTotalCount = function () {
        this._totalCount = this._config.totalCount;
    };
    AwSearchModel.prototype._setInputs = function () {
        var _this = this;
        this._config.fields.forEach(function (sectionConfig, sectionIndex) {
            sectionConfig.inputs.forEach(function (inputConfig, inputIndex) {
                var InputModel = INPUTS_MAP[inputConfig.type];
                if (!InputModel) {
                    throw Error("Input type " + inputConfig.type + " not supported");
                }
                _this._inputs.push(new InputModel(__assign(__assign({}, inputConfig), { inputIndex: inputIndex, sectionIndex: sectionIndex })));
            });
        });
    };
    AwSearchModel.prototype._setInputsData = function () {
        var _this = this;
        this._facets.forEach(function (facet) { return _this.setInputData(facet.id, facet.data); });
    };
    AwSearchModel.prototype._getRequestFacets = function () {
        var results = [];
        this._facets.forEach(function (f) {
            var facetConfig = __assign({}, f);
            if (!f.hasStaticData) {
                delete facetConfig.data;
            }
            delete facetConfig.hasStaticData;
            // searchData control
            if (Array.isArray(facetConfig.data)) {
                facetConfig.data
                    .filter(function (dataItem) { return typeof dataItem.searchData !== 'undefined'; })
                    .forEach(function (dataItem) {
                    delete dataItem.searchData;
                });
            }
            results.push(facetConfig);
        });
        return results;
    };
    AwSearchModel.queryParams = null;
    return AwSearchModel;
}());
export { AwSearchModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctc2VhcmNoLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1zZWFyY2gubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6QyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBTTNDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7Q0FDM0IsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtJQUM3QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQW9DRjtJQW1CRSx1QkFBWSxFQUFVLEVBQUUsTUFBc0I7UUFBOUMsaUJBaUJDO1FBL0JPLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQVE3QixjQUFTLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7UUFxQjNDLFVBQUss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Tyx5Q0FBaUIsR0FBekI7UUFDRSxJQUFNLE9BQU8sR0FBWSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQ3JCLElBQU0sV0FBVyxnQkFBUSxDQUFDLENBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtnQkFDcEIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBRWpDLHFCQUFxQjtZQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQyxXQUFXLENBQUMsSUFBSTtxQkFDYixNQUFNLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxPQUFPLFFBQVEsQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUExQyxDQUEwQyxDQUFDO3FCQUNoRSxPQUFPLENBQUMsVUFBQyxRQUFRO29CQUNoQixPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQXRZTSx5QkFBVyxHQUFRLElBQUksQ0FBQztJQXVZakMsb0JBQUM7Q0FBQSxBQXhZRCxJQXdZQztTQXhZWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCB7IGdldCBhcyBfZ2V0LCBpc0VtcHR5IGFzIF9pc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF3RmFjZXRJbnB1dCxcbiAgQXdGYWNldElucHV0Q2hlY2tib3gsXG4gIEF3RmFjZXRJbnB1dFRleHQsXG4gIEF3RmFjZXRJbnB1dExpbmssXG4gIEF3RmFjZXRJbnB1dFNlbGVjdCxcbn0gZnJvbSAnLi9hdy1mYWNldC1pbnB1dHMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvcnMgPSAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICc8PicgfCAnTElLRSc7XG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XG5leHBvcnQgdHlwZSBGYWNldE9wZXJhdG9ycyA9ICdPUicgfCAnQU5EJztcblxuY29uc3QgSU5QVVRTX01BUCA9IHtcbiAgY2hlY2tib3g6IEF3RmFjZXRJbnB1dENoZWNrYm94LFxuICB0ZXh0OiBBd0ZhY2V0SW5wdXRUZXh0LFxuICBsaW5rOiBBd0ZhY2V0SW5wdXRMaW5rLFxuICBzZWxlY3Q6IEF3RmFjZXRJbnB1dFNlbGVjdCxcbn07XG5cbmNvbnN0IEZJTFRFUlNfTUFQID0ge1xuICAnPSc6ICdfZmlsdGVyRGF0YUVxdWFscycsXG4gICc+JzogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxuICAnPCc6ICdfZmlsdGVyRGF0YUxlc3NUaGFuJyxcbiAgJz49JzogJ19maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzJyxcbiAgJzw9JzogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcbiAgJzw+JzogJ19maWx0ZXJEYXRhTm90RXF1YWwnLFxuICBMSUtFOiAnX2ZpbHRlckRhdGFMaWtlJyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXdTZWFyY2hDb25maWcge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG4gIGZhY2V0czogYW55O1xuICBwYWdlOiBhbnk7XG4gIHJlc3VsdHM6IGFueTtcbiAgZmllbGRzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXQge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBGYWNldFR5cGVzO1xuICBvcGVyYXRvcjogRmFjZXRPcGVyYXRvcnM7XG4gIGhhc1N0YXRpY0RhdGE/OiBib29sZWFuO1xuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XG4gIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcbiAgZmFjZXRJZDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XG4gIHNlYXJjaEluOiBBcnJheTx7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XG4gIH0+O1xuICBpc0FycmF5PzogYm9vbGVhbjtcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHBhZ2luYXRpb24/OiB7XG4gICAgdG90YWxDb3VudDogbnVtYmVyO1xuICAgIGxpbWl0OiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaE1vZGVsIHtcbiAgc3RhdGljIHF1ZXJ5UGFyYW1zOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZmlsdGVyczogRmlsdGVyW10gPSBbXTtcblxuICBwcml2YXRlIF9mYWNldHM6IEZhY2V0W10gPSBbXTtcblxuICBwcml2YXRlIF9pbnB1dHM6IEF3RmFjZXRJbnB1dFtdID0gW107XG5cbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuXG4gIHByaXZhdGUgX3RvdGFsQ291bnQ6IG51bWJlciB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBBd1NlYXJjaENvbmZpZztcblxuICBwcml2YXRlIF9yZXN1bHRzJDogU3ViamVjdDxhbnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGNvbmZpZzogQXdTZWFyY2hDb25maWcpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX3NldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcbiAgICB0aGlzLl9zZXRQYWdlKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzKCk7XG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xuICAgIHRoaXMuX3NldFRvdGFsQ291bnQoKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4gICAgaWYgKEF3U2VhcmNoTW9kZWwucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhBd1NlYXJjaE1vZGVsLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIEF3U2VhcmNoTW9kZWwucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuX2lkO1xuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzID0gKCkgPT4gdGhpcy5fZmlsdGVycztcblxuICBwdWJsaWMgZ2V0RmFjZXRzID0gKCkgPT4gdGhpcy5fZmFjZXRzO1xuXG4gIHB1YmxpYyBnZXRJbnB1dHMgPSAoKSA9PiB0aGlzLl9pbnB1dHM7XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuX2NvbmZpZztcblxuICBwdWJsaWMgZ2V0VG90YWxDb3VudCA9ICgpID0+IHRoaXMuX3RvdGFsQ291bnQ7XG5cbiAgcHVibGljIGdldEZpZWxkcyA9ICgpID0+IHRoaXMuX2NvbmZpZy5maWVsZHM7XG5cbiAgcHVibGljIGdldFJlc3VsdHMkID0gKCkgPT4gdGhpcy5fcmVzdWx0cyQ7XG5cbiAgcHVibGljIHNldFJlc3VsdHMgPSAocmVzdWx0cykgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xuICAgIHNlbGVjdGVkRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSkgJiYgcmVtb3ZlKSB7XG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxuICAgICAgICAmJiBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyLnZhbHVlID0gIXJlbW92ZSA/IGhlbHBlcnMuZXNjYXBlRG91YmxlUXVvdGVzKHZhbHVlKSA6IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHt9LCB0cnVlKTtcbiAgICB0aGlzLl9jbGVhcklucHV0cygpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMsIGNsZWFyQWxsID0gZmFsc2UpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNCeUZhY2V0SWQoaWQpO1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVBhcmFtc1tpZF07XG4gICAgICBjb25zdCBpc0ludGVybmFsID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChpZCkuZ2V0Q29udGV4dCgpID09PSAnaW50ZXJuYWwnO1xuXG4gICAgICBpZiAoaXNJbnRlcm5hbCAmJiAhY2xlYXJBbGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIuaXNBcnJheSkge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCkge1xuICAgIHRoaXMuX2ZpbHRlcnMuZm9yRWFjaCgoeyBmYWNldElkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXRzKGZhY2V0cykge1xuICAgIGZhY2V0cy5mb3JFYWNoKCh7IGlkLCBkYXRhIH0pID0+IHRoaXMudXBkYXRlRmFjZXQoaWQsIGRhdGEpKTtcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KSB7XG4gICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmFjZXQoZmFjZXRJZCwgZGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkRmFjZXRzID0gdGhpcy5fZmFjZXRzLmZpbHRlcigoZmFjZXQpID0+IGZhY2V0LmlkID09PSBmYWNldElkKTtcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoYEZhY2V0IHdpdGggaWQgJyR7ZmFjZXRJZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHNlbGVjdGVkRmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7IGZhY2V0LmRhdGEgPSBkYXRhOyB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4geyBmaWx0ZXIudmFsdWUgPSBudWxsOyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldHM6IHRoaXMuX2dldFJlcXVlc3RGYWNldHMoKSxcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcbiAgICAgIGZpbHRlcnM6IHRoaXMuX2ZpbHRlcnNcbiAgICAgICAgLmZpbHRlcigoZmlsdGVyKSA9PiBmaWx0ZXIuY29udGV4dCAhPT0gJ2ludGVybmFsJylcbiAgICAgICAgLm1hcCgoe1xuICAgICAgICAgIGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJbiwgcGFnaW5hdGlvblxuICAgICAgICB9KSA9PiAocGFnaW5hdGlvbiA/IHtcbiAgICAgICAgICBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4sIHBhZ2luYXRpb25cbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW5cbiAgICAgICAgfSkpLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzXG4gICAgICAuZmlsdGVyKChmaWx0ZXIpID0+IChcbiAgICAgICAgZmlsdGVyLmNvbnRleHQgPT09ICdpbnRlcm5hbCdcbiAgICAgICAgJiYgIV9pc0VtcHR5KGZpbHRlci52YWx1ZSlcbiAgICAgICkpXG4gICAgICAubWFwKCh7XG4gICAgICAgIGZhY2V0SWQsIHZhbHVlLCBzZWFyY2hJblxuICAgICAgfSkgPT4gKHtcbiAgICAgICAgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluXG4gICAgICB9KSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcbiAgICBmaWx0ZXJzLmZvckVhY2goXG4gICAgICAoZmlsdGVyKSA9PiB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxuICAgICAgICAgID8gZmlsdGVyLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgIDogZmlsdGVyLnZhbHVlO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuZmlsdGVyKChmaWx0ZXIpID0+IGZpbHRlci5mYWNldElkID09PSBmYWNldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSA9PT0gZmFjZXRJZClbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXREYXRhKGZhY2V0SWQsIGRhdGEpIHtcbiAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldERhdGEoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUYXJnZXQoKSA9PT0gdGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXRJbnB1dCA9IHRoaXMuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICBjb25zdCBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGYpID0+IGYuaWQgPT09IHRhcmdldClbMF07XG4gICAgY29uc3QgZmFjZXREYXRhID0gZmFjZXQuZGF0YTtcblxuICAgIGNvbnN0IHNlYXJjaElucyA9IFtdO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGlucHV0LmdldEZhY2V0SWQoKSlbMF07XG4gICAgICBjb25zdCBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCk7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBmaWx0ZXI7XG5cbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLl9maWx0ZXJEYXRhKHNlYXJjaElucywgaXRlbSkpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgdGFyZ2V0SW5wdXQuc2V0RGF0YShmYWNldERhdGEpO1xuXG4gICAgaWYgKHRhcmdldElucHV0LmdldENvbmZpZygpLmVtcHR5U3RhdGUpIHtcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSAhZmFjZXREYXRhLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuaGlkZGVuKS5sZW5ndGg7XG4gICAgICB0YXJnZXRJbnB1dC5zZXRJc0VtcHR5KGlzRW1wdHkpO1xuICAgIH1cbiAgICB0YXJnZXRJbnB1dC51cGRhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5rZXkgPSBvcmRlckJ5O1xuICB9XG5cbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKSB7XG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIudHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ09mZnNldChvZmZzZXQpIHtcbiAgICB0aGlzLl9jb25maWcucGFnZS5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZUNvbmZpZ0xpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXRzKCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSB7XG4gICAgLy8gcmVzZXRcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgIHNlYXJjaElucy5mb3JFYWNoKChbc2VhcmNoSW4sIHZhbHVlXSkgPT4ge1xuICAgICAgc2VhcmNoSW4uZm9yRWFjaCgoeyBrZXksIG9wZXJhdG9yIH0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdzZWFyY2hEYXRhJykgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoaXRlbS5zZWFyY2hEYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGFLZXkgPSBrZXkucmVwbGFjZSgnc2VhcmNoRGF0YS4nLCAnJyk7XG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5ID09PSBzZWFyY2hEYXRhS2V5KSB7XG4gICAgICAgICAgICAgIHJlZlZhbHVlID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChGSUxURVJTX01BUFtvcGVyYXRvcl0pIHtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2VhcmNoSW46IG9wZXJhdG9yICR7b3BlcmF0b3J9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBpbkFycmF5ID0gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKChydikgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHJ2KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKGluQXJyYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgcmVmVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5pbmRleE9mKHJlZlZhbHVlKSAhPT0gLTFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlID09PSByZWZWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlclRoYW4odmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPiByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzT3JFcXVhbHModmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPD0gcmVmVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgIT09IHJlZlZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUxpa2UodmFsdWUsIHJlZlZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVcbiAgICAgICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICYmIHR5cGVvZiByZWZWYWx1ZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gcmVmVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiAhKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gdGhpcy5fZmlsdGVycy5wdXNoKHtcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxuICAgICAgICBmYWNldElkOiBpbnB1dC5mYWNldElkLFxuICAgICAgICB2YWx1ZTogaW5wdXQuZmlsdGVyQ29uZmlnLmlzQXJyYXkgPyBbXSA6IG51bGwsXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGYWNldHMoKSB7XG4gICAgdGhpcy5fZmFjZXRzID0gdGhpcy5fY29uZmlnLmZhY2V0cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldFBhZ2UoKSB7XG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5fY29uZmlnLnRvdGFsQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChzZWN0aW9uQ29uZmlnLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IElucHV0TW9kZWwgPSBJTlBVVFNfTUFQW2lucHV0Q29uZmlnLnR5cGVdO1xuICAgICAgICBpZiAoIUlucHV0TW9kZWwpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxuICAgICAgICAgIG5ldyBJbnB1dE1vZGVsKHsgLi4uaW5wdXRDb25maWcsIGlucHV0SW5kZXgsIHNlY3Rpb25JbmRleCB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXRzRGF0YSgpIHtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHRoaXMuc2V0SW5wdXREYXRhKGZhY2V0LmlkLCBmYWNldC5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSZXF1ZXN0RmFjZXRzKCkge1xuICAgIGNvbnN0IHJlc3VsdHM6IEZhY2V0W10gPSBbXTtcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3QgZmFjZXRDb25maWcgPSB7IC4uLmYgfTtcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XG4gICAgICAgIGRlbGV0ZSBmYWNldENvbmZpZy5kYXRhO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XG5cbiAgICAgIC8vIHNlYXJjaERhdGEgY29udHJvbFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcbiAgICAgICAgZmFjZXRDb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKGRhdGFJdGVtKSA9PiB0eXBlb2YgZGF0YUl0ZW0uc2VhcmNoRGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUl0ZW0uc2VhcmNoRGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChmYWNldENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiJdfQ==