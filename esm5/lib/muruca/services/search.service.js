/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
/** @type {?} */
export var INPUT_STATE_CONTEXT = 'input';
/** @type {?} */
export var FACET_STATE_CONTEXT = 'facet';
/** @type {?} */
export var RESULTS_STATE_CONTEXT = 'results';
/** @type {?} */
export var LINKS_STATE_CONTEXT = 'links';
var MrSearchService = /** @class */ (function () {
    function MrSearchService(router, activatedRoute, communication) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.queryParamKeys = [];
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this.config; });
    }
    /**
     * @param {?} config
     * @return {?}
     */
    MrSearchService.prototype.init = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
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
                var id = _a.id, queryParam = _a.queryParam;
                _this.addState(INPUT_STATE_CONTEXT, id);
                if (queryParam) {
                    _this.queryParamKeys.push(id);
                }
            }));
        }));
        // set layout input state
        layoutInputs.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, queryParam = _a.queryParam;
            _this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                _this.queryParamKeys.push(id);
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
        this.addStateContext(RESULTS_STATE_CONTEXT);
        // default states
        ['loading', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.addState(RESULTS_STATE_CONTEXT, id);
        }));
        this.activatedRoute.queryParams.pipe(
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return searchHelper.queryParamsToState(params); })), 
        // state != queryParams control
        tap((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (isEmpty(params) && !isEmpty(_this.contextState[INPUT_STATE_CONTEXT])) {
                _this.reset();
            }
            if (!isEmpty(params) && isEmpty(_this.contextState[INPUT_STATE_CONTEXT])) {
                // update state
                Object.keys(params).forEach((/**
                 * @param {?} inputId
                 * @return {?}
                 */
                function (inputId) {
                    _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                }));
            }
        })), map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(RESULTS_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(results.delay || 1), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return _this.communication.request$(results.id, {
            params: state,
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.setState(RESULTS_STATE_CONTEXT, 'error', error);
            })
        }, results.provider || null); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setState(RESULTS_STATE_CONTEXT, 'success', response);
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
            var queryParams = searchHelper.stateToQueryParams(filteredState);
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
        var links = this.config.request.links;
        if (!links) {
            return;
        }
        // add context state
        this.addStateContext(LINKS_STATE_CONTEXT);
        // default states
        ['loading', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.addState(LINKS_STATE_CONTEXT, id);
        }));
        this.getState$(RESULTS_STATE_CONTEXT, 'loading').pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.setState(LINKS_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(links.delay || 1), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return _this.communication.request$(links.id, {
            params: state,
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.setState(LINKS_STATE_CONTEXT, 'error', error);
            })
        }, links.provider || null); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setState(LINKS_STATE_CONTEXT, 'success', response);
        }));
        // update links
        this.getState$(LINKS_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            Object.keys(response).forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.setState(FACET_STATE_CONTEXT, id, {
                    links: response[id]
                });
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsR0FBRyxFQUNILFlBQVksRUFDWixLQUFLLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQzs7QUFFcEQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLE9BQU87O0FBQzFDLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxPQUFPOztBQUMxQyxNQUFNLEtBQU8scUJBQXFCLEdBQUcsU0FBUzs7QUFDOUMsTUFBTSxLQUFPLG1CQUFtQixHQUFHLE9BQU87QUFFMUM7SUFrQkUseUJBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBSDdDLGlCQUlLO1FBSEssV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFqQnJDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRTlCLGlCQUFZLEdBRWhCLEVBQUUsQ0FBQztRQUVDLFdBQU0sR0FFVixFQUFFLENBQUM7UUFFQyxlQUFVLEdBRWQsRUFBRSxDQUFDO1FBcUJBLGNB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SUFxQlAsb0NBQXFDOzs7OztJQWxCbkMsaUNBQXNCOzs7OztJQUN0Qix5Q0FBc0M7Ozs7O0lBQ3RDLHdDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBzd2l0Y2hNYXAsXG4gIG1hcCxcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9TVEFURV9DT05URVhUID0gJ2lucHV0JztcbmV4cG9ydCBjb25zdCBGQUNFVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0JztcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1NUQVRFX0NPTlRFWFQgPSAncmVzdWx0cyc7XG5leHBvcnQgY29uc3QgTElOS1NfU1RBVEVfQ09OVEVYVCA9ICdsaW5rcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZztcblxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29udGV4dFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBzdGF0ZSQ6IHtcbiAgICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGJlZm9yZUhvb2s6IHtcbiAgICBba2V5OiBzdHJpbmddOiAodmFsdWU6IGFueSkgPT4gYW55O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIHB1YmxpYyBpbml0KGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZXNcbiAgICB0aGlzLmluaXRJbnB1dFN0YXRlKCk7XG4gICAgdGhpcy5pbml0RmFjZXRTdGF0ZSgpO1xuXG4gICAgLy8gbGlzdGVuZXJzXG4gICAgdGhpcy5vbklucHV0c0NoYW5nZSgpO1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpO1xuICAgIHRoaXMub25SZXN1bHRzTG9hZGluZygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRTdGF0ZSQoY29udGV4dDogc3RyaW5nLCBpZD86IHN0cmluZyk6IFN1YmplY3Q8YW55PiB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGlkID8gYCR7Y29udGV4dH0uJHtpZH1gIDogY29udGV4dDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMnbnQgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUkW3N0YXRlSWRdO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlQ29udGV4dChjb250ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke2NvbnRleHR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7fTtcbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFxuICAgICAgICBTdGF0ZSBjb250ZXh0IFwiJHtjb250ZXh0fVwiIGRvZXMnbnQgZXhpc3RzLlxuICAgICAgICBZb3UgbXVzdCBhZGQgY29udGV4dCBmaXJzdFxuICAgICAgYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7c3RhdGVJZH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMnbnQgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbmV3VmFsdWU7XG4gICAgLy8gaG9vayBjb250cm9sXG4gICAgaWYgKHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0odmFsdWUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXS5uZXh0KHZhbHVlKTtcbiAgICAvLyB1cGRhdGUgY29udGV4dFxuICAgIHRoaXMuc2V0Q29udGV4dFN0YXRlKGNvbnRleHQsIGlkLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QmVmb3JlSG9vayhjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhvb2spIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcydudCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0gPSBob29rO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIC8vIGNsZWFyIGlucHV0IHN0YXRlc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCwgbnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHtcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxuICAgICAgW2Ake2lkfWBdOiBuZXdWYWx1ZVxuICAgIH07XG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XG4gICAgICBsYXN0VXBkYXRlZDogaWQsXG4gICAgICBzdGF0ZTogdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMsIGxheW91dElucHV0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBmYWNldHMgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0gfSkgPT4ge1xuICAgICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxuICAgIGxheW91dElucHV0cy5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpbnB1dC5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFJFU1VMVFNfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoUkVTVUxUU19TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICAvLyBmaXggaW5pdGlhbCBsaXN0ZW5lcnMgKHN5bWJvbGljIHRpbWVvdXQpXG4gICAgICBkZWxheSgxKSxcbiAgICAgIC8vIHF1ZXJ5IHBhcmFtcyB0byBzdGF0ZVxuICAgICAgbWFwKChwYXJhbXMpID0+IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zKSksXG4gICAgICAvLyBzdGF0ZSAhPSBxdWVyeVBhcmFtcyBjb250cm9sXG4gICAgICB0YXAoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAoaXNFbXB0eShwYXJhbXMpICYmICFpc0VtcHR5KHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKSkge1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW1wdHkocGFyYW1zKSAmJiBpc0VtcHR5KHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKSkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxuICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShyZXN1bHRzLmRlbGF5IHx8IDEpLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHJlc3VsdHMuaWQsIHtcbiAgICAgICAgcGFyYW1zOiBzdGF0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uSW5wdXRzQ2hhbmdlKCkge1xuICAgIHRoaXMuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSAhPT0gLTEpXG4gICAgKS5zdWJzY3JpYmUoKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgICAgIGZpbHRlcmVkU3RhdGVbaWRdID0gc3RhdGVbaWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoSGVscGVyLnN0YXRlVG9RdWVyeVBhcmFtcyhmaWx0ZXJlZFN0YXRlKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZXN1bHRzTG9hZGluZygpIHtcbiAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgaWYgKCFsaW5rcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoTElOS1NfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoTElOS1NfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRTdGF0ZSQoUkVTVUxUU19TVEFURV9DT05URVhULCAnbG9hZGluZycpLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKExJTktTX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKGxpbmtzLmRlbGF5IHx8IDEpLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGxpbmtzLmlkLCB7XG4gICAgICAgIHBhcmFtczogc3RhdGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKExJTktTX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgbGlua3MucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKExJTktTX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGxpbmtzXG4gICAgdGhpcy5nZXRTdGF0ZSQoTElOS1NfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpZCwge1xuICAgICAgICAgIGxpbmtzOiByZXNwb25zZVtpZF1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19