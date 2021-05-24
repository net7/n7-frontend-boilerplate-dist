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
                        this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId] || null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULEdBQUcsRUFDSCxZQUFZLEVBQ1osS0FBSyxFQUNMLEdBQUcsRUFDSCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxZQUFZLE1BQU0sMEJBQTBCLENBQUM7QUFHcEQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztBQUMzQyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsZUFBZSxDQUFDO0FBRzVELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFxQzFCLFlBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQW1DO1FBRm5DLFdBQU0sR0FBTixN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SUFBSSxZQUFZLENBQUM7K0JBQ3ZDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxvQkFBb0IsQ0FBQzsrQkFDdkMsT0FBTyxLQUFLLEtBQUssRUFDcEI7NEJBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUM1RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQy9CO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUk7UUFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7O1lBM2VtQixNQUFNO1lBQ0UsY0FBYztZQUNmLG9CQUFvQjs7QUF4Q2xDLGVBQWU7SUFEM0IsVUFBVSxFQUFFO3FDQXVDTyxNQUFNO1FBQ0UsY0FBYztRQUNmLG9CQUFvQjtHQXhDbEMsZUFBZSxDQWloQjNCO1NBamhCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgc3dpdGNoTWFwLFxuICBtYXAsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIHRhcCxcbiAgdGFrZVVudGlsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzRW1wdHksIHhvciB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQgeyBNcklucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXQnO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT05fU1RBVEVfQ09OVEVYVCA9ICdzZWN0aW9uJztcbmV4cG9ydCBjb25zdCBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzUmVxdWVzdCc7XG5leHBvcnQgY29uc3QgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCA9ICdmYWNldHNSZXF1ZXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hJZDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIHByaXZhdGUgY29uZmlnO1xuXG4gIHByaXZhdGUgcXVlcnlQYXJhbUtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBpbnB1dFNjaGVtYXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBNcklucHV0U2NoZW1hO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBjb250ZXh0U3RhdGU6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGludGVybmFsRmlsdGVyS2V5czogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGludGVybmFsRmlsdGVyU3RhdGU6IHtcbiAgICBnbG9iYWxQYXJhbXM6IGFueTtcbiAgICBmYWNldHM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICB9ID0ge1xuICAgIGdsb2JhbFBhcmFtczoge30sXG4gICAgZmFjZXRzOiB7fVxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGUkOiB7XG4gICAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBiZWZvcmVIb29rOiB7XG4gICAgW2tleTogc3RyaW5nXTogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7IH1cblxuICBwdWJsaWMgaW5pdChzZWFyY2hJZCwgY29uZmlnKSB7XG4gICAgdGhpcy5zZWFyY2hJZCA9IHNlYXJjaElkO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgLy8gZmlyc3QgY2xlYXJcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlc1xuICAgIHRoaXMuaW5pdElucHV0U3RhdGUoKTtcbiAgICB0aGlzLmluaXRGYWNldFN0YXRlKCk7XG4gICAgdGhpcy5pbml0U2VjdGlvblN0YXRlKCk7XG5cbiAgICAvLyBsaXN0ZW5lcnNcbiAgICB0aGlzLm9uSW5wdXRzQ2hhbmdlKCk7XG4gICAgdGhpcy5vbkludGVybmFsSW5wdXRzQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJlc3VsdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5vbkZhY2V0c1Njcm9sbCgpO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRTdGF0ZSQoY29udGV4dDogc3RyaW5nLCBpZD86IHN0cmluZyk6IFN1YmplY3Q8YW55PiB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGlkID8gYCR7Y29udGV4dH0uJHtpZH1gIDogY29udGV4dDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUkW3N0YXRlSWRdO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlQ29udGV4dChjb250ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke2NvbnRleHR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7fTtcbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbY29udGV4dF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFxuICAgICAgICBTdGF0ZSBjb250ZXh0IFwiJHtjb250ZXh0fVwiIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICBZb3UgbXVzdCBhZGQgY29udGV4dCBmaXJzdFxuICAgICAgYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7c3RhdGVJZH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbmV3VmFsdWU7XG4gICAgLy8gaG9vayBjb250cm9sXG4gICAgaWYgKHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0odmFsdWUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtzdGF0ZUlkXS5uZXh0KHZhbHVlKTtcbiAgICAvLyB1cGRhdGUgY29udGV4dFxuICAgIHRoaXMuc2V0Q29udGV4dFN0YXRlKGNvbnRleHQsIGlkLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QmVmb3JlSG9vayhjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhvb2spIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0gPSBob29rO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIC8vIGNsZWFyIGlucHV0IHN0YXRlc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdKVxuICAgICAgLmZpbHRlcigoaWQpID0+ICF0aGlzLmludGVybmFsRmlsdGVyS2V5cy5pbmNsdWRlcyhpZCkpXG4gICAgICAuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCwgbnVsbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyKCkge1xuICAgIHRoaXMuY29udGV4dFN0YXRlID0ge307XG4gICAgdGhpcy5zdGF0ZSQgPSB7fTtcbiAgICB0aGlzLmJlZm9yZUhvb2sgPSB7fTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGV4dFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge1xuICAgICAgLi4udGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0sXG4gICAgICBbYCR7aWR9YF06IG5ld1ZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XS5uZXh0KHtcbiAgICAgIGxhc3RVcGRhdGVkOiBpZCxcbiAgICAgIHN0YXRlOiB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0SW5wdXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cywgbGF5b3V0SW5wdXRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KElOUFVUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gc2V0IGZhY2V0cyBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxuICAgICAgICAuZm9yRWFjaCgoe1xuICAgICAgICAgIGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEsIGxpbWl0LCB0eXBlLCB0YXJnZXRcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgICAgICAvLyBpcyBxdWVyeSBwYXJhbT9cbiAgICAgICAgICBpZiAocXVlcnlQYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzY2hlbWFzXG4gICAgICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxpbmtzIGludGVybmFsIHN0YXRlXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0gPSB7XG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGludGVybmFsIGZpbHRlcnNcbiAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyS2V5cy5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGxheW91dCBpbnB1dCBzdGF0ZVxuICAgIGxheW91dElucHV0cy5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtLCBzY2hlbWEgfSkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjaGVtYXNcbiAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgdGhpcy5pbnB1dFNjaGVtYXNbaWRdID0gc2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmFjZXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChGQUNFVF9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxuICAgICAgICAuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlucHV0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTZWN0aW9uU3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoU0VDVElPTl9TVEFURV9DT05URVhUKTtcblxuICAgIC8vIHNldCBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoU0VDVElPTl9TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXRlc1xuICAgIFsnbG9hZGluZycsICdyZXF1ZXN0JywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAvLyBmaXggaW5pdGlhbCBsaXN0ZW5lcnMgKHN5bWJvbGljIHRpbWVvdXQpXG4gICAgICBkZWxheSgxKSxcbiAgICAgIC8vIHF1ZXJ5IHBhcmFtcyB0byBzdGF0ZVxuICAgICAgbWFwKChwYXJhbXMpID0+IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zLCB0aGlzLmlucHV0U2NoZW1hcykpLFxuICAgICAgLy8gc3RhdGUgIT0gcXVlcnlQYXJhbXMgY29udHJvbFxuICAgICAgdGFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxuICAgICAgICBpZiAoIWlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuY29udGV4dFN0YXRlW0lOUFVUX1NUQVRFX0NPTlRFWFRdO1xuICAgICAgICAgIGlmIChpc0VtcHR5KGlucHV0Q29udGV4dCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgLmZpbHRlcigoaW5wdXRJZCkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmNsdWRlcyhpbnB1dElkKSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5jbHVkZXMoaW5wdXRJZCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGlucHV0SWQpID0+IHRoaXMubm90RXF1YWxzKGlucHV0Q29udGV4dFtpbnB1dElkXSwgcGFyYW1zW2lucHV0SWRdKSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSB8fCBudWxsKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKHJlc3VsdHMuZGVsYXkgfHwgMSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAncmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChyZXN1bHRzLmlkLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5zdGF0ZSwgc2VhcmNoSWQ6IHRoaXMuc2VhcmNoSWQgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcmVzdWx0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbklucHV0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgIT09IC0xKVxuICAgICkuc3Vic2NyaWJlKCh7IHN0YXRlIH0pID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWx0ZXJlZFN0YXRlW2lkXSA9IHN0YXRlW2lkXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMoZmlsdGVyZWRTdGF0ZSwgdGhpcy5pbnB1dFNjaGVtYXMpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkludGVybmFsSW5wdXRzQ2hhbmdlKCkge1xuICAgIHRoaXMuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGxhc3RVcGRhdGVkKSA9PT0gLTEpLFxuICAgICAgbWFwKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMuY29uZmlnLmZhY2V0cztcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5pZCA9PT0gbGFzdFVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgaW5wdXRDb25maWcgPSBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbnB1dENvbmZpZyAmJiBpbnB1dENvbmZpZy50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb25maWcsXG4gICAgICAgICAgICB2YWx1ZTogc3RhdGVbbGFzdFVwZGF0ZWRdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9PSBudWxsKSxcbiAgICApLnN1YnNjcmliZSgoeyBpbnB1dENvbmZpZywgdmFsdWUgfSkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGlucHV0Q29uZmlnO1xuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlcnNcbiAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XS5xdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1t0YXJnZXRdLm9mZnNldCA9IDA7XG4gICAgICB0aGlzLmRvU2luZ2xlRmFjZXRSZXF1ZXN0KHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRvU2luZ2xlRmFjZXRSZXF1ZXN0KHRhcmdldCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuICAgIGNvbnN0IHsgZ2xvYmFsUGFyYW1zIH0gPSB0aGlzLmludGVybmFsRmlsdGVyU3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XG4gICAgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbdGFyZ2V0XTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoZmFjZXRzLmlkLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uZ2xvYmFsUGFyYW1zLFxuICAgICAgICBmYWNldHM6IFt7XG4gICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XG4gICAgICAgIH1dLFxuICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLm9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpO1xuXG4gICAgICAvLyByZXNldCBsb2FkaW5nXG4gICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZmFjZXRzW3RhcmdldF0ubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlc3VsdHNMb2FkaW5nKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgaWYgKCFmYWNldHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcbiAgICBbJ2xvYWRpbmcnLCAncmVxdWVzdCcsICdzdWNjZXNzJywgJ2Vycm9yJ10uZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRTdGF0ZSQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJykucGlwZShcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IGZhY2V0c1BhcmFtcyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBmYWNldHNQYXJhbXMpO1xuICAgICAgICAvLyB1cGRhdGVkIGludGVybmFsIGZpbHRlciBzdGF0ZVxuICAgICAgICB0aGlzLmludGVybmFsRmlsdGVyU3RhdGUuZ2xvYmFsUGFyYW1zID0geyAuLi5mYWNldHNQYXJhbXMgfTtcbiAgICAgICAgcmV0dXJuIGZhY2V0c1BhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKGZhY2V0cy5kZWxheSB8fCAxKSxcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHBhcmFtcy5mYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgICAgICBpbnB1dHMuZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ2xpbmsnKVxuICAgICAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgICAgICAvLyByZXNldCBvZmZzZXRcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF0ub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgY29uc3QgeyBsaW1pdCwgcXVlcnksIG9mZnNldCB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgICAgICAgIHBhcmFtcy5mYWNldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQsIGxpbWl0LCBvZmZzZXQsIHF1ZXJ5XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdyZXF1ZXN0JywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZSkgPT4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKGZhY2V0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBzZWFyY2hJZDogdGhpcy5zZWFyY2hJZFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhY2V0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5vbkZhY2V0c1JlcXVlc3RTdWNjZXNzKHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBmYWNldCBsaW5rc1xuICAgIHRoaXMuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgeyBmYWNldHM6IHJlc3BvbnNlRmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlczogcmVzcG9uc2VWYWx1ZXMsIGZpbHRlcmVkX3RvdGFsX2NvdW50IH0gPSByZXNwb25zZUZhY2V0c1tpZF07XG4gICAgICAgIGNvbnN0IHsgbGltaXQsIG9mZnNldCwgdmFsdWVzOiBzdGF0ZVZhbHVlcyB9ID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgIGNvbnN0IGZpbHRlclN0YXRlID0gdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpZF07XG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgLy8gZGVsZXRlIGxvYWRpbmcgZWxlbWVudFxuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcy5wb3AoKTtcbiAgICAgICAgICAvLyBtZXJnZSBuZXcgcmVzdWx0c1xuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcbiAgICAgICAgICAgIC4uLnN0YXRlVmFsdWVzLFxuICAgICAgICAgICAgLi4ucmVzcG9uc2VWYWx1ZXNcbiAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlclN0YXRlLnZhbHVlcyA9IFtcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlVmFsdWVzXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG9mZnNldCArIGxpbWl0KSA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KSB7XG4gICAgICAgICAgZmlsdGVyU3RhdGUudmFsdWVzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogX3QoJ2dsb2JhbCNmYWNldF9sb2FkaW5nX3RleHQnKSxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdsb2FkaW5nLXRleHQtbGluaycsXG4gICAgICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaWQsIHtcbiAgICAgICAgICBsaW5rczogZmlsdGVyU3RhdGUudmFsdWVzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRmFjZXRzUmVxdWVzdFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0czogcmVzcG9uc2VGYWNldHMgfSA9IHJlc3BvbnNlO1xuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlRmFjZXRzKS5mb3JFYWNoKChpbnB1dEtleSkgPT4ge1xuICAgICAgLy8gdXBkYXRlIGludGVybmFsIGZpbHRlciBzdGF0ZVxuICAgICAgY29uc3QgeyBmaWx0ZXJlZF90b3RhbF9jb3VudCB9ID0gcmVzcG9uc2VGYWNldHNbaW5wdXRLZXldO1xuICAgICAgdGhpcy5pbnRlcm5hbEZpbHRlclN0YXRlLmZhY2V0c1tpbnB1dEtleV0uZmlsdGVyZWRfdG90YWxfY291bnQgPSBmaWx0ZXJlZF90b3RhbF9jb3VudDtcbiAgICAgIC8vIHJlc3BvbnNlRmFjZXRzW2lucHV0S2V5XS52YWx1ZXMgPSByZXNwb25zZUZhY2V0c1tpbnB1dEtleV0udmFsdWVzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIC8vICAgLi4uaXRlbSxcbiAgICAgIC8vICAgcGF5bG9hZDogaXRlbS5wYXlsb2FkICYmIHR5cGVvZiBpdGVtLnBheWxvYWQgPT09ICdzdHJpbmcnXG4gICAgICAvLyAgICAgPyBlbmNvZGVVUklDb21wb25lbnQoaXRlbS5wYXlsb2FkKVxuICAgICAgLy8gICAgIDogaXRlbS5wYXlsb2FkXG4gICAgICAvLyB9KSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25GYWNldHNTY3JvbGwoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IGZhY2V0cyB9ID0gdGhpcy5jb25maWc7XG4gICAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgICBpbnB1dHNcbiAgICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXG4gICAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LnR5cGUgPT09ICdsaW5rJylcbiAgICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmYWNldC1jb250YWluZXItJHtpZH0gLm43LWlucHV0LWxpbmtgKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsRWwsICdzY3JvbGwnKTtcbiAgICAgICAgICAgIHNjcm9sbCQucGlwZShcbiAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDMwMClcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZF90b3RhbF9jb3VudCxcbiAgICAgICAgICAgICAgfSA9IHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdO1xuICAgICAgICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0KVxuICAgICAgICAgICAgICAgICYmIChvZmZzZXQgKyBsaW1pdCA8IGZpbHRlcmVkX3RvdGFsX2NvdW50KVxuICAgICAgICAgICAgICAgICYmIGxvYWRpbmcgPT09IGZhbHNlXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGaWx0ZXJTdGF0ZS5mYWNldHNbaWRdLm9mZnNldCA9IG9mZnNldCArIGxpbWl0O1xuICAgICAgICAgICAgICAgIHRoaXMuZG9TaW5nbGVGYWNldFJlcXVlc3QoaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaXNRdWVyeVBhcmFtS2V5ID0gKGlucHV0KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluY2x1ZGVzKGlucHV0KTtcblxuICBub3RFcXVhbHModmFsMSwgdmFsMikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbDEpICYmIEFycmF5LmlzQXJyYXkodmFsMikpIHtcbiAgICAgIHJldHVybiAhIXhvcih2YWwxLCB2YWwyKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB2YWwxICE9PSB2YWwyO1xuICB9XG59XG4iXX0=