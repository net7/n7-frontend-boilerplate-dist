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
                filter.value = !remove ? helpers.escapeQuotes(value) : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctc2VhcmNoLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1zZWFyY2gubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6QyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBTTNDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7Q0FDM0IsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHO0lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtJQUM3QixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQW9DRjtJQW1CRSx1QkFBWSxFQUFVLEVBQUUsTUFBc0I7UUFBOUMsaUJBaUJDO1FBL0JPLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQVE3QixjQUFTLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7UUFxQjNDLFVBQUss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eUNBQWlCLEdBQXpCO1FBQ0UsSUFBTSxPQUFPLEdBQVksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNyQixJQUFNLFdBQVcsZ0JBQVEsQ0FBQyxDQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQzthQUN6QjtZQUNELE9BQU8sV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUVqQyxxQkFBcUI7WUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkMsV0FBVyxDQUFDLElBQUk7cUJBQ2IsTUFBTSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsT0FBTyxRQUFRLENBQUMsVUFBVSxLQUFLLFdBQVcsRUFBMUMsQ0FBMEMsQ0FBQztxQkFDaEUsT0FBTyxDQUFDLFVBQUMsUUFBUTtvQkFDaEIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUF0WU0seUJBQVcsR0FBUSxJQUFJLENBQUM7SUF1WWpDLG9CQUFDO0NBQUEsQUF4WUQsSUF3WUM7U0F4WVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0LCBpc0VtcHR5IGFzIF9pc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEF3RmFjZXRJbnB1dCxcclxuICBBd0ZhY2V0SW5wdXRDaGVja2JveCxcclxuICBBd0ZhY2V0SW5wdXRUZXh0LFxyXG4gIEF3RmFjZXRJbnB1dExpbmssXHJcbiAgQXdGYWNldElucHV0U2VsZWN0LFxyXG59IGZyb20gJy4vYXctZmFjZXQtaW5wdXRzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JzID0gJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnPD4nIHwgJ0xJS0UnO1xyXG5leHBvcnQgdHlwZSBGYWNldFR5cGVzID0gJ3ZhbHVlJyB8ICdyYW5nZSc7XHJcbmV4cG9ydCB0eXBlIEZhY2V0T3BlcmF0b3JzID0gJ09SJyB8ICdBTkQnO1xyXG5cclxuY29uc3QgSU5QVVRTX01BUCA9IHtcclxuICBjaGVja2JveDogQXdGYWNldElucHV0Q2hlY2tib3gsXHJcbiAgdGV4dDogQXdGYWNldElucHV0VGV4dCxcclxuICBsaW5rOiBBd0ZhY2V0SW5wdXRMaW5rLFxyXG4gIHNlbGVjdDogQXdGYWNldElucHV0U2VsZWN0LFxyXG59O1xyXG5cclxuY29uc3QgRklMVEVSU19NQVAgPSB7XHJcbiAgJz0nOiAnX2ZpbHRlckRhdGFFcXVhbHMnLFxyXG4gICc+JzogJ19maWx0ZXJEYXRhR3JlYXRlclRoYW4nLFxyXG4gICc8JzogJ19maWx0ZXJEYXRhTGVzc1RoYW4nLFxyXG4gICc+PSc6ICdfZmlsdGVyRGF0YUdyZWF0ZXJPckVxdWFscycsXHJcbiAgJzw9JzogJ19maWx0ZXJEYXRhTGVzc09yRXF1YWxzJyxcclxuICAnPD4nOiAnX2ZpbHRlckRhdGFOb3RFcXVhbCcsXHJcbiAgTElLRTogJ19maWx0ZXJEYXRhTGlrZScsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF3U2VhcmNoQ29uZmlnIHtcclxuICB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgZmFjZXRzOiBhbnk7XHJcbiAgcGFnZTogYW55O1xyXG4gIHJlc3VsdHM6IGFueTtcclxuICBmaWVsZHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBGYWNldFR5cGVzO1xyXG4gIG9wZXJhdG9yOiBGYWNldE9wZXJhdG9ycztcclxuICBoYXNTdGF0aWNEYXRhPzogYm9vbGVhbjtcclxuICBzZWFyY2hEYXRhPzogc3RyaW5nW107XHJcbiAgZGF0YT86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xyXG4gIGZhY2V0SWQ6IHN0cmluZztcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgKG51bWJlciB8IHN0cmluZylbXSB8IG51bGw7XHJcbiAgc2VhcmNoSW46IEFycmF5PHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgb3BlcmF0b3I/OiBGaWx0ZXJPcGVyYXRvcnM7XHJcbiAgfT47XHJcbiAgaXNBcnJheT86IGJvb2xlYW47XHJcbiAgY29udGV4dD86ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnO1xyXG4gIHRhcmdldD86IHN0cmluZztcclxuICBwYWdpbmF0aW9uPzoge1xyXG4gICAgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gICAgbGltaXQ6IG51bWJlcjtcclxuICAgIG9mZnNldDogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NlYXJjaE1vZGVsIHtcclxuICBzdGF0aWMgcXVlcnlQYXJhbXM6IGFueSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2ZhY2V0czogRmFjZXRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9pbnB1dHM6IEF3RmFjZXRJbnB1dFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBBd1NlYXJjaENvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IFN1YmplY3Q8YW55W10+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY29uZmlnOiBBd1NlYXJjaENvbmZpZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICB0aGlzLl9zZXRGaWx0ZXJzKCk7XHJcbiAgICB0aGlzLl9zZXRGYWNldHMoKTtcclxuICAgIHRoaXMuX3NldFBhZ2UoKTtcclxuICAgIHRoaXMuX3NldElucHV0cygpO1xyXG4gICAgdGhpcy5fc2V0SW5wdXRzRGF0YSgpO1xyXG4gICAgdGhpcy5fc2V0VG90YWxDb3VudCgpO1xyXG5cclxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuICAgIGlmIChBd1NlYXJjaE1vZGVsLnF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhBd1NlYXJjaE1vZGVsLnF1ZXJ5UGFyYW1zKTtcclxuICAgICAgQXdTZWFyY2hNb2RlbC5xdWVyeVBhcmFtcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLl9pZDtcclxuXHJcbiAgcHVibGljIGdldEZpbHRlcnMgPSAoKSA9PiB0aGlzLl9maWx0ZXJzO1xyXG5cclxuICBwdWJsaWMgZ2V0RmFjZXRzID0gKCkgPT4gdGhpcy5fZmFjZXRzO1xyXG5cclxuICBwdWJsaWMgZ2V0SW5wdXRzID0gKCkgPT4gdGhpcy5faW5wdXRzO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5fY29uZmlnO1xyXG5cclxuICBwdWJsaWMgZ2V0VG90YWxDb3VudCA9ICgpID0+IHRoaXMuX3RvdGFsQ291bnQ7XHJcblxyXG4gIHB1YmxpYyBnZXRGaWVsZHMgPSAoKSA9PiB0aGlzLl9jb25maWcuZmllbGRzO1xyXG5cclxuICBwdWJsaWMgZ2V0UmVzdWx0cyQgPSAoKSA9PiB0aGlzLl9yZXN1bHRzJDtcclxuXHJcbiAgcHVibGljIHNldFJlc3VsdHMgPSAocmVzdWx0cykgPT4gdGhpcy5fcmVzdWx0cyQubmV4dChyZXN1bHRzKTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlPzogYm9vbGVhbikge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpO1xyXG4gICAgc2VsZWN0ZWRGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIudmFsdWUpICYmIHJlbW92ZSkge1xyXG4gICAgICAgIGZpbHRlci52YWx1ZSA9IGZpbHRlci52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBBcnJheS5pc0FycmF5KGZpbHRlci52YWx1ZSlcclxuICAgICAgICAmJiBmaWx0ZXIudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xXHJcbiAgICAgICkge1xyXG4gICAgICAgIGZpbHRlci52YWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXIudmFsdWUgPSAhcmVtb3ZlID8gaGVscGVycy5lc2NhcGVRdW90ZXModmFsdWUpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoe30sIHRydWUpO1xyXG4gICAgdGhpcy5fY2xlYXJJbnB1dHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBjbGVhckFsbCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9mYWNldHMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpZCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNbaWRdO1xyXG4gICAgICBjb25zdCBpc0ludGVybmFsID0gdGhpcy5nZXRJbnB1dEJ5RmFjZXRJZChpZCkuZ2V0Q29udGV4dCgpID09PSAnaW50ZXJuYWwnO1xyXG5cclxuICAgICAgaWYgKGlzSW50ZXJuYWwgJiYgIWNsZWFyQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3RlZEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc0FycmF5KSB7XHJcbiAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KCcsJykgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzLmZvckVhY2goKHsgZmFjZXRJZCwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldEFjdGl2ZSh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGYWNldHMoZmFjZXRzKSB7XHJcbiAgICBmYWNldHMuZm9yRWFjaCgoeyBpZCwgZGF0YSB9KSA9PiB0aGlzLnVwZGF0ZUZhY2V0KGlkLCBkYXRhKSk7XHJcbiAgICB0aGlzLl9zZXRJbnB1dHNEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KSB7XHJcbiAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGYWNldChmYWNldElkLCBkYXRhKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZhY2V0cyA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiBmYWNldC5pZCA9PT0gZmFjZXRJZCk7XHJcbiAgICBpZiAoIXNlbGVjdGVkRmFjZXRzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgRmFjZXQgd2l0aCBpZCAnJHtmYWNldElkfScgZG9lcyBub3QgZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRGYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHsgZmFjZXQuZGF0YSA9IGRhdGE7IH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHsgZmlsdGVyLnZhbHVlID0gbnVsbDsgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZhY2V0czogdGhpcy5fZ2V0UmVxdWVzdEZhY2V0cygpLFxyXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxyXG4gICAgICByZXN1bHRzOiB0aGlzLl9jb25maWcucmVzdWx0cyxcclxuICAgICAgZmlsdGVyczogdGhpcy5fZmlsdGVyc1xyXG4gICAgICAgIC5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmNvbnRleHQgIT09ICdpbnRlcm5hbCcpXHJcbiAgICAgICAgLm1hcCgoe1xyXG4gICAgICAgICAgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluLCBwYWdpbmF0aW9uXHJcbiAgICAgICAgfSkgPT4gKHBhZ2luYXRpb24gPyB7XHJcbiAgICAgICAgICBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW4sIHBhZ2luYXRpb25cclxuICAgICAgICB9IDoge1xyXG4gICAgICAgICAgZmFjZXRJZCwgdmFsdWUsIHNlYXJjaEluXHJcbiAgICAgICAgfSkpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJbnRlcm5hbEZpbHRlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyc1xyXG4gICAgICAuZmlsdGVyKChmaWx0ZXIpID0+IChcclxuICAgICAgICBmaWx0ZXIuY29udGV4dCA9PT0gJ2ludGVybmFsJ1xyXG4gICAgICAgICYmICFfaXNFbXB0eShmaWx0ZXIudmFsdWUpXHJcbiAgICAgICkpXHJcbiAgICAgIC5tYXAoKHtcclxuICAgICAgICBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW5cclxuICAgICAgfSkgPT4gKHtcclxuICAgICAgICBmYWNldElkLCB2YWx1ZSwgc2VhcmNoSW5cclxuICAgICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpIHtcclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB7fTtcclxuICAgIGZpbHRlcnMuZm9yRWFjaChcclxuICAgICAgKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zW2ZpbHRlci5mYWNldElkXSA9IEFycmF5LmlzQXJyYXkoZmlsdGVyLnZhbHVlKVxyXG4gICAgICAgICAgPyBmaWx0ZXIudmFsdWUuam9pbignLCcpXHJcbiAgICAgICAgICA6IGZpbHRlci52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycy5maWx0ZXIoKGZpbHRlcikgPT4gZmlsdGVyLmZhY2V0SWQgPT09IGZhY2V0SWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElucHV0QnlGYWNldElkKGZhY2V0SWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRGYWNldElkKCkgPT09IGZhY2V0SWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldElucHV0RGF0YShmYWNldElkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLnNldERhdGEoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0KHRhcmdldCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFRhcmdldCgpID09PSB0YXJnZXQpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5wdXQgPSB0aGlzLmdldElucHV0QnlGYWNldElkKHRhcmdldCk7XHJcbiAgICBjb25zdCBmYWNldCA9IHRoaXMuX2ZhY2V0cy5maWx0ZXIoKGYpID0+IGYuaWQgPT09IHRhcmdldClbMF07XHJcbiAgICBjb25zdCBmYWNldERhdGEgPSBmYWNldC5kYXRhO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaElucyA9IFtdO1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyc0J5RmFjZXRJZChpbnB1dC5nZXRGYWNldElkKCkpWzBdO1xyXG4gICAgICBjb25zdCBzZWFyY2hJbiA9IGlucHV0LmdldFNlYXJjaEluKCk7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbHRlcjtcclxuXHJcbiAgICAgIHNlYXJjaElucy5wdXNoKFtzZWFyY2hJbiwgdmFsdWVdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZpbHRlclxyXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX2ZpbHRlckRhdGEoc2VhcmNoSW5zLCBpdGVtKSk7XHJcblxyXG4gICAgLy8gdXBkYXRlXHJcbiAgICB0YXJnZXRJbnB1dC5zZXREYXRhKGZhY2V0RGF0YSk7XHJcblxyXG4gICAgaWYgKHRhcmdldElucHV0LmdldENvbmZpZygpLmVtcHR5U3RhdGUpIHtcclxuICAgICAgY29uc3QgaXNFbXB0eSA9ICFmYWNldERhdGEuZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5oaWRkZW4pLmxlbmd0aDtcclxuICAgICAgdGFyZ2V0SW5wdXQuc2V0SXNFbXB0eShpc0VtcHR5KTtcclxuICAgIH1cclxuICAgIHRhcmdldElucHV0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSkge1xyXG4gICAgdGhpcy5fY29uZmlnLnJlc3VsdHMub3JkZXIua2V5ID0gb3JkZXJCeTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKSB7XHJcbiAgICB0aGlzLl9jb25maWcucmVzdWx0cy5vcmRlci50eXBlID0gdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdlQ29uZmlnT2Zmc2V0KG9mZnNldCkge1xyXG4gICAgdGhpcy5fY29uZmlnLnBhZ2Uub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBhZ2VDb25maWdMaW1pdChsaW1pdCkge1xyXG4gICAgdGhpcy5fY29uZmlnLnBhZ2UubGltaXQgPSBsaW1pdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFySW5wdXRzKCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YShzZWFyY2hJbnMsIGl0ZW0pIHtcclxuICAgIC8vIHJlc2V0XHJcbiAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgc2VhcmNoSW5zLmZvckVhY2goKFtzZWFyY2hJbiwgdmFsdWVdKSA9PiB7XHJcbiAgICAgIHNlYXJjaEluLmZvckVhY2goKHsga2V5LCBvcGVyYXRvciB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZWZWYWx1ZSA9IF9nZXQoaXRlbSwga2V5LCBudWxsKTtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3NlYXJjaERhdGEnKSAhPT0gLTEgJiYgQXJyYXkuaXNBcnJheShpdGVtLnNlYXJjaERhdGEpKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhS2V5ID0ga2V5LnJlcGxhY2UoJ3NlYXJjaERhdGEuJywgJycpO1xyXG4gICAgICAgICAgaXRlbS5zZWFyY2hEYXRhLmZvckVhY2goKHsga2V5OiBkYXRhS2V5LCB2YWx1ZTogZGF0YVZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFLZXkgPT09IHNlYXJjaERhdGFLZXkpIHtcclxuICAgICAgICAgICAgICByZWZWYWx1ZSA9IGRhdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWZWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoRklMVEVSU19NQVBbb3BlcmF0b3JdKSB7XHJcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IHRoaXNbRklMVEVSU19NQVBbb3BlcmF0b3JdXSh2YWx1ZSwgcmVmVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNlYXJjaEluOiBvcGVyYXRvciAke29wZXJhdG9yfSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUVxdWFscyh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZlZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsZXQgaW5BcnJheSA9IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICByZWZWYWx1ZS5mb3JFYWNoKChydikgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YocnYpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpbkFycmF5ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gIShpbkFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiByZWZWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhKFxyXG4gICAgICAgICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUuaW5kZXhPZihyZWZWYWx1ZSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA9PT0gcmVmVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyRGF0YUdyZWF0ZXJUaGFuKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+IHJlZlZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlckRhdGFMZXNzVGhhbih2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuICEodmFsdWUgJiYgdmFsdWUgPCByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhR3JlYXRlck9yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA+PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGVzc09yRXF1YWxzKHZhbHVlLCByZWZWYWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gISh2YWx1ZSAmJiB2YWx1ZSA8PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTm90RXF1YWwodmFsdWUsIHJlZlZhbHVlKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhKHZhbHVlICYmIHZhbHVlICE9PSByZWZWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXJEYXRhTGlrZSh2YWx1ZSwgcmVmVmFsdWUpIHtcclxuICAgIGlmIChcclxuICAgICAgdmFsdWVcclxuICAgICAgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgICAmJiB0eXBlb2YgcmVmVmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgaGF5c3RhY2sgPSByZWZWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgcmV0dXJuICEoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRGaWx0ZXJzKCkge1xyXG4gICAgdGhpcy5fY29uZmlnLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBmaWVsZC5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHRoaXMuX2ZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgLi4uaW5wdXQuZmlsdGVyQ29uZmlnLFxyXG4gICAgICAgIGZhY2V0SWQ6IGlucHV0LmZhY2V0SWQsXHJcbiAgICAgICAgdmFsdWU6IGlucHV0LmZpbHRlckNvbmZpZy5pc0FycmF5ID8gW10gOiBudWxsLFxyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldEZhY2V0cygpIHtcclxuICAgIHRoaXMuX2ZhY2V0cyA9IHRoaXMuX2NvbmZpZy5mYWNldHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRQYWdlKCkge1xyXG4gICAgdGhpcy5fcGFnZSA9IHRoaXMuX2NvbmZpZy5wYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG90YWxDb3VudCgpIHtcclxuICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9jb25maWcudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldElucHV0cygpIHtcclxuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMuZm9yRWFjaCgoc2VjdGlvbkNvbmZpZywgc2VjdGlvbkluZGV4KSA9PiB7XHJcbiAgICAgIHNlY3Rpb25Db25maWcuaW5wdXRzLmZvckVhY2goKGlucHV0Q29uZmlnLCBpbnB1dEluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgSW5wdXRNb2RlbCA9IElOUFVUU19NQVBbaW5wdXRDb25maWcudHlwZV07XHJcbiAgICAgICAgaWYgKCFJbnB1dE1vZGVsKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihgSW5wdXQgdHlwZSAke2lucHV0Q29uZmlnLnR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lucHV0cy5wdXNoKFxyXG4gICAgICAgICAgbmV3IElucHV0TW9kZWwoeyAuLi5pbnB1dENvbmZpZywgaW5wdXRJbmRleCwgc2VjdGlvbkluZGV4IH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJbnB1dHNEYXRhKCkge1xyXG4gICAgdGhpcy5fZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB0aGlzLnNldElucHV0RGF0YShmYWNldC5pZCwgZmFjZXQuZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UmVxdWVzdEZhY2V0cygpIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IEZhY2V0W10gPSBbXTtcclxuICAgIHRoaXMuX2ZhY2V0cy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZhY2V0Q29uZmlnID0geyAuLi5mIH07XHJcbiAgICAgIGlmICghZi5oYXNTdGF0aWNEYXRhKSB7XHJcbiAgICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIGZhY2V0Q29uZmlnLmhhc1N0YXRpY0RhdGE7XHJcblxyXG4gICAgICAvLyBzZWFyY2hEYXRhIGNvbnRyb2xcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjZXRDb25maWcuZGF0YSkpIHtcclxuICAgICAgICBmYWNldENvbmZpZy5kYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKChkYXRhSXRlbSkgPT4gdHlwZW9mIGRhdGFJdGVtLnNlYXJjaERhdGEgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhSXRlbS5zZWFyY2hEYXRhO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKGZhY2V0Q29uZmlnKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==