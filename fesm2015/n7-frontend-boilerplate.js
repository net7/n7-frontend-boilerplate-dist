import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of, fromEvent, interval } from 'rxjs';
import { map, catchError, takeUntil, tap, debounce, debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';

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
    'getTree': {
        queryName: 'getTreeOfItems',
        queryBody: `
    {
      getTreeOfItems(treeId: "patrimonioId" ) {
        id
        label
        icon
        branches {
          label
          id
          icon
          img
          branches {
            label
            id
            icon
            img
            branches {
              label
              id
              icon
              img
            }
          }
        }
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
              configKey
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
                configKey
              }
              count
            }
          }
        }
      }
    }`
    },
    'getEntityDetails': {
        queryName: 'getEntityDetails',
        queryBody: `{
      getEntityDetails(__PARAMS__){
        overviewTab
        entity {
          label
          id
          typeOfEntity {
            configKey
          }
        }
        fieldsTab {
          label
          fields {
            key
            value
          }
        }
        entities {
          entity {
            id
            label
            typeOfEntity {
              configKey
            }
          }
          count
        }
        extraTabUrl
        wikiTabUrl
        items {
          breadcrumbs {
            link
            label
          }
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
              configKey
            }
            count
          }
        }
      }
    }
    `
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: `{
        getItemDetails(__PARAMS__){
          title
          text
          subTitle
          image
           item {
            id
            icon
          }
          similarItems {
            thumbnail
              item {
                label
                icon
                info {
                  key
                  value
                }
              }
            relatedTOEData {
              count
              type {
                label
                configKey
              }
            }
          }
          connectedEntities {
            count
            entity{
             id
            label
              typeOfEntity {
                id
                label
                configKey
              }
            }
          }
          fields {
            id
            label
            fields {
              id
              key
              value
            }
          }
          breadcrumbs {
            label
            link
          }
        }
      }`
    },
    'autoComplete': {
        queryName: 'autoComplete',
        queryBody: `{
      autoComplete(__PARAMS__){
        totalCount
        items {
          item {
            id
            label
            info {
              key
              value
            }
            icon
          }
          thumbnail
          typeOfEntity {
            id
            configKey
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
            // on change
            this._onRouterNavigate();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _onRouterNavigate() {
        // hide tippy
        tippy.hideAll();
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
        return data;
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
                template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n\n        <!-- <n7-nav \n        *ngIf=\"!lb.dataSource.options.sidebar\"\n        [emit]=\"lb.widgets['subnav'].emit\"\n        [data]=\"lb.widgets['subnav'].ds.out$ | async\">\n        </n7-nav> -->\n\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\">\n                    <!-- <h1 \n                    *ngIf=\"lb.dataSource.pageTitle\"\n                    class=\"n7-top-page-bar__title\">{{ lb.dataSource.pageTitle }}</h1>\n                    <n7-breadcrumbs \n                    [emit]=\"lb.widgets['breadcrumbs'].emit\"\n                    [data]=\"lb.widgets['breadcrumbs'].ds.out$ | async\">\n                    </n7-breadcrumbs> -->\n                </div>\n                <!--<div *ngIf=\"lb.dataSource.pageTools\" class=\"n7-top-page-bar__tools\">\n                    <a *ngFor=\"let tool of lb.dataSource.pageTools\" \n                    (click)=\"lb.eventHandler.emitInner('tools-click', tool.payload)\" \n                    class=\"n7-btn {{ tool.classes || '' }}\">\n                        {{ tool.label | translate }}\n                    </a>\n                </div>-->\n            </div>\n            \n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n\n    <div class=\"n7-footer-wrapper\">\n        <div class=\"n7-footer\">\n            Footer\n        </div>\n    </div>\n</div>"
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
class AwLinkedObjectsDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const KEYS = this.options.configKeys;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages);
    }
}
if (false) {
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalPages;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.currentPage;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.pageSize;
}
/**
 * @param {?} data
 * @param {?} page
 * @param {?} size
 * @param {?} keys
 * @param {?} totalPages
 * @return {?}
 */
function unpackData(data, page, size, keys, totalPages) {
    // resize data
    if (size && page) {
        data = data.slice(page * size - size, page * size);
    }
    else if (size) {
        data = data.slice(0, size);
    }
    /** @type {?} */
    var result = [];
    data.forEach((/**
     * @param {?} el
     * @return {?}
     */
    el => {
        /** @type {?} */
        let item = {
            image: el.thumbnail,
            title: el.item.label,
            text: el.item.info[1].value,
            payload: el.item.id,
            metadata: [
                {
                    classes: 'n7-objects__metadata-artist',
                    items: [
                        {
                            // Artista: Mimmo Jodice
                            // label: el.item.info[0].key,
                            label: 'Autore',
                            value: el.item.info[0].value
                        }
                    ]
                },
                {
                    classes: 'n7-objects__metadata-linked',
                    items: el.relatedTOEData.map((/**
                     * @param {?} toe
                     * @return {?}
                     */
                    toe => {
                        return {
                            // Persone: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                            value: toe.count,
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[toe.type.configKey].icon
                        };
                    }))
                }
            ]
        };
        if (el.breadcrumbs) {
            item['breadcrumbs'] = {
                // n7-breadcrumbs uses this as it's own data
                items: el.breadcrumbs.map((/**
                 * @param {?} crumb
                 * @return {?}
                 */
                crumb => {
                    return {
                        label: crumb.label,
                        payload: crumb.link,
                    };
                }))
            };
        }
        result.push(item);
    }));
    if (page) { // if I'm on a page, render pagination data.
        // if I'm on a page, render pagination data.
        /** @type {?} */
        let sizeOptions = [10, 25, 50];
        return {
            pagination: {
                first: { payload: `goto-${1}`, classes: page == 1 ? "is-disabled" : '' },
                prev: { payload: `goto-${page - 1}`, classes: page == 1 ? "is-disabled" : '' },
                next: { payload: `goto-${page + 1}`, classes: page == totalPages ? "is-disabled" : '' },
                last: { payload: `goto-${totalPages}`, classes: page == totalPages ? "is-disabled" : '' },
                links: makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    o => {
                        return {
                            text: o,
                            selected: o == size,
                        };
                    })),
                    payload: 'select-size'
                }
            },
            previews: result
        };
    }
    return result;
}
/**
 * @param {?} totalPages
 * @param {?} currentPage
 * @return {?}
 */
function makePagination(totalPages, currentPage) {
    /** @type {?} */
    let result = []
    // always push the first page
    ;
    // always push the first page
    result.push({ text: '1', payload: 'page-1', classes: currentPage == 1 ? 'is-active' : '' });
    for (let i = 1; i < totalPages; i++) {
        result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
    }
    return result;
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
        const { title, text, button, backgroundImage, input } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                payload: "cerca"
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
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
        const { title, backgroundImage, image, text, button } = data;
        return {
            title,
            backgroundImage,
            image,
            text,
            button: {
                text: button.text,
                payload: "naviga-patrimonio"
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        // threshold below which a bubble should not show its title
        this.thresholdShowTitle = 50;
        // threshold below which a bubble should not show its number
        this.thresholdShowValue = 60;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data)
            return null;
        /** @type {?} */
        let bubbleCointainer = document.getElementById("bubble-chart-container");
        /** @type {?} */
        const cWidth = bubbleCointainer.offsetWidth;
        // now the bubblechart's height is hardcoded to 700, not sure
        // how it sould be actually set
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        const cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        const containerSize = cWidth * cHeight;
        // generic data of the bubble chart
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        // data about each single bubble (starts as [] and gets filled)
        bubblesData['bubblesData'] = [];
        // first loop over all the data's bubbles to gather various numbers, such
        // as the maximum/minimum bubble value and number of selected bubbles
        /** @type {?} */
        let maxBubbleValue = -1;
        /** @type {?} */
        let minBubbleValue = -1;
        /** @type {?} */
        let numOfBubbles = 0;
        /** @type {?} */
        let totalValues = 0;
        /** @type {?} */
        let numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            if (maxBubbleValue < bubble.count)
                maxBubbleValue = bubble.count;
            if (minBubbleValue < 0 || minBubbleValue > bubble.count)
                minBubbleValue = bubble.count;
            numOfBubbles++;
            totalValues += bubble.count;
            if (bubble.selected)
                numOfSelectedBubbles++;
        }));
        // second loop  over all the data's bubbles, for each bubble a corresponding object
        // is created and addded to the bubblesData array
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            // here I compute the bubble's radius (could/should be improved), for it I compute a percentage of the bubble's value
            // compared to all the bubbles and use that percentage to compute the bubble's radius
            // Note : I also use the containerSize and the number of bubbles, ideally also the totValues and
            //        numOfSelectedBubbles should be considered when computing the radius
            //        (selected bubbles are in theory larger bubbles so taking that into account
            //         could help for the radius computation)
            // Note : the radius computation is very important, if the bubbles' radiuses are too big then
            //        the bubbles will go one over the other and will not be able to move as they should, if
            //        the rediuses are instead too small then the bubbles will be to small and conver only a
            //        portion of the container
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleValue / 3)) / ((maxBubbleValue * 3) - (minBubbleValue / 3));
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            // creation of the bubbleData object
            /** @type {?} */
            let bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + "_label0",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowTitle)
                            return null; return bubble.entity.label; }),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => {
                            /** @type {?} */
                            let mNum = (d.radius / 9);
                            if (d.radius < this.thresholdShowValue)
                                mNum = 0;
                            return d.y - mNum;
                        }),
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
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowValue)
                            return null; return bubble.count; }),
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
                "radius": bubbleRadius,
                color: bubble.color,
                hasCloseIcon: (bubble.selected ? bubble.selected : false),
                payload: {
                    id: bId
                },
            };
            bubblesData['bubblesData'].push(bubbleData);
        }));
        // force simulation's parameters for the bubble chart
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
        if (data.setUpdateReference)
            bubblesData['setUpdateReference'] = data.setUpdateReference;
        if (data.setBubbleChart)
            bubblesData['setBubbleChart'] = data.setBubbleChart;
        return bubblesData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwHomeBubbleChartDS.prototype.thresholdShowValue;
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
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             */
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             * @type {?}
             */
            let headerClasses = [];
            /** @type {?} */
            let iconClasses = [facet.icon];
            if (facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.type.configKey) {
                headerClasses.push(`color-${facet.type.configKey}`);
                iconClasses.push(`color-${facet.type.configKey}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: headerClasses.join(' '),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: facet['input-placeholder'],
                    icon: 'n7-icon-search',
                    // disable input if faced header is not enabled
                    disabled: !facet.enabled,
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
class AwHomeAutocompleteDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { items, totalCount } = data;
        const { config } = this.options;
        /** @type {?} */
        let itemIds = [];
        /** @type {?} */
        let groups = {};
        items.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item, typeOfEntity }) => {
            if (!groups[typeOfEntity.id]) {
                const { label, icon } = config[typeOfEntity.configKey];
                groups[typeOfEntity.id] = {
                    title: label,
                    icon,
                    classes: `color-${typeOfEntity.configKey}`,
                    items: [],
                };
            }
            if (itemIds.indexOf(item.id) === -1) {
                /** @type {?} */
                let metaDataValue = '';
                item.info.forEach((/**
                 * @param {?} infoData
                 * @return {?}
                 */
                infoData => {
                    if (infoData.key === 'author')
                        metaDataValue = `di ${infoData.value}`;
                }));
                groups[typeOfEntity.id].items.push({
                    label: item.label,
                    value: metaDataValue,
                    payload: {
                        source: 'item',
                        id: item.id
                    }
                });
            }
        }));
        /** @type {?} */
        const results = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ group: Object.assign({}, groups[key]) })));
        return {
            results,
            actions: {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwEntitaNavDS extends DataSource {
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    transform(param) {
        if (!param)
            return;
        /** @type {?} */
        const data = param.data;
        /** @type {?} */
        const selected = param.selected;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            payload: 'overview',
            classes: selected == 'overview' ? 'is-selected' : ''
        });
        if (data.fieldsTab) {
            navigation.items.push({
                text: 'CAMPI',
                payload: 'campi',
                classes: selected == 'campi' ? 'is-selected' : ''
            });
        }
        if (data.items) {
            navigation.items.push({
                text: 'OGGETTI-COLLEGATI',
                payload: 'oggetti-collegati',
                classes: selected == 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.entities) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                payload: 'entita-collegate',
                classes: selected == 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTabUrl) {
            navigation.items.push({
                text: 'MAXXI',
                payload: 'maxxi',
                classes: selected == 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTabUrl) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                payload: 'wiki',
                classes: selected == 'wiki' ? 'is-selected' : ''
            });
        }
        return navigation;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwEntitaMetadataViewerDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /*
          // console.log('metadata options: ', this.options);
          - - -
          Access and use this.options if the rendering
          changes based on context.
        */
        return {
            group: AwEntitaMetadataViewerDS.unpackFields(data)
        };
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    static unpackFields(fields) {
        /*
              Recursive unpacking for rendering res.fields
              - - -
              This function transforms the response object tree
              into an array, usable by metadata-viewer-component
            */
        /** @type {?} */
        var extracted = [] // holds transformed object
        ;
        if (!fields)
            return []; // if is empty → quit
        for (let i = 0; i < fields.length; i++) {
            /** @type {?} */
            var thisField = fields[i] // rename current field
            ;
            // rename current field
            /** @type {?} */
            var title = thisField.label // field title
            ;
            // field title
            /** @type {?} */
            var label = thisField.key // item label
            ;
            // item label
            /** @type {?} */
            var value = thisField.value // item value
            ;
            // item value
            /** @type {?} */
            var group = thisField.fields // child group
            ;
            // child group
            /** @type {?} */
            var temp = {} // temporary object
            ;
            if (title) { // if there is a title, use it
                temp.title = title;
            }
            if (label && value) { // if there are a lable and value, use them
                temp.label = label;
                temp.value = value;
            }
            if (group) { // if there is a child group
                if (group[0].key) { // if this group has a tuple of (label, value)
                    temp.items = AwEntitaMetadataViewerDS.unpackFields(group); // make items array
                }
                else {
                    temp.group = AwEntitaMetadataViewerDS.unpackFields(group); // make child group array
                }
            }
            extracted.push(temp); // add this object to the new array
        }
        return extracted;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwTreeDS extends DataSource {
    /**
     * @return {?}
     */
    toggleNav() {
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    updateTree(data, parents, id) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            /** @type {?} */
            const classes = it['classes'];
            if (it['_meta'] == id) {
                if (classes.indexOf("is-expanded") > -1) {
                    it['classes'] = classes.replace(/is-expanded/g, "is-collapsed");
                }
                else {
                    it['classes'] = classes.replace(/is-collapsed/g, "is-expanded");
                }
            }
            else if (parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = classes + ' is-expanded';
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                this.updateTree(it, parents, id);
            }
        }));
        this.update(data);
    }
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    selectTreeItem(id, data) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            if (it['_meta'] == id && it['classes'].indexOf('is-active') < 0) {
                it['classes'] = it['classes'] + ' is-active';
                this.currentItem = it;
            }
            else {
                /** @type {?} */
                const classes = it['classes'];
                it['classes'] = classes.replace("is-active", "");
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                this.selectTreeItem(id, it);
            }
        }));
        this.update(data);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    parseData(data) {
        /** @type {?} */
        let treeObj = {
            items: []
        };
        if (data['branches']) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                treeObj['items'].push(this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    parseTree(data, toggle, parents) {
        /** @type {?} */
        var currParents = [...parents];
        /** @type {?} */
        let treeItem = {};
        /** @type {?} */
        const showToggle = toggle && data['branches'] != null;
        if (showToggle) {
            treeItem['toggle'] = {
                icon: 'n7-icon-angle-right',
                payload: {
                    source: "toggle",
                    id: data['id'],
                    parents: currParents,
                }
            };
        }
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (key != "branches") {
                switch (key) {
                    case "label":
                        treeItem['text'] = data[key];
                        break;
                    case "img":
                        treeItem['img'] = data[key];
                        break;
                    case "icon":
                        if (showToggle && data[key] != null) {
                            treeItem['toggle']['icon'] = data[key];
                        }
                        else {
                            treeItem['icon'] = data[key];
                        }
                        break;
                    case "id":
                        treeItem['_meta'] = data[key];
                        treeItem['payload'] = {
                            source: "menuItem",
                            id: data['id']
                        };
                        break;
                    default:
                        data[key];
                        break;
                }
                treeItem['classes'] = 'is-collapsed';
            }
            else if (data['branches'] != null) {
                currParents.push(data['id']);
                /*Handle cases with menu item with children but without toggle*/
                if (!toggle) {
                    treeItem['payload']['source'] = "ToggleMenuItem";
                    treeItem['payload']['parents'] = currParents;
                }
                treeItem['items'] = [];
                data[key].forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    treeItem['items'].push(this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    }
}
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSidebarHeaderDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-tree-icon';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
        this.update(sidebarData);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSchedaBreadcrumbsDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSchedaMetadataDS extends DataSource {
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
class AwSchedaImageDS extends DataSource {
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
class AwSchedaInnerTitleDS extends DataSource {
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
class AwSchedaBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.thresholdShowTitle = 50;
        this.thresholdShowValue = 60;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data)
            return null;
        /** @type {?} */
        let bubbleCointainer = document.getElementById(data.containerId);
        /** @type {?} */
        const cWidth = bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        const cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        const containerSize = cWidth * cHeight;
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        /** @type {?} */
        let maxBubbleCount = -1;
        /** @type {?} */
        let minBubbleCount = -1;
        /** @type {?} */
        let numOfBubbles = 0;
        /** @type {?} */
        let totalCount = 0;
        /** @type {?} */
        let numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            if (maxBubbleCount < bubble.count) {
                maxBubbleCount = bubble.count;
            }
            if (minBubbleCount < 0 || minBubbleCount > bubble.count) {
                minBubbleCount = bubble.count;
            }
            numOfBubbles++;
            totalCount += bubble.count;
            if (bubble.selected) {
                numOfSelectedBubbles++;
            }
        }));
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            /** @type {?} */
            let bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + '_label0',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => bubble.entity.label),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => {
                            /** @type {?} */
                            let mNum = (d.radius / 9);
                            if (d.radius < this.thresholdShowValue) {
                                mNum = 0;
                            }
                            return d.y - mNum;
                        }),
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 5),
                        color: 'white',
                        'classes': ''
                    },
                    {
                        id: bId + '_label1',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowValue) {
                            return null;
                        } return bubble.count; }),
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
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 6),
                        color: 'white',
                        'classes': ''
                    }
                ],
                x: cWidth / 2 + 50,
                y: cHeight / 2 + 50,
                'radius': bubbleRadius,
                color: bubble.color,
                hasCloseIcon: (bubble.selected ? bubble.selected : false),
                payload: {
                    id: bId
                },
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
        if (data.reset) {
            bubblesData['reset'] = data.reset;
        }
        if (data.setUpdateReference) {
            bubblesData['setUpdateReference'] = data.setUpdateReference;
        }
        if (data.setBubbleChart) {
            bubblesData['setBubbleChart'] = data.setBubbleChart;
        }
        return bubblesData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwSchedaBubbleChartDS.prototype.thresholdShowValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$1 = /*#__PURE__*/Object.freeze({
    AwLinkedObjectsDS: AwLinkedObjectsDS,
    AwHeroDS: AwHeroDS,
    AwTableDS: AwTableDS,
    AwHomeHeroPatrimonioDS: AwHomeHeroPatrimonioDS,
    AwHomeBubbleChartDS: AwHomeBubbleChartDS,
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
    AwSchedaBubbleChartDS: AwSchedaBubbleChartDS
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwLinkedObjectsEH extends EventHandler {
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
                case 'aw-linked-objects.click':
                    if (payload.startsWith('page')) {
                        // pagination routing is handled by the parent layout
                        this.emitOuter('pagination', payload);
                    }
                    else if (payload.startsWith('goto')) {
                        /** @type {?} */
                        let targetPage = Number(payload.replace('goto-', ''))
                        // kill impossible page navigations
                        ;
                        // kill impossible page navigations
                        if (targetPage > this.dataSource.totalPages)
                            return;
                        else if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                            return;
                        else
                            this.emitOuter('goto', payload);
                    }
                    else {
                        // navigate to the patrimonio page of this item
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [`aw/patrimonio/${payload}`]
                        });
                    }
                    break;
                case 'aw-linked-objects.change':
                    this.emitOuter('change', Number(payload.value));
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        }));
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
                case 'aw-home-bubble-chart.mouse_enter':
                    this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    this.emitOuter('mouse_leave', event.payload);
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
class AwHomeItemTagsWrapperEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case "aw-home-item-tags-wrapper.click":
                    this.emitOuter('click', event.payload);
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
class AwHomeAutocompleteEH extends EventHandler {
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
                case "aw-home-autocomplete.click":
                    if (payload && payload.source === 'item')
                        this.emitOuter('click', payload);
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
class AwEntitaNavEH extends EventHandler {
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
                case 'aw-entita-nav.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    console.warn('unhandled event type');
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
class AwSchedaSidebarEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (type == 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter(type, payload);
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
class AwSidebarHeaderEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (type == 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter('click', payload);
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
class AwTreeEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (payload && typeof payload.source != 'undefined') {
                switch (payload.source) {
                    case 'toggle':
                        this.dataSource.updateTree(null, payload.parents, payload.id);
                        break;
                    case 'ToggleMenuItem': this.dataSource.updateTree(null, payload.parents, payload.id); //no break, I want to execute also the following instruction
                    case 'menuItem':
                        this.dataSource.selectTreeItem(payload.id);
                        this.emitOuter('click', payload.id);
                        break;
                }
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.selectTreeItem(payload);
                    this.dataSource.updateTree(null, this.dataSource.currentItem.payload.parents, payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    this.dataSource.parseData(payload);
                    break;
            }
        }));
    }
}

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

var EH$1 = /*#__PURE__*/Object.freeze({
    AwLinkedObjectsEH: AwLinkedObjectsEH,
    AwHeroEH: AwHeroEH,
    AwHomeBubbleChartEH: AwHomeBubbleChartEH,
    AwHomeFacetsWrapperEH: AwHomeFacetsWrapperEH,
    AwHomeHeroPatrimonioEH: AwHomeHeroPatrimonioEH,
    AwHomeItemTagsWrapperEH: AwHomeItemTagsWrapperEH,
    AwHomeAutocompleteEH: AwHomeAutocompleteEH,
    AwEntitaNavEH: AwEntitaNavEH,
    AwSchedaSidebarEH: AwSchedaSidebarEH,
    AwSidebarHeaderEH: AwSidebarHeaderEH,
    AwTreeEH: AwTreeEH,
    AwTableEH: AwTableEH
});

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
            // config keys colors
            if (response['config-keys']) {
                /** @type {?} */
                const headTag = document.querySelector('head');
                /** @type {?} */
                const styleElement = document.createElement('style');
                /** @type {?} */
                let styles = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    /** @type {?} */
                    const configKey = response['config-keys'][key] || {};
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${key}: ${configKey.color.hex};`);
                    }
                }));
                if (styles.length) {
                    styles.unshift(':root {');
                    styles.push('}');
                    styleElement.appendChild(document.createTextNode(styles.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
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
class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.myResponse = {}; // backend response object
        // selected nav item
        this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        /*
          Requests data from communication provider
         */
        return this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { entityId: id }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateWidgets(data) {
        /*
              Updates the widgets on this layout, based on route
            */
        /** @type {?} */
        const selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data, selected });
    }
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => console.error(error)),
                params: { entityId: id }
            });
        }
        else {
            this.pageTitle = 'Entità Test';
        }
    }
    /**
     * @param {?} res
     * @return {?}
     */
    loadContent(res) {
        console.log('Apollo responded with: ', { res });
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.entity.typeOfEntity.configKey].icon,
            text: this.myResponse.entity.label,
            color: this.myResponse.entity.typeOfEntity.configKey
        };
        switch (this.selectedTab) { // make dynamic content depending on request
            case 'overview':
                {
                    this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                    this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                    this.one('aw-linked-objects').updateOptions({ size: 3, configKeys: this.configuration.get("config-keys") });
                    this.one('aw-linked-objects').update(res.items);
                }
                break;
            case 'campi':
                {
                    this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                    this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                }
                break;
            case 'oggetti-collegati':
                {
                    this.one('aw-linked-objects').updateOptions({
                        context: this.selectedTab,
                        configKeys: this.configuration.get("config-keys"),
                        page: this.currentPage,
                        size: this.pageSize,
                    });
                    this.one('aw-linked-objects').update(res.items);
                }
                break;
            case 'entita-collegate':
                {
                    // entita
                }
                break;
            case 'maxxi':
                {
                    // maxxi
                }
                break;
            case 'wiki':
                {
                    // wiki
                }
                break;
            default:
                // the url is aw/entita/something/ ??? → unknown
                console.warn('Unhandled navigation page');
                break;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.titleService;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.myResponse;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.selectedTab;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.navHeader;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    // private selectedTab: string;
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
                case 'aw-entita-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    this.entityId = this.route.snapshot.params.id || "";
                    this.dataSource.currentPage = this.route.snapshot.params.page || '';
                    this.listenRoute();
                    this.loadNavigation(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        this.emitGlobal('navigate', {
                            path: [
                                this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    this.entityId
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
                    }
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
                case 'aw-entita-nav.click':
                    if (payload) {
                        this.emitGlobal('navigate', {
                            path: [
                                this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    this.entityId
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    this.dataSource.currentPage = payload.split('-')[1];
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });
                    break;
                case 'aw-linked-objects.goto':
                    /** @type {?} */
                    let targetPage = Number(payload.replace('goto-', ''))
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    ;
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    break;
                case 'aw-linked-objects.change':
                    this.dataSource.pageSize = payload;
                    this.listenRoute(); // reloads the page content with the new page size
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenRoute() {
        /**
         * Listens to routing events of this layout.
         */
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // look for id
            if (params.get('id')) {
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    if (res) {
                        this.dataSource.loadContent(res);
                    }
                }));
            }
            else {
                this.dataSource.loadItem();
            }
        }));
    }
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    loadNavigation(selectedItem) {
        this.dataSource.getNavigation(selectedItem).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.updateWidgets(response);
            }
            if (selectedItem) {
                this.emitOuter('selectItem', selectedItem);
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.entityId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwEntitaLayoutConfig = {
    layoutId: 'aw-entita-layout',
    widgets: [
        { id: 'aw-entita-nav', hasStaticData: true },
        { id: 'aw-entita-metadata-viewer' },
        { id: 'aw-linked-objects' },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
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
class AwEntitaLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} communication
     * @param {?} mainState
     * @param {?} titleService
     */
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
            route: this.route,
            titleService: this.titleService,
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
AwEntitaLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-entita-layout',
                template: "<div class=\"aw-entity\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav \n            [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n    \n    <div class=\"aw-entity__content\" \n         [ngSwitch]=\"lb.dataSource.selectedTab\">\n        <ng-container *ngSwitchCase=\"'overview'\">\n            <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'campi'\">\n            <ng-container *ngTemplateOutlet=\"campi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'oggetti-collegati'\">\n            <ng-container *ngTemplateOutlet=\"oggetti\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'entita-collegate'\">\n            <ng-container *ngTemplateOutlet=\"entita\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'maxxi'\">\n            <ng-container *ngTemplateOutlet=\"maxxi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'wiki'\">\n            <ng-container *ngTemplateOutlet=\"wiki\"></ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<!-- navigation page content templates -->\n<ng-template #overview>\n    <section>\n        <div class=\"aw-entity__content-section\">\n            <div class=\"aw-entity__overview-description\">\n                {{lb.dataSource.myResponse.overviewTab}}\n            </div>\n            <div class=\"aw-entita-layout__button-wrapper\">\n                <button *ngIf=\"lb.dataSource.myResponse.wikiTabUrl\"\n                        class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                    DESCRIZIONE WIKIPEDIA\n                </button>\n                <button *ngIf=\"lb.dataSource.myResponse.extraTabUrl\"\n                        class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                    DESCRIZIONE MAXXI\n                </button>\n            </div>\n        </div>\n        \n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section\">\n                <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                <button class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                    TUTTI I CAMPI\n                </button>\n                <n7-metadata-viewer \n                    class=\"aw-entita-layout__metadata-viewer\"\n                    [data]=\"data\">\n                </n7-metadata-viewer>\n            </div>\n        </ng-container>\n        \n        <div class=\"aw-entity__content-section\">\n            <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n            <button class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                TUTTI GLI OGGETTI COLLEGATI\n            </button>\n            <ng-container *ngFor=\"let preview of lb.widgets['aw-linked-objects'].ds.out$ | async\">\n                <n7-breadcrumbs\n                    [data]=\"preview.breadcrumbs\">\n                </n7-breadcrumbs>\n                <n7-item-preview\n                    [data]=\"preview\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n\n        <div class=\"aw-entity__content-section\">\n            <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n            <button class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\">\n                TUTTE LE ENTIT\u00C0 COLLEGATE\n            </button>\n            <!-- BUBBLE CHART GOES HERE -->\n            <img src=\"https://i.imgur.com/P21HGo5.png\" alt=\"bubble chart\" (dragstart)=\"false\">\n        </div>\n        \n    </section>\n</ng-template>\n\n<ng-template #campi>\n    <div>\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n            <n7-metadata-viewer class=\"aw-entita-layout__metadata-viewer\"\n                [data]=\"data\">\n            </n7-metadata-viewer>\n        </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #oggetti>\n    <div>\n        <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n        <ng-container \n            *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n            <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n            </n7-breadcrumbs>\n            <n7-item-preview \n                [data]=\"preview\"\n                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-item-preview>\n        </ng-container>\n        <n7-pagination \n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n        </n7-pagination>\n    </div>\n</ng-template>\n\n<ng-template #entita>\n    <div>\n        <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n        <!-- BUBBLE CHART GOES HERE -->\n        <img src=\"https://i.imgur.com/P21HGo5.png\" alt=\"bubble chart\" (dragstart)=\"false\">\n    </div>\n</ng-template>\n\n<ng-template #maxxi>\n    <div>\n        <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n        <div>\n            {{lb.dataSource.myResponse.overviewTab}}\n        </div>\n        <a href=\"{{lb.dataSource.myResponse.extraTabUrl}}\">\n            {{lb.dataSource.myResponse.extraTabUrl}}\n        </a>\n    </div>\n</ng-template>\n\n<ng-template #wiki>\n    <div>\n        <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n        <div>\n            {{lb.dataSource.myResponse.overviewTab}}\n        </div>\n        <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n            {{lb.dataSource.myResponse.wikiTabUrl}}\n        </a>\n    </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AwEntitaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.titleService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetData = null;
        this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        this.allBubbles = null;
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (this are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        this.selectedBubbles = [];
        this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        this.lastWindowWidth = -1;
        this.bubblePopup = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration, tippy }) {
        this.communication = communication;
        this.tippy = tippy;
        this.mainState = mainState;
        this.configuration = configuration;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            (ent) => {
                /** @type {?} */
                const teoConfigData = this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    this.facetData.push(Object.assign({}, ent.countData, teoConfigData, { enabled: true }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.setAllBubblesFromApolloQuery(response);
            this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.lastWindowWidth = window.outerWidth;
        fromEvent(window, "resize").pipe(debounce((/**
         * @return {?}
         */
        () => interval(200)))).
            subscribe((/**
         * @return {?}
         */
        () => {
            // only resets the bubbles if the window's width has changed
            // (if the resize only effects the window's hight then the bubble chart
            // doesn't get reset)
            if (this.lastWindowWidth != window.outerWidth) {
                this.lastWindowWidth = window.outerWidth;
                this.updateBubblesAndItemPreviews(true);
            }
        }));
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
    }
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    onBubbleTooltipClick(source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                const bubbleId = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId)
                    return;
                /** @type {?} */
                let bubble = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll(`g`).each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    b => {
                        if (b.id === bubbleId)
                            bubble = b;
                    }));
                    if (bubble)
                        this.onBubbleSelected(bubble);
                }
                break;
            default:
                break;
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleMouseEnter(payload) {
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        const bubbleId = payload.bubble.id;
        /** @type {?} */
        let hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            let bubble = this.allBubbles[i];
            if (bubble.entity.id === hoverEntityId) {
                this.currentHoverEntity = bubble.entity;
                this.currentHoverEntity.count = bubble.count;
                break;
            }
        }
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            let templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            this.bubblePopup = this.tippy(`#${bubbleId}`, {
                content: templateClone,
                trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                placement: 'top-middle',
                maxWidth: 500,
            })[0];
            setTimeout((/**
             * @return {?}
             */
            () => { if (this.bubblePopup)
                this.bubblePopup.show(); }), 800);
        }));
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
            /** @type {?} */
            let numOfItemsTmpStr = numOfItems + '';
            if (numOfItems < 10)
                numOfItemsTmpStr = '00' + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = '0' + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItemsTmpStr;
            else
                this.numOfItemsStr = numOfItems + '';
        }
        else {
            this.numOfItemsStr = null;
        }
        this.one('aw-linked-objects').updateOptions({ context: 'home', configKeys: this.configuration.get('config-keys') });
        this.one('aw-linked-objects').update(response.itemsPagination.items);
        // scroll control
        this._scrollBackgroundControl();
    }
    /**
     * @param {?} bubble
     * @return {?}
     */
    onBubbleSelected(bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleDeselected(payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            (b) => b.id !== payload.bubble.id));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                this.updateBubblesAndItemPreviews();
            }
        }
    }
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    updateBubblesAndItemPreviews(onlyBubbles) {
        /** @type {?} */
        let selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            (sB) => {
                /** @type {?} */
                let entityId = this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: {
                selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!onlyBubbles) {
                this.renderPreviewsFromApolloQuery(response);
                this.renderItemTags();
            }
            this.setAllBubblesFromApolloQuery(response, true);
        }));
    }
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    convertEntityIdToBubbleId(entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    }
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    setAllBubblesFromApolloQuery(response, reset) {
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            let currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(Object.assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            bubble.id = this.convertEntityIdToBubbleId(bubble.entity.id);
            this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            bubble.selected = false;
            for (var i = 0; i < this.selectedBubbles.length; i++) {
                if (this.selectedBubbles[i].id === bubble.id)
                    bubble.selected = true;
            }
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.filterBubblesBasedOnFacetsEnabled(),
            reset: (reset ? reset : false),
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            (bubbleCref) => this._bubbleChart = bubbleCref)
        });
    }
    /**
     * @return {?}
     */
    filterBubblesBasedOnFacetsEnabled() {
        /** @type {?} */
        let result = this.allBubbles.filter((/**
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
        return result;
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
    }
    /**
     * @param {?} enter
     * @return {?}
     */
    handleFacetSearchEnter(enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
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
                let filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                (bubble) => {
                    /** @type {?} */
                    let typeOfEntity = "";
                    for (var i = 0; i < this.allBubbles.length; i++) {
                        if (this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbles.length != this.selectedBubbles.length) {
                    this.selectedBubbles = filteredSelectedBubbles;
                }
                ;
            }
            this.allBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                bubble.selected = false;
                for (var i = 0; i < this.selectedBubbles.length; i++) {
                    if (this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: this.filterBubblesBasedOnFacetsEnabled(),
                setBubbleChart: (/**
                 * @param {?} bubbleCref
                 * @return {?}
                 */
                (bubbleCref) => this._bubbleChart = bubbleCref),
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
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        (sBubble) => {
            /** @type {?} */
            let label = '';
            for (var i = 0; i < this.allBubbles.length; i++) {
                if (this.allBubbles[i].id === sBubble.id) {
                    label = this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + this.allBubbles[i].entity.typeOfEntity.id });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onTagClicked(payload) {
        if (!payload)
            return;
        /** @type {?} */
        const bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll(`g`).each((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        (b) => b.id !== payload));
        this.updateBubblesAndItemPreviews();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHeroChange(value) {
        this.autocompleteChanged$.next(value);
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
    /**
     * @private
     * @return {?}
     */
    _scrollBackgroundControl() {
        /** @type {?} */
        const el = document.getElementById('bubble-results-list');
        /** @type {?} */
        const source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ target }) => {
            this._setHasScrollBackground(target);
        }));
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    _setHasScrollBackground({ scrollTop, scrollHeight, clientHeight }) {
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    }
    /**
     * @private
     * @return {?}
     */
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({ config: this.configuration.get('config-keys') });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => console.error(error)),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.one('aw-home-autocomplete').update(response);
                    if (!this.autocompletePopoverOpen)
                        this._toggleAutocompletePopover();
                }));
            }
            else {
                this._toggleAutocompletePopover();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _toggleAutocompletePopover() {
        if (!this.autocompletePopover) {
            /** @type {?} */
            const template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            this.autocompletePopover = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: (/**
                 * @return {?}
                 */
                () => this.autocompletePopoverOpen = false),
            })[0];
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopover;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopoverOpen;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompleteChanged$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.entityBubbleIdMap;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lastWindowWidth;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.bubblePopup;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
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
                    this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.destroy':
                    this.destroyed$.next();
                    break;
                case "aw-home-layout.bubble-tooltip-close-click":
                    this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-home-layout.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${payload.entityId}/overview`]
                    });
                    break;
                case "aw-home-layout.bubble-tooltip-select-click":
                    this.dataSource.onBubbleTooltipClick('select', payload);
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
                    this.dataSource.onHeroChange(payload.value);
                    break;
                /**
                 * Facets Event Handlers
                 */
                case 'aw-home-facets-wrapper.click':
                    this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    this.dataSource.handleFacetSearchEnter(payload);
                    break;
                /**
                 * Bubble Chart Event Handlers
                 */
                case 'aw-home-bubble-chart.mouse_enter':
                    this.dataSource.onBubbleMouseEnter({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble)
                            this.dataSource.onBubbleSelected(payload.bubble);
                    }
                    else if (payload.source === 'close')
                        this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    this.dataSource.onTagClicked(payload);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-autocomplete.click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get('paths').entitaBasePath, payload.id]
                    });
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
    AwHomeLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.route;
}

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
            id: 'aw-home-hero-patrimonio'
        }, {
            id: 'aw-home-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-autocomplete'
        }, {
            id: 'aw-linked-objects'
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
            tippy: tippy,
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
                template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- hidden buttons and div used to implement the bubbles' popups -->\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_closebutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-close-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_gotobutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-goto-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_selectbutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-select-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <div class=\"aw-bubble-popup-menu\" id=\"bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.label : '' ) }}</h2>\n        <span class=\"aw-bubble-popup-menu__close n7-icon-close\" onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( lb.dataSource.currentHoverEntity ? '\u00C8 collegato a '+lb.dataSource.currentHoverEntity.count+' entit\u00E0' : '' ) }}\n        </p>\n\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\" [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length>0 }\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div id=\"bubble-chart-container\">\n            <n7-bubble-chart [data]=\"lb.widgets['aw-home-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-home-bubble-chart'].emit\">\n            </n7-bubble-chart>\n        </div>\n\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length>0\">\n            <div class=\"aw-home__bubble-results\" [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column' }\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\"> <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">{{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span></h1></div>\n\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\">\n                        <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                            <n7-item-preview\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\" class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    \n                    <div class=\"aw-home__bubble-results-list-actions\">\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\" href=\"\">Vedi tutti</a>\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-others\" href=\"\">Vedi altri</a>\n                    </div>\n                    \n                </div>\n               \n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-advanced-autocomplete [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n</div>"
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
class AwSchedaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.allBubbles = null;
        this.selectedBubbles = [];
    }
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, communication }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.titleService = titleService;
        this.communication = communication;
        this.options = options;
        this.sidebarCollapsed = false;
        this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart']['title'];
        this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items']['title'];
        this.metadataSectionTitle = this.configuration.get('scheda-layout')['metadata']['title'];
        this.hasSimilarItems = false;
        this.hasBubbles = false;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { treeId: id }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateNavigation(data) {
        /** @type {?} */
        let header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-sidebar-header').update(header);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadItem(id) {
        if (id) {
            /** @type {?} */
            const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: { itemId: id, maxSimilarItems }
            });
        }
        else {
            /* TODO: valori statici, da prendere da config */
            this.pageTitle = 'Collezione d\'Arte';
            this.contentParts = [
                {
                    type: 'text',
                    title: 'Collezione d\'Arte',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    type: 'text',
                    title: 'Centro Archivi',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ];
        }
        /*Breadcrumb section*/
        /** @type {?} */
        let breadcrumbs = {
            items: []
        };
        this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loadContent(response) {
        if (response) {
            this.contentParts = [];
            /** @type {?} */
            let content = {};
            if (response.text) {
                content['content'] = response.text;
            }
            this.contentParts.push(content);
            if (response.image) {
                /** @type {?} */
                const images = [{ type: 'image', url: response.image, buildPyramid: false }];
                if (!this.imageViewerIstance) {
                    this.one('aw-scheda-image').update({
                        viewerId: 'scheda-layout-viewer',
                        _setViewer: (/**
                         * @param {?} viewer
                         * @return {?}
                         */
                        (viewer) => {
                            this.imageViewerIstance = viewer;
                            viewer.open(images);
                        }),
                    });
                }
                else {
                    this.imageViewerIstance.open(images);
                }
            }
            /** @type {?} */
            let titleObj = {
                icon: response.item.icon,
                title: {
                    main: {
                        text: response.title,
                        classes: 'bold',
                    }
                },
                tools: response.subTitle,
                actions: {}
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            /*Metadata section*/
            /** @type {?} */
            let group = { group: [] };
            if (response.fields) {
                this.hasMetadata = true;
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => {
                    /** @type {?} */
                    let items = [];
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        items.push({ label: item.key, value: item.value });
                    }));
                    group.group.push({
                        title: field.label,
                        items: items
                    });
                }));
            }
            this.one('aw-scheda-metadata').update(group);
            /*Breadcrumb section*/
            /** @type {?} */
            let breadcrumbs = {
                items: []
            };
            response.breadcrumbs.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                breadcrumbs.items.push({
                    label: element.label,
                    payload: element.link
                });
            }));
            this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
        }
        /* Related Entities */
        if (response.connectedEntities) {
            this.hasBubbles = true;
            this.setAllBubblesFromApolloQuery(response);
        }
        else {
            this.hasBubbles = false;
            this.one('aw-scheda-bubble-chart').update(null);
        }
        /* Similar item */
        if (response.similarItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', configKeys: this.configuration.get("config-keys") });
            this.one('aw-linked-objects').update(response.similarItems);
        }
        else {
            this.hasSimilarItems = false;
            this.one('aw-linked-objects').update(null);
        }
    }
    /**
     * @return {?}
     */
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    setAllBubblesFromApolloQuery(response, reset) {
        if (!response || !response.connectedEntities) {
            return;
        }
        this.allBubbles = [];
        for (let i = 0; i < response.connectedEntities.length; i++) {
            /** @type {?} */
            const color = this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(Object.assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
        }
        this.one('aw-scheda-bubble-chart').update({
            containerId: 'bubble-chart-container',
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles,
            reset: (reset ? reset : false)
        });
    }
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    convertEntityIdToBubbleId(entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    }
}
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwSchedaLayoutDS.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.options;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBreadcrumb;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.contentParts;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.tree;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarCollapsed;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.bubbleChartSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.similarItemsSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.metadataSectionTitle;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasMetadata;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasBubbles;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSchedaLayoutEH extends EventHandler {
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
                case 'aw-scheda-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    /** @type {?} */
                    let paramId = this.route.snapshot.params.id || "";
                    this.listenRoute();
                    this.loadNavigation(paramId);
                    break;
                case 'aw-scheda-layout.destroy':
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
                case 'aw-tree.click':
                    if (payload) {
                        this.emitGlobal('navigate', { path: [this.configuration.get('paths').schedaBasePath + payload], handler: 'router' });
                    }
                    break;
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenRoute() {
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            if (params.get('id')) {
                this.dataSource.loadItem(params.get('id')).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response) {
                        this.dataSource.loadContent(response);
                    }
                }));
            }
            else {
                this.dataSource.loadItem();
            }
        }));
    }
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    loadNavigation(selectedItem) {
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.updateNavigation(response);
                this.emitOuter('navigationresponse', response);
            }
            if (selectedItem) {
                this.emitOuter('selectItem', selectedItem);
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
        { id: 'aw-scheda-bubble-chart' },
        { id: 'aw-linked-objects' }
    ],
    layoutDS: AwSchedaLayoutDS,
    layoutEH: AwSchedaLayoutEH,
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
class AwSchedaLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     * @param {?} communication
     */
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
     * @protected
     * @return {?}
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
AwSchedaLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-scheda-layout',
                template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n         <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree\">\n            <n7-sidebar-header\n                [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"\n            ></n7-sidebar-header>\n            <n7-tree\n                [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-tree'].emit\"\n                [hidden]=\"lb.dataSource.sidebarCollapsed\"\n            ></n7-tree>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper\">\n            <n7-breadcrumbs\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\"\n            ></n7-breadcrumbs>\n\n            <n7-inner-title\n            [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\"\n            ></n7-inner-title>\n\n            <n7-image-viewer\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\"\n            >\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\"\n                [hidden] = \"!lb.hasMetadata\"\n            >\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.metadataSectionTitle}}</div>\n                <n7-metadata-viewer\n                    [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section id=\"bubble-chart-container\" class=\"aw-scheda__bubble-chart\">\n                <div\n                    [hidden] = \"!lb.dataSource.hasBubbles\"\n                    class=\"aw-scheda__inner-title\">{{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <n7-bubble-chart [data]=\"lb.widgets['aw-scheda-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-scheda-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </section>\n\n            <section\n                [hidden] = \"!lb.dataSource.hasSimilarItems\"\n                id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items n7-grid-2\">\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                        <n7-item-preview\n                            [data]=\"widgetData\"\n                            >\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n             </section>\n        </div>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AwSchedaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title },
    { type: CommunicationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.communication;
}

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
/** @type {?} */
const COMPONENTS$1 = [
    AwAboutLayoutComponent,
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwWorksLayoutComponent,
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

export { AbstractLayout, ApolloProvider, ApolloProviderConfig, AwAboutLayoutComponent, AwAboutLayoutConfig, AwAboutLayoutDS, AwAboutLayoutEH, AwEntitaLayoutComponent, AwEntitaLayoutConfig, AwEntitaLayoutDS, AwEntitaLayoutEH, AwEntitaMetadataViewerDS, AwEntitaNavDS, AwEntitaNavEH, AwHeroDS, AwHeroEH, AwHomeAutocompleteDS, AwHomeAutocompleteEH, AwHomeBubbleChartDS, AwHomeBubbleChartEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwLinkedObjectsDS, AwLinkedObjectsEH, AwPatrimonioLayoutConfig, AwSchedaBreadcrumbsDS, AwSchedaBubbleChartDS, AwSchedaImageDS, AwSchedaInnerTitleDS, AwSchedaLayoutComponent, AwSchedaLayoutDS, AwSchedaLayoutEH, AwSchedaMetadataDS, AwSchedaSidebarEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTreeDS, AwTreeEH, AwWorksLayoutComponent, AwWorksLayoutConfig, AwWorksLayoutDS, AwWorksLayoutEH, BreadcrumbsDS, BreadcrumbsEH, CommunicationService, ConfigurationService, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateLibModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, RestProviderConfig, SubnavDS, SubnavEH, CommunicationService as ɵa, MainStateService as ɵb };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
