import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DvComponentsLibModule, TABLE_MOCK } from '@n7-frontend/components';
import { ReplaySubject, empty, Subject, of } from 'rxjs';
import { map, catchError, takeUntil, tap } from 'rxjs/operators';
import { __extends, __assign, __spread } from 'tslib';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutBuilder, LayoutDataSource, EventHandler, DataSource } from '@n7-frontend/core';

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
        queryBody: "\n    {\n      getTreeOfItems(treeId: \"patrimonioId\" ) {\n        id\n        label\n        icon\n        branches {\n          label\n          id\n          icon   \n          branches {\n            label\n            id\n            icon  \n            branches {\n              label\n              id\n              icon          \n            }        \n          }       \n        }\n      }\n    }\n    "
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          countData {\n            type {\n              id\n              label\n              color\n              icon\n            }\n            count\n          }\n          entitiesCountData {\n            entity {\n              id\n              label\n              typeOfEntity {\n                id\n              }\n            }\n            count\n          }\n        }\n        itemsPagination {\n          totalCount\n          items {\n            item {\n              id\n              label\n              info {\n                key\n                value\n              }\n            }\n            thumbnail\n            relatedTOEData {\n              type {\n                id\n                label\n                icon\n                color\n              }\n              count\n            }\n          }\n        }\n      }\n    }"
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: "{\n        getItemDetails(__PARAMS__){\n            title\n            text\n            subTitle\n            image\n            fields {\n              id\n              label\n              fields {\n                id\n                key\n                value\n              }\n            }\n            item {\n              id\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n      }"
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
        }
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
                    template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n\n        <!-- <n7-nav \n        *ngIf=\"!lb.dataSource.options.sidebar\"\n        [emit]=\"lb.widgets['subnav'].emit\"\n        [data]=\"lb.widgets['subnav'].ds.out$ | async\">\n        </n7-nav> -->\n\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\">\n                    <!-- <h1 \n                    *ngIf=\"lb.dataSource.pageTitle\"\n                    class=\"n7-top-page-bar__title\">{{ lb.dataSource.pageTitle }}</h1>\n                    <n7-breadcrumbs \n                    [emit]=\"lb.widgets['breadcrumbs'].emit\"\n                    [data]=\"lb.widgets['breadcrumbs'].ds.out$ | async\">\n                    </n7-breadcrumbs> -->\n                </div>\n                <!--<div *ngIf=\"lb.dataSource.pageTools\" class=\"n7-top-page-bar__tools\">\n                    <a *ngFor=\"let tool of lb.dataSource.pageTools\" \n                    (click)=\"lb.eventHandler.emitInner('tools-click', tool.payload)\" \n                    class=\"n7-btn {{ tool.classes || '' }}\">\n                        {{ tool.label | translate }}\n                    </a>\n                </div>-->\n            </div>\n            \n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n\n    <div class=\"n7-footer-wrapper\"></div>\n</div>"
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
var AwHomeLayoutDS = /** @class */ (function (_super) {
    __extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.facetInputs = {};
        _this.allBubbles = null;
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        //public _updateBubbles: any = null;
        _this._bubbleChart = null;
        _this.maxBubblesSelectable = 3;
        _this.entityBubbleIdMap = {};
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
        var communication = _a.communication, mainState = _a.mainState;
        this.communication = communication;
        this.mainState = mainState;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.log(error); }),
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
                _this.facetData.push(__assign({}, (ent.countData), { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // this.mainState.update('subnav', this._getSubnav());
        // this.mainState.update('breadcrumbs', this._getBreadcrumbs());
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
        this.one('aw-home-item-preview-wrapper').update(response.itemsPagination.items);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            if (!this.selectedBubbles.includes(payload.bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(payload.bubble);
                    //payload.bubble.hasCloseIcon=true;
                    //if(this._updateBubbles) this._updateBubbles();
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
                //if(this._updateBubbles) this._updateBubbles();
                this.updateBubblesAndItemPreviews();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubblesAndItemPreviews = /**
     * @private
     * @return {?}
     */
    function () {
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
            function (error) { return console.log(error); }),
            params: { selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: 4 } },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.renderPreviewsFromApolloQuery(response);
            _this.renderItemTags();
            _this.setAllBubblesFromApolloQuery(response, true);
        }));
    };
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    AwHomeLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} response
     * @param {?=} reset
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
                this.allBubbles.push(__assign({}, currentToE.entitiesCountData[j], { color: currentToE.countData.type.color }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            // d3/svg doesn't allow '-' as part of the ids
            // or strings starting with a number as ids
            bubble.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
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
            //setUpdateReference: (ref) => this._updateBubbles = ref,
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
        console.log({ filterBubbles: result });
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
        console.log('changed: ' + payload + ' with value: ' + value);
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
        /** @type {?} */
        var value = this.facetInputs[payload];
        // get the text entered in this input
        console.log('entered: ' + payload + ' with value: ' + value);
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
                    this.updateBubblesAndItemPreviews();
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
        //if(this._updateBubbles) this._updateBubbles();
        this.updateBubblesAndItemPreviews();
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
                    var inputPayload = payload.inputPayload, value = payload.value;
                    // do something
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    _this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble')
                        _this.dataSource.onBubbleSelected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    else if (payload.source === 'close')
                        _this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_enter':
                    console.log('bubble mouse enter', payload);
                    // TODO: implemente behaviour
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    console.log('bubble mouse leave', payload);
                    // TODO: implemente behaviour
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload);
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
    return AwHomeLayoutEH;
}(EventHandler));
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
        console.log({ data: data });
        /** @type {?} */
        var HERO_DATA = {
            title: "Arte, architettura e fotografia nel XXI secolo",
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
        /** @type {?} */
        var HERO_PATRIMONIO_DATA = {
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
        _this.thresholdShowTitle = 50;
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
            if (maxBubbleCount < bubble.count)
                maxBubbleCount = bubble.count;
            if (minBubbleCount < 0 || minBubbleCount > bubble.count)
                minBubbleCount = bubble.count;
            numOfBubbles++;
            totalCount += bubble.count;
            if (bubble.selected)
                numOfSelectedBubbles++;
        }));
        console.log({ containerSize: Math.log(containerSize), numOfBubbles: numOfBubbles, minBubbleCount: minBubbleCount, maxBubbleCount: maxBubbleCount, totalCount: totalCount, numOfSelectedBubbles: numOfSelectedBubbles });
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
            //let bubblePercentage = ( bubble.count - (minBubbleCount/3) )/( (maxBubbleCount*3) - (minBubbleCount/3) );
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            var bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
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
            // make array of headers data
            headers.push({
                iconLeft: facet.type.icon,
                text: facet.type.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: (facet.enabled ? 'prova' : 'is-disabled') + (facet.type.color ? " " + facet.type.color : ''),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: 'Search',
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
var AwHomeItemPreviewWrapperDS = /** @class */ (function (_super) {
    __extends(AwHomeItemPreviewWrapperDS, _super);
    function AwHomeItemPreviewWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeItemPreviewWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var result = [];
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var infoGroup = [
                { label: 'Autore', value: '' },
                { label: '', value: '' }
            ];
            item.item.info.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (i.key === 'author')
                    infoGroup[0].value = i.value;
                else if (i.key === 'short_description')
                    infoGroup[1].value = i.value;
            }));
            /** @type {?} */
            var toeGroup = item.relatedTOEData.map((/**
             * @param {?} rToe
             * @return {?}
             */
            function (rToe) {
                return {
                    label: rToe.type.label,
                    value: rToe.count,
                    icon: rToe.type.icon
                };
            }));
            /** @type {?} */
            var metadata = [{ items: infoGroup }, { items: toeGroup }];
            result.push({
                image: item.thumbnail,
                title: item.item.label,
                metadata: metadata,
                payload: item.item.id
            });
        }));
        return result;
    };
    return AwHomeItemPreviewWrapperDS;
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
            if (it['_meta'] == id) {
                if (it['classes'] == "is-expanded") {
                    it['classes'] = "is-collapsed";
                }
                else {
                    it['classes'] = "is-expanded";
                }
            }
            else if (parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = "is-expanded";
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
            if (it['_meta'] == id) {
                it['classes'] = it['classes'] + " is-active";
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
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
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

var DS$1 = /*#__PURE__*/Object.freeze({
    AwHeroDS: AwHeroDS,
    AwTableDS: AwTableDS,
    AwHomeHeroPatrimonioDS: AwHomeHeroPatrimonioDS,
    AwHomeBubbleChartDS: AwHomeBubbleChartDS,
    AwHomeFacetsWrapperDS: AwHomeFacetsWrapperDS,
    AwHomeItemPreviewWrapperDS: AwHomeItemPreviewWrapperDS,
    AwHomeItemTagsWrapperDS: AwHomeItemTagsWrapperDS,
    AwTreeDS: AwTreeDS,
    AwSidebarHeaderDS: AwSidebarHeaderDS,
    AwSchedaBreadcrumbsDS: AwSchedaBreadcrumbsDS
});

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
        /* this.outerEvents$.subscribe(event => {
        
        }); */
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
        /*
        this.outerEvents$.subscribe(event => {
          
        });
        */
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
var AwHomeItemPreviewWrapperEH = /** @class */ (function (_super) {
    __extends(AwHomeItemPreviewWrapperEH, _super);
    function AwHomeItemPreviewWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeItemPreviewWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        // this.innerEvents$.subscribe( e => {
        // });
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwHomeItemPreviewWrapperEH;
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
            console.log(type);
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
            if (payload && typeof payload.source != "undefined") {
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
            if (type == 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
            }
            else if (type == 'aw-scheda-layout.selectItem') {
                _this.dataSource.selectTreeItem(payload);
                _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.parents, payload);
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
    AwHeroEH: AwHeroEH,
    AwHomeBubbleChartEH: AwHomeBubbleChartEH,
    AwHomeFacetsWrapperEH: AwHomeFacetsWrapperEH,
    AwHomeHeroPatrimonioEH: AwHomeHeroPatrimonioEH,
    AwHomeItemPreviewWrapperEH: AwHomeItemPreviewWrapperEH,
    AwHomeItemTagsWrapperEH: AwHomeItemTagsWrapperEH,
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
var AwHomeLayoutConfig = {
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
                    template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero\n            [data]=\"lb.widgets['aw-hero'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n    \n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\"\n         [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length>0 }\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                  *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header\n                    [data]=\"widgetData.header\"\n                    [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet\n                    [data]=\"widgetData.input\"\n                    [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div id=\"bubble-chart-container\">\n            <n7-bubble-chart\n            [data]=\"lb.widgets['aw-home-bubble-chart'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-bubble-chart'].emit\">\n            </n7-bubble-chart>\n        </div>\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length>0\">\n            <div [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column' }\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\"> <h1>{{ lb.dataSource.numOfItemsStr }} <span>Oggetti culturali</span></h1></div>\n                    <h3>Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                            <n7-tag\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                            </n7-tag>\n                            <br>\n                    </ng-container>\n                <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-preview-wrapper'].ds.out$ | async;\">\n                    <n7-item-preview\n                        [data]=\"widgetData\"\n                        [emit]=\"lb.widgets['aw-home-item-preview-wrapper'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero\n            [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n</div>"
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
var AwPatrimonioLayoutDS = /** @class */ (function (_super) {
    __extends(AwPatrimonioLayoutDS, _super);
    function AwPatrimonioLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    AwPatrimonioLayoutDS.prototype.onInit = /**
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
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.communication.request$('getTree', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.log(error); }),
            params: { treeId: id }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.updateNavigation = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        data['branches'].forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            treeObj['items'].push(_this.parseTree(item, false, []));
        }));
        /** @type {?} */
        var header = {
            iconLeft: 'n7-icon-tree-icon',
            text: data['label'],
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
        this.one('aw-tree').update(treeObj);
        this.one('aw-sidebar-header').update(header);
        this.one('aw-scheda-breadcrumbs').update(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            return this.communication.request$('getItemDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.log(error); }),
                params: { itemId: id }
            });
        }
        else {
            /* TODO: valori statici, da prendere da config */
            this.pageTitle = 'Collezione d\'Arte';
            this.hasBreadcrumb = false;
            this.contentParts = [
                {
                    type: "text",
                    title: 'Collezione d\'Arte',
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    type: "text",
                    title: 'Centro Archivi',
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sagittis pulvinar. Etiam iaculis maximus metus, id tincidunt libero auctor et. Proin tempus turpis vel erat ultrices, id vestibulum ante cursus. Vestibulum lobortis, ante at eleifend consequat, massa libero bibendum justo, id fermentum magna odio ac nulla. Cras aliquet scelerisque malesuada. Mauris congue fermentum tristique. Nulla imperdiet accumsan dui, tristique lobortis metus eleifend non. Donec quis odio massa. Cras sit amet sem eu turpis molestie blandit vitae sed nibh. Pellentesque ornare enim nisl, et efficitur ante elementum a. Ut nec ex finibus, congue libero feugiat, aliquam ante. Cras sem neque, pellentesque eget mi at, auctor vulputate tellus. Sed aliquam mi a tortor ultricies interdum. Etiam tincidunt nunc commodo nulla porttitor semper. Etiam porta lacinia libero a mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ];
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.loadContent = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        this.hasBreadcrumb = true;
        if (response) {
            this.contentParts = [];
            if (response.image) {
                this.contentParts.push({
                    image: response.image,
                    type: 'image'
                });
            }
            this.contentParts.push({
                title: response.title,
                content: response.text,
                type: 'text'
            });
            /** @type {?} */
            var breadcrumbs_1 = {
                items: []
            };
            if (response.fields) {
                response.fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) {
                    _this.contentParts.push({
                        title: field.label,
                        content: response.text,
                        type: 'metaGroup',
                        fields: field.fields
                    });
                }));
            }
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
    };
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.parseTree = /**
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
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (toggle) {
                treeItem['toggle'] = {
                    icon: 'n7-icon-angle-right',
                    payload: {
                        source: "toggle",
                        id: data['id'],
                        parents: currParents,
                    }
                };
            }
            if (key != "branches") {
                switch (key) {
                    case "label":
                        treeItem['text'] = data[key];
                        break;
                    case "icon":
                        if (toggle) {
                            treeItem['toggle']['icon'] = data[key];
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
    /**
     * @return {?}
     */
    AwPatrimonioLayoutDS.prototype.collapseSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        console.log(this.sidebarCollapsed);
    };
    return AwPatrimonioLayoutDS;
}(LayoutDataSource));
if (false) {
    /**
     * If you are not using these variables (from your-layout.ts),
     * remove them from here too.
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutDS.prototype.communication;
    /**
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
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.hasBreadcrumb;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.contentParts;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.tree;
    /** @type {?} */
    AwPatrimonioLayoutDS.prototype.sidebarCollapsed;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwPatrimonioLayoutEH = /** @class */ (function (_super) {
    __extends(AwPatrimonioLayoutEH, _super);
    function AwPatrimonioLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwPatrimonioLayoutEH.prototype.listen = /**
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
                        _this.emitGlobal('navigate', { path: [_this.configuration.get("paths").schedaBasePath + payload], handler: 'router' });
                    }
                    break;
                case "aw-sidebar-header.click":
                    _this.dataSource.collapseSidebar();
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwPatrimonioLayoutEH.prototype.listenRoute = /**
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
                        _this.emitGlobal('navigate', { path: [_this.configuration.get("paths").schedaBasePath + response.item.id], handler: 'router' });
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
    AwPatrimonioLayoutEH.prototype.loadNavigation = /**
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
                _this.dataSource.updateNavigation(response, selectedItem);
            }
            if (selectedItem) {
                _this.emitOuter('selectItem', selectedItem);
            }
        }));
    };
    return AwPatrimonioLayoutEH;
}(EventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.route;
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
        { id: 'aw-scheda-breadcrumbs' }
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
                    template: "<div class=\"aw-scheda-layout n7-grid-2\" id=\"scheda-layout\">\n    <div> <!--Left sidebar -->\n        <n7-sidebar-header\n            [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-sidebar-header'].emit\"\n        ></n7-sidebar-header>\n        <n7-tree\n            [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-tree'].emit\"            \n            [hidden]=\"lb.dataSource.sidebarCollapsed\"\n        ></n7-tree>\n    </div> <!--end Left sidebar -->\n    <div>  <!--Right sidebar --> \n        <n7-breadcrumbs\n            *ngIf=\"lb.dataSource.hasBreadcrumb\"\n            [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\"\n        ></n7-breadcrumbs>\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\n            <div *ngIf=\"part.type == 'image'\">\n                <div \n                [ngStyle]=\"{\n                    'background-image': 'url(' + part.image + ')',\n                    'width': '100%',\n                    'height': '200px'\n                    }\">            \n                \n                \n                </div>               \n            </div>\n\n            <div>\n                <h1>{{ part.title }}</h1>\n                <div class=\"n7-grid-2\">\n                    <div [innerHTML]=\"part.content\" >\n                                      \n                    </div>                \n                </div>\n            </div> \n            <div *ngIf=\"part.type == 'metaGroup'\">\n                <div *ngFor=\"let meta of part.fields\">\n                    <strong>{{meta.key}}: </strong><span>{{meta.value}}</span>\n                </div>  \n        </div>\n    </div>  <!--end Right sidebar -->\n</div>\n"
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
/** @type {?} */
var COMPONENTS$1 = [
    AwHomeLayoutComponent,
    AwAboutLayoutComponent,
    AwWorksLayoutComponent,
    AwSchedaLayoutComponent,
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

export { AbstractLayout, ApolloProvider, ApolloProviderConfig, AwAboutLayoutComponent, AwAboutLayoutConfig, AwAboutLayoutDS, AwAboutLayoutEH, AwHeroDS, AwHeroEH, AwHomeBubbleChartDS, AwHomeBubbleChartEH, AwHomeFacetsWrapperDS, AwHomeFacetsWrapperEH, AwHomeHeroPatrimonioDS, AwHomeHeroPatrimonioEH, AwHomeItemPreviewWrapperDS, AwHomeItemPreviewWrapperEH, AwHomeItemTagsWrapperDS, AwHomeItemTagsWrapperEH, AwHomeLayoutComponent, AwHomeLayoutConfig, AwHomeLayoutDS, AwHomeLayoutEH, AwPatrimonioLayoutConfig, AwPatrimonioLayoutDS, AwPatrimonioLayoutEH, AwSchedaBreadcrumbsDS, AwSchedaLayoutComponent, AwSchedaSidebarEH, AwSidebarHeaderDS, AwSidebarHeaderEH, AwTableDS, AwTableEH, AwTreeDS, AwTreeEH, AwWorksLayoutComponent, AwWorksLayoutConfig, AwWorksLayoutDS, AwWorksLayoutEH, BreadcrumbsDS, BreadcrumbsEH, CommunicationService, ConfigurationService, HeaderDS, HeaderEH, JsonConfigService, LayoutsConfigurationService, MainLayoutComponent, MainLayoutConfig, MainLayoutDS, MainLayoutEH, MainStateService, N7BoilerplateAriannaWebModule, N7BoilerplateCommonModule, N7BoilerplateLibModule, Page404LayoutComponent, Page404LayoutConfig, Page404LayoutDS, Page404LayoutEH, RestProvider, RestProviderConfig, SubnavDS, SubnavEH, CommunicationService as ɵa, MainStateService as ɵb };
//# sourceMappingURL=n7-frontend-boilerplate.js.map
