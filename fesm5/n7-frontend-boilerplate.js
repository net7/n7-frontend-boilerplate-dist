import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of, fromEvent, interval } from 'rxjs';
import { map, catchError, takeUntil, tap, debounce, debounceTime } from 'rxjs/operators';
import { __extends, __assign, __spread } from 'tslib';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';

/**
 * @fileoverview added by tsickle
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
        queryBody: "\n    {\n      getTreeOfItems(treeId: \"patrimonioId\" ) {\n        id\n        label\n        icon\n        branches {\n          label\n          id\n          icon\n          branches {\n            label\n            id\n            icon\n            branches {\n              label\n              id\n              icon\n            }\n          }\n        }\n      }\n    }\n    "
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          countData {\n            type {\n              id\n              label\n              configKey\n            }\n            count\n          }\n          entitiesCountData {\n            entity {\n              id\n              label\n              typeOfEntity {\n                id\n              }\n            }\n            count\n          }\n        }\n        itemsPagination {\n          totalCount\n          items {\n            item {\n              id\n              label\n              info {\n                key\n                value\n              }\n            }\n            thumbnail\n            relatedTOEData {\n              type {\n                id\n                label\n                configKey\n              }\n              count\n            }\n          }\n        }\n      }\n    }"
    },
    'getEntityDetails': {
        queryName: 'getEntityDetails',
        queryBody: "{\n      getEntityDetails(__PARAMS__){\n        overviewTab\n        entity {\n          label\n          id\n          typeOfEntity {\n            configKey\n          }\n        }\n        fieldsTab {\n          label\n          fields {\n            key\n            value\n          }\n        }\n        entities {\n          entity {\n            id\n            label\n            typeOfEntity {\n              configKey\n            }\n          }\n          count\n        }\n        items {\n          breadcrumbs {\n            link\n            label\n          }\n          item {\n            id\n            label\n            info {\n              key\n              value\n            }\n          }\n          thumbnail\n          relatedTOEData {\n            type {\n              id\n              configKey\n            }\n            count\n          }\n        }\n      }\n    }\n    "
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: "{\n        getItemDetails(__PARAMS__){\n          title\n          text\n          subTitle\n          image\n           item {\n            id\n            icon\n          }\n          similarItems {\n            thumbnail\n              item {\n                label\n                icon\n                info {\n                  key\n                  value\n                }\n              }\n            relatedTOEData {\n              count\n              type {\n                label\n                configKey\n              }\n            }\n          }\n          connectedEntities {\n            count\n            entity{\n             id\n            label\n              typeOfEntity {\n                id\n                label\n                configKey\n              }\n            }\n          }\n          fields {\n            id\n            label\n            fields {\n              id\n              key\n              value\n            }\n          }\n          breadcrumbs {\n            label\n            link\n          }\n        }\n      }"
    },
    'autoComplete': {
        queryName: 'autoComplete',
        queryBody: "{\n      autoComplete(__PARAMS__){\n        totalCount\n        items {\n          item {\n            id\n            label\n            info {\n              key\n              value\n            }\n            icon\n          }\n          thumbnail\n          typeOfEntity {\n            id\n            configKey\n          }\n        }\n      }\n    }"
    }
};

/**
 * @fileoverview added by tsickle
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RestProviderConfig = {
    'getLastPosts': 'posts',
};

/**
 * @fileoverview added by tsickle
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
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        /** @type {?} */
        var point = RestProviderConfig[requestId];
        // default method
        if (!method)
            method = this.providerConfig.defaultMethod || 'GET';
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point)
            throw Error("No config found for requestId \"" + requestId + "\"");
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, httpOptions);
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
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService;
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
            // path control
            if (!payload.path)
                throw Error('onNavigate: no path for router navigate');
            this.router.navigate(payload.path);
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
    return MainLayoutEH;
}(EventHandler));
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
        return data;
    };
    return HeaderDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
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
var MainLayoutConfig = {
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
var MainLayoutComponent = /** @class */ (function (_super) {
    __extends(MainLayoutComponent, _super);
    function MainLayoutComponent(router, configuration, layoutsConfiguration, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('MainLayoutConfig') || MainLayoutConfig) || this;
        _this.router = router;
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
                    template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n\n        <!-- <n7-nav \n        *ngIf=\"!lb.dataSource.options.sidebar\"\n        [emit]=\"lb.widgets['subnav'].emit\"\n        [data]=\"lb.widgets['subnav'].ds.out$ | async\">\n        </n7-nav> -->\n\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\">\n                    <!-- <h1 \n                    *ngIf=\"lb.dataSource.pageTitle\"\n                    class=\"n7-top-page-bar__title\">{{ lb.dataSource.pageTitle }}</h1>\n                    <n7-breadcrumbs \n                    [emit]=\"lb.widgets['breadcrumbs'].emit\"\n                    [data]=\"lb.widgets['breadcrumbs'].ds.out$ | async\">\n                    </n7-breadcrumbs> -->\n                </div>\n                <!--<div *ngIf=\"lb.dataSource.pageTools\" class=\"n7-top-page-bar__tools\">\n                    <a *ngFor=\"let tool of lb.dataSource.pageTools\" \n                    (click)=\"lb.eventHandler.emitInner('tools-click', tool.payload)\" \n                    class=\"n7-btn {{ tool.classes || '' }}\">\n                        {{ tool.label | translate }}\n                    </a>\n                </div>-->\n            </div>\n            \n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n\n    <div class=\"n7-footer-wrapper\">\n        <div class=\"n7-footer\">\n            Footer\n        </div>\n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MainLayoutComponent.ctorParameters = function () { return [
        { type: Router },
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Page404LayoutComponent = /** @class */ (function (_super) {
    __extends(Page404LayoutComponent, _super);
    function Page404LayoutComponent(
    // private router: Router,
    // private configuration: ConfigurationService,
    layoutsConfiguration) {
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
            // configuration: this.configuration,
            // mainState: this.mainState,
            // router: this.router,
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
                    template: "<div class=\"n7-page404-layout\">\n    PAGE404!!!\n</div>"
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    MainLayoutComponent,
    Page404LayoutComponent,
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwLinkedObjectsDS = /** @class */ (function (_super) {
    __extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwLinkedObjectsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var KEYS = this.options.configKeys;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages);
    };
    return AwLinkedObjectsDS;
}(DataSource));
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
    function (el) {
        /** @type {?} */
        var item = {
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
                    function (toe) {
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
                function (crumb) {
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
        var sizeOptions = [10, 25, 50];
        return {
            pagination: {
                first: { payload: "goto-" + 1, classes: page == 1 ? "is-disabled" : '' },
                prev: { payload: "goto-" + (page - 1), classes: page == 1 ? "is-disabled" : '' },
                next: { payload: "goto-" + (page + 1), classes: page == totalPages ? "is-disabled" : '' },
                last: { payload: "goto-" + totalPages, classes: page == totalPages ? "is-disabled" : '' },
                links: makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return { text: o, selected: o == size, disabled: o > totalPages };
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
    var result = []
    // always push the first page
    ;
    // always push the first page
    result.push({ text: '1', payload: 'page-1', classes: currentPage == 1 ? 'is-active' : '' });
    for (var i = 1; i < totalPages; i++) {
        result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
    }
    return result;
}

/**
 * @fileoverview added by tsickle
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwHomeBubbleChartDS = /** @class */ (function (_super) {
    __extends(AwHomeBubbleChartDS, _super);
    function AwHomeBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // threshold below which a bubble should not show its title
        _this.thresholdShowTitle = 50;
        // threshold below which a bubble should not show its number
        _this.thresholdShowValue = 60;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data)
            return null;
        /** @type {?} */
        var bubbleCointainer = document.getElementById("bubble-chart-container");
        /** @type {?} */
        var cWidth = bubbleCointainer.offsetWidth;
        // now the bubblechart's height is hardcoded to 700, not sure
        // how it sould be actually set
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        // generic data of the bubble chart
        /** @type {?} */
        var bubblesData = {
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
        var maxBubbleValue = -1;
        /** @type {?} */
        var minBubbleValue = -1;
        /** @type {?} */
        var numOfBubbles = 0;
        /** @type {?} */
        var totalValues = 0;
        /** @type {?} */
        var numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
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
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
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
            var bubblePercentage = (bubble.count - (minBubbleValue / 3)) / ((maxBubbleValue * 3) - (minBubbleValue / 3));
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            // creation of the bubbleData object
            /** @type {?} */
            var bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + "_label0",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowTitle)
                            return null; return bubble.entity.label; }),
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
                    },
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
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 6; }),
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
    };
    return AwHomeBubbleChartDS;
}(DataSource));
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
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    __extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        data.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             */
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             * @type {?}
             */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.type.configKey) {
                headerClasses.push("color-" + facet.type.configKey);
                iconClasses.push("color-" + facet.type.configKey);
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
        function (item, i) {
            widgetData.push({ header: item, input: inputs[i] });
        }));
        return widgetData;
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
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
        var items = data.items, totalCount = data.totalCount;
        var config = this.options.config;
        /** @type {?} */
        var itemIds = [];
        /** @type {?} */
        var groups = {};
        items.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item = _a.item, typeOfEntity = _a.typeOfEntity;
            if (!groups[typeOfEntity.id]) {
                var _b = config[typeOfEntity.configKey], label = _b.label, icon = _b.icon;
                groups[typeOfEntity.id] = {
                    title: label,
                    icon: icon,
                    classes: "color-" + typeOfEntity.configKey,
                    items: [],
                };
            }
            if (itemIds.indexOf(item.id) === -1) {
                /** @type {?} */
                var metaDataValue_1 = '';
                item.info.forEach((/**
                 * @param {?} infoData
                 * @return {?}
                 */
                function (infoData) {
                    if (infoData.key === 'author')
                        metaDataValue_1 = "di " + infoData.value;
                }));
                groups[typeOfEntity.id].items.push({
                    label: item.label,
                    value: metaDataValue_1,
                    payload: {
                        source: 'item',
                        id: item.id
                    }
                });
            }
        }));
        /** @type {?} */
        var results = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ({ group: __assign({}, groups[key]) }); }));
        return {
            results: results,
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwEntitaNavDS = /** @class */ (function (_super) {
    __extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwEntitaNavDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var navigation = {
            items: [
                {
                    text: 'OVERVIEW',
                    payload: 'overview',
                },
                {
                    text: 'CAMPI',
                    payload: 'campi',
                },
                {
                    text: 'OGGETTI COLLEGATI',
                    payload: 'oggetti-collegati',
                },
                {
                    text: 'ENTITA COLLEGATE',
                    payload: 'entita-collegate',
                },
                {
                    text: 'MAXXI',
                    payload: 'maxxi',
                },
                {
                    text: 'WIKIPEDIA',
                    payload: 'wiki',
                },
            ],
            payload: 'entita-nav'
        };
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
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
          // console.log('metadata options: ', this.options);
          - - -
          Access and use this.options if the rendering
          changes based on context.
        */
        return {
            group: AwEntitaMetadataViewerDS.unpackFields(data)
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
        var extracted = [] // holds transformed object
        ;
        if (!fields)
            return []; // if is empty → quit
        for (var i = 0; i < fields.length; i++) {
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
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwTreeDS = /** @class */ (function (_super) {
    __extends(AwTreeDS, _super);
    function AwTreeDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwTreeDS.prototype.toggleNav = /**
     * @return {?}
     */
    function () {
    };
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
                _this.updateTree(it, parents, id);
            }
        }));
        this.update(data);
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
     * @private
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.parseData = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        if (data['branches']) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                treeObj['items'].push(_this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
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
        var showToggle = toggle && data['branches'] != null;
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
                function (item) {
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
}

/**
 * @fileoverview added by tsickle
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
        return data;
    };
    return AwSchedaMetadataDS;
}(DataSource));

/**
 * @fileoverview added by tsickle
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwSchedaBubbleChartDS = /** @class */ (function (_super) {
    __extends(AwSchedaBubbleChartDS, _super);
    function AwSchedaBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thresholdShowTitle = 50;
        _this.thresholdShowValue = 60;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data)
            return null;
        /** @type {?} */
        var bubbleCointainer = document.getElementById(data.containerId);
        /** @type {?} */
        var cWidth = bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        /** @type {?} */
        var bubblesData = {
            containerId: "bubbleChartContainer",
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
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
            /** @type {?} */
            var bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            /** @type {?} */
            var bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + '_label0',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return bubble.entity.label; }),
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
                            if (d.radius < _this.thresholdShowValue) {
                                mNum = 0;
                            }
                            return d.y - mNum;
                        }),
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 5; }),
                        color: 'white',
                        'classes': ''
                    },
                    {
                        id: bId + '_label1',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowValue) {
                            return null;
                        } return bubble.count; }),
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
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 6; }),
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
    };
    return AwSchedaBubbleChartDS;
}(DataSource));
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
var AwLinkedObjectsEH = /** @class */ (function (_super) {
    __extends(AwLinkedObjectsEH, _super);
    function AwLinkedObjectsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                case 'aw-linked-objects.change':
                    _this.emitOuter('change', Number(payload.value));
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        }));
    };
    return AwLinkedObjectsEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
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
                case 'aw-home-bubble-chart.mouse_enter':
                    _this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    _this.emitOuter('mouse_leave', event.payload);
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
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwHomeFacetsWrapperEH;
}(EventHandler));

/**
 * @fileoverview added by tsickle
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
                    if (payload && payload.source === 'item')
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
                    _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.parents, payload);
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
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
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
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
            params: { entityId: id }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateWidgets = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
          Updates the widgets on this layout, based on route
        */
        this.one('aw-entita-nav').update('some data');
    };
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    function (id, tab) {
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
                function (error) { return console.error(error); }),
                params: { entityId: id }
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
        console.log('Apollo responded with: ', { res: res });
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.entity.typeOfEntity.configKey].icon,
            text: this.myResponse.entity.label
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
var AwEntitaLayoutEH = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutEH, _super);
    function AwEntitaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listen = /**
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
                    /** @type {?} */
                    var paramId = _this.route.snapshot.params.id || "";
                    _this.dataSource.currentPage = _this.route.snapshot.params.page || '';
                    _this.listenRoute();
                    _this.loadNavigation(paramId);
                    break;
                case 'aw-entita-layout.destroy':
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
                case 'aw-entita-nav.click':
                    if (payload) {
                        _this.emitGlobal('navigate', {
                            path: [
                                _this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    _this.route.snapshot.params.id
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.currentPage = payload.split('-')[1];
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + _this.route.snapshot.params.id + "/oggetti-collegati/" + payload.split('-')[1]]
                    });
                    break;
                case 'aw-linked-objects.goto':
                    /** @type {?} */
                    var targetPage = Number(payload.replace('goto-', ''))
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
                    _this.dataSource.pageSize = payload;
                    _this.listenRoute(); // reloads the page content with the new page size
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwEntitaLayoutEH.prototype.listenRoute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * Listens to routing events of this layout.
         */
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // look for id
            if (params.get('id')) {
                // get item from response with id === id and return as promise
                _this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.loadContent(res);
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
    AwEntitaLayoutEH.prototype.loadNavigation = /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        var _this = this;
        /**
         * Fetches the content for this page, based on the URL.
         *
         * @param selectItem - item to get from the communication provider
         */
        this.dataSource.getNavigation('entita').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                _this.dataSource.updateWidgets(response);
            }
            if (selectedItem) {
                _this.emitOuter('selectItem', selectedItem);
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwEntitaLayoutConfig = {
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
var AwEntitaLayoutComponent = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutComponent, _super);
    function AwEntitaLayoutComponent(router, route, configuration, layoutsConfiguration, communication, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('AwEntitaLayoutConfig') || AwEntitaLayoutConfig) || this;
        _this.router = router;
        _this.route = route;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.titleService = titleService;
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
    AwEntitaLayoutComponent.prototype.initPayload = /**
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
                    template: "<div class=\"aw-entity\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav \n            [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n    \n    <div class=\"aw-entity__content\" \n         [ngSwitch]=\"lb.dataSource.selectedTab\">\n        <ng-container *ngSwitchCase=\"'overview'\">\n            <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'campi'\">\n            <ng-container *ngTemplateOutlet=\"campi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'oggetti-collegati'\">\n            <ng-container *ngTemplateOutlet=\"oggetti\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'entita-collegate'\">\n            <ng-container *ngTemplateOutlet=\"entita\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'maxxi'\">\n            <ng-container *ngTemplateOutlet=\"maxxi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'wiki'\">\n            <ng-container *ngTemplateOutlet=\"wiki\"></ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<!-- navigation page content templates -->\n<ng-template #overview>\n    <section>\n        <div class=\"aw-entity__content-section\">\n            <div class=\"aw-entity__overview-description\">\n                {{lb.dataSource.myResponse.overviewTab}}\n            </div>\n            <div class=\"aw-entita-layout__button-wrapper\">\n                <button class=\"n7-btn n7-btn-light\">DESCRIZIONE WIKIPEDIA</button>\n                <button class=\"n7-btn n7-btn-light\">DESCRIZIONE MAXXI</button>\n            </div>\n        </div>\n        \n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section\">\n                <h1>Campi</h1>\n                <button class=\"n7-btn n7-btn-light\">TUTTI I CAMPI</button>\n                <n7-metadata-viewer \n                    class=\"aw-entita-layout__metadata-viewer\"\n                    [data]=\"data\">\n                </n7-metadata-viewer>\n            </div>\n        </ng-container>\n        \n        <div class=\"aw-entity__content-section\">\n            <h1>Oggetti collegati</h1><button class=\"n7-btn n7-btn-light\">TUTTI GLI OGGETTI COLLEGATI</button>\n            <ng-container *ngFor=\"let preview of lb.widgets['aw-linked-objects'].ds.out$ | async\">\n                <n7-breadcrumbs\n                    [data]=\"preview.breadcrumbs\">\n                </n7-breadcrumbs>\n                <n7-item-preview\n                    [data]=\"preview\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n        \n    </section>\n</ng-template>\n\n<ng-template #campi>\n    <div>\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <h1>Campi</h1>\n            <n7-metadata-viewer class=\"aw-entita-layout__metadata-viewer\"\n                [data]=\"data\">\n            </n7-metadata-viewer>\n        </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #oggetti>\n    <div>\n        <h1>Oggetti collegati</h1>\n        <ng-container \n            *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n            <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n            </n7-breadcrumbs>\n            <n7-item-preview \n                [data]=\"preview\"\n                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-item-preview>\n        </ng-container>\n        <n7-pagination \n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n        </n7-pagination>\n    </div>\n</ng-template>\n\n<ng-template #entita>\n    <div>\n        Page entita\n    </div>\n</ng-template>\n\n<ng-template #maxxi>\n    <div>\n        Page maxxi\n    </div>\n</ng-template>\n\n<ng-template #wiki>\n    <div>\n        Page wiki\n    </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    AwEntitaLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
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
var AwHomeLayoutDS = /** @class */ (function (_super) {
    __extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (this are saved from the event handler's
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
        var _this = this;
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
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
            function (error) { return console.error(error); }),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                /** @type {?} */
                var teoConfigData = _this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    _this.facetData.push(__assign({}, ent.countData, teoConfigData, { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.lastWindowWidth = window.outerWidth;
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
            if (_this.lastWindowWidth != window.outerWidth) {
                _this.lastWindowWidth = window.outerWidth;
                _this.updateBubblesAndItemPreviews(true);
            }
        }));
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
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
                var bubbleId_1 = this.convertEntityIdToBubbleId(payload.entityId);
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
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleMouseEnter = /**
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
            function () { if (_this.bubblePopup)
                _this.bubblePopup.show(); }), 800);
        }));
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
        if (!response || !response.itemsPagination)
            return;
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
        this.one('aw-linked-objects').updateOptions({ context: 'home', configKeys: this.configuration.get('config-keys') });
        this.one('aw-linked-objects').update(response.itemsPagination.items);
        // scroll control
        this._scrollBackgroundControl();
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
                    this.selectedBubbles.push(bubble);
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
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
                this.updateBubblesAndItemPreviews();
            }
        }
    };
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @param onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     */
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubblesAndItemPreviews = /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    function (onlyBubbles) {
        var _this = this;
        /** @type {?} */
        var selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!onlyBubbles) {
                _this.renderPreviewsFromApolloQuery(response);
                _this.renderItemTags();
            }
            _this.setAllBubblesFromApolloQuery(response, true);
        }));
    };
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @param entityId id of the entity
     */
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    AwHomeLayoutDS.prototype.convertEntityIdToBubbleId = /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    function (entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param response apollo's response
     * @param reset true if the bubble chart has to be reset/redrawn
     */
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    AwHomeLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    function (response, reset) {
        var _this = this;
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            var currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(__assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
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
                if (_this.selectedBubbles[i].id === bubble.id)
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
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; })
        });
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
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type.id);
            }));
            if (disableFacetsIds_1) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
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
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
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
                function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
                reset: true
            });
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
                    break;
                }
            }
            tagsData.push({ label: label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id });
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
        this.updateBubblesAndItemPreviews();
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
    AwHomeLayoutDS.prototype._getSubnav = /**
     * @private
     * @return {?}
     */
    function () {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: ["aw/" + page],
                id: page
            },
            _meta: { id: page }
        }); }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getBreadcrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                }]
        };
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
        this.one('aw-home-autocomplete').updateOptions({ config: this.configuration.get('config-keys') });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
                theme: 'light-border',
                placement: 'bottom-start',
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
var AwHomeLayoutEH = /** @class */ (function (_super) {
    __extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
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
                    _this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case "aw-home-layout.bubble-tooltip-close-click":
                    _this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-home-layout.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId + "/overview"]
                    });
                    break;
                case "aw-home-layout.bubble-tooltip-select-click":
                    _this.dataSource.onBubbleTooltipClick('select', payload);
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
                /**
                 * Facets Event Handlers
                 */
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    _this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                /**
                 * Bubble Chart Event Handlers
                 */
                case 'aw-home-bubble-chart.mouse_enter':
                    _this.dataSource.onBubbleMouseEnter({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble)
                            _this.dataSource.onBubbleSelected(payload.bubble);
                    }
                    else if (payload.source === 'close')
                        _this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-autocomplete.click':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get('paths').entitaBasePath, payload.id]
                    });
                    break;
                default:
                    break;
            }
        }));
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AwHomeLayoutConfig = {
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
                    template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- hidden buttons and div used to implement the bubbles' popups -->\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_closebutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-close-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_gotobutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-goto-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_selectbutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-select-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <div class=\"aw-bubble-popup-menu\" id=\"bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.label : '' ) }}</h2>\n        <span class=\"n7-icon-close\" onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( lb.dataSource.currentHoverEntity ? '\u00C8 collegato a '+lb.dataSource.currentHoverEntity.count+' entit\u00E0' : '' ) }}\n        </p>\n\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\" [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length>0 }\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div id=\"bubble-chart-container\">\n            <n7-bubble-chart [data]=\"lb.widgets['aw-home-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-home-bubble-chart'].emit\">\n            </n7-bubble-chart>\n        </div>\n\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length>0\">\n            <div class=\"aw-home__bubble-results\" [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column' }\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\"> <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">{{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span></h1></div>\n\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\">\n                        <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                            <n7-item-preview\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\" class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    \n                    <div class=\"aw-home__bubble-results-list-actions\">\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\" href=\"\">Vedi tutti</a>\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-others\" href=\"\">Vedi altri</a>\n                    </div>\n                    \n                </div>\n               \n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-advanced-autocomplete [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n</div>"
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
        this.hasBubbles = false;
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
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { itemId: id, maxSimilarItems: maxSimilarItems }
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
            this.contentParts = [];
            /** @type {?} */
            var content = {};
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
            var group_1 = { group: [] };
            if (response.fields) {
                this.hasMetadata = true;
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) {
                    /** @type {?} */
                    var items = [];
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        items.push({ label: item.key, value: item.value });
                    }));
                    group_1.group.push({
                        title: field.label,
                        items: items
                    });
                }));
            }
            this.one('aw-scheda-metadata').update(group_1);
            /*Breadcrumb section*/
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
            };
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
        if (!response || !response.connectedEntities) {
            return;
        }
        this.allBubbles = [];
        for (var i = 0; i < response.connectedEntities.length; i++) {
            /** @type {?} */
            var color = this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.configuration.get('config-keys')[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
            this.allBubbles.push(__assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
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
    AwSchedaLayoutDS.prototype.hasSimilarItems;
    /** @type {?} */
    AwSchedaLayoutDS.prototype.imageViewerIstance;
}

/**
 * @fileoverview added by tsickle
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
                    if (response) {
                        _this.dataSource.loadContent(response);
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
                _this.dataSource.updateNavigation(response);
                _this.emitOuter('navigationresponse', response);
            }
            if (selectedItem) {
                _this.emitOuter('selectItem', selectedItem);
            }
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
                    template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n         <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree\">\n            <n7-sidebar-header\n                [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"\n            ></n7-sidebar-header>\n            <n7-tree\n                [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-tree'].emit\"\n                [hidden]=\"lb.dataSource.sidebarCollapsed\"\n            ></n7-tree>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper\">\n            <n7-breadcrumbs\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\"\n            ></n7-breadcrumbs>\n\n            <n7-inner-title\n            [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\"\n            ></n7-inner-title>\n\n            <n7-image-viewer\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\"\n            >\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\"\n                [hidden] = \"!lb.hasMetadata\"\n            >\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.metadataSectionTitle}}</div>\n                <n7-metadata-viewer\n                    [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section id=\"bubble-chart-container\" class=\"aw-scheda__bubble-chart\">\n                <div\n                    [hidden] = \"!lb.dataSource.hasBubbles\"\n                    class=\"aw-scheda__inner-title\">{{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <n7-bubble-chart [data]=\"lb.widgets['aw-scheda-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-scheda-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </section>\n\n            <section\n                [hidden] = \"!lb.dataSource.hasSimilarItems\"\n                id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items n7-grid-2\">\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                        <n7-item-preview\n                            [data]=\"widgetData\"\n                            >\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n             </section>\n        </div>\n    </div>\n</div>\n"
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$1 = [
    AwAboutLayoutComponent,
    AwEntitaLayoutComponent,
    AwHomeLayoutComponent,
    AwSchedaLayoutComponent,
    AwWorksLayoutComponent,
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
                        N7BoilerplateCommonModule,
                        N7BoilerplateAriannaWebModule,
                    ]
                },] }
    ];
    return N7BoilerplateLibModule;
}());

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
