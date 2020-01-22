import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK, DATA_WIDGET_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, of, Subject, forkJoin, fromEvent, merge } from 'rxjs';
import { map, catchError, tap, takeUntil, filter, debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';
import tippy, { hideAll } from 'tippy.js';
import { get, cloneDeep } from 'lodash';
import slug from 'slug';

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
      getTreeOfItems{
        id
        label
        icon
        branches {
          label
          id
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
            }
            relatedTypesOfEntity {
              type
              count
            }
          }
        }
      }
      }`
    },
    'getEntityDetails': {
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
          }
          count
        }
      }
    }
    `
    },
    'getItem': {
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
            }
          }
          relatedItems {
            thumbnail
            item {
              label
              id
          }
          relatedTypesOfEntity {
            type
            count
          }
        }
        breadcrumbs {
          label
          link
        }
      }
    }`
    },
    'getNode': {
        queryName: 'getNode',
        queryBody: `{
      getNode(__PARAMS__) {
        ... on Item {
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
          breadcrumbs {
            label
            link
          }
        }
        ... on Node {
          id
          label
          img
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
    }`
    },
    'autoComplete': {
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
    }`
    },
    'search': {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        totalCount
        facets {
          id
          type
          operator
          limit
          order
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
    }`
    },
    'getMissingBubble': {
        queryName: 'getEntity',
        queryBody: `{
      getEntity(__PARAMS__){
        label
        id
        typeOfEntity
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
        const { queryName } = query;
        let { queryBody } = query;
        // config query control
        if (!queryName || !queryBody) {
            throw Error(`No config found for requestId '${requestId}'`);
        }
        if (params) {
            /** @type {?} */
            const paramsStr = this.makeParamsStr(params);
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
        const paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                const arrStr = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                    if (typeof val === 'object') {
                        /** @type {?} */
                        const subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else {
                        if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                            arrStr.push(`${val}`);
                        }
                        else {
                            arrStr.push(`"${val}"`);
                        }
                    }
                }));
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof params[key] === 'object' && params[key]) {
                /** @type {?} */
                const subParamsStr = this.makeParamsStr(params[key]);
                paramsStr.push(`${key}: { ${subParamsStr} }`);
            }
            else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(`${key.replace('$', '')}: ${params[key]}`);
            }
            else {
                if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                    paramsStr.push(`${key}: ${params[key]}`);
                }
                else {
                    paramsStr.push(`${key}: "${params[key]}"`);
                }
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
        let { params, method, httpOptions, urlParams = '' } = options;
        /** @type {?} */
        let point = RestProviderConfig[requestId];
        // default method
        if (!method) {
            method = this.providerConfig.defaultMethod || 'GET';
        }
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error(`No config found for requestId "${requestId}"`);
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
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
    onInit({ configuration, mainState, router, options, titleService, route }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.options = options;
        // update header
        if (this.configuration.get('header')) {
            this.one('header').update({ 'items': this.configuration.get('header') });
        }
        if (this.configuration.get('footer')) {
            this.one('footer').update({ 'items': this.configuration.get('footer') });
        }
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
            const { path, queryParams } = payload;
            // path control
            if (!path)
                throw Error('onNavigate: no path for router navigate');
            if (queryParams) {
                this.router.navigate(path, {
                    relativeTo: this.route,
                    queryParams: queryParams,
                    queryParamsHandling: 'merge'
                });
            }
            else {
                this.router.navigate(path);
            }
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
        hideAll();
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
    MainLayoutDS.prototype.route;
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
 * @record
 */
function IFacetInputData() { }
if (false) {
    /** @type {?} */
    IFacetInputData.prototype.value;
    /** @type {?} */
    IFacetInputData.prototype.label;
    /** @type {?} */
    IFacetInputData.prototype.counter;
    /** @type {?|undefined} */
    IFacetInputData.prototype.hidden;
    /** @type {?|undefined} */
    IFacetInputData.prototype.options;
}
/**
 * @abstract
 */
class FacetInput {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isEmpty = false;
        this.update = (/**
         * @return {?}
         */
        () => this.output = this.transform());
        this.getId = (/**
         * @return {?}
         */
        () => this.id);
        this.getData = (/**
         * @return {?}
         */
        () => this.data);
        this.getConfig = (/**
         * @return {?}
         */
        () => this.config);
        this.getFacetId = (/**
         * @return {?}
         */
        () => this.config.facetId);
        this.getInputIndex = (/**
         * @return {?}
         */
        () => this.config.inputIndex);
        this.getSectionIndex = (/**
         * @return {?}
         */
        () => this.config.sectionIndex);
        this.getContext = (/**
         * @return {?}
         */
        () => this.config.filterConfig.context || 'external');
        this.getTarget = (/**
         * @return {?}
         */
        () => this.config.filterConfig.target || null);
        this.getSearchIn = (/**
         * @return {?}
         */
        () => this.config.filterConfig.searchIn || null);
        this.getType = (/**
         * @return {?}
         */
        () => this.config.type);
        this.getOutput = (/**
         * @return {?}
         */
        () => this.output);
        this.setIsEmpty = (/**
         * @param {?} empty
         * @return {?}
         */
        (empty) => {
            this.isEmpty = empty;
        });
        this.setData = (/**
         * @param {?} newData
         * @return {?}
         */
        (newData) => this.data = newData);
        this.config = config;
        this._setId();
        FacetInput.index++;
    }
    /**
     * @return {?}
     */
    clear() { }
    /**
     * @private
     * @return {?}
     */
    _setId() {
        this.id = `facet-input-${this.getType()}-${FacetInput.index}`;
    }
}
FacetInput.index = 0;
if (false) {
    /** @type {?} */
    FacetInput.index;
    /**
     * @type {?}
     * @private
     */
    FacetInput.prototype.id;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.output;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.data;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.isEmpty;
    /** @type {?} */
    FacetInput.prototype.update;
    /** @type {?} */
    FacetInput.prototype.getId;
    /** @type {?} */
    FacetInput.prototype.getData;
    /** @type {?} */
    FacetInput.prototype.getConfig;
    /** @type {?} */
    FacetInput.prototype.getFacetId;
    /** @type {?} */
    FacetInput.prototype.getInputIndex;
    /** @type {?} */
    FacetInput.prototype.getSectionIndex;
    /** @type {?} */
    FacetInput.prototype.getContext;
    /** @type {?} */
    FacetInput.prototype.getTarget;
    /** @type {?} */
    FacetInput.prototype.getSearchIn;
    /** @type {?} */
    FacetInput.prototype.getType;
    /** @type {?} */
    FacetInput.prototype.getOutput;
    /** @type {?} */
    FacetInput.prototype.setIsEmpty;
    /** @type {?} */
    FacetInput.prototype.setData;
    /**
     * @abstract
     * @param {?} facetValue
     * @return {?}
     */
    FacetInput.prototype.setActive = function (facetValue) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    FacetInput.prototype.transform = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetInputCheckbox extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @param {?} index
         * @return {?}
         */
        ({ label, value }, index) => {
            // normalize value
            value = '' + value;
            return {
                type: 'checkbox',
                id: this.getId() + '-' + index,
                label: label,
                payload: {
                    facetId,
                    source: 'input-checkbox',
                    value
                },
                _meta: { facetId, value }
            };
        }));
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        const { isArray } = this.config.filterConfig;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetInputText extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        /** @type {?} */
        const payload = {
            facetId,
            source: 'input-text'
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: Object.assign({}, payload, { trigger: 'input' }),
            enterPayload: Object.assign({}, payload, { trigger: 'enter' }),
            iconPayload: Object.assign({}, payload, { trigger: 'icon' }),
            _meta: { facetId }
        };
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.value = facetValue || null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RESULTS_LIMIT = 1000;
class FacetInputLink extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        /** @type {?} */
        const results = [];
        /** @type {?} */
        let resultsCounter = 0;
        for (const itemData of this.data) {
            const { label, counter, hidden } = itemData;
            let { value, options } = itemData;
            if (hidden) {
                continue;
            }
            resultsCounter += 1;
            if (resultsCounter > RESULTS_LIMIT) {
                break;
            }
            // normalize value
            value = '' + value;
            options = options || {};
            /** @type {?} */
            const classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (this._isActive(this.facetValue, value)) {
                classes.push('is-active');
            }
            results.push({
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                    facetId,
                    source: 'input-link',
                    value
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value }
            });
        }
        /* const results: any[] = this.data.map(({ label, value, counter, hidden, options }) => {
              if (hidden) {
                return;
              }
        
              resultsCounter += 1;
              // normalize value
              value = '' + value;
              options = options || {};
        
              const classes = [];
              if (options.classes) { classes.push(options.classes); }
              if (this._isActive(this.facetValue, value)) { classes.push('is-active'); }
        
              return {
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                  facetId,
                  source: 'input-link',
                  value
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value }
              };
            });
             */
        // empty state control
        /** @type {?} */
        const itemEmpty = results.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.id === 'empty'))[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                const { label } = this.getConfig().emptyState;
                /** @type {?} */
                const emptyId = 'empty-link';
                results.push({
                    type: 'link',
                    id: emptyId,
                    text: label,
                    classes: 'empty-text-link',
                    _meta: { facetId: emptyId, value: null }
                });
            }
        }
        else if (itemEmpty) {
            itemEmpty.classes = 'empty-text-link is-hidden';
        }
        return results;
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            const isActive = this._isActive(facetValue, config._meta.value);
            /** @type {?} */
            let classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => className !== 'is-active'));
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        }));
    }
    /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    _isActive(facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1) ||
            (facetValue === value));
    }
    /**
     * @return {?}
     */
    clear() {
        this.facetValue = [];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetInputLink.prototype.facetValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetInputSelect extends FacetInput {
    /**
     * @protected
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data ? this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ value, label }) => ({
                // normalize value
                value: '' + value,
                label
            }))) : [],
            payload: {
                facetId,
                source: 'input-select',
            },
            _meta: { facetId }
        };
    }
    /**
     * @param {?} facetValue
     * @return {?}
     */
    setActive(facetValue) {
        this.output.options
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.value === facetValue))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => option.selected = true));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const INPUTS_MAP = {
    checkbox: FacetInputCheckbox,
    text: FacetInputText,
    link: FacetInputLink,
    select: FacetInputSelect
};
/** @type {?} */
const FILTERS_MAP = {
    '=': '_filterDataEquals',
    '>': '_filterDataGreaterThan',
    '<': '_filterDataLessThan',
    '>=': '_filterDataGreaterOrEquals',
    '<=': '_filterDataLessOrEquals',
    '<>': '_filterDataNotEqual',
    'LIKE': '_filterDataLike'
};
/**
 * @record
 */
function ISearchConfig() { }
if (false) {
    /** @type {?} */
    ISearchConfig.prototype.totalCount;
    /** @type {?} */
    ISearchConfig.prototype.facets;
    /** @type {?} */
    ISearchConfig.prototype.page;
    /** @type {?} */
    ISearchConfig.prototype.results;
    /** @type {?} */
    ISearchConfig.prototype.fields;
}
/**
 * @record
 */
function IFacet() { }
if (false) {
    /** @type {?} */
    IFacet.prototype.id;
    /** @type {?} */
    IFacet.prototype.type;
    /** @type {?} */
    IFacet.prototype.operator;
    /** @type {?|undefined} */
    IFacet.prototype.hasStaticData;
    /** @type {?|undefined} */
    IFacet.prototype.searchData;
    /** @type {?|undefined} */
    IFacet.prototype.data;
}
/**
 * @record
 */
function IFilter() { }
if (false) {
    /** @type {?} */
    IFilter.prototype.facetId;
    /** @type {?} */
    IFilter.prototype.value;
    /** @type {?} */
    IFilter.prototype.searchIn;
    /** @type {?|undefined} */
    IFilter.prototype.isArray;
    /** @type {?|undefined} */
    IFilter.prototype.context;
    /** @type {?|undefined} */
    IFilter.prototype.target;
}
class SearchModel {
    /**
     * @param {?} id
     * @param {?} config
     */
    constructor(id, config) {
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = (/**
         * @return {?}
         */
        () => this._id);
        this.getFilters = (/**
         * @return {?}
         */
        () => this._filters);
        this.getFacets = (/**
         * @return {?}
         */
        () => this._facets);
        this.getInputs = (/**
         * @return {?}
         */
        () => this._inputs);
        this.getConfig = (/**
         * @return {?}
         */
        () => this._config);
        this.getTotalCount = (/**
         * @return {?}
         */
        () => this._totalCount);
        this.getFields = (/**
         * @return {?}
         */
        () => this._config.fields);
        this.getResults$ = (/**
         * @return {?}
         */
        () => this._results$);
        this.setResults = (/**
         * @param {?} results
         * @return {?}
         */
        results => this._results$.next(results));
        this._id = id;
        this._config = config;
        this._setFilters();
        this._setFacets();
        this._setPage();
        this._setInputs();
        this._setInputsData();
        this._setTotalCount();
        // query params control
        if (SearchService.queryParams) {
            this.updateFiltersFromQueryParams(SearchService.queryParams);
            SearchService.queryParams = null;
        }
    }
    /**
     * @param {?} facetId
     * @param {?} value
     * @param {?=} remove
     * @return {?}
     */
    updateFilter(facetId, value, remove) {
        /** @type {?} */
        const selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item !== value));
            }
            else if (Array.isArray(filter.value) &&
                filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? value : null;
            }
        }));
    }
    /**
     * @return {?}
     */
    clear() {
        this.updateFiltersFromQueryParams({}, true);
        this._clearInputs();
    }
    /**
     * @param {?} queryParams
     * @param {?=} clearAll
     * @return {?}
     */
    updateFiltersFromQueryParams(queryParams, clearAll = false) {
        this._facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => {
            /** @type {?} */
            const selectedFilters = this.getFiltersByFacetId(id);
            /** @type {?} */
            const value = queryParams[id];
            /** @type {?} */
            const isInternal = this.getInputByFacetId(id).getContext() === 'internal';
            if (isInternal && !clearAll) {
                return;
            }
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            filter => {
                if (filter.isArray) {
                    filter.value = value ? value.split(',') : [];
                }
                else {
                    filter.value = value ? value : null;
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputsFromFilters() {
        this._filters.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value }) => {
            this.getInputByFacetId(facetId).setActive(value);
        }));
    }
    /**
     * @param {?} facets
     * @return {?}
     */
    updateFacets(facets) {
        facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, data }) => this.updateFacet(id, data)));
        this._setInputsData();
    }
    /**
     * @param {?} totalCount
     * @return {?}
     */
    updateTotalCount(totalCount) {
        this._totalCount = totalCount;
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    updateFacet(facetId, data) {
        /** @type {?} */
        const selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === facetId));
        if (!selectedFacets.length) {
            throw Error(`Facet with id '${facetId}' does not exists`);
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => (facet.data = data)));
    }
    /**
     * @return {?}
     */
    reset() {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => (filter.value = null)));
    }
    /**
     * @return {?}
     */
    getRequestParams() {
        return {
            facets: this._getRequestFacets(),
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            filter => filter.context !== 'internal'))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })))
        };
    }
    /**
     * @return {?}
     */
    getInternalFilters() {
        return this._filters
            .filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            return (filter.context === 'internal' &&
                ((Array.isArray(filter.value) && filter.value.length) ||
                    (!Array.isArray(filter.value) && filter.value)));
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ facetId, value, searchIn }) => ({ facetId, value, searchIn })));
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    filtersAsQueryParams(filters) {
        /** @type {?} */
        const queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => (queryParams[filter.facetId] = Array.isArray(filter.value)
            ? filter.value.join(',')
            : filter.value)));
        return queryParams;
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getFiltersByFacetId(facetId) {
        return this._filters.filter((/**
         * @param {?} filter
         * @return {?}
         */
        filter => filter.facetId === facetId));
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    getInputByFacetId(facetId) {
        return this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId() === facetId))[0];
    }
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    setInputData(facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    }
    /**
     * @param {?} target
     * @return {?}
     */
    filterTarget(target) {
        /** @type {?} */
        const inputs = this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getTarget() === target));
        /** @type {?} */
        const targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        const facet = this._facets.filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.id === target))[0];
        /** @type {?} */
        const facetData = facet.data;
        /** @type {?} */
        const searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => {
            /** @type {?} */
            const filter = this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            const searchIn = input.getSearchIn();
            /** @type {?} */
            const value = filter.value;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => this._filterData(searchIns, item)));
        // update
        targetInput.setData(facetData);
        if (targetInput.getConfig().emptyState) {
            /** @type {?} */
            const isEmpty = !facetData.filter((/**
             * @param {?} data
             * @return {?}
             */
            data => !data.hidden)).length;
            targetInput.setIsEmpty(isEmpty);
        }
        targetInput.update();
    }
    /**
     * @param {?} orderBy
     * @return {?}
     */
    setSearchConfigOrderBy(orderBy) {
        this._config.results.order.key = orderBy;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setSearchConfigDirection(direction) {
        this._config.results.order.direction = direction;
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setPageConfigOffset(offset) {
        this._config.page.offset = offset;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setPageConfigLimit(limit) {
        this._config.page.limit = limit;
    }
    /**
     * @private
     * @return {?}
     */
    _clearInputs() {
        this._inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => {
            input.clear();
        }));
    }
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    _filterData(searchIns, item) {
        // reset
        item.hidden = false;
        searchIns.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([searchIn, value]) => {
            searchIn.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key, operator }) => {
                if (item.hidden) {
                    return;
                }
                /** @type {?} */
                let refValue = get(item, key, null);
                if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                    /** @type {?} */
                    const searchDataKey = key.replace('searchData.', '');
                    item.searchData.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ key: dataKey, value: dataValue }) => {
                        if (dataKey === searchDataKey) {
                            refValue = dataValue;
                        }
                    }));
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
            }));
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataEquals(value, refValue) {
        if (Array.isArray(refValue)) {
            if (Array.isArray(value)) {
                /** @type {?} */
                let inArray = value.length === 0 ? true : false;
                refValue.forEach((/**
                 * @param {?} rv
                 * @return {?}
                 */
                rv => {
                    if (value.indexOf(rv) !== -1) {
                        inArray = true;
                    }
                }));
                return !(inArray);
            }
            else {
                return !(value && refValue.indexOf(value) !== -1);
            }
        }
        else {
            if (Array.isArray(value)) {
                return !(!value.length || value.indexOf(refValue) !== -1);
            }
            else {
                return !(value && value === refValue);
            }
        }
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataGreaterThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value > refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLessThan(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value < refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataGreaterOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value >= refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLessOrEquals(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value <= refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataNotEqual(value, refValue) {
        if (!Array.isArray(value)) {
            return !(value && value !== refValue);
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} refValue
     * @return {?}
     */
    _filterDataLike(value, refValue) {
        if (value &&
            typeof value === 'string' &&
            typeof refValue === 'string') {
            /** @type {?} */
            const haystack = refValue.toLowerCase();
            /** @type {?} */
            const needle = value.toLocaleLowerCase();
            return !(haystack.indexOf(needle) !== -1);
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    _setFilters() {
        this._config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            input => this._filters.push(Object.assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setFacets() {
        this._facets = this._config.facets;
    }
    /**
     * @private
     * @return {?}
     */
    _setPage() {
        this._page = this._config.page;
    }
    /**
     * @private
     * @return {?}
     */
    _setTotalCount() {
        this._totalCount = this._config.totalCount;
    }
    /**
     * @private
     * @return {?}
     */
    _setInputs() {
        this._config.fields.forEach((/**
         * @param {?} sectionConfig
         * @param {?} sectionIndex
         * @return {?}
         */
        (sectionConfig, sectionIndex) => {
            sectionConfig.inputs.forEach((/**
             * @param {?} inputConfig
             * @param {?} inputIndex
             * @return {?}
             */
            (inputConfig, inputIndex) => {
                /** @type {?} */
                const inputModel = INPUTS_MAP[inputConfig.type];
                if (!inputModel) {
                    throw Error(`Input type ${inputConfig.type} not supported`);
                }
                this._inputs.push(new inputModel(Object.assign({}, inputConfig, { inputIndex, sectionIndex })));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputsData() {
        this._facets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => this.setInputData(facet.id, facet.data)));
    }
    /**
     * @private
     * @return {?}
     */
    _getRequestFacets() {
        /** @type {?} */
        const results = [];
        this._facets.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            /** @type {?} */
            const facetConfig = Object.assign({}, f);
            if (!f.hasStaticData) {
                delete facetConfig.data;
            }
            delete facetConfig.hasStaticData;
            // searchData control
            if (Array.isArray(facetConfig.data)) {
                facetConfig.data
                    .filter((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                dataItem => typeof dataItem.searchData !== 'undefined'))
                    .forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                dataItem => {
                    delete dataItem.searchData;
                }));
            }
            results.push(facetConfig);
        }));
        return results;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._id;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._filters;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._facets;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._inputs;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._page;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._totalCount;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._config;
    /**
     * @type {?}
     * @private
     */
    SearchModel.prototype._results$;
    /** @type {?} */
    SearchModel.prototype.getId;
    /** @type {?} */
    SearchModel.prototype.getFilters;
    /** @type {?} */
    SearchModel.prototype.getFacets;
    /** @type {?} */
    SearchModel.prototype.getInputs;
    /** @type {?} */
    SearchModel.prototype.getConfig;
    /** @type {?} */
    SearchModel.prototype.getTotalCount;
    /** @type {?} */
    SearchModel.prototype.getFields;
    /** @type {?} */
    SearchModel.prototype.getResults$;
    /** @type {?} */
    SearchModel.prototype.setResults;
}
class SearchService {
    constructor() {
        this._models = {};
    }
    /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    add(id, config) {
        if (this._models[id]) {
            throw Error(`Search model '${id}' already exists!`);
        }
        this._models[id] = new SearchModel(id, config);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        if (this._models[id]) {
            delete this._models[id];
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    model(id) {
        return this._models[id] || null;
    }
}
SearchService.queryParams = null;
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SearchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchService.queryParams;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._models;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
                    this.mainState = payload.mainState;
                    this.route = payload.route;
                    this._listenRouterChanges();
                    this._listenMainStateChanges();
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
    /**
     * @private
     * @return {?}
     */
    _listenRouterChanges() {
        this.route.queryParams.pipe(filter((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            if (Object.keys(params).length)
                return true;
            return false;
        }))).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.emitGlobal('queryparams', params);
            // to use in searchs
            SearchService.queryParams = params;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenMainStateChanges() {
        this.mainState.addCustom('currentNav', new Subject());
        this.mainState.getCustom$('currentNav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.emitOuter('currentnavchange', val);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.mainState;
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
        return data.items;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onCurrentNavChange(payload) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item._meta.id === payload) {
                item.classes = 'is-current';
            }
            else {
                item.classes = '';
            }
        }));
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
class FacetsDS extends DataSource {
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    transform({ fields }) {
        const { searchModel } = this.options;
        this.searchModel = searchModel;
        return fields;
    }
}
if (false) {
    /** @type {?} */
    FacetsDS.prototype.searchModel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HEADER_ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
const HEADER_ICON_CLOSE = 'n7-icon-angle-right';
class FacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getRequestParams = (/**
         * @return {?}
         */
        () => this.searchModel.getRequestParams());
        this.filtersAsQueryParams = (/**
         * @param {?} filters
         * @return {?}
         */
        (filters) => this.searchModel.filtersAsQueryParams(filters));
        this.updateFiltersFromQueryParams = (/**
         * @param {?} queryParams
         * @return {?}
         */
        (queryParams) => this.searchModel.updateFiltersFromQueryParams(queryParams));
        this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        (facetId) => this.searchModel.getInputByFacetId(facetId));
        this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        (target) => this.searchModel.filterTarget(target));
        this.updateInputsFromFilters = (/**
         * @return {?}
         */
        () => this.searchModel.updateInputsFromFilters());
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
        }
        /** @type {?} */
        const id = this.searchModel.getId();
        /** @type {?} */
        const fields = this.searchModel.getFields();
        /** @type {?} */
        let groups = [];
        fields.forEach((/**
         * @param {?} fieldConfig
         * @param {?} fieldIndex
         * @return {?}
         */
        (fieldConfig, fieldIndex) => {
            /** @type {?} */
            const groupId = `group-${id}-${fieldIndex}`;
            // header config
            /** @type {?} */
            const header = this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            /** @type {?} */
            let sections = [];
            this.searchModel.getInputs()
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            input => input.getSectionIndex() === fieldIndex))
                .map((/**
             * @param {?} input
             * @return {?}
             */
            input => {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput()
                };
            }))
                .forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, output, facetId }) => {
                sections.push({
                    classes: this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId
                    }
                });
            }));
            groups.push({
                header,
                facet: { sections },
                classes: `n7-facets-wrapper__${groupId}`,
                isOpen: true,
                _meta: {
                    groupId
                }
            });
        }));
        return {
            groups,
            classes: `n7-facets-wrapper__${this.searchModel.getId()}`
        };
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    toggleGroup({ eventPayload }) {
        this.output.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        }));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onFacetChange({ eventPayload }) {
        const { facetId, source, trigger } = eventPayload.inputPayload;
        /** @type {?} */
        const filter = this.searchModel.getFiltersByFacetId(facetId)[0] || {};
        /** @type {?} */
        const filterValue = filter['value'];
        /** @type {?} */
        let remove = false;
        /** @type {?} */
        let value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = '' + value;
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
    /**
     * @param {?} target
     * @return {?}
     */
    updateFilteredTarget(target) {
        /** @type {?} */
        const input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        group => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.sections))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        sections => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            section => {
                if (section._meta.facetId === target) {
                    /** @type {?} */
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateInputLinks() {
        /** @type {?} */
        const linksFacetIds = this.searchModel.getInputs()
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getType() === 'link'))
            .map((/**
         * @param {?} input
         * @return {?}
         */
        input => input.getFacetId()));
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        group => group.facet))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.sections))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        sections => {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            section => {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    /** @type {?} */
                    const input = this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    /** @type {?} */
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    _getSectionClasses(type) {
        /** @type {?} */
        const classesMap = {
            'text': 'text',
            'checkbox': 'checkboxes',
            'link': 'links',
            'select': 'select'
        };
        return `n7-facet__section-input-${classesMap[type]}`;
    }
    /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    _headerConfig(header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: `${groupId}-header`,
                groupId: groupId
            },
            _meta: {
                id: `${groupId}-header`
            }
        } : null;
    }
}
if (false) {
    /** @type {?} */
    FacetsWrapperDS.prototype.searchModel;
    /** @type {?} */
    FacetsWrapperDS.prototype.getRequestParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.filtersAsQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.updateFiltersFromQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.getInputByFacetId;
    /** @type {?} */
    FacetsWrapperDS.prototype.filterTarget;
    /** @type {?} */
    FacetsWrapperDS.prototype.updateInputsFromFilters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data) {
            return;
        }
        return data.items;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS = /*#__PURE__*/Object.freeze({
    HeaderDS: HeaderDS,
    SubnavDS: SubnavDS,
    BreadcrumbsDS: BreadcrumbsDS,
    FacetsDS: FacetsDS,
    FacetsWrapperDS: FacetsWrapperDS,
    FooterDS: FooterDS
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
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload]
                    });
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
                case 'main-layout.currentnavchange':
                    this.dataSource.onCurrentNavChange(payload);
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
class FacetsEH extends EventHandler {
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
                // TODO
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
class FacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this._facetsChanged = false;
        this.internalFacetsChange$ = new Subject();
        this.externalFacetsChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        // listen to inner (widget) events
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facet':
                    // empty payload control
                    if (!payload.eventPayload.inputPayload) {
                        return;
                    }
                    const { facetId } = payload.eventPayload.inputPayload;
                    /** @type {?} */
                    const input = this.dataSource.getInputByFacetId(facetId);
                    /** @type {?} */
                    const context = input.getContext();
                    this._facetsChanged = true;
                    // update
                    this.dataSource.onFacetChange(payload);
                    // internal
                    if (context === 'internal') {
                        this.internalFacetsChange$.next(input.getTarget());
                        // external
                    }
                    else {
                        this.externalFacetsChange$.next();
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    this.dataSource.toggleGroup(payload);
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
            if (type.indexOf('queryparamschange') !== -1 && this.dataSource.searchModel) {
                this.dataSource.updateFiltersFromQueryParams(payload);
                this.dataSource.updateInputsFromFilters();
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.searchresponse':
                    if (this.dataSource.searchModel && this.dataSource.searchModel.getId() === payload) {
                        this.dataSource.updateInputLinks();
                        /** @type {?} */
                        const internalFilters = this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach((/**
                         * @param {?} filter
                         * @return {?}
                         */
                        filter => {
                            /** @type {?} */
                            const input = this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            /** @type {?} */
                            const target = input.getTarget();
                            this.dataSource.filterTarget(target);
                            this.dataSource.updateFilteredTarget(target);
                        }));
                    }
                    break;
                default:
                    break;
            }
        }));
        // internal facets change
        this.internalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} target
         * @return {?}
         */
        target => {
            this.dataSource.filterTarget(target);
            this.dataSource.updateFilteredTarget(target);
        }));
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const requestParams = this.dataSource.getRequestParams();
            /** @type {?} */
            const queryParams = this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => queryParams[key] = queryParams[key] || null));
            // signal
            this.emitOuter('facetschange');
            // reset page
            queryParams.page = 1;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams
            });
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype._facetsChanged;
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype.internalFacetsChange$;
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype.externalFacetsChange$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterEH extends EventHandler {
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
                default:
                    console.warn('unhandled inner event of type', type);
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
    BreadcrumbsEH: BreadcrumbsEH,
    FacetsEH: FacetsEH,
    FacetsWrapperEH: FacetsWrapperEH,
    FooterEH: FooterEH
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
        }, {
            id: 'footer'
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
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService) {
        super(layoutsConfiguration.get('MainLayoutConfig') || MainLayoutConfig);
        this.router = router;
        this.route = route;
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
            route: this.route,
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
                template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer \n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>"
            }] }
];
/** @nocollapse */
MainLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
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
    MainLayoutComponent.prototype.route;
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
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || Page404LayoutConfig);
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
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
                template: "<div class=\"n7-page404-layout\">\n    404 - Resource not found\n</div>"
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
class FacetsWrapperComponent {
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    headerEmit(eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facetheader', { eventType, eventPayload });
    }
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    facetEmit(eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facet', { eventType, eventPayload });
    }
}
FacetsWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facets-wrapper',
                template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
            }] }
];
FacetsWrapperComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FacetsWrapperComponent.prototype.data;
    /** @type {?} */
    FacetsWrapperComponent.prototype.emit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    FacetsWrapperComponent,
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
class AwEntitaLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.showFields = false;
        this.myResponse = {}; // backend response object
        // selected nav item
        this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // linked objects page size
        // BUBBLE CHART DATA ↓
        this.bubblesSize = 10; // related entities (bubbles) page size
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        (id, data, options) => {
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        });
        /*
            Updates selected tab on tab change
          */
        this.handlePageNavigation = (/**
         * @return {?}
         */
        () => {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            this.location.go([
                this.configuration.get('paths').entitaBasePath,
                this.currentId + '/',
                this.currentSlug,
                '/oggetti-collegati/',
                this.currentPage
            ].join(''));
        });
        this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            this.selectedTab = tab;
            this.updateWidgets(this.myResponse);
            /** @type {?} */
            const page = tab == 'oggetti-collegati' ? "/1" : "";
            if (tab == 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    size: this.pageSize,
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            else if (tab == "overview") {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita'
                });
                this.one('aw-linked-objects').update({ items: this.myResponse.relatedItems });
            }
            if (tab == "overview" || tab == "entita-collegate") {
                setTimeout((/**
                 * @return {?}
                 */
                () => { this.updateBubbes(this.myResponse.relatedEntities); }), 800);
            }
            this.location.go([
                this.configuration.get('paths').entitaBasePath,
                this.currentId + '/',
                this.currentSlug + '/',
                tab,
                page
            ].join(''));
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, route, location, options, titleService, communication }) {
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = "";
        this.currentPage = +this.route.snapshot.params.page;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['entitiesQuerySize'] : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
            smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna Web > Entità');
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
            params: { entityId: id, entitiesListSize: this.bubblesSize }
        });
    }
    /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    updateWidgets(data) {
        /** @type {?} */
        const selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data, selected });
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get("labels")
        });
    }
    /*
        Helper function to update the graph
      */
    /**
     * @param {?} data
     * @return {?}
     */
    updateBubbes(data) {
        this.one('aw-bubble-chart').update(data);
    }
    /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} slug
     * @param {?} tab
     * @return {?}
     */
    loadItem(id, slug, tab) {
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => console.error(error)),
                params: { entityId: id, entitiesListSize: this.bubblesSize }
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
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        if ((res.fields || []).filter((/**
         * @param {?} field
         * @return {?}
         */
        field => ((this.configuration.get('entita-layout') || {}).overview || {}).campi.includes(field.key))).length > 0) {
            // look at the response array, filtered by configuration values.
            // if the filtered response has some values, show the fields section.
            this.showFields = true;
        }
        else {
            this.showFields = false;
        }
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity.replace(/ /g, '-')
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get("labels"), config: this.configuration });
        this.one('aw-entita-metadata-viewer').update(res.fields);
        if (this.selectedTab == 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita'
            });
        }
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        // update head title
        this.mainState.update('headTitle', `Arianna Web > Entità > ${this.myResponse.label}`);
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
    AwEntitaLayoutDS.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.titleService;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.route;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.showFields;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.myResponse;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.selectedTab;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.navHeader;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentSlug;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesEnabled;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.updateComponent;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handlePageNavigation;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var helpers = {
    /**
     * @param {?} key
     * @param {?=} label
     * @return {?}
     */
    prettifySnakeCase(key, label) {
        if (label) {
            return label;
        }
        return (key || '').split('_').map((/**
         * @param {?} word
         * @param {?} index
         * @return {?}
         */
        (word, index) => index === 0 ? this.ucFirst(word) : word)).join(' ');
    },
    /**
     * @param {?} str
     * @return {?}
     */
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * @param {?} str
     * @return {?}
     */
    slugify(str) {
        if (!str) {
            return '';
        }
        return slug(str, { lower: true });
    }
};

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
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-entita-nav.click':
                    if (payload) {
                        this.dataSource.selectedTab = payload;
                        this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    console.log(payload);
                    this.dataSource.currentPage = +payload.split('-')[1];
                    this.dataSource.handlePageNavigation();
                    break;
                case 'aw-linked-objects.goto':
                    console.log(payload);
                    this.dataSource.currentPage = +payload.replace('goto-', '');
                    this.dataSource.handlePageNavigation();
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.dataSource.pageSize = payload;
                    this.dataSource.currentPage = 1; // reset page
                    // reset page
                    /** @type {?} */
                    let options = {
                        context: this.dataSource.selectedTab,
                        config: this.dataSource.configuration,
                        page: this.dataSource.currentPage,
                        pagination: true,
                        size: this.dataSource.pageSize,
                    };
                    this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    const { id, label } = payload;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [
                            this.configuration.get('paths').entitaBasePath,
                            id,
                            helpers.slugify(label),
                            'overview'
                        ]
                    });
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (this.dataSource.selectedTab == "overview" || this.dataSource.selectedTab == "entita-collegate") {
                        this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                    }
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id, helpers.slugify(payload.title)]
                    });
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    listenRoute(selectedItem = "", forceReload = false) {
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // look for id
            if (params.get('id')) {
                if (this.dataSource.currentId == params.get('id') && !forceReload)
                    return;
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        // remove the entity of this page
                        /** @type {?} */
                        const entities = res.relatedEntities.filter((/**
                         * @param {?} entity
                         * @return {?}
                         */
                        entity => entity.id !== params.get('id')));
                        this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            this.emitOuter('selectItem', selectedItem);
                        }
                        this.emitOuter('filterbubbleresponse', entities);
                    }
                }));
            }
            else {
                this.dataSource.loadItem();
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
// used for cherry-picking object keys from app-config.json
class AwLinkedObjectsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.loadingData = false;
        this.checkForMore = (/**
         * @param {?=} force
         * @return {?}
         */
        (force) => {
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
            return;
        });
        this.handleIncomingData = (/**
         * @param {?} incomingData
         * @return {?}
         */
        incomingData => {
            /*
              Called by infinite scroller, adds the incoming
              data to the linked objects component.
            */
            this.currentPage += 1;
            /** @type {?} */
            const newData = this.unpackData(incomingData.itemsPagination);
            this.loadedData.result = this.loadedData.result.concat(newData.result);
            this.checkForMore();
            this.loadedData.isLoading = false;
        });
        this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        (page, totalPages, size) => {
            /** @type {?} */
            const sizeOptions = [10, 25, 50];
            this.loadedData.pagination = {
                first: { payload: `goto-${1}`, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page === totalPages ? 'is-disabled' : '' },
                links: this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    o => {
                        return {
                            text: o,
                            selected: o === size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        (totalPages, currentPage) => {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            const result = [];
            /** @type {?} */
            let limit = this.paths.paginationLimit - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                /** @type {?} */
                let lastPage;
                /** @type {?} */
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
                for (let i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: 'page-' + String(i),
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
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
        this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            /** @type {?} */
            const config = this.options.config;
            /** @type {?} */
            const // app-config.json
            paths = config.get('item-preview');
            /** @type {?} */
            const // item preview dynamic paths
            totalCount = data.totalCount;
            /** @type {?} */
            const // total amount of items available on backend
            totalPages = this.totalPages;
            /** @type {?} */
            const // calculated number of pages
            page = this.currentPage;
            /** @type {?} */
            const // current page (if using pagination)
            context = this.context;
            /** @type {?} */
            const // parent layout name
            size = this.pageSize;
            /** @type {?} */
            const // items per page (if using pagination)
            labels = config.get('labels');
            const { dynamicPagination } = this.options;
            /** @type {?} */
            const keys = config ? config.get('config-keys') : {};
            /** @type {?} */
            let lengthLimit;
            /** @type {?} */
            let resultsLimit;
            /** @type {?} */
            let d = data.items ? data.items : data.relatedItems;
            if (config) {
                // dynamic search for max-item-length
                if (config.get(context + '-layout')) {
                    lengthLimit = config.get(context + '-layout')['max-item-length'];
                    resultsLimit = config.get(context + '-layout')['results-limit'];
                }
            }
            // resize data
            if (!dynamicPagination && size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            /** @type {?} */
            const result = [];
            /** @type {?} */
            const enabledKeys = paths.metadata.info.selection.map((/**
             * @param {?} info
             * @return {?}
             */
            info => info.key));
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                /** @type {?} */
                const infoData = get(el, paths.metadata.info.data, el.item.fields);
                /** @type {?} */
                const infoDataItems = infoData ? infoData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => enabledKeys.indexOf(data.key) !== -1)) : [];
                /** @type {?} */
                const toeData = get(el, paths.metadata.toe.data, el.relatedTypesOfEntity);
                /** @type {?} */
                const breadcrumbs = get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs);
                if (['entita', 'search'].includes(context)) {
                    if (el.item.typeOfEntity && el.item.typeOfEntity != "") {
                        infoDataItems.push({ "key": "Tipo di entità", "value": keys[el.item.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += el.item.typeOfEntity ? " is-" + el.item.typeOfEntity.replace(/ /g, '-') : " is-oggetto-culturale";
                /** @type {?} */
                const itemTitle = +paths.title.maxLength && get(el, paths.title, el.item.label).length > +paths.title.maxLength
                    ? get(el, paths.title, el.item.label).slice(0, +paths.title.maxLength) + '…'
                    : get(el, paths.title, el.item.label);
                /** @type {?} */
                const item = {
                    image: get(el, paths.image, el.image),
                    title: itemTitle,
                    text: !paths.text ? null : // make text block (in config) optional
                        +paths.text.maxLength && get(el, paths.text.data, el.item.text).length > +paths.text.maxLength ?
                            get(el, paths.text.data, el.item.text).slice(0, +paths.text.maxLength) + '…' :
                            get(el, paths.text.data, el.item.text),
                    payload: { id: get(el, paths.payload, el.item.id), type: el.item.typeOfEntity, title: itemTitle },
                    classes: classes,
                    metadata: infoDataItems.length || toeData ? [] : null,
                    breadcrumbs: breadcrumbs
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-artist',
                        items: infoDataItems.map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => ({
                            label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                            value: data.value
                        })))
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-linked',
                        items: toeData.map((/**
                         * @param {?} toe
                         * @return {?}
                         */
                        toe => {
                            return {
                                // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                value: get(toe, paths.metadata.toe.value, toe.count),
                                // icon: 'n7-icon-bell' // TODO: link icon to config key
                                icon: keys[get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')]
                                    ? keys[get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')].icon
                                    : '',
                                classes: 'color-' + get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')
                            };
                        }))
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        crumb => {
                            return {
                                label: get(crumb, paths.metadata.breadcrumbs.label, crumb.label),
                                payload: get(crumb, paths.metadata.breadcrumbs.payload, crumb.link),
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (context === 'home') {
                /** @type {?} */
                const actions = [
                    {
                        label: 'Mostra Tutti (' + totalCount + ')'
                    },
                    lengthLimit ?
                        {
                            label: 'Mostra Altri (' + resultsLimit + ')',
                            disabled: false,
                        } : null,
                ];
                return {
                    result,
                    actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback']
                };
            }
            return { previews: result };
        });
    }
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
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
        if (this.options.pagination) {
            this.addPagination(this.currentPage, this.totalPages, this.pageSize);
        }
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    }
}
if (false) {
    /** @type {?} */
    AwLinkedObjectsDS.prototype.currentPage;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalPages;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalObjects;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.pageSize;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.context;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.loadedData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.loadingData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.paths;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.checkForMore;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.handleIncomingData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.addPagination;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.makePagination;
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwAutocompleteWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.stringTrim = (/**
         * @param {?} string
         * @param {?} limit
         * @return {?}
         */
        (string, limit) => {
            /*
              Slices the string and adds trailing ellipsis
              TODO: Do not cut the string in the middle of an HTML tag!
            */
            if (string.length > limit) {
                return string.slice(0, limit) + '…';
            }
            else
                return string;
        });
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { key, response } = data;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        /** @type {?} */
        const suggestion = [];
        /** @type {?} */
        const config = this.options.config;
        /** @type {?} */
        const maxLength = (config.get('home-layout')['max-item-length'] || 20);
        /** @type {?} */
        const fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        el => typeof el.entity == 'object'));
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            if (el.entity.id == 'fallback') { // build and return fallback data
                suggestion.push({
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion };
            }
            /** @type {?} */
            const text = this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text,
                payload: el.entity.id
            });
        }));
        return { suggestion };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwAutocompleteWrapperDS.prototype.stringTrim;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.chartData = []; // data rendered into the graph
        // data rendered into the graph
        this.draw = null; // exposed component draw function to update the view
        // exposed component draw function to update the view
        this.selected = []; // list of selected bubbles
        // list of selected bubbles
        this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        // list of active filters to show only some TypeOfEntity(s)
        this.closedEyes = [];
        this.tippyList = []; // list of tippy instances
        this.updateChart = (/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            if (res === null) {
                res = this.chartData;
            }
            else {
                this.chartData = res;
            }
            if (this.filters.length > 0) { // apply filters to the response
                res = this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            if (!this.draw) {
                this.update(this.smartSlice(res)); // component self-update
            }
            else {
                this.output.selected = this.selected;
                this.output.data = this.smartSlice(res);
                this.output.smallView.data = this.smartSlice(res, this.options.smallChartSize);
                this.draw();
            }
        });
        this.smartSlice = (/**
         * @param {?} d
         * @param {?=} length
         * @return {?}
         */
        (d, length) => {
            /** @type {?} */
            const l = length ? length : this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            else {
                return d;
            }
        });
        this.handleBubbleClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /*
                  Toggles the selection of the clicked bubble.
                */
            /** @type {?} */
            const id = payload;
            if (this.selected.includes(id)) {
                this.selected.splice(this.selected.indexOf(id), 1); // remove selection
            }
            else {
                this.selected.push(id); // add selection
            }
        });
        this.tippyMaker = (/**
         * @param {?} bubbles
         * @return {?}
         */
        bubbles => {
            // flush existing tooltips
            this.tippyList.forEach((/**
             * @param {?} t
             * @return {?}
             */
            t => { if (t) {
                t.destroy();
            } }));
            this.tippyList = [];
            /** @type {?} */
            const buildTooltip = (/**
             * @param {?} bubble
             * @return {?}
             */
            bubble => {
                /** @type {?} */
                let element = (/** @type {?} */ (document.getElementsByClassName('bubble-chart__tippy-template')[0].cloneNode(true)));
                /** @type {?} */
                let gotoButton = element.getElementsByClassName('aw-bubble-popup-menu__text')[0];
                gotoButton.innerHTML =
                    `È collegato a ${bubble.count} entità`;
                element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                    `${bubble.entity.label}`;
                /** @type {?} */
                let selectButton = element.getElementsByClassName('aw-bubble-popup-menu__link')[1];
                if (this.options.simple) {
                    if (selectButton)
                        selectButton.remove();
                }
                else {
                    /** @type {?} */
                    let toggleBubbleText = this.selected.includes(bubble.entity.id) ? `Deseleziona` : `Seleziona`;
                    selectButton.innerHTML = toggleBubbleText;
                }
                return element.innerHTML;
            });
            /** @type {?} */
            const focusBubble = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, label }) => {
                this.focusedBubble = id;
                this.focusedBubbleLabel = label;
            });
            if (this.filters.length > 0) { // apply filters to the data before adding tooltips
                bubbles = bubbles.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            // make new tooltips
            bubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                /** @type {?} */
                let group = document.getElementById(`g_${b.entity.id}`) // select 
                ;
                if (group) {
                    this.tippyList.push(// add this tippy to the array of instances
                    tippy(group, {
                        content: buildTooltip(b),
                        interactive: true,
                        appendTo: document.body,
                        // suppress interactive warning
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: [150, 30],
                        updateDuration: 400,
                        /**
                         * @return {?}
                         */
                        onMount() {
                            focusBubble(b.entity);
                        }
                    }));
                }
            }));
            // createSingleton(this.tippyList, {
            //   interactive: true,
            //   appendTo: document.body, // suppress interactive warning
            //   arrow: true,
            //   flip: false,
            //   theme: 'light-border no-padding',
            //   placement: 'top',
            //   delay: [150, 30],
            //   updateDuration: 400,
            // onTrigger(ref) {
            //   console.log({ref})
            //   console.log('fired')
            // }
            // })
        });
    }
    // id of the focused bubble
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { config, smallChartSize } = this.options;
        const { fontRendering, transition, shuffle } = config.get('bubble-chart');
        /** @type {?} */
        const domain = [];
        /** @type {?} */
        const range = [];
        /** @type {?} */
        const colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        }));
        /** @type {?} */
        const commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            draw => this.draw = draw),
            colorMatch: { domain, range },
            selected: this.selected,
            sizeRange: [.5, 500],
            fontRendering,
            height: 500,
            width: 500,
            transition,
            shuffle,
        }
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        ;
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        return Object.assign({}, commonParams, { data: this.smartSlice(data), smallView: Object.assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
    }
}
if (false) {
    /** @type {?} */
    AwBubbleChartDS.prototype.chartData;
    /** @type {?} */
    AwBubbleChartDS.prototype.draw;
    /** @type {?} */
    AwBubbleChartDS.prototype.selected;
    /** @type {?} */
    AwBubbleChartDS.prototype.filters;
    /** @type {?} */
    AwBubbleChartDS.prototype.closedEyes;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyList;
    /** @type {?} */
    AwBubbleChartDS.prototype.focusedBubble;
    /** @type {?} */
    AwBubbleChartDS.prototype.focusedBubbleLabel;
    /** @type {?} */
    AwBubbleChartDS.prototype.updateChart;
    /** @type {?} */
    AwBubbleChartDS.prototype.smartSlice;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHeroDS extends DataSource {
    constructor() {
        super(...arguments);
        this.currentInputValue = '';
    }
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
                payload: 'cerca'
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
    }
}
if (false) {
    /** @type {?} */
    AwHeroDS.prototype.currentInputValue;
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
class AwHomeFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.autoComplete = {}; // autocomplete data for each facet
        // autocomplete data for each facet
        this.lockedFacets = {}; // locked means that the eye cannot be closed
        // locked means that the eye cannot be closed
        this.lastData = {}; // store the last response so the component can be rendered again with the same data
        // store the last response so the component can be rendered again with the same data
        this.closedEyes = []; // list of closed eyes
        // list of closed eyes
        this.openTippy = ''; // tipe of entity of the currently open tippy
        this.tippyMaker = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /*
              Builds or updates Tippy for the input in use (id)
            */
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[id]) {
                this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                const ac = this.autoComplete[id];
                /** @type {?} */
                const getContent = (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac.tippy) {
                    /** @type {?} */
                    const target = document.getElementsByClassName(id)[1];
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
            /** @type {?} */
            const ac = this.autoComplete[id];
            if (ac.tippy) {
                ac.tippy.show();
            }
        });
        this.tippyClose = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            id = id.replace(/ /g, '-');
            if (this.autoComplete[id]) {
                /** @type {?} */
                const ac = this.autoComplete[id];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        });
    }
    // tipe of entity of the currently open tippy
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.lastData = data;
        /** @type {?} */
        const headers = [];
        /** @type {?} */
        const inputs = [];
        /** @type {?} */
        const facetData = data;
        /** @type {?} */
        const lockedFacets = this.lockedFacets // locked means that the eye cannot be closed
        ;
        // locked means that the eye cannot be closed
        /** @type {?} */
        const closedEyes = this.closedEyes // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        ;
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            if (this.autoComplete[id] && this.autoComplete[id].tippy) {
                this.autoComplete[id].tippy.destroy(); // destroy
            }
        }));
        this.autoComplete = {}; // reset data
        facetData.forEach((/**
         * @param {?} facet
         * @param {?} j
         * @return {?}
         */
        (facet, j) => {
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
             The second case is managed by pushing a "LOCK_LAST" string to the lockedFacets array of the last
             enabled facet.
            */
            Object.keys(lockedFacets).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                /** @type {?} */
                let index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            }));
            if (closedEyes) {
                if (closedEyes.length == facetData.length - 1) {
                    /** @type {?} */
                    let lastFacet = facetData.find((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => !closedEyes.includes(f.type.replace(/ /g, '-'))));
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
            /** @type {?} */
            const headerClasses = [];
            /** @type {?} */
            const iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet.configKey) {
                headerClasses.push(`color-${facet.configKey}`);
                iconClasses.push(`color-${facet.configKey}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash',
                classes: headerClasses.join(' ') +
                    (facet.locked
                        ? ' is-blocked'
                        : ' not-blocked'),
                payload: facet.locked === true ? null : facet.type.replace(/ /g, '-')
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
                                inputPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                iconPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                enterPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                classes: String(facet.type.replace(' ', '-')) + '-search'
                            }
                        ]
                    }
                ]
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        const widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        (h, i) => {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperDS.prototype.autoComplete;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.lockedFacets;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.lastData;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.closedEyes;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.openTippy;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyClose;
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
        const { results, totalCount } = data;
        const { keys, config } = this.options;
        /** @type {?} */
        const labels = this.options.labels || {};
        /** @type {?} */
        const itemIds = [];
        /** @type {?} */
        const groups = {};
        results.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item, entity }) => {
            /** @type {?} */
            const groupId = entity ? entity.typeOfEntity.replace(' ', '-') : item.document_type;
            /** @type {?} */
            const groupConfig = keys[groupId];
            /** @type {?} */
            const mainMetadata = groupConfig['main-metadata'];
            /** @type {?} */
            const currentItem = item || entity;
            if (!groups[groupId]) {
                const { label, icon } = groupConfig;
                groups[groupId] = {
                    title: label,
                    icon,
                    classes: `color-${groupId}`,
                    items: [],
                    type: groupId
                };
            }
            if (itemIds.indexOf(currentItem.id) === -1) {
                /** @type {?} */
                const metadata = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ key, value }) => {
                        if (mainMetadata && key === mainMetadata) {
                            metadata.push({ key: helpers.prettifySnakeCase(key, labels[key]), value });
                        }
                    }));
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata,
                    payload: {
                        source: 'item',
                        id: currentItem.id,
                        type: (groups[groupId] || {}).type,
                        title: currentItem.label
                    }
                });
            }
        }));
        return {
            results: Object.keys(groups).map((/**
             * @param {?} key
             * @return {?}
             */
            key => ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes
                },
                items: groups[key].items
            }))),
            actions: {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: ((config.get('home-layout') || {})["top-hero"] || {}).fallback
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
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                payload: 'campi',
                classes: selected == 'campi' ? 'is-selected' : ''
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI-COLLEGATI',
                payload: 'oggetti-collegati',
                classes: selected == 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.relatedEntities && this.options['bubblesEnabled']) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                payload: 'entita-collegate',
                classes: selected == 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                payload: 'maxxi',
                classes: selected == 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTab) {
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
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        let { context, labels, config } = this.options;
        labels = labels || {};
        /** @type {?} */
        let unpackedData = [];
        if (context == 'overview') {
            /** @type {?} */
            let configuredKeys = ((config.get('entita-layout') || {}).overview || {}).campi;
            /** @type {?} */
            let filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            d => configuredKeys.includes(d.key)));
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData);
        }
        else {
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
        }
        // prettify labels
        unpackedData.forEach((/**
         * @param {?} section
         * @return {?}
         */
        section => {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.label))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.label = helpers.prettifySnakeCase(item.label, labels[item.label])));
        }));
        return {
            group: unpackedData
        };
    }
    // tslint:disable-next-line: member-ordering
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
        let extracted = [];
        // if the server returns an array of key-value tuples
        if (fields instanceof Array) {
            extracted = fields.map((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                return { label: el.key, value: el.value };
            }));
            return [{ items: extracted }];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (let i = 0; i < fields.length; i++) {
            /** @type {?} */
            const thisField = fields[i];
            // rename current field
            /** @type {?} */
            const title = thisField.label;
            // field title
            /** @type {?} */
            const label = thisField.key;
            // item label
            /** @type {?} */
            const value = thisField.value;
            // item value
            /** @type {?} */
            const group = thisField.fields;
            // child group
            /** @type {?} */
            const temp = {};
            if (title) {
                // if there is a title, use it
                temp.title = title;
            }
            if (label && value) {
                // if there are a lable and value, use them
                temp.label = label;
                temp.value = value;
            }
            if (group) {
                // if there is a child group
                if (group[0].key) {
                    // if this group has a tuple of (label, value)
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
    constructor() {
        super(...arguments);
        this._getCachedData = (/**
         * @return {?}
         */
        () => {
            return AwTreeDS.dataCache[this.rootId];
        });
        this._normalize = (/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, label, icon, img, branches }) => {
            /** @type {?} */
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = { id, label, icon, img, hasBranches };
            if (hasBranches) {
                branches.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this._getCachedData().flatIds.push([id, data.id]);
                    this._normalize(data);
                }));
            }
        });
        this._getParent = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            return this._getCachedData().flatIds
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            ([, childId]) => childId === id))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ([parentId]) => parentId))[0] || null;
        });
        this._getTreePath = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /** @type {?} */
            const ids = [id];
            /** @type {?} */
            let currentId = id;
            while (currentId) {
                /** @type {?} */
                const parentId = this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        });
        this._getTree = (/**
         * @param {?} path
         * @return {?}
         */
        (path) => {
            /** @type {?} */
            const tree = {};
            /** @type {?} */
            let counter = 0;
            /** @type {?} */
            const loadItems = (/**
             * @param {?} id
             * @param {?} source
             * @return {?}
             */
            (id, source) => {
                counter += 1;
                /** @type {?} */
                const nextParent = path[counter];
                source.items = [];
                this._getCachedData().flatIds
                    .filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([parentId]) => parentId === id))
                    .forEach((/**
                 * @param {?} __0
                 * @param {?} index
                 * @return {?}
                 */
                ([, childId], index) => {
                    /** @type {?} */
                    const inPath = childId === nextParent;
                    /** @type {?} */
                    const item = this._getTreeItem(childId, inPath);
                    source.items.push(item);
                    if (inPath) {
                        loadItems(childId, source.items[index]);
                    }
                }));
            });
            // init
            loadItems(path[0], tree);
            return tree;
        });
        this._getTreeItem = (/**
         * @param {?} id
         * @param {?} inPath
         * @return {?}
         */
        (id, inPath) => {
            const { label, icon, img, hasBranches } = this._getCachedData().flatData[id];
            /** @type {?} */
            const defaultIcon = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
            /** @type {?} */
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
                icon: icon || null,
                toggle: hasBranches ? {
                    icon: icon || defaultIcon,
                    payload: {
                        source: 'toggle',
                        id: id,
                    }
                } : null,
                meta: id,
                payload: {
                    id,
                    source: 'menuitem',
                    label
                }
            };
        });
    }
    /**
     * @protected
     * @param {?} tree
     * @return {?}
     */
    transform(tree) {
        if (!tree) {
            return;
        }
        return tree;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    load(data) {
        const { tree } = data;
        this.rootId = tree.id;
        // save in cache
        if (!AwTreeDS.dataCache[this.rootId]) {
            AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
            this._normalize(tree);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    build(id) {
        /** @type {?} */
        const path = this._getTreePath(id);
        /** @type {?} */
        const oldPath = this._getTreePath(this.currentId);
        /** @type {?} */
        const oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            /** @type {?} */
            const idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        /** @type {?} */
        const tree = this._getTree(path);
        this.update(tree);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActive(id) {
        this.activeId = id;
    }
    /**
     * @return {?}
     */
    highlightActive() {
        /** @type {?} */
        const control = (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                /** @type {?} */
                const founded = item.meta === this.activeId;
                /** @type {?} */
                const hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    /** @type {?} */
                    const currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    /** @type {?} */
                    const currentClasses = item.classes.split(' ');
                    if (currentClasses.indexOf('is-active') === -1) {
                        currentClasses.push('is-active');
                    }
                    item.classes = currentClasses.join(' ');
                }
                if (Array.isArray(item.items) && item.items.length) {
                    control(item.items);
                }
            }));
        });
        control(this.output.items);
    }
}
AwTreeDS.dataCache = {};
if (false) {
    /** @type {?} */
    AwTreeDS.dataCache;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.rootId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.currentId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.activeId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getCachedData;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._normalize;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getParent;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTreePath;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTree;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTreeItem;
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
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
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
        let { labels } = this.options;
        labels = labels || {};
        /** @type {?} */
        let group = { group: [] };
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                /** @type {?} */
                let items = [];
                if (field.fields) {
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        items.push({ label: helpers.prettifySnakeCase(item.key, labels[item.key]), value: item.value });
                    }));
                    group.group.push({
                        title: field.label,
                        items: items
                    });
                }
                else {
                    items.push({ label: helpers.prettifySnakeCase(field.key, labels[field.key]), value: field.value });
                    group.group.push({
                        items: items
                    });
                }
            }));
        }
        return group;
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
class AwSearchLayoutTabsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.selected = 'list';
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : ''
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : ''
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : ''
                }]
        };
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    setSelected(tabId) {
        this.selected = tabId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutTabsDS.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$1 = /*#__PURE__*/Object.freeze({
    AwLinkedObjectsDS: AwLinkedObjectsDS,
    AwAutocompleteWrapperDS: AwAutocompleteWrapperDS,
    AwBubbleChartDS: AwBubbleChartDS,
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
    AwSearchLayoutTabsDS: AwSearchLayoutTabsDS
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwLinkedObjectsEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.handleScroll = (/**
         * @param {?} target
         * @return {?}
         */
        target => {
            const { totalObjects, loadedData } = this.dataSource;
            /** @type {?} */
            const loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
            if (loadedTotal >= totalObjects) {
                return;
            }
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150 && this.dataSource.loadedData.isLoading == false) {
                this.dataSource.loadedData.isLoading = true;
                this.emitOuter('datarequest', {
                    currentPage: this.dataSource.currentPage
                });
            }
        });
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
                case 'aw-linked-objects.click':
                    if (typeof payload == 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            /** @type {?} */
                            let targetPage = +payload.replace('goto-', '')
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
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.emitOuter('change', +payload.value);
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    this.dataSource.checkForMore(false);
                    this.emitOuter('datarequest', {
                        currentPage: this.dataSource.currentPage
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    // handle incoming data from home-layout
                    let { res } = payload;
                    this.dataSource.handleIncomingData(res);
                case 'aw-home-layout.scroll':
                    this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    AwLinkedObjectsEH.prototype.handleScroll;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwAutocompleteWrapperEH extends EventHandler {
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
                case 'aw-autocomplete-wrapper.click':
                    if (payload != 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                        this.emitOuter('clickresult', payload);
                    }
                    break;
                default:
                    console.warn('unhandled event of type:', type);
                    break;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwBubbleChartEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.toggleSelection = (/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            this.dataSource.handleBubbleClick(id);
            this.emitOuter('selection', this.dataSource.selected);
        });
        this.toggleFilter = (/**
         * @param {?} f
         * @return {?}
         */
        f => {
            /*
              Toggle the clicked filter in the filteres array and
              redraw the graph.
            */
            if (this.dataSource.filters.includes(f)) {
                this.dataSource.filters.splice(this.dataSource.filters.indexOf(f), 1);
            }
            else {
                this.dataSource.filters.push(f);
            }
            this.dataSource.updateChart(null); // null means "keep using the same response"
        });
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
                case 'aw-bubble-chart.click':
                    if (this.dataSource.options.selectable != false) {
                        this.toggleSelection(payload);
                    }
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => payload == el.entity.id)));
                    break;
                case 'aw-bubble-chart.d3end': // end of d3.js draw()
                    this.dataSource.tippyMaker(this.dataSource.chartData); // make tooltips
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    this.emitOuter('bubble-tooltip-goto-click', {
                        id: this.dataSource.focusedBubble,
                        label: this.dataSource.focusedBubbleLabel
                    });
                    break;
                case 'aw-bubble-chart.bubble-tooltip-select-click':
                    this.toggleSelection(this.dataSource.focusedBubble);
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => this.dataSource.focusedBubble == el.entity.id)));
                    break;
                default:
                    console.warn('unhandled inner event of type', type, 'with payload', payload);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
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
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleSelection;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleFilter;
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
                    this.emitOuter('click', this.dataSource.currentInputValue);
                    break;
                case 'aw-hero.change':
                    this.dataSource.currentInputValue = payload;
                    this.emitOuter('change', payload);
                    break;
                case 'aw-hero.enter':
                    this.emitOuter('enter', payload);
                    break;
                default:
                    console.log('(hero) unhandled event of type', type);
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
    constructor() {
        super(...arguments);
        this.changedInput$ = new Subject();
        this.handleEyeClick = (/**
         * @param {?} type
         * @return {?}
         */
        type => {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (this.dataSource.closedEyes) {
                /** @type {?} */
                let i = this.dataSource.closedEyes.indexOf(type);
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
        });
        this.updateFilters = (/**
         * @param {?} selectedBubble
         * @return {?}
         */
        selectedBubble => {
            /*
              Adds (or removes) the ID of the selected bubble from the array of that type of entity.
              Example:
                • Click on bubble "0263a407-d0dd" of type "org"
                • Add "0263a407-d0dd" to array "org".
              Result:
                • lockedFacets = { "org":[ "0263a407-d0dd" ] }
            */
            selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
            // fix for space in ID
            const { id, typeOfEntity } = selectedBubble.entity // payload is the selected bubble
            ;
            if (!this.dataSource.lockedFacets[typeOfEntity]) {
                this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                /** @type {?} */
                let i = this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        });
    }
    /**
     * @return {?}
     */
    listen() {
        this.changedInput$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            this.emitOuter('change', payload);
        }));
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
                    Object.keys(this.dataSource.lockedFacets).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => {
                        if (this.dataSource.lockedFacets[key].includes(payload)) {
                            this.dataSource.lockedFacets[key].splice(this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    }));
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.clearselection':
                    this.dataSource.lockedFacets = {};
                    this.dataSource.closedEyes = [];
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.facetclick':
                    let { openTippy } = this.dataSource;
                    if (this.dataSource.lockedFacets[openTippy]) {
                        if (this.dataSource.lockedFacets[openTippy].indexOf(payload) == -1) {
                            this.dataSource.lockedFacets[openTippy].push(payload);
                        }
                    }
                    else {
                        this.dataSource.lockedFacets[openTippy] = [payload];
                    }
                    this.dataSource.update(this.dataSource.lastData);
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
    AwHomeFacetsWrapperEH.prototype.changedInput$;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.handleEyeClick;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.updateFilters;
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
            switch (payload.source) {
                case 'toggle':
                    this.dataSource.build(payload.id);
                    break;
                case 'menuitem':
                    this.dataSource.setActive(payload.id);
                    this.dataSource.highlightActive();
                    this.emitOuter('click', payload);
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
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    if (payload.currentItem) {
                        this.dataSource.setActive(payload.currentItem);
                    }
                    /** @type {?} */
                    const currentId = payload.currentItem || payload.tree.id;
                    this.dataSource.load(payload);
                    this.dataSource.build(currentId);
                    break;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSearchLayoutTabsEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        // TODO
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
    AwAutocompleteWrapperEH: AwAutocompleteWrapperEH,
    AwBubbleChartEH: AwBubbleChartEH,
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
    AwTableEH: AwTableEH
});

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
        { id: 'aw-bubble-chart' },
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
     * @param {?} location
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} communication
     * @param {?} mainState
     * @param {?} titleService
     */
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
    /**
     * @protected
     * @return {?}
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
                template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n    \n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <!-- lb.dataSource.selectedTab -->\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\n        <div class=\"aw-entity__content-loading-title\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\"></n7-content-placeholder>\n        </div>\n        \n        <div class=\"aw-entity__content-loading-items\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n    </div>\n\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <button *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                    <button *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </button>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <button class=\"n7-btn n7-btn-light\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n                <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\n                *ngIf=\"lb.dataSource.bubblesEnabled\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <button class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\"\n                        *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <!-- Small Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                    <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                        [container]=\"'bubble-chart-container'\" [buttons]=\"['select', 'goto']\">\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n                <!-- Big Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\n                    <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                        [container]=\"'bubble-chart-container'\" [buttons]=\"['select', 'goto']\">\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{lb.dataSource.myResponse.wikiTab.url}}\n                </a>\n            </div>\n        </section>\n    </div>\n</div>"
            }] }
];
/** @nocollapse */
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
    AwEntitaLayoutComponent.prototype.location;
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
        this.facetInputs = {};
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
        this.numOfItemsStr = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
        this.resultsLimit = -1;
        this.selectedEntitiesIds = [];
        this.destroyed$ = new Subject();
        // BUBBLE CHART DATA ↓
        this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
        // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
        // BUBBLE CHART DATA ↑
        this.homeAutocompleteIsLoading = false;
        this.resultsListIsLoading = false;
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        (id, data, options) => {
            // update components from EH
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration, tippy }) {
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit
        });
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
    }
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    makeRequest$(query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params
        });
    }
    /**
     * @return {?}
     */
    initialFilterRequest() {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: {
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
            },
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    parseInitialRequest(response) {
        this.firstBubbleResponse = response.entitiesData;
        /** @type {?} */
        const facetData = [];
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        (toe) => {
            /** @type {?} */
            const TOEconfigData = this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            facetData.push(Object.assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, TOEconfigData));
        }));
        this.one('aw-home-facets-wrapper').update(facetData);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
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
            this.numOfItemsStr = '0';
        }
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        // scroll control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._scrollBackgroundControl();
        }));
    }
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    updateTags(onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
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
     * @return {?}
     */
    renderItemTags() {
        /*
                    Try to build an item tag for each selected query looking at the data from the
                    first response. If the needed bubble data cannot be found, ask the backend
                    for that bubble's data.
                */
        /** @type {?} */
        let queryList = [] // list of pending queries
        ;
        // list of pending queries
        /** @type {?} */
        let tagsData = [] // list of tags data built from query
        ;
        this.selectedBubbles.forEach((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            // try to get the data of each selected bubble
            /** @type {?} */
            let theBubble = this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            el => el.entity.id == b));
            if (theBubble) { // if a bubble was found
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${theBubble.entity.typeOfEntity.replace(/ /g, '-')}`
                });
            }
            else { // if the bubble was not found, make a query
                // if the bubble was not found, make a query
                /** @type {?} */
                let params = { entityId: b, entitiesListSize: 1 };
                queryList.push(this.makeRequest$('getMissingBubble', params));
            }
        }));
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((/**
             * @param {?} forkres
             * @return {?}
             */
            forkres => {
                forkres.forEach((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => {
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${r.typeOfEntity.replace(/ /g, '-')}`
                    });
                }));
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            }));
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHeroChange(value) {
        if (value) {
            this.autocompleteChanged$.next(value);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = value;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scrollBackgroundControl() {
        /** @type {?} */
        const node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        /** @type {?} */
        const source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._setHasScrollBackground(node);
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
     * @param {?} target
     * @return {?}
     */
    _setHasScrollBackground(target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    }
    /**
     * @private
     * @return {?}
     */
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
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
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update(response);
            }));
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
                flip: false,
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
    AwHomeLayoutDS.prototype.facetInputs;
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
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsLimit;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedEntitiesIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.outerLinks;
    /** @type {?} */
    AwHomeLayoutDS.prototype.outerLinksTitle;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteQuery;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.destroyed$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.lastBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.firstBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsListIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            this.emitOuter('facetclick', payload);
        });
        this.handleChartSelection = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            const selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.resultsListIsLoading = true;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
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
                    /** @type {?} */
                    const queryList = [];
                    this.dataSource.selectedBubbles.forEach((/**
                     * @param {?} b
                     * @return {?}
                     */
                    b => {
                        /** @type {?} */
                        let params = { entityId: b, entitiesListSize: 1 };
                        queryList.push(// make a query for each selected bubble
                        this.dataSource.makeRequest$('getMissingBubble', params));
                    }));
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList).subscribe((/**
                     * @param {?} forkres
                     * @return {?}
                     */
                    forkres => {
                        /** @type {?} */
                        let customBubbles = [];
                        forkres.forEach((/**
                         * @param {?} r
                         * @return {?}
                         */
                        r => { customBubbles.push({ count: 0, entity: r }); }));
                        this.emitOuter('filterbubbleresponse', customBubbles);
                        this.dataSource.renderPreviewsFromApolloQuery(res);
                        this.dataSource.renderItemTags();
                    }));
                }
            }));
        });
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
                    this.loadFilters();
                    this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.outerlinkclick':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload
                    });
                    break;
                case 'aw-home-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    /** @type {?} */
                    const entityLinks = this.dataSource.selectedBubbles.join(',');
                    /** @type {?} */
                    const basePath = this.configuration.get('paths').searchBasePath;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [basePath],
                        queryParams: { 'entity-links': entityLinks }
                    });
                    break;
                case 'aw-home-layout.clearselection':
                    this.emitOuter('clearselection');
                    break;
                default:
                    console.warn('(home) unhandled inner event of type: ', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-hero.enter':
                case 'aw-hero.click':
                    /** @type {?} */
                    const query = payload.value;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get("paths").searchBasePath],
                        queryParams: { query }
                    });
                    break;
                case 'aw-hero.change':
                    this.dataSource.autocompleteValue = payload.value;
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (!payload.value ||
                        (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                        /** @type {?} */
                        let params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                            }
                        };
                        this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => {
                            if (response.results.length < 1) {
                                /** @type {?} */
                                let fallback = {
                                    totalcount: 0,
                                    results: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                this.configuration.get('home-layout')['autocomplete-fallback'] ?
                                                    this.configuration.get('home-layout')['autocomplete-fallback'] :
                                                    'Nessun risultato trovato'
                                            }
                                        }
                                    ]
                                }
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                ;
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response }, // DATA
                                { config: this.configuration } // OPTIONS
                                );
                            }
                        }));
                    }
                    break;
                case 'aw-home-facets-wrapper.enter':
                    this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    const { currentPage } = payload;
                    /** @type {?} */
                    const params = {
                        selectedEntitiesIds: this.dataSource.selectedBubbles,
                        itemsPagination: {
                            offset: currentPage * this.dataSource.resultsLimit,
                            limit: this.dataSource.resultsLimit
                        }
                    };
                    this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    res => {
                        if (res) {
                            this.emitOuter('dataresponse', { res });
                        }
                        else {
                            console.log('Unable to fetch additional data.');
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get("paths").schedaBasePath, payload.id, helpers.slugify(payload.title)]
                    });
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    const { source, type } = payload;
                    /** @type {?} */
                    let basePath;
                    if (source === "item") {
                        if (type === "oggetto-culturale") {
                            basePath = this.configuration.get("paths").schedaBasePath;
                        }
                        else {
                            basePath = this.configuration.get("paths").entitaBasePath;
                        }
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath, payload.id, helpers.slugify(payload.title)]
                        });
                    }
                    else if (source === "showMore") {
                        /** @type {?} */
                        const query = this.dataSource.homeAutocompleteQuery;
                        basePath = this.configuration.get("paths").searchBasePath;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query }
                        });
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [
                            this.configuration.get('paths').entitaBasePath,
                            payload.id,
                            helpers.slugify(payload.label)
                        ]
                    });
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadFilters() {
        this.dataSource.initialFilterRequest().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            this.dataSource.parseInitialRequest(response);
            if (this.dataSource.bubblesEnabled) {
                this.emitOuter('filterbubbleresponse', response.entitiesData);
            }
        }));
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    outerLinkClick(type, payload) {
        window.open(payload, "_blank");
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
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleSimpleAutocompleteClick;
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleChartSelection;
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
                template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <n7-content-placeholder\n            [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n            <n7-content-placeholder\n            [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n            <n7-content-placeholder\n            [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n            <n7-content-placeholder\n            [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\n            <n7-content-placeholder\n            [data]=\"{\n                blocks: [\n                    {\n                        classes: 'facet-placeholder-item-1'\n                    }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\n            <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\" [container]=\"'bubble-chart-container'\"\n                [buttons]=\"['select', 'goto']\">\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                \n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\n                        <n7-content-placeholder\n                        [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder\n                        [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder\n                        [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder\n                        [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder\n                        [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                    </div>\n                    <div\n                    *ngIf=\"!lb.dataSource.resultsListIsLoading\" \n                    class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\"\n                        (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n\n                        <div class=\"aw-home__bubble-results-fallback\"\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\n                            <p class=\"aw-home__bubble-results-fallback-text\">\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\n                            </p>\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\n                                Resetta la ricerca\n                            </button>\n                        </div>\n\n                        <ng-container\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\n                         class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                </div>\n                <!-- aw-linked-objects__actions -->\n                <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\n                        class=\"aw-home__bubble-results-list-actions\">\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                    </div>\n                </ng-container>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\n                </n7-item-preview>\n                <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\n            <n7-loader [data]=\"{}\"></n7-loader>\n        </div>\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\" *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\n                <n7-loader [data]=\"{}\"></n7-loader>\n            </div>\n            <n7-simple-autocomplete \n                *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n            </n7-simple-autocomplete>\n        </div>\n    </div>\n</div>"
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
        this.destroyed$ = new Subject();
        this.stickyControlTrigger$ = new Subject();
        this.contentParts = {};
        this.sidebarIsSticky = false;
        this.treeMaxHeight = '100%';
        this.contentIsLoading = false;
        this.currentId = null;
        this.getTree = (/**
         * @return {?}
         */
        () => AwSchedaLayoutDS.tree);
    }
    /**
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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit
        });
        this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'patrimonio');
        // sidebar sticky control
        this._sidebarStickyControl();
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNavigation(id) {
        if (AwSchedaLayoutDS.tree) {
            return of(AwSchedaLayoutDS.tree);
        }
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
     * @param {?} tree
     * @return {?}
     */
    setTree(tree) {
        AwSchedaLayoutDS.tree = tree;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    updateNavigation(text) {
        this.one('aw-sidebar-header').update({ text });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadItem(id) {
        /** @type {?} */
        const maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
        return this.communication.request$('getNode', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: { id: id, maxSimilarItems: maxSimilarItems }
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loadContent(response) {
        if (response) {
            this.contentParts = [];
            /** @type {?} */
            const content = {};
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
            const titleObj = {
                icon: response.icon,
                title: {
                    main: {
                        text: response.title || response.label,
                        classes: 'bold',
                    }
                },
                tools: response.subTitle,
                actions: {}
            };
            this.one('aw-scheda-inner-title').update(titleObj);
            this.hasMetadata = response.fields != null;
            this.one('aw-scheda-metadata').updateOptions({ labels: this.configuration.get("labels") });
            this.one('aw-scheda-metadata').update(response);
            // Breadcrumb section
            /** @type {?} */
            const breadcrumbs = {
                items: []
            };
            if (response.breadcrumbs) {
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
            // update head title
            this.mainState.update('headTitle', `Arianna Web > Patrimonio > ${response.title || response.label}`);
        }
        if (response.relatedItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        else {
            this.hasSimilarItems = false;
        }
        // control sticky
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.stickyControlTrigger$.next();
        }));
    }
    /**
     * @return {?}
     */
    collapseSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    /**
     * @private
     * @return {?}
     */
    _sidebarStickyControl() {
        /** @type {?} */
        const source$ = fromEvent(window, 'scroll');
        merge(source$, this.stickyControlTrigger$).pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const windowTop = window.pageYOffset;
            /** @type {?} */
            const windowBottom = window.scrollY + window.innerHeight;
            /** @type {?} */
            const wrapper = document.getElementsByClassName('sticky-parent')[0];
            /** @type {?} */
            const wrapperTop = wrapper['offsetTop'];
            /** @type {?} */
            const wrapperBottom = wrapperTop + wrapper.clientHeight;
            this.sidebarIsSticky = wrapperTop <= windowTop;
            // tree height control
            if (this.sidebarIsSticky && windowBottom < wrapperBottom) {
                this.treeMaxHeight = (windowBottom - windowTop - 50) + 'px';
            }
            else if (this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                this.treeMaxHeight = (wrapperBottom - windowTop - 50) + 'px';
            }
            else if (windowBottom < wrapperBottom) {
                this.treeMaxHeight = (windowBottom - wrapperTop - 50) + 'px';
            }
            else {
                this.treeMaxHeight = (wrapperBottom - wrapperTop - 50) + 'px';
            }
        }));
    }
}
AwSchedaLayoutDS.tree = null;
if (false) {
    /** @type {?} */
    AwSchedaLayoutDS.tree;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutDS.prototype.stickyControlTrigger$;
    /**
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
    AwSchedaLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.treeMaxHeight;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.contentIsLoading;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.emptyLabel;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.getTree;
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
                    const paramId = this.route.snapshot.params.id || "";
                    if (paramId) {
                        this.dataSource.currentId = paramId;
                    }
                    this.listenRoute();
                    this.loadNavigation(paramId);
                    break;
                case 'aw-scheda-layout.destroy':
                    this.destroyed$.next();
                    this.dataSource.onDestroy();
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
                        this.emitGlobal('navigate', {
                            path: [
                                this.configuration.get('paths').schedaBasePath,
                                payload.id,
                                helpers.slugify(payload.label)
                            ],
                            handler: 'router'
                        });
                    }
                    break;
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    const { id, label } = payload;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [
                            this.configuration.get('paths').entitaBasePath,
                            id,
                            helpers.slugify(label),
                            'overview'
                        ]
                    });
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [paths.schedaBasePath, payload.id, helpers.slugify(payload.title)]
                    });
                    break;
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
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    this.dataSource.currentId = paramId;
                }
                this.dataSource.contentIsLoading = true;
                this.dataSource.loadItem(paramId).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.dataSource.contentIsLoading = false;
                    if (response) {
                        this.dataSource.loadContent(response);
                        if (Array.isArray(response.relatedEntities) && response.relatedEntities.length) {
                            this.dataSource.hasBubbles = true;
                            if (this.dataSource.bubblesEnabled) {
                                this.emitOuter('filterbubbleresponse', response.relatedEntities);
                            }
                        }
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    loadNavigation(selectedItem) {
        this.dataSource.updateNavigation('Loading...');
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.setTree(response);
                this.dataSource.updateNavigation(this.dataSource.getTree().label);
                this.emitOuter('navigationresponse', { tree: this.dataSource.getTree(), currentItem: selectedItem });
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
        { id: 'aw-bubble-chart' },
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
                template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n        [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n            <div class=\"aw-scheda__tree-content-loading\" *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n            </div>\n            <div class=\"aw-scheda__tree-content\" \n                [ngStyle]=\"{ \n                    'max-height': lb.dataSource.treeMaxHeight, \n                    'overflow': 'auto' \n                }\"\n            >\n                <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\" [emit]=\"lb.widgets['aw-tree'].emit\"\n                    *ngIf=\"!lb.dataSource.sidebarCollapsed\"></n7-tree>\n            </div>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper-loading\" *ngIf=\"lb.dataSource.contentIsLoading\">\n            <!--\n                <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'content-placeholder-title'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }]\n            }\"></n7-content-placeholder>\n            -->\n        </div>\n        <div class=\"aw-scheda__scheda-wrapper\" *ngIf=\"!lb.dataSource.contentIsLoading\">\n            <div *ngIf=\"!lb.dataSource.currentId\"\n                 class=\"aw-scheda__intro-text\"\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\n            </div>\n            <n7-breadcrumbs [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-breadcrumbs>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <n7-image-viewer [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\" *ngIf=\"lb.dataSource.contentParts.content\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\" *ngIf=\"lb.dataSource.hasMetadata\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.metadataSectionTitle}}\n                </div>\n                <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section class=\"aw-scheda__bubble-chart\" *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.hasBubbles\">\n                <div *ngIf=\"lb.dataSource.hasBubbles\" class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                    [container]=\"'bubble-chart-container'\" [buttons]=\"['goto']\">\n                    <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </section>\n\n            <section *ngIf=\"lb.dataSource.hasSimilarItems\" id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items n7-grid-2\">\n                    <!--<ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">-->\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>"
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
var facetsConfig = {
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
                    label: 'Cerca in tutti campi delle schede'
                }
            ]
        },
        {
            id: 'query-links',
            type: 'value'
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
                    placeholder: 'Cerca...',
                    // icon: 'n7-icon-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [
                            {
                                key: 'label',
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
                                key: 'query-all',
                                operator: '='
                            }
                        ]
                    }
                },
                {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [
                            {
                                key: 'source.entityType',
                                operator: '='
                            }
                        ]
                    }
                }
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
                    placeholder: 'Cerca entità',
                    // icon: 'n7-icon-search',
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
            type: 'text',
            // score | text | date
            key: 'label',
            // docPath, elastic key, ecc
            direction: 'ASC' // ASC | DESC
        },
        fields: [
            {
                id: 'description',
                highlight: true,
                limit: 200
            }
        ]
    },
    page: { offset: 0, limit: 10 }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SEARCH_MODEL_ID = 'aw-search-layout';
class AwSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.resetButtonEnabled = true;
        this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // linked objects page size
        this.sidebarIsSticky = false;
        this.isFirstLoading = true;
        this.resultsLoading = false;
        this.orderBy = 'label';
        this.orderDirection = 'ASC';
        this.orderByLabel = 'Ordina per';
        this.orderByOptions = [
            {
                value: 'label_ASC',
                label: 'Ordine alfabetico (A→Z)',
                selected: true
            },
            {
                value: 'label_DESC',
                label: 'Ordine alfabetico (Z→A)',
                selected: false
            }
        ];
        this.getSearchModelId = (/**
         * @return {?}
         */
        () => SEARCH_MODEL_ID);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, options, communication, search }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.prettifyLabels = this.configuration.get('labels');
        this.configKeys = this.configuration.get('config-keys');
        this.fallback = this.configuration.get('search-layout').fallback;
        this.pageTitle = this.configuration.get('search-layout').title;
        // remove first
        // stateless search
        if (this.search.model(SEARCH_MODEL_ID)) {
            this.search.remove(SEARCH_MODEL_ID);
        }
        this.search.add(SEARCH_MODEL_ID, cloneDeep(facetsConfig));
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        // query params control
        if (SearchService.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
            SearchService.queryParams = null;
        }
        // sidebar sticky control
        this._sidebarStickyControl();
        this.mainState.updateCustom('currentNav', 'ricerca');
        this.mainState.update('headTitle', 'Arianna Web > Ricerca');
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
        SearchService.queryParams = null;
    }
    /**
     * @return {?}
     */
    onSearchResponse() {
        this.resetButtonEnabled = true;
        if (this.isFirstLoading) {
            this.isFirstLoading = false;
            this.one('facets-wrapper').update({ searchModel: this.searchModel });
            this.searchModel.updateInputsFromFilters();
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onOrderByChange(payload) {
        const [orderBy, direction] = payload.split('_');
        // set selected
        this.orderByOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option.value === payload) {
                option.selected = true;
            }
            else {
                option.selected = false;
            }
        }));
        this.orderBy = orderBy;
        this.orderDirection = direction;
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationChange(payload) {
        /** @type {?} */
        const page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationGoToChange(payload) {
        /** @type {?} */
        const page = payload.replace('goto-', '');
        return this._updateSearchPage(page);
    }
    /**
     * @return {?}
     */
    resetPagination() {
        this._updateSearchPage(1);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onResultsLimitChange(payload) {
        this.setLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setLimit(payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
    }
    /**
     * @return {?}
     */
    doSearchRequest$() {
        /** @type {?} */
        const requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        const requestPayload = {
            searchParameters: Object.assign({ totalCount: 100 }, requestParams)
        };
        return this.communication.request$('search', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            error => console.error(error)),
            params: requestPayload
        }).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ totalCount, results, facets }) => {
            this.totalCount = totalCount;
            /** @type {?} */
            let resultsTitleIndex = 0;
            // results title
            if (this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            this.resultsTitle = this.configuration.get('search-layout').results[resultsTitleIndex];
            // facets labels
            this._addFacetsLabels(facets);
            // facets options
            this._addFacetsOptions(facets);
            this.searchModel.updateFacets(facets);
            this.searchModel.updateTotalCount(totalCount);
            this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                dynamicPagination: {
                    total: totalCount
                },
                size: this.pageSize
            });
            this.one('aw-linked-objects').update({ items: this._normalizeItems(results.items) });
        })));
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _updateSearchPage(page) {
        if (+page === this.currentPage) {
            return of(false);
        }
        this.currentPage = +page;
        /** @type {?} */
        const searchConfig = this.searchModel.getConfig();
        /** @type {?} */
        const pageConfig = searchConfig.page;
        const { limit } = pageConfig;
        /** @type {?} */
        const newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    }
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    _addFacetsLabels(facets) {
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        f => Array.isArray(f.data)))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            dataItem => {
                /** @type {?} */
                const key = dataItem.label;
                dataItem.label = helpers.prettifySnakeCase(key, this.prettifyLabels[key]);
            }));
        }));
    }
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    _addFacetsOptions(facets) {
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.id === 'query-links'))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            dataItem => {
                /** @type {?} */
                const key = dataItem.value.replace(' ', '-');
                /** @type {?} */
                const config = this.configKeys[key];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: `color-${key}`
                    };
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _normalizeItems(items) {
        return items.map((/**
         * @param {?} singleItem
         * @return {?}
         */
        singleItem => ({ item: Object.assign({}, singleItem) })));
    }
    /**
     * @private
     * @return {?}
     */
    _sidebarStickyControl() {
        /** @type {?} */
        const source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const windowOffsetTop = window.pageYOffset;
            /** @type {?} */
            const wrapperOffsetTop = document.getElementsByClassName('sticky-parent')[0]['offsetTop'];
            this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.searchModel;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.prettifyLabels;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configKeys;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.fallback;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.resetButtonEnabled;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.totalCount;
    /** @type {?} */
    AwSearchLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwSearchLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSearchLayoutDS.prototype.isFirstLoading;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsLoading;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderBy;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderDirection;
    /** @type {?} */
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.facetsChange$ = new Subject();
        this.aditionalParamsChange$ = new Subject();
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
                case 'aw-search-layout.init':
                    this.route = payload.route;
                    this.configuration = payload.configuration;
                    this.dataSource.onInit(payload);
                    this._listenToFacetsChange();
                    this._listenToAditionalParamsChange();
                    this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    this.dataSource.onOrderByChange(payload);
                    this.aditionalParamsChange$.next();
                    break;
                case 'aw-search-layout.searchreset':
                    this.dataSource.resetButtonEnabled = false;
                    this.dataSource.searchModel.clear();
                    this.aditionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facetschange':
                    this.dataSource.resetPagination();
                    break;
                case 'aw-linked-objects.pagination':
                    this.dataSource.onPaginationChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    changed => {
                        if (changed) {
                            this.aditionalParamsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.change':
                    this.dataSource.onResultsLimitChange(payload);
                    this.aditionalParamsChange$.next();
                    break;
                case 'aw-linked-objects.goto':
                    this.dataSource.onPaginationGoToChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    changed => {
                        if (changed) {
                            this.aditionalParamsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.dataSource.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [
                            payload.type == undefined
                                ? paths.schedaBasePath
                                : paths.entitaBasePath,
                            payload.id,
                            helpers.slugify(payload.title)
                        ]
                    });
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToFacetsChange() {
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        () => {
            this.dataSource.resultsLoading = true;
            this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            () => {
                this.dataSource.resultsLoading = false;
                this.dataSource.onSearchResponse();
                this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToAditionalParamsChange() {
        this.aditionalParamsChange$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const searchModel = this.dataSource.searchModel;
            /** @type {?} */
            const requestParams = searchModel.getRequestParams();
            /** @type {?} */
            const queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => queryParams[key] = queryParams[key] || null));
            // aditional params
            queryParams.orderby = this.dataSource.orderBy;
            queryParams.orderdirection = this.dataSource.orderDirection;
            queryParams.page = this.dataSource.currentPage;
            queryParams.limit = this.dataSource.pageSize;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToRouterChanges() {
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
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
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.facetsChange$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.aditionalParamsChange$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.configuration;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AwSearchLayoutConfig = {
    layoutId: 'aw-search-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
    ],
    layoutDS: AwSearchLayoutDS,
    layoutEH: AwSearchLayoutEH,
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
class AwSearchLayoutComponent extends AbstractLayout {
    /**
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} communication
     * @param {?} search
     * @param {?} route
     */
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
     * @protected
     * @return {?}
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
AwSearchLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-search-layout',
                template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>\n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper sticky-parent\">\n        <!-- Left sidebar: facets -->\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar-loading sticky-target\">\n            <div class=\"aw-search__facets-loading\">\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'search-placeholder-facet-input'\n                    }, {\n                        classes: 'search-placeholder-facet-check'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }]\n                }\">\n                </n7-content-placeholder>\n            </div>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <div class=\"aw-search__facets\">\n                <n7-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </n7-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>\n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\"\n                        for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n                        id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\" [selected]=\"option.selected\">\n                            {{ option.label }}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- Search details -->\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\n                 class=\"aw-search__results-wrapper-loading\">\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n                <n7-content-placeholder *ngIf=\"lb.dataSource.resultsLoading\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n            </div>\n            <div *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper\">\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                    <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                    </n7-breadcrumbs>\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n                    <div class=\"aw-search__fallback\">\n                        <p class=\"aw-search__fallback-string\">\n                            {{ lb.dataSource.fallback }}\n                        </p>\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-search__fallback-button\" (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\n                            Resetta la ricerca\n                        </button>\n                    </div>\n                </ng-container>\n                <n7-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n                    [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n        </div>\n    </div>\n</div>"
            }] }
];
/** @nocollapse */
AwSearchLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: CommunicationService },
    { type: SearchService },
    { type: ActivatedRoute }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BubbleChartWrapperComponent {
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    onClick(type, payload) {
        this.emit(type, payload);
    }
}
BubbleChartWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-bubble-chart-wrapper',
                template: "<div class=\"aw-bubble-chart-wrapper\">\n    <div class=\"bubble-chart__tippy-template\" style=\"display: none;\">\n        <!-- <button id=\"bubble-popup-menu_closebutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-close-click')\"></button> -->\n        <button id=\"bubble-popup-menu_gotobutton\" class=\"bubble-popup-menu_gotobutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-goto-click', {})\"></button>\n        <button id=\"bubble-popup-menu_selectbutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-select-click', {})\"></button>\n        <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n            <h2 class=\"aw-bubble-popup-menu__title\">\n                <!-- Set by tippy builder fuction -->\n            </h2>\n            <!-- <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n                onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\">\n            </span> -->\n            <p class=\"aw-bubble-popup-menu__text\">\n                <!-- Set by tippy builder fuction -->\n            </p>\n            <div class=\"aw-bubble-popup-menu__actions\">\n                <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                    onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n                <ng-container>\n                    <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                        onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">\n                        <!-- Set by tippy builder function -->\n                    </span>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n\n    <ng-content></ng-content>\n</div>"
            }] }
];
BubbleChartWrapperComponent.propDecorators = {
    emit: [{ type: Input }],
    container: [{ type: Input }],
    buttons: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * \@property label (required)
 * \@property payload (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 *
 * @record
 */
function ISmartBreadcrumbsItem() { }
if (false) {
    /**
     * item's label
     * @type {?}
     */
    ISmartBreadcrumbsItem.prototype.label;
    /**
     * action click's payload
     * @type {?}
     */
    ISmartBreadcrumbsItem.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISmartBreadcrumbsItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    ISmartBreadcrumbsItem.prototype._meta;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
function ISmartBreadcrumbsData() { }
if (false) {
    /**
     * each item renders a breadcrumb level
     * @type {?}
     */
    ISmartBreadcrumbsData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISmartBreadcrumbsData.prototype.classes;
}
class SmartBreadcrumbsComponent {
    constructor() {
        this.ngAfterViewInit = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let parentWidth = this.bcdiv.nativeElement.clientWidth;
            /** @type {?} */
            let childWidth = this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            let liArray = this.bcol.nativeElement.children
            // collapse condition
            ;
            // collapse condition
            if (parentWidth === childWidth) {
                /** @type {?} */
                let tippyData = document.createElement('ol');
                /** @type {?} */
                let i = 1;
                tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                while (parentWidth === childWidth && i < liArray.length - 1) {
                    if (i > 1) {
                        tippyData.appendChild(liArray[i]);
                    }
                    else {
                        tippyData.appendChild(liArray[i]);
                        liArray[i].children[0].innerText = '…';
                    }
                    this.tippyBuilder(liArray[i], tippyData);
                    i++;
                    // update widths
                    parentWidth = this.bcdiv.nativeElement.clientWidth;
                    childWidth = this.bcol.nativeElement.clientWidth;
                }
            }
        });
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        (node, content) => {
            /*
                Builds tippy data for a node.
            */
            document.body.appendChild(content);
            tippy(node, {
                content,
                // allowHTML: true,
                // trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
            });
        });
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SmartBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-smart-breadcrumbs',
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>"
            }] }
];
SmartBreadcrumbsComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }],
    bcol: [{ type: ViewChild, args: ['bcol', { read: ElementRef, static: false },] }],
    bcdiv: [{ type: ViewChild, args: ['bcdiv', { read: ElementRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.data;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.emit;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.bcol;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.bcdiv;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.ngAfterViewInit;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.tippyBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS$1 = [
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    SmartBreadcrumbsComponent
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
/**
 * @record
 */
function IDataWidgetWrapperData() { }
if (false) {
    /** @type {?|undefined} */
    IDataWidgetWrapperData.prototype.classes;
}
class DataWidgetWrapperComponent {
}
DataWidgetWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-data-widget-wrapper',
                template: "<div class=\"dv-data-widget-wrapper\">\n    <ng-content></ng-content>\n</div>"
            }] }
];
DataWidgetWrapperComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataWidgetWrapperComponent.prototype.data;
    /** @type {?} */
    DataWidgetWrapperComponent.prototype.emit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDatepickerWrapperData() { }
if (false) {
    /** @type {?} */
    IDatepickerWrapperData.prototype.select;
    /** @type {?} */
    IDatepickerWrapperData.prototype.datepicker;
    /** @type {?|undefined} */
    IDatepickerWrapperData.prototype.payload;
}
/**
 * @record
 */
function ISelect() { }
if (false) {
    /** @type {?} */
    ISelect.prototype.id;
    /** @type {?} */
    ISelect.prototype.hidden;
    /** @type {?|undefined} */
    ISelect.prototype.icon;
    /** @type {?} */
    ISelect.prototype.label;
    /** @type {?} */
    ISelect.prototype.items;
    /** @type {?|undefined} */
    ISelect.prototype.classes;
}
/**
 * @record
 */
function IDropdownItems() { }
if (false) {
    /** @type {?} */
    IDropdownItems.prototype.text;
    /** @type {?} */
    IDropdownItems.prototype.payload;
    /** @type {?|undefined} */
    IDropdownItems.prototype.classes;
}
class DatepickerWrapperComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    toggleDropDown(payload) {
        if (!this.emit)
            return;
        this.emit('toggle', payload);
    }
}
DatepickerWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-datepicker-wrapper',
                template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [hidden]=\"data.datepicker.hidden\"\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
            }] }
];
DatepickerWrapperComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatepickerWrapperComponent.prototype.data;
    /** @type {?} */
    DatepickerWrapperComponent.prototype.emit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvExampleLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.Items = [
            {
                text: "Last week",
                payload: "lastWeek",
            },
            {
                text: "Last month",
                payload: "lastMonth",
            },
            {
                text: "Last year",
                payload: "lastYear",
            },
            {
                text: "Select Date",
                //this payload key is use for visualise the datepicker.
                payload: "ByDate",
            }
        ];
        this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        this.datePickerExternalData = {
            select: {
                id: "dv-select",
                label: "Last Week",
                items: this.Items,
            },
            datepicker: {
                id: "datepicker",
                libOptions: this.datepickerOptions,
            }
        };
    }
    /**
     * @return {?}
     */
    onInit() {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.Items;
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.datepickerOptions;
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.datePickerExternalData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvExampleLayoutEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            this.dataSource.onInit();
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvDataWidgetDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data) {
            return null;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvDatepickerWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this._datepicker = null;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data) {
            return;
        }
        ;
        return {
            //set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || "n7-icon-angle-down",
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            //set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (/**
                     * @param {?} datepicker
                     * @return {?}
                     */
                    (datepicker) => this._datepicker = datepicker),
                }
            }
        };
    }
    /**
     * @return {?}
     */
    openDatepicker() {
        setTimeout((/**
         * @return {?}
         */
        () => this._datepicker.open()));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    }
    /**
     * @return {?}
     */
    closeDatepicker() {
        setTimeout((/**
         * @return {?}
         */
        () => this._datepicker.close()));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setLabel(payload) {
        this.output.select.label = payload.dateStr;
        this.output.datepicker.hidden = true;
    }
    /**
     * @return {?}
     */
    toggleDropDown() {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DvDatepickerWrapperDS.prototype._datepicker;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvGraphDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            containerId: 'test-Chart',
            libOptions: {
                chart: {
                    "height": 550,
                    "width": 1500,
                    "type": "area",
                    "toolbar": { "show": true }
                },
                dataLabels: { "enabled": false },
                colors: ["rgba(15,200,255)"],
                fill: {
                    "colors": ["#0fc8ff"],
                    "gradient": { "opacityFrom": 0.5, "opacityTo": 0.1 }
                },
                stroke: { "curve": "straight", "width": [2, 1] },
                series: [
                    {
                        "name": "Reddish value",
                        "data": [["2019-08-01", "770.17"], ["2019-08-02", "645.03"],
                            ["2019-08-03", "709.32"], ["2019-08-04", "708.11"],
                            ["2019-08-05", "706.59"], ["2019-08-06", "607.28"],
                            ["2019-08-07", "494.59"], ["2019-08-08", "636.81"],
                            ["2019-08-09", "709.04"], ["2019-08-10", "717.31"],
                            ["2019-08-11", "805.61"], ["2019-08-12", "758.60"],
                            ["2019-08-13", "612.82"], ["2019-08-14", "608.90"],
                            ["2019-08-15", "734.68"], ["2019-08-16", "838.54"],
                            ["2019-08-17", "692.88"]]
                    },
                ],
                grid: {
                    "borderColor": "#e7e7e7",
                    "strokeDashArray": 3,
                    "xaxis": { "lines": { "show": true } }
                },
                markers: { "size": 3, "hover": { "size": 6 } },
                xaxis: {
                    "axisBorder": { "show": true, "color": "#f4f6fc" },
                    "labels": {},
                    "type": "datetime", "tickAmount": 6
                },
                yaxis: [
                    {
                        "show": true,
                        "showAlways": false,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": { "colors": [], "fontSize": "11px", "cssClass": "" }
                        },
                        "axisBorder": { "show": true, "color": "#f4f6fc", "offsetX": 0, "offsetY": 0 },
                        "axisTicks": { "show": false, "color": "#78909C", "width": 6, "offsetX": 0, "offsetY": 0 },
                        "title": { "text": "P Totale °C", "rotate": 90, "offsetY": 0, "offsetX": 0, "style": { "fontSize": "11px", "cssClass": "" } },
                        "tooltip": { "enabled": false, "offsetX": 0 },
                        "crosshairs": { "show": true, "position": "front", "stroke": { "color": "#b6b6b6", "width": 1, "dashArray": 0 } }
                    }
                ],
                legend: { "show": true },
                tooltip: {},
                annotations: { "yaxis": [], "xaxis": [], "points": [] }
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvInnerTitleDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            title: {
                main: {
                    text: "Dipendenti",
                    classes: "n7-main-widget-title",
                },
                secondary: {
                    text: "Dipendeti al 10/10/10",
                    classes: "n7-secondary-widget-title",
                }
            },
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvWidgetDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return DATA_WIDGET_MOCK;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$2 = /*#__PURE__*/Object.freeze({
    DvDataWidgetDS: DvDataWidgetDS,
    DvDatepickerWrapperDS: DvDatepickerWrapperDS,
    DvGraphDS: DvGraphDS,
    DvInnerTitleDS: DvInnerTitleDS,
    DvWidgetDS: DvWidgetDS
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvDataWidgetEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvDatepickerWrapperEH extends EventHandler {
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
                case 'dv-datepicker-wrapper.click':
                    if (payload === "ByDate") {
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
                    this.dataSource.setLabel(payload);
                    break;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH$2 = /*#__PURE__*/Object.freeze({
    DvDataWidgetEH: DvDataWidgetEH,
    DvDatepickerWrapperEH: DvDatepickerWrapperEH
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DvExampleLayoutComponent extends AbstractLayout {
    constructor() {
        super(DvExampleLayoutConfig);
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
DvExampleLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-example-layout',
                template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n    <dv-datepicker-wrapper \n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\n    </dv-datepicker-wrapper>\n</div>"
            }] }
];
/** @nocollapse */
DvExampleLayoutComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS$2 = [
    DataWidgetWrapperComponent,
    DatepickerWrapperComponent,
    DvExampleLayoutComponent,
];
class N7BoilerplateDataVizModule {
}
N7BoilerplateDataVizModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS$2,
                imports: [
                    CommonModule,
                    DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS$2
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
                    //COMMON
                    N7BoilerplateCommonModule,
                    //AW
                    N7BoilerplateAriannaWebModule,
                    //DV
                    N7BoilerplateDataVizModule,
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

export { AbstractLayout, ApolloProvider, ApolloProviderConfig, AwAutocompleteWrapperDS, AwAutocompleteWrapperEH, AwBubbleChartDS, AwBubbleChartEH, AwEntitaLayoutComponent, AwEntitaLayoutConfig, AwEntitaLayoutDS, AwEntitaLayoutEH, AwEntitaMetadataViewerDS, AwEntitaNavDS, AwEntitaNavEH, AwHeroDS, AwHeroEH, AwHomeAutocompleteDS, AwHomeAutocompleteEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwLinkedObjectsDS, AwLinkedObjectsEH, AwPatrimonioLayoutConfig, AwSchedaBreadcrumbsDS, AwSchedaImageDS, AwSchedaInnerTitleDS, AwSchedaLayoutComponent, AwSchedaLayoutDS, AwSchedaLayoutEH, AwSchedaMetadataDS, AwSchedaSidebarEH, AwSearchLayoutComponent, AwSearchLayoutConfig, AwSearchLayoutDS, AwSearchLayoutEH, AwSearchLayoutTabsDS, AwSearchLayoutTabsEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTreeDS, AwTreeEH, BreadcrumbsDS, BreadcrumbsEH, BubbleChartWrapperComponent, CommunicationService, ConfigurationService, DataWidgetWrapperComponent, DatepickerWrapperComponent, DvDataWidgetDS, DvDataWidgetEH, DvDatepickerWrapperDS, DvDatepickerWrapperEH, DvExampleLayoutComponent, DvExampleLayoutConfig, DvExampleLayoutDS, DvExampleLayoutEH, DvGraphDS, DvInnerTitleDS, DvWidgetDS, FacetInput, FacetInputCheckbox, FacetInputLink, FacetInputSelect, FacetInputText, FacetsDS, FacetsEH, FacetsWrapperComponent, FacetsWrapperDS, FacetsWrapperEH, FooterDS, FooterEH, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateDataVizModule, N7BoilerplateLibModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, RestProviderConfig, SearchModel, SearchService, SmartBreadcrumbsComponent, SubnavDS, SubnavEH, MainLayoutComponent as ɵa, AbstractLayout as ɵb, ConfigurationService as ɵc, LayoutsConfigurationService as ɵd, MainStateService as ɵe, Page404LayoutComponent as ɵf, FacetsWrapperComponent as ɵg, CommunicationService as ɵh, ApolloProvider as ɵi, RestProvider as ɵj, AwEntitaLayoutComponent as ɵk, CommunicationService as ɵl, MainStateService as ɵm, AwHomeLayoutComponent as ɵn, AwSchedaLayoutComponent as ɵo, AwSearchLayoutComponent as ɵp, ConfigurationService as ɵq, LayoutsConfigurationService as ɵr, SearchService as ɵs, BubbleChartWrapperComponent as ɵt, SmartBreadcrumbsComponent as ɵu, DataWidgetWrapperComponent as ɵv, DatepickerWrapperComponent as ɵw, DvExampleLayoutComponent as ɵx };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
