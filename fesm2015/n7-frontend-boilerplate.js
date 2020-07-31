import { __decorate, __param, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Inject, ɵɵinject, Component, Input, NgModule, ViewChild, ElementRef, ApplicationInitStatus, Pipe } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK, MAP_MOCK, DATA_WIDGET_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of, merge, fromEvent, BehaviorSubject, forkJoin } from 'rxjs';
import { map, catchError, takeUntil, filter, tap, mapTo, debounceTime, switchMap, first, withLatestFrom, delay } from 'rxjs/operators';
import { NavigationStart, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { LayoutBuilder, EventHandler, DataSource, LayoutDataSource as LayoutDataSource$1 } from '@n7-frontend/core';
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import tippy, { hideAll } from 'tippy.js';
import { isEmpty, get, cloneDeep, xor } from 'lodash';
import slugify from 'slugify';
import { DataSource as DataSource$1 } from '@n7-frontend/core/dist/data-source';
import * as moment from 'moment';

let ConfigurationService = class ConfigurationService {
    constructor() {
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
    }
};
ConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
ConfigurationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ConfigurationService);

let LayoutsConfigurationService = class LayoutsConfigurationService {
    constructor(config) {
        this.config = config;
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
        if (this.config.layouts) {
            Object.keys(this.config.layouts).forEach((key) => {
                this.set(key, this.config.layouts[key]);
            });
        }
    }
};
LayoutsConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
LayoutsConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
LayoutsConfigurationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject('config')),
    __metadata("design:paramtypes", [Object])
], LayoutsConfigurationService);

let MainStateService = class MainStateService {
    constructor() {
        // custom streams
        this.custom = {};
        // default streams
        this.default = {
            headTitle: new ReplaySubject(),
            pageTitle: new ReplaySubject(),
            subnav: new ReplaySubject(),
            breadcrumbs: new ReplaySubject(),
            filters: new ReplaySubject(),
        };
        this.get$ = (key) => this._get('default', key);
        this.getCustom$ = (key) => this._get('custom', key);
        this.update = (key, newValue) => this._update('default', key, newValue);
        this.updateCustom = (key, newValue) => this._update('custom', key, newValue);
        this.has = (key) => !!this.default[key];
        this.hasCustom = (key) => !!this.custom[key];
    }
    addCustom(key, stream$) {
        if (this.custom[key])
            throw Error(`custom stream ${key} exists!`);
        this.custom[key] = stream$;
    }
    _update(type, key, newValue) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        this[type][key].next(newValue);
    }
    _get(type, key) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        return this[type][key];
    }
};
MainStateService.ɵprov = ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
MainStateService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MainStateService);

let ApolloProvider = class ApolloProvider {
    constructor(http) {
        this.http = http;
    }
    request$(providerConfig, requestId, options) {
        const { params, method, httpOptions } = options;
        let query;
        if (providerConfig.config && providerConfig.config[requestId]) {
            query = providerConfig.config[requestId];
        }
        query = query || {};
        const { queryName } = query;
        let { queryBody } = query;
        // config query control
        if (!queryName || !queryBody) {
            throw Error(`No config found for requestId '${requestId}'`);
        }
        if (params) {
            const paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        let source$;
        if (method && method === 'GET') {
            source$ = this.http.get(providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
        }
        return source$.pipe(map((response) => response.data[queryName]));
    }
    makeParamsStr(params) {
        const paramsStr = [];
        Object.keys(params).forEach((key) => {
            if (Array.isArray(params[key])) {
                const arrStr = [];
                params[key].forEach((val) => {
                    if (typeof val === 'object') {
                        const subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                        arrStr.push(`${val}`);
                    }
                    else {
                        arrStr.push(`"${val}"`);
                    }
                });
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof params[key] === 'object' && params[key]) {
                const subParamsStr = this.makeParamsStr(params[key]);
                paramsStr.push(`${key}: { ${subParamsStr} }`);
            }
            else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(`${key.replace('$', '')}: ${params[key]}`);
            }
            else if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                paramsStr.push(`${key}: ${params[key]}`);
            }
            else {
                paramsStr.push(`${key}: "${params[key]}"`);
            }
        });
        return paramsStr.join(' ');
    }
};
ApolloProvider.ctorParameters = () => [
    { type: HttpClient }
];
ApolloProvider.ɵprov = ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(ɵɵinject(HttpClient)); }, token: ApolloProvider, providedIn: "root" });
ApolloProvider = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient])
], ApolloProvider);

let RestProvider = class RestProvider {
    constructor(http) {
        this.http = http;
    }
    request$(providerConfig, requestId, options = {}) {
        const { params, httpOptions, urlParams = '', } = options;
        let { method } = options;
        let point;
        // default method
        if (!method) {
            method = providerConfig.defaultMethod || 'GET';
        }
        if (providerConfig.config && providerConfig.config[requestId]) {
            point = providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error(`No config found for requestId "${requestId}"`);
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        throw Error(`Rest method ${method} not supported`);
    }
};
RestProvider.ctorParameters = () => [
    { type: HttpClient }
];
RestProvider.ɵprov = ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(ɵɵinject(HttpClient)); }, token: RestProvider, providedIn: "root" });
RestProvider = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient])
], RestProvider);

let CommunicationService = class CommunicationService {
    constructor(config, apollo, rest) {
        this.config = config;
        this.apollo = apollo;
        this.rest = rest;
        try {
            this.communicationConfig = this.config.get('communication');
            this.defaultProvider = this.communicationConfig.defaultProvider;
        }
        catch (err) {
            throw Error('No communications.defaultProvider setted in config');
        }
    }
    request$(requestId, options = {}, provider) {
        const activeProvider = provider || this.defaultProvider;
        const activeProviderConfig = this.communicationConfig.providers[activeProvider];
        if (!activeProviderConfig) {
            throw Error(`There is no config for "${activeProvider}" provider`);
        }
        // provider.type control for retrocompatibility
        const activeProviderType = activeProviderConfig.type || activeProvider;
        if (!this[activeProviderType]) {
            throw Error(`There is no "${activeProviderType}" provider type`);
        }
        const { onError } = options;
        return this[activeProviderType].request$(activeProviderConfig, requestId, options)
            .pipe(catchError((error) => this.handleError(error, onError)));
    }
    handleError(error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    }
};
CommunicationService.ctorParameters = () => [
    { type: ConfigurationService },
    { type: ApolloProvider },
    { type: RestProvider }
];
CommunicationService.ɵprov = ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(ɵɵinject(ConfigurationService), ɵɵinject(ApolloProvider), ɵɵinject(RestProvider)); }, token: CommunicationService, providedIn: "root" });
CommunicationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        ApolloProvider,
        RestProvider])
], CommunicationService);

class AbstractLayout {
    constructor(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    onInit() {
        // on ready
        this.lb.ready$.subscribe(() => {
            this.lb.eventHandler.emitInner('init', this.initPayload());
        });
        const LayoutDS = this.config.layoutDS;
        const LayoutEH = this.config.layoutEH;
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new LayoutDS(),
            eventHandler: new LayoutEH(),
        });
    }
    onDestroy() {
        this.lb.eventHandler.emitInner('destroy');
    }
}

class MainLayoutDS extends LayoutDataSource {
    onInit({ configuration, mainState, router, options, titleService, route, }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.options = options;
        // update header
        if (this.configuration.get('header')) {
            this.one('header').update(this.configuration.get('header'));
        }
        if (this.configuration.get('footer')) {
            this.one('footer').update(this.configuration.get('footer'));
        }
        // main state updates
        this.mainState.get$('headTitle').subscribe((val) => this.titleService.setTitle(val));
        this.mainState.get$('pageTitle').subscribe((val) => { this.pageTitle = val; });
        this.mainState.get$('subnav').subscribe((val) => this.one('subnav').update(val));
        this.mainState.get$('breadcrumbs').subscribe((val) => this.one('breadcrumbs').update(val));
        // mainState test
        /* this.mainState.addCustom('customNav', new Subject());
        this.mainState.get$('pageTitle').subscribe(val => console.log('pageTitle', val));
        this.mainState.getCustom$('customNav').subscribe(val => console.log('customNav', val));
    
        this.mainState.update('pageTitle', 'hola');
        this.mainState.updateCustom('customNav', {'hello': 'mundo!'});
    
        setTimeout(() => {
          this.mainState.update('pageTitle', 'chao');
          this.mainState.updateCustom('customNav', {'hello': 'world!'});
          console.log('has', {
            'pageSubTitle' : this.mainState.has('pageSubTitle'),
            'customNav' : this.mainState.hasCustom('customNav'),
            'customNavs' : this.mainState.has('customNavs'),
          });
        }, 5000); */
    }
    // navigate emitter (click) handler
    onNavigate(payload) {
        // router navigation
        if (payload.handler === 'router') {
            const { path, queryParams } = payload;
            // path control
            if (!path)
                throw Error('onNavigate: no path for router navigate');
            if (queryParams) {
                this.router.navigate(path, {
                    relativeTo: this.route,
                    queryParams,
                    queryParamsHandling: 'merge',
                });
            }
            else {
                this.router.navigate(path);
            }
            // on change
            this._onRouterNavigate();
        }
    }
    // links routerLink change handler
    onRouterChanged() {
        hideAll();
    }
    _onRouterNavigate() {
        // hide tippy
        hideAll();
    }
}

class AwFacetInput {
    constructor(config) {
        this.isEmpty = false;
        this.update = () => { this.output = this.transform(); };
        this.getId = () => this.id;
        this.getData = () => this.data;
        this.getConfig = () => this.config;
        this.getFacetId = () => this.config.facetId;
        this.getInputIndex = () => this.config.inputIndex;
        this.getSectionIndex = () => this.config.sectionIndex;
        this.getContext = () => this.config.filterConfig.context || 'external';
        this.getTarget = () => this.config.filterConfig.target || null;
        this.getSearchIn = () => this.config.filterConfig.searchIn || null;
        this.getType = () => this.config.type;
        this.getOutput = () => this.output;
        this.setIsEmpty = (empty) => {
            this.isEmpty = empty;
        };
        this.setData = (newData) => { this.data = newData; };
        this.config = config;
        this._setId();
        AwFacetInput.index += 1;
    }
    clear() { return null; }
    _setId() {
        this.id = `facet-input-${this.getType()}-${AwFacetInput.index}`;
    }
}
AwFacetInput.index = 0;

class AwFacetInputCheckbox extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        return this.data.map(({ label, value }, index) => ({
            type: 'checkbox',
            id: `${this.getId()}-${index}`,
            label,
            payload: {
                facetId,
                source: 'input-checkbox',
                value: `${value}`,
            },
            _meta: { facetId, value: `${value}` },
        }));
    }
    setActive(facetValue) {
        const { isArray } = this.config.filterConfig;
        this.output.forEach((config) => {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        });
    }
}

const RESULTS_LIMIT = 2000;
class AwFacetInputLink extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        const results = [];
        let resultsCounter = 0;
        this.data.forEach(({ label, counter, hidden, value: rawValue, options: rawOptions }) => {
            if (hidden) {
                return;
            }
            resultsCounter += 1;
            if (resultsCounter > RESULTS_LIMIT) {
                return;
            }
            // normalize value
            const value = `${rawValue}`;
            const options = rawOptions || {};
            const classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (this._isActive(this.facetValue, value)) {
                classes.push('is-active');
            }
            if (value === '__loading__') {
                classes.push('loader-link');
            }
            results.push({
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                    facetId,
                    source: 'input-link',
                    value,
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value },
            });
        });
        // empty state control
        const itemEmpty = results.filter((item) => item.id === 'empty')[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                const { label } = this.getConfig().emptyState;
                const emptyId = 'empty-link';
                results.push({
                    type: 'link',
                    id: emptyId,
                    text: label,
                    classes: 'empty-text-link',
                    _meta: { facetId: emptyId, value: null },
                });
            }
        }
        else if (itemEmpty) {
            itemEmpty.classes = 'empty-text-link is-hidden';
        }
        return results;
    }
    setActive(facetValue) {
        this.output.forEach((config) => {
            const isActive = this._isActive(facetValue, config._meta.value);
            let classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter((className) => className !== 'is-active');
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        });
    }
    _isActive(facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
            || (facetValue === value));
    }
    clear() {
        this.facetValue = [];
    }
}

class AwFacetInputSelect extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data ? this.data.map(({ value, label }) => ({
                // normalize value
                value: `${value}`,
                label,
            })) : [],
            payload: {
                facetId,
                source: 'input-select',
            },
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.options
            .filter((option) => option.value === facetValue)
            .forEach((option) => { option.selected = true; });
    }
}

// eslint-disable-next-line import/no-extraneous-dependencies
const domParser = new DOMParser();
var helpers = {
    prettifySnakeCase(key, label) {
        if (typeof label === 'string') {
            return label;
        }
        return (key || '').split('_').map((word, index) => (index === 0 ? this.ucFirst(word) : word)).join(' ');
    },
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    slugify(str) {
        if (!str) {
            return '';
        }
        const parsedDoc = domParser.parseFromString(str, 'text/html');
        let parsedString = parsedDoc.body.textContent || '';
        // custom replacements
        parsedString = parsedString.replace(/\//g, '-');
        return slugify(parsedString, {
            remove: /[*+~.()'"!:@,]/g,
            lower: true
        });
    },
    browserIsIE() {
        return window.navigator.userAgent.match(/(MSIE|Trident)/);
    },
    escapeDoubleQuotes(str) {
        if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
            // match piece of string between double quotes
            return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
        }
        return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
    },
    unescapeDoubleQuotes(str) {
        return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
    }
};

class AwFacetInputText extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        const payload = {
            facetId,
            source: 'input-text',
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: Object.assign(Object.assign({}, payload), { trigger: 'input' }),
            enterPayload: Object.assign(Object.assign({}, payload), { trigger: 'enter' }),
            iconPayload: Object.assign(Object.assign({}, payload), { trigger: 'icon' }),
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.value = helpers.unescapeDoubleQuotes(facetValue) || null;
    }
}

/* eslint-disable max-classes-per-file */
const INPUTS_MAP = {
    checkbox: AwFacetInputCheckbox,
    text: AwFacetInputText,
    link: AwFacetInputLink,
    select: AwFacetInputSelect,
};
const FILTERS_MAP = {
    '=': '_filterDataEquals',
    '>': '_filterDataGreaterThan',
    '<': '_filterDataLessThan',
    '>=': '_filterDataGreaterOrEquals',
    '<=': '_filterDataLessOrEquals',
    '<>': '_filterDataNotEqual',
    LIKE: '_filterDataLike',
};
class AwSearchModel {
    constructor(id, config) {
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = () => this._id;
        this.getFilters = () => this._filters;
        this.getFacets = () => this._facets;
        this.getInputs = () => this._inputs;
        this.getConfig = () => this._config;
        this.getTotalCount = () => this._totalCount;
        this.getFields = () => this._config.fields;
        this.getResults$ = () => this._results$;
        this.setResults = (results) => this._results$.next(results);
        this._id = id;
        this._config = config;
        this._setFilters();
        this._setFacets();
        this._setPage();
        this._setInputs();
        this._setInputsData();
        this._setTotalCount();
        // query params control
        /* eslint-disable @typescript-eslint/no-use-before-define */
        if (AwSearchModel.queryParams) {
            this.updateFiltersFromQueryParams(AwSearchModel.queryParams);
            AwSearchModel.queryParams = null;
        }
    }
    updateFilter(facetId, value, remove) {
        const selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((filter) => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((item) => item !== value);
            }
            else if (Array.isArray(filter.value)
                && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? helpers.escapeDoubleQuotes(value) : null;
            }
        });
    }
    clear() {
        this.updateFiltersFromQueryParams({}, true);
        this._clearInputs();
    }
    updateFiltersFromQueryParams(queryParams, clearAll = false) {
        this._facets.forEach(({ id }) => {
            const selectedFilters = this.getFiltersByFacetId(id);
            const value = queryParams[id];
            const isInternal = this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal && !clearAll) {
                return;
            }
            selectedFilters.forEach((filter) => {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value || null;
                }
            });
        });
    }
    updateInputsFromFilters() {
        this._filters.forEach(({ facetId, value }) => {
            this.getInputByFacetId(facetId).setActive(value);
        });
    }
    updateFacets(facets) {
        facets.forEach(({ id, data }) => this.updateFacet(id, data));
        this._setInputsData();
    }
    updateTotalCount(totalCount) {
        this._totalCount = totalCount;
    }
    updateFacet(facetId, data) {
        const selectedFacets = this._facets.filter((facet) => facet.id === facetId);
        if (!selectedFacets.length) {
            throw Error(`Facet with id '${facetId}' does not exists`);
        }
        selectedFacets.forEach((facet) => { facet.data = data; });
    }
    reset() {
        this._filters.forEach((filter) => { filter.value = null; });
    }
    getRequestParams() {
        return {
            facets: this._getRequestFacets(),
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((filter) => filter.context !== 'internal')
                .map(({ facetId, value, searchIn, pagination }) => (pagination ? {
                facetId, value, searchIn, pagination
            } : {
                facetId, value, searchIn
            })),
        };
    }
    getInternalFilters() {
        return this._filters
            .filter((filter) => (filter.context === 'internal'
            && !isEmpty(filter.value)))
            .map(({ facetId, value, searchIn }) => ({
            facetId, value, searchIn
        }));
    }
    filtersAsQueryParams(filters) {
        const queryParams = {};
        filters.forEach((filter) => {
            queryParams[filter.facetId] = Array.isArray(filter.value)
                ? filter.value.join(',')
                : filter.value;
        });
        return queryParams;
    }
    getFiltersByFacetId(facetId) {
        return this._filters.filter((filter) => filter.facetId === facetId);
    }
    getInputByFacetId(facetId) {
        return this._inputs.filter((input) => input.getFacetId() === facetId)[0];
    }
    setInputData(facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    }
    filterTarget(target) {
        const inputs = this._inputs.filter((input) => input.getTarget() === target);
        const targetInput = this.getInputByFacetId(target);
        const facet = this._facets.filter((f) => f.id === target)[0];
        const facetData = facet.data;
        const searchIns = [];
        inputs.forEach((input) => {
            const filter = this.getFiltersByFacetId(input.getFacetId())[0];
            const searchIn = input.getSearchIn();
            const { value } = filter;
            searchIns.push([searchIn, value]);
        });
        // filter
        facetData.forEach((item) => this._filterData(searchIns, item));
        // update
        targetInput.setData(facetData);
        if (targetInput.getConfig().emptyState) {
            const isEmpty = !facetData.filter((data) => !data.hidden).length;
            targetInput.setIsEmpty(isEmpty);
        }
        targetInput.update();
    }
    setSearchConfigOrderBy(orderBy) {
        this._config.results.order.key = orderBy;
    }
    setSearchConfigDirection(direction) {
        this._config.results.order.direction = direction;
    }
    setSearchConfigType(type) {
        this._config.results.order.type = type;
    }
    setPageConfigOffset(offset) {
        this._config.page.offset = offset;
    }
    setPageConfigLimit(limit) {
        this._config.page.limit = limit;
    }
    _clearInputs() {
        // do nothing
    }
    _filterData(searchIns, item) {
        // reset
        item.hidden = false;
        searchIns.forEach(([searchIn, value]) => {
            searchIn.forEach(({ key, operator }) => {
                if (item.hidden) {
                    return;
                }
                let refValue = get(item, key, null);
                if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                    const searchDataKey = key.replace('searchData.', '');
                    item.searchData.forEach(({ key: dataKey, value: dataValue }) => {
                        if (dataKey === searchDataKey) {
                            refValue = dataValue;
                        }
                    });
                }
                if (refValue === null) {
                    item.hidden = true;
                }
                else if (FILTERS_MAP[operator]) {
                    item.hidden = this[FILTERS_MAP[operator]](value, refValue);
                }
                else {
                    console.warn(`SearchIn: operator ${operator} not supported`);
                }
            });
        });
    }
    _filterDataEquals(value, refValue) {
        if (Array.isArray(refValue)) {
            if (Array.isArray(value)) {
                let inArray = value.length === 0;
                refValue.forEach((rv) => {
                    if (value.indexOf(rv) !== -1) {
                        inArray = true;
                    }
                });
                return !(inArray);
            }
            return !(value && refValue.indexOf(value) !== -1);
        }
        if (Array.isArray(value)) {
            return !(!value.length || value.indexOf(refValue) !== -1);
        }
        return !(value && value === refValue);
    }
    _filterDataGreaterThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value > refValue);
        }
        return false;
    }
    _filterDataLessThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value < refValue);
        }
        return false;
    }
    _filterDataGreaterOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value >= refValue);
        }
        return false;
    }
    _filterDataLessOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value <= refValue);
        }
        return false;
    }
    _filterDataNotEqual(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value !== refValue);
        }
        return false;
    }
    _filterDataLike(value, refValue) {
        if (value
            && typeof value === 'string'
            && typeof refValue === 'string') {
            const haystack = refValue.toLowerCase();
            const needle = value.toLocaleLowerCase();
            return !(haystack.indexOf(needle) !== -1);
        }
        return false;
    }
    _setFilters() {
        this._config.fields.forEach((field) => {
            field.inputs.forEach((input) => this._filters.push(Object.assign(Object.assign({}, input.filterConfig), { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null })));
        });
    }
    _setFacets() {
        this._facets = this._config.facets;
    }
    _setPage() {
        this._page = this._config.page;
    }
    _setTotalCount() {
        this._totalCount = this._config.totalCount;
    }
    _setInputs() {
        this._config.fields.forEach((sectionConfig, sectionIndex) => {
            sectionConfig.inputs.forEach((inputConfig, inputIndex) => {
                const InputModel = INPUTS_MAP[inputConfig.type];
                if (!InputModel) {
                    throw Error(`Input type ${inputConfig.type} not supported`);
                }
                this._inputs.push(new InputModel(Object.assign(Object.assign({}, inputConfig), { inputIndex, sectionIndex })));
            });
        });
    }
    _setInputsData() {
        this._facets.forEach((facet) => this.setInputData(facet.id, facet.data));
    }
    _getRequestFacets() {
        const results = [];
        this._facets.forEach((f) => {
            const facetConfig = Object.assign({}, f);
            if (!f.hasStaticData) {
                delete facetConfig.data;
            }
            delete facetConfig.hasStaticData;
            // searchData control
            if (Array.isArray(facetConfig.data)) {
                facetConfig.data
                    .filter((dataItem) => typeof dataItem.searchData !== 'undefined')
                    .forEach((dataItem) => {
                    delete dataItem.searchData;
                });
            }
            results.push(facetConfig);
        });
        return results;
    }
}
AwSearchModel.queryParams = null;

class MainLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'main-layout.init':
                    this.dataSource.onInit(payload);
                    this.mainState = payload.mainState;
                    this.route = payload.route;
                    this.router = payload.router;
                    this._listenRouterChanges();
                    this._listenMainStateChanges();
                    break;
                case 'main-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe(({ type, payload }) => {
            switch (type) {
                case 'global.navigate':
                    this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        });
    }
    _listenRouterChanges() {
        this.route.queryParams.pipe(filter((params) => {
            if (Object.keys(params).length)
                return true;
            return false;
        })).subscribe((params) => {
            this.emitGlobal('queryparams', params);
            // to use in searchs
            AwSearchModel.queryParams = params;
        });
        // router changed
        this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
            window.scrollTo(0, 0);
            this.emitOuter('routerchange');
            this.dataSource.onRouterChanged();
        });
    }
    _listenMainStateChanges() {
        this.mainState.addCustom('currentNav', new Subject());
        this.mainState.getCustom$('currentNav').subscribe((val) => {
            this.emitOuter('currentnavchange', val);
        });
    }
}

const MOBILE_CLASS = 'is-mobile-nav-displayed';
const ACTIVE_CLASS = 'is-active';
class HeaderDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return Object.assign(Object.assign({}, data), { menuToggle: {
                open: {
                    payload: 'mobile-open'
                },
                close: {
                    payload: 'mobile-close'
                }
            } });
    }
    onCurrentNavChange(payload) {
        this.output.nav.items.forEach((item) => {
            item.classes = item._meta.id === payload ? ACTIVE_CLASS : '';
        });
    }
    onRouterChange() {
        let { classes } = this.output;
        classes = classes || '';
        classes = classes.split(' ');
        if (classes.includes(MOBILE_CLASS)) {
            classes.splice(classes.indexOf(MOBILE_CLASS), 1);
            this.output.classes = classes.join(' ');
        }
    }
    onClick(payload) {
        // mobile control
        if (['mobile-open', 'mobile-close'].includes(payload)) {
            let { classes } = this.output;
            classes = classes || '';
            classes = classes.split(' ');
            if (classes.includes(MOBILE_CLASS)) {
                classes.splice(classes.indexOf(MOBILE_CLASS), 1);
            }
            else {
                classes.push(MOBILE_CLASS);
            }
            this.output.classes = classes.join(' ');
        }
    }
}

class SubnavDS extends DataSource {
    transform(data) {
        return {
            classes: 'main-subnav',
            items: data,
        };
    }
    setActive(id) {
        this.output.items.forEach((item) => {
            if (item._meta.id === id) {
                item.classes = 'is-current';
                item._meta.isActive = true;
            }
            else {
                item.classes = '';
                item._meta.isActive = false;
            }
        });
    }
    getActive() {
        return this.output.items.filter((item) => item._meta.isActive)[0] || null;
    }
}

class BreadcrumbsDS extends DataSource {
    transform(data) {
        return data;
    }
}

class FacetsDS extends DataSource {
    transform({ fields }) {
        const { searchModel } = this.options;
        this.searchModel = searchModel;
        return fields;
    }
}

class FooterDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return data;
    }
}

class SmartPaginationDS extends DataSource {
    constructor() {
        super(...arguments);
        this.paginationBuilder = (tp, cp, pl, m, href, qp) => {
            const result = [];
            /*
              tp - total pages
              cp - current page
              pl - page limit
              m - pagination mode (href or payloads)
              href - href for anchor wrapper
              qp - query params for pagination
            */
            let limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                let lp; // last page
                let fp; // first page
                if (cp > Math.floor(limit / 2)) {
                    if (tp === 2) {
                        lp = tp;
                        fp = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (cp < (tp - Math.floor(limit / 2))) {
                        lp = cp / 1 + Math.floor(limit / 2);
                        fp = cp / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lp = tp;
                        fp = cp - limit + (tp - cp);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lp = limit + 1;
                    fp = 1;
                }
                for (let i = fp; i <= lp; i += 1) {
                    result.push({
                        text: String(i),
                        classes: cp === i ? 'is-active' : '',
                        anchor: cp !== i ? this._getPaginationAnchor(i, m, href, qp) : null,
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    classes: cp === 1 ? 'is-active' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(1, m, href, qp) : null,
                });
                for (let i = 1; i < tp; i += 1) {
                    result.push({
                        text: String(i + 1),
                        classes: cp === i + 1 ? 'is-active' : '',
                        anchor: cp !== i + 1 ? this._getPaginationAnchor(i + 1, m, href, qp) : null,
                    });
                }
            }
            return {
                links: result,
                first: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(1, m, href, qp) : null,
                },
                prev: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null,
                },
                next: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null,
                },
                last: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? this._getPaginationAnchor(tp, m, href, qp) : null,
                },
            };
        };
    }
    transform(data) {
        const { totalPages, currentPage, pageLimit, sizes, } = data;
        const { mode, href, queryParams } = this.options;
        // ===== WARNINGS =====
        if (!['href', 'payload'].includes(mode)) {
            console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
        }
        const { links, first, prev, next, last, } = this.paginationBuilder(totalPages, +currentPage, pageLimit, mode, href, queryParams);
        return {
            first,
            prev,
            next,
            last,
            links,
            select: sizes ? {
                label: 'Numero di risultati',
                options: sizes.list.map((s) => ({
                    text: s,
                    selected: s === sizes.active,
                })),
                payload: 'select-size',
            } : null,
        };
    }
    _getPaginationAnchor(page, mode, href, queryParams) {
        switch (mode) {
            case 'payload':
                return {
                    payload: { source: 'pagination', page },
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? Object.assign(Object.assign({}, queryParams), { page }) : null,
                };
            default:
                break;
        }
        return {};
    }
}

var DS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HeaderDS: HeaderDS,
    SubnavDS: SubnavDS,
    BreadcrumbsDS: BreadcrumbsDS,
    FacetsDS: FacetsDS,
    FooterDS: FooterDS,
    SmartPaginationDS: SmartPaginationDS
});

class HeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'header.click':
                    this.dataSource.onClick(payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'main-layout.currentnavchange':
                    this.dataSource.onCurrentNavChange(payload);
                    break;
                case 'main-layout.routerchange':
                    this.dataSource.onRouterChange();
                    break;
                default:
                    break;
            }
        });
    }
}

class SubnavEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'subnav.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class BreadcrumbsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'breadcrumbs.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class FooterEH extends EventHandler {
    listen() {
        // no events
    }
}

class SmartPaginationEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.change':
                    this.emitOuter('change', payload);
                    break;
                case 'n7-smart-pagination.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
}

var EH = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HeaderEH: HeaderEH,
    SubnavEH: SubnavEH,
    BreadcrumbsEH: BreadcrumbsEH,
    FooterEH: FooterEH,
    SmartPaginationEH: SmartPaginationEH
});

const MainLayoutConfig = {
    layoutId: 'main-layout',
    widgets: [{
            id: 'header',
        }, {
            id: 'subnav',
        }, {
            id: 'breadcrumbs',
        }, {
            id: 'footer',
        }],
    layoutDS: MainLayoutDS,
    layoutEH: MainLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};

let MainLayoutComponent = class MainLayoutComponent extends AbstractLayout {
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService) {
        super(layoutsConfiguration.get('MainLayoutConfig') || MainLayoutConfig);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MainLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title }
];
MainLayoutComponent = __decorate([
    Component({
        selector: 'main-layout',
        template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer\n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        Title])
], MainLayoutComponent);

class Page404LayoutDS extends LayoutDataSource {
    onInit({ options }) {
        this.options = options;
    }
}

class Page404LayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-page404-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'n7-page404-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // listen to global events
        /* EventHandler.globalEvents$.pipe(
          takeUntil(this.destroyed$)
        ).subscribe(({type, payload}) => {
          switch(type){
            case 'global.navigate':
              this.dataSource.onNavigate(payload);
              break;
    
            default:
              break;
          }
        }); */
    }
}

const Page404LayoutConfig = {
    layoutId: 'n7-page404-layout',
    widgets: [],
    layoutDS: Page404LayoutDS,
    layoutEH: Page404LayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};

let Page404LayoutComponent = class Page404LayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || Page404LayoutConfig);
    }
    initPayload() {
        return {
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
Page404LayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService }
];
Page404LayoutComponent = __decorate([
    Component({
        selector: 'n7-page404-layout',
        template: "<div class=\"n7-page404-layout\">\n    404 - Resource not found\n</div>"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService])
], Page404LayoutComponent);

let SmartPaginationComponent = class SmartPaginationComponent {
    constructor() {
        this.handlePaginationEvent.bind(this);
    }
    handlePaginationEvent(type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartPaginationComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartPaginationComponent.prototype, "emit", void 0);
SmartPaginationComponent = __decorate([
    Component({
        selector: 'n7-smart-pagination',
        template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SmartPaginationComponent);

var N7BoilerplateCommonModule_1;
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    SmartPaginationComponent,
];
let N7BoilerplateCommonModule = N7BoilerplateCommonModule_1 = class N7BoilerplateCommonModule {
    static forRoot(config) {
        return {
            ngModule: N7BoilerplateCommonModule_1,
            providers: [
                MainStateService,
                ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                { provide: 'config', useValue: config },
            ],
        };
    }
};
N7BoilerplateCommonModule = N7BoilerplateCommonModule_1 = __decorate([
    NgModule({
        declarations: COMPONENTS,
        imports: [
            CommonModule,
            HttpClientModule,
            DvComponentsLibModule,
        ],
        providers: [],
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], N7BoilerplateCommonModule);

const metadataIsEmpty = (value) => (!value || value === 'null');
const ɵ0 = metadataIsEmpty;
const isLink = (fields) => !!fields.filter(({ key }) => key === 'isLink').length;
const ɵ1 = isLink;
const isRepeater = (fields) => Array.isArray(fields);
const ɵ2 = isRepeater;
const getLink = (fields, paths) => {
    const schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    const label = fields.find(({ key }) => key === 'label').value;
    const slug = helpers.slugify(label);
    const id = fields.find(({ key }) => key === 'id').value;
    const type = fields.find(({ key }) => key === 'type').value;
    let basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return `<a href="${basePath}${id}/${slug}">${label}</a>`;
};
const ɵ3 = getLink;
const getRepeater = (fields, labels, metadataToShow, type) => {
    const html = [];
    fields
        .filter(({ key, value }) => metadataToShow.includes(key) && !metadataIsEmpty(value))
        .map(({ key, value }) => ({
        key,
        value,
        order: metadataToShow.indexOf(key),
        label: helpers.prettifySnakeCase(key, labels[`${type}.${key}`])
    }))
        .sort((a, b) => a.order - b.order)
        .forEach(({ label, value }) => {
        html.push(`<dt>${label}</dt>`);
        html.push(`<dd>${value}</dd>`);
    });
    return html.length
        ? `<dl>${html.join('')}</dl>`
        : null;
};
const ɵ4 = getRepeater;
var metadataHelper = {
    normalize: ({ fields: data, paths, labels, metadataToShow, type }) => {
        const result = [];
        if (Array.isArray(data)) {
            data.forEach(({ key, value, label, fields }) => {
                // link & repeater control
                if (fields && Array.isArray(fields)) {
                    if (isLink(fields)) {
                        result.push({ key: label, value: getLink(fields, paths) });
                    }
                    else if (isRepeater(fields)) {
                        result.push({ key: label, value: getRepeater(fields, labels, metadataToShow, type) });
                    }
                    // default
                }
                else {
                    result.push({ key, value });
                }
            });
        }
        return result
            .filter(({ key, value }) => metadataToShow.includes(key) && !metadataIsEmpty(value))
            .map(({ key, value }) => ({
            key,
            value,
            order: metadataToShow.indexOf(key),
            label: helpers.prettifySnakeCase(key, labels[`${type}.${key}`]),
        }))
            .sort((a, b) => a.order - b.order);
    }
};

class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.hasMetadataFields = false;
        this.navHeader = {}; // nav-header (custom) data
        this.pageSize = 10; // linked objects page size
        // ===== BUBBLE CHART =====
        this.bubblesSize = 10; // related entities (bubbles) page size
        this.fallbackText = '';
        this.loading = true;
        this.updateComponent = (id, data, options) => {
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        };
        this.drawPagination = () => {
            if (!this.myResponse.relatedItems)
                return;
            const { href, queryParams } = this._getPaginationParams();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(this.myResponse.relatedItems.length / this.pageSize),
                currentPage: this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: this.pageSize,
                },
            });
        };
        this.handlePageNavigation = () => {
            /*
              Updates selected tab on tab change
            */
            if (!this.myResponse) {
                return;
            }
            const { href, queryParams } = this._getPaginationParams();
            this.drawPagination();
            this.one('aw-linked-objects').updateOptions({
                paginationParams: { href, queryParams },
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
        };
        this.handleNavUpdate = (tab) => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            if (tab === 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    paginationParams: this._getPaginationParams(),
                    size: this.pageSize,
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            else if (tab === 'overview' && this.myResponse.relatedItems) {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita',
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
        };
    }
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page;
        this.one('aw-related-entities').updateOptions({
            config: this.configuration,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // one tab control
        this.oneTabControl();
    }
    oneTabControl() {
        const navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter((output) => !!output))
            .subscribe(({ items }) => {
            if (items.length === 1) {
                this.router.navigate([items[0].anchor.href], { replaceUrl: true });
            }
        });
    }
    updateWidgets(data) {
        /*
          Updates the widgets on this layout, based on route
        */
        const selected = this.selectedTab;
        Object.keys(data).forEach((k) => {
            if (Array.isArray(data[k]) && data[k].length === 0) {
                data[k] = null;
            }
        });
        this.one('aw-entita-nav').update({
            data,
            selected,
            basePath: this.getNavBasePath(),
        });
        this.updateComponent('aw-entita-metadata-viewer', this.getFields(this.myResponse));
        this.one('aw-related-entities').update(this.myResponse.relatedEntities);
        this.drawPagination();
    }
    loadItem(id, slug, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        this.loading = true;
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (error) => console.error(error),
                params: { entityId: id, entitiesListSize: this.bubblesSize },
            }).pipe(
            // global metadata tab control
            tap(({ fields, typeOfEntity }) => {
                this.hasMetadataFields = !!metadataHelper.normalize({
                    fields,
                    paths: this.configuration.get('paths'),
                    labels: this.configuration.get('labels'),
                    metadataToShow: get(this.configuration.get('entita-layout'), 'metadata-to-show', []),
                    type: typeOfEntity
                }).length;
            }));
        }
        this.pageTitle = 'Entità Test';
        return of(null);
    }
    loadContent(res) {
        this.loading = false;
        const config = this.configuration.get('config-keys')[res.typeOfEntity];
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        this.navHeader = {
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
        if (this.selectedTab === 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                paginationParams: this._getPaginationParams(),
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita',
            });
        }
        res.relatedItems.forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        res.relatedEntities.forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        this.one('aw-related-entities').update(res.relatedEntities);
        this.drawPagination();
        // fallback text
        if (!this.hasMetadataFields) {
            this.fallbackText = this.configuration.get('entita-layout').fallback;
        }
        // update head title
        this.mainState.update('headTitle', `Arianna4View - Entità - ${this.myResponse.label}`);
    }
    _getPaginationParams() {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                `${this.currentId}/`,
                this.currentSlug,
                '/oggetti-collegati/',
            ].join(''),
            queryParams: {
                page: this.currentPage,
            },
        };
    }
    getNavBasePath() {
        return [
            this.configuration.get('paths').entitaBasePath,
            `${this.currentId}/`,
            this.currentSlug,
        ].join('');
    }
    getFields(response) {
        const { fields, typeOfEntity } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        let metadataToShow = get(this.configuration.get('entita-layout'), 'metadata-to-show', []);
        if (this.selectedTab === 'overview') {
            metadataToShow = get(this.configuration.get('entita-layout'), 'overview.informazioni', []);
        }
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: typeOfEntity
        });
    }
}

class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handlePageSizeChange = (v) => {
            this.dataSource.pageSize = v;
            this.dataSource.handleNavUpdate('oggetti-collegati');
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-entita-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    this.entityId = this.route.snapshot.params.id || '';
                    this.dataSource.currentPage = this.route.snapshot.params.page || 1;
                    this.listenRoute(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-entita-nav.click':
                    if (payload) {
                        this.dataSource.selectedTab = payload;
                        this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.change':
                    { // changed page size value (pagination)
                        this.dataSource.pageSize = payload;
                        this.dataSource.currentPage = 1; // reset page
                        const options = {
                            context: this.dataSource.selectedTab,
                            config: this.dataSource.configuration,
                            page: this.dataSource.currentPage,
                            pagination: true,
                            size: this.dataSource.pageSize,
                        };
                        this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'n7-smart-pagination.change':
                    this.handlePageSizeChange(payload.value);
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * Listens to routing events of this layout.
     */
    listenRoute(selectedItem = '', forceReload = false) {
        // listen for "page" query param changes
        this.route.queryParams.pipe(map((params) => params.page)).subscribe((page) => {
            if (this.dataSource.currentPage !== page) {
                this.dataSource.currentPage = page;
                this.dataSource.handlePageNavigation();
            }
        });
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((params) => {
            // look for id
            if (params.get('id')) {
                if (this.dataSource.currentId === params.get('id') && !forceReload) {
                    if (this.dataSource.selectedTab !== params.get('tab')) {
                        this.dataSource.handleNavUpdate(params.get('tab'));
                    }
                    return;
                }
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
                    .subscribe((res) => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        // remove the entity of this page
                        this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            this.emitOuter('selectItem', selectedItem);
                        }
                    }
                });
            }
            else {
                this.dataSource.loadItem();
            }
        });
    }
}

class AwLinkedObjectsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.loadingData = false;
        this.checkForMore = (force) => {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (this.loadedData.result.length >= this.totalObjects) {
                this.loadedData.actions[1].disabled = true;
            }
            else {
                this.loadedData.actions[1].disabled = false;
            }
        };
        this.handleIncomingData = (incomingData) => {
            /*
              Called by infinite scroller, adds the incoming
              data to the linked objects component.
            */
            this.currentPage += 1;
            const newData = this.unpackData(incomingData.itemsPagination);
            this.loadedData.result = this.loadedData.result.concat(newData.result);
            this.checkForMore();
            this.loadedData.isLoading = false;
        };
        this.unpackData = (data) => {
            /*
              Dynamically returns the data object for each HTML component
              data: {
                previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                pagination: { first, last, links, next, prev, select }
              }
            */
            const { config } = this.options; // app-config.json
            const paths = config.get('item-preview'); // item preview dynamic paths
            const { totalCount } = data; // total amount of items available on backend
            const page = this.currentPage; // current page (if using pagination)
            const { context } = this; // parent layout name
            const size = this.pageSize; // items per page (if using pagination)
            const labels = config.get('labels');
            const { dynamicPagination } = this.options;
            const keys = config ? config.get('config-keys') : {};
            let lengthLimit;
            let resultsLimit;
            let d = data.items ? data.items : data.relatedItems; // items to iterate over
            if (config) {
                // dynamic search for max-item-length
                if (config.get(`${context}-layout`)) {
                    lengthLimit = config.get(`${context}-layout`)['max-item-length'];
                    resultsLimit = config.get(`${context}-layout`)['results-limit'];
                }
            }
            // resize data
            if (!dynamicPagination && size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            const result = [];
            const enabledKeys = paths.metadata.info.selection.map((info) => info.key);
            d.forEach((el) => {
                const itemData = el.item ? el.item : el;
                const infoData = get(el, paths.metadata.info.data, itemData.fields);
                const toeData = get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                const breadcrumbs = get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                let infoDataItems = infoData
                    ? infoData.filter((info) => enabledKeys.indexOf(info.key) !== -1)
                    : [];
                // order metadata
                infoDataItems = infoDataItems.map((info) => (Object.assign(Object.assign({}, info), { order: enabledKeys.indexOf(info.key) })));
                infoDataItems.sort((a, b) => a.order - b.order);
                if (['entita', 'search', 'gallery'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? ` is-${config.get('config-keys')[itemData.typeOfEntity]['class-name']}` : ' is-oggetto-culturale';
                // gallery classes
                if (context === 'gallery') {
                    classes += ' is-vertical has-image';
                }
                // consider the lenght of <em> tags to exclude from count
                const highlights = get(el, paths.title, itemData.label).match(/<em>/g) ? get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                const itemTitle = +paths.title.maxLength
                    && get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? `${get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights)}…`
                    : get(el, paths.title, itemData.label);
                const itemId = get(el, paths.payload, itemData.id);
                const itemType = itemData.typeOfEntity;
                const itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle),
                ].join('/');
                let text;
                if (!paths.text) {
                    text = null;
                }
                else if (+paths.text.maxLength
                    && get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                    text = `${get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength)}…`;
                }
                else {
                    text = get(el, paths.text.data, itemData.text);
                }
                const item = {
                    text,
                    classes,
                    breadcrumbs,
                    image: get(el, paths.image, itemData.image),
                    title: itemTitle,
                    anchor: {
                        href: itemHref,
                        target: ['gallery', 'search'].includes(context) ? '_blank' : '_self'
                    },
                    relation: { key: el.relationName, value: el.relation },
                    metadata: infoDataItems.length || toeData ? [] : null,
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'aw-item-preview_metadata',
                        items: infoDataItems.map((infoDItem) => ({
                            label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                            value: infoDItem.value,
                        })),
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'aw-item-preview-entities',
                        items: toeData.map((toe) => ({
                            value: get(toe, paths.metadata.toe.value, toe.count),
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[get(toe, paths.metadata.toe.icon, toe.type)]
                                ? keys[get(toe, paths.metadata.toe.icon, toe.type)].icon
                                : '',
                            classes: `color-${keys[get(toe, paths.metadata.toe.icon, toe.type)]['class-name']}`,
                        })),
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item.breadcrumbs = {
                        items: get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map((crumb) => {
                            const label = get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                            return {
                                label,
                                anchor: {
                                    href: itemHref,
                                },
                            };
                        }),
                    };
                }
                result.push(item);
            });
            if (context === 'home') {
                const actions = [
                    {
                        label: `Mostra Tutti (${totalCount})`,
                    },
                    lengthLimit
                        ? {
                            label: `Mostra Altri (${resultsLimit})`,
                            disabled: false,
                        } : null,
                ];
                return {
                    result,
                    actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback'],
                };
            }
            return { previews: result };
        };
    }
    transform(data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? +this.options.page : 1;
        if (this.options.dynamicPagination && this.options.dynamicPagination.total) {
            this.totalPages = Math.ceil(this.options.dynamicPagination.total / this.pageSize);
        }
        else if (data.items) {
            this.totalPages = Math.ceil(data.items.length / this.pageSize);
        }
        else if (data.relatedItems) {
            this.totalPages = Math.ceil(data.relatedItems.length / this.pageSize);
        }
        this.context = this.options.context;
        this.loadedData = this.unpackData(data);
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    }
}

class AwAutocompleteWrapperDS extends DataSource$1 {
    constructor() {
        super(...arguments);
        this.stringTrim = (string, limit) => {
            /*
              Slices the string and adds trailing ellipsis
              TODO: Do not cut the string in the middle of an HTML tag!
            */
            if (string.length > limit) {
                return `${string.slice(0, limit)}…`;
            }
            return string;
        };
    }
    transform(data) {
        const { response } = data;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        const suggestion = [];
        const { config } = this.options;
        const maxLength = (config.get('home-layout')['max-item-length'] || 20);
        const fResults = response.results.filter((el) => typeof el.entity === 'object');
        // eslint-disable-next-line consistent-return
        fResults.forEach((el) => {
            if (el.entity.id === 'fallback') { // build and return fallback data
                suggestion.push({
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion };
            }
            const text = this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text,
                anchor: {
                    payload: el.entity.id,
                },
            });
        });
        return { suggestion };
    }
}

class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.chartData = []; // data rendered into the graph
        this.draw = null; // exposed component draw function to update the view
        this.selected = []; // list of selected bubbles
        this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        this.closedEyes = []; // array of the activated eye filters
        this.tippyList = []; // list of tippy instances
        this.updateChart = (res) => {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            let response = res;
            if (res === null) {
                response = this.chartData;
            }
            else {
                this.chartData = res;
            }
            if (this.filters.length > 0) { // apply filters to the response
                response = this.chartData.filter((el) => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')));
            }
            if (!this.draw) {
                this.update(this.smartSlice(response)); // component self-update
            }
            else {
                this.output.selected = this.selected;
                this.output.data = this.smartSlice(response);
                this.output.smallView.data = this.smartSlice(response, this.options.smallChartSize);
                this.draw();
            }
        };
        this.smartSlice = (d, length) => {
            const l = length || this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            return d;
        };
        this.handleBubbleClick = (payload) => {
            /*
              Toggles the selection of the clicked bubble.
            */
            const id = payload;
            if (this.selected.includes(id)) {
                this.selected.splice(this.selected.indexOf(id), 1); // remove selection
            }
            else {
                this.selected.push(id); // add selection
            }
        };
    }
    transform(data) {
        const { config, smallChartSize } = this.options;
        const { fontRendering, transition, shuffle } = config.get('bubble-chart');
        const domain = [];
        const range = [];
        const colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((k) => {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        });
        const commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (draw) => { this.draw = draw; },
            colorMatch: { domain, range },
            selected: this.selected,
            sizeRange: [0.5, 500],
            fontRendering,
            height: 500,
            width: 500,
            transition,
            shuffle,
        };
        /*
        Two data streams are ouputted.
        The default stream is for the normal visualization,
        "smallView" is used for a compressed view of the same data.
        */
        return Object.assign(Object.assign({}, commonParams), { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: Object.assign(Object.assign({}, commonParams), { data: this.smartSlice(data, smallChartSize) }) });
    }
}

class AwChartTippyDS extends DataSource {
    transform(data) {
        // ====== DATA ======
        const { bubbles, selected } = data;
        const { basePath, selectable } = this.options;
        // ==================
        const templates = bubbles.map((b) => {
            const { count, entity } = b;
            const { id, label, relation, relationName } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} oggetti culturali`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`,
                },
                relation: {
                    key: relationName,
                    value: relation,
                }
            };
        });
        return templates;
    }
}

class AwHeroDS extends DataSource {
    constructor() {
        super(...arguments);
        this.currentInputValue = '';
    }
    transform(data) {
        const { title, text, button, backgroundImage, input, } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                anchor: {
                    payload: 'cerca',
                },
            },
            input: {
                placeholder: input.placeholder,
                payload: 'cerca-in-maxxi',
            },
        };
    }
}

class AwTableDS extends DataSource {
    transform() {
        return TABLE_MOCK;
    }
}

class AwHomeHeroPatrimonioDS extends DataSource {
    transform(data) {
        return data;
    }
}

class AwHomeFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.autoComplete = {}; // autocomplete data for each facet
        this.lockedFacets = {}; // locked means that the eye cannot be closed
        // store the last response so the component can be rendered again with the same data
        this.lastData = {};
        this.closedEyes = []; // list of closed eyes
        this.openTippy = ''; // tipe of entity of the currently open tippy
        this.tippyMaker = (id) => {
            /*
              Builds or updates Tippy for the input in use (id)
            */
            const newId = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[newId]) {
                this.autoComplete[newId] = {
                    tippy: undefined,
                    open: true,
                };
                const ac = this.autoComplete[newId];
                const getContent = () => {
                    const contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                };
                if (!ac.tippy) {
                    // target the correct this.autoComplete[id] input class
                    const target = document.getElementsByClassName(newId)[1];
                    ac.tippy = tippy(target, {
                        content: getContent(),
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                    }); // attach tippy to input type text
                }
            }
            const ac = this.autoComplete[newId];
            if (ac.tippy) {
                ac.tippy.show();
            }
        };
        this.tippyClose = (id) => {
            const newId = id.replace(/ /g, '-');
            if (this.autoComplete[newId]) {
                const ac = this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        };
    }
    transform(data) {
        this.lastData = data;
        const headers = [];
        const inputs = [];
        const facetData = data;
        const { lockedFacets } = this; // locked means that the eye cannot be closed
        const { closedEyes } = this; // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((id) => {
            if (this.autoComplete[id] && this.autoComplete[id].tippy) {
                this.autoComplete[id].tippy.destroy(); // destroy
            }
        });
        this.autoComplete = {}; // reset data
        facetData.forEach((facet, j) => {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             ---//---
             # LOGIC:
             Each facet can be "locked" or "enabled".
             if a facet is locked, it means that it cannot be enabled or disabled.
             if a facet is enabled or disabled it means that the filter is active or inactive.
      
             there are 2 ways that a facet can be "locked"
               1. When a bubble of the same type is selected in the chart
               2. When that facet is the only enabled facet
      
             The first case is managed by pushing the selected bubble's ID to the corresponding array
             of lockedFacets.
             The second case is managed by pushing a "LOCK_LAST" string
             to the lockedFacets array of the last
             enabled facet.
            */
            Object.keys(lockedFacets).forEach((key) => {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                const index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            });
            if (closedEyes) {
                if (closedEyes.length === facetData.length - 1) {
                    const lastFacet = facetData.find((f) => !closedEyes.includes(f.type.replace(/ /g, '-')));
                    if (lastFacet) {
                        if (closedEyes[lastFacet.type]) {
                            lockedFacets[lastFacet.type].push('LOCK_LAST');
                        }
                        else {
                            lockedFacets[lastFacet.type] = ['LOCK_LAST'];
                        }
                    }
                }
                if (closedEyes.includes(facet.type.replace(/ /g, '-'))) { // check if the eyes are open
                    facet.enabled = false;
                }
                else {
                    facet.enabled = true;
                }
            }
            if (Object.keys(lockedFacets).length) { // check if bubble chart wants to lock this facet
                if (lockedFacets[facet.type] && lockedFacets[facet.type].length > 0) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            else {
                facet.locked = false;
            }
            const headerClasses = [];
            const iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet['class-name']) {
                headerClasses.push(`color-${facet['class-name']}`);
                iconClasses.push(`color-${facet['class-name']}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash',
                classes: headerClasses.join(' ')
                    + (facet.locked
                        ? ' is-blocked'
                        : ' not-blocked'),
                payload: facet.locked === true ? null : facet.type.replace(/ /g, '-'),
            });
            // make array of inputs data
            inputs.push({
                sections: [
                    {
                        inputs: [
                            {
                                id: `${facet.type.replace(/ /g, '-')}-${j}`,
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                iconPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                enterPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                classes: `${String(facet.type.replace(' ', '-'))}-search`,
                            },
                        ],
                    },
                ],
            });
        });
        // zipping arrays to render widgets with separate data (see home-layout.html)
        return headers.map((h, i) => ({ header: h, input: inputs[i] }));
    }
}

class AwHomeItemTagsWrapperDS extends DataSource {
    transform(data) {
        return data;
    }
}

class AwHomeAutocompleteDS extends DataSource {
    transform(data) {
        const { response, query } = data;
        const { results, totalCount } = response;
        const { keys, config, paths } = this.options;
        const labels = this.options.labels || {};
        const itemIds = [];
        const groups = {};
        results.forEach(({ item, entity }) => {
            const groupId = entity ? entity.typeOfEntity : item.document_type;
            const groupConfig = keys[groupId];
            const mainMetadata = groupConfig['main-metadata'];
            const currentItem = item || entity;
            if (!groups[groupId]) {
                const { label, icon } = groupConfig;
                groups[groupId] = {
                    title: label,
                    icon,
                    classes: `color-${groupConfig['class-name']}`,
                    items: [],
                    type: groupId,
                };
            }
            if (itemIds.indexOf(currentItem.id) === -1) {
                const metadata = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach(({ key, value }) => {
                        if (mainMetadata && key === mainMetadata) {
                            metadata.push({ key: helpers.prettifySnakeCase(key, labels[key]), value });
                        }
                    });
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata,
                    anchor: {
                        href: `${paths[entity ? 'entitaBasePath' : 'schedaBasePath']}/${currentItem.id}/${helpers.slugify(currentItem.label)}`,
                    },
                });
            }
        });
        const grouplist = Object.keys(groups).map((key) => ({
            group: {
                title: groups[key].title,
                icon: groups[key].icon,
                classes: groups[key].classes,
            },
            items: groups[key].items,
        }));
        return {
            results: grouplist,
            actions: grouplist.length > 0 ? {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query,
                        },
                    },
                },
            } : {
                showMore: {
                    text: 'Cerca in tutti i campi',
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query,
                            'query-all': 1,
                        },
                    },
                },
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
        };
    }
}

class AwEntitaNavDS extends DataSource {
    transform(param) {
        if (!param) {
            return null;
        }
        const { data, selected } = param;
        const navigation = { items: [], payload: 'entita-nav' };
        const { hasMetadataFields } = this.options;
        /* navigation.items.push({
          text: 'OVERVIEW',
          anchor: { href: `${param.basePath}/overview` },
          classes: selected === 'overview' ? 'is-selected overview-tab' : 'overview-tab',
        });
        if (hasMetadataFields) {
          navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
          });
        } */
        navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
        });
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: `${param.basePath}/oggetti-collegati`,
                    queryParams: {
                        page: 1,
                    },
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedEntities) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: `${param.basePath}/entita-collegate` },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: `${param.basePath}/maxxi` },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: `${param.basePath}/wiki` },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        // one tab control
        if (navigation.items.length === 2 && !hasMetadataFields) {
            navigation.items.shift();
        }
        return navigation;
    }
}

class AwEntitaMetadataViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFields = false;
    }
    transform(data) {
        this.hasFields = !!(Array.isArray(data) && data.length);
        return {
            group: [{
                    items: data || []
                }]
        };
    }
}

class AwTreeDS extends DataSource$1 {
    constructor() {
        super(...arguments);
        this.transform = (data) => data;
        this._getCachedData = () => AwTreeDS.dataCache[this.rootId];
        this._normalize = ({ id, label, icon, img, branches, document_type: type, document_classification: classification }) => {
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = {
                id, label, icon, img, hasBranches, type, classification
            };
            if (hasBranches) {
                branches.forEach((data) => {
                    this._getCachedData().flatIds.push([id, data.id]);
                    this._normalize(data);
                });
            }
        };
        this._getParent = (id) => this._getCachedData().flatIds
            .filter(([, childId]) => childId === id)
            .map(([parentId]) => parentId)[0] || null;
        this._getTreePath = (id) => {
            const ids = [id];
            let currentId = id;
            while (currentId) {
                const parentId = this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        };
        this._getTree = (path) => {
            const tree = {};
            let counter = 0;
            const loadItems = (id, source) => {
                counter += 1;
                const nextParent = path[counter];
                source.items = [];
                this._getCachedData().flatIds
                    .filter(([parentId]) => parentId === id)
                    .forEach(([, childId], index) => {
                    const inPath = childId === nextParent;
                    const item = this._getTreeItem(childId, inPath);
                    source.items.push(item);
                    if (inPath) {
                        loadItems(childId, source.items[index]);
                    }
                });
            };
            // init
            loadItems(path[0], tree);
            return tree;
        };
        this._getTreeItem = (id, inPath) => {
            const { label, img, hasBranches, type, classification } = this._getCachedData().flatData[id];
            const defaultIcon = (this.options.config[type] || { icon: null }).icon;
            let specificIcon = '';
            const lastSegment = /.*\.(\w+)$/;
            if (classification && lastSegment.test(classification)) {
                const classID = classification
                    .match(lastSegment)[1] // get classification characters
                    .toUpperCase(); // normalize
                specificIcon = this.options.config[type].classifications[classID].icon;
            }
            const arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
            const classes = [];
            if (inPath) {
                classes.push('is-expanded');
            }
            if (this.activeId === id) {
                classes.push('is-active');
            }
            return {
                classes: classes.join(' '),
                text: label || null,
                img: img || null,
                icon: (specificIcon || defaultIcon),
                toggle: hasBranches ? {
                    icon: arrowIcons,
                    payload: {
                        source: 'toggle',
                        id,
                    },
                } : null,
                meta: id,
                anchor: {
                    href: `${this.basePath}/${id}/${helpers.slugify(label)}`,
                },
            };
        };
    }
    load(data) {
        const { tree, basePath } = data;
        this.rootId = tree.id;
        this.basePath = basePath;
        // save in cache
        if (!AwTreeDS.dataCache[this.rootId]) {
            AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
            this._normalize(tree);
        }
    }
    build(id) {
        const path = this._getTreePath(id);
        const oldPath = this._getTreePath(this.currentId);
        const oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            const idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        const tree = this._getTree(path);
        this.update(tree);
    }
    setActive(id) {
        this.activeId = id;
    }
    highlightActive() {
        const control = (items) => {
            items.forEach((item) => {
                const founded = item.meta === this.activeId;
                const hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    const currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    const currentClasses = item.classes.split(' ');
                    if (currentClasses.indexOf('is-active') === -1) {
                        currentClasses.push('is-active');
                    }
                    item.classes = currentClasses.join(' ');
                }
                if (Array.isArray(item.items) && item.items.length) {
                    control(item.items);
                }
            });
        };
        control(this.output.items);
    }
}
AwTreeDS.dataCache = {};

class AwSidebarHeaderDS extends DataSource {
    transform(data) {
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header',
        };
    }
    toggleSidebar() {
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-angle-right';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
    }
}

class AwSchedaBreadcrumbsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => data;
    }
    toggleSidebar() {
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
        }
        else {
            sidebarData.classes = 'is-expanded';
        }
        this.update(sidebarData);
    }
}

class AwSchedaMetadataDS extends DataSource {
    transform(data) {
        return {
            group: [{
                    items: data || []
                }]
        };
    }
}

class AwSchedaImageDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasNavigation = false;
    }
    transform(data) {
        const tileSources = this.getTileSources(data.images);
        this.hasNavigation = Array.isArray(data.images) && data.images.length > 1;
        return {
            images: [],
            viewerId: 'scheda-layout-viewer',
            libOptions: {
                tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: (viewer) => {
                this.instance = viewer;
            },
        };
    }
    hasInstance() {
        return !!this.instance;
    }
    updateImages(data) {
        if (!this.instance)
            return;
        // reset
        this.instance.world.removeAll();
        setTimeout(() => {
            const images = this.getTileSources(data.images);
            this.hasNavigation = Array.isArray(data.images) && data.images.length > 1;
            this.instance.open(images);
        });
    }
    getTileSources(images) {
        // FIXME: togliere replace
        return images.map((img) => img.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi'));
    }
}

class AwSchedaInnerTitleDS extends DataSource {
    transform(data) {
        return data;
    }
}

class AwRelatedEntitiesDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => {
            const basePath = this.options.config.get('paths').entitaBasePath;
            const { title } = this.options;
            const previews = data ? data.map((d) => ({
                title: d.entity.label,
                anchor: {
                    href: `${basePath}${d.entity.id}/${d.entity.label}`,
                },
                classes: `is-${d.entity.typeOfEntity}`,
                metadata: [{
                        items: [{
                                label: 'Tipo di entità',
                                value: d.entity.typeOfEntity,
                            }],
                    }],
                // A special kind of metadata, not to be viewed as other metadata
                relation: {
                    key: d.relationName || title,
                    value: d.entity.relation || null
                },
            })) : [];
            return { previews };
        };
    }
}

class AwSearchLayoutTabsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.selected = 'list';
    }
    transform() {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : '',
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : '',
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : '',
                }],
        };
    }
    setSelected(tabId) {
        this.selected = tabId;
    }
}

// import { isEmpty } from 'lodash';
const ENTITY_LINKS_CLASS = 'entity-links';
const ENTITY_LINKS_PARENT_SELECTOR = '.n7-facets-wrapper__group:last-child .n7-facet__section-input-links';
const loaderItem = {
    counter: null,
    label: 'Loading...',
    searchData: [],
    value: '__loading__',
};
var entityLinksHelper = {
    paginationState: {},
    paginate$: new Subject(),
    listenToChanges(dataSource) {
        const facetsWrapperEH = dataSource.getWidgetEventHandler('facets-wrapper');
        return merge(facetsWrapperEH.internalFacetsChange$.pipe(mapTo(null)), this.paginate$).pipe(debounceTime(500), switchMap((pagination) => {
            const requestParams = dataSource.searchModel.getRequestParams();
            const internalFilters = dataSource.searchModel.getInternalFilters();
            this.paginationState.offset = pagination ? this.paginationState.offset : 0;
            this.updateParamsOffset(requestParams);
            const filters = [...requestParams.filters, ...internalFilters];
            const params = {
                searchParameters: Object.assign(Object.assign({ totalCount: 100, gallery: !!(dataSource.searchModel.getId() === 'aw-gallery-layout') }, requestParams), { filters }),
            };
            // initial loader
            if (this.paginationState.offset === 0) {
                this.addInitialLoader(dataSource);
            }
            return dataSource.getFacetsReq$(params);
        }));
    },
    onFacetsResponse(searchModel, facets) {
        // pagination control
        const entityLinksFacet = facets.find(({ id }) => id === ENTITY_LINKS_CLASS);
        const { totalCount } = entityLinksFacet;
        let { limit, offset } = this.paginationState;
        if (typeof limit === 'undefined') {
            limit = 10;
        }
        if (typeof offset === 'undefined') {
            offset = 0;
        }
        this.paginationState.totalCount = totalCount;
        if (offset > 0) {
            const entityLinksInput = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
            const oldData = entityLinksInput.getData() || [];
            // remove fake loading element
            if (oldData.length) {
                oldData.pop();
            }
            const newData = oldData.concat(entityLinksFacet.data);
            entityLinksFacet.data = newData;
        }
        if (this.paginationState.totalCount > (limit + offset)) {
            entityLinksFacet.data.push(loaderItem);
        }
        // empty state
        const entityLinksInput = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
        entityLinksInput.setIsEmpty(!totalCount);
        // fix scroll
        if (offset === 0) {
            const scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
            if (scrollEl) {
                scrollEl.scrollTop = 0;
            }
        }
        // update loading state
        this.paginationState.loading = false;
    },
    initPagination(searchModel) {
        searchModel.getFilters().filter((filter) => (filter.pagination)).forEach(({ pagination }) => {
            this.paginationState = Object.assign(Object.assign(Object.assign({}, pagination), this.paginationState), { loading: false });
        });
        setTimeout(() => {
            const scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
            const scroll$ = fromEvent(scrollEl, 'scroll');
            scroll$.pipe(debounceTime(300)).subscribe(({ target }) => {
                const { scrollTop, clientHeight, scrollHeight } = target;
                const { offset, limit, totalCount, loading } = this.paginationState;
                const margin = 150;
                if ((scrollTop + clientHeight >= scrollHeight - margin)
                    && (offset + limit < totalCount)
                    && loading === false) {
                    this.paginationState.loading = true;
                    this.paginationState.offset = offset + limit;
                    this.paginate$.next(this.paginationState);
                }
            });
        });
    },
    /* clearInternalFilters(searchModel) {
      const searchFilter = searchModel.getFiltersByFacetId('entity-search')[0];
      const typesFilter = searchModel.getFiltersByFacetId('entity-types')[0];
      if (!isEmpty(searchFilter.value) || !isEmpty(typesFilter.value)) {
        searchFilter.value = '';
        typesFilter.value = [];
        searchModel.updateInputsFromFilters();
      }
    }, */
    updateParamsOffset(params) {
        const entityLinksFilter = params.filters
            .find(({ facetId }) => facetId === ENTITY_LINKS_CLASS);
        if (entityLinksFilter) {
            entityLinksFilter.pagination.offset = this.paginationState.offset;
        }
    },
    resetOffset() {
        this.paginationState.offset = 0;
    },
    addInitialLoader(dataSource) {
        dataSource.searchModel.setInputData(ENTITY_LINKS_CLASS, [loaderItem]);
        const facetsWrapperDS = dataSource.getWidgetDataSource('facets-wrapper');
        facetsWrapperDS.updateInputLinks();
    }
};

const HEADER_ICON_OPEN = 'n7-icon-angle-down';
const HEADER_ICON_CLOSE = 'n7-icon-angle-right';
class AwFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getRequestParams = () => this.searchModel.getRequestParams();
        this.filtersAsQueryParams = (filters) => this.searchModel.filtersAsQueryParams(filters);
        this.updateFiltersFromQueryParams = (queryParams) => {
            this.searchModel.updateFiltersFromQueryParams(queryParams);
        };
        this.getInputByFacetId = (facetId) => this.searchModel.getInputByFacetId(facetId);
        this.filterTarget = (target) => {
            this.searchModel.filterTarget(target);
        };
        this.updateInputsFromFilters = () => {
            this.searchModel.updateInputsFromFilters();
        };
    }
    transform(data) {
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
            entityLinksHelper.initPagination(this.searchModel);
        }
        const id = this.searchModel.getId();
        const fields = this.searchModel.getFields();
        const groups = [];
        fields.forEach((fieldConfig, fieldIndex) => {
            const groupId = `group-${id}-${fieldIndex}`;
            // header config
            const header = this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            const sections = [];
            this.searchModel.getInputs()
                .filter((input) => input.getSectionIndex() === fieldIndex)
                .map((input) => {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput(),
                };
            })
                .forEach(({ type, output, facetId }) => {
                sections.push({
                    classes: this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId,
                    },
                });
            });
            groups.push({
                header,
                facet: { sections },
                classes: `n7-facets-wrapper__${groupId}`,
                isOpen: true,
                _meta: {
                    groupId,
                },
            });
        });
        return {
            groups,
            classes: `n7-facets-wrapper__${this.searchModel.getId()}`,
        };
    }
    toggleGroup({ eventPayload }) {
        this.output.groups.forEach((group) => {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        });
    }
    onFacetChange({ eventPayload }) {
        const { facetId, source, trigger } = eventPayload.inputPayload;
        const filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
        const filterValue = filter.value;
        let remove = false;
        let value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = `${value}`;
        // remove control
        if (Array.isArray(filterValue)) {
            remove = filterValue.indexOf(value) !== -1;
        }
        else {
            remove = filterValue === value;
        }
        // input text control
        // TODO: gestire i casi enter / icon click nel input text
        if (source === 'input-text' && ['enter', 'icon'].indexOf(trigger) !== -1)
            return;
        this.searchModel.updateFilter(facetId, value, remove);
        this.searchModel.updateInputsFromFilters();
    }
    updateFilteredTarget(target) {
        if (!this.searchModel) {
            return;
        }
        const input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((group) => group.facet)
            .map((facet) => facet.sections)
            .forEach((sections) => {
            sections.forEach((section) => {
                if (section._meta.facetId === target) {
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    }
    updateInputLinks() {
        if (!this.searchModel) {
            return;
        }
        const linksFacetIds = this.searchModel.getInputs()
            .filter((input) => input.getType() === 'link')
            .map((input) => input.getFacetId());
        this.output.groups
            .map((group) => group.facet)
            .map((facet) => facet.sections)
            .forEach((sections) => {
            sections.forEach((section) => {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    const input = this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    }
    _getSectionClasses(type) {
        const classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
        };
        return `n7-facet__section-input-${classesMap[type]}`;
    }
    _headerConfig(header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: `${groupId}-header`,
                groupId,
            },
            _meta: {
                id: `${groupId}-header`,
            },
        } : null;
    }
}

class AwGalleryResultsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.addPagination = (page, totalPages, size) => {
            const sizeOptions = [12, 24, 48];
            this.pagination = {
                first: { payload: `goto-${1}`, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page === totalPages ? 'is-disabled' : '' },
                links: this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((o) => ({
                        text: o,
                        selected: o === size,
                    })),
                    payload: 'select-size'
                },
            };
        };
        this.makePagination = (totalPages, currentPage) => {
            /*
              Called by this.unpackData() when this.options.page is defined.
              Returns the data for <n7-pagination> component.
            */
            const result = [];
            let limit = 5 - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                let lastPage;
                let firstPage;
                if (currentPage > Math.floor(limit / 2)) {
                    if (totalPages === 2) {
                        lastPage = totalPages;
                        firstPage = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (currentPage < (totalPages - Math.floor(limit / 2))) {
                        lastPage = currentPage / 1 + Math.floor(limit / 2);
                        firstPage = currentPage / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lastPage = totalPages;
                        firstPage = currentPage - limit + (totalPages - currentPage);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lastPage = limit + 1;
                    firstPage = 1;
                }
                // eslint-disable-next-line no-plusplus
                for (let i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: `page-${String(i)}`,
                        classes: currentPage === i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage === 1 ? 'is-active' : ''
                });
                // eslint-disable-next-line no-plusplus
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: `page-${String(i + 1)}`, classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        };
    }
    transform(data) {
        if (!data)
            return null;
        const { pageSize, currentPage } = this.options;
        // if the data doesn't fit on one page, render the pagination component
        if (data.length > pageSize) {
            this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
        }
        return {
            res: data.slice(0, pageSize),
            pagination: this.pagination
        };
    }
    chunks(a, size) {
        const results = [];
        while (a.length) {
            results.push(a.splice(0, size));
        }
        return results;
    }
}

class AwMapDS extends DataSource {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.transform = (data) => MAP_MOCK;
    }
}

class AwTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.transform = (data) => ({
            containerID: 'timeline-component',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                cluster: {
                    // titleTemplate: '{count}',
                    // fitOnDoubleClick: true,
                    clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0)
                },
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: (d, element) => `<div class="tooltip">${element.title}</div>`
                },
                template: (d) => {
                    const start = moment(d.start).format('DDMM') === '0101'
                        ? moment(d.start).format('YYYY') : moment(d.start).format('DD MMMM YYYY');
                    let end;
                    if (d.end) {
                        end = moment(d.end).format('DDMM') === '0101'
                            ? moment(d.end).format('YYYY') : moment(d.end).format('DD MMMM YYYY');
                    }
                    const endHTML = d.end ? `- ${end}` : '';
                    return (`<div class="dates"><em>${start}${endHTML}</em></div><div class="content">${d.content}</div>`);
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                // zoomMax: 31557600000, // one year
                zoomFriction: 8
            },
            dataSet: [
                {
                    id: 1,
                    content: 'Mostra internazionale di edilizia ospedaliera, Roma (1935)',
                    start: '1935'
                },
                {
                    id: 2,
                    content: 'Mostra di edilizia ospedaliera, Fiuggi',
                    start: '1942'
                },
                {
                    id: 3,
                    content: 'I Congresso mondiale di sociologia',
                    start: '1951'
                },
                {
                    id: 4,
                    content: 'V Congresso mondiale di sociologia, Washington D.C. (1962)',
                    start: '1962',
                },
                {
                    id: 5,
                    content: 'Mostra di edilizia pubblica, Pisa',
                    start: '1967-06-16',
                    end: '1967-06-21'
                },
                {
                    id: 6,
                    content: 'Strategia della tensione',
                    start: '1975',
                    end: '1984'
                },
                {
                    id: 7,
                    content: 'XX Congresso mondiale di sociologia, Roma',
                    start: '1995'
                }
            ],
            _setInstance: (timeline) => timeline
        });
    }
}

// Any

var DS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AwLinkedObjectsDS: AwLinkedObjectsDS,
    AwAutocompleteWrapperDS: AwAutocompleteWrapperDS,
    AwBubbleChartDS: AwBubbleChartDS,
    AwChartTippyDS: AwChartTippyDS,
    AwHeroDS: AwHeroDS,
    AwTableDS: AwTableDS,
    AwHomeHeroPatrimonioDS: AwHomeHeroPatrimonioDS,
    AwHomeFacetsWrapperDS: AwHomeFacetsWrapperDS,
    AwHomeItemTagsWrapperDS: AwHomeItemTagsWrapperDS,
    AwHomeAutocompleteDS: AwHomeAutocompleteDS,
    AwEntitaNavDS: AwEntitaNavDS,
    AwEntitaMetadataViewerDS: AwEntitaMetadataViewerDS,
    AwTreeDS: AwTreeDS,
    AwSidebarHeaderDS: AwSidebarHeaderDS,
    AwSchedaBreadcrumbsDS: AwSchedaBreadcrumbsDS,
    AwSchedaMetadataDS: AwSchedaMetadataDS,
    AwSchedaImageDS: AwSchedaImageDS,
    AwSchedaInnerTitleDS: AwSchedaInnerTitleDS,
    AwRelatedEntitiesDS: AwRelatedEntitiesDS,
    AwSearchLayoutTabsDS: AwSearchLayoutTabsDS,
    AwFacetsWrapperDS: AwFacetsWrapperDS,
    AwGalleryResultsDS: AwGalleryResultsDS,
    AwMapDS: AwMapDS,
    AwTimelineDS: AwTimelineDS
});

class AwHeroEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-hero.click':
                    if (payload === 'cerca' && this.dataSource.currentInputValue) {
                        this.emitOuter('enter', this.dataSource.currentInputValue);
                    }
                    break;
                case 'aw-hero.change':
                    this.dataSource.currentInputValue = payload;
                    this.emitOuter('change', payload);
                    break;
                case 'aw-hero.enter':
                    this.emitOuter('enter', payload);
                    break;
                default:
                    console.warn('(hero) unhandled event of type', type);
                    break;
            }
        });
    }
}

class AwHomeFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changedInput$ = new Subject();
        this.handleEyeClick = (type) => {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (this.dataSource.closedEyes) {
                const i = this.dataSource.closedEyes.indexOf(type);
                if (i >= 0) { // if the eye was closed
                    this.dataSource.closedEyes.splice(i, 1); // open the eye
                }
                else { // if the eye was open
                    this.dataSource.closedEyes.push(type); // close the eye
                }
            }
            else {
                this.dataSource.closedEyes = [type];
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        };
        this.updateFilters = (selectedBubble) => {
            /*
              Adds (or removes) the ID of the selected bubble from the array of that type of entity.
              Example:
                • Click on bubble "0263a407-d0dd" of type "org"
                • Add "0263a407-d0dd" to array "org".
              Result:
                • lockedFacets = { "org":[ "0263a407-d0dd" ] }
            */
            selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
            const { id, typeOfEntity } = selectedBubble.entity; // payload is the selected bubble
            if (!this.dataSource.lockedFacets[typeOfEntity]) {
                this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                const i = this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        };
    }
    listen() {
        this.changedInput$.pipe(debounceTime(500)).subscribe((payload) => {
            this.emitOuter('change', payload);
        });
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                // toggle visibility from facet header
                case 'aw-home-facets-wrapper.click':
                    if (payload === null) { // interrupt event for locked facets
                        break;
                    }
                    this.emitOuter('click', payload);
                    this.handleEyeClick(payload);
                    break;
                // change search input text
                case 'aw-home-facets-wrapper.change':
                    this.dataSource.openTippy = payload.inputPayload.replace('-search', '');
                    this.changedInput$.next(payload);
                    break;
                // pressed return while typing in search
                case 'aw-home-facets-wrapper.enter':
                    this.emitOuter('enter', payload);
                    break;
                default:
                    console.warn('unhandled inner event of type:', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.facetswrapperrequest': // incoming autocomplete response
                    this.dataSource.tippyMaker(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperclose': // incoming autocomplete response
                    this.dataSource.tippyClose(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    // this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.lockfilter':
                    this.updateFilters(payload);
                    break;
                case 'aw-home-layout.tagclick':
                    Object.keys(this.dataSource.lockedFacets).forEach((key) => {
                        if (this.dataSource.lockedFacets[key].includes(payload)) {
                            this.dataSource.lockedFacets[key].splice(this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    });
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.clearselection':
                    this.dataSource.lockedFacets = {};
                    this.dataSource.closedEyes = [];
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.facetclick':
                    {
                        const { openTippy } = this.dataSource;
                        if (this.dataSource.lockedFacets[openTippy]) {
                            if (this.dataSource.lockedFacets[openTippy].indexOf(payload) === -1) {
                                this.dataSource.lockedFacets[openTippy].push(payload);
                            }
                        }
                        else {
                            this.dataSource.lockedFacets[openTippy] = [payload];
                        }
                        this.dataSource.update(this.dataSource.lastData);
                    }
                    break;
                default:
                    break;
            }
        });
    }
}

class AwHomeHeroPatrimonioEH extends EventHandler {
    listen() {
        // no events
    }
}

class AwHomeItemTagsWrapperEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe((event) => {
            switch (event.type) {
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('click', event.payload);
                    break;
                default:
                    break;
            }
        });
        /* this.outerEvents$.subscribe(event => {
    
        }); */
    }
}

class AwHomeAutocompleteEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-autocomplete.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class AwEntitaNavEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-entita-nav.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    console.warn('unhandled event type');
                    break;
            }
        });
        /*
    
        this.outerEvents$.subscribe(event => {
    
        });
        */
    }
}

class AwSchedaSidebarEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter(type, payload);
            }
        });
    }
}

class AwSidebarHeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter('click', payload);
            }
        });
        /* this.outerEvents$.subscribe(event => {
    
        }); */
    }
}

class AwTreeEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.targetOffset = new ReplaySubject();
        this.targetIsOpen = false;
        this.scrollOpenedIntoView = () => {
            this.dataSource.out$
                .pipe(filter((data) => !!data), first(), withLatestFrom(this.targetOffset)).subscribe(([, offset]) => {
                setTimeout(() => {
                    const wrapperEl = document.querySelector('.aw-scheda__tree-content');
                    const expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                    const lastExpandedNode = expandedNode.length
                        ? expandedNode[expandedNode.length - 1]
                        : null;
                    if (lastExpandedNode) {
                        const scrollTreeEl = document.querySelector('.n7-tree');
                        const wrapperElRect = wrapperEl.getBoundingClientRect();
                        const offsetToAdjust = offset - wrapperElRect.top;
                        scrollTreeEl.style.marginBottom = '1000px';
                        lastExpandedNode.scrollIntoView();
                        wrapperEl.scrollTop -= offsetToAdjust;
                        window.scrollTo(0, 0);
                        scrollTreeEl.style.marginBottom = '0px';
                    }
                }, 200);
            });
        };
        this.scrollLeafIntoView = () => {
            setTimeout(() => {
                const treeNode = document.querySelector('div.aw-scheda__tree');
                const leafNode = treeNode.querySelector('.is-active .n7-tree__item-contents');
                if (leafNode && !this.isInViewport(leafNode)) {
                    leafNode.scrollIntoView();
                    window.scrollTo(0, 0);
                    if (!this.isInViewport(leafNode)) {
                        this.scrollLeafIntoView();
                    }
                }
            });
        };
        this.isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (bounding.top >= 0
                && bounding.left >= 0
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-tree.click':
                    if (payload.source === 'toggle') {
                        setTimeout(() => {
                            this.dataSource.build(payload.id);
                            if (this.targetIsOpen) {
                                this.scrollOpenedIntoView();
                            }
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    {
                        if (payload.currentItem) {
                            this.dataSource.setActive(payload.currentItem);
                        }
                        const currentId = payload.currentItem || payload.tree.id;
                        this.dataSource.load(payload);
                        this.dataSource.build(currentId);
                    }
                    break;
                case 'aw-scheda-layout.routechanged':
                    // has output (not first load)
                    if (this.dataSource.output) {
                        this.dataSource.build(payload);
                        this.dataSource.setActive(payload);
                        this.dataSource.highlightActive();
                        this.scrollLeafIntoView();
                    }
                    break;
                case 'aw-scheda-layout.viewleaf':
                    this.dataSource.out$
                        .pipe(filter((data) => !!data), first()).subscribe(() => {
                        this.scrollLeafIntoView();
                    });
                    break;
                case 'aw-scheda-layout.treeposition':
                    {
                        const { target } = payload;
                        const targetRect = target.getBoundingClientRect();
                        this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                        this.targetOffset.next(targetRect.top);
                    }
                    break;
                default:
                    break;
            }
        });
    }
}

class AwSearchLayoutTabsEH extends EventHandler {
    listen() {
        // TODO
    }
}

class AwFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.internalFacetsChange$ = new Subject();
        this.externalFacetsChange$ = new Subject();
    }
    listen() {
        // listen to inner (widget) events
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facet':
                    {
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
                        const { facetId, value } = payload.eventPayload.inputPayload;
                        if (value === '__loading__') {
                            return;
                        }
                        const input = this.dataSource.getInputByFacetId(facetId);
                        const context = input.getContext();
                        // update
                        this.dataSource.onFacetChange(payload);
                        // internal
                        if (context === 'internal') {
                            this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            this.externalFacetsChange$.next(facetId);
                        }
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('queryparamschange') !== -1 && this.dataSource.searchModel) {
                this.dataSource.updateFiltersFromQueryParams(payload);
                this.dataSource.updateInputsFromFilters();
            }
        });
        // listen to global events
        EventHandler.globalEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'global.searchresponse':
                    if (this.dataSource.searchModel && this.dataSource.searchModel.getId() === payload) {
                        this.dataSource.updateInputLinks();
                        const internalFilters = this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach((filter) => {
                            const input = this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            const target = input.getTarget();
                            // this.dataSource.filterTarget(target);
                            this.dataSource.updateFilteredTarget(target);
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe((facetId) => {
            const requestParams = this.dataSource.getRequestParams();
            const queryParams = this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((key) => { queryParams[key] = queryParams[key] || null; });
            // signal
            this.emitOuter('facetschange', { facetId });
            // reset page
            queryParams.page = 1;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
        });
    }
}

class AwGalleryResultsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-gallery-results.change':
                    this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
                    if (typeof payload === 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            const targetPage = +payload.replace('goto-', '');
                            // kill impossible page navigations
                            if (targetPage > this.dataSource.totalPages)
                                return;
                            if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                                return;
                            this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    }
}

class AwLinkedObjectsEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.handleScroll = (target) => {
            const { totalObjects, loadedData } = this.dataSource;
            const loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
            if (loadedTotal >= totalObjects) {
                return;
            }
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                && this.dataSource.loadedData.isLoading === false) {
                this.dataSource.loadedData.isLoading = true;
                this.emitOuter('datarequest', {
                    currentPage: this.dataSource.currentPage,
                });
            }
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.emitOuter('change', +payload.value);
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    this.dataSource.checkForMore(false);
                    this.emitOuter('datarequest', {
                        currentPage: this.dataSource.currentPage,
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    {
                        // handle incoming data from home-layout
                        const { res } = payload;
                        this.dataSource.handleIncomingData(res);
                    }
                    break;
                case 'aw-home-layout.scroll':
                    this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class AwAutocompleteWrapperEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-autocomplete-wrapper.click':
                    if (payload !== 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                        this.emitOuter('clickresult', payload);
                    }
                    break;
                default:
                    console.warn('unhandled event of type:', type);
                    break;
            }
        });
    }
}

class AwBubbleChartEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.initialLoad = false;
        this.toggleSelection = (id) => {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            this.dataSource.handleBubbleClick(id);
            this.emitOuter('selection', this.dataSource.selected);
        };
        this.toggleFilter = (f) => {
            /*
              Toggle the clicked eye-filter in the filteres array and
              redraw the graph.
            */
            if (this.dataSource.filters.includes(f)) {
                this.dataSource.filters.splice(this.dataSource.filters.indexOf(f), 1);
            }
            else {
                this.dataSource.filters.push(f);
            }
            this.dataSource.updateChart(null); // null means "reuse the last response"
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.click':
                    if (this.dataSource.options.selectable !== false) {
                        this.toggleSelection(payload);
                    }
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((el) => payload === el.entity.id));
                    break;
                case 'aw-bubble-chart.d3end':
                    { // end of d3.js draw()
                        let filteredChartData;
                        // apply filters to the data before adding tooltips
                        if (this.dataSource.filters.length > 0) {
                            filteredChartData = this.dataSource.chartData.filter((el) => !this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')));
                        }
                        else {
                            filteredChartData = this.dataSource.chartData;
                        }
                        this.emitOuter('d3end', {
                            bubbles: this.dataSource.smartSlice(filteredChartData),
                            selected: this.dataSource.selected,
                        });
                    }
                    break;
                default:
                    console.warn('unhandled inner event of type', type, 'with payload', payload);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.select':
                    {
                        const { id } = payload;
                        this.toggleSelection(id);
                        const foundBubble = this.dataSource.chartData.find((el) => id === el.entity.id);
                        if (foundBubble) {
                            this.emitOuter('lockfilter', foundBubble);
                        }
                        else {
                            console.warn('Unable to determine which bubble was selected.');
                        }
                    }
                    break;
                case 'aw-home-layout.tagclick':
                    this.toggleSelection(payload);
                    break;
                case 'aw-home-layout.facetclick':
                    if (!this.dataSource.selected.includes(payload)) {
                        this.toggleSelection(payload);
                    }
                    break;
                case 'aw-home-layout.togglefilter':
                    this.toggleFilter(payload);
                    break;
                case 'aw-home-layout.clearselection':
                    this.dataSource.selected = [];
                    this.emitOuter('selection', []);
                    break;
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class AwTableEH extends EventHandler {
    listen() {
        /*
        this.innerEvents$.subscribe(event => {
    
        });
    
        this.outerEvents$.subscribe(event => {
    
        });
        */
    }
}

class AwChartTippyEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.tippyList = []; // array of tippy instances
        this.tippyMaker = (bubbles) => {
            /*
              Destroys every existing tooltip,
              then creates a new Tippy instance for each bubble.
            */
            // flush existing tooltips
            this.tippyList.forEach((t) => { if (t) {
                t.destroy();
            } });
            this.tippyList = [];
            // create new tooltips
            bubbles.forEach((b) => {
                const target = document.getElementById(`g_${b.entity.id}`);
                if (target) {
                    this.tippyList.push(// add this tippy to the array of instances
                    tippy(target, {
                        content: document.getElementById(`template__${b.entity.id}`),
                        interactive: true,
                        appendTo: document.body,
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: 150,
                        updateDuration: 400,
                    }));
                }
            });
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                default:
                    console.warn('(chart-tippy) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.d3end':
                case 'aw-entita-layout.d3end':
                case 'aw-scheda-layout.d3end':
                    this.dataSource.update(payload); // creating DOM Elements (templates)
                    setTimeout(() => {
                        this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                    });
                    break;
                default:
                    break;
            }
        });
    }
}

// Home Layout

var EH$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AwHeroEH: AwHeroEH,
    AwHomeFacetsWrapperEH: AwHomeFacetsWrapperEH,
    AwHomeHeroPatrimonioEH: AwHomeHeroPatrimonioEH,
    AwHomeItemTagsWrapperEH: AwHomeItemTagsWrapperEH,
    AwHomeAutocompleteEH: AwHomeAutocompleteEH,
    AwEntitaNavEH: AwEntitaNavEH,
    AwSchedaSidebarEH: AwSchedaSidebarEH,
    AwSidebarHeaderEH: AwSidebarHeaderEH,
    AwTreeEH: AwTreeEH,
    AwSearchLayoutTabsEH: AwSearchLayoutTabsEH,
    AwFacetsWrapperEH: AwFacetsWrapperEH,
    AwGalleryResultsEH: AwGalleryResultsEH,
    AwLinkedObjectsEH: AwLinkedObjectsEH,
    AwAutocompleteWrapperEH: AwAutocompleteWrapperEH,
    AwBubbleChartEH: AwBubbleChartEH,
    AwTableEH: AwTableEH,
    AwChartTippyEH: AwChartTippyEH
});

const AwEntitaLayoutConfig = {
    layoutId: 'aw-entita-layout',
    widgets: [
        { id: 'aw-entita-nav', hasStaticData: true },
        { id: 'aw-entita-metadata-viewer' },
        { id: 'aw-linked-objects' },
        { id: 'aw-bubble-chart' },
        { id: 'aw-related-entities' },
        { id: 'aw-chart-tippy' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwEntitaLayoutComponent = class AwEntitaLayoutComponent extends AbstractLayout {
    constructor(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwEntitaLayoutConfig') || AwEntitaLayoutConfig);
        this.router = router;
        this.route = route;
        this.location = location;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            location: this.location,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwEntitaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Location },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwEntitaLayoutComponent = __decorate([
    Component({
        selector: 'aw-entita-layout',
        template: "<div class=\"aw-entity n7-side-auto-padding\"\n     *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div *ngIf=\"lb.dataSource.loading\"\n             class=\"aw-entity__sidebar-title-wrapper-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <div *ngIf=\"!lb.dataSource.loading\"\n             class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <div *ngIf=\"lb.dataSource.loading\"\n             class=\"aw-entity__sidebar-nav-loading\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\n                                    [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <n7-nav *ngIf=\"!lb.dataSource.loading\" \n        [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\"\n        [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <!-- lb.dataSource.selectedTab -->\n    <div *ngIf=\"lb.dataSource.loading\"\n         class=\"aw-entity__content-loading\">\n        <div class=\"aw-entity__content-loading-title\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\"></n7-content-placeholder>\n        </div>\n\n        <div class=\"aw-entity__content-loading-items\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n                                    [data]=\"{\n                blocks: [{ classes: 'entity-placeholder-item-preview' }]\n            }\"></n7-content-placeholder>\n        </div>\n    </div>\n\n    <div *ngIf=\"!lb.dataSource.loading\"\n         class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                 class=\"aw-entity__content-section\"\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\"\n                       class=\"n7-btn n7-btn-light\"\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\"\n                       class=\"n7-btn n7-btn-light\"\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"(\n                ['overview', 'informazioni'].includes(lb.dataSource.selectedTab)\n            )\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n                    <div class=\"aw-entity__content-section-header\"\n                         *ngIf=\"lb.dataSource.selectedTab === 'overview'\">\n                        <h2 class=\"aw-entity__content-section-title\"\n                            *ngIf=\"lb.dataSource.selectedTab === 'overview'\">Informazioni</h2>\n                        <a *ngIf=\"lb.dataSource.selectedTab !== 'informazioni'\"\n                           class=\"n7-btn n7-btn-light\"\n                           [routerLink]=\"[lb.dataSource.getNavBasePath() + '/informazioni']\">\n                            TUTTE LE INFORMAZIONI <i class=\"n7-icon-angle-right\"></i>\n                        </a>\n                    </div>\n                    <p *ngIf=\"lb.dataSource.fallbackText\"\n                       class=\"aw-entity__content-section-empty\">\n                        {{ lb.dataSource.fallbackText }}\n                    </p>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async\">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                 *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedItems\"\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\n                       [queryParams]=\"{ page: 1 }\"\n                       class=\"n7-btn n7-btn-light\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <div class=\"aw-entity__content-item-previews aw-item-preview-list\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <div class=\"aw-item-preview-wrapper\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\"\n                                             [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                            <!-- Relation -->\n                            <div class=\"aw-item-preview-relation\"\n                                 *ngIf=\"preview.relation.value\">\n                                <p class=\"aw-item-preview-relation__description\">Relazione con\n                                    <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>:\n                                    <span class=\"aw-item-preview-relation__value\"> {{preview.relation.value}}</span>\n                                </p>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-related-entities__{{lb.dataSource.selectedTab}}\"\n                 *ngIf=\"lb.dataSource.myResponse.relatedEntities\"\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\n                       class=\"n7-btn n7-btn-light\"\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n\n                <!-- ENTITA COLLEGATE -->\n                <section id=\"related-item-container\"\n                         class=\"aw-entity__section aw-entity__related\">\n                    <div class=\"aw-entity__inner-title\">\n                        {{lb.dataSource.relatedEntitiesHeader}}\n                    </div>\n                    <div class=\"aw-entity__related-items n7-grid-2 aw-item-preview-list\">\n                        <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\n                            <div class=\"aw-item-preview-wrapper\">\n                                <n7-item-preview [data]=\"preview\"\n                                                [emit]=\"lb.widgets['aw-related-entities'].emit\">\n                                </n7-item-preview>\n                                <!-- Relation -->\n                                <div class=\"aw-item-preview-relation\"\n                                    *ngIf=\"preview.relation.value\">\n                                    <p class=\"aw-item-preview-relation__description\">Relazione con\n                                        <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>:\n                                        <span class=\"aw-item-preview-relation__value\"> {{preview.relation.value}}</span>\n                                    </p>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </section>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                 *ngIf=\"lb.dataSource.myResponse.extraTab\"\n                 [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                 *ngIf=\"lb.dataSource.myResponse.wikiTab\"\n                 [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\n                </a>\n            </div>\n        </section>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Location,
        ConfigurationService,
        LayoutsConfigurationService,
        CommunicationService,
        MainStateService,
        Title])
], AwEntitaLayoutComponent);

let AwSearchService = class AwSearchService {
    constructor() {
        this._models = {};
    }
    add(id, config) {
        if (this._models[id]) {
            throw Error(`Search model '${id}' already exists!`);
        }
        this._models[id] = new AwSearchModel(id, config);
    }
    remove(id) {
        if (this._models[id]) {
            delete this._models[id];
        }
    }
    model(id) {
        return this._models[id] || null;
    }
};
AwSearchService.ɵprov = ɵɵdefineInjectable({ factory: function AwSearchService_Factory() { return new AwSearchService(); }, token: AwSearchService, providedIn: "root" });
AwSearchService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AwSearchService);

var facetsConfig = {
    totalCount: 0,
    facets: [
        {
            id: 'query',
            type: 'value',
        },
        {
            id: 'query-all',
            type: 'value',
            hasStaticData: true,
            data: [
                {
                    value: '1',
                    label: 'Cerca in tutti i campi delle schede',
                },
            ],
        },
        {
            id: 'query-links',
            type: 'value',
        },
        {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count',
        },
        {
            id: 'entity-search',
            type: 'value',
        },
        {
            id: 'entity-links',
            type: 'value',
            searchData: ['entity-type'],
        },
    ],
    fields: [
        {
            inputs: [
                {
                    type: 'text',
                    facetId: 'query',
                    placeholder: 'Cerca nei titoli delle schede',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [
                            {
                                key: 'label.ngrams',
                                operator: 'LIKE',
                            },
                        ],
                    },
                },
                {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [
                            {
                                key: 'label.ngrams^5,text^4,fields.*.label^3',
                                operator: '=',
                            },
                        ],
                    },
                },
                {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [
                            {
                                key: 'source.entityType',
                                operator: '=',
                            },
                        ],
                    },
                },
            ],
        },
        {
            header: {
                label: 'Relazione con',
                classes: 'related-class',
            },
            inputs: [
                {
                    type: 'checkbox',
                    facetId: 'entity-types',
                    filterConfig: {
                        isArray: true,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'searchData.entity-type',
                                operator: '=',
                            },
                        ],
                    },
                },
                {
                    type: 'text',
                    facetId: 'entity-search',
                    placeholder: 'Cerca entità',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'label',
                                operator: 'LIKE',
                            },
                        ],
                    },
                },
                {
                    type: 'link',
                    facetId: 'entity-links',
                    emptyState: {
                        label: 'La tua ricerca non ha dato risultati, prova a cambiare i filtri',
                    },
                    filterConfig: {
                        isArray: true,
                        limit: 20,
                        pagination: {
                            limit: 50,
                            offset: 0
                        },
                        searchIn: [
                            {
                                key: 'relatedEntities.id',
                                operator: '=',
                            },
                        ],
                    },
                },
            ],
        },
    ],
    results: {
        order: {
            type: 'text',
            key: 'label_sort',
            direction: 'ASC' // ASC | DESC
        },
        fields: [
            {
                id: 'description',
                highlight: true,
                limit: 200,
            },
        ],
    },
    page: { offset: 0, limit: 10 },
};

class AwSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-search-layout';
        this.configId = 'search-layout';
        this.currentNav = 'ricerca';
        this.headTitle = 'Arianna4View - Ricerca';
        this.facetsConfig = facetsConfig;
        this.paginationList = [10, 25, 50];
        this.destroyed$ = new Subject();
        this.resetButtonEnabled = true;
        /** Pagination value (url parameter) */
        this.currentPage = 1;
        /** Linked objects page size */
        this.pageSize = 10;
        this.sidebarIsSticky = false;
        this.isFirstLoading = true;
        this.resultsLoading = false;
        /** True when the user has input a text string */
        this.isSearchingText = new BehaviorSubject(false);
        /** Current order method */
        this.orderBy = 'label_sort';
        /** Current order direction */
        this.orderDirection = 'ASC';
        this.orderByLabel = 'Ordina per';
        /** Options used to render the HTMLSelect */
        this.orderByOptions = [
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: false
            }, {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                type: 'text',
                selected: true // Mirrors the default sorting method in `search-facets.config.ts`
            }, {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                type: 'text',
                selected: false
            }
        ];
        this.drawPagination = () => {
            const { href, queryParams } = this._getPaginationParams();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(this.totalCount / this.pageSize),
                currentPage: this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: this.paginationList,
                    active: this.pageSize,
                },
            });
        };
        this.getSearchModelId = () => this.layoutId;
    }
    onInit({ configuration, mainState, options, communication, search, }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.prettifyLabels = this.configuration.get('labels');
        this.configKeys = this.configuration.get('config-keys');
        this.fallback = this.configuration.get(this.configId).fallback;
        this.pageTitle = this.configuration.get(this.configId).title;
        // remove first
        // stateless search
        if (this.search.model(this.layoutId)) {
            this.search.remove(this.layoutId);
        }
        this.search.add(this.layoutId, cloneDeep(this.facetsConfig));
        this.searchModel = this.search.model(this.layoutId);
        // query params control
        if (AwSearchModel.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(AwSearchModel.queryParams);
            AwSearchModel.queryParams = null;
        }
        this._sidebarStickyControl();
        this.mainState.updateCustom('currentNav', this.currentNav);
        this.mainState.update('headTitle', this.headTitle);
    }
    onDestroy() {
        this.destroyed$.next();
        AwSearchModel.queryParams = null;
    }
    onSearchResponse() {
        this.resetButtonEnabled = true;
        if (this.isFirstLoading) {
            this.isFirstLoading = false;
            this.one('facets-wrapper').update({ searchModel: this.searchModel });
            this.searchModel.updateInputsFromFilters();
        }
    }
    /**
     * Handles changes of the HTMLSelect order control
     * @param payload _score_DESC, label_sort_ASC, label_sort_DESC
     */
    onOrderByChange(payload) {
        const orderBy = payload.substring(0, payload.lastIndexOf('_'));
        const direction = payload.substring(payload.lastIndexOf('_') + 1);
        let type = '';
        // set selected
        this.orderByOptions.forEach((option) => {
            if (option.value === payload) {
                option.selected = true;
                type = option.type;
            }
            else {
                option.selected = false;
            }
        });
        this.orderBy = orderBy;
        this.orderDirection = direction;
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
        this.searchModel.setSearchConfigType(type);
    }
    onPageSizeChange(size) {
        this.pageSize = size;
        return this._updateSearchPage(this.currentPage);
    }
    onPaginationChange(payload) {
        const page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    }
    onPaginationGoToChange(payload) {
        const page = payload.replace('goto-', '');
        return this._updateSearchPage(page);
    }
    resetPagination() {
        this._updateSearchPage(1);
    }
    onResultsLimitChange(payload) {
        this.setLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    }
    setLimit(payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
    }
    getResultsReq$(params) {
        return this.communication.request$('search', {
            params,
            onError: (error) => console.error(error),
        }).pipe(tap(({ totalCount, results }) => {
            this.totalCount = totalCount;
            let resultsTitleIndex = 0;
            // results title
            if (this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            this.resultsTitle = this.configuration.get(this.configId).results[resultsTitleIndex];
            this.searchModel.updateTotalCount(totalCount);
            this.one('aw-linked-objects').updateOptions({
                context: this.configId === 'gallery-layout' ? 'gallery' : 'search',
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                paginationParams: this._getPaginationParams(),
                dynamicPagination: {
                    total: totalCount,
                },
                size: this.pageSize,
            });
            this.drawPagination();
            this.one('aw-linked-objects').update({ items: this._normalizeItems(results.items) });
        }));
    }
    getFacetsReq$(params) {
        return this.communication.request$('facets', {
            params,
            onError: (error) => console.error(error),
        }).pipe(tap(({ facets }) => {
            // entity links pagination control
            entityLinksHelper.onFacetsResponse(this.searchModel, facets);
            // facets labels
            this._addFacetsLabels(facets);
            // facets options
            this._addFacetsOptions(facets);
            this.searchModel.updateFacets(facets);
        }));
    }
    doSearchRequest$() {
        const requestParams = this.searchModel.getRequestParams();
        const params = {
            searchParameters: Object.assign({ totalCount: 0, gallery: !!(this.configId === 'gallery-layout') }, requestParams),
        };
        // update offset
        entityLinksHelper.resetOffset();
        entityLinksHelper.updateParamsOffset(params.searchParameters);
        // initial loader
        entityLinksHelper.addInitialLoader(this);
        const resultsReq$ = this.getResultsReq$(params);
        const facetsReq$ = this.getFacetsReq$(params);
        return forkJoin(resultsReq$, facetsReq$);
    }
    _updateSearchPage(page) {
        if (+page === this.currentPage) {
            return of(false);
        }
        this.currentPage = +page;
        const searchConfig = this.searchModel.getConfig();
        const pageConfig = searchConfig.page;
        const { limit } = pageConfig;
        const newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    }
    _addFacetsLabels(facets) {
        facets
            .filter((f) => Array.isArray(f.data))
            .forEach((f) => {
            f.data.forEach((dataItem) => {
                const key = dataItem.label;
                dataItem.label = helpers.prettifySnakeCase(key, this.prettifyLabels[key]);
            });
        });
    }
    _addFacetsOptions(facets) {
        facets
            .filter((f) => f.id === 'query-links')
            .forEach((f) => {
            f.data.forEach((dataItem) => {
                const config = this.configKeys[dataItem.value];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: `color-${config['class-name']}`,
                    };
                }
            });
        });
    }
    _normalizeItems(items) {
        return items.map((singleItem) => ({ item: Object.assign({}, singleItem) }));
    }
    _sidebarStickyControl() {
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        const source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            const windowOffsetTop = window.pageYOffset;
            const stickyParent = document.getElementsByClassName('sticky-parent')[0];
            const wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
            this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
        });
    }
    _getPaginationParams() {
        const requestParams = this.searchModel.getRequestParams();
        const queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
        Object.keys(queryParams).forEach((key) => { queryParams[key] = queryParams[key] || null; });
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        let href = this.configuration.get('paths').searchBasePath;
        if (this.configId === 'gallery-layout') {
            href = this.configuration.get('paths').galleryBasePath;
        }
        return {
            href,
            queryParams,
        };
    }
}

var facetsConfig$1 = {
    totalCount: 0,
    facets: [
        {
            id: 'query',
            type: 'value'
        },
        {
            id: 'query-all',
            type: 'value',
            hasStaticData: true,
            data: [
                {
                    value: '1',
                    label: 'Cerca in tutti i campi delle schede'
                }
            ]
        },
        {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count'
        },
        {
            id: 'entity-search',
            type: 'value'
        },
        {
            id: 'entity-links',
            type: 'value',
            searchData: ['entity-type']
        },
    ],
    fields: [
        {
            inputs: [
                {
                    type: 'text',
                    facetId: 'query',
                    placeholder: 'Cerca nei titoli delle schede',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [
                            {
                                key: 'label.ngrams',
                                operator: 'LIKE'
                            }
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [
                            {
                                key: 'label.ngrams^5,text^4,fields.*^3',
                                operator: '='
                            }
                        ]
                    }
                },
            ]
        },
        {
            header: {
                label: 'Relazione con',
                classes: 'related-class'
            },
            inputs: [
                {
                    type: 'checkbox',
                    facetId: 'entity-types',
                    filterConfig: {
                        isArray: true,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'searchData.entity-type',
                                operator: '='
                            }
                        ]
                    }
                },
                {
                    type: 'text',
                    facetId: 'entity-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'label',
                                operator: 'LIKE'
                            }
                        ]
                    }
                },
                {
                    type: 'link',
                    facetId: 'entity-links',
                    emptyState: {
                        label: 'La tua ricerca non ha dato risultati, prova a cambiare i filtri'
                    },
                    filterConfig: {
                        isArray: true,
                        limit: 20,
                        pagination: {
                            limit: 50,
                            offset: 0
                        },
                        searchIn: [
                            {
                                key: 'relatedEntities.id',
                                operator: '='
                            }
                        ]
                    }
                }
            ]
        },
    ],
    results: {
        order: {
            type: 'score',
            key: '_score',
            direction: 'DESC' // ASC | DESC
        },
        fields: [
            {
                id: 'description',
                highlight: true,
                limit: 200
            }
        ]
    },
    page: { offset: 0, limit: 12 }
};

class AwGalleryLayoutDS extends AwSearchLayoutDS {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-gallery-layout';
        this.configId = 'gallery-layout';
        this.currentNav = 'galleria';
        this.headTitle = 'Arianna4View - Galleria';
        this.facetsConfig = facetsConfig$1;
        this.paginationList = [12, 24, 48];
        this.pageSize = 12; // linked objects page size
    }
}

class AwSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-search-layout';
        this.destroyed$ = new Subject();
        /** Emits when any of the search-facets are changed */
        this.facetsChange$ = new Subject();
        /** Emits when the pagination element
         * or the select-sort element are changed */
        this.additionalParamsChange$ = new Subject();
        /** Last queried text, used to check if the text has changed */
        this.previousText = '';
        /** Is true when the search is triggered with a new text-string */
        this.textHasChanged = false;
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.layoutId}.init`:
                    {
                        this.route = payload.route;
                        this.dataSource.onInit(payload);
                        this._listenToFacetsChange();
                        this._listenToAdditionalParamsChange();
                        this._listenToRouterChanges();
                        this._listenToInternalFilters();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        if ((textInput || '').length > 0) {
                            this.dataSource.isSearchingText.next(true);
                            setTimeout(() => {
                                this.dataSource.onOrderByChange('_score_DESC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case `${this.layoutId}.destroy`:
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case `${this.layoutId}.orderbychange`:
                    // handle the change of result-order
                    this.dataSource.onOrderByChange(payload);
                    this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case `${this.layoutId}.searchreset`:
                    this.dataSource.resetButtonEnabled = false;
                    this.dataSource.searchModel.clear();
                    this.additionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facetschange':
                    {
                        this.dataSource.resetPagination();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        // Checks if <input type=text>'s value has changed
                        this.textHasChanged = !!(textInput && (textInput !== this.previousText));
                        this.previousText = textInput;
                        const activeOrder = this.dataSource.orderByOptions.filter((d) => d.selected)[0].value;
                        if (this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                            // Remove sort by score option
                            this.dataSource.isSearchingText.next(false);
                            setTimeout(() => {
                                this.dataSource.onOrderByChange('label_sort_ASC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.onResultsLimitChange(payload.value);
                    this.additionalParamsChange$.next();
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * Handles changes to any of the search-facets
     */
    _listenToFacetsChange() {
        this.facetsChange$.pipe(debounceTime(500)).subscribe(() => {
            this.dataSource.resultsLoading = true;
            if (this.textHasChanged) {
                this.additionalParamsChange$.next();
            }
            else {
                this.dataSource.doSearchRequest$().subscribe(() => {
                    this.dataSource.resultsLoading = false;
                    this.dataSource.onSearchResponse();
                    this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
                });
            }
        });
    }
    /**
     * Handles entity links pagination
     */
    _listenToInternalFilters() {
        entityLinksHelper.listenToChanges(this.dataSource)
            .subscribe(() => {
            this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
        });
    }
    /**
     * Handles changes happening on pagination and select elements.
     */
    _listenToAdditionalParamsChange() {
        this.additionalParamsChange$.subscribe(() => {
            const { searchModel } = this.dataSource;
            const requestParams = searchModel.getRequestParams();
            const queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((key) => { queryParams[key] = queryParams[key] || null; });
            // aditional params
            queryParams.orderby = this.dataSource.orderBy;
            queryParams.orderdirection = this.dataSource.orderDirection;
            queryParams.page = this.dataSource.currentPage;
            queryParams.limit = this.dataSource.pageSize;
            // If the searched text was updated, overwrite the query params and force sorting by "score".
            if (this.textHasChanged) {
                queryParams.orderby = '_score';
                queryParams.orderdirection = 'DESC';
                this.textHasChanged = false;
            }
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
            this.facetsChange$.next();
        });
    }
    /** URL changes */
    _listenToRouterChanges() {
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
            this.emitOuter('queryparamschange', params);
            // aditional params control
            if (params.orderby && params.orderdirection) {
                this.dataSource.onOrderByChange(`${params.orderby}_${params.orderdirection}`);
            }
            if (params.page) {
                this.dataSource.onPaginationChange(`page-${params.page}`);
            }
            if (params.limit) {
                this.dataSource.setLimit(+params.limit);
            }
            this.facetsChange$.next();
        });
    }
}

class AwGalleryLayoutEH extends AwSearchLayoutEH {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-gallery-layout';
    }
}

const AwGalleryLayoutConfig = {
    layoutId: 'aw-gallery-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: AwFacetsWrapperDS, eventHandler: AwFacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwGalleryLayoutDS,
    layoutEH: AwGalleryLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwGalleryLayoutComponent = class AwGalleryLayoutComponent extends AbstractLayout {
    constructor(configuration, layoutsConfiguration, mainState, communication, search, route) {
        super(layoutsConfiguration.get('AwGalleryLayoutConfig') || AwGalleryLayoutConfig);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.route = route;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            communication: this.communication,
            search: this.search,
            route: this.route,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwGalleryLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: CommunicationService },
    { type: AwSearchService },
    { type: ActivatedRoute }
];
AwGalleryLayoutComponent = __decorate([
    Component({
        selector: 'aw-gallery-layout',
        template: "<div class=\"aw-search aw-gallery n7-side-auto-padding\"\n     id=\"gallery-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>\n    </div>\n    <div class=\"aw-search__content-wrapper sticky-parent\">\n        <!-- Left sidebar: facets -->\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\n             class=\"aw-search__sidebar-loading sticky-target\">\n            <div class=\"aw-search__facets-loading\">\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'search-placeholder-facet-input'\n                    }, {\n                        classes: 'search-placeholder-facet-check'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }]\n                }\">\n                </n7-content-placeholder>\n            </div>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\n             class=\"aw-search__sidebar sticky-target\"\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <div class=\"aw-search__facets\">\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </aw-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\n                        class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>\n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\"\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n                            id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\n                                [value]=\"option.value\"\n                                [selected]=\"option.selected\"\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\n                            {{ option.label }}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- Search details -->\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\n                 class=\"aw-search__results-wrapper-loading\">\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\n                                        [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n            </div>\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\n                 class=\"aw-search__results-wrapper\">\n                <div class=\"n7-grid-3\">\n                    <div *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview [data]=\"preview\"\n                                         [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n                    <div class=\"aw-search__fallback\">\n                        <p class=\"aw-search__fallback-string\">\n                            {{ lb.dataSource.fallback }}\n                        </p>\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\n                                class=\"n7-btn aw-search__fallback-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\n                            Resetta la ricerca\n                        </button>\n                    </div>\n                </ng-container>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        CommunicationService,
        AwSearchService,
        ActivatedRoute])
], AwGalleryLayoutComponent);

class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetInputs = {};
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
        this.numOfItemsStr = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
        this.resultsLimit = -1;
        this.selectedEntitiesIds = [];
        this.destroyed$ = new Subject();
        this.homeAutocompleteIsLoading = false;
        this.resultsListIsLoading = false;
        // ===== BUBBLE CHART =====
        this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
        this.updateComponent = (id, data, options) => {
            // update components from EH
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        };
    }
    // ========================
    onInit({ communication, mainState, configuration, tippy, }) {
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna4View - Homepage');
        this.mainState.update('pageTitle', 'Arianna4View - Homepage');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links'].test;
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links'].title;
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
            selectable: true,
        });
    }
    onDestroy() {
        this.destroyed$.next();
    }
    makeRequest$(query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: (error) => console.error(error),
            params,
        });
    }
    initialFilterRequest() {
        return this.communication.request$('globalFilter', {
            onError: (error) => console.error(error),
            params: {
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            },
        });
    }
    parseInitialRequest(response) {
        this.firstBubbleResponse = response.entitiesData;
        const facetData = [];
        response.typeOfEntityData.forEach((toe) => {
            const TOEconfigData = this.configuration.get('config-keys')[toe.type];
            facetData.push(Object.assign(Object.assign(Object.assign({}, toe), { enabled: true, locked: false }), TOEconfigData));
        });
        this.one('aw-home-facets-wrapper').update(facetData);
    }
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        let numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            let numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            let numOfItemsTmpStr = `${numOfItems}`;
            if (numOfItems < 10)
                numOfItemsTmpStr = `00${numOfItems}`;
            else if (numOfItems < 100)
                numOfItemsTmpStr = `0${numOfItems}`;
            if (numOfThousand > 0)
                this.numOfItemsStr = `${numOfThousand}.${numOfItemsTmpStr}`;
            else
                this.numOfItemsStr = `${numOfItems}`;
        }
        else {
            this.numOfItemsStr = '0';
        }
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        // scroll control
        setTimeout(() => {
            this._scrollBackgroundControl();
        });
    }
    updateTags(onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    }
    handleFacetSearchChange(change) {
        const payload = change.inputPayload;
        const { value } = change;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    }
    renderItemTags() {
        /*
              Try to build an item tag for each selected query looking at the data from the
              first response. If the needed bubble data cannot be found, ask the backend
              for that bubble's data.
          */
        const queryList = []; // list of pending queries
        const tagsData = []; // list of tags data built from query
        this.selectedBubbles.forEach((b) => {
            const theBubble = this.firstBubbleResponse.find((el) => el.entity.id === b);
            if (theBubble) { // if a bubble was found
                const bubbleConfig = this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${bubbleConfig['class-name']}`,
                });
            }
            else { // if the bubble was not found, make a query
                const params = { entityId: b, entitiesListSize: 1 };
                queryList.push(this.makeRequest$('getMissingBubble', params));
            }
        });
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((forkres) => {
                forkres.forEach((r) => {
                    const bubbleConfig = this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${bubbleConfig['class-name']}`,
                    });
                });
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            });
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    }
    onHeroChange(value) {
        if (value) {
            const escapedValue = helpers.escapeDoubleQuotes(value);
            this.autocompleteChanged$.next(escapedValue);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = escapedValue;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
    }
    _scrollBackgroundControl() {
        const node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        const source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout(() => {
            this._setHasScrollBackground(node);
        }, 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe(({ target }) => {
            this._setHasScrollBackground(target);
        });
    }
    _setHasScrollBackground(target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    }
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels'),
            paths: this.configuration.get('paths'),
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((value) => {
            this.communication.request$('autoComplete', {
                onError: (error) => console.error(error),
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] },
                },
            }).subscribe((response) => {
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update({
                    response,
                    query: value,
                });
            });
        });
    }
    _toggleAutocompletePopover() {
        if (!this.autocompletePopover) {
            const template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            const [popOver] = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                flip: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: () => { this.autocompletePopoverOpen = false; },
            });
            this.autocompletePopover = popOver;
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    }
}

class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (payload) => {
            this.emitOuter('facetclick', payload);
        };
        this.handleChartSelection = (payload) => {
            const selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.resultsListIsLoading = true;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            }).subscribe((res) => {
                this.dataSource.resultsListIsLoading = false;
                if (res && res.entitiesData.length > 0) {
                    // if some linked objects exist for the selected entities:
                    this.dataSource.lastBubbleResponse = res.entitiesData;
                    this.emitOuter('filterbubbleresponse', res.entitiesData);
                    this.dataSource.renderPreviewsFromApolloQuery(res);
                    this.dataSource.renderItemTags();
                }
                else {
                    // if the backend returns an empty list of results:
                    const queryList = [];
                    this.dataSource.selectedBubbles.forEach((b) => {
                        const params = { entityId: b, entitiesListSize: 1 };
                        queryList.push(// make a query for each selected bubble
                        this.dataSource.makeRequest$('getMissingBubble', params));
                    });
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList).subscribe((forkres) => {
                        const customBubbles = [];
                        forkres.forEach((r) => { customBubbles.push({ count: 0, entity: r }); });
                        this.emitOuter('filterbubbleresponse', customBubbles);
                        this.dataSource.renderPreviewsFromApolloQuery(res);
                        this.dataSource.renderItemTags();
                    });
                }
            });
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.init':
                    this.dataSource.onInit(payload);
                    this.loadFilters();
                    this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.outerlinkclick':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload,
                    });
                    break;
                case 'aw-home-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    {
                        const entityLinks = this.dataSource.selectedBubbles.join(',');
                        const basePath = this.configuration.get('paths').searchBasePath;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { 'entity-links': entityLinks },
                        });
                    }
                    break;
                case 'aw-home-layout.clearselection':
                    this.emitOuter('clearselection');
                    break;
                default:
                    console.warn('(home) unhandled inner event of type: ', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    {
                        const query = payload.value;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [this.configuration.get('paths').searchBasePath],
                            queryParams: { query },
                        });
                    }
                    break;
                case 'aw-hero.change':
                    this.dataSource.autocompleteValue = payload.value;
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (!payload.value
                        || (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                        const params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: this.configuration.get('home-layout')['results-limit'],
                            },
                        };
                        this.dataSource.makeRequest$('autoComplete', params).subscribe((response) => {
                            if (response.results.length < 1) {
                                const fallback = {
                                    totalcount: 0,
                                    results: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                this.configuration.get('home-layout')['autocomplete-fallback']
                                                    ? this.configuration.get('home-layout')['autocomplete-fallback']
                                                    : 'Nessun risultato trovato',
                                            },
                                        },
                                    ],
                                };
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response }, // DATA
                                { config: this.configuration });
                            }
                        });
                    }
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    {
                        const { currentPage } = payload;
                        const params = {
                            selectedEntitiesIds: this.dataSource.selectedBubbles,
                            itemsPagination: {
                                offset: currentPage * this.dataSource.resultsLimit,
                                limit: this.dataSource.resultsLimit,
                            },
                        };
                        this.dataSource.makeRequest$('globalFilter', params).subscribe((res) => {
                            if (res) {
                                this.emitOuter('dataresponse', { res });
                            }
                            else {
                                console.warn('Unable to fetch additional data.');
                            }
                        });
                    }
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    {
                        const { source, type: payloadType } = payload;
                        let basePath;
                        if (source === 'item') {
                            if (payloadType === 'oggetto-culturale') {
                                basePath = this.configuration.get('paths').schedaBasePath;
                            }
                            else {
                                basePath = this.configuration.get('paths').entitaBasePath;
                            }
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath, payload.id, helpers.slugify(payload.title)],
                            });
                        }
                        else if (source === 'showMore') {
                            const query = this.dataSource.homeAutocompleteQuery;
                            basePath = this.configuration.get('paths').searchBasePath;
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { query },
                            });
                        }
                        else if (source === 'extendsearch') { // click on <Cerca in tutti i campi> (call to action)
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [this.configuration.get('paths').searchBasePath],
                                queryParams: {
                                    query: this.dataSource.autocompleteValue,
                                    'query-all': 1,
                                },
                            });
                        }
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                default:
                    // console.warn('(home) unhandled outer event of type', type)
                    break;
            }
        });
    }
    loadFilters() {
        this.dataSource.initialFilterRequest().subscribe((response) => {
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            this.dataSource.parseInitialRequest(response);
            if (this.dataSource.bubblesEnabled) {
                this.emitOuter('filterbubbleresponse', response.entitiesData);
            }
        });
    }
    outerLinkClick(type, payload) {
        window.open(payload, '_blank');
    }
}

const AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-hero',
        }, {
            id: 'aw-home-hero-patrimonio',
        }, {
            id: 'aw-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-autocomplete',
        }, {
            id: 'aw-linked-objects',
        }, {
            id: 'aw-autocomplete-wrapper',
        }, {
            id: 'aw-chart-tippy',
        }],
    layoutDS: AwHomeLayoutDS,
    layoutEH: AwHomeLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwHomeLayoutComponent = class AwHomeLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, router, configuration, communication, mainState) {
        super(layoutsConfiguration.get('AwHomeLayoutConfig') || AwHomeLayoutConfig);
        this.router = router;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            communication: this.communication,
            options: this.config.options || {},
            tippy,
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwHomeLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService }
];
AwHomeLayoutComponent = __decorate([
    Component({
        selector: 'aw-home-layout',
        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                    {\n                        classes: 'facet-placeholder-item-1'\n                    }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\n            <aw-bubble-chart-wrapper>\n                <aw-chart-tippy \n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n                </aw-chart-tippy>\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\n                        <n7-content-placeholder \n                            *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n                            [data]=\"{\n                                blocks: [{\n                                    classes: 'search-result-placeholder-title'\n                                }, {\n                                    classes: 'search-result-placeholder-metadata'\n                                }]\n                        }\"></n7-content-placeholder>\n                    </div>\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n\n                        <div class=\"aw-home__bubble-results-fallback\"\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\n                            <p class=\"aw-home__bubble-results-fallback-text\">\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\n                            </p>\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\n                                Resetta la ricerca\n                            </button>\n                        </div>\n\n                        <div class=\"aw-item-preview-list\">\n                            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result\">\n                                <div class=\"aw-item-preview-wrapper\">\n                                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                                    </n7-smart-breadcrumbs>\n                                    <n7-item-preview [data]=\"preview\"\n                                                        [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                                    </n7-item-preview>\n                                </div>\n                            </ng-container>\n                        </div>\n                        \n                        <!-- <ng-container\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container> -->\n\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                </div>\n                <!-- aw-linked-objects__actions -->\n                <ng-container\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\n                        class=\"aw-home__bubble-results-list-actions\">\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                    </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\n                </n7-item-preview>\n                <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\n            <n7-loader [data]=\"{}\"></n7-loader>\n        </div>\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\n                <n7-loader [data]=\"{}\"></n7-loader>\n            </div>\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n            </n7-simple-autocomplete>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        Router,
        ConfigurationService,
        CommunicationService,
        MainStateService])
], AwHomeLayoutComponent);

const MAP_RESULTS = {
    items: [{
            item: {
                id: '51f03166-2241-42cd-8a0f-642907478787', label: '"1 - Casa a S. Piero a Ponti - 1964 - Tipo A - Veduta" (1964)', icon: null, title: '"1 - Casa a S. Piero a Ponti - 1964 - Tipo A - Veduta" (1964)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0095@0001_001_95.1.tif&WID=500&CVT=jpeg', text: '"1 - Casa a S. Piero a Ponti - 1964 - Tipo A - Veduta"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'S. Piero a Ponti, Campi Bisenzio (FI), Progetto di una casa (1964)', link: '0b300620-900f-4899-b0fb-a6b21ebda1d8' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { label: 'altra_intitolazione', fields: [] }, { key: 'descrizione_interna_tipologia', value: 'tavola definitiva' }, { key: 'estremo_remoto', value: '1964' }, { key: 'intitolazione', value: '"1 - Casa a S. Piero a Ponti - 1964 - Tipo A - Veduta"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19640101' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: '99373c8b-fc30-41f1-8d03-3def498652e2', label: '"1 - Mercato dei fiori a Pescia - Proposta di copertura delle 10 piazzuole laterali - Prog. arch. G. Gori" ([1966])', icon: null, title: '"1 - Mercato dei fiori a Pescia - Proposta di copertura delle 10 piazzuole laterali - Prog. arch. G. Gori" ([1966])', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0058@0003@0001_008_58.3.1_particolare.tif&WID=500&CVT=jpeg', text: '"1 - Mercato dei fiori a Pescia - Proposta di copertura delle 10 piazzuole laterali - Prog. arch. G. Gori"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'Pescia, Ampliamento del Mercato ortoflorofrutticolo (1957 - 1966)', link: '30b3b92e-596a-4706-97aa-a8c0d7e17097' }, { label: 'Pescia, Proposta di copertura delle 10 piazzuole laterali (1966)', link: '3c777533-60d3-4d68-b6b6-f50fef643bdf' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { key: 'descrizione_interna', value: '<p>Con annotazioni a matita rossa</p>' }, { label: 'altra_intitolazione', fields: [{ key: 'intitolazioni.altraIntitolazione.intitolazione', value: 'Pianta, sezioni, veduta prospettica e assonometrica' }] }, { key: 'descrizione_interna_tipologia', value: 'tavola di studio 1:50' }, { key: 'estremo_remoto', value: '[1966]' }, { key: 'intitolazione', value: '"1 - Mercato dei fiori a Pescia - Proposta di copertura delle 10 piazzuole laterali - Prog. arch. G. Gori"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19660101' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: '7c6dd66f-0ae7-44d2-a1fd-440ff18bb0f9', label: "\"1953 - Settembre - Bari - Padiglione dell'I.N.A. alla Fiera del Levante\" (1953)", icon: null, title: "\"1953 - Settembre - Bari - Padiglione dell'I.N.A. alla Fiera del Levante\" (1953)", subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0037_002_37b.tif&WID=500&CVT=jpeg', text: "\"1953 - Settembre - Bari - Padiglione dell'I.N.A. alla Fiera del Levante\"", relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'organizzazione', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }], fields: [{ key: 'legatura.epoca', value: '' }, { key: 'fase', value: 'storico' }, { label: 'altra_intitolazione', fields: [{ key: 'intitolazioni.altraIntitolazione.intitolazione', value: 'Bari, Padiglione INA alla Fiera del Levante' }] }, { key: 'intitolazione', value: "\"1953 - Settembre - Bari - Padiglione dell'I.N.A. alla Fiera del Levante\"" }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19530101' }, { key: 'legatura.datazione', value: '' }, { key: 'corredoRicerca.riferimento', value: "Fotocopie da Gori, 1961; ricerca \"Giorgio Giuseppe Gori. Operosità didattica e scientifica\" del corso di Storia dell'Architettura contemporanea della Facoltà di Architettura, a.a. 1991-1992" }, { key: 'definizione_tipologia', value: 'album' }, { key: 'descrizione_interna', value: '<p>3 fotografie b/n della mostra</p>' }, { key: 'corredoRicerca.descrizione', value: '' }, { key: 'corredoRicerca.tipologia', value: 'allegato' }, { key: 'estremo_remoto', value: '1953' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }, { key: 'legatura.tipologia', value: 'cartoncino' }]
            }
        }, {
            item: {
                id: 'aee6d69c-e58c-4025-861f-7735d2dc1e1f', label: '"1956 - Cagliari - cattedrale" (1956)', icon: null, title: '"1956 - Cagliari - cattedrale" (1956)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/ArchiviofotograficodiRestauro/FondoPieroSanpaolesi/provini/A105_0001_provini.tif&WID=500&CVT=jpeg', text: '"1956 - Cagliari - cattedrale"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'persona', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Archivio fotografico di Restauro', link: 'd3c172a6-eb54-4ffc-9593-67a79fe1a192' }, { label: 'sezione - Fondo Piero Sanpaolesi', link: '056c2c9f-83d7-4700-ad24-1ef8c76b6b20' }, { label: 'serie - provini', link: 'f2b067ff-97b9-4944-bb13-deae3574bab9' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'scheda' }, { key: 'descrizione_interna', value: '<p>Leoni del recinto presbiteriale della Cattedrale di Cagliari (1-12)</p>' }, { label: 'altra_intitolazione', fields: [] }, { key: 'intitolazione', value: '"1956 - Cagliari - cattedrale"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19560101' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: 'stampe per contatto' }, { key: 'consistenza.quantita', value: '12.0' }] }, { key: 'supporto', value: 'in cartoncino' }, { key: 'estremo_recente', value: '1956' }, { key: 'descrizione_interna_trascrizione', value: "<p>[Sotto l'intitolazione] Recinto presbiteriale, leoni già appartenenti allo scomposto ambone del maestro Guglielmo</p>" }]
            }
        }, {
            item: {
                id: '26e0a2b9-d466-445f-a0d3-849c1159835d', label: '"4 - Ospedale Lotti a Pontedera - 1° lotto dei lavori. Asilo mortuario - Fianco sud 1:50 - arch. G. Gori arch. R. Pagnini, Firenze 29 apr. 1960" (1960 apr. 29)', icon: null, title: '"4 - Ospedale Lotti a Pontedera - 1° lotto dei lavori. Asilo mortuario - Fianco sud 1:50 - arch. G. Gori arch. R. Pagnini, Firenze 29 apr. 1960" (1960 apr. 29)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0057@0004@0004_004_57.4.4a.tif&WID=500&CVT=jpeg', text: '"4 - Ospedale Lotti a Pontedera - 1° lotto dei lavori. Asilo mortuario - Fianco sud 1:50 - arch. G. Gori arch. R. Pagnini, Firenze 29 apr. 1960"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'persona', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: "Pontedera (PI), Ampliamento dell'Ospedale Lotti, in coll. con R. Pagnini, M. Cammelli, V. Michelagnoli (1957 - 1962)", link: 'ceb3d67a-de23-4f58-b731-2a0135d09826' }, { label: "Pontedera (PI), Ampliamento dell'Ospedale Lotti - 1° lotto di lavori - Asilo mortuario (1960)", link: 'bf951503-1950-4a19-942e-54aea808942b' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { label: 'altra_intitolazione', fields: [] }, { key: 'descrizione_interna_tipologia', value: 'tavola esecutiva' }, { key: 'estremo_remoto', value: '1960 apr. 29' }, { key: 'intitolazione', value: '"4 - Ospedale Lotti a Pontedera - 1° lotto dei lavori. Asilo mortuario - Fianco sud 1:50 - arch. G. Gori arch. R. Pagnini, Firenze 29 apr. 1960"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19600429' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: '3bfa1b8d-dca2-46ac-95dc-13cd76f6b5a3', label: '"4 aprile 1948 - Lucca - San Martino - Tomba di Ilaria del Carretto - (J. della Quercia)" (4 aprile 1948)', icon: null, title: '"4 aprile 1948 - Lucca - San Martino - Tomba di Ilaria del Carretto - (J. della Quercia)" (4 aprile 1948)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/ArchiviofotograficodiRestauro/FondoPieroSanpaolesi/provini/A9_0001_provini.tif&WID=500&CVT=jpeg', text: '"4 aprile 1948 - Lucca - San Martino - Tomba di Ilaria del Carretto - (J. della Quercia)"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'persona', count: 2 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Archivio fotografico di Restauro', link: 'd3c172a6-eb54-4ffc-9593-67a79fe1a192' }, { label: 'sezione - Fondo Piero Sanpaolesi', link: '056c2c9f-83d7-4700-ad24-1ef8c76b6b20' }, { label: 'serie - provini', link: 'f2b067ff-97b9-4944-bb13-deae3574bab9' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'scheda' }, { label: 'altra_intitolazione', fields: [] }, { key: 'intitolazione', value: '"4 aprile 1948 - Lucca - San Martino - Tomba di Ilaria del Carretto - (J. della Quercia)"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: 'stampe per contatto' }, { key: 'consistenza.quantita', value: '12.0' }] }, { key: 'supporto', value: 'in cartoncino' }, { key: 'estremo_recente', value: '4 aprile 1948' }]
            }
        }, {
            item: {
                id: '12def6b6-68b9-4103-acd4-971c12ec2438', label: '"5 - Casa a S. Piero a Ponti - Tipo A - Retro 1:50" ([1964])', icon: null, title: '"5 - Casa a S. Piero a Ponti - Tipo A - Retro 1:50" ([1964])', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0095@0005_002_95.5bis.tif&WID=500&CVT=jpeg', text: '"5 - Casa a S. Piero a Ponti - Tipo A - Retro 1:50"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'S. Piero a Ponti, Campi Bisenzio (FI), Progetto di una casa (1964)', link: '0b300620-900f-4899-b0fb-a6b21ebda1d8' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { label: 'altra_intitolazione', fields: [] }, { key: 'descrizione_interna_tipologia', value: 'tavola definitiva' }, { key: 'estremo_remoto', value: '[1964]' }, { key: 'intitolazione', value: '"5 - Casa a S. Piero a Ponti - Tipo A - Retro 1:50"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19640101' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: 'f93752c0-1ccb-449d-8a4c-41afe4789190', label: '"50 - INA. Cassa Vecchia Roma. Fabbrica Go. Veduta prospettica della piazza" (1960 gen. 27)', icon: null, title: '"50 - INA. Cassa Vecchia Roma. Fabbrica Go. Veduta prospettica della piazza" (1960 gen. 27)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0055@0008_003_55.8.tif&WID=500&CVT=jpeg', text: '"50 - INA. Cassa Vecchia Roma. Fabbrica Go. Veduta prospettica della piazza"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'organizzazione', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'Roma, Palazzina INA in via Cassia Vecchia (1957 - 1961)', link: '3c52efe4-631d-4959-9cc3-6abd4fa8014c' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { key: 'descrizione_interna', value: '<p>La tavola reca i timbri "Prof. Dott. Giuseppe Gori architetto" e la data "27 gen. 1960"</p>' }, { label: 'altra_intitolazione', fields: [] }, { key: 'estremo_remoto', value: '1960 gen. 27' }, { key: 'intitolazione', value: '"50 - INA. Cassa Vecchia Roma. Fabbrica Go. Veduta prospettica della piazza"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19600127' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: '0dc555d7-852b-4e22-8673-223bc0ec4815', label: '"58 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Prospetto rapp. 1:100" (1960 gen. 27)', icon: null, title: '"58 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Prospetto rapp. 1:100" (1960 gen. 27)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0055@0009_004_55.9.tif&WID=500&CVT=jpeg', text: '"58 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Prospetto rapp. 1:100"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'organizzazione', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'Roma, Palazzina INA in via Cassia Vecchia (1957 - 1961)', link: '3c52efe4-631d-4959-9cc3-6abd4fa8014c' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { key: 'descrizione_interna', value: '<p>La tavola, acquerellata a colori, reca il timbro "27 gen. 1960"</p>' }, { label: 'altra_intitolazione', fields: [] }, { key: 'estremo_remoto', value: '1960 gen. 27' }, { key: 'intitolazione', value: '"58 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Prospetto rapp. 1:100"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19600127' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: '2dbaebed-ff6f-4ee2-95b4-cf37d0f9b0be', label: '"59 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Fianco sulla strada 1:100 -  Fianco sull’interno 1:100" (1960 gen. 27)', icon: null, title: '"59 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Fianco sulla strada 1:100 -  Fianco sull’interno 1:100" (1960 gen. 27)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoGiuseppeGiorgioGori1906-1969/Documentazionediprogetto/0055@0010_001_55.10.tif&WID=500&CVT=jpeg', text: '"59 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Fianco sulla strada 1:100 -  Fianco sull’interno 1:100"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'organizzazione', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Giuseppe Giorgio Gori (1906 - 1969)', link: '6a2449cc-5498-4c9c-a357-1c8f770dc045' }, { label: 'serie 3 - Documentazione di progetto', link: '9e4bd61f-7bf9-4b35-aa2c-ecc26530e2e2' }, { label: 'Roma, Palazzina INA in via Cassia Vecchia (1957 - 1961)', link: '3c52efe4-631d-4959-9cc3-6abd4fa8014c' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'definizione_tipologia', value: 'tavola di progetto' }, { key: 'descrizione_interna', value: '<p>La tavola, acquerellata a colori, reca i timbri "Prof. Dott. Giuseppe Gori architetto" e la data "27 gen. 1960"</p>' }, { label: 'altra_intitolazione', fields: [] }, { key: 'estremo_remoto', value: '1960 gen. 27' }, { key: 'intitolazione', value: '"59 - INA. Cassa Vecchia Roma. Fabbrica Go. Gli aggetti delle facciate - Fianco sulla strada 1:100 -  Fianco sull’interno 1:100"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19600127' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }]
            }
        }, {
            item: {
                id: 'b2144875-82e3-4ac3-a6de-d9616fc3fe17', label: '"A S.E. Arrigo Serpieri per ricordo della visita alla bonifica Delia-Nivolelli, Mazara del Vallo 21 aprile 1933-XI" (1933)', icon: null, title: '"A S.E. Arrigo Serpieri per ricordo della visita alla bonifica Delia-Nivolelli, Mazara del Vallo 21 aprile 1933-XI" (1933)', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondofotograficodiAgraria/Bonifiche/6_0025_c12verso.tif&WID=500&CVT=jpeg', text: '"A S.E. Arrigo Serpieri per ricordo della visita alla bonifica Delia-Nivolelli, Mazara del Vallo 21 aprile 1933-XI"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }, { type: 'organizzazione', count: 2 }, { type: 'persona', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo fotografico di Agraria', link: 'bfd06ffa-c74e-4e81-8229-1f7de1038180' }, { label: 'serie - Bonifiche', link: '6670c137-bb53-4eb3-9e56-bd93a764d9b3' }], fields: [{ key: 'legatura.epoca', value: 'originale' }, { key: 'fase', value: 'storico' }, { label: 'altra_intitolazione', fields: [] }, { key: 'documentazioneGrafica.tecnicaEsecutiva', value: '' }, { key: 'descrizione_interna_tipologia', value: 'album fotografico' }, { key: 'documentazioneGrafica.tipologia', value: 'materiale fotografico' }, { key: 'intitolazione', value: '"A S.E. Arrigo Serpieri per ricordo della visita alla bonifica Delia-Nivolelli, Mazara del Vallo 21 aprile 1933-XI"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'data_inizio', value: '19330101' }, { key: 'legatura.datazione', value: '' }, { key: 'definizione_tipologia', value: 'album' }, { key: 'descrizione_interna', value: "<p>L'album contiene 26 fotografie in b/n di diversi formati, con veline e didascalie manoscritte. Le fotografie documentano i lavori della bonifica Delia-Nivolelli nel comune di Mazara del Vallo (TP) e la visita di Arrigo Serpieri a Mazara il 21 aprile 1933.<br />Molte fotografie riportano sul verso, a lapis, il testo della didascalia; alcune sono stampate su carta che riporta l'intestazione del fotografo: \"Foto-Termini-Trapani\". La fotografia a c. 13r. ha sul verso il timbro \"Consorzio della bonifica Nivolelli, Mazara del Vallo\".</p>" }, { key: 'stato_conservazione', value: 'mediocre' }, { key: 'estremo_remoto', value: '1933' }, { key: 'larghezza', value: '332.0' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: 'carte' }, { key: 'consistenza.quantita', value: '24.0' }] }, { key: 'legatura.tipologia', value: 'cuoio istoriato con lacci in cuoio' }, { key: 'altezza', value: '250.0' }, { key: 'spessore', value: '35.0' }]
            }
        }, {
            item: {
                id: '30681189-7ce0-4db0-be0a-6eedccde364b', label: '"Abbadia San Salvatore (Siena). Borgo Medievale - Arco di una porta in "peperino" (trachite)"', icon: null, title: '"Abbadia San Salvatore (Siena). Borgo Medievale - Arco di una porta in "peperino" (trachite)"', subTitle: null, image: 'http://iipserver.hyperborea.com/fast/iipsrv1.fcgi?FIF=/mnt/links/unifi/BibliotecadiScienzeTecnologiche/FondoFrancescoRodolico/Soggettiarchitettonici/Toscana/0162_0001_AbbadiaSanSalvatore.tif&WID=500&CVT=jpeg', text: '"Abbadia San Salvatore (Siena). Borgo Medievale - Arco di una porta in "peperino" (trachite)"', relatedTypesOfEntity: [{ type: 'luogo', count: 1 }], breadcrumbs: [{ label: 'complesso di fondi - Fondi archivistici delle biblioteche', link: 'c1f2126e-dbb3-45b5-82c0-dc639d605a8f' }, { label: 'fondo - Fondo Francesco Rodolico', link: '1cbf9ac3-a603-443c-b05e-518de387692d' }, { label: 'serie - Soggetti architettonici', link: '5a611c85-7cbe-445a-bad9-47f41c9c3f2e' }, { label: 'sottoserie - "Toscana"', link: '2a823690-9de5-4faf-8fae-f5ba152a05ac' }], fields: [{ key: 'fase', value: 'storico' }, { key: 'condizionamento.epoca', value: '' }, { label: 'altra_intitolazione', fields: [] }, { key: 'documentazioneGrafica.tecnicaEsecutiva', value: '' }, { key: 'condizionamento.datazione', value: '' }, { key: 'descrizione_interna_tipologia', value: 'Negativi e fotografie' }, { key: 'documentazioneGrafica.tipologia', value: 'materiale fotografico' }, { key: 'intitolazione', value: '"Abbadia San Salvatore (Siena). Borgo Medievale - Arco di una porta in "peperino" (trachite)"' }, { key: 'document_classification', value: 'a4.oc.ua.UA' }, { key: 'condizionamento.materia', value: 'cartone' }, { key: 'definizione_tipologia', value: 'busta' }, { key: 'descrizione_interna', value: "<p>1 negativo 24x36 mm; 1 stampa su carta al bromuro d'argento 80x110 mm</p>" }, { key: 'stato_conservazione', value: 'buono' }, { key: 'condizionamento.tipologia', value: 'scatola' }, { label: 'consistenza', fields: [{ key: 'consistenza.unitaMisura', value: '' }, { key: 'consistenza.quantita', value: '' }] }, { key: 'supporto', value: 'in carta' }]
            }
        }]
};

class AwMapLayoutDS extends LayoutDataSource {
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Mappa');
        this.one('aw-scheda-inner-title').update({
            title: {
                main: {
                    text: '1.252 Oggetti culturali collegati a Firenze'
                }
            }
        });
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: 1,
            // pagination: true,
            // paginationParams: this._getPaginationParams(),
            // dynamicPagination: {
            //   total: totalCount,
            // },
            size: 10,
        });
        this.one('aw-linked-objects').update(MAP_RESULTS);
    }
}

// import { map } from 'rxjs/operators';
// import helpers from '../../../common/helpers';
class AwMapLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        // private listenRoute(selectedItem = '', forceReload = false) {
        //   // listen for "page" query param changes
        //   this.route.queryParams.pipe(
        //     map((params: any) => params.page),
        //   ).subscribe((page) => {
        //     if (this.dataSource.currentPage !== page) {
        //       this.dataSource.currentPage = page;
        //       this.dataSource.handlePageNavigation();
        //     }
        //   });
        //   // get URL parameters with angular's paramMap
        //   this.route.paramMap.subscribe((params) => {
        //     // look for id
        //     if (params.get('id')) {
        //       if (this.dataSource.currentId === params.get('id') && !forceReload) {
        //         if (this.dataSource.selectedTab !== params.get('tab')) {
        //           this.dataSource.handleNavUpdate(params.get('tab'));
        //         }
        //         return;
        //       }
        //       // get item from response with id === id and return as promise
        //       this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
        //         .subscribe((res) => {
        //           if (res) {
        //             this.dataSource.loadContent(res);
        //             // remove the entity of this page
        //             const entities = res.relatedEntities
        //               .filter((entity) => entity.id !== params.get('id'));
        //             this.dataSource.updateWidgets(res);
        //             if (selectedItem) {
        //               this.emitOuter('selectItem', selectedItem);
        //             }
        //             this.emitOuter('filterbubbleresponse', entities);
        //           }
        //         });
        //     } else {
        //       this.dataSource.loadItem();
        //     }
        //   });
        // }
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    // this.entityId = this.route.snapshot.params.id || '';
                    // this.listenRoute(this.entityId);
                    break;
                case 'aw-map-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     default:
        //       break;
        //   }
        // });
    }
}

const AwMapLayoutConfig = {
    layoutId: 'aw-map-layout',
    widgets: [
        { id: 'aw-map', hasStaticData: true },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' }
    ],
    layoutDS: AwMapLayoutDS,
    layoutEH: AwMapLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwMapLayoutComponent = class AwMapLayoutComponent extends AbstractLayout {
    constructor(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwMapLayoutConfig') || AwMapLayoutConfig);
        this.router = router;
        this.route = route;
        this.location = location;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwMapLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Location },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwMapLayoutComponent = __decorate([
    Component({
        selector: 'aw-map-layout',
        template: "<div class=\"aw-map\"\n     id=\"map-layout\"\n     *ngIf=\"lb.dataSource\">\n     <n7-inner-title [data]=\"{\n               title: {\n                    main: {\n                         text: 'I luoghi dell\\'archivio'\n                    }\n               }\n          }\">\n     </n7-inner-title>\n     <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\">\n     </n7-map>\n     <!-- RESULT LIST -->\n     <ng-container *ngIf=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n          <n7-inner-title\n               [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n          </n7-inner-title>\n     </ng-container>\n     \n     <ng-container *ngIf=\"lb.widgets['aw-linked-objects'].ds.out$ | async\">\n          <div *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n               <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n               </n7-smart-breadcrumbs>\n               <n7-item-preview [data]=\"preview\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n               </n7-item-preview>\n          </div>\n     </ng-container>\n</div>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Location,
        ConfigurationService,
        LayoutsConfigurationService,
        CommunicationService,
        MainStateService,
        Title])
], AwMapLayoutComponent);

class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.stickyControlTrigger$ = new Subject();
        this.contentParts = {};
        this.sidebarIsSticky = false;
        this.treeMaxHeight = '100%';
        this.contentIsLoading = false;
        this.currentId = null;
        /** Switch loaded-content and loaded-empty states */
        this.hasContent = true;
        this.getTree = () => AwSchedaLayoutDS.tree;
    }
    onInit({ configuration, mainState, router, options, titleService, communication, }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.relatedEntitiesHeader = this.configuration.get('scheda-layout')['related-entities'].title;
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items'].title;
        this.metadataSectionTitle = this.getMetadataSectionTitle();
        this.hasSimilarItems = false;
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
        this.emptyStateString = this.configuration.get('scheda-layout')['empty-html'];
        this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
        this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
        this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // sidebar sticky control
        this._sidebarStickyControl();
    }
    onDestroy() {
        this.destroyed$.next();
    }
    getMetadataSectionTitle() {
        const layoutConfig = this.configuration.get('scheda-layout');
        const metadataConfig = layoutConfig.metadata || {};
        return metadataConfig.title || null;
    }
    getNavigation(id) {
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
        return this.communication.request$('getTree', {
            onError: (error) => console.error(error),
            params: { treeId: id },
        });
    }
    setTree(tree) {
        AwSchedaLayoutDS.tree = tree;
    }
    updateNavigation(text) {
        this.one('aw-sidebar-header').update({ text });
    }
    loadItem(id) {
        const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: (error) => console.error(error),
            params: { id, maxSimilarItems },
        });
    }
    loadContent(response) {
        if (response) {
            this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasRelatedEntities = Array.isArray(response.relatedEntities)
                && response.relatedEntities.length;
            this.hasImage = !!response.image;
            this.hasContent = !!(this.hasMetadata || this.hasSimilarItems
                || this.hasRelatedEntities || this.hasImage);
            this.contentParts = [];
            const content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // image viewer
            if (response.images) {
                const viewerDataSource = this.getWidgetDataSource('aw-scheda-image');
                if (!viewerDataSource.hasInstance()) {
                    this.one('aw-scheda-image').update(response);
                }
                else {
                    viewerDataSource.updateImages(response);
                }
            }
            const titleObj = {
                icon: response.icon,
                title: {
                    main: {
                        text: response.title || response.label,
                        classes: 'bold',
                    },
                },
                tools: response.subTitle,
                actions: {},
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            this.one('aw-scheda-metadata').update(this.getFields(response));
            // Breadcrumb section
            const breadcrumbs = {
                items: [],
            };
            if (response.breadcrumbs) {
                response.breadcrumbs.forEach((element) => {
                    breadcrumbs.items.push({
                        label: element.label,
                        anchor: {
                            href: [
                                this.configuration.get('paths').schedaBasePath,
                                `${element.link}/`,
                                helpers.slugify(element.label),
                            ].join(''),
                        },
                    });
                });
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
            }
            // update head title
            this.mainState.update('headTitle', `Arianna4View - Patrimonio - ${response.title || response.label}`);
        }
        if (response.relatedItems) {
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        if (response.relatedEntities) {
            response.relatedEntities.forEach((el) => {
                const label = response.title || response.label;
                el.relationName = label.length > 30
                    ? `${label.substr(0, 30)}... `
                    : label;
            });
            this.one('aw-related-entities').updateOptions({
                context: 'scheda', config: this.configuration, list: 'relatedEntities', title: response.title
            });
            this.one('aw-related-entities').update(response.relatedEntities);
        }
        // control sticky
        setTimeout(() => {
            this.stickyControlTrigger$.next();
        });
    }
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    _sidebarStickyControl() {
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        const source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe(() => {
            const windowTop = window.pageYOffset;
            const windowBottom = window.scrollY + window.innerHeight;
            const wrapper = document.getElementsByClassName('sticky-parent')[0];
            const wrapperTop = wrapper.offsetTop;
            const wrapperBottom = wrapperTop + wrapper.clientHeight;
            this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (this.sidebarIsSticky && windowBottom < wrapperBottom) {
                this.treeMaxHeight = `${windowBottom - windowTop - 50}px`;
            }
            else if (this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                this.treeMaxHeight = `${wrapperBottom - windowTop - 50}px`;
            }
            else if (windowBottom < wrapperBottom) {
                this.treeMaxHeight = `${windowBottom - wrapperTop - 50}px`;
            }
            else {
                this.treeMaxHeight = `${wrapperBottom - wrapperTop - 50}px`;
            }
        });
    }
    getFields(response) {
        const { fields, document_type: documenType } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        let metadataToShow = get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[documenType] || [];
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: documenType
        });
    }
}
AwSchedaLayoutDS.tree = null;

class AwSchedaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-scheda-layout.init':
                    {
                        this.dataSource.onInit(payload);
                        this.configuration = payload.configuration;
                        this.route = payload.route;
                        const paramId = this.route.snapshot.params.id || '';
                        if (paramId) {
                            this.dataSource.currentId = paramId;
                        }
                        this.listenRoute();
                        this.loadNavigation(paramId);
                        this.emitOuter('viewleaf');
                    }
                    break;
                case 'aw-scheda-layout.destroy':
                    this.destroyed$.next();
                    this.dataSource.onDestroy();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
                    break;
                default:
                    break;
            }
        });
    }
    listenRoute() {
        this.route.paramMap.subscribe((params) => {
            const paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    this.dataSource.currentId = paramId;
                    this.emitOuter('routechanged', paramId);
                }
                this.dataSource.contentIsLoading = true;
                this.dataSource.loadItem(paramId).subscribe((response) => {
                    this.dataSource.contentIsLoading = false;
                    if (response)
                        this.dataSource.loadContent(response);
                });
            }
        });
    }
    loadNavigation(selectedItem) {
        this.dataSource.updateNavigation('Loading...');
        this.dataSource.getNavigation('patrimonio').subscribe((response) => {
            if (response) {
                this.dataSource.setTree(response);
                this.dataSource.updateNavigation(this.dataSource.getTree().label);
                this.emitOuter('navigationresponse', {
                    tree: this.dataSource.getTree(),
                    currentItem: selectedItem,
                    basePath: this.configuration.get('paths').schedaBasePath,
                });
            }
        });
    }
}

const AwPatrimonioLayoutConfig = {
    layoutId: 'aw-scheda-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'aw-sidebar-header' },
        { id: 'aw-tree' },
        { id: 'aw-scheda-breadcrumbs' },
        { id: 'aw-scheda-metadata' },
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-related-entities' },
        { id: 'aw-chart-tippy' },
        { id: 'aw-linked-objects' },
    ],
    layoutDS: AwSchedaLayoutDS,
    layoutEH: AwSchedaLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwSchedaLayoutComponent = class AwSchedaLayoutComponent extends AbstractLayout {
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService, communication) {
        super(layoutsConfiguration.get('AwPatrimonioLayoutConfig') || AwPatrimonioLayoutConfig);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
        this.communication = communication;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwSchedaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title },
    { type: CommunicationService }
];
AwSchedaLayoutComponent = __decorate([
    Component({
        selector: 'aw-scheda-layout',
        template: "<div class=\"aw-scheda\"\n     id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n        <ng-container *ngTemplateOutlet=\"tree\"></ng-container>\n\n        <div class=\"aw-scheda__scheda-wrapper\"\n             [hidden]=\"lb.dataSource.contentIsLoading\">\n\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-smart-breadcrumbs>\n\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\n                 class=\"aw-scheda__fake-breadcrumbs\">\n            </div>\n\n            <div *ngIf=\"!lb.dataSource.currentId\"\n                 class=\"aw-scheda__intro-text\"\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\n            </div>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <!-- Empty state -->\n            <ng-container *ngIf=\"!lb.dataSource.hasContent\">\n                <ng-container *ngTemplateOutlet=\"empty\"></ng-container>\n            </ng-container>\n\n            <!-- Content sections -->\n            <ng-container *ngIf=\"lb.dataSource.hasContent\">\n                <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n            </ng-container>\n\n        </div>\n\n    </div>\n</div>\n\n<ng-template #tree>\n    <div class=\"aw-scheda__tree sticky-target\"\n         [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n        <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                           [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n        <div class=\"aw-scheda__tree-content-loading\"\n             *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n                                    [data]=\"{\n                            blocks: [{\n                                classes: 'tree-placeholder-item'\n                            }]\n                        }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-scheda__tree-content\"\n             (click)=\"lb.eventHandler.emitOuter('treeposition', $event)\"\n             [ngStyle]=\"{\n                            'max-height': lb.dataSource.treeMaxHeight,\n                            'overflow': 'auto'\n                        }\">\n            <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                     [emit]=\"lb.widgets['aw-tree'].emit\"\n                     *ngIf=\"!lb.dataSource.sidebarCollapsed\">\n            </n7-tree>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #empty>\n    <section class=\"aw-scheda__section aw-scheda__empty\"\n             [innerHTML]=\"lb.dataSource.emptyStateString\">\n    </section>\n</ng-template>\n\n<ng-template #content>\n    <section class=\"aw-scheda__section aw-scheda__image-viewer\"\n             [ngClass]=\"{ 'navigation-hidden': !lb.widgets['aw-scheda-image'].ds.hasNavigation }\"\n             [hidden]=\"!lb.dataSource.hasImage\">\n        <n7-image-viewer [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n        </n7-image-viewer>\n    </section>\n\n    <section class=\"aw-scheda__section aw-scheda__description\"\n             *ngIf=\"lb.dataSource.contentParts.content\">\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\n            <div [innerHTML]=\"part.content\"></div>\n        </div>\n    </section>\n\n    <section class=\"aw-scheda__section aw-scheda__metadata\"\n             *ngIf=\"lb.dataSource.hasMetadata\">\n        <div class=\"aw-scheda__inner-title\"\n             *ngIf=\"lb.dataSource.metadataSectionTitle\">\n            {{lb.dataSource.metadataSectionTitle}}\n        </div>\n        <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n        </n7-metadata-viewer>\n    </section>\n\n    <!-- ENTITA COLLEGATE -->\n    <section *ngIf=\"lb.dataSource.hasRelatedEntities\"\n             id=\"related-item-container\"\n             class=\"aw-scheda__section aw-scheda__related\">\n        <div class=\"aw-scheda__inner-title\">\n            {{lb.dataSource.relatedEntitiesHeader}}\n        </div>\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\n                <div class=\"aw-item-preview-wrapper\">\n                    <n7-item-preview [data]=\"preview\"\n                                     [emit]=\"lb.widgets['aw-related-entities'].emit\">\n                    </n7-item-preview>\n                    <!-- Relation -->\n                    <div class=\"aw-item-preview-relation\"\n                         *ngIf=\"preview.relation?.value\">\n                        <p class=\"aw-item-preview-relation__description\">Relazione con\n                            <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>:\n                            <span class=\"aw-item-preview-relation__value\"> {{preview.relation.value}}</span>\n                        </p>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </section>\n\n    <!-- OGGETTI CULTURALI SIMILI -->\n    <section *ngIf=\"lb.dataSource.hasSimilarItems\"\n             id=\"related-item-container\"\n             class=\"aw-scheda__section aw-scheda__related\">\n        <div class=\"aw-scheda__inner-title\">\n            {{lb.dataSource.similarItemsSectionTitle}}\n        </div>\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                <div class=\"aw-item-preview-wrapper\">\n                    <n7-item-preview [data]=\"preview\"\n                                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </div> \n            </ng-container>\n        </div>\n    </section>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        Title,
        CommunicationService])
], AwSchedaLayoutComponent);

const AwSearchLayoutConfig = {
    layoutId: 'aw-search-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: AwFacetsWrapperDS, eventHandler: AwFacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwSearchLayoutDS,
    layoutEH: AwSearchLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwSearchLayoutComponent = class AwSearchLayoutComponent extends AbstractLayout {
    constructor(configuration, layoutsConfiguration, mainState, communication, search, route) {
        super(layoutsConfiguration.get('AwSearchLayoutConfig') || AwSearchLayoutConfig);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.route = route;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            communication: this.communication,
            search: this.search,
            route: this.route,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwSearchLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: CommunicationService },
    { type: AwSearchService },
    { type: ActivatedRoute }
];
AwSearchLayoutComponent = __decorate([
    Component({
        selector: 'aw-search-layout',
        template: "<div class=\"aw-search n7-side-auto-padding\"\n     id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>\n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper sticky-parent\">\n        <!-- Left sidebar: facets -->\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\n             class=\"aw-search__sidebar-loading sticky-target\">\n            <div class=\"aw-search__facets-loading\">\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'search-placeholder-facet-input'\n                    }, {\n                        classes: 'search-placeholder-facet-check'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }]\n                }\">\n                </n7-content-placeholder>\n            </div>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\n             class=\"aw-search__sidebar sticky-target\"\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <div class=\"aw-search__facets\">\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </aw-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\n                        class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>\n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\"\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n                            id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\n                                [value]=\"option.value\"\n                                [selected]=\"option.selected\"\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\n                            {{ option.label }}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- Search details -->\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\n                 class=\"aw-search__results-wrapper-loading\">\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\n                                        [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n            </div>\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\n                 class=\"aw-search__results-wrapper\">\n                 <div class=\"aw-item-preview-list\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <div class=\"aw-item-preview-wrapper\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\"\n                                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </div>\n                    </ng-container>\n                </div>\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n                    <div class=\"aw-search__fallback\">\n                        <p class=\"aw-search__fallback-string\">\n                            {{ lb.dataSource.fallback }}\n                        </p>\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\n                                class=\"n7-btn aw-search__fallback-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\n                            Resetta la ricerca\n                        </button>\n                    </div>\n                </ng-container>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        CommunicationService,
        AwSearchService,
        ActivatedRoute])
], AwSearchLayoutComponent);

class AwTimelineLayoutDS extends LayoutDataSource {
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Timeline');
        this.one('aw-scheda-inner-title').update({
            title: {
                main: {
                    text: '<strong>68</strong> Oggetti culturali collegati a "V Congresso mondiale di sociologia, Washington D.C. (1962)"'
                }
            }
        });
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: 1,
            // pagination: true,
            // paginationParams: this._getPaginationParams(),
            // dynamicPagination: {
            //   total: totalCount,
            // },
            size: 10,
        });
        this.one('aw-linked-objects').update(MAP_RESULTS);
    }
}

class AwTimelineLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-timeline-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    break;
                case 'aw-timeline-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
    }
}

const AwTimelineLayoutConfig = {
    layoutId: 'aw-timeline-layout',
    widgets: [
        { id: 'aw-timeline', hasStaticData: true },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' }
    ],
    layoutDS: AwTimelineLayoutDS,
    layoutEH: AwTimelineLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwTimelineLayoutComponent = class AwTimelineLayoutComponent extends AbstractLayout {
    constructor(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwTimelineLayoutConfig') || AwTimelineLayoutConfig);
        this.router = router;
        this.route = route;
        this.location = location;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwTimelineLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Location },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwTimelineLayoutComponent = __decorate([
    Component({
        selector: 'aw-timeline-layout',
        template: "<div class=\"aw-map\"\n     id=\"map-layout\"\n     *ngIf=\"lb.dataSource\">\n  <n7-inner-title [data]=\"{\n               title: {\n                    main: {\n                         text: 'Gli eventi dell\\'archivio'\n                    }\n               }\n          }\">\n  </n7-inner-title>\n  <n7-timeline [data]=\"lb.widgets['aw-timeline'].ds.out$ | async\"></n7-timeline>\n  <ng-container *ngTemplateOutlet=\"results\"></ng-container>\n</div>\n\n<ng-template #results>\n  <!-- RESULT LIST -->\n  <ng-container *ngIf=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n    <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n    </n7-inner-title>\n  </ng-container>\n\n  <ng-container *ngIf=\"lb.widgets['aw-linked-objects'].ds.out$ | async\">\n    <div *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n      <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n      </n7-smart-breadcrumbs>\n      <n7-item-preview [data]=\"preview\"\n                       [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n      </n7-item-preview>\n    </div>\n  </ng-container>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Location,
        ConfigurationService,
        LayoutsConfigurationService,
        CommunicationService,
        MainStateService,
        Title])
], AwTimelineLayoutComponent);

//---------------------------
let ChartTippyComponent = class ChartTippyComponent {
    onClick(type, payload) {
        this.emit(type, payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartTippyComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartTippyComponent.prototype, "emit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartTippyComponent.prototype, "anchorData", void 0);
ChartTippyComponent = __decorate([
    Component({
        selector: 'aw-chart-tippy',
        template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n\n      <div *ngIf=\"d.relation.value\" class=\"aw-item-preview-relation\">\n        <p class=\"aw-item-preview-relation__description\">Relazione con \n          <span class=\"aw-item-preview-relation__key\">{{d.relation.key}}</span>: \n          <span class=\"aw-item-preview-relation__label\"> {{d.relation.value}}</span>\n        </p>\n      </div>\n\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
    })
], ChartTippyComponent);

//---------------------------
let BubbleChartWrapperComponent = class BubbleChartWrapperComponent {
    onClick(type, payload) {
        this.emit(type, payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BubbleChartWrapperComponent.prototype, "emit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BubbleChartWrapperComponent.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BubbleChartWrapperComponent.prototype, "buttons", void 0);
BubbleChartWrapperComponent = __decorate([
    Component({
        selector: 'aw-bubble-chart-wrapper',
        template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>"
    })
], BubbleChartWrapperComponent);

//---------------------------
let SmartBreadcrumbsComponent = class SmartBreadcrumbsComponent {
    constructor() {
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = (node, content) => tippy(node, {
            content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body,
        });
        this.getWidths = (parent, child) => {
            const pw = parent.nativeElement.clientWidth;
            const cw = child.nativeElement.clientWidth;
            const pp = this.getSidePadding(parent.nativeElement);
            return { parentWidth: pw - pp, childWidth: cw };
        };
        this.getSidePadding = (node) => (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0]));
    }
    ngAfterViewInit() {
        if (this.bcdiv && this.bcol) {
            let { parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol);
            const liArray = this.bcol.nativeElement.children;
            if (parentWidth === childWidth) { // collapse condition
                let i = 1; // Skip element in position 0
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    const tippyData = document.createElement('ol'); // initialize tippy data
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    i += 1;
                    // update widths
                    ({ parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol));
                }
            }
        }
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartBreadcrumbsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartBreadcrumbsComponent.prototype, "emit", void 0);
__decorate([
    ViewChild('bcol', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], SmartBreadcrumbsComponent.prototype, "bcol", void 0);
__decorate([
    ViewChild('bcdiv', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], SmartBreadcrumbsComponent.prototype, "bcdiv", void 0);
SmartBreadcrumbsComponent = __decorate([
    Component({
        selector: 'n7-smart-breadcrumbs',
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"item.classes\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>"
    })
], SmartBreadcrumbsComponent);

var apolloConfig = {
    getLastPosts: {
        queryName: 'getLastPosts',
        queryBody: `
        {
          getLastPosts(__PARAMS__) {
            id
            title
          }
        }
      `,
    },
    getTree: {
        queryName: 'getTreeOfItems',
        queryBody: `
      {
        getTreeOfItems{
          label
          id
          img
          document_type
          document_classification
          branches {
            label
            id
            img
            document_type
            document_classification
            branches {
              label
              id
              img
              document_type
              document_classification
              branches {
                label
                id
                img
                document_type
                document_classification
                branches {
                  label
                  id
                  img
                  document_type
                  document_classification
                  branches {
                    label
                    id
                    img
                    document_type
                    document_classification
                    branches {
                      label
                      id
                      img
                      document_type
                      document_classification
                      branches {
                        label
                        id
                        img
                        document_type
                        document_classification
                        branches {
                          label
                          id
                          img
                          document_type
                          document_classification
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
    },
    globalFilter: {
        queryName: 'globalFilter',
        queryBody: `{
        globalFilter(__PARAMS__){
          entitiesData {
            entity {
                id
                label
                typeOfEntity
            } count
          }
          typeOfEntityData {
            type
            count
          }
          itemsPagination {
            totalCount
            items {
              thumbnail
              item {
                id
                label
                fields
                {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                }
                breadcrumbs {
                  label
                  link
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
          }
        }
        }`,
    },
    getEntityDetails: {
        queryName: 'getEntity',
        queryBody: `{
        getEntity(__PARAMS__){
          overviewTab
          label
          id
          typeOfEntity
          fields {
            ...
            on KeyValueField {
              key
              value
            }
            ... on
            KeyValueFieldGroup {
              label
              fields
              {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
          extraTab
          wikiTab {
            text
            url
          }
          relatedItems {
            thumbnail
            relation
            item {
              label
              id
              fields
              {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
              breadcrumbs {
                label
                link
              }
            }
            relatedTypesOfEntity {
              type
              count
            }
          }
          relatedEntities {
            entity {
                id
                label
                typeOfEntity
                relation
            }
            count
          }
        }
      }
      `,
    },
    getItem: {
        queryName: 'getItem',
        queryBody: `{
        getItem(__PARAMS__) {
          id
          label
          icon
          title
          subTitle
          image
          text
          fields {
            ...
            on KeyValueField {
              key
              value
            }
            ... on KeyValueFieldGroup {
              label
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
          relatedEntities {
            count
            entity{
              id
              label
              typeOfEntity
              relation
            }
          }
          relatedItems {
            thumbnail
            item {
              label
              id
              relatedTypesOfEntity {
                type
                count
              }
            }
          }
          breadcrumbs {
            label
            link
          }
        }
      }`,
    },
    getNode: {
        queryName: 'getNode',
        queryBody: `{
        getNode(__PARAMS__) {
          ... on Item {
            id
            label
            title
            subTitle
            image
            images
            text
            document_type
            fields {
              ...
              on KeyValueField {
                key
                value
              }
              ... on KeyValueFieldGroup {
                label
                fields {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                }
              }
            }
            relatedEntities {
                count
                entity{
                  id
                  label
                  typeOfEntity
                  relation
                }
            }
            relatedItems {
                thumbnail
                item {
                  label
                  id
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                    ... on KeyValueFieldGroup {
                      label
                      fields {
                        ...
                        on KeyValueField {
                          key
                          value
                        }
                      }
                    }
                  }
                  relatedTypesOfEntity {
                    type
                    count
                  }
                }
              }
            breadcrumbs {
              label
              link
            }
          }
          ... on Node {
            id
            label
            img
            document_type
            fields {
              ...
              on KeyValueField {
                key
                value
              }
              ... on KeyValueFieldGroup {
                label
                fields {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                }
              }
            }
            relatedEntities {
              count
              entity {
                id
                label
                typeOfEntity
                relation
              }
            }
          }
        }
      }`,
    },
    autoComplete: {
        queryName: 'autoComplete',
        queryBody: `{
        autoComplete(__PARAMS__){
          totalCount
          results {
            ... on EntityCountData {
              count
              entity {
                id
                label
                typeOfEntity
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
            ... on ItemListing {
              item {
                id
                label
                document_type
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    },
    search: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        totalCount
        results {
          order{
            type
            key
            direction
          }
          fields
          {
            id
            highlight
            limit
          }
          items {
            ... on Entity {
              id
              label
              typeOfEntity
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
              relatedEntities {
                  count
                  entity{
                    id
                    label
                    typeOfEntity
                    relation
                  }
              }
              relatedItems {
                  thumbnail
                  item {
                    label
                    id
                    fields {
                      ...
                      on KeyValueField {
                        key
                        value
                      }
                      ... on KeyValueFieldGroup {
                        label
                        fields {
                          ...
                          on KeyValueField {
                            key
                            value
                          }
                        }
                      }
                    }
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
            ... on Item {
              id
              label
              icon
              title
              subTitle
              image
              text
              relatedTypesOfEntity {
                type
                count
              }
              breadcrumbs {
                label
                link
              }
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    },
    facets: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        facets {
          id
          type
          operator
          limit
          order
          totalCount
          data {
            label
            value
            counter
            searchData {
              key
              value
            }
          }
        }
      }
    }`,
    },
    getMissingBubble: {
        queryName: 'getEntity',
        queryBody: `{
        getEntity(__PARAMS__){
          label
          id
          typeOfEntity
        }
      }`,
    },
};

let AwFacetsWrapperComponent = class AwFacetsWrapperComponent {
    headerEmit(eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facetheader', { eventType, eventPayload });
    }
    facetEmit(eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facet', { eventType, eventPayload });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AwFacetsWrapperComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AwFacetsWrapperComponent.prototype, "emit", void 0);
AwFacetsWrapperComponent = __decorate([
    Component({
        selector: 'aw-facets-wrapper',
        template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
    })
], AwFacetsWrapperComponent);

const COMPONENTS$1 = [
    AwEntitaLayoutComponent,
    AwGalleryLayoutComponent,
    AwHomeLayoutComponent,
    AwMapLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    AwTimelineLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    SmartBreadcrumbsComponent,
    AwFacetsWrapperComponent,
];
let N7BoilerplateAriannaWebModule = class N7BoilerplateAriannaWebModule {
    constructor(initStatus, config) {
        // add apollo config on app init
        // note: this is just for arianna* sites!
        initStatus.donePromise.then(() => {
            const communication = config.get('communication');
            const { defaultProvider } = communication;
            communication.providers[defaultProvider].config = apolloConfig;
            config.set('communication', communication);
        });
    }
};
N7BoilerplateAriannaWebModule.ctorParameters = () => [
    { type: ApplicationInitStatus },
    { type: ConfigurationService }
];
N7BoilerplateAriannaWebModule = __decorate([
    NgModule({
        declarations: COMPONENTS$1,
        imports: [
            CommonModule,
            RouterModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ],
        entryComponents: COMPONENTS$1,
        exports: COMPONENTS$1,
    }),
    __metadata("design:paramtypes", [ApplicationInitStatus,
        ConfigurationService])
], N7BoilerplateAriannaWebModule);

let DataWidgetWrapperComponent = class DataWidgetWrapperComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataWidgetWrapperComponent.prototype, "data", void 0);
DataWidgetWrapperComponent = __decorate([
    Component({
        selector: 'dv-data-widget-wrapper',
        template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\n    <ng-content></ng-content>\n</div>"
    })
], DataWidgetWrapperComponent);

let DatepickerWrapperComponent = class DatepickerWrapperComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    toggleDropDown(payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerWrapperComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerWrapperComponent.prototype, "emit", void 0);
DatepickerWrapperComponent = __decorate([
    Component({
        selector: 'dv-datepicker-wrapper',
        template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
    })
], DatepickerWrapperComponent);

class DvExampleLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.Items = [
            {
                text: 'Last week',
                payload: 'Last week',
            },
            {
                text: 'Last month',
                payload: 'Last month',
            },
            {
                text: 'Last year',
                payload: 'Last year',
            },
            {
                text: 'Select Date',
                // this payload key is use for visualise the datepicker.
                payload: 'ByDate',
            },
        ];
        this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        this.datePickerExternalData = {
            select: {
                id: 'dv-select',
                label: 'Last week',
                items: this.Items,
            },
            datepicker: {
                id: 'datepicker',
                libOptions: this.datepickerOptions,
            },
        };
    }
    onInit() {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    }
}

/* eslint-disable */
class DvExampleLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            this.dataSource.onInit();
        });
    }
}

class DvDataWidgetDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return null;
    }
}

class DvDatepickerWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this._datepicker = null;
    }
    transform(data) {
        if (!data) {
            return null;
        }
        return {
            // set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || 'n7-icon-angle-down',
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            // set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (datepicker) => { this._datepicker = datepicker; },
                },
            },
        };
    }
    openDatepicker() {
        setTimeout(() => this._datepicker.open());
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    }
    closeDatepicker() {
        setTimeout(() => this._datepicker.close());
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    }
    setLabel(payload) {
        this.output.select.label = payload;
        this.output.datepicker.hidden = true;
    }
    toggleDropDown() {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    }
}

class DvGraphDS extends DataSource {
    transform() {
        return {
            containerId: 'test-Chart',
            libOptions: {
                chart: {
                    height: 550,
                    width: 1500,
                    type: 'area',
                    toolbar: { show: true },
                },
                dataLabels: { enabled: false },
                colors: ['rgba(15,200,255)'],
                fill: {
                    colors: ['#0fc8ff'],
                    gradient: { opacityFrom: 0.5, opacityTo: 0.1 },
                },
                stroke: { curve: 'straight', width: [2, 1] },
                series: [
                    {
                        name: 'Reddish value',
                        data: [['2019-08-01', '770.17'], ['2019-08-02', '645.03'],
                            ['2019-08-03', '709.32'], ['2019-08-04', '708.11'],
                            ['2019-08-05', '706.59'], ['2019-08-06', '607.28'],
                            ['2019-08-07', '494.59'], ['2019-08-08', '636.81'],
                            ['2019-08-09', '709.04'], ['2019-08-10', '717.31'],
                            ['2019-08-11', '805.61'], ['2019-08-12', '758.60'],
                            ['2019-08-13', '612.82'], ['2019-08-14', '608.90'],
                            ['2019-08-15', '734.68'], ['2019-08-16', '838.54'],
                            ['2019-08-17', '692.88']],
                    },
                ],
                grid: {
                    borderColor: '#e7e7e7',
                    strokeDashArray: 3,
                    xaxis: { lines: { show: true } },
                },
                markers: { size: 3, hover: { size: 6 } },
                xaxis: {
                    axisBorder: { show: true, color: '#f4f6fc' },
                    labels: {},
                    type: 'datetime',
                    tickAmount: 6,
                },
                yaxis: [
                    {
                        show: true,
                        showAlways: false,
                        opposite: false,
                        reversed: false,
                        logarithmic: false,
                        forceNiceScale: false,
                        floating: false,
                        labels: {
                            show: true,
                            minWidth: 0,
                            maxWidth: 160,
                            offsetX: 0,
                            offsetY: 0,
                            rotate: 0,
                            padding: 20,
                            style: { colors: [], fontSize: '11px', cssClass: '' },
                        },
                        axisBorder: {
                            show: true, color: '#f4f6fc', offsetX: 0, offsetY: 0,
                        },
                        axisTicks: {
                            show: false, color: '#78909C', width: 6, offsetX: 0, offsetY: 0,
                        },
                        title: {
                            text: 'P Totale °C', rotate: 90, offsetY: 0, offsetX: 0, style: { fontSize: '11px', cssClass: '' },
                        },
                        tooltip: { enabled: false, offsetX: 0 },
                        crosshairs: { show: true, position: 'front', stroke: { color: '#b6b6b6', width: 1, dashArray: 0 } },
                    },
                ],
                legend: { show: true },
                tooltip: {},
                annotations: { yaxis: [], xaxis: [], points: [] },
            },
        };
    }
}

class DvInnerTitleDS extends DataSource {
    transform() {
        return {
            title: {
                main: {
                    text: 'Dipendenti',
                    classes: 'n7-main-widget-title',
                },
                secondary: {
                    text: 'Dipendeti al 10/10/10',
                    classes: 'n7-secondary-widget-title',
                },
            },
        };
    }
}

class DvWidgetDS extends DataSource {
    transform() {
        return DATA_WIDGET_MOCK;
    }
}

// Data Widget

var DS$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DvDataWidgetDS: DvDataWidgetDS,
    DvDatepickerWrapperDS: DvDatepickerWrapperDS,
    DvGraphDS: DvGraphDS,
    DvInnerTitleDS: DvInnerTitleDS,
    DvWidgetDS: DvWidgetDS
});

class DvDatepickerWrapperEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'dv-datepicker-wrapper.click':
                    this.dataSource.setLabel(payload);
                    if (payload === 'ByDate') {
                        this.dataSource.openDatepicker();
                    }
                    else {
                        this.dataSource.closeDatepicker();
                    }
                    break;
                case 'dv-datepicker-wrapper.toggle':
                    this.dataSource.toggleDropDown();
                    break;
                case 'dv-datepicker-wrapper.change':
                    this.dataSource.setLabel(payload.dateStr);
                    break;
                default:
                    break;
            }
        });
    }
}

// Data Widget

var EH$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DvDatepickerWrapperEH: DvDatepickerWrapperEH
});

const DvExampleLayoutConfig = {
    layoutId: 'dv-example-layout',
    /**
     * Array of components you want to use
     * in this leyout
    */
    widgets: [
        { id: 'dv-inner-title', hasStaticData: true },
        { id: 'dv-widget', hasStaticData: true },
        { id: 'dv-datepicker-wrapper' },
        { id: 'dv-graph', hasStaticData: true },
    ],
    layoutDS: DvExampleLayoutDS,
    layoutEH: DvExampleLayoutEH,
    widgetsDataSources: DS$2,
    widgetsEventHandlers: EH$2,
    options: {
    // TODO
    },
};

let DvExampleLayoutComponent = class DvExampleLayoutComponent extends AbstractLayout {
    constructor() {
        super(DvExampleLayoutConfig);
    }
    initPayload() {
        return {};
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
DvExampleLayoutComponent = __decorate([
    Component({
        selector: 'dv-example-layout',
        template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n\n    <!-- Data widget wrapper with not-fixed height, two rows -->\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, two rows -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                Row content\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, one row -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n    \n    <dv-datepicker-wrapper \n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\n    </dv-datepicker-wrapper>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], DvExampleLayoutComponent);

const COMPONENTS$2 = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
    DvExampleLayoutComponent,
];
let N7BoilerplateDataVizModule = class N7BoilerplateDataVizModule {
};
N7BoilerplateDataVizModule = __decorate([
    NgModule({
        declarations: COMPONENTS$2,
        imports: [
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ],
        providers: [],
        exports: COMPONENTS$2,
    })
], N7BoilerplateDataVizModule);

let EscapeHtmlPipe = class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
};
EscapeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
EscapeHtmlPipe = __decorate([
    Pipe({ name: 'keepHtml', pure: false }),
    __metadata("design:paramtypes", [DomSanitizer])
], EscapeHtmlPipe);

class MrGlossaryLayoutDS extends LayoutDataSource$1 {
    // private communication;
    onInit() {
        // this.communication = payload.communication;
    }
}

class MrGlossaryLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-glossary-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        /*
          this.outerEvents$.subscribe(({ type, payload }) => {
          });
        */
    }
}

class MrBreadcrumbsDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        const bcMock = {
            items: [{
                    label: 'Home',
                    anchor: { href: '/home' }
                }, {
                    label: 'Opere',
                    anchor: { href: '/opere' }
                }, {
                    label: 'Opere giovanili',
                    anchor: { href: '/opere-giovanili' }
                }, {
                    label: 'Canzoniere',
                    anchor: { href: '/canzoniere' }
                }, {
                    label: 'Canzoniere (Rerum vulgarium fragmenta)',
                    anchor: { href: '/canzoniere/rerum-vulgarium-fragmenta' }
                }]
        };
        return bcMock;
    }
}

const extractQueryParams = (queryParams) => {
    const params = {};
    queryParams.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
};
const ɵ0$1 = extractQueryParams;
var linksHelper = {
    getQueryParams(href) {
        const queryParams = href.split('?')[1] ? extractQueryParams(href.split('?')[1]) : null;
        return this.isExternalLink(href) ? null : queryParams;
    },
    getRouterLink(href) {
        return this.isExternalLink(href) ? href : href.split('?')[0];
    },
    isExternalLink(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
};

class MrCollectionDS extends DataSource {
    transform(data) {
        if (data === undefined) {
            return null;
        }
        const { header, items } = data;
        const { classes } = this.options;
        if ((header || {}).button) {
            const { link, text } = header.button;
            header.button = [{
                    text,
                    anchor: {
                        href: linksHelper.getRouterLink(link),
                        queryParams: linksHelper.getQueryParams(link)
                    }
                }];
        }
        return {
            header: {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: header.subtitle ? {
                        text: header.subtitle,
                    } : null
                },
                actions: {
                    buttons: header.button
                }
            },
            items: items.map((item) => (Object.assign(Object.assign({}, item), { anchor: {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link)
                }, classes: classes || '' })))
        };
    }
}

class MrFiltersDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        return data;
    }
}

class MrHeroDS extends DataSource {
    transform(data) {
        const { classes, background } = this.options;
        const { text, image, title, button } = data;
        const backgroundImage = background ? image : null;
        return {
            text,
            title,
            classes,
            backgroundImage,
            image: !backgroundImage ? image : null,
            button: button && button.link ? Object.assign(Object.assign({}, button), { anchor: {
                    href: linksHelper.getRouterLink(button.link),
                    queryParams: linksHelper.getQueryParams(button.link)
                } }) : null
        };
    }
}

class MrImageViewerDS extends DataSource {
    transform(data) {
        const { images, thumbs } = data;
        return {
            images,
            thumbs,
            viewerId: this.id,
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
                /* SHOW BUTTONS */
                showRotationControl: false,
                showSequenceControl: true,
                showHomeControl: true,
                showZoomControl: true,
                /* SEQUENCE */
                sequenceMode: true,
                showReferenceStrip: true,
                navigationControlAnchor: 'TOP_RIGHT',
            },
            _setViewer(viewer) {
                this.viewer = viewer;
            }
        };
    }
}

class MrInfoBoxDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrInnerTitleDS extends DataSource {
    transform(data) {
        const { title, description, button } = data;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: description,
                    classes: 'italic'
                }
            },
            actions: button && button.link ? {
                buttons: [
                    {
                        anchor: {
                            href: linksHelper.getRouterLink(button.link),
                            queryParams: linksHelper.getQueryParams(button.link)
                        },
                        text: button.text,
                        classes: 'n7-btn-cta'
                    }
                ]
            } : null
        };
    }
}

class MrItemPreviewDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrItemPreviewsDS extends DataSource {
    constructor() {
        super(...arguments);
        // ===== MOCK DATA =====
        this.mock = {
            resources: [
                {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                    metadata: [{
                            classes: 'metadata',
                            items: [
                                { label: 'Artista', value: 'Massimo Berruti' },
                                { label: 'Tecnica', value: 'Fotografia' },
                                { label: 'Galleria', value: 'Galleria Tonelli' },
                            ]
                        }]
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/sLu7u2v.png',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                    metadata: [{
                            classes: 'metadata',
                            items: [
                                { label: 'Artista', value: 'Massimo Berruti' },
                                { label: 'Tecnica', value: 'Fotografia' },
                                { label: 'Galleria', value: 'Galleria Tonelli' },
                            ]
                        }]
                }, {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }
            ],
            collections: [
                {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/sLu7u2v.png',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                }
            ],
            search: [
                {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'World Map based on Matteo Ricci 1850',
                    text: 'Complete Map fo all mountains and seas',
                }, {
                    image: '',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                }, {
                    image: '',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }, {
                    image: '',
                    title: 'Matteo Ricci\'s way from Macau to Beijing',
                    text: 'A japanese colored version',
                }, {
                    image: '',
                    title: 'The 400-year-old map that shows China as the centre of the world',
                    text: 'A japanese colored version',
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'World Map based on Matteo Ricci 1850',
                    text: 'Complete Map fo all mountains and seas',
                }, {
                    image: '',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                }, {
                    image: '',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }, {
                    image: '',
                    title: 'Matteo Ricci\'s way from Macau to Beijing',
                    text: 'A japanese colored version',
                }, {
                    image: '',
                    title: 'The 400-year-old map that shows China as the centre of the world',
                    text: 'A japanese colored version',
                }
            ]
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        return this.mock[this.options.source];
    }
}

class MrMetadataDS extends DataSource {
    constructor() {
        super(...arguments);
        /** Test if a string is a valid URL */
        this.isUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        /** Turn a string into an anchor element */
        this.toUrl = (string) => `<a href="${string}" target="_blank">${string}<a>`;
    }
    transform(data) {
        const { hideLabels } = this.options;
        const group = data.group.map((d) => {
            let { items } = d;
            // Convert URLs to anchor elements and remove labels if necessary
            items = d.items.map(({ label, value }) => {
                if (this.isUrl.test(value)) {
                    return ({ label: hideLabels ? '' : label, value: this.toUrl(value) });
                }
                return ({ label: hideLabels ? '' : label, value });
            });
            return { items };
        });
        // Overwrite the metadata group
        data.group = group;
        return data;
    }
}

class MrNavDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        const items = [];
        data.nav.forEach((el) => {
            items.push({
                text: el.title,
                anchor: {
                    href: `http://localhost:4200/mr/static/${el.id}`,
                    target: '_blank',
                    payload: el.id
                }
            });
        });
        return {
            items,
        };
    }
}

class MrTextViewerDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrSearchPageTitleDS extends DataSource {
    transform() {
        const { title } = this.options.config;
        return {
            title: {
                main: {
                    text: title
                }
            }
        };
    }
}

class MrSearchResultsTitleDS extends DataSource {
    transform(data) {
        const { totalResultsText, sort } = this.options.config;
        const { total_count: totalCount, sort: currentSort } = data;
        const mainText = `<strong>${totalCount || 0}</strong> ${totalResultsText[totalCount === 1 ? 1 : 0]}`;
        return {
            title: {
                main: {
                    text: mainText
                }
            },
            actions: {
                select: {
                    label: sort.label,
                    options: sort.options.map(({ label, value, selected, disabled }) => ({
                        value,
                        disabled,
                        selected: currentSort ? value === currentSort : selected,
                        text: label
                    })),
                    payload: 'sort'
                }
            }
        };
    }
    OnInputQueryChange(value) {
        const { sort } = this.options.config;
        sort.options.forEach((option) => {
            if (option.value === '_score') {
                option.disabled = !value;
            }
        });
        this.update(this.input);
    }
}

class MrSearchResultsDS extends DataSource {
    transform(data) {
        const { results } = data;
        const { itemPreview } = this.options.config;
        const classes = itemPreview && itemPreview.classes ? itemPreview.classes : '';
        return results.map((item) => (Object.assign(Object.assign({}, item), { classes, anchor: {
                href: linksHelper.getRouterLink(item.link),
                queryParams: linksHelper.getQueryParams(item.link),
                target: '_blank'
            } })));
    }
}

class MrSearchTagsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFilters = false;
    }
    transform(data) {
        const { state, linksResponse, facetsConfig } = data;
        const { inputs: linkInputs } = linksResponse;
        const tags = [];
        // inputs config
        facetsConfig.sections.forEach(({ inputs }) => {
            inputs
                .filter(({ queryParam }) => queryParam)
                .forEach(({ id }) => {
                if (state[id]) {
                    const values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values.forEach((value) => {
                        let text = value;
                        if (linkInputs[id]) {
                            text = linkInputs[id].find(({ payload }) => payload === value).text;
                        }
                        tags.push({
                            text,
                            icon: 'n7-icon-close',
                            payload: {
                                id,
                                value
                            }
                        });
                    });
                }
            });
        });
        this.hasFilters = !!tags.length;
        return tags;
    }
}

var DS$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MrBreadcrumbsDS: MrBreadcrumbsDS,
    MrCollectionDS: MrCollectionDS,
    MrFiltersDS: MrFiltersDS,
    MrHeroDS: MrHeroDS,
    MrImageViewerDS: MrImageViewerDS,
    MrInfoBoxDS: MrInfoBoxDS,
    MrInnerTitleDS: MrInnerTitleDS,
    MrItemPreviewDS: MrItemPreviewDS,
    MrItemPreviewsDS: MrItemPreviewsDS,
    MrMetadataDS: MrMetadataDS,
    MrNavDS: MrNavDS,
    MrTextViewerDS: MrTextViewerDS,
    MrSearchPageTitleDS: MrSearchPageTitleDS,
    MrSearchResultsTitleDS: MrSearchResultsTitleDS,
    MrSearchResultsDS: MrSearchResultsDS,
    MrSearchTagsDS: MrSearchTagsDS
});

class MrDummyEH extends EventHandler {
    listen() {
        // TODO
    }
}

class MrFiltersEH extends EventHandler {
    listen() {
        // TODO
    }
}

class MrNavEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'dv-nav.click':
                    this.emitOuter('navclick', payload);
                    break;
                default:
                    console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}

class MrSearchTagsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-tags.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class MrSearchResultsTitleEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-results-title.change':
                    this.emitOuter('change', payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-layout.inputquerychange':
                    this.dataSource.OnInputQueryChange(payload);
                    break;
                default:
                    break;
            }
        });
    }
}

var EH$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MrDummyEH: MrDummyEH,
    MrFiltersEH: MrFiltersEH,
    MrNavEH: MrNavEH,
    MrSearchTagsEH: MrSearchTagsEH,
    MrSearchResultsTitleEH: MrSearchResultsTitleEH
});

const MrGlossaryLayoutConfig = {
    layoutId: 'n7-glossary-layout',
    widgets: [
    // {
    //   id: 'title',          ← Insert a component here.
    //   hasStaticData: true,  ← Renders the widget before this.one().update is called.
    // }
    ],
    layoutDS: MrGlossaryLayoutDS,
    layoutEH: MrGlossaryLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrGlossaryLayoutComponent = class MrGlossaryLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('MrGlossaryLayoutConfig') || MrGlossaryLayoutConfig);
    }
    initPayload() {
        return {
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrGlossaryLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService }
];
MrGlossaryLayoutComponent = __decorate([
    Component({
        selector: 'mr-glossary-layout',
        template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Glossary layout!\n</div>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService])
], MrGlossaryLayoutComponent);

var LayoutState;
(function (LayoutState) {
    LayoutState["IDLE"] = "IDLE";
    LayoutState["LOADING"] = "LOADING";
    LayoutState["SUCCESS"] = "SUCCESS";
    LayoutState["EMPTY"] = "EMPTY";
    LayoutState["ERROR"] = "ERROR";
})(LayoutState || (LayoutState = {}));
let MrLayoutStateService = class MrLayoutStateService {
    constructor() {
        this.stateContainers = {};
    }
    add(id) {
        const ids = Array.isArray(id) ? id : [id];
        ids.forEach((key) => {
            this.stateContainers[key] = new ReplaySubject();
            // initial state
            this.stateContainers[key].next(LayoutState.IDLE);
        });
    }
    get$(id) {
        if (!this.stateContainers[id]) {
            throw Error(`Layout state id '${id}' does not exists`);
        }
        return this.stateContainers[id];
    }
    set(id, newState) {
        if (!this.stateContainers[id]) {
            throw Error(`Layout state id '${id}' does not exists`);
        }
        this.stateContainers[id].next(newState);
    }
};
MrLayoutStateService = __decorate([
    Injectable()
], MrLayoutStateService);

class MrHomeLayoutDS extends LayoutDataSource {
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.layoutState = payload.layoutState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        this.doRequest();
        // update head title
        this.updateHeadTitle();
    }
    doRequest() {
        const { sections } = this.pageConfig;
        if (!isEmpty(sections)) {
            this.layoutState.set('content', LayoutState.LOADING);
            this.communication.request$('home', {
                method: 'POST',
                params: sections.map(({ id }) => id),
                onError: (err) => {
                    console.warn(`Error loading ${this.configId} sections`, err.message);
                    this.layoutState.set('content', LayoutState.ERROR);
                }
            }).subscribe((response) => {
                this.layoutState.set('content', LayoutState.SUCCESS);
                this.initSections(response);
            });
        }
        else {
            console.warn(`There are no sections configured for ${this.configId} layout`);
        }
    }
    initSections(response) {
        const { sections } = this.pageConfig;
        if (sections) {
            sections.forEach(({ id }) => {
                const widgetDataSource = this.getWidgetDataSource(id);
                const responseData = response[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseData) {
                    this.one(id).update(responseData);
                }
            });
        }
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    }
}

class MrHomeLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-home-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                default:
                    break;
            }
        });
    }
}

const MrHomeLayoutConfig = {
    layoutId: 'mr-home-layout',
    widgets: [],
    layoutDS: MrHomeLayoutDS,
    layoutEH: MrHomeLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    options: {
    // TODO
    },
};

class MrSliderDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrSliderEH extends EventHandler {
    listen() {
        // this.innerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     case `${this.dataSource.id}.<event-type>`:
        //       // TODO
        //       break;
        //     default:
        //       break;
        //   }
        // });
    }
}

class MrCollectionEH extends EventHandler {
    listen() {
        // this.innerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     case `${this.dataSource.id}.<event-type>`:
        //       // TODO
        //       break;
        //     default:
        //       break;
        //   }
        // });
    }
}

class MrHeroEH extends EventHandler {
    listen() {
        // this.innerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     case `${this.dataSource.id}.<event-type>`:
        //       // TODO
        //       break;
        //     default:
        //       break;
        //   }
        // });
    }
}

const DATASOURCE_MAP = {
    slider: MrSliderDS,
    collection: MrCollectionDS,
    hero: MrHeroDS,
};
const EVENTHANDLER_MAP = {
    slider: MrSliderEH,
    collection: MrCollectionEH,
    hero: MrHeroEH,
};
let MrHomeLayoutComponent = class MrHomeLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrHomeLayoutConfig') || MrHomeLayoutConfig);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            mainState: this.mainState,
            configuration: this.configuration,
            communication: this.communication,
            layoutState: this.layoutState,
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            this.layoutState.add('content');
            this.loadWidgets();
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const homeConfig = this.configuration.get(this.configId) || {};
        const { sections } = homeConfig;
        this.widgets = [];
        if (sections) {
            sections.forEach(({ id, type, options }) => {
                this.widgets.push({
                    id,
                    options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            });
        }
    }
};
MrHomeLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
MrHomeLayoutComponent = __decorate([
    Component({
        selector: 'mr-home-layout',
        template: "<div class=\"mr-home mr-layout\" *ngIf=\"lb.dataSource\">\n    <!-- HOME CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            loading...\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            error!\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\n                <ng-container [ngSwitch]=\"section.type\">\n        \n                    <!-- SLIDER -->\n                    <ng-container *ngSwitchCase=\"'slider'\">\n                        <n7-carousel \n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-carousel> \n                    </ng-container>\n        \n                    <!-- COLLECTION -->\n                    <ng-container *ngSwitchCase=\"'collection'\">\n                        <div class=\"mr-layout__maxwidth mr-items-preview\">\n                            <n7-inner-title \n                            [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n                            </n7-inner-title>\n                            <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview\n                                *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                                [data]=\"item\"\n                                [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n        \n                    <!-- HERO -->\n                    <ng-container *ngSwitchCase=\"'hero'\">\n                        <n7-hero \n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-hero> \n                    </ng-container>\n                \n                </ng-container>\n            </section>\n        </ng-container>\n\n    </ng-container>\n</div>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrHomeLayoutComponent);

class MrResourceLayoutDS extends LayoutDataSource {
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.tabConfig = this.configuration.get('tabs')[this.pageConfig.tabs];
    }
    /** Request the configured widgets data */
    pageRequest$(id, onError) {
        const { top, content } = this.pageConfig.sections;
        const sections = top.concat(content);
        return this.communication.request$('resource', {
            onError,
            method: 'POST',
            params: {
                id,
                type: this.pageConfig.type,
                sections: sections.map((s) => s.id),
            }
        });
    }
    handleResponse(response) {
        this.initSections(response);
        this.updateHeadTitle(response);
    }
    /** Load all the configured widgets */
    initSections(response) {
        const { top, content } = this.pageConfig.sections;
        const sections = top.concat(content);
        sections.forEach(({ id }) => {
            const widgetDataSource = this.getWidgetDataSource(id);
            if (!widgetDataSource)
                return;
            const responseSection = response.sections[id];
            // set id
            widgetDataSource.id = id;
            // update data
            if (responseSection) {
                this.one(id).update(responseSection);
            }
        });
    }
    updateHeadTitle({ title: resourceTitle }) {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, pageTitle, resourceTitle].join(' > '));
    }
}

class MrResourceLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-resource-layout.init':
                    {
                        this.route = payload.route;
                        const { slug, tab } = this.route.snapshot.params;
                        this.dataSource.tab = tab;
                        this.dataSource.slug = slug;
                        this.layoutState = payload.layoutState;
                        this.dataSource.onInit(payload);
                        this.listenRoute();
                    }
                    break;
                case 'mr-resource-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), map((params) => params.get('id')), switchMap((id) => this.dataSource.pageRequest$(id, (err) => {
            console.warn(`Error loading resource layout for ${id}`, err.message);
            this.dataSource.id = id;
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
        });
    }
}

const MrResourceLayoutConfig = {
    layoutId: 'mr-resource-layout',
    widgets: [
        { id: 'mr-read-more' }
    ],
    layoutDS: MrResourceLayoutDS,
    layoutEH: MrResourceLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    options: {
    // TODO
    },
};

class MrImageViewerEH extends EventHandler {
    listen() {
        // this.innerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     case `${this.dataSource.id}.<event-type>`:
        //       // TODO
        //       break;
        //     default:
        //       break;
        //   }
        // });
    }
}

const ɵ0$2 = (d) => d;
const DATASOURCE_MAP$1 = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    tabs: ɵ0$2
};
const EVENTHANDLER_MAP$1 = {
    viewer: MrImageViewerEH,
};
let MrResourceLayoutComponent = class MrResourceLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, layoutState) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || MrResourceLayoutConfig);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            options: this.config.options || {},
            route: this.route
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.layoutState.add('content');
            this.configId = data.configId;
            this.loadWidgets();
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const { top, content } = this.configuration.get(this.configId).sections;
        const sections = top.concat(content);
        this.widgets = [];
        if (sections) {
            sections.forEach(({ id, type, options }) => {
                this.widgets.push({
                    id,
                    options,
                    dataSource: DATASOURCE_MAP$1[type],
                    eventHandler: EVENTHANDLER_MAP$1[type]
                });
            });
        }
    }
};
MrResourceLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: ActivatedRoute },
    { type: MrLayoutStateService }
];
MrResourceLayoutComponent = __decorate([
    Component({
        selector: 'mr-resource-layout',
        template: "<div class=\"mr-resource mr-layout\"\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\">\n  <!-- RESOURCE LAYOUT CONTENT -->\n  <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n    <!-- loading -->\n    <ng-container *ngSwitchCase=\"'LOADING'\">\n      loading...\n    </ng-container>\n\n    <!-- error -->\n    <ng-container *ngSwitchCase=\"'ERROR'\">\n      error!\n    </ng-container>\n\n    <!-- success -->\n    <ng-container *ngSwitchCase=\"'SUCCESS'\">\n      <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\n        <!-- Pass the list of blocks to render to the block template -->\n        <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n        <div class=\"mr-resource__content\">\n          <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>\n\n\n\n\n<ng-template #blocks\n             let-list>\n  <section *ngFor=\"let section of list\"\n           class=\"{{ 'mr-layout__' + section.type }}\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <!-- TABS -->\n      <!-- TABS -->\n      <ng-container *ngSwitchCase=\"'tabs'\">\n        <ng-container *ngFor=\"let tab of lb.dataSource.tabConfig\">\n          <n7-anchor-wrapper [data]=\"{ href: '/opera' + '/' + lb.dataSource.slug + '/' + tab.id }\">\n            <span class=\"n7-btn n7-btn-light\">{{tab.label}}</span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </ng-container>\n\n      <!-- INNER TITLE -->\n      <div class=\"mr-resource__title\">\n        <ng-container *ngSwitchCase=\"'title'\">\n          <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n        </ng-container>\n      </div>\n\n      <!-- IMAGE VIEWER -->\n      <ng-container *ngSwitchCase=\"'viewer'\">\n        <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-image-viewer>\n      </ng-container>\n\n      <!-- METADATA VIEWER -->\n      <ng-container *ngSwitchCase=\"'metadata'\">\n        <mr-read-more [data]=\"{ limit: 130 }\">\n          <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                              [emit]=\"lb.widgets[section.id].emit\">\n          </n7-metadata-viewer>\n        </mr-read-more>\n      </ng-container>\n\n      <!-- COLLECTION -->\n      <ng-container *ngSwitchCase=\"'collection'\">\n        <div class=\"mr-layout__maxwidth mr-items-preview\">\n          <n7-inner-title [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n          <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n            <n7-item-preview *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                             [data]=\"item\"\n                             [emit]=\"lb.widgets[section.id].emit\">\n            </n7-item-preview>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- ITEM PREVIEW -->\n      <ng-container *ngSwitchCase=\"'preview'\">\n        <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-item-preview>\n      </ng-container>\n\n      <!-- TEXT VIEWER -->\n      <ng-container *ngSwitchCase=\"'text'\">\n        <div class=\"text-viewer__mock\">n7-text-viewer</div>\n      </ng-container>\n\n      <!-- INFO BOX -->\n      <ng-container *ngSwitchCase=\"'info'\">\n        <div class=\"info-box__mock\">info-box</div>\n      </ng-container>\n\n      <!-- BREADCRUMBS -->\n      <ng-container *ngSwitchCase=\"'breadcrumbs'\">\n        <n7-breadcrumbs [data]=\"{\n            items: [{\n              label: 'Home',\n              anchor: { href: '/home' }\n            }, {\n              label: 'Opere',\n              anchor: { href: '/opere' }\n            }, {\n              label: 'Opere giovanili',\n              anchor: { href: '/opere-giovanili' }\n            }, {\n              label: 'Canzoniere',\n              anchor: { href: '/canzoniere' }\n            }, {\n              label: 'Canzoniere (Rerum vulgarium fragmenta)',\n              anchor: { href: '/canzoniere/rerum-vulgarium-fragmenta' }\n            }]\n          }\">\n        </n7-breadcrumbs>\n      </ng-container>\n    </ng-container>\n  </section>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute,
        MrLayoutStateService])
], MrResourceLayoutComponent);

class SearchFacetsLayoutDS extends LayoutDataSource$1 {
    constructor() {
        super(...arguments);
        this.inputsDS = {};
    }
    onInit(payload) {
        this.searchService = payload.searchService;
        this.searchConfig = this.searchService.getConfig();
        this.facets = this.searchConfig.facets;
        this.initInputs();
    }
    initInputs() {
        // set components data
        this.facets.sections.forEach(({ header, inputs }) => {
            [header, ...inputs]
                .filter((input) => input)
                .forEach((input) => {
                // set id
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // caching DS for next updates
                this.inputsDS[input.id] = widgetDataSource;
                // first update
                widgetDataSource.update(input.data);
            });
        });
    }
    updateInputValue(id, newValue) {
        const ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
    }
    updateInputData(id, newData) {
        const ds = this.inputsDS[id];
        ds.update(Object.assign(Object.assign({}, ds.input), newData));
        // refresh selected
        ds.setValue(ds.value, true);
    }
    clearInput(id) {
        const ds = this.inputsDS[id];
        ds.clear();
        ds.setValue(ds.value, true);
    }
    clearInputs() {
        Object.keys(this.inputsDS).forEach((id) => {
            this.clearInput(id);
        });
    }
}

const hasValue = (value) => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
};
const ɵ0$3 = hasValue;
var searchHelper = {
    stateToQueryParams(state, schemas) {
        const queryParams = {};
        Object.keys(state).forEach((key) => {
            const value = state[key];
            const schema = schemas[key];
            const { multiple, valueType } = schema;
            if (hasValue(value)) {
                switch (valueType) {
                    case 'number':
                    case 'string':
                        queryParams[key] = multiple ? value.join(',') : value;
                        break;
                    case 'boolean':
                        queryParams[key] = multiple ? value.map((v) => +v).join(',') : +value;
                        break;
                    default:
                        break;
                }
            }
        });
        return queryParams;
    },
    queryParamsToState(queryParams, schemas) {
        const state = {};
        Object.keys(queryParams).forEach((key) => {
            const value = queryParams[key];
            const schema = schemas[key];
            const { multiple, valueType } = schema;
            if (hasValue(value)) {
                if (hasValue(value)) {
                    switch (valueType) {
                        case 'number':
                            state[key] = multiple ? value.split(',').map((v) => +v) : +value;
                            break;
                        case 'string':
                            state[key] = multiple ? value.split(',').map((v) => `${v}`) : `${value}`;
                            break;
                        case 'boolean':
                            state[key] = multiple ? value.split(',').map((v) => !!v) : !!value;
                            break;
                        default:
                            break;
                    }
                }
            }
        });
        return state;
    }
};

const INPUT_STATE_CONTEXT = 'input';
const FACET_STATE_CONTEXT = 'facet';
const SECTION_STATE_CONTEXT = 'section';
const RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
const FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
let MrSearchService = class MrSearchService {
    constructor(router, activatedRoute, communication) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.queryParamKeys = [];
        this.inputSchemas = {};
        this.contextState = {};
        this.state$ = {};
        this.beforeHook = {};
        this.getConfig = () => this.config;
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
        this.onRouteChange();
        this.onResultsLoading();
    }
    getState$(context, id) {
        const stateId = id ? `${context}.${id}` : context;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does'nt exists`);
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
    setState(context, id, newValue) {
        const stateId = `${context}.${id}`;
        if (!this.state$[stateId]) {
            throw Error(`Key "${stateId}" does'nt exists`);
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
            throw Error(`Key "${stateId}" does'nt exists`);
        }
        this.beforeHook[stateId] = hook;
    }
    reset() {
        // clear input states
        Object.keys(this.contextState[INPUT_STATE_CONTEXT]).forEach((id) => {
            this.setState(INPUT_STATE_CONTEXT, id, null);
        });
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
                .forEach(({ id, queryParam, schema }) => {
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
        this.activatedRoute.queryParams.pipe(
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
                        .forEach((inputId) => {
                        this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                    });
                }
                else {
                    Object.keys(inputContext)
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
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', params);
            return params;
        }), debounceTime(facets.delay || 1), map((params) => {
            params.facets = [];
            this.config.facets.sections.forEach(({ inputs }) => {
                inputs.filter(({ type }) => type === 'link')
                    .forEach(({ id }) => {
                    params.facets.push(id);
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
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
        });
        // update facet links
        this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe(({ inputs }) => {
            Object.keys(inputs).forEach((id) => {
                this.setState(FACET_STATE_CONTEXT, id, {
                    links: inputs[id]
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

class SearchFacetsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changed$ = {};
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-facets-layout.init':
                    this.searchService = payload.searchService;
                    // listeners
                    this.initChangedListener(this.searchService.getConfig());
                    this.initStateListener();
                    // init
                    this.dataSource.onInit(payload);
                    break;
                case 'mr-search-facets-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('change')) {
                this.changed$[payload.id].next(payload);
            }
        });
    }
    initChangedListener({ facets }) {
        facets.sections.forEach((section) => {
            const sources = [];
            if (section.header) {
                const { id, delay } = section.header;
                sources.push({ id, delay });
            }
            section.inputs.forEach(({ id, delay }) => {
                sources.push({ id, delay });
            });
            sources.forEach((source) => {
                this.changed$[source.id] = new Subject();
                this.changed$[source.id].pipe(debounceTime(source.delay || 1)).subscribe(({ id, value }) => {
                    this.searchService.setState(INPUT_STATE_CONTEXT, id, value);
                });
            });
        });
    }
    initStateListener() {
        // listener for input updates
        this.searchService.getState$(INPUT_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated])).subscribe(({ lastUpdated, state }) => {
            const newValue = state[lastUpdated];
            if (newValue === null) {
                this.dataSource.clearInput(lastUpdated);
            }
            else {
                this.dataSource.updateInputValue(lastUpdated, newValue);
            }
        });
        // listener for facet updates
        this.searchService.getState$(FACET_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated])).subscribe(({ lastUpdated, state }) => {
            const newData = state[lastUpdated];
            this.dataSource.updateInputData(lastUpdated, newData);
        });
        // listener for facet header updates
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
            .pipe(takeUntil(this.destroyed$)).subscribe(({ headers }) => {
            Object.keys(headers).forEach((id) => {
                this.dataSource.updateInputValue(id, headers[id]);
            });
        });
        // listener for section updates
        this.searchService.getState$(SECTION_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$)).subscribe(({ lastUpdated, state }) => {
            console.log('section', lastUpdated, state);
        });
    }
}

const SearchFacetsLayoutConfig = {
    layoutId: 'mr-search-facets-layout',
    widgets: [],
    layoutDS: SearchFacetsLayoutDS,
    layoutEH: SearchFacetsLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

class FacetTextDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign(Object.assign({}, this.input), { value }));
            // fix element update
            const el = document.getElementById(this.output.id);
            if (el) {
                el.value = value;
            }
        }
    }
    clear() {
        this.value = null;
    }
}

class FacetCheckboxDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            const { checkboxes } = this.input;
            const updatedCheckboxes = checkboxes.map((checkbox) => (Object.assign(Object.assign({}, checkbox), { checked: this.value.indexOf(checkbox.payload) !== -1 })));
            this.update(Object.assign(Object.assign({}, this.input), { checkboxes: updatedCheckboxes }));
        }
    }
    toggleValue({ inputPayload, value: isChecked }) {
        const exists = this.value.indexOf(inputPayload) !== -1;
        if (isChecked && !exists) {
            this.value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            this.value.splice(this.value.indexOf(inputPayload), 1);
        }
    }
    clear() {
        this.value = [];
    }
}

class FacetSelectDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            const { options } = this.input;
            const updatedOptions = options.map((option) => (Object.assign(Object.assign({}, option), { selected: value === option.value })));
            this.update(Object.assign(Object.assign({}, this.input), { options: updatedOptions }));
        }
    }
    clear() {
        this.value = null;
    }
}

const ACTIVE_CLASS$1 = 'is-active';
class FacetLinkDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = null;
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            const { links } = this.input;
            const updatedLinks = links.map((link) => (Object.assign(Object.assign({}, link), { classes: this.value === link.payload ? ACTIVE_CLASS$1 : '' })));
            this.update(Object.assign(Object.assign({}, this.input), { links: updatedLinks }));
        }
    }
    toggleValue(linkValue) {
        // update
        this.setValue(this.value !== linkValue ? linkValue : null, true);
    }
    clear() {
        this.value = null;
    }
}

const ICON_OPEN = 'n7-icon-angle-up';
const ICON_CLOSE = 'n7-icon-angle-down';
class FacetHeaderDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = () => this.value;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { iconRight: data.iconRight || ICON_OPEN });
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign(Object.assign({}, this.input), { additionalText: value }));
        }
    }
    toggle() {
        let { iconRight } = this.output;
        iconRight = iconRight === ICON_OPEN ? ICON_CLOSE : ICON_OPEN;
        this.update(Object.assign(Object.assign({}, this.input), { iconRight }));
    }
    isOpen() {
        return this.output.iconRight === ICON_OPEN;
    }
    clear() {
        this.value = null;
    }
}

class FacetHeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type }) => {
            switch (type) {
                case `${this.dataSource.id}.click`:
                    this.dataSource.toggle();
                    this.emitOuter('change', {
                        isOpen: this.dataSource.isOpen(),
                        id: this.dataSource.id,
                        value: this.dataSource.value
                    });
                    break;
                default:
                    break;
            }
        });
    }
}

class FacetTextEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    this.dataSource.setValue(payload.value);
                    this.emitOuter('change', Object.assign(Object.assign({}, payload), { id: this.dataSource.id }));
                    break;
                default:
                    break;
            }
        });
    }
}

class FacetCheckboxEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    this.dataSource.toggleValue(payload);
                    this.emitOuter('change', {
                        value: this.dataSource.getValue(),
                        id: this.dataSource.id
                    });
                    break;
                default:
                    break;
            }
        });
    }
}

class FacetSelectEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    this.dataSource.setValue(payload.value);
                    this.emitOuter('change', Object.assign(Object.assign({}, payload), { id: this.dataSource.id }));
                    break;
                default:
                    break;
            }
        });
    }
}

class FacetLinkEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    this.dataSource.toggleValue(payload);
                    this.emitOuter('change', {
                        value: this.dataSource.getValue(),
                        id: this.dataSource.id
                    });
                    break;
                default:
                    break;
            }
        });
    }
}

const ACTIVE_CLASS$2 = 'is-active';
class FacetLinkMultipleDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            const { links } = this.input;
            const updatedLinks = links.map((link) => (Object.assign(Object.assign({}, link), { classes: this.value.includes(link.payload) ? ACTIVE_CLASS$2 : '' })));
            this.update(Object.assign(Object.assign({}, this.input), { links: updatedLinks }));
        }
    }
    toggleValue(linkValue) {
        const exists = this.value.includes(linkValue);
        if (!exists) {
            this.value.push(linkValue);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(linkValue), 1);
        }
        // update
        this.setValue(this.value, true);
    }
    clear() {
        this.value = [];
    }
}

class FacetLinkMultipleEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    this.dataSource.toggleValue(payload);
                    this.emitOuter('change', {
                        value: this.dataSource.getValue(),
                        id: this.dataSource.id
                    });
                    break;
                default:
                    break;
            }
        });
    }
}

const DATASOURCE_MAP$2 = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
    'link-multiple': FacetLinkMultipleDS,
};
const EVENTHANDLER_MAP$2 = {
    header: FacetHeaderEH,
    text: FacetTextEH,
    checkbox: FacetCheckboxEH,
    select: FacetSelectEH,
    link: FacetLinkEH,
    'link-multiple': FacetLinkMultipleEH,
};
let MrSearchFacetsLayoutComponent = class MrSearchFacetsLayoutComponent extends AbstractLayout {
    constructor() {
        super(SearchFacetsLayoutConfig);
    }
    initPayload() {
        return {
            searchService: this.searchService
        };
    }
    ngOnInit() {
        this.loadWidgets();
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const { facets } = this.searchService.getConfig();
        this.widgets = [];
        facets.sections.forEach(({ header, inputs }) => {
            if (header) {
                this.widgets.push({
                    id: header.id,
                    dataSource: DATASOURCE_MAP$2.header,
                    eventHandler: EVENTHANDLER_MAP$2.header
                });
            }
            inputs.forEach((input) => {
                let inputType = input.type;
                const { multiple } = input.schema;
                // multiple control
                if (multiple) {
                    inputType += '-multiple';
                }
                this.widgets.push({
                    id: input.id,
                    dataSource: DATASOURCE_MAP$2[inputType],
                    eventHandler: EVENTHANDLER_MAP$2[inputType]
                });
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", MrSearchService)
], MrSearchFacetsLayoutComponent.prototype, "searchService", void 0);
MrSearchFacetsLayoutComponent = __decorate([
    Component({
        selector: 'mr-search-facets-layout',
        template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\n        <n7-facet-header\n        *ngIf=\"section.header\"\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\n        [emit]=\"lb.widgets[section.header.id].emit\"\n        ></n7-facet-header>\n\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\n                <ng-container [ngSwitch]=\"input.type\">\n    \n                    <!-- INPUT TEXT -->\n                    <n7-input-text \n                    *ngSwitchCase=\"'text'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n    \n                    <!-- INPUT CHECKBOX -->\n                    <n7-input-checkbox \n                    *ngSwitchCase=\"'checkbox'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                    \n                    <!-- INPUT SELECT -->\n                    <n7-input-select \n                    *ngSwitchCase=\"'select'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                    \n                    <!-- INPUT LINK -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'link'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n\n                    <!-- INPUT LINKMULTI -->\n                    <n7-input-link \n                    *ngSwitchCase=\"'linkMulti'\"\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n                \n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], MrSearchFacetsLayoutComponent);

class MrSearchLayoutDS extends LayoutDataSource$1 {
    constructor() {
        super(...arguments);
        this.totalResultsText = null;
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
    }
    handleResponse(response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    }
    updateActiveFilters(state, linksResponse) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state,
            linksResponse,
            facetsConfig: this.searchService.getConfig().facets
        });
    }
    getPaginationParams(response) {
        const { total_count: totalCount, page, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            pageLimit: paginationConfig.limit,
            sizes: {
                list: paginationConfig.options,
                active: limit,
            },
        };
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    }
}

class MrSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.searchState = {};
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-layout.init':
                    this.searchService = payload.searchService;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listeners
                    this.initStateListener();
                    break;
                case 'mr-search-layout.destroy':
                    this.destroyed$.next(true);
                    break;
                case 'mr-search-layout.searchreset':
                    this.searchService.reset();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.click':
                    this.searchService.setState('input', 'page', payload.page);
                    break;
                case 'n7-smart-pagination.change':
                    this.searchService.setState('input', 'limit', payload.value);
                    break;
                case 'mr-search-results-title.change':
                    this.searchService.setState('input', 'sort', payload.value);
                    break;
                case 'mr-search-tags.click': {
                    const stateValue = this.searchState[payload.id];
                    let newValue = null;
                    if (Array.isArray(stateValue)) {
                        newValue = stateValue.filter((value) => value !== payload.value);
                    }
                    this.searchService.setState('input', payload.id, newValue);
                    break;
                }
                default:
                    break;
            }
        });
    }
    initStateListener() {
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe(({ state }) => {
            this.searchState = state;
        });
        this.searchService.getState$(INPUT_STATE_CONTEXT, 'query').subscribe((val) => {
            this.emitOuter('inputquerychange', val);
            this.searchService.setState(INPUT_STATE_CONTEXT, 'sort', val ? '_score' : 'sort_ASC');
        });
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((response) => {
            this.linksResponse = response;
            this.dataSource.updateActiveFilters(this.searchState, this.linksResponse);
            // update sections
            if (response.inputs) {
                const { inputs } = response;
                Object.keys(inputs).forEach((inputKey) => {
                    const currentInput = inputs[inputKey];
                    this.searchService.setState(SECTION_STATE_CONTEXT, `section-${inputKey}`, Array.isArray(currentInput) && currentInput.length ? 'is-not-empty' : 'is-empty');
                });
            }
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').subscribe(() => {
            this.layoutState.set('results', LayoutState.LOADING);
        });
        // default params hook
        this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', (params = {}) => {
            // FIXME: prendere da configurazione
            const defaultParams = {
                page: 1,
                sort: 'sort_ASC',
                limit: 12
            };
            Object.keys(defaultParams).forEach((key) => {
                params[key] = params[key] || defaultParams[key];
            });
            return params;
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
            .subscribe((response) => {
            this.dataSource.handleResponse(response);
            // update layout state
            this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'error')
            .subscribe((error) => {
            console.warn(RESULTS_REQUEST_STATE_CONTEXT, error);
            this.layoutState.set('results', LayoutState.ERROR);
        });
    }
}

const MrSearchLayoutConfig = {
    layoutId: 'mr-search-layout',
    widgets: [{
            id: 'mr-search-page-title'
        }, {
            id: 'mr-search-results-title'
        }, {
            id: 'mr-search-results'
        }, {
            id: 'mr-search-tags'
        }, {
            id: 'mr-resources', dataSource: MrItemPreviewsDS,
        }, {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }],
    layoutDS: MrSearchLayoutDS,
    layoutEH: MrSearchLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

const ɵ0$4 = {
    id: 'query',
    placeholder: 'Cerca nei titoli',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon'
}, ɵ1$1 = {
    text: 'Toponimi',
    additionalText: null,
}, ɵ2$1 = {
    id: 'text-01',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ3$1 = {
    links: []
}, ɵ4$1 = {
    text: 'Continenti',
    additionalText: null
}, ɵ5 = {
    links: []
}, ɵ6 = {
    text: 'Keywords',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ7 = {
    links: []
}, ɵ8 = {
    text: 'Data di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ9 = {
    links: []
}, ɵ10 = {
    text: 'Luogo di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ11 = {
    links: []
};
const facets = {
    sections: [{
            id: 'section-query',
            inputs: [{
                    id: 'query',
                    type: 'text',
                    queryParam: true,
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ0$4
                }]
        }, {
            id: 'section-toponyms',
            header: {
                id: 'header-toponyms',
                data: ɵ1$1
            },
            inputs: [{
                    id: 'toponyms-filter',
                    type: 'text',
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ2$1
                }, {
                    id: 'toponyms',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ3$1
                }]
        }, {
            id: 'section-continents',
            header: {
                id: 'header-continents',
                data: ɵ4$1
            },
            inputs: [{
                    id: 'continents',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ5
                }]
        }, {
            id: 'section-keywords',
            header: {
                id: 'header-keywords',
                data: ɵ6
            },
            inputs: [{
                    id: 'keywords',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ7
                }],
        }, {
            id: 'section-date',
            header: {
                id: 'header-date',
                data: ɵ8
            },
            inputs: [{
                    id: 'date',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ9
                }],
        }, {
            id: 'section-place',
            header: {
                id: 'header-place',
                data: ɵ10
            },
            inputs: [{
                    id: 'place',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ11
                }],
        }],
    classes: 'facets-wrapper'
};
const ɵ12 = (id) => ({
    id,
    queryParam: true,
    schema: {
        valueType: id === 'sort' ? 'string' : 'number'
    }
});
const layoutInputs = ['page', 'limit', 'sort'].map(ɵ12);
const request = {
    results: {
        id: 'search',
        delay: 500
    },
    facets: {
        id: 'facets',
    },
    provider: 'rest',
    delay: 500
};
var searchConfig = { request, facets, layoutInputs };

let MrSearchLayoutComponent = class MrSearchLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, router, activatedRoute, communication, configuration, searchService, layoutState, mainState) {
        super(layoutsConfiguration.get('MrSearchLayoutConfig') || MrSearchLayoutConfig);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.configuration = configuration;
        this.searchService = searchService;
        this.layoutState = layoutState;
        this.mainState = mainState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            communication: this.communication,
            searchService: this.searchService,
            layoutState: this.layoutState,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            const { searchId } = this.configuration.get(this.configId);
            this.searchService.init(searchId, searchConfig);
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrSearchLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService },
    { type: ConfigurationService },
    { type: MrSearchService },
    { type: MrLayoutStateService },
    { type: MainStateService }
];
MrSearchLayoutComponent = __decorate([
    Component({
        selector: 'mr-search-layout',
        template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth\">\n\n        <div class=\"mr-search__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <aside class=\"mr-facets\">\n                <div class=\"mr-facets__contents\">\n                    <h2 class=\"mr-facets__title\" \n                        *ngIf=\"lb.dataSource.pageConfig['facetsTitle']\">\n                        {{ lb.dataSource.pageConfig['facetsTitle'] }}\n                    </h2>\n                    <mr-search-facets-layout \n                    [searchService]=\"lb.dataSource.searchService\">\n                    </mr-search-facets-layout>\n                </div>\n            </aside>\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                <div *ngIf=\"(\n                    lb.dataSource.pageConfig['filtersTitle'] && \n                    lb.widgets['mr-search-tags'].ds.hasFilters\n                )\" \n                class=\"mr-search__results-filters\">\n                    <span class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filtersTitle'] }}</span>\n                    <div class=\"mr-search__results-filters-wrapper\">\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\n                        [data]=\"tag\"\n                        [emit]=\"lb.widgets['mr-search-tags'].emit\">\n                        </n7-tag>\n                    </div>\n                </div>\n                <main class=\"mr-search__results\">\n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-search__results-loading n7-grid-3\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- success: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n                            <div class=\"n7-grid-3\">\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                                [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </ng-container>\n\n                        <!-- empty: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div class=\"mr-search__results-fallback\">\n                                <p class=\"mr-search__results-fallback-string\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\n                                </button>\n                            </div>\n                        </ng-container>\n\n                        <!-- error: request problem -->\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\n                            <p class=\"mr-search__results-ko-string\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <button class=\"n7-btn mr-search__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                {{ lb.dataSource.pageConfig.ko.button }}\n                            </button>\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                <n7-smart-pagination\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n\n    </section>\n</div>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        Router,
        ActivatedRoute,
        CommunicationService,
        ConfigurationService,
        MrSearchService,
        MrLayoutStateService,
        MainStateService])
], MrSearchLayoutComponent);

class MrStaticLayoutDS extends LayoutDataSource$1 {
    onInit(payload) {
        this.communication = payload.communication;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
    }
    /**
     * Make a request to serverless based on the url slug
     * Example:
     * - base-url/static/sample-page
     * - base-url/static/another-page
     */
    pageRequest$(slug, onError) {
        return this.communication.request$('wp-page', {
            onError,
            urlParams: slug,
        });
    }
    handleResponse(response) {
        const { title, body } = response;
        this.setHtml(title, body);
        this.updateHeadTitle(title);
    }
    setHtml(title, body) {
        this.html = {
            title,
            body,
        };
    }
    updateHeadTitle(pageTitle) {
        const appName = this.configuration.get('name');
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    }
}

class MrStaticLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-static-layout.init':
                    this.route = payload.route;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listen route
                    this.listenRoute();
                    break;
                case 'mr-static-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    listenRoute() {
        this.route.url.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), switchMap((url) => this.dataSource.pageRequest$(url[0].path, (err) => {
            console.warn(`Error loading static layout for ${url[0].path}`, err.message);
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
        });
    }
}

const MrStaticLayoutConfig = {
    layoutId: 'mr-static-layout',
    widgets: [
    // {
    //   id: 'title',          ← Insert a component here.
    //   hasStaticData: true,  ← Renders the widget before this.one().update is called.
    // }
    ],
    layoutDS: MrStaticLayoutDS,
    layoutEH: MrStaticLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrStaticLayoutComponent = class MrStaticLayoutComponent extends AbstractLayout {
    constructor(communication, configuration, mainState, route, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrStaticLayoutConfig') || MrStaticLayoutConfig);
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.route = route;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            communication: this.communication,
            configuration: this.configuration,
            mainState: this.mainState,
            layoutState: this.layoutState,
            route: this.route,
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.layoutState.add('content');
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrStaticLayoutComponent.ctorParameters = () => [
    { type: CommunicationService },
    { type: ConfigurationService },
    { type: MainStateService },
    { type: ActivatedRoute },
    { type: MrLayoutStateService },
    { type: LayoutsConfigurationService }
];
MrStaticLayoutComponent = __decorate([
    Component({
        selector: 'mr-static-layout',
        template: "<div class=\"mr-static mr-layout\" *ngIf=\"lb.dataSource\">\n    <!-- STATIC LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            loading...\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            error!\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.html.title}}</h1>\n            <div class=\"mr-static__content mr-wp-content\" [innerHTML]=\"lb.dataSource.html.body | keepHtml\"></div>\n        </ng-container>\n    \n    </ng-container>\n</div>\n"
    }),
    __metadata("design:paramtypes", [CommunicationService,
        ConfigurationService,
        MainStateService,
        ActivatedRoute,
        MrLayoutStateService,
        LayoutsConfigurationService])
], MrStaticLayoutComponent);

//---------------------------
let ReadMoreComponent = class ReadMoreComponent {
    constructor() {
        // CSS Classes
        this.state = 'is-expanded';
        this.collapsed = new BehaviorSubject(false);
        this._loaded = false;
        // onClick(type, payload) {
        //   if (!this.emit) return;
        //   this.emit(type, payload);
        // }
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked() {
        if (this._loaded)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            const height = this.root.nativeElement.clientHeight;
            const { limit } = this.data;
            this.data.height = height;
            if (height > limit) {
                setTimeout(() => {
                    this.toggleClass();
                    this.collapsed.next(true);
                });
            }
        }
    }
    toggleClass() {
        if (this.state === 'is-collapsed')
            this.state = 'is-expanded';
        if (this.state === 'is-expanded')
            this.state = 'is-collapsed';
    }
    handleToggle() {
        const v = this.collapsed.value;
        this.collapsed.next(!v);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ReadMoreComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ReadMoreComponent.prototype, "emit", void 0);
__decorate([
    ViewChild('root', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ReadMoreComponent.prototype, "root", void 0);
ReadMoreComponent = __decorate([
    Component({
        selector: 'mr-read-more',
        template: "<div class=\"mr-read-more {{this.state}}\"\n     *ngIf=\"data\"\n     #root>\n     <!-- Child component -->\n     <ng-content class=\"content\"></ng-content>\n     <div [hidden]=\"!collapsed.value\"\n          (click)=\"handleToggle()\">\n          Mostra tutto\n     </div>\n</div>\n"
    })
], ReadMoreComponent);

const COMPONENTS$3 = [
    // Layout components
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    // Custom components
    ReadMoreComponent
];
let N7BoilerplateMurucaModule = class N7BoilerplateMurucaModule {
};
N7BoilerplateMurucaModule = __decorate([
    NgModule({
        declarations: [
            EscapeHtmlPipe,
            COMPONENTS$3
        ],
        imports: [
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ],
        providers: [
            MrSearchService,
            MrLayoutStateService
        ],
        entryComponents: COMPONENTS$3,
        exports: COMPONENTS$3,
    })
], N7BoilerplateMurucaModule);

let N7BoilerplateLibModule = class N7BoilerplateLibModule {
};
N7BoilerplateLibModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        providers: [],
        exports: [
            // COMMON
            N7BoilerplateCommonModule,
            // AW
            N7BoilerplateAriannaWebModule,
            // DV
            N7BoilerplateDataVizModule,
            // MR
            N7BoilerplateMurucaModule,
        ],
    })
], N7BoilerplateLibModule);

let JsonConfigService = class JsonConfigService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    load(path, staticConfig) {
        return this.http.get(path).pipe(catchError(() => of({})), tap((response) => this._handleResponse(response, staticConfig))).toPromise();
    }
    _handleResponse(response, staticConfig) {
        // set config defaults
        if (staticConfig) {
            Object.keys(staticConfig).forEach((key) => this.config.set(key, staticConfig[key]));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((key) => this.config.set(key, response[key]));
            // config keys colors
            if (response['config-keys']) {
                const headTag = document.querySelector('head');
                const styleElement = document.createElement('style');
                const styles = [];
                Object.keys(response['config-keys']).forEach((key) => {
                    const configKey = response['config-keys'][key] || {};
                    const className = configKey['class-name'];
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${className}: ${configKey.color.hex};`);
                    }
                });
                if (styles.length) {
                    styles.unshift(':root {');
                    styles.push('}');
                    styleElement.appendChild(document.createTextNode(styles.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    }
};
JsonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
JsonConfigService.ɵprov = ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
JsonConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], JsonConfigService);

// main layout

// home layout

// example layout

// home layout

let MrMenuService = class MrMenuService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.dynamicPaths = [];
        this.isDynamicPath = (path) => this.dynamicPaths.includes(path);
    }
    load(path) {
        return this.http.get(path).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response))).toPromise();
    }
    _handleResponse(response) {
        if (response) {
            const headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map(({ label, slug, isStatic }) => {
                const href = `/${slug}`;
                // dynamic path control
                if (!isStatic) {
                    this.dynamicPaths.push(href);
                }
                return {
                    text: label,
                    anchor: { href },
                    _meta: {
                        id: href
                    }
                };
            });
            this.configuration.set('header', headerConfig);
        }
    }
};
MrMenuService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
MrMenuService.ɵprov = ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
MrMenuService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], MrMenuService);

let DynamicPathGuard = class DynamicPathGuard {
    constructor(menuService, router) {
        this.menuService = menuService;
        this.router = router;
    }
    canActivate(next, state) {
        const { url } = state;
        if (!this.menuService.isDynamicPath(url)) {
            const { notFoundPath } = next.data;
            this.router.navigate([notFoundPath ? `/${notFoundPath}` : '/']);
            return false;
        }
        return true;
    }
};
DynamicPathGuard.ctorParameters = () => [
    { type: MrMenuService },
    { type: Router }
];
DynamicPathGuard.ɵprov = ɵɵdefineInjectable({ factory: function DynamicPathGuard_Factory() { return new DynamicPathGuard(ɵɵinject(MrMenuService), ɵɵinject(Router)); }, token: DynamicPathGuard, providedIn: "root" });
DynamicPathGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [MrMenuService,
        Router])
], DynamicPathGuard);

/*
 * Public API Surface of n7-boilerplate-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractLayout, ApolloProvider, AwAutocompleteWrapperDS, AwAutocompleteWrapperEH, AwBubbleChartDS, AwBubbleChartEH, AwChartTippyDS, AwChartTippyEH, AwEntitaLayoutComponent, AwEntitaLayoutConfig, AwEntitaLayoutDS, AwEntitaLayoutEH, AwEntitaMetadataViewerDS, AwEntitaNavDS, AwEntitaNavEH, AwFacetsWrapperComponent, AwFacetsWrapperDS, AwFacetsWrapperEH, AwGalleryLayoutComponent, AwGalleryLayoutConfig, AwGalleryLayoutDS, AwGalleryLayoutEH, AwGalleryResultsDS, AwGalleryResultsEH, AwHeroDS, AwHeroEH, AwHomeAutocompleteDS, AwHomeAutocompleteEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwLinkedObjectsDS, AwLinkedObjectsEH, AwMapDS, AwMapLayoutComponent, AwMapLayoutConfig, AwMapLayoutDS, AwMapLayoutEH, AwPatrimonioLayoutConfig, AwRelatedEntitiesDS, AwSchedaBreadcrumbsDS, AwSchedaImageDS, AwSchedaInnerTitleDS, AwSchedaLayoutComponent, AwSchedaLayoutDS, AwSchedaLayoutEH, AwSchedaMetadataDS, AwSchedaSidebarEH, AwSearchLayoutComponent, AwSearchLayoutConfig, AwSearchLayoutDS, AwSearchLayoutEH, AwSearchLayoutTabsDS, AwSearchLayoutTabsEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTimelineDS, AwTimelineLayoutComponent, AwTimelineLayoutConfig, AwTimelineLayoutDS, AwTimelineLayoutEH, AwTreeDS, AwTreeEH, BreadcrumbsDS, BreadcrumbsEH, BubbleChartWrapperComponent, ChartTippyComponent, CommunicationService, ConfigurationService, DataWidgetWrapperComponent, DatepickerWrapperComponent, DvDataWidgetDS, DvDatepickerWrapperDS, DvDatepickerWrapperEH, DvExampleLayoutComponent, DvExampleLayoutConfig, DvExampleLayoutDS, DvExampleLayoutEH, DvGraphDS, DvInnerTitleDS, DvWidgetDS, DynamicPathGuard, FacetsDS, FooterDS, FooterEH, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, MrBreadcrumbsDS, MrCollectionDS, MrDummyEH, MrFiltersDS, MrFiltersEH, MrGlossaryLayoutComponent, MrGlossaryLayoutConfig, MrGlossaryLayoutDS, MrGlossaryLayoutEH, MrHeroDS, MrHomeLayoutComponent, MrHomeLayoutConfig, MrHomeLayoutDS, MrHomeLayoutEH, MrImageViewerDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrItemPreviewsDS, MrMenuService, MrMetadataDS, MrNavDS, MrNavEH, MrResourceLayoutComponent, MrResourceLayoutConfig, MrResourceLayoutDS, MrResourceLayoutEH, MrSearchFacetsLayoutComponent, MrSearchLayoutComponent, MrSearchLayoutConfig, MrSearchLayoutDS, MrSearchLayoutEH, MrSearchPageTitleDS, MrSearchResultsDS, MrSearchResultsTitleDS, MrSearchResultsTitleEH, MrSearchTagsDS, MrSearchTagsEH, MrStaticLayoutComponent, MrStaticLayoutConfig, MrStaticLayoutDS, MrStaticLayoutEH, MrTextViewerDS, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateDataVizModule, N7BoilerplateLibModule, N7BoilerplateMurucaModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, SearchFacetsLayoutConfig, SearchFacetsLayoutDS, SearchFacetsLayoutEH, SmartBreadcrumbsComponent, SmartPaginationComponent, SmartPaginationDS, SmartPaginationEH, SubnavDS, SubnavEH, ɵ0$2 as ɵ0, MainLayoutComponent as ɵa, AbstractLayout as ɵb, MrGlossaryLayoutComponent as ɵba, MrHomeLayoutComponent as ɵbb, MrLayoutStateService as ɵbc, MrResourceLayoutComponent as ɵbd, MrSearchFacetsLayoutComponent as ɵbe, MrSearchLayoutComponent as ɵbf, MrSearchService as ɵbg, MrStaticLayoutComponent as ɵbh, ReadMoreComponent as ɵbi, ConfigurationService as ɵc, LayoutsConfigurationService as ɵd, MainStateService as ɵe, Page404LayoutComponent as ɵf, SmartPaginationComponent as ɵg, CommunicationService as ɵh, ApolloProvider as ɵi, RestProvider as ɵj, AwEntitaLayoutComponent as ɵk, AwGalleryLayoutComponent as ɵl, AwSearchService as ɵm, AwHomeLayoutComponent as ɵn, AwMapLayoutComponent as ɵo, AwSchedaLayoutComponent as ɵp, AwSearchLayoutComponent as ɵq, AwTimelineLayoutComponent as ɵr, BubbleChartWrapperComponent as ɵs, ChartTippyComponent as ɵt, SmartBreadcrumbsComponent as ɵu, AwFacetsWrapperComponent as ɵv, DataWidgetWrapperComponent as ɵw, DatepickerWrapperComponent as ɵx, DvExampleLayoutComponent as ɵy, EscapeHtmlPipe as ɵz };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
