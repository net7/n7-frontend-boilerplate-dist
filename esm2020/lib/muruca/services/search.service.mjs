/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, takeUntil, switchMapTo } from 'rxjs/operators';
import { isEmpty, xor } from 'lodash';
import { _t } from '@n7-frontend/core';
import searchHelper from '../helpers/search-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../common/services/communication.service";
export const INPUT_STATE_CONTEXT = 'input';
export const FACET_STATE_CONTEXT = 'facet';
export const SECTION_STATE_CONTEXT = 'section';
export const RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
export const FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
export class MrSearchService {
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
        this.contextState[context] = {
            ...this.contextState[context],
            [`${id}`]: newValue
        };
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
            params: { ...state, searchId: this.searchId },
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
            params: {
                ...globalParams,
                facets: [{
                        id, limit, offset, query
                    }],
                searchId: this.searchId
            },
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
            const facetsParams = { ...params };
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', facetsParams);
            // updated internal filter state
            this.internalFilterState.globalParams = { ...facetsParams };
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
            params: {
                ...state,
                searchId: this.searchId
            },
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
                        return {
                            ...initialValue,
                            counter: singleValue?.counter || 0
                        };
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
        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', {
            ...response,
            facets: responseFacets
        });
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
}
MrSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrSearchService, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.CommunicationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrSearchService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrSearchService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.CommunicationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2Evc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFNBQVMsRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUNuQyxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULEdBQUcsRUFDSCxZQUFZLEVBQ1osS0FBSyxFQUNMLEdBQUcsRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLE9BQU8sWUFBWSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR3BELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztBQUMzQyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLGdCQUFnQixDQUFDO0FBQzlELE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLGVBQWUsQ0FBQztBQUc1RCxNQUFNLE9BQU8sZUFBZTtJQTJDMUIsWUFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsYUFBbUM7UUFGbkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUE3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Y2FtZWxjYXNlICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIGZpbHRlcixcclxuICBzd2l0Y2hNYXAsXHJcbiAgbWFwLFxyXG4gIGRlYm91bmNlVGltZSxcclxuICBkZWxheSxcclxuICB0YXAsXHJcbiAgdGFrZVVudGlsLFxyXG4gIHN3aXRjaE1hcFRvXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBpc0VtcHR5LCB4b3IgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHNlYXJjaEhlbHBlciBmcm9tICcuLi9oZWxwZXJzL3NlYXJjaC1oZWxwZXInO1xyXG5pbXBvcnQgeyBNcklucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBJTlBVVF9TVEFURV9DT05URVhUID0gJ2lucHV0JztcclxuZXhwb3J0IGNvbnN0IEZBQ0VUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXQnO1xyXG5leHBvcnQgY29uc3QgU0VDVElPTl9TVEFURV9DT05URVhUID0gJ3NlY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAncmVzdWx0c1JlcXVlc3QnO1xyXG5leHBvcnQgY29uc3QgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdmYWNldHNSZXF1ZXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWFyY2hJZDogc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBxdWVyeVBhcmFtS2V5czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplS2V5czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplVmFsdWVzOiB7XHJcbiAgICBbaWQ6IHN0cmluZ106IGFueTtcclxuICB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgaW5wdXRTY2hlbWFzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBNcklucHV0U2NoZW1hO1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZXh0U3RhdGU6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgaW50ZXJuYWxGaWx0ZXJLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGludGVybmFsRmlsdGVyU3RhdGU6IHtcclxuICAgIGdsb2JhbFBhcmFtczogYW55O1xyXG4gICAgZmFjZXRzOiB7XHJcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgfSA9IHtcclxuICAgIGdsb2JhbFBhcmFtczoge30sXHJcbiAgICBmYWNldHM6IHt9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0ZSQ6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55PjtcclxuICB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgYmVmb3JlSG9vazoge1xyXG4gICAgW2tleTogc3RyaW5nXTogKHZhbHVlOiBhbnkpID0+IGFueTtcclxuICB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgaW5pdChzZWFyY2hJZCwgY29uZmlnKSB7XHJcbiAgICB0aGlzLnNlYXJjaElkID0gc2VhcmNoSWQ7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAvLyBmaXJzdCBjbGVhclxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgIC8vIGluaXRpYWwgc3RhdGVzXHJcbiAgICB0aGlzLmluaXRJbnB1dFN0YXRlKCk7XHJcbiAgICB0aGlzLmluaXRGYWNldFN0YXRlKCk7XHJcbiAgICB0aGlzLmluaXRTZWN0aW9uU3RhdGUoKTtcclxuXHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICAgIHRoaXMub25JbnB1dHNDaGFuZ2UoKTtcclxuICAgIHRoaXMub25JbnRlcm5hbElucHV0c0NoYW5nZSgpO1xyXG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKCk7XHJcbiAgICB0aGlzLm9uUmVzdWx0c0xvYWRpbmcoKTtcclxuICAgIHRoaXMub25GYWNldHNTY3JvbGwoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcclxuXHJcbiAgcHVibGljIGdldFN0YXRlJChjb250ZXh0OiBzdHJpbmcsIGlkPzogc3RyaW5nKTogU3ViamVjdDxhbnk+IHtcclxuICAgIGNvbnN0IHN0YXRlSWQgPSBpZCA/IGAke2NvbnRleHR9LiR7aWR9YCA6IGNvbnRleHQ7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSRbc3RhdGVJZF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkU3RhdGVDb250ZXh0KGNvbnRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke2NvbnRleHR9XCIgYWxyZWFkeSBleGlzdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0aWFsIHN0YXRlXHJcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHt9O1xyXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxyXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0gPSBuZXcgU3ViamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFxyXG4gICAgICAgIFN0YXRlIGNvbnRleHQgXCIke2NvbnRleHR9XCIgZG9lcyBub3QgZXhpc3QuXHJcbiAgICAgICAgWW91IG11c3QgYWRkIGNvbnRleHQgZmlyc3RcclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7c3RhdGVJZH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBzdHJlYW1cclxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIC8vIGhvb2sgY29udHJvbFxyXG4gICAgaWYgKHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSkge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHN0cmVhbVxyXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0ubmV4dCh2YWx1ZSk7XHJcbiAgICAvLyB1cGRhdGUgY29udGV4dFxyXG4gICAgdGhpcy5zZXRDb250ZXh0U3RhdGUoY29udGV4dCwgaWQsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRCZWZvcmVIb29rKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgaG9vaykge1xyXG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcclxuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSA9IGhvb2s7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAvLyBjbGVhciBpbnB1dCBzdGF0ZXNcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKVxyXG4gICAgICAuZmlsdGVyKChpZCkgPT4gIXRoaXMuaW50ZXJuYWxGaWx0ZXJLZXlzLmluY2x1ZGVzKGlkKSlcclxuICAgICAgLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCwgbnVsbCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhcigpIHtcclxuICAgIHRoaXMuY29udGV4dFN0YXRlID0ge307XHJcbiAgICB0aGlzLnN0YXRlJCA9IHt9O1xyXG4gICAgdGhpcy5iZWZvcmVIb29rID0ge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbnRleHRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge1xyXG4gICAgICAuLi50aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSxcclxuICAgICAgW2Ake2lkfWBdOiBuZXdWYWx1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdLm5leHQoe1xyXG4gICAgICBsYXN0VXBkYXRlZDogaWQsXHJcbiAgICAgIHN0YXRlOiB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRJbnB1dFN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBmYWNldHMsIGxheW91dElucHV0cyB9ID0gdGhpcy5jb25maWc7XHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoSU5QVVRfU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gc2V0IGZhY2V0cyBpbnB1dCBzdGF0ZVxyXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgIC5mb3JFYWNoKCh7XHJcbiAgICAgICAgICBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hLCBsaW1pdCwgdHlwZSwgdGFyZ2V0LCBpbml0aWFsaXplXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuXHJcbiAgICAgICAgICAvLyBpcyBxdWVyeSBwYXJhbT9cclxuICAgICAgICAgIGlmIChxdWVyeVBhcmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gaW5wdXQgaGFzIGluaXRpYWwgdmFsdWVzIHJlcXVlc3RcclxuICAgICAgICAgIGlmIChpbml0aWFsaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUtleXMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gc2NoZW1hc1xyXG4gICAgICAgICAgaWYgKHNjaGVtYSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0U2NoZW1hc1tpZF0gPSBzY2hlbWE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gbGlua3MgaW50ZXJuYWwgc3RhdGVcclxuICAgICAgICAgIGlmIChbJ2xpbmsnLCAnbWFwJywgJ2hpc3RvZ3JhbSddLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdID0ge1xyXG4gICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgIGxpbWl0LFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGludGVybmFsIGZpbHRlcnNcclxuICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlcktleXMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgbGF5b3V0IGlucHV0IHN0YXRlXHJcbiAgICBsYXlvdXRJbnB1dHMuZm9yRWFjaCgoeyBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hIH0pID0+IHtcclxuICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XHJcblxyXG4gICAgICBpZiAocXVlcnlQYXJhbSkge1xyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNjaGVtYXNcclxuICAgICAgaWYgKHNjaGVtYSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRGYWNldFN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxyXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpbnB1dC5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFNlY3Rpb25TdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcclxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXHJcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChTRUNUSU9OX1NUQVRFX0NPTlRFWFQpO1xyXG5cclxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxyXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFN0YXRlKFNFQ1RJT05fU1RBVEVfQ09OVEVYVCwgaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUm91dGVDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XHJcblxyXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcclxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcclxuXHJcbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xyXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkU3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICAgIC8vIGZpeCBpbml0aWFsIGxpc3RlbmVycyAoc3ltYm9saWMgdGltZW91dClcclxuICAgICAgZGVsYXkoMSksXHJcbiAgICAgIC8vIHF1ZXJ5IHBhcmFtcyB0byBzdGF0ZVxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4gc2VhcmNoSGVscGVyLnF1ZXJ5UGFyYW1zVG9TdGF0ZShwYXJhbXMsIHRoaXMuaW5wdXRTY2hlbWFzKSksXHJcbiAgICAgIC8vIHN0YXRlICE9IHF1ZXJ5UGFyYW1zIGNvbnRyb2xcclxuICAgICAgdGFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgc3RhdGVcclxuICAgICAgICBpZiAoIWlzRW1wdHkocGFyYW1zKSkge1xyXG4gICAgICAgICAgY29uc3QgaW5wdXRDb250ZXh0ID0gdGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF07XHJcbiAgICAgICAgICBpZiAoaXNFbXB0eShpbnB1dENvbnRleHQpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcclxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0SWQpKVxyXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dElkKSlcclxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLm5vdEVxdWFscyhpbnB1dENvbnRleHRbaW5wdXRJZF0sIHBhcmFtc1tpbnB1dElkXSkpXHJcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgIElOUFVUX1NUQVRFX0NPTlRFWFQsXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQsXHJcbiAgICAgICAgICAgICAgICAgIChwYXJhbXNbaW5wdXRJZF0gfHwgcGFyYW1zW2lucHV0SWRdID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgID8gcGFyYW1zW2lucHV0SWRdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBkZWJvdW5jZVRpbWUocmVzdWx0cy5kZWxheSB8fCAxKSxcclxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgfSksXHJcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChyZXN1bHRzLmlkLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7IC4uLnN0YXRlLCBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZCB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgcmVzdWx0cy5wcm92aWRlciB8fCBudWxsKSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbklucHV0c0NoYW5nZSgpIHtcclxuICAgIHRoaXMuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpICE9PSAtMSlcclxuICAgICkuc3Vic2NyaWJlKCh7IHN0YXRlIH0pID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IHt9O1xyXG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGZpbHRlcmVkU3RhdGVbaWRdID0gc3RhdGVbaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoSGVscGVyLnN0YXRlVG9RdWVyeVBhcmFtcyhmaWx0ZXJlZFN0YXRlLCB0aGlzLmlucHV0U2NoZW1hcyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXNcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbnRlcm5hbElucHV0c0NoYW5nZSgpIHtcclxuICAgIHRoaXMuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpID09PSAtMSksXHJcbiAgICAgIG1hcCgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMuY29uZmlnLmZhY2V0cztcclxuICAgICAgICBsZXQgaW5wdXRDb25maWc7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0LmlkID09PSBsYXN0VXBkYXRlZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0Q29uZmlnID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbnB1dENvbmZpZyAmJiBpbnB1dENvbmZpZy50YXJnZXQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29uZmlnLFxyXG4gICAgICAgICAgICB2YWx1ZTogc3RhdGVbbGFzdFVwZGF0ZWRdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCksXHJcbiAgICApLnN1YnNjcmliZSgoeyBpbnB1dENvbmZpZywgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gaW5wdXRDb25maWc7XHJcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXJzXHJcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5xdWVyeSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ub2Zmc2V0ID0gMDtcclxuICAgICAgdGhpcy5kb1NpbmdsZUZhY2V0UmVxdWVzdCh0YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvU2luZ2xlRmFjZXRSZXF1ZXN0KHRhcmdldCkge1xyXG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XHJcbiAgICBjb25zdCB7IGdsb2JhbFBhcmFtcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcclxuICAgIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF07XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIC4uLmdsb2JhbFBhcmFtcyxcclxuICAgICAgICBmYWNldHM6IFt7XHJcbiAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcclxuICAgICAgICB9XSxcclxuICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMub25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAvLyByZXNldCBsb2FkaW5nXHJcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZXN1bHRzTG9hZGluZygpIHtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xyXG5cclxuICAgIGlmICghZmFjZXRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxyXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcclxuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycpLnBpcGUoXHJcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmFjZXRzUGFyYW1zID0geyAuLi5wYXJhbXMgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgZmFjZXRzUGFyYW1zKTtcclxuICAgICAgICAvLyB1cGRhdGVkIGludGVybmFsIGZpbHRlciBzdGF0ZVxyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5nbG9iYWxQYXJhbXMgPSB7IC4uLmZhY2V0c1BhcmFtcyB9O1xyXG4gICAgICAgIHJldHVybiBmYWNldHNQYXJhbXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBkZWJvdW5jZVRpbWUoZmFjZXRzLmRlbGF5IHx8IDEpLFxyXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHBhcmFtcy5mYWNldHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICAgICAgaW5wdXRzLmZpbHRlcigoeyB0eXBlIH0pID0+IFsnbGluaycsICdtYXAnLCAnaGlzdG9ncmFtJ10uaW5jbHVkZXModHlwZSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAvLyByZXNldCBvZmZzZXRcclxuICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgbGltaXQsIHF1ZXJ5LCBvZmZzZXQgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgICAgICAgIHBhcmFtcy5mYWNldHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgbGltaXQsIG9mZnNldCwgcXVlcnlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgfSksXHJcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZVJlcXVlc3QkOiBPYnNlcnZhYmxlPGFueT4gPSBvZih0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplS2V5cy5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLmluaXRpYWxpemVWYWx1ZXMpKSB7XHJcbiAgICAgICAgICBpbml0aWFsaXplUmVxdWVzdCQgPSB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgIGZhY2V0czogc3RhdGUuZmFjZXRzLFxyXG4gICAgICAgICAgICAgIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgZmFjZXRzLnByb3ZpZGVyIHx8IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZVJlcXVlc3QkLnBpcGUoXHJcbiAgICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5mYWNldHMpIHtcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5mYWNldHMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dEtleSkgPT4gdGhpcy5pbml0aWFsaXplS2V5cy5pbmNsdWRlcyhpbnB1dEtleSkpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XSA9IHJlc3BvbnNlLmZhY2V0c1tpbnB1dEtleV07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBzd2l0Y2hNYXBUbyhvZihzdGF0ZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkpXHJcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGZhY2V0IGxpbmtzXHJcbiAgICB0aGlzLmdldFN0YXRlJChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcclxuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VGYWNldHMpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZXM6IHJlc3BvbnNlVmFsdWVzLCBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaWRdO1xyXG4gICAgICAgIGNvbnN0IHsgbGltaXQsIG9mZnNldCwgdmFsdWVzOiBzdGF0ZVZhbHVlcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XHJcbiAgICAgICAgY29uc3QgZmlsdGVyU3RhdGUgPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcclxuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgLy8gZGVsZXRlIGxvYWRpbmcgZWxlbWVudFxyXG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzLnBvcCgpO1xyXG4gICAgICAgICAgLy8gbWVyZ2UgbmV3IHJlc3VsdHNcclxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgLi4uc3RhdGVWYWx1ZXMsXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG9mZnNldCArIGxpbWl0KSA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KSB7XHJcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IF90KCdnbG9iYWwjZmFjZXRfbG9hZGluZ190ZXh0JyksXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdsb2FkaW5nLXRleHQtbGluaycsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpZCwge1xyXG4gICAgICAgICAgbGlua3M6IGZpbHRlclN0YXRlLnZhbHVlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgaWYgKCFpc0VtcHR5KHRoaXMuaW5pdGlhbGl6ZVZhbHVlcykpIHtcclxuICAgICAgLy8gaW50aWFsVmFsdWVzIGFuZCByZXNwb25zZUZhY2V0cyBtZXJnZSBzdHJhdGVneVxyXG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplVmFsdWVzW2lucHV0S2V5XSkge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlcyA9IHRoaXMuaW5pdGlhbGl6ZVZhbHVlc1tpbnB1dEtleV0udmFsdWVzLm1hcCgoaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVZhbHVlID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gaW5pdGlhbFZhbHVlLnBheWxvYWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5pbml0aWFsVmFsdWUsXHJcbiAgICAgICAgICAgICAgY291bnRlcjogc2luZ2xlVmFsdWU/LmNvdW50ZXIgfHwgMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyBzb3J0IGJ5IGNvdW50ZXJcclxuICAgICAgICAgIHVwZGF0ZWRWYWx1ZXMuc29ydCgoYSwgYikgPT4gYi5jb3VudGVyIC0gYS5jb3VudGVyKTtcclxuICAgICAgICAgIHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XS52YWx1ZXMgPSB1cGRhdGVkVmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcclxuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlciBzdGF0ZVxyXG4gICAgICBjb25zdCB7IGZpbHRlcmVkX3RvdGFsX2NvdW50IH0gPSByZXNwb25zZUZhY2V0c1tpbnB1dEtleV07XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaW5wdXRLZXldLmZpbHRlcmVkX3RvdGFsX2NvdW50ID0gZmlsdGVyZWRfdG90YWxfY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCB7XHJcbiAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICBmYWNldHM6IHJlc3BvbnNlRmFjZXRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GYWNldHNTY3JvbGwoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICAgIGlucHV0c1xyXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LnR5cGUgPT09ICdsaW5rJylcclxuICAgICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmFjZXQtY29udGFpbmVyLSR7aWR9IC5uNy1pbnB1dC1saW5rYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsRWwsICdzY3JvbGwnKTtcclxuICAgICAgICAgICAgc2Nyb2xsJC5waXBlKFxyXG4gICAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRfdG90YWxfY291bnQsXHJcbiAgICAgICAgICAgICAgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCB9ID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgJiYgKG9mZnNldCArIGxpbWl0IDwgZmlsdGVyZWRfdG90YWxfY291bnQpXHJcbiAgICAgICAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QoaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzUXVlcnlQYXJhbUtleSA9IChpbnB1dCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dCk7XHJcblxyXG4gIG5vdEVxdWFscyh2YWwxLCB2YWwyKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwxKSAmJiBBcnJheS5pc0FycmF5KHZhbDIpKSB7XHJcbiAgICAgIHJldHVybiAhIXhvcih2YWwxLCB2YWwyKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsMSAhPT0gdmFsMjtcclxuICB9XHJcbn1cclxuIl19