import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK, DATA_WIDGET_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of, fromEvent, interval } from 'rxjs';
import { map, catchError, tap, takeUntil, filter, debounce, debounceTime, withLatestFrom } from 'rxjs/operators';
import { __extends, __assign, __read, __spread } from 'tslib';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import { get } from 'lodash';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(config) {
        var _this = this;
        this.config = config;
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this.defaults[key]; });
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { return _this.defaults[key] = value; });
        if (this.config.global) {
            Object.keys(this.config.global).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.set(key, _this.config.global[key]);
            }));
        }
    }
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject("config")); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
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
 * Generated from: lib/common/services/layouts-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutsConfigurationService = /** @class */ (function () {
    function LayoutsConfigurationService(config) {
        var _this = this;
        this.config = config;
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this.defaults[key]; });
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { return _this.defaults[key] = value; });
        if (this.config.layouts) {
            Object.keys(this.config.layouts).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.set(key, _this.config.layouts[key]);
            }));
        }
    }
    LayoutsConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LayoutsConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ LayoutsConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
    return LayoutsConfigurationService;
}());
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
 * Generated from: lib/common/services/main-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainStateService = /** @class */ (function () {
    function MainStateService() {
        var _this = this;
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
        function (key) { return _this._get('default', key); });
        this.getCustom$ = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this._get('custom', key); });
        this.update = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        function (key, newValue) { return _this._update('default', key, newValue); });
        this.updateCustom = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        function (key, newValue) { return _this._update('custom', key, newValue); });
        this.has = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !!_this.default[key]; });
        this.hasCustom = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !!_this.custom[key]; });
    }
    /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    MainStateService.prototype.addCustom = /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    function (key, stream$) {
        if (this.custom[key])
            throw Error("custom stream " + key + " exists!");
        this.custom[key] = stream$;
    };
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    MainStateService.prototype._update = /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    function (type, key, newValue) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        this[type][key].next(newValue);
    };
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    MainStateService.prototype._get = /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    function (type, key) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        return this[type][key];
    };
    MainStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MainStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
    return MainStateService;
}());
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
 * Generated from: lib/common/services/communication-providers/apollo/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ApolloProviderConfig = {
    'getLastPosts': {
        queryName: 'getLastPosts',
        queryBody: "\n      {\n        getLastPosts(__PARAMS__) {\n          id\n          title\n        }\n      }\n    "
    },
    'getTree': {
        queryName: 'getTreeOfItems',
        queryBody: "\n    {\n      getTreeOfItems{\n        id\n        label\n        icon\n        branches {\n          label\n          id\n          img\n          branches {\n            label\n            id\n            icon\n            img\n            branches {\n              label\n              id\n              icon\n              img\n              branches {\n                label\n                id\n                icon\n                img\n                branches {\n                  label\n                  id\n                  icon\n                  img\n                  branches {\n                    label\n                    id\n                    icon\n                    img\n                    branches {\n                      label\n                      id\n                      icon\n                      img\n                      branches {\n                        label\n                        id\n                        icon\n                        img\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    "
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          entity {\n              id\n              label\n              typeOfEntity\n          } count\n        }\n        typeOfEntityData {\n          type\n          count\n        }\n        itemsPagination {\n          totalCount\n          items {\n            thumbnail\n            item {\n              id\n              label\n              fields\n              {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n              breadcrumbs {\n                label\n                link\n              }\n            }\n            relatedTypesOfEntity {\n              type\n              count\n            }\n          }\n        }\n      }\n      }"
    },
    'getEntityDetails': {
        queryName: 'getEntity',
        queryBody: "{\n      getEntity(__PARAMS__){\n        overviewTab\n        label\n        id\n        typeOfEntity\n        fields {\n          ...\n          on KeyValueField {\n            key\n            value\n          }\n          ... on\n          KeyValueFieldGroup {\n            label\n            fields\n            {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n          }\n        }\n        extraTab\n        wikiTab {\n          text\n          url\n        }\n        relatedItems {\n          thumbnail\n          item {\n            label\n            id\n            fields\n            {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n          relatedTypesOfEntity {\n            type\n            count\n          }\n        }\n        relatedEntities {\n          entity {\n              id\n              label\n              typeOfEntity\n          }\n          count\n        }\n      }\n    }\n    "
    },
    'getItem': {
        queryName: 'getItem',
        queryBody: "{\n      getItem(__PARAMS__) {\n        id\n        label\n        icon\n        title\n        subTitle\n        image\n        text\n        fields {\n          ...\n          on KeyValueField {\n            key\n            value\n          }\n          ... on KeyValueFieldGroup {\n            label\n            fields {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n          }\n          }\n          relatedEntities {\n            count\n            entity{\n              id\n              label\n              typeOfEntity\n            }\n          }\n          relatedItems {\n            thumbnail\n            item {\n              label\n              id\n          }\n          relatedTypesOfEntity {\n            type\n            count\n          }\n        }\n        breadcrumbs {\n          label\n          link\n        }\n      }\n    }"
    },
    'getNode': {
        queryName: 'getNode',
        queryBody: "{\n      getNode(__PARAMS__) {\n        ... on Item {\n          id\n          label\n          icon\n          title\n          subTitle\n          image\n          text\n          fields {\n            ...\n            on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n          relatedEntities {\n              count\n              entity{\n                id\n                label\n                typeOfEntity\n              }\n          }\n          relatedItems {\n              thumbnail\n              item {\n                label\n                id\n            }\n            relatedTypesOfEntity {\n              type\n              count\n            }\n          }\n          breadcrumbs {\n            label\n            link\n          }\n        }\n        ... on Node {\n          id\n          label\n          img\n          fields {\n            ...\n            on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }"
    },
    'autoComplete': {
        queryName: 'autoComplete',
        queryBody: "{\n      autoComplete(__PARAMS__){\n        totalCount\n        results {\n          ... on EntityCountData {\n            count\n            entity {\n              id\n              label\n              typeOfEntity\n              fields {\n                ... on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ... on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n          ... on ItemListing {\n            item {\n              id\n              label\n              fields {\n                ... on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ... on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }"
    },
    'search': {
        queryName: 'search',
        queryBody: "{\n      search(__PARAMS__){\n        totalCount\n        facets\n        filters\n        results\n        page\n      }\n    }"
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo/apollo.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApolloProvider = /** @class */ (function () {
    function ApolloProvider(config, http) {
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
    ApolloProvider.prototype.request$ = /**
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    function (requestId, options) {
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        /** @type {?} */
        var query = ApolloProviderConfig[requestId];
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            query = this.providerConfig.config[requestId];
        }
        query = query || {};
        var queryName = query.queryName, queryBody = query.queryBody;
        // config query control
        if (!queryName || !queryBody)
            throw Error("No config found for requestId \"" + requestId + "\"");
        if (params) {
            /** @type {?} */
            var paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        /** @type {?} */
        var source$;
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
        function (response) { return response.data[queryName]; })));
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    ApolloProvider.prototype.makeParamsStr = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                var arrStr_1 = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (typeof (val) === 'object') {
                        /** @type {?} */
                        var subParamsStr = _this.makeParamsStr(val);
                        arrStr_1.push("{ " + subParamsStr + " }");
                    }
                    else {
                        if (!isNaN(val))
                            arrStr_1.push("" + val);
                        else
                            arrStr_1.push("\"" + val + "\"");
                    }
                }));
                paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
            }
            else if (typeof (params[key]) === 'object' && params[key]) {
                /** @type {?} */
                var subParamsStr = _this.makeParamsStr(params[key]);
                paramsStr.push(key + ": { " + subParamsStr + " }");
            }
            else if (typeof (params[key]) === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(key.replace('$', '') + ": " + params[key]);
            }
            else {
                if (!isNaN(params[key]))
                    paramsStr.push(key + ": " + params[key]);
                else
                    paramsStr.push(key + ": \"" + params[key] + "\"");
            }
        }));
        return paramsStr.join(' ');
    };
    ApolloProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApolloProvider.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ApolloProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(ɵɵinject(ConfigurationService), ɵɵinject(HttpClient)); }, token: ApolloProvider, providedIn: "root" });
    return ApolloProvider;
}());
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
 * Generated from: lib/common/services/communication-providers/rest/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RestProviderConfig = {
    'getLastPosts': 'posts',
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/rest/rest.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestProvider = /** @class */ (function () {
    function RestProvider(config, http) {
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
    RestProvider.prototype.request$ = /**
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    function (requestId, options) {
        if (options === void 0) { options = {}; }
        var params = options.params, method = options.method, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
        /** @type {?} */
        var point = RestProviderConfig[requestId];
        // default method
        if (!method) {
            method = this.providerConfig.defaultMethod || 'GET';
        }
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error("No config found for requestId \"" + requestId + "\"");
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        else {
            throw Error("Rest method " + method + " not supported");
        }
    };
    RestProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RestProvider.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ RestProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(ɵɵinject(ConfigurationService), ɵɵinject(HttpClient)); }, token: RestProvider, providedIn: "root" });
    return RestProvider;
}());
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
 * Generated from: lib/common/services/communication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommunicationService = /** @class */ (function () {
    function CommunicationService(config, apollo, rest) {
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
    CommunicationService.prototype.request$ = /**
     * @param {?} requestId
     * @param {?=} options
     * @param {?=} provider
     * @return {?}
     */
    function (requestId, options, provider) {
        var _this = this;
        if (options === void 0) { options = {}; }
        provider = provider || this.defaultProvider;
        if (!this[provider])
            throw Error("There is no " + provider + " provider");
        var onError = options.onError;
        return this[provider].request$(requestId, options)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error, onError); })));
    };
    /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    CommunicationService.prototype.handleError = /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    function (error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    };
    CommunicationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommunicationService.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: ApolloProvider },
        { type: RestProvider }
    ]; };
    /** @nocollapse */ CommunicationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(ɵɵinject(ConfigurationService), ɵɵinject(ApolloProvider), ɵɵinject(RestProvider)); }, token: CommunicationService, providedIn: "root" });
    return CommunicationService;
}());
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
 * Generated from: lib/common/models/abstract-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AbstractLayout = /** @class */ (function () {
    function AbstractLayout(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    /**
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () { };
    ;
    /**
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.onInit = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.lb.eventHandler.emitInner('init', _this.initPayload());
        }));
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new this.config.layoutDS(),
            eventHandler: new this.config.layoutEH(),
        });
    };
    /**
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.onDestroy = /**
     * @protected
     * @return {?}
     */
    function () {
        this.lb.eventHandler.emitInner('destroy');
    };
    return AbstractLayout;
}());
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
 * Generated from: lib/common/layouts/main-layout/main-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainLayoutDS = /** @class */ (function (_super) {
    __extends(MainLayoutDS, _super);
    function MainLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    MainLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, route = _a.route;
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.options = options;
        this.mainState.addCustom('currentNav', new Subject());
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
        function (val) { return _this.titleService.setTitle(val); }));
        this.mainState.get$('pageTitle').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.pageTitle = val; }));
        this.mainState.get$('subnav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.one('subnav').update(val); }));
        this.mainState.get$('breadcrumbs').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.one('breadcrumbs').update(val); }));
        this.mainState.getCustom$('currentNav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.one('header').update({ "items": _this.configuration.get('header'), 'selected': val }); }));
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
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    MainLayoutDS.prototype.onNavigate = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        // router navigation
        if (payload.handler === 'router') {
            var path = payload.path, queryParams = payload.queryParams;
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
    };
    /**
     * @private
     * @return {?}
     */
    MainLayoutDS.prototype._onRouterNavigate = /**
     * @private
     * @return {?}
     */
    function () {
        // hide tippy
        tippy.hideAll();
    };
    return MainLayoutDS;
}(LayoutDataSource));
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
 * Generated from: lib/common/services/json-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonConfigService = /** @class */ (function () {
    function JsonConfigService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    JsonConfigService.prototype.load = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return this.http.get(path).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of({}); })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this._handleResponse(response); }))).toPromise();
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    JsonConfigService.prototype._handleResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.config.set(key, response[key]); }));
            // config keys colors
            if (response['config-keys']) {
                /** @type {?} */
                var headTag = document.querySelector('head');
                /** @type {?} */
                var styleElement = document.createElement('style');
                /** @type {?} */
                var styles_1 = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var configKey = response['config-keys'][key] || {};
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles_1.push("--color-" + key + ": " + configKey.color.hex + ";");
                    }
                }));
                if (styles_1.length) {
                    styles_1.unshift(':root {');
                    styles_1.push('}');
                    styleElement.appendChild(document.createTextNode(styles_1.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    };
    JsonConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ JsonConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
    return JsonConfigService;
}());
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
 * Generated from: lib/common/models/facet-inputs/facet-input.ts
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
var FacetInput = /** @class */ (function () {
    function FacetInput(config) {
        var _this = this;
        this.update = (/**
         * @return {?}
         */
        function () { return _this.output = _this.transform(); });
        this.getId = (/**
         * @return {?}
         */
        function () { return _this.id; });
        this.getData = (/**
         * @return {?}
         */
        function () { return _this.data; });
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this.config; });
        this.getFacetId = (/**
         * @return {?}
         */
        function () { return _this.config.facetId; });
        this.getInputIndex = (/**
         * @return {?}
         */
        function () { return _this.config.inputIndex; });
        this.getSectionIndex = (/**
         * @return {?}
         */
        function () { return _this.config.sectionIndex; });
        this.getContext = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.context || 'external'; });
        this.getTarget = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.target || null; });
        this.getSearchIn = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.searchIn || null; });
        this.getType = (/**
         * @return {?}
         */
        function () { return _this.config.type; });
        this.getOutput = (/**
         * @return {?}
         */
        function () { return _this.output; });
        this.setData = (/**
         * @param {?} newData
         * @return {?}
         */
        function (newData) { return _this.data = newData; });
        this.config = config;
        this._setId();
        FacetInput.index++;
    }
    /**
     * @private
     * @return {?}
     */
    FacetInput.prototype._setId = /**
     * @private
     * @return {?}
     */
    function () {
        this.id = "facet-input-" + this.getType() + "-" + FacetInput.index;
    };
    ;
    FacetInput.index = 0;
    return FacetInput;
}());
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
    FacetInput.prototype.setData;
    /* Skipping unhandled member: ;*/
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
 * Generated from: lib/common/models/facet-inputs/facet-input-checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetInputCheckbox = /** @class */ (function (_super) {
    __extends(FacetInputCheckbox, _super);
    function FacetInputCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputCheckbox.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @param {?} index
         * @return {?}
         */
        function (_a, index) {
            var label = _a.label, value = _a.value;
            // normalize value
            value = '' + value;
            return {
                type: 'checkbox',
                id: _this.getId() + '-' + index,
                label: label,
                payload: {
                    facetId: facetId,
                    source: 'input-checkbox',
                    value: value
                },
                _meta: { facetId: facetId, value: value }
            };
        }));
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputCheckbox.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        var isArray = this.config.filterConfig.isArray;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
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
    };
    return FacetInputCheckbox;
}(FacetInput));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetInputText = /** @class */ (function (_super) {
    __extends(FacetInputText, _super);
    function FacetInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputText.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var facetId = this.getFacetId();
        /** @type {?} */
        var payload = {
            facetId: facetId,
            source: 'input-text'
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: __assign({}, payload, { trigger: 'input' }),
            enterPayload: __assign({}, payload, { trigger: 'enter' }),
            iconPayload: __assign({}, payload, { trigger: 'icon' }),
            _meta: { facetId: facetId }
        };
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputText.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        this.output.value = facetValue || null;
    };
    return FacetInputText;
}(FacetInput));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetInputLink = /** @class */ (function (_super) {
    __extends(FacetInputLink, _super);
    function FacetInputLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputLink.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var facetId = this.getFacetId();
        return this.data.map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var label = _a.label, value = _a.value, counter = _a.counter, hidden = _a.hidden, options = _a.options;
            // normalize value
            value = '' + value;
            options = options || {};
            /** @type {?} */
            var classes = [];
            if (options.classes)
                classes.push(options.classes);
            if (hidden)
                classes.push('is-hidden');
            if (_this._isActive(_this.facetValue, value))
                classes.push('is-active');
            return {
                type: 'link',
                id: _this.getId(),
                text: label,
                counter: counter,
                payload: {
                    facetId: facetId,
                    source: 'input-link',
                    value: value
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId: facetId, value: value }
            };
        }));
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputLink.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        var _this = this;
        this.output.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var classes = config.classes ? config.classes.split(' ') : [];
            /** @type {?} */
            var isActive = _this._isActive(facetValue, config._meta.value);
            if (!isActive) {
                classes = classes.filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) { return className !== 'is-active'; }));
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        }));
    };
    /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    FacetInputLink.prototype._isActive = /**
     * @private
     * @param {?} facetValue
     * @param {?} value
     * @return {?}
     */
    function (facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1) ||
            (facetValue === value));
    };
    return FacetInputLink;
}(FacetInput));
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetInputLink.prototype.facetValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetInputSelect = /** @class */ (function (_super) {
    __extends(FacetInputSelect, _super);
    function FacetInputSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    FacetInputSelect.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var facetId = this.getFacetId();
        return {
            type: 'select',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            options: this.data.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var value = _a.value, label = _a.label;
                return ({
                    // normalize value
                    value: '' + value,
                    label: label
                });
            })),
            payload: {
                facetId: facetId,
                source: 'input-select',
            },
            _meta: { facetId: facetId }
        };
    };
    /**
     * @param {?} facetValue
     * @return {?}
     */
    FacetInputSelect.prototype.setActive = /**
     * @param {?} facetValue
     * @return {?}
     */
    function (facetValue) {
        this.output.options
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.value === facetValue; }))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.selected = true; }));
    };
    return FacetInputSelect;
}(FacetInput));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var INPUTS_MAP = {
    'checkbox': FacetInputCheckbox,
    'text': FacetInputText,
    'link': FacetInputLink,
    'select': FacetInputSelect,
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
var SearchModel = /** @class */ (function () {
    function SearchModel(id, config) {
        var _this = this;
        this._filters = [];
        this._facets = [];
        this._inputs = [];
        this._results$ = new Subject();
        this.getId = (/**
         * @return {?}
         */
        function () { return _this._id; });
        this.getFilters = (/**
         * @return {?}
         */
        function () { return _this._filters; });
        this.getFacets = (/**
         * @return {?}
         */
        function () { return _this._facets; });
        this.getInputs = (/**
         * @return {?}
         */
        function () { return _this._inputs; });
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this._config; });
        this.getTotalCount = (/**
         * @return {?}
         */
        function () { return _this._totalCount; });
        this.getFields = (/**
         * @return {?}
         */
        function () { return _this._config.fields; });
        this.getResults$ = (/**
         * @return {?}
         */
        function () { return _this._results$; });
        this.setResults = (/**
         * @param {?} results
         * @return {?}
         */
        function (results) { return _this._results$.next(results); });
        this._id = id;
        this._config = config;
        this._setFilters();
        this._setFacets();
        this._setPage();
        this._setInputs();
        this._setInputsData();
        this._setTotalCount();
    }
    /**
     * @param {?} facetId
     * @param {?} value
     * @param {?=} remove
     * @return {?}
     */
    SearchModel.prototype.updateFilter = /**
     * @param {?} facetId
     * @param {?} value
     * @param {?=} remove
     * @return {?}
     */
    function (facetId, value, remove) {
        /** @type {?} */
        var selectedFilters = this.getFiltersByFacetId(facetId);
        selectedFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (Array.isArray(filter.value) && remove) {
                filter.value = filter.value.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== value; }));
            }
            else if (Array.isArray(filter.value) && filter.value.indexOf(value) === -1) {
                filter.value.push(value);
            }
            else {
                filter.value = !remove ? value : null;
            }
        }));
    };
    /**
     * @param {?} queryParams
     * @return {?}
     */
    SearchModel.prototype.updateFiltersFromQueryParams = /**
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        var _this = this;
        Object.keys(queryParams).forEach((/**
         * @param {?} facetId
         * @return {?}
         */
        function (facetId) {
            /** @type {?} */
            var selectedFilters = _this.getFiltersByFacetId(facetId);
            /** @type {?} */
            var value = queryParams[facetId];
            selectedFilters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                filter.value = filter.isArray ? value.split(',') : value;
            }));
        }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.updateInputsFromFilters = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._filters.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var facetId = _a.facetId, value = _a.value;
            _this.getInputByFacetId(facetId).setActive(value);
        }));
    };
    /**
     * @param {?} facets
     * @return {?}
     */
    SearchModel.prototype.updateFacets = /**
     * @param {?} facets
     * @return {?}
     */
    function (facets) {
        var _this = this;
        facets.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, data = _a.data;
            return _this.updateFacet(id, data);
        }));
        this._setInputsData();
    };
    /**
     * @param {?} totalCount
     * @return {?}
     */
    SearchModel.prototype.updateTotalCount = /**
     * @param {?} totalCount
     * @return {?}
     */
    function (totalCount) {
        this._totalCount = totalCount;
    };
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    SearchModel.prototype.updateFacet = /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    function (facetId, data) {
        /** @type {?} */
        var selectedFacets = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === facetId; }));
        if (!selectedFacets.length) {
            throw Error("Facet with id \"" + facetId + "\" does not exists");
        }
        selectedFacets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.data = data; }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.reset = /**
     * @return {?}
     */
    function () {
        this._filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return filter.value = null; }));
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.getRequestParams = /**
     * @return {?}
     */
    function () {
        return {
            facets: this._facets,
            page: this._page,
            results: this._config.results,
            filters: this._filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return filter.context !== 'internal'; }))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
                return ({ facetId: facetId, value: value, searchIn: searchIn });
            }))
        };
    };
    /**
     * @return {?}
     */
    SearchModel.prototype.getInternalFilters = /**
     * @return {?}
     */
    function () {
        return this._filters
            .filter((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            return (filter.context === 'internal') && ((Array.isArray(filter.value) && filter.value.length) ||
                (!Array.isArray(filter.value) && filter.value));
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
            return ({ facetId: facetId, value: value, searchIn: searchIn });
        }));
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    SearchModel.prototype.filtersAsQueryParams = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        /** @type {?} */
        var queryParams = {};
        filters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return queryParams[filter.facetId] = Array.isArray(filter.value) ? filter.value.join(',') : filter.value; }));
        return queryParams;
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    SearchModel.prototype.getFiltersByFacetId = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        return this._filters.filter((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return filter.facetId === facetId; }));
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    SearchModel.prototype.getInputByFacetId = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        return this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getFacetId() === facetId; }))[0];
    };
    /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    SearchModel.prototype.setInputData = /**
     * @param {?} facetId
     * @param {?} data
     * @return {?}
     */
    function (facetId, data) {
        this.getInputByFacetId(facetId).setData(data);
    };
    /**
     * @param {?} target
     * @return {?}
     */
    SearchModel.prototype.filterTarget = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        /** @type {?} */
        var inputs = this._inputs.filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getTarget() === target; }));
        /** @type {?} */
        var targetInput = this.getInputByFacetId(target);
        /** @type {?} */
        var facet = this._facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === target; }))[0];
        /** @type {?} */
        var facetData = facet.data;
        /** @type {?} */
        var searchIns = [];
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            /** @type {?} */
            var filter = _this.getFiltersByFacetId(input.getFacetId())[0];
            /** @type {?} */
            var searchIn = input.getSearchIn();
            /** @type {?} */
            var value = filter.value;
            searchIns.push([searchIn, value]);
        }));
        // filter
        facetData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._filterData(searchIns, item); }));
        // update
        targetInput.setData(facetData);
        targetInput.update();
    };
    /**
     * @param {?} orderBy
     * @return {?}
     */
    SearchModel.prototype.setSearchConfigOrderBy = /**
     * @param {?} orderBy
     * @return {?}
     */
    function (orderBy) {
        this._config.results.order.type = orderBy;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    SearchModel.prototype.setSearchConfigDirection = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this._config.results.order.direction = direction;
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    SearchModel.prototype.setPageConfigOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this._config.page.offset = offset;
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    SearchModel.prototype.setPageConfigLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._config.page.limit = limit;
    };
    /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    SearchModel.prototype._filterData = /**
     * @private
     * @param {?} searchIns
     * @param {?} item
     * @return {?}
     */
    function (searchIns, item) {
        searchIns.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), searchIn = _b[0], value = _b[1];
            searchIn.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key, operator = _a.operator;
                switch (operator) {
                    // '=' EQUALS
                    case '=':
                        if (Array.isArray(value)) {
                            item.hidden = !(!value.length || value.indexOf(item.metadata[key]) !== -1);
                        }
                        else {
                            item.hidden = !(value && value === item.metadata[key]);
                        }
                        break;
                    // '>' GREATER THAN
                    case '>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value > item.metadata[key]);
                        }
                        break;
                    // '<' LESS THAN
                    case '<':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value < item.metadata[key]);
                        }
                        break;
                    // '>=' GREATER OR EQUALS
                    case '>=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value >= item.metadata[key]);
                        }
                        break;
                    // '<=' LESS OR EQUALS
                    case '<=':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value <= item.metadata[key]);
                        }
                        break;
                    // '<>' NOT EQUAL
                    case '<>':
                        if (!Array.isArray(value)) {
                            item.hidden = !(value && value !== item.metadata[key]);
                        }
                        break;
                    //  'LIKE'
                    case 'LIKE':
                        if (value &&
                            item.metadata[key] &&
                            typeof value === 'string' &&
                            typeof item.metadata[key] === 'string') {
                            /** @type {?} */
                            var haystack = item.metadata[key].toLowerCase();
                            /** @type {?} */
                            var needle = value.toLocaleLowerCase();
                            item.hidden = !(haystack.indexOf(needle) !== -1);
                        }
                        break;
                    default:
                        console.warn("SearchIn: operator " + operator + " not supported");
                        break;
                }
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setFilters = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            field.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return _this._filters.push(__assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null })); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setFacets = /**
     * @private
     * @return {?}
     */
    function () {
        this._facets = this._config.facets;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setPage = /**
     * @private
     * @return {?}
     */
    function () {
        this._page = this._config.page;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setTotalCount = /**
     * @private
     * @return {?}
     */
    function () {
        this._totalCount = this._config.totalCount;
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setInputs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._config.fields.forEach((/**
         * @param {?} sectionConfig
         * @param {?} sectionIndex
         * @return {?}
         */
        function (sectionConfig, sectionIndex) {
            sectionConfig.inputs.forEach((/**
             * @param {?} inputConfig
             * @param {?} inputIndex
             * @return {?}
             */
            function (inputConfig, inputIndex) {
                /** @type {?} */
                var inputModel = INPUTS_MAP[inputConfig.type];
                if (!inputModel)
                    throw Error("Input type " + inputConfig.type + " not supported");
                _this._inputs.push(new inputModel(__assign({}, inputConfig, { inputIndex: inputIndex, sectionIndex: sectionIndex })));
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchModel.prototype._setInputsData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._facets.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return _this.setInputData(facet.id, facet.data); }));
    };
    return SearchModel;
}());
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
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._models = {};
    }
    /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    SearchService.prototype.add = /**
     * @param {?} id
     * @param {?} config
     * @return {?}
     */
    function (id, config) {
        if (this._models[id])
            throw Error("Search model \"" + id + "\" already exists!");
        this._models[id] = new SearchModel(id, config);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SearchService.prototype.model = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._models[id] || null;
    };
    SearchService.queryParams = null;
    SearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SearchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
    return SearchService;
}());
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
 * Generated from: lib/common/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainLayoutEH = /** @class */ (function (_super) {
    __extends(MainLayoutEH, _super);
    function MainLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MainLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'main-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.route = payload.route;
                    _this.router = payload.router;
                    _this._listenRouterChanges();
                    break;
                case 'main-layout.destroy':
                    _this.destroyed$.next();
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.navigate':
                    _this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MainLayoutEH.prototype._listenRouterChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.queryParams.pipe(filter((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (Object.keys(params).length)
                return true;
            return false;
        }))).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.emitGlobal('queryparams', params);
            // to use in searchs
            SearchService.queryParams = params;
        }));
    };
    return MainLayoutEH;
}(EventHandler));
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
    MainLayoutEH.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/header.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderDS = /** @class */ (function (_super) {
    __extends(HeaderDS, _super);
    function HeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    HeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.selected) {
            this.selectNavItem(data.selected);
        }
        return data.items;
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    HeaderDS.prototype.selectNavItem = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.classes = "";
            if (item.payload == selectedItem) {
                item.classes = "is-current";
            }
        }));
        this.update({ 'items': this.output });
    };
    return HeaderDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/subnav.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SubnavDS = /** @class */ (function (_super) {
    __extends(SubnavDS, _super);
    function SubnavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    SubnavDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            classes: 'main-subnav',
            items: data
        };
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SubnavDS.prototype.setActive = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.output.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item._meta.id === id) {
                item.classes = 'is-current';
                item._meta.isActive = true;
            }
            else {
                item.classes = '';
                item._meta.isActive = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    SubnavDS.prototype.getActive = /**
     * @return {?}
     */
    function () {
        return this.output.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._meta.isActive; }))[0] || null;
    };
    return SubnavDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/breadcrumbs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbsDS = /** @class */ (function (_super) {
    __extends(BreadcrumbsDS, _super);
    function BreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    BreadcrumbsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    return BreadcrumbsDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetsDS = /** @class */ (function (_super) {
    __extends(FacetsDS, _super);
    function FacetsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    FacetsDS.prototype.transform = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var fields = _a.fields;
        var searchModel = this.options.searchModel;
        this.searchModel = searchModel;
        return fields;
    };
    return FacetsDS;
}(DataSource));
if (false) {
    /** @type {?} */
    FacetsDS.prototype.searchModel;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HEADER_ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
var HEADER_ICON_CLOSE = 'n7-icon-angle-right';
var FacetsWrapperDS = /** @class */ (function (_super) {
    __extends(FacetsWrapperDS, _super);
    function FacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRequestParams = (/**
         * @return {?}
         */
        function () { return _this.searchModel.getRequestParams(); });
        _this.filtersAsQueryParams = (/**
         * @param {?} filters
         * @return {?}
         */
        function (filters) { return _this.searchModel.filtersAsQueryParams(filters); });
        _this.updateFiltersFromQueryParams = (/**
         * @param {?} queryParams
         * @return {?}
         */
        function (queryParams) { return _this.searchModel.updateFiltersFromQueryParams(queryParams); });
        _this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        function (facetId) { return _this.searchModel.getInputByFacetId(facetId); });
        _this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        function (target) { return _this.searchModel.filterTarget(target); });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    FacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
        }
        /** @type {?} */
        var id = this.searchModel.getId();
        /** @type {?} */
        var fields = this.searchModel.getFields();
        /** @type {?} */
        var groups = [];
        fields.forEach((/**
         * @param {?} fieldConfig
         * @param {?} fieldIndex
         * @return {?}
         */
        function (fieldConfig, fieldIndex) {
            /** @type {?} */
            var groupId = "group-" + id + "-" + fieldIndex;
            // header config
            /** @type {?} */
            var header = _this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            /** @type {?} */
            var sections = [];
            _this.searchModel.getInputs()
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.getSectionIndex() === fieldIndex; }))
                .map((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
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
            function (_a) {
                var type = _a.type, output = _a.output, facetId = _a.facetId;
                sections.push({
                    classes: _this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId: facetId
                    }
                });
            }));
            groups.push({
                header: header,
                facet: { sections: sections },
                classes: "n7-facets-wrapper__" + groupId,
                isOpen: true,
                _meta: {
                    groupId: groupId
                }
            });
        }));
        // query params control
        if (SearchService.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
            this.searchModel.updateInputsFromFilters();
            // reset queryparams
            SearchService.queryParams = null;
        }
        return {
            groups: groups,
            classes: "n7-facets-wrapper__" + this.searchModel.getId()
        };
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FacetsWrapperDS.prototype.toggleGroup = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var eventPayload = _a.eventPayload;
        this.output.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        }));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FacetsWrapperDS.prototype.onFacetChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var eventPayload = _a.eventPayload;
        var _b = eventPayload.inputPayload, facetId = _b.facetId, source = _b.source, trigger = _b.trigger;
        /** @type {?} */
        var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || {};
        /** @type {?} */
        var filterValue = filter['value'];
        /** @type {?} */
        var remove = false;
        /** @type {?} */
        var value = eventPayload.inputPayload.value || eventPayload.value;
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
    };
    /**
     * @param {?} target
     * @return {?}
     */
    FacetsWrapperDS.prototype.updateFilteredTarget = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        function (group) { return group.facet; }))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.sections; }))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        function (sections) {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                if (section._meta.facetId === target) {
                    /** @type {?} */
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    FacetsWrapperDS.prototype.updateInputLinks = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var linksFacetIds = this.searchModel.getInputs()
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getType() === 'link'; }))
            .map((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getFacetId(); }));
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        function (group) { return group.facet; }))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.sections; }))
            .map((/**
         * @param {?} sections
         * @return {?}
         */
        function (sections) {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    /** @type {?} */
                    var input = _this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    /** @type {?} */
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    FacetsWrapperDS.prototype.updateInputsFromFilters = /**
     * @return {?}
     */
    function () {
        this.searchModel.updateInputsFromFilters();
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    FacetsWrapperDS.prototype._getSectionClasses = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var classesMap = {
            'text': 'text',
            'checkbox': 'checkboxes',
            'link': 'links',
            'select': 'select'
        };
        return "n7-facet__section-input-" + classesMap[type];
    };
    /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    FacetsWrapperDS.prototype._headerConfig = /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    function (header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: groupId + "-header",
                groupId: groupId
            },
            _meta: {
                id: groupId + "-header"
            }
        } : null;
    };
    return FacetsWrapperDS;
}(DataSource));
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
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/footer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterDS = /** @class */ (function (_super) {
    __extends(FooterDS, _super);
    function FooterDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    FooterDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!data) {
            return;
        }
        return data.items;
    };
    return FooterDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HeaderDS: HeaderDS,
    SubnavDS: SubnavDS,
    BreadcrumbsDS: BreadcrumbsDS,
    FacetsDS: FacetsDS,
    FacetsWrapperDS: FacetsWrapperDS,
    FooterDS: FooterDS
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/header.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderEH = /** @class */ (function (_super) {
    __extends(HeaderEH, _super);
    function HeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    HeaderEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'header.click':
                    // navigate control
                    // if(payload.source === 'navigate'){
                    _this.dataSource.selectNavItem(payload);
                    _this.emitGlobal('navigate', {
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
    };
    return HeaderEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/subnav.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SubnavEH = /** @class */ (function (_super) {
    __extends(SubnavEH, _super);
    function SubnavEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SubnavEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'subnav.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        _this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    _this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return SubnavEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/breadcrumbs.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbsEH = /** @class */ (function (_super) {
    __extends(BreadcrumbsEH, _super);
    function BreadcrumbsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    BreadcrumbsEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'breadcrumbs.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        _this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    _this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return BreadcrumbsEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetsEH = /** @class */ (function (_super) {
    __extends(FacetsEH, _super);
    function FacetsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FacetsEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                // TODO
                default:
                    break;
            }
        }));
    };
    return FacetsEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetsWrapperEH = /** @class */ (function (_super) {
    __extends(FacetsWrapperEH, _super);
    function FacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._facetsChanged = false;
        return _this;
    }
    /**
     * @return {?}
     */
    FacetsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to inner (widget) events
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facet':
                    var facetId = payload.eventPayload.inputPayload.facetId;
                    /** @type {?} */
                    var input = _this.dataSource.getInputByFacetId(facetId);
                    /** @type {?} */
                    var context = input.getContext();
                    _this._facetsChanged = true;
                    // update
                    _this.dataSource.onFacetChange(payload);
                    // internal
                    if (context === 'internal') {
                        _this.dataSource.filterTarget(input.getTarget());
                        _this.dataSource.updateFilteredTarget(input.getTarget());
                        // external
                    }
                    else {
                        /** @type {?} */
                        var requestParams = _this.dataSource.getRequestParams();
                        /** @type {?} */
                        var queryParams_1 = _this.dataSource.filtersAsQueryParams(requestParams.filters);
                        Object.keys(queryParams_1).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) { return queryParams_1[key] = queryParams_1[key] || null; }));
                        // signal
                        _this.emitOuter('facetschange');
                        // router signal
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [],
                            queryParams: queryParams_1
                        });
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    _this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.searchresponse':
                    if (_this.dataSource.searchModel.getId() === payload) {
                        _this.dataSource.updateInputLinks();
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    return FacetsWrapperEH;
}(EventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype._facetsChanged;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/footer.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterEH = /** @class */ (function (_super) {
    __extends(FooterEH, _super);
    function FooterEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FooterEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
    };
    return FooterEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HeaderEH: HeaderEH,
    SubnavEH: SubnavEH,
    BreadcrumbsEH: BreadcrumbsEH,
    FacetsEH: FacetsEH,
    FacetsWrapperEH: FacetsWrapperEH,
    FooterEH: FooterEH
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MainLayoutConfig = {
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
 * Generated from: lib/common/layouts/main-layout/main-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainLayoutComponent = /** @class */ (function (_super) {
    __extends(MainLayoutComponent, _super);
    function MainLayoutComponent(router, route, configuration, layoutsConfiguration, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('MainLayoutConfig') || MainLayoutConfig) || this;
        _this.router = router;
        _this.route = route;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MainLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MainLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'main-layout',
                    template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer \n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MainLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    return MainLayoutComponent;
}(AbstractLayout));
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
 * Generated from: lib/common/layouts/page404-layout/page404-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Page404LayoutDS = /** @class */ (function (_super) {
    __extends(Page404LayoutDS, _super);
    function Page404LayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    Page404LayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var options = _a.options;
        this.options = options;
    };
    return Page404LayoutDS;
}(LayoutDataSource));
if (false) {
    /** @type {?} */
    Page404LayoutDS.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/page404-layout/page404-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Page404LayoutEH = /** @class */ (function (_super) {
    __extends(Page404LayoutEH, _super);
    function Page404LayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    Page404LayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'n7-page404-layout.init':
                    _this.dataSource.onInit(payload);
                    break;
                case 'n7-page404-layout.destroy':
                    _this.destroyed$.next();
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
    };
    return Page404LayoutEH;
}(EventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    Page404LayoutEH.prototype.destroyed$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/page404-layout/page404-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Page404LayoutConfig = {
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
 * Generated from: lib/common/layouts/page404-layout/page404-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Page404LayoutComponent = /** @class */ (function (_super) {
    __extends(Page404LayoutComponent, _super);
    function Page404LayoutComponent(layoutsConfiguration) {
        return _super.call(this, layoutsConfiguration.get('Page404LayoutConfig') || Page404LayoutConfig) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    Page404LayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    Page404LayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    Page404LayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    Page404LayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-page404-layout',
                    template: "<div class=\"n7-page404-layout\">\n    404 - Resource not found\n</div>"
                }] }
    ];
    /** @nocollapse */
    Page404LayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService }
    ]; };
    return Page404LayoutComponent;
}(AbstractLayout));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/facets-wrapper/facets-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetsWrapperComponent = /** @class */ (function () {
    function FacetsWrapperComponent() {
    }
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.headerEmit = /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    function (eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facetheader', { eventType: eventType, eventPayload: eventPayload });
    };
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.facetEmit = /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    function (eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facet', { eventType: eventType, eventPayload: eventPayload });
    };
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
    return FacetsWrapperComponent;
}());
if (false) {
    /** @type {?} */
    FacetsWrapperComponent.prototype.data;
    /** @type {?} */
    FacetsWrapperComponent.prototype.emit;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/n7-boilerplate-common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
    FacetsWrapperComponent,
];
var N7BoilerplateCommonModule = /** @class */ (function () {
    function N7BoilerplateCommonModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    N7BoilerplateCommonModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
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
    };
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
    return N7BoilerplateCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/about-layout/about-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwAboutLayoutDS = /** @class */ (function (_super) {
    __extends(AwAboutLayoutDS, _super);
    function AwAboutLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AwAboutLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        // TODO
    };
    return AwAboutLayoutDS;
}(LayoutDataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/about-layout/about-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwAboutLayoutEH = /** @class */ (function (_super) {
    __extends(AwAboutLayoutEH, _super);
    function AwAboutLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwAboutLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        /* this.innerEvents$.subscribe(({ type, payload }) => {
          
        }); */
        /* this.outerEvents$.subscribe(({ type, payload }) => {
          
        }); */
    };
    return AwAboutLayoutEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var helpers = {
    prettifySnakeCase: /**
     * @param {?} key
     * @param {?=} label
     * @return {?}
     */
    function (key, label) {
        var _this = this;
        if (label) {
            return label;
        }
        return key.split('_').map((/**
         * @param {?} word
         * @param {?} index
         * @return {?}
         */
        function (word, index) { return index === 0 ? _this.ucFirst(word) : word; })).join(' ');
    },
    ucFirst: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/linked-objects.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// used for cherry-picking object keys from app-config.json
var  
// used for cherry-picking object keys from app-config.json
AwLinkedObjectsDS = /** @class */ (function (_super) {
    __extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingData = false;
        _this.checkForMore = (/**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!_this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                _this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (_this.loadedData.result.length >= _this.totalObjects) {
                _this.loadedData.actions[1].disabled = true;
            }
            else {
                _this.loadedData.actions[1].disabled = false;
            }
            return;
        });
        _this.handleIncomingData = (/**
         * @param {?} incomingData
         * @return {?}
         */
        function (incomingData) {
            /*
              Called by button <Mostra Altri>, adds the incoming
              data to the linked objects component.
            */
            _this.currentPage += 1;
            /** @type {?} */
            var newData = _this.unpackData(incomingData.itemsPagination);
            _this.loadedData.result = _this.loadedData.result.concat(newData.result);
            _this.checkForMore();
            _this.loadedData.isLoading = false;
        });
        _this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        function (page, totalPages, size) {
            /** @type {?} */
            var sizeOptions = [10, 25, 50];
            _this.loadedData.pagination = {
                first: { payload: "goto-" + 1, classes: page == 1 ? 'is-disabled' : '' },
                prev: { payload: "goto-" + (page / 1 - 1), classes: page == 1 ? 'is-disabled' : '' },
                next: { payload: "goto-" + (page / 1 + 1), classes: page == totalPages ? 'is-disabled' : '' },
                last: { payload: "goto-" + totalPages, classes: page == totalPages ? 'is-disabled' : '' },
                links: _this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return {
                            text: o,
                            selected: o == size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        _this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        function (totalPages, currentPage) {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var limit = _this.paths.paginationLimit - 1
            // always push the first page
            ;
            // always push the first page
            if (limit) {
                /** @type {?} */
                var lastPage = void 0;
                /** @type {?} */
                var firstPage = void 0;
                if (currentPage > Math.floor(limit / 2)) {
                    // when currentPage is after half-point
                    // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    if (currentPage < (totalPages - Math.floor(limit / 2))) {
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
                // console.log({ currentPage, limit, lastPage, firstPage })
                for (var i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: 'page-' + String(i),
                        classes: currentPage == i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage == 1 ? 'is-active' : ''
                });
                for (var i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
        _this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            /** @type {?} */
            var config = _this.options.config;
            /** @type {?} */
            var // app-config.json
            paths = config.get('item-preview');
            /** @type {?} */
            var // item preview dynamic paths
            totalCount = data.totalCount;
            /** @type {?} */
            var // total amount of items available on backend
            totalPages = _this.totalPages;
            /** @type {?} */
            var // calculated number of pages
            page = _this.currentPage;
            /** @type {?} */
            var // current page (if using pagination)
            context = _this.context;
            /** @type {?} */
            var // parent layout name
            size = _this.pageSize;
            /** @type {?} */
            var // items per page (if using pagination)
            labels = config.get("labels");
            /** @type {?} */
            var d = data.items ? data.items : data.relatedItems // items to iterate over
            ;
            if (config) {
                /** @type {?} */
                var keys = config.get('config-keys')
                // dynamic search for max-item-length
                ;
                // dynamic search for max-item-length
                if (config.get(context + '-layout')) {
                    /** @type {?} */
                    var lengthLimit = config.get(context + '-layout')['max-item-length'];
                    /** @type {?} */
                    var resultsLimit = config.get(context + '-layout')['results-limit'];
                }
            }
            // resize data
            if (size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            /** @type {?} */
            var result = [];
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                /** @type {?} */
                var item = {
                    image: get(el, paths.image, el.image),
                    title: 
                    // if there is a max string length in config, use it
                    +paths.title.maxLength && get(el, paths.title, el.item.label).length > +paths.title.maxLength ?
                        get(el, paths.title, el.item.label).slice(0, +paths.title.maxLength) + '…' :
                        get(el, paths.title, el.item.label),
                    text: !paths.text ? null : // make text block (in config) optional
                        +paths.text.maxLength && get(el, paths.text.data, el.item.text).length > +paths.text.maxLength ?
                            get(el, paths.text.data, el.item.text).slice(0, +paths.text.maxLength) + '…' :
                            get(el, paths.text.data, el.item.text),
                    payload: get(el, paths.payload, el.item.id),
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        get(el, paths.metadata.info.data, el.item.fields) ? {
                            classes: 'n7-objects__metadata-artist',
                            items: get(el, paths.metadata.info.data, el.item.fields).map((/**
                             * @param {?} data
                             * @return {?}
                             */
                            function (data) {
                                for (var i = 0; i < paths.metadata.info.selection.length; i++) {
                                    if (data.key == paths.metadata.info.selection[i].key) { // if the selected key (config) is in data, use it
                                        return ({
                                            label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                                            value: data.value
                                        });
                                    }
                                }
                                return {}; // if no data was found for this key, return empty object.
                            }))
                        } : {},
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: get(el, paths.metadata.toe.data, el.relatedTypesOfEntity) ?
                                get(el, paths.metadata.toe.data, el.relatedTypesOfEntity).map((/**
                                 * @param {?} toe
                                 * @return {?}
                                 */
                                function (toe) {
                                    return {
                                        // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                        value: get(toe, paths.metadata.toe.value, toe.count),
                                        // icon: 'n7-icon-bell' // TODO: link icon to config key
                                        icon: keys[get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")] ? keys[get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")].icon : "",
                                        classes: 'color-' + get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")
                                    };
                                })) : null
                        }
                    ]
                };
                if (get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs)) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        function (crumb) {
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
                var actions = [
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
                    result: result,
                    actions: actions,
                    isLoading: false,
                };
            }
            return { previews: result };
        });
        return _this;
    }
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwLinkedObjectsDS.prototype.transform = 
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? (/** @type {?} */ (this.options.page)) : 1;
        if (data.items) {
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
    };
    return AwLinkedObjectsDS;
}(DataSource));
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
 * Generated from: lib/arianna-web/data-sources/autocomplete-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwAutocompleteWrapperDS = /** @class */ (function (_super) {
    __extends(AwAutocompleteWrapperDS, _super);
    function AwAutocompleteWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwAutocompleteWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var key = data.key, response = data.response;
        /** @type {?} */
        var regex = new RegExp('(.*?)' + key + '(.*)', 'i') // 'i' = case insensitive
        ;
        // 'i' = case insensitive
        /** @type {?} */
        var suggestion = [];
        /** @type {?} */
        var config = this.options.config;
        /** @type {?} */
        var maxLength = config.get('home-layout')['max-item-length'] / 2;
        /** @type {?} */
        var fResults = response.results.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return typeof el.entity == 'object'; })) // filter only entities (no cultural objects)
        ;
        fResults.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            if (el.entity.id == 'fallback') { // build and return fallback data
                suggestion.push({
                    match: '',
                    payload: 'fallback-simple-autocomplete',
                    prefix: el.entity.label,
                    suffix: ''
                });
                return { suggestion: suggestion };
            }
            // divide prefix and suffix
            // let match = el.item.label.match(regex)
            /** @type {?} */
            var match = regex.exec(el.entity.label);
            if (match) {
                /** @type {?} */
                var prefix = match[1];
                /** @type {?} */
                var suffix = match[2]
                // string manipulation
                ;
                // string manipulation
                if (maxLength && (prefix.length > maxLength)) {
                    prefix = '...' + prefix.slice(prefix.length - maxLength, prefix.length);
                }
                if (maxLength && (suffix.length > maxLength)) {
                    suffix = suffix.slice(0, maxLength) + '...';
                }
                suggestion.push({
                    match: match.input.slice(match[1].length, match[1].length + key.length),
                    prefix: prefix,
                    suffix: suffix,
                    payload: el.entity.id
                });
            }
        }));
        return { suggestion: suggestion };
    };
    return AwAutocompleteWrapperDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwBubbleChartDS = /** @class */ (function (_super) {
    __extends(AwBubbleChartDS, _super);
    function AwBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thresholdShowTitle = 50;
        _this.thresholdShowValue = 60;
        _this.allBubbles = null;
        _this.entityBubbleIdMap = {};
        _this.selectedBubbles = [];
        _this.facetData = null;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this._bubbleChart = null;
        _this.maxBubblesSelectable = 3;
        _this.windowResizeSet = false;
        _this.maxBubbleRadius = 100;
        _this.minBubbleRadius = 10;
        _this.maxBubbleTextRadiusRatio = 6;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data) {
            return null;
        }
        this.destroyTooltip();
        this.facetData = data.facetData ? data.facetData : [];
        this.tippy = tippy;
        data.bubbles = this.filterBubblesBasedOnFacetsEnabled();
        /** @type {?} */
        var bubbleCointainer = document.getElementById(this.options.containerId);
        /** @type {?} */
        var cWidth = data.width ? data.width : bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        /** @type {?} */
        var bubblesData = {
            containerId: this.options.bubbleContainerId,
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        /** @type {?} */
        var maxBubbleCount = -1;
        /** @type {?} */
        var minBubbleCount = -1;
        /** @type {?} */
        var numOfBubbles = 0;
        /** @type {?} */
        var totalCount = 0;
        /** @type {?} */
        var numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            if (maxBubbleCount < bubble.count)
                maxBubbleCount = bubble.count;
            if (minBubbleCount < 0 || minBubbleCount > bubble.count)
                minBubbleCount = bubble.count;
            numOfBubbles++;
            totalCount += bubble.count;
            if (bubble.selected)
                numOfSelectedBubbles++;
        }));
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
            /** @type {?} */
            var bubbleAverage = totalCount / numOfBubbles;
            /** @type {?} */
            var bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            //to understand if there is a large difference of count between bubbles
            /** @type {?} */
            var coeff = maxBubbleCount / bubbleAverage;
            /* if ( coeff > 20 ) {
              if ( bubble.count - coeff >= 0 ){
                bubblePercentage = ( (bubble.count) - (minBubbleCount/3) )/( (maxBubbleCount*3) - (minBubbleCount/3) )
              } else {
              }
              bubblePercentage = ( (bubble.count - (minBubbleCount/3)) - (minBubbleCount/3) )/( ((maxBubbleCount - coeff) *3) - (minBubbleCount/3) )
            }*/
            /* In case of few bubbles */
            if (coeff > 1) {
                bubblePercentage = (bubble.count * (coeff / 3) - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            }
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            if (bubbleRadius > _this.maxBubbleRadius) {
                bubbleRadius = _this.maxBubbleRadius;
            }
            else if (bubbleRadius < _this.minBubbleRadius) {
                bubbleRadius = _this.minBubbleRadius;
            }
            //console.log("bubble text " +  bubble.entity.label +" bubble length " +  bubble.entity.label.length + " radius: " + bubbleRadius + " limit: " + this.thresholdShowTitle  )
            /** @type {?} */
            var label = bubble.entity.label;
            /** @type {?} */
            var texts = [];
            // check if text is larger than radius
            if (bubbleRadius / bubble.entity.label.length < _this.maxBubbleTextRadiusRatio) {
                /** @type {?} */
                var index = bubbleRadius / _this.maxBubbleTextRadiusRatio;
                /** @type {?} */
                var spaceIndex = bubble.entity.label.indexOf(" ", index - 5);
                /** @type {?} */
                var label1_1 = bubble.entity.label.slice(0, spaceIndex);
                /** @type {?} */
                var label2_1 = bubble.entity.label.slice(spaceIndex, index * 2);
                //label = [bubble.entity.label.slice(0, index), "\n", bubble.entity.label.slice(index)].join('');
                texts.push({
                    id: bId + "_label0",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label1_1; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.x; }),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) {
                        /** @type {?} */
                        var mNum = (d.radius / 9);
                        if (d.radius < _this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum - 20;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.radius / 5; }),
                    color: "white",
                    "classes": ""
                }, {
                    id: bId + "_label01",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label2_1; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.x; }),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) {
                        /** @type {?} */
                        var mNum = (d.radius / 9);
                        if (d.radius < _this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.radius / 5; }),
                    color: "white",
                    "classes": ""
                });
            }
            else {
                texts.push({
                    id: bId + "_label0",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.x; }),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) {
                        /** @type {?} */
                        var mNum = (d.radius / 9);
                        if (d.radius < _this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.radius / 5; }),
                    color: "white",
                    "classes": ""
                });
            }
            /** @type {?} */
            var bubbleData = {
                id: bId,
                texts: __spread(texts, [
                    {
                        id: bId + "_label1",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowValue)
                            return null; return bubble.count; }),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.x; }),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.y + (d.radius / 9); }),
                        "user_select": "none",
                        //fontSize_function: (d) => d.radius/3,
                        color: "white",
                        "classes": "aw-bubble-num"
                    }
                ]),
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
        this.setWindowResize();
        return bubblesData;
    };
    /**
     * @param {?} data
     * @param {?=} reset
     * @return {?}
     */
    AwBubbleChartDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} data
     * @param {?=} reset
     * @return {?}
     */
    function (data, reset) {
        var _this = this;
        if (reset === void 0) { reset = true; }
        /** @type {?} */
        var response = data.source;
        // if ( !response || !response.entitiesData ) {return; }
        this.allBubbles = [];
        if (data.selectedBubbles) {
            this.selectedBubbles = data.selectedBubbles;
        }
        if (response.entitiesData) {
            for (var i = 0; i < response.entitiesData.length; i++) {
                this.allBubbles.push(__assign({}, response.entitiesData[i], { color: this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" }));
            }
        }
        else {
            for (var i = 0; i < response.relatedEntities.length; i++) {
                /** @type {?} */
                var color = this.options.configKeys ?
                    this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" :
                    null;
                this.allBubbles.push(__assign({ id: this.convertEntityIdToBubbleId(response.relatedEntities[i].entity.id) }, response.relatedEntities[i], { color: color }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            // d3/svg does not allow Number as beginning of ID.
            // d3/svg does not allow '-' as part of ID.
            bubble.id = _this.convertEntityIdToBubbleId(bubble.entity.id);
            _this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.selected = false;
            for (var i = 0; i < _this.selectedBubbles.length; i++) {
                if (_this.selectedBubbles[i].id === bubble.id) {
                    bubble.selected = true;
                }
            }
        }));
        if (reset) {
            this.update(data);
        }
    };
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    AwBubbleChartDS.prototype.convertEntityIdToBubbleId = /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        if (!entityId) {
            return null;
        }
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.replace(/ /g, '-') === _this.facetData[i].type.replace(/ /g, '-')) {
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
                }
            }
            if (count > _this.options.maxNumber) {
                return false;
            }
            count++;
            return true;
        }));
        return result;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleMouseEnter = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        var bubbleId = payload.bubble.id;
        /** @type {?} */
        var hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            var bubble = this.allBubbles[i];
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
        function () {
            /** @type {?} */
            var template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            var templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            _this.bubblePopup = _this.tippy("#" + bubbleId, {
                content: templateClone,
                allowHTML: true,
                trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                placement: 'top',
                maxWidth: 500,
            })[0];
            setTimeout((/**
             * @return {?}
             */
            function () { if (_this.bubblePopup)
                _this.bubblePopup.show(); }), 800);
        }));
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.destroyTooltip = /**
     * @return {?}
     */
    function () {
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (payload._bubbleChart) {
                    payload._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        return bubble_1;
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    //return this.filterRequest();
                }
            }
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwBubbleChartDS.prototype.getBubbleFromId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var bubbleId = this.convertEntityIdToBubbleId(id);
        if (!bubbleId)
            return;
        /** @type {?} */
        var bubble = null;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    bubble = b;
            }));
            if (bubble)
                return bubble;
        }
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getSelectedBubbles = /**
     * @return {?}
     */
    function () {
        return this.selectedBubbles;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getAllBubbles = /**
     * @return {?}
     */
    function () {
        return this.allBubbles;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getEntityIdMap = /**
     * @return {?}
     */
    function () {
        return this.entityBubbleIdMap;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.setWindowResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.windowResizeSet) {
            fromEvent(window, "resize").pipe(debounce((/**
             * @return {?}
             */
            function () { return interval(200); }))).
                subscribe((/**
             * @return {?}
             */
            function () {
                // only resets the bubbles if the window's width has changed
                // (if the resize only effects the window's hight then the bubble chart
                // doesn't get reset)
                /** @type {?} */
                var container = document.getElementById(_this.options.containerId);
                //check if element is visible on page
                if (container.offsetParent != null) {
                    /** @type {?} */
                    var bubblePayload = {
                        width: container.offsetWidth,
                        reset: true
                    };
                    _this.update(bubblePayload);
                }
            }));
            this.windowResizeSet = true;
        }
    };
    return AwBubbleChartDS;
}(DataSource));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.thresholdShowValue;
    /** @type {?} */
    AwBubbleChartDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.allBubbles;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.entityBubbleIdMap;
    /** @type {?} */
    AwBubbleChartDS.prototype.selectedBubbles;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.bubblePopup;
    /** @type {?} */
    AwBubbleChartDS.prototype.currentHoverEntity;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.windowResizeSet;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubbleRadius;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.minBubbleRadius;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubbleTextRadiusRatio;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/hero.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHeroDS = /** @class */ (function (_super) {
    __extends(AwHeroDS, _super);
    function AwHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHeroDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var title = data.title, text = data.text, button = data.button, backgroundImage = data.backgroundImage, input = data.input;
        return {
            title: title,
            text: text,
            backgroundImage: backgroundImage,
            button: {
                text: button.text,
                payload: "cerca"
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
    };
    return AwHeroDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/table.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwTableDS = /** @class */ (function (_super) {
    __extends(AwTableDS, _super);
    function AwTableDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwTableDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return TABLE_MOCK;
    };
    return AwTableDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-hero-patrimonio.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeHeroPatrimonioDS = /** @class */ (function (_super) {
    __extends(AwHomeHeroPatrimonioDS, _super);
    function AwHomeHeroPatrimonioDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeHeroPatrimonioDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var title = data.title, backgroundImage = data.backgroundImage, image = data.image, text = data.text, button = data.button;
        return {
            title: title,
            backgroundImage: backgroundImage,
            image: image,
            text: text,
            button: {
                text: button.text,
                payload: "naviga-patrimonio"
            }
        };
    };
    return AwHomeHeroPatrimonioDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-facets-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    __extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoComplete = {};
        _this.tippyMaker = (/**
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        function (res, id) {
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!_this.autoComplete[id]) {
                _this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                var ac_1 = _this.autoComplete[id];
                /** @type {?} */
                var getContent = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var contentNode = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace(/-search/, ''))[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac_1.tippy) {
                    /** @type {?} */
                    var target = '.' + id;
                    ac_1.tippy = tippy(target, {
                        content: getContent(),
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                    })[1]; // attach tippy to input type text
                }
            }
            /** @type {?} */
            var ac = _this.autoComplete[id];
            if (res.results.length > 0 && ac.tippy) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var facetData = _a.facetData, lockedFacets = _a.lockedFacets;
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                _this.autoComplete[id].tippy.destroy();
            }
        }));
        this.autoComplete = {}; // reset
        facetData.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             */
            if (Object.keys(lockedFacets).length) {
                if (lockedFacets[facet.type]) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            /** @type {?} */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet.configKey) {
                headerClasses.push("color-" + facet.configKey);
                iconClasses.push("color-" + facet.configKey);
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
                        : // if every other facet is disabled → Lock this facet
                            facetData.every((/**
                             * @param {?} f
                             * @return {?}
                             */
                            function (f) {
                                return !f.enabled || f.type === facet.type;
                            }))
                                ? ' is-blocked'
                                : ' not-blocked'),
                payload: facet.type.replace(/ /g, '-')
            });
            // make array of inputs data
            inputs.push({
                sections: [
                    {
                        inputs: [
                            {
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type) + '-search',
                                iconPayload: String(facet.type) + '-search',
                                enterPayload: String(facet.type) + '-search',
                                classes: String(facet.type.replace(' ', '-')) + '-search'
                            }
                        ]
                    }
                ]
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        var widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        function (h, i) {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperDS.prototype.autoComplete;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-item-tags-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeItemTagsWrapperDS = /** @class */ (function (_super) {
    __extends(AwHomeItemTagsWrapperDS, _super);
    function AwHomeItemTagsWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeItemTagsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    return AwHomeItemTagsWrapperDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-autocomplete.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeAutocompleteDS = /** @class */ (function (_super) {
    __extends(AwHomeAutocompleteDS, _super);
    function AwHomeAutocompleteDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeAutocompleteDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var results = data.results, totalCount = data.totalCount;
        var config = this.options.config;
        /** @type {?} */
        var labels = this.options.labels || {};
        /** @type {?} */
        var itemIds = [];
        /** @type {?} */
        var groups = {};
        results.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item = _a.item, entity = _a.entity;
            /** @type {?} */
            var groupId = entity ? entity.typeOfEntity.replace(' ', '-') : 'oggetto-culturale';
            /** @type {?} */
            var groupConfig = config[groupId];
            /** @type {?} */
            var mainMetadata = groupConfig['main-metadata'];
            /** @type {?} */
            var currentItem = item || entity;
            if (!groups[groupId]) {
                var label = groupConfig.label, icon = groupConfig.icon;
                groups[groupId] = {
                    title: label,
                    icon: icon,
                    classes: "color-" + groupId,
                    items: []
                };
            }
            if (itemIds.indexOf(currentItem.id) === -1) {
                /** @type {?} */
                var metadata_1 = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var key = _a.key, value = _a.value;
                        if (mainMetadata && key === mainMetadata) {
                            metadata_1.push({ key: helpers.prettifySnakeCase(key, labels[key]), value: value });
                        }
                    }));
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata: metadata_1,
                    payload: {
                        source: 'item',
                        id: currentItem.id
                    }
                });
            }
        }));
        return {
            results: Object.keys(groups).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes
                },
                items: groups[key].items
            }); })),
            actions: {
                showMore: {
                    text: "Visualizza tutti i " + totalCount + " risultati",
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
        };
    };
    return AwHomeAutocompleteDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-nav.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaNavDS = /** @class */ (function (_super) {
    __extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    AwEntitaNavDS.prototype.transform = /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (!param)
            return;
        /** @type {?} */
        var data = param.data;
        /** @type {?} */
        var selected = param.selected;
        /** @type {?} */
        var navigation = { items: [], payload: 'entita-nav' };
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
    };
    return AwEntitaNavDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
    __extends(AwEntitaMetadataViewerDS, _super);
    function AwEntitaMetadataViewerDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwEntitaMetadataViewerDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        var labels = this.options.labels;
        labels = labels || {};
        /** @type {?} */
        var unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
        // prettify labels
        unpackedData.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label = helpers.prettifySnakeCase(item.label, labels[item.label]); }));
        }));
        return {
            group: unpackedData
        };
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    AwEntitaMetadataViewerDS.unpackFields = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        /*
              Recursive unpacking for rendering res.fields
              - - -
              This function transforms the response object tree
              into an array, usable by metadata-viewer-component
            */
        /** @type {?} */
        var extracted = [];
        // if the server returns an array of key-value tuples
        if (fields instanceof Array) {
            extracted = fields.map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                return { label: el.key, value: el.value };
            }));
            return [{ items: extracted }];
        }
        if (!fields)
            return []; // if is empty → quit
        for (var i = 0; i < fields.length; i++) {
            /** @type {?} */
            var thisField = fields[i];
            // rename current field
            /** @type {?} */
            var title = thisField.label;
            // field title
            /** @type {?} */
            var label = thisField.key;
            // item label
            /** @type {?} */
            var value = thisField.value;
            // item value
            /** @type {?} */
            var group = thisField.fields;
            // child group
            /** @type {?} */
            var temp = {};
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
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/tree.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwTreeDS = /** @class */ (function (_super) {
    __extends(AwTreeDS, _super);
    function AwTreeDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.icons = this.options.icons;
        return data;
    };
    /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.updateTree = /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    function (data, parents, id) {
        /** @type {?} */
        var tree = this.updateTreeData(data, parents, id);
        this.update(tree);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.updateTreeData = /**
     * @private
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    function (data, parents, id) {
        var _this = this;
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        function (it) {
            /** @type {?} */
            var classes = it['classes'];
            if (it['_meta'] == id) {
                if (classes && classes.indexOf('is-expanded') > -1) {
                    it['classes'] = classes.replace(/is-expanded/g, 'is-collapsed');
                    if (it['toggle']) {
                        it['toggle']['icon'] = 'n7-icon-angle-right';
                    }
                }
                else {
                    it['classes'] = classes.replace(/is-collapsed/g, 'is-expanded');
                    if (it['toggle']) {
                        it['toggle']['icon'] = 'n7-icon-angle-down';
                    }
                }
            }
            else if (parents && parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = classes.replace(/is-collapsed/g, 'is-expanded');
                if (it['toggle']) {
                    it['toggle']['icon'] = 'n7-icon-angle-down';
                }
            }
            if (typeof it['items'] != 'undefined' && it['items'].length > 0) {
                _this.updateTreeData(it, parents, id);
            }
        }));
        return data;
    };
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.selectTreeItem = /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (id, data) {
        var _this = this;
        if (!data) {
            data = this.output;
        }
        if (this.currentItem && this.currentItem["_meta"] == id) {
            return;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        function (it) {
            if (it['_meta'] == id && it['classes'].indexOf('is-active') < 0) {
                it['classes'] = it['classes'] + ' is-active';
                _this.currentItem = it;
            }
            else {
                /** @type {?} */
                var classes = it['classes'];
                it['classes'] = classes.replace("is-active", "");
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                _this.selectTreeItem(id, it);
            }
        }));
        this.update(data);
    };
    /**
     * @return {?}
     */
    AwTreeDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwTreeDS.prototype.parseData = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        /** @type {?} */
        var data = response['tree'];
        if (data['branches'] && data['branches'].length > 0) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                treeObj['items'].push(_this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
        if (response['currentItem'] == response['currentItem'] != null) {
            //this.currentItem = response['currentItem'];
            this.selectTreeItem(response['currentItem'], null);
            this.updateTree(null, this.currentItem.parents, response['currentItem']);
        }
    };
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    AwTreeDS.prototype.parseTree = /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    function (data, toggle, parents) {
        var _this = this;
        /** @type {?} */
        var currParents = __spread(parents);
        /** @type {?} */
        var treeItem = {};
        /** @type {?} */
        var showToggle = toggle && data['branches'] != null && data['branches'].length > 0;
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
        function (key) {
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
                treeItem['parents'] = currParents;
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
                function (item) {
                    if (item['img'] != "" && item['img'] != null) {
                        treeItem['iconright'] = "n7-icon-images";
                    }
                    treeItem['items'].push(_this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    };
    return AwTreeDS;
}(DataSource));
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
    /** @type {?} */
    AwTreeDS.prototype.icons;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/sidebar-header.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSidebarHeaderDS = /** @class */ (function (_super) {
    __extends(AwSidebarHeaderDS, _super);
    function AwSidebarHeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSidebarHeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    /**
     * @return {?}
     */
    AwSidebarHeaderDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes == 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-tree-icon';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
        this.update(sidebarData);
    };
    return AwSidebarHeaderDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-breadcrumbs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(AwSchedaBreadcrumbsDS, _super);
    function AwSchedaBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaBreadcrumbsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    /**
     * @return {?}
     */
    AwSchedaBreadcrumbsDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    };
    return AwSchedaBreadcrumbsDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-metadata.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaMetadataDS = /** @class */ (function (_super) {
    __extends(AwSchedaMetadataDS, _super);
    function AwSchedaMetadataDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaMetadataDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var labels = this.options.labels;
        labels = labels || {};
        /** @type {?} */
        var group = { group: [] };
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var items = [];
                if (field.fields) {
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
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
    };
    return AwSchedaMetadataDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-image.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaImageDS = /** @class */ (function (_super) {
    __extends(AwSchedaImageDS, _super);
    function AwSchedaImageDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaImageDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    return AwSchedaImageDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-inner-title.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaInnerTitleDS = /** @class */ (function (_super) {
    __extends(AwSchedaInnerTitleDS, _super);
    function AwSchedaInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaInnerTitleDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    return AwSchedaInnerTitleDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/search-layout-tabs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSearchLayoutTabsDS = /** @class */ (function (_super) {
    __extends(AwSearchLayoutTabsDS, _super);
    function AwSearchLayoutTabsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selected = 'list';
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSearchLayoutTabsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    AwSearchLayoutTabsDS.prototype.setSelected = /**
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        this.selected = tabId;
    };
    return AwSearchLayoutTabsDS;
}(DataSource));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutTabsDS.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
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
 * Generated from: lib/arianna-web/event-handlers/linked-objects.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwLinkedObjectsEH = /** @class */ (function (_super) {
    __extends(AwLinkedObjectsEH, _super);
    function AwLinkedObjectsEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleScroll = (/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150 && _this.dataSource.loadedData.isLoading == false) {
                _this.dataSource.loadedData.isLoading = true;
                _this.emitOuter('datarequest', {
                    currentPage: _this.dataSource.currentPage
                });
            }
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwLinkedObjectsEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-linked-objects.click':
                    if (payload.startsWith('page')) {
                        // pagination routing is handled by the parent layout
                        _this.emitOuter('pagination', payload);
                    }
                    else if (payload.startsWith('goto')) {
                        /** @type {?} */
                        var targetPage = Number(payload.replace('goto-', ''))
                        // kill impossible page navigations
                        ;
                        // kill impossible page navigations
                        if (targetPage > _this.dataSource.totalPages)
                            return;
                        else if (targetPage < 1 || targetPage === _this.dataSource.currentPage)
                            return;
                        else
                            _this.emitOuter('goto', payload);
                    }
                    else {
                        // navigate to the patrimonio page of this item
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: ["aw/patrimonio/" + payload]
                        });
                    }
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    _this.emitOuter('change', +payload.value);
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    _this.dataSource.checkForMore(false);
                    _this.emitOuter('datarequest', {
                        currentPage: _this.dataSource.currentPage
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    // handle incoming data from home-layout
                    var res = payload.res;
                    _this.dataSource.handleIncomingData(res);
                case 'aw-home-layout.scroll':
                    _this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwLinkedObjectsEH;
}(EventHandler));
if (false) {
    /** @type {?} */
    AwLinkedObjectsEH.prototype.handleScroll;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/autocomplete-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwAutocompleteWrapperEH = /** @class */ (function (_super) {
    __extends(AwAutocompleteWrapperEH, _super);
    function AwAutocompleteWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwAutocompleteWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-autocomplete-wrapper.click':
                    if (payload != 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                        _this.emitOuter('clickresult', payload);
                    }
                    break;
                default:
                    console.warn('unhandled event of type:', type);
                    break;
            }
        }));
    };
    return AwAutocompleteWrapperEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwBubbleChartEH = /** @class */ (function (_super) {
    __extends(AwBubbleChartEH, _super);
    function AwBubbleChartEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwBubbleChartEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'aw-bubble-chart.init':
                    break;
                case 'aw-bubble-chart.click':
                    event.payload.entityIdmap = _this.dataSource.getEntityIdMap();
                    event.payload.allBubbles = _this.dataSource.getAllBubbles();
                    _this.emitOuter('click', event.payload);
                    break;
                case 'aw-bubble-chart.mouseenter':
                    /** @type {?} */
                    var currBubble = _this.dataSource.onBubbleMouseEnter({
                        bubblePayload: event.payload.bubblePayload,
                        bubble: event.payload.bubble
                    });
                    event.payload.currBubble = currBubble;
                    _this.emitOuter('mouseenter', event.payload);
                    break;
                case 'aw-bubble-chart.mouseleave':
                    _this.emitOuter('mouseleave', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    _this.emitOuter('bubble-tooltip-close-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    _this.emitOuter('bubble-tooltip-goto-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    _this.emitOuter('bubble-tooltip-select-click', event.payload);
                    break;
                default:
                    console.warn('unhandled inner event of type', event.type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case "aw-home-layout.bubble-tooltip-select-click":
                    /** @type {?} */
                    var selectData = {
                        'bubble': _this.dataSource.onBubbleTooltipClick('select', payload),
                        'entityIdmap': _this.dataSource.getEntityIdMap(),
                        'allBubbles': _this.dataSource.getAllBubbles(),
                        'source': 'bubble'
                    };
                    _this.emitOuter('click', selectData);
                    break;
                case 'aw-home-layout.bubble-filter':
                    _this.emitOuter('bubble-filtered', {
                        'allBubbles': _this.dataSource.getAllBubbles(),
                        'selected': _this.dataSource.getSelectedBubbles()
                    });
                    break;
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    if (payload.source) {
                        _this.dataSource.setAllBubblesFromApolloQuery(payload, payload.reload);
                        _this.emitOuter('bubble-filtered', {
                            'allBubbles': _this.dataSource.getAllBubbles(),
                            'selected': _this.dataSource.getSelectedBubbles(),
                            'entityIdmap': _this.dataSource.getEntityIdMap()
                        });
                    }
                    else {
                        _this.dataSource.update(payload);
                    }
                    break;
            }
        }));
    };
    return AwBubbleChartEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/hero.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHeroEH = /** @class */ (function (_super) {
    __extends(AwHeroEH, _super);
    function AwHeroEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHeroEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-hero.click':
                    // TODO
                    break;
                case 'aw-hero.change':
                    _this.emitOuter('change', payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHeroEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeBubbleChartEH = /** @class */ (function (_super) {
    __extends(AwHomeBubbleChartEH, _super);
    function AwHomeBubbleChartEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeBubbleChartEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'aw-home-bubble-chart.click':
                    _this.emitOuter('click', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouseenter':
                    _this.emitOuter('mouseenter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouseleave':
                    _this.emitOuter('mouseleave', event.payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeBubbleChartEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
    __extends(AwHomeFacetsWrapperEH, _super);
    function AwHomeFacetsWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeFacetsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                // toggle visibility from facet header
                case 'aw-home-facets-wrapper.click':
                    _this.emitOuter('click', payload);
                    break;
                // change search input text
                case 'aw-home-facets-wrapper.change':
                    _this.emitOuter('change', payload);
                    break;
                // press return while typing in search
                case 'aw-home-facets-wrapper.enter':
                    _this.emitOuter('enter', payload);
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    _this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                    break;
                default:
                    // console.warn('unhandled outer event of type', type)
                    // silent ignore
                    break;
            }
        }));
    };
    return AwHomeFacetsWrapperEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-hero-patrimonio.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeHeroPatrimonioEH = /** @class */ (function (_super) {
    __extends(AwHomeHeroPatrimonioEH, _super);
    function AwHomeHeroPatrimonioEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeHeroPatrimonioEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-hero-patrimonio.click':
                    _this.emitGlobal('navigate', {
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
    };
    return AwHomeHeroPatrimonioEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-item-tags-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeItemTagsWrapperEH = /** @class */ (function (_super) {
    __extends(AwHomeItemTagsWrapperEH, _super);
    function AwHomeItemTagsWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeItemTagsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case "aw-home-item-tags-wrapper.click":
                    _this.emitOuter('click', event.payload);
                    break;
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwHomeItemTagsWrapperEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-autocomplete.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeAutocompleteEH = /** @class */ (function (_super) {
    __extends(AwHomeAutocompleteEH, _super);
    function AwHomeAutocompleteEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeAutocompleteEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case "aw-home-autocomplete.click":
                    _this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeAutocompleteEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/entita-nav.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaNavEH = /** @class */ (function (_super) {
    __extends(AwEntitaNavEH, _super);
    function AwEntitaNavEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwEntitaNavEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-entita-nav.click':
                    _this.emitOuter('click', payload);
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
    };
    return AwEntitaNavEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/scheda-breadcrumbs.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaSidebarEH = /** @class */ (function (_super) {
    __extends(AwSchedaSidebarEH, _super);
    function AwSchedaSidebarEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwSchedaSidebarEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type == 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
                _this.emitOuter(type, payload);
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwSchedaSidebarEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/sidebar-header.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSidebarHeaderEH = /** @class */ (function (_super) {
    __extends(AwSidebarHeaderEH, _super);
    function AwSidebarHeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwSidebarHeaderEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type == 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
                _this.emitOuter('click', payload);
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwSidebarHeaderEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/tree.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwTreeEH = /** @class */ (function (_super) {
    __extends(AwTreeEH, _super);
    function AwTreeEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwTreeEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            if (payload && typeof payload.source != 'undefined') {
                switch (payload.source) {
                    case 'toggle':
                        _this.dataSource.updateTree(null, payload.parents, payload.id);
                        break;
                    case 'ToggleMenuItem': _this.dataSource.updateTree(null, payload.parents, payload.id); //no break, I want to execute also the following instruction
                    case 'menuItem':
                        _this.dataSource.selectTreeItem(payload.id);
                        _this.emitOuter('click', payload.id);
                        break;
                }
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-sidebar-header.click':
                    _this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    _this.dataSource.selectTreeItem(payload);
                    if (typeof _this.dataSource.currentItem !== 'undefined') {
                        _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.toggle.parents, payload);
                    }
                    else {
                        console.warn('The object in the URL does not exist.');
                        // Maybe navigate to 404 here.
                    }
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    _this.dataSource.parseData(payload);
                    break;
            }
        }));
    };
    return AwTreeEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/search-layout-tabs.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSearchLayoutTabsEH = /** @class */ (function (_super) {
    __extends(AwSearchLayoutTabsEH, _super);
    function AwSearchLayoutTabsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwSearchLayoutTabsEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        // TODO
    };
    return AwSearchLayoutTabsEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/table.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwTableEH = /** @class */ (function (_super) {
    __extends(AwTableEH, _super);
    function AwTableEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwTableEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        /*
        this.innerEvents$.subscribe(event => {
          
        });
    
        this.outerEvents$.subscribe(event => {
          
        });
        */
    };
    return AwTableEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AwLinkedObjectsEH: AwLinkedObjectsEH,
    AwAutocompleteWrapperEH: AwAutocompleteWrapperEH,
    AwBubbleChartEH: AwBubbleChartEH,
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
    AwSearchLayoutTabsEH: AwSearchLayoutTabsEH,
    AwTableEH: AwTableEH
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/about-layout/about-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwAboutLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/about-layout/about-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwAboutLayoutComponent = /** @class */ (function (_super) {
    __extends(AwAboutLayoutComponent, _super);
    function AwAboutLayoutComponent() {
        return _super.call(this, AwAboutLayoutConfig) || this;
    }
    /**
     * @return {?}
     */
    AwAboutLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwAboutLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwAboutLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-about-layout',
                    template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    About page!\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwAboutLayoutComponent.ctorParameters = function () { return []; };
    return AwAboutLayoutComponent;
}(AbstractLayout));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaLayoutDS = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutDS, _super);
    function AwEntitaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myResponse = {}; // backend response object
        // selected nav item
        _this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        // linked objects page size
        _this.bubblesSize = 10; // related entities (bubbles) page size
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
        /*
            Updates selected tab on tab change
          */
        _this.handlePageNavigation = (/**
         * @return {?}
         */
        function () {
            _this.one('aw-linked-objects').updateOptions({
                context: _this.selectedTab,
                config: _this.configuration,
                page: _this.currentPage,
                pagination: true,
                size: _this.pageSize,
            });
            _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            _this.location.go(_this.configuration.get("paths").entitaBasePath
                +
                    _this.currentId
                + '/oggetti-collegati/'
                + _this.currentPage);
        });
        _this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            _this.selectedTab = tab;
            _this.updateWidgets(_this.myResponse);
            /** @type {?} */
            var page = tab == 'oggetti-collegati' ? "/1" : "";
            if (tab == 'oggetti-collegati') {
                _this.one('aw-linked-objects').updateOptions({
                    context: _this.selectedTab,
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    size: _this.pageSize,
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            else if (tab == "overview") {
                _this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: _this.configuration,
                    context: 'entita'
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            if (tab == "overview" || tab == "entita-collegate") {
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.updateBubbes(_this.myResponse); }), 800);
            }
            _this.location.go(_this.configuration.get("paths").entitaBasePath
                +
                    _this.currentId
                + '/'
                + tab
                + page);
        });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, location = _a.location, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = "";
        this.currentPage = 1;
        this.bubbleLoaded = false;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['max-bubble-num'] : this.bubblesSize;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /*
          Requests data from communication provider
         */
        return this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { entityId: id, entitiesListSize: this.bubblesSize }
        });
    };
    /*
      Updates the widgets on this layout, based on route
    */
    /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateWidgets = /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data: data, selected: selected });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateBubbes = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this.bubbleLoaded) {
            this.one('aw-bubble-chart').update(data);
            this.bubbleLoaded = true;
        }
    };
    /*
      Loads the data for the selected nav item, into the adjacent text block.
    */
    /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadItem = /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    function (id, tab) {
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { entityId: id, entitiesListSize: this.bubblesSize }
            });
        }
        else {
            this.pageTitle = 'Entità Test';
        }
    };
    /**
     * @param {?} res
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadContent = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        console.log('(entita) Apollo responded with: ', { res: res });
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-bubble-chart').updateOptions({
            context: 'scheda',
            configKeys: this.configuration.get('config-keys'),
            bubbleContainerId: 'overviewBubbleChartContainer',
            containerId: 'bubble-chart-container-overview',
        });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get("labels") });
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
    };
    return AwEntitaLayoutDS;
}(LayoutDataSource));
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
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubbleLoaded;
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
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaLayoutEH = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutEH, _super);
    function AwEntitaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    // private selectedTab: string;
    // private selectedTab: string;
    /**
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listen = 
    // private selectedTab: string;
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-entita-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.configuration = payload.configuration;
                    _this.route = payload.route;
                    _this.entityId = _this.route.snapshot.params.id || "";
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || 1;
                    _this.listenRoute(_this.entityId);
                    //this.loadNavigation(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        _this.dataSource.handleNavUpdate(payload);
                        _this.emitGlobal('navigate', {
                            path: [
                                _this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    _this.entityId
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-entita-nav.click':
                    if (payload) {
                        _this.dataSource.selectedTab = payload;
                        _this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.currentPage = payload.split('-')[1];
                    _this.dataSource.handlePageNavigation();
                    /*this.emitGlobal('navigate', {
                      handler: 'router',
                      path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });*/
                    break;
                case 'aw-linked-objects.goto':
                    _this.dataSource.currentPage = Number(payload.replace('goto-', ''));
                    _this.dataSource.handlePageNavigation();
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    _this.dataSource.pageSize = payload;
                    _this.dataSource.currentPage = 1; // reset page
                    // reset page
                    /** @type {?} */
                    var options = {
                        context: _this.dataSource.selectedTab,
                        config: _this.dataSource.configuration,
                        page: _this.dataSource.currentPage,
                        pagination: true,
                        size: _this.dataSource.pageSize,
                    };
                    _this.dataSource.updateComponent('aw-linked-objects', { items: _this.dataSource.myResponse.relatedItems }, options);
                // this.listenRoute("", true) // reloads the page content with the new page size
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId]
                    });
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (_this.dataSource.selectedTab == "overview" || _this.dataSource.selectedTab == "entita-collegate") {
                        payload.reload = true;
                        payload.reset = true;
                        _this.emitOuter('filterbubbleresponse', payload);
                        //this.dataSource.updateBubbes(payload);
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * Listens to routing events of this layout.
     */
    /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listenRoute = /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    function (selectedItem, forceReload) {
        var _this = this;
        if (selectedItem === void 0) { selectedItem = ""; }
        if (forceReload === void 0) { forceReload = false; }
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // look for id
            if (params.get('id')) {
                if (_this.dataSource.currentId == params.get('id') && !forceReload)
                    return;
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
                        _this.dataSource.bubbleLoaded = false;
                        /** @type {?} */
                        var connectedEntities = {
                            source: res,
                            reload: false
                        };
                        _this.emitOuter('filterbubbleresponse', connectedEntities);
                        _this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            _this.emitOuter('selectItem', selectedItem);
                        }
                    }
                }));
            }
            else {
                _this.dataSource.loadItem();
            }
        }));
    };
    return AwEntitaLayoutEH;
}(EventHandler));
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
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwEntitaLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaLayoutComponent = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutComponent, _super);
    function AwEntitaLayoutComponent(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('AwEntitaLayoutConfig') || AwEntitaLayoutConfig) || this;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    /*
        Optional variables that can be accessed from the layout's logic.
        If removed, they must also be removed from the layout's DataSource file,
        and from this file imports.
       */
    /**
     * @protected
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.initPayload = /*
        Optional variables that can be accessed from the layout's logic.
        If removed, they must also be removed from the layout's DataSource file,
        and from this file imports.
       */
    /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwEntitaLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-entita-layout',
                    template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n    <!-- lb.dataSource.selectedTab -->\n    <div class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <button *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                    <button *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"lb.dataSource.myResponse.fields && lb.dataSource.myResponse.fields.length > 0\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </button>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <button class=\"n7-btn n7-btn-light\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n                <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"lb.dataSource.bubblesEnabled\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <button class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\"\n                        *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <div [style.overflow]=\"'hidden'\">\n                    <aw-bubble-chart-wrapper [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\" [container]=\"'bubble-chart-container-overview'\"\n                        [buttons]=\"['goto']\">\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{lb.dataSource.myResponse.wikiTab.url}}\n                </a>\n            </div>\n        </section>\n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwEntitaLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: Location },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    return AwEntitaLayoutComponent;
}(AbstractLayout));
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
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeLayoutDS = /** @class */ (function (_super) {
    __extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.lockedFacets = {};
        _this.lockLastFacet = false;
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (these are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        _this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        _this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        _this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        _this.lastWindowWidth = -1;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        _this.loadingBubbles = false;
        _this.bubblesEnabled = false;
        _this.resultsLimit = -1;
        _this.selectedEntitiesIds = [];
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
        this.communication = communication;
        this.configuration = configuration;
        this.facetData = [];
        this.lastWindowWidth = window.outerWidth;
        this.mainState = mainState;
        this.tippy = tippy;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.mainState.updateCustom('currentNav', 'aw/home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
    };
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    AwHomeLayoutDS.prototype.makeRequest$ = /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    function (query, params) {
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: params
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.initialFilterRequest = /**
     * @return {?}
     */
    function () {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                entitiesListSize: this.configuration.get("home-layout")['max-bubble-num'] * 4
            },
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.parseInitialRequest = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        function (toe) {
            /** @type {?} */
            var teoConfigData = _this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            _this.facetData.push(__assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, teoConfigData));
        }));
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        this.one('aw-bubble-chart').updateOptions({
            context: 'home',
            configKeys: this.configuration.get("config-keys"),
            bubbleContainerId: 'bubbleChartContainer',
            containerId: 'bubble-chart-container',
            maxNumber: this.configuration.get("home-layout")['max-bubble-num']
        });
        this.renderPreviewsFromApolloQuery(response);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
        /** @type {?} */
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            var numOfItemsTmpStr = numOfItems + '';
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
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        if (document.getElementById('bubble-results-list')) {
            // reset scroll position of result list
            document.getElementById('bubble-results-list').scrollTo(0, 0);
        }
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = payload.bubbleId;
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        this.onBubbleSelected(bubble_1);
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.loadingBubbles = this.selectedBubbles.length == 0;
                    this.selectedBubbles.push(bubble);
                    return true;
                }
            }
        }
        return null;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleDeselected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) { return b.id !== payload.bubble.id; }));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                return this.filterRequest();
            }
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.getBubblePayload = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var bubblePayload = {
            reset: true,
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
            facetData: this.facetData,
            source: response,
            selectedBubbles: this.selectedBubbles
        };
        return bubblePayload;
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterRequest = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.entityBubbleIdMap) {
            /** @type {?} */
            var k_1 = this.configuration.get('config-keys');
            /** @type {?} */
            var activeBubbles_1 = {
                places: false,
                people: false,
                concepts: false,
                organizations: false,
            };
            if (this.selectedBubbles.length <= 0) {
                this.selectedEntitiesIds = [];
            }
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var c = sB.color;
                /** @type {?} */
                var findTypeFromColor = (/**
                 * @param {?} obj
                 * @param {?} color
                 * @return {?}
                 */
                function (obj, color) {
                    return Object.keys(obj).find((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return obj[key].color.hex === color; }));
                });
                activeBubbles_1[findTypeFromColor(k_1, c)] = true;
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    _this.selectedEntitiesIds.push(entityId);
            }));
            this.lockedFacets = activeBubbles_1;
            this.one('aw-home-facets-wrapper').update({
                facetData: this.facetData,
                lockedFacets: this.lockedFacets
            });
        }
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: this.selectedEntitiesIds,
                itemsPagination: {
                    offset: 0,
                    limit: this.resultsLimit
                }
            },
        });
    };
    /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbles = /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (response, onlyBubbles) {
        if (!onlyBubbles) {
            this.renderPreviewsFromApolloQuery(response);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbleFilter = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.allBubbles = data.allBubbles;
        this.entityBubbleIdMap = data.entityIdmap;
    };
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateTags = /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id)
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
            }
            return true;
        }));
        return result;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @param {?} enter
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchEnter = /**
     * @param {?} enter
     * @return {?}
     */
    function (enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetHeaderClick = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        var _this = this;
        /** @type {?} */
        var updateBubbles = false;
        /** @type {?} */
        var enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.enabled; })).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            f.type = f.type.replace(/ /g, '-'); // fix for space in facet type string ('cose notevoli')
            if (f.type === facetId && f.locked === true) {
                // if user clicked on a locked facet, ignore it
                return;
            }
            if (f.type === facetId && f.enabled === true && enabledFacets < 1) {
                return;
            }
            if (f.type === facetId) { // if this is the clicked facet
                console.log(f.type + " is the clicked facet");
                if (f.enabled && enabledFacets > 1) {
                    f.enabled = false;
                    f.locked = false;
                    updateBubbles = true;
                }
                else {
                    f.enabled = true;
                    f.locked = false;
                    updateBubbles = true;
                }
            }
            else { // if this is another facet
                if (enabledFacets <= 2 && f.enabled) {
                    f.locked = true;
                }
                if (enabledFacets >= 1 && f.locked) {
                    f.locked = false;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        if (updateBubbles) {
            /** @type {?} */
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type); // this is probably useless
            }));
            if (disableFacetsIds_1.length > 0) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            if (disableFacetsIds_1.includes(_this.allBubbles[i].entity.typeOfEntity.id)) {
                                return false;
                            }
                        }
                    }
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
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-bubble-chart').update(this.getBubblePayload(null));
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        function (sBubble) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].id === sBubble.id) {
                    label = _this.allBubbles[i].entity.label;
                    tagsData.push({
                        label: label,
                        icon: "n7-icon-close",
                        payload: sBubble.id,
                        classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.replace(/ /g, '-')
                    });
                    break;
                }
            }
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onTagClicked = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!payload)
            return;
        /** @type {?} */
        var bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.id !== payload; }));
        return this.filterRequest();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onHeroChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.autocompleteChanged$.next(value);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._scrollBackgroundControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = document.getElementById('bubble-results-list');
        /** @type {?} */
        var source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        }));
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._listenAutoCompleteChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.one('aw-home-autocomplete').updateOptions({
            config: this.configuration.get('config-keys'),
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.homeAutocompleteQuery = value;
            if (value) {
                _this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.one('aw-home-autocomplete').update(response);
                    if (!_this.autocompletePopoverOpen)
                        _this._toggleAutocompletePopover();
                }));
            }
            else {
                _this._toggleAutocompletePopover();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._toggleAutocompletePopover = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocompletePopover) {
            /** @type {?} */
            var template = document.getElementById('aw-home-advanced-autocomplete-popover');
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
                function () { return _this.autocompletePopoverOpen = false; }),
            })[0];
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    };
    return AwHomeLayoutDS;
}(LayoutDataSource));
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
    AwHomeLayoutDS.prototype.lockedFacets;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lockLastFacet;
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
    /** @type {?} */
    AwHomeLayoutDS.prototype.loadingBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
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
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeLayoutEH = /** @class */ (function (_super) {
    __extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var thebubble = _this.dataSource.allBubbles.find((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                /** @type {?} */
                var s = 'B_' + payload.replace(/-/g, '_');
                return b.id == s;
            }));
            if (thebubble) {
                _this.dataSource.onBubbleSelected(thebubble);
            }
            if (_this.dataSource.selectedEntitiesIds.indexOf(payload) < 0) {
                _this.dataSource.selectedEntitiesIds.push(payload);
                _this.dataSource.communication.request$('globalFilter', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        selectedEntitiesIds: _this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: 0,
                            limit: _this.dataSource.resultsLimit
                        }
                    },
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.updateBubbleFilter({
                            allBubbles: _this.dataSource.allBubbles,
                            bubble: thebubble,
                            bubblePayload: { id: thebubble.id },
                            entityIdmap: _this.dataSource.entityBubbleIdMap,
                            source: 'bubble'
                        });
                        _this.dataSource.filterRequest().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) {
                            if (res) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(res));
                                _this.dataSource.updateBubbles(res);
                            }
                        }));
                        // this.renderPreviewsFromApolloQuery(res)
                    }
                }));
            }
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwHomeLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.loadFilters();
                    _this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.outerlinkclick':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload
                    });
                    break;
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-hero.change':
                    _this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        var params_1 = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
                            itemsPagination: {
                                // offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                                offset: 0, limit: _this.configuration.get('home-layout')['results-limit']
                            }
                        };
                        _this.dataSource.makeRequest$('autoComplete', params_1).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response.results.length < 1) {
                                /** @type {?} */
                                var fallback = {
                                    totalcount: 0,
                                    entities: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                _this.configuration.get('home-layout')['autocomplete-fallback'] ?
                                                    _this.configuration.get('home-layout')['autocomplete-fallback'] :
                                                    'Nessun risultato trovato'
                                            }
                                        }
                                    ]
                                };
                                _this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback });
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: _this.configuration });
                            }
                            else {
                                _this.emitOuter('facetswrapperresponse', { facetId: payload, response: response });
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response: response }, // DATA
                                { config: _this.configuration } // OPTIONS
                                );
                            }
                        }));
                    }
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    _this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId]
                    });
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    payload._bubbleChart = _this.dataSource._bubbleChart;
                    _this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
                            console.log({ payload: payload });
                            _this.dataSource.updateBubbleFilter(payload);
                            if (_this.dataSource.onBubbleSelected(payload.bubble)) {
                                _this.dataSource.filterRequest().subscribe((/**
                                 * @param {?} response
                                 * @return {?}
                                 */
                                function (response) {
                                    if (response) {
                                        // console.log('filterRequest() returned: ', response)
                                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                        _this.dataSource.updateBubbles(response);
                                    }
                                }));
                            }
                        }
                    }
                    else if (payload.source === 'close') {
                        _this.dataSource.updateBubbleFilter(payload);
                        _this.dataSource.onBubbleDeselected({
                            bubblePayload: payload.bubblePayload,
                            bubble: payload.bubble
                        }).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                _this.dataSource.updateBubbles(response);
                            }
                        }));
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    _this.dataSource.updateBubbleFilter(payload);
                    _this.dataSource.updateTags();
                    /** @type {?} */
                    var dataSource_1 = _this.dataSource;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        dataSource_1.loadingBubbles = false;
                    }), 500);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                        _this.dataSource.updateBubbles(response);
                        _this.dataSource.renderItemTags();
                    }));
                    break;
                case 'aw-linked-objects.datarequest':
                    var currentPage = payload.currentPage;
                    /** @type {?} */
                    var params = {
                        selectedEntitiesIds: _this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: currentPage * _this.dataSource.resultsLimit,
                            limit: _this.dataSource.resultsLimit
                        }
                    };
                    _this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        if (res) {
                            _this.emitOuter('dataresponse', { res: res });
                        }
                        else {
                            console.log('Unable to fetch additional data.');
                        }
                    }));
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    var source = payload.source;
                    /** @type {?} */
                    var basePath = void 0;
                    if (source === "item") {
                        basePath = _this.configuration.get("paths").entitaBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath, payload.id]
                        });
                    }
                    else if (source === "showMore") {
                        /** @type {?} */
                        var query = _this.dataSource.homeAutocompleteQuery;
                        basePath = _this.configuration.get("paths").searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query: query }
                        });
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutEH.prototype.loadFilters = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSource.initialFilterRequest().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('(home) Apollo responded with:', response);
            if (response) {
                _this.dataSource.parseInitialRequest(response);
                if (_this.dataSource.bubblesEnabled) {
                    /** @type {?} */
                    var bubblePayload = {
                        setBubbleChart: (/**
                         * @param {?} bubbleCref
                         * @return {?}
                         */
                        function (bubbleCref) { return _this.dataSource._bubbleChart = bubbleCref; }),
                        source: response,
                        reset: false,
                        facetData: _this.dataSource.facetData
                    };
                    _this.emitOuter('filterbubbleresponse', bubblePayload);
                }
            }
        }));
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutEH.prototype.outerLinkClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        window.open(payload, "_blank");
    };
    return AwHomeLayoutEH;
}(EventHandler));
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
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwHomeLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeLayoutComponent = /** @class */ (function (_super) {
    __extends(AwHomeLayoutComponent, _super);
    function AwHomeLayoutComponent(layoutsConfiguration, router, configuration, communication, mainState) {
        var _this = _super.call(this, layoutsConfiguration.get('AwHomeLayoutConfig') || AwHomeLayoutConfig) || this;
        _this.router = router;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            communication: this.communication,
            options: this.config.options || {},
            tippy: tippy,
        };
    };
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwHomeLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-home-layout',
                    template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\"\n        *ngIf=\"lb.dataSource.bubblesEnabled\"\n    >\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n        <div\n            class=\"aw-home__bubble-chart-wrapper\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\"\n        >\n            <aw-bubble-chart-wrapper\n                [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                [container]=\"'bubble-chart-container'\"\n                [buttons]=\"['select', 'goto']\"\n            >\n                    <n7-bubble-chart\n                        [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length > 0\" >\n            <div class=\"aw-home__bubble-results\"\n                 id=\"home-bubble-results\"\n                 [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column', 'transition': 'opacity 1s ease-in-out;' }\"\n                 [style.opacity]=\"lb.dataSource.loadingBubbles ? '0' : '1'\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                        {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list\"\n                        [attr.id]=\"'bubble-results-list'\"\n                        (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n                        <ng-container *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader\n                                    [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\" class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    <!-- aw-linked-objects__actions -->\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\" class=\"aw-home__bubble-results-list-actions\">\n                        <button class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                    </div>\n                </div>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div\n    *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\"\n     class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\"\n                *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview\n                    *ngFor=\"let outerLink of lb.dataSource.outerLinks\"\n                    [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\"\n                >\n                </n7-item-preview>\n            <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-advanced-autocomplete\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n         class=\"aw-simple-autocomplete__{{widgetData.header.payload}}\"\n         style=\"display: none;\">\n         <n7-simple-autocomplete\n            [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n        </n7-simple-autocomplete>\n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwHomeLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: Router },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MainStateService }
    ]; };
    return AwHomeLayoutComponent;
}(AbstractLayout));
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
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaLayoutDS = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutDS, _super);
    function AwSchedaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allBubbles = null;
        _this.selectedBubbles = [];
        return _this;
    }
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from onInit() parameters and inside the function.
    */
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.onInit = /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from onInit() parameters and inside the function.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
        this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
        this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
        this.mainState.updateCustom('currentNav', 'aw/patrimonio');
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { treeId: id }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.updateNavigation = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-sidebar-header').update(header);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            /** @type {?} */
            var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getNode', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { id: id, maxSimilarItems: maxSimilarItems }
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
        var breadcrumbs = {
            items: []
        };
        this.one('aw-scheda-breadcrumbs').update(breadcrumbs);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.loadContent = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            console.log('(Scheda) Apollo responded with: ', response);
            this.contentParts = [];
            /** @type {?} */
            var content = {};
            this.one('aw-tree').updateOptions({
                icons: this.configuration.get('scheda-layout')['tree']
            });
            /* Related Entities */
            this.one('aw-bubble-chart').updateOptions({
                context: 'scheda',
                configKeys: this.configuration.get("config-keys"),
                bubbleContainerId: 'bubbleChartContainer',
                containerId: 'bubble-chart-container',
            });
            if (response.text) {
                content['content'] = response.text;
            }
            this.contentParts.push(content);
            if (response.image) {
                /** @type {?} */
                var images_1 = [{ type: 'image', url: response.image, buildPyramid: false }];
                if (!this.imageViewerIstance) {
                    this.one('aw-scheda-image').update({
                        viewerId: 'scheda-layout-viewer',
                        _setViewer: (/**
                         * @param {?} viewer
                         * @return {?}
                         */
                        function (viewer) {
                            _this.imageViewerIstance = viewer;
                            viewer.open(images_1);
                        }),
                    });
                }
                else {
                    this.imageViewerIstance.open(images_1);
                }
            }
            /** @type {?} */
            var titleObj = {
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
            /*Breadcrumb section*/
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
            };
            if (response.breadcrumb) {
                response.breadcrumbs.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    breadcrumbs_1.items.push({
                        label: element.label,
                        payload: element.link
                    });
                }));
                this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
            }
        }
        if (response.relatedItems) {
            this.hasSimilarItems = true;
            this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
            this.one('aw-linked-objects').update(response);
        }
        else {
            this.hasSimilarItems = false;
            //this.one('aw-linked-objects').update([]);
        }
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.collapseSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    };
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    function (response, reset) {
        if (!response || !response.relatedEntities) {
            this.hasBubbles = false;
            return;
        }
        this.allBubbles = [];
        for (var i = 0; i < response.relatedEntities.length; i++) {
            /** @type {?} */
            var color = this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.relatedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(__assign({ id: this.convertEntityIdToBubbleId(response.relatedEntities[i].entity.id) }, response.relatedEntities[i], { color: color }));
        }
        this.one('aw-scheda-bubble-chart').update({
            containerId: 'bubble-chart-container',
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles,
            reset: (reset ? reset : false)
        });
    };
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    AwSchedaLayoutDS.prototype.convertEntityIdToBubbleId = /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    return AwSchedaLayoutDS;
}(LayoutDataSource));
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
    AwSchedaLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaLayoutEH = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutEH, _super);
    function AwSchedaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-scheda-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.configuration = payload.configuration;
                    _this.route = payload.route;
                    /** @type {?} */
                    var paramId = _this.route.snapshot.params.id || "";
                    _this.listenRoute();
                    _this.loadNavigation(paramId);
                    break;
                case 'aw-scheda-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-tree.click':
                    if (payload) {
                        _this.emitGlobal('navigate', { path: [_this.configuration.get('paths').schedaBasePath + payload], handler: 'router' });
                    }
                    break;
                case 'aw-sidebar-header.click':
                    _this.dataSource.collapseSidebar();
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId + "/overview"]
                    });
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.listenRoute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (params.get('id')) {
                _this.dataSource.loadItem(params.get('id')).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    console.log('getNode() res: ', response);
                    if (response) {
                        _this.dataSource.loadContent(response);
                        if (response.relatedEntities) {
                            _this.dataSource.hasBubbles = true;
                            /** @type {?} */
                            var relatedEntities = { source: response, relatedEntities: response.relatedEntities, reset: true };
                            if (_this.dataSource.bubblesEnabled) {
                                _this.emitOuter('filterbubbleresponse', relatedEntities);
                            }
                        }
                    }
                }));
            }
            else {
                _this.dataSource.loadItem();
            }
        }));
    };
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.loadNavigation = /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        var _this = this;
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                console.log("Apollo responded with tree:", response);
                _this.dataSource.updateNavigation(response);
                _this.emitOuter('navigationresponse', { tree: response, currentItem: selectedItem });
            }
            /*if (selectedItem) {
              this.emitOuter('selectItem', selectedItem);
            }*/
        }));
    };
    return AwSchedaLayoutEH;
}(EventHandler));
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
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwPatrimonioLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaLayoutComponent = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutComponent, _super);
    function AwSchedaLayoutComponent(router, route, configuration, layoutsConfiguration, mainState, titleService, communication) {
        var _this = _super.call(this, layoutsConfiguration.get('AwPatrimonioLayoutConfig') || AwPatrimonioLayoutConfig) || this;
        _this.router = router;
        _this.route = route;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.titleService = titleService;
        _this.communication = communication;
        return _this;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    AwSchedaLayoutComponent.prototype.initPayload = /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwSchedaLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwSchedaLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-scheda-layout',
                    template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n         <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree\">\n            <n7-sidebar-header\n                [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"\n            ></n7-sidebar-header>\n            <n7-tree\n                [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-tree'].emit\"\n                *ngIf=\"!lb.dataSource.sidebarCollapsed\"\n            ></n7-tree>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper\">\n            <n7-breadcrumbs\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-breadcrumbs>\n\n            <n7-inner-title\n                [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <n7-image-viewer\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\" *ngIf=\"lb.dataSource.contentParts.content\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\"\n                     *ngIf=\"lb.dataSource.hasMetadata\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.metadataSectionTitle}}\n                </div>\n                <n7-metadata-viewer\n                    [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section\n                class=\"aw-scheda__bubble-chart\"\n                *ngIf=\"lb.dataSource.bubblesEnabled\">\n                <div\n                    *ngIf = \"lb.dataSource.hasBubbles\"\n                    class=\"aw-scheda__inner-title\">{{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <div [style.overflow]=\"'hidden'\">\n                    <aw-bubble-chart-wrapper\n                        [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                        [container]=\"'bubble-chart-container'\"\n                        [buttons]=\"['goto']\">\n                        <n7-bubble-chart\n                            [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </section>\n\n            <section\n                *ngIf = \"lb.dataSource.hasSimilarItems\"\n                id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items\">\n                    <!--<ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">-->\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-item-preview\n                            [data]=\"preview\"\n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\"\n                            >\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n             </section>\n        </div>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AwSchedaLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: Title },
        { type: CommunicationService }
    ]; };
    return AwSchedaLayoutComponent;
}(AbstractLayout));
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
 * Generated from: lib/arianna-web/layouts/works-layout/works-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwWorksLayoutDS = /** @class */ (function (_super) {
    __extends(AwWorksLayoutDS, _super);
    function AwWorksLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AwWorksLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        // TODO
    };
    return AwWorksLayoutDS;
}(LayoutDataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/works-layout/works-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwWorksLayoutEH = /** @class */ (function (_super) {
    __extends(AwWorksLayoutEH, _super);
    function AwWorksLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwWorksLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        /* this.innerEvents$.subscribe(({ type, payload }) => {
          
        }); */
        /* this.outerEvents$.subscribe(({ type, payload }) => {
          
        }); */
    };
    return AwWorksLayoutEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/works-layout/works-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwWorksLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/works-layout/works-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwWorksLayoutComponent = /** @class */ (function (_super) {
    __extends(AwWorksLayoutComponent, _super);
    function AwWorksLayoutComponent() {
        return _super.call(this, AwWorksLayoutConfig) || this;
    }
    /**
     * @return {?}
     */
    AwWorksLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwWorksLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwWorksLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-works-layout',
                    template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    Works page!\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwWorksLayoutComponent.ctorParameters = function () { return []; };
    return AwWorksLayoutComponent;
}(AbstractLayout));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-facets.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var facetsConfig = {
    totalCount: 0,
    facets: [{
            id: 'query',
            type: 'value'
        }, {
            id: 'query-all',
            type: 'value',
            data: [{
                    value: '1',
                    label: 'Cerca in tutti campi delle schede'
                }]
        }, {
            id: 'query-links',
            type: 'value',
            data: []
        }, {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count',
            // count | text
            data: []
        }, {
            id: 'entity-search',
            type: 'value'
        }, {
            id: 'entity-links',
            type: 'value',
            metadata: ['title', 'entity-type'],
            data: []
        }, {
            id: 'date-from',
            type: 'value',
            data: []
        }, {
            id: 'date-to',
            type: 'value',
            data: []
        }],
    fields: [{
            inputs: [{
                    type: 'text',
                    facetId: 'query',
                    placeholder: 'Cerca...',
                    // icon: 'n7-icon-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [{
                                key: 'source.title',
                                operator: 'LIKE'
                            }]
                    }
                }, {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [{
                                key: 'query-all',
                                operator: '='
                            }]
                    }
                }, {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [{
                                key: 'source.entityType',
                                operator: '='
                            }]
                    }
                }]
        }, {
            header: {
                label: 'Relazione con',
                classes: 'related-class'
            },
            inputs: [{
                    type: 'checkbox',
                    facetId: 'entity-types',
                    filterConfig: {
                        isArray: true,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [{
                                key: 'entity-type',
                                operator: '='
                            }]
                    }
                }, {
                    type: 'text',
                    facetId: 'entity-search',
                    placeholder: 'Cerca entità',
                    // icon: 'n7-icon-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [{
                                key: 'title',
                                operator: 'LIKE'
                            }]
                    }
                }, {
                    type: 'link',
                    facetId: 'entity-links',
                    filterConfig: {
                        limit: 20,
                        searchIn: [{
                                key: 'source.id',
                                operator: '='
                            }]
                    }
                }]
        }, {
            header: {
                label: 'Data',
                classes: 'date-class'
            },
            inputs: [{
                    type: 'select',
                    facetId: 'date-from',
                    label: 'Dal',
                    filterConfig: {
                        searchIn: [{
                                key: 'source.dateStart',
                                operator: '>='
                            }]
                    }
                }, {
                    type: 'select',
                    facetId: 'date-to',
                    label: 'Al',
                    filterConfig: {
                        searchIn: [{
                                key: 'source.dateEnd',
                                operator: '<='
                            }]
                    }
                }]
        }],
    results: {
        order: {
            type: 'score',
            // score | text | date
            key: 'author',
            // docPath, elastic key, ecc
            direction: 'DESC',
        },
        // FIXME: collegare API
        // e controllare nuovo formato results.fields
        fields: [{
                id: 'title',
                highlight: true,
                limit: 50,
            }]
    },
    page: { offset: 0, limit: 10 }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-mock-request.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var fakeSearchRequest$ = (/**
 * @param {?} params
 * @param {?} configKeys
 * @param {?} enabledEntities
 * @return {?}
 */
function (params, configKeys, enabledEntities) {
    params.totalCount = Math.floor(Math.random() * 1000);
    console.log('fake-search-request----------->', params);
    var facets = params.facets;
    // query links
    _getFacet('query-links', facets).data = _getQueryLinksData(configKeys, enabledEntities);
    // entity types
    _getFacet('entity-types', facets).data = _getEntityTypesData(configKeys, enabledEntities);
    // entity links
    _getFacet('entity-links', facets).data = _getEntityLinksData();
    // date from
    _getFacet('date-from', facets).data = _getDateFromData();
    // date to
    _getFacet('date-to', facets).data = _getDateToData();
    return of(params);
});
/** @type {?} */
var _getFacet = (/**
 * @param {?} id
 * @param {?} facets
 * @return {?}
 */
function (id, facets) {
    return facets.filter((/**
     * @param {?} f
     * @return {?}
     */
    function (f) { return f.id === id; }))[0];
});
var ɵ0 = _getFacet;
/** @type {?} */
var _getQueryLinksData = (/**
 * @param {?} configKeys
 * @param {?} enabledEntities
 * @return {?}
 */
function (configKeys, enabledEntities) {
    return enabledEntities.map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var config = configKeys[key];
        return {
            value: key,
            label: config.label,
            counter: Math.floor(Math.random() * 100),
            // questi vanno aggiunti a mano lato front-end
            options: {
                icon: config.icon,
                classes: "color-" + key
            }
        };
    }));
});
var ɵ1 = _getQueryLinksData;
/** @type {?} */
var _getEntityTypesData = (/**
 * @param {?} configKeys
 * @param {?} enabledEntities
 * @return {?}
 */
function (configKeys, enabledEntities) {
    return enabledEntities.map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var config = configKeys[key];
        return {
            value: key,
            label: config.label,
        };
    }));
});
var ɵ2 = _getEntityTypesData;
/** @type {?} */
var _getDateFromData = (/**
 * @return {?}
 */
function () {
    return ['1990', '1991', '1992', '1993'].map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return {
            value: key,
            label: key,
        };
    }));
});
var ɵ3 = _getDateFromData;
/** @type {?} */
var _getDateToData = (/**
 * @return {?}
 */
function () {
    return ['2000', '2001', '2002', '2003'].map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return {
            value: key,
            label: key,
        };
    }));
});
var ɵ4 = _getDateToData;
/** @type {?} */
var _getEntityLinksData = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var types = ['places', 'places', 'concepts', 'people', 'people'];
    /** @type {?} */
    var items = ['milano', 'roma', 'spazio', 'rodolfo-marna', 'alighiero-boetti'];
    return items.map((/**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function (key, index) {
        /** @type {?} */
        var label = key.replace('-', ' ');
        return {
            value: key,
            label: label,
            counter: Math.floor(Math.random() * 100),
            metadata: {
                title: label,
                'entity-type': types[index]
            }
        };
    }));
});
var ɵ5 = _getEntityLinksData;

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-search-layout';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    __extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        _this.orderByLabel = 'Ordina per';
        _this.orderByOptions = [{
                value: 'text_DESC',
                label: 'Ordine alfabetico (DESC)'
            }, {
                value: 'text_ASC',
                label: 'Ordine alfabetico (ASC)'
            },
        ];
        _this.getSearchModelId = (/**
         * @return {?}
         */
        function () { return SEARCH_MODEL_ID; });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.pageTitle = this.configuration.get('search-layout').title;
        if (!this.search.model(SEARCH_MODEL_ID))
            this.search.add(SEARCH_MODEL_ID, facetsConfig);
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        this.doSearchRequest$().subscribe((/**
         * @return {?}
         */
        function () {
            _this.one('facets-wrapper').update({ searchModel: _this.searchModel });
        }));
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onOrderByChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _a = __read(payload.split('_'), 2), orderBy = _a[0], direction = _a[1];
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onPaginationChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onPaginationGoToChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var page = payload.replace('goto-', '');
        this._updateSearchPage(page);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onResultsLimitChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    };
    /**
     * @return {?}
     */
    AwSearchLayoutDS.prototype.doSearchRequest$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var enabledEntities = this.configuration.get('search-layout').enabledEntities;
        // FIXME: togliere configKeys
        // dovrebbe venire dall'API
        /** @type {?} */
        var configKeys = this.configuration.get('config-keys');
        // FIXME: mettere logica definitiva 
        // per la chiamata search
        /*
            this.communication.request$('search', {
              onError: error => console.error(error),
              params: requestParams
            })
            */
        /** @type {?} */
        var requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        var fakeResultsRequest$ = this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { entityId: '0263a407-d0dd-4647-98e2-109b0b0c05f3' }
        });
        return fakeResultsRequest$.pipe(withLatestFrom(fakeSearchRequest$(requestParams, configKeys, enabledEntities)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), resultsResponse = _b[0], searchResponse = _b[1];
            _this.totalCount = searchResponse.totalCount;
            /** @type {?} */
            var resultsTitleIndex = 0;
            // results title
            if (_this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (_this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            _this.resultsTitle = _this.configuration.get('search-layout').results[resultsTitleIndex];
            _this.searchModel.updateFacets(searchResponse.facets);
            _this.searchModel.updateTotalCount(searchResponse.totalCount);
            _this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: _this.configuration,
                // todo: swap to next line after merge
                // config: this.configuration
                page: _this.currentPage,
                size: _this.pageSize,
            });
            _this.one('aw-linked-objects').update({ items: resultsResponse.items });
        })));
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    AwSearchLayoutDS.prototype._updateSearchPage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (+page === this.currentPage)
            return of(false);
        this.currentPage = +page;
        /** @type {?} */
        var searchConfig = this.searchModel.getConfig();
        /** @type {?} */
        var pageConfig = searchConfig.page;
        var limit = pageConfig.limit;
        /** @type {?} */
        var newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    };
    return AwSearchLayoutDS;
}(LayoutDataSource));
if (false) {
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
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSearchLayoutEH = /** @class */ (function (_super) {
    __extends(AwSearchLayoutEH, _super);
    function AwSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetsChange$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwSearchLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-search-layout.init':
                    _this.dataSource.onInit(payload);
                    _this._listenToFacetsChange();
                    break;
                case 'aw-search-layout.orderbychange':
                    _this.dataSource.onOrderByChange(payload);
                    _this.facetsChange$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facetschange':
                    _this.facetsChange$.next();
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.onPaginationChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed)
                            _this.facetsChange$.next();
                    }));
                    break;
                case 'aw-linked-objects.change':
                    _this.dataSource.onResultsLimitChange(payload);
                    _this.facetsChange$.next();
                    break;
                case 'aw-linked-objects.goto':
                    _this.dataSource.onPaginationGoToChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed)
                            _this.facetsChange$.next();
                    }));
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutEH.prototype._listenToFacetsChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            function () {
                _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
            }));
        }));
    };
    return AwSearchLayoutEH;
}(EventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.facetsChange$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwSearchLayoutConfig = {
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
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSearchLayoutComponent = /** @class */ (function (_super) {
    __extends(AwSearchLayoutComponent, _super);
    function AwSearchLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search) {
        var _this = _super.call(this, layoutsConfiguration.get('AwSearchLayoutConfig') || AwSearchLayoutConfig) || this;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.communication = communication;
        _this.search = search;
        return _this;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.initPayload = /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            communication: this.communication,
            search: this.search,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwSearchLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-search-layout',
                    template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>        \n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper\">\n        <!-- Left sidebar: facets -->\n        <div class=\"aw-search__sidebar\">\n            <div class=\"aw-search__facets\">\n                <n7-facets-wrapper\n                    [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </n7-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>        \n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\" for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\" id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">{{ option.label }}</option>\n                    </select>\n                </div>     \n            </div>\n            <!-- Search details -->\n            <div class=\"aw-search__results-wrapper\">\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                    <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                    </n7-breadcrumbs>\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n                <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AwSearchLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: CommunicationService },
        { type: SearchService }
    ]; };
    return AwSearchLayoutComponent;
}(AbstractLayout));
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
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/bubble-chart-wrapper/bubble-chart-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BubbleChartWrapperComponent = /** @class */ (function () {
    function BubbleChartWrapperComponent() {
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        this.emit(type, payload);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onMouseOut = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.emit(type);
    };
    /**
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        console.log("destroyed");
    };
    BubbleChartWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-bubble-chart-wrapper',
                    template: "<div class=\"aw-bubble-chart-wrapper\" >\n    <button style=\"display: none;\" id=\"bubble-popup-menu_closebutton\"\n        (click)=\"onClick('bubble-tooltip-close-click',{entityId: (hover ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_gotobutton\"\n        (click)=\"onClick('bubble-tooltip-goto-click',{entityId:(hover  ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_selectbutton\"\n        (click)=\"onClick('bubble-tooltip-select-click',{entityId:(hover ? hover.id : null)} )\"></button>\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( hover ? hover.label : '' ) }}</h2>\n        <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n            onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( hover ? '\u00C8 collegato a '+ hover.count + ' entit\u00E0' : '' ) }}\n        </p>\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <ng-container *ngIf=\"buttons.length > 1\"></ng-container>\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n    <div [id]=\"container\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                }] }
    ];
    BubbleChartWrapperComponent.propDecorators = {
        hover: [{ type: Input }],
        emit: [{ type: Input }],
        container: [{ type: Input }],
        buttons: [{ type: Input }]
    };
    return BubbleChartWrapperComponent;
}());
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.hover;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/smart-breadcrumbs/smart-breadcrumbs.ts
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
var SmartBreadcrumbsComponent = /** @class */ (function () {
    function SmartBreadcrumbsComponent() {
        var _this = this;
        this.ngAfterViewInit = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parentWidth = _this.bcdiv.nativeElement.clientWidth;
            /** @type {?} */
            var childWidth = _this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            var liArray = _this.bcol.nativeElement.children
            // collapse condition
            ;
            // collapse condition
            if (parentWidth === childWidth) {
                /** @type {?} */
                var tippyData = document.createElement('ol');
                /** @type {?} */
                var i = 1;
                tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                while (parentWidth === childWidth && i < liArray.length - 1) {
                    if (i > 1) {
                        tippyData.appendChild(liArray[i]);
                    }
                    else {
                        tippyData.appendChild(liArray[i]);
                        liArray[i].children[0].innerText = '…';
                    }
                    _this.tippyBuilder(liArray[i], tippyData);
                    i++;
                    // update widths
                    parentWidth = _this.bcdiv.nativeElement.clientWidth;
                    childWidth = _this.bcol.nativeElement.clientWidth;
                }
            }
        });
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        function (node, content) {
            /*
                Builds tippy data for a node.
            */
            document.body.appendChild(content);
            tippy(node, {
                content: content,
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
    SmartBreadcrumbsComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return SmartBreadcrumbsComponent;
}());
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
 * Generated from: lib/arianna-web/n7-boilerplate-arianna-web.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$1 = [
    AwAboutLayoutComponent,
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwWorksLayoutComponent,
    AwSearchLayoutComponent,
    BubbleChartWrapperComponent,
    SmartBreadcrumbsComponent
];
var N7BoilerplateAriannaWebModule = /** @class */ (function () {
    function N7BoilerplateAriannaWebModule() {
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
    return N7BoilerplateAriannaWebModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/components/data-widget-wrapper/data-widget-wrapper.ts
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
var DataWidgetWrapperComponent = /** @class */ (function () {
    function DataWidgetWrapperComponent() {
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
    return DataWidgetWrapperComponent;
}());
if (false) {
    /** @type {?} */
    DataWidgetWrapperComponent.prototype.data;
    /** @type {?} */
    DataWidgetWrapperComponent.prototype.emit;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvExampleLayoutDS = /** @class */ (function (_super) {
    __extends(DvExampleLayoutDS, _super);
    function DvExampleLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DvExampleLayoutDS;
}(LayoutDataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvExampleLayoutEH = /** @class */ (function (_super) {
    __extends(DvExampleLayoutEH, _super);
    function DvExampleLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DvExampleLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
    };
    return DvExampleLayoutEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/data-widget-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvDataWidgetDS = /** @class */ (function (_super) {
    __extends(DvDataWidgetDS, _super);
    function DvDataWidgetDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    DvDataWidgetDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!data) {
            return null;
        }
    };
    return DvDataWidgetDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/graph.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvGraphDS = /** @class */ (function (_super) {
    __extends(DvGraphDS, _super);
    function DvGraphDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    DvGraphDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
    };
    return DvGraphDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/inner-title.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvInnerTitleDS = /** @class */ (function (_super) {
    __extends(DvInnerTitleDS, _super);
    function DvInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    DvInnerTitleDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
    };
    return DvInnerTitleDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/widget.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvWidgetDS = /** @class */ (function (_super) {
    __extends(DvWidgetDS, _super);
    function DvWidgetDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    DvWidgetDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return DATA_WIDGET_MOCK;
    };
    return DvWidgetDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DS$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DvDataWidgetDS: DvDataWidgetDS,
    DvGraphDS: DvGraphDS,
    DvInnerTitleDS: DvInnerTitleDS,
    DvWidgetDS: DvWidgetDS
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/event-handlers/data-widget-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvDataWidgetEH = /** @class */ (function (_super) {
    __extends(DvDataWidgetEH, _super);
    function DvDataWidgetEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DvDataWidgetEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        console.log("....");
    };
    return DvDataWidgetEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/event-handlers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var EH$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DvDataWidgetEH: DvDataWidgetEH
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DvExampleLayoutConfig = {
    layoutId: 'dv-example-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'dv-inner-title', hasStaticData: true },
        { id: 'dv-widget', hasStaticData: true },
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
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DvExampleLayoutComponent = /** @class */ (function (_super) {
    __extends(DvExampleLayoutComponent, _super);
    function DvExampleLayoutComponent() {
        return _super.call(this, DvExampleLayoutConfig) || this;
    }
    /**
     * @return {?}
     */
    DvExampleLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    DvExampleLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    DvExampleLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-example-layout',
                    template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DvExampleLayoutComponent.ctorParameters = function () { return []; };
    return DvExampleLayoutComponent;
}(AbstractLayout));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/n7-boilerplate-data-viz.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$2 = [
    DataWidgetWrapperComponent,
    DvExampleLayoutComponent,
];
var N7BoilerplateDataVizModule = /** @class */ (function () {
    function N7BoilerplateDataVizModule() {
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
    return N7BoilerplateDataVizModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/n7-boilerplate-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var N7BoilerplateLibModule = /** @class */ (function () {
    function N7BoilerplateLibModule() {
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
    return N7BoilerplateLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: n7-frontend-boilerplate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractLayout, ApolloProvider, ApolloProviderConfig, AwAboutLayoutComponent, AwAboutLayoutConfig, AwAboutLayoutDS, AwAboutLayoutEH, AwAutocompleteWrapperDS, AwAutocompleteWrapperEH, AwBubbleChartDS, AwBubbleChartEH, AwEntitaLayoutComponent, AwEntitaLayoutConfig, AwEntitaLayoutDS, AwEntitaLayoutEH, AwEntitaMetadataViewerDS, AwEntitaNavDS, AwEntitaNavEH, AwHeroDS, AwHeroEH, AwHomeAutocompleteDS, AwHomeAutocompleteEH, AwHomeBubbleChartEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwLinkedObjectsDS, AwLinkedObjectsEH, AwPatrimonioLayoutConfig, AwSchedaBreadcrumbsDS, AwSchedaImageDS, AwSchedaInnerTitleDS, AwSchedaLayoutComponent, AwSchedaLayoutDS, AwSchedaLayoutEH, AwSchedaMetadataDS, AwSchedaSidebarEH, AwSearchLayoutComponent, AwSearchLayoutConfig, AwSearchLayoutDS, AwSearchLayoutEH, AwSearchLayoutTabsDS, AwSearchLayoutTabsEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTreeDS, AwTreeEH, AwWorksLayoutComponent, AwWorksLayoutConfig, AwWorksLayoutDS, AwWorksLayoutEH, BreadcrumbsDS, BreadcrumbsEH, BubbleChartWrapperComponent, CommunicationService, ConfigurationService, DataWidgetWrapperComponent, DvDataWidgetDS, DvDataWidgetEH, DvExampleLayoutComponent, DvExampleLayoutConfig, DvExampleLayoutDS, DvExampleLayoutEH, DvGraphDS, DvInnerTitleDS, DvWidgetDS, FacetInput, FacetInputCheckbox, FacetInputLink, FacetInputSelect, FacetInputText, FacetsDS, FacetsEH, FacetsWrapperComponent, FacetsWrapperDS, FacetsWrapperEH, FooterDS, FooterEH, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateDataVizModule, N7BoilerplateLibModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, RestProviderConfig, SearchModel, SearchService, SmartBreadcrumbsComponent, SubnavDS, SubnavEH, MainLayoutComponent as ɵa, AbstractLayout as ɵb, ConfigurationService as ɵc, LayoutsConfigurationService as ɵd, MainStateService as ɵe, Page404LayoutComponent as ɵf, FacetsWrapperComponent as ɵg, CommunicationService as ɵh, ApolloProvider as ɵi, RestProvider as ɵj, AwAboutLayoutComponent as ɵk, AwEntitaLayoutComponent as ɵl, CommunicationService as ɵm, MainStateService as ɵn, AwHomeLayoutComponent as ɵo, AwSchedaLayoutComponent as ɵp, AwWorksLayoutComponent as ɵq, AwSearchLayoutComponent as ɵr, ConfigurationService as ɵs, LayoutsConfigurationService as ɵt, SearchService as ɵu, BubbleChartWrapperComponent as ɵv, SmartBreadcrumbsComponent as ɵw, DataWidgetWrapperComponent as ɵx, DvExampleLayoutComponent as ɵy };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
