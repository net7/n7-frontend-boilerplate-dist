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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxTQUFTLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxlQUFlLENBQUM7QUFHNUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQTJDMUIsWUFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsYUFB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TUFBTTtRQUNFLGNBQWM7UUFDZixvQkFBb0I7R0E5Q2xDLGVBQWUsQ0E2a0IzQjtTQTdrQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgc3dpdGNoTWFwLFxuICBtYXAsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIHRhcCxcbiAgdGFrZVVudGlsLFxuICBzd2l0Y2hNYXBUb1xufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBpc0VtcHR5LCB4b3IgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHNlYXJjaEhlbHBlciBmcm9tICcuLi9oZWxwZXJzL3NlYXJjaC1oZWxwZXInO1xuaW1wb3J0IHsgTXJJbnB1dFNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9TVEFURV9DT05URVhUID0gJ2lucHV0JztcbmV4cG9ydCBjb25zdCBGQUNFVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0JztcbmV4cG9ydCBjb25zdCBTRUNUSU9OX1NUQVRFX0NPTlRFWFQgPSAnc2VjdGlvbic7XG5leHBvcnQgY29uc3QgUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAncmVzdWx0c1JlcXVlc3QnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXRzUmVxdWVzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc2VhcmNoSWQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBwcml2YXRlIGNvbmZpZztcblxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplVmFsdWVzOiB7XG4gICAgW2lkOiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGlucHV0U2NoZW1hczoge1xuICAgIFtrZXk6IHN0cmluZ106IE1ySW5wdXRTY2hlbWE7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGNvbnRleHRTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgaW50ZXJuYWxGaWx0ZXJLZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgaW50ZXJuYWxGaWx0ZXJTdGF0ZToge1xuICAgIGdsb2JhbFBhcmFtczogYW55O1xuICAgIGZhY2V0czoge1xuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gIH0gPSB7XG4gICAgZ2xvYmFsUGFyYW1zOiB7fSxcbiAgICBmYWNldHM6IHt9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0ZSQ6IHtcbiAgICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGJlZm9yZUhvb2s6IHtcbiAgICBba2V5OiBzdHJpbmddOiAodmFsdWU6IGFueSkgPT4gYW55O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIHB1YmxpYyBpbml0KHNlYXJjaElkLCBjb25maWcpIHtcbiAgICB0aGlzLnNlYXJjaElkID0gc2VhcmNoSWQ7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAvLyBmaXJzdCBjbGVhclxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIC8vIGluaXRpYWwgc3RhdGVzXG4gICAgdGhpcy5pbml0SW5wdXRTdGF0ZSgpO1xuICAgIHRoaXMuaW5pdEZhY2V0U3RhdGUoKTtcbiAgICB0aGlzLmluaXRTZWN0aW9uU3RhdGUoKTtcblxuICAgIC8vIGxpc3RlbmVyc1xuICAgIHRoaXMub25JbnB1dHNDaGFuZ2UoKTtcbiAgICB0aGlzLm9uSW50ZXJuYWxJbnB1dHNDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUmVzdWx0c0xvYWRpbmcoKTtcbiAgICB0aGlzLm9uRmFjZXRzU2Nyb2xsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG5cbiAgcHVibGljIGdldFN0YXRlJChjb250ZXh0OiBzdHJpbmcsIGlkPzogc3RyaW5nKTogU3ViamVjdDxhbnk+IHtcbiAgICBjb25zdCBzdGF0ZUlkID0gaWQgPyBgJHtjb250ZXh0fS4ke2lkfWAgOiBjb250ZXh0O1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZSRbc3RhdGVJZF07XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGVDb250ZXh0KGNvbnRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7Y29udGV4dH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHt9O1xuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgXG4gICAgICAgIFN0YXRlIGNvbnRleHQgXCIke2NvbnRleHR9XCIgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIFlvdSBtdXN0IGFkZCBjb250ZXh0IGZpcnN0XG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtzdGF0ZUlkfVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvLyBob29rIGNvbnRyb2xcbiAgICBpZiAodGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdLm5leHQodmFsdWUpO1xuICAgIC8vIHVwZGF0ZSBjb250ZXh0XG4gICAgdGhpcy5zZXRDb250ZXh0U3RhdGUoY29udGV4dCwgaWQsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRCZWZvcmVIb29rKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgaG9vaykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSA9IGhvb2s7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgLy8gY2xlYXIgaW5wdXQgc3RhdGVzXG4gICAgT2JqZWN0LmtleXModGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pXG4gICAgICAuZmlsdGVyKChpZCkgPT4gIXRoaXMuaW50ZXJuYWxGaWx0ZXJLZXlzLmluY2x1ZGVzKGlkKSlcbiAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0U3RhdGUgPSB7fTtcbiAgICB0aGlzLnN0YXRlJCA9IHt9O1xuICAgIHRoaXMuYmVmb3JlSG9vayA9IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250ZXh0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7XG4gICAgICAuLi50aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSxcbiAgICAgIFtgJHtpZH1gXTogbmV3VmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdLm5leHQoe1xuICAgICAgbGFzdFVwZGF0ZWQ6IGlkLFxuICAgICAgc3RhdGU6IHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRJbnB1dFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoSU5QVVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgZmFjZXRzIGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXG4gICAgICAgIC5mb3JFYWNoKCh7XG4gICAgICAgICAgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSwgbGltaXQsIHR5cGUsIHRhcmdldCwgaW5pdGlhbGl6ZVxuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgICAgIC8vIGlzIHF1ZXJ5IHBhcmFtP1xuICAgICAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlucHV0IGhhcyBpbml0aWFsIHZhbHVlcyByZXF1ZXN0XG4gICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUtleXMucHVzaChpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2NoZW1hc1xuICAgICAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsaW5rcyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAgIGlmIChbJ2xpbmsnLCAnbWFwJywgJ2hpc3RvZ3JhbSddLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXSA9IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaW50ZXJuYWwgZmlsdGVyc1xuICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJLZXlzLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgbGF5b3V0IGlucHV0IHN0YXRlXG4gICAgbGF5b3V0SW5wdXRzLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0sIHNjaGVtYSB9KSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2NoZW1hc1xuICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGYWNldFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gc2V0IGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaW5wdXQuaWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNlY3Rpb25TdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChTRUNUSU9OX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gc2V0IGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShTRUNUSU9OX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgIC8vIGZpeCBpbml0aWFsIGxpc3RlbmVycyAoc3ltYm9saWMgdGltZW91dClcbiAgICAgIGRlbGF5KDEpLFxuICAgICAgLy8gcXVlcnkgcGFyYW1zIHRvIHN0YXRlXG4gICAgICBtYXAoKHBhcmFtcykgPT4gc2VhcmNoSGVscGVyLnF1ZXJ5UGFyYW1zVG9TdGF0ZShwYXJhbXMsIHRoaXMuaW5wdXRTY2hlbWFzKSksXG4gICAgICAvLyBzdGF0ZSAhPSBxdWVyeVBhcmFtcyBjb250cm9sXG4gICAgICB0YXAoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIGlmICghaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgICAgY29uc3QgaW5wdXRDb250ZXh0ID0gdGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF07XG4gICAgICAgICAgaWYgKGlzRW1wdHkoaW5wdXRDb250ZXh0KSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0SWQpKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaW5wdXRJZCwgcGFyYW1zW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dElkKSlcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5ub3RFcXVhbHMoaW5wdXRDb250ZXh0W2lucHV0SWRdLCBwYXJhbXNbaW5wdXRJZF0pKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICBJTlBVVF9TVEFURV9DT05URVhULFxuICAgICAgICAgICAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgICAgICAgICAgIChwYXJhbXNbaW5wdXRJZF0gfHwgcGFyYW1zW2lucHV0SWRdID09PSAwKVxuICAgICAgICAgICAgICAgICAgICA/IHBhcmFtc1tpbnB1dElkXVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUocmVzdWx0cy5kZWxheSB8fCAxKSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdyZXF1ZXN0JywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHJlc3VsdHMuaWQsIHtcbiAgICAgICAgcGFyYW1zOiB7IC4uLnN0YXRlLCBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZCB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCByZXN1bHRzLnByb3ZpZGVyIHx8IG51bGwpKVxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uSW5wdXRzQ2hhbmdlKCkge1xuICAgIHRoaXMuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSAhPT0gLTEpXG4gICAgKS5zdWJzY3JpYmUoKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgICAgIGZpbHRlcmVkU3RhdGVbaWRdID0gc3RhdGVbaWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoSGVscGVyLnN0YXRlVG9RdWVyeVBhcmFtcyhmaWx0ZXJlZFN0YXRlLCB0aGlzLmlucHV0U2NoZW1hcyk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uSW50ZXJuYWxJbnB1dHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpID09PSAtMSksXG4gICAgICBtYXAoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5jb25maWcuZmFjZXRzO1xuICAgICAgICBsZXQgaW5wdXRDb25maWc7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LmlkID09PSBsYXN0VXBkYXRlZCkge1xuICAgICAgICAgICAgICBpbnB1dENvbmZpZyA9IGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlucHV0Q29uZmlnICYmIGlucHV0Q29uZmlnLnRhcmdldCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvbmZpZyxcbiAgICAgICAgICAgIHZhbHVlOiBzdGF0ZVtsYXN0VXBkYXRlZF1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT09IG51bGwpLFxuICAgICkuc3Vic2NyaWJlKCh7IGlucHV0Q29uZmlnLCB2YWx1ZSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gaW5wdXRDb25maWc7XG4gICAgICAvLyB1cGRhdGUgaW50ZXJuYWwgZmlsdGVyc1xuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLnF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ub2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZG9TaW5nbGVGYWNldFJlcXVlc3QodGFyZ2V0KSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG4gICAgY29uc3QgeyBnbG9iYWxQYXJhbXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcbiAgICB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAuLi5nbG9iYWxQYXJhbXMsXG4gICAgICAgIGZhY2V0czogW3tcbiAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcbiAgICAgICAgfV0sXG4gICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMub25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSk7XG5cbiAgICAgIC8vIHJlc2V0IGxvYWRpbmdcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUmVzdWx0c0xvYWRpbmcoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICBpZiAoIWZhY2V0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5waXBlKFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgZmFjZXRzUGFyYW1zID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIGZhY2V0c1BhcmFtcyk7XG4gICAgICAgIC8vIHVwZGF0ZWQgaW50ZXJuYWwgZmlsdGVyIHN0YXRlXG4gICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5nbG9iYWxQYXJhbXMgPSB7IC4uLmZhY2V0c1BhcmFtcyB9O1xuICAgICAgICByZXR1cm4gZmFjZXRzUGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUoZmFjZXRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgcGFyYW1zLmZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgICAgIGlucHV0cy5maWx0ZXIoKHsgdHlwZSB9KSA9PiBbJ2xpbmsnLCAnbWFwJywgJ2hpc3RvZ3JhbSddLmluY2x1ZGVzKHR5cGUpKVxuICAgICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgICAgICAvLyByZXNldCBvZmZzZXRcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgY29uc3QgeyBsaW1pdCwgcXVlcnksIG9mZnNldCB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgICAgICAgIHBhcmFtcy5mYWNldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdyZXF1ZXN0JywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbGl6ZVJlcXVlc3QkOiBPYnNlcnZhYmxlPGFueT4gPSBvZih0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZUtleXMubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5pbml0aWFsaXplVmFsdWVzKSkge1xuICAgICAgICAgIGluaXRpYWxpemVSZXF1ZXN0JCA9IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmYWNldHM6IHN0YXRlLmZhY2V0cyxcbiAgICAgICAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVSZXF1ZXN0JC5waXBlKFxuICAgICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5mYWNldHMpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZmFjZXRzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0S2V5KSA9PiB0aGlzLmluaXRpYWxpemVLZXlzLmluY2x1ZGVzKGlucHV0S2V5KSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0gPSByZXNwb25zZS5mYWNldHNbaW5wdXRLZXldO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN3aXRjaE1hcFRvKG9mKHN0YXRlKSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5vbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBmYWNldCBsaW5rc1xuICAgIHRoaXMuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlczogcmVzcG9uc2VWYWx1ZXMsIGZpbHRlcmVkX3RvdGFsX2NvdW50IH0gPSByZXNwb25zZUZhY2V0c1tpZF07XG4gICAgICAgIGNvbnN0IHsgbGltaXQsIG9mZnNldCwgdmFsdWVzOiBzdGF0ZVZhbHVlcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgIGNvbnN0IGZpbHRlclN0YXRlID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgLy8gZGVsZXRlIGxvYWRpbmcgZWxlbWVudFxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcy5wb3AoKTtcbiAgICAgICAgICAvLyBtZXJnZSBuZXcgcmVzdWx0c1xuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcbiAgICAgICAgICAgIC4uLnN0YXRlVmFsdWVzLFxuICAgICAgICAgICAgLi4ucmVzcG9uc2VWYWx1ZXNcbiAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG9mZnNldCArIGxpbWl0KSA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KSB7XG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogX3QoJ2dsb2JhbCNmYWNldF9sb2FkaW5nX3RleHQnKSxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdsb2FkaW5nLXRleHQtbGluaycsXG4gICAgICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaWQsIHtcbiAgICAgICAgICBsaW5rczogZmlsdGVyU3RhdGUudmFsdWVzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xuICAgIGlmICghaXNFbXB0eSh0aGlzLmluaXRpYWxpemVWYWx1ZXMpKSB7XG4gICAgICAvLyBpbnRpYWxWYWx1ZXMgYW5kIHJlc3BvbnNlRmFjZXRzIG1lcmdlIHN0cmF0ZWd5XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0pIHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gdGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XS52YWx1ZXMubWFwKChpbml0aWFsVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVZhbHVlID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcy5maW5kKFxuICAgICAgICAgICAgICAoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQgPT09IGluaXRpYWxWYWx1ZS5wYXlsb2FkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgICBjb3VudGVyOiBzaW5nbGVWYWx1ZT8uY291bnRlciB8fCAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIHNvcnQgYnkgY291bnRlclxuICAgICAgICAgIHVwZGF0ZWRWYWx1ZXMuc29ydCgoYSwgYikgPT4gYi5jb3VudGVyIC0gYS5jb3VudGVyKTtcbiAgICAgICAgICByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzID0gdXBkYXRlZFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpbnB1dEtleSkgPT4ge1xuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlciBzdGF0ZVxuICAgICAgY29uc3QgeyBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldO1xuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpbnB1dEtleV0uZmlsdGVyZWRfdG90YWxfY291bnQgPSBmaWx0ZXJlZF90b3RhbF9jb3VudDtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywge1xuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICBmYWNldHM6IHJlc3BvbnNlRmFjZXRzXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRmFjZXRzU2Nyb2xsKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgICAgaW5wdXRzXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxuICAgICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC50eXBlID09PSAnbGluaycpXG4gICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmFjZXQtY29udGFpbmVyLSR7aWR9IC5uNy1pbnB1dC1saW5rYCk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGwkID0gZnJvbUV2ZW50KHNjcm9sbEVsLCAnc2Nyb2xsJyk7XG4gICAgICAgICAgICBzY3JvbGwkLnBpcGUoXG4gICAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRfdG90YWxfY291bnQsXG4gICAgICAgICAgICAgIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcbiAgICAgICAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodClcbiAgICAgICAgICAgICAgICAmJiAob2Zmc2V0ICsgbGltaXQgPCBmaWx0ZXJlZF90b3RhbF9jb3VudClcbiAgICAgICAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2luZ2xlRmFjZXRSZXF1ZXN0KGlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUXVlcnlQYXJhbUtleSA9IChpbnB1dCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dCk7XG5cbiAgbm90RXF1YWxzKHZhbDEsIHZhbDIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwxKSAmJiBBcnJheS5pc0FycmF5KHZhbDIpKSB7XG4gICAgICByZXR1cm4gISF4b3IodmFsMSwgdmFsMikubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdmFsMSAhPT0gdmFsMjtcbiAgfVxufVxuIl19