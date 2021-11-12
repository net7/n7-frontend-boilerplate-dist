import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, of, Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, takeUntil, switchMapTo } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
import { _t } from '@n7-frontend/core';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
export var INPUT_STATE_CONTEXT = 'input';
export var FACET_STATE_CONTEXT = 'facet';
export var SECTION_STATE_CONTEXT = 'section';
export var RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
export var FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
var MrSearchService = /** @class */ (function () {
    function MrSearchService(router, activatedRoute, communication) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.destroyed$ = new Subject();
        this.queryParamKeys = [];
        this.initializeKeys = [];
        this.initializeValues = {};
        this.inputSchemas = {};
        this.contextState = {};
        this.internalFilterKeys = [];
        this.internalFilterState = {
            globalParams: {},
            facets: {}
        };
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = function () { return _this.config; };
        this.isQueryParamKey = function (input) { return _this.queryParamKeys.includes(input); };
    }
    MrSearchService.prototype.init = function (searchId, config) {
        this.searchId = searchId;
        this.config = config;
        // first clear
        this.clear();
        // initial states
        this.initInputState();
        this.initFacetState();
        this.initSectionState();
        // listeners
        this.onInputsChange();
        this.onInternalInputsChange();
        this.onRouteChange();
        this.onResultsLoading();
        this.onFacetsScroll();
    };
    MrSearchService.prototype.getState$ = function (context, id) {
        var stateId = id ? context + "." + id : context;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does not exist");
        }
        return this.state$[stateId];
    };
    MrSearchService.prototype.addStateContext = function (context) {
        if (this.state$[context]) {
            throw Error("State key \"" + context + "\" already exists");
        }
        // initial state
        this.contextState[context] = {};
        // create stream
        this.state$[context] = new Subject();
    };
    MrSearchService.prototype.addState = function (context, id) {
        var stateId = context + "." + id;
        if (!this.state$[context]) {
            throw Error("\n        State context \"" + context + "\" does not exist.\n        You must add context first\n      ");
        }
        if (this.state$[stateId]) {
            throw Error("State key \"" + stateId + "\" already exists");
        }
        // create stream
        this.state$[stateId] = new Subject();
    };
    MrSearchService.prototype.setState = function (context, id, newValue) {
        var stateId = context + "." + id;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does not exist");
        }
        var value = newValue;
        // hook control
        if (this.beforeHook[stateId]) {
            value = this.beforeHook[stateId](value);
        }
        // update stream
        this.state$[stateId].next(value);
        // update context
        this.setContextState(context, id, value);
    };
    MrSearchService.prototype.setBeforeHook = function (context, id, hook) {
        var stateId = context + "." + id;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does not exist");
        }
        this.beforeHook[stateId] = hook;
    };
    MrSearchService.prototype.reset = function () {
        var _this = this;
        // clear input states
        Object.keys(this.contextState[INPUT_STATE_CONTEXT])
            .filter(function (id) { return !_this.internalFilterKeys.includes(id); })
            .forEach(function (id) {
            _this.setState(INPUT_STATE_CONTEXT, id, null);
        });
    };
    MrSearchService.prototype.destroy = function () {
        this.destroyed$.next();
    };
    MrSearchService.prototype.clear = function () {
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
    };
    MrSearchService.prototype.setContextState = function (context, id, newValue) {
        var _a;
        this.contextState[context] = __assign(__assign({}, this.contextState[context]), (_a = {}, _a["" + id] = newValue, _a));
        this.state$[context].next({
            lastUpdated: id,
            state: this.contextState[context]
        });
    };
    MrSearchService.prototype.initInputState = function () {
        var _this = this;
        var _a = this.config, facets = _a.facets, layoutInputs = _a.layoutInputs;
        // add context state
        this.addStateContext(INPUT_STATE_CONTEXT);
        // set facets input state
        facets.sections.forEach(function (_a) {
            var header = _a.header, inputs = _a.inputs;
            __spread([header], inputs).filter(function (input) { return input; })
                .forEach(function (_a) {
                var id = _a.id, queryParam = _a.queryParam, schema = _a.schema, limit = _a.limit, type = _a.type, target = _a.target, initialize = _a.initialize;
                if (!id) {
                    return;
                }
                _this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    _this.queryParamKeys.push(id);
                }
                // input has initial values request
                if (initialize) {
                    _this.initializeKeys.push(id);
                }
                // schemas
                if (schema) {
                    _this.inputSchemas[id] = schema;
                }
                // links internal state
                if (['link', 'map'].includes(type)) {
                    _this.internalFilterState.facets[id] = {
                        id: id,
                        limit: limit,
                        offset: 0,
                        query: '',
                        loading: false,
                        values: []
                    };
                }
                // internal filters
                if (target) {
                    _this.internalFilterKeys.push(id);
                }
            });
        });
        // set layout input state
        layoutInputs.forEach(function (_a) {
            var id = _a.id, queryParam = _a.queryParam, schema = _a.schema;
            _this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                _this.queryParamKeys.push(id);
            }
            // schemas
            if (schema) {
                _this.inputSchemas[id] = schema;
            }
        });
    };
    MrSearchService.prototype.initFacetState = function () {
        var _this = this;
        var facets = this.config.facets;
        // add context state
        this.addStateContext(FACET_STATE_CONTEXT);
        // set input state
        facets.sections.forEach(function (_a) {
            var header = _a.header, inputs = _a.inputs;
            __spread([header], inputs).filter(function (input) { return input; })
                .forEach(function (input) {
                _this.addState(FACET_STATE_CONTEXT, input.id);
            });
        });
    };
    MrSearchService.prototype.initSectionState = function () {
        var _this = this;
        var facets = this.config.facets;
        // add context state
        this.addStateContext(SECTION_STATE_CONTEXT);
        // set input state
        facets.sections.forEach(function (_a) {
            var id = _a.id;
            _this.addState(SECTION_STATE_CONTEXT, id);
        });
    };
    MrSearchService.prototype.onRouteChange = function () {
        var _this = this;
        var results = this.config.request.results;
        // add context state
        this.addStateContext(RESULTS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach(function (id) {
            _this.addState(RESULTS_REQUEST_STATE_CONTEXT, id);
        });
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$), 
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map(function (params) { return searchHelper.queryParamsToState(params, _this.inputSchemas); }), 
        // state != queryParams control
        tap(function (params) {
            if (isEmpty(params)) {
                _this.reset();
            }
            // update state
            if (!isEmpty(params)) {
                var inputContext_1 = _this.contextState[INPUT_STATE_CONTEXT];
                if (isEmpty(inputContext_1)) {
                    Object.keys(params)
                        .filter(function (inputId) { return _this.queryParamKeys.includes(inputId); })
                        .forEach(function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    });
                }
                else {
                    Object.keys(params)
                        .filter(function (inputId) { return _this.queryParamKeys.includes(inputId); })
                        .filter(function (inputId) { return _this.notEquals(inputContext_1[inputId], params[inputId]); })
                        .forEach(function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, (params[inputId] || params[inputId] === 0)
                            ? params[inputId]
                            : null);
                    });
                }
            }
        }), map(function (params) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        }), debounceTime(results.delay || 1), map(function (params) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        }), switchMap(function (state) { return _this.communication.request$(results.id, {
            params: __assign(__assign({}, state), { searchId: _this.searchId }),
            method: 'POST',
            onError: function (error) {
                _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, results.provider || null); })).subscribe(function (response) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'success', response);
        });
    };
    MrSearchService.prototype.onInputsChange = function () {
        var _this = this;
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter(function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.queryParamKeys.indexOf(lastUpdated) !== -1;
        })).subscribe(function (_a) {
            var state = _a.state;
            var filteredState = {};
            Object.keys(state).forEach(function (id) {
                if (_this.queryParamKeys.indexOf(id) !== -1) {
                    filteredState[id] = state[id];
                }
            });
            var queryParams = searchHelper.stateToQueryParams(filteredState, _this.inputSchemas);
            _this.router.navigate([], {
                queryParams: queryParams
            });
        });
    };
    MrSearchService.prototype.onInternalInputsChange = function () {
        var _this = this;
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter(function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.queryParamKeys.indexOf(lastUpdated) === -1;
        }), map(function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            var sections = _this.config.facets.sections;
            var inputConfig;
            sections.forEach(function (section) {
                section.inputs.forEach(function (input) {
                    if (input.id === lastUpdated) {
                        inputConfig = input;
                    }
                });
            });
            if (inputConfig && inputConfig.target) {
                return {
                    inputConfig: inputConfig,
                    value: state[lastUpdated]
                };
            }
            return null;
        }), filter(function (data) { return data !== null; })).subscribe(function (_a) {
            var inputConfig = _a.inputConfig, value = _a.value;
            var target = inputConfig.target;
            // update internal filters
            _this.internalFilterState.facets[target].query = value;
            _this.internalFilterState.facets[target].offset = 0;
            _this.doSingleFacetRequest(target);
        });
    };
    MrSearchService.prototype.doSingleFacetRequest = function (target) {
        var _this = this;
        var facets = this.config.request.facets;
        var globalParams = this.internalFilterState.globalParams;
        var _a = this.internalFilterState.facets[target], id = _a.id, limit = _a.limit, offset = _a.offset, query = _a.query;
        this.communication.request$(facets.id, {
            params: __assign(__assign({}, globalParams), { facets: [{
                        id: id, limit: limit, offset: offset, query: query
                    }], searchId: this.searchId }),
            method: 'POST',
            onError: function (error) {
                _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, facets.provider || null).subscribe(function (response) {
            _this.onFacetsRequestSuccess(response);
            // reset loading
            _this.internalFilterState.facets[target].loading = false;
        });
    };
    MrSearchService.prototype.onResultsLoading = function () {
        var _this = this;
        var facets = this.config.request.facets;
        if (!facets) {
            return;
        }
        // add context state
        this.addStateContext(FACETS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach(function (id) {
            _this.addState(FACETS_REQUEST_STATE_CONTEXT, id);
        });
        this.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(map(function (params) {
            var facetsParams = __assign({}, params);
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', facetsParams);
            // updated internal filter state
            _this.internalFilterState.globalParams = __assign({}, facetsParams);
            return facetsParams;
        }), debounceTime(facets.delay || 1), map(function (params) {
            params.facets = [];
            _this.config.facets.sections.forEach(function (_a) {
                var inputs = _a.inputs;
                inputs.filter(function (_a) {
                    var type = _a.type;
                    return ['link', 'map'].includes(type);
                })
                    .forEach(function (_a) {
                    var id = _a.id;
                    // reset offset
                    _this.internalFilterState.facets[id].offset = 0;
                    var _b = _this.internalFilterState.facets[id], limit = _b.limit, query = _b.query, offset = _b.offset;
                    params.facets.push({
                        id: id, limit: limit, offset: offset, query: query
                    });
                });
            });
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        }), switchMap(function (state) {
            var initializeRequest$ = of(true);
            if (_this.initializeKeys.length && isEmpty(_this.initializeValues)) {
                initializeRequest$ = _this.communication.request$(facets.id, {
                    params: {
                        facets: state.facets,
                        searchId: _this.searchId
                    },
                    method: 'POST',
                    onError: function (error) {
                        _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
                    }
                }, facets.provider || null);
            }
            return initializeRequest$.pipe(tap(function (response) {
                if (response.facets) {
                    Object.keys(response.facets)
                        .filter(function (inputKey) { return _this.initializeKeys.includes(inputKey); })
                        .forEach(function (inputKey) {
                        _this.initializeValues[inputKey] = response.facets[inputKey];
                    });
                }
            }), switchMapTo(of(state)));
        }), switchMap(function (state) { return _this.communication.request$(facets.id, {
            params: __assign(__assign({}, state), { searchId: _this.searchId }),
            method: 'POST',
            onError: function (error) {
                _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, facets.provider || null); })).subscribe(function (response) {
            _this.onFacetsRequestSuccess(response);
        });
        // update facet links
        this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe(function (response) {
            var responseFacets = response.facets;
            Object.keys(responseFacets).forEach(function (id) {
                var _a = responseFacets[id], responseValues = _a.values, filtered_total_count = _a.filtered_total_count;
                var _b = _this.internalFilterState.facets[id], limit = _b.limit, offset = _b.offset, stateValues = _b.values;
                var filterState = _this.internalFilterState.facets[id];
                if (offset > 0) {
                    // delete loading element
                    filterState.values.pop();
                    // merge new results
                    filterState.values = __spread(stateValues, responseValues);
                }
                else {
                    filterState.values = __spread(responseValues);
                }
                if ((offset + limit) < filtered_total_count) {
                    filterState.values.push({
                        text: _t('global#facet_loading_text'),
                        classes: 'loading-text-link',
                        payload: null,
                    });
                }
                _this.setState(FACET_STATE_CONTEXT, id, {
                    links: filterState.values
                });
            });
        });
    };
    MrSearchService.prototype.onFacetsRequestSuccess = function (response) {
        var _this = this;
        var responseFacets = response.facets;
        if (!isEmpty(this.initializeValues)) {
            // intialValues and responseFacets merge strategy
            Object.keys(responseFacets).forEach(function (inputKey) {
                if (_this.initializeValues[inputKey]) {
                    var updatedValues = _this.initializeValues[inputKey].values.map(function (initialValue) {
                        var singleValue = responseFacets[inputKey].values.find(function (_a) {
                            var payload = _a.payload;
                            return payload === initialValue.payload;
                        });
                        return __assign(__assign({}, initialValue), { counter: (singleValue === null || singleValue === void 0 ? void 0 : singleValue.counter) || 0 });
                    });
                    // sort by counter
                    updatedValues.sort(function (a, b) { return b.counter - a.counter; });
                    responseFacets[inputKey].values = updatedValues;
                }
            });
        }
        Object.keys(responseFacets).forEach(function (inputKey) {
            // update internal filter state
            var filtered_total_count = responseFacets[inputKey].filtered_total_count;
            _this.internalFilterState.facets[inputKey].filtered_total_count = filtered_total_count;
        });
        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', __assign(__assign({}, response), { facets: responseFacets }));
    };
    MrSearchService.prototype.onFacetsScroll = function () {
        var _this = this;
        setTimeout(function () {
            var facets = _this.config.facets;
            facets.sections.forEach(function (_a) {
                var inputs = _a.inputs;
                inputs
                    .filter(function (input) { return input; })
                    .filter(function (input) { return input.type === 'link'; })
                    .forEach(function (_a) {
                    var id = _a.id;
                    var scrollEl = document.querySelector("#facet-container-" + id + " .n7-input-link");
                    var scroll$ = fromEvent(scrollEl, 'scroll');
                    scroll$.pipe(debounceTime(300)).subscribe(function (_a) {
                        var target = _a.target;
                        var _b = _this.internalFilterState.facets[id], limit = _b.limit, offset = _b.offset, loading = _b.loading, filtered_total_count = _b.filtered_total_count;
                        var _c = target, scrollTop = _c.scrollTop, clientHeight = _c.clientHeight, scrollHeight = _c.scrollHeight;
                        if ((scrollTop + clientHeight >= scrollHeight)
                            && (offset + limit < filtered_total_count)
                            && loading === false) {
                            _this.internalFilterState.facets[id].loading = true;
                            _this.internalFilterState.facets[id].offset = offset + limit;
                            _this.doSingleFacetRequest(id);
                        }
                    });
                });
            });
        });
    };
    MrSearchService.prototype.notEquals = function (val1, val2) {
        if (Array.isArray(val1) && Array.isArray(val2)) {
            return !!xor(val1, val2).length;
        }
        return val1 !== val2;
    };
    MrSearchService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: CommunicationService }
    ]; };
    MrSearchService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            CommunicationService])
    ], MrSearchService);
    return MrSearchService;
}());
export { MrSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxTQUFTLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyxlQUFlLENBQUM7QUFHNUQ7SUEyQ0UseUJBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBSDdDLGlCQUlLO1FBSEssV0FBTSxH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QUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWhpQmlCLE1BQU07Z0JBQ0UsY0FBYztnQkFDZixvQkFBb0I7O0lBOUNsQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTt5Q0E2Q08sTUFBTTtZQUNFLGNBQWM7WUFDZixvQkFBb0I7T0E5Q2xDLGVBQWUsQ0E2a0IzQjtJQUFELHNCQUFDO0NBQUEsQUE3a0JELElBNmtCQztTQTdrQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0XHJcbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgZmlsdGVyLFxyXG4gIHN3aXRjaE1hcCxcclxuICBtYXAsXHJcbiAgZGVib3VuY2VUaW1lLFxyXG4gIGRlbGF5LFxyXG4gIHRhcCxcclxuICB0YWtlVW50aWwsXHJcbiAgc3dpdGNoTWFwVG9cclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGlzRW1wdHksIHhvciB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7IE1ySW5wdXRTY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xyXG5leHBvcnQgY29uc3QgRkFDRVRfU1RBVEVfQ09OVEVYVCA9ICdmYWNldCc7XHJcbmV4cG9ydCBjb25zdCBTRUNUSU9OX1NUQVRFX0NPTlRFWFQgPSAnc2VjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzUmVxdWVzdCc7XHJcbmV4cG9ydCBjb25zdCBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0c1JlcXVlc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaElkOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnO1xyXG5cclxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVWYWx1ZXM6IHtcclxuICAgIFtpZDogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dFNjaGVtYXM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IE1ySW5wdXRTY2hlbWE7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnRleHRTdGF0ZToge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlcktleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgaW50ZXJuYWxGaWx0ZXJTdGF0ZToge1xyXG4gICAgZ2xvYmFsUGFyYW1zOiBhbnk7XHJcbiAgICBmYWNldHM6IHtcclxuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICB9ID0ge1xyXG4gICAgZ2xvYmFsUGFyYW1zOiB7fSxcclxuICAgIGZhY2V0czoge31cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHN0YXRlJDoge1xyXG4gICAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBiZWZvcmVIb29rOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiAodmFsdWU6IGFueSkgPT4gYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBpbml0KHNlYXJjaElkLCBjb25maWcpIHtcclxuICAgIHRoaXMuc2VhcmNoSWQgPSBzZWFyY2hJZDtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIC8vIGZpcnN0IGNsZWFyXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgLy8gaW5pdGlhbCBzdGF0ZXNcclxuICAgIHRoaXMuaW5pdElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuaW5pdEZhY2V0U3RhdGUoKTtcclxuICAgIHRoaXMuaW5pdFNlY3Rpb25TdGF0ZSgpO1xyXG5cclxuICAgIC8vIGxpc3RlbmVyc1xyXG4gICAgdGhpcy5vbklucHV0c0NoYW5nZSgpO1xyXG4gICAgdGhpcy5vbkludGVybmFsSW5wdXRzQ2hhbmdlKCk7XHJcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKTtcclxuICAgIHRoaXMub25SZXN1bHRzTG9hZGluZygpO1xyXG4gICAgdGhpcy5vbkZhY2V0c1Njcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xyXG5cclxuICBwdWJsaWMgZ2V0U3RhdGUkKGNvbnRleHQ6IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBTdWJqZWN0PGFueT4ge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGlkID8gYCR7Y29udGV4dH0uJHtpZH1gIDogY29udGV4dDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0YXRlJFtzdGF0ZUlkXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRTdGF0ZUNvbnRleHQoY29udGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7Y29udGV4dH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRpYWwgc3RhdGVcclxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge307XHJcbiAgICAvLyBjcmVhdGUgc3RyZWFtXHJcbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkU3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgXHJcbiAgICAgICAgU3RhdGUgY29udGV4dCBcIiR7Y29udGV4dH1cIiBkb2VzIG5vdCBleGlzdC5cclxuICAgICAgICBZb3UgbXVzdCBhZGQgY29udGV4dCBmaXJzdFxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtzdGF0ZUlkfVwiIGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxyXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0gPSBuZXcgU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgLy8gaG9vayBjb250cm9sXHJcbiAgICBpZiAodGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgc3RyZWFtXHJcbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXS5uZXh0KHZhbHVlKTtcclxuICAgIC8vIHVwZGF0ZSBjb250ZXh0XHJcbiAgICB0aGlzLnNldENvbnRleHRTdGF0ZShjb250ZXh0LCBpZCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEJlZm9yZUhvb2soY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBob29rKSB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdID0gaG9vaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIC8vIGNsZWFyIGlucHV0IHN0YXRlc1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pXHJcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiAhdGhpcy5pbnRlcm5hbEZpbHRlcktleXMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jb250ZXh0U3RhdGUgPSB7fTtcclxuICAgIHRoaXMuc3RhdGUkID0ge307XHJcbiAgICB0aGlzLmJlZm9yZUhvb2sgPSB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29udGV4dFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7XHJcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxyXG4gICAgICBbYCR7aWR9YF06IG5ld1ZhbHVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XHJcbiAgICAgIGxhc3RVcGRhdGVkOiBpZCxcclxuICAgICAgc3RhdGU6IHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cywgbGF5b3V0SW5wdXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgZmFjZXRzIGlucHV0IHN0YXRlXHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cclxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXHJcbiAgICAgICAgLmZvckVhY2goKHtcclxuICAgICAgICAgIGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEsIGxpbWl0LCB0eXBlLCB0YXJnZXQsIGluaXRpYWxpemVcclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG5cclxuICAgICAgICAgIC8vIGlzIHF1ZXJ5IHBhcmFtP1xyXG4gICAgICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBpbnB1dCBoYXMgaW5pdGlhbCB2YWx1ZXMgcmVxdWVzdFxyXG4gICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplS2V5cy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBzY2hlbWFzXHJcbiAgICAgICAgICBpZiAoc2NoZW1hKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBsaW5rcyBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgICAgICAgaWYgKFsnbGluaycsICdtYXAnXS5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXSA9IHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBpbnRlcm5hbCBmaWx0ZXJzXHJcbiAgICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJLZXlzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxyXG4gICAgbGF5b3V0SW5wdXRzLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSB9KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG5cclxuICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzY2hlbWFzXHJcbiAgICAgIGlmIChzY2hlbWEpIHtcclxuICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcclxuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxyXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcclxuICAgICAgICAuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaW5wdXQuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRTZWN0aW9uU3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoU0VDVElPTl9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShTRUNUSU9OX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xyXG5cclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcclxuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgICAvLyBmaXggaW5pdGlhbCBsaXN0ZW5lcnMgKHN5bWJvbGljIHRpbWVvdXQpXHJcbiAgICAgIGRlbGF5KDEpLFxyXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zLCB0aGlzLmlucHV0U2NoZW1hcykpLFxyXG4gICAgICAvLyBzdGF0ZSAhPSBxdWVyeVBhcmFtcyBjb250cm9sXHJcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xyXG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykpIHtcclxuICAgICAgICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdO1xyXG4gICAgICAgICAgaWYgKGlzRW1wdHkoaW5wdXRDb250ZXh0KSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dElkKSlcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXRJZCkpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5ub3RFcXVhbHMoaW5wdXRDb250ZXh0W2lucHV0SWRdLCBwYXJhbXNbaW5wdXRJZF0pKVxyXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICBJTlBVVF9TVEFURV9DT05URVhULFxyXG4gICAgICAgICAgICAgICAgICBpbnB1dElkLFxyXG4gICAgICAgICAgICAgICAgICAocGFyYW1zW2lucHV0SWRdIHx8IHBhcmFtc1tpbnB1dElkXSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICA/IHBhcmFtc1tpbnB1dElkXVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgZGVib3VuY2VUaW1lKHJlc3VsdHMuZGVsYXkgfHwgMSksXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xyXG4gICAgICAgIHBhcmFtczogeyAuLi5zdGF0ZSwgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWQgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXHJcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSAhPT0gLTEpXHJcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcclxuICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZFN0YXRlW2lkXSA9IHN0YXRlW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMoZmlsdGVyZWRTdGF0ZSwgdGhpcy5pbnB1dFNjaGVtYXMpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW50ZXJuYWxJbnB1dHNDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSA9PT0gLTEpLFxyXG4gICAgICBtYXAoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLmNvbmZpZy5mYWNldHM7XHJcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5pZCA9PT0gbGFzdFVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgICBpbnB1dENvbmZpZyA9IGlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5wdXRDb25maWcgJiYgaW5wdXRDb25maWcudGFyZ2V0KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnB1dENvbmZpZyxcclxuICAgICAgICAgICAgdmFsdWU6IHN0YXRlW2xhc3RVcGRhdGVkXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHsgaW5wdXRDb25maWcsIHZhbHVlIH0pID0+IHtcclxuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGlucHV0Q29uZmlnO1xyXG4gICAgICAvLyB1cGRhdGUgaW50ZXJuYWwgZmlsdGVyc1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ucXVlcnkgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLm9mZnNldCA9IDA7XHJcbiAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1NpbmdsZUZhY2V0UmVxdWVzdCh0YXJnZXQpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xyXG4gICAgY29uc3QgeyBnbG9iYWxQYXJhbXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XHJcbiAgICB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICAuLi5nbG9iYWxQYXJhbXMsXHJcbiAgICAgICAgZmFjZXRzOiBbe1xyXG4gICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgbG9hZGluZ1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVzdWx0c0xvYWRpbmcoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcclxuXHJcbiAgICBpZiAoIWZhY2V0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXHJcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5waXBlKFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0c1BhcmFtcyA9IHsgLi4ucGFyYW1zIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIGZhY2V0c1BhcmFtcyk7XHJcbiAgICAgICAgLy8gdXBkYXRlZCBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcclxuICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZ2xvYmFsUGFyYW1zID0geyAuLi5mYWNldHNQYXJhbXMgfTtcclxuICAgICAgICByZXR1cm4gZmFjZXRzUGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgZGVib3VuY2VUaW1lKGZhY2V0cy5kZWxheSB8fCAxKSxcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICBwYXJhbXMuZmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb25maWcuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcclxuICAgICAgICAgIGlucHV0cy5maWx0ZXIoKHsgdHlwZSB9KSA9PiBbJ2xpbmsnLCAnbWFwJ10uaW5jbHVkZXModHlwZSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAvLyByZXNldCBvZmZzZXRcclxuICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgbGltaXQsIHF1ZXJ5LCBvZmZzZXQgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgICAgICAgIHBhcmFtcy5mYWNldHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgfSksXHJcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZVJlcXVlc3QkOiBPYnNlcnZhYmxlPGFueT4gPSBvZih0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplS2V5cy5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLmluaXRpYWxpemVWYWx1ZXMpKSB7XHJcbiAgICAgICAgICBpbml0aWFsaXplUmVxdWVzdCQgPSB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgIGZhY2V0czogc3RhdGUuZmFjZXRzLFxyXG4gICAgICAgICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZVJlcXVlc3QkLnBpcGUoXHJcbiAgICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5mYWNldHMpIHtcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5mYWNldHMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dEtleSkgPT4gdGhpcy5pbml0aWFsaXplS2V5cy5pbmNsdWRlcyhpbnB1dEtleSkpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XSA9IHJlc3BvbnNlLmZhY2V0c1tpbnB1dEtleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBzd2l0Y2hNYXBUbyhvZihzdGF0ZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkpXHJcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGZhY2V0IGxpbmtzXHJcbiAgICB0aGlzLmdldFN0YXRlJChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcclxuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VGYWNldHMpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZXM6IHJlc3BvbnNlVmFsdWVzLCBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaWRdO1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIG9mZnNldCwgdmFsdWVzOiBzdGF0ZVZhbHVlcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XHJcbiAgICAgICAgY29uc3QgZmlsdGVyU3RhdGUgPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcclxuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgLy8gZGVsZXRlIGxvYWRpbmcgZWxlbWVudFxyXG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzLnBvcCgpO1xyXG4gICAgICAgICAgLy8gbWVyZ2UgbmV3IHJlc3VsdHNcclxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgLi4uc3RhdGVWYWx1ZXMsXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG9mZnNldCArIGxpbWl0KSA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KSB7XHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IF90KCdnbG9iYWwjZmFjZXRfbG9hZGluZ190ZXh0JyksXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdsb2FkaW5nLXRleHQtbGluaycsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpZCwge1xyXG4gICAgICAgICAgbGlua3M6IGZpbHRlclN0YXRlLnZhbHVlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgaWYgKCFpc0VtcHR5KHRoaXMuaW5pdGlhbGl6ZVZhbHVlcykpIHtcclxuICAgICAgLy8gaW50aWFsVmFsdWVzIGFuZCByZXNwb25zZUZhY2V0cyBtZXJnZSBzdHJhdGVneVxyXG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XSkge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlcyA9IHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0udmFsdWVzLm1hcCgoaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVZhbHVlID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gaW5pdGlhbFZhbHVlLnBheWxvYWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5pbml0aWFsVmFsdWUsXHJcbiAgICAgICAgICAgICAgY291bnRlcjogc2luZ2xlVmFsdWU/LmNvdW50ZXIgfHwgMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyBzb3J0IGJ5IGNvdW50ZXJcclxuICAgICAgICAgIHVwZGF0ZWRWYWx1ZXMuc29ydCgoYSwgYikgPT4gYi5jb3VudGVyIC0gYS5jb3VudGVyKTtcclxuICAgICAgICAgIHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XS52YWx1ZXMgPSB1cGRhdGVkVmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlciBzdGF0ZVxyXG4gICAgICBjb25zdCB7IGZpbHRlcmVkX3RvdGFsX2NvdW50IH0gPSByZXNwb25zZUZhY2V0c1tpbnB1dEtleV07XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaW5wdXRLZXldLmZpbHRlcmVkX3RvdGFsX2NvdW50ID0gZmlsdGVyZWRfdG90YWxfY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCB7XHJcbiAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICBmYWNldHM6IHJlc3BvbnNlRmFjZXRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GYWNldHNTY3JvbGwoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICAgIGlucHV0c1xyXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LnR5cGUgPT09ICdsaW5rJylcclxuICAgICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmFjZXQtY29udGFpbmVyLSR7aWR9IC5uNy1pbnB1dC1saW5rYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsRWwsICdzY3JvbGwnKTtcclxuICAgICAgICAgICAgc2Nyb2xsJC5waXBlKFxyXG4gICAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRfdG90YWxfY291bnQsXHJcbiAgICAgICAgICAgICAgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCB9ID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgJiYgKG9mZnNldCArIGxpbWl0IDwgZmlsdGVyZWRfdG90YWxfY291bnQpXHJcbiAgICAgICAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QoaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzUXVlcnlQYXJhbUtleSA9IChpbnB1dCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dCk7XHJcblxyXG4gIG5vdEVxdWFscyh2YWwxLCB2YWwyKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwxKSAmJiBBcnJheS5pc0FycmF5KHZhbDIpKSB7XHJcbiAgICAgIHJldHVybiAhIXhvcih2YWwxLCB2YWwyKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsMSAhPT0gdmFsMjtcclxuICB9XHJcbn1cclxuIl19