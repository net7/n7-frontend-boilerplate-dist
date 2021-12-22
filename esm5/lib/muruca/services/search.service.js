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
                if (['link', 'map', 'histogram'].includes(type)) {
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
                    return ['link', 'map', 'histogram'].includes(type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxTQUFTLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyxlQUFlLENBQUM7QUFHNUQ7SUEyQ0UseUJBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBSDdDLGlCQUlLO1FBSEssV0FBTSxH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QUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Z0JBaGlCaUIsTUFBTTtnQkFDRSxjQUFjO2dCQUNmLG9CQUFvQjs7SUE5Q2xDLGVBQWU7UUFEM0IsVUFBVSxFQUFFO3lDQTZDTyxNQUFNO1lBQ0UsY0FBYztZQUNmLG9CQUFvQjtPQTlDbEMsZUFBZSxDQTZrQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdrQkQsSUE2a0JDO1NBN2tCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3RcclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBmaWx0ZXIsXHJcbiAgc3dpdGNoTWFwLFxyXG4gIG1hcCxcclxuICBkZWJvdW5jZVRpbWUsXHJcbiAgZGVsYXksXHJcbiAgdGFwLFxyXG4gIHRha2VVbnRpbCxcclxuICBzd2l0Y2hNYXBUb1xyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNFbXB0eSwgeG9yIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCBzZWFyY2hIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9zZWFyY2gtaGVscGVyJztcclxuaW1wb3J0IHsgTXJJbnB1dFNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5QVVRfU1RBVEVfQ09OVEVYVCA9ICdpbnB1dCc7XHJcbmV4cG9ydCBjb25zdCBGQUNFVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0JztcclxuZXhwb3J0IGNvbnN0IFNFQ1RJT05fU1RBVEVfQ09OVEVYVCA9ICdzZWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhUID0gJ3Jlc3VsdHNSZXF1ZXN0JztcclxuZXhwb3J0IGNvbnN0IEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXRzUmVxdWVzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgc2VhcmNoSWQ6IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWc7XHJcblxyXG4gIHByaXZhdGUgcXVlcnlQYXJhbUtleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUtleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVZhbHVlczoge1xyXG4gICAgW2lkOiBzdHJpbmddOiBhbnk7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGlucHV0U2NoZW1hczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogTXJJbnB1dFNjaGVtYTtcclxuICB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29udGV4dFN0YXRlOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGludGVybmFsRmlsdGVyS2V5czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlclN0YXRlOiB7XHJcbiAgICBnbG9iYWxQYXJhbXM6IGFueTtcclxuICAgIGZhY2V0czoge1xyXG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG4gIH0gPSB7XHJcbiAgICBnbG9iYWxQYXJhbXM6IHt9LFxyXG4gICAgZmFjZXRzOiB7fVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3RhdGUkOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGJlZm9yZUhvb2s6IHtcclxuICAgIFtrZXk6IHN0cmluZ106ICh2YWx1ZTogYW55KSA9PiBhbnk7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIGluaXQoc2VhcmNoSWQsIGNvbmZpZykge1xyXG4gICAgdGhpcy5zZWFyY2hJZCA9IHNlYXJjaElkO1xyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgLy8gZmlyc3QgY2xlYXJcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICAvLyBpbml0aWFsIHN0YXRlc1xyXG4gICAgdGhpcy5pbml0SW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5pbml0RmFjZXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5pbml0U2VjdGlvblN0YXRlKCk7XHJcblxyXG4gICAgLy8gbGlzdGVuZXJzXHJcbiAgICB0aGlzLm9uSW5wdXRzQ2hhbmdlKCk7XHJcbiAgICB0aGlzLm9uSW50ZXJuYWxJbnB1dHNDaGFuZ2UoKTtcclxuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpO1xyXG4gICAgdGhpcy5vblJlc3VsdHNMb2FkaW5nKCk7XHJcbiAgICB0aGlzLm9uRmFjZXRzU2Nyb2xsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XHJcblxyXG4gIHB1YmxpYyBnZXRTdGF0ZSQoY29udGV4dDogc3RyaW5nLCBpZD86IHN0cmluZyk6IFN1YmplY3Q8YW55PiB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gaWQgPyBgJHtjb250ZXh0fS4ke2lkfWAgOiBjb250ZXh0O1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUkW3N0YXRlSWRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFN0YXRlQ29udGV4dChjb250ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtjb250ZXh0fVwiIGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxyXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7fTtcclxuICAgIC8vIGNyZWF0ZSBzdHJlYW1cclxuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBcclxuICAgICAgICBTdGF0ZSBjb250ZXh0IFwiJHtjb250ZXh0fVwiIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgICAgIFlvdSBtdXN0IGFkZCBjb250ZXh0IGZpcnN0XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke3N0YXRlSWR9XCIgYWxyZWFkeSBleGlzdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgc3RyZWFtXHJcbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAvLyBob29rIGNvbnRyb2xcclxuICAgIGlmICh0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0pIHtcclxuICAgICAgdmFsdWUgPSB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSBzdHJlYW1cclxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdLm5leHQodmFsdWUpO1xyXG4gICAgLy8gdXBkYXRlIGNvbnRleHRcclxuICAgIHRoaXMuc2V0Q29udGV4dFN0YXRlKGNvbnRleHQsIGlkLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QmVmb3JlSG9vayhjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhvb2spIHtcclxuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0gPSBob29rO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgLy8gY2xlYXIgaW5wdXQgc3RhdGVzXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSlcclxuICAgICAgLmZpbHRlcigoaWQpID0+ICF0aGlzLmludGVybmFsRmlsdGVyS2V5cy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQsIG51bGwpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmNvbnRleHRTdGF0ZSA9IHt9O1xyXG4gICAgdGhpcy5zdGF0ZSQgPSB7fTtcclxuICAgIHRoaXMuYmVmb3JlSG9vayA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250ZXh0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHtcclxuICAgICAgLi4udGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0sXHJcbiAgICAgIFtgJHtpZH1gXTogbmV3VmFsdWVcclxuICAgIH07XHJcbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XS5uZXh0KHtcclxuICAgICAgbGFzdFVwZGF0ZWQ6IGlkLFxyXG4gICAgICBzdGF0ZTogdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0SW5wdXRTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KElOUFVUX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIHNldCBmYWNldHMgaW5wdXQgc3RhdGVcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcclxuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxyXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcclxuICAgICAgICAuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSwgbGltaXQsIHR5cGUsIHRhcmdldCwgaW5pdGlhbGl6ZVxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XHJcblxyXG4gICAgICAgICAgLy8gaXMgcXVlcnkgcGFyYW0/XHJcbiAgICAgICAgICBpZiAocXVlcnlQYXJhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGlucHV0IGhhcyBpbml0aWFsIHZhbHVlcyByZXF1ZXN0XHJcbiAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVLZXlzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHNjaGVtYXNcclxuICAgICAgICAgIGlmIChzY2hlbWEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGxpbmtzIGludGVybmFsIHN0YXRlXHJcbiAgICAgICAgICBpZiAoWydsaW5rJywgJ21hcCcsICdoaXN0b2dyYW0nXS5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXSA9IHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBpbnRlcm5hbCBmaWx0ZXJzXHJcbiAgICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJLZXlzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxyXG4gICAgbGF5b3V0SW5wdXRzLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSB9KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG5cclxuICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzY2hlbWFzXHJcbiAgICAgIGlmIChzY2hlbWEpIHtcclxuICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcclxuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxyXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcclxuICAgICAgICAuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaW5wdXQuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRTZWN0aW9uU3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoU0VDVElPTl9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcclxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShTRUNUSU9OX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xyXG5cclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcclxuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgICAvLyBmaXggaW5pdGlhbCBsaXN0ZW5lcnMgKHN5bWJvbGljIHRpbWVvdXQpXHJcbiAgICAgIGRlbGF5KDEpLFxyXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zLCB0aGlzLmlucHV0U2NoZW1hcykpLFxyXG4gICAgICAvLyBzdGF0ZSAhPSBxdWVyeVBhcmFtcyBjb250cm9sXHJcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xyXG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykpIHtcclxuICAgICAgICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdO1xyXG4gICAgICAgICAgaWYgKGlzRW1wdHkoaW5wdXRDb250ZXh0KSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dElkKSlcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXRJZCkpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5ub3RFcXVhbHMoaW5wdXRDb250ZXh0W2lucHV0SWRdLCBwYXJhbXNbaW5wdXRJZF0pKVxyXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICBJTlBVVF9TVEFURV9DT05URVhULFxyXG4gICAgICAgICAgICAgICAgICBpbnB1dElkLFxyXG4gICAgICAgICAgICAgICAgICAocGFyYW1zW2lucHV0SWRdIHx8IHBhcmFtc1tpbnB1dElkXSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICA/IHBhcmFtc1tpbnB1dElkXVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgZGVib3VuY2VUaW1lKHJlc3VsdHMuZGVsYXkgfHwgMSksXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xyXG4gICAgICAgIHBhcmFtczogeyAuLi5zdGF0ZSwgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWQgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXHJcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSAhPT0gLTEpXHJcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcclxuICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZFN0YXRlW2lkXSA9IHN0YXRlW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMoZmlsdGVyZWRTdGF0ZSwgdGhpcy5pbnB1dFNjaGVtYXMpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW50ZXJuYWxJbnB1dHNDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSA9PT0gLTEpLFxyXG4gICAgICBtYXAoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLmNvbmZpZy5mYWNldHM7XHJcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5pZCA9PT0gbGFzdFVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgICBpbnB1dENvbmZpZyA9IGlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5wdXRDb25maWcgJiYgaW5wdXRDb25maWcudGFyZ2V0KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnB1dENvbmZpZyxcclxuICAgICAgICAgICAgdmFsdWU6IHN0YXRlW2xhc3RVcGRhdGVkXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHsgaW5wdXRDb25maWcsIHZhbHVlIH0pID0+IHtcclxuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGlucHV0Q29uZmlnO1xyXG4gICAgICAvLyB1cGRhdGUgaW50ZXJuYWwgZmlsdGVyc1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ucXVlcnkgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLm9mZnNldCA9IDA7XHJcbiAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1NpbmdsZUZhY2V0UmVxdWVzdCh0YXJnZXQpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xyXG4gICAgY29uc3QgeyBnbG9iYWxQYXJhbXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XHJcbiAgICB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICAuLi5nbG9iYWxQYXJhbXMsXHJcbiAgICAgICAgZmFjZXRzOiBbe1xyXG4gICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgbG9hZGluZ1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVzdWx0c0xvYWRpbmcoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcclxuXHJcbiAgICBpZiAoIWZhY2V0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXHJcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5waXBlKFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0c1BhcmFtcyA9IHsgLi4ucGFyYW1zIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIGZhY2V0c1BhcmFtcyk7XHJcbiAgICAgICAgLy8gdXBkYXRlZCBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcclxuICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZ2xvYmFsUGFyYW1zID0geyAuLi5mYWNldHNQYXJhbXMgfTtcclxuICAgICAgICByZXR1cm4gZmFjZXRzUGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgZGVib3VuY2VUaW1lKGZhY2V0cy5kZWxheSB8fCAxKSxcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICBwYXJhbXMuZmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb25maWcuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcclxuICAgICAgICAgIGlucHV0cy5maWx0ZXIoKHsgdHlwZSB9KSA9PiBbJ2xpbmsnLCAnbWFwJywgJ2hpc3RvZ3JhbSddLmluY2x1ZGVzKHR5cGUpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gcmVzZXQgb2Zmc2V0XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ub2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICBjb25zdCB7IGxpbWl0LCBxdWVyeSwgb2Zmc2V0IH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcclxuICAgICAgICAgICAgICBwYXJhbXMuZmFjZXRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVSZXF1ZXN0JDogT2JzZXJ2YWJsZTxhbnk+ID0gb2YodHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZUtleXMubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5pbml0aWFsaXplVmFsdWVzKSkge1xyXG4gICAgICAgICAgaW5pdGlhbGl6ZVJlcXVlc3QkID0gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICBmYWNldHM6IHN0YXRlLmZhY2V0cyxcclxuICAgICAgICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVSZXF1ZXN0JC5waXBlKFxyXG4gICAgICAgICAgdGFwKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZmFjZXRzKSB7XHJcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZmFjZXRzKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRLZXkpID0+IHRoaXMuaW5pdGlhbGl6ZUtleXMuaW5jbHVkZXMoaW5wdXRLZXkpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0S2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0gPSByZXNwb25zZS5mYWNldHNbaW5wdXRLZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgc3dpdGNoTWFwVG8ob2Yoc3RhdGUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpKVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5vbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBmYWNldCBsaW5rc1xyXG4gICAgdGhpcy5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmFjZXRzOiByZXNwb25zZUZhY2V0cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzOiByZXNwb25zZVZhbHVlcywgZmlsdGVyZWRfdG90YWxfY291bnQgfSA9IHJlc3BvbnNlRmFjZXRzW2lkXTtcclxuICAgICAgICBjb25zdCB7IGxpbWl0LCBvZmZzZXQsIHZhbHVlczogc3RhdGVWYWx1ZXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclN0YXRlID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XHJcbiAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcclxuICAgICAgICAgIC8vIGRlbGV0ZSBsb2FkaW5nIGVsZW1lbnRcclxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcy5wb3AoKTtcclxuICAgICAgICAgIC8vIG1lcmdlIG5ldyByZXN1bHRzXHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlVmFsdWVzLFxyXG4gICAgICAgICAgICAuLi5yZXNwb25zZVZhbHVlc1xyXG4gICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzID0gW1xyXG4gICAgICAgICAgICAuLi5yZXNwb25zZVZhbHVlc1xyXG4gICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChvZmZzZXQgKyBsaW1pdCkgPCBmaWx0ZXJlZF90b3RhbF9jb3VudCkge1xyXG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0OiBfdCgnZ2xvYmFsI2ZhY2V0X2xvYWRpbmdfdGV4dCcpLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiAnbG9hZGluZy10ZXh0LWxpbmsnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBudWxsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaWQsIHtcclxuICAgICAgICAgIGxpbmtzOiBmaWx0ZXJTdGF0ZS52YWx1ZXNcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcclxuICAgIGlmICghaXNFbXB0eSh0aGlzLmluaXRpYWxpemVWYWx1ZXMpKSB7XHJcbiAgICAgIC8vIGludGlhbFZhbHVlcyBhbmQgcmVzcG9uc2VGYWNldHMgbWVyZ2Ugc3RyYXRlZ3lcclxuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VGYWNldHMpLmZvckVhY2goKGlucHV0S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0pIHtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZXMgPSB0aGlzLmluaXRpYWxpemVWYWx1ZXNbaW5wdXRLZXldLnZhbHVlcy5tYXAoKGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVWYWx1ZSA9IHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XS52YWx1ZXMuZmluZChcclxuICAgICAgICAgICAgICAoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQgPT09IGluaXRpYWxWYWx1ZS5wYXlsb2FkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uaW5pdGlhbFZhbHVlLFxyXG4gICAgICAgICAgICAgIGNvdW50ZXI6IHNpbmdsZVZhbHVlPy5jb3VudGVyIHx8IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gc29ydCBieSBjb3VudGVyXHJcbiAgICAgICAgICB1cGRhdGVkVmFsdWVzLnNvcnQoKGEsIGIpID0+IGIuY291bnRlciAtIGEuY291bnRlcik7XHJcbiAgICAgICAgICByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzID0gdXBkYXRlZFZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2VGYWNldHMpLmZvckVhY2goKGlucHV0S2V5KSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcclxuICAgICAgY29uc3QgeyBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldO1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lucHV0S2V5XS5maWx0ZXJlZF90b3RhbF9jb3VudCA9IGZpbHRlcmVkX3RvdGFsX2NvdW50O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywge1xyXG4gICAgICAuLi5yZXNwb25zZSxcclxuICAgICAgZmFjZXRzOiByZXNwb25zZUZhY2V0c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmFjZXRzU2Nyb2xsKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcclxuICAgICAgICBpbnB1dHNcclxuICAgICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcclxuICAgICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC50eXBlID09PSAnbGluaycpXHJcbiAgICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZhY2V0LWNvbnRhaW5lci0ke2lkfSAubjctaW5wdXQtbGlua2ApO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGwkID0gZnJvbUV2ZW50KHNjcm9sbEVsLCAnc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIHNjcm9sbCQucGlwZShcclxuICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkX3RvdGFsX2NvdW50LFxyXG4gICAgICAgICAgICAgIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcclxuICAgICAgICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodClcclxuICAgICAgICAgICAgICAgICYmIChvZmZzZXQgKyBsaW1pdCA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KVxyXG4gICAgICAgICAgICAgICAgJiYgbG9hZGluZyA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ub2Zmc2V0ID0gb2Zmc2V0ICsgbGltaXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2luZ2xlRmFjZXRSZXF1ZXN0KGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1F1ZXJ5UGFyYW1LZXkgPSAoaW5wdXQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXQpO1xyXG5cclxuICBub3RFcXVhbHModmFsMSwgdmFsMikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSkge1xyXG4gICAgICByZXR1cm4gISF4b3IodmFsMSwgdmFsMikubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDEgIT09IHZhbDI7XHJcbiAgfVxyXG59XHJcbiJdfQ==