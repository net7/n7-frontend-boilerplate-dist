import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
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
        this.queryParamKeys = [];
        this.inputSchemas = {};
        this.contextState = {};
        this.internalFilterState = {
            globalParams: {},
            facets: {}
        };
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = function () { return _this.config; };
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
            .filter(function (id) { return !_this.internalFilterState.facets[id]; })
            .forEach(function (id) {
            _this.setState(INPUT_STATE_CONTEXT, id, null);
        });
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
                var id = _a.id, queryParam = _a.queryParam, schema = _a.schema, limit = _a.limit, type = _a.type;
                if (!id) {
                    return;
                }
                _this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    _this.queryParamKeys.push(id);
                }
                // schemas
                if (schema) {
                    _this.inputSchemas[id] = schema;
                }
                // links internal state
                if (type === 'link') {
                    _this.internalFilterState.facets[id] = {
                        id: id,
                        limit: limit,
                        offset: 0,
                        query: ''
                    };
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
        this.activatedRoute.queryParams.pipe(
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
                        .filter(function (inputId) { return _this.queryParamKeys[inputId]; })
                        .forEach(function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    });
                }
                else {
                    Object.keys(inputContext_1)
                        .filter(function (inputId) { return _this.queryParamKeys[inputId]; })
                        .filter(function (inputId) { return _this.notEquals(inputContext_1[inputId], params[inputId]); })
                        .forEach(function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId] || null);
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
                    return type === 'link';
                })
                    .forEach(function (_a) {
                    var id = _a.id;
                    var offset = 0;
                    var _b = _this.internalFilterState.facets[id], limit = _b.limit, query = _b.query;
                    params.facets.push({
                        id: id, limit: limit, offset: offset, query: query
                    });
                });
            });
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
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
                _this.setState(FACET_STATE_CONTEXT, id, {
                    links: responseFacets[id].values
                });
            });
        });
    };
    MrSearchService.prototype.onFacetsRequestSuccess = function (response) {
        var _this = this;
        var responseFacets = response.facets;
        Object.keys(responseFacets).forEach(function (inputKey) {
            // update internal filter state
            var total_count = responseFacets[inputKey].total_count;
            _this.internalFilterState.facets[inputKey].total_count = total_count;
            responseFacets[inputKey].values = responseFacets[inputKey].values.map(function (item) { return (__assign(__assign({}, item), { payload: item.payload && typeof item.payload === 'string' ? encodeURIComponent(item.payload) : item.payload })); });
        });
        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsR0FBRyxFQUNILFlBQVksRUFDWixLQUFLLEVBQ0wsR0FBRyxFQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxZQUFZLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7QUFDL0MsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQUcsZUFBZSxDQUFDO0FBRzVEO0lBaUNFLHlCQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQztRQUg3QyxpQkFJSztRQUhLLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBL0JyQyxtQkFBYyxH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QUEsdUJBQzNFLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQzNHLEVBSDhFLENBRzlFLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsSUFBSTtRQUNsQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkExWmlCLE1BQU07Z0JBQ0UsY0FBYztnQkFDZixvQkFBb0I7O0lBcENsQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTt5Q0FtQ08sTUFBTTtZQUNFLGNBQWM7WUFDZixvQkFBb0I7T0FwQ2xDLGVBQWUsQ0E2YjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdiRCxJQTZiQztTQTdiWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIHN3aXRjaE1hcCxcbiAgbWFwLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNFbXB0eSwgeG9yIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQgeyBNcklucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXQnO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT05fU1RBVEVfQ09OVEVYVCA9ICdzZWN0aW9uJztcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzUmVxdWVzdCc7XG5leHBvcnQgY29uc3QgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdmYWNldHNSZXF1ZXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgc2VhcmNoSWQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBwcml2YXRlIGNvbmZpZztcblxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgaW5wdXRTY2hlbWFzOiB7XG4gICAgW2tleTogc3RyaW5nXTogTXJJbnB1dFNjaGVtYTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgY29udGV4dFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlclN0YXRlOiB7XG4gICAgZ2xvYmFsUGFyYW1zOiBhbnk7XG4gICAgZmFjZXRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgfSA9IHtcbiAgICBnbG9iYWxQYXJhbXM6IHt9LFxuICAgIGZhY2V0czoge31cbiAgfTtcblxuICBwcml2YXRlIHN0YXRlJDoge1xuICAgIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55PjtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgYmVmb3JlSG9vazoge1xuICAgIFtrZXk6IHN0cmluZ106ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICkgeyB9XG5cbiAgcHVibGljIGluaXQoc2VhcmNoSWQsIGNvbmZpZykge1xuICAgIHRoaXMuc2VhcmNoSWQgPSBzZWFyY2hJZDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIC8vIGZpcnN0IGNsZWFyXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZXNcbiAgICB0aGlzLmluaXRJbnB1dFN0YXRlKCk7XG4gICAgdGhpcy5pbml0RmFjZXRTdGF0ZSgpO1xuICAgIHRoaXMuaW5pdFNlY3Rpb25TdGF0ZSgpO1xuXG4gICAgLy8gbGlzdGVuZXJzXG4gICAgdGhpcy5vbklucHV0c0NoYW5nZSgpO1xuICAgIHRoaXMub25JbnRlcm5hbElucHV0c0NoYW5nZSgpO1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpO1xuICAgIHRoaXMub25SZXN1bHRzTG9hZGluZygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRTdGF0ZSQoY29udGV4dDogc3RyaW5nLCBpZD86IHN0cmluZyk6IFN1YmplY3Q8YW55PiB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGlkID8gYCR7Y29udGV4dH0uJHtpZH1gIDogY29udGV4dDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUkW3N0YXRlSWRdO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlQ29udGV4dChjb250ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke2NvbnRleHR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7fTtcbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFxuICAgICAgICBTdGF0ZSBjb250ZXh0IFwiJHtjb250ZXh0fVwiIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICBZb3UgbXVzdCBhZGQgY29udGV4dCBmaXJzdFxuICAgICAgYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7c3RhdGVJZH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbmV3VmFsdWU7XG4gICAgLy8gaG9vayBjb250cm9sXG4gICAgaWYgKHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0odmFsdWUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXS5uZXh0KHZhbHVlKTtcbiAgICAvLyB1cGRhdGUgY29udGV4dFxuICAgIHRoaXMuc2V0Q29udGV4dFN0YXRlKGNvbnRleHQsIGlkLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QmVmb3JlSG9vayhjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhvb2spIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0gPSBob29rO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIC8vIGNsZWFyIGlucHV0IHN0YXRlc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKVxuICAgICAgLmZpbHRlcigoaWQpID0+ICF0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXSlcbiAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZSA9IHt9O1xuICAgIHRoaXMuc3RhdGUkID0ge307XG4gICAgdGhpcy5iZWZvcmVIb29rID0ge307XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHtcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxuICAgICAgW2Ake2lkfWBdOiBuZXdWYWx1ZVxuICAgIH07XG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XG4gICAgICBsYXN0VXBkYXRlZDogaWQsXG4gICAgICBzdGF0ZTogdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMsIGxheW91dElucHV0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBmYWNldHMgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcbiAgICAgICAgLmZvckVhY2goKHtcbiAgICAgICAgICBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hLCBsaW1pdCwgdHlwZVxuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgICAgIC8vIGlzIHF1ZXJ5IHBhcmFtP1xuICAgICAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNjaGVtYXNcbiAgICAgICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGlua3MgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXSA9IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgIHF1ZXJ5OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxuICAgIGxheW91dElucHV0cy5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEgfSkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjaGVtYXNcbiAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxuICAgICAgICAuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlucHV0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTZWN0aW9uU3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoU0VDVElPTl9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoU0VDVElPTl9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgLy8gZml4IGluaXRpYWwgbGlzdGVuZXJzIChzeW1ib2xpYyB0aW1lb3V0KVxuICAgICAgZGVsYXkoMSksXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcbiAgICAgIG1hcCgocGFyYW1zKSA9PiBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcywgdGhpcy5pbnB1dFNjaGVtYXMpKSxcbiAgICAgIC8vIHN0YXRlICE9IHF1ZXJ5UGFyYW1zIGNvbnRyb2xcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dENvbnRleHQgPSB0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXTtcbiAgICAgICAgICBpZiAoaXNFbXB0eShpbnB1dENvbnRleHQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXNbaW5wdXRJZF0pXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRDb250ZXh0KVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzW2lucHV0SWRdKVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLm5vdEVxdWFscyhpbnB1dENvbnRleHRbaW5wdXRJZF0sIHBhcmFtc1tpbnB1dElkXSkpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0gfHwgbnVsbCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShyZXN1bHRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4uc3RhdGUsIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpICE9PSAtMSlcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICAgICAgZmlsdGVyZWRTdGF0ZVtpZF0gPSBzdGF0ZVtpZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKGZpbHRlcmVkU3RhdGUsIHRoaXMuaW5wdXRTY2hlbWFzKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnRlcm5hbElucHV0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgPT09IC0xKSxcbiAgICAgIG1hcCgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLmNvbmZpZy5mYWNldHM7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZztcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaWQgPT09IGxhc3RVcGRhdGVkKSB7XG4gICAgICAgICAgICAgIGlucHV0Q29uZmlnID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5wdXRDb25maWcgJiYgaW5wdXRDb25maWcudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnLFxuICAgICAgICAgICAgdmFsdWU6IHN0YXRlW2xhc3RVcGRhdGVkXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCksXG4gICAgKS5zdWJzY3JpYmUoKHsgaW5wdXRDb25maWcsIHZhbHVlIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpbnB1dENvbmZpZztcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXJzXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ucXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG4gICAgY29uc3QgeyBnbG9iYWxQYXJhbXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcbiAgICB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAuLi5nbG9iYWxQYXJhbXMsXG4gICAgICAgIGZhY2V0czogW3tcbiAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcbiAgICAgICAgfV0sXG4gICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMub25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUmVzdWx0c0xvYWRpbmcoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICBpZiAoIWZhY2V0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5waXBlKFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgZmFjZXRzUGFyYW1zID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIGZhY2V0c1BhcmFtcyk7XG4gICAgICAgIC8vIHVwZGF0ZWQgaW50ZXJuYWwgZmlsdGVyIHN0YXRlXG4gICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5nbG9iYWxQYXJhbXMgPSB7IC4uLmZhY2V0c1BhcmFtcyB9O1xuICAgICAgICByZXR1cm4gZmFjZXRzUGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUoZmFjZXRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgcGFyYW1zLmZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgICAgIGlucHV0cy5maWx0ZXIoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAnbGluaycpXG4gICAgICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgIGNvbnN0IHsgbGltaXQsIHF1ZXJ5IH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcbiAgICAgICAgICAgICAgcGFyYW1zLmZhY2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpKVxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGZhY2V0IGxpbmtzXG4gICAgdGhpcy5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VGYWNldHMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaWQsIHtcbiAgICAgICAgICBsaW5rczogcmVzcG9uc2VGYWNldHNbaWRdLnZhbHVlc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcbiAgICAgIGNvbnN0IHsgdG90YWxfY291bnQgfSA9IHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XTtcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaW5wdXRLZXldLnRvdGFsX2NvdW50ID0gdG90YWxfY291bnQ7XG4gICAgICByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIHBheWxvYWQ6IGl0ZW0ucGF5bG9hZCAmJiB0eXBlb2YgaXRlbS5wYXlsb2FkID09PSAnc3RyaW5nJyA/IGVuY29kZVVSSUNvbXBvbmVudChpdGVtLnBheWxvYWQpIDogaXRlbS5wYXlsb2FkXG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIG5vdEVxdWFscyh2YWwxLCB2YWwyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSkge1xuICAgICAgcmV0dXJuICEheG9yKHZhbDEsIHZhbDIpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgIT09IHZhbDI7XG4gIH1cbn1cbiJdfQ==