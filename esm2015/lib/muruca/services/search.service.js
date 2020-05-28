/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, switchMap, map, debounceTime, delay, tap, } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { CommunicationService } from '../../common/services/communication.service';
import searchHelper from '../helpers/search-helper';
/** @type {?} */
export const INPUT_STATE_CONTEXT = 'input';
/** @type {?} */
export const FACET_STATE_CONTEXT = 'facet';
/** @type {?} */
export const RESULTS_STATE_CONTEXT = 'results';
/** @type {?} */
export const LINKS_STATE_CONTEXT = 'links';
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
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = (/**
         * @return {?}
         */
        () => this.config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    init(config) {
        this.config = config;
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
            ({ id, queryParam }) => {
                this.addState(INPUT_STATE_CONTEXT, id);
                if (queryParam) {
                    this.queryParamKeys.push(id);
                }
            }));
        }));
        // set layout input state
        layoutInputs.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, queryParam }) => {
            this.addState(INPUT_STATE_CONTEXT, id);
            if (queryParam) {
                this.queryParamKeys.push(id);
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
        this.addStateContext(RESULTS_STATE_CONTEXT);
        // default states
        ['loading', 'success', 'error'].forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.addState(RESULTS_STATE_CONTEXT, id);
        }));
        this.activatedRoute.queryParams.pipe(
        // fix initial listeners (symbolic timeout)
        delay(1), 
        // query params to state
        map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => searchHelper.queryParamsToState(params))), 
        // state != queryParams control
        tap((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (isEmpty(params) && !isEmpty(this.contextState[INPUT_STATE_CONTEXT])) {
                this.reset();
            }
            if (!isEmpty(params) && isEmpty(this.contextState[INPUT_STATE_CONTEXT])) {
                // update state
                Object.keys(params).forEach((/**
                 * @param {?} inputId
                 * @return {?}
                 */
                (inputId) => {
                    this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                }));
            }
        })), map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(RESULTS_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(results.delay || 1), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.communication.request$(results.id, {
            params: state,
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.setState(RESULTS_STATE_CONTEXT, 'error', error);
            })
        }, results.provider || null)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.setState(RESULTS_STATE_CONTEXT, 'success', response);
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
            const queryParams = searchHelper.stateToQueryParams(filteredState);
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
        const { links } = this.config.request;
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
        (id) => {
            this.addState(LINKS_STATE_CONTEXT, id);
        }));
        this.getState$(RESULTS_STATE_CONTEXT, 'loading').pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.setState(LINKS_STATE_CONTEXT, 'loading', params);
            return params;
        })), debounceTime(links.delay || 1), switchMap((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.communication.request$(links.id, {
            params: state,
            method: 'POST',
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.setState(LINKS_STATE_CONTEXT, 'error', error);
            })
        }, links.provider || null)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.setState(LINKS_STATE_CONTEXT, 'success', response);
        }));
        // update links
        this.getState$(LINKS_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            Object.keys(response).forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                this.setState(FACET_STATE_CONTEXT, id, {
                    links: response[id]
                });
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sWUFBWSxNQUFNLDBCQUEwQixDQUFDOztBQUVwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsT0FBTzs7QUFDMUMsTUFBTSxPQUFPLG1CQUFtQixHQUFHLE9BQU87O0FBQzFDLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxTQUFTOztBQUM5QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsT0FBTztBQUcxQyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBaUIxQixZQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQztRQUZuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQWpCckMsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFFOUIsaUJBQVksR0FFaEIsRUFBRSxDQUFDO1FBRUMsV0FBTSxHQUVWLEVBQUUsQ0FBQztRQUVDLGVBQVUsR0FFZCxFQUFFLENBQUM7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O0lBVTNCLGlDQUFlOzs7OztJQUVmLHlDQUFzQzs7Ozs7SUFFdEMsdUNBRU87Ozs7O0lBRVAsaUNBRU87Ozs7O0lBRVAscUNBRU87O0lBcUJQLG9DQUFxQzs7Ozs7SUFsQm5DLGlDQUFzQjs7Ozs7SUFDdEIseUNBQXNDOzs7OztJQUN0Qyx3Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgc3dpdGNoTWFwLFxuICBtYXAsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHNlYXJjaEhlbHBlciBmcm9tICcuLi9oZWxwZXJzL3NlYXJjaC1oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgSU5QVVRfU1RBVEVfQ09OVEVYVCA9ICdpbnB1dCc7XG5leHBvcnQgY29uc3QgRkFDRVRfU1RBVEVfQ09OVEVYVCA9ICdmYWNldCc7XG5leHBvcnQgY29uc3QgUkVTVUxUU19TVEFURV9DT05URVhUID0gJ3Jlc3VsdHMnO1xuZXhwb3J0IGNvbnN0IExJTktTX1NUQVRFX0NPTlRFWFQgPSAnbGlua3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWc7XG5cbiAgcHJpdmF0ZSBxdWVyeVBhcmFtS2V5czogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGNvbnRleHRTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgc3RhdGUkOiB7XG4gICAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBiZWZvcmVIb29rOiB7XG4gICAgW2tleTogc3RyaW5nXTogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7IH1cblxuICBwdWJsaWMgaW5pdChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIC8vIGluaXRpYWwgc3RhdGVzXG4gICAgdGhpcy5pbml0SW5wdXRTdGF0ZSgpO1xuICAgIHRoaXMuaW5pdEZhY2V0U3RhdGUoKTtcblxuICAgIC8vIGxpc3RlbmVyc1xuICAgIHRoaXMub25JbnB1dHNDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKTtcbiAgICB0aGlzLm9uUmVzdWx0c0xvYWRpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcblxuICBwdWJsaWMgZ2V0U3RhdGUkKGNvbnRleHQ6IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBTdWJqZWN0PGFueT4ge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBpZCA/IGAke2NvbnRleHR9LiR7aWR9YCA6IGNvbnRleHQ7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlJFtzdGF0ZUlkXTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZUNvbnRleHQoY29udGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtjb250ZXh0fVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge307XG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbY29udGV4dF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBcbiAgICAgICAgU3RhdGUgY29udGV4dCBcIiR7Y29udGV4dH1cIiBkb2VzJ250IGV4aXN0cy5cbiAgICAgICAgWW91IG11c3QgYWRkIGNvbnRleHQgZmlyc3RcbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBTdGF0ZSBrZXkgXCIke3N0YXRlSWR9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0gPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgcHVibGljIHNldFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIC8vIGhvb2sgY29udHJvbFxuICAgIGlmICh0aGlzLmJlZm9yZUhvb2tbc3RhdGVJZF0pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtXG4gICAgdGhpcy5zdGF0ZSRbc3RhdGVJZF0ubmV4dCh2YWx1ZSk7XG4gICAgLy8gdXBkYXRlIGNvbnRleHRcbiAgICB0aGlzLnNldENvbnRleHRTdGF0ZShjb250ZXh0LCBpZCwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHNldEJlZm9yZUhvb2soY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBob29rKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgS2V5IFwiJHtzdGF0ZUlkfVwiIGRvZXMnbnQgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdID0gaG9vaztcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICAvLyBjbGVhciBpbnB1dCBzdGF0ZXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250ZXh0U3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0gPSB7XG4gICAgICAuLi50aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSxcbiAgICAgIFtgJHtpZH1gXTogbmV3VmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUkW2NvbnRleHRdLm5leHQoe1xuICAgICAgbGFzdFVwZGF0ZWQ6IGlkLFxuICAgICAgc3RhdGU6IHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRJbnB1dFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoSU5QVVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgZmFjZXRzIGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXS5mb3JFYWNoKCh7IGlkLCBxdWVyeVBhcmFtIH0pID0+IHtcbiAgICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1LZXlzLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHNldCBsYXlvdXQgaW5wdXQgc3RhdGVcbiAgICBsYXlvdXRJbnB1dHMuZm9yRWFjaCgoeyBpZCwgcXVlcnlQYXJhbSB9KSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkKTtcblxuICAgICAgaWYgKHF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZhY2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoRkFDRVRfU1RBVEVfQ09OVEVYVCk7XG5cbiAgICAvLyBzZXQgaW5wdXQgc3RhdGVcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkU3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaW5wdXQuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSB0aGlzLmNvbmZpZy5yZXF1ZXN0O1xuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChSRVNVTFRTX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcbiAgICBbJ2xvYWRpbmcnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgLy8gZml4IGluaXRpYWwgbGlzdGVuZXJzIChzeW1ib2xpYyB0aW1lb3V0KVxuICAgICAgZGVsYXkoMSksXG4gICAgICAvLyBxdWVyeSBwYXJhbXMgdG8gc3RhdGVcbiAgICAgIG1hcCgocGFyYW1zKSA9PiBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcykpLFxuICAgICAgLy8gc3RhdGUgIT0gcXVlcnlQYXJhbXMgY29udHJvbFxuICAgICAgdGFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKGlzRW1wdHkocGFyYW1zKSAmJiAhaXNFbXB0eSh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSkpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VtcHR5KHBhcmFtcykgJiYgaXNFbXB0eSh0aGlzLmNvbnRleHRTdGF0ZVtJTlBVVF9TVEFURV9DT05URVhUXSkpIHtcbiAgICAgICAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaW5wdXRJZCwgcGFyYW1zW2lucHV0SWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUocmVzdWx0cy5kZWxheSB8fCAxKSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChyZXN1bHRzLmlkLCB7XG4gICAgICAgIHBhcmFtczogc3RhdGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCByZXN1bHRzLnByb3ZpZGVyIHx8IG51bGwpKVxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbklucHV0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihsYXN0VXBkYXRlZCkgIT09IC0xKVxuICAgICkuc3Vic2NyaWJlKCh7IHN0YXRlIH0pID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5xdWVyeVBhcmFtS2V5cy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWx0ZXJlZFN0YXRlW2lkXSA9IHN0YXRlW2lkXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMoZmlsdGVyZWRTdGF0ZSk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUmVzdWx0c0xvYWRpbmcoKSB7XG4gICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcblxuICAgIGlmICghbGlua3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KExJTktTX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gZGVmYXVsdCBzdGF0ZXNcbiAgICBbJ2xvYWRpbmcnLCAnc3VjY2VzcycsICdlcnJvciddLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlKExJTktTX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0U3RhdGUkKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5waXBlKFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShMSU5LU19TVEFURV9DT05URVhULCAnbG9hZGluZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9KSxcbiAgICAgIGRlYm91bmNlVGltZShsaW5rcy5kZWxheSB8fCAxKSxcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChsaW5rcy5pZCwge1xuICAgICAgICBwYXJhbXM6IHN0YXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShMSU5LU19TVEFURV9DT05URVhULCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIGxpbmtzLnByb3ZpZGVyIHx8IG51bGwpKVxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShMSU5LU19TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBsaW5rc1xuICAgIHRoaXMuZ2V0U3RhdGUkKExJTktTX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRkFDRVRfU1RBVEVfQ09OVEVYVCwgaWQsIHtcbiAgICAgICAgICBsaW5rczogcmVzcG9uc2VbaWRdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==