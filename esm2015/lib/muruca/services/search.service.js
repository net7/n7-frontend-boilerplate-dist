import { __decorate, __metadata } from "tslib";
/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, of, Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, takeUntil, switchMapTo } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
import { _t } from '@n7-frontend/core';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
export const INPUT_STATE_CONTEXT = 'input';
export const FACET_STATE_CONTEXT = 'facet';
export const SECTION_STATE_CONTEXT = 'section';
export const RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
export const FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
let MrSearchService = class MrSearchService {
    constructor(router, activatedRoute, communication) {
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
        this.getConfig = () => this.config;
        this.isQueryParamKey = (input) => this.queryParamKeys.includes(input);
    }
    init(searchId, config) {
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
    }
    getState$(context, id) {
        const stateId = id ? `${context}.${id}` : context;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does not exist`);
        }
        return this.state$[stateId];
    }
    addStateContext(context) {
        if (this.state$[context]) {
            throw Error(`State key "${context}" already exists`);
        }
        // initial state
        this.contextState[context] = {};
        // create stream
        this.state$[context] = new Subject();
    }
    addState(context, id) {
        const stateId = `${context}.${id}`;
        if (!this.state$[context]) {
            throw Error(`
        State context "${context}" does not exist.
        You must add context first
      `);
        }
        if (this.state$[stateId]) {
            throw Error(`State key "${stateId}" already exists`);
        }
        // create stream
        this.state$[stateId] = new Subject();
    }
    setState(context, id, newValue) {
        const stateId = `${context}.${id}`;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does not exist`);
        }
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
    setBeforeHook(context, id, hook) {
        const stateId = `${context}.${id}`;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does not exist`);
        }
        this.beforeHook[stateId] = hook;
    }
    reset() {
        // clear input states
        Object.keys(this.contextState[INPUT_STATE_CONTEXT])
            .filter((id) => !this.internalFilterKeys.includes(id))
            .forEach((id) => {
            this.setState(INPUT_STATE_CONTEXT, id, null);
        });
    }
    destroy() {
        this.destroyed$.next();
    }
    clear() {
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
    }
    setContextState(context, id, newValue) {
        this.contextState[context] = Object.assign(Object.assign({}, this.contextState[context]), { [`${id}`]: newValue });
        this.state$[context].next({
            lastUpdated: id,
            state: this.contextState[context]
        });
    }
    initInputState() {
        const { facets, layoutInputs } = this.config;
        // add context state
        this.addStateContext(INPUT_STATE_CONTEXT);
        // set facets input state
        facets.sections.forEach(({ header, inputs }) => {
            [header, ...inputs]
                .filter((input) => input)
                .forEach(({ id, queryParam, schema, limit, type, target, initialize }) => {
                if (!id) {
                    return;
                }
                this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    this.queryParamKeys.push(id);
                }
                // input has initial values request
                if (initialize) {
                    this.initializeKeys.push(id);
                }
                // schemas
                if (schema) {
                    this.inputSchemas[id] = schema;
                }
                // links internal state
                if (['link', 'map', 'histogram'].includes(type)) {
                    this.internalFilterState.facets[id] = {
                        id,
                        limit,
                        offset: 0,
                        query: '',
                        loading: false,
                        values: []
                    };
                }
                // internal filters
                if (target) {
                    this.internalFilterKeys.push(id);
                }
            });
        });
        // set layout input state
        layoutInputs.forEach(({ id, queryParam, schema }) => {
            this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                this.queryParamKeys.push(id);
            }
            // schemas
            if (schema) {
                this.inputSchemas[id] = schema;
            }
        });
    }
    initFacetState() {
        const { facets } = this.config;
        // add context state
        this.addStateContext(FACET_STATE_CONTEXT);
        // set input state
        facets.sections.forEach(({ header, inputs }) => {
            [header, ...inputs]
                .filter((input) => input)
                .forEach((input) => {
                this.addState(FACET_STATE_CONTEXT, input.id);
            });
        });
    }
    initSectionState() {
        const { facets } = this.config;
        // add context state
        this.addStateContext(SECTION_STATE_CONTEXT);
        // set input state
        facets.sections.forEach(({ id }) => {
            this.addState(SECTION_STATE_CONTEXT, id);
        });
    }
    onRouteChange() {
        const { results } = this.config.request;
        // add context state
        this.addStateContext(RESULTS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach((id) => {
            this.addState(RESULTS_REQUEST_STATE_CONTEXT, id);
        });
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$), 
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map((params) => searchHelper.queryParamsToState(params, this.inputSchemas)), 
        // state != queryParams control
        tap((params) => {
            if (isEmpty(params)) {
                this.reset();
            }
            // update state
            if (!isEmpty(params)) {
                const inputContext = this.contextState[INPUT_STATE_CONTEXT];
                if (isEmpty(inputContext)) {
                    Object.keys(params)
                        .filter((inputId) => this.queryParamKeys.includes(inputId))
                        .forEach((inputId) => {
                        this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    });
                }
                else {
                    Object.keys(params)
                        .filter((inputId) => this.queryParamKeys.includes(inputId))
                        .filter((inputId) => this.notEquals(inputContext[inputId], params[inputId]))
                        .forEach((inputId) => {
                        this.setState(INPUT_STATE_CONTEXT, inputId, (params[inputId] || params[inputId] === 0)
                            ? params[inputId]
                            : null);
                    });
                }
            }
        }), map((params) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        }), debounceTime(results.delay || 1), map((params) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        }), switchMap((state) => this.communication.request$(results.id, {
            params: Object.assign(Object.assign({}, state), { searchId: this.searchId }),
            method: 'POST',
            onError: (error) => {
                this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, results.provider || null))).subscribe((response) => {
            this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'success', response);
        });
    }
    onInputsChange() {
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter(({ lastUpdated }) => this.queryParamKeys.indexOf(lastUpdated) !== -1)).subscribe(({ state }) => {
            const filteredState = {};
            Object.keys(state).forEach((id) => {
                if (this.queryParamKeys.indexOf(id) !== -1) {
                    filteredState[id] = state[id];
                }
            });
            const queryParams = searchHelper.stateToQueryParams(filteredState, this.inputSchemas);
            this.router.navigate([], {
                queryParams
            });
        });
    }
    onInternalInputsChange() {
        this.getState$(INPUT_STATE_CONTEXT).pipe(filter(({ lastUpdated }) => this.queryParamKeys.indexOf(lastUpdated) === -1), map(({ lastUpdated, state }) => {
            const { sections } = this.config.facets;
            let inputConfig;
            sections.forEach((section) => {
                section.inputs.forEach((input) => {
                    if (input.id === lastUpdated) {
                        inputConfig = input;
                    }
                });
            });
            if (inputConfig && inputConfig.target) {
                return {
                    inputConfig,
                    value: state[lastUpdated]
                };
            }
            return null;
        }), filter((data) => data !== null)).subscribe(({ inputConfig, value }) => {
            const { target } = inputConfig;
            // update internal filters
            this.internalFilterState.facets[target].query = value;
            this.internalFilterState.facets[target].offset = 0;
            this.doSingleFacetRequest(target);
        });
    }
    doSingleFacetRequest(target) {
        const { facets } = this.config.request;
        const { globalParams } = this.internalFilterState;
        const { id, limit, offset, query } = this.internalFilterState.facets[target];
        this.communication.request$(facets.id, {
            params: Object.assign(Object.assign({}, globalParams), { facets: [{
                        id, limit, offset, query
                    }], searchId: this.searchId }),
            method: 'POST',
            onError: (error) => {
                this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, facets.provider || null).subscribe((response) => {
            this.onFacetsRequestSuccess(response);
            // reset loading
            this.internalFilterState.facets[target].loading = false;
        });
    }
    onResultsLoading() {
        const { facets } = this.config.request;
        if (!facets) {
            return;
        }
        // add context state
        this.addStateContext(FACETS_REQUEST_STATE_CONTEXT);
        // default states
        ['loading', 'request', 'success', 'error'].forEach((id) => {
            this.addState(FACETS_REQUEST_STATE_CONTEXT, id);
        });
        this.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(map((params) => {
            const facetsParams = Object.assign({}, params);
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', facetsParams);
            // updated internal filter state
            this.internalFilterState.globalParams = Object.assign({}, facetsParams);
            return facetsParams;
        }), debounceTime(facets.delay || 1), map((params) => {
            params.facets = [];
            this.config.facets.sections.forEach(({ inputs }) => {
                inputs.filter(({ type }) => ['link', 'map', 'histogram'].includes(type))
                    .forEach(({ id }) => {
                    // reset offset
                    this.internalFilterState.facets[id].offset = 0;
                    const { limit, query, offset } = this.internalFilterState.facets[id];
                    params.facets.push({
                        id, limit, offset, query
                    });
                });
            });
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
            return params;
        }), switchMap((state) => {
            let initializeRequest$ = of(true);
            if (this.initializeKeys.length && isEmpty(this.initializeValues)) {
                initializeRequest$ = this.communication.request$(facets.id, {
                    params: {
                        facets: state.facets,
                        searchId: this.searchId
                    },
                    method: 'POST',
                    onError: (error) => {
                        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
                    }
                }, facets.provider || null);
            }
            return initializeRequest$.pipe(tap((response) => {
                if (response.facets) {
                    Object.keys(response.facets)
                        .filter((inputKey) => this.initializeKeys.includes(inputKey))
                        .forEach((inputKey) => {
                        this.initializeValues[inputKey] = response.facets[inputKey];
                    });
                }
            }), switchMapTo(of(state)));
        }), switchMap((state) => this.communication.request$(facets.id, {
            params: Object.assign(Object.assign({}, state), { searchId: this.searchId }),
            method: 'POST',
            onError: (error) => {
                this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
            }
        }, facets.provider || null))).subscribe((response) => {
            this.onFacetsRequestSuccess(response);
        });
        // update facet links
        this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((response) => {
            const { facets: responseFacets } = response;
            Object.keys(responseFacets).forEach((id) => {
                const { values: responseValues, filtered_total_count } = responseFacets[id];
                const { limit, offset, values: stateValues } = this.internalFilterState.facets[id];
                const filterState = this.internalFilterState.facets[id];
                if (offset > 0) {
                    // delete loading element
                    filterState.values.pop();
                    // merge new results
                    filterState.values = [
                        ...stateValues,
                        ...responseValues
                    ];
                }
                else {
                    filterState.values = [
                        ...responseValues
                    ];
                }
                if ((offset + limit) < filtered_total_count) {
                    filterState.values.push({
                        text: _t('global#facet_loading_text'),
                        classes: 'loading-text-link',
                        payload: null,
                    });
                }
                this.setState(FACET_STATE_CONTEXT, id, {
                    links: filterState.values
                });
            });
        });
    }
    onFacetsRequestSuccess(response) {
        const { facets: responseFacets } = response;
        if (!isEmpty(this.initializeValues)) {
            // intialValues and responseFacets merge strategy
            Object.keys(responseFacets).forEach((inputKey) => {
                if (this.initializeValues[inputKey]) {
                    const updatedValues = this.initializeValues[inputKey].values.map((initialValue) => {
                        const singleValue = responseFacets[inputKey].values.find(({ payload }) => payload === initialValue.payload);
                        return Object.assign(Object.assign({}, initialValue), { counter: (singleValue === null || singleValue === void 0 ? void 0 : singleValue.counter) || 0 });
                    });
                    // sort by counter
                    updatedValues.sort((a, b) => b.counter - a.counter);
                    responseFacets[inputKey].values = updatedValues;
                }
            });
        }
        Object.keys(responseFacets).forEach((inputKey) => {
            // update internal filter state
            const { filtered_total_count } = responseFacets[inputKey];
            this.internalFilterState.facets[inputKey].filtered_total_count = filtered_total_count;
        });
        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', Object.assign(Object.assign({}, response), { facets: responseFacets }));
    }
    onFacetsScroll() {
        setTimeout(() => {
            const { facets } = this.config;
            facets.sections.forEach(({ inputs }) => {
                inputs
                    .filter((input) => input)
                    .filter((input) => input.type === 'link')
                    .forEach(({ id }) => {
                    const scrollEl = document.querySelector(`#facet-container-${id} .n7-input-link`);
                    const scroll$ = fromEvent(scrollEl, 'scroll');
                    scroll$.pipe(debounceTime(300)).subscribe(({ target }) => {
                        const { limit, offset, loading, filtered_total_count, } = this.internalFilterState.facets[id];
                        const { scrollTop, clientHeight, scrollHeight } = target;
                        if ((scrollTop + clientHeight >= scrollHeight)
                            && (offset + limit < filtered_total_count)
                            && loading === false) {
                            this.internalFilterState.facets[id].loading = true;
                            this.internalFilterState.facets[id].offset = offset + limit;
                            this.doSingleFacetRequest(id);
                        }
                    });
                });
            });
        });
    }
    notEquals(val1, val2) {
        if (Array.isArray(val1) && Array.isArray(val2)) {
            return !!xor(val1, val2).length;
        }
        return val1 !== val2;
    }
};
MrSearchService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService }
];
MrSearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        CommunicationService])
], MrSearchService);
export { MrSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxTQUFTLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxlQUFlLENBQUM7QUFHNUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQTJDMUIsWUFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsYUFB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TUFBTTtRQUNFLGNBQWM7UUFDZixvQkFBb0I7R0E5Q2xDLGVBQWUsQ0E2a0IzQjtTQTdrQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0XHJcbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgZmlsdGVyLFxyXG4gIHN3aXRjaE1hcCxcclxuICBtYXAsXHJcbiAgZGVib3VuY2VUaW1lLFxyXG4gIGRlbGF5LFxyXG4gIHRhcCxcclxuICB0YWtlVW50aWwsXHJcbiAgc3dpdGNoTWFwVG9cclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGlzRW1wdHksIHhvciB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7IE1ySW5wdXRTY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xyXG5leHBvcnQgY29uc3QgRkFDRVRfU1RBVEVfQ09OVEVYVCA9ICdmYWNldCc7XHJcbmV4cG9ydCBjb25zdCBTRUNUSU9OX1NUQVRFX0NPTlRFWFQgPSAnc2VjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzUmVxdWVzdCc7XHJcbmV4cG9ydCBjb25zdCBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0c1JlcXVlc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaElkOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnO1xyXG5cclxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVWYWx1ZXM6IHtcclxuICAgIFtpZDogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dFNjaGVtYXM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IE1ySW5wdXRTY2hlbWE7XHJcbiAgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnRleHRTdGF0ZToge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlcktleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgaW50ZXJuYWxGaWx0ZXJTdGF0ZToge1xyXG4gICAgZ2xvYmFsUGFyYW1zOiBhbnk7XHJcbiAgICBmYWNldHM6IHtcclxuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICB9ID0ge1xyXG4gICAgZ2xvYmFsUGFyYW1zOiB7fSxcclxuICAgIGZhY2V0czoge31cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHN0YXRlJDoge1xyXG4gICAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBiZWZvcmVIb29rOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiAodmFsdWU6IGFueSkgPT4gYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBpbml0KHNlYXJjaElkLCBjb25maWcpIHtcclxuICAgIHRoaXMuc2VhcmNoSWQgPSBzZWFyY2hJZDtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIC8vIGZpcnN0IGNsZWFyXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgLy8gaW5pdGlhbCBzdGF0ZXNcclxuICAgIHRoaXMuaW5pdElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuaW5pdEZhY2V0U3RhdGUoKTtcclxuICAgIHRoaXMuaW5pdFNlY3Rpb25TdGF0ZSgpO1xyXG5cclxuICAgIC8vIGxpc3RlbmVyc1xyXG4gICAgdGhpcy5vbklucHV0c0NoYW5nZSgpO1xyXG4gICAgdGhpcy5vbkludGVybmFsSW5wdXRzQ2hhbmdlKCk7XHJcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKTtcclxuICAgIHRoaXMub25SZXN1bHRzTG9hZGluZygpO1xyXG4gICAgdGhpcy5vbkZhY2V0c1Njcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xyXG5cclxuICBwdWJsaWMgZ2V0U3RhdGUkKGNvbnRleHQ6IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBTdWJqZWN0PGFueT4ge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGlkID8gYCR7Y29udGV4dH0uJHtpZH1gIDogY29udGV4dDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0YXRlJFtzdGF0ZUlkXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRTdGF0ZUNvbnRleHQoY29udGV4dDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7Y29udGV4dH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRpYWwgc3RhdGVcclxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge307XHJcbiAgICAvLyBjcmVhdGUgc3RyZWFtXHJcbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkU3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgXHJcbiAgICAgICAgU3RhdGUgY29udGV4dCBcIiR7Y29udGV4dH1cIiBkb2VzIG5vdCBleGlzdC5cclxuICAgICAgICBZb3UgbXVzdCBhZGQgY29udGV4dCBmaXJzdFxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtzdGF0ZUlkfVwiIGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxyXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0gPSBuZXcgU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgLy8gaG9vayBjb250cm9sXHJcbiAgICBpZiAodGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgc3RyZWFtXHJcbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXS5uZXh0KHZhbHVlKTtcclxuICAgIC8vIHVwZGF0ZSBjb250ZXh0XHJcbiAgICB0aGlzLnNldENvbnRleHRTdGF0ZShjb250ZXh0LCBpZCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEJlZm9yZUhvb2soY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBob29rKSB7XHJcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdID0gaG9vaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIC8vIGNsZWFyIGlucHV0IHN0YXRlc1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pXHJcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiAhdGhpcy5pbnRlcm5hbEZpbHRlcktleXMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jb250ZXh0U3RhdGUgPSB7fTtcclxuICAgIHRoaXMuc3RhdGUkID0ge307XHJcbiAgICB0aGlzLmJlZm9yZUhvb2sgPSB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29udGV4dFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7XHJcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxyXG4gICAgICBbYCR7aWR9YF06IG5ld1ZhbHVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XHJcbiAgICAgIGxhc3RVcGRhdGVkOiBpZCxcclxuICAgICAgc3RhdGU6IHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cywgbGF5b3V0SW5wdXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBzZXQgZmFjZXRzIGlucHV0IHN0YXRlXHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cclxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXHJcbiAgICAgICAgLmZvckVhY2goKHtcclxuICAgICAgICAgIGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEsIGxpbWl0LCB0eXBlLCB0YXJnZXQsIGluaXRpYWxpemVcclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG5cclxuICAgICAgICAgIC8vIGlzIHF1ZXJ5IHBhcmFtP1xyXG4gICAgICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBpbnB1dCBoYXMgaW5pdGlhbCB2YWx1ZXMgcmVxdWVzdFxyXG4gICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplS2V5cy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBzY2hlbWFzXHJcbiAgICAgICAgICBpZiAoc2NoZW1hKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBsaW5rcyBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgICAgICAgaWYgKFsnbGluaycsICdtYXAnLCAnaGlzdG9ncmFtJ10uaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gaW50ZXJuYWwgZmlsdGVyc1xyXG4gICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyS2V5cy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldCBsYXlvdXQgaW5wdXQgc3RhdGVcclxuICAgIGxheW91dElucHV0cy5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEgfSkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuXHJcbiAgICAgIGlmIChxdWVyeVBhcmFtKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2NoZW1hc1xyXG4gICAgICBpZiAoc2NoZW1hKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEZhY2V0U3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRfU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gc2V0IGlucHV0IHN0YXRlXHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cclxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXHJcbiAgICAgICAgLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlucHV0LmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0U2VjdGlvblN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFNFQ1RJT05fU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gc2V0IGlucHV0IHN0YXRlXHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkU3RhdGUoU0VDVElPTl9TVEFURV9DT05URVhULCBpZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Sb3V0ZUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcclxuXHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXHJcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICAgLy8gZml4IGluaXRpYWwgbGlzdGVuZXJzIChzeW1ib2xpYyB0aW1lb3V0KVxyXG4gICAgICBkZWxheSgxKSxcclxuICAgICAgLy8gcXVlcnkgcGFyYW1zIHRvIHN0YXRlXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcywgdGhpcy5pbnB1dFNjaGVtYXMpKSxcclxuICAgICAgLy8gc3RhdGUgIT0gcXVlcnlQYXJhbXMgY29udHJvbFxyXG4gICAgICB0YXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcclxuICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxyXG4gICAgICAgIGlmICghaXNFbXB0eShwYXJhbXMpKSB7XHJcbiAgICAgICAgICBjb25zdCBpbnB1dENvbnRleHQgPSB0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXTtcclxuICAgICAgICAgIGlmIChpc0VtcHR5KGlucHV0Q29udGV4dCkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXRJZCkpXHJcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaW5wdXRJZCwgcGFyYW1zW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcclxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0SWQpKVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMubm90RXF1YWxzKGlucHV0Q29udGV4dFtpbnB1dElkXSwgcGFyYW1zW2lucHV0SWRdKSlcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgSU5QVVRfU1RBVEVfQ09OVEVYVCxcclxuICAgICAgICAgICAgICAgICAgaW5wdXRJZCxcclxuICAgICAgICAgICAgICAgICAgKHBhcmFtc1tpbnB1dElkXSB8fCBwYXJhbXNbaW5wdXRJZF0gPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJhbXNbaW5wdXRJZF1cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgfSksXHJcbiAgICAgIGRlYm91bmNlVGltZShyZXN1bHRzLmRlbGF5IHx8IDEpLFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdyZXF1ZXN0JywgcGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHJlc3VsdHMuaWQsIHtcclxuICAgICAgICBwYXJhbXM6IHsgLi4uc3RhdGUsIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCByZXN1bHRzLnByb3ZpZGVyIHx8IG51bGwpKVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSW5wdXRzQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcclxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgIT09IC0xKVxyXG4gICAgKS5zdWJzY3JpYmUoKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0ge307XHJcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YoaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRTdGF0ZVtpZF0gPSBzdGF0ZVtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKGZpbHRlcmVkU3RhdGUsIHRoaXMuaW5wdXRTY2hlbWFzKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcclxuICAgICAgICBxdWVyeVBhcmFtc1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkludGVybmFsSW5wdXRzQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcclxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgPT09IC0xKSxcclxuICAgICAgbWFwKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5jb25maWcuZmFjZXRzO1xyXG4gICAgICAgIGxldCBpbnB1dENvbmZpZztcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuaWQgPT09IGxhc3RVcGRhdGVkKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb25maWcgPSBpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlucHV0Q29uZmlnICYmIGlucHV0Q29uZmlnLnRhcmdldCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5wdXRDb25maWcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBzdGF0ZVtsYXN0VXBkYXRlZF1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KSxcclxuICAgICAgZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IGlucHV0Q29uZmlnLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpbnB1dENvbmZpZztcclxuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlcnNcclxuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLnF1ZXJ5ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5vZmZzZXQgPSAwO1xyXG4gICAgICB0aGlzLmRvU2luZ2xlRmFjZXRSZXF1ZXN0KHRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KSB7XHJcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcclxuICAgIGNvbnN0IHsgZ2xvYmFsUGFyYW1zIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGU7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxyXG4gICAgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XTtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgLi4uZ2xvYmFsUGFyYW1zLFxyXG4gICAgICAgIGZhY2V0czogW3tcclxuICAgICAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5vbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIC8vIHJlc2V0IGxvYWRpbmdcclxuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJlc3VsdHNMb2FkaW5nKCkge1xyXG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XHJcblxyXG4gICAgaWYgKCFmYWNldHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xyXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRTdGF0ZSQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJykucGlwZShcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zdCBmYWNldHNQYXJhbXMgPSB7IC4uLnBhcmFtcyB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBmYWNldHNQYXJhbXMpO1xyXG4gICAgICAgIC8vIHVwZGF0ZWQgaW50ZXJuYWwgZmlsdGVyIHN0YXRlXHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmdsb2JhbFBhcmFtcyA9IHsgLi4uZmFjZXRzUGFyYW1zIH07XHJcbiAgICAgICAgcmV0dXJuIGZhY2V0c1BhcmFtcztcclxuICAgICAgfSksXHJcbiAgICAgIGRlYm91bmNlVGltZShmYWNldHMuZGVsYXkgfHwgMSksXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgcGFyYW1zLmZhY2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XHJcbiAgICAgICAgICBpbnB1dHMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gWydsaW5rJywgJ21hcCcsICdoaXN0b2dyYW0nXS5pbmNsdWRlcyh0eXBlKSlcclxuICAgICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHJlc2V0IG9mZnNldFxyXG4gICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLm9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBsaW1pdCwgcXVlcnksIG9mZnNldCB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XHJcbiAgICAgICAgICAgICAgcGFyYW1zLmZhY2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdyZXF1ZXN0JywgcGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGxldCBpbml0aWFsaXplUmVxdWVzdCQ6IE9ic2VydmFibGU8YW55PiA9IG9mKHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVLZXlzLmxlbmd0aCAmJiBpc0VtcHR5KHRoaXMuaW5pdGlhbGl6ZVZhbHVlcykpIHtcclxuICAgICAgICAgIGluaXRpYWxpemVSZXF1ZXN0JCA9IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgZmFjZXRzOiBzdGF0ZS5mYWNldHMsXHJcbiAgICAgICAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbml0aWFsaXplUmVxdWVzdCQucGlwZShcclxuICAgICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmZhY2V0cykge1xyXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlLmZhY2V0cylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0S2V5KSA9PiB0aGlzLmluaXRpYWxpemVLZXlzLmluY2x1ZGVzKGlucHV0S2V5KSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dEtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVWYWx1ZXNbaW5wdXRLZXldID0gcmVzcG9uc2UuZmFjZXRzW2lucHV0S2V5XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHN3aXRjaE1hcFRvKG9mKHN0YXRlKSlcclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMub25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgZmFjZXQgbGlua3NcclxuICAgIHRoaXMuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlczogcmVzcG9uc2VWYWx1ZXMsIGZpbHRlcmVkX3RvdGFsX2NvdW50IH0gPSByZXNwb25zZUZhY2V0c1tpZF07XHJcbiAgICAgICAgY29uc3QgeyBsaW1pdCwgb2Zmc2V0LCB2YWx1ZXM6IHN0YXRlVmFsdWVzIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJTdGF0ZSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAvLyBkZWxldGUgbG9hZGluZyBlbGVtZW50XHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMucG9wKCk7XHJcbiAgICAgICAgICAvLyBtZXJnZSBuZXcgcmVzdWx0c1xyXG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzID0gW1xyXG4gICAgICAgICAgICAuLi5zdGF0ZVZhbHVlcyxcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2VWYWx1ZXNcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2VWYWx1ZXNcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgob2Zmc2V0ICsgbGltaXQpIDwgZmlsdGVyZWRfdG90YWxfY291bnQpIHtcclxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgdGV4dDogX3QoJ2dsb2JhbCNmYWNldF9sb2FkaW5nX3RleHQnKSxcclxuICAgICAgICAgICAgY2xhc3NlczogJ2xvYWRpbmctdGV4dC1saW5rJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlkLCB7XHJcbiAgICAgICAgICBsaW5rczogZmlsdGVyU3RhdGUudmFsdWVzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzOiByZXNwb25zZUZhY2V0cyB9ID0gcmVzcG9uc2U7XHJcbiAgICBpZiAoIWlzRW1wdHkodGhpcy5pbml0aWFsaXplVmFsdWVzKSkge1xyXG4gICAgICAvLyBpbnRpYWxWYWx1ZXMgYW5kIHJlc3BvbnNlRmFjZXRzIG1lcmdlIHN0cmF0ZWd5XHJcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpbnB1dEtleSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVWYWx1ZXNbaW5wdXRLZXldKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gdGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XS52YWx1ZXMubWFwKChpbml0aWFsVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlVmFsdWUgPSByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSBpbml0aWFsVmFsdWUucGF5bG9hZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmluaXRpYWxWYWx1ZSxcclxuICAgICAgICAgICAgICBjb3VudGVyOiBzaW5nbGVWYWx1ZT8uY291bnRlciB8fCAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIHNvcnQgYnkgY291bnRlclxyXG4gICAgICAgICAgdXBkYXRlZFZhbHVlcy5zb3J0KChhLCBiKSA9PiBiLmNvdW50ZXIgLSBhLmNvdW50ZXIpO1xyXG4gICAgICAgICAgcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcyA9IHVwZGF0ZWRWYWx1ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpbnB1dEtleSkgPT4ge1xyXG4gICAgICAvLyB1cGRhdGUgaW50ZXJuYWwgZmlsdGVyIHN0YXRlXHJcbiAgICAgIGNvbnN0IHsgZmlsdGVyZWRfdG90YWxfY291bnQgfSA9IHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XTtcclxuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpbnB1dEtleV0uZmlsdGVyZWRfdG90YWxfY291bnQgPSBmaWx0ZXJlZF90b3RhbF9jb3VudDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHtcclxuICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgIGZhY2V0czogcmVzcG9uc2VGYWNldHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZhY2V0c1Njcm9sbCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XHJcbiAgICAgICAgaW5wdXRzXHJcbiAgICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXHJcbiAgICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQudHlwZSA9PT0gJ2xpbmsnKVxyXG4gICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmYWNldC1jb250YWluZXItJHtpZH0gLm43LWlucHV0LWxpbmtgKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudChzY3JvbGxFbCwgJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICBzY3JvbGwkLnBpcGUoXHJcbiAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDMwMClcclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgICAgIG9mZnNldCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZF90b3RhbF9jb3VudCxcclxuICAgICAgICAgICAgICB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAmJiAob2Zmc2V0ICsgbGltaXQgPCBmaWx0ZXJlZF90b3RhbF9jb3VudClcclxuICAgICAgICAgICAgICAgICYmIGxvYWRpbmcgPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLm9mZnNldCA9IG9mZnNldCArIGxpbWl0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1NpbmdsZUZhY2V0UmVxdWVzdChpZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNRdWVyeVBhcmFtS2V5ID0gKGlucHV0KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0KTtcclxuXHJcbiAgbm90RXF1YWxzKHZhbDEsIHZhbDIpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbDEpICYmIEFycmF5LmlzQXJyYXkodmFsMikpIHtcclxuICAgICAgcmV0dXJuICEheG9yKHZhbDEsIHZhbDIpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWwxICE9PSB2YWwyO1xyXG4gIH1cclxufVxyXG4iXX0=