/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
/** @type {?} */
export var INPUT_STATE_CONTEXT = 'input';
/** @type {?} */
export var FACET_STATE_CONTEXT = 'facet';
/** @type {?} */
export var RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
/** @type {?} */
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
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this.config; });
    }
    /**
     * @param {?} searchId
     * @param {?} config
     * @return {?}
     */
    MrSearchService.prototype.init = /**
     * @param {?} searchId
     * @param {?} config
     * @return {?}
     */
    function (searchId, config) {
        this.searchId = searchId;
        this.config = config;
        // first clear
        this.clear();
        // initial states
        this.initInputState();
        this.initFacetState();
        // listeners
        this.onInputsChange();
        this.onRouteChange();
        this.onResultsLoading();
    };
    /**
     * @param {?} context
     * @param {?=} id
     * @return {?}
     */
    MrSearchService.prototype.getState$ = /**
     * @param {?} context
     * @param {?=} id
     * @return {?}
     */
    function (context, id) {
        /** @type {?} */
        var stateId = id ? context + "." + id : context;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does'nt exists");
        }
        return this.state$[stateId];
    };
    /**
     * @param {?} context
     * @return {?}
     */
    MrSearchService.prototype.addStateContext = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        if (this.state$[context]) {
            throw Error("State key \"" + context + "\" already exists");
        }
        // initial state
        this.contextState[context] = {};
        // create stream
        this.state$[context] = new Subject();
    };
    /**
     * @param {?} context
     * @param {?} id
     * @return {?}
     */
    MrSearchService.prototype.addState = /**
     * @param {?} context
     * @param {?} id
     * @return {?}
     */
    function (context, id) {
        /** @type {?} */
        var stateId = context + "." + id;
        if (!this.state$[context]) {
            throw Error("\n        State context \"" + context + "\" does'nt exists.\n        You must add context first\n      ");
        }
        if (this.state$[stateId]) {
            throw Error("State key \"" + stateId + "\" already exists");
        }
        // create stream
        this.state$[stateId] = new Subject();
    };
    /**
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    MrSearchService.prototype.setState = /**
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    function (context, id, newValue) {
        /** @type {?} */
        var stateId = context + "." + id;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does'nt exists");
        }
        /** @type {?} */
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
    /**
     * @param {?} context
     * @param {?} id
     * @param {?} hook
     * @return {?}
     */
    MrSearchService.prototype.setBeforeHook = /**
     * @param {?} context
     * @param {?} id
     * @param {?} hook
     * @return {?}
     */
    function (context, id, hook) {
        /** @type {?} */
        var stateId = context + "." + id;
        if (!this.state$[stateId]) {
            throw Error("Key \"" + stateId + "\" does'nt exists");
        }
        this.beforeHook[stateId] = hook;
    };
    /**
     * @return {?}
     */
    MrSearchService.prototype.reset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // clear input states
        Object.keys(this.contextState[INPUT_STATE_CONTEXT]).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.setState(INPUT_STATE_CONTEXT, id, null);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.clear = /**
     * @private
     * @return {?}
     */
    function () {
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
    };
    /**
     * @private
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    MrSearchService.prototype.setContextState = /**
     * @private
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    function (context, id, newValue) {
        var _a;
        this.contextState[context] = tslib_1.__assign({}, this.contextState[context], (_a = {}, _a["" + id] = newValue, _a));
        this.state$[context].next({
            lastUpdated: id,
            state: this.contextState[context]
        });
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.initInputState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.config, facets = _a.facets, layoutInputs = _a.layoutInputs;
        // add context state
        this.addStateContext(INPUT_STATE_CONTEXT);
        // set facets input state
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var header = _a.header, inputs = _a.inputs;
            tslib_1.__spread([header], inputs).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id, queryParam = _a.queryParam, schema = _a.schema;
                _this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    _this.queryParamKeys.push(id);
                }
                // schemas
                if (schema) {
                    _this.inputSchemas[id] = schema;
                }
            }));
        }));
        // set layout input state
        layoutInputs.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, queryParam = _a.queryParam, schema = _a.schema;
            _this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                _this.queryParamKeys.push(id);
            }
            // schemas
            if (schema) {
                _this.inputSchemas[id] = schema;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.initFacetState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var facets = this.config.facets;
        // add context state
        this.addStateContext(FACET_STATE_CONTEXT);
        // set input state
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var header = _a.header, inputs = _a.inputs;
            tslib_1.__spread([header], inputs).forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                _this.addState(FACET_STATE_CONTEXT, input.id);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.onRouteChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var results = this.config.request.results;
        // add context state
        this.addStateContext(RESULTS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.addState(RESULTS_REQUEST_STATE_CONTEXT, id);
        }));
        this.activatedRoute.queryParams.pipe(
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return searchHelper.queryParamsToState(params, _this.inputSchemas); })), 
        // state != queryParams control
        tap((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (isEmpty(params)) {
                _this.reset();
            }
            // update state
            if (!isEmpty(params)) {
                /** @type {?} */
                var inputContext_1 = _this.contextState[INPUT_STATE_CONTEXT];
                if (isEmpty(inputContext_1)) {
                    Object.keys(params)
                        .forEach((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    }));
                }
                else {
                    Object.keys(inputContext_1)
                        .filter((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    function (inputId) { return _this.notEquals(inputContext_1[inputId], params[inputId]); }))
                        .forEach((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    function (inputId) {
                        _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId] || null);
                    }));
                }
            }
        })), map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(results.delay || 1), map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        })), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return _this.communication.request$(results.id, {
            params: tslib_1.__assign({}, state, { searchId: _this.searchId }),
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'error', error);
            })
        }, results.provider || null); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'success', response);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.onInputsChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.queryParamKeys.indexOf(lastUpdated) !== -1;
        }))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var state = _a.state;
            /** @type {?} */
            var filteredState = {};
            Object.keys(state).forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (_this.queryParamKeys.indexOf(id) !== -1) {
                    filteredState[id] = state[id];
                }
            }));
            /** @type {?} */
            var queryParams = searchHelper.stateToQueryParams(filteredState, _this.inputSchemas);
            _this.router.navigate([], {
                queryParams: queryParams
            });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchService.prototype.onResultsLoading = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var facets = this.config.request.facets;
        if (!facets) {
            return;
        }
        // add context state
        this.addStateContext(FACETS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.addState(FACETS_REQUEST_STATE_CONTEXT, id);
        }));
        this.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(facets.delay || 1), map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        })), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return _this.communication.request$(facets.id, {
            params: tslib_1.__assign({}, state, { searchId: _this.searchId }),
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            })
        }, facets.provider || null); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
        }));
        // update facet links
        this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var inputs = _a.inputs;
            Object.keys(inputs).forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.setState(FACET_STATE_CONTEXT, id, {
                    links: inputs[id]
                });
            }));
        }));
    };
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    MrSearchService.prototype.notEquals = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        if (Array.isArray(val1) && Array.isArray(val2)) {
            return !!xor(val1, val2).length;
        }
        return val1 !== val2;
    };
    MrSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MrSearchService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: CommunicationService }
    ]; };
    return MrSearchService;
}());
export { MrSearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.searchId;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.queryParamKeys;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.inputSchemas;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.contextState;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.state$;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.beforeHook;
    /** @type {?} */
    MrSearchService.prototype.getConfig;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    MrSearchService.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsR0FBRyxFQUNILFlBQVksRUFDWixLQUFLLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxZQUFZLE1BQU0sMEJBQTBCLENBQUM7O0FBR3BELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxPQUFPOztBQUMxQyxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsT0FBTzs7QUFDMUMsTUFBTSxLQUFPLDZCQUE2QixHQUFHLGdCQUFnQjs7QUFDN0QsTUFBTSxLQUFPLDRCQUE0QixHQUFHLGVBQWU7QUFFM0Q7SUF3QkUseUJBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBSDdDLGlCQUlLO1FBSEssV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFyQnJDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLGlCQUFZLEdBRWhCLEVBQUUsQ0FBQztRQUVDLGlCQUFZLEdBRWhCLEVBQUUsQ0FBQztRQUVDLFdBQU0sR0FFVixFQUFF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LEVBQUU7b0JBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO2lCQUNsQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsbUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFJLEVBQUUsSUFBSTtRQUNsQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkExVEYsVUFBVTs7OztnQkFwQmMsTUFBTTtnQkFBdEIsY0FBYztnQkFXZCxvQkFBb0I7O0lBb1U3QixzQkFBQztDQUFBLEFBM1RELElBMlRDO1NBMVRZLGVBQWU7Ozs7OztJQUMxQixtQ0FBa0M7Ozs7O0lBRWxDLGlDQUFlOzs7OztJQUVmLHlDQUFzQzs7Ozs7SUFFdEMsdUNBRU87Ozs7O0lBRVAsdUNBRU87Ozs7O0lBRVAsaUNBRU87Ozs7O0lBRVAscUNBRU87O0lBeUJQLG9DQUFxQzs7Ozs7SUF0Qm5DLGlDQUFzQjs7Ozs7SUFDdEIseUNBQXNDOzs7OztJQUN0Qyx3Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgc3dpdGNoTWFwLFxuICBtYXAsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNFbXB0eSwgeG9yIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQgeyBJbnB1dFNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9TVEFURV9DT05URVhUID0gJ2lucHV0JztcbmV4cG9ydCBjb25zdCBGQUNFVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0JztcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzUmVxdWVzdCc7XG5leHBvcnQgY29uc3QgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdmYWNldHNSZXF1ZXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgc2VhcmNoSWQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBwcml2YXRlIGNvbmZpZztcblxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgaW5wdXRTY2hlbWFzOiB7XG4gICAgW2tleTogc3RyaW5nXTogSW5wdXRTY2hlbWE7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGNvbnRleHRTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgc3RhdGUkOiB7XG4gICAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBiZWZvcmVIb29rOiB7XG4gICAgW2tleTogc3RyaW5nXTogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7IH1cblxuICBwdWJsaWMgaW5pdChzZWFyY2hJZCwgY29uZmlnKSB7XG4gICAgdGhpcy5zZWFyY2hJZCA9IHNlYXJjaElkO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgLy8gZmlyc3QgY2xlYXJcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlc1xuICAgIHRoaXMuaW5pdElucHV0U3RhdGUoKTtcbiAgICB0aGlzLmluaXRGYWNldFN0YXRlKCk7XG5cbiAgICAvLyBsaXN0ZW5lcnNcbiAgICB0aGlzLm9uSW5wdXRzQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJlc3VsdHNMb2FkaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG5cbiAgcHVibGljIGdldFN0YXRlJChjb250ZXh0OiBzdHJpbmcsIGlkPzogc3RyaW5nKTogU3ViamVjdDxhbnk+IHtcbiAgICBjb25zdCBzdGF0ZUlkID0gaWQgPyBgJHtjb250ZXh0fS4ke2lkfWAgOiBjb250ZXh0O1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcydudCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZSRbc3RhdGVJZF07XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGVDb250ZXh0KGNvbnRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7Y29udGV4dH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHt9O1xuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgXG4gICAgICAgIFN0YXRlIGNvbnRleHQgXCIke2NvbnRleHR9XCIgZG9lcydudCBleGlzdHMuXG4gICAgICAgIFlvdSBtdXN0IGFkZCBjb250ZXh0IGZpcnN0XG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtzdGF0ZUlkfVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcydudCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvLyBob29rIGNvbnRyb2xcbiAgICBpZiAodGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdLm5leHQodmFsdWUpO1xuICAgIC8vIHVwZGF0ZSBjb250ZXh0XG4gICAgdGhpcy5zZXRDb250ZXh0U3RhdGUoY29udGV4dCwgaWQsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRCZWZvcmVIb29rKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgaG9vaykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSA9IGhvb2s7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgLy8gY2xlYXIgaW5wdXQgc3RhdGVzXG4gICAgT2JqZWN0LmtleXModGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0U3RhdGUgPSB7fTtcbiAgICB0aGlzLnN0YXRlJCA9IHt9O1xuICAgIHRoaXMuYmVmb3JlSG9vayA9IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250ZXh0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7XG4gICAgICAuLi50aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSxcbiAgICAgIFtgJHtpZH1gXTogbmV3VmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdLm5leHQoe1xuICAgICAgbGFzdFVwZGF0ZWQ6IGlkLFxuICAgICAgc3RhdGU6IHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRJbnB1dFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoSU5QVVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgZmFjZXRzIGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXS5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEgfSkgPT4ge1xuICAgICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgICAvLyBpcyBxdWVyeSBwYXJhbT9cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2NoZW1hc1xuICAgICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHNldCBsYXlvdXQgaW5wdXQgc3RhdGVcbiAgICBsYXlvdXRJbnB1dHMuZm9yRWFjaCgoeyBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBzY2hlbWFzXG4gICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZhY2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaW5wdXQuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgLy8gZml4IGluaXRpYWwgbGlzdGVuZXJzIChzeW1ib2xpYyB0aW1lb3V0KVxuICAgICAgZGVsYXkoMSksXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcbiAgICAgIG1hcCgocGFyYW1zKSA9PiBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcywgdGhpcy5pbnB1dFNjaGVtYXMpKSxcbiAgICAgIC8vIHN0YXRlICE9IHF1ZXJ5UGFyYW1zIGNvbnRyb2xcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dENvbnRleHQgPSB0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXTtcbiAgICAgICAgICBpZiAoaXNFbXB0eShpbnB1dENvbnRleHQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRDb250ZXh0KVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLm5vdEVxdWFscyhpbnB1dENvbnRleHRbaW5wdXRJZF0sIHBhcmFtc1tpbnB1dElkXSkpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0gfHwgbnVsbCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShyZXN1bHRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4uc3RhdGUsIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpICE9PSAtMSlcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICAgICAgZmlsdGVyZWRTdGF0ZVtpZF0gPSBzdGF0ZVtpZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKGZpbHRlcmVkU3RhdGUsIHRoaXMuaW5wdXRTY2hlbWFzKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZXN1bHRzTG9hZGluZygpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcblxuICAgIGlmICghZmFjZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycpLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKGZhY2V0cy5kZWxheSB8fCAxKSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5zdGF0ZSwgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWQgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGZhY2V0IGxpbmtzXG4gICAgdGhpcy5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGlucHV0cykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpZCwge1xuICAgICAgICAgIGxpbmtzOiBpbnB1dHNbaWRdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBub3RFcXVhbHModmFsMSwgdmFsMikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbDEpICYmIEFycmF5LmlzQXJyYXkodmFsMikpIHtcbiAgICAgIHJldHVybiAhIXhvcih2YWwxLCB2YWwyKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB2YWwxICE9PSB2YWwyO1xuICB9XG59XG4iXX0=