import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of } from 'rxjs';
import { map, catchError, takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this.defaults[key]);
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => this.defaults[key] = value);
        if (this.config.global) {
            Object.keys(this.config.global).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.set(key, this.config.global[key]);
            }));
        }
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject("config")); }, token: ConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.defaults;
    /** @type {?} */
    ConfigurationService.prototype.get;
    /** @type {?} */
    ConfigurationService.prototype.set;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutsConfigurationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this.defaults[key]);
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => this.defaults[key] = value);
        if (this.config.layouts) {
            Object.keys(this.config.layouts).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.set(key, this.config.layouts[key]);
            }));
        }
    }
}
LayoutsConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LayoutsConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ LayoutsConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutsConfigurationService.prototype.defaults;
    /** @type {?} */
    LayoutsConfigurationService.prototype.get;
    /** @type {?} */
    LayoutsConfigurationService.prototype.set;
    /**
     * @type {?}
     * @private
     */
    LayoutsConfigurationService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainStateService {
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
        this.get$ = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this._get('default', key));
        this.getCustom$ = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this._get('custom', key));
        this.update = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        (key, newValue) => this._update('default', key, newValue));
        this.updateCustom = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        (key, newValue) => this._update('custom', key, newValue));
        this.has = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => !!this.default[key]);
        this.hasCustom = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => !!this.custom[key]);
    }
    /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    addCustom(key, stream$) {
        if (this.custom[key])
            throw Error(`custom stream ${key} exists!`);
        this.custom[key] = stream$;
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    _update(type, key, newValue) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        this[type][key].next(newValue);
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    _get(type, key) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        return this[type][key];
    }
}
MainStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ MainStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainStateService.prototype.custom;
    /**
     * @type {?}
     * @private
     */
    MainStateService.prototype.default;
    /** @type {?} */
    MainStateService.prototype.get$;
    /** @type {?} */
    MainStateService.prototype.getCustom$;
    /** @type {?} */
    MainStateService.prototype.update;
    /** @type {?} */
    MainStateService.prototype.updateCustom;
    /** @type {?} */
    MainStateService.prototype.has;
    /** @type {?} */
    MainStateService.prototype.hasCustom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ApolloProviderConfig = {
    'getLastPosts': {
        queryName: 'getLastPosts',
        queryBody: `
      {
        getLastPosts(__PARAMS__) {
          id
          title
        }
      }
    `
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: `{
      globalFilter(__PARAMS__){
        entitiesData {
          countData {
            type {
              id
              label
              color
              icon
            }
            count
          }
          entitiesCountData {
            entity {
              id
              label
              typeOfEntity {
                id
              }
            }
            count
          }
        }
        itemsPagination {
          totalCount
          items {
            item {
              id
              label
              info {
                key
                value
              }
            }
            thumbnail
            relatedTOEData {
              type {
                id
                label
                icon
                color
              }
              count
            }
          }
        }
      }
    }`
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApolloProvider {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
        try {
            this.providerConfig = this.config.get('communication').providers.apollo;
        }
        catch (err) {
            throw Error('No config found for apollo provider!');
        }
    }
    /**
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    request$(requestId, options) {
        const { params, method, httpOptions } = options;
        /** @type {?} */
        let query = ApolloProviderConfig[requestId];
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            query = this.providerConfig.config[requestId];
        }
        query = query || {};
        let { queryName, queryBody } = query;
        // config query control
        if (!queryName || !queryBody)
            throw Error(`No config found for requestId "${requestId}"`);
        if (params) {
            /** @type {?} */
            let paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        /** @type {?} */
        let source$;
        if (method && method === 'GET') {
            source$ = this.http.get(this.providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(this.providerConfig.baseUrl, { query: queryBody }, httpOptions);
        }
        return source$.pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.data[queryName])));
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    makeParamsStr(params) {
        /** @type {?} */
        let paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                let arrStr = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                    if (typeof (val) === 'object') {
                        /** @type {?} */
                        let subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else {
                        if (!isNaN(val))
                            arrStr.push(`${val}`);
                        else
                            arrStr.push(`"${val}"`);
                    }
                }));
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof (params[key]) === 'object' && params[key]) {
                /** @type {?} */
                let subParamsStr = this.makeParamsStr(params[key]);
                paramsStr.push(`${key}: { ${subParamsStr} }`);
            }
            else if (typeof (params[key]) === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(`${key.replace('$', '')}: ${params[key]}`);
            }
            else {
                if (!isNaN(params[key]))
                    paramsStr.push(`${key}: ${params[key]}`);
                else
                    paramsStr.push(`${key}: "${params[key]}"`);
            }
        }));
        return paramsStr.join(' ');
    }
}
ApolloProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApolloProvider.ctorParameters = () => [
    { type: ConfigurationService },
    { type: HttpClient }
];
/** @nocollapse */ ApolloProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(ɵɵinject(ConfigurationService), ɵɵinject(HttpClient)); }, token: ApolloProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.providerConfig;
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RestProviderConfig = {
    'getLastPosts': 'posts',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RestProvider {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
        try {
            this.providerConfig = this.config.get('communication').providers.rest;
        }
        catch (err) {
            throw Error('No config found for rest provider!');
        }
    }
    /**
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    request$(requestId, options = {}) {
        let { params, method, httpOptions } = options;
        /** @type {?} */
        let point = RestProviderConfig[requestId];
        // default method
        if (!method)
            method = this.providerConfig.defaultMethod || 'GET';
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point)
            throw Error(`No config found for requestId "${requestId}"`);
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, httpOptions);
        }
        else {
            throw Error(`Rest method ${method} not supported`);
        }
    }
}
RestProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RestProvider.ctorParameters = () => [
    { type: ConfigurationService },
    { type: HttpClient }
];
/** @nocollapse */ RestProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(ɵɵinject(ConfigurationService), ɵɵinject(HttpClient)); }, token: RestProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.providerConfig;
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.config;
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommunicationService {
    /**
     * @param {?} config
     * @param {?} apollo
     * @param {?} rest
     */
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
    /**
     * @param {?} requestId
     * @param {?=} options
     * @param {?=} provider
     * @return {?}
     */
    request$(requestId, options = {}, provider) {
        provider = provider || this.defaultProvider;
        if (!this[provider])
            throw Error(`There is no ${provider} provider`);
        const { onError } = options;
        return this[provider].request$(requestId, options)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => this.handleError(error, onError))));
    }
    /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    handleError(error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    }
}
CommunicationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommunicationService.ctorParameters = () => [
    { type: ConfigurationService },
    { type: ApolloProvider },
    { type: RestProvider }
];
/** @nocollapse */ CommunicationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(ɵɵinject(ConfigurationService), ɵɵinject(ApolloProvider), ɵɵinject(RestProvider)); }, token: CommunicationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.defaultProvider;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.communicationConfig;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AbstractLayout {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() { }
    ;
    /**
     * @protected
     * @return {?}
     */
    onInit() {
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        () => {
            this.lb.eventHandler.emitInner('init', this.initPayload());
        }));
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new this.config.layoutDS(),
            eventHandler: new this.config.layoutEH(),
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onDestroy() {
        this.lb.eventHandler.emitInner('destroy');
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractLayout.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    AbstractLayout.prototype.widgets;
    /** @type {?} */
    AbstractLayout.prototype.lb;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.options = options;
        // update header
        this.one('header').update(this.configuration.get('header'));
        // main state updates
        this.mainState.get$('headTitle').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.titleService.setTitle(val)));
        this.mainState.get$('pageTitle').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.pageTitle = val));
        this.mainState.get$('subnav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.one('subnav').update(val)));
        this.mainState.get$('breadcrumbs').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.one('breadcrumbs').update(val)));
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
    /**
     * @param {?} payload
     * @return {?}
     */
    onNavigate(payload) {
        // router navigation
        if (payload.handler === 'router') {
            // path control
            if (!payload.path)
                throw Error('onNavigate: no path for router navigate');
            this.router.navigate(payload.path);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MainLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    MainLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    MainLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    MainLayoutDS.prototype.titleService;
    /** @type {?} */
    MainLayoutDS.prototype.options;
    /** @type {?} */
    MainLayoutDS.prototype.pageTitle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'main-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'main-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.navigate':
                    this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.destroyed$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        console.log('header', data);
        if (!data)
            return;
        delete data.actions;
        return Object.assign({}, data, { logo: {
                image: "https://i.imgur.com/kTND3Do.png",
                payload: "aw/home"
            }, nav: {
                items: [
                    { text: 'Home', payload: 'aw/home', icon: 'n7-icon-home' },
                    { text: 'Patrimonio', payload: 'aw/patrimonio', icon: 'n7-icon-tree-icon' },
                    { text: 'Galleria', payload: 'aw/galleria', icon: 'n7-icon-th' },
                    { text: 'Ricerca', payload: 'aw/ricerca', icon: 'n7-icon-search' },
                    { text: 'Utenti', payload: 'aw/utenti', icon: 'n7-icon-facebook' },
                ]
            }, user: {
                img: 'https://placeimg.com/150/150/any/people',
                name: 'Giorgio Spinosa'
            }, menuToggle: {
                open: {
                    payload: 'mobile-open'
                },
                close: {
                    payload: 'mobile-close'
                }
            } });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubnavDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            classes: 'main-subnav',
            items: data
        };
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActive(id) {
        this.output.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item._meta.id === id) {
                item.classes = 'is-current';
                item._meta.isActive = true;
            }
            else {
                item.classes = '';
                item._meta.isActive = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    getActive() {
        return this.output.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item._meta.isActive))[0] || null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS = /*#__PURE__*/Object.freeze({
    HeaderDS: HeaderDS,
    SubnavDS: SubnavDS,
    BreadcrumbsDS: BreadcrumbsDS
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'header.click':
                    // navigate control
                    // if(payload.source === 'navigate'){
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload]
                    });
                    // }
                    // global signal
                    // this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubnavEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH = /*#__PURE__*/Object.freeze({
    HeaderEH: HeaderEH,
    SubnavEH: SubnavEH,
    BreadcrumbsEH: BreadcrumbsEH
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MainLayoutConfig = {
    layoutId: 'main-layout',
    widgets: [{
            id: 'header'
        }, {
            id: 'subnav'
        }, {
            id: 'breadcrumbs'
        }],
    layoutDS: MainLayoutDS,
    layoutEH: MainLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, configuration, layoutsConfiguration, mainState, titleService) {
        super(layoutsConfiguration.get('MainLayoutConfig') || MainLayoutConfig);
        this.router = router;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
MainLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'main-layout',
                template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n\n        <!-- <n7-nav \n        *ngIf=\"!lb.dataSource.options.sidebar\"\n        [emit]=\"lb.widgets['subnav'].emit\"\n        [data]=\"lb.widgets['subnav'].ds.out$ | async\">\n        </n7-nav> -->\n\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\">\n                    <!-- <h1 \n                    *ngIf=\"lb.dataSource.pageTitle\"\n                    class=\"n7-top-page-bar__title\">{{ lb.dataSource.pageTitle }}</h1>\n                    <n7-breadcrumbs \n                    [emit]=\"lb.widgets['breadcrumbs'].emit\"\n                    [data]=\"lb.widgets['breadcrumbs'].ds.out$ | async\">\n                    </n7-breadcrumbs> -->\n                </div>\n                <!--<div *ngIf=\"lb.dataSource.pageTools\" class=\"n7-top-page-bar__tools\">\n                    <a *ngFor=\"let tool of lb.dataSource.pageTools\" \n                    (click)=\"lb.eventHandler.emitInner('tools-click', tool.payload)\" \n                    class=\"n7-btn {{ tool.classes || '' }}\">\n                        {{ tool.label | translate }}\n                    </a>\n                </div>-->\n            </div>\n            \n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n\n    <div class=\"n7-footer-wrapper\"></div>\n</div>"
            }] }
];
/** @nocollapse */
MainLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.titleService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Page404LayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ options }) {
        this.options = options;
    }
}
if (false) {
    /** @type {?} */
    Page404LayoutDS.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Page404LayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
        }));
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    Page404LayoutEH.prototype.destroyed$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Page404LayoutConfig = {
    layoutId: 'n7-page404-layout',
    widgets: [],
    layoutDS: Page404LayoutDS,
    layoutEH: Page404LayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Page404LayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     */
    constructor(
    // private router: Router,
    // private configuration: ConfigurationService,
    layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || Page404LayoutConfig);
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            // configuration: this.configuration,
            // mainState: this.mainState,
            // router: this.router,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
Page404LayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-page404-layout',
                template: "<div class=\"n7-page404-layout\">\n    PAGE404!!!\n</div>"
            }] }
];
/** @nocollapse */
Page404LayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
];
class N7BoilerplateCommonModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: N7BoilerplateCommonModule,
            providers: [
                MainStateService,
                ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                ApolloProvider,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
N7BoilerplateCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [
                    CommonModule,
                    HttpClientModule,
                    DvComponentsLibModule
                ],
                providers: [],
                exports: COMPONENTS
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetData = null;
        this.facetInputs = {};
        this.allBubbles = null;
        this.selectedBubbleIds = [];
        this.numOfItemsStr = null;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState }) {
        this.communication = communication;
        this.mainState = mainState;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.log(error)),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('apollo-response', { response });
            this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            (ent) => {
                this.facetData.push(Object.assign({}, (ent.countData), { enabled: true }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.renderBubblesFromApolloQuery(response);
            this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // this.mainState.update('subnav', this._getSubnav());
        // this.mainState.update('breadcrumbs', this._getBreadcrumbs());
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination)
            return;
        /** @type {?} */
        let numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            let numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItems;
            else
                this.numOfItemsStr = numOfItems + '';
        }
        else {
            this.numOfItemsStr = null;
        }
        this.one('aw-home-item-preview-wrapper').update(response.itemsPagination.items);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleSelected(payload) {
        if (payload && payload.id) {
            if (!this.selectedBubbleIds.includes(payload.id))
                this.selectedBubbleIds.push(payload.id);
        }
        this.updateItemPreviews();
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleDeselected(payload) {
        if (payload && payload.id)
            this.selectedBubbleIds = this.selectedBubbleIds.filter((/**
             * @param {?} b
             * @return {?}
             */
            (b) => {
                return (b !== payload.id);
            }));
        this.updateItemPreviews();
    }
    /**
     * @private
     * @return {?}
     */
    updateItemPreviews() {
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.log(error)),
            params: { selectedEntitiesIds: this.selectedBubbleIds,
                itemsPagination: { offset: 0, limit: 4 } },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            // the facets should be handled by the layout
            // (otherwise they would always return as enabled)
            //this.facetData = [];
            //response.entitiesData.forEach( (ent) => {
            //  this.facetData.push({...(ent.countData), enabled:true});
            //});
            this.renderPreviewsFromApolloQuery(response);
            this.renderItemTags();
        }));
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderBubblesFromApolloQuery(response) {
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            let currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(Object.assign({}, currentToE.entitiesCountData[j], { color: currentToE.countData.type.color }));
            }
        }
        this.allBubbles.map((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            // d3/svg doesn't allow '-' or strings starting with a number as ids
            bubble.entity.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
            return bubble;
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles
        });
    }
    /**
     * @param {?} change
     * @return {?}
     */
    handleFacetSearchChange(change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
        console.log('changed: ' + payload + ' with value: ' + value);
    }
    /**
     * @param {?} enter
     * @return {?}
     */
    handleFacetSearchEnter(enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        /** @type {?} */
        var value = this.facetInputs[payload];
        // get the text entered in this input
        console.log('entered: ' + payload + ' with value: ' + value);
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    handleFacetHeaderClick(facetId) {
        /** @type {?} */
        let updateBubbles = false;
        /** @type {?} */
        let enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.enabled)).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.type.id === facetId) {
                if (f.enabled) {
                    if (enabledFacets > 1) {
                        f.enabled = false;
                        updateBubbles = true;
                    }
                }
                else {
                    f.enabled = true;
                    updateBubbles = true;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update(this.facetData);
        if (updateBubbles) {
            /** @type {?} */
            let disableFacetsIds = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            (fD) => {
                if (!fD.enabled)
                    disableFacetsIds.push(fD.type.id);
            }));
            if (disableFacetsIds) {
                /** @type {?} */
                let filteredSelectedBubbleIds = this.selectedBubbleIds.filter((/**
                 * @param {?} bId
                 * @return {?}
                 */
                (bId) => {
                    /** @type {?} */
                    let typeOfEntity = "";
                    for (var i = 0; i < this.allBubbles.length; i++) {
                        if (this.allBubbles[i].entity.id === bId) {
                            typeOfEntity = this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbleIds.length != this.selectedBubbleIds.length) {
                    this.selectedBubbleIds = filteredSelectedBubbleIds;
                    this.updateItemPreviews();
                }
                ;
            }
            /** @type {?} */
            let currentBubbles = this.allBubbles.filter((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                for (var i = 0; i < this.facetData.length; i++) {
                    if (bubble.entity.typeOfEntity.id === this.facetData[i].type.id)
                        if (!this.facetData[i].enabled) {
                            return false;
                        }
                }
                return true;
            }));
            currentBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                bubble.selected = false;
                if (this.selectedBubbleIds.includes(bubble.entity.id)) {
                    bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: currentBubbles,
                reset: true
            });
        }
    }
    /**
     * @return {?}
     */
    renderItemTags() {
        /** @type {?} */
        let tagsData = [];
        this.selectedBubbleIds.forEach((/**
         * @param {?} sBid
         * @return {?}
         */
        (sBid) => {
            /** @type {?} */
            let label = '';
            for (var i = 0; i < this.allBubbles.length; i++) {
                if (this.allBubbles[i].entity.id === sBid) {
                    label = this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    }
    /**
     * @private
     * @return {?}
     */
    _getSubnav() {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        page => ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: [`aw/${page}`],
                id: page
            },
            _meta: { id: page }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    _getBreadcrumbs() {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: [`aw/home`]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: [`aw/home`]
                    }
                }]
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.mainState;
    /** @type {?} */
    AwHomeLayoutDS.prototype.test;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbleIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'aw-home-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-hero.change':
                    const { inputPayload, value } = payload;
                    // do something
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble')
                        this.dataSource.onBubbleSelected(payload.bubblePayload);
                    else if (payload.source === 'close')
                        this.dataSource.onBubbleDeselected(payload.bubblePayload);
                    break;
                default:
                    break;
            }
        }));
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.destroyed$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHeroDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        console.log({ data });
        /** @type {?} */
        const HERO_DATA = {
            title: "Arte, architettura e fotografia nel XXII secolo",
            text: "Consulta il patrimonio completo del polo nazionale per l\'arte e l\'architettura contemporanee.",
            button: {
                text: "CERCA",
                payload: "cerca"
            },
            backgroundImage: "https://i.imgur.com/FgsxSYR.png",
            input: {
                placeholder: "Cerca in MAXXI",
                payload: "cerca-in-maxxi"
            }
        };
        return HERO_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwTableDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return TABLE_MOCK;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeHeroPatrimonioDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const HERO_PATRIMONIO_DATA = {
            title: "IL MAXXI",
            backgroundImage: "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg",
            image: "https://i.imgur.com/8BgHOBi.png",
            text: "La storia del MAXXI inizia nell'autunno del 1997 quando l'allora Ministero per i beni culturali ottiene dal Ministero della Difesa la cessione di un'ampia area nel quartiene Flaminio di Roma, occupata da officine e padiglioni della ex Caserma Montello, in disuso da tempo, con il fine di creare un nuovo polo mseale nazionale dedicato alle arti contemporanee per la cui progettazione, nel 1998, viene bandito un concorso internazionale di idee in due fasi. Il bando di concorso prevedeva un piano funzionale complesso, con la presenza di vari poli museali: un museo per l'architettura e uno per le arti del XXI secolo, uno spazio per le produzioni sperimentali, la biblioteca, l'auditorium, spazi per eventi dal vivo e infine spazi didattici.",
            button: {
                text: "NAVIGA IL PATRIMONIO",
                payload: "naviga-patrimonio"
            }
        };
        return HERO_PATRIMONIO_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeBubbleChartDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data)
            return null;
        /** @type {?} */
        const cWidth = (data.width ? data.width : 1000);
        /** @type {?} */
        const cHeight = 700;
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.entity.id;
            /** @type {?} */
            let bubbleData = {
                id: bubble.entity.id,
                texts: [
                    {
                        id: bId + "_label0",
                        label: bubble.entity.label,
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.y - (d.radius / 9)),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 5),
                        color: "white",
                        "classes": ""
                    },
                    {
                        id: bId + "_label1",
                        label: bubble.count,
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.y + (d.radius / 9)),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 6),
                        color: "white",
                        "classes": ""
                    }
                ],
                x: cWidth / 2 + 50,
                y: cHeight / 2 + 50,
                "radius": bubble.count / 55,
                color: bubble.color,
                hasCloseIcon: false,
                payload: {
                    id: bId
                },
                selectable: true,
                selected: (bubble.selected ? bubble.selected : false)
            };
            bubblesData['bubblesData'].push(bubbleData);
        }));
        bubblesData['forceSimulationData'] = {
            xPull: cWidth / 2,
            xPullStrength: -0.01,
            yPull: cHeight / 2,
            yPullStrength: -0.01,
            collisionStrengh: 0.99,
            collisionIterations: 1,
            velocityDecay: 0.65
        };
        if (data.reset)
            bubblesData['reset'] = data.reset;
        return bubblesData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeFacetsWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        data.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            // make array of headers data
            headers.push({
                iconLeft: facet.type.icon,
                text: facet.type.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: '',
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    payload: String(facet.type.id) + '-search',
                }
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        var widgetData = [];
        headers.map((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        (item, i) => {
            widgetData.push({ header: item, input: inputs[i] });
        }));
        return widgetData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeItemPreviewWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        let result = [];
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            let infoGroup = [
                { label: 'Autore', value: '' },
                { label: '', value: '' }
            ];
            item.item.info.forEach((/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (i.key === 'author')
                    infoGroup[0].value = i.value;
                else if (i.key === 'short_description')
                    infoGroup[1].value = i.value;
            }));
            /** @type {?} */
            let toeGroup = item.relatedTOEData.map((/**
             * @param {?} rToe
             * @return {?}
             */
            rToe => {
                return {
                    label: rToe.type.label,
                    value: rToe.count,
                    icon: rToe.type.icon
                };
            }));
            /** @type {?} */
            let metadata = [{ items: infoGroup }, { items: toeGroup }];
            result.push({
                image: item.thumbnail,
                title: item.item.label,
                metadata,
                payload: item.item.id
            });
        }));
        return result;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeItemTagsWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$1 = /*#__PURE__*/Object.freeze({
    AwHeroDS: AwHeroDS,
    AwTableDS: AwTableDS,
    AwHomeHeroPatrimonioDS: AwHomeHeroPatrimonioDS,
    AwHomeBubbleChartDS: AwHomeBubbleChartDS,
    AwHomeFacetsWrapperDS: AwHomeFacetsWrapperDS,
    AwHomeItemPreviewWrapperDS: AwHomeItemPreviewWrapperDS,
    AwHomeItemTagsWrapperDS: AwHomeItemTagsWrapperDS
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwTableEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        /*
        this.innerEvents$.subscribe(event => {
          
        });
    
        this.outerEvents$.subscribe(event => {
          
        });
        */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHeroEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-hero.click':
                    // TODO
                    break;
                case 'aw-hero.change':
                    this.emitOuter('change', payload);
                    break;
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeHeroPatrimonioEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-hero-patrimonio.click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ['aw/patrimonio']
                    });
                    break;
                default:
                    break;
            }
        }));
        /*
        this.outerEvents$.subscribe(event => {
          
        });
        */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeBubbleChartEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            switch (event.type) {
                case 'aw-home-bubble-chart.click':
                    this.emitOuter('click', event.payload);
                    break;
                default:
                    break;
            }
        }));
        /*
        this.outerEvents$.subscribe(event => {
          
        });
        */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeFacetsWrapperEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                // toggle visibility from facet header
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('click', payload);
                    break;
                // change search input text
                case 'aw-home-facets-wrapper.change':
                    this.emitOuter('change', payload);
                    break;
                // press return while typing in search
                case 'aw-home-facets-wrapper.enter':
                    this.emitOuter('enter', payload);
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeItemPreviewWrapperEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        // this.innerEvents$.subscribe( e => {
        // });
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeItemTagsWrapperEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        // this.innerEvents$.subscribe( e => {
        // });
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH$1 = /*#__PURE__*/Object.freeze({
    AwTableEH: AwTableEH,
    AwHeroEH: AwHeroEH,
    AwHomeHeroPatrimonioEH: AwHomeHeroPatrimonioEH,
    AwHomeBubbleChartEH: AwHomeBubbleChartEH,
    AwHomeFacetsWrapperEH: AwHomeFacetsWrapperEH,
    AwHomeItemPreviewWrapperEH: AwHomeItemPreviewWrapperEH,
    AwHomeItemTagsWrapperEH: AwHomeItemTagsWrapperEH
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-hero',
        }, {
            id: 'aw-home-hero-patrimonio',
            hasStaticData: true
        }, {
            id: 'aw-home-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-item-preview-wrapper'
        }],
    layoutDS: AwHomeLayoutDS,
    layoutEH: AwHomeLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JsonConfigService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    load(path) {
        return this.http.get(path).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of({}))), tap((/**
         * @param {?} response
         * @return {?}
         */
        response => this._handleResponse(response)))).toPromise();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    _handleResponse(response) {
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.config.set(key, response[key])));
        }
    }
}
JsonConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JsonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
/** @nocollapse */ JsonConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeLayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     * @param {?} router
     * @param {?} configuration
     * @param {?} communication
     * @param {?} mainState
     */
    constructor(layoutsConfiguration, router, configuration, communication, mainState) {
        super(layoutsConfiguration.get('AwHomeLayoutConfig') || AwHomeLayoutConfig);
        this.router = router;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwHomeLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-home-layout',
                template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero\n            [data]=\"lb.widgets['aw-hero'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n    \n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\"\n         [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbleIds.length>0 }\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                  *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header\n                    [data]=\"widgetData.header\"\n                    [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet\n                    [data]=\"widgetData.input\"\n                    [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div class=\"aw-home__bubble-chart\">\n            <n7-bubble-chart\n                [data]=\"lb.widgets['aw-home-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-home-bubble-chart'].emit\">\n            </n7-bubble-chart>\n        </div>\n\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbleIds.length>0\">\n            <div class=\"aw-home__results-wrapper\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\"> <h1>{{ lb.dataSource.numOfItemsStr }} <span>Oggetti culturali</span></h1></div>\n                    <h3>Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                            <n7-tag\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                            </n7-tag>\n                            <br>\n                    </ng-container>\n                <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-preview-wrapper'].ds.out$ | async;\">\n                    <n7-item-preview\n                        [data]=\"widgetData\"\n                        [emit]=\"lb.widgets['aw-home-item-preview-wrapper'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero\n            [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n</div>"
            }] }
];
/** @nocollapse */
AwHomeLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.mainState;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwAboutLayoutDS extends LayoutDataSource {
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        // TODO
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwAboutLayoutEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        /* this.innerEvents$.subscribe(({ type, payload }) => {
          
        }); */
        /* this.outerEvents$.subscribe(({ type, payload }) => {
          
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwAboutLayoutConfig = {
    layoutId: 'aw-about-layout',
    widgets: [],
    layoutDS: AwAboutLayoutDS,
    layoutEH: AwAboutLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    layoutOptions: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwAboutLayoutComponent extends AbstractLayout {
    constructor() {
        super(AwAboutLayoutConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwAboutLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-about-layout',
                template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    About page!\n</div>"
            }] }
];
/** @nocollapse */
AwAboutLayoutComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwWorksLayoutDS extends LayoutDataSource {
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        // TODO
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwWorksLayoutEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        /* this.innerEvents$.subscribe(({ type, payload }) => {
          
        }); */
        /* this.outerEvents$.subscribe(({ type, payload }) => {
          
        }); */
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwWorksLayoutConfig = {
    layoutId: 'aw-works-layout',
    widgets: [],
    layoutDS: AwWorksLayoutDS,
    layoutEH: AwWorksLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    layoutOptions: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwWorksLayoutComponent extends AbstractLayout {
    constructor() {
        super(AwWorksLayoutConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwWorksLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-works-layout',
                template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    Works page!\n</div>"
            }] }
];
/** @nocollapse */
AwWorksLayoutComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwPatrimonioLayoutDS extends LayoutDataSource {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.options = options;
        /*
        * For an example of header update, or mainState update, check
        * main-layout.ds.ts
        */
    }
}
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwPatrimonioLayoutDS.prototype.titleService;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.options;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.pageTitle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwPatrimonioLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-patrimonio-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'aw-patrimonio-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.destroyed$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwPatrimonioLayoutConfig = {
    layoutId: 'n7-new-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
    // { id: 'header' },
    ],
    layoutDS: AwPatrimonioLayoutDS,
    layoutEH: AwPatrimonioLayoutEH,
    widgetsDataSources: DS$1,
    widgetsEventHandlers: EH$1,
    options: {
    // TODO
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwPatrimonioLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, configuration, layoutsConfiguration, mainState, titleService) {
        super(layoutsConfiguration.get('AwPatrimonioLayoutConfig') || AwPatrimonioLayoutConfig);
        this.router = router;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwPatrimonioLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-patrimonio-layout',
                template: "<div class=\"aw-patrimonio-layout\" id=\"patrimonio-layout\">\n    Layout patrimonio!\n</div>"
            }] }
];
/** @nocollapse */
AwPatrimonioLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.titleService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS$1 = [
    AwHomeLayoutComponent,
    AwAboutLayoutComponent,
    AwWorksLayoutComponent,
    AwPatrimonioLayoutComponent,
];
class N7BoilerplateAriannaWebModule {
}
N7BoilerplateAriannaWebModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS$1,
                imports: [
                    CommonModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS$1
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class N7BoilerplateLibModule {
}
N7BoilerplateLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                exports: [
                    N7BoilerplateCommonModule,
                    N7BoilerplateAriannaWebModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractLayout, ApolloProvider, ApolloProviderConfig, AwAboutLayoutComponent, AwAboutLayoutConfig, AwAboutLayoutDS, AwAboutLayoutEH, AwHeroDS, AwHeroEH, AwHomeBubbleChartDS, AwHomeBubbleChartEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemPreviewWrapperDS, AwHomeItemPreviewWrapperEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwPatrimonioLayoutComponent, AwPatrimonioLayoutConfig, AwPatrimonioLayoutDS, AwPatrimonioLayoutEH, AwTableDS, AwTableEH, AwWorksLayoutComponent, AwWorksLayoutConfig, AwWorksLayoutDS, AwWorksLayoutEH, BreadcrumbsDS, BreadcrumbsEH, CommunicationService, ConfigurationService, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateLibModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, RestProviderConfig, SubnavDS, SubnavEH, CommunicationService as ɵa, MainStateService as ɵb };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
