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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxHQUFHLEVBQ0gsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sWUFBWSxNQUFNLDBCQUEwQixDQUFDOztBQUVwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsT0FBTzs7QUFDMUMsTUFBTSxPQUFPLG1CQUFtQixHQUFHLE9BQU87O0FBQzFDLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxTQUFTOztBQUM5QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsT0FBTztBQUcxQyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBaUIxQixZQUNVLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQztRQUZuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQWpCckMsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFFOUIsaUJBQVksR0FFaEIsRUFBRSxDQUFDO1FBRUMsV0FBTSxHQUVWLEVBQUUsQ0FBQztRQUVDLGVBQVUsR0FFZCxFQUFFLENBQUM7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QUFvQjs7Ozs7OztJQVUzQixpQ0FBZTs7Ozs7SUFFZix5Q0FBc0M7Ozs7O0lBRXRDLHVDQUVPOzs7OztJQUVQLGlDQUVPOzs7OztJQUVQLHFDQUVPOztJQXFCUCxvQ0FBcUM7Ozs7O0lBbEJuQyxpQ0FBc0I7Ozs7O0lBQ3RCLHlDQUFzQzs7Ozs7SUFDdEMsd0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIHN3aXRjaE1hcCxcbiAgbWFwLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBzZWFyY2hIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9zZWFyY2gtaGVscGVyJztcblxuZXhwb3J0IGNvbnN0IElOUFVUX1NUQVRFX0NPTlRFWFQgPSAnaW5wdXQnO1xuZXhwb3J0IGNvbnN0IEZBQ0VUX1NUQVRFX0NPTlRFWFQgPSAnZmFjZXQnO1xuZXhwb3J0IGNvbnN0IFJFU1VMVFNfU1RBVEVfQ09OVEVYVCA9ICdyZXN1bHRzJztcbmV4cG9ydCBjb25zdCBMSU5LU19TVEFURV9DT05URVhUID0gJ2xpbmtzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnO1xuXG4gIHByaXZhdGUgcXVlcnlQYXJhbUtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBjb250ZXh0U3RhdGU6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIHN0YXRlJDoge1xuICAgIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55PjtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgYmVmb3JlSG9vazoge1xuICAgIFtrZXk6IHN0cmluZ106ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICkgeyB9XG5cbiAgcHVibGljIGluaXQoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAvLyBpbml0aWFsIHN0YXRlc1xuICAgIHRoaXMuaW5pdElucHV0U3RhdGUoKTtcbiAgICB0aGlzLmluaXRGYWNldFN0YXRlKCk7XG5cbiAgICAvLyBsaXN0ZW5lcnNcbiAgICB0aGlzLm9uSW5wdXRzQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKCk7XG4gICAgdGhpcy5vblJlc3VsdHNMb2FkaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG5cbiAgcHVibGljIGdldFN0YXRlJChjb250ZXh0OiBzdHJpbmcsIGlkPzogc3RyaW5nKTogU3ViamVjdDxhbnk+IHtcbiAgICBjb25zdCBzdGF0ZUlkID0gaWQgPyBgJHtjb250ZXh0fS4ke2lkfWAgOiBjb250ZXh0O1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcydudCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZSRbc3RhdGVJZF07XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGVDb250ZXh0KGNvbnRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnN0YXRlJFtjb250ZXh0XSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFN0YXRlIGtleSBcIiR7Y29udGV4dH1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XSA9IHt9O1xuICAgIC8vIGNyZWF0ZSBzdHJlYW1cbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGUoY29udGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RhdGVJZCA9IGAke2NvbnRleHR9LiR7aWR9YDtcbiAgICBpZiAoIXRoaXMuc3RhdGUkW2NvbnRleHRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgXG4gICAgICAgIFN0YXRlIGNvbnRleHQgXCIke2NvbnRleHR9XCIgZG9lcydudCBleGlzdHMuXG4gICAgICAgIFlvdSBtdXN0IGFkZCBjb250ZXh0IGZpcnN0XG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUkW3N0YXRlSWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU3RhdGUga2V5IFwiJHtzdGF0ZUlkfVwiIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdGF0ZShjb250ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBzdGF0ZUlkID0gYCR7Y29udGV4dH0uJHtpZH1gO1xuICAgIGlmICghdGhpcy5zdGF0ZSRbc3RhdGVJZF0pIHtcbiAgICAgIHRocm93IEVycm9yKGBLZXkgXCIke3N0YXRlSWR9XCIgZG9lcydudCBleGlzdHNgKTtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAvLyBob29rIGNvbnRyb2xcbiAgICBpZiAodGhpcy5iZWZvcmVIb29rW3N0YXRlSWRdKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHN0cmVhbVxuICAgIHRoaXMuc3RhdGUkW3N0YXRlSWRdLm5leHQodmFsdWUpO1xuICAgIC8vIHVwZGF0ZSBjb250ZXh0XG4gICAgdGhpcy5zZXRDb250ZXh0U3RhdGUoY29udGV4dCwgaWQsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRCZWZvcmVIb29rKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgaG9vaykge1xuICAgIGNvbnN0IHN0YXRlSWQgPSBgJHtjb250ZXh0fS4ke2lkfWA7XG4gICAgaWYgKCF0aGlzLnN0YXRlJFtzdGF0ZUlkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEtleSBcIiR7c3RhdGVJZH1cIiBkb2VzJ250IGV4aXN0c2ApO1xuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlSG9va1tzdGF0ZUlkXSA9IGhvb2s7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgLy8gY2xlYXIgaW5wdXQgc3RhdGVzXG4gICAgT2JqZWN0LmtleXModGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGV4dFN0YXRlKGNvbnRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIHRoaXMuY29udGV4dFN0YXRlW2NvbnRleHRdID0ge1xuICAgICAgLi4udGhpcy5jb250ZXh0U3RhdGVbY29udGV4dF0sXG4gICAgICBbYCR7aWR9YF06IG5ld1ZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlJFtjb250ZXh0XS5uZXh0KHtcbiAgICAgIGxhc3RVcGRhdGVkOiBpZCxcbiAgICAgIHN0YXRlOiB0aGlzLmNvbnRleHRTdGF0ZVtjb250ZXh0XVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0SW5wdXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZhY2V0cywgbGF5b3V0SW5wdXRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KElOUFVUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gc2V0IGZhY2V0cyBpbnB1dCBzdGF0ZVxuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoeyBpZCwgcXVlcnlQYXJhbSB9KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkU3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgaWQpO1xuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeVBhcmFtS2V5cy5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgbGF5b3V0IGlucHV0IHN0YXRlXG4gICAgbGF5b3V0SW5wdXRzLmZvckVhY2goKHsgaWQsIHF1ZXJ5UGFyYW0gfSkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCk7XG5cbiAgICAgIGlmIChxdWVyeVBhcmFtKSB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbUtleXMucHVzaChpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGYWNldFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAvLyBhZGQgY29udGV4dCBzdGF0ZVxuICAgIHRoaXMuYWRkU3RhdGVDb250ZXh0KEZBQ0VUX1NUQVRFX0NPTlRFWFQpO1xuXG4gICAgLy8gc2V0IGlucHV0IHN0YXRlXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlucHV0LmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gdGhpcy5jb25maWcucmVxdWVzdDtcblxuICAgIC8vIGFkZCBjb250ZXh0IHN0YXRlXG4gICAgdGhpcy5hZGRTdGF0ZUNvbnRleHQoUkVTVUxUU19TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShSRVNVTFRTX1NUQVRFX0NPTlRFWFQsIGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIC8vIGZpeCBpbml0aWFsIGxpc3RlbmVycyAoc3ltYm9saWMgdGltZW91dClcbiAgICAgIGRlbGF5KDEpLFxuICAgICAgLy8gcXVlcnkgcGFyYW1zIHRvIHN0YXRlXG4gICAgICBtYXAoKHBhcmFtcykgPT4gc2VhcmNoSGVscGVyLnF1ZXJ5UGFyYW1zVG9TdGF0ZShwYXJhbXMpKSxcbiAgICAgIC8vIHN0YXRlICE9IHF1ZXJ5UGFyYW1zIGNvbnRyb2xcbiAgICAgIHRhcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykgJiYgIWlzRW1wdHkodGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pKSB7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbXB0eShwYXJhbXMpICYmIGlzRW1wdHkodGhpcy5jb250ZXh0U3RhdGVbSU5QVVRfU1RBVEVfQ09OVEVYVF0pKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlucHV0SWQsIHBhcmFtc1tpbnB1dElkXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKHJlc3VsdHMuZGVsYXkgfHwgMSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocmVzdWx0cy5pZCwge1xuICAgICAgICBwYXJhbXM6IHN0YXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShSRVNVTFRTX1NUQVRFX0NPTlRFWFQsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcmVzdWx0cy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoUkVTVUxUU19TVEFURV9DT05URVhULCAnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25JbnB1dHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkucGlwZShcbiAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLnF1ZXJ5UGFyYW1LZXlzLmluZGV4T2YobGFzdFVwZGF0ZWQpICE9PSAtMSlcbiAgICApLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbUtleXMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICAgICAgZmlsdGVyZWRTdGF0ZVtpZF0gPSBzdGF0ZVtpZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKGZpbHRlcmVkU3RhdGUpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlc3VsdHNMb2FkaW5nKCkge1xuICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuY29uZmlnLnJlcXVlc3Q7XG5cbiAgICBpZiAoIWxpbmtzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbnRleHQgc3RhdGVcbiAgICB0aGlzLmFkZFN0YXRlQ29udGV4dChMSU5LU19TVEFURV9DT05URVhUKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhdGVzXG4gICAgWydsb2FkaW5nJywgJ3N1Y2Nlc3MnLCAnZXJyb3InXS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZShMSU5LU19TVEFURV9DT05URVhULCBpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdldFN0YXRlJChSRVNVTFRTX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJykucGlwZShcbiAgICAgIG1hcCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoTElOS1NfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUobGlua3MuZGVsYXkgfHwgMSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQobGlua3MuaWQsIHtcbiAgICAgICAgcGFyYW1zOiBzdGF0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoTElOS1NfU1RBVEVfQ09OVEVYVCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBsaW5rcy5wcm92aWRlciB8fCBudWxsKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoTElOS1NfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgbGlua3NcbiAgICB0aGlzLmdldFN0YXRlJChMSU5LU19TVEFURV9DT05URVhULCAnc3VjY2VzcycpLnN1YnNjcmliZSgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKEZBQ0VUX1NUQVRFX0NPTlRFWFQsIGlkLCB7XG4gICAgICAgICAgbGlua3M6IGlucHV0c1tpZF1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19