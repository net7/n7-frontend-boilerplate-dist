import { __decorate, __metadata } from "tslib";
/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, takeUntil } from 'rxjs/operators';
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
                .forEach(({ id, queryParam, schema, limit, type, target }) => {
                if (!id) {
                    return;
                }
                this.addState(INPUT_STATE_CONTEXT, id);
                // is query param?
                if (queryParam) {
                    this.queryParamKeys.push(id);
                }
                // schemas
                if (schema) {
                    this.inputSchemas[id] = schema;
                }
                // links internal state
                if (type === 'link') {
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
                inputs.filter(({ type }) => type === 'link')
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
        Object.keys(responseFacets).forEach((inputKey) => {
            // update internal filter state
            const { filtered_total_count } = responseFacets[inputKey];
            this.internalFilterState.facets[inputKey].filtered_total_count = filtered_total_count;
            // responseFacets[inputKey].values = responseFacets[inputKey].values.map((item) => ({
            //   ...item,
            //   payload: item.payload && typeof item.payload === 'string'
            //     ? encodeURIComponent(item.payload)
            //     : item.payload
            // }));
        });
        this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULEdBQUcsRUFDSCxZQUFZLEVBQ1osS0FBSyxFQUNMLEdBQUcsRUFDSCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxZQUFZLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztBQUMzQyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsZUFBZSxDQUFDO0FBRzVELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFxQzFCLFlBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBRm5DLFdBQU0sR0FBTixN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dC9jYW1lbGNhc2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIHN3aXRjaE1hcCxcbiAgbWFwLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICB0YXAsXG4gIHRha2VVbnRpbFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBpc0VtcHR5LCB4b3IgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHNlYXJjaEhlbHBlciBmcm9tICcuLi9oZWxwZXJzL3NlYXJjaC1oZWxwZXInO1xuaW1wb3J0IHsgTXJJbnB1dFNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9TVEFURV9DT05URVhUID0gJ2lucHV0JztcbmV4cG9ydCBjb25zdCBGQUNFVF9TVEFURV9DT05URVhUID0gJ2ZhY2V0JztcbmV4cG9ydCBjb25zdCBTRUNUSU9OX1NUQVRFX0NPTlRFWFQgPSAnc2VjdGlvbic7XG5leHBvcnQgY29uc3QgUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAncmVzdWx0c1JlcXVlc3QnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXRzUmVxdWVzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc2VhcmNoSWQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBwcml2YXRlIGNvbmZpZztcblxuICBwcml2YXRlIHF1ZXJ5UGFyYW1LZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgaW5wdXRTY2hlbWFzOiB7XG4gICAgW2tleTogc3RyaW5nXTogTXJJbnB1dFNjaGVtYTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgY29udGV4dFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlcktleXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBpbnRlcm5hbEZpbHRlclN0YXRlOiB7XG4gICAgZ2xvYmFsUGFyYW1zOiBhbnk7XG4gICAgZmFjZXRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgfSA9IHtcbiAgICBnbG9iYWxQYXJhbXM6IHt9LFxuICAgIGZhY2V0czoge31cbiAgfTtcblxuICBwcml2YXRlIHN0YXRlJDoge1xuICAgIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55PjtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgYmVmb3JlSG9vazoge1xuICAgIFtrZXk6IHN0cmluZ106ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICkgeyB9XG5cbiAgcHVibGljIGluaXQoc2VhcmNoSWQsIGNvbmZpZykge1xuICAgIHRoaXMuc2VhcmNoSWQgPSBzZWFyY2hJZDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIC8vIGZpcnN0IGNsZWFyXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZXNcbiAgICB0aGlzLmluaXRJbnB1dFN0YXRlKCk7XG4gICAgdGhpcy5pbml0RmFjZXRTdGF0ZSgpO1xuICAgIHRoaXMuaW5pdFNlY3Rpb25TdGF0ZSgpO1xuXG4gICAgLy8gbGlzdGVuZXJzXG4gICAgdGhpcy5vbklucHV0c0NoYW5nZSgpO1xuICAgIHRoaXMub25JbnRlcm5hbElucHV0c0NoYW5nZSgpO1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpO1xuICAgIHRoaXMub25SZXN1bHRzTG9hZGluZygpO1xuICAgIHRoaXMub25GYWNldHNTY3JvbGwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcblxuICBwdWJsaWMgZ2V0U3RhdGUkKGNvbnRleHQ6IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBTdWJqZWN0PGFueT4ge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBpZCA/IGAke2NvbnRleHR9LiR7aWR9YCA6IGNvbnRleHQ7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlJFtzdGF0ZUlkXTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZUNvbnRleHQoY29udGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtjb250ZXh0fVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge307XG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBcbiAgICAgICAgU3RhdGUgY29udGV4dCBcIiR7Y29udGV4dH1cIiBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgWW91IG11c3QgYWRkIGNvbnRleHQgZmlyc3RcbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke3N0YXRlSWR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIHNldFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIC8vIGhvb2sgY29udHJvbFxuICAgIGlmICh0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0ubmV4dCh2YWx1ZSk7XG4gICAgLy8gdXBkYXRlIGNvbnRleHRcbiAgICB0aGlzLnNldENvbnRleHRTdGF0ZShjb250ZXh0LCBpZCwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHNldEJlZm9yZUhvb2soY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBob29rKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdID0gaG9vaztcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICAvLyBjbGVhciBpbnB1dCBzdGF0ZXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSlcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiAhdGhpcy5pbnRlcm5hbEZpbHRlcktleXMuaW5jbHVkZXMoaWQpKVxuICAgICAgLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQsIG51bGwpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZSA9IHt9O1xuICAgIHRoaXMuc3RhdGUkID0ge307XG4gICAgdGhpcy5iZWZvcmVIb29rID0ge307XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHtcbiAgICAgIC4uLnRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdLFxuICAgICAgW2Ake2lkfWBdOiBuZXdWYWx1ZVxuICAgIH07XG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0ubmV4dCh7XG4gICAgICBsYXN0VXBkYXRlZDogaWQsXG4gICAgICBzdGF0ZTogdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMsIGxheW91dElucHV0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChJTlBVVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBmYWNldHMgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcbiAgICAgICAgLmZvckVhY2goKHtcbiAgICAgICAgICBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hLCBsaW1pdCwgdHlwZSwgdGFyZ2V0XG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICAgICAgLy8gaXMgcXVlcnkgcGFyYW0/XG4gICAgICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2NoZW1hc1xuICAgICAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsaW5rcyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAgIGlmICh0eXBlID09PSAnbGluaycpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdID0ge1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpbnRlcm5hbCBmaWx0ZXJzXG4gICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlcktleXMucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHNldCBsYXlvdXQgaW5wdXQgc3RhdGVcbiAgICBsYXlvdXRJbnB1dHMuZm9yRWFjaCgoeyBpZCwgcXVlcnlQYXJhbSwgc2NoZW1hIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBzY2hlbWFzXG4gICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTY2hlbWFzW2lkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZhY2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dClcbiAgICAgICAgLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRTdGF0ZShGQUNFVF9TVEFURV9DT05URVhULCBpbnB1dC5pZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2VjdGlvblN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KFNFQ1RJT05fU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKFNFQ1RJT05fU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcblxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICAgLy8gZml4IGluaXRpYWwgbGlzdGVuZXJzIChzeW1ib2xpYyB0aW1lb3V0KVxuICAgICAgZGVsYXkoMSksXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcbiAgICAgIG1hcCgocGFyYW1zKSA9PiBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcywgdGhpcy5pbnB1dFNjaGVtYXMpKSxcbiAgICAgIC8vIHN0YXRlICE9IHF1ZXJ5UGFyYW1zIGNvbnRyb2xcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dENvbnRleHQgPSB0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXTtcbiAgICAgICAgICBpZiAoaXNFbXB0eShpbnB1dENvbnRleHQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXRJZCkpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpbnB1dElkLCBwYXJhbXNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0SWQpKVxuICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dElkKSA9PiB0aGlzLm5vdEVxdWFscyhpbnB1dENvbnRleHRbaW5wdXRJZF0sIHBhcmFtc1tpbnB1dElkXSkpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgIElOUFVUX1NUQVRFX0NPTlRFWFQsXG4gICAgICAgICAgICAgICAgICBpbnB1dElkLFxuICAgICAgICAgICAgICAgICAgKHBhcmFtc1tpbnB1dElkXSB8fCBwYXJhbXNbaW5wdXRJZF0gPT09IDApXG4gICAgICAgICAgICAgICAgICAgID8gcGFyYW1zW2lucHV0SWRdXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShyZXN1bHRzLmRlbGF5IHx8IDEpLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3JlcXVlc3QnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4uc3RhdGUsIHNlYXJjaElkOiB0aGlzLnNlYXJjaElkIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlc3VsdHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpICE9PSAtMSlcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICAgICAgZmlsdGVyZWRTdGF0ZVtpZF0gPSBzdGF0ZVtpZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKGZpbHRlcmVkU3RhdGUsIHRoaXMuaW5wdXRTY2hlbWFzKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnRlcm5hbElucHV0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgPT09IC0xKSxcbiAgICAgIG1hcCgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLmNvbmZpZy5mYWNldHM7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZztcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaWQgPT09IGxhc3RVcGRhdGVkKSB7XG4gICAgICAgICAgICAgIGlucHV0Q29uZmlnID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5wdXRDb25maWcgJiYgaW5wdXRDb25maWcudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnLFxuICAgICAgICAgICAgdmFsdWU6IHN0YXRlW2xhc3RVcGRhdGVkXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPT0gbnVsbCksXG4gICAgKS5zdWJzY3JpYmUoKHsgaW5wdXRDb25maWcsIHZhbHVlIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpbnB1dENvbmZpZztcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXJzXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ucXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5kb1NpbmdsZUZhY2V0UmVxdWVzdCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkb1NpbmdsZUZhY2V0UmVxdWVzdCh0YXJnZXQpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcbiAgICBjb25zdCB7IGdsb2JhbFBhcmFtcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxuICAgIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF07XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLmdsb2JhbFBhcmFtcyxcbiAgICAgICAgZmFjZXRzOiBbe1xuICAgICAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxuICAgICAgICB9XSxcbiAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5vbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKTtcblxuICAgICAgLy8gcmVzZXQgbG9hZGluZ1xuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZXN1bHRzTG9hZGluZygpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcblxuICAgIGlmICghZmFjZXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3JlcXVlc3QnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycpLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBmYWNldHNQYXJhbXMgPSB7IC4uLnBhcmFtcyB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgZmFjZXRzUGFyYW1zKTtcbiAgICAgICAgLy8gdXBkYXRlZCBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcbiAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmdsb2JhbFBhcmFtcyA9IHsgLi4uZmFjZXRzUGFyYW1zIH07XG4gICAgICAgIHJldHVybiBmYWNldHNQYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShmYWNldHMuZGVsYXkgfHwgMSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICBwYXJhbXMuZmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnLmZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XG4gICAgICAgICAgaW5wdXRzLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICdsaW5rJylcbiAgICAgICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgLy8gcmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLm9mZnNldCA9IDA7XG4gICAgICAgICAgICAgIGNvbnN0IHsgbGltaXQsIHF1ZXJ5LCBvZmZzZXQgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xuICAgICAgICAgICAgICBwYXJhbXMuZmFjZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkLCBsaW1pdCwgb2Zmc2V0LCBxdWVyeVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChmYWNldHMuaWQsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWRcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBmYWNldHMucHJvdmlkZXIgfHwgbnVsbCkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMub25GYWNldHNSZXF1ZXN0U3VjY2VzcyhyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgZmFjZXQgbGlua3NcbiAgICB0aGlzLmdldFN0YXRlJChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHsgZmFjZXRzOiByZXNwb25zZUZhY2V0cyB9ID0gcmVzcG9uc2U7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXM6IHJlc3BvbnNlVmFsdWVzLCBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaWRdO1xuICAgICAgICBjb25zdCB7IGxpbWl0LCBvZmZzZXQsIHZhbHVlczogc3RhdGVWYWx1ZXMgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xuICAgICAgICBjb25zdCBmaWx0ZXJTdGF0ZSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIC8vIGRlbGV0ZSBsb2FkaW5nIGVsZW1lbnRcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMucG9wKCk7XG4gICAgICAgICAgLy8gbWVyZ2UgbmV3IHJlc3VsdHNcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMgPSBbXG4gICAgICAgICAgICAuLi5zdGF0ZVZhbHVlcyxcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXG4gICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJTdGF0ZS52YWx1ZXMgPSBbXG4gICAgICAgICAgICAuLi5yZXNwb25zZVZhbHVlc1xuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChvZmZzZXQgKyBsaW1pdCkgPCBmaWx0ZXJlZF90b3RhbF9jb3VudCkge1xuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IF90KCdnbG9iYWwjZmFjZXRfbG9hZGluZ190ZXh0JyksXG4gICAgICAgICAgICBjbGFzc2VzOiAnbG9hZGluZy10ZXh0LWxpbmsnLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlkLCB7XG4gICAgICAgICAgbGlua3M6IGZpbHRlclN0YXRlLnZhbHVlc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zZUZhY2V0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXIgc3RhdGVcbiAgICAgIGNvbnN0IHsgZmlsdGVyZWRfdG90YWxfY291bnQgfSA9IHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XTtcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaW5wdXRLZXldLmZpbHRlcmVkX3RvdGFsX2NvdW50ID0gZmlsdGVyZWRfdG90YWxfY291bnQ7XG4gICAgICAvLyByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldLnZhbHVlcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAvLyAgIC4uLml0ZW0sXG4gICAgICAvLyAgIHBheWxvYWQ6IGl0ZW0ucGF5bG9hZCAmJiB0eXBlb2YgaXRlbS5wYXlsb2FkID09PSAnc3RyaW5nJ1xuICAgICAgLy8gICAgID8gZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0ucGF5bG9hZClcbiAgICAgIC8vICAgICA6IGl0ZW0ucGF5bG9hZFxuICAgICAgLy8gfSkpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gIH1cblxuICBwcml2YXRlIG9uRmFjZXRzU2Nyb2xsKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgICAgaW5wdXRzXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxuICAgICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC50eXBlID09PSAnbGluaycpXG4gICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmFjZXQtY29udGFpbmVyLSR7aWR9IC5uNy1pbnB1dC1saW5rYCk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGwkID0gZnJvbUV2ZW50KHNjcm9sbEVsLCAnc2Nyb2xsJyk7XG4gICAgICAgICAgICBzY3JvbGwkLnBpcGUoXG4gICAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRfdG90YWxfY291bnQsXG4gICAgICAgICAgICAgIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXTtcbiAgICAgICAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodClcbiAgICAgICAgICAgICAgICAmJiAob2Zmc2V0ICsgbGltaXQgPCBmaWx0ZXJlZF90b3RhbF9jb3VudClcbiAgICAgICAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW2lkXS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2luZ2xlRmFjZXRSZXF1ZXN0KGlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUXVlcnlQYXJhbUtleSA9IChpbnB1dCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dCk7XG5cbiAgbm90RXF1YWxzKHZhbDEsIHZhbDIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwxKSAmJiBBcnJheS5pc0FycmF5KHZhbDIpKSB7XG4gICAgICByZXR1cm4gISF4b3IodmFsMSwgdmFsMikubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdmFsMSAhPT0gdmFsMjtcbiAgfVxufVxuIl19