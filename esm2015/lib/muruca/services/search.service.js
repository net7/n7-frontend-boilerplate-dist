/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
/** @type {?} */
export const INPUT_STATE_CONTEXT = 'input';
/** @type {?} */
export const FACET_STATE_CONTEXT = 'facet';
/** @type {?} */
export const RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
/** @type {?} */
export const FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
export class MrSearchService {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} communication
     */
    constructor(router, activatedRoute, communication) {
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
        () => this.config);
    }
    /**
     * @param {?} searchId
     * @param {?} config
     * @return {?}
     */
    init(searchId, config) {
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
    }
    /**
     * @param {?} context
     * @param {?=} id
     * @return {?}
     */
    getState$(context, id) {
        /** @type {?} */
        const stateId = id ? `${context}.${id}` : context;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does'nt exists`);
        }
        return this.state$[stateId];
    }
    /**
     * @param {?} context
     * @return {?}
     */
    addStateContext(context) {
        if (this.state$[context]) {
            throw Error(`State key "${context}" already exists`);
        }
        // initial state
        this.contextState[context] = {};
        // create stream
        this.state$[context] = new Subject();
    }
    /**
     * @param {?} context
     * @param {?} id
     * @return {?}
     */
    addState(context, id) {
        /** @type {?} */
        const stateId = `${context}.${id}`;
        if (!this.state$[context]) {
            throw Error(`
        State context "${context}" does'nt exists.
        You must add context first
      `);
        }
        if (this.state$[stateId]) {
            throw Error(`State key "${stateId}" already exists`);
        }
        // create stream
        this.state$[stateId] = new Subject();
    }
    /**
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    setState(context, id, newValue) {
        /** @type {?} */
        const stateId = `${context}.${id}`;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does'nt exists`);
        }
        /** @type {?} */
        let value = newValue;
        // hook control
        if (this.beforeHook[stateId]) {
            value = this.beforeHook[stateId](value);
        }
        // update stream
        this.state$[stateId].next(value);
        // update context
        this.setContextState(context, id, value);
    }
    /**
     * @param {?} context
     * @param {?} id
     * @param {?} hook
     * @return {?}
     */
    setBeforeHook(context, id, hook) {
        /** @type {?} */
        const stateId = `${context}.${id}`;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does'nt exists`);
        }
        this.beforeHook[stateId] = hook;
    }
    /**
     * @return {?}
     */
    reset() {
        // clear input states
        Object.keys(this.contextState[INPUT_STATE_CONTEXT]).forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.setState(INPUT_STATE_CONTEXT, id, null);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clear() {
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
    }
    /**
     * @private
     * @param {?} context
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    setContextState(context, id, newValue) {
        this.contextState[context] = Object.assign({}, this.contextState[context], { [`${id}`]: newValue });
        this.state$[context].next({
            lastUpdated: id,
            state: this.contextState[context]
        });
    }
    /**
     * @private
     * @return {?}
     */
    initInputState() {
        const { facets, layoutInputs } = this.config;
        // add context state
        this.addStateContext(INPUT_STATE_CONTEXT);
        // set facets input state
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            [header, ...inputs].forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, queryParam, schema }) => {
                this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    this.queryParamKeys.push(id);
                }
                // schemas
                if (schema) {
                    this.inputSchemas[id] = schema;
                }
            }));
        }));
        // set layout input state
        layoutInputs.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, queryParam, schema }) => {
            this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                this.queryParamKeys.push(id);
            }
            // schemas
            if (schema) {
                this.inputSchemas[id] = schema;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initFacetState() {
        const { facets } = this.config;
        // add context state
        this.addStateContext(FACET_STATE_CONTEXT);
        // set input state
        facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            [header, ...inputs].forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                this.addState(FACET_STATE_CONTEXT, input.id);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    onRouteChange() {
        const { results } = this.config.request;
        // add context state
        this.addStateContext(RESULTS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.addState(RESULTS_REQUEST_STATE_CONTEXT, id);
        }));
        this.activatedRoute.queryParams.pipe(
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => searchHelper.queryParamsToState(params, this.inputSchemas))), 
        // state != queryParams control
        tap((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (isEmpty(params)) {
                this.reset();
            }
            // update state
            if (!isEmpty(params)) {
                /** @type {?} */
                const inputContext = this.contextState[INPUT_STATE_CONTEXT];
                if (isEmpty(inputContext)) {
                    Object.keys(params)
                        .forEach((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    (inputId) => {
                        this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    }));
                }
                else {
                    Object.keys(inputContext)
                        .filter((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    (inputId) => this.notEquals(inputContext[inputId], params[inputId])))
                        .forEach((/**
                     * @param {?} inputId
                     * @return {?}
                     */
                    (inputId) => {
                        this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId] || null);
                    }));
                }
            }
        })), map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(results.delay || 1), map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        })), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.communication.request$(results.id, {
            params: Object.assign({}, state, { searchId: this.searchId }),
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'error', error);
            })
        }, results.provider || null)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'success', response);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    onInputsChange() {
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated }) => this.queryParamKeys.indexOf(lastUpdated) !== -1))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ state }) => {
            /** @type {?} */
            const filteredState = {};
            Object.keys(state).forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                if (this.queryParamKeys.indexOf(id) !== -1) {
                    filteredState[id] = state[id];
                }
            }));
            /** @type {?} */
            const queryParams = searchHelper.stateToQueryParams(filteredState, this.inputSchemas);
            this.router.navigate([], {
                queryParams
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    onResultsLoading() {
        const { facets } = this.config.request;
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
        (id) => {
            this.addState(FACETS_REQUEST_STATE_CONTEXT, id);
        }));
        this.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(facets.delay || 1), map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        })), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.communication.request$(facets.id, {
            params: Object.assign({}, state, { searchId: this.searchId }),
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            })
        }, facets.provider || null)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
        }));
        // update facet links
        this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ inputs }) => {
            Object.keys(inputs).forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                this.setState(FACET_STATE_CONTEXT, id, {
                    links: inputs[id]
                });
            }));
        }));
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    notEquals(val1, val2) {
        if (Array.isArray(val1) && Array.isArray(val2)) {
            return !!xor(val1, val2).length;
        }
        return val1 !== val2;
    }
}
MrSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MrSearchService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLE9BQU87O0FBQzFDLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxPQUFPOztBQUMxQyxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsZ0JBQWdCOztBQUM3RCxNQUFNLE9BQU8sNEJBQTRCLEdBQUcsZUFBZTtBQUczRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBdUIxQixZQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQztRQUZuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQXJCckMsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFFOUIsaUJBQVksR0FFaEIsRUFBRSxDQUFDO1FBRUMsaUJBQVksR0FFaEIsRUFBRSxDQUFDO1FBRUMsV0FBTSxH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QUFFLEVBQUUsRUFBRTtZQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsRUFBRTtvQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUk7UUFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7O1lBMVRGLFVBQVU7Ozs7WUFwQmMsTUFBTTtZQUF0QixjQUFjO1lBV2Qsb0JBQW9COzs7Ozs7O0lBVzNCLG1DQUFrQzs7Ozs7SUFFbEMsaUNBQWU7Ozs7O0lBRWYseUNBQXNDOzs7OztJQUV0Qyx1Q0FFTzs7Ozs7SUFFUCx1Q0FFTzs7Ozs7SUFFUCxpQ0FFTzs7Ozs7SUFFUCxxQ0FFTzs7SUF5QlAsb0NBQXFDOzs7OztJQXRCbkMsaUNBQXNCOzs7OztJQUN0Qix5Q0FBc0M7Ozs7O0lBQ3RDLHdDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBzd2l0Y2hNYXAsXG4gIG1hcCxcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBpc0VtcHR5LCB4b3IgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBzZWFyY2hIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7IElucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXQnO1xuZXhwb3J0IGNvbnN0IFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhUID0gJ3Jlc3VsdHNSZXF1ZXN0JztcbmV4cG9ydCBjb25zdCBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0c1JlcXVlc3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZWFyY2hJZDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIHByaXZhdGUgY29uZmlnO1xuXG4gIHByaXZhdGUgcXVlcnlQYXJhbUtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBpbnB1dFNjaGVtYXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBJbnB1dFNjaGVtYTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgY29udGV4dFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBzdGF0ZSQ6IHtcbiAgICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGJlZm9yZUhvb2s6IHtcbiAgICBba2V5OiBzdHJpbmddOiAodmFsdWU6IGFueSkgPT4gYW55O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIHB1YmxpYyBpbml0KHNlYXJjaElkLCBjb25maWcpIHtcbiAgICB0aGlzLnNlYXJjaElkID0gc2VhcmNoSWQ7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAvLyBmaXJzdCBjbGVhclxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIC8vIGluaXRpYWwgc3RhdGVzXG4gICAgdGhpcy5pbml0SW5wdXRTdGF0ZSgpO1xuICAgIHRoaXMuaW5pdEZhY2V0U3RhdGUoKTtcblxuICAgIC8vIGxpc3RlbmVyc1xuICAgIHRoaXMub25JbnB1dHNDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUmVzdWx0c0xvYWRpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcblxuICBwdWJsaWMgZ2V0U3RhdGUkKGNvbnRleHQ6IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBTdWJqZWN0PGFueT4ge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBpZCA/IGAke2NvbnRleHR9LiR7aWR9YCA6IGNvbnRleHQ7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlJFtzdGF0ZUlkXTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZUNvbnRleHQoY29udGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtjb250ZXh0fVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge307XG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBcbiAgICAgICAgU3RhdGUgY29udGV4dCBcIiR7Y29udGV4dH1cIiBkb2VzJ250IGV4aXN0cy5cbiAgICAgICAgWW91IG11c3QgYWRkIGNvbnRleHQgZmlyc3RcbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke3N0YXRlSWR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIHNldFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIC8vIGhvb2sgY29udHJvbFxuICAgIGlmICh0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0ubmV4dCh2YWx1ZSk7XG4gICAgLy8gdXBkYXRlIGNvbnRleHRcbiAgICB0aGlzLnNldENvbnRleHRTdGF0ZShjb250ZXh0LCBpZCwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHNldEJlZm9yZUhvb2soY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBob29rKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMnbnQgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdID0gaG9vaztcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICAvLyBjbGVhciBpbnB1dCBzdGF0ZXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZSA9IHt9O1xuICAgIHRoaXMuc3RhdGUkID0ge307XG4gICAgdGhpcy5iZWZvcmVIb29rID0ge307XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHtcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxuICAgICAgW2Ake2lkfWBdOiBuZXdWYWx1ZVxuICAgIH07XG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XG4gICAgICBsYXN0VXBkYXRlZDogaWQsXG4gICAgICBzdGF0ZTogdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMsIGxheW91dElucHV0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBmYWNldHMgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSB9KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICAgIC8vIGlzIHF1ZXJ5IHBhcmFtP1xuICAgICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY2hlbWFzXG4gICAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxuICAgIGxheW91dElucHV0cy5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEgfSkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjaGVtYXNcbiAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpbnB1dC5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICAvLyBmaXggaW5pdGlhbCBsaXN0ZW5lcnMgKHN5bWJvbGljIHRpbWVvdXQpXG4gICAgICBkZWxheSgxKSxcbiAgICAgIC8vIHF1ZXJ5IHBhcmFtcyB0byBzdGF0ZVxuICAgICAgbWFwKChwYXJhbXMpID0+IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zLCB0aGlzLmlucHV0U2NoZW1hcykpLFxuICAgICAgLy8gc3RhdGUgIT0gcXVlcnlQYXJhbXMgY29udHJvbFxuICAgICAgdGFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxuICAgICAgICBpZiAoIWlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdO1xuICAgICAgICAgIGlmIChpc0VtcHR5KGlucHV0Q29udGV4dCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dENvbnRleHQpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMubm90RXF1YWxzKGlucHV0Q29udGV4dFtpbnB1dElkXSwgcGFyYW1zW2lucHV0SWRdKSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSB8fCBudWxsKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKHJlc3VsdHMuZGVsYXkgfHwgMSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChyZXN1bHRzLmlkLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5zdGF0ZSwgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWQgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcmVzdWx0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbklucHV0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgIT09IC0xKVxuICAgICkuc3Vic2NyaWJlKCh7IHN0YXRlIH0pID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWx0ZXJlZFN0YXRlW2lkXSA9IHN0YXRlW2lkXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMoZmlsdGVyZWRTdGF0ZSwgdGhpcy5pbnB1dFNjaGVtYXMpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlc3VsdHNMb2FkaW5nKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgaWYgKCFmYWNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRTdGF0ZSQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJykucGlwZShcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUoZmFjZXRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcbiAgICAgICAgcGFyYW1zOiB7IC4uLnN0YXRlLCBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZCB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgZmFjZXQgbGlua3NcbiAgICB0aGlzLmdldFN0YXRlJChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpLnN1YnNjcmliZSgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlkLCB7XG4gICAgICAgICAgbGlua3M6IGlucHV0c1tpZF1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5vdEVxdWFscyh2YWwxLCB2YWwyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSkge1xuICAgICAgcmV0dXJuICEheG9yKHZhbDEsIHZhbDIpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgIT09IHZhbDI7XG4gIH1cbn1cbiJdfQ==