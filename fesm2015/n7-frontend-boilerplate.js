import { __decorate, __param, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Inject, ɵɵinject, Component, Input, NgModule, ViewChild, ElementRef, ApplicationInitStatus, Pipe, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK, DATA_WIDGET_MOCK, IMAGE_VIEWER_MOCK, IMAGE_VIEWER_TOOLS_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, interval, merge as merge$1, fromEvent, BehaviorSubject, of, forkJoin } from 'rxjs';
import { map, catchError, takeUntil, filter, first, mapTo, debounceTime, switchMap, withLatestFrom, tap, delay } from 'rxjs/operators';
import { NavigationStart, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource, _t, translate } from '@n7-frontend/core';
import tippy, { hideAll } from 'tippy.js';
import { isEmpty, get, merge, max, min, cloneDeep, isNull, xor, isObject, clone } from 'lodash';
import slugify from 'slugify';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { icon, LatLngBounds, markerClusterGroup, marker } from 'leaflet';
import * as moment from 'moment';
import 'leaflet.markercluster';

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
            header: new ReplaySubject(),
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
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, params, httpOptions);
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
        this.mainState.get$('headTitle').subscribe((val) => {
            this.titleService.setTitle(val);
        });
        this.mainState.get$('pageTitle').subscribe((val) => {
            this.pageTitle = val;
        });
        this.mainState.get$('subnav').subscribe((val) => {
            this.one('subnav').update(val);
        });
        this.mainState.get$('breadcrumbs').subscribe((val) => {
            this.one('breadcrumbs').update(val);
        });
        this.mainState.get$('header').subscribe((val) => {
            this.one('header').update(val);
        });
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
    escapeQuotes(str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str
            .replace(/"/g, '\\\\\\"')
            .replace(/'/g, '\\\\\'');
    },
    unescapeQuotes(str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str
            .replace(/\\\\\\"/g, '"')
            .replace(/\\\\'/g, '\'');
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
    },
    striptags(str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.replace(/(<([^>]+)>)/gi, '');
    },
    isElementInViewport(el) {
        if (!el) {
            throw Error('There is no element');
        }
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0
            && rect.right > 0
            && rect.left < (window.innerWidth || document.documentElement.clientWidth)
            && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    },
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
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
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
                filter.value = !remove ? helpers.escapeQuotes(value) : null;
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
            this.updateItemClass(item, payload);
            if (item.subnav) {
                item.subnav.forEach((subNavItem) => {
                    this.updateItemClass(subNavItem, payload);
                });
            }
        });
    }
    onRouterChange() {
        if (!this.output) {
            return;
        }
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
    updateItemClass(item, payload) {
        let itemClasses = [];
        if (item.classes) {
            itemClasses = itemClasses.concat(item.classes.split(' '));
        }
        if (item._meta.id === payload && !itemClasses.includes(ACTIVE_CLASS)) {
            itemClasses.push(ACTIVE_CLASS);
        }
        else if (itemClasses.includes(ACTIVE_CLASS)) {
            itemClasses.splice(itemClasses.indexOf(ACTIVE_CLASS, 1));
        }
        item.classes = itemClasses.join(' ');
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
        const { totalPages, currentPage, pageLimit, sizes } = data;
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
                label: sizes.label || 'Numero di risultati',
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
        template: "<div class=\"n7-main-layout\" id=\"main-layout\">\r\n    <div class=\"n7-page-content\">\r\n        <n7-header\r\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['header'].emit\">\r\n        </n7-header>\r\n        <main class=\"n7-content\">\r\n            <div class=\"n7-top-page-bar\">\r\n                <div class=\"n7-top-page-bar__main\"></div>\r\n            </div>\r\n            <div class=\"n7-alert-bar\">\r\n                <!--<n7-alert\r\n                [attr.id]=\"'main-layout-alert'\"\r\n                [data]=\"lb.dataSource.alertData$ | async\"\r\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\r\n            </div>\r\n            <ng-content></ng-content>\r\n        </main>\r\n    </div>\r\n    <n7-footer\r\n        [data]=\"lb.widgets['footer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['footer'].emit\">\r\n    </n7-footer>\r\n</div>\r\n"
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
        template: "<div class=\"n7-page404-layout\">\r\n    404 - Resource not found\r\n</div>"
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
        template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\r\n  <n7-pagination\r\n    [data]=\"data\"\r\n    [emit]=\"emit\">\r\n  </n7-pagination>\r\n</div>"
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
        /**
         * Dynamically returns the data object for each HTML component
         *  data: {
         *     previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
         *     pagination: { first, last, links, next, prev, select }
         *   }
         */
        this.unpackData = (data) => {
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
            // resize data if necessary
            if (!dynamicPagination && size && page && d.length > size) {
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

class AwAutocompleteWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Given a string, it trims it to the specified length.
         *
         * @param string an input string
         * @param limit character limit
         * @returns the resulting trimmed string
         */
        this.stringTrim = (string, limit) => {
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
                text: `È collegato a ${count} risultati`,
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

class AwCarouselDS extends DataSource {
    transform(data) {
        const res = {
            containerId: 'carousel-root',
            classes: 'aw-home__carousel-root',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 4000,
                animation: 500,
            },
            slides: data.map((slide) => {
                const items = [];
                let action;
                let background;
                if (slide.title)
                    items.push({ title: slide.title });
                if (slide.text)
                    items.push({ text: slide.text });
                if (slide.ctaLabel && slide.ctaPayload) {
                    action = {
                        text: slide.ctaLabel,
                        anchor: {
                            href: slide.ctaPayload,
                            target: '_blank'
                        }
                    };
                }
                if (slide.background && slide.background.value) {
                    if (slide.background.type === 'color') {
                        background = {
                            color: slide.background.value
                        };
                    }
                    else if (slide.background.type === 'image') {
                        background = {
                            image: slide.background.value
                        };
                    }
                    else if (slide.background.type === 'video') {
                        background = {
                            video: slide.background.value
                        };
                    }
                }
                else {
                    // The background is missing!
                    background = {
                        color: 'rgba(0, 0, 0, 0)'
                    };
                }
                return ({
                    items,
                    action,
                    background
                });
            })
        };
        return res;
    }
}

class AwHeroDS extends DataSource {
    constructor() {
        super(...arguments);
        this.currentInputValue = '';
    }
    transform(data) {
        const { title, text, button, backgroundImage, input, classes } = data;
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
            classes,
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
        const { hasMetadataFields, labels } = this.options;
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
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: `${param.basePath}/fondi-collegati` },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
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

class AwSchedaDropdownDS extends DataSource {
    transform(response) {
        const { digitalObjects } = response;
        const firstObject = digitalObjects[0];
        return {
            header: {
                label: firstObject.label,
                icon: {
                    id: 'n7-icon-caret-down'
                },
                payload: 'toggle',
            },
            items: digitalObjects.map(({ label, type }, index) => ({
                label,
                type,
                payload: index,
                selected: index === 0,
            }))
        };
    }
    toggle() {
        const { classes } = this.output;
        this.output.classes = classes ? null : 'is-open';
    }
    onChange(payload) {
        // link check
        if (this.output.items[payload].type !== 'external') {
            this.output.items.forEach((item) => {
                item.selected = item.payload === payload;
                if (item.selected) {
                    this.output.header.label = item.label;
                }
            });
        }
        // close
        this.toggle();
    }
}

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

class AwSchedaImageDS extends DataSource {
    transform(data) {
        const tileSources = this.getTileSources(data.items);
        return {
            images: [],
            viewerId: data.id,
            libOptions: {
                tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: (viewer) => {
                this.instance = viewer;
            }
        };
    }
    hasInstance() {
        return !!this.instance;
    }
    updateImages(data) {
        if (!this.instance)
            return;
        // container exists check
        interval(10).pipe(filter(() => !!document.getElementById(this.output.viewerId)), first()).subscribe(() => {
            // reset
            this.instance.world.removeAll();
            setTimeout(() => {
                const images = this.getTileSources(data.items);
                this.instance.open(images);
            });
        });
    }
    reset() {
        if (!this.instance)
            return;
        this.instance.world.removeAll();
    }
    getTileSources(images) {
        return images.map(({ type, url }) => {
            if (type === 'images-simple') {
                return {
                    url,
                    type: 'image'
                };
            }
            // FIXME: togliere replace
            return url.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi');
        });
    }
}

class AwSchedaInnerTitleDS extends DataSource {
    transform(data) {
        return data;
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

const DEFAULT_OPTIONS = {
    showToolbar: true,
    showSidebarButton: true,
    showFindButton: true,
    showPagingButtons: true,
    showZoomButtons: true,
    showPresentationModeButton: true,
    showOpenFileButton: false,
    showPrintButton: false,
    showDownloadButton: false,
    showBookmarkButton: false,
    showSecondaryToolbarButton: true,
    showRotateButton: false,
    showHandToolButton: true,
    showScrollingButton: false,
    showSpreadButton: false,
    showPropertiesButton: false
};
class AwSchedaPdfDS extends DataSource {
    transform(data) {
        const { items } = data;
        const libOptions = merge(DEFAULT_OPTIONS, this.options.libOptions || {});
        if (!(Array.isArray(items) && items.length)) {
            return null;
        }
        this.items = items.map((item, index) => (Object.assign(Object.assign({}, item), { selected: index === 0 })));
        console.log('libOptions----------------------------->', libOptions);
        // defaults
        return {
            libOptions,
            items: this.items,
            next: 1,
            prev: null,
            currentUrl: items[0].url,
        };
    }
    onChange(index) {
        this.output.next = index < (this.items.length - 1) ? index + 1 : null;
        this.output.prev = index > 0 ? index - 1 : null;
        this.output.currentUrl = this.items[index].url;
        this.items.forEach((item, itemIndex) => {
            item.selected = itemIndex === index;
        });
    }
    onLoaded() {
        this.output.classes = 'is-loaded';
    }
}

class AwTreeDS extends DataSource {
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
        return merge$1(facetsWrapperEH.internalFacetsChange$.pipe(mapTo(null)), this.paginate$).pipe(debounceTime(500), switchMap((pagination) => {
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

const MARKER_ICON = icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
const MARKER_ICON_SELECTED = icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
class AwMapDS extends DataSource {
    constructor() {
        super(...arguments);
        this.markerOpen$ = new Subject();
        this.markerClose$ = new Subject();
        this.transform = (data) => ({
            containerId: 'map-canvas',
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [0, 0],
                zoom: 13
            },
            _setInstance: (map) => {
                this.map = map;
                const bounds = new LatLngBounds(data.map(({ lat, lon }) => [lat, lon]));
                this.map.fitBounds(bounds);
                // adding markers
                const markers = markerClusterGroup({
                    showCoverageOnHover: false,
                });
                data
                    // skip broken markers
                    .filter((d) => (d.lat && d.lon))
                    // draw markers on the map
                    .forEach(({ lat, lon, item }) => {
                    const { label } = item;
                    const marker$1 = marker([lat, lon], { icon: MARKER_ICON })
                        .addTo(markers)
                        .bindPopup(label)
                        .on('click', ({ target }) => {
                        const { icon } = target.options;
                        const { className } = icon.options;
                        if (className === 'marker-icon-selected') {
                            this.markerOpen$.next(item);
                        }
                    });
                    marker$1.getPopup().on('remove', ({ target }) => {
                        target._source.setIcon(MARKER_ICON);
                        this.markerClose$.next();
                    });
                    marker$1.getPopup().on('add', ({ target }) => {
                        target._source.setIcon(MARKER_ICON_SELECTED);
                    });
                });
                this.map.addLayer(markers);
            }
        });
    }
}

const ONE_YEAR = 31557600000;
const YEARS_MARGIN = 30;
class AwTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        this.timelineLoaded$ = new Subject();
        this.timelineControlsVisible = false;
        this.transform = (data) => {
            this.dataSet = data.map(({ id, start, end, item, label }) => ({
                id,
                item,
                start: start ? moment(start).format('YYYY-MM-DD') : null,
                end: end && end !== start ? moment(end).format('YYYY-MM-DD') : null,
                content: this.getItemTemplate(label, item.label),
                _meta: {
                    dateText: label
                }
            }));
            const max = this.getMax();
            const min = this.getMin();
            return {
                containerID: 'timeline-component',
                libOptions: {
                    max,
                    min,
                    start: min,
                    end: max,
                    align: 'left',
                    minHeight: '100px',
                    // height: '100px',
                    locale: 'it_IT',
                    // cluster: {
                    // fitOnDoubleClick: true,
                    // clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0),
                    //   titleTemplate: '{count} eventi',
                    // },
                    showCurrentTime: false,
                    showTooltips: false,
                    tooltip: {
                        followMouse: false,
                        template: (d, element) => `<div class="tooltip">${element.title}</div>`
                    },
                    width: '100%',
                    // minHeight: '350px',
                    // maxHeight: '800px',
                    zoomMax: ONE_YEAR * 2000,
                    zoomMin: ONE_YEAR / 12,
                },
                dataSet: this.dataSet,
                _setInstance: (timeline) => {
                    this.timeline = timeline;
                    this.timelineLoaded$.next();
                    // fix cluster visualization
                    setTimeout(() => {
                        this.timeline.fit();
                    });
                    // timeout for zoom controls
                    setTimeout(() => {
                        this.timelineControlsVisible = true;
                    }, 1000);
                }
            };
        };
    }
    getItemTemplate(datesLabel, label) {
        return (`
      <div class="dates">
        <em>${datesLabel}</em>
      </div>
      <div class="content">${label}</div>
    `);
    }
    getMax() {
        const maxDate = new Date(max(this.getAllDates()));
        const year = maxDate.getFullYear();
        const month = maxDate.getMonth();
        const day = maxDate.getDate();
        return new Date(year + YEARS_MARGIN, month, day);
    }
    getMin() {
        const minDate = new Date(min(this.getAllDates()));
        const year = minDate.getFullYear();
        const month = minDate.getMonth();
        const day = minDate.getDate();
        return new Date(year - YEARS_MARGIN, month, day);
    }
    getAllDates() {
        return [
            ...this.dataSet
                .filter(({ start }) => start)
                .map(({ start }) => start),
            ...this.dataSet
                .filter(({ end }) => end)
                .map(({ end }) => end)
        ];
    }
}

// Any

var DS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AwLinkedObjectsDS: AwLinkedObjectsDS,
    AwAutocompleteWrapperDS: AwAutocompleteWrapperDS,
    AwBubbleChartDS: AwBubbleChartDS,
    AwChartTippyDS: AwChartTippyDS,
    AwCarouselDS: AwCarouselDS,
    AwHeroDS: AwHeroDS,
    AwTableDS: AwTableDS,
    AwHomeHeroPatrimonioDS: AwHomeHeroPatrimonioDS,
    AwHomeFacetsWrapperDS: AwHomeFacetsWrapperDS,
    AwHomeItemTagsWrapperDS: AwHomeItemTagsWrapperDS,
    AwHomeAutocompleteDS: AwHomeAutocompleteDS,
    AwEntitaNavDS: AwEntitaNavDS,
    AwEntitaMetadataViewerDS: AwEntitaMetadataViewerDS,
    AwRelatedEntitiesDS: AwRelatedEntitiesDS,
    AwSchedaBreadcrumbsDS: AwSchedaBreadcrumbsDS,
    AwSchedaDropdownDS: AwSchedaDropdownDS,
    AwSidebarHeaderDS: AwSidebarHeaderDS,
    AwSchedaImageDS: AwSchedaImageDS,
    AwSchedaInnerTitleDS: AwSchedaInnerTitleDS,
    AwSchedaMetadataDS: AwSchedaMetadataDS,
    AwSchedaPdfDS: AwSchedaPdfDS,
    AwTreeDS: AwTreeDS,
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

class AwSchedaDropdownEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-scheda-dropdown.click') {
                if (payload === 'toggle') {
                    this.dataSource.toggle();
                }
                else {
                    this.dataSource.onChange(payload);
                    this.emitOuter('click', payload);
                }
            }
        });
    }
}

class AwSchedaPdfEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-scheda-pdf.click') {
                this.dataSource.onChange(payload);
            }
            else if (type === 'aw-scheda-pdf.loaded') {
                this.dataSource.onLoaded();
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

class AwMapEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.listenToMarkers();
                    break;
                default:
                    break;
            }
        });
    }
    listenToMarkers() {
        this.dataSource.markerOpen$.subscribe((item) => {
            this.emitOuter('markeropen', item);
        });
        this.dataSource.markerClose$.subscribe(() => {
            this.emitOuter('markerclose');
        });
    }
}

class AwTimelineEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-timeline-layout.init':
                    this.listenToTimeline();
                    break;
                case 'aw-timeline-layout.zoomout':
                    this.dataSource.timeline.zoomOut(0.7);
                    break;
                case 'aw-timeline-layout.zoomin':
                    this.dataSource.timeline.zoomIn(0.7);
                    break;
                default:
                    break;
            }
        });
    }
    listenToTimeline() {
        this.dataSource.timelineLoaded$
            .pipe(first())
            .subscribe(() => {
            const { timeline, dataSet } = this.dataSource;
            timeline.on('click', ({ item }) => {
                const clicked = dataSet.find(({ id }) => item === id);
                if (clicked) {
                    const { dateText } = clicked._meta;
                    const { id, label } = clicked.item;
                    this.emitOuter('click', {
                        id,
                        label,
                        dateText,
                    });
                }
                else {
                    this.emitOuter('click', {
                        id: null
                    });
                }
            });
        });
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
    AwSchedaDropdownEH: AwSchedaDropdownEH,
    AwSchedaPdfEH: AwSchedaPdfEH,
    AwSearchLayoutTabsEH: AwSearchLayoutTabsEH,
    AwFacetsWrapperEH: AwFacetsWrapperEH,
    AwGalleryResultsEH: AwGalleryResultsEH,
    AwMapEH: AwMapEH,
    AwTimelineEH: AwTimelineEH,
    AwLinkedObjectsEH: AwLinkedObjectsEH,
    AwAutocompleteWrapperEH: AwAutocompleteWrapperEH,
    AwBubbleChartEH: AwBubbleChartEH,
    AwTableEH: AwTableEH,
    AwChartTippyEH: AwChartTippyEH
});

class AwCollectionLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.classificationsMap = {
            ff400: 'fondo-fotografico',
            al: 'aggregazione-logica',
            la: 'libro-antico',
            veac301: 'vestimento',
            f400: 'fotografia',
            uasc: 'cartografica',
            dc: 'scheda-dublin-core',
            oa300: 'scheda-oa',
            rmmus: 'materiale-musicale',
            ua: 'unita-archivistica',
            oac300: 'opera-arte-contemporanea',
        };
        this.innerTitleData = new BehaviorSubject({
            title: { main: { text: '' } },
        });
        this.collectionDescription = new BehaviorSubject('');
        this.pageSize = 6;
        /** Necessary to iterate with the loading item placeholder HTML */
        this.pageSizeList = [];
        this.currentOffset = 0;
        /** Button that loads more content into the layout */
        this.loadMoreButton = new BehaviorSubject(true);
        /** Controls the loading state of the layout */
        this.loading = true;
    }
    onInit(payload) {
        this.communication = payload.communication;
        this.route = payload.route;
        this.configuration = payload.configuration;
        this.loadedCollections = new BehaviorSubject([]);
        this.layoutOptions = this.configuration.get('collection-layout');
        this.pageSizeList = new Array(this.pageSize);
    }
    /**
     * After the collection ID has been loaded
     */
    onCollectionID() {
        // reset pagination params
        this.pageSize = 6;
        this.currentOffset = 0;
        // load
        this.loadMore(true);
    }
    loadMore(reload = false) {
        this.loading = true;
        const collection = this.loadedCollections.getValue();
        const params = {
            id: this.collectionID,
            itemPagination: {
                limit: this.pageSize,
                offset: this.currentOffset,
            }
        };
        this.communication.request$('getCollection', {
            onError: (error) => console.error(error),
            params
        }).pipe(first((d) => !!d), map((d) => ({
            // map the backend response to the format used by ItemPreviewComponent
            response: d.items.map((item) => ({
                title: this.stringLimiter(item.title, {
                    maxLength: this.layoutOptions.item.title.maxLength,
                    char: this.layoutOptions.item.title.char,
                }),
                text: this.stringLimiter(item.content, {
                    maxLength: this.layoutOptions.item.description.maxLength,
                    char: this.layoutOptions.item.description.char
                }),
                classes: `${item.image ? 'is-overlay has-image' : 'is-overlay has-image has-watermark'} ${this.classMap(item.classification)}`,
                image: item.image || this.layoutOptions.watermark,
                color: item.background,
                anchor: {
                    href: item.url || this.urlBuilder(item.a4vId, item.title, item.type)
                },
                classification: item.classification
            })),
            text: d.text,
            title: d.title,
            total: d.total,
        }))).subscribe({
            next: (data) => {
                this.loading = false;
                if (data.title) {
                    this.setTitle(this.stringLimiter(data.title, {
                        maxLength: this.layoutOptions.header.maxLength,
                        char: this.layoutOptions.header.char
                    }));
                }
                this.collectionDescription.next(data.text ? this.stringLimiter(data.text, {
                    maxLength: this.layoutOptions.description.maxLength,
                    char: this.layoutOptions.description.char
                }) : '');
                this.currentOffset += this.pageSize;
                const collectionData = !reload
                    ? [...collection, ...data.response]
                    : [...data.response];
                this.loadedCollections.next(collectionData);
                this.loadMoreButton.next(data.total > this.loadedCollections.getValue().length);
            },
            error: (e) => {
                console.error(e);
                this.loadMoreButton.next(false);
            },
        });
    }
    /**
     * Builds a URL from entity type,
     * entity id, and a slug string.
     *
     * @param type entity type
     * @param id entity ID
     * @param title human-readable title
     * @returns URL string including a slug
     */
    urlBuilder(id, title, type) {
        if (id && title) {
            const titleSlug = slugify(title);
            const { schedaBasePath, entitaBasePath } = this.configuration.get('paths');
            const basePath = type === 'entity' ? entitaBasePath : schedaBasePath;
            return `/${basePath}/${id}/${titleSlug}`;
        }
        return undefined;
    }
    stringLimiter(content, options) {
        let res = content;
        if (content && options.maxLength) {
            res = content.slice(0, options.maxLength);
            if (options.char && res !== content) {
                res += options.char;
            }
        }
        return res;
    }
    setTitle(title) {
        this.innerTitleData.next({
            title: { main: { text: title } }
        });
    }
    /**
     * Convert classification strings to css classes.
     *
     * @param classification a classification string like "a4.oc.ua"
     * @returns a CSS class
     */
    classMap(classification) {
        var _a;
        if (!classification || classification.length < 1) {
            return '';
        }
        const codeMatch = /\.(\w+)$/gi.exec(classification);
        if (codeMatch) {
            const parsedCode = (_a = codeMatch[1]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
            const className = this.classificationsMap[parsedCode];
            if (className) {
                return `is-${className}`;
            }
        }
        return `is-${classification.replace('.', '-')}`;
    }
}

class AwCollectionLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-collection-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.listenRoute();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    listenRoute() {
        // get collection ID from the url
        this.route.paramMap.subscribe((params) => {
            if (params.get('id')) {
                this.dataSource.collectionID = params.get('id');
                this.dataSource.onCollectionID();
            }
        });
    }
}

const AwCollectionLayoutConfig = {
    layoutId: 'aw-collection-layout',
    widgets: [ // array of components of this layout
    ],
    layoutDS: AwCollectionLayoutDS,
    layoutEH: AwCollectionLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    },
};

let AwCollectionLayoutComponent = class AwCollectionLayoutComponent extends AbstractLayout {
    constructor(communication, layoutsConfiguration, configuration, route) {
        super(AwCollectionLayoutConfig);
        this.communication = communication;
        this.layoutsConfiguration = layoutsConfiguration;
        this.configuration = configuration;
        this.route = route;
    }
    initPayload() {
        return {
            communication: this.communication,
            layoutsConfiguration: this.layoutsConfiguration,
            configuration: this.configuration,
            route: this.route
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwCollectionLayoutComponent.ctorParameters = () => [
    { type: CommunicationService },
    { type: LayoutsConfigurationService },
    { type: ConfigurationService },
    { type: ActivatedRoute }
];
AwCollectionLayoutComponent = __decorate([
    Component({
        selector: 'n7-collection-layout',
        template: "<div class=\"aw-collection-layout\"\r\n     *ngIf=\"lb.dataSource as dataSource\">\r\n\r\n    <div class=\"aw-collection-layout__header\">\r\n        <n7-inner-title [data]=\"dataSource.innerTitleData.getValue()\">\r\n        </n7-inner-title>\r\n    </div>\r\n\r\n    <div class=\"aw-collection-layout__description\"\r\n         *ngIf=\"dataSource.collectionDescription.getValue()\">\r\n        <div class=\"aw-collection-layout__description-text\">\r\n            {{ dataSource.collectionDescription.getValue() }}\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"n7-grid-3 aw-collection-layout__grid\"\r\n            [ngClass]=\"{ 'is-loading': dataSource.loading }\"\r\n             *ngIf=\"dataSource.loadedCollections | async\">\r\n        \r\n        <ng-container *ngFor=\"let item of (dataSource.loadedCollections | async)\">\r\n            <n7-item-preview [data]=\"item\">\r\n            </n7-item-preview>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngIf=\"dataSource.loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of dataSource.pageSizeList\"\r\n                                    [data]=\"{\r\n                blocks: [{ classes: 'collection-placeholder-item-preview' }]\r\n            }\"></n7-content-placeholder>\r\n        </ng-container>\r\n        \r\n    </section>\r\n\r\n    <section *ngIf=\"dataSource.loadMoreButton.getValue()\">\r\n        <button class=\"n7-btn n7-btn-cta n7-btn-xl aw-collection-layout__btn-more\"\r\n                (click)=\"dataSource.loadMore()\"\r\n                [disabled]=\"dataSource.loading\">\r\n            MOSTRA ALTRI\r\n        </button>\r\n    </section>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [CommunicationService,
        LayoutsConfigurationService,
        ConfigurationService,
        ActivatedRoute])
], AwCollectionLayoutComponent);

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
const getRepeater = (fields, labels, metadataToShow, type, parentLabel, paths) => {
    const html = [];
    fields
        .filter(({ fields: subFields }) => subFields)
        .forEach(({ fields: subFields }) => {
        const subHtml = [];
        if (isLink(subFields)) {
            subHtml.push('<div>');
            subHtml.push(`<dd>${getLink(subFields, paths)}</dd>`);
            subHtml.push('</div>');
        }
        subFields
            .filter(({ key }) => {
            if (isLink(subFields)) {
                return !(['label', 'id', 'type', 'isLink'].includes(key));
            }
            return true;
        })
            .filter(({ key, value }) => metadataToShow.includes(`${parentLabel}.${key}`) && !metadataIsEmpty(value))
            .map(({ key, value }) => ({
            key,
            value,
            order: metadataToShow.indexOf(`${parentLabel}.${key}`),
            label: helpers.prettifySnakeCase(key, labels[`${type}.${parentLabel}.${key}`])
        }))
            .sort((a, b) => a.order - b.order)
            .forEach(({ label, value }) => {
            subHtml.push('<div>');
            subHtml.push(`<dt>${label}</dt>`);
            subHtml.push(`<dd>${value}</dd>`);
            subHtml.push('</div>');
        });
        if (subHtml.length) {
            html.push(`<dl>${subHtml.join('')}</dl>`);
        }
    });
    return html.length ? html.join('') : null;
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
                    else if (isRepeater(fields) && metadataToShow.includes(label)) {
                        result.push({
                            key: label,
                            value: getRepeater(fields, labels, metadataToShow, type, label, paths)
                        });
                    }
                    // default
                }
                else if (metadataToShow.includes(key)) {
                    result.push({ key, value });
                }
            });
        }
        return result
            .filter(({ value }) => !metadataIsEmpty(value))
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
        this.currentPage = 1; // pagination value (url param)
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
        /**
         * Updates the pagination component
         */
        this.drawPagination = (totalItems, pageSize) => {
            if (!this.getLinkedObjectItems())
                return;
            const { href, queryParams } = this._getPaginationURL();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: this.getPageCount(totalItems, pageSize),
                currentPage: +this.currentPage || 1,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: +this.pageSize,
                },
            });
        };
        /**
         * Updates the selected tab on tab change
         */
        this.handlePageNavigation = () => {
            if (!this.myResponse) {
                return;
            }
            this.getEntityDetailsPage(this.myResponse.id, +this.currentPage, +this.pageSize)
                .pipe(first())
                .subscribe({
                // Await for network response
                next: (data) => {
                    this.myResponse = data;
                    const { href, queryParams } = this._getPaginationURL();
                    // update layout state
                    this.pageSize = queryParams.size;
                    this.currentPage = queryParams.page;
                    // update components
                    this.drawPagination(this.getItemCount(), this.pageSize);
                    this.one('aw-linked-objects').updateOptions({
                        paginationParams: { href, queryParams },
                        context: this.selectedTab,
                        config: this.configuration,
                        dynamicPagination: {
                            total: this.getItemCount(),
                        },
                        page: queryParams.page,
                        size: queryParams.size,
                        pagination: true,
                    });
                    this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
                },
                error: (e) => catchError(e),
            });
        };
        this.handleNavUpdate = (tab) => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                dynamicPagination: {
                    total: this.getItemCount(),
                },
                page: this.currentPage,
                size: this.pageSize,
                pagination: true,
                paginationParams: this._getPaginationURL(),
            });
            this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
            // update the url with the correct page and size
            const queryParams = {
                page: this.currentPage, size: this.pageSize,
            };
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams,
                queryParamsHandling: 'merge'
            });
        };
    }
    onInit({ configuration, mainState, router, route, options, titleService, communication, }) {
        var _a;
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = (_a = +this.route.snapshot.queryParams.page) !== null && _a !== void 0 ? _a : 1;
        this.one('aw-related-entities').updateOptions({
            config: this.configuration,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // check if there is only one tab
        this.singleTabCheck();
    }
    singleTabCheck() {
        const navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter((output) => !!output))
            .subscribe(({ items }) => {
            // if there is only one tab
            // and there are no query params
            // navigate to the tab.
            if (items.length === 1 && !this.currentPage) {
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
        this.drawPagination(this.getItemCount(), this.pageSize);
    }
    /**
     * Given a page number and a list size, returns the data
     * for a single page of content.
     *
     * @param id Entity ID
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    getEntityDetailsPage(id, pageNumber, pageSize) {
        return this.communication.request$('getEntityDetails', {
            onError: (error) => console.error(error),
            params: {
                entityId: id,
                itemsPagination: { offset: ((pageNumber || 1) - 1) * pageSize, limit: +pageSize },
                entitiesListSize: this.bubblesSize
            },
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
    /*
     * Loads the data for the selected nav item, into the adjacent text block.
     */
    loadItem(id, slug, tab) {
        this.loading = true;
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.getEntityDetailsPage(id, this.currentPage, this.pageSize);
        }
        this.pageTitle = 'Entità Test';
        return of(null);
    }
    loadContent(res) {
        this.loading = false;
        const config = this.configuration.get('config-keys')[res.typeOfEntity];
        this.myResponse = res;
        this.navHeader = {
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields,
            labels: this.configuration.get('labels')
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
        this.one('aw-linked-objects').updateOptions({
            context: this.selectedTab,
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            dynamicPagination: {
                total: this.getItemCount(),
            },
            paginationParams: this._getPaginationURL(),
            size: this.pageSize,
        });
        this.getLinkedObjectItems().forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        res.relatedEntities.forEach((el) => {
            el.relationName = res.label.length > 30
                ? `${res.label.substr(0, 30)}... `
                : res.label;
        });
        this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
        this.one('aw-related-entities').update(res.relatedEntities);
        // fallback text
        if (!this.hasMetadataFields) {
            this.fallbackText = this.configuration.get('entita-layout').fallback;
        }
        // update head title
        this.mainState.update('headTitle', `Arianna4View - Entità - ${this.myResponse.label}`);
    }
    _getPaginationURL() {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                `${this.currentId}/`,
                this.currentSlug,
                `/${this.selectedTab}/`,
            ].join(''),
            queryParams: {
                page: this.currentPage || 1,
                size: this.pageSize,
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
    getItemCount() {
        switch (this.selectedTab) {
            case 'fondi-collegati':
                return this.myResponse.relatedLaTotalCount;
            case 'oggetti-collegati':
                return this.myResponse.relatedItemsTotalCount;
            default:
                return 0;
        }
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
    getLinkedObjectItems() {
        return this.selectedTab === 'fondi-collegati'
            ? this.myResponse.relatedLa
            : this.myResponse.relatedItems;
    }
    /**
     * Calculates the total amount of pages
     *
     * @param items the number of records in the database
     * @param size the number of items shown on a page
     * @returns the total number of pages
     */
    getPageCount(items, size) {
        return Math.floor(items / size);
    }
}

class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handlePageSizeChange = (size) => {
            this.dataSource.pageSize = size;
            this.dataSource.currentPage = 1;
            this.dataSource.handleNavUpdate('oggetti-collegati');
            // this.dataSource.handlePageNavigation();
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
                    // scroll top
                    window.scrollTo(0, 0);
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
                    {
                        const options = {
                            context: this.dataSource.selectedTab,
                            config: this.dataSource.configuration,
                            dynamicPagination: {
                                total: this.dataSource.myResponse.totalCount,
                            },
                            page: this.dataSource.currentPage,
                            size: this.dataSource.pageSize,
                            pagination: true,
                        };
                        this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'n7-smart-pagination.change': // changed page size value (pagination)
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
        // listen for "page" query param changes-
        this.route.queryParams.pipe(map((params) => ({
            page: params.page,
            size: params.size
        }))).subscribe(({ page, size }) => {
            if (size) {
                this.dataSource.pageSize = size;
            }
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
            // scroll top
            window.scrollTo(0, 0);
        });
    }
}

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
    constructor(router, route, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwEntitaLayoutConfig') || AwEntitaLayoutConfig);
        this.router = router;
        this.route = route;
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
AwEntitaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwEntitaLayoutComponent = __decorate([
    Component({
        selector: 'aw-entita-layout',
        template: "<div class=\"aw-entity n7-side-auto-padding\"\r\n     *ngIf=\"lb.dataSource\">\r\n\r\n    <div class=\"aw-entity__sidebar\">\r\n        <!-- Custom header -->\r\n        <div *ngIf=\"lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-title-wrapper-loading\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <div *ngIf=\"!lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\r\n            <h1 class=\"aw-entity__sidebar-title\">\r\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\r\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\r\n            </h1>\r\n        </div>\r\n        <!-- Navigation -->\r\n        <div *ngIf=\"lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-nav-loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\r\n                                    [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-nav'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <n7-nav *ngIf=\"!lb.dataSource.loading\" \r\n        [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['aw-entita-nav'].emit\">\r\n        </n7-nav>\r\n    </div>\r\n\r\n    <!-- lb.dataSource.selectedTab -->\r\n    <div *ngIf=\"lb.dataSource.loading\"\r\n         class=\"aw-entity__content-loading\">\r\n        <div class=\"aw-entity__content-loading-title\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n\r\n        <div class=\"aw-entity__content-loading-items\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n                                    [data]=\"{\r\n                blocks: [{ classes: 'entity-placeholder-item-preview' }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!lb.dataSource.loading\"\r\n         class=\"aw-entity__content\">\r\n        <section>\r\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\r\n                 class=\"aw-entity__content-section\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\r\n                <div class=\"aw-entity__overview-description\">\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n                <div class=\"aw-entity-layout__button-wrapper\">\r\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\r\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\r\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"(\r\n                ['overview', 'informazioni'].includes(lb.dataSource.selectedTab)\r\n            )\">\r\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\r\n                    <div class=\"aw-entity__content-section-header\"\r\n                         *ngIf=\"lb.dataSource.selectedTab === 'overview'\">\r\n                        <h2 class=\"aw-entity__content-section-title\"\r\n                            *ngIf=\"lb.dataSource.selectedTab === 'overview'\">Informazioni</h2>\r\n                        <a *ngIf=\"lb.dataSource.selectedTab !== 'informazioni'\"\r\n                           class=\"n7-btn n7-btn-light\"\r\n                           [routerLink]=\"[lb.dataSource.getNavBasePath() + '/informazioni']\">\r\n                            TUTTE LE INFORMAZIONI <i class=\"n7-icon-angle-right\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <p *ngIf=\"lb.dataSource.fallbackText\"\r\n                       class=\"aw-entity__content-section-empty\">\r\n                        {{ lb.dataSource.fallbackText }}\r\n                    </p>\r\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\r\n                                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                 *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedItems\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\r\n                       [queryParams]=\"{ page: 1 }\"\r\n                       class=\"n7-btn n7-btn-light\">\r\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                             [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                            <!-- Relation -->\r\n                            <div class=\"aw-item-preview-relation\"\r\n                                 *ngIf=\"preview.relation.value\">\r\n                                <p class=\"aw-item-preview-relation__description\">Tipo di relazione \r\n                                    <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                    <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                 *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedLa\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'fondi-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">{{ lb.dataSource.configuration.get('labels')['aggregazioni-logiche-collegate'] }}</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/fondi-collegati/']\"\r\n                       [queryParams]=\"{ page: 1 }\"\r\n                       class=\"n7-btn n7-btn-light\">\r\n                        TUTTE LE FONDI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                             [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                            <!-- Relation -->\r\n                            <div class=\"aw-item-preview-relation\"\r\n                                 *ngIf=\"preview.relation.value\">\r\n                                <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                                    <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                    <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.selectedTab === 'fondi-collegati'\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-related-entities__{{lb.dataSource.selectedTab}}\"\r\n                 *ngIf=\"lb.dataSource.myResponse.relatedEntities\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\r\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\r\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n\r\n                <!-- ENTITA COLLEGATE -->\r\n                <section id=\"related-item-container\"\r\n                         class=\"aw-entity__section aw-entity__related\">\r\n                    <div class=\"aw-entity__inner-title\">\r\n                        {{lb.dataSource.relatedEntitiesHeader}}\r\n                    </div>\r\n                    <div class=\"aw-entity__related-items n7-grid-2 aw-item-preview-list\">\r\n                        <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\r\n                            <div class=\"aw-item-preview-wrapper\">\r\n                                <n7-item-preview [data]=\"preview\"\r\n                                                [emit]=\"lb.widgets['aw-related-entities'].emit\">\r\n                                </n7-item-preview>\r\n                                <!-- Relation -->\r\n                                <div class=\"aw-item-preview-relation\"\r\n                                    *ngIf=\"preview.relation.value\">\r\n                                    <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                                        <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                        <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\r\n                 *ngIf=\"lb.dataSource.myResponse.extraTab\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\r\n                 *ngIf=\"lb.dataSource.myResponse.wikiTab\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.wikiTab.text}}\r\n                </div>\r\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\r\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\r\n                </a>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
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
                                key: 'label.ngrams^5,text^4,fields.*^3',
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
                        // scroll top
                        window.scrollTo(0, 0);
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
            this.facetsChange$.next(); // scroll to ref element
            if (!this.scrollRefElement) {
                this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(this.scrollRefElement)) {
                this.scrollRefElement.scrollIntoView();
            }
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
        template: "<div class=\"aw-search aw-gallery n7-side-auto-padding\"\r\n     id=\"gallery-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar sticky-target\"\r\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </aw-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"scroll-ref\">&nbsp;</div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                        class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                            id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\r\n                                [value]=\"option.value\"\r\n                                [selected]=\"option.selected\"\r\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\r\n                                        [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper\">\r\n                <div class=\"n7-grid-3\">\r\n                    <div *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\"\r\n                                         [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\r\n                                class=\"n7-btn aw-search__fallback-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
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
        /** Enabled from: arianna-config/features-enabled/carousel */
        this.carouselEnabled = false;
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
        var _a, _b;
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = (_a = this.configuration.get('features-enabled')) === null || _a === void 0 ? void 0 : _a.bubblechart;
        this.carouselEnabled = (_b = this.configuration.get('features-enabled')) === null || _b === void 0 ? void 0 : _b.carousel;
        if (this.carouselEnabled) {
            this.loadCarousel();
        }
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
    /**
     * Loads data for the carousel component
     */
    loadCarousel() {
        this.communication.request$('getSlider').subscribe({
            next: (res) => {
                if (res) {
                    this.one('aw-carousel').update(res);
                }
            },
            error: (err) => {
                console.error(err);
                this.carouselEnabled = false;
            },
        });
    }
    onHeroChange(value) {
        if (value) {
            const escapedValue = helpers.escapeQuotes(value);
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
                    // scroll top
                    window.scrollTo(0, 0);
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
                        const query = helpers.escapeQuotes(payload.value);
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
            id: 'aw-carousel',
        }, {
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
        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\r\n    <!-- Carousel -->\r\n    <div class=\"aw-home__carousel\" *ngIf=\"lb.dataSource.carouselEnabled\">\r\n        <n7-carousel [data]=\"lb.widgets['aw-carousel'].ds.out$ | async\">\r\n        </n7-carousel>\r\n    </div>\r\n\r\n    <!-- Hero section at the top of the page -->\r\n    <div class=\"aw-home__top-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Bubble chart -->\r\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\r\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\r\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\r\n                blocks: [{\r\n                    classes: 'facet-placeholder-header'\r\n                }, {\r\n                    classes: 'facet-placeholder-input'\r\n                }] \r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <span class=\"aw-home__facet\"\r\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\r\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet-header>\r\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [\r\n                    {\r\n                        classes: 'facet-placeholder-item-1'\r\n                    }\r\n                ]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\r\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\r\n            <aw-bubble-chart-wrapper>\r\n                <aw-chart-tippy \r\n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n                </aw-chart-tippy>\r\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                </n7-bubble-chart>\r\n            </aw-bubble-chart-wrapper>\r\n        </div>\r\n\r\n        <!-- Linked objects -->\r\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\r\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\r\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\r\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\r\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Risultati</span>\r\n                    </h1>\r\n                </div>\r\n                <div class=\"aw-home__bubble-tags-wrapper\">\r\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\r\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\r\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\r\n                        </n7-tag>\r\n                        <br>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"aw-home__bubble-results-list-wrapper\">\r\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\r\n                        <n7-content-placeholder \r\n                            *ngFor=\"let i of [1, 2, 3, 4, 5]\"\r\n                            [data]=\"{\r\n                                blocks: [{\r\n                                    classes: 'search-result-placeholder-title'\r\n                                }, {\r\n                                    classes: 'search-result-placeholder-metadata'\r\n                                }]\r\n                        }\"></n7-content-placeholder>\r\n                    </div>\r\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\r\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\r\n\r\n                        <div class=\"aw-home__bubble-results-fallback\"\r\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\r\n                            <p class=\"aw-home__bubble-results-fallback-text\">\r\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\r\n                            </p>\r\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\r\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\r\n                                Resetta la ricerca\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"aw-item-preview-list\">\r\n                            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result\">\r\n                                <div class=\"aw-item-preview-wrapper\">\r\n                                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                                    </n7-smart-breadcrumbs>\r\n                                    <n7-item-preview [data]=\"preview\"\r\n                                                        [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                                    </n7-item-preview>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                        \r\n                        <!-- <ng-container\r\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\r\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                        </ng-container> -->\r\n\r\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\r\n                            <div class=\"aw-home__bubble-results-list-loader\">\r\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\r\n                                </n7-loader>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\r\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\r\n                </div>\r\n                <!-- aw-linked-objects__actions -->\r\n                <ng-container\r\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\r\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\r\n                        class=\"aw-home__bubble-results-list-actions\">\r\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\r\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\r\n                            {{action[0].label}}\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n\r\n    <!-- Outer links -->\r\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\r\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\r\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\r\n                {{ lb.dataSource.outerLinksTitle }}\r\n            </h2>\r\n            <div class=\"aw-home__outer-links-items\">\r\n                <!-- Item preview -->\r\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\r\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\r\n                </n7-item-preview>\r\n                <!-- END // Item preview -->\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- END // Outer links -->\r\n\r\n    <!-- Hero section at the bottom of the page -->\r\n    <div class=\"aw-home__bottom-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Adavanced autocomplete popover  -->\r\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\r\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\r\n            <n7-loader [data]=\"{}\"></n7-loader>\r\n        </div>\r\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\r\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\r\n        </n7-advanced-autocomplete>\r\n    </div>\r\n\r\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\r\n    <!-- Creating one template for each facet -->\r\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\r\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\r\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\r\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\r\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\r\n                <n7-loader [data]=\"{}\"></n7-loader>\r\n            </div>\r\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\r\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\r\n            </n7-simple-autocomplete>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        Router,
        ConfigurationService,
        CommunicationService,
        MainStateService])
], AwHomeLayoutComponent);

class AwMapLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.pageSize = 10;
        this.state$ = new BehaviorSubject('EMPTY');
        this.currentPage = 1;
    }
    onInit({ configuration, mainState, options, titleService, communication, }) {
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Mappa');
        // navigation update
        this.mainState.updateCustom('currentNav', 'mappa');
        this.communication.request$('getMapObjects').subscribe((response) => {
            this.one('aw-map').update(response);
        });
    }
    onMarkerOpen({ id, label }) {
        // loading results
        this.state$.next('LOADING');
        this.communication.request$('getEntityRelatedItems', {
            params: {
                selectedEntitiesIds: [id]
            }
        }).subscribe(({ itemsPagination }) => {
            // clear loading
            this.state$.next('SUCCESS');
            this.relatedItems = itemsPagination.items;
            this.total = this.relatedItems.length;
            let text = `<strong>${this.total}</strong> Risultati collegati a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
            if (this.total === 1) {
                text = `<strong>${this.total}</strong> Risultato collegato a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
            }
            this.one('aw-scheda-inner-title').update({
                title: {
                    main: { text }
                }
            });
            // update items
            this.updateItems();
            // update pagination
            this.updatePagination();
        });
    }
    onMarkerClose() {
        // reset
        this.state$.next('EMPTY');
        this.pageSize = 10;
        this.currentPage = 1;
        this.relatedItems = [];
        this.total = 0;
        this.one('aw-scheda-inner-title').update({
            title: {
                main: { text: '' }
            }
        });
        this.one('aw-linked-objects').update({ items: [] });
    }
    onPaginationChange({ value }) {
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    }
    onPaginationClick({ page }) {
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    }
    updateItems() {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    }
    updatePagination() {
        this.one('n7-smart-pagination').updateOptions({
            mode: 'payload'
        });
        this.one('n7-smart-pagination').update({
            totalPages: Math.ceil(this.total / this.pageSize),
            currentPage: this.currentPage,
            pageLimit: 5,
            sizes: {
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
    }
}

class AwMapLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.dataSource.onInit(payload);
                    this.emitOuter('init', payload);
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'aw-map-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-map.markeropen':
                    this.dataSource.onMarkerOpen(payload);
                    break;
                case 'aw-map.markerclose':
                    this.dataSource.onMarkerClose();
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.onPaginationChange(payload);
                    break;
                case 'n7-smart-pagination.click':
                    this.dataSource.onPaginationClick(payload);
                    break;
                default:
                    break;
            }
        });
    }
}

const AwMapLayoutConfig = {
    layoutId: 'aw-map-layout',
    widgets: [
        { id: 'aw-map' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
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
    constructor(configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwMapLayoutConfig') || AwMapLayoutConfig);
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
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwMapLayoutComponent = __decorate([
    Component({
        selector: 'aw-map-layout',
        template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n        title: {\r\n            main: {\r\n                    text: 'I luoghi dell\\'archivio'\r\n            }\r\n        }\r\n    }\">\r\n    </n7-inner-title>\r\n\r\n    <!-- Map -->\r\n    <div class=\"aw-multimedia__map\">\r\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\r\n    </div>\r\n    <!-- END // Map -->\r\n\r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title \r\n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs \r\n                            [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview \r\n                            [data]=\"preview\" \r\n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
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
        /** Name of query that should be used (chosen in config) */
        this.getTreeQuery = 'getTree';
        this.getTree = () => AwSchedaLayoutDS.tree;
    }
    onInit({ configuration, mainState, router, options, titleService, communication, }) {
        var _a, _b;
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.relatedEntitiesHeader = this.configuration.get('scheda-layout')['related-entities'].title;
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items'].title;
        this.externalUrlText = this.configuration.get('scheda-layout')['external-url-text'];
        this.metadataSectionTitle = this.getMetadataSectionTitle();
        this.hasSimilarItems = false;
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
        this.emptyStateString = this.configuration.get('scheda-layout')['empty-html'];
        this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
        // switch the tree query to the slim version
        if ((_b = (_a = this.configuration.get('scheda-layout')) === null || _a === void 0 ? void 0 : _a.tree) === null || _b === void 0 ? void 0 : _b.lite) {
            this.getTreeQuery = 'getTreeLite';
        }
        this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
        this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // image viewer context-menu check
        const imageViewerConfig = this.configuration.get('scheda-layout')['image-viewer'] || {};
        this.hasContextMenu = () => !!imageViewerConfig['context-menu'];
        // pdf viewer options
        this.one('aw-scheda-pdf').updateOptions(this.configuration.get('scheda-layout')['pdf-viewer'] || {});
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
        return this.communication.request$(this.getTreeQuery, {
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
            // reset
            this.currentDigitalObject = null;
            this.currentDigitalObjectIndex = null;
            const metadataFields = this.getFields(response);
            this.hasMetadata = !!(Array.isArray(metadataFields) && metadataFields.length);
            this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
            this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
            this.hasDigitalObjects = (Array.isArray(response.digitalObjects)
                && response.digitalObjects.length);
            this.hasRelatedEntities = (Array.isArray(response.relatedEntities)
                && response.relatedEntities.length);
            this.hasContent = !!(this.hasMetadata
                || this.hasSimilarItems
                || this.hasRelatedEntities
                || this.hasDigitalObjects);
            this.contentParts = [];
            const content = { content: null };
            if (response.text) {
                content.content = response.text;
            }
            this.contentParts.push(content);
            // digital objects
            if (this.hasDigitalObjects) {
                response.digitalObjects = this.normalizeDigitalObjects(response.digitalObjects);
                // this.one('aw-scheda-digital-objects').update(response.digitalObjects);
                this.one('aw-scheda-dropdown').update(response);
                this.digitalObjects = response.digitalObjects;
                this.changeDigitalObject(0);
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
            this.one('aw-scheda-metadata').update(metadataFields);
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
        merge$1(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe(() => {
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
        const { fields, document_type: dt, document_classification: dc } = response;
        const paths = this.configuration.get('paths');
        const labels = this.configuration.get('labels');
        const dcSegments = typeof dc === 'string' ? dc.split('.') : [];
        const dcLastSegment = dcSegments[dcSegments.length - 1];
        let metadataToShow = get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
        metadataToShow = metadataToShow[dcLastSegment] || metadataToShow[dt] || [];
        return metadataHelper.normalize({
            fields,
            paths,
            labels,
            metadataToShow,
            type: dt
        });
    }
    changeDigitalObject(payload) {
        if (this.currentDigitalObjectIndex !== payload) {
            // link check
            if (this.digitalObjects[payload].type === 'external' && this.currentDigitalObject) {
                window.open(this.digitalObjects[payload].url, '_blank');
            }
            else {
                // always reset image viewer
                const schedaImageDS = this.getWidgetDataSource('aw-scheda-image');
                schedaImageDS.reset();
                this.currentDigitalObjectIndex = payload;
                this.currentDigitalObject = this.digitalObjects[payload];
                if (this.currentDigitalObject.type.includes('images')) {
                    if (schedaImageDS.hasInstance()) {
                        schedaImageDS.updateImages(this.currentDigitalObject);
                    }
                    else {
                        this.one('aw-scheda-image').update(this.currentDigitalObject);
                    }
                }
                else if (this.currentDigitalObject.type === 'pdf') {
                    this.one('aw-scheda-pdf').update(this.currentDigitalObject);
                }
            }
        }
    }
    normalizeDigitalObjects(digitalObjects) {
        return digitalObjects.map(($do) => {
            if ($do.type.includes('images')) {
                return {
                    id: 'scheda-layout-viewer',
                    type: $do.type,
                    label: $do.label,
                    hasNavigation: $do.items.length > 1,
                    items: $do.items.map(({ url }) => ({
                        url,
                        type: $do.type,
                    }))
                };
            }
            return $do;
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
                        // scroll top
                        window.scrollTo(0, 0);
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
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
                    break;
                case 'aw-scheda-dropdown.click':
                    this.dataSource.changeDigitalObject(payload);
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
            // scroll top
            window.scrollTo(0, 0);
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
        { id: 'aw-scheda-dropdown' },
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-pdf' },
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
        template: "<div class=\"aw-scheda\"\r\n     id=\"scheda-layout\">\r\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\r\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\r\n\r\n        <ng-container *ngTemplateOutlet=\"tree\"></ng-container>\r\n\r\n        <div class=\"aw-scheda__scheda-wrapper\"\r\n             [hidden]=\"lb.dataSource.contentIsLoading\">\r\n\r\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\r\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\r\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\r\n            </n7-smart-breadcrumbs>\r\n\r\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\r\n                 class=\"aw-scheda__fake-breadcrumbs\">\r\n            </div>\r\n\r\n            <div *ngIf=\"!lb.dataSource.currentId\"\r\n                 class=\"aw-scheda__intro-text\"\r\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\r\n            </div>\r\n\r\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n\r\n            <!-- Empty state -->\r\n            <ng-container *ngIf=\"!lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"empty\"></ng-container>\r\n            </ng-container>\r\n\r\n            <!-- Content sections -->\r\n            <ng-container *ngIf=\"lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #tree>\r\n    <div class=\"aw-scheda__tree sticky-target\"\r\n         [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n        <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\r\n                           [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\r\n        <div class=\"aw-scheda__tree-content-loading\"\r\n             *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n                                    [data]=\"{\r\n                            blocks: [{\r\n                                classes: 'tree-placeholder-item'\r\n                            }]\r\n                        }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-scheda__tree-content\"\r\n             (click)=\"lb.eventHandler.emitOuter('treeposition', $event)\"\r\n             [ngStyle]=\"{\r\n                            'max-height': lb.dataSource.treeMaxHeight,\r\n                            'overflow': 'auto'\r\n                        }\">\r\n            <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\r\n                     [emit]=\"lb.widgets['aw-tree'].emit\"\r\n                     *ngIf=\"!lb.dataSource.sidebarCollapsed\">\r\n            </n7-tree>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #empty>\r\n    <section class=\"aw-scheda__section aw-scheda__empty\"\r\n             [innerHTML]=\"lb.dataSource.emptyStateString\">\r\n    </section>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n    <!-- Digital Object selection dropdown -->\r\n    <section class=\"aw-scheda__digital-object-dropdown\"\r\n            *ngIf=\"(\r\n                lb.dataSource.hasDigitalObjects \r\n                && lb.dataSource.digitalObjects.length > 1\r\n            )\">\r\n        <p class=\"aw-scheda__digital-object-dropdown-label\">\r\n            Seleziona l'oggetto digitale da visualizzare:\r\n        </p>\r\n        <aw-scheda-dropdown \r\n        [data]=\"lb.widgets['aw-scheda-dropdown'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['aw-scheda-dropdown'].emit\">\r\n        </aw-scheda-dropdown>\r\n    </section>\r\n    <!-- END // Digital Object selection dropdown -->\r\n\r\n    <!-- Digital Objects: images, IIP, PDFs, external links -->\r\n    <section *ngIf=\"lb.dataSource.currentDigitalObject as $do\" \r\n        class=\"aw-scheda__media aw-scheda__{{ $do.type }}\"\r\n        [ngClass]=\"{ \r\n            'navigation-hidden': !$do.hasNavigation\r\n        }\">\r\n        <ng-container [ngSwitch]=\"$do.type\">\r\n            <!-- IMAGE VIEWER (IIIF) -->\r\n            <ng-container *ngSwitchCase=\"'images-iiif'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\" \r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n\r\n            <!-- IMAGE VIEWER (Simple: jpg, png) -->\r\n            <ng-container *ngSwitchCase=\"'images-simple'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\"\r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- PDF -->\r\n            <ng-container *ngSwitchCase=\"'pdf'\">\r\n                <aw-pdf-viewer \r\n                [data]=\"lb.widgets['aw-scheda-pdf'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-scheda-pdf'].emit\">\r\n                </aw-pdf-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- EXTERNAL URL -->\r\n            <ng-container *ngSwitchCase=\"'external'\">\r\n                <div class=\"aw-scheda__external-url\">\r\n                    <a class=\"aw-scheda__external-url-link\" href=\"{{ $do.url }}\" target=\"_blank\">\r\n                        {{ $do.label || lb.dataSource.externalUrlText }}\r\n                        <span class=\"n7-icon-external-link\"></span>\r\n                    </a>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n    </section>\r\n    <!-- END // Digital Objects -->\r\n\r\n    <section class=\"aw-scheda__section aw-scheda__description\"\r\n             *ngIf=\"lb.dataSource.contentParts.content\">\r\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\r\n            <div [innerHTML]=\"part.content\"></div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Metadata -->\r\n    <section class=\"aw-scheda__section aw-scheda__metadata\"\r\n             *ngIf=\"lb.dataSource.hasMetadata\">\r\n        <div class=\"aw-scheda__inner-title\"\r\n             *ngIf=\"lb.dataSource.metadataSectionTitle\">\r\n            {{lb.dataSource.metadataSectionTitle}}\r\n        </div>\r\n        <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\r\n        </n7-metadata-viewer>\r\n    </section>\r\n    <!-- END // Metadata -->\r\n\r\n    <!-- Related entities -->\r\n    <section *ngIf=\"lb.dataSource.hasRelatedEntities\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.relatedEntitiesHeader}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                     [emit]=\"lb.widgets['aw-related-entities'].emit\">\r\n                    </n7-item-preview>\r\n                    <!-- Relation -->\r\n                    <div class=\"aw-item-preview-relation\"\r\n                         *ngIf=\"preview.relation?.value\">\r\n                        <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                            <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                            <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Related entities -->\r\n\r\n    <!-- Similar Objects -->\r\n    <section *ngIf=\"lb.dataSource.hasSimilarItems\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.similarItemsSectionTitle}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                    </n7-item-preview>\r\n                </div> \r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Similar Objects -->\r\n</ng-template>\r\n"
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
        template: "<div class=\"aw-search n7-side-auto-padding\"\r\n     id=\"search-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n        <!--\r\n        <div class=\"aw-search__header-right\">\r\n            <n7-nav\r\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\r\n            </n7-nav>\r\n        </div>\r\n        -->\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar sticky-target\"\r\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </aw-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"scroll-ref\">&nbsp;</div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                        class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                            id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\r\n                                [value]=\"option.value\"\r\n                                [selected]=\"option.selected\"\r\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\r\n                                        [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper\">\r\n                 <div class=\"aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\r\n                                class=\"n7-btn aw-search__fallback-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        LayoutsConfigurationService,
        MainStateService,
        CommunicationService,
        AwSearchService,
        ActivatedRoute])
], AwSearchLayoutComponent);

class AwTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.pageSize = 10;
        this.state$ = new BehaviorSubject('EMPTY');
        this.currentPage = 1;
    }
    onInit({ configuration, mainState, options, titleService, communication, }) {
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.titleService = titleService;
        this.mainState.update('headTitle', 'Arianna4View - Timeline');
        // navigation update
        this.mainState.updateCustom('currentNav', 'timeline');
        this.communication.request$('getEventObjects', {
            params: {},
            onError: (err) => {
                console.warn(err);
            }
        }).subscribe((response) => {
            this.one('aw-timeline').update(response);
        });
    }
    onTimelineClick({ id, label, dateText }) {
        if (isNull(id)) {
            this.currentId = null;
            this.clearResults();
        }
        else {
            // loading results
            this.state$.next('LOADING');
            this.communication.request$('getEntityRelatedItems', {
                params: {
                    selectedEntitiesIds: [id]
                }
            }).subscribe(({ itemsPagination }) => {
                // clear loading
                this.state$.next('SUCCESS');
                this.relatedItems = itemsPagination.items;
                this.total = this.relatedItems.length;
                let text = `<strong>${this.total}</strong> Risultati collegati a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
                if (this.total === 1) {
                    text = `<strong>${this.total}</strong> Risultato collegato a<br><span class="aw-multimedia__results-title-big">${label}</span>`;
                }
                this.one('aw-scheda-inner-title').update({
                    title: {
                        main: { text },
                        secondary: dateText ? {
                            text: dateText
                        } : null
                    }
                });
                // update items
                this.updateItems();
                // update pagination
                this.updatePagination();
            });
        }
    }
    clearResults() {
        if (!this.relatedItems) {
            return;
        }
        // reset
        this.state$.next('EMPTY');
        this.pageSize = 10;
        this.currentPage = 1;
        this.relatedItems = [];
        this.total = 0;
        this.one('aw-scheda-inner-title').update({
            title: {
                main: { text: '' }
            }
        });
        this.one('aw-linked-objects').update({ items: [] });
    }
    onPaginationChange({ value }) {
        this.pageSize = +value;
        this.updateItems();
        this.updatePagination();
    }
    onPaginationClick({ page }) {
        if (typeof page === 'number' && page !== this.currentPage) {
            this.currentPage = page;
            this.updateItems();
            this.updatePagination();
        }
    }
    updateItems() {
        this.one('aw-linked-objects').updateOptions({
            context: 'map',
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            size: this.pageSize,
        });
        this.one('aw-linked-objects').update({ items: this.relatedItems });
    }
    updatePagination() {
        this.one('n7-smart-pagination').updateOptions({
            mode: 'payload'
        });
        this.one('n7-smart-pagination').update({
            totalPages: Math.ceil(this.total / this.pageSize),
            currentPage: this.currentPage,
            pageLimit: 5,
            sizes: {
                list: [10, 25, 50],
                active: this.pageSize,
            },
        });
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
                    this.emitOuter('init', payload);
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'aw-timeline-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-timeline.click':
                    this.dataSource.onTimelineClick(payload);
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.onPaginationChange(payload);
                    break;
                case 'n7-smart-pagination.click':
                    this.dataSource.onPaginationClick(payload);
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
        { id: 'aw-timeline' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
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
    constructor(configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwTimelineLayoutConfig') || AwTimelineLayoutConfig);
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
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
AwTimelineLayoutComponent = __decorate([
    Component({
        selector: 'aw-timeline-layout',
        template: "<div class=\"aw-multimedia\" id=\"timeline-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n               title: {\r\n                    main: {\r\n                         text: 'Gli eventi dell\\'archivio'\r\n                    }\r\n               }\r\n          }\">\r\n    </n7-inner-title>\r\n    \r\n    <!-- Timeline -->\r\n    <div class=\"aw-multimedia__timeline\">\r\n        <n7-timeline [data]=\"lb.widgets['aw-timeline'].ds.out$ | async\"></n7-timeline>\r\n        \r\n        <div id=\"timelinecontrols\" class=\"aw-multimedia__timeline-controls\" *ngIf=\"lb.widgets['aw-timeline'].ds.timelineControlsVisible\">\r\n            <button class=\"n7-btn aw-multimedia__timeline-control\" (click)=\"lb.eventHandler.emitOuter('zoomin', {})\">\r\n                <span class=\"n7-icon-search-plus\"></span>\r\n            </button>\r\n\r\n            <button class=\"n7-btn aw-multimedia__timeline-control\" (click)=\"lb.eventHandler.emitOuter('zoomout', {})\">\r\n                <span class=\"n7-icon-search-minus\"></span>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- END // Timeline -->\r\n    \r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un evento della timeline per vedere tutti gli oggetti culturali collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        LayoutsConfigurationService,
        CommunicationService,
        MainStateService,
        Title])
], AwTimelineLayoutComponent);

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
        template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>"
    })
], AwFacetsWrapperComponent);

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
        template: "<div class=\"aw-bubble-chart-wrapper\">\r\n    <ng-content></ng-content>\r\n</div>"
    })
], BubbleChartWrapperComponent);

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
        template: "<div *ngIf=\"data\" style=\"display: none;\">\r\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\r\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\r\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\r\n      <p class=\"aw-bubble-popup-menu__text\">\r\n        {{ d.text }}\r\n      </p>\r\n\r\n      <div *ngIf=\"d.relation.value\" class=\"aw-item-preview-relation\">\r\n        <p class=\"aw-item-preview-relation__description\">Tipo di relazione \r\n          <!-- <span class=\"aw-item-preview-relation__key\">{{d.relation.key}}</span>: -->\r\n          <span class=\"aw-item-preview-relation__label\">{{d.relation.value}}</span>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"aw-bubble-popup-menu__actions\">\r\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\r\n          Vai alla scheda\r\n        </n7-anchor-wrapper>\r\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\r\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
    })
], ChartTippyComponent);

//---------------------------
let PdfViewerComponent = class PdfViewerComponent {
    onClick(payload) {
        if (!this.emit || isNull(payload)) {
            return;
        }
        this.emit('click', payload);
    }
    onLoaded() {
        this.emit('loaded');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PdfViewerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], PdfViewerComponent.prototype, "emit", void 0);
PdfViewerComponent = __decorate([
    Component({
        selector: 'aw-pdf-viewer',
        template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\r\n    <div class=\"aw-pdf-viewer__loader\">\r\n        <n7-loader></n7-loader>\r\n    </div>\r\n    \r\n    <ngx-extended-pdf-viewer\r\n        [src]=\"data.currentUrl\"\r\n        [height]=\"'90vh'\"\r\n        [useBrowserLocale]=\"true\"\r\n        [textLayer]=\"true\"\r\n        [showToolbar]=\"data.libOptions.showToolbar\"\r\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\r\n        [showFindButton]=\"data.libOptions.showFindButton\"\r\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\r\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\r\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\r\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\r\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\r\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\r\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\r\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\r\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\r\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\r\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\r\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\r\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\r\n        (pdfLoaded)=\"onLoaded()\"\r\n        (pdfLoadingFailed)=\"onLoaded()\">\r\n    </ngx-extended-pdf-viewer>\r\n    \r\n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\r\n        <div class=\"aw-pdf-viewer__navigation-tools\">\r\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.prev)\">\r\n                <span class=\"n7-icon-angle-left\"></span>\r\n            </a>\r\n            <div class=\"aw-pdf-viewer__navigation-select\">\r\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\r\n                <select (change)=\"onClick(+$event.target.value)\">\r\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\r\n                    [selected]=\"item.selected\">{{ item.label }}</option>\r\n                </select>\r\n            </div>\r\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.next)\">\r\n                <span class=\"n7-icon-angle-right\"></span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"
    })
], PdfViewerComponent);

//---------------------------
let SchedaDropdownComponent = class SchedaDropdownComponent {
    onClick(ev, payload) {
        if (!this.emit) {
            return;
        }
        ev.stopImmediatePropagation();
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SchedaDropdownComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SchedaDropdownComponent.prototype, "emit", void 0);
SchedaDropdownComponent = __decorate([
    Component({
        selector: 'aw-scheda-dropdown',
        template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\r\n    <div class=\"aw-scheda-dropdown__header\"\r\n    (click)=\"onClick($event, data.header.payload)\">\r\n        <!-- header label -->\r\n        <span class=\"aw-scheda-dropdown__header-label\">\r\n            {{ data.header.label }}\r\n        </span>\r\n        <!-- header icon -->\r\n        <span class=\"aw-scheda-dropdown__header-icon\"\r\n        [ngClass]=\"data.header.icon['id']\">\r\n        </span>\r\n    </div>\r\n    <div class=\"aw-scheda-dropdown__items\">\r\n        <ul>\r\n            <li *ngFor=\"let item of data.items\"\r\n            [ngClass]=\"{\r\n                'is-selected': item.selected \r\n            }\"\r\n            (click)=\"onClick($event, item.payload)\">\r\n                {{ item.label }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"
    })
], SchedaDropdownComponent);

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
                    this.tippyBuilder(liArray[i].children[0], tippyData); // append tooltip to ellipsis
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
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <span class=\"ellipsis-target\">\r\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        {{ item.label }}\r\n                    </n7-anchor-wrapper>\r\n                </span>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
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
    getSlider: {
        queryName: 'getSlider',
        queryBody: ` {
      getSlider {
        pretext
        title
        text
        background {
            type
            value
        }
        ctaLabel
        ctaPayload
        metadata {
            key
            value
        }
      }
    }`
    },
    getTreeLite: {
        queryName: 'getTreeOfItems',
        queryBody: `
      {
        getTreeOfItems{
          label
          id
          document_type
          document_classification
          branches {
            label
            id
            document_type
            document_classification
            branches {
              label
              id
              document_type
              document_classification
              branches {
                label
                id
                document_type
                document_classification
                branches {
                  label
                  id
                  document_type
                  document_classification
                  branches {
                    label
                    id
                    document_type
                    document_classification
                    branches {
                      label
                      id
                      document_type
                      document_classification
                      branches {
                        label
                        id
                        document_type
                        document_classification
                        branches {
                          label
                          id
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
    getEntityRelatedItems: {
        queryName: 'globalFilter',
        queryBody: `{
        globalFilter(__PARAMS__){
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
          relatedItemsTotalCount,
          relatedLaTotalCount: relatedAlTotalCount,
          overviewTab
          label
          id
          typeOfEntity
          relatedLa: relatedAl {
            thumbnail
            relation          
            item {
              label
              id
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
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
            digitalObjects {
              label
              type
              url
              order
              items {      
                order      
                label
                url                 
              }
            }
            text
            document_type
            document_classification
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
            document_classification
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
            relatedEntities {
              count
              entity {
                id
                label
                typeOfEntity
                relation
              }
            }
            breadcrumbs {
              label
              link
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
    getMapObjects: {
        queryName: 'getMapObjects',
        queryBody: `{
      getMapObjects{
        lat
        lon
        item {
          ...on Item {
              id
              label
          }
          ...on Entity {
              id
              label
          }
        }
      }
    }`,
    },
    getEventObjects: {
        queryName: 'getEventObjects',
        queryBody: `{
      getEventObjects{
        id
        start
        end
        label
        item {
          ... on Entity {
            id
            label
          }
        }
      }
    }`,
    },
    getCollection: {
        queryName: 'getCollection',
        queryBody: `{
      getCollection(__PARAMS__) {
        title
        text
        total
        items {
          title
          content
          background
          image
          url
          a4vId
          type
          classification
        }
      }
    }`
    }
};

const COMPONENTS$1 = [
    AwCollectionLayoutComponent,
    AwEntitaLayoutComponent,
    AwFacetsWrapperComponent,
    AwGalleryLayoutComponent,
    AwHomeLayoutComponent,
    AwMapLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    AwTimelineLayoutComponent,
    BubbleChartWrapperComponent,
    ChartTippyComponent,
    PdfViewerComponent,
    SchedaDropdownComponent,
    SmartBreadcrumbsComponent,
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
            NgxExtendedPdfViewerModule
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
        template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\r\n    <ng-content></ng-content>\r\n</div>"
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
        template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\r\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\r\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\r\n        <span class=\"{{data.select.icon}}\"></span>\r\n    </div>\r\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\r\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\r\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\r\n        </ul>\r\n    </div>\r\n    <n7-datepicker\r\n        [data]=\"data.datepicker.data\"\r\n        [emit]=\"emit\">\r\n    </n7-datepicker>\r\n</div>\r\n"
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
        template: "<div class=\"dv-example-layout\" id=\"example-layout\">\r\n\r\n    <!-- Data widget wrapper with not-fixed height, two rows -->\r\n    <dv-data-widget-wrapper>\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-chart\r\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\r\n                </n7-chart>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, two rows -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                Row content\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, one row -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n    \r\n    <dv-datepicker-wrapper \r\n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\r\n    </dv-datepicker-wrapper>\r\n</div>"
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

const hasValue = (value) => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
};
const ɵ0$1 = hasValue;
var searchHelper = {
    stateToQueryParams(state, schemas) {
        const queryParams = {};
        Object.keys(state).forEach((key) => {
            const schema = schemas[key];
            const { multiple, valueType } = schema;
            const value = state[key];
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

let MrResourceModalService = class MrResourceModalService {
    constructor(configuration, communication) {
        this.configuration = configuration;
        this.communication = communication;
        this.state$ = new Subject();
        // default state
        this.state$.next({ status: 'IDLE' });
    }
    open(resourceId, configId) {
        this.state$.next({ status: 'LOADING' });
        const config = this.configuration.get(`resource-modal-${configId}`);
        // add translations
        ['top', 'content'].forEach((type) => {
            config.sections[type] = config.sections[type].map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title) })));
        });
        this.pageRequest$(resourceId, config, (err) => {
            console.warn(`Error loading resource modal for ${resourceId}`, err.message);
            this.state$.next({ status: 'ERROR' });
        }).subscribe((response) => {
            this.state$.next({ response, config, status: 'SUCCESS', });
        });
    }
    close() {
        this.state$.next({ status: 'IDLE' });
    }
    pageRequest$(id, config, onError) {
        const { top, content } = config.sections;
        const sections = top.concat(content);
        return this.communication.request$('resource', {
            onError,
            method: 'POST',
            params: {
                id,
                type: config.type,
                sections: sections.map((s) => s.id),
            }
        });
    }
};
MrResourceModalService.ctorParameters = () => [
    { type: ConfigurationService },
    { type: CommunicationService }
];
MrResourceModalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigurationService,
        CommunicationService])
], MrResourceModalService);

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

class MrAdvancedResultsLayoutDS extends LayoutDataSource {
    onInit(payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.communication = payload.communication;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
        // update translations
        this.addTranslations(this.pageConfig);
    }
    updateSearchTags(params) {
        if (!this.pageConfig.filters) {
            return;
        }
        const { labels } = this.pageConfig.filters;
        const tags = [];
        Object.keys(labels)
            .filter((key) => !!params[key])
            .forEach((key) => {
            tags[key] = params[key];
        });
        this.one('mr-advanced-search-tags').updateOptions({ labels });
        this.one('mr-advanced-search-tags').update(tags);
    }
    request$(params, onError) {
        const { searchId } = this.pageConfig;
        const searchParams = Object.assign({}, params);
        Object.keys(searchParams)
            .filter((key) => ['page', 'limit', 'sort'].includes(key))
            .forEach((key) => {
            searchParams.results = searchParams.results || {};
            searchParams.results[key] = searchParams[key];
            delete searchParams[key];
        });
        // normalize results filters
        const resultsParams = {};
        const results = searchParams.results || {};
        const page = results.page ? +results.page : 1;
        resultsParams.limit = results.limit ? +results.limit : 12;
        resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
        resultsParams.sort = results.sort || 'sort_ASC';
        return this.communication.request$('advancedSearch', {
            method: 'POST',
            params: Object.assign(Object.assign({}, searchParams), { searchId, results: Object.assign({}, resultsParams) }),
            onError
        });
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
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    addTranslations(config) {
        var _a;
        if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label) })));
        }
        ['text', 'button'].forEach((key) => {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
        // filters
        const { filters } = this.pageConfig;
        if (filters) {
            filters.title = _t(filters.title);
            Object.keys(filters.labels).forEach((key) => {
                filters.labels[key] = _t(filters.labels[key]);
            });
        }
    }
    getPaginationParams(response) {
        const { total_count: totalCount, offset, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: (offset + limit) / limit,
            pageLimit: paginationConfig.limit,
            sizes: {
                label: paginationConfig.selectLabel ? _t(paginationConfig.selectLabel) : null,
                list: paginationConfig.options,
                active: limit,
            },
        };
    }
}

class MrAdvancedResultsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-advanced-results-layout.init':
                    this.activatedRoute = payload.activatedRoute;
                    this.router = payload.router;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listen route changes
                    this.listenToRouterChanges();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-advanced-results-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.click':
                    this.updateRouter({ page: payload.page });
                    break;
                case 'n7-smart-pagination.change':
                    this.updateRouter({ limit: payload.value, page: 1 });
                    break;
                case 'mr-search-results-title.change':
                    this.updateRouter({ sort: payload.value, page: 1 });
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    /** URL changes */
    listenToRouterChanges() {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('results', LayoutState.LOADING);
        }), switchMap((params) => {
            this.dataSource.updateSearchTags(params);
            return this.dataSource.request$(params, (error) => {
                console.warn('Advanced search error', error);
                this.layoutState.set('results', LayoutState.ERROR);
            });
        })).subscribe((response) => {
            this.dataSource.handleResponse(response);
            this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
            // scroll to ref element
            if (!this.scrollRefElement) {
                this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(this.scrollRefElement)) {
                this.scrollRefElement.scrollIntoView();
            }
        });
    }
    updateRouter(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge'
        });
    }
}

class MrBreadcrumbsDS extends DataSource {
    transform(data) {
        let items = [];
        if (Array.isArray(data) && data.length) {
            let { base } = this.options || {};
            base = Array.isArray(base) ? base : [];
            items = [
                ...base.map(({ link, title }) => ({
                    label: _t(title),
                    anchor: { href: link }
                })),
                ...data.map(({ link, title }) => ({
                    label: title,
                    anchor: { href: link }
                }))
            ];
        }
        // remove last link
        if (items.length) {
            items[items.length - 1].anchor = null;
        }
        return { items };
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
const ɵ0$2 = extractQueryParams;
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

const ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
class MrCollectionDS extends DataSource {
    transform(data) {
        if (data === undefined) {
            return null;
        }
        const { header, items } = data;
        // items check
        if (Array.isArray(items) && !items.length) {
            return null;
        }
        const { classes, itemPreview } = this.options;
        const itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
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
            header: header ? {
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
            } : null,
            items: items.map((item) => {
                let anchor = null;
                if (item.text) {
                    // Sanitize HTML tags from the text content
                    if (itemPreviewOptions.striptags) {
                        item.text = helpers.striptags(item.text);
                    }
                    // Limit the length of the item preview text content
                    if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                        item.text = `${item.text.substring(0, itemPreviewOptions.limit)}...`;
                    }
                }
                if (item.link) {
                    anchor = {
                        href: linksHelper.getRouterLink(item.link),
                        queryParams: linksHelper.getQueryParams(item.link)
                    };
                }
                if (item.payload) {
                    anchor = {
                        payload: Object.assign({}, item.payload)
                    };
                }
                return Object.assign(Object.assign({}, item), { anchor, classes: classes || '' });
            })
        };
    }
}

class MrContentDS extends DataSource {
    transform(data) {
        return data;
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

const ITEM_PREVIEW_DEFAULTS$1 = {
    limit: 100,
    striptags: true
};
class MrItemPreviewDS extends DataSource {
    transform(data) {
        const { classes, itemPreview } = this.options;
        const itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS$1, (itemPreview || {}));
        // striptags
        if (itemPreviewOptions.striptags) {
            data.text = helpers.striptags(data.text);
        }
        // limit
        if (itemPreviewOptions.limit && (data.text.length > itemPreviewOptions.limit)) {
            data.text = `${data.text.substring(0, itemPreviewOptions.limit)}...`;
        }
        return Object.assign(Object.assign({}, data), { anchor: {
                href: linksHelper.getRouterLink(data.link),
                queryParams: linksHelper.getQueryParams(data.link)
            }, classes: classes || '' });
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

const MARKER_ICON$1 = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
const MARKER_ICON_SELECTED$1 = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
class MrMapDS extends DataSource {
    constructor() {
        super(...arguments);
        this.mapLoaded$ = new Subject();
    }
    // eslint-disable-next-line consistent-return
    transform(data) {
        let markers;
        if (data.find((d) => d.markers)) {
            markers = data
                .map((area) => (area.markers
                .map((m) => {
                var _a, _b;
                return ({
                    // convert to leaflet marker format
                    coords: [+m.lat, +m.lng],
                    template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                    title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                    id: area.id,
                    slug: area.slug,
                });
            })))
                // flatten the list of markers
                .reduce((acc, val) => acc.concat(val), []);
        }
        const initialView = {
            // center of europe (only for initial load)
            center: [54.5260, 15.2551],
            zoom: 5,
        };
        // if the map and the markers already exist
        // update the already existing layers.
        if (this.mapInstance && this.markerLayer) {
            this.buildMarkers(markers);
            this.fitMapToBounds(markers.map((m) => m.coords));
        }
        return {
            // only called once, on component init!
            _setInstance: (instance) => {
                this.mapInstance = instance;
                // center the map on the markers
                this.fitMapToBounds(markers.map((m) => m.coords));
                // load custom markers
                this.buildMarkers(markers);
                this.mapLoaded$.next({ map: instance, markers: this.markerLayer });
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView,
        };
    }
    fitMapToBounds(bounds) {
        if (this.mapInstance) {
            this.mapInstance.fitBounds(bounds, {
                maxZoom: 15,
                padding: [20, 20],
            });
        }
        else {
            console.warn('map instance is missing');
        }
    }
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    buildMarkers(markers) {
        if (!markers)
            return;
        // remove all existing markers
        if (this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
        }
        const markerGroup = L.markerClusterGroup();
        markers.forEach(({ coords, template, id, slug }) => {
            // create custom icon marker
            const newMarker = L.marker(coords, { icon: MARKER_ICON$1 });
            if (id && slug) {
                newMarker.id = id;
                newMarker.slug = slug;
            }
            newMarker
                // add the marker to the group
                .addTo(markerGroup)
                // add the on-click tooltip
                .bindPopup(template);
            newMarker.getPopup().on('remove', ({ target }) => {
                target._source.setIcon(MARKER_ICON$1);
            });
            newMarker.getPopup().on('add', ({ target }) => {
                target._source.setIcon(MARKER_ICON_SELECTED$1);
            });
        });
        // add the markers to the map instance
        this.mapInstance.addLayer(markerGroup);
        // update the marker layer instance
        this.markerLayer = markerGroup;
    }
}

class MrMetadataDS extends DataSource {
    constructor() {
        super(...arguments);
        /** Test if a string is a valid URL */
        this.isUrl = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        /** Turn a string into an anchor element */
        this.toUrl = (string) => `<a href="${string}" target="_blank">${string}<a>`;
    }
    transform(data) {
        const { hideLabels } = this.options;
        const { group } = data;
        if (!(group || []).length) {
            return null;
        }
        const result = { group: [] };
        group
            .filter(({ items }) => Array.isArray(items))
            .forEach(({ items }) => {
            items
                .filter((item) => isObject(item))
                .forEach(({ label, value }) => {
                const itemLabel = label && !hideLabels ? label : null;
                if (Array.isArray(value)) {
                    result.group.push({
                        group: [Object.assign({ title: _t(itemLabel) }, this.getItemGroup(value))]
                    });
                }
                else {
                    result.group.push({
                        group: [{
                                items: value ? [{
                                        label: _t(itemLabel),
                                        value: this.getItemValue(value)
                                    }] : []
                            }]
                    });
                }
            });
        });
        return result;
    }
    getItemGroup(value) {
        if (Array.isArray(value) && Array.isArray(value[0])) {
            return {
                group: value.map((val) => (Object.assign({}, this.getItemGroup(val))))
            };
        }
        return {
            items: value
                .filter((childItem) => !!childItem.value)
                .map((childItem) => ({
                label: _t(childItem.label),
                value: this.getItemValue(childItem.value)
            }))
        };
    }
    getItemValue(value) {
        return this.isUrl.test(value) ? this.toUrl(value) : value;
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

class MrResourceTabsDS extends DataSource {
    transform(data) {
        const { currentTab, root, slug, id: resourceId } = this.options;
        return data.map(({ id, label }) => ({
            label: _t(label),
            classes: currentTab === id ? 'is-active' : '',
            anchor: {
                href: `/${root}/${resourceId}/${slug}/${id}`
            }
        }));
    }
}

class MrTextViewerDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        this.timelineLoaded$ = new Subject();
    }
    transform(data) {
        return {
            containerID: 'mr-timeline',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                align: 'left',
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: (d, element) => `<div class="tooltip">${element.title}</div>`
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                zoomFriction: 8
            },
            dataSet: data.dataSet.map((d) => {
                // Show dates that have identical start and end dates as points
                if (d.end && d.end === d.start) {
                    return Object.assign(Object.assign({}, d), { end: undefined });
                }
                return d;
            }),
            _setInstance: (timeline) => {
                this.timeline = timeline;
                this.timelineLoaded$.next(timeline);
            }
        };
    }
}

class MrYearHeaderDS extends DataSource {
    transform(data) {
        return data;
    }
}

class MrGalleryDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return {
            selected: null,
            items: data.map(({ id, title, thumbnail, image }) => ({
                id,
                title,
                thumbSrc: thumbnail,
                fullSrc: image,
                payload: id
            }))
        };
    }
    setSelected(itemId) {
        this.output.selected = this.output.items.find(({ id }) => id === itemId);
    }
    removeSelected() {
        this.output.selected = null;
    }
}

class MrSearchPageTitleDS extends DataSource {
    transform() {
        const { title, description, searchId } = this.options.config;
        const data = {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
        if (description && description.buttonText) {
            data.actions = {
                buttons: [{
                        text: _t(description.buttonText),
                        anchor: {
                            payload: searchId
                        }
                    }]
            };
        }
        return data;
    }
}

class MrSearchResultsTitleDS extends DataSource {
    transform(data) {
        const { totalResultsText, sort } = this.options.config;
        const { total_count: totalCount, sort: currentSort } = data;
        const mainText = _t(totalResultsText, { total: totalCount }, (key, { total }) => {
            if (total === 0) {
                return `${key}_0`;
            }
            if (total === 1) {
                return `${key}_1`;
            }
            return key;
        });
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

const ITEM_PREVIEW_DEFAULTS$2 = {
    limit: 100,
    striptags: true
};
class MrSearchResultsDS extends DataSource {
    transform(data) {
        const { results } = data;
        const { itemPreview } = this.options.config;
        const itemPreviewOptions = merge(clone(ITEM_PREVIEW_DEFAULTS$2), (itemPreview || {}));
        return results.map((item) => {
            if (typeof item.text === 'string') {
                // striptags
                if (itemPreviewOptions.striptags) {
                    item.text = helpers.striptags(item.text);
                }
                // limit
                if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                    item.text = `${item.text.substring(0, itemPreviewOptions.limit)}...`;
                }
            }
            // metadata
            const metadata = [];
            if (Array.isArray(item.metadata)) {
                item.metadata.forEach((group) => {
                    const items = [];
                    (group.items || []).forEach((metadataItem) => {
                        items.push(Object.assign(Object.assign({}, metadataItem), { label: _t(metadataItem.label) }));
                    });
                    metadata.push({ items });
                });
            }
            /*
              Add the highlights to the item's metadata with a custom group
            */
            if (item.highlights) {
                const highlightGroup = {
                    title: _t('advancedsearch#highlights_title'),
                    items: [],
                    classes: 'n7-item-preview__highlights'
                };
                item.highlights.forEach((highlight) => {
                    var _a, _b;
                    // if the item is an array interpret it as [label, [value]]
                    if (Array.isArray(highlight)) {
                        highlightGroup.items.push({
                            label: _t(highlight[0]),
                            value: _t(highlight[1][0])
                        });
                        // if it's an object then it should have a custom hyperlink
                    }
                    else {
                        highlightGroup.items.push({
                            label: highlight.label ? _t(highlight.label) : undefined,
                            value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                            href: (_b = `${item.link}${highlight.link}`) !== null && _b !== void 0 ? _b : undefined,
                        });
                    }
                });
                metadata.push(highlightGroup);
            }
            return Object.assign(Object.assign({}, item), { metadata, classes: itemPreviewOptions.classes, anchor: item.link ? {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                } : undefined });
        });
    }
}

class MrSearchTagsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFilters = false;
    }
    transform(data) {
        const { state, linksResponse, facetsConfig } = data;
        const { facets } = linksResponse;
        const tags = [];
        // inputs config
        facetsConfig.sections.forEach(({ inputs }) => {
            inputs
                .filter(({ queryParam }) => queryParam)
                .forEach(({ id }) => {
                if (state[id]) {
                    const values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values
                        .forEach((value) => {
                        let text = value;
                        if (facets[id]) {
                            const selectedFacet = facets[id].values.find(({ payload }) => payload === value);
                            if (selectedFacet) {
                                text = selectedFacet.text;
                            }
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

class MrSearchPageDescriptionDS extends DataSource {
    transform(data) {
        const { description } = this.options.config;
        if (!description) {
            return null;
        }
        const { linkText } = description;
        const { text } = data;
        return {
            text,
            link: {
                text: _t(linkText),
                payload: true
            }
        };
    }
}

var dateHelper = {
    format(date, format) {
        return moment(date).format(format);
    }
};

class MrStaticMetadataDS extends DataSource {
    transform(data) {
        const items = ['authors', 'date', 'time_to_read']
            .filter((metakey) => data[metakey])
            .map((metakey) => {
            const itemValue = metakey === 'date' ? dateHelper.format(data[metakey], _t('global#date_human')) : data[metakey];
            return {
                label: _t(`resource#${metakey}`),
                value: itemValue
            };
        });
        return { group: [{ items }] };
    }
}

const ICON_OPEN = 'n7-icon-angle-up';
const ICON_CLOSE = 'n7-icon-angle-down';
class MrFormWrapperAccordionDS extends DataSource {
    transform(data) {
        const { form } = data;
        const { groups } = form.config;
        // set accordion headers
        data.form.config.groups = groups.map((group) => (Object.assign(Object.assign({}, group), { options: Object.assign(Object.assign({}, group.options), { text: group.options.label, payload: group.id, iconRight: group.options.isOpen ? ICON_OPEN : ICON_CLOSE, isOpen: group.options.isOpen }) })));
        return data;
    }
    toggleGroup(groupId) {
        this.output.form.config.groups.forEach((group) => {
            if (group.id === groupId) {
                const { isOpen } = group.options;
                group.options.iconRight = isOpen ? ICON_CLOSE : ICON_OPEN;
                group.options.isOpen = !group.options.isOpen;
            }
        });
    }
}

class MrAdvancedSearchTagsDS extends DataSource {
    transform(data) {
        const { labels } = this.options;
        return Object.keys(data).map((key) => ({
            text: `${labels[key] || key}: ${_t(data[key])}`
        }));
    }
}

var DS$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MrBreadcrumbsDS: MrBreadcrumbsDS,
    MrCollectionDS: MrCollectionDS,
    MrContentDS: MrContentDS,
    MrFiltersDS: MrFiltersDS,
    MrHeroDS: MrHeroDS,
    MrImageViewerDS: MrImageViewerDS,
    MrInfoBoxDS: MrInfoBoxDS,
    MrInnerTitleDS: MrInnerTitleDS,
    MrItemPreviewDS: MrItemPreviewDS,
    MrItemPreviewsDS: MrItemPreviewsDS,
    MrMapDS: MrMapDS,
    MrMetadataDS: MrMetadataDS,
    MrNavDS: MrNavDS,
    MrResourceTabsDS: MrResourceTabsDS,
    MrTextViewerDS: MrTextViewerDS,
    MrTimelineDS: MrTimelineDS,
    MrYearHeaderDS: MrYearHeaderDS,
    MrGalleryDS: MrGalleryDS,
    MrSearchPageTitleDS: MrSearchPageTitleDS,
    MrSearchResultsTitleDS: MrSearchResultsTitleDS,
    MrSearchResultsDS: MrSearchResultsDS,
    MrSearchTagsDS: MrSearchTagsDS,
    MrSearchPageDescriptionDS: MrSearchPageDescriptionDS,
    MrStaticMetadataDS: MrStaticMetadataDS,
    MrFormWrapperAccordionDS: MrFormWrapperAccordionDS,
    MrAdvancedSearchTagsDS: MrAdvancedSearchTagsDS
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

class MrTimelineEH extends EventHandler {
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

class MrYearHeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'mr-year-header.click':
                    this.emitOuter('closeevent');
                    break;
                default:
                    break;
            }
        });
    }
}

class MrGalleryEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.click`:
                    this.dataSource.setSelected(payload);
                    break;
                case `${this.dataSource.id}.close`:
                    this.dataSource.removeSelected();
                    break;
                default:
                    break;
            }
        });
    }
}

class MrCollectionEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.click`: {
                    const { action } = payload;
                    if (action === 'resource-modal') {
                        this.emitOuter('openresourcemodal', payload);
                    }
                    break;
                }
                default:
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

class MrSearchPageTitleEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-page-title.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class MrSearchPageDescriptionEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-page-description.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        });
    }
}

class MrFormWrapperAccordionEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-form-wrapper-accordion.init':
                    this.listenKeyUpEvents();
                    break;
                case 'mr-form-wrapper-accordion.destroy':
                    this.destroy$.next();
                    break;
                case 'mr-form-wrapper-accordion.submit': {
                    const { form } = this.dataSource.output;
                    this.emitOuter('submit', {
                        state: form.getState()
                    });
                    break;
                }
                case 'mr-form-wrapper-accordion.reset':
                    this.emitOuter('reset');
                    break;
                case 'mr-form-wrapper-accordion.click':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
    }
    listenKeyUpEvents() {
        const keyup$ = fromEvent(window, 'keyup');
        keyup$.pipe(filter((event) => event.key === 'Enter'), takeUntil(this.destroy$)).subscribe(() => {
            this.emitInner('submit');
        });
    }
}

var EH$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MrDummyEH: MrDummyEH,
    MrFiltersEH: MrFiltersEH,
    MrNavEH: MrNavEH,
    MrTimelineEH: MrTimelineEH,
    MrYearHeaderEH: MrYearHeaderEH,
    MrGalleryEH: MrGalleryEH,
    MrCollectionEH: MrCollectionEH,
    MrSearchTagsEH: MrSearchTagsEH,
    MrSearchResultsTitleEH: MrSearchResultsTitleEH,
    MrSearchPageTitleEH: MrSearchPageTitleEH,
    MrSearchPageDescriptionEH: MrSearchPageDescriptionEH,
    MrFormWrapperAccordionEH: MrFormWrapperAccordionEH
});

const MrAdvancedResultsLayoutConfig = {
    layoutId: 'mr-advanced-results-layout',
    widgets: [
        {
            id: 'mr-search-page-title'
        }, {
            id: 'mr-search-results-title'
        }, {
            id: 'mr-search-results'
        }, {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }, {
            id: 'mr-advanced-search-tags'
        }
    ],
    layoutDS: MrAdvancedResultsLayoutDS,
    layoutEH: MrAdvancedResultsLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrAdvancedResultsLayoutComponent = class MrAdvancedResultsLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrAdvancedResultsLayoutConfig') || MrAdvancedResultsLayoutConfig);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
        this.communication = communication;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            layoutState: this.layoutState,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrAdvancedResultsLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: MainStateService },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MrLayoutStateService },
    { type: LayoutsConfigurationService }
];
MrAdvancedResultsLayoutComponent = __decorate([
    Component({
        selector: 'mr-advanced-results-layout',
        template: "<div class=\"mr-advanced-results mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-advanced-results__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-advanced-results__results-content\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <div class=\"mr-advanced-results__results-wrapper\">\r\n                \r\n                <div class=\"mr-advanced-results__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-active-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-advanced-results__results\">\r\n                    \r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-advanced-results__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <!-- Use a custom item preview with clickable metadata items -->\r\n                                <mr-advanced-result\r\n                                    *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                    [data]=\"item\">\r\n                                </mr-advanced-result>\r\n                                <!-- ../../components/advanced-result/advanced-result.html -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div *ngIf=\"lb.dataSource.pageConfig?.fallback?.text\" class=\"mr-advanced-results__results-fallback\">\r\n                                <p class=\"mr-advanced-results__feedback-text\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                    <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                        {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                    </button>\r\n                                </div> -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p *ngIf=\"lb.dataSource.pageConfig?.ko?.text\" class=\"mr-advanced-results__feedback-text\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.ko.button }}\r\n                                </button>\r\n                            </div> -->\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                \r\n                <n7-smart-pagination\r\n                    *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        MainStateService,
        ConfigurationService,
        CommunicationService,
        MrLayoutStateService,
        LayoutsConfigurationService])
], MrAdvancedResultsLayoutComponent);

class MrInputTextDS extends DataSource {
    constructor() {
        super(...arguments);
        this.state = {
            value: null,
            disabled: false,
            hidden: false,
        };
        this.getState = () => this.state;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { placeholder: _t(data.placeholder) });
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.refresh();
    }
    clear() {
        this.setState({ value: null });
    }
    refresh() {
        const { value, hidden, disabled } = this.state;
        // render value
        this.output.value = value;
        // fix element update
        const el = document.getElementById(this.id);
        if (el) {
            el.value = value;
        }
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    }
}

class MrInputTextEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    const { value } = payload;
                    // set new value
                    this.dataSource.setState({ value });
                    // emit changed signal
                    this.changed$.next({
                        id: this.dataSource.id,
                        state: this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
}

class MrInputSelectDS extends DataSource {
    constructor() {
        super(...arguments);
        this.state = {
            value: null,
            disabled: false,
            hidden: false,
        };
        this.getState = () => this.state;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { options: this.getOptions(data.options) });
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.refresh();
    }
    clear() {
        this.setState({ value: null });
    }
    refresh() {
        const { hidden, disabled } = this.state;
        // render value
        this.output.options = this.getOptions(this.output.options);
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    }
    getOptions(options) {
        const { value } = this.state;
        return options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label), selected: value === option.value })));
    }
}

class MrInputSelectEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    const { value } = payload;
                    // set new value
                    this.dataSource.setState({ value });
                    // emit changed signal
                    this.changed$.next({
                        id: this.dataSource.id,
                        state: this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
}

// eslint-disable-next-line max-len
class MrInputCheckboxDS extends DataSource {
    constructor() {
        super(...arguments);
        this.state = {
            value: [],
            disabled: false,
            hidden: false,
        };
        this.getState = () => this.state;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { checkboxes: this.getCheckboxes(data.checkboxes) });
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.refresh();
    }
    clear() {
        this.setState({ value: [] });
    }
    refresh() {
        const { hidden } = this.state;
        // render value
        this.output.checkboxes = this.getCheckboxes(this.output.checkboxes);
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    }
    toggleValue({ inputPayload, value: isChecked }) {
        const { value } = this.state;
        const exists = !!(value.includes(inputPayload));
        if (isChecked && !exists) {
            value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            value.splice(value.indexOf(inputPayload), 1);
        }
        this.setState({ value });
    }
    getCheckboxes(checkboxes) {
        const { value, disabled } = this.state;
        return checkboxes.map((checkbox, index) => (Object.assign(Object.assign({}, checkbox), { id: `${this.id}-${index}`, disabled, label: _t(checkbox.label), checked: !!(value.includes(checkbox.payload)) })));
    }
}

class MrInputCheckboxEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    // update value
                    this.dataSource.toggleValue(payload);
                    // emit changed signal
                    this.changed$.next({
                        id: this.dataSource.id,
                        state: this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
}

class MrFormModel {
    constructor() {
        this.loaded$ = new ReplaySubject();
        this.inputs = {};
        this.inputTypes = {
            text: {
                ds: MrInputTextDS,
                eh: MrInputTextEH
            },
            select: {
                ds: MrInputSelectDS,
                eh: MrInputSelectEH
            },
            checkbox: {
                ds: MrInputCheckboxDS,
                eh: MrInputCheckboxEH
            }
        };
        this.changed$ = new Subject();
        this.getInput = (id) => this.inputs[id].ds;
        this.getInputs = () => {
            const inputs = {};
            Object.keys(this.inputs).forEach((id) => {
                inputs[id] = this.getInput(id);
            });
            return inputs;
        };
    }
    init(config) {
        this.config = config;
        // init inputs
        this.initInputs();
        // emit signal
        this.loaded$.next(true);
    }
    getState() {
        const state = {};
        Object.keys(this.inputs).forEach((key) => {
            state[key] = this.inputs[key].ds.getState();
        });
        return state;
    }
    addInputType(type, ds, eh) {
        if (this.inputTypes[type]) {
            throw Error(`input type ${type} already exists!`);
        }
        this.inputTypes[type] = { ds, eh };
    }
    initInputs() {
        const { sections } = this.config;
        sections.forEach((section) => {
            section.inputs.forEach(({ id, type, options, state, data }) => {
                const DSClass = this.inputTypes[type].ds;
                const EHClass = this.inputTypes[type].eh;
                const DSInstance = new DSClass(options || {});
                const EHInstance = new EHClass();
                // set datasource id
                DSInstance.id = id;
                // set initial data
                if (data) {
                    DSInstance.update(data);
                }
                // set state
                if (state) {
                    DSInstance.setState(state);
                }
                // set eventhandler hostid
                EHInstance.hostId = id;
                // attach datasource to eventhandler
                EHInstance.dataSource = DSInstance;
                // attach changed$ to eventhandler
                EHInstance.changed$ = this.changed$;
                // listen to input events
                EHInstance.listen();
                // save it to input
                this.inputs[id] = {
                    ds: DSInstance,
                    eh: EHInstance,
                    emit: (t, p) => EHInstance.emitInner(t, p)
                };
            });
        });
    }
}

class MrAdvancedSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.initialState = {};
    }
    onInit(payload) {
        this.router = payload.router;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // add translations
        this.addTranslations(this.pageConfig);
        // init form
        this.form = new MrFormModel();
        // form init
        this.form.init(this.pageConfig.formConfig);
        // set initial state
        this.initialState = cloneDeep(this.form.getState());
        this.one('mr-form-wrapper-accordion').update({
            form: this.form
        });
        // update head title
        this.updateHeadTitle();
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    onSubmit({ state }) {
        if (!isEmpty(state)) {
            const { resultsUrl } = this.pageConfig;
            const params = Object.keys(state)
                .filter((key) => !(state[key].disabled || isEmpty(state[key].value)))
                .map((key) => ({
                key,
                value: Array.isArray(state[key].value)
                    ? state[key].value.join(',')
                    : state[key].value
            }))
                .map(({ key, value }) => `${key}=${encodeURIComponent(value)}`);
            const url = `${resultsUrl}?${params.join('&')}`;
            window.open(url, '_blank');
        }
    }
    onReset() {
        Object.keys(this.initialState).forEach((key) => {
            const inputState = cloneDeep(this.initialState[key]);
            this.form.getInput(key).setState(inputState);
        });
    }
    addTranslations(pageConfig) {
        const { formConfig } = pageConfig;
        // page title
        pageConfig.title = _t(pageConfig.title);
        // submit
        if (formConfig.submitButton) {
            formConfig.submitButton.label = _t(formConfig.submitButton.label);
        }
        // reset
        if (formConfig.resetButton) {
            formConfig.resetButton.label = _t(formConfig.resetButton.label);
        }
        // groups
        formConfig.groups.forEach((group) => {
            var _a;
            if ((_a = group.options) === null || _a === void 0 ? void 0 : _a.label) {
                group.options.label = _t(group.options.label);
            }
        });
        // sections
        formConfig.sections.forEach((section) => {
            if (section.title) {
                section.title = _t(section.title);
            }
            if (section.description) {
                section.description = _t(section.description);
            }
            section.inputs.forEach((input) => {
                if (input.data.label) {
                    input.data.label = _t(input.data.label);
                }
                // input text
                if (input.type === 'text') {
                    if (input.data.placeholder) {
                        input.data.placeholder = _t(input.data.placeholder);
                    }
                }
                // input checkbox
                if (input.type === 'checkbox') {
                    input.data.checkboxes.forEach((checkbox) => {
                        checkbox.label = _t(checkbox.label);
                    });
                }
                // input select
                if (input.type === 'select') {
                    input.data.options.forEach((option) => {
                        option.label = _t(option.label);
                    });
                }
            });
        });
    }
}

class MrAdvancedSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-advanced-search-layout.init':
                    this.dataSource.onInit(payload);
                    // init hook
                    this.onInit();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-advanced-search-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-form-wrapper-accordion.submit':
                    this.dataSource.onSubmit(payload);
                    break;
                case 'mr-form-wrapper-accordion.reset':
                    this.dataSource.onReset();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    /**
     * @example
     * protected onInit() {
     *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
     *     console.log('changed$', { id, state });
     *   });
     * }
     */
    onInit() {
        // to be extended on project
    }
}

const MrAdvancedSearchLayoutConfig = {
    layoutId: 'mr-advanced-search-layout',
    widgets: [{
            id: 'mr-form-wrapper-accordion'
        }],
    layoutDS: MrAdvancedSearchLayoutDS,
    layoutEH: MrAdvancedSearchLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrAdvancedSearchLayoutComponent = class MrAdvancedSearchLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrAdvancedSearchLayoutConfig') || MrAdvancedSearchLayoutConfig);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrAdvancedSearchLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: MainStateService },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService }
];
MrAdvancedSearchLayoutComponent = __decorate([
    Component({
        selector: 'mr-advanced-search-layout',
        template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search mr-layout\">\r\n    <div class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <n7-inner-title [data]=\"{\r\n            title: {\r\n                main: {\r\n                    text: lb.dataSource.pageConfig.title\r\n                }\r\n            }\r\n        }\"></n7-inner-title>\r\n\r\n        <mr-form-wrapper-accordion \r\n            [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\r\n        </mr-form-wrapper-accordion>\r\n    </div>\r\n</div>"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        MainStateService,
        ConfigurationService,
        LayoutsConfigurationService])
], MrAdvancedSearchLayoutComponent);

class MrGlossaryLayoutDS extends LayoutDataSource {
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
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
}

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
        template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\r\n    Hello, from Glossary layout!\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService])
], MrGlossaryLayoutComponent);

class MrHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
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
                    // scroll top
                    window.scrollTo(0, 0);
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
        const { slides } = data;
        return {
            slides,
            containerId: `carousel-${this.id}`,
            // classes: 'demo',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 0,
                animation: 500,
            },
        };
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
    content: MrContentDS,
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
        template: "<div class=\"mr-home mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- HOME CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\r\n                <ng-container [ngSwitch]=\"section.type\">\r\n        \r\n                    <!-- SLIDER -->\r\n                    <ng-container *ngSwitchCase=\"'slider'\">\r\n                        <n7-carousel \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-carousel> \r\n                    </ng-container>\r\n        \r\n                    <!-- COLLECTION -->\r\n                    <ng-container *ngSwitchCase=\"'collection'\">\r\n                        <div class=\"mr-layout__maxwidth mr-items-preview\">\r\n                            <n7-inner-title \r\n                            [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                            </n7-inner-title>\r\n                            <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview\r\n                                *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\r\n                                [data]=\"item\"\r\n                                [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n        \r\n                    <!-- HERO -->\r\n                    <ng-container *ngSwitchCase=\"'hero'\">\r\n                        <n7-hero \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-hero> \r\n                    </ng-container>\r\n        \r\n                    <!-- CONTENT -->\r\n                    <ng-container *ngSwitchCase=\"'content'\">\r\n                        <div [innerHTML]=\"lb.widgets[section.id].ds.out$ | async\"></div>\r\n                    </ng-container>\r\n                \r\n                </ng-container>\r\n            </section>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrHomeLayoutComponent);

class MrItineraryLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // add translations
        this.pageConfig.sections = this.pageConfig.sections.map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title) })));
    }
    pageRequest$(id, onError) {
        return this.communication.request$('itinerary', {
            onError,
            method: 'GET',
            urlParams: id
        });
    }
    handleResponse(response) {
        this.updateTitle(response);
        this.updateContent(response);
        this.updateMetadata(response);
        this.initSections(response);
        this.updateHeadTitle(response);
    }
    updateTitle({ title }) {
        this.title = title;
    }
    updateContent({ content }) {
        this.content = content;
    }
    updateMetadata(response) {
        this.one('mr-static-metadata').update(response);
    }
    initSections(response) {
        const { sections } = this.pageConfig;
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
    updateHeadTitle({ title: itineraryTitle }) {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle), itineraryTitle].join(' > '));
    }
}

class MrItineraryLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-itinerary-layout.init':
                    this.route = payload.route;
                    this.router = payload.router;
                    this.layoutState = payload.layoutState;
                    this.modalService = payload.modalService;
                    this.dataSource.onInit(payload);
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-resource-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('openresourcemodal') !== -1) {
                const { id, type: resourceType } = payload;
                this.modalService.open(id, resourceType);
            }
        });
    }
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), map((params) => params.get('id')), switchMap((id) => this.dataSource.pageRequest$(id, (err) => {
            if (err.status === 404) {
                // getting not found path
                const { config } = this.router;
                const route404 = config.find(({ data }) => (data === null || data === void 0 ? void 0 : data.id) === 'page-404');
                const path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                this.router.navigate([path404]);
            }
            console.warn(`Error loading resource layout for ${id}`, err.message);
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
            // scroll top
            window.scrollTo(0, 0);
        });
    }
}

const MrItineraryLayoutConfig = {
    layoutId: 'mr-itinerary-layout',
    widgets: [
        { id: 'mr-static-metadata' }
    ],
    layoutDS: MrItineraryLayoutDS,
    layoutEH: MrItineraryLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    options: {
    // TODO
    },
};

const DATASOURCE_MAP$1 = {
    collection: MrCollectionDS,
    metadata: MrMetadataDS,
    gallery: MrGalleryDS,
};
const EVENTHANDLER_MAP$1 = {
    collection: MrCollectionEH,
    gallery: MrGalleryEH,
};
let MrItineraryLayoutComponent = class MrItineraryLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
        super(layoutsConfiguration.get('MrItineraryLayoutConfig') || MrItineraryLayoutConfig);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.router = router;
        this.layoutState = layoutState;
        this.modalService = modalService;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            modalService: this.modalService,
            options: this.config.options || {},
            route: this.route,
            router: this.router
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
        const { sections } = this.configuration.get(this.configId);
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
MrItineraryLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MrLayoutStateService },
    { type: MrResourceModalService }
];
MrItineraryLayoutComponent = __decorate([
    Component({
        selector: 'mr-itinerary-layout',
        template: "<div class=\"mr-static mr-layout\" \r\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- ITINERARY LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <div class=\"mr-static__top\">\r\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\r\n                <div class=\"mr-static__metadata\">\r\n                    <n7-metadata-viewer \r\n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"mr-static__content mr-side-margin\">\r\n                <!-- Page content html -->\r\n                <div class=\"mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\r\n    \r\n                <!-- Pass the list of blocks to render to the block template -->\r\n                <div class=\"mr-static__related-resources\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: lb.dataSource.pageConfig.sections }\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\r\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n    \r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    \r\n                    <div class=\"mr-content-block mr-content-block-metadata\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-read-more [data]=\"section.readmore\">\r\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                                    [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-metadata-viewer>\r\n                            </mr-read-more>\r\n                        </div>\r\n                    </div>\r\n\r\n                </ng-container>\r\n    \r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\r\n                        \r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- GALLERY -->\r\n                <ng-container *ngSwitchCase=\"'gallery'\">\r\n                    <div class=\"mr-content-block mr-content-block-gallery\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-gallery [grid]=\"section.grid\" [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \r\n                            </mr-gallery>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute,
        Router,
        MrLayoutStateService,
        MrResourceModalService])
], MrItineraryLayoutComponent);

class MrMapLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        this.defaultDescription = '';
        this.eventDescription = '';
        this.mapListener$ = new Subject();
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the map
        this.communication.request$('map', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe(({ dataSet }) => {
            if (dataSet) {
                this.one('mr-map').update(dataSet);
            }
        });
        this.getWidgetDataSource('mr-map').mapLoaded$
            .pipe(first())
            .subscribe(({ map, markers }) => {
            this.mapListener$.next({ map, markers });
        });
    }
    loadDefaults(navigate) {
        this.eventDescription = this.defaultDescription;
        this.eventHeader = '';
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/map/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/places'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            const { 
            /* eslint-disable */
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header, } = res.sections;
            if (placesData) {
                // this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                // this.hasMap = false;
            }
            if (bibData) {
                this.bibliographyData = bibData;
            }
            else {
                this.bibliographyData = undefined;
            }
            if (witnessData) {
                this.collectionWitnessData = {
                    items: witnessData.items.map((witness) => ({
                        title: witness.title,
                        anchor: {
                            href: witness.link,
                        }
                    })),
                    header: witnessData.header
                };
            }
            else {
                this.collectionWitnessData = undefined;
            }
            if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                this.collectionWorksData = {
                    header: worksData.header,
                    items: worksData.items.map((item) => ({
                        image: item.image,
                        title: item.title,
                        anchor: item.link ? {
                            href: item.link,
                        } : undefined,
                        text: item.text,
                    }))
                };
            }
            else {
                this.collectionWorksData = undefined;
            }
            if (gallery) {
                this.collectionGalleryData = gallery;
            }
            else {
                this.collectionGalleryData = undefined;
            }
            if (header) {
                this.eventDescription = header.content;
                this.eventHeader = res.title;
                this.one('mr-year-header').update({
                    title: { main: { text: header.title } },
                    actions: {
                        buttons: [{
                                text: '',
                                icon: 'n7-icon-close',
                                anchor: {
                                    payload: 'closebutton'
                                }
                            }]
                    }
                });
            }
            this.loading.resourceDetails = false;
        });
    }
}

class MrMapLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-map-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this.location = payload.location;
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    // listen for clicks on the map markers
                    this.dataSource.mapListener$
                        .subscribe(({ markers }) => {
                        markers.on('click', ({ layer: marker }) => {
                            if (!marker.id)
                                return;
                            const isSelected = marker.getIcon().options.className.includes('selected');
                            if (isSelected) {
                                // navigate to the clicked resource / marker
                                this.location.go(`/map/${marker.id}/${marker.slug}`);
                                this.dataSource.updatePageDetails(marker.id);
                            }
                            else {
                                this.location.go('/map/');
                                this.dataSource.loadDefaults();
                            }
                        });
                    });
                    break;
                case 'mr-timeline-layout.destroy':
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'mr-year-header.closeevent':
                    this.dataSource.loadDefaults(true);
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
                this.dataSource.currentId = paramId;
                this.emitOuter('routechanged', paramId);
                this.dataSource.updatePageDetails(paramId);
            }
            else {
                this.dataSource.loadDefaults(true);
            }
        });
    }
}

const MrMapLayoutConfig = {
    layoutId: 'mr-map-layout',
    widgets: [
        { id: 'mr-map' },
        { id: 'mr-year-header' }
    ],
    layoutDS: MrMapLayoutDS,
    layoutEH: MrMapLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    options: {},
};

let MrMapLayoutComponent = class MrMapLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrMapLayoutConfig') || MrMapLayoutConfig);
        this.route = route;
        this.router = router;
        this.location = location;
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
            route: this.route,
            router: this.router,
            location: this.location,
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.configId = data.configId;
            this.layoutState.add('content');
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrMapLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: Router },
    { type: Location },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
MrMapLayoutComponent = __decorate([
    Component({
        selector: 'mr-map-layout',
        template: "<div class=\"mr-timeline mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-map__timeline\">\r\n        <div class=\"mr-map__timeline-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n        <!-- <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline> -->\r\n    </div>\r\n\r\n    <div class=\"mr-map__page mr-side-margin\">\r\n        <div class=\"mr-map__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <h1 class=\"mr-map__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        <div class=\"mr-map__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-map__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        Router,
        Location,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrMapLayoutComponent);

class MrPostsLayoutDS extends LayoutDataSource {
    onInit(payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.communication = payload.communication;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
        // update translations
        this.addTranslations(this.pageConfig);
    }
    updateSearchTags(params) {
        if (!this.pageConfig.filters) {
            return;
        }
        const { labels } = this.pageConfig.filters;
        const tags = [];
        Object.keys(labels)
            .filter((key) => !!params[key])
            .forEach((key) => {
            tags[key] = params[key];
        });
        this.one('mr-advanced-search-tags').updateOptions({ labels });
        this.one('mr-advanced-search-tags').update(tags);
    }
    request$(params, onError) {
        const { searchId } = this.pageConfig;
        const searchParams = Object.assign({}, params);
        Object.keys(searchParams)
            .filter((key) => ['page', 'limit', 'sort'].includes(key))
            .forEach((key) => {
            searchParams.results = searchParams.results || {};
            searchParams.results[key] = searchParams[key];
            delete searchParams[key];
        });
        // normalize results filters
        const resultsParams = {};
        const results = searchParams.results || {};
        const page = results.page ? +results.page : 1;
        resultsParams.limit = results.limit ? +results.limit : 12;
        resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
        resultsParams.sort = results.sort || 'sort_ASC';
        return this.communication.request$('posts', {
            method: 'POST',
            params: Object.assign(Object.assign({}, searchParams), { searchId, results: Object.assign({}, resultsParams) }),
            onError
        });
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
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    addTranslations(config) {
        var _a;
        if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label) })));
        }
        ['text', 'button'].forEach((key) => {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
        // filters
        const { filters } = this.pageConfig;
        if (filters) {
            filters.title = _t(filters.title);
            Object.keys(filters.labels).forEach((key) => {
                filters.labels[key] = _t(filters.labels[key]);
            });
        }
    }
    getPaginationParams(response) {
        const { total_count: totalCount, offset, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: (offset + limit) / limit,
            pageLimit: paginationConfig.limit,
            sizes: {
                label: paginationConfig.selectLabel ? _t(paginationConfig.selectLabel) : null,
                list: paginationConfig.options,
                active: limit,
            },
        };
    }
}

class MrPostsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-posts-layout.init':
                    this.activatedRoute = payload.activatedRoute;
                    this.router = payload.router;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listen route changes
                    this.listenToRouterChanges();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-posts-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.click':
                    this.updateRouter({ page: payload.page });
                    break;
                case 'n7-smart-pagination.change':
                    this.updateRouter({ limit: payload.value, page: 1 });
                    break;
                case 'mr-search-results-title.change':
                    this.updateRouter({ sort: payload.value, page: 1 });
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    /** URL changes */
    listenToRouterChanges() {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('results', LayoutState.LOADING);
        }), switchMap((params) => {
            this.dataSource.updateSearchTags(params);
            return this.dataSource.request$(params, (error) => {
                console.warn('Posts search error', error);
                this.layoutState.set('results', LayoutState.ERROR);
            });
        })).subscribe((response) => {
            this.dataSource.handleResponse(response);
            this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
            // scroll to ref element
            if (!this.scrollRefElement) {
                this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(this.scrollRefElement)) {
                this.scrollRefElement.scrollIntoView();
            }
        });
    }
    updateRouter(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge'
        });
    }
}

const MrPostsLayoutConfig = {
    layoutId: 'mr-posts-layout',
    widgets: [
        {
            id: 'mr-search-page-title'
        }, {
            id: 'mr-search-results-title'
        }, {
            id: 'mr-search-results'
        }, {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }, {
            id: 'mr-advanced-search-tags'
        }
    ],
    layoutDS: MrPostsLayoutDS,
    layoutEH: MrPostsLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrPostsLayoutComponent = class MrPostsLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrPostsLayoutConfig') || MrPostsLayoutConfig);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
        this.communication = communication;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            layoutState: this.layoutState,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrPostsLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: MainStateService },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MrLayoutStateService },
    { type: LayoutsConfigurationService }
];
MrPostsLayoutComponent = __decorate([
    Component({
        selector: 'mr-posts-layout',
        template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        MainStateService,
        ConfigurationService,
        CommunicationService,
        MrLayoutStateService,
        LayoutsConfigurationService])
], MrPostsLayoutComponent);

class MrResourceLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // tabs config
        const tabs = this.configuration.get('tabs');
        const pageTabs = this.pageConfig.tabs;
        if (tabs && pageTabs) {
            this.tabConfig = tabs[pageTabs];
        }
        // add translations
        ['top', 'content'].forEach((type) => {
            this.pageConfig.sections[type] = this.pageConfig.sections[type].map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title) })));
        });
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
        // update tabs
        if (this.tabConfig) {
            const tabSection = sections.find(({ type }) => type === 'tabs');
            this.one(tabSection.id).updateOptions({
                id: this.id,
                root: this.pageConfig.tabs,
                slug: this.slug,
                currentTab: this.tab
            });
            this.one(tabSection.id).update(this.tabConfig);
        }
    }
    updateHeadTitle({ title: resourceTitle }) {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle), resourceTitle].join(' > '));
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
                        this.router = payload.router;
                        this.modalService = payload.modalService;
                        const { slug, id } = this.route.snapshot.params;
                        const { url } = this.route.snapshot;
                        this.dataSource.tab = url[url.length - 1].path;
                        this.dataSource.slug = slug;
                        this.dataSource.id = id;
                        this.layoutState = payload.layoutState;
                        this.dataSource.onInit(payload);
                        this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
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
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('openresourcemodal') !== -1) {
                const { id, type: resourceType } = payload;
                this.modalService.open(id, resourceType);
            }
        });
    }
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), map((params) => params.get('id')), switchMap((id) => this.dataSource.pageRequest$(id, (err) => {
            if (err.status === 404) {
                // getting not found path
                const { config } = this.router;
                const route404 = config.find(({ data }) => (data === null || data === void 0 ? void 0 : data.id) === 'page-404');
                const path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                this.router.navigate([path404]);
            }
            console.warn(`Error loading resource layout for ${id}`, err.message);
            this.dataSource.id = id;
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
            // scroll top
            window.scrollTo(0, 0);
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

const DATASOURCE_MAP$2 = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    tabs: MrResourceTabsDS,
    'text-viewer': MrTextViewerDS
};
const EVENTHANDLER_MAP$2 = {
    viewer: MrImageViewerEH,
    collection: MrCollectionEH,
};
let MrResourceLayoutComponent = class MrResourceLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || MrResourceLayoutConfig);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.router = router;
        this.layoutState = layoutState;
        this.modalService = modalService;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            modalService: this.modalService,
            options: this.config.options || {},
            route: this.route,
            router: this.router
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
                    dataSource: DATASOURCE_MAP$2[type],
                    eventHandler: EVENTHANDLER_MAP$2[type]
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
    { type: Router },
    { type: MrLayoutStateService },
    { type: MrResourceModalService }
];
MrResourceLayoutComponent = __decorate([
    Component({
        selector: 'mr-resource-layout',
        template: "<div class=\"mr-resource mr-layout\" \r\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- RESOURCE LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\r\n                <!-- Pass the list of blocks to render to the block template -->\r\n                <div class=\"mr-resource__top\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                </div>\r\n                <div class=\"mr-resource__content mr-side-margin\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\r\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n    \r\n                <!-- TABS -->\r\n                <ng-container *ngSwitchCase=\"'tabs'\">\r\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\r\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\r\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\r\n                        </n7-anchor-wrapper>\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <div class=\"mr-resource__title-content mr-side-margin\">\r\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-inner-title>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- IMAGE VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'viewer'\">\r\n                    <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\r\n                    </n7-image-viewer>\r\n                </ng-container>\r\n    \r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    \r\n                    <div class=\"mr-content-block mr-content-block-metadata\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-read-more [data]=\"section.readmore\">\r\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                                    [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-metadata-viewer>\r\n                            </mr-read-more>\r\n                        </div>\r\n                    </div>\r\n\r\n                </ng-container>\r\n    \r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\r\n                        \r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <div class=\"mr-content-block mr-content-block-item-preview\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \r\n                            </n7-item-preview>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- TEXT VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\r\n                  <div class=\"mr-content-block mr-content-block-text-viewer\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                          <n7-text-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\r\n                          </n7-text-viewer>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </ng-container>\r\n    \r\n                <!-- INFO BOX -->\r\n                <ng-container *ngSwitchCase=\"'info-box'\">\r\n                    <div class=\"mr-content-block mr-content-block-info-box\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <div class=\"info-box__mock\">info-box</div>    \r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- BREADCRUMBS -->\r\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\r\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\r\n                    </n7-breadcrumbs>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute,
        Router,
        MrLayoutStateService,
        MrResourceModalService])
], MrResourceLayoutComponent);

class SearchFacetsLayoutDS extends LayoutDataSource {
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
            .pipe(takeUntil(this.destroyed$)).subscribe((response) => {
            const { facets } = response;
            Object.keys(facets).forEach((id) => {
                const { total_count: totalCount } = facets[id];
                this.dataSource.updateInputValue(`header-${id}`, totalCount);
            });
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
        return Object.assign(Object.assign({}, data), { placeholder: _t(data.placeholder) });
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
        this.isUpdate = false;
        this.getValue = () => this.value;
    }
    transform(data) {
        const { links } = data;
        // empty state check
        if (this.isUpdate && !links.length) {
            return {
                links: [{
                        text: _t('global#facet_empty_text'),
                        classes: 'empty-text-link',
                        payload: null,
                    }]
            };
        }
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        this.isUpdate = update;
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

const ICON_OPEN$1 = 'n7-icon-angle-up';
const ICON_CLOSE$1 = 'n7-icon-angle-down';
class FacetHeaderDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = () => this.value;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { text: _t(data.text), iconRight: data.iconRight || ICON_OPEN$1 });
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign(Object.assign({}, this.input), { additionalText: value }));
        }
    }
    toggle() {
        let { iconRight } = this.output;
        iconRight = iconRight === ICON_OPEN$1 ? ICON_CLOSE$1 : ICON_OPEN$1;
        this.update(Object.assign(Object.assign({}, this.input), { iconRight }));
    }
    isOpen() {
        return this.output.iconRight === ICON_OPEN$1;
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
                    if (typeof payload.value === 'string') {
                        payload.value = payload.value.trim();
                    }
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
                    if (payload) {
                        this.dataSource.toggleValue(payload);
                        this.emitOuter('change', {
                            value: this.dataSource.getValue(),
                            id: this.dataSource.id
                        });
                    }
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
        this.isUpdate = false;
        this.getValue = () => this.value;
    }
    transform(data) {
        const { links } = data;
        // empty state check
        if (this.isUpdate && !links.length) {
            return {
                links: [{
                        text: _t('global#facet_empty_text'),
                        classes: 'empty-text-link',
                        payload: null,
                    }]
            };
        }
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        this.isUpdate = update;
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
                    if (payload) {
                        this.dataSource.toggleValue(payload);
                        this.emitOuter('change', {
                            value: this.dataSource.getValue(),
                            id: this.dataSource.id
                        });
                    }
                    break;
                default:
                    break;
            }
        });
    }
}

const DATASOURCE_MAP$3 = {
    header: FacetHeaderDS,
    text: FacetTextDS,
    checkbox: FacetCheckboxDS,
    select: FacetSelectDS,
    link: FacetLinkDS,
    'link-multiple': FacetLinkMultipleDS,
};
const EVENTHANDLER_MAP$3 = {
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
                    dataSource: DATASOURCE_MAP$3.header,
                    eventHandler: EVENTHANDLER_MAP$3.header
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
                    dataSource: DATASOURCE_MAP$3[inputType],
                    eventHandler: EVENTHANDLER_MAP$3[inputType]
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
        template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\r\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \r\n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\r\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\r\n        <n7-facet-header\r\n        *ngIf=\"section.header\"\r\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\r\n        [emit]=\"lb.widgets[section.header.id].emit\"\r\n        ></n7-facet-header>\r\n\r\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\r\n            <div *ngFor=\"let input of section.inputs\" \r\n            [attr.id]=\"'facet-container-' + input.id\"\r\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n    \r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text \r\n                    *ngSwitchCase=\"'text'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\r\n    \r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox \r\n                    *ngSwitchCase=\"'checkbox'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\r\n                    \r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select \r\n                    *ngSwitchCase=\"'select'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\r\n                    \r\n                    <!-- INPUT LINK -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'link'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n\r\n                    <!-- INPUT LINKMULTI -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'linkMulti'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n                \r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
    }),
    __metadata("design:paramtypes", [])
], MrSearchFacetsLayoutComponent);

var localStorageHelper = {
    set(key, value) {
        localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key);
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    toggle(key, value) {
        if (!this.get(key)) {
            this.set(key, value);
        }
        else {
            this.remove(key);
        }
    }
};

class MrSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.totalResultsText = null;
        this.descriptionLoaded = false;
        this.showDescription = false;
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.hideDescriptionKey = `hide-description-${this.configId}`;
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
        // update translations
        this.addTranslations(this.pageConfig);
        // description
        this.getPageDescription();
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
    toggleDescription() {
        localStorageHelper.toggle(this.hideDescriptionKey, true);
        this.showDescription = !(localStorageHelper.get(this.hideDescriptionKey));
        if (this.showDescription && !this.descriptionLoaded) {
            this.getPageDescription();
        }
    }
    getPaginationParams(response) {
        const { total_count: totalCount, offset, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: (offset + limit) / limit,
            pageLimit: paginationConfig.limit,
            sizes: {
                label: paginationConfig.selectLabel ? _t(paginationConfig.selectLabel) : null,
                list: paginationConfig.options,
                active: limit,
            },
        };
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    addTranslations(config) {
        var _a;
        if (config.facetsTitle) {
            config.facetsTitle = _t(config.facetsTitle);
        }
        if (config.filtersTitle) {
            config.filtersTitle = _t(config.filtersTitle);
        }
        if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label) })));
        }
        ['text', 'button'].forEach((key) => {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
    }
    getPageDescription() {
        if (this.pageConfig.description && !localStorageHelper.get(this.hideDescriptionKey)) {
            const { description } = this.pageConfig;
            this.communication.request$('searchDescription', {
                urlParams: description.id,
            }).subscribe((response) => {
                this.one('mr-search-page-description').update(response);
                this.descriptionLoaded = true;
                this.showDescription = true;
            });
        }
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
                    // scroll top
                    window.scrollTo(0, 0);
                    // reset scroll ref
                    this.scrollRefElement = null;
                    break;
                case 'mr-search-layout.destroy':
                    this.searchService.destroy();
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
                case 'mr-search-page-description.click':
                case 'mr-search-page-title.click':
                    this.dataSource.toggleDescription();
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
        var _a;
        // default params
        const { pageConfig } = this.dataSource;
        const defaultLimit = pageConfig.pagination.options[0];
        let defaultSort = (_a = pageConfig.sort.options.find((option) => option.selected === true)) === null || _a === void 0 ? void 0 : _a.value;
        if (!defaultSort) {
            defaultSort = pageConfig.sort.options[0].value;
        }
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).pipe(filter(({ lastUpdated }) => this.searchService.isQueryParamKey(lastUpdated)), takeUntil(this.destroyed$)).subscribe(({ lastUpdated, state }) => {
            this.searchState = state;
            if (lastUpdated !== 'page') {
                this.searchService.setState(INPUT_STATE_CONTEXT, 'page', 1);
            }
        });
        this.searchService.getState$(INPUT_STATE_CONTEXT, 'query').pipe(takeUntil(this.destroyed$)).subscribe((val) => {
            this.emitOuter('inputquerychange', val);
            this.searchService.setState(INPUT_STATE_CONTEXT, 'sort', val ? '_score' : 'sort_ASC');
        });
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').pipe(takeUntil(this.destroyed$)).subscribe((response) => {
            this.linksResponse = response;
            this.dataSource.updateActiveFilters(this.searchState, this.linksResponse);
            // update sections
            if (response) {
                const { facets } = response;
                Object.keys(facets).forEach((inputKey) => {
                    const { total_count: totalCount } = facets[inputKey];
                    this.searchService.setState(SECTION_STATE_CONTEXT, `section-${inputKey}`, totalCount ? 'is-not-empty' : 'is-empty');
                });
            }
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(takeUntil(this.destroyed$)).subscribe(() => {
            this.layoutState.set('results', LayoutState.LOADING);
        });
        // results params hook
        this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', (params = {}) => {
            const results = {
                sort: defaultSort,
                limit: defaultLimit,
                offset: 0
            };
            // sort check
            if (params.sort) {
                results.sort = params.sort;
            }
            // limit check
            if (params.limit) {
                results.limit = params.limit;
            }
            // offset check
            if (params.page && params.page > 1) {
                results.offset = results.limit * (params.page - 1);
            }
            params.results = results;
            // cleanup
            Object.keys(params)
                .filter((key) => ['sort', 'page', 'limit'].includes(key))
                .forEach((key) => {
                delete params[key];
            });
            return params;
        });
        // facets params hook
        this.searchService.setBeforeHook(FACETS_REQUEST_STATE_CONTEXT, 'loading', (params = {}) => {
            // clean up
            delete params.results;
            return params;
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
            .subscribe((response) => {
            this.dataSource.handleResponse(response);
            // update layout state
            this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
            // scroll to ref element
            if (!this.scrollRefElement) {
                this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(this.scrollRefElement)) {
                this.scrollRefElement.scrollIntoView();
            }
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
            id: 'mr-search-page-description'
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
            const { searchId, searchConfig } = this.configuration.get(this.configId);
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
        template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n\r\n        <div *ngIf=\"lb.dataSource.showDescription\" class=\"mr-search__description\">\r\n            <mr-search-page-description\r\n            [data]=\"lb.widgets['mr-search-page-description'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-description'].emit\">\r\n            </mr-search-page-description>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <aside class=\"mr-facets\">\r\n                <div class=\"scroll-ref\">&nbsp;</div>\r\n                <div class=\"mr-facets__contents\">\r\n                    <h2 class=\"mr-facets__title\" \r\n                        *ngIf=\"lb.dataSource.pageConfig['facetsTitle']\">\r\n                        {{ lb.dataSource.pageConfig['facetsTitle'] }}\r\n                    </h2>\r\n                    <mr-search-facets-layout \r\n                    [searchService]=\"lb.dataSource.searchService\">\r\n                    </mr-search-facets-layout>\r\n                </div>\r\n            </aside>\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"(\r\n                    lb.dataSource.pageConfig['filtersTitle'] && \r\n                    lb.widgets['mr-search-tags'].ds.hasFilters\r\n                )\" \r\n                class=\"mr-active-filters\">\r\n                    <span class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filtersTitle'] }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\r\n                        [data]=\"tag\"\r\n                        [emit]=\"lb.widgets['mr-search-tags'].emit\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"
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

class MrStaticLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    onInit(payload) {
        this.communication = payload.communication;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
    }
    pageRequest$(urlSegments, onError) {
        if (urlSegments.length > 1) {
            return this.communication.request$('post', {
                onError,
                urlParams: urlSegments[1].path,
            });
        }
        return this.communication.request$('static', {
            onError,
            urlParams: urlSegments[0].path,
        });
    }
    handleResponse(response) {
        this.setHtml(response);
        this.updateHeadTitle(response.title);
    }
    setHtml(response) {
        const { content, title } = response;
        this.title = title;
        this.content = content;
        this.one('mr-static-metadata').update(response);
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
                    this.router = payload.router;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listen route
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
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
        }), switchMap((urlSegments) => this.dataSource.pageRequest$(urlSegments, (err) => {
            if (err.status === 404) {
                // getting not found path
                const { config } = this.router;
                const route404 = config.find(({ data }) => (data === null || data === void 0 ? void 0 : data.id) === 'page-404');
                const path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                this.router.navigate([path404]);
            }
            console.warn(`Error loading static layout for ${urlSegments}`, err.message);
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
        });
    }
}

const MrStaticLayoutConfig = {
    layoutId: 'mr-static-layout',
    widgets: [{
            id: 'mr-static-metadata'
        }],
    layoutDS: MrStaticLayoutDS,
    layoutEH: MrStaticLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    layoutOptions: {}
};

let MrStaticLayoutComponent = class MrStaticLayoutComponent extends AbstractLayout {
    constructor(communication, configuration, mainState, route, router, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrStaticLayoutConfig') || MrStaticLayoutConfig);
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.route = route;
        this.router = router;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            communication: this.communication,
            configuration: this.configuration,
            mainState: this.mainState,
            layoutState: this.layoutState,
            route: this.route,
            router: this.router,
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
    { type: Router },
    { type: MrLayoutStateService },
    { type: LayoutsConfigurationService }
];
MrStaticLayoutComponent = __decorate([
    Component({
        selector: 'mr-static-layout',
        template: "<div class=\"mr-static mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- STATIC LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <div class=\"mr-static__top\">\r\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\r\n                <div class=\"mr-static__metadata\">\r\n                    <n7-metadata-viewer \r\n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"mr-static__content mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\r\n        </ng-container>\r\n    \r\n    </ng-container>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [CommunicationService,
        ConfigurationService,
        MainStateService,
        ActivatedRoute,
        Router,
        MrLayoutStateService,
        LayoutsConfigurationService])
], MrStaticLayoutComponent);

// demo page: http://localhost:4200/timeline/2992/missione-venezia
class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        this.defaultDescription = '';
        this.eventDescription = '';
        this.hasMap = false;
        this.mapHeader = _t('timeline#mapheader');
        this.timelineListener$ = new Subject();
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe((d) => {
            this.timelineData = d;
            this.loading.timeline = false;
            this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$
            .pipe(first())
            .subscribe((timeline) => {
            this.timelineListener$.next(timeline);
        });
        // update the description
        this.communication.request$('timelineDescription', {
            method: 'GET',
            onError: (e) => console.error(e),
        }).subscribe((d) => {
            this.defaultDescription = d.text;
            this.loadDefaults(false);
        });
    }
    loadDefaults(navigate) {
        const timelineInstance = this.getWidgetDataSource('mr-timeline').timeline;
        if (timelineInstance) {
            timelineInstance.setSelection([]);
        }
        this.eventDescription = this.defaultDescription;
        this.eventHeader = '';
        this.hasMap = false;
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/time-events'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            const { 
            /* eslint-disable */
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header, } = res.sections;
            if (placesData) {
                this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                this.hasMap = false;
            }
            if (bibData) {
                this.bibliographyData = bibData;
            }
            else {
                this.bibliographyData = undefined;
            }
            if (witnessData) {
                this.collectionWitnessData = {
                    items: witnessData.items.map((witness) => ({
                        title: witness.title,
                        anchor: {
                            href: witness.link,
                        }
                    })),
                    header: witnessData.header
                };
            }
            else {
                this.collectionWitnessData = undefined;
            }
            if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                this.collectionWorksData = {
                    header: worksData.header,
                    items: worksData.items.map((item) => ({
                        image: item.image,
                        title: item.title,
                        anchor: item.link ? {
                            href: item.link,
                        } : undefined,
                        text: item.text,
                    }))
                };
            }
            else {
                this.collectionWorksData = undefined;
            }
            if (gallery) {
                this.collectionGalleryData = gallery;
            }
            else {
                this.collectionGalleryData = undefined;
            }
            if (header) {
                this.eventDescription = header.content;
                this.eventHeader = res.title;
                this.one('mr-year-header').update({
                    title: { main: { text: header.title } },
                    actions: {
                        buttons: [{
                                text: '',
                                icon: 'n7-icon-close',
                                anchor: {
                                    payload: 'closebutton'
                                }
                            }]
                    }
                });
            }
            this.loading.resourceDetails = false;
        });
    }
}

class MrTimelineLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-timeline-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this.location = payload.location;
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    this.dataSource.timelineListener$.subscribe((timeline) => {
                        timeline.on('click', (props) => {
                            if (!props.item)
                                return;
                            // build URL slug
                            const { content } = this.dataSource.timelineData.dataSet
                                .find((d) => d.id === props.item);
                            const slug = helpers.slugify(content);
                            // navigate without reloading the layout
                            this.location.go(`/timeline/${props.item}/${slug}`);
                            this.dataSource.updatePageDetails(props.item);
                        });
                    });
                    break;
                case 'mr-timeline-layout.destroy':
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'mr-year-header.closeevent':
                    this.dataSource.loadDefaults(true);
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
                this.dataSource.currentId = paramId;
                this.emitOuter('routechanged', paramId);
                this.dataSource.updatePageDetails(paramId);
            }
            else {
                this.dataSource.loadDefaults(true);
            }
        });
    }
}

const MrTimelineLayoutConfig = {
    layoutId: 'mr-timeline-layout',
    widgets: [
        { id: 'mr-timeline' },
        { id: 'mr-map' },
        { id: 'mr-year-header' }
    ],
    layoutDS: MrTimelineLayoutDS,
    layoutEH: MrTimelineLayoutEH,
    widgetsDataSources: DS$3,
    widgetsEventHandlers: EH$3,
    options: {
    // TODO
    },
};

let MrTimelineLayoutComponent = class MrTimelineLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrTimelineLayoutConfig') || MrTimelineLayoutConfig);
        this.route = route;
        this.router = router;
        this.location = location;
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
            route: this.route,
            router: this.router,
            location: this.location,
            options: this.config.options || {}
        };
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.configId = data.configId;
            this.layoutState.add('content');
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrTimelineLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: Router },
    { type: Location },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
MrTimelineLayoutComponent = __decorate([
    Component({
        selector: 'mr-timeline-layout',
        template: "<div class=\"mr-timeline mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-timeline__timeline\">\r\n        <div class=\"mr-timeline__timeline-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline>\r\n    </div>\r\n\r\n    <div class=\"mr-timeline__page mr-side-margin\">\r\n        <div class=\"mr-timeline__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <h1 class=\"mr-timeline__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        <div class=\"mr-timeline__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n                \r\n\r\n                <!-- MAPPA -->\r\n                <div class=\"mr-content-block mr-content-block-map\" *ngIf=\"lb.dataSource.hasMap\">\r\n                    <h3 class=\"mr-content-block__title\" *ngIf=\"lb.dataSource.mapHeader\">{{ lb.dataSource.mapHeader }}</h3>\r\n                    <div class=\"mr-content-block__content\">\r\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-timeline__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        Router,
        Location,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrTimelineLayoutComponent);

//---------------------------
const HEIGHT_MARGIN = 50;
let ReadMoreComponent = class ReadMoreComponent {
    constructor() {
        this.collapsed = true;
        this.hasReadmore = false;
        this._loaded = false;
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked() {
        if (this._loaded || !this.data)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            this.clientHeight = this.root.nativeElement.clientHeight;
            const { height, labels } = this.data;
            // translate labels
            Object.keys(labels).forEach((key) => {
                this.data.labels[key] = _t(labels[key]);
            });
            if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                setTimeout(() => {
                    this.hasReadmore = true;
                    this.updateWrapperHeight();
                });
            }
        }
    }
    handleToggle() {
        this.collapsed = !this.collapsed;
        this.updateWrapperHeight();
    }
    updateWrapperHeight() {
        this.wrapperHeight = this.collapsed
            ? this.data.height
            : this.clientHeight;
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
        template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n"
    })
], ReadMoreComponent);

let MrAdvancedResultComponent = class MrAdvancedResultComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrAdvancedResultComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrAdvancedResultComponent.prototype, "emit", void 0);
MrAdvancedResultComponent = __decorate([
    Component({
        selector: 'mr-advanced-result',
        template: "<div *ngIf=\"data\"\r\n     class=\"n7-item-preview {{data.classes || ''}}\"\r\n     [ngClass]=\"{ 'has-image' : !!data.image, 'has-color' : !!data.color }\">\r\n    <n7-anchor-wrapper [data]=\"data.anchor\"\r\n                       (clicked)=\"onClick($event)\"\r\n                       [classes]=\"'n7-item-preview__inner'\">\r\n        <!-- Image, color -->\r\n        <div class=\"n7-item-preview__image n7-item-preview__color\"\r\n             *ngIf=\"data.image || data.color\"\r\n             [style.background-image]=\"data.image ? 'url(' + data.image + ')' : undefined\"\r\n             [style.background-color]=\"data.color\">\r\n        </div>\r\n        <div class=\"n7-item-preview__content\">\r\n            <!-- Title and text -->\r\n            <div class=\"n7-item-preview__title-text\">\r\n                <h1 class=\"n7-item-preview__title\"\r\n                    [innerHTML]=\"data.title\"></h1>\r\n                <p class=\"n7-item-preview__text\"\r\n                   *ngIf=\"data.text\"\r\n                   [innerHTML]=\"data.text\"></p>\r\n            </div>\r\n            <!-- Metadata -->\r\n            <div class=\"n7-item-preview__metadata\"\r\n                 *ngIf=\"data.metadata\">\r\n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\"\r\n                     *ngFor=\"let meta of data.metadata\">\r\n                    <h3 class=\"n7-item-preview__metadata-group-title\"\r\n                        *ngIf=\"meta.title && meta.items.length\"\r\n                        [innerHTML]=\"meta.title\"></h3>\r\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\"\r\n                         *ngFor=\"let item of meta.items\">\r\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\"\r\n                              *ngIf=\"item.icon\">\r\n                        </span>\r\n                        <span class=\"n7-item-preview__metadata-item-label\"\r\n                              *ngIf=\"item.label\"\r\n                              [innerHTML]=\"item.label\">\r\n                        </span>\r\n                        <a *ngIf=\"item.href\"\r\n                           [href]=\"item.href\">\r\n                            <span class=\"n7-item-preview__metadata-item-value\"\r\n                                  *ngIf=\"item.value\"\r\n                                  [innerHTML]=\"item.value\">\r\n                            </span>\r\n                        </a>\r\n                        <span class=\"n7-item-preview__metadata-item-value\"\r\n                              *ngIf=\"item.value && !item.href\"\r\n                              [innerHTML]=\"item.value\">\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </n7-anchor-wrapper>\r\n</div>\r\n"
    })
], MrAdvancedResultComponent);

let MrFormComponent = class MrFormComponent {
    ngOnInit() {
        if (this.group) {
            this.sections = this.form.config.sections
                .filter(({ id }) => this.group.sections.includes(id));
        }
        else {
            this.sections = this.form.config.sections;
        }
        // translations
        this.sections = this.sections.map((section) => (Object.assign(Object.assign({}, section), { title: _t(section.title), description: _t(section.description) })));
    }
};
__decorate([
    Input(),
    __metadata("design:type", MrFormModel)
], MrFormComponent.prototype, "form", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrFormComponent.prototype, "group", void 0);
__decorate([
    ContentChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], MrFormComponent.prototype, "templateRef", void 0);
MrFormComponent = __decorate([
    Component({
        selector: 'mr-form',
        template: "<div *ngIf=\"form.loaded$ | async\" class=\"mr-form {{ group?.classes || '' }}\">\r\n    <div *ngFor=\"let section of sections\" class=\"mr-form__section {{ section.classes || '' }}\" \r\n         [ngClass]=\"{ 'mr-form__section-advanced' : section.advancedSection  }\" >\r\n        \r\n        <div class=\"mr-form__section-header\">\r\n            <h3 *ngIf=\"section.title\" class=\"mr-form__section-title\">{{ section.title }}</h3>\r\n            <p *ngIf=\"section.description\" class=\"mr-form__section-description\">{{ section.description }}</p>\r\n        </div>\r\n        \r\n        <div class=\"mr-form__section-content\">\r\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-form__element {{ input.options?.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text *ngSwitchCase=\"'text'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-text>\r\n\r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox *ngSwitchCase=\"'checkbox'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-checkbox>\r\n\r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select *ngSwitchCase=\"'select'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-select>\r\n\r\n                    <!-- DEFAULT (external template) -->\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"\r\n                        templateRef; \r\n                        context: { \r\n                            type: input.type, \r\n                            input: form.inputs[input.id] \r\n                        }\"></ng-template>\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
    })
], MrFormComponent);

let MrFormWrapperAccordionComponent = class MrFormWrapperAccordionComponent {
    constructor() {
        this.fakeEmit = (type, payload) => {
            if (!this.emit) {
                return;
            }
            this.emit(type, payload);
        };
    }
    ngOnInit() {
        this.fakeEmit('init');
    }
    ngOnDestroy() {
        this.fakeEmit('destroy');
    }
    onReset() {
        this.fakeEmit('reset');
    }
    onSubmit() {
        this.fakeEmit('submit');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrFormWrapperAccordionComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrFormWrapperAccordionComponent.prototype, "emit", void 0);
MrFormWrapperAccordionComponent = __decorate([
    Component({
        selector: 'mr-form-wrapper-accordion',
        template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>"
    })
], MrFormWrapperAccordionComponent);

let MrSearchPageDescriptionComponent = class MrSearchPageDescriptionComponent {
    onClick(payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrSearchPageDescriptionComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrSearchPageDescriptionComponent.prototype, "emit", void 0);
MrSearchPageDescriptionComponent = __decorate([
    Component({
        selector: 'mr-search-page-description',
        template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\r\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\r\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\r\n</div>"
    })
], MrSearchPageDescriptionComponent);

const DATASOURCE_MAP$4 = {
    collection: MrCollectionDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    title: MrInnerTitleDS,
};
let MrResourceModalComponent = class MrResourceModalComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.destroy$ = new Subject();
        this.status = 'IDLE';
        this.widgets = {};
        this.errorTitle = _t('global#layout_error_title');
        this.errorDescription = _t('global#layout_error_description');
    }
    ngOnInit() {
        this.modalService.state$
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ status, config, response }) => {
            this.status = status;
            this.config = config;
            if (status === 'SUCCESS') {
                this.loadWidgets(config, response);
            }
        });
        // on router change close
        this.router.events.pipe(takeUntil(this.destroy$), filter(() => !isEmpty(this.widgets)), filter((event) => event instanceof NavigationStart)).subscribe(() => {
            this.onClose();
        });
    }
    ngOnDestroy() {
        // reset
        this.onClose();
        this.destroy$.next();
    }
    onClose(target) {
        if (target && target.className !== 'mr-resource-modal__overlay') {
            return;
        }
        this.widgets = {};
        this.modalService.close();
    }
    loadWidgets(config, response) {
        const { top, content } = config.sections;
        const sections = top.concat(content);
        if (sections) {
            sections.forEach(({ id, type, options }) => {
                const data = response.sections[id];
                this.widgets[id] = {
                    ds: new DATASOURCE_MAP$4[type]()
                };
                // update options
                if (options) {
                    this.widgets[id].ds.options = options;
                }
                // update data
                if (data) {
                    this.widgets[id].ds.update(data);
                }
            });
        }
    }
};
MrResourceModalComponent.ctorParameters = () => [
    { type: Router },
    { type: MrResourceModalService }
];
MrResourceModalComponent = __decorate([
    Component({
        selector: 'mr-resource-modal',
        template: "<div *ngIf=\"status !== 'IDLE'\" class=\"mr-modal mr-resource-modal\" [ngClass]=\"{\r\n        'is-loading': status === 'LOADING',\r\n        'is-error': status === 'ERROR'\r\n      }\">\r\n    <div class=\"mr-modal__overlay\" (click)=\"onClose($event.target)\">\r\n        <div class=\"mr-modal__window mr-resource-modal__window\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n\r\n                <!-- Loading -->\r\n                <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                    <div class=\"mr-modal__loader\">\r\n                        <n7-loader></n7-loader>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Error -->\r\n                <ng-container *ngSwitchCase=\"'ERROR'\">\r\n\r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <h2 class=\"mr-modal__header-title\">\r\n                            {{ errorTitle }}\r\n                        </h2>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content\">\r\n                        <p class=\"mr-modal__error-text\">{{ errorDescription }}</p>\r\n                    </div>\r\n\r\n                </ng-container>\r\n\r\n                <!-- Success -->\r\n                <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                    \r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                        </ng-container>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content mr-resource-modal__content\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>                            \r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"widgets[section.id].ds && (widgets[section.id].ds.out$ | async)\"\r\n            class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n\r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <n7-inner-title [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-inner-title>\r\n                </ng-container>\r\n\r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    <div class=\"mr-resource-modal__metadata-content\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title mr-resource__metadata-title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <mr-read-more [data]=\"section.readmore\">\r\n                            <n7-metadata-viewer [data]=\"widgets[section.id].ds.out$ | async\">\r\n                            </n7-metadata-viewer>\r\n                        </mr-read-more>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"widgets[section.id].ds.out$ | async as collection$\">\r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-resource__collection-content\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div\r\n                                class=\"mr-resource__collection-grid {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\" [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                        {{ section.title }}\r\n                    </h3>\r\n                    <n7-item-preview [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-item-preview>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [Router,
        MrResourceModalService])
], MrResourceModalComponent);

let MrGalleryComponent = class MrGalleryComponent {
    onClick(payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    }
    onClose() {
        if (this.emit) {
            this.emit('close');
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrGalleryComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrGalleryComponent.prototype, "emit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MrGalleryComponent.prototype, "grid", void 0);
MrGalleryComponent = __decorate([
    Component({
        selector: 'mr-gallery',
        template: "<div *ngIf=\"data\" class=\"mr-gallery mr-wp-content\">\r\n    <div class=\"mr-gallery__wrapper wp-block-gallery has-zoom {{ grid ? 'columns-' + grid : '' }}\">\r\n        <ul class=\"mr-gallery__items blocks-gallery-grid\">\r\n            <li *ngFor=\"let item of data.items\" class=\"mr-gallery__item blocks-gallery-item\">\r\n                <figure>\r\n                    <a (click)=\"onClick(item.payload)\" class=\"mr-gallery__link\">\r\n                        <img [src]=\"item.thumbSrc\" [alt]=\"item.title\" class=\"mr-gallery__image\">\r\n                    </a>\r\n                </figure>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"data.selected\" class=\"mr-modal mr-gallery-modal\" (click)=\"onClose()\">\r\n        <div class=\"mr-modal__overlay\">\r\n            <div class=\"mr-modal__window mr-gallery-modal__window\">\r\n                <div class=\"mr-modal__header mr-gallery-modal__header\">\r\n                    <div class=\"mr-modal__close\">\r\n                        <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mr-modal__content mr-gallery-modal__content\">\r\n                    <div class=\"mr-gallery__zoom-image-wrapper\">\r\n                        <img [src]=\"data.selected.fullSrc\" [alt]=\"data.selected.title\" class=\"mr-gallery__zoom-image\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
    })
], MrGalleryComponent);

const COMPONENTS$3 = [
    // Layout components
    MrAdvancedResultsLayoutComponent,
    MrAdvancedSearchLayoutComponent,
    MrGlossaryLayoutComponent,
    MrHomeLayoutComponent,
    MrItineraryLayoutComponent,
    MrMapLayoutComponent,
    MrPostsLayoutComponent,
    MrResourceLayoutComponent,
    MrSearchFacetsLayoutComponent,
    MrSearchLayoutComponent,
    MrStaticLayoutComponent,
    MrTimelineLayoutComponent,
    // Custom components
    ReadMoreComponent,
    MrFormComponent,
    MrFormWrapperAccordionComponent,
    MrSearchPageDescriptionComponent,
    MrResourceModalComponent,
    MrGalleryComponent,
    MrAdvancedResultComponent,
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
            MrLayoutStateService,
            MrResourceModalService
        ],
        entryComponents: COMPONENTS$3,
        exports: COMPONENTS$3,
    })
], N7BoilerplateMurucaModule);

class SbExampleLayoutDS extends LayoutDataSource {
    onInit() {
        // TODO
    }
}

/* eslint-disable */
class SbExampleLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-example-layout.init':
                    console.log('layout-inner', type, payload);
                    this.emitOuter('init', payload);
                    this.dataSource.onInit();
                    break;
                default:
                    console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-dummy.click':
                    console.log('layout-outer', type, payload);
                    break;
                default:
                    console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}

class SbImageViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.viewer = null;
        this.viewerLoaded$ = new Subject();
    }
    transform() {
        const data = IMAGE_VIEWER_MOCK;
        data.images = [
            { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
        ];
        data.libOptions.showReferenceStrip = false;
        data._setViewer = (viewer) => {
            this.viewer = viewer;
            this.viewerLoaded$.next();
        };
        // data._pageCallback = (eventData) => eventData;
        return data;
    }
    changePage(index) {
        this.viewer.goToPage(index); // call to OpenSeadragon APIs
    }
}

class SbImageViewerToolsDS extends DataSource {
    transform() {
        const data = IMAGE_VIEWER_TOOLS_MOCK;
        data.images = [
            { thumb: 'http://placekitten.com/200/130', payload: { thumbindex: 0 }, caption: 'Test caption <b>#1</b>' },
            { thumb: 'http://placekitten.com/90/180', payload: { thumbindex: 1 }, caption: 'Test caption <b>#2</b>' },
            { thumb: 'http://placekitten.com/90/110', payload: { thumbindex: 2 }, caption: 'Test caption <b>#3</b>' },
        ];
        const initialDescription = data.images[data.initial].caption;
        if (initialDescription !== undefined) {
            data.description = initialDescription;
        }
        return data;
    }
    toggleDescription() {
        this.output.isVisible.description = !this.output.isVisible.description;
    }
    toggleThumbs() {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    }
    handleThumbs(index) {
        this.output.initial = index;
        this.updateDescription();
    }
    handlePageChange(payload) {
        this.handleThumbs(payload.page);
    }
    updateDescription() {
        const index = this.output.initial;
        const { images } = this.output;
        this.output.description = images[index].caption;
    }
}

var DS$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SbImageViewerDS: SbImageViewerDS,
    SbImageViewerToolsDS: SbImageViewerToolsDS
});

class SbImageViewerEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer.click':
                    this.emitOuter('click', payload);
                    break;
                case 'sb-image-viewer.pagechange':
                    this.emitOuter('pagechange', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                    this.listenToViewer();
                    break;
                case 'sb-image-viewer-layout.thumbclick':
                    this.dataSource.changePage(payload);
                    break;
                case 'sb-image-viewer-layout.pagechange':
                    // Silent
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
    listenToViewer() {
        this.dataSource.viewerLoaded$.pipe(first()).subscribe(() => {
            const { viewer } = this.dataSource;
            viewer.addHandler('page', (eventData) => {
                this.emitOuter('pagechange', eventData);
            });
        });
    }
}

class SbImageViewerToolsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-tools.click':
                    if (payload.thumbindex !== undefined) {
                        const index = payload.thumbindex;
                        this.dataSource.handleThumbs(index);
                        this.emitOuter('thumbclick', index);
                        break;
                    }
                    if (payload === 'close-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-thumbs') {
                        this.dataSource.toggleThumbs();
                        break;
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                case 'sb-image-viewer-layout.thumbclick':
                    // Silent
                    break;
                case 'sb-image-viewer-layout.pagechange':
                    this.dataSource.handlePageChange(payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}

var EH$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SbImageViewerEH: SbImageViewerEH,
    SbImageViewerToolsEH: SbImageViewerToolsEH
});

const SbExampleLayoutConfig = {
    layoutId: 'sb-example-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'sb-dummy', hasStaticData: true }
    ],
    layoutDS: SbExampleLayoutDS,
    layoutEH: SbExampleLayoutEH,
    widgetsDataSources: DS$4,
    widgetsEventHandlers: EH$4,
    options: {
    // TODO
    },
};

let SbExampleLayoutComponent = class SbExampleLayoutComponent extends AbstractLayout {
    constructor() {
        super(SbExampleLayoutConfig);
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
SbExampleLayoutComponent = __decorate([
    Component({
        selector: 'sb-example-layout',
        template: "<div class=\"sb-example-layout\" id=\"example-layout\">\r\n    <n7-tag \r\n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\r\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \r\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SbExampleLayoutComponent);

class SbImageViewerLayoutDS extends LayoutDataSource {
    onInit({ communication, configuration }) {
        this.communication = communication;
        this.configuration = configuration;
        console.log('communication config', this.configuration.get('communication'));
        this.communication.request$('posts', {
            method: 'GET',
            params: {
                id: 505
            },
            onError: (err) => {
                console.warn('err', err);
            }
        }).subscribe((response) => {
            console.log('response------------>', response);
        });
    }
}

/* eslint-disable */
class SbImageViewerLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                    this.dataSource.onInit(payload);
                    this.emitOuter('init');
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-tools.click':
                    // Silent
                    break;
                case 'sb-image-viewer.pagechange':
                    this.emitOuter('pagechange', payload);
                    break;
                case 'sb-image-viewer-tools.thumbclick':
                    this.emitOuter('thumbclick', payload);
                    break;
                case 'sb-image-viewer.click':
                    this.emitOuter('viewerclick', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}

const SbImageViewerLayoutConfig = {
    layoutId: 'sb-image-viewer-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'sb-image-viewer-tools', hasStaticData: true },
        { id: 'sb-image-viewer', hasStaticData: true }
    ],
    layoutDS: SbImageViewerLayoutDS,
    layoutEH: SbImageViewerLayoutEH,
    widgetsDataSources: DS$4,
    widgetsEventHandlers: EH$4,
    options: {
    // TODO
    },
};

let SbImageViewerLayoutComponent = class SbImageViewerLayoutComponent extends AbstractLayout {
    constructor(configuration, communication) {
        super(SbImageViewerLayoutConfig);
        this.configuration = configuration;
        this.communication = communication;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            communication: this.communication,
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
SbImageViewerLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: CommunicationService }
];
SbImageViewerLayoutComponent = __decorate([
    Component({
        selector: 'sb-image-viewer-layout',
        template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CommunicationService])
], SbImageViewerLayoutComponent);

const COMPONENTS$4 = [
    SbExampleLayoutComponent,
    SbImageViewerLayoutComponent,
];
let N7BoilerplateSandboxModule = class N7BoilerplateSandboxModule {
};
N7BoilerplateSandboxModule = __decorate([
    NgModule({
        declarations: COMPONENTS$4,
        imports: [
            CommonModule,
            DvComponentsLibModule,
            N7BoilerplateCommonModule,
        ],
        providers: [],
        exports: COMPONENTS$4,
    })
], N7BoilerplateSandboxModule);

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
            // SB
            N7BoilerplateSandboxModule,
        ],
    })
], N7BoilerplateLibModule);

let JsonConfigService = class JsonConfigService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    load(path) {
        return this.http.get(path).pipe(catchError(() => of({})), tap((response) => this._handleResponse(response))).toPromise();
    }
    _handleResponse(response) {
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((key) => {
                const oldValue = this.config.get(key);
                const newValue = response[key];
                this.config.set(key, merge(oldValue, newValue));
            });
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

let LocalConfigService = class LocalConfigService {
    constructor(config) {
        this.config = config;
    }
    load(config) {
        return of(true).pipe(tap(() => {
            if (config) {
                Object.keys(config).forEach((key) => this.config.set(key, config[key]));
                // config keys colors
                if (config['config-keys']) {
                    const headTag = document.querySelector('head');
                    const styleElement = document.createElement('style');
                    const styles = [];
                    Object.keys(config['config-keys']).forEach((key) => {
                        const configKey = config['config-keys'][key] || {};
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
        })).toPromise();
    }
};
LocalConfigService.ctorParameters = () => [
    { type: ConfigurationService }
];
LocalConfigService.ɵprov = ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(ɵɵinject(ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
LocalConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LocalConfigService);

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
    load() {
        var _a;
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.menu;
        if (baseUrl && menuPath) {
            const url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response) {
        if (response) {
            const headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map(({ label, slug, isStatic, subpages, classes }) => {
                const href = `/${slug}`;
                // dynamic path control
                if (!isStatic) {
                    this.dynamicPaths.push(href);
                }
                const item = {
                    classes,
                    text: label,
                    anchor: slug ? { href } : null,
                    _meta: {
                        id: href
                    }
                };
                if (subpages !== undefined) {
                    item.subnav = [];
                    subpages.forEach((el) => {
                        const subHref = `/${el.slug}`;
                        if (!el.isStatic) {
                            this.dynamicPaths.push(subHref);
                        }
                        item.subnav.push({
                            classes: el.classes || null,
                            text: el.label,
                            anchor: { href: subHref },
                            _meta: {
                                id: subHref
                            }
                        });
                    });
                }
                return item;
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

let MrFooterService = class MrFooterService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    load() {
        var _a;
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.footer;
        if (baseUrl && menuPath) {
            const url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response) {
        if (response) {
            this.configuration.set('footer', response);
        }
    }
};
MrFooterService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
MrFooterService.ɵprov = ɵɵdefineInjectable({ factory: function MrFooterService_Factory() { return new MrFooterService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: MrFooterService, providedIn: "root" });
MrFooterService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], MrFooterService);

let MrTranslationsLoaderService = class MrTranslationsLoaderService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    load(langCode) {
        var _a;
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const translationsPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.translation;
        if (baseUrl && translationsPath) {
            const url = baseUrl + translationsPath + langCode;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response, langCode))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response, langCode) {
        if (response) {
            Object.keys(response).forEach((key) => {
                translate.setLangTranslation(langCode, key, response[key]);
            });
        }
    }
};
MrTranslationsLoaderService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
MrTranslationsLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function MrTranslationsLoaderService_Factory() { return new MrTranslationsLoaderService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: MrTranslationsLoaderService, providedIn: "root" });
MrTranslationsLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], MrTranslationsLoaderService);

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

// example layout

/*
 * Public API Surface of n7-boilerplate-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractLayout, ApolloProvider, AwAutocompleteWrapperDS, AwAutocompleteWrapperEH, AwBubbleChartDS, AwBubbleChartEH, AwCarouselDS, AwChartTippyDS, AwChartTippyEH, AwCollectionLayoutComponent, AwCollectionLayoutConfig, AwCollectionLayoutDS, AwCollectionLayoutEH, AwEntitaLayoutComponent, AwEntitaLayoutConfig, AwEntitaLayoutDS, AwEntitaLayoutEH, AwEntitaMetadataViewerDS, AwEntitaNavDS, AwEntitaNavEH, AwFacetsWrapperComponent, AwFacetsWrapperDS, AwFacetsWrapperEH, AwGalleryLayoutComponent, AwGalleryLayoutConfig, AwGalleryLayoutDS, AwGalleryLayoutEH, AwGalleryResultsDS, AwGalleryResultsEH, AwHeroDS, AwHeroEH, AwHomeAutocompleteDS, AwHomeAutocompleteEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwLinkedObjectsDS, AwLinkedObjectsEH, AwMapDS, AwMapEH, AwMapLayoutComponent, AwMapLayoutConfig, AwMapLayoutDS, AwMapLayoutEH, AwPatrimonioLayoutConfig, AwRelatedEntitiesDS, AwSchedaBreadcrumbsDS, AwSchedaDropdownDS, AwSchedaDropdownEH, AwSchedaImageDS, AwSchedaInnerTitleDS, AwSchedaLayoutComponent, AwSchedaLayoutDS, AwSchedaLayoutEH, AwSchedaMetadataDS, AwSchedaPdfDS, AwSchedaPdfEH, AwSchedaSidebarEH, AwSearchLayoutComponent, AwSearchLayoutConfig, AwSearchLayoutDS, AwSearchLayoutEH, AwSearchLayoutTabsDS, AwSearchLayoutTabsEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTimelineDS, AwTimelineEH, AwTimelineLayoutComponent, AwTimelineLayoutConfig, AwTimelineLayoutDS, AwTimelineLayoutEH, AwTreeDS, AwTreeEH, BreadcrumbsDS, BreadcrumbsEH, BubbleChartWrapperComponent, ChartTippyComponent, CommunicationService, ConfigurationService, DataWidgetWrapperComponent, DatepickerWrapperComponent, DvDataWidgetDS, DvDatepickerWrapperDS, DvDatepickerWrapperEH, DvExampleLayoutComponent, DvExampleLayoutConfig, DvExampleLayoutDS, DvExampleLayoutEH, DvGraphDS, DvInnerTitleDS, DvWidgetDS, DynamicPathGuard, FacetsDS, FooterDS, FooterEH, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, LocalConfigService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, MrAdvancedResultComponent, MrAdvancedResultsLayoutComponent, MrAdvancedResultsLayoutConfig, MrAdvancedResultsLayoutDS, MrAdvancedResultsLayoutEH, MrAdvancedSearchLayoutComponent, MrAdvancedSearchLayoutConfig, MrAdvancedSearchLayoutDS, MrAdvancedSearchLayoutEH, MrAdvancedSearchTagsDS, MrBreadcrumbsDS, MrCollectionDS, MrCollectionEH, MrContentDS, MrDummyEH, MrFiltersDS, MrFiltersEH, MrFooterService, MrFormComponent, MrFormWrapperAccordionComponent, MrFormWrapperAccordionDS, MrFormWrapperAccordionEH, MrGalleryComponent, MrGalleryDS, MrGalleryEH, MrGlossaryLayoutComponent, MrGlossaryLayoutConfig, MrGlossaryLayoutDS, MrGlossaryLayoutEH, MrHeroDS, MrHomeLayoutComponent, MrHomeLayoutConfig, MrHomeLayoutDS, MrHomeLayoutEH, MrImageViewerDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrItemPreviewsDS, MrItineraryLayoutComponent, MrItineraryLayoutConfig, MrItineraryLayoutDS, MrItineraryLayoutEH, MrMapDS, MrMapLayoutComponent, MrMapLayoutConfig, MrMapLayoutDS, MrMapLayoutEH, MrMenuService, MrMetadataDS, MrNavDS, MrNavEH, MrPostsLayoutComponent, MrPostsLayoutConfig, MrPostsLayoutDS, MrPostsLayoutEH, MrResourceLayoutComponent, MrResourceLayoutConfig, MrResourceLayoutDS, MrResourceLayoutEH, MrResourceModalComponent, MrResourceTabsDS, MrSearchFacetsLayoutComponent, MrSearchLayoutComponent, MrSearchLayoutConfig, MrSearchLayoutDS, MrSearchLayoutEH, MrSearchPageDescriptionComponent, MrSearchPageDescriptionDS, MrSearchPageDescriptionEH, MrSearchPageTitleDS, MrSearchPageTitleEH, MrSearchResultsDS, MrSearchResultsTitleDS, MrSearchResultsTitleEH, MrSearchTagsDS, MrSearchTagsEH, MrStaticLayoutComponent, MrStaticLayoutConfig, MrStaticLayoutDS, MrStaticLayoutEH, MrStaticMetadataDS, MrTextViewerDS, MrTimelineDS, MrTimelineEH, MrTimelineLayoutComponent, MrTimelineLayoutConfig, MrTimelineLayoutDS, MrTimelineLayoutEH, MrTranslationsLoaderService, MrYearHeaderDS, MrYearHeaderEH, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateDataVizModule, N7BoilerplateLibModule, N7BoilerplateMurucaModule, N7BoilerplateSandboxModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, PdfViewerComponent, ReadMoreComponent, RestProvider, SbExampleLayoutComponent, SbExampleLayoutConfig, SbExampleLayoutDS, SbExampleLayoutEH, SbImageViewerDS, SbImageViewerEH, SbImageViewerLayoutComponent, SbImageViewerLayoutConfig, SbImageViewerLayoutDS, SbImageViewerLayoutEH, SbImageViewerToolsDS, SbImageViewerToolsEH, SchedaDropdownComponent, SearchFacetsLayoutConfig, SearchFacetsLayoutDS, SearchFacetsLayoutEH, SmartBreadcrumbsComponent, SmartPaginationComponent, SmartPaginationDS, SmartPaginationEH, SubnavDS, SubnavEH, MainLayoutComponent as ɵa, AbstractLayout as ɵb, DatepickerWrapperComponent as ɵba, DvExampleLayoutComponent as ɵbb, EscapeHtmlPipe as ɵbc, MrAdvancedResultsLayoutComponent as ɵbd, MrLayoutStateService as ɵbe, MrAdvancedSearchLayoutComponent as ɵbf, MrGlossaryLayoutComponent as ɵbg, MrHomeLayoutComponent as ɵbh, MrItineraryLayoutComponent as ɵbi, MrResourceModalService as ɵbj, MrMapLayoutComponent as ɵbk, MrPostsLayoutComponent as ɵbl, MrResourceLayoutComponent as ɵbm, MrSearchFacetsLayoutComponent as ɵbn, MrSearchLayoutComponent as ɵbo, MrSearchService as ɵbp, MrStaticLayoutComponent as ɵbq, MrTimelineLayoutComponent as ɵbr, ReadMoreComponent as ɵbs, MrFormComponent as ɵbt, MrFormWrapperAccordionComponent as ɵbu, MrSearchPageDescriptionComponent as ɵbv, MrResourceModalComponent as ɵbw, MrGalleryComponent as ɵbx, MrAdvancedResultComponent as ɵby, SbExampleLayoutComponent as ɵbz, ConfigurationService as ɵc, SbImageViewerLayoutComponent as ɵca, LayoutsConfigurationService as ɵd, MainStateService as ɵe, Page404LayoutComponent as ɵf, SmartPaginationComponent as ɵg, CommunicationService as ɵh, ApolloProvider as ɵi, RestProvider as ɵj, AwCollectionLayoutComponent as ɵk, AwEntitaLayoutComponent as ɵl, AwFacetsWrapperComponent as ɵm, AwGalleryLayoutComponent as ɵn, AwSearchService as ɵo, AwHomeLayoutComponent as ɵp, AwMapLayoutComponent as ɵq, AwSchedaLayoutComponent as ɵr, AwSearchLayoutComponent as ɵs, AwTimelineLayoutComponent as ɵt, BubbleChartWrapperComponent as ɵu, ChartTippyComponent as ɵv, PdfViewerComponent as ɵw, SchedaDropdownComponent as ɵx, SmartBreadcrumbsComponent as ɵy, DataWidgetWrapperComponent as ɵz };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
