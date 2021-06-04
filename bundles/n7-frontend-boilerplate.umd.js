(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@n7-frontend/components'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/platform-browser'), require('@n7-frontend/core'), require('tippy.js'), require('lodash'), require('slugify'), require('ngx-extended-pdf-viewer'), require('leaflet'), require('moment'), require('leaflet.markercluster')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/boilerplate', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@n7-frontend/components', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/platform-browser', '@n7-frontend/core', 'tippy.js', 'lodash', 'slugify', 'ngx-extended-pdf-viewer', 'leaflet', 'moment', 'leaflet.markercluster'], factory) :
    (global = global || self, factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].boilerplate = {}), global.ng.core, global.ng.common, global.ng.common.http, global.components, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.platformBrowser, global.core$1, global.tippy, global.lodash, global.slugify, global.ngxExtendedPdfViewer, global.leaflet, global.moment));
}(this, (function (exports, core, common, http, components, rxjs, operators, router, platformBrowser, core$1, tippy, lodash, slugify, ngxExtendedPdfViewer, leaflet, moment) { 'use strict';

    var tippy__default = 'default' in tippy ? tippy['default'] : tippy;
    slugify = slugify && Object.prototype.hasOwnProperty.call(slugify, 'default') ? slugify['default'] : slugify;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ConfigurationService = /** @class */ (function () {
        function ConfigurationService() {
            var _this = this;
            this.defaults = {};
            this.get = function (key) { return _this.defaults[key]; };
            this.set = function (key, value) { _this.defaults[key] = value; };
        }
        ConfigurationService.ɵprov = core.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
        ConfigurationService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], ConfigurationService);
        return ConfigurationService;
    }());

    var LayoutsConfigurationService = /** @class */ (function () {
        function LayoutsConfigurationService(config) {
            var _this = this;
            this.config = config;
            this.defaults = {};
            this.get = function (key) { return _this.defaults[key]; };
            this.set = function (key, value) { _this.defaults[key] = value; };
            if (this.config.layouts) {
                Object.keys(this.config.layouts).forEach(function (key) {
                    _this.set(key, _this.config.layouts[key]);
                });
            }
        }
        LayoutsConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
        ]; };
        LayoutsConfigurationService.ɵprov = core.ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(core.ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
        LayoutsConfigurationService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __param(0, core.Inject('config')),
            __metadata("design:paramtypes", [Object])
        ], LayoutsConfigurationService);
        return LayoutsConfigurationService;
    }());

    var MainStateService = /** @class */ (function () {
        function MainStateService() {
            var _this = this;
            // custom streams
            this.custom = {};
            // default streams
            this.default = {
                headTitle: new rxjs.ReplaySubject(),
                pageTitle: new rxjs.ReplaySubject(),
                subnav: new rxjs.ReplaySubject(),
                breadcrumbs: new rxjs.ReplaySubject(),
                filters: new rxjs.ReplaySubject(),
                header: new rxjs.ReplaySubject(),
            };
            this.get$ = function (key) { return _this._get('default', key); };
            this.getCustom$ = function (key) { return _this._get('custom', key); };
            this.update = function (key, newValue) { return _this._update('default', key, newValue); };
            this.updateCustom = function (key, newValue) { return _this._update('custom', key, newValue); };
            this.has = function (key) { return !!_this.default[key]; };
            this.hasCustom = function (key) { return !!_this.custom[key]; };
        }
        MainStateService.prototype.addCustom = function (key, stream$) {
            if (this.custom[key])
                throw Error("custom stream " + key + " exists!");
            this.custom[key] = stream$;
        };
        MainStateService.prototype._update = function (type, key, newValue) {
            if (!this[type])
                throw Error(type + " stream group does not exists!");
            if (!this[type][key])
                throw Error(type + " stream " + key + " does not exists!");
            this[type][key].next(newValue);
        };
        MainStateService.prototype._get = function (type, key) {
            if (!this[type])
                throw Error(type + " stream group does not exists!");
            if (!this[type][key])
                throw Error(type + " stream " + key + " does not exists!");
            return this[type][key];
        };
        MainStateService.ɵprov = core.ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
        MainStateService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], MainStateService);
        return MainStateService;
    }());

    var ApolloProvider = /** @class */ (function () {
        function ApolloProvider(http) {
            this.http = http;
        }
        ApolloProvider.prototype.request$ = function (providerConfig, requestId, options) {
            var params = options.params, method = options.method, httpOptions = options.httpOptions;
            var query;
            if (providerConfig.config && providerConfig.config[requestId]) {
                query = providerConfig.config[requestId];
            }
            query = query || {};
            var queryName = query.queryName;
            var queryBody = query.queryBody;
            // config query control
            if (!queryName || !queryBody) {
                throw Error("No config found for requestId '" + requestId + "'");
            }
            if (params) {
                var paramsStr = this.makeParamsStr(params);
                queryBody = queryBody.replace('__PARAMS__', paramsStr);
            }
            else {
                queryBody = queryBody.replace('(__PARAMS__)', '');
            }
            var source$;
            if (method && method === 'GET') {
                source$ = this.http.get(providerConfig.baseUrl);
            }
            else {
                source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
            }
            return source$.pipe(operators.map(function (response) { return response.data[queryName]; }));
        };
        ApolloProvider.prototype.makeParamsStr = function (params) {
            var _this = this;
            var paramsStr = [];
            Object.keys(params).forEach(function (key) {
                if (Array.isArray(params[key])) {
                    var arrStr_1 = [];
                    params[key].forEach(function (val) {
                        if (typeof val === 'object') {
                            var subParamsStr = _this.makeParamsStr(val);
                            arrStr_1.push("{ " + subParamsStr + " }");
                        }
                        else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                            arrStr_1.push("" + val);
                        }
                        else {
                            arrStr_1.push("\"" + val + "\"");
                        }
                    });
                    paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
                }
                else if (typeof params[key] === 'object' && params[key]) {
                    var subParamsStr = _this.makeParamsStr(params[key]);
                    paramsStr.push(key + ": { " + subParamsStr + " }");
                }
                else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                    paramsStr.push(key.replace('$', '') + ": " + params[key]);
                }
                else if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                    paramsStr.push(key + ": " + params[key]);
                }
                else {
                    paramsStr.push(key + ": \"" + params[key] + "\"");
                }
            });
            return paramsStr.join(' ');
        };
        ApolloProvider.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        ApolloProvider.ɵprov = core.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(core.ɵɵinject(http.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
        ApolloProvider = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], ApolloProvider);
        return ApolloProvider;
    }());

    var RestProvider = /** @class */ (function () {
        function RestProvider(http) {
            this.http = http;
        }
        RestProvider.prototype.request$ = function (providerConfig, requestId, options) {
            if (options === void 0) { options = {}; }
            var params = options.params, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
            var method = options.method;
            var point;
            // default method
            if (!method) {
                method = providerConfig.defaultMethod || 'GET';
            }
            if (providerConfig.config && providerConfig.config[requestId]) {
                point = providerConfig.config[requestId];
            }
            // config point control
            if (!point) {
                throw Error("No config found for requestId \"" + requestId + "\"");
            }
            if (method === 'POST' || method === 'PUT') {
                return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, params, httpOptions);
            }
            if (method === 'GET' || method === 'DELETE') {
                return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
            }
            throw Error("Rest method " + method + " not supported");
        };
        RestProvider.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        RestProvider.ɵprov = core.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(core.ɵɵinject(http.HttpClient)); }, token: RestProvider, providedIn: "root" });
        RestProvider = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], RestProvider);
        return RestProvider;
    }());

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
        CommunicationService.prototype.request$ = function (requestId, options, provider) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var activeProvider = provider || this.defaultProvider;
            var activeProviderConfig = this.communicationConfig.providers[activeProvider];
            if (!activeProviderConfig) {
                throw Error("There is no config for \"" + activeProvider + "\" provider");
            }
            // provider.type control for retrocompatibility
            var activeProviderType = activeProviderConfig.type || activeProvider;
            if (!this[activeProviderType]) {
                throw Error("There is no \"" + activeProviderType + "\" provider type");
            }
            var onError = options.onError;
            return this[activeProviderType].request$(activeProviderConfig, requestId, options)
                .pipe(operators.catchError(function (error) { return _this.handleError(error, onError); }));
        };
        CommunicationService.prototype.handleError = function (error, onError) {
            if (onError) {
                onError(error);
            }
            else {
                console.warn('No error handler for communication request', error);
            }
            return rxjs.empty();
        };
        CommunicationService.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: ApolloProvider },
            { type: RestProvider }
        ]; };
        CommunicationService.ɵprov = core.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(core.ɵɵinject(ConfigurationService), core.ɵɵinject(ApolloProvider), core.ɵɵinject(RestProvider)); }, token: CommunicationService, providedIn: "root" });
        CommunicationService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                ApolloProvider,
                RestProvider])
        ], CommunicationService);
        return CommunicationService;
    }());

    var AbstractLayout = /** @class */ (function () {
        function AbstractLayout(config) {
            this.config = config;
            this.widgets = this.config.widgets;
            this.lb = new core$1.LayoutBuilder(this.config.layoutId);
        }
        AbstractLayout.prototype.onInit = function () {
            var _this = this;
            // on ready
            this.lb.ready$.subscribe(function () {
                _this.lb.eventHandler.emitInner('init', _this.initPayload());
            });
            var LayoutDS = this.config.layoutDS;
            var LayoutEH = this.config.layoutEH;
            this.lb.init({
                widgetsConfig: this.widgets,
                widgetsDataSources: this.config.widgetsDataSources,
                widgetsEventHandlers: this.config.widgetsEventHandlers,
                dataSource: new LayoutDS(),
                eventHandler: new LayoutEH(),
            });
        };
        AbstractLayout.prototype.onDestroy = function () {
            this.lb.eventHandler.emitInner('destroy');
        };
        return AbstractLayout;
    }());

    var MainLayoutDS = /** @class */ (function (_super) {
        __extends(MainLayoutDS, _super);
        function MainLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainLayoutDS.prototype.onInit = function (_a) {
            var _this = this;
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, route = _a.route;
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
            this.mainState.get$('headTitle').subscribe(function (val) {
                _this.titleService.setTitle(val);
            });
            this.mainState.get$('pageTitle').subscribe(function (val) {
                _this.pageTitle = val;
            });
            this.mainState.get$('subnav').subscribe(function (val) {
                _this.one('subnav').update(val);
            });
            this.mainState.get$('breadcrumbs').subscribe(function (val) {
                _this.one('breadcrumbs').update(val);
            });
            this.mainState.get$('header').subscribe(function (val) {
                _this.one('header').update(val);
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
        };
        // navigate emitter (click) handler
        MainLayoutDS.prototype.onNavigate = function (payload) {
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
                        queryParamsHandling: 'merge',
                    });
                }
                else {
                    this.router.navigate(path);
                }
                // on change
                this._onRouterNavigate();
            }
        };
        // links routerLink change handler
        MainLayoutDS.prototype.onRouterChanged = function () {
            tippy.hideAll();
        };
        MainLayoutDS.prototype._onRouterNavigate = function () {
            // hide tippy
            tippy.hideAll();
        };
        return MainLayoutDS;
    }(core$1.LayoutDataSource));

    var AwFacetInput = /** @class */ (function () {
        function AwFacetInput(config) {
            var _this = this;
            this.isEmpty = false;
            this.update = function () { _this.output = _this.transform(); };
            this.getId = function () { return _this.id; };
            this.getData = function () { return _this.data; };
            this.getConfig = function () { return _this.config; };
            this.getFacetId = function () { return _this.config.facetId; };
            this.getInputIndex = function () { return _this.config.inputIndex; };
            this.getSectionIndex = function () { return _this.config.sectionIndex; };
            this.getContext = function () { return _this.config.filterConfig.context || 'external'; };
            this.getTarget = function () { return _this.config.filterConfig.target || null; };
            this.getSearchIn = function () { return _this.config.filterConfig.searchIn || null; };
            this.getType = function () { return _this.config.type; };
            this.getOutput = function () { return _this.output; };
            this.setIsEmpty = function (empty) {
                _this.isEmpty = empty;
            };
            this.setData = function (newData) { _this.data = newData; };
            this.config = config;
            this._setId();
            AwFacetInput.index += 1;
        }
        AwFacetInput.prototype.clear = function () { return null; };
        AwFacetInput.prototype._setId = function () {
            this.id = "facet-input-" + this.getType() + "-" + AwFacetInput.index;
        };
        AwFacetInput.index = 0;
        return AwFacetInput;
    }());

    var AwFacetInputCheckbox = /** @class */ (function (_super) {
        __extends(AwFacetInputCheckbox, _super);
        function AwFacetInputCheckbox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwFacetInputCheckbox.prototype.transform = function () {
            var _this = this;
            var facetId = this.getFacetId();
            return this.data.map(function (_a, index) {
                var label = _a.label, value = _a.value;
                return ({
                    type: 'checkbox',
                    id: _this.getId() + "-" + index,
                    label: label,
                    payload: {
                        facetId: facetId,
                        source: 'input-checkbox',
                        value: "" + value,
                    },
                    _meta: { facetId: facetId, value: "" + value },
                });
            });
        };
        AwFacetInputCheckbox.prototype.setActive = function (facetValue) {
            var isArray = this.config.filterConfig.isArray;
            this.output.forEach(function (config) {
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
        };
        return AwFacetInputCheckbox;
    }(AwFacetInput));

    var RESULTS_LIMIT = 2000;
    var AwFacetInputLink = /** @class */ (function (_super) {
        __extends(AwFacetInputLink, _super);
        function AwFacetInputLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwFacetInputLink.prototype.transform = function () {
            var _this = this;
            var facetId = this.getFacetId();
            var results = [];
            var resultsCounter = 0;
            this.data.forEach(function (_a) {
                var label = _a.label, counter = _a.counter, hidden = _a.hidden, rawValue = _a.value, rawOptions = _a.options;
                if (hidden) {
                    return;
                }
                resultsCounter += 1;
                if (resultsCounter > RESULTS_LIMIT) {
                    return;
                }
                // normalize value
                var value = "" + rawValue;
                var options = rawOptions || {};
                var classes = [];
                if (options.classes) {
                    classes.push(options.classes);
                }
                if (_this._isActive(_this.facetValue, value)) {
                    classes.push('is-active');
                }
                if (value === '__loading__') {
                    classes.push('loader-link');
                }
                results.push({
                    type: 'link',
                    id: _this.getId(),
                    text: label,
                    counter: counter,
                    payload: {
                        facetId: facetId,
                        source: 'input-link',
                        value: value,
                    },
                    icon: options.icon || null,
                    classes: classes.join(' '),
                    _meta: { facetId: facetId, value: value },
                });
            });
            // empty state control
            var itemEmpty = results.filter(function (item) { return item.id === 'empty'; })[0];
            if (this.isEmpty) {
                if (itemEmpty) {
                    itemEmpty.classes = 'empty-text-link';
                }
                else {
                    var label = this.getConfig().emptyState.label;
                    var emptyId = 'empty-link';
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
        };
        AwFacetInputLink.prototype.setActive = function (facetValue) {
            var _this = this;
            this.output.forEach(function (config) {
                var isActive = _this._isActive(facetValue, config._meta.value);
                var classes = config.classes ? config.classes.split(' ') : [];
                if (!isActive) {
                    classes = classes.filter(function (className) { return className !== 'is-active'; });
                }
                else if (classes.indexOf('is-active') === -1) {
                    classes.push('is-active');
                }
                config.classes = classes.join(' ');
            });
        };
        AwFacetInputLink.prototype._isActive = function (facetValue, value) {
            this.facetValue = facetValue;
            return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
                || (facetValue === value));
        };
        AwFacetInputLink.prototype.clear = function () {
            this.facetValue = [];
        };
        return AwFacetInputLink;
    }(AwFacetInput));

    var AwFacetInputSelect = /** @class */ (function (_super) {
        __extends(AwFacetInputSelect, _super);
        function AwFacetInputSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwFacetInputSelect.prototype.transform = function () {
            var facetId = this.getFacetId();
            return {
                type: 'select',
                id: this.getId(),
                label: this.config.label,
                disabled: this.config.disabled,
                options: this.data ? this.data.map(function (_a) {
                    var value = _a.value, label = _a.label;
                    return ({
                        // normalize value
                        value: "" + value,
                        label: label,
                    });
                }) : [],
                payload: {
                    facetId: facetId,
                    source: 'input-select',
                },
                _meta: { facetId: facetId },
            };
        };
        AwFacetInputSelect.prototype.setActive = function (facetValue) {
            this.output.options
                .filter(function (option) { return option.value === facetValue; })
                .forEach(function (option) { option.selected = true; });
        };
        return AwFacetInputSelect;
    }(AwFacetInput));

    // eslint-disable-next-line import/no-extraneous-dependencies
    var domParser = new DOMParser();
    var helpers = {
        prettifySnakeCase: function (key, label) {
            var _this = this;
            if (typeof label === 'string') {
                return label;
            }
            return (key || '').split('_').map(function (word, index) { return (index === 0 ? _this.ucFirst(word) : word); }).join(' ');
        },
        ucFirst: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        slugify: function (str) {
            if (!str) {
                return '';
            }
            var parsedDoc = domParser.parseFromString(str, 'text/html');
            var parsedString = parsedDoc.body.textContent || '';
            // custom replacements
            parsedString = parsedString.replace(/\//g, '-');
            return slugify(parsedString, {
                remove: /[*+~.()'"!:@,]/g,
                lower: true
            });
        },
        browserIsIE: function () {
            return window.navigator.userAgent.match(/(MSIE|Trident)/);
        },
        escapeQuotes: function (str) {
            if (typeof str !== 'string') {
                return '';
            }
            return str
                .replace(/"/g, '\\\\\\"')
                .replace(/'/g, '\\\\\'');
        },
        unescapeQuotes: function (str) {
            if (typeof str !== 'string') {
                return '';
            }
            return str
                .replace(/\\\\\\"/g, '"')
                .replace(/\\\\'/g, '\'');
        },
        escapeDoubleQuotes: function (str) {
            if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
                // match piece of string between double quotes
                return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
            }
            return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
        },
        unescapeDoubleQuotes: function (str) {
            return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
        },
        striptags: function (str) {
            if (typeof str !== 'string') {
                return '';
            }
            return str.replace(/(<([^>]+)>)/gi, '');
        },
        isElementInViewport: function (el) {
            if (!el) {
                throw Error('There is no element');
            }
            var rect = el.getBoundingClientRect();
            return rect.bottom > 0
                && rect.right > 0
                && rect.left < (window.innerWidth || document.documentElement.clientWidth)
                && rect.top < (window.innerHeight || document.documentElement.clientHeight);
        },
    };

    var AwFacetInputText = /** @class */ (function (_super) {
        __extends(AwFacetInputText, _super);
        function AwFacetInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwFacetInputText.prototype.transform = function () {
            var facetId = this.getFacetId();
            var payload = {
                facetId: facetId,
                source: 'input-text',
            };
            return {
                type: 'text',
                id: this.getId(),
                label: this.config.label,
                disabled: this.config.disabled,
                placeholder: this.config.placeholder,
                icon: this.config.icon,
                inputPayload: __assign(__assign({}, payload), { trigger: 'input' }),
                enterPayload: __assign(__assign({}, payload), { trigger: 'enter' }),
                iconPayload: __assign(__assign({}, payload), { trigger: 'icon' }),
                _meta: { facetId: facetId },
            };
        };
        AwFacetInputText.prototype.setActive = function (facetValue) {
            this.output.value = helpers.unescapeQuotes(facetValue) || null;
        };
        return AwFacetInputText;
    }(AwFacetInput));

    var INPUTS_MAP = {
        checkbox: AwFacetInputCheckbox,
        text: AwFacetInputText,
        link: AwFacetInputLink,
        select: AwFacetInputSelect,
    };
    var FILTERS_MAP = {
        '=': '_filterDataEquals',
        '>': '_filterDataGreaterThan',
        '<': '_filterDataLessThan',
        '>=': '_filterDataGreaterOrEquals',
        '<=': '_filterDataLessOrEquals',
        '<>': '_filterDataNotEqual',
        LIKE: '_filterDataLike',
    };
    var AwSearchModel = /** @class */ (function () {
        function AwSearchModel(id, config) {
            var _this = this;
            this._filters = [];
            this._facets = [];
            this._inputs = [];
            this._results$ = new rxjs.Subject();
            this.getId = function () { return _this._id; };
            this.getFilters = function () { return _this._filters; };
            this.getFacets = function () { return _this._facets; };
            this.getInputs = function () { return _this._inputs; };
            this.getConfig = function () { return _this._config; };
            this.getTotalCount = function () { return _this._totalCount; };
            this.getFields = function () { return _this._config.fields; };
            this.getResults$ = function () { return _this._results$; };
            this.setResults = function (results) { return _this._results$.next(results); };
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
        AwSearchModel.prototype.updateFilter = function (facetId, value, remove) {
            var selectedFilters = this.getFiltersByFacetId(facetId);
            selectedFilters.forEach(function (filter) {
                if (Array.isArray(filter.value) && remove) {
                    filter.value = filter.value.filter(function (item) { return item !== value; });
                }
                else if (Array.isArray(filter.value)
                    && filter.value.indexOf(value) === -1) {
                    filter.value.push(value);
                }
                else {
                    filter.value = !remove ? helpers.escapeQuotes(value) : null;
                }
            });
        };
        AwSearchModel.prototype.clear = function () {
            this.updateFiltersFromQueryParams({}, true);
            this._clearInputs();
        };
        AwSearchModel.prototype.updateFiltersFromQueryParams = function (queryParams, clearAll) {
            var _this = this;
            if (clearAll === void 0) { clearAll = false; }
            this._facets.forEach(function (_a) {
                var id = _a.id;
                var selectedFilters = _this.getFiltersByFacetId(id);
                var value = queryParams[id];
                var isInternal = _this.getInputByFacetId(id).getContext() === 'internal';
                if (isInternal && !clearAll) {
                    return;
                }
                selectedFilters.forEach(function (filter) {
                    if (filter.isArray) {
                        filter.value = value ? value.split(',') : [];
                    }
                    else {
                        filter.value = value || null;
                    }
                });
            });
        };
        AwSearchModel.prototype.updateInputsFromFilters = function () {
            var _this = this;
            this._filters.forEach(function (_a) {
                var facetId = _a.facetId, value = _a.value;
                _this.getInputByFacetId(facetId).setActive(value);
            });
        };
        AwSearchModel.prototype.updateFacets = function (facets) {
            var _this = this;
            facets.forEach(function (_a) {
                var id = _a.id, data = _a.data;
                return _this.updateFacet(id, data);
            });
            this._setInputsData();
        };
        AwSearchModel.prototype.updateTotalCount = function (totalCount) {
            this._totalCount = totalCount;
        };
        AwSearchModel.prototype.updateFacet = function (facetId, data) {
            var selectedFacets = this._facets.filter(function (facet) { return facet.id === facetId; });
            if (!selectedFacets.length) {
                throw Error("Facet with id '" + facetId + "' does not exists");
            }
            selectedFacets.forEach(function (facet) { facet.data = data; });
        };
        AwSearchModel.prototype.reset = function () {
            this._filters.forEach(function (filter) { filter.value = null; });
        };
        AwSearchModel.prototype.getRequestParams = function () {
            return {
                facets: this._getRequestFacets(),
                page: this._page,
                results: this._config.results,
                filters: this._filters
                    .filter(function (filter) { return filter.context !== 'internal'; })
                    .map(function (_a) {
                    var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn, pagination = _a.pagination;
                    return (pagination ? {
                        facetId: facetId, value: value, searchIn: searchIn, pagination: pagination
                    } : {
                        facetId: facetId, value: value, searchIn: searchIn
                    });
                }),
            };
        };
        AwSearchModel.prototype.getInternalFilters = function () {
            return this._filters
                .filter(function (filter) { return (filter.context === 'internal'
                && !lodash.isEmpty(filter.value)); })
                .map(function (_a) {
                var facetId = _a.facetId, value = _a.value, searchIn = _a.searchIn;
                return ({
                    facetId: facetId, value: value, searchIn: searchIn
                });
            });
        };
        AwSearchModel.prototype.filtersAsQueryParams = function (filters) {
            var queryParams = {};
            filters.forEach(function (filter) {
                queryParams[filter.facetId] = Array.isArray(filter.value)
                    ? filter.value.join(',')
                    : filter.value;
            });
            return queryParams;
        };
        AwSearchModel.prototype.getFiltersByFacetId = function (facetId) {
            return this._filters.filter(function (filter) { return filter.facetId === facetId; });
        };
        AwSearchModel.prototype.getInputByFacetId = function (facetId) {
            return this._inputs.filter(function (input) { return input.getFacetId() === facetId; })[0];
        };
        AwSearchModel.prototype.setInputData = function (facetId, data) {
            this.getInputByFacetId(facetId).setData(data);
        };
        AwSearchModel.prototype.filterTarget = function (target) {
            var _this = this;
            var inputs = this._inputs.filter(function (input) { return input.getTarget() === target; });
            var targetInput = this.getInputByFacetId(target);
            var facet = this._facets.filter(function (f) { return f.id === target; })[0];
            var facetData = facet.data;
            var searchIns = [];
            inputs.forEach(function (input) {
                var filter = _this.getFiltersByFacetId(input.getFacetId())[0];
                var searchIn = input.getSearchIn();
                var value = filter.value;
                searchIns.push([searchIn, value]);
            });
            // filter
            facetData.forEach(function (item) { return _this._filterData(searchIns, item); });
            // update
            targetInput.setData(facetData);
            if (targetInput.getConfig().emptyState) {
                var isEmpty = !facetData.filter(function (data) { return !data.hidden; }).length;
                targetInput.setIsEmpty(isEmpty);
            }
            targetInput.update();
        };
        AwSearchModel.prototype.setSearchConfigOrderBy = function (orderBy) {
            this._config.results.order.key = orderBy;
        };
        AwSearchModel.prototype.setSearchConfigDirection = function (direction) {
            this._config.results.order.direction = direction;
        };
        AwSearchModel.prototype.setSearchConfigType = function (type) {
            this._config.results.order.type = type;
        };
        AwSearchModel.prototype.setPageConfigOffset = function (offset) {
            this._config.page.offset = offset;
        };
        AwSearchModel.prototype.setPageConfigLimit = function (limit) {
            this._config.page.limit = limit;
        };
        AwSearchModel.prototype._clearInputs = function () {
            // do nothing
        };
        AwSearchModel.prototype._filterData = function (searchIns, item) {
            var _this = this;
            // reset
            item.hidden = false;
            searchIns.forEach(function (_a) {
                var _b = __read(_a, 2), searchIn = _b[0], value = _b[1];
                searchIn.forEach(function (_a) {
                    var key = _a.key, operator = _a.operator;
                    if (item.hidden) {
                        return;
                    }
                    var refValue = lodash.get(item, key, null);
                    if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                        var searchDataKey_1 = key.replace('searchData.', '');
                        item.searchData.forEach(function (_a) {
                            var dataKey = _a.key, dataValue = _a.value;
                            if (dataKey === searchDataKey_1) {
                                refValue = dataValue;
                            }
                        });
                    }
                    if (refValue === null) {
                        item.hidden = true;
                    }
                    else if (FILTERS_MAP[operator]) {
                        item.hidden = _this[FILTERS_MAP[operator]](value, refValue);
                    }
                    else {
                        console.warn("SearchIn: operator " + operator + " not supported");
                    }
                });
            });
        };
        AwSearchModel.prototype._filterDataEquals = function (value, refValue) {
            if (Array.isArray(refValue)) {
                if (Array.isArray(value)) {
                    var inArray_1 = value.length === 0;
                    refValue.forEach(function (rv) {
                        if (value.indexOf(rv) !== -1) {
                            inArray_1 = true;
                        }
                    });
                    return !(inArray_1);
                }
                return !(value && refValue.indexOf(value) !== -1);
            }
            if (Array.isArray(value)) {
                return !(!value.length || value.indexOf(refValue) !== -1);
            }
            return !(value && value === refValue);
        };
        AwSearchModel.prototype._filterDataGreaterThan = function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value > refValue);
            }
            return false;
        };
        AwSearchModel.prototype._filterDataLessThan = function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value < refValue);
            }
            return false;
        };
        AwSearchModel.prototype._filterDataGreaterOrEquals = function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value >= refValue);
            }
            return false;
        };
        AwSearchModel.prototype._filterDataLessOrEquals = function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value <= refValue);
            }
            return false;
        };
        AwSearchModel.prototype._filterDataNotEqual = function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value !== refValue);
            }
            return false;
        };
        AwSearchModel.prototype._filterDataLike = function (value, refValue) {
            if (value
                && typeof value === 'string'
                && typeof refValue === 'string') {
                var haystack = refValue.toLowerCase();
                var needle = value.toLocaleLowerCase();
                return !(haystack.indexOf(needle) !== -1);
            }
            return false;
        };
        AwSearchModel.prototype._setFilters = function () {
            var _this = this;
            this._config.fields.forEach(function (field) {
                field.inputs.forEach(function (input) { return _this._filters.push(__assign(__assign({}, input.filterConfig), { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null })); });
            });
        };
        AwSearchModel.prototype._setFacets = function () {
            this._facets = this._config.facets;
        };
        AwSearchModel.prototype._setPage = function () {
            this._page = this._config.page;
        };
        AwSearchModel.prototype._setTotalCount = function () {
            this._totalCount = this._config.totalCount;
        };
        AwSearchModel.prototype._setInputs = function () {
            var _this = this;
            this._config.fields.forEach(function (sectionConfig, sectionIndex) {
                sectionConfig.inputs.forEach(function (inputConfig, inputIndex) {
                    var InputModel = INPUTS_MAP[inputConfig.type];
                    if (!InputModel) {
                        throw Error("Input type " + inputConfig.type + " not supported");
                    }
                    _this._inputs.push(new InputModel(__assign(__assign({}, inputConfig), { inputIndex: inputIndex, sectionIndex: sectionIndex })));
                });
            });
        };
        AwSearchModel.prototype._setInputsData = function () {
            var _this = this;
            this._facets.forEach(function (facet) { return _this.setInputData(facet.id, facet.data); });
        };
        AwSearchModel.prototype._getRequestFacets = function () {
            var results = [];
            this._facets.forEach(function (f) {
                var facetConfig = __assign({}, f);
                if (!f.hasStaticData) {
                    delete facetConfig.data;
                }
                delete facetConfig.hasStaticData;
                // searchData control
                if (Array.isArray(facetConfig.data)) {
                    facetConfig.data
                        .filter(function (dataItem) { return typeof dataItem.searchData !== 'undefined'; })
                        .forEach(function (dataItem) {
                        delete dataItem.searchData;
                    });
                }
                results.push(facetConfig);
            });
            return results;
        };
        AwSearchModel.queryParams = null;
        return AwSearchModel;
    }());

    var MainLayoutEH = /** @class */ (function (_super) {
        __extends(MainLayoutEH, _super);
        function MainLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        MainLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'main-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.mainState = payload.mainState;
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this._listenRouterChanges();
                        _this._listenMainStateChanges();
                        break;
                    case 'main-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    default:
                        break;
                }
            });
            // listen to global events
            core$1.EventHandler.globalEvents$.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'global.navigate':
                        _this.dataSource.onNavigate(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        MainLayoutEH.prototype._listenRouterChanges = function () {
            var _this = this;
            this.route.queryParams.pipe(operators.filter(function (params) {
                if (Object.keys(params).length)
                    return true;
                return false;
            })).subscribe(function (params) {
                _this.emitGlobal('queryparams', params);
                // to use in searchs
                AwSearchModel.queryParams = params;
            });
            // router changed
            this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationStart; })).subscribe(function () {
                _this.emitOuter('routerchange');
                _this.dataSource.onRouterChanged();
            });
        };
        MainLayoutEH.prototype._listenMainStateChanges = function () {
            var _this = this;
            this.mainState.addCustom('currentNav', new rxjs.Subject());
            this.mainState.getCustom$('currentNav').subscribe(function (val) {
                _this.emitOuter('currentnavchange', val);
            });
        };
        return MainLayoutEH;
    }(core$1.EventHandler));

    var MOBILE_CLASS = 'is-mobile-nav-displayed';
    var ACTIVE_CLASS = 'is-active';
    var HeaderDS = /** @class */ (function (_super) {
        __extends(HeaderDS, _super);
        function HeaderDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderDS.prototype.transform = function (data) {
            if (!data) {
                return null;
            }
            return __assign(__assign({}, data), { menuToggle: {
                    open: {
                        payload: 'mobile-open'
                    },
                    close: {
                        payload: 'mobile-close'
                    }
                } });
        };
        HeaderDS.prototype.onCurrentNavChange = function (payload) {
            var _this = this;
            this.output.nav.items.forEach(function (item) {
                _this.updateItemClass(item, payload);
                if (item.subnav) {
                    item.subnav.forEach(function (subNavItem) {
                        _this.updateItemClass(subNavItem, payload);
                    });
                }
            });
        };
        HeaderDS.prototype.onRouterChange = function () {
            if (!this.output) {
                return;
            }
            var classes = this.output.classes;
            classes = classes || '';
            classes = classes.split(' ');
            if (classes.includes(MOBILE_CLASS)) {
                classes.splice(classes.indexOf(MOBILE_CLASS), 1);
                this.output.classes = classes.join(' ');
            }
        };
        HeaderDS.prototype.onClick = function (payload) {
            // mobile control
            if (['mobile-open', 'mobile-close'].includes(payload)) {
                var classes = this.output.classes;
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
        };
        HeaderDS.prototype.updateItemClass = function (item, payload) {
            var itemClasses = [];
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
        };
        return HeaderDS;
    }(core$1.DataSource));

    var SubnavDS = /** @class */ (function (_super) {
        __extends(SubnavDS, _super);
        function SubnavDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubnavDS.prototype.transform = function (data) {
            return {
                classes: 'main-subnav',
                items: data,
            };
        };
        SubnavDS.prototype.setActive = function (id) {
            this.output.items.forEach(function (item) {
                if (item._meta.id === id) {
                    item.classes = 'is-current';
                    item._meta.isActive = true;
                }
                else {
                    item.classes = '';
                    item._meta.isActive = false;
                }
            });
        };
        SubnavDS.prototype.getActive = function () {
            return this.output.items.filter(function (item) { return item._meta.isActive; })[0] || null;
        };
        return SubnavDS;
    }(core$1.DataSource));

    var BreadcrumbsDS = /** @class */ (function (_super) {
        __extends(BreadcrumbsDS, _super);
        function BreadcrumbsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BreadcrumbsDS.prototype.transform = function (data) {
            return data;
        };
        return BreadcrumbsDS;
    }(core$1.DataSource));

    var FacetsDS = /** @class */ (function (_super) {
        __extends(FacetsDS, _super);
        function FacetsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetsDS.prototype.transform = function (_a) {
            var fields = _a.fields;
            var searchModel = this.options.searchModel;
            this.searchModel = searchModel;
            return fields;
        };
        return FacetsDS;
    }(core$1.DataSource));

    var FooterDS = /** @class */ (function (_super) {
        __extends(FooterDS, _super);
        function FooterDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterDS.prototype.transform = function (data) {
            if (!data) {
                return null;
            }
            return data;
        };
        return FooterDS;
    }(core$1.DataSource));

    var SmartPaginationDS = /** @class */ (function (_super) {
        __extends(SmartPaginationDS, _super);
        function SmartPaginationDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.paginationBuilder = function (tp, cp, pl, m, href, qp) {
                var result = [];
                /*
                  tp - total pages
                  cp - current page
                  pl - page limit
                  m - pagination mode (href or payloads)
                  href - href for anchor wrapper
                  qp - query params for pagination
                */
                var limit = pl;
                if (tp <= limit) {
                    limit = tp - 1;
                }
                if (limit) {
                    var lp = void 0; // last page
                    var fp = void 0; // first page
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
                    for (var i = fp; i <= lp; i += 1) {
                        result.push({
                            text: String(i),
                            classes: cp === i ? 'is-active' : '',
                            anchor: cp !== i ? _this._getPaginationAnchor(i, m, href, qp) : null,
                        });
                    }
                }
                else {
                    result.push({
                        text: '1',
                        classes: cp === 1 ? 'is-active' : '',
                        anchor: cp !== 1 ? _this._getPaginationAnchor(1, m, href, qp) : null,
                    });
                    for (var i = 1; i < tp; i += 1) {
                        result.push({
                            text: String(i + 1),
                            classes: cp === i + 1 ? 'is-active' : '',
                            anchor: cp !== i + 1 ? _this._getPaginationAnchor(i + 1, m, href, qp) : null,
                        });
                    }
                }
                return {
                    links: result,
                    first: {
                        classes: cp === 1 ? 'is-disabled' : '',
                        anchor: cp !== 1 ? _this._getPaginationAnchor(1, m, href, qp) : null,
                    },
                    prev: {
                        classes: cp === 1 ? 'is-disabled' : '',
                        anchor: cp !== 1 ? _this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null,
                    },
                    next: {
                        classes: cp === tp ? 'is-disabled' : '',
                        anchor: cp !== tp ? _this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null,
                    },
                    last: {
                        classes: cp === tp ? 'is-disabled' : '',
                        anchor: cp !== tp ? _this._getPaginationAnchor(tp, m, href, qp) : null,
                    },
                };
            };
            return _this;
        }
        SmartPaginationDS.prototype.transform = function (data) {
            var totalPages = data.totalPages, currentPage = data.currentPage, pageLimit = data.pageLimit, sizes = data.sizes;
            var _a = this.options, mode = _a.mode, href = _a.href, queryParams = _a.queryParams;
            // ===== WARNINGS =====
            if (!['href', 'payload'].includes(mode)) {
                console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
            }
            var _b = this.paginationBuilder(totalPages, +currentPage, pageLimit, mode, href, queryParams), links = _b.links, first = _b.first, prev = _b.prev, next = _b.next, last = _b.last;
            return {
                first: first,
                prev: prev,
                next: next,
                last: last,
                links: links,
                select: sizes ? {
                    label: sizes.label || 'Numero di risultati',
                    options: sizes.list.map(function (s) { return ({
                        text: s,
                        selected: s === sizes.active,
                    }); }),
                    payload: 'select-size',
                } : null,
            };
        };
        SmartPaginationDS.prototype._getPaginationAnchor = function (page, mode, href, queryParams) {
            switch (mode) {
                case 'payload':
                    return {
                        payload: { source: 'pagination', page: page },
                    };
                case 'href':
                    return {
                        href: queryParams ? href : href + page,
                        queryParams: queryParams ? __assign(__assign({}, queryParams), { page: page }) : null,
                    };
                default:
                    break;
            }
            return {};
        };
        return SmartPaginationDS;
    }(core$1.DataSource));

    var DS = /*#__PURE__*/Object.freeze({
        __proto__: null,
        HeaderDS: HeaderDS,
        SubnavDS: SubnavDS,
        BreadcrumbsDS: BreadcrumbsDS,
        FacetsDS: FacetsDS,
        FooterDS: FooterDS,
        SmartPaginationDS: SmartPaginationDS
    });

    var HeaderEH = /** @class */ (function (_super) {
        __extends(HeaderEH, _super);
        function HeaderEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'header.click':
                        _this.dataSource.onClick(payload);
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'main-layout.currentnavchange':
                        _this.dataSource.onCurrentNavChange(payload);
                        break;
                    case 'main-layout.routerchange':
                        _this.dataSource.onRouterChange();
                        break;
                    default:
                        break;
                }
            });
        };
        return HeaderEH;
    }(core$1.EventHandler));

    var SubnavEH = /** @class */ (function (_super) {
        __extends(SubnavEH, _super);
        function SubnavEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubnavEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
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
            });
        };
        return SubnavEH;
    }(core$1.EventHandler));

    var BreadcrumbsEH = /** @class */ (function (_super) {
        __extends(BreadcrumbsEH, _super);
        function BreadcrumbsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BreadcrumbsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
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
            });
        };
        return BreadcrumbsEH;
    }(core$1.EventHandler));

    var FooterEH = /** @class */ (function (_super) {
        __extends(FooterEH, _super);
        function FooterEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterEH.prototype.listen = function () {
            // no events
        };
        return FooterEH;
    }(core$1.EventHandler));

    var SmartPaginationEH = /** @class */ (function (_super) {
        __extends(SmartPaginationEH, _super);
        function SmartPaginationEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SmartPaginationEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'n7-smart-pagination.change':
                        _this.emitOuter('change', payload);
                        break;
                    case 'n7-smart-pagination.click':
                        _this.emitOuter('click', payload);
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        return SmartPaginationEH;
    }(core$1.EventHandler));

    var EH = /*#__PURE__*/Object.freeze({
        __proto__: null,
        HeaderEH: HeaderEH,
        SubnavEH: SubnavEH,
        BreadcrumbsEH: BreadcrumbsEH,
        FooterEH: FooterEH,
        SmartPaginationEH: SmartPaginationEH
    });

    var MainLayoutConfig = {
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
        MainLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                router: this.router,
                route: this.route,
                titleService: this.titleService,
                options: this.config.options || {},
            };
        };
        MainLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        MainLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MainLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
        ]; };
        MainLayoutComponent = __decorate([
            core.Component({
                selector: 'main-layout',
                template: "<div class=\"n7-main-layout\" id=\"main-layout\">\r\n    <div class=\"n7-page-content\">\r\n        <n7-header\r\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['header'].emit\">\r\n        </n7-header>\r\n        <main class=\"n7-content\">\r\n            <div class=\"n7-top-page-bar\">\r\n                <div class=\"n7-top-page-bar__main\"></div>\r\n            </div>\r\n            <div class=\"n7-alert-bar\">\r\n                <!--<n7-alert\r\n                [attr.id]=\"'main-layout-alert'\"\r\n                [data]=\"lb.dataSource.alertData$ | async\"\r\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\r\n            </div>\r\n            <ng-content></ng-content>\r\n        </main>\r\n    </div>\r\n    <n7-footer\r\n        [data]=\"lb.widgets['footer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['footer'].emit\">\r\n    </n7-footer>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                ConfigurationService,
                LayoutsConfigurationService,
                MainStateService,
                platformBrowser.Title])
        ], MainLayoutComponent);
        return MainLayoutComponent;
    }(AbstractLayout));

    var Page404LayoutDS = /** @class */ (function (_super) {
        __extends(Page404LayoutDS, _super);
        function Page404LayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Page404LayoutDS.prototype.onInit = function (_a) {
            var options = _a.options;
            this.options = options;
        };
        return Page404LayoutDS;
    }(core$1.LayoutDataSource));

    var Page404LayoutEH = /** @class */ (function (_super) {
        __extends(Page404LayoutEH, _super);
        function Page404LayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        Page404LayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
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
        };
        return Page404LayoutEH;
    }(core$1.EventHandler));

    var Page404LayoutConfig = {
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

    var Page404LayoutComponent = /** @class */ (function (_super) {
        __extends(Page404LayoutComponent, _super);
        function Page404LayoutComponent(layoutsConfiguration) {
            return _super.call(this, layoutsConfiguration.get('Page404LayoutConfig') || Page404LayoutConfig) || this;
        }
        Page404LayoutComponent.prototype.initPayload = function () {
            return {
                options: this.config.options || {},
            };
        };
        Page404LayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        Page404LayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        Page404LayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService }
        ]; };
        Page404LayoutComponent = __decorate([
            core.Component({
                selector: 'n7-page404-layout',
                template: "<div class=\"n7-page404-layout\">\r\n    404 - Resource not found\r\n</div>"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService])
        ], Page404LayoutComponent);
        return Page404LayoutComponent;
    }(AbstractLayout));

    var SmartPaginationComponent = /** @class */ (function () {
        function SmartPaginationComponent() {
            this.handlePaginationEvent.bind(this);
        }
        SmartPaginationComponent.prototype.handlePaginationEvent = function (type, payload) {
            if (!this.emit)
                return;
            this.emit('change', payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SmartPaginationComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SmartPaginationComponent.prototype, "emit", void 0);
        SmartPaginationComponent = __decorate([
            core.Component({
                selector: 'n7-smart-pagination',
                template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\r\n  <n7-pagination\r\n    [data]=\"data\"\r\n    [emit]=\"emit\">\r\n  </n7-pagination>\r\n</div>"
            }),
            __metadata("design:paramtypes", [])
        ], SmartPaginationComponent);
        return SmartPaginationComponent;
    }());

    var COMPONENTS = [
        MainLayoutComponent,
        Page404LayoutComponent,
        SmartPaginationComponent,
    ];
    var N7BoilerplateCommonModule = /** @class */ (function () {
        function N7BoilerplateCommonModule() {
        }
        N7BoilerplateCommonModule_1 = N7BoilerplateCommonModule;
        N7BoilerplateCommonModule.forRoot = function (config) {
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
        };
        var N7BoilerplateCommonModule_1;
        N7BoilerplateCommonModule = N7BoilerplateCommonModule_1 = __decorate([
            core.NgModule({
                declarations: COMPONENTS,
                imports: [
                    common.CommonModule,
                    http.HttpClientModule,
                    components.DvComponentsLibModule,
                ],
                providers: [],
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            })
        ], N7BoilerplateCommonModule);
        return N7BoilerplateCommonModule;
    }());

    var AwLinkedObjectsDS = /** @class */ (function (_super) {
        __extends(AwLinkedObjectsDS, _super);
        function AwLinkedObjectsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.loadingData = false;
            _this.checkForMore = function (force) {
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
            };
            _this.handleIncomingData = function (incomingData) {
                /*
                  Called by infinite scroller, adds the incoming
                  data to the linked objects component.
                */
                _this.currentPage += 1;
                var newData = _this.unpackData(incomingData.itemsPagination);
                _this.loadedData.result = _this.loadedData.result.concat(newData.result);
                _this.checkForMore();
                _this.loadedData.isLoading = false;
            };
            /**
             * Dynamically returns the data object for each HTML component
             *  data: {
             *     previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
             *     pagination: { first, last, links, next, prev, select }
             *   }
             */
            _this.unpackData = function (data) {
                var config = _this.options.config; // app-config.json
                var paths = config.get('item-preview'); // item preview dynamic paths
                var totalCount = data.totalCount; // total amount of items available on backend
                var page = _this.currentPage; // current page (if using pagination)
                var context = _this.context; // parent layout name
                var size = _this.pageSize; // items per page (if using pagination)
                var labels = config.get('labels');
                var dynamicPagination = _this.options.dynamicPagination;
                var keys = config ? config.get('config-keys') : {};
                var lengthLimit;
                var resultsLimit;
                var d = data.items ? data.items : data.relatedItems; // items to iterate over
                if (config) {
                    // dynamic search for max-item-length
                    if (config.get(context + "-layout")) {
                        lengthLimit = config.get(context + "-layout")['max-item-length'];
                        resultsLimit = config.get(context + "-layout")['results-limit'];
                    }
                }
                // resize data if necessary
                if (!dynamicPagination && size && page && d.length > size) {
                    d = d.slice(page * size - size, page * size);
                }
                else if (size) {
                    d = d.slice(0, size);
                }
                var result = [];
                var enabledKeys = paths.metadata.info.selection.map(function (info) { return info.key; });
                d.forEach(function (el) {
                    var itemData = el.item ? el.item : el;
                    var infoData = lodash.get(el, paths.metadata.info.data, itemData.fields);
                    var toeData = lodash.get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                    var breadcrumbs = lodash.get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                    var infoDataItems = infoData
                        ? infoData.filter(function (info) { return enabledKeys.indexOf(info.key) !== -1; })
                        : [];
                    // order metadata
                    infoDataItems = infoDataItems.map(function (info) { return (__assign(__assign({}, info), { order: enabledKeys.indexOf(info.key) })); });
                    infoDataItems.sort(function (a, b) { return a.order - b.order; });
                    if (['entita', 'search', 'gallery'].includes(context)) {
                        if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                            infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                        }
                    }
                    var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                    classes += itemData.typeOfEntity ? " is-" + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
                    // gallery classes
                    if (context === 'gallery') {
                        classes += ' is-vertical has-image';
                    }
                    // consider the lenght of <em> tags to exclude from count
                    var highlights = lodash.get(el, paths.title, itemData.label).match(/<em>/g) ? lodash.get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                    var itemTitle = +paths.title.maxLength
                        && lodash.get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                        ? lodash.get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights) + "\u2026"
                        : lodash.get(el, paths.title, itemData.label);
                    var itemId = lodash.get(el, paths.payload, itemData.id);
                    var itemType = itemData.typeOfEntity;
                    var itemHref = [
                        itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                        itemId,
                        helpers.slugify(itemTitle),
                    ].join('/');
                    var text;
                    if (!paths.text) {
                        text = null;
                    }
                    else if (+paths.text.maxLength
                        && lodash.get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                        text = lodash.get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength) + "\u2026";
                    }
                    else {
                        text = lodash.get(el, paths.text.data, itemData.text);
                    }
                    var item = {
                        text: text,
                        classes: classes,
                        breadcrumbs: breadcrumbs,
                        image: lodash.get(el, paths.image, itemData.image),
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
                            items: infoDataItems.map(function (infoDItem) { return ({
                                label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                                value: infoDItem.value,
                            }); }),
                        });
                    }
                    if (toeData) {
                        item.metadata.push({
                            classes: 'aw-item-preview-entities',
                            items: toeData.map(function (toe) { return ({
                                value: lodash.get(toe, paths.metadata.toe.value, toe.count),
                                // icon: 'n7-icon-bell' // TODO: link icon to config key
                                icon: keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)]
                                    ? keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)].icon
                                    : '',
                                classes: "color-" + keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)]['class-name'],
                            }); }),
                        });
                    }
                    // breadcrumbs
                    if (breadcrumbs) {
                        item.breadcrumbs = {
                            items: lodash.get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map(function (crumb) {
                                var label = lodash.get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                                return {
                                    label: label,
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
                    var actions = [
                        {
                            label: "Mostra Tutti (" + totalCount + ")",
                        },
                        lengthLimit
                            ? {
                                label: "Mostra Altri (" + resultsLimit + ")",
                                disabled: false,
                            } : null,
                    ];
                    return {
                        result: result,
                        actions: actions,
                        isLoading: false,
                        fallback: config.get('home-layout')['linked-objects-fallback'],
                    };
                }
                return { previews: result };
            };
            return _this;
        }
        AwLinkedObjectsDS.prototype.transform = function (data) {
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
        };
        return AwLinkedObjectsDS;
    }(core$1.DataSource));

    var AwAutocompleteWrapperDS = /** @class */ (function (_super) {
        __extends(AwAutocompleteWrapperDS, _super);
        function AwAutocompleteWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Given a string, it trims it to the specified length.
             *
             * @param string an input string
             * @param limit character limit
             * @returns the resulting trimmed string
             */
            _this.stringTrim = function (string, limit) {
                if (string.length > limit) {
                    return string.slice(0, limit) + "\u2026";
                }
                return string;
            };
            return _this;
        }
        AwAutocompleteWrapperDS.prototype.transform = function (data) {
            var _this = this;
            var response = data.response;
            if (!response) {
                return { suggestion: [], loading: true };
            }
            var suggestion = [];
            var config = this.options.config;
            var maxLength = (config.get('home-layout')['max-item-length'] || 20);
            var fResults = response.results.filter(function (el) { return typeof el.entity === 'object'; });
            // eslint-disable-next-line consistent-return
            fResults.forEach(function (el) {
                if (el.entity.id === 'fallback') { // build and return fallback data
                    suggestion.push({
                        text: el.entity.label,
                        payload: 'fallback-simple-autocomplete',
                    });
                    return { suggestion: suggestion };
                }
                var text = _this.stringTrim(el.entity.label, maxLength);
                suggestion.push({
                    text: text,
                    anchor: {
                        payload: el.entity.id,
                    },
                });
            });
            return { suggestion: suggestion };
        };
        return AwAutocompleteWrapperDS;
    }(core$1.DataSource));

    var AwBubbleChartDS = /** @class */ (function (_super) {
        __extends(AwBubbleChartDS, _super);
        function AwBubbleChartDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.chartData = []; // data rendered into the graph
            _this.draw = null; // exposed component draw function to update the view
            _this.selected = []; // list of selected bubbles
            _this.filters = []; // list of active filters to show only some TypeOfEntity(s)
            _this.closedEyes = []; // array of the activated eye filters
            _this.tippyList = []; // list of tippy instances
            _this.updateChart = function (res) {
                /*
                  Redraws the graph with the incoming data.
                  "res" should be Apollo's "response.entitiesData".
                  When res is passed as null, the chart is rendered with the previous data.
                */
                var response = res;
                if (res === null) {
                    response = _this.chartData;
                }
                else {
                    _this.chartData = res;
                }
                if (_this.filters.length > 0) { // apply filters to the response
                    response = _this.chartData.filter(function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); });
                }
                if (!_this.draw) {
                    _this.update(_this.smartSlice(response)); // component self-update
                }
                else {
                    _this.output.selected = _this.selected;
                    _this.output.data = _this.smartSlice(response);
                    _this.output.smallView.data = _this.smartSlice(response, _this.options.smallChartSize);
                    _this.draw();
                }
            };
            _this.smartSlice = function (d, length) {
                var l = length || _this.options.limit;
                if (l && l < d.length) {
                    return d.slice(0, l);
                }
                return d;
            };
            _this.handleBubbleClick = function (payload) {
                /*
                  Toggles the selection of the clicked bubble.
                */
                var id = payload;
                if (_this.selected.includes(id)) {
                    _this.selected.splice(_this.selected.indexOf(id), 1); // remove selection
                }
                else {
                    _this.selected.push(id); // add selection
                }
            };
            return _this;
        }
        AwBubbleChartDS.prototype.transform = function (data) {
            var _this = this;
            var _a = this.options, config = _a.config, smallChartSize = _a.smallChartSize;
            var _b = config.get('bubble-chart'), fontRendering = _b.fontRendering, transition = _b.transition, shuffle = _b.shuffle;
            var domain = [];
            var range = [];
            var colorConfig = config.get('config-keys');
            Object.keys(colorConfig).forEach(function (k) {
                domain.push(k.replace(/-/g, ' '));
                range.push(((colorConfig[k] || {}).color || {}).hex);
            });
            var commonParams = {
                containerId: 'bubbleChartContainer',
                setDraw: function (draw) { _this.draw = draw; },
                colorMatch: { domain: domain, range: range },
                selected: this.selected,
                sizeRange: [0.5, 500],
                fontRendering: fontRendering,
                height: 500,
                width: 500,
                transition: transition,
                shuffle: shuffle,
            };
            /*
            Two data streams are ouputted.
            The default stream is for the normal visualization,
            "smallView" is used for a compressed view of the same data.
            */
            return __assign(__assign({}, commonParams), { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: __assign(__assign({}, commonParams), { data: this.smartSlice(data, smallChartSize) }) });
        };
        return AwBubbleChartDS;
    }(core$1.DataSource));

    var AwChartTippyDS = /** @class */ (function (_super) {
        __extends(AwChartTippyDS, _super);
        function AwChartTippyDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwChartTippyDS.prototype.transform = function (data) {
            // ====== DATA ======
            var bubbles = data.bubbles, selected = data.selected;
            var _a = this.options, basePath = _a.basePath, selectable = _a.selectable;
            // ==================
            var templates = bubbles.map(function (b) {
                var count = b.count, entity = b.entity;
                var id = entity.id, label = entity.label, relation = entity.relation, relationName = entity.relationName;
                return {
                    id: id,
                    selectable: selectable,
                    title: label,
                    text: "\u00C8 collegato a " + count + " risultati",
                    isSelected: selected.includes(id),
                    anchorData: {
                        href: "" + basePath + id + "/" + helpers.slugify(label),
                    },
                    relation: {
                        key: relationName,
                        value: relation,
                    }
                };
            });
            return templates;
        };
        return AwChartTippyDS;
    }(core$1.DataSource));

    var AwCarouselDS = /** @class */ (function (_super) {
        __extends(AwCarouselDS, _super);
        function AwCarouselDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwCarouselDS.prototype.transform = function (data) {
            var res = {
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
                slides: data.map(function (slide) {
                    var items = [];
                    var action;
                    var background;
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
                        items: items,
                        action: action,
                        background: background
                    });
                })
            };
            return res;
        };
        return AwCarouselDS;
    }(core$1.DataSource));

    var AwHeroDS = /** @class */ (function (_super) {
        __extends(AwHeroDS, _super);
        function AwHeroDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.currentInputValue = '';
            return _this;
        }
        AwHeroDS.prototype.transform = function (data) {
            var title = data.title, text = data.text, button = data.button, backgroundImage = data.backgroundImage, input = data.input, classes = data.classes;
            return {
                title: title,
                text: text,
                backgroundImage: backgroundImage,
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
                classes: classes,
            };
        };
        return AwHeroDS;
    }(core$1.DataSource));

    var AwTableDS = /** @class */ (function (_super) {
        __extends(AwTableDS, _super);
        function AwTableDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwTableDS.prototype.transform = function () {
            return components.TABLE_MOCK;
        };
        return AwTableDS;
    }(core$1.DataSource));

    var AwHomeHeroPatrimonioDS = /** @class */ (function (_super) {
        __extends(AwHomeHeroPatrimonioDS, _super);
        function AwHomeHeroPatrimonioDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeHeroPatrimonioDS.prototype.transform = function (data) {
            return data;
        };
        return AwHomeHeroPatrimonioDS;
    }(core$1.DataSource));

    var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
        __extends(AwHomeFacetsWrapperDS, _super);
        function AwHomeFacetsWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.autoComplete = {}; // autocomplete data for each facet
            _this.lockedFacets = {}; // locked means that the eye cannot be closed
            // store the last response so the component can be rendered again with the same data
            _this.lastData = {};
            _this.closedEyes = []; // list of closed eyes
            _this.openTippy = ''; // tipe of entity of the currently open tippy
            _this.tippyMaker = function (id) {
                /*
                  Builds or updates Tippy for the input in use (id)
                */
                var newId = id.replace(/ /g, '-');
                // create data for this facet
                if (!_this.autoComplete[newId]) {
                    _this.autoComplete[newId] = {
                        tippy: undefined,
                        open: true,
                    };
                    var ac_1 = _this.autoComplete[newId];
                    var getContent = function () {
                        var contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                        contentNode.setAttribute('style', 'display: block');
                        return contentNode;
                    };
                    if (!ac_1.tippy) {
                        // target the correct this.autoComplete[id] input class
                        var target = document.getElementsByClassName(newId)[1];
                        ac_1.tippy = tippy__default(target, {
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
                var ac = _this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.show();
                }
            };
            _this.tippyClose = function (id) {
                var newId = id.replace(/ /g, '-');
                if (_this.autoComplete[newId]) {
                    var ac = _this.autoComplete[newId];
                    if (ac.tippy) {
                        ac.tippy.hide();
                    }
                }
            };
            return _this;
        }
        AwHomeFacetsWrapperDS.prototype.transform = function (data) {
            var _this = this;
            this.lastData = data;
            var headers = [];
            var inputs = [];
            var facetData = data;
            var lockedFacets = this.lockedFacets; // locked means that the eye cannot be closed
            var closedEyes = this.closedEyes; // list of closed eyes
            // when facet data changes, destroy every tippy and reset autocomplete data.
            Object.keys(this.autoComplete).forEach(function (id) {
                if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                    _this.autoComplete[id].tippy.destroy(); // destroy
                }
            });
            this.autoComplete = {}; // reset data
            facetData.forEach(function (facet, j) {
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
                Object.keys(lockedFacets).forEach(function (key) {
                    // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                    var index = lockedFacets[key].indexOf('LOCK_LAST');
                    if (index >= 0) {
                        lockedFacets[key].splice(index, 1);
                    }
                });
                if (closedEyes) {
                    if (closedEyes.length === facetData.length - 1) {
                        var lastFacet = facetData.find(function (f) { return !closedEyes.includes(f.type.replace(/ /g, '-')); });
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
                var headerClasses = [];
                var iconClasses = [facet.icon];
                if (!facet.enabled) {
                    headerClasses.push('is-disabled');
                }
                if (facet['class-name']) {
                    headerClasses.push("color-" + facet['class-name']);
                    iconClasses.push("color-" + facet['class-name']);
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
                                    id: facet.type.replace(/ /g, '-') + "-" + j,
                                    type: 'text',
                                    placeholder: facet['input-placeholder'],
                                    icon: 'n7-icon-search',
                                    disabled: !facet.enabled,
                                    inputPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                    iconPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                    enterPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                    classes: String(facet.type.replace(' ', '-')) + "-search",
                                },
                            ],
                        },
                    ],
                });
            });
            // zipping arrays to render widgets with separate data (see home-layout.html)
            return headers.map(function (h, i) { return ({ header: h, input: inputs[i] }); });
        };
        return AwHomeFacetsWrapperDS;
    }(core$1.DataSource));

    var AwHomeItemTagsWrapperDS = /** @class */ (function (_super) {
        __extends(AwHomeItemTagsWrapperDS, _super);
        function AwHomeItemTagsWrapperDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeItemTagsWrapperDS.prototype.transform = function (data) {
            return data;
        };
        return AwHomeItemTagsWrapperDS;
    }(core$1.DataSource));

    var AwHomeAutocompleteDS = /** @class */ (function (_super) {
        __extends(AwHomeAutocompleteDS, _super);
        function AwHomeAutocompleteDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeAutocompleteDS.prototype.transform = function (data) {
            var response = data.response, query = data.query;
            var results = response.results, totalCount = response.totalCount;
            var _a = this.options, keys = _a.keys, config = _a.config, paths = _a.paths;
            var labels = this.options.labels || {};
            var itemIds = [];
            var groups = {};
            results.forEach(function (_a) {
                var item = _a.item, entity = _a.entity;
                var groupId = entity ? entity.typeOfEntity : item.document_type;
                var groupConfig = keys[groupId];
                var mainMetadata = groupConfig['main-metadata'];
                var currentItem = item || entity;
                if (!groups[groupId]) {
                    var label = groupConfig.label, icon = groupConfig.icon;
                    groups[groupId] = {
                        title: label,
                        icon: icon,
                        classes: "color-" + groupConfig['class-name'],
                        items: [],
                        type: groupId,
                    };
                }
                if (itemIds.indexOf(currentItem.id) === -1) {
                    var metadata_1 = [];
                    if (currentItem.fields) {
                        currentItem.fields.forEach(function (_a) {
                            var key = _a.key, value = _a.value;
                            if (mainMetadata && key === mainMetadata) {
                                metadata_1.push({ key: helpers.prettifySnakeCase(key, labels[key]), value: value });
                            }
                        });
                    }
                    groups[groupId].items.push({
                        title: currentItem.label,
                        metadata: metadata_1,
                        anchor: {
                            href: paths[entity ? 'entitaBasePath' : 'schedaBasePath'] + "/" + currentItem.id + "/" + helpers.slugify(currentItem.label),
                        },
                    });
                }
            });
            var grouplist = Object.keys(groups).map(function (key) { return ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes,
                },
                items: groups[key].items,
            }); });
            return {
                results: grouplist,
                actions: grouplist.length > 0 ? {
                    showMore: {
                        text: "Visualizza tutti i " + totalCount + " risultati",
                        anchor: {
                            href: paths.searchBasePath,
                            queryParams: {
                                query: query,
                            },
                        },
                    },
                } : {
                    showMore: {
                        text: 'Cerca in tutti i campi',
                        anchor: {
                            href: paths.searchBasePath,
                            queryParams: {
                                query: query,
                                'query-all': 1,
                            },
                        },
                    },
                },
                fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
            };
        };
        return AwHomeAutocompleteDS;
    }(core$1.DataSource));

    var AwEntitaNavDS = /** @class */ (function (_super) {
        __extends(AwEntitaNavDS, _super);
        function AwEntitaNavDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwEntitaNavDS.prototype.transform = function (param) {
            if (!param) {
                return null;
            }
            var data = param.data, selected = param.selected;
            var navigation = { items: [], payload: 'entita-nav' };
            var _a = this.options, hasMetadataFields = _a.hasMetadataFields, labels = _a.labels;
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
                anchor: { href: param.basePath + "/informazioni" },
                classes: selected === 'informazioni' ? 'is-selected' : '',
            });
            if (data.relatedLa) {
                navigation.items.push({
                    text: labels['aggregazioni-logiche-collegate'],
                    anchor: { href: param.basePath + "/fondi-collegati" },
                    classes: selected === 'fondi-collegati' ? 'is-selected' : '',
                });
            }
            if (data.relatedItems) {
                navigation.items.push({
                    text: 'OGGETTI COLLEGATI',
                    anchor: {
                        href: param.basePath + "/oggetti-collegati",
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
                    anchor: { href: param.basePath + "/entita-collegate" },
                    classes: selected === 'entita-collegate' ? 'is-selected' : '',
                });
            }
            if (data.extraTab) {
                navigation.items.push({
                    text: 'MAXXI',
                    anchor: { href: param.basePath + "/maxxi" },
                    classes: selected === 'maxxi' ? 'is-selected' : '',
                });
            }
            if (data.wikiTab) {
                navigation.items.push({
                    text: 'WIKIPEDIA',
                    anchor: { href: param.basePath + "/wiki" },
                    classes: selected === 'wiki' ? 'is-selected' : '',
                });
            }
            // one tab control
            if (navigation.items.length === 2 && !hasMetadataFields) {
                navigation.items.shift();
            }
            return navigation;
        };
        return AwEntitaNavDS;
    }(core$1.DataSource));

    var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
        __extends(AwEntitaMetadataViewerDS, _super);
        function AwEntitaMetadataViewerDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasFields = false;
            return _this;
        }
        AwEntitaMetadataViewerDS.prototype.transform = function (data) {
            this.hasFields = !!(Array.isArray(data) && data.length);
            return {
                group: [{
                        items: data || []
                    }]
            };
        };
        return AwEntitaMetadataViewerDS;
    }(core$1.DataSource));

    var AwRelatedEntitiesDS = /** @class */ (function (_super) {
        __extends(AwRelatedEntitiesDS, _super);
        function AwRelatedEntitiesDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.transform = function (data) {
                var basePath = _this.options.config.get('paths').entitaBasePath;
                var title = _this.options.title;
                var previews = data ? data.map(function (d) { return ({
                    title: d.entity.label,
                    anchor: {
                        href: "" + basePath + d.entity.id + "/" + d.entity.label,
                    },
                    classes: "is-" + d.entity.typeOfEntity,
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
                }); }) : [];
                return { previews: previews };
            };
            return _this;
        }
        return AwRelatedEntitiesDS;
    }(core$1.DataSource));

    var AwSchedaBreadcrumbsDS = /** @class */ (function (_super) {
        __extends(AwSchedaBreadcrumbsDS, _super);
        function AwSchedaBreadcrumbsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.transform = function (data) { return data; };
            return _this;
        }
        AwSchedaBreadcrumbsDS.prototype.toggleSidebar = function () {
            var sidebarData = this.output;
            if (sidebarData.classes === 'is-expanded') {
                sidebarData.classes = 'is-collapsed';
            }
            else {
                sidebarData.classes = 'is-expanded';
            }
            this.update(sidebarData);
        };
        return AwSchedaBreadcrumbsDS;
    }(core$1.DataSource));

    var AwSchedaDropdownDS = /** @class */ (function (_super) {
        __extends(AwSchedaDropdownDS, _super);
        function AwSchedaDropdownDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaDropdownDS.prototype.transform = function (response) {
            var digitalObjects = response.digitalObjects;
            var firstObject = digitalObjects[0];
            return {
                header: {
                    label: firstObject.label,
                    icon: {
                        id: 'n7-icon-caret-down'
                    },
                    payload: 'toggle',
                },
                items: digitalObjects.map(function (_a, index) {
                    var label = _a.label, type = _a.type;
                    return ({
                        label: label,
                        type: type,
                        payload: index,
                        selected: index === 0,
                    });
                })
            };
        };
        AwSchedaDropdownDS.prototype.toggle = function () {
            var classes = this.output.classes;
            this.output.classes = classes ? null : 'is-open';
        };
        AwSchedaDropdownDS.prototype.onChange = function (payload) {
            var _this = this;
            // link check
            if (this.output.items[payload].type !== 'external') {
                this.output.items.forEach(function (item) {
                    item.selected = item.payload === payload;
                    if (item.selected) {
                        _this.output.header.label = item.label;
                    }
                });
            }
            // close
            this.toggle();
        };
        return AwSchedaDropdownDS;
    }(core$1.DataSource));

    var AwSidebarHeaderDS = /** @class */ (function (_super) {
        __extends(AwSidebarHeaderDS, _super);
        function AwSidebarHeaderDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSidebarHeaderDS.prototype.transform = function (data) {
            return {
                iconLeft: 'n7-icon-tree-icon',
                text: data.text || '',
                iconRight: data.isExpanded ? 'n7-icon-angle-left' : 'n7-icon-angle-right',
                classes: data.isExpanded ? 'is-expanded' : 'is-collapsed',
                payload: 'header',
            };
        };
        AwSidebarHeaderDS.prototype.toggleSidebar = function () {
            var sidebarData = this.output;
            if (sidebarData.classes === 'is-expanded') {
                sidebarData.classes = 'is-collapsed';
                sidebarData.iconRight = 'n7-icon-angle-right';
            }
            else {
                sidebarData.classes = 'is-expanded';
                sidebarData.iconRight = 'n7-icon-angle-left';
            }
        };
        return AwSidebarHeaderDS;
    }(core$1.DataSource));

    var AwSchedaImageDS = /** @class */ (function (_super) {
        __extends(AwSchedaImageDS, _super);
        function AwSchedaImageDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaImageDS.prototype.transform = function (data) {
            var _this = this;
            var tileSources = this.getTileSources(data.items);
            return {
                images: [],
                viewerId: data.id,
                libOptions: {
                    tileSources: tileSources,
                    sequenceMode: true,
                    showReferenceStrip: true,
                    autoHideControls: false,
                    showNavigator: false,
                },
                _setViewer: function (viewer) {
                    _this.instance = viewer;
                }
            };
        };
        AwSchedaImageDS.prototype.hasInstance = function () {
            return !!this.instance;
        };
        AwSchedaImageDS.prototype.updateImages = function (data) {
            var _this = this;
            if (!this.instance)
                return;
            // container exists check
            rxjs.interval(10).pipe(operators.filter(function () { return !!document.getElementById(_this.output.viewerId); }), operators.first()).subscribe(function () {
                // reset
                _this.instance.world.removeAll();
                setTimeout(function () {
                    var images = _this.getTileSources(data.items);
                    _this.instance.open(images);
                });
            });
        };
        AwSchedaImageDS.prototype.reset = function () {
            if (!this.instance)
                return;
            this.instance.world.removeAll();
        };
        AwSchedaImageDS.prototype.getTileSources = function (images) {
            var tileSources = [];
            images.forEach(function (_a) {
                var type = _a.type, url = _a.url, iiifImages = _a.iiifImages;
                if (type === 'images-simple') {
                    tileSources.push({
                        url: url,
                        type: 'image'
                    });
                }
                else if (type === 'images-iip') {
                    // FIXME: togliere replace
                    tileSources.push(url.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi'));
                }
                else if (type === 'images-iiif') {
                    iiifImages.forEach(function (iiifUrl) {
                        tileSources.push(iiifUrl);
                    });
                }
            });
            return tileSources;
        };
        return AwSchedaImageDS;
    }(core$1.DataSource));

    var AwSchedaInnerTitleDS = /** @class */ (function (_super) {
        __extends(AwSchedaInnerTitleDS, _super);
        function AwSchedaInnerTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaInnerTitleDS.prototype.transform = function (data) {
            return data;
        };
        return AwSchedaInnerTitleDS;
    }(core$1.DataSource));

    var AwSchedaMetadataDS = /** @class */ (function (_super) {
        __extends(AwSchedaMetadataDS, _super);
        function AwSchedaMetadataDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaMetadataDS.prototype.transform = function (data) {
            return {
                group: [{
                        items: data || []
                    }]
            };
        };
        return AwSchedaMetadataDS;
    }(core$1.DataSource));

    var DEFAULT_OPTIONS = {
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
    var AwSchedaPdfDS = /** @class */ (function (_super) {
        __extends(AwSchedaPdfDS, _super);
        function AwSchedaPdfDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaPdfDS.prototype.transform = function (data) {
            var items = data.items;
            var libOptions = lodash.merge(DEFAULT_OPTIONS, this.options.libOptions || {});
            if (!(Array.isArray(items) && items.length)) {
                return null;
            }
            this.items = items.map(function (item, index) { return (__assign(__assign({}, item), { selected: index === 0 })); });
            console.log('libOptions----------------------------->', libOptions);
            // defaults
            return {
                libOptions: libOptions,
                items: this.items,
                next: 1,
                prev: null,
                currentUrl: items[0].url,
            };
        };
        AwSchedaPdfDS.prototype.onChange = function (index) {
            this.output.next = index < (this.items.length - 1) ? index + 1 : null;
            this.output.prev = index > 0 ? index - 1 : null;
            this.output.currentUrl = this.items[index].url;
            this.items.forEach(function (item, itemIndex) {
                item.selected = itemIndex === index;
            });
        };
        AwSchedaPdfDS.prototype.onLoaded = function () {
            this.output.classes = 'is-loaded';
        };
        return AwSchedaPdfDS;
    }(core$1.DataSource));

    var AwTreeDS = /** @class */ (function (_super) {
        __extends(AwTreeDS, _super);
        function AwTreeDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.transform = function (data) { return data; };
            _this._getCachedData = function () { return AwTreeDS.dataCache[_this.rootId]; };
            _this._normalize = function (_a) {
                var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches, type = _a.document_type, classification = _a.document_classification;
                var hasBranches = !!(Array.isArray(branches) && branches.length);
                _this._getCachedData().flatData[id] = {
                    id: id, label: label, icon: icon, img: img, hasBranches: hasBranches, type: type, classification: classification
                };
                if (hasBranches) {
                    branches.forEach(function (data) {
                        _this._getCachedData().flatIds.push([id, data.id]);
                        _this._normalize(data);
                    });
                }
            };
            _this._getParent = function (id) { return _this._getCachedData().flatIds
                .filter(function (_a) {
                var _b = __read(_a, 2), childId = _b[1];
                return childId === id;
            })
                .map(function (_a) {
                var _b = __read(_a, 1), parentId = _b[0];
                return parentId;
            })[0] || null; };
            _this._getTreePath = function (id) {
                var ids = [id];
                var currentId = id;
                while (currentId) {
                    var parentId = _this._getParent(currentId);
                    if (parentId) {
                        ids.push(parentId);
                    }
                    currentId = parentId;
                }
                return ids.reverse();
            };
            _this._getTree = function (path) {
                var tree = {};
                var counter = 0;
                var loadItems = function (id, source) {
                    counter += 1;
                    var nextParent = path[counter];
                    source.items = [];
                    _this._getCachedData().flatIds
                        .filter(function (_a) {
                        var _b = __read(_a, 1), parentId = _b[0];
                        return parentId === id;
                    })
                        .forEach(function (_a, index) {
                        var _b = __read(_a, 2), childId = _b[1];
                        var inPath = childId === nextParent;
                        var item = _this._getTreeItem(childId, inPath);
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
            _this._getTreeItem = function (id, inPath) {
                var _a = _this._getCachedData().flatData[id], label = _a.label, img = _a.img, hasBranches = _a.hasBranches, type = _a.type, classification = _a.classification;
                var defaultIcon = (_this.options.config[type] || { icon: null }).icon;
                var specificIcon = '';
                var lastSegment = /.*\.(\w+)$/;
                if (classification && lastSegment.test(classification)) {
                    var classID = classification
                        .match(lastSegment)[1] // get classification characters
                        .toUpperCase(); // normalize
                    specificIcon = _this.options.config[type].classifications[classID].icon;
                }
                var arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
                var classes = [];
                if (inPath) {
                    classes.push('is-expanded');
                }
                if (_this.activeId === id) {
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
                            id: id,
                        },
                    } : null,
                    meta: id,
                    anchor: {
                        href: _this.basePath + "/" + id + "/" + helpers.slugify(label),
                    },
                };
            };
            return _this;
        }
        AwTreeDS.prototype.load = function (data) {
            var tree = data.tree, basePath = data.basePath;
            this.rootId = tree.id;
            this.basePath = basePath;
            // save in cache
            if (!AwTreeDS.dataCache[this.rootId]) {
                AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
                this._normalize(tree);
            }
        };
        AwTreeDS.prototype.build = function (id) {
            var path = this._getTreePath(id);
            var oldPath = this._getTreePath(this.currentId);
            var oldPathIndex = oldPath.indexOf(id);
            if (oldPathIndex > 0) {
                path.splice(oldPathIndex);
                this.currentId = null;
            }
            else if (this.currentId === id) {
                var idIndex = path.indexOf(this.currentId);
                path.splice(idIndex);
                this.currentId = null;
            }
            else {
                this.currentId = id;
            }
            var tree = this._getTree(path);
            this.update(tree);
        };
        AwTreeDS.prototype.setActive = function (id) {
            this.activeId = id;
        };
        AwTreeDS.prototype.highlightActive = function () {
            var _this = this;
            var control = function (items) {
                items.forEach(function (item) {
                    var founded = item.meta === _this.activeId;
                    var hasActive = item.classes.indexOf('is-active') !== -1;
                    // clear is-active
                    if (hasActive && !founded) {
                        var currentClasses = item.classes.split(' ');
                        currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                        item.classes = currentClasses.join(' ');
                    }
                    if (founded) {
                        var currentClasses = item.classes.split(' ');
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
        };
        AwTreeDS.dataCache = {};
        return AwTreeDS;
    }(core$1.DataSource));

    var AwSearchLayoutTabsDS = /** @class */ (function (_super) {
        __extends(AwSearchLayoutTabsDS, _super);
        function AwSearchLayoutTabsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.selected = 'list';
            return _this;
        }
        AwSearchLayoutTabsDS.prototype.transform = function () {
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
        };
        AwSearchLayoutTabsDS.prototype.setSelected = function (tabId) {
            this.selected = tabId;
        };
        return AwSearchLayoutTabsDS;
    }(core$1.DataSource));

    // import { isEmpty } from 'lodash';
    var ENTITY_LINKS_CLASS = 'entity-links';
    var ENTITY_LINKS_PARENT_SELECTOR = '.n7-facets-wrapper__group:last-child .n7-facet__section-input-links';
    var loaderItem = {
        counter: null,
        label: 'Caricamento in corso...',
        searchData: [],
        value: '__loading__',
    };
    var entityLinksHelper = {
        paginationState: {},
        paginate$: new rxjs.Subject(),
        listenToChanges: function (dataSource) {
            var _this = this;
            var facetsWrapperEH = dataSource.getWidgetEventHandler('facets-wrapper');
            return rxjs.merge(facetsWrapperEH.internalFacetsChange$.pipe(operators.mapTo(null)), this.paginate$).pipe(operators.debounceTime(500), operators.switchMap(function (pagination) {
                var requestParams = dataSource.searchModel.getRequestParams();
                var internalFilters = dataSource.searchModel.getInternalFilters();
                _this.paginationState.offset = pagination ? _this.paginationState.offset : 0;
                _this.updateParamsOffset(requestParams);
                var filters = __spread(requestParams.filters, internalFilters);
                var params = {
                    searchParameters: __assign(__assign({ totalCount: 100, gallery: !!(dataSource.searchModel.getId() === 'aw-gallery-layout') }, requestParams), { filters: filters }),
                };
                // initial loader
                if (_this.paginationState.offset === 0) {
                    _this.addInitialLoader(dataSource);
                }
                return dataSource.getFacetsReq$(params);
            }));
        },
        onFacetsResponse: function (searchModel, facets) {
            // pagination control
            var entityLinksFacet = facets.find(function (_a) {
                var id = _a.id;
                return id === ENTITY_LINKS_CLASS;
            });
            var totalCount = entityLinksFacet.totalCount;
            var _a = this.paginationState, limit = _a.limit, offset = _a.offset;
            if (typeof limit === 'undefined') {
                limit = 10;
            }
            if (typeof offset === 'undefined') {
                offset = 0;
            }
            this.paginationState.totalCount = totalCount;
            if (offset > 0) {
                var entityLinksInput_1 = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
                var oldData = entityLinksInput_1.getData() || [];
                // remove fake loading element
                if (oldData.length) {
                    oldData.pop();
                }
                var newData = oldData.concat(entityLinksFacet.data);
                entityLinksFacet.data = newData;
            }
            if (this.paginationState.totalCount > (limit + offset)) {
                entityLinksFacet.data.push(loaderItem);
            }
            // empty state
            var entityLinksInput = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
            entityLinksInput.setIsEmpty(!totalCount);
            // fix scroll
            if (offset === 0) {
                var scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
                if (scrollEl) {
                    scrollEl.scrollTop = 0;
                }
            }
            // update loading state
            this.paginationState.loading = false;
        },
        initPagination: function (searchModel) {
            var _this = this;
            searchModel.getFilters().filter(function (filter) { return (filter.pagination); }).forEach(function (_a) {
                var pagination = _a.pagination;
                _this.paginationState = __assign(__assign(__assign({}, pagination), _this.paginationState), { loading: false });
            });
            setTimeout(function () {
                var scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
                var scroll$ = rxjs.fromEvent(scrollEl, 'scroll');
                scroll$.pipe(operators.debounceTime(300)).subscribe(function (_a) {
                    var target = _a.target;
                    var _b = target, scrollTop = _b.scrollTop, clientHeight = _b.clientHeight, scrollHeight = _b.scrollHeight;
                    var _c = _this.paginationState, offset = _c.offset, limit = _c.limit, totalCount = _c.totalCount, loading = _c.loading;
                    var margin = 150;
                    if ((scrollTop + clientHeight >= scrollHeight - margin)
                        && (offset + limit < totalCount)
                        && loading === false) {
                        _this.paginationState.loading = true;
                        _this.paginationState.offset = offset + limit;
                        _this.paginate$.next(_this.paginationState);
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
        updateParamsOffset: function (params) {
            var entityLinksFilter = params.filters
                .find(function (_a) {
                var facetId = _a.facetId;
                return facetId === ENTITY_LINKS_CLASS;
            });
            if (entityLinksFilter) {
                entityLinksFilter.pagination.offset = this.paginationState.offset;
            }
        },
        resetOffset: function () {
            this.paginationState.offset = 0;
        },
        addInitialLoader: function (dataSource) {
            dataSource.searchModel.setInputData(ENTITY_LINKS_CLASS, [loaderItem]);
            var facetsWrapperDS = dataSource.getWidgetDataSource('facets-wrapper');
            facetsWrapperDS.updateInputLinks();
        }
    };

    var HEADER_ICON_OPEN = 'n7-icon-angle-down';
    var HEADER_ICON_CLOSE = 'n7-icon-angle-right';
    var AwFacetsWrapperDS = /** @class */ (function (_super) {
        __extends(AwFacetsWrapperDS, _super);
        function AwFacetsWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getRequestParams = function () { return _this.searchModel.getRequestParams(); };
            _this.filtersAsQueryParams = function (filters) { return _this.searchModel.filtersAsQueryParams(filters); };
            _this.updateFiltersFromQueryParams = function (queryParams) {
                _this.searchModel.updateFiltersFromQueryParams(queryParams);
            };
            _this.getInputByFacetId = function (facetId) { return _this.searchModel.getInputByFacetId(facetId); };
            _this.filterTarget = function (target) {
                _this.searchModel.filterTarget(target);
            };
            _this.updateInputsFromFilters = function () {
                _this.searchModel.updateInputsFromFilters();
            };
            return _this;
        }
        AwFacetsWrapperDS.prototype.transform = function (data) {
            var _this = this;
            if (!this.searchModel) {
                this.searchModel = data.searchModel;
                entityLinksHelper.initPagination(this.searchModel);
            }
            var id = this.searchModel.getId();
            var fields = this.searchModel.getFields();
            var groups = [];
            fields.forEach(function (fieldConfig, fieldIndex) {
                var groupId = "group-" + id + "-" + fieldIndex;
                // header config
                var header = _this._headerConfig(fieldConfig.header, groupId);
                // inputs config
                var sections = [];
                _this.searchModel.getInputs()
                    .filter(function (input) { return input.getSectionIndex() === fieldIndex; })
                    .map(function (input) {
                    input.update();
                    return {
                        facetId: input.getFacetId(),
                        type: input.getType(),
                        output: input.getOutput(),
                    };
                })
                    .forEach(function (_a) {
                    var type = _a.type, output = _a.output, facetId = _a.facetId;
                    sections.push({
                        classes: _this._getSectionClasses(type),
                        inputs: Array.isArray(output) ? output : [output],
                        _meta: {
                            facetId: facetId,
                        },
                    });
                });
                groups.push({
                    header: header,
                    facet: { sections: sections },
                    classes: "n7-facets-wrapper__" + groupId,
                    isOpen: true,
                    _meta: {
                        groupId: groupId,
                    },
                });
            });
            return {
                groups: groups,
                classes: "n7-facets-wrapper__" + this.searchModel.getId(),
            };
        };
        AwFacetsWrapperDS.prototype.toggleGroup = function (_a) {
            var eventPayload = _a.eventPayload;
            this.output.groups.forEach(function (group) {
                if (group._meta.groupId === eventPayload.groupId) {
                    group.isOpen = !group.isOpen;
                    group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
                }
            });
        };
        AwFacetsWrapperDS.prototype.onFacetChange = function (_a) {
            var eventPayload = _a.eventPayload;
            var _b = eventPayload.inputPayload, facetId = _b.facetId, source = _b.source, trigger = _b.trigger;
            var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
            var filterValue = filter.value;
            var remove = false;
            var value = eventPayload.inputPayload.value || eventPayload.value;
            // normalize
            value = "" + value;
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
        AwFacetsWrapperDS.prototype.updateFilteredTarget = function (target) {
            if (!this.searchModel) {
                return;
            }
            var input = this.searchModel.getInputByFacetId(target);
            this.output.groups
                .map(function (group) { return group.facet; })
                .map(function (facet) { return facet.sections; })
                .forEach(function (sections) {
                sections.forEach(function (section) {
                    if (section._meta.facetId === target) {
                        var inputOutput = input.getOutput();
                        section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                    }
                });
            });
        };
        AwFacetsWrapperDS.prototype.updateInputLinks = function () {
            var _this = this;
            if (!this.searchModel) {
                return;
            }
            var linksFacetIds = this.searchModel.getInputs()
                .filter(function (input) { return input.getType() === 'link'; })
                .map(function (input) { return input.getFacetId(); });
            this.output.groups
                .map(function (group) { return group.facet; })
                .map(function (facet) { return facet.sections; })
                .forEach(function (sections) {
                sections.forEach(function (section) {
                    if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                        var input = _this.searchModel.getInputByFacetId(section._meta.facetId);
                        input.update();
                        var inputOutput = input.getOutput();
                        section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                    }
                });
            });
        };
        AwFacetsWrapperDS.prototype._getSectionClasses = function (type) {
            var classesMap = {
                text: 'text',
                checkbox: 'checkboxes',
                link: 'links',
                select: 'select',
            };
            return "n7-facet__section-input-" + classesMap[type];
        };
        AwFacetsWrapperDS.prototype._headerConfig = function (header, groupId) {
            return header ? {
                text: header.label,
                iconRight: HEADER_ICON_OPEN,
                classes: header.classes,
                payload: {
                    source: 'group-header',
                    id: groupId + "-header",
                    groupId: groupId,
                },
                _meta: {
                    id: groupId + "-header",
                },
            } : null;
        };
        return AwFacetsWrapperDS;
    }(core$1.DataSource));

    var AwGalleryResultsDS = /** @class */ (function (_super) {
        __extends(AwGalleryResultsDS, _super);
        function AwGalleryResultsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.addPagination = function (page, totalPages, size) {
                var sizeOptions = [12, 24, 48];
                _this.pagination = {
                    first: { payload: "goto-" + 1, classes: page === 1 ? 'is-disabled' : '' },
                    prev: { payload: "goto-" + (page / 1 - 1), classes: page === 1 ? 'is-disabled' : '' },
                    next: { payload: "goto-" + (page / 1 + 1), classes: page === totalPages ? 'is-disabled' : '' },
                    last: { payload: "goto-" + totalPages, classes: page === totalPages ? 'is-disabled' : '' },
                    links: _this.makePagination(totalPages, page),
                    select: {
                        label: 'Numero di risultati',
                        options: sizeOptions.map(function (o) { return ({
                            text: o,
                            selected: o === size,
                        }); }),
                        payload: 'select-size'
                    },
                };
            };
            _this.makePagination = function (totalPages, currentPage) {
                /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
                var result = [];
                var limit = 5 - 1;
                if (totalPages <= limit) {
                    limit = totalPages - 1;
                }
                // always push the first page
                if (limit) {
                    var lastPage = void 0;
                    var firstPage = void 0;
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
                    for (var i = firstPage; i <= lastPage; i++) {
                        result.push({
                            text: String(i),
                            payload: "page-" + String(i),
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
                    for (var i = 1; i < totalPages; i++) {
                        result.push({ text: String(i + 1), payload: "page-" + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                    }
                }
                return result;
            };
            return _this;
        }
        AwGalleryResultsDS.prototype.transform = function (data) {
            if (!data)
                return null;
            var _a = this.options, pageSize = _a.pageSize, currentPage = _a.currentPage;
            // if the data doesn't fit on one page, render the pagination component
            if (data.length > pageSize) {
                this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
            }
            return {
                res: data.slice(0, pageSize),
                pagination: this.pagination
            };
        };
        AwGalleryResultsDS.prototype.chunks = function (a, size) {
            var results = [];
            while (a.length) {
                results.push(a.splice(0, size));
            }
            return results;
        };
        return AwGalleryResultsDS;
    }(core$1.DataSource));

    var MARKER_ICON = leaflet.icon({
        iconUrl: '/assets/pin.png',
        iconSize: [30, 45.5],
        popupAnchor: [0, -25],
        className: 'marker-icon'
    });
    var MARKER_ICON_SELECTED = leaflet.icon({
        iconUrl: '/assets/pin-selected.png',
        iconSize: [30, 45.5],
        popupAnchor: [0, -25],
        className: 'marker-icon-selected'
    });
    var AwMapDS = /** @class */ (function (_super) {
        __extends(AwMapDS, _super);
        function AwMapDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.markerOpen$ = new rxjs.Subject();
            _this.markerClose$ = new rxjs.Subject();
            _this.transform = function (data) { return ({
                containerId: 'map-canvas',
                tileLayers: [{
                        url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                        options: {}
                    }],
                initialView: {
                    center: [0, 0],
                    zoom: 13
                },
                _setInstance: function (map) {
                    _this.map = map;
                    var bounds = new leaflet.LatLngBounds(data
                        .filter(function (d) { return _this.isValidMarker(d); })
                        .map(function (_a) {
                        var lat = _a.lat, lon = _a.lon;
                        return [lat, lon];
                    }));
                    _this.map.fitBounds(bounds);
                    // adding markers
                    var markers = leaflet.markerClusterGroup({
                        showCoverageOnHover: false,
                    });
                    data
                        // skip broken markers
                        .filter(function (d) { return (_this.isValidMarker(d)); })
                        // draw markers on the map
                        .forEach(function (_a) {
                        var lat = _a.lat, lon = _a.lon, item = _a.item;
                        var label = item.label;
                        var marker$1 = leaflet.marker([lat, lon], { icon: MARKER_ICON })
                            .addTo(markers)
                            .bindPopup(label)
                            .on('click', function (_a) {
                            var target = _a.target;
                            var icon = target.options.icon;
                            var className = icon.options.className;
                            if (className === 'marker-icon-selected') {
                                _this.markerOpen$.next(item);
                            }
                        });
                        marker$1.getPopup().on('remove', function (_a) {
                            var target = _a.target;
                            target._source.setIcon(MARKER_ICON);
                            _this.markerClose$.next();
                        });
                        marker$1.getPopup().on('add', function (_a) {
                            var target = _a.target;
                            target._source.setIcon(MARKER_ICON_SELECTED);
                        });
                    });
                    _this.map.addLayer(markers);
                }
            }); };
            return _this;
        }
        /**
         * Performs validation for a leaflet marker data.
         * If the data is invalid displays an error.
         *
         * @param marker data for a leaflet marker
         * @returns true if the marker data is valid
         */
        AwMapDS.prototype.isValidMarker = function (_a) {
            var lat = _a.lat, lon = _a.lon;
            var test = (lat
                && lon
                && /^-?\d+\.\d*$/.test(lat)
                && /^-?\d+\.\d*$/.test(lon));
            if (test)
                return true;
            console.error(lat + ", " + lon + " is not a valid marker!");
            return false;
        };
        return AwMapDS;
    }(core$1.DataSource));

    var ONE_YEAR = 31557600000;
    var YEARS_MARGIN = 30;
    var AwTimelineDS = /** @class */ (function (_super) {
        __extends(AwTimelineDS, _super);
        function AwTimelineDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timelineLoaded$ = new rxjs.Subject();
            _this.timelineControlsVisible = false;
            _this.transform = function (data) {
                _this.dataSet = data.map(function (_a) {
                    var id = _a.id, start = _a.start, end = _a.end, item = _a.item, label = _a.label;
                    return ({
                        id: id,
                        item: item,
                        start: start ? moment(start).format('YYYY-MM-DD') : null,
                        end: end && end !== start ? moment(end).format('YYYY-MM-DD') : null,
                        content: _this.getItemTemplate(label, item.label),
                        _meta: {
                            dateText: label
                        }
                    });
                });
                var max = _this.getMax();
                var min = _this.getMin();
                return {
                    containerID: 'timeline-component',
                    libOptions: {
                        max: max,
                        min: min,
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
                            template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                        },
                        width: '100%',
                        // minHeight: '350px',
                        // maxHeight: '800px',
                        zoomMax: ONE_YEAR * 2000,
                        zoomMin: ONE_YEAR / 12,
                    },
                    dataSet: _this.dataSet,
                    _setInstance: function (timeline) {
                        _this.timeline = timeline;
                        _this.timelineLoaded$.next();
                        // fix cluster visualization
                        setTimeout(function () {
                            _this.timeline.fit();
                        });
                        // timeout for zoom controls
                        setTimeout(function () {
                            _this.timelineControlsVisible = true;
                        }, 1000);
                    }
                };
            };
            return _this;
        }
        AwTimelineDS.prototype.getItemTemplate = function (datesLabel, label) {
            return ("\n      <div class=\"dates\">\n        <em>" + datesLabel + "</em>\n      </div>\n      <div class=\"content\">" + label + "</div>\n    ");
        };
        AwTimelineDS.prototype.getMax = function () {
            var maxDate = new Date(lodash.max(this.getAllDates()));
            var year = maxDate.getFullYear();
            var month = maxDate.getMonth();
            var day = maxDate.getDate();
            return new Date(year + YEARS_MARGIN, month, day);
        };
        AwTimelineDS.prototype.getMin = function () {
            var minDate = new Date(lodash.min(this.getAllDates()));
            var year = minDate.getFullYear();
            var month = minDate.getMonth();
            var day = minDate.getDate();
            return new Date(year - YEARS_MARGIN, month, day);
        };
        AwTimelineDS.prototype.getAllDates = function () {
            return __spread(this.dataSet
                .filter(function (_a) {
                var start = _a.start;
                return start;
            })
                .map(function (_a) {
                var start = _a.start;
                return start;
            }), this.dataSet
                .filter(function (_a) {
                var end = _a.end;
                return end;
            })
                .map(function (_a) {
                var end = _a.end;
                return end;
            }));
        };
        return AwTimelineDS;
    }(core$1.DataSource));

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

    var AwHeroEH = /** @class */ (function (_super) {
        __extends(AwHeroEH, _super);
        function AwHeroEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHeroEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-hero.click':
                        if (payload === 'cerca' && _this.dataSource.currentInputValue) {
                            _this.emitOuter('enter', _this.dataSource.currentInputValue);
                        }
                        break;
                    case 'aw-hero.change':
                        _this.dataSource.currentInputValue = payload;
                        _this.emitOuter('change', payload);
                        break;
                    case 'aw-hero.enter':
                        _this.emitOuter('enter', payload);
                        break;
                    default:
                        console.warn('(hero) unhandled event of type', type);
                        break;
                }
            });
        };
        return AwHeroEH;
    }(core$1.EventHandler));

    var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
        __extends(AwHomeFacetsWrapperEH, _super);
        function AwHomeFacetsWrapperEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changedInput$ = new rxjs.Subject();
            _this.handleEyeClick = function (type) {
                /*
                  Toggles the status of the selected eye, then reloads the component.
                */
                if (_this.dataSource.closedEyes) {
                    var i = _this.dataSource.closedEyes.indexOf(type);
                    if (i >= 0) { // if the eye was closed
                        _this.dataSource.closedEyes.splice(i, 1); // open the eye
                    }
                    else { // if the eye was open
                        _this.dataSource.closedEyes.push(type); // close the eye
                    }
                }
                else {
                    _this.dataSource.closedEyes = [type];
                }
                _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
            };
            _this.updateFilters = function (selectedBubble) {
                /*
                  Adds (or removes) the ID of the selected bubble from the array of that type of entity.
                  Example:
                    • Click on bubble "0263a407-d0dd" of type "org"
                    • Add "0263a407-d0dd" to array "org".
                  Result:
                    • lockedFacets = { "org":[ "0263a407-d0dd" ] }
                */
                selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
                var _a = selectedBubble.entity, id = _a.id, typeOfEntity = _a.typeOfEntity; // payload is the selected bubble
                if (!_this.dataSource.lockedFacets[typeOfEntity]) {
                    _this.dataSource.lockedFacets[typeOfEntity] = [];
                }
                if (_this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                    var i = _this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                    _this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
                }
                else {
                    _this.dataSource.lockedFacets[typeOfEntity].push(id);
                }
                _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
            };
            return _this;
        }
        AwHomeFacetsWrapperEH.prototype.listen = function () {
            var _this = this;
            this.changedInput$.pipe(operators.debounceTime(500)).subscribe(function (payload) {
                _this.emitOuter('change', payload);
            });
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    // toggle visibility from facet header
                    case 'aw-home-facets-wrapper.click':
                        if (payload === null) { // interrupt event for locked facets
                            break;
                        }
                        _this.emitOuter('click', payload);
                        _this.handleEyeClick(payload);
                        break;
                    // change search input text
                    case 'aw-home-facets-wrapper.change':
                        _this.dataSource.openTippy = payload.inputPayload.replace('-search', '');
                        _this.changedInput$.next(payload);
                        break;
                    // pressed return while typing in search
                    case 'aw-home-facets-wrapper.enter':
                        _this.emitOuter('enter', payload);
                        break;
                    default:
                        console.warn('unhandled inner event of type:', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.facetswrapperrequest': // incoming autocomplete response
                        _this.dataSource.tippyMaker(payload.facetId.inputPayload);
                        break;
                    case 'aw-home-layout.facetswrapperclose': // incoming autocomplete response
                        _this.dataSource.tippyClose(payload.facetId.inputPayload);
                        break;
                    case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                        // this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                        break;
                    case 'aw-home-layout.lockfilter':
                        _this.updateFilters(payload);
                        break;
                    case 'aw-home-layout.tagclick':
                        Object.keys(_this.dataSource.lockedFacets).forEach(function (key) {
                            if (_this.dataSource.lockedFacets[key].includes(payload)) {
                                _this.dataSource.lockedFacets[key].splice(_this.dataSource.lockedFacets[key].indexOf(payload), 1);
                            }
                        });
                        _this.dataSource.update(_this.dataSource.lastData);
                        break;
                    case 'aw-home-layout.clearselection':
                        _this.dataSource.lockedFacets = {};
                        _this.dataSource.closedEyes = [];
                        _this.dataSource.update(_this.dataSource.lastData);
                        break;
                    case 'aw-home-layout.facetclick':
                        {
                            var openTippy = _this.dataSource.openTippy;
                            if (_this.dataSource.lockedFacets[openTippy]) {
                                if (_this.dataSource.lockedFacets[openTippy].indexOf(payload) === -1) {
                                    _this.dataSource.lockedFacets[openTippy].push(payload);
                                }
                            }
                            else {
                                _this.dataSource.lockedFacets[openTippy] = [payload];
                            }
                            _this.dataSource.update(_this.dataSource.lastData);
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        return AwHomeFacetsWrapperEH;
    }(core$1.EventHandler));

    var AwHomeHeroPatrimonioEH = /** @class */ (function (_super) {
        __extends(AwHomeHeroPatrimonioEH, _super);
        function AwHomeHeroPatrimonioEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeHeroPatrimonioEH.prototype.listen = function () {
            // no events
        };
        return AwHomeHeroPatrimonioEH;
    }(core$1.EventHandler));

    var AwHomeItemTagsWrapperEH = /** @class */ (function (_super) {
        __extends(AwHomeItemTagsWrapperEH, _super);
        function AwHomeItemTagsWrapperEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeItemTagsWrapperEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (event) {
                switch (event.type) {
                    case 'aw-home-item-tags-wrapper.click':
                        _this.emitOuter('click', event.payload);
                        break;
                    default:
                        break;
                }
            });
            /* this.outerEvents$.subscribe(event => {
        
            }); */
        };
        return AwHomeItemTagsWrapperEH;
    }(core$1.EventHandler));

    var AwHomeAutocompleteEH = /** @class */ (function (_super) {
        __extends(AwHomeAutocompleteEH, _super);
        function AwHomeAutocompleteEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwHomeAutocompleteEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-autocomplete.click':
                        _this.emitOuter('click', payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return AwHomeAutocompleteEH;
    }(core$1.EventHandler));

    var AwEntitaNavEH = /** @class */ (function (_super) {
        __extends(AwEntitaNavEH, _super);
        function AwEntitaNavEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwEntitaNavEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-entita-nav.click':
                        _this.emitOuter('click', payload);
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
        };
        return AwEntitaNavEH;
    }(core$1.EventHandler));

    var AwSchedaSidebarEH = /** @class */ (function (_super) {
        __extends(AwSchedaSidebarEH, _super);
        function AwSchedaSidebarEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaSidebarEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type === 'aw-sidebar-header.click') {
                    _this.dataSource.toggleSidebar();
                    _this.emitOuter(type, payload);
                }
            });
        };
        return AwSchedaSidebarEH;
    }(core$1.EventHandler));

    var AwSidebarHeaderEH = /** @class */ (function (_super) {
        __extends(AwSidebarHeaderEH, _super);
        function AwSidebarHeaderEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSidebarHeaderEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type === 'aw-sidebar-header.click') {
                    _this.emitOuter('click', payload);
                }
            });
        };
        return AwSidebarHeaderEH;
    }(core$1.EventHandler));

    var AwTreeEH = /** @class */ (function (_super) {
        __extends(AwTreeEH, _super);
        function AwTreeEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.targetOffset = new rxjs.ReplaySubject();
            _this.targetIsOpen = false;
            _this.scrollOpenedIntoView = function () {
                _this.dataSource.out$
                    .pipe(operators.filter(function (data) { return !!data; }), operators.first(), operators.withLatestFrom(_this.targetOffset)).subscribe(function (_a) {
                    var _b = __read(_a, 2), offset = _b[1];
                    setTimeout(function () {
                        var wrapperEl = document.querySelector('.aw-scheda__tree-content');
                        var expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                        var lastExpandedNode = expandedNode.length
                            ? expandedNode[expandedNode.length - 1]
                            : null;
                        if (lastExpandedNode) {
                            var scrollTreeEl = document.querySelector('.n7-tree');
                            var wrapperElRect = wrapperEl.getBoundingClientRect();
                            var offsetToAdjust = offset - wrapperElRect.top;
                            scrollTreeEl.style.marginBottom = '1000px';
                            lastExpandedNode.scrollIntoView();
                            wrapperEl.scrollTop -= offsetToAdjust;
                            window.scrollTo(0, 0);
                            scrollTreeEl.style.marginBottom = '0px';
                        }
                    }, 200);
                });
            };
            _this.scrollLeafIntoView = function () {
                setTimeout(function () {
                    var treeNode = document.querySelector('div.aw-scheda__tree');
                    var leafNode = treeNode.querySelector('.is-active .n7-tree__item-contents');
                    if (leafNode && !_this.isInViewport(leafNode)) {
                        leafNode.scrollIntoView();
                        window.scrollTo(0, 0);
                        if (!_this.isInViewport(leafNode)) {
                            _this.scrollLeafIntoView();
                        }
                    }
                });
            };
            _this.isInViewport = function (elem) {
                var bounding = elem.getBoundingClientRect();
                return (bounding.top >= 0
                    && bounding.left >= 0
                    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
            };
            return _this;
        }
        AwTreeEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-tree.click':
                        if (payload.source === 'toggle') {
                            setTimeout(function () {
                                _this.dataSource.build(payload.id);
                                if (_this.targetIsOpen) {
                                    _this.scrollOpenedIntoView();
                                }
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-scheda-layout.selectItem':
                        _this.dataSource.build(payload);
                        break;
                    case 'aw-scheda-layout.navigationresponse':
                        {
                            if (payload.currentItem) {
                                _this.dataSource.setActive(payload.currentItem);
                            }
                            var currentId = payload.currentItem || payload.tree.id;
                            _this.dataSource.load(payload);
                            _this.dataSource.build(currentId);
                        }
                        break;
                    case 'aw-scheda-layout.routechanged':
                        // has output (not first load)
                        if (_this.dataSource.output) {
                            _this.dataSource.build(payload);
                            _this.dataSource.setActive(payload);
                            _this.dataSource.highlightActive();
                            _this.scrollLeafIntoView();
                        }
                        break;
                    case 'aw-scheda-layout.viewleaf':
                        _this.dataSource.out$
                            .pipe(operators.filter(function (data) { return !!data; }), operators.first()).subscribe(function () {
                            _this.scrollLeafIntoView();
                        });
                        break;
                    case 'aw-scheda-layout.treeposition':
                        {
                            var target = payload.target;
                            var targetRect = target.getBoundingClientRect();
                            _this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                            _this.targetOffset.next(targetRect.top);
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        return AwTreeEH;
    }(core$1.EventHandler));

    var AwSchedaDropdownEH = /** @class */ (function (_super) {
        __extends(AwSchedaDropdownEH, _super);
        function AwSchedaDropdownEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaDropdownEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type === 'aw-scheda-dropdown.click') {
                    if (payload === 'toggle') {
                        _this.dataSource.toggle();
                    }
                    else {
                        _this.dataSource.onChange(payload);
                        _this.emitOuter('click', payload);
                    }
                }
            });
        };
        return AwSchedaDropdownEH;
    }(core$1.EventHandler));

    var AwSchedaPdfEH = /** @class */ (function (_super) {
        __extends(AwSchedaPdfEH, _super);
        function AwSchedaPdfEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSchedaPdfEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type === 'aw-scheda-pdf.click') {
                    _this.dataSource.onChange(payload);
                }
                else if (type === 'aw-scheda-pdf.loaded') {
                    _this.dataSource.onLoaded();
                }
            });
        };
        return AwSchedaPdfEH;
    }(core$1.EventHandler));

    var AwSearchLayoutTabsEH = /** @class */ (function (_super) {
        __extends(AwSearchLayoutTabsEH, _super);
        function AwSearchLayoutTabsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwSearchLayoutTabsEH.prototype.listen = function () {
            // TODO
        };
        return AwSearchLayoutTabsEH;
    }(core$1.EventHandler));

    var AwFacetsWrapperEH = /** @class */ (function (_super) {
        __extends(AwFacetsWrapperEH, _super);
        function AwFacetsWrapperEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.internalFacetsChange$ = new rxjs.Subject();
            _this.externalFacetsChange$ = new rxjs.Subject();
            return _this;
        }
        AwFacetsWrapperEH.prototype.listen = function () {
            var _this = this;
            // listen to inner (widget) events
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'facets-wrapper.facet':
                        {
                            // empty payload control
                            if (!payload.eventPayload.inputPayload) {
                                return;
                            }
                            var _b = payload.eventPayload.inputPayload, facetId = _b.facetId, value = _b.value;
                            if (value === '__loading__') {
                                return;
                            }
                            var input = _this.dataSource.getInputByFacetId(facetId);
                            var context = input.getContext();
                            // update
                            _this.dataSource.onFacetChange(payload);
                            // internal
                            if (context === 'internal') {
                                _this.internalFacetsChange$.next(input.getTarget());
                                // external
                            }
                            else {
                                _this.externalFacetsChange$.next(facetId);
                            }
                        }
                        break;
                    case 'facets-wrapper.facetheader':
                        _this.dataSource.toggleGroup(payload);
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type.indexOf('queryparamschange') !== -1 && _this.dataSource.searchModel) {
                    _this.dataSource.updateFiltersFromQueryParams(payload);
                    _this.dataSource.updateInputsFromFilters();
                }
            });
            // listen to global events
            core$1.EventHandler.globalEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'global.searchresponse':
                        if (_this.dataSource.searchModel && _this.dataSource.searchModel.getId() === payload) {
                            _this.dataSource.updateInputLinks();
                            var internalFilters = _this.dataSource.searchModel.getInternalFilters();
                            internalFilters.forEach(function (filter) {
                                var input = _this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                                var target = input.getTarget();
                                // this.dataSource.filterTarget(target);
                                _this.dataSource.updateFilteredTarget(target);
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
            // internal facets change
            this.externalFacetsChange$.pipe(operators.debounceTime(500)).subscribe(function (facetId) {
                var requestParams = _this.dataSource.getRequestParams();
                var queryParams = _this.dataSource.filtersAsQueryParams(requestParams.filters);
                Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
                // signal
                _this.emitOuter('facetschange', { facetId: facetId });
                // reset page
                queryParams.page = 1;
                // router signal
                _this.emitGlobal('navigate', {
                    handler: 'router',
                    path: [],
                    queryParams: queryParams,
                });
            });
        };
        return AwFacetsWrapperEH;
    }(core$1.EventHandler));

    var AwGalleryResultsEH = /** @class */ (function (_super) {
        __extends(AwGalleryResultsEH, _super);
        function AwGalleryResultsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwGalleryResultsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-gallery-results.change':
                        _this.emitOuter('change', +payload.value);
                        break;
                    case 'aw-gallery-results.click':
                        if (typeof payload === 'string') { // click on pagination
                            if (payload.startsWith('page')) {
                                // pagination routing is handled by the parent layout
                                _this.emitOuter('pagination', payload);
                            }
                            else if (payload.startsWith('goto')) {
                                var targetPage = +payload.replace('goto-', '');
                                // kill impossible page navigations
                                if (targetPage > _this.dataSource.totalPages)
                                    return;
                                if (targetPage < 1 || targetPage === _this.dataSource.currentPage)
                                    return;
                                _this.emitOuter('goto', payload);
                            }
                        }
                        else { // click on a linked object
                            _this.emitOuter('click', payload);
                        }
                        break;
                    default:
                        console.warn('(gallery-results) unhandled inner event of type', type);
                        break;
                }
            });
            // this.outerEvents$.subscribe(({ type, payload }) => {
            // });
        };
        return AwGalleryResultsEH;
    }(core$1.EventHandler));

    var AwMapEH = /** @class */ (function (_super) {
        __extends(AwMapEH, _super);
        function AwMapEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwMapEH.prototype.listen = function () {
            var _this = this;
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case 'aw-map-layout.init':
                        _this.listenToMarkers();
                        break;
                    default:
                        break;
                }
            });
        };
        AwMapEH.prototype.listenToMarkers = function () {
            var _this = this;
            this.dataSource.markerOpen$.subscribe(function (item) {
                _this.emitOuter('markeropen', item);
            });
            this.dataSource.markerClose$.subscribe(function () {
                _this.emitOuter('markerclose');
            });
        };
        return AwMapEH;
    }(core$1.EventHandler));

    var AwTimelineEH = /** @class */ (function (_super) {
        __extends(AwTimelineEH, _super);
        function AwTimelineEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwTimelineEH.prototype.listen = function () {
            var _this = this;
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case 'aw-timeline-layout.init':
                        _this.listenToTimeline();
                        break;
                    case 'aw-timeline-layout.zoomout':
                        _this.dataSource.timeline.zoomOut(0.7);
                        break;
                    case 'aw-timeline-layout.zoomin':
                        _this.dataSource.timeline.zoomIn(0.7);
                        break;
                    default:
                        break;
                }
            });
        };
        AwTimelineEH.prototype.listenToTimeline = function () {
            var _this = this;
            this.dataSource.timelineLoaded$
                .pipe(operators.first())
                .subscribe(function () {
                var _a = _this.dataSource, timeline = _a.timeline, dataSet = _a.dataSet;
                timeline.on('click', function (_a) {
                    var item = _a.item;
                    var clicked = dataSet.find(function (_a) {
                        var id = _a.id;
                        return item === id;
                    });
                    if (clicked) {
                        var dateText = clicked._meta.dateText;
                        var _b = clicked.item, id = _b.id, label = _b.label;
                        _this.emitOuter('click', {
                            id: id,
                            label: label,
                            dateText: dateText,
                        });
                    }
                    else {
                        _this.emitOuter('click', {
                            id: null
                        });
                    }
                });
            });
        };
        return AwTimelineEH;
    }(core$1.EventHandler));

    var AwLinkedObjectsEH = /** @class */ (function (_super) {
        __extends(AwLinkedObjectsEH, _super);
        function AwLinkedObjectsEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleScroll = function (target) {
                var _a = _this.dataSource, totalObjects = _a.totalObjects, loadedData = _a.loadedData;
                var loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
                if (loadedTotal >= totalObjects) {
                    return;
                }
                /*
                  Check if the target element is scrolled near the end while data is not already loading.
                  If the condition is met, a request for more data is sent.
                */
                if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                    && _this.dataSource.loadedData.isLoading === false) {
                    _this.dataSource.loadedData.isLoading = true;
                    _this.emitOuter('datarequest', {
                        currentPage: _this.dataSource.currentPage,
                    });
                }
            };
            return _this;
        }
        AwLinkedObjectsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-linked-objects.change': // changed page size value (pagination)
                        _this.emitOuter('change', +payload.value);
                        break;
                    default:
                        console.warn('unhandled event type: ', type, ' with payload: ', payload);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.viewmore':
                        // ask home-layout for more data
                        _this.dataSource.checkForMore(false);
                        _this.emitOuter('datarequest', {
                            currentPage: _this.dataSource.currentPage,
                        });
                        break;
                    case 'aw-home-layout.dataresponse':
                        {
                            // handle incoming data from home-layout
                            var res = payload.res;
                            _this.dataSource.handleIncomingData(res);
                        }
                        break;
                    case 'aw-home-layout.scroll':
                        _this.handleScroll(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return AwLinkedObjectsEH;
    }(core$1.EventHandler));

    var AwAutocompleteWrapperEH = /** @class */ (function (_super) {
        __extends(AwAutocompleteWrapperEH, _super);
        function AwAutocompleteWrapperEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwAutocompleteWrapperEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-autocomplete-wrapper.click':
                        if (payload !== 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                            _this.emitOuter('clickresult', payload);
                        }
                        break;
                    default:
                        console.warn('unhandled event of type:', type);
                        break;
                }
            });
        };
        return AwAutocompleteWrapperEH;
    }(core$1.EventHandler));

    var AwBubbleChartEH = /** @class */ (function (_super) {
        __extends(AwBubbleChartEH, _super);
        function AwBubbleChartEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.initialLoad = false;
            _this.toggleSelection = function (id) {
                /*
                  Expects the ID of a bubble.
                  Updates the graph with a new request
                */
                _this.dataSource.handleBubbleClick(id);
                _this.emitOuter('selection', _this.dataSource.selected);
            };
            _this.toggleFilter = function (f) {
                /*
                  Toggle the clicked eye-filter in the filteres array and
                  redraw the graph.
                */
                if (_this.dataSource.filters.includes(f)) {
                    _this.dataSource.filters.splice(_this.dataSource.filters.indexOf(f), 1);
                }
                else {
                    _this.dataSource.filters.push(f);
                }
                _this.dataSource.updateChart(null); // null means "reuse the last response"
            };
            return _this;
        }
        AwBubbleChartEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-bubble-chart.click':
                        if (_this.dataSource.options.selectable !== false) {
                            _this.toggleSelection(payload);
                        }
                        _this.emitOuter('lockfilter', _this.dataSource.chartData.find(function (el) { return payload === el.entity.id; }));
                        break;
                    case 'aw-bubble-chart.d3end':
                        { // end of d3.js draw()
                            var filteredChartData = void 0;
                            // apply filters to the data before adding tooltips
                            if (_this.dataSource.filters.length > 0) {
                                filteredChartData = _this.dataSource.chartData.filter(function (el) { return !_this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); });
                            }
                            else {
                                filteredChartData = _this.dataSource.chartData;
                            }
                            _this.emitOuter('d3end', {
                                bubbles: _this.dataSource.smartSlice(filteredChartData),
                                selected: _this.dataSource.selected,
                            });
                        }
                        break;
                    default:
                        console.warn('unhandled inner event of type', type, 'with payload', payload);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.select':
                        {
                            var id_1 = payload.id;
                            _this.toggleSelection(id_1);
                            var foundBubble = _this.dataSource.chartData.find(function (el) { return id_1 === el.entity.id; });
                            if (foundBubble) {
                                _this.emitOuter('lockfilter', foundBubble);
                            }
                            else {
                                console.warn('Unable to determine which bubble was selected.');
                            }
                        }
                        break;
                    case 'aw-home-layout.tagclick':
                        _this.toggleSelection(payload);
                        break;
                    case 'aw-home-layout.facetclick':
                        if (!_this.dataSource.selected.includes(payload)) {
                            _this.toggleSelection(payload);
                        }
                        break;
                    case 'aw-home-layout.togglefilter':
                        _this.toggleFilter(payload);
                        break;
                    case 'aw-home-layout.clearselection':
                        _this.dataSource.selected = [];
                        _this.emitOuter('selection', []);
                        break;
                    case 'aw-entita-layout.filterbubbleresponse':
                    case 'aw-home-layout.filterbubbleresponse':
                        _this.dataSource.updateChart(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return AwBubbleChartEH;
    }(core$1.EventHandler));

    var AwTableEH = /** @class */ (function (_super) {
        __extends(AwTableEH, _super);
        function AwTableEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwTableEH.prototype.listen = function () {
            /*
            this.innerEvents$.subscribe(event => {
        
            });
        
            this.outerEvents$.subscribe(event => {
        
            });
            */
        };
        return AwTableEH;
    }(core$1.EventHandler));

    var AwChartTippyEH = /** @class */ (function (_super) {
        __extends(AwChartTippyEH, _super);
        function AwChartTippyEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tippyList = []; // array of tippy instances
            _this.tippyMaker = function (bubbles) {
                /*
                  Destroys every existing tooltip,
                  then creates a new Tippy instance for each bubble.
                */
                // flush existing tooltips
                _this.tippyList.forEach(function (t) { if (t) {
                    t.destroy();
                } });
                _this.tippyList = [];
                // create new tooltips
                bubbles.forEach(function (b) {
                    var target = document.getElementById("g_" + b.entity.id);
                    if (target) {
                        _this.tippyList.push(// add this tippy to the array of instances
                        tippy__default(target, {
                            content: document.getElementById("template__" + b.entity.id),
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
            return _this;
        }
        AwChartTippyEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-chart-tippy.select':
                        _this.emitOuter('select', payload);
                        break;
                    default:
                        console.warn('(chart-tippy) unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.d3end':
                    case 'aw-entita-layout.d3end':
                    case 'aw-scheda-layout.d3end':
                        _this.dataSource.update(payload); // creating DOM Elements (templates)
                        setTimeout(function () {
                            _this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                        });
                        break;
                    default:
                        break;
                }
            });
        };
        return AwChartTippyEH;
    }(core$1.EventHandler));

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

    var AwCollectionLayoutDS = /** @class */ (function (_super) {
        __extends(AwCollectionLayoutDS, _super);
        function AwCollectionLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.classificationsMap = {
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
            _this.innerTitleData = new rxjs.BehaviorSubject({
                title: { main: { text: '' } },
            });
            _this.collectionDescription = new rxjs.BehaviorSubject('');
            _this.pageSize = 6;
            /** Necessary to iterate with the loading item placeholder HTML */
            _this.pageSizeList = [];
            _this.currentOffset = 0;
            /** Button that loads more content into the layout */
            _this.loadMoreButton = new rxjs.BehaviorSubject(true);
            /** Controls the loading state of the layout */
            _this.loading = true;
            return _this;
        }
        AwCollectionLayoutDS.prototype.onInit = function (payload) {
            this.communication = payload.communication;
            this.route = payload.route;
            this.configuration = payload.configuration;
            this.loadedCollections = new rxjs.BehaviorSubject([]);
            this.layoutOptions = this.configuration.get('collection-layout');
            this.pageSizeList = new Array(this.pageSize);
        };
        /**
         * After the collection ID has been loaded
         */
        AwCollectionLayoutDS.prototype.onCollectionID = function () {
            // reset pagination params
            this.pageSize = 6;
            this.currentOffset = 0;
            // load
            this.loadMore(true);
        };
        AwCollectionLayoutDS.prototype.loadMore = function (reload) {
            var _this = this;
            if (reload === void 0) { reload = false; }
            this.loading = true;
            var collection = this.loadedCollections.getValue();
            var params = {
                id: this.collectionID,
                itemPagination: {
                    limit: this.pageSize,
                    offset: this.currentOffset,
                }
            };
            this.communication.request$('getCollection', {
                onError: function (error) { return console.error(error); },
                params: params
            }).pipe(operators.first(function (d) { return !!d; }), operators.map(function (d) { return ({
                // map the backend response to the format used by ItemPreviewComponent
                response: d.items.map(function (item) { return ({
                    title: _this.stringLimiter(item.title, {
                        maxLength: _this.layoutOptions.item.title.maxLength,
                        char: _this.layoutOptions.item.title.char,
                    }),
                    text: _this.stringLimiter(item.content, {
                        maxLength: _this.layoutOptions.item.description.maxLength,
                        char: _this.layoutOptions.item.description.char
                    }),
                    classes: (item.image ? 'is-overlay has-image' : 'is-overlay has-image has-watermark') + " " + _this.classMap(item.classification),
                    image: item.image || _this.layoutOptions.watermark,
                    color: item.background,
                    anchor: {
                        href: item.url || _this.urlBuilder(item.a4vId, item.title, item.type)
                    },
                    classification: item.classification
                }); }),
                text: d.text,
                title: d.title,
                total: d.total,
            }); })).subscribe({
                next: function (data) {
                    _this.loading = false;
                    if (data.title) {
                        _this.setTitle(_this.stringLimiter(data.title, {
                            maxLength: _this.layoutOptions.header.maxLength,
                            char: _this.layoutOptions.header.char
                        }));
                    }
                    _this.collectionDescription.next(data.text ? _this.stringLimiter(data.text, {
                        maxLength: _this.layoutOptions.description.maxLength,
                        char: _this.layoutOptions.description.char
                    }) : '');
                    _this.currentOffset += _this.pageSize;
                    var collectionData = !reload
                        ? __spread(collection, data.response) : __spread(data.response);
                    _this.loadedCollections.next(collectionData);
                    _this.loadMoreButton.next(data.total > _this.loadedCollections.getValue().length);
                },
                error: function (e) {
                    console.error(e);
                    _this.loadMoreButton.next(false);
                },
            });
        };
        /**
         * Builds a URL from entity type,
         * entity id, and a slug string.
         *
         * @param type entity type
         * @param id entity ID
         * @param title human-readable title
         * @returns URL string including a slug
         */
        AwCollectionLayoutDS.prototype.urlBuilder = function (id, title, type) {
            if (id && title) {
                var titleSlug = slugify(title);
                var _a = this.configuration.get('paths'), schedaBasePath = _a.schedaBasePath, entitaBasePath = _a.entitaBasePath;
                var basePath = type === 'entity' ? entitaBasePath : schedaBasePath;
                return "/" + basePath + "/" + id + "/" + titleSlug;
            }
            return undefined;
        };
        AwCollectionLayoutDS.prototype.stringLimiter = function (content, options) {
            var res = content;
            if (content && options.maxLength) {
                res = content.slice(0, options.maxLength);
                if (options.char && res !== content) {
                    res += options.char;
                }
            }
            return res;
        };
        AwCollectionLayoutDS.prototype.setTitle = function (title) {
            this.innerTitleData.next({
                title: { main: { text: title } }
            });
        };
        /**
         * Convert classification strings to css classes.
         *
         * @param classification a classification string like "a4.oc.ua"
         * @returns a CSS class
         */
        AwCollectionLayoutDS.prototype.classMap = function (classification) {
            var _a;
            if (!classification || classification.length < 1) {
                return '';
            }
            var codeMatch = /\.(\w+)$/gi.exec(classification);
            if (codeMatch) {
                var parsedCode = (_a = codeMatch[1]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
                var className = this.classificationsMap[parsedCode];
                if (className) {
                    return "is-" + className;
                }
            }
            return "is-" + classification.replace('.', '-');
        };
        return AwCollectionLayoutDS;
    }(core$1.LayoutDataSource));

    var AwCollectionLayoutEH = /** @class */ (function (_super) {
        __extends(AwCollectionLayoutEH, _super);
        function AwCollectionLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AwCollectionLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-collection-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.route = payload.route;
                        _this.listenRoute();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        AwCollectionLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            // get collection ID from the url
            this.route.paramMap.subscribe(function (params) {
                if (params.get('id')) {
                    _this.dataSource.collectionID = params.get('id');
                    _this.dataSource.onCollectionID();
                }
            });
        };
        return AwCollectionLayoutEH;
    }(core$1.EventHandler));

    var AwCollectionLayoutConfig = {
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

    var AwCollectionLayoutComponent = /** @class */ (function (_super) {
        __extends(AwCollectionLayoutComponent, _super);
        function AwCollectionLayoutComponent(communication, layoutsConfiguration, configuration, route) {
            var _this = _super.call(this, AwCollectionLayoutConfig) || this;
            _this.communication = communication;
            _this.layoutsConfiguration = layoutsConfiguration;
            _this.configuration = configuration;
            _this.route = route;
            return _this;
        }
        AwCollectionLayoutComponent.prototype.initPayload = function () {
            return {
                communication: this.communication,
                layoutsConfiguration: this.layoutsConfiguration,
                configuration: this.configuration,
                route: this.route
            };
        };
        AwCollectionLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwCollectionLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwCollectionLayoutComponent.ctorParameters = function () { return [
            { type: CommunicationService },
            { type: LayoutsConfigurationService },
            { type: ConfigurationService },
            { type: router.ActivatedRoute }
        ]; };
        AwCollectionLayoutComponent = __decorate([
            core.Component({
                selector: 'n7-collection-layout',
                template: "<div class=\"aw-collection-layout\"\r\n     *ngIf=\"lb.dataSource as dataSource\">\r\n\r\n    <div class=\"aw-collection-layout__header\">\r\n        <n7-inner-title [data]=\"dataSource.innerTitleData.getValue()\">\r\n        </n7-inner-title>\r\n    </div>\r\n\r\n    <div class=\"aw-collection-layout__description\"\r\n         *ngIf=\"dataSource.collectionDescription.getValue()\">\r\n        <div class=\"aw-collection-layout__description-text\">\r\n            {{ dataSource.collectionDescription.getValue() }}\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"n7-grid-3 aw-collection-layout__grid\"\r\n            [ngClass]=\"{ 'is-loading': dataSource.loading }\"\r\n             *ngIf=\"dataSource.loadedCollections | async\">\r\n        \r\n        <ng-container *ngFor=\"let item of (dataSource.loadedCollections | async)\">\r\n            <n7-item-preview [data]=\"item\">\r\n            </n7-item-preview>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngIf=\"dataSource.loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of dataSource.pageSizeList\"\r\n                                    [data]=\"{\r\n                blocks: [{ classes: 'collection-placeholder-item-preview' }]\r\n            }\"></n7-content-placeholder>\r\n        </ng-container>\r\n        \r\n    </section>\r\n\r\n    <section *ngIf=\"dataSource.loadMoreButton.getValue()\">\r\n        <button class=\"n7-btn n7-btn-cta n7-btn-xl aw-collection-layout__btn-more\"\r\n                (click)=\"dataSource.loadMore()\"\r\n                [disabled]=\"dataSource.loading\">\r\n            MOSTRA ALTRI\r\n        </button>\r\n    </section>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [CommunicationService,
                LayoutsConfigurationService,
                ConfigurationService,
                router.ActivatedRoute])
        ], AwCollectionLayoutComponent);
        return AwCollectionLayoutComponent;
    }(AbstractLayout));

    var metadataIsEmpty = function (value) { return (!value || value === 'null'); };
    var ɵ0 = metadataIsEmpty;
    var isLink = function (fields) { return !!fields.filter(function (_a) {
        var key = _a.key;
        return key === 'isLink';
    }).length; };
    var ɵ1 = isLink;
    var isRepeater = function (fields) { return Array.isArray(fields); };
    var ɵ2 = isRepeater;
    var getLink = function (fields, paths) {
        var schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
        var label = fields.find(function (_a) {
            var key = _a.key;
            return key === 'label';
        }).value;
        var slug = helpers.slugify(label);
        var id = fields.find(function (_a) {
            var key = _a.key;
            return key === 'id';
        }).value;
        var type = fields.find(function (_a) {
            var key = _a.key;
            return key === 'type';
        }).value;
        var basePath = paths.entitaBasePath;
        if (schedaTypes.includes(type)) {
            basePath = paths.schedaBasePath;
        }
        return "<a href=\"" + basePath + id + "/" + slug + "\">" + label + "</a>";
    };
    var ɵ3 = getLink;
    var getRepeater = function (fields, labels, metadataToShow, type, parentLabel, paths) {
        var html = [];
        fields
            .filter(function (_a) {
            var subFields = _a.fields;
            return subFields;
        })
            .forEach(function (_a) {
            var subFields = _a.fields;
            var subHtml = [];
            if (isLink(subFields)) {
                subHtml.push('<div>');
                subHtml.push("<dd>" + getLink(subFields, paths) + "</dd>");
                subHtml.push('</div>');
            }
            subFields
                .filter(function (_a) {
                var key = _a.key;
                if (isLink(subFields)) {
                    return !(['label', 'id', 'type', 'isLink'].includes(key));
                }
                return true;
            })
                .filter(function (_a) {
                var key = _a.key, value = _a.value;
                return metadataToShow.includes(parentLabel + "." + key) && !metadataIsEmpty(value);
            })
                .map(function (_a) {
                var key = _a.key, value = _a.value;
                return ({
                    key: key,
                    value: value,
                    order: metadataToShow.indexOf(parentLabel + "." + key),
                    label: helpers.prettifySnakeCase(key, labels[type + "." + parentLabel + "." + key])
                });
            })
                .sort(function (a, b) { return a.order - b.order; })
                .forEach(function (_a) {
                var label = _a.label, value = _a.value;
                subHtml.push('<div>');
                subHtml.push("<dt>" + label + "</dt>");
                subHtml.push("<dd>" + value + "</dd>");
                subHtml.push('</div>');
            });
            if (subHtml.length) {
                html.push("<dl>" + subHtml.join('') + "</dl>");
            }
        });
        return html.length ? html.join('') : null;
    };
    var ɵ4 = getRepeater;
    var metadataHelper = {
        normalize: function (_a) {
            var data = _a.fields, paths = _a.paths, labels = _a.labels, metadataToShow = _a.metadataToShow, type = _a.type;
            var result = [];
            if (Array.isArray(data)) {
                data.forEach(function (_a) {
                    var key = _a.key, value = _a.value, label = _a.label, fields = _a.fields;
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
                        result.push({ key: key, value: value });
                    }
                });
            }
            return result
                .filter(function (_a) {
                var value = _a.value;
                return !metadataIsEmpty(value);
            })
                .map(function (_a) {
                var key = _a.key, value = _a.value;
                return ({
                    key: key,
                    value: value,
                    order: metadataToShow.indexOf(key),
                    label: helpers.prettifySnakeCase(key, labels[type + "." + key]),
                });
            })
                .sort(function (a, b) { return a.order - b.order; });
        }
    };

    var AwEntitaLayoutDS = /** @class */ (function (_super) {
        __extends(AwEntitaLayoutDS, _super);
        function AwEntitaLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasMetadataFields = false;
            _this.navHeader = {}; // nav-header (custom) data
            _this.currentPage = 1; // pagination value (url param)
            _this.pageSize = 10; // linked objects page size
            // ===== BUBBLE CHART =====
            _this.bubblesSize = 10; // related entities (bubbles) page size
            _this.fallbackText = '';
            _this.loading = true;
            _this.updateComponent = function (id, data, options) {
                if (options) {
                    _this.one(id).updateOptions(options);
                }
                _this.one(id).update(data);
            };
            /**
             * Updates the pagination component
             */
            _this.drawPagination = function (totalItems, pageSize) {
                if (!_this.getLinkedObjectItems())
                    return;
                var _a = _this._getPaginationURL(), href = _a.href, queryParams = _a.queryParams;
                _this.one('n7-smart-pagination').updateOptions({
                    mode: 'href',
                    href: href,
                    queryParams: queryParams,
                });
                _this.one('n7-smart-pagination').update({
                    totalPages: _this.getPageCount(totalItems, pageSize),
                    currentPage: +_this.currentPage || 1,
                    pageLimit: 5,
                    sizes: {
                        list: [10, 25, 50],
                        active: +_this.pageSize,
                    },
                });
            };
            /**
             * Updates the selected tab on tab change
             */
            _this.handlePageNavigation = function () {
                if (!_this.myResponse) {
                    return;
                }
                _this.getEntityDetailsPage(_this.myResponse.id, +_this.currentPage, +_this.pageSize)
                    .pipe(operators.first())
                    .subscribe({
                    // Await for network response
                    next: function (data) {
                        _this.myResponse = data;
                        var _a = _this._getPaginationURL(), href = _a.href, queryParams = _a.queryParams;
                        // update layout state
                        _this.pageSize = queryParams.size;
                        _this.currentPage = queryParams.page;
                        // update components
                        _this.drawPagination(_this.getItemCount(), _this.pageSize);
                        _this.one('aw-linked-objects').updateOptions({
                            paginationParams: { href: href, queryParams: queryParams },
                            context: _this.selectedTab,
                            config: _this.configuration,
                            dynamicPagination: {
                                total: _this.getItemCount(),
                            },
                            page: queryParams.page,
                            size: queryParams.size,
                            pagination: true,
                        });
                        _this.one('aw-linked-objects').update({ items: _this.getLinkedObjectItems() });
                    },
                    error: function (e) { return operators.catchError(e); },
                });
            };
            _this.handleNavUpdate = function (tab) {
                _this.selectedTab = tab;
                _this.updateWidgets(_this.myResponse);
                _this.one('aw-linked-objects').updateOptions({
                    context: _this.selectedTab,
                    config: _this.configuration,
                    dynamicPagination: {
                        total: _this.getItemCount(),
                    },
                    page: _this.currentPage,
                    size: _this.pageSize,
                    pagination: true,
                    paginationParams: _this._getPaginationURL(),
                });
                _this.one('aw-linked-objects').update({ items: _this.getLinkedObjectItems() });
                // update the url with the correct page and size
                var queryParams = {
                    page: _this.currentPage, size: _this.pageSize,
                };
                _this.router.navigate([], {
                    relativeTo: _this.route,
                    queryParams: queryParams,
                    queryParamsHandling: 'merge'
                });
            };
            return _this;
        }
        AwEntitaLayoutDS.prototype.onInit = function (_a) {
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, route = _a.route, options = _a.options, titleService = _a.titleService, communication = _a.communication;
            var _b;
            this.route = route;
            this.communication = communication;
            this.configuration = configuration;
            this.mainState = mainState;
            this.options = options;
            this.router = router;
            this.titleService = titleService;
            this.currentId = '';
            this.currentPage = (_b = +this.route.snapshot.queryParams.page) !== null && _b !== void 0 ? _b : 1;
            this.one('aw-related-entities').updateOptions({
                config: this.configuration,
            });
            // navigation update
            this.mainState.updateCustom('currentNav', 'entita');
            // update head title
            this.mainState.update('headTitle', 'Arianna4View - Entità');
            // check if there is only one tab
            this.singleTabCheck();
        };
        AwEntitaLayoutDS.prototype.singleTabCheck = function () {
            var _this = this;
            var navDS = this.getWidgetDataSource('aw-entita-nav');
            navDS.out$
                .pipe(operators.filter(function (output) { return !!output; }))
                .subscribe(function (_a) {
                var items = _a.items;
                // if there is only one tab
                // and there are no query params
                // navigate to the tab.
                if (items.length === 1 && !_this.currentPage) {
                    _this.router.navigate([items[0].anchor.href], { replaceUrl: true });
                }
            });
        };
        AwEntitaLayoutDS.prototype.updateWidgets = function (data) {
            /*
              Updates the widgets on this layout, based on route
            */
            var selected = this.selectedTab;
            Object.keys(data).forEach(function (k) {
                if (Array.isArray(data[k]) && data[k].length === 0) {
                    data[k] = null;
                }
            });
            this.one('aw-entita-nav').update({
                data: data,
                selected: selected,
                basePath: this.getNavBasePath(),
            });
            this.updateComponent('aw-entita-metadata-viewer', this.getFields(this.myResponse));
            this.one('aw-related-entities').update(this.myResponse.relatedEntities);
            this.drawPagination(this.getItemCount(), this.pageSize);
        };
        /**
         * Given a page number and a list size, returns the data
         * for a single page of content.
         *
         * @param id Entity ID
         * @param pageNumber Page number to load
         * @param pageSize How many items need to be loaded
         */
        AwEntitaLayoutDS.prototype.getEntityDetailsPage = function (id, pageNumber, pageSize) {
            var _this = this;
            return this.communication.request$('getEntityDetails', {
                onError: function (error) { return console.error(error); },
                params: {
                    entityId: id,
                    itemsPagination: { offset: ((pageNumber || 1) - 1) * pageSize, limit: +pageSize },
                    entitiesListSize: this.bubblesSize
                },
            }).pipe(
            // global metadata tab control
            operators.tap(function (_a) {
                var fields = _a.fields, typeOfEntity = _a.typeOfEntity;
                _this.hasMetadataFields = !!metadataHelper.normalize({
                    fields: fields,
                    paths: _this.configuration.get('paths'),
                    labels: _this.configuration.get('labels'),
                    metadataToShow: lodash.get(_this.configuration.get('entita-layout'), 'metadata-to-show', []),
                    type: typeOfEntity
                }).length;
            }));
        };
        /*
         * Loads the data for the selected nav item, into the adjacent text block.
         */
        AwEntitaLayoutDS.prototype.loadItem = function (id, slug, tab) {
            this.loading = true;
            if (id && tab) {
                this.currentId = id; // store selected item from url
                this.currentSlug = slug; // store selected item from url
                this.selectedTab = tab; // store selected tab from url
                return this.getEntityDetailsPage(id, this.currentPage, this.pageSize);
            }
            this.pageTitle = 'Entità Test';
            return rxjs.of(null);
        };
        AwEntitaLayoutDS.prototype.loadContent = function (res) {
            this.loading = false;
            var config = this.configuration.get('config-keys')[res.typeOfEntity];
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
            this.getLinkedObjectItems().forEach(function (el) {
                el.relationName = res.label.length > 30
                    ? res.label.substr(0, 30) + "... "
                    : res.label;
            });
            res.relatedEntities.forEach(function (el) {
                el.relationName = res.label.length > 30
                    ? res.label.substr(0, 30) + "... "
                    : res.label;
            });
            this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
            this.one('aw-related-entities').update(res.relatedEntities);
            // fallback text
            if (!this.hasMetadataFields) {
                this.fallbackText = this.configuration.get('entita-layout').fallback;
            }
            // update head title
            this.mainState.update('headTitle', "Arianna4View - Entit\u00E0 - " + this.myResponse.label);
        };
        AwEntitaLayoutDS.prototype._getPaginationURL = function () {
            return {
                href: [
                    this.configuration.get('paths').entitaBasePath,
                    this.currentId + "/",
                    this.currentSlug,
                    "/" + this.selectedTab + "/",
                ].join(''),
                queryParams: {
                    page: this.currentPage || 1,
                    size: this.pageSize,
                },
            };
        };
        AwEntitaLayoutDS.prototype.getNavBasePath = function () {
            return [
                this.configuration.get('paths').entitaBasePath,
                this.currentId + "/",
                this.currentSlug,
            ].join('');
        };
        AwEntitaLayoutDS.prototype.getItemCount = function () {
            switch (this.selectedTab) {
                case 'fondi-collegati':
                    return this.myResponse.relatedLaTotalCount;
                case 'oggetti-collegati':
                    return this.myResponse.relatedItemsTotalCount;
                default:
                    return 0;
            }
        };
        AwEntitaLayoutDS.prototype.getFields = function (response) {
            var fields = response.fields, typeOfEntity = response.typeOfEntity;
            var paths = this.configuration.get('paths');
            var labels = this.configuration.get('labels');
            var metadataToShow = lodash.get(this.configuration.get('entita-layout'), 'metadata-to-show', []);
            if (this.selectedTab === 'overview') {
                metadataToShow = lodash.get(this.configuration.get('entita-layout'), 'overview.informazioni', []);
            }
            return metadataHelper.normalize({
                fields: fields,
                paths: paths,
                labels: labels,
                metadataToShow: metadataToShow,
                type: typeOfEntity
            });
        };
        AwEntitaLayoutDS.prototype.getLinkedObjectItems = function () {
            return this.selectedTab === 'fondi-collegati'
                ? this.myResponse.relatedLa
                : this.myResponse.relatedItems;
        };
        /**
         * Calculates the total amount of pages
         *
         * @param items the number of records in the database
         * @param size the number of items shown on a page
         * @returns the total number of pages
         */
        AwEntitaLayoutDS.prototype.getPageCount = function (items, size) {
            return Math.floor(items / size);
        };
        return AwEntitaLayoutDS;
    }(core$1.LayoutDataSource));

    var AwEntitaLayoutEH = /** @class */ (function (_super) {
        __extends(AwEntitaLayoutEH, _super);
        function AwEntitaLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.handlePageSizeChange = function (size) {
                _this.dataSource.pageSize = size;
                _this.dataSource.currentPage = 1;
                _this.dataSource.handleNavUpdate('oggetti-collegati');
                // this.dataSource.handlePageNavigation();
            };
            return _this;
        }
        AwEntitaLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-entita-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.configuration = payload.configuration;
                        _this.route = payload.route;
                        _this.entityId = _this.route.snapshot.params.id || '';
                        _this.dataSource.currentPage = _this.route.snapshot.params.page || 1;
                        _this.listenRoute(_this.entityId);
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'aw-entita-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    case 'aw-entita-layout.showmore':
                        if (payload) {
                            _this.dataSource.handleNavUpdate(payload);
                        }
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-entita-nav.click':
                        if (payload) {
                            _this.dataSource.selectedTab = payload;
                            _this.dataSource.handleNavUpdate(payload);
                        }
                        break;
                    case 'aw-linked-objects.change':
                        {
                            var options = {
                                context: _this.dataSource.selectedTab,
                                config: _this.dataSource.configuration,
                                dynamicPagination: {
                                    total: _this.dataSource.myResponse.totalCount,
                                },
                                page: _this.dataSource.currentPage,
                                size: _this.dataSource.pageSize,
                                pagination: true,
                            };
                            _this.dataSource.updateComponent('aw-linked-objects', { items: _this.dataSource.myResponse.relatedItems }, options);
                        }
                        break;
                    case 'n7-smart-pagination.change': // changed page size value (pagination)
                        _this.handlePageSizeChange(payload.value);
                        break;
                    default:
                        break;
                }
            });
        };
        /**
         * Listens to routing events of this layout.
         */
        AwEntitaLayoutEH.prototype.listenRoute = function (selectedItem, forceReload) {
            var _this = this;
            if (selectedItem === void 0) { selectedItem = ''; }
            if (forceReload === void 0) { forceReload = false; }
            // listen for "page" query param changes-
            this.route.queryParams.pipe(operators.map(function (params) { return ({
                page: params.page,
                size: params.size
            }); })).subscribe(function (_a) {
                var page = _a.page, size = _a.size;
                if (size) {
                    _this.dataSource.pageSize = size;
                }
                if (_this.dataSource.currentPage !== page) {
                    _this.dataSource.currentPage = page;
                    _this.dataSource.handlePageNavigation();
                }
            });
            // get URL parameters with angular's paramMap
            this.route.paramMap.subscribe(function (params) {
                // look for id
                if (params.get('id')) {
                    if (_this.dataSource.currentId === params.get('id') && !forceReload) {
                        if (_this.dataSource.selectedTab !== params.get('tab')) {
                            _this.dataSource.handleNavUpdate(params.get('tab'));
                        }
                        return;
                    }
                    // get item from response with id === id and return as promise
                    _this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
                        .subscribe(function (res) {
                        if (res) {
                            _this.dataSource.loadContent(res);
                            // remove the entity of this page
                            _this.dataSource.updateWidgets(res);
                            if (selectedItem) {
                                _this.emitOuter('selectItem', selectedItem);
                            }
                        }
                    });
                }
                else {
                    _this.dataSource.loadItem();
                }
                // scroll top
                window.scrollTo(0, 0);
            });
        };
        return AwEntitaLayoutEH;
    }(core$1.EventHandler));

    var AwEntitaLayoutConfig = {
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
        /*
          Optional variables that can be accessed from the layout's logic.
          If removed, they must also be removed from the layout's DataSource file,
          and from this file imports.
         */
        AwEntitaLayoutComponent.prototype.initPayload = function () {
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
        AwEntitaLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwEntitaLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwEntitaLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
        ]; };
        AwEntitaLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-entita-layout',
                template: "<div class=\"aw-entity n7-side-auto-padding\"\r\n     *ngIf=\"lb.dataSource\">\r\n\r\n    <div class=\"aw-entity__sidebar\">\r\n        <!-- Custom header -->\r\n        <div *ngIf=\"lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-title-wrapper-loading\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <div *ngIf=\"!lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\r\n            <h1 class=\"aw-entity__sidebar-title\">\r\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\r\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\r\n            </h1>\r\n        </div>\r\n        <!-- Navigation -->\r\n        <div *ngIf=\"lb.dataSource.loading\"\r\n             class=\"aw-entity__sidebar-nav-loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\r\n                                    [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-nav'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <n7-nav *ngIf=\"!lb.dataSource.loading\" \r\n        [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['aw-entita-nav'].emit\">\r\n        </n7-nav>\r\n    </div>\r\n\r\n    <!-- lb.dataSource.selectedTab -->\r\n    <div *ngIf=\"lb.dataSource.loading\"\r\n         class=\"aw-entity__content-loading\">\r\n        <div class=\"aw-entity__content-loading-title\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n\r\n        <div class=\"aw-entity__content-loading-items\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n                                    [data]=\"{\r\n                blocks: [{ classes: 'entity-placeholder-item-preview' }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!lb.dataSource.loading\"\r\n         class=\"aw-entity__content\">\r\n        <section>\r\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\r\n                 class=\"aw-entity__content-section\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\r\n                <div class=\"aw-entity__overview-description\">\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n                <div class=\"aw-entity-layout__button-wrapper\">\r\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\r\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\r\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"(\r\n                ['overview', 'informazioni'].includes(lb.dataSource.selectedTab)\r\n            )\">\r\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\r\n                    <div class=\"aw-entity__content-section-header\"\r\n                         *ngIf=\"lb.dataSource.selectedTab === 'overview'\">\r\n                        <h2 class=\"aw-entity__content-section-title\"\r\n                            *ngIf=\"lb.dataSource.selectedTab === 'overview'\">Informazioni</h2>\r\n                        <a *ngIf=\"lb.dataSource.selectedTab !== 'informazioni'\"\r\n                           class=\"n7-btn n7-btn-light\"\r\n                           [routerLink]=\"[lb.dataSource.getNavBasePath() + '/informazioni']\">\r\n                            TUTTE LE INFORMAZIONI <i class=\"n7-icon-angle-right\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <p *ngIf=\"lb.dataSource.fallbackText\"\r\n                       class=\"aw-entity__content-section-empty\">\r\n                        {{ lb.dataSource.fallbackText }}\r\n                    </p>\r\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\r\n                                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                 *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedItems\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\r\n                       [queryParams]=\"{ page: 1 }\"\r\n                       class=\"n7-btn n7-btn-light\">\r\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                             [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                            <!-- Relation -->\r\n                            <div class=\"aw-item-preview-relation\"\r\n                                 *ngIf=\"preview.relation.value\">\r\n                                <p class=\"aw-item-preview-relation__description\">Tipo di relazione \r\n                                    <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                    <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                 *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedLa\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'fondi-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">{{ lb.dataSource.configuration.get('labels')['aggregazioni-logiche-collegate'] }}</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/fondi-collegati/']\"\r\n                       [queryParams]=\"{ page: 1 }\"\r\n                       class=\"n7-btn n7-btn-light\">\r\n                        TUTTE LE FONDI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                             [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                            <!-- Relation -->\r\n                            <div class=\"aw-item-preview-relation\"\r\n                                 *ngIf=\"preview.relation.value\">\r\n                                <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                                    <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                    <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.selectedTab === 'fondi-collegati'\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-related-entities__{{lb.dataSource.selectedTab}}\"\r\n                 *ngIf=\"lb.dataSource.myResponse.relatedEntities\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\r\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\r\n                       class=\"n7-btn n7-btn-light\"\r\n                       [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\r\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n\r\n                <!-- ENTITA COLLEGATE -->\r\n                <section id=\"related-item-container\"\r\n                         class=\"aw-entity__section aw-entity__related\">\r\n                    <div class=\"aw-entity__inner-title\">\r\n                        {{lb.dataSource.relatedEntitiesHeader}}\r\n                    </div>\r\n                    <div class=\"aw-entity__related-items n7-grid-2 aw-item-preview-list\">\r\n                        <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\r\n                            <div class=\"aw-item-preview-wrapper\">\r\n                                <n7-item-preview [data]=\"preview\"\r\n                                                [emit]=\"lb.widgets['aw-related-entities'].emit\">\r\n                                </n7-item-preview>\r\n                                <!-- Relation -->\r\n                                <div class=\"aw-item-preview-relation\"\r\n                                    *ngIf=\"preview.relation.value\">\r\n                                    <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                                        <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                                        <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\r\n                 *ngIf=\"lb.dataSource.myResponse.extraTab\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\r\n                 *ngIf=\"lb.dataSource.myResponse.wikiTab\"\r\n                 [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.wikiTab.text}}\r\n                </div>\r\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\r\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\r\n                </a>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                MainStateService,
                platformBrowser.Title])
        ], AwEntitaLayoutComponent);
        return AwEntitaLayoutComponent;
    }(AbstractLayout));

    var AwSearchService = /** @class */ (function () {
        function AwSearchService() {
            this._models = {};
        }
        AwSearchService.prototype.add = function (id, config) {
            if (this._models[id]) {
                throw Error("Search model '" + id + "' already exists!");
            }
            this._models[id] = new AwSearchModel(id, config);
        };
        AwSearchService.prototype.remove = function (id) {
            if (this._models[id]) {
                delete this._models[id];
            }
        };
        AwSearchService.prototype.model = function (id) {
            return this._models[id] || null;
        };
        AwSearchService.ɵprov = core.ɵɵdefineInjectable({ factory: function AwSearchService_Factory() { return new AwSearchService(); }, token: AwSearchService, providedIn: "root" });
        AwSearchService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], AwSearchService);
        return AwSearchService;
    }());

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

    var AwSearchLayoutDS = /** @class */ (function (_super) {
        __extends(AwSearchLayoutDS, _super);
        function AwSearchLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutId = 'aw-search-layout';
            _this.configId = 'search-layout';
            _this.currentNav = 'ricerca';
            _this.headTitle = 'Arianna4View - Ricerca';
            _this.facetsConfig = facetsConfig;
            _this.paginationList = [10, 25, 50];
            _this.destroyed$ = new rxjs.Subject();
            _this.resetButtonEnabled = true;
            /** Pagination value (url parameter) */
            _this.currentPage = 1;
            /** Linked objects page size */
            _this.pageSize = 10;
            _this.sidebarIsSticky = false;
            _this.isFirstLoading = true;
            _this.resultsLoading = false;
            /** True when the user has input a text string */
            _this.isSearchingText = new rxjs.BehaviorSubject(false);
            /** Current order method */
            _this.orderBy = 'label_sort';
            /** Current order direction */
            _this.orderDirection = 'ASC';
            _this.orderByLabel = 'Ordina per';
            /** Options used to render the HTMLSelect */
            _this.orderByOptions = [
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
            _this.drawPagination = function () {
                var _a = _this._getPaginationParams(), href = _a.href, queryParams = _a.queryParams;
                _this.one('n7-smart-pagination').updateOptions({
                    mode: 'href',
                    href: href,
                    queryParams: queryParams,
                });
                _this.one('n7-smart-pagination').update({
                    totalPages: Math.ceil(_this.totalCount / _this.pageSize),
                    currentPage: _this.currentPage,
                    pageLimit: 5,
                    sizes: {
                        list: _this.paginationList,
                        active: _this.pageSize,
                    },
                });
            };
            _this.getSearchModelId = function () { return _this.layoutId; };
            return _this;
        }
        AwSearchLayoutDS.prototype.onInit = function (_a) {
            var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
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
            this.search.add(this.layoutId, lodash.cloneDeep(this.facetsConfig));
            this.searchModel = this.search.model(this.layoutId);
            // query params control
            if (AwSearchModel.queryParams) {
                this.searchModel.updateFiltersFromQueryParams(AwSearchModel.queryParams);
                AwSearchModel.queryParams = null;
            }
            this._sidebarStickyControl();
            this.mainState.updateCustom('currentNav', this.currentNav);
            this.mainState.update('headTitle', this.headTitle);
        };
        AwSearchLayoutDS.prototype.onDestroy = function () {
            this.destroyed$.next();
            AwSearchModel.queryParams = null;
        };
        AwSearchLayoutDS.prototype.onSearchResponse = function () {
            this.resetButtonEnabled = true;
            if (this.isFirstLoading) {
                this.isFirstLoading = false;
                this.one('facets-wrapper').update({ searchModel: this.searchModel });
                this.searchModel.updateInputsFromFilters();
            }
        };
        /**
         * Handles changes of the HTMLSelect order control
         * @param payload _score_DESC, label_sort_ASC, label_sort_DESC
         */
        AwSearchLayoutDS.prototype.onOrderByChange = function (payload) {
            var orderBy = payload.substring(0, payload.lastIndexOf('_'));
            var direction = payload.substring(payload.lastIndexOf('_') + 1);
            var type = '';
            // set selected
            this.orderByOptions.forEach(function (option) {
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
        };
        AwSearchLayoutDS.prototype.onPageSizeChange = function (size) {
            this.pageSize = size;
            return this._updateSearchPage(this.currentPage);
        };
        AwSearchLayoutDS.prototype.onPaginationChange = function (payload) {
            var page = payload.replace('page-', '');
            return this._updateSearchPage(page);
        };
        AwSearchLayoutDS.prototype.onPaginationGoToChange = function (payload) {
            var page = payload.replace('goto-', '');
            return this._updateSearchPage(page);
        };
        AwSearchLayoutDS.prototype.resetPagination = function () {
            this._updateSearchPage(1);
        };
        AwSearchLayoutDS.prototype.onResultsLimitChange = function (payload) {
            this.setLimit(payload);
            // reset page & offset
            this.currentPage = 1;
            this.searchModel.setPageConfigOffset(0);
        };
        AwSearchLayoutDS.prototype.setLimit = function (payload) {
            this.pageSize = payload;
            this.searchModel.setPageConfigLimit(payload);
            this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
        };
        AwSearchLayoutDS.prototype.getResultsReq$ = function (params) {
            var _this = this;
            return this.communication.request$('search', {
                params: params,
                onError: function (error) { return console.error(error); },
            }).pipe(operators.tap(function (_a) {
                var totalCount = _a.totalCount, results = _a.results;
                _this.totalCount = totalCount;
                var resultsTitleIndex = 0;
                // results title
                if (_this.totalCount > 1) {
                    resultsTitleIndex = 2;
                }
                else if (_this.totalCount === 1) {
                    resultsTitleIndex = 1;
                }
                _this.resultsTitle = _this.configuration.get(_this.configId).results[resultsTitleIndex];
                _this.searchModel.updateTotalCount(totalCount);
                _this.one('aw-linked-objects').updateOptions({
                    context: _this.configId === 'gallery-layout' ? 'gallery' : 'search',
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    paginationParams: _this._getPaginationParams(),
                    dynamicPagination: {
                        total: totalCount,
                    },
                    size: _this.pageSize,
                });
                _this.drawPagination();
                _this.one('aw-linked-objects').update({ items: _this._normalizeItems(results.items) });
            }));
        };
        AwSearchLayoutDS.prototype.getFacetsReq$ = function (params) {
            var _this = this;
            return this.communication.request$('facets', {
                params: params,
                onError: function (error) { return console.error(error); },
            }).pipe(operators.tap(function (_a) {
                var facets = _a.facets;
                // entity links pagination control
                entityLinksHelper.onFacetsResponse(_this.searchModel, facets);
                // facets labels
                _this._addFacetsLabels(facets);
                // facets options
                _this._addFacetsOptions(facets);
                _this.searchModel.updateFacets(facets);
            }));
        };
        AwSearchLayoutDS.prototype.doSearchRequest$ = function () {
            var requestParams = this.searchModel.getRequestParams();
            var params = {
                searchParameters: __assign({ totalCount: 0, gallery: !!(this.configId === 'gallery-layout') }, requestParams),
            };
            // update offset
            entityLinksHelper.resetOffset();
            entityLinksHelper.updateParamsOffset(params.searchParameters);
            // initial loader
            entityLinksHelper.addInitialLoader(this);
            var resultsReq$ = this.getResultsReq$(params);
            var facetsReq$ = this.getFacetsReq$(params);
            return rxjs.forkJoin(resultsReq$, facetsReq$);
        };
        AwSearchLayoutDS.prototype._updateSearchPage = function (page) {
            if (+page === this.currentPage) {
                return rxjs.of(false);
            }
            this.currentPage = +page;
            var searchConfig = this.searchModel.getConfig();
            var pageConfig = searchConfig.page;
            var limit = pageConfig.limit;
            var newOffset = (this.currentPage - 1) * limit;
            this.searchModel.setPageConfigOffset(newOffset);
            return rxjs.of(true);
        };
        AwSearchLayoutDS.prototype._addFacetsLabels = function (facets) {
            var _this = this;
            facets
                .filter(function (f) { return Array.isArray(f.data); })
                .forEach(function (f) {
                f.data.forEach(function (dataItem) {
                    var key = dataItem.label;
                    dataItem.label = helpers.prettifySnakeCase(key, _this.prettifyLabels[key]);
                });
            });
        };
        AwSearchLayoutDS.prototype._addFacetsOptions = function (facets) {
            var _this = this;
            facets
                .filter(function (f) { return f.id === 'query-links'; })
                .forEach(function (f) {
                f.data.forEach(function (dataItem) {
                    var config = _this.configKeys[dataItem.value];
                    if (config) {
                        dataItem.options = {
                            icon: config.icon,
                            classes: "color-" + config['class-name'],
                        };
                    }
                });
            });
        };
        AwSearchLayoutDS.prototype._normalizeItems = function (items) {
            return items.map(function (singleItem) { return ({ item: __assign({}, singleItem) }); });
        };
        AwSearchLayoutDS.prototype._sidebarStickyControl = function () {
            var _this = this;
            // no sticky for Internet Explorer
            if (helpers.browserIsIE()) {
                return;
            }
            var source$ = rxjs.fromEvent(window, 'scroll');
            source$.pipe(operators.takeUntil(this.destroyed$)).subscribe(function () {
                var windowOffsetTop = window.pageYOffset;
                var stickyParent = document.getElementsByClassName('sticky-parent')[0];
                var wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
                _this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
            });
        };
        AwSearchLayoutDS.prototype._getPaginationParams = function () {
            var requestParams = this.searchModel.getRequestParams();
            var queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
            // aditional params
            queryParams.orderby = this.orderBy;
            queryParams.orderdirection = this.orderDirection;
            queryParams.page = this.currentPage;
            queryParams.limit = this.pageSize;
            var href = this.configuration.get('paths').searchBasePath;
            if (this.configId === 'gallery-layout') {
                href = this.configuration.get('paths').galleryBasePath;
            }
            return {
                href: href,
                queryParams: queryParams,
            };
        };
        return AwSearchLayoutDS;
    }(core$1.LayoutDataSource));

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

    var AwGalleryLayoutDS = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutDS, _super);
        function AwGalleryLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutId = 'aw-gallery-layout';
            _this.configId = 'gallery-layout';
            _this.currentNav = 'galleria';
            _this.headTitle = 'Arianna4View - Galleria';
            _this.facetsConfig = facetsConfig$1;
            _this.paginationList = [12, 24, 48];
            _this.pageSize = 12; // linked objects page size
            return _this;
        }
        return AwGalleryLayoutDS;
    }(AwSearchLayoutDS));

    var AwSearchLayoutEH = /** @class */ (function (_super) {
        __extends(AwSearchLayoutEH, _super);
        function AwSearchLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutId = 'aw-search-layout';
            _this.destroyed$ = new rxjs.Subject();
            /** Emits when any of the search-facets are changed */
            _this.facetsChange$ = new rxjs.Subject();
            /** Emits when the pagination element
             * or the select-sort element are changed */
            _this.additionalParamsChange$ = new rxjs.Subject();
            /** Last queried text, used to check if the text has changed */
            _this.previousText = '';
            /** Is true when the search is triggered with a new text-string */
            _this.textHasChanged = false;
            return _this;
        }
        AwSearchLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.layoutId + ".init":
                        {
                            _this.route = payload.route;
                            _this.dataSource.onInit(payload);
                            _this._listenToFacetsChange();
                            _this._listenToAdditionalParamsChange();
                            _this._listenToRouterChanges();
                            _this._listenToInternalFilters();
                            var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                            if ((textInput || '').length > 0) {
                                _this.dataSource.isSearchingText.next(true);
                                setTimeout(function () {
                                    _this.dataSource.onOrderByChange('_score_DESC');
                                    _this.additionalParamsChange$.next(); // emit from observable stream
                                }, 100);
                            }
                            // scroll top
                            window.scrollTo(0, 0);
                        }
                        break;
                    case _this.layoutId + ".destroy":
                        _this.dataSource.onDestroy();
                        _this.destroyed$.next();
                        break;
                    case _this.layoutId + ".orderbychange":
                        // handle the change of result-order
                        _this.dataSource.onOrderByChange(payload);
                        _this.additionalParamsChange$.next(); // emit from observable stream
                        break;
                    case _this.layoutId + ".searchreset":
                        _this.dataSource.resetButtonEnabled = false;
                        _this.dataSource.searchModel.clear();
                        _this.additionalParamsChange$.next();
                        break;
                    default:
                        console.warn('(search) unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'facets-wrapper.facetschange':
                        {
                            _this.dataSource.resetPagination();
                            var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                            // Checks if <input type=text>'s value has changed
                            _this.textHasChanged = !!(textInput && (textInput !== _this.previousText));
                            _this.previousText = textInput;
                            var activeOrder = _this.dataSource.orderByOptions.filter(function (d) { return d.selected; })[0].value;
                            if (_this.textHasChanged && (textInput || '').length > 0) {
                                // Add sort by score option
                                _this.dataSource.isSearchingText.next(true);
                            }
                            else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                                // Remove sort by score option
                                _this.dataSource.isSearchingText.next(false);
                                setTimeout(function () {
                                    _this.dataSource.onOrderByChange('label_sort_ASC');
                                    _this.additionalParamsChange$.next(); // emit from observable stream
                                }, 100);
                            }
                        }
                        break;
                    case 'n7-smart-pagination.change':
                        _this.dataSource.onResultsLimitChange(payload.value);
                        _this.additionalParamsChange$.next();
                        break;
                    default:
                        break;
                }
            });
        };
        /**
         * Handles changes to any of the search-facets
         */
        AwSearchLayoutEH.prototype._listenToFacetsChange = function () {
            var _this = this;
            this.facetsChange$.pipe(operators.debounceTime(500)).subscribe(function () {
                _this.dataSource.resultsLoading = true;
                if (_this.textHasChanged) {
                    _this.additionalParamsChange$.next();
                }
                else {
                    _this.dataSource.doSearchRequest$().subscribe(function () {
                        _this.dataSource.resultsLoading = false;
                        _this.dataSource.onSearchResponse();
                        _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
                    });
                }
            });
        };
        /**
         * Handles entity links pagination
         */
        AwSearchLayoutEH.prototype._listenToInternalFilters = function () {
            var _this = this;
            entityLinksHelper.listenToChanges(this.dataSource)
                .subscribe(function () {
                _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
            });
        };
        /**
         * Handles changes happening on pagination and select elements.
         */
        AwSearchLayoutEH.prototype._listenToAdditionalParamsChange = function () {
            var _this = this;
            this.additionalParamsChange$.subscribe(function () {
                var searchModel = _this.dataSource.searchModel;
                var requestParams = searchModel.getRequestParams();
                var queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
                Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
                // aditional params
                queryParams.orderby = _this.dataSource.orderBy;
                queryParams.orderdirection = _this.dataSource.orderDirection;
                queryParams.page = _this.dataSource.currentPage;
                queryParams.limit = _this.dataSource.pageSize;
                // If the searched text was updated, overwrite the query params and force sorting by "score".
                if (_this.textHasChanged) {
                    queryParams.orderby = '_score';
                    queryParams.orderdirection = 'DESC';
                    _this.textHasChanged = false;
                }
                _this.emitGlobal('navigate', {
                    handler: 'router',
                    path: [],
                    queryParams: queryParams,
                });
                _this.facetsChange$.next();
            });
        };
        /** URL changes */
        AwSearchLayoutEH.prototype._listenToRouterChanges = function () {
            var _this = this;
            this.route.queryParams.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (params) {
                _this.emitOuter('queryparamschange', params);
                // aditional params control
                if (params.orderby && params.orderdirection) {
                    _this.dataSource.onOrderByChange(params.orderby + "_" + params.orderdirection);
                }
                if (params.page) {
                    _this.dataSource.onPaginationChange("page-" + params.page);
                }
                if (params.limit) {
                    _this.dataSource.setLimit(+params.limit);
                }
                _this.facetsChange$.next(); // scroll to ref element
                if (!_this.scrollRefElement) {
                    _this.scrollRefElement = document.querySelector('.scroll-ref');
                }
                else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                    _this.scrollRefElement.scrollIntoView();
                }
            });
        };
        return AwSearchLayoutEH;
    }(core$1.EventHandler));

    var AwGalleryLayoutEH = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutEH, _super);
        function AwGalleryLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutId = 'aw-gallery-layout';
            return _this;
        }
        return AwGalleryLayoutEH;
    }(AwSearchLayoutEH));

    var AwGalleryLayoutConfig = {
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

    var AwGalleryLayoutComponent = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutComponent, _super);
        function AwGalleryLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search, route) {
            var _this = _super.call(this, layoutsConfiguration.get('AwGalleryLayoutConfig') || AwGalleryLayoutConfig) || this;
            _this.configuration = configuration;
            _this.layoutsConfiguration = layoutsConfiguration;
            _this.mainState = mainState;
            _this.communication = communication;
            _this.search = search;
            _this.route = route;
            return _this;
        }
        AwGalleryLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                communication: this.communication,
                search: this.search,
                route: this.route,
                options: this.config.options || {},
            };
        };
        AwGalleryLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwGalleryLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwGalleryLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: CommunicationService },
            { type: AwSearchService },
            { type: router.ActivatedRoute }
        ]; };
        AwGalleryLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-gallery-layout',
                template: "<div class=\"aw-search aw-gallery n7-side-auto-padding\"\r\n     id=\"gallery-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar sticky-target\"\r\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </aw-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"scroll-ref\">&nbsp;</div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                        class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                            id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\r\n                                [value]=\"option.value\"\r\n                                [selected]=\"option.selected\"\r\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\r\n                                        [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper\">\r\n                <div class=\"n7-grid-3\">\r\n                    <div *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\"\r\n                                         [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\r\n                                class=\"n7-btn aw-search__fallback-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                LayoutsConfigurationService,
                MainStateService,
                CommunicationService,
                AwSearchService,
                router.ActivatedRoute])
        ], AwGalleryLayoutComponent);
        return AwGalleryLayoutComponent;
    }(AbstractLayout));

    var AwHomeLayoutDS = /** @class */ (function (_super) {
        __extends(AwHomeLayoutDS, _super);
        function AwHomeLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.facetInputs = {};
            _this.autocompletePopoverOpen = false;
            _this.autocompleteChanged$ = new rxjs.Subject();
            _this.numOfItemsStr = null;
            _this.currentHoverEntity = null;
            _this.hasScrollBackground = false;
            _this.resultsLimit = -1;
            _this.selectedEntitiesIds = [];
            _this.destroyed$ = new rxjs.Subject();
            _this.homeAutocompleteIsLoading = false;
            _this.resultsListIsLoading = false;
            /** Enabled from: arianna-config/features-enabled/carousel */
            _this.carouselEnabled = false;
            // ===== BUBBLE CHART =====
            _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
            _this.selectedBubbles = []; // array of IDs
            _this.updateComponent = function (id, data, options) {
                // update components from EH
                if (options) {
                    _this.one(id).updateOptions(options);
                }
                _this.one(id).update(data);
            };
            return _this;
        }
        // ========================
        AwHomeLayoutDS.prototype.onInit = function (_a) {
            var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
            var _b, _c;
            this.communication = communication;
            this.configuration = configuration;
            // this.facetData = [];
            this.mainState = mainState;
            this.tippy = tippy;
            this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
            this.bubblesEnabled = (_b = this.configuration.get('features-enabled')) === null || _b === void 0 ? void 0 : _b.bubblechart;
            this.carouselEnabled = (_c = this.configuration.get('features-enabled')) === null || _c === void 0 ? void 0 : _c.carousel;
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
        };
        AwHomeLayoutDS.prototype.onDestroy = function () {
            this.destroyed$.next();
        };
        AwHomeLayoutDS.prototype.makeRequest$ = function (query, params) {
            // make request from EH
            return this.communication.request$(query, {
                onError: function (error) { return console.error(error); },
                params: params,
            });
        };
        AwHomeLayoutDS.prototype.initialFilterRequest = function () {
            return this.communication.request$('globalFilter', {
                onError: function (error) { return console.error(error); },
                params: {
                    entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
                },
            });
        };
        AwHomeLayoutDS.prototype.parseInitialRequest = function (response) {
            var _this = this;
            this.firstBubbleResponse = response.entitiesData;
            var facetData = [];
            response.typeOfEntityData.forEach(function (toe) {
                var TOEconfigData = _this.configuration.get('config-keys')[toe.type];
                facetData.push(__assign(__assign(__assign({}, toe), { enabled: true, locked: false }), TOEconfigData));
            });
            this.one('aw-home-facets-wrapper').update(facetData);
        };
        AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = function (response) {
            var _this = this;
            if (!response || !response.itemsPagination) {
                return;
            }
            var numOfItems = response.itemsPagination.totalCount;
            if (numOfItems > 0) {
                var numOfThousand = 0;
                while (numOfItems > 999) {
                    numOfItems -= 1000;
                    numOfThousand += 1;
                }
                var numOfItemsTmpStr = "" + numOfItems;
                if (numOfItems < 10)
                    numOfItemsTmpStr = "00" + numOfItems;
                else if (numOfItems < 100)
                    numOfItemsTmpStr = "0" + numOfItems;
                if (numOfThousand > 0)
                    this.numOfItemsStr = numOfThousand + "." + numOfItemsTmpStr;
                else
                    this.numOfItemsStr = "" + numOfItems;
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
            setTimeout(function () {
                _this._scrollBackgroundControl();
            });
        };
        AwHomeLayoutDS.prototype.updateTags = function (onlyBubbles) {
            if (!onlyBubbles) {
                this.renderItemTags();
            }
        };
        AwHomeLayoutDS.prototype.handleFacetSearchChange = function (change) {
            var payload = change.inputPayload;
            var value = change.value;
            // store the entered text in facetInputs
            this.facetInputs[payload] = value;
        };
        AwHomeLayoutDS.prototype.renderItemTags = function () {
            var _this = this;
            /*
                  Try to build an item tag for each selected query looking at the data from the
                  first response. If the needed bubble data cannot be found, ask the backend
                  for that bubble's data.
              */
            var queryList = []; // list of pending queries
            var tagsData = []; // list of tags data built from query
            this.selectedBubbles.forEach(function (b) {
                var theBubble = _this.firstBubbleResponse.find(function (el) { return el.entity.id === b; });
                if (theBubble) { // if a bubble was found
                    var bubbleConfig = _this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                    tagsData.push({
                        label: theBubble.entity.label,
                        icon: 'n7-icon-close',
                        payload: b,
                        classes: "tag-" + bubbleConfig['class-name'],
                    });
                }
                else { // if the bubble was not found, make a query
                    var params = { entityId: b, entitiesListSize: 1 };
                    queryList.push(_this.makeRequest$('getMissingBubble', params));
                }
            });
            if (queryList.length > 0) { // if there are pending bubble queries
                rxjs.forkJoin(queryList).subscribe(function (forkres) {
                    forkres.forEach(function (r) {
                        var bubbleConfig = _this.configuration.get('config-keys')[r.typeOfEntity];
                        tagsData.push({
                            label: r.label,
                            icon: 'n7-icon-close',
                            payload: r.id,
                            classes: "tag-" + bubbleConfig['class-name'],
                        });
                    });
                    _this.one('aw-home-item-tags-wrapper').update(tagsData);
                });
            }
            else {
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            }
        };
        /**
         * Loads data for the carousel component
         */
        AwHomeLayoutDS.prototype.loadCarousel = function () {
            var _this = this;
            this.communication.request$('getSlider').subscribe({
                next: function (res) {
                    if (res) {
                        _this.one('aw-carousel').update(res);
                    }
                },
                error: function (err) {
                    console.error(err);
                    _this.carouselEnabled = false;
                },
            });
        };
        AwHomeLayoutDS.prototype.onHeroChange = function (value) {
            if (value) {
                var escapedValue = helpers.escapeQuotes(value);
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
        };
        AwHomeLayoutDS.prototype._scrollBackgroundControl = function () {
            var _this = this;
            var node = document.getElementById('bubble-results-list');
            if (!node)
                return;
            var source$ = rxjs.fromEvent(node, 'scroll');
            // height control
            setTimeout(function () {
                _this._setHasScrollBackground(node);
            }, 500);
            // scroll listen
            source$.pipe(operators.debounceTime(50)).subscribe(function (_a) {
                var target = _a.target;
                _this._setHasScrollBackground(target);
            });
        };
        AwHomeLayoutDS.prototype._setHasScrollBackground = function (target) {
            this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
        };
        AwHomeLayoutDS.prototype._listenAutoCompleteChanges = function () {
            var _this = this;
            this.one('aw-home-autocomplete').updateOptions({
                keys: this.configuration.get('config-keys'),
                config: this.configuration,
                labels: this.configuration.get('labels'),
                paths: this.configuration.get('paths'),
            });
            this.autocompleteChanged$.pipe(operators.debounceTime(500), operators.takeUntil(this.destroyed$)).subscribe(function (value) {
                _this.communication.request$('autoComplete', {
                    onError: function (error) { return console.error(error); },
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] },
                    },
                }).subscribe(function (response) {
                    _this.homeAutocompleteIsLoading = false;
                    _this.one('aw-home-autocomplete').update({
                        response: response,
                        query: value,
                    });
                });
            });
        };
        AwHomeLayoutDS.prototype._toggleAutocompletePopover = function () {
            var _this = this;
            if (!this.autocompletePopover) {
                var template = document.getElementById('aw-home-advanced-autocomplete-popover');
                template.style.display = 'block';
                var _a = __read(this.tippy('.aw-home__top-hero .n7-hero__input', {
                    content: template,
                    trigger: 'manual',
                    interactive: true,
                    arrow: false,
                    flip: false,
                    appendTo: 'parent',
                    theme: 'light-border',
                    placement: 'bottom-start',
                    maxWidth: '100%',
                    onHidden: function () { _this.autocompletePopoverOpen = false; },
                }), 1), popOver = _a[0];
                this.autocompletePopover = popOver;
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
    }(core$1.LayoutDataSource));

    var AwHomeLayoutEH = /** @class */ (function (_super) {
        __extends(AwHomeLayoutEH, _super);
        function AwHomeLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.handleSimpleAutocompleteClick = function (payload) {
                _this.emitOuter('facetclick', payload);
            };
            _this.handleChartSelection = function (payload) {
                var selectedEntitiesIds = payload;
                _this.dataSource.selectedBubbles = payload;
                _this.dataSource.resultsListIsLoading = true;
                _this.dataSource.makeRequest$('globalFilter', {
                    selectedEntitiesIds: selectedEntitiesIds,
                    entitiesListSize: _this.configuration.get('bubble-chart').bubbleLimit,
                }).subscribe(function (res) {
                    _this.dataSource.resultsListIsLoading = false;
                    if (res && res.entitiesData.length > 0) {
                        // if some linked objects exist for the selected entities:
                        _this.dataSource.lastBubbleResponse = res.entitiesData;
                        _this.emitOuter('filterbubbleresponse', res.entitiesData);
                        _this.dataSource.renderPreviewsFromApolloQuery(res);
                        _this.dataSource.renderItemTags();
                    }
                    else {
                        // if the backend returns an empty list of results:
                        var queryList_1 = [];
                        _this.dataSource.selectedBubbles.forEach(function (b) {
                            var params = { entityId: b, entitiesListSize: 1 };
                            queryList_1.push(// make a query for each selected bubble
                            _this.dataSource.makeRequest$('getMissingBubble', params));
                        });
                        // await for every missing bubble and build a custom response
                        rxjs.forkJoin(queryList_1).subscribe(function (forkres) {
                            var customBubbles = [];
                            forkres.forEach(function (r) { customBubbles.push({ count: 0, entity: r }); });
                            _this.emitOuter('filterbubbleresponse', customBubbles);
                            _this.dataSource.renderPreviewsFromApolloQuery(res);
                            _this.dataSource.renderItemTags();
                        });
                    }
                });
            };
            return _this;
        }
        AwHomeLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.loadFilters();
                        _this.configuration = payload.configuration;
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'aw-home-layout.outerlinkclick':
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: payload,
                        });
                        break;
                    case 'aw-home-layout.destroy':
                        _this.dataSource.onDestroy();
                        break;
                    case 'aw-home-layout.bubbleresultsviewallclick':
                        {
                            var entityLinks = _this.dataSource.selectedBubbles.join(',');
                            var basePath = _this.configuration.get('paths').searchBasePath;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { 'entity-links': entityLinks },
                            });
                        }
                        break;
                    case 'aw-home-layout.clearselection':
                        _this.emitOuter('clearselection');
                        break;
                    default:
                        console.warn('(home) unhandled inner event of type: ', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                        _this.emitOuter('d3end', payload);
                        break;
                    case 'aw-chart-tippy.select':
                        _this.emitOuter('select', payload);
                        break;
                    case 'aw-hero.enter':
                        {
                            var query = helpers.escapeQuotes(payload.value);
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [_this.configuration.get('paths').searchBasePath],
                                queryParams: { query: query },
                            });
                        }
                        break;
                    case 'aw-hero.change':
                        _this.dataSource.autocompleteValue = payload.value;
                        _this.dataSource.onHeroChange(payload.value);
                        break;
                    case 'aw-home-facets-wrapper.click':
                        _this.emitOuter('togglefilter', payload);
                        break;
                    case 'aw-home-facets-wrapper.change':
                        if (!payload.value
                            || (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                            _this.emitOuter('facetswrapperclose', { facetId: payload });
                        }
                        else if (payload.value) {
                            _this.emitOuter('facetswrapperrequest', { facetId: payload });
                            // clear autocomplete results
                            _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                            var params = {
                                input: payload.value,
                                typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                                itemsPagination: {
                                    offset: 0, limit: _this.configuration.get('home-layout')['results-limit'],
                                },
                            };
                            _this.dataSource.makeRequest$('autoComplete', params).subscribe(function (response) {
                                if (response.results.length < 1) {
                                    var fallback = {
                                        totalcount: 0,
                                        results: [
                                            {
                                                entity: {
                                                    id: 'fallback',
                                                    label: // use fallback string from configuration
                                                    _this.configuration.get('home-layout')['autocomplete-fallback']
                                                        ? _this.configuration.get('home-layout')['autocomplete-fallback']
                                                        : 'Nessun risultato trovato',
                                                },
                                            },
                                        ],
                                    };
                                    // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                    _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: _this.configuration });
                                }
                                else {
                                    // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                    _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                    { key: payload.value, response: response }, // DATA
                                    { config: _this.configuration });
                                }
                            });
                        }
                        break;
                    case 'aw-home-item-tags-wrapper.click':
                        _this.emitOuter('tagclick', payload);
                        break;
                    case 'aw-linked-objects.datarequest':
                        {
                            var currentPage = payload.currentPage;
                            var params = {
                                selectedEntitiesIds: _this.dataSource.selectedBubbles,
                                itemsPagination: {
                                    offset: currentPage * _this.dataSource.resultsLimit,
                                    limit: _this.dataSource.resultsLimit,
                                },
                            };
                            _this.dataSource.makeRequest$('globalFilter', params).subscribe(function (res) {
                                if (res) {
                                    _this.emitOuter('dataresponse', { res: res });
                                }
                                else {
                                    console.warn('Unable to fetch additional data.');
                                }
                            });
                        }
                        break;
                    case 'aw-autocomplete-wrapper.clickresult':
                        _this.handleSimpleAutocompleteClick(payload);
                        break;
                    case 'aw-home-autocomplete.click':
                        {
                            var source = payload.source, payloadType = payload.type;
                            var basePath = void 0;
                            if (source === 'item') {
                                if (payloadType === 'oggetto-culturale') {
                                    basePath = _this.configuration.get('paths').schedaBasePath;
                                }
                                else {
                                    basePath = _this.configuration.get('paths').entitaBasePath;
                                }
                                _this.emitGlobal('navigate', {
                                    handler: 'router',
                                    path: [basePath, payload.id, helpers.slugify(payload.title)],
                                });
                            }
                            else if (source === 'showMore') {
                                var query = _this.dataSource.homeAutocompleteQuery;
                                basePath = _this.configuration.get('paths').searchBasePath;
                                _this.emitGlobal('navigate', {
                                    handler: 'router',
                                    path: [basePath],
                                    queryParams: { query: query },
                                });
                            }
                            else if (source === 'extendsearch') { // click on <Cerca in tutti i campi> (call to action)
                                _this.emitGlobal('navigate', {
                                    handler: 'router',
                                    path: [_this.configuration.get('paths').searchBasePath],
                                    queryParams: {
                                        query: _this.dataSource.autocompleteValue,
                                        'query-all': 1,
                                    },
                                });
                            }
                        }
                        break;
                    case 'aw-bubble-chart.selection':
                        _this.handleChartSelection(payload);
                        break;
                    case 'aw-bubble-chart.lockfilter':
                        _this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                        break;
                    default:
                        // console.warn('(home) unhandled outer event of type', type)
                        break;
                }
            });
        };
        AwHomeLayoutEH.prototype.loadFilters = function () {
            var _this = this;
            this.dataSource.initialFilterRequest().subscribe(function (response) {
                // console.log('(home) Apollo responded with:', response)
                if (!response) {
                    return;
                }
                _this.dataSource.parseInitialRequest(response);
                if (_this.dataSource.bubblesEnabled) {
                    _this.emitOuter('filterbubbleresponse', response.entitiesData);
                }
            });
        };
        AwHomeLayoutEH.prototype.outerLinkClick = function (type, payload) {
            window.open(payload, '_blank');
        };
        return AwHomeLayoutEH;
    }(core$1.EventHandler));

    var AwHomeLayoutConfig = {
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
        AwHomeLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                router: this.router,
                communication: this.communication,
                options: this.config.options || {},
                tippy: tippy__default,
            };
        };
        AwHomeLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwHomeLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwHomeLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.Router },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService }
        ]; };
        AwHomeLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-home-layout',
                template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\r\n    <!-- Carousel -->\r\n    <div class=\"aw-home__carousel\" *ngIf=\"lb.dataSource.carouselEnabled\">\r\n        <n7-carousel [data]=\"lb.widgets['aw-carousel'].ds.out$ | async\">\r\n        </n7-carousel>\r\n    </div>\r\n\r\n    <!-- Hero section at the top of the page -->\r\n    <div class=\"aw-home__top-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Bubble chart -->\r\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\r\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\r\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\r\n                blocks: [{\r\n                    classes: 'facet-placeholder-header'\r\n                }, {\r\n                    classes: 'facet-placeholder-input'\r\n                }] \r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <span class=\"aw-home__facet\"\r\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\r\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet-header>\r\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [\r\n                    {\r\n                        classes: 'facet-placeholder-item-1'\r\n                    }\r\n                ]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\r\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\r\n            <aw-bubble-chart-wrapper>\r\n                <aw-chart-tippy \r\n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n                </aw-chart-tippy>\r\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                </n7-bubble-chart>\r\n            </aw-bubble-chart-wrapper>\r\n        </div>\r\n\r\n        <!-- Linked objects -->\r\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\r\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\r\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\r\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\r\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Risultati</span>\r\n                    </h1>\r\n                </div>\r\n                <div class=\"aw-home__bubble-tags-wrapper\">\r\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\r\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\r\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\r\n                        </n7-tag>\r\n                        <br>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"aw-home__bubble-results-list-wrapper\">\r\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\r\n                        <n7-content-placeholder \r\n                            *ngFor=\"let i of [1, 2, 3, 4, 5]\"\r\n                            [data]=\"{\r\n                                blocks: [{\r\n                                    classes: 'search-result-placeholder-title'\r\n                                }, {\r\n                                    classes: 'search-result-placeholder-metadata'\r\n                                }]\r\n                        }\"></n7-content-placeholder>\r\n                    </div>\r\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\r\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\r\n\r\n                        <div class=\"aw-home__bubble-results-fallback\"\r\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\r\n                            <p class=\"aw-home__bubble-results-fallback-text\">\r\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\r\n                            </p>\r\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\r\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\r\n                                Resetta la ricerca\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"aw-item-preview-list\">\r\n                            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result\">\r\n                                <div class=\"aw-item-preview-wrapper\">\r\n                                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                                    </n7-smart-breadcrumbs>\r\n                                    <n7-item-preview [data]=\"preview\"\r\n                                                        [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                                    </n7-item-preview>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                        \r\n                        <!-- <ng-container\r\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\r\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                        </ng-container> -->\r\n\r\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\r\n                            <div class=\"aw-home__bubble-results-list-loader\">\r\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\r\n                                </n7-loader>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\r\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\r\n                </div>\r\n                <!-- aw-linked-objects__actions -->\r\n                <ng-container\r\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\r\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\r\n                        class=\"aw-home__bubble-results-list-actions\">\r\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\r\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\r\n                            {{action[0].label}}\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n\r\n    <!-- Outer links -->\r\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\r\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\r\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\r\n                {{ lb.dataSource.outerLinksTitle }}\r\n            </h2>\r\n            <div class=\"aw-home__outer-links-items\">\r\n                <!-- Item preview -->\r\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\r\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\r\n                </n7-item-preview>\r\n                <!-- END // Item preview -->\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- END // Outer links -->\r\n\r\n    <!-- Hero section at the bottom of the page -->\r\n    <div class=\"aw-home__bottom-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Adavanced autocomplete popover  -->\r\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\r\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\r\n            <n7-loader [data]=\"{}\"></n7-loader>\r\n        </div>\r\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\r\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\r\n        </n7-advanced-autocomplete>\r\n    </div>\r\n\r\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\r\n    <!-- Creating one template for each facet -->\r\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\r\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\r\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\r\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\r\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\r\n                <n7-loader [data]=\"{}\"></n7-loader>\r\n            </div>\r\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\r\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\r\n            </n7-simple-autocomplete>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.Router,
                ConfigurationService,
                CommunicationService,
                MainStateService])
        ], AwHomeLayoutComponent);
        return AwHomeLayoutComponent;
    }(AbstractLayout));

    var AwMapLayoutDS = /** @class */ (function (_super) {
        __extends(AwMapLayoutDS, _super);
        function AwMapLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pageSize = 10;
            _this.state$ = new rxjs.BehaviorSubject('EMPTY');
            _this.currentPage = 1;
            return _this;
        }
        AwMapLayoutDS.prototype.onInit = function (_a) {
            var _this = this;
            var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, titleService = _a.titleService, communication = _a.communication;
            this.communication = communication;
            this.configuration = configuration;
            this.mainState = mainState;
            this.options = options;
            this.titleService = titleService;
            this.mainState.update('headTitle', 'Arianna4View - Mappa');
            // navigation update
            this.mainState.updateCustom('currentNav', 'mappa');
            this.communication.request$('getMapObjects').subscribe(function (response) {
                _this.one('aw-map').update(response);
            });
        };
        AwMapLayoutDS.prototype.onMarkerOpen = function (_a) {
            var _this = this;
            var id = _a.id, label = _a.label;
            // loading results
            this.state$.next('LOADING');
            this.communication.request$('getEntityRelatedItems', {
                params: {
                    selectedEntitiesIds: [id]
                }
            }).subscribe(function (_a) {
                var itemsPagination = _a.itemsPagination;
                // clear loading
                _this.state$.next('SUCCESS');
                _this.relatedItems = itemsPagination.items;
                _this.total = _this.relatedItems.length;
                var text = "<strong>" + _this.total + "</strong> Risultati collegati a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                if (_this.total === 1) {
                    text = "<strong>" + _this.total + "</strong> Risultato collegato a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                }
                var titleData = {
                    title: {
                        main: { text: text },
                    },
                    actions: {
                        buttons: [{
                                anchor: {
                                    href: _this.configuration.get('paths').entitaBasePath + "/" + id + "/" + helpers.slugify(label),
                                },
                                text: 'Vedi Entità'
                            }]
                    }
                };
                _this.one('aw-scheda-inner-title').update(titleData);
                // update items
                _this.updateItems();
                // update pagination
                _this.updatePagination();
            });
        };
        AwMapLayoutDS.prototype.onMarkerClose = function () {
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
        };
        AwMapLayoutDS.prototype.onPaginationChange = function (_a) {
            var value = _a.value;
            this.pageSize = +value;
            this.updateItems();
            this.updatePagination();
        };
        AwMapLayoutDS.prototype.onPaginationClick = function (_a) {
            var page = _a.page;
            if (typeof page === 'number' && page !== this.currentPage) {
                this.currentPage = page;
                this.updateItems();
                this.updatePagination();
            }
        };
        AwMapLayoutDS.prototype.updateItems = function () {
            this.one('aw-linked-objects').updateOptions({
                context: 'map',
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.relatedItems });
        };
        AwMapLayoutDS.prototype.updatePagination = function () {
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
        };
        return AwMapLayoutDS;
    }(core$1.LayoutDataSource));

    var AwMapLayoutEH = /** @class */ (function (_super) {
        __extends(AwMapLayoutEH, _super);
        function AwMapLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        AwMapLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-map-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.emitOuter('init', payload);
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'aw-map-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-map.markeropen':
                        _this.dataSource.onMarkerOpen(payload);
                        break;
                    case 'aw-map.markerclose':
                        _this.dataSource.onMarkerClose();
                        break;
                    case 'n7-smart-pagination.change':
                        _this.dataSource.onPaginationChange(payload);
                        break;
                    case 'n7-smart-pagination.click':
                        _this.dataSource.onPaginationClick(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return AwMapLayoutEH;
    }(core$1.EventHandler));

    var AwMapLayoutConfig = {
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

    var AwMapLayoutComponent = /** @class */ (function (_super) {
        __extends(AwMapLayoutComponent, _super);
        function AwMapLayoutComponent(configuration, layoutsConfiguration, communication, mainState, titleService) {
            var _this = _super.call(this, layoutsConfiguration.get('AwMapLayoutConfig') || AwMapLayoutConfig) || this;
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
        AwMapLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                titleService: this.titleService,
                communication: this.communication,
                options: this.config.options || {},
            };
        };
        AwMapLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwMapLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwMapLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
        ]; };
        AwMapLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-map-layout',
                template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n        title: {\r\n            main: {\r\n                    text: 'I luoghi dell\\'archivio'\r\n            }\r\n        }\r\n    }\">\r\n    </n7-inner-title>\r\n\r\n    <!-- Map -->\r\n    <div class=\"aw-multimedia__map\">\r\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\r\n    </div>\r\n    <!-- END // Map -->\r\n\r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title \r\n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs \r\n                            [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview \r\n                            [data]=\"preview\" \r\n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                MainStateService,
                platformBrowser.Title])
        ], AwMapLayoutComponent);
        return AwMapLayoutComponent;
    }(AbstractLayout));

    var AwSchedaLayoutDS = /** @class */ (function (_super) {
        __extends(AwSchedaLayoutDS, _super);
        function AwSchedaLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.stickyControlTrigger$ = new rxjs.Subject();
            _this.contentParts = {};
            _this.sidebarIsSticky = false;
            _this.treeMaxHeight = '100%';
            _this.contentIsLoading = false;
            _this.currentId = null;
            /** Switch loaded-content and loaded-empty states */
            _this.hasContent = true;
            /** Name of query that should be used (chosen in config) */
            _this.getTreeQuery = 'getTree';
            _this.getTree = function () { return AwSchedaLayoutDS.tree; };
            return _this;
        }
        AwSchedaLayoutDS.prototype.onInit = function (_a) {
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
            var _b, _c, _d;
            if (configuration) {
                this.configuration = configuration;
                this.layoutConfig = this.configuration.get('scheda-layout');
            }
            this.mainState = mainState;
            this.router = router;
            this.titleService = titleService;
            this.communication = communication;
            this.options = options;
            if (!this.sidebarCollapsed) {
                this.sidebarCollapsed = (_b = this.layoutConfig.tree.collapsedByDefault) !== null && _b !== void 0 ? _b : false;
            }
            this.relatedEntitiesHeader = this.layoutConfig['related-entities'].title;
            this.similarItemsSectionTitle = this.layoutConfig['related-items'].title;
            this.externalUrlText = this.layoutConfig['external-url-text'];
            this.metadataSectionTitle = this.getMetadataSectionTitle();
            this.hasSimilarItems = false;
            this.one('aw-chart-tippy').updateOptions({
                basePath: this.configuration.get('paths').entitaBasePath,
            });
            this.emptyLabel = this.layoutConfig['empty-label'];
            this.emptyStateString = this.layoutConfig['empty-html'];
            this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
            // switch the tree query to the slim version
            if ((_d = (_c = this.layoutConfig) === null || _c === void 0 ? void 0 : _c.tree) === null || _d === void 0 ? void 0 : _d.lite) {
                this.getTreeQuery = 'getTreeLite';
            }
            this.mainState.update('headTitle', 'Arianna4View - Patrimonio');
            this.mainState.update('pageTitle', 'Arianna4View - Patrimonio');
            this.mainState.updateCustom('currentNav', 'patrimonio');
            // image viewer context-menu check
            var imageViewerConfig = this.configuration.get('scheda-layout')['image-viewer'] || {};
            this.hasContextMenu = function () { return !!imageViewerConfig['context-menu']; };
            // pdf viewer options
            this.one('aw-scheda-pdf').updateOptions(this.configuration.get('scheda-layout')['pdf-viewer'] || {});
            // sidebar sticky control
            this._sidebarStickyControl();
        };
        AwSchedaLayoutDS.prototype.onDestroy = function () {
            this.destroyed$.next();
        };
        AwSchedaLayoutDS.prototype.getMetadataSectionTitle = function () {
            var layoutConfig = this.configuration.get('scheda-layout');
            var metadataConfig = layoutConfig.metadata || {};
            return metadataConfig.title || null;
        };
        AwSchedaLayoutDS.prototype.getNavigation = function (id) {
            if (AwSchedaLayoutDS.tree) {
                return rxjs.of(AwSchedaLayoutDS.tree);
            }
            return this.communication.request$(this.getTreeQuery, {
                onError: function (error) { return console.error(error); },
                params: { treeId: id },
            });
        };
        AwSchedaLayoutDS.prototype.setTree = function (tree) {
            AwSchedaLayoutDS.tree = tree;
        };
        AwSchedaLayoutDS.prototype.updateNavigation = function (text) {
            this.one('aw-sidebar-header').update({ text: text, isExpanded: !this.sidebarCollapsed });
        };
        AwSchedaLayoutDS.prototype.loadItem = function (id) {
            var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getNode', {
                onError: function (error) { return console.error(error); },
                params: { id: id, maxSimilarItems: maxSimilarItems },
            });
        };
        /**
         * Loads the content of the selected tree item in the right portion of the view.
         * @param response http response for the tree item
         */
        AwSchedaLayoutDS.prototype.loadContent = function (response) {
            var _this = this;
            if (response) {
                // reset
                this.currentDigitalObject = null;
                this.currentDigitalObjectIndex = null;
                var metadataFields = this.getFields(response);
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
                var content = { content: null };
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
                var titleObj = {
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
                var breadcrumbs_1 = {
                    items: [],
                };
                if (response.breadcrumbs) {
                    response.breadcrumbs.forEach(function (element) {
                        breadcrumbs_1.items.push({
                            label: element.label,
                            anchor: {
                                href: [
                                    _this.configuration.get('paths').schedaBasePath,
                                    element.link + "/",
                                    helpers.slugify(element.label),
                                ].join(''),
                            },
                        });
                    });
                    this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
                }
                // update head title
                this.mainState.update('headTitle', "Arianna4View - Patrimonio - " + (response.title || response.label));
            }
            if (response.relatedItems) {
                this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
                this.one('aw-linked-objects').update(response);
            }
            if (response.relatedEntities) {
                response.relatedEntities.forEach(function (el) {
                    var label = response.title || response.label;
                    el.relationName = label.length > 30
                        ? label.substr(0, 30) + "... "
                        : label;
                });
                this.one('aw-related-entities').updateOptions({
                    context: 'scheda', config: this.configuration, list: 'relatedEntities', title: response.title
                });
                this.one('aw-related-entities').update(response.relatedEntities);
            }
            // control sticky
            setTimeout(function () {
                _this.stickyControlTrigger$.next();
            });
        };
        /**
         * Toggle between the tree's collapsed or expanded state.
         */
        AwSchedaLayoutDS.prototype.collapseSidebar = function () {
            // overwrite the configuration to prevent unwanted changes to the tree state.
            this.layoutConfig.tree.collapsedByDefault = !this.layoutConfig.tree.collapsedByDefault;
            this.sidebarCollapsed = !this.sidebarCollapsed;
            this.getWidgetDataSource('aw-sidebar-header').toggleSidebar();
        };
        AwSchedaLayoutDS.prototype._sidebarStickyControl = function () {
            var _this = this;
            // no sticky for Internet Explorer
            if (helpers.browserIsIE()) {
                return;
            }
            var source$ = rxjs.fromEvent(window, 'scroll');
            rxjs.merge(source$, this.stickyControlTrigger$).pipe(operators.takeUntil(this.destroyed$)).subscribe(function () {
                var windowTop = window.pageYOffset;
                var windowBottom = window.scrollY + window.innerHeight;
                var wrapper = document.getElementsByClassName('sticky-parent')[0];
                var wrapperTop = wrapper.offsetTop;
                var wrapperBottom = wrapperTop + wrapper.clientHeight;
                _this.sidebarIsSticky = wrapperTop <= windowTop;
                // tree height control
                if (_this.sidebarIsSticky && windowBottom < wrapperBottom) {
                    _this.treeMaxHeight = windowBottom - windowTop - 50 + "px";
                }
                else if (_this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                    _this.treeMaxHeight = wrapperBottom - windowTop - 50 + "px";
                }
                else if (windowBottom < wrapperBottom) {
                    _this.treeMaxHeight = windowBottom - wrapperTop - 50 + "px";
                }
                else {
                    _this.treeMaxHeight = wrapperBottom - wrapperTop - 50 + "px";
                }
            });
        };
        AwSchedaLayoutDS.prototype.getFields = function (response) {
            var fields = response.fields, dt = response.document_type, dc = response.document_classification;
            var paths = this.configuration.get('paths');
            var labels = this.configuration.get('labels');
            var dcSegments = typeof dc === 'string' ? dc.split('.') : [];
            var dcLastSegment = dcSegments[dcSegments.length - 1];
            var metadataToShow = lodash.get(this.configuration.get('scheda-layout'), 'metadata-to-show', {});
            metadataToShow = metadataToShow[dcLastSegment] || metadataToShow[dt] || [];
            return metadataHelper.normalize({
                fields: fields,
                paths: paths,
                labels: labels,
                metadataToShow: metadataToShow,
                type: dt
            });
        };
        AwSchedaLayoutDS.prototype.changeDigitalObject = function (payload) {
            if (this.currentDigitalObjectIndex !== payload) {
                // link check
                if (this.digitalObjects[payload].type === 'external' && this.currentDigitalObject) {
                    window.open(this.digitalObjects[payload].url, '_blank');
                }
                else {
                    // always reset image viewer
                    var schedaImageDS = this.getWidgetDataSource('aw-scheda-image');
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
        };
        AwSchedaLayoutDS.prototype.normalizeDigitalObjects = function (digitalObjects) {
            return digitalObjects.map(function ($do) {
                if ($do.type.includes('images')) {
                    return {
                        id: 'scheda-layout-viewer',
                        type: $do.type,
                        label: $do.label,
                        hasNavigation: $do.items.length > 1,
                        items: $do.items.map(function (_a) {
                            var url = _a.url, iiifImages = _a.iiifImages;
                            return ({
                                url: url,
                                iiifImages: iiifImages,
                                type: $do.type,
                            });
                        })
                    };
                }
                return $do;
            });
        };
        AwSchedaLayoutDS.tree = null;
        return AwSchedaLayoutDS;
    }(core$1.LayoutDataSource));

    var AwSchedaLayoutEH = /** @class */ (function (_super) {
        __extends(AwSchedaLayoutEH, _super);
        function AwSchedaLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        AwSchedaLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-scheda-layout.init':
                        {
                            _this.dataSource.onInit(payload);
                            _this.configuration = payload.configuration;
                            _this.route = payload.route;
                            var paramId = _this.route.snapshot.params.id || '';
                            if (paramId) {
                                _this.dataSource.currentId = paramId;
                            }
                            _this.listenRoute();
                            _this.loadNavigation(paramId);
                            _this.emitOuter('viewleaf');
                            // scroll top
                            window.scrollTo(0, 0);
                        }
                        break;
                    case 'aw-scheda-layout.destroy':
                        _this.destroyed$.next();
                        _this.dataSource.onDestroy();
                        break;
                    case 'aw-scheda-layout.togglesidebar':
                        _this.dataSource.collapseSidebar();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-sidebar-header.click':
                        _this.dataSource.collapseSidebar();
                        break;
                    case 'aw-scheda-dropdown.click':
                        _this.dataSource.changeDigitalObject(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        AwSchedaLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.paramMap.subscribe(function (params) {
                var paramId = params.get('id');
                if (paramId) {
                    if (paramId) {
                        _this.dataSource.currentId = paramId;
                        _this.emitOuter('routechanged', paramId);
                    }
                    _this.dataSource.contentIsLoading = true;
                    _this.dataSource.loadItem(paramId).pipe(operators.switchMap(function (response) { return _this.parseDigitalObjects$(response); })).subscribe(function (response) {
                        _this.dataSource.contentIsLoading = false;
                        if (response)
                            _this.dataSource.loadContent(response);
                    });
                }
                // scroll top
                window.scrollTo(0, 0);
            });
        };
        AwSchedaLayoutEH.prototype.loadNavigation = function (selectedItem) {
            var _this = this;
            this.dataSource.updateNavigation('Caricamento in corso...');
            this.dataSource.getNavigation('patrimonio').subscribe(function (response) {
                if (response) {
                    _this.dataSource.setTree(response);
                    _this.dataSource.updateNavigation(_this.dataSource.getTree().label);
                    _this.emitOuter('navigationresponse', {
                        tree: _this.dataSource.getTree(),
                        currentItem: selectedItem,
                        basePath: _this.configuration.get('paths').schedaBasePath,
                    });
                }
            });
        };
        AwSchedaLayoutEH.prototype.parseDigitalObjects$ = function (response) {
            var _this = this;
            var iiifManifest$ = {};
            if (Array.isArray(response === null || response === void 0 ? void 0 : response.digitalObjects)) {
                response.digitalObjects.forEach(function (digitalObject) {
                    if (digitalObject.type === 'images-iiif') {
                        digitalObject.items.forEach(function (_a) {
                            var url = _a.url;
                            iiifManifest$[url] = rxjs.from(fetch(url)
                                .then(function (data) {
                                if (!data.ok) {
                                    throw Error(data.statusText);
                                }
                                return data.json();
                            })
                                .catch(function (err) {
                                console.warn("Error loading iiif manifest " + url, err);
                                return null;
                            }));
                        });
                    }
                });
            }
            if (!lodash.isEmpty(iiifManifest$)) {
                return rxjs.forkJoin(iiifManifest$).pipe(operators.switchMap(function (data) {
                    response.digitalObjects.forEach(function (digitalObject) {
                        if (digitalObject.type === 'images-iiif') {
                            digitalObject.items.forEach(function (itemImages, index) {
                                digitalObject.items[index].iiifImages = _this.getManifestImages(data[itemImages.url]);
                            });
                        }
                    });
                    return rxjs.of(response);
                }));
            }
            return rxjs.of(response);
        };
        AwSchedaLayoutEH.prototype.getManifestImages = function (manifest) {
            var iiifImages = [];
            if (manifest === null || manifest === void 0 ? void 0 : manifest.sequences) {
                manifest.sequences.forEach(function (_a) {
                    var canvases = _a.canvases;
                    canvases.forEach(function (_a) {
                        var images = _a.images;
                        images.forEach(function (_a) {
                            var resource = _a.resource;
                            iiifImages.push(resource['@id']);
                        });
                    });
                });
            }
            return iiifImages;
        };
        return AwSchedaLayoutEH;
    }(core$1.EventHandler));

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
        AwSchedaLayoutComponent.prototype.initPayload = function () {
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
        AwSchedaLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwSchedaLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwSchedaLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: platformBrowser.Title },
            { type: CommunicationService }
        ]; };
        AwSchedaLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-scheda-layout',
                template: "<div class=\"aw-scheda\"\r\n     id=\"scheda-layout\">\r\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\r\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\r\n\r\n        <ng-container *ngTemplateOutlet=\"tree\"></ng-container>\r\n\r\n        <div class=\"aw-scheda__scheda-wrapper\"\r\n             [hidden]=\"lb.dataSource.contentIsLoading\">\r\n\r\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\r\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\r\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\r\n            </n7-smart-breadcrumbs>\r\n\r\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\r\n                 class=\"aw-scheda__fake-breadcrumbs\"\r\n                 (click)=\"lb.eventHandler.emitInner('togglesidebar', {})\">\r\n                 <p class=\"aw-scheda__fake-breadcrumbs-open\" \r\n                    *ngIf=\"lb.dataSource.sidebarCollapsed\">\r\n                    Consulta il patrimonio\r\n                 </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"!lb.dataSource.currentId\"\r\n                 class=\"aw-scheda__intro-text\"\r\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\r\n            </div>\r\n\r\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n\r\n            <!-- Empty state -->\r\n            <ng-container *ngIf=\"!lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"empty\"></ng-container>\r\n            </ng-container>\r\n\r\n            <!-- Content sections -->\r\n            <ng-container *ngIf=\"lb.dataSource.hasContent\">\r\n                <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<ng-template #tree>\r\n    <div class=\"aw-scheda__tree sticky-target\"\r\n         [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n        <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\r\n                           [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\r\n        <div class=\"aw-scheda__tree-content-loading\"\r\n             *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n                                    [data]=\"{\r\n                            blocks: [{\r\n                                classes: 'tree-placeholder-item'\r\n                            }]\r\n                        }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-scheda__tree-content\"\r\n             (click)=\"lb.eventHandler.emitOuter('treeposition', $event)\"\r\n             [ngStyle]=\"{\r\n                            'max-height': lb.dataSource.treeMaxHeight,\r\n                            'overflow': 'auto'\r\n                        }\">\r\n            <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\r\n                     [emit]=\"lb.widgets['aw-tree'].emit\"\r\n                     *ngIf=\"!lb.dataSource.sidebarCollapsed\">\r\n            </n7-tree>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #empty>\r\n    <section class=\"aw-scheda__section aw-scheda__empty\"\r\n             [innerHTML]=\"lb.dataSource.emptyStateString\">\r\n    </section>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n    <!-- Digital Object selection dropdown -->\r\n    <section class=\"aw-scheda__digital-object-dropdown\"\r\n            *ngIf=\"(\r\n                lb.dataSource.hasDigitalObjects \r\n                && lb.dataSource.digitalObjects.length > 1\r\n            )\">\r\n        <p class=\"aw-scheda__digital-object-dropdown-label\">\r\n            Seleziona l'oggetto digitale da visualizzare:\r\n        </p>\r\n        <aw-scheda-dropdown \r\n        [data]=\"lb.widgets['aw-scheda-dropdown'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['aw-scheda-dropdown'].emit\">\r\n        </aw-scheda-dropdown>\r\n    </section>\r\n    <!-- END // Digital Object selection dropdown -->\r\n\r\n    <!-- Digital Objects: images, IIP, PDFs, external links -->\r\n    <section *ngIf=\"lb.dataSource.currentDigitalObject as $do\" \r\n        class=\"aw-scheda__media aw-scheda__{{ $do.type }}\"\r\n        [ngClass]=\"{ \r\n            'navigation-hidden': !$do.hasNavigation\r\n        }\">\r\n        <ng-container [ngSwitch]=\"$do.type\">\r\n            <!-- IMAGE VIEWER (IIIF) -->\r\n            <ng-container *ngSwitchCase=\"'images-iiif'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\" \r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n\r\n            <!-- IMAGE VIEWER (Simple: jpg, png) -->\r\n            <ng-container *ngSwitchCase=\"'images-simple'\">\r\n                <n7-image-viewer \r\n                (contextmenu)=\"lb.dataSource.hasContextMenu()\"\r\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n                </n7-image-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- PDF -->\r\n            <ng-container *ngSwitchCase=\"'pdf'\">\r\n                <aw-pdf-viewer \r\n                [data]=\"lb.widgets['aw-scheda-pdf'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-scheda-pdf'].emit\">\r\n                </aw-pdf-viewer>\r\n            </ng-container>\r\n    \r\n            <!-- EXTERNAL URL -->\r\n            <ng-container *ngSwitchCase=\"'external'\">\r\n                <div class=\"aw-scheda__external-url\">\r\n                    <a class=\"aw-scheda__external-url-link\" href=\"{{ $do.url }}\" target=\"_blank\">\r\n                        {{ $do.label || lb.dataSource.externalUrlText }}\r\n                        <span class=\"n7-icon-external-link\"></span>\r\n                    </a>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n    </section>\r\n    <!-- END // Digital Objects -->\r\n\r\n    <section class=\"aw-scheda__section aw-scheda__description\"\r\n             *ngIf=\"lb.dataSource.contentParts.content\">\r\n        <div *ngFor=\"let part of lb.dataSource.contentParts\">\r\n            <div [innerHTML]=\"part.content\"></div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Metadata -->\r\n    <section class=\"aw-scheda__section aw-scheda__metadata\"\r\n             *ngIf=\"lb.dataSource.hasMetadata\">\r\n        <div class=\"aw-scheda__inner-title\"\r\n             *ngIf=\"lb.dataSource.metadataSectionTitle\">\r\n            {{lb.dataSource.metadataSectionTitle}}\r\n        </div>\r\n        <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\r\n        </n7-metadata-viewer>\r\n    </section>\r\n    <!-- END // Metadata -->\r\n\r\n    <!-- Related entities -->\r\n    <section *ngIf=\"lb.dataSource.hasRelatedEntities\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.relatedEntitiesHeader}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-related-entities'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                     [emit]=\"lb.widgets['aw-related-entities'].emit\">\r\n                    </n7-item-preview>\r\n                    <!-- Relation -->\r\n                    <div class=\"aw-item-preview-relation\"\r\n                         *ngIf=\"preview.relation?.value\">\r\n                        <p class=\"aw-item-preview-relation__description\">Tipo di relazione\r\n                            <!-- <span class=\"aw-item-preview-relation__key\">{{preview.relation.key}}</span>: -->\r\n                            <span class=\"aw-item-preview-relation__value\">{{preview.relation.value}}</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Related entities -->\r\n\r\n    <!-- Similar Objects -->\r\n    <section *ngIf=\"lb.dataSource.hasSimilarItems\"\r\n             id=\"related-item-container\"\r\n             class=\"aw-scheda__section aw-scheda__related\">\r\n        <div class=\"aw-scheda__inner-title\">\r\n            {{lb.dataSource.similarItemsSectionTitle}}\r\n        </div>\r\n        <div class=\"aw-scheda__related-items aw-item-preview-list n7-grid-2\">\r\n            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                <div class=\"aw-item-preview-wrapper\">\r\n                    <n7-item-preview [data]=\"preview\"\r\n                                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                    </n7-item-preview>\r\n                </div> \r\n            </ng-container>\r\n        </div>\r\n    </section>\r\n    <!-- END // Similar Objects -->\r\n</ng-template>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                ConfigurationService,
                LayoutsConfigurationService,
                MainStateService,
                platformBrowser.Title,
                CommunicationService])
        ], AwSchedaLayoutComponent);
        return AwSchedaLayoutComponent;
    }(AbstractLayout));

    var AwSearchLayoutConfig = {
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

    var AwSearchLayoutComponent = /** @class */ (function (_super) {
        __extends(AwSearchLayoutComponent, _super);
        function AwSearchLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search, route) {
            var _this = _super.call(this, layoutsConfiguration.get('AwSearchLayoutConfig') || AwSearchLayoutConfig) || this;
            _this.configuration = configuration;
            _this.layoutsConfiguration = layoutsConfiguration;
            _this.mainState = mainState;
            _this.communication = communication;
            _this.search = search;
            _this.route = route;
            return _this;
        }
        /**
         * Optional variables that can be accessed from the layout's logic.
         * If removed, they must also be removed from the layout's DataSource file,
         * and from this file imports.
         */
        AwSearchLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                communication: this.communication,
                search: this.search,
                route: this.route,
                options: this.config.options || {},
            };
        };
        AwSearchLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwSearchLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwSearchLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: CommunicationService },
            { type: AwSearchService },
            { type: router.ActivatedRoute }
        ]; };
        AwSearchLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-search-layout',
                template: "<div class=\"aw-search n7-side-auto-padding\"\r\n     id=\"search-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n        <!--\r\n        <div class=\"aw-search__header-right\">\r\n            <n7-nav\r\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\r\n            </n7-nav>\r\n        </div>\r\n        -->\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\"\r\n             class=\"aw-search__sidebar sticky-target\"\r\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <aw-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                                   [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </aw-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"scroll-ref\">&nbsp;</div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                        class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                           for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                            id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\"\r\n                                [value]=\"option.value\"\r\n                                [selected]=\"option.selected\"\r\n                                [hidden]=\"option.type === 'score' && lb.dataSource.isSearchingText.value === false\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\"\r\n                                        [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\"\r\n                 class=\"aw-search__results-wrapper\">\r\n                 <div class=\"aw-item-preview-list\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <div class=\"aw-item-preview-wrapper\">\r\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                            </n7-smart-breadcrumbs>\r\n                            <n7-item-preview [data]=\"preview\"\r\n                                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\"\r\n                                class=\"n7-btn aw-search__fallback-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                                     [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                                     [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                LayoutsConfigurationService,
                MainStateService,
                CommunicationService,
                AwSearchService,
                router.ActivatedRoute])
        ], AwSearchLayoutComponent);
        return AwSearchLayoutComponent;
    }(AbstractLayout));

    var AwTimelineLayoutDS = /** @class */ (function (_super) {
        __extends(AwTimelineLayoutDS, _super);
        function AwTimelineLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pageSize = 10;
            _this.state$ = new rxjs.BehaviorSubject('EMPTY');
            _this.currentPage = 1;
            return _this;
        }
        AwTimelineLayoutDS.prototype.onInit = function (_a) {
            var _this = this;
            var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
                onError: function (err) {
                    console.warn(err);
                }
            }).subscribe(function (response) {
                _this.one('aw-timeline').update(response);
            });
        };
        AwTimelineLayoutDS.prototype.onTimelineClick = function (_a) {
            var _this = this;
            var id = _a.id, label = _a.label, dateText = _a.dateText;
            if (lodash.isNull(id)) {
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
                }).subscribe(function (_a) {
                    var itemsPagination = _a.itemsPagination;
                    // clear loading
                    _this.state$.next('SUCCESS');
                    _this.relatedItems = itemsPagination.items;
                    _this.total = _this.relatedItems.length;
                    var text = "<strong>" + _this.total + "</strong> Risultati collegati a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                    if (_this.total === 1) {
                        text = "<strong>" + _this.total + "</strong> Risultato collegato a<br><span class=\"aw-multimedia__results-title-big\">" + label + "</span>";
                    }
                    var titleData = {
                        title: {
                            main: { text: text },
                            secondary: dateText ? {
                                text: dateText
                            } : null
                        },
                        actions: {
                            buttons: [{
                                    anchor: {
                                        href: _this.configuration.get('paths').entitaBasePath + "/" + id + "/" + helpers.slugify(label),
                                    },
                                    text: 'Vedi Entità'
                                }]
                        }
                    };
                    _this.one('aw-scheda-inner-title').update(titleData);
                    // update items
                    _this.updateItems();
                    // update pagination
                    _this.updatePagination();
                });
            }
        };
        AwTimelineLayoutDS.prototype.clearResults = function () {
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
        };
        AwTimelineLayoutDS.prototype.onPaginationChange = function (_a) {
            var value = _a.value;
            this.pageSize = +value;
            this.updateItems();
            this.updatePagination();
        };
        AwTimelineLayoutDS.prototype.onPaginationClick = function (_a) {
            var page = _a.page;
            if (typeof page === 'number' && page !== this.currentPage) {
                this.currentPage = page;
                this.updateItems();
                this.updatePagination();
            }
        };
        AwTimelineLayoutDS.prototype.updateItems = function () {
            this.one('aw-linked-objects').updateOptions({
                context: 'map',
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: this.relatedItems });
        };
        AwTimelineLayoutDS.prototype.updatePagination = function () {
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
        };
        return AwTimelineLayoutDS;
    }(core$1.LayoutDataSource));

    var AwTimelineLayoutEH = /** @class */ (function (_super) {
        __extends(AwTimelineLayoutEH, _super);
        function AwTimelineLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        AwTimelineLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-timeline-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.emitOuter('init', payload);
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'aw-timeline-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-timeline.click':
                        _this.dataSource.onTimelineClick(payload);
                        break;
                    case 'n7-smart-pagination.change':
                        _this.dataSource.onPaginationChange(payload);
                        break;
                    case 'n7-smart-pagination.click':
                        _this.dataSource.onPaginationClick(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return AwTimelineLayoutEH;
    }(core$1.EventHandler));

    var AwTimelineLayoutConfig = {
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

    var AwTimelineLayoutComponent = /** @class */ (function (_super) {
        __extends(AwTimelineLayoutComponent, _super);
        function AwTimelineLayoutComponent(configuration, layoutsConfiguration, communication, mainState, titleService) {
            var _this = _super.call(this, layoutsConfiguration.get('AwTimelineLayoutConfig') || AwTimelineLayoutConfig) || this;
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
        AwTimelineLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                mainState: this.mainState,
                titleService: this.titleService,
                communication: this.communication,
                options: this.config.options || {},
            };
        };
        AwTimelineLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        AwTimelineLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        AwTimelineLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
        ]; };
        AwTimelineLayoutComponent = __decorate([
            core.Component({
                selector: 'aw-timeline-layout',
                template: "<div class=\"aw-multimedia\" id=\"timeline-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n               title: {\r\n                    main: {\r\n                         text: 'Gli eventi dell\\'archivio'\r\n                    }\r\n               }\r\n          }\">\r\n    </n7-inner-title>\r\n    \r\n    <!-- Timeline -->\r\n    <div class=\"aw-multimedia__timeline\">\r\n        <n7-timeline [data]=\"lb.widgets['aw-timeline'].ds.out$ | async\"></n7-timeline>\r\n        \r\n        <div id=\"timelinecontrols\" class=\"aw-multimedia__timeline-controls\" *ngIf=\"lb.widgets['aw-timeline'].ds.timelineControlsVisible\">\r\n            <button class=\"n7-btn aw-multimedia__timeline-control\" (click)=\"lb.eventHandler.emitOuter('zoomin', {})\">\r\n                <span class=\"n7-icon-search-plus\"></span>\r\n            </button>\r\n\r\n            <button class=\"n7-btn aw-multimedia__timeline-control\" (click)=\"lb.eventHandler.emitOuter('zoomout', {})\">\r\n                <span class=\"n7-icon-search-minus\"></span>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- END // Timeline -->\r\n    \r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un evento della timeline per vedere tutti gli oggetti culturali collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                LayoutsConfigurationService,
                CommunicationService,
                MainStateService,
                platformBrowser.Title])
        ], AwTimelineLayoutComponent);
        return AwTimelineLayoutComponent;
    }(AbstractLayout));

    var AwFacetsWrapperComponent = /** @class */ (function () {
        function AwFacetsWrapperComponent() {
        }
        AwFacetsWrapperComponent.prototype.headerEmit = function (eventType, eventPayload) {
            if (!this.emit) {
                return;
            }
            this.emit('facetheader', { eventType: eventType, eventPayload: eventPayload });
        };
        AwFacetsWrapperComponent.prototype.facetEmit = function (eventType, eventPayload) {
            if (!this.emit) {
                return;
            }
            this.emit('facet', { eventType: eventType, eventPayload: eventPayload });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AwFacetsWrapperComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AwFacetsWrapperComponent.prototype, "emit", void 0);
        AwFacetsWrapperComponent = __decorate([
            core.Component({
                selector: 'aw-facets-wrapper',
                template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>"
            })
        ], AwFacetsWrapperComponent);
        return AwFacetsWrapperComponent;
    }());

    //---------------------------
    var BubbleChartWrapperComponent = /** @class */ (function () {
        function BubbleChartWrapperComponent() {
        }
        BubbleChartWrapperComponent.prototype.onClick = function (type, payload) {
            this.emit(type, payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], BubbleChartWrapperComponent.prototype, "emit", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BubbleChartWrapperComponent.prototype, "container", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], BubbleChartWrapperComponent.prototype, "buttons", void 0);
        BubbleChartWrapperComponent = __decorate([
            core.Component({
                selector: 'aw-bubble-chart-wrapper',
                template: "<div class=\"aw-bubble-chart-wrapper\">\r\n    <ng-content></ng-content>\r\n</div>"
            })
        ], BubbleChartWrapperComponent);
        return BubbleChartWrapperComponent;
    }());

    //---------------------------
    var ChartTippyComponent = /** @class */ (function () {
        function ChartTippyComponent() {
        }
        ChartTippyComponent.prototype.onClick = function (type, payload) {
            this.emit(type, payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ChartTippyComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ChartTippyComponent.prototype, "emit", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ChartTippyComponent.prototype, "anchorData", void 0);
        ChartTippyComponent = __decorate([
            core.Component({
                selector: 'aw-chart-tippy',
                template: "<div *ngIf=\"data\" style=\"display: none;\">\r\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\r\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\r\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\r\n      <p class=\"aw-bubble-popup-menu__text\">\r\n        {{ d.text }}\r\n      </p>\r\n\r\n      <div *ngIf=\"d.relation.value\" class=\"aw-item-preview-relation\">\r\n        <p class=\"aw-item-preview-relation__description\">Tipo di relazione \r\n          <!-- <span class=\"aw-item-preview-relation__key\">{{d.relation.key}}</span>: -->\r\n          <span class=\"aw-item-preview-relation__label\">{{d.relation.value}}</span>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"aw-bubble-popup-menu__actions\">\r\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\r\n          Vai alla scheda\r\n        </n7-anchor-wrapper>\r\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\r\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
            })
        ], ChartTippyComponent);
        return ChartTippyComponent;
    }());

    //---------------------------
    var PdfViewerComponent = /** @class */ (function () {
        function PdfViewerComponent() {
        }
        PdfViewerComponent.prototype.onClick = function (payload) {
            if (!this.emit || lodash.isNull(payload)) {
                return;
            }
            this.emit('click', payload);
        };
        PdfViewerComponent.prototype.onLoaded = function () {
            this.emit('loaded');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], PdfViewerComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], PdfViewerComponent.prototype, "emit", void 0);
        PdfViewerComponent = __decorate([
            core.Component({
                selector: 'aw-pdf-viewer',
                template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\r\n    <div class=\"aw-pdf-viewer__loader\">\r\n        <n7-loader></n7-loader>\r\n    </div>\r\n    \r\n    <ngx-extended-pdf-viewer\r\n        [src]=\"data.currentUrl\"\r\n        [height]=\"'90vh'\"\r\n        [useBrowserLocale]=\"true\"\r\n        [textLayer]=\"true\"\r\n        [showToolbar]=\"data.libOptions.showToolbar\"\r\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\r\n        [showFindButton]=\"data.libOptions.showFindButton\"\r\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\r\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\r\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\r\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\r\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\r\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\r\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\r\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\r\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\r\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\r\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\r\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\r\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\r\n        (pdfLoaded)=\"onLoaded()\"\r\n        (pdfLoadingFailed)=\"onLoaded()\">\r\n    </ngx-extended-pdf-viewer>\r\n    \r\n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\r\n        <div class=\"aw-pdf-viewer__navigation-tools\">\r\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.prev)\">\r\n                <span class=\"n7-icon-angle-left\"></span>\r\n            </a>\r\n            <div class=\"aw-pdf-viewer__navigation-select\">\r\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\r\n                <select (change)=\"onClick(+$event.target.value)\">\r\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\r\n                    [selected]=\"item.selected\">{{ item.label }}</option>\r\n                </select>\r\n            </div>\r\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.next)\">\r\n                <span class=\"n7-icon-angle-right\"></span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"
            })
        ], PdfViewerComponent);
        return PdfViewerComponent;
    }());

    //---------------------------
    var SchedaDropdownComponent = /** @class */ (function () {
        function SchedaDropdownComponent() {
        }
        SchedaDropdownComponent.prototype.onClick = function (ev, payload) {
            if (!this.emit) {
                return;
            }
            ev.stopImmediatePropagation();
            this.emit('click', payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SchedaDropdownComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], SchedaDropdownComponent.prototype, "emit", void 0);
        SchedaDropdownComponent = __decorate([
            core.Component({
                selector: 'aw-scheda-dropdown',
                template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\r\n    <div class=\"aw-scheda-dropdown__header\"\r\n    (click)=\"onClick($event, data.header.payload)\">\r\n        <!-- header label -->\r\n        <span class=\"aw-scheda-dropdown__header-label\">\r\n            {{ data.header.label }}\r\n        </span>\r\n        <!-- header icon -->\r\n        <span class=\"aw-scheda-dropdown__header-icon\"\r\n        [ngClass]=\"data.header.icon['id']\">\r\n        </span>\r\n    </div>\r\n    <div class=\"aw-scheda-dropdown__items\">\r\n        <ul>\r\n            <li *ngFor=\"let item of data.items\"\r\n            [ngClass]=\"{\r\n                'is-selected': item.selected \r\n            }\"\r\n            (click)=\"onClick($event, item.payload)\">\r\n                {{ item.label }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"
            })
        ], SchedaDropdownComponent);
        return SchedaDropdownComponent;
    }());

    //---------------------------
    var SmartBreadcrumbsComponent = /** @class */ (function () {
        function SmartBreadcrumbsComponent() {
            var _this = this;
            /**
             * Builds tippy data for a node.
             */
            this.tippyBuilder = function (node, content) { return tippy__default(node, {
                content: content,
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                appendTo: document.body,
            }); };
            /** Calculate the width of an HTML Element and it's child */
            this.getWidths = function (parent, child) {
                var pw = parent.nativeElement.clientWidth; // parent width
                var cw = child.nativeElement.clientWidth; // child width
                var pp = _this.getSidePadding(parent.nativeElement); // parent padding
                return { parentWidth: pw - pp, childWidth: cw };
            };
            this.getSidePadding = function (node) { return (
            // returns an integer representing the sum of left and right paddings
            (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
                + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])); };
            /**
             * Checks if the smart ellipsis functionality should be enabled,
             * if the children elements are too wide, it enables it.
             */
            this.triggerSmartEllipsis = function () {
                var _a;
                if (_this.bcdiv && _this.bcol) {
                    var _b = _this.getWidths(_this.bcdiv, _this.bcol), parentWidth = _b.parentWidth, childWidth = _b.childWidth;
                    var liArray = _this.bcol.nativeElement.children;
                    if (parentWidth <= childWidth) { // collapse condition
                        var i = 1; // Skip element in position 0
                        while (parentWidth <= childWidth && i < liArray.length - 1) { // Skip last element
                            var tippyData = document.createElement('ol'); // initialize tippy data
                            tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                            tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                            liArray[i].children[0].innerText = '…'; // convert to ellipsis
                            liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                            _this.tippyBuilder(liArray[i].children[0], tippyData); // append tooltip to ellipsis
                            i += 1;
                            // update widths
                            (_a = _this.getWidths(_this.bcdiv, _this.bcol), parentWidth = _a.parentWidth, childWidth = _a.childWidth);
                        }
                    }
                }
            };
        }
        SmartBreadcrumbsComponent.prototype.ngAfterViewChecked = function () {
            this.triggerSmartEllipsis();
        };
        SmartBreadcrumbsComponent.prototype.onClick = function (payload) {
            if (!this.emit)
                return;
            this.emit('click', payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SmartBreadcrumbsComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SmartBreadcrumbsComponent.prototype, "emit", void 0);
        __decorate([
            core.ViewChild('bcol', { read: core.ElementRef }),
            __metadata("design:type", core.ElementRef)
        ], SmartBreadcrumbsComponent.prototype, "bcol", void 0);
        __decorate([
            core.ViewChild('bcdiv', { read: core.ElementRef }),
            __metadata("design:type", core.ElementRef)
        ], SmartBreadcrumbsComponent.prototype, "bcdiv", void 0);
        SmartBreadcrumbsComponent = __decorate([
            core.Component({
                selector: 'n7-smart-breadcrumbs',
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <span class=\"ellipsis-target\">\r\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        {{ item.label }}\r\n                    </n7-anchor-wrapper>\r\n                </span>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
            })
        ], SmartBreadcrumbsComponent);
        return SmartBreadcrumbsComponent;
    }());

    var apolloConfig = {
        getLastPosts: {
            queryName: 'getLastPosts',
            queryBody: "\n        {\n          getLastPosts(__PARAMS__) {\n            id\n            title\n          }\n        }\n      ",
        },
        getSlider: {
            queryName: 'getSlider',
            queryBody: " {\n      getSlider {\n        pretext\n        title\n        text\n        background {\n            type\n            value\n        }\n        ctaLabel\n        ctaPayload\n        metadata {\n            key\n            value\n        }\n      }\n    }"
        },
        getTreeLite: {
            queryName: 'getTreeOfItems',
            queryBody: "\n      {\n        getTreeOfItems{\n          label\n          id\n          document_type\n          document_classification\n          branches {\n            label\n            id\n            document_type\n            document_classification\n            branches {\n              label\n              id\n              document_type\n              document_classification\n              branches {\n                label\n                id\n                document_type\n                document_classification\n                branches {\n                  label\n                  id\n                  document_type\n                  document_classification\n                  branches {\n                    label\n                    id\n                    document_type\n                    document_classification\n                    branches {\n                      label\n                      id\n                      document_type\n                      document_classification\n                      branches {\n                        label\n                        id\n                        document_type\n                        document_classification\n                        branches {\n                          label\n                          id\n                          document_type\n                          document_classification\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ",
        },
        getTree: {
            queryName: 'getTreeOfItems',
            queryBody: "\n      {\n        getTreeOfItems{\n          label\n          id\n          img\n          document_type\n          document_classification\n          branches {\n            label\n            id\n            img\n            document_type\n            document_classification\n            branches {\n              label\n              id\n              img\n              document_type\n              document_classification\n              branches {\n                label\n                id\n                img\n                document_type\n                document_classification\n                branches {\n                  label\n                  id\n                  img\n                  document_type\n                  document_classification\n                  branches {\n                    label\n                    id\n                    img\n                    document_type\n                    document_classification\n                    branches {\n                      label\n                      id\n                      img\n                      document_type\n                      document_classification\n                      branches {\n                        label\n                        id\n                        img\n                        document_type\n                        document_classification\n                        branches {\n                          label\n                          id\n                          img\n                          document_type\n                          document_classification\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ",
        },
        globalFilter: {
            queryName: 'globalFilter',
            queryBody: "{\n        globalFilter(__PARAMS__){\n          entitiesData {\n            entity {\n                id\n                label\n                typeOfEntity\n            } count\n          }\n          typeOfEntityData {\n            type\n            count\n          }\n          itemsPagination {\n            totalCount\n            items {\n              thumbnail\n              item {\n                id\n                label\n                fields\n                {\n                  ...\n                  on KeyValueField {\n                    key\n                    value\n                  }\n                }\n                breadcrumbs {\n                  label\n                  link\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n          }\n        }\n        }",
        },
        getEntityRelatedItems: {
            queryName: 'globalFilter',
            queryBody: "{\n        globalFilter(__PARAMS__){\n          itemsPagination {\n            totalCount\n            items {\n              thumbnail\n              item {\n                id\n                label\n                fields\n                {\n                  ...\n                  on KeyValueField {\n                    key\n                    value\n                  }\n                }\n                breadcrumbs {\n                  label\n                  link\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n          }\n        }\n        }",
        },
        getEntityDetails: {
            queryName: 'getEntity',
            queryBody: "{\n        getEntity(__PARAMS__){\n          relatedItemsTotalCount,\n          relatedLaTotalCount: relatedAlTotalCount,\n          overviewTab\n          label\n          id\n          typeOfEntity\n          relatedLa: relatedAl {\n            thumbnail\n            relation          \n            item {\n              label\n              id\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n          fields {\n            ... on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ... on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ... on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n          extraTab\n          wikiTab {\n            text\n            url\n          }\n          relatedItems {\n            thumbnail\n            relation\n            item {\n              label\n              id\n              fields\n              {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n              breadcrumbs {\n                label\n                link\n              }\n            }\n            relatedTypesOfEntity {\n              type\n              count\n            }\n          }\n          relatedEntities {\n            entity {\n                id\n                label\n                typeOfEntity\n                relation\n            }\n            count\n          }\n        }\n      }\n      ",
        },
        getItem: {
            queryName: 'getItem',
            queryBody: "{\n        getItem(__PARAMS__) {\n          id\n          label\n          icon\n          title\n          subTitle\n          image\n          text\n          fields {\n            ...\n            on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n          relatedEntities {\n            count\n            entity{\n              id\n              label\n              typeOfEntity\n              relation\n            }\n          }\n          relatedItems {\n            thumbnail\n            item {\n              label\n              id\n              relatedTypesOfEntity {\n                type\n                count\n              }\n            }\n          }\n          breadcrumbs {\n            label\n            link\n          }\n        }\n      }",
        },
        getNode: {
            queryName: 'getNode',
            queryBody: "{\n        getNode(__PARAMS__) {\n          ... on Item {\n            id\n            label\n            title\n            subTitle\n            image\n            digitalObjects {\n              label\n              type\n              url\n              order\n              items {      \n                order      \n                label\n                url                 \n              }\n            }\n            text\n            document_type\n            document_classification\n            fields {\n              ... on KeyValueField {\n                key\n                value\n              }\n              ... on KeyValueFieldGroup {\n                label\n                fields {\n                  ... on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ... on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            relatedEntities {\n                count\n                entity{\n                  id\n                  label\n                  typeOfEntity\n                  relation\n                }\n            }\n            relatedItems {\n              thumbnail\n              item {\n                label\n                id\n                fields {\n                  ...\n                  on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ...\n                      on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n          ... on Node {\n            id\n            label\n            img\n            document_type\n            document_classification\n            fields {\n              ... on KeyValueField {\n                key\n                value\n              }\n              ... on KeyValueFieldGroup {\n                label\n                fields {\n                  ... on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ... on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            relatedEntities {\n              count\n              entity {\n                id\n                label\n                typeOfEntity\n                relation\n              }\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n        }\n      }",
        },
        autoComplete: {
            queryName: 'autoComplete',
            queryBody: "{\n        autoComplete(__PARAMS__){\n          totalCount\n          results {\n            ... on EntityCountData {\n              count\n              entity {\n                id\n                label\n                typeOfEntity\n                fields {\n                  ... on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ... on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            ... on ItemListing {\n              item {\n                id\n                label\n                document_type\n                fields {\n                  ... on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ... on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }",
        },
        search: {
            queryName: 'search',
            queryBody: "{\n      search(__PARAMS__){\n        totalCount\n        results {\n          order{\n            type\n            key\n            direction\n          }\n          fields\n          {\n            id\n            highlight\n            limit\n          }\n          items {\n            ... on Entity {\n              id\n              label\n              typeOfEntity\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n              relatedEntities {\n                  count\n                  entity{\n                    id\n                    label\n                    typeOfEntity\n                    relation\n                  }\n              }\n              relatedItems {\n                  thumbnail\n                  item {\n                    label\n                    id\n                    fields {\n                      ...\n                      on KeyValueField {\n                        key\n                        value\n                      }\n                      ... on KeyValueFieldGroup {\n                        label\n                        fields {\n                          ...\n                          on KeyValueField {\n                            key\n                            value\n                          }\n                        }\n                      }\n                    }\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n            ... on Item {\n              id\n              label\n              icon\n              title\n              subTitle\n              image\n              text\n              relatedTypesOfEntity {\n                type\n                count\n              }\n              breadcrumbs {\n                label\n                link\n              }\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }",
        },
        facets: {
            queryName: 'search',
            queryBody: "{\n      search(__PARAMS__){\n        facets {\n          id\n          type\n          operator\n          limit\n          order\n          totalCount\n          data {\n            label\n            value\n            counter\n            searchData {\n              key\n              value\n            }\n          }\n        }\n      }\n    }",
        },
        getMissingBubble: {
            queryName: 'getEntity',
            queryBody: "{\n        getEntity(__PARAMS__){\n          label\n          id\n          typeOfEntity\n        }\n      }",
        },
        getMapObjects: {
            queryName: 'getMapObjects',
            queryBody: "{\n      getMapObjects{\n        lat\n        lon\n        item {\n          ...on Item {\n              id\n              label\n          }\n          ...on Entity {\n              id\n              label\n          }\n        }\n      }\n    }",
        },
        getEventObjects: {
            queryName: 'getEventObjects',
            queryBody: "{\n      getEventObjects{\n        id\n        start\n        end\n        label\n        item {\n          ... on Entity {\n            id\n            label\n          }\n        }\n      }\n    }",
        },
        getCollection: {
            queryName: 'getCollection',
            queryBody: "{\n      getCollection(__PARAMS__) {\n        title\n        text\n        total\n        items {\n          title\n          content\n          background\n          image\n          url\n          a4vId\n          type\n          classification\n        }\n      }\n    }"
        }
    };

    var COMPONENTS$1 = [
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
    var N7BoilerplateAriannaWebModule = /** @class */ (function () {
        function N7BoilerplateAriannaWebModule(initStatus, config) {
            // add apollo config on app init
            // note: this is just for arianna* sites!
            initStatus.donePromise.then(function () {
                var communication = config.get('communication');
                var defaultProvider = communication.defaultProvider;
                communication.providers[defaultProvider].config = apolloConfig;
                config.set('communication', communication);
            });
        }
        N7BoilerplateAriannaWebModule.ctorParameters = function () { return [
            { type: core.ApplicationInitStatus },
            { type: ConfigurationService }
        ]; };
        N7BoilerplateAriannaWebModule = __decorate([
            core.NgModule({
                declarations: COMPONENTS$1,
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    components.DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                    ngxExtendedPdfViewer.NgxExtendedPdfViewerModule
                ],
                entryComponents: COMPONENTS$1,
                exports: COMPONENTS$1,
            }),
            __metadata("design:paramtypes", [core.ApplicationInitStatus,
                ConfigurationService])
        ], N7BoilerplateAriannaWebModule);
        return N7BoilerplateAriannaWebModule;
    }());

    var DataWidgetWrapperComponent = /** @class */ (function () {
        function DataWidgetWrapperComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], DataWidgetWrapperComponent.prototype, "data", void 0);
        DataWidgetWrapperComponent = __decorate([
            core.Component({
                selector: 'dv-data-widget-wrapper',
                template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\r\n    <ng-content></ng-content>\r\n</div>"
            })
        ], DataWidgetWrapperComponent);
        return DataWidgetWrapperComponent;
    }());

    var DatepickerWrapperComponent = /** @class */ (function () {
        function DatepickerWrapperComponent() {
        }
        DatepickerWrapperComponent.prototype.onClick = function (payload) {
            if (!this.emit)
                return;
            this.emit('click', payload);
        };
        DatepickerWrapperComponent.prototype.toggleDropDown = function (payload) {
            if (!this.emit)
                return;
            this.emit('toggle', payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], DatepickerWrapperComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], DatepickerWrapperComponent.prototype, "emit", void 0);
        DatepickerWrapperComponent = __decorate([
            core.Component({
                selector: 'dv-datepicker-wrapper',
                template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\r\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\r\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\r\n        <span class=\"{{data.select.icon}}\"></span>\r\n    </div>\r\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\r\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\r\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\r\n        </ul>\r\n    </div>\r\n    <n7-datepicker\r\n        [data]=\"data.datepicker.data\"\r\n        [emit]=\"emit\">\r\n    </n7-datepicker>\r\n</div>\r\n"
            })
        ], DatepickerWrapperComponent);
        return DatepickerWrapperComponent;
    }());

    var DvExampleLayoutDS = /** @class */ (function (_super) {
        __extends(DvExampleLayoutDS, _super);
        function DvExampleLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Items = [
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
            _this.datepickerOptions = {
                dateFormat: 'Y-m-d',
                mode: 'range',
            };
            _this.datePickerExternalData = {
                select: {
                    id: 'dv-select',
                    label: 'Last week',
                    items: _this.Items,
                },
                datepicker: {
                    id: 'datepicker',
                    libOptions: _this.datepickerOptions,
                },
            };
            return _this;
        }
        DvExampleLayoutDS.prototype.onInit = function () {
            this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
        };
        return DvExampleLayoutDS;
    }(core$1.LayoutDataSource));

    var DvExampleLayoutEH = /** @class */ (function (_super) {
        __extends(DvExampleLayoutEH, _super);
        function DvExampleLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvExampleLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                _this.dataSource.onInit();
            });
        };
        return DvExampleLayoutEH;
    }(core$1.EventHandler));

    var DvDataWidgetDS = /** @class */ (function (_super) {
        __extends(DvDataWidgetDS, _super);
        function DvDataWidgetDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvDataWidgetDS.prototype.transform = function (data) {
            if (!data) {
                return null;
            }
            return null;
        };
        return DvDataWidgetDS;
    }(core$1.DataSource));

    var DvDatepickerWrapperDS = /** @class */ (function (_super) {
        __extends(DvDatepickerWrapperDS, _super);
        function DvDatepickerWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._datepicker = null;
            return _this;
        }
        DvDatepickerWrapperDS.prototype.transform = function (data) {
            var _this = this;
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
                        getInstance: function (datepicker) { _this._datepicker = datepicker; },
                    },
                },
            };
        };
        DvDatepickerWrapperDS.prototype.openDatepicker = function () {
            var _this = this;
            setTimeout(function () { return _this._datepicker.open(); });
            this.output.select.hidden = true;
            this.output.datepicker.hidden = false;
        };
        DvDatepickerWrapperDS.prototype.closeDatepicker = function () {
            var _this = this;
            setTimeout(function () { return _this._datepicker.close(); });
            this.output.select.hidden = true;
            this.output.datepicker.hidden = true;
        };
        DvDatepickerWrapperDS.prototype.setLabel = function (payload) {
            this.output.select.label = payload;
            this.output.datepicker.hidden = true;
        };
        DvDatepickerWrapperDS.prototype.toggleDropDown = function () {
            if (this.output.select.hidden === false) {
                this.output.select.hidden = true;
            }
            else {
                this.output.select.hidden = false;
            }
        };
        return DvDatepickerWrapperDS;
    }(core$1.DataSource));

    var DvGraphDS = /** @class */ (function (_super) {
        __extends(DvGraphDS, _super);
        function DvGraphDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvGraphDS.prototype.transform = function () {
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
        };
        return DvGraphDS;
    }(core$1.DataSource));

    var DvInnerTitleDS = /** @class */ (function (_super) {
        __extends(DvInnerTitleDS, _super);
        function DvInnerTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvInnerTitleDS.prototype.transform = function () {
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
        };
        return DvInnerTitleDS;
    }(core$1.DataSource));

    var DvWidgetDS = /** @class */ (function (_super) {
        __extends(DvWidgetDS, _super);
        function DvWidgetDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvWidgetDS.prototype.transform = function () {
            return components.DATA_WIDGET_MOCK;
        };
        return DvWidgetDS;
    }(core$1.DataSource));

    // Data Widget

    var DS$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DvDataWidgetDS: DvDataWidgetDS,
        DvDatepickerWrapperDS: DvDatepickerWrapperDS,
        DvGraphDS: DvGraphDS,
        DvInnerTitleDS: DvInnerTitleDS,
        DvWidgetDS: DvWidgetDS
    });

    var DvDatepickerWrapperEH = /** @class */ (function (_super) {
        __extends(DvDatepickerWrapperEH, _super);
        function DvDatepickerWrapperEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DvDatepickerWrapperEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'dv-datepicker-wrapper.click':
                        _this.dataSource.setLabel(payload);
                        if (payload === 'ByDate') {
                            _this.dataSource.openDatepicker();
                        }
                        else {
                            _this.dataSource.closeDatepicker();
                        }
                        break;
                    case 'dv-datepicker-wrapper.toggle':
                        _this.dataSource.toggleDropDown();
                        break;
                    case 'dv-datepicker-wrapper.change':
                        _this.dataSource.setLabel(payload.dateStr);
                        break;
                    default:
                        break;
                }
            });
        };
        return DvDatepickerWrapperEH;
    }(core$1.EventHandler));

    // Data Widget

    var EH$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DvDatepickerWrapperEH: DvDatepickerWrapperEH
    });

    var DvExampleLayoutConfig = {
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

    var DvExampleLayoutComponent = /** @class */ (function (_super) {
        __extends(DvExampleLayoutComponent, _super);
        function DvExampleLayoutComponent() {
            return _super.call(this, DvExampleLayoutConfig) || this;
        }
        DvExampleLayoutComponent.prototype.initPayload = function () {
            return {};
        };
        DvExampleLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        DvExampleLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        DvExampleLayoutComponent = __decorate([
            core.Component({
                selector: 'dv-example-layout',
                template: "<div class=\"dv-example-layout\" id=\"example-layout\">\r\n\r\n    <!-- Data widget wrapper with not-fixed height, two rows -->\r\n    <dv-data-widget-wrapper>\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-chart\r\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\r\n                </n7-chart>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, two rows -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                Row content\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n\r\n    <!-- Data widget wrapper with fixed height, one row -->\r\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\r\n        <div class=\"dv-data-widget-wrapper__title\">\r\n            <n7-inner-title\r\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <div class=\"dv-data-widget-wrapper__content\">\r\n            <div class=\"dv-data-widget-wrapper__content-row\">\r\n                <n7-data-widget\r\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\r\n                </n7-data-widget>\r\n            </div>\r\n        </div>\r\n    </dv-data-widget-wrapper>\r\n    \r\n    <dv-datepicker-wrapper \r\n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\r\n    </dv-datepicker-wrapper>\r\n</div>"
            }),
            __metadata("design:paramtypes", [])
        ], DvExampleLayoutComponent);
        return DvExampleLayoutComponent;
    }(AbstractLayout));

    var COMPONENTS$2 = [
        DataWidgetWrapperComponent,
        DatepickerWrapperComponent,
        DvExampleLayoutComponent,
    ];
    var N7BoilerplateDataVizModule = /** @class */ (function () {
        function N7BoilerplateDataVizModule() {
        }
        N7BoilerplateDataVizModule = __decorate([
            core.NgModule({
                declarations: COMPONENTS$2,
                imports: [
                    common.CommonModule,
                    components.DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS$2,
            })
        ], N7BoilerplateDataVizModule);
        return N7BoilerplateDataVizModule;
    }());

    var hasValue = function (value) {
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return !!value;
    };
    var ɵ0$1 = hasValue;
    var searchHelper = {
        stateToQueryParams: function (state, schemas) {
            var queryParams = {};
            Object.keys(state).forEach(function (key) {
                var schema = schemas[key];
                var multiple = schema.multiple, valueType = schema.valueType;
                var value = state[key];
                if (hasValue(value)) {
                    switch (valueType) {
                        case 'number':
                        case 'string':
                            queryParams[key] = multiple ? value.join(',') : value;
                            break;
                        case 'boolean':
                            queryParams[key] = multiple ? value.map(function (v) { return +v; }).join(',') : +value;
                            break;
                        default:
                            break;
                    }
                }
            });
            return queryParams;
        },
        queryParamsToState: function (queryParams, schemas) {
            var state = {};
            Object.keys(queryParams).forEach(function (key) {
                var value = queryParams[key];
                var schema = schemas[key];
                var multiple = schema.multiple, valueType = schema.valueType;
                if (hasValue(value)) {
                    if (hasValue(value)) {
                        switch (valueType) {
                            case 'number':
                                state[key] = multiple ? value.split(',').map(function (v) { return +v; }) : +value;
                                break;
                            case 'string':
                                state[key] = multiple ? value.split(',').map(function (v) { return "" + v; }) : "" + value;
                                break;
                            case 'boolean':
                                state[key] = multiple ? value.split(',').map(function (v) { return !!v; }) : !!value;
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

    var INPUT_STATE_CONTEXT = 'input';
    var FACET_STATE_CONTEXT = 'facet';
    var SECTION_STATE_CONTEXT = 'section';
    var RESULTS_REQUEST_STATE_CONTEXT = 'resultsRequest';
    var FACETS_REQUEST_STATE_CONTEXT = 'facetsRequest';
    var MrSearchService = /** @class */ (function () {
        function MrSearchService(router, activatedRoute, communication) {
            var _this = this;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.communication = communication;
            this.destroyed$ = new rxjs.Subject();
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
            this.getConfig = function () { return _this.config; };
            this.isQueryParamKey = function (input) { return _this.queryParamKeys.includes(input); };
        }
        MrSearchService.prototype.init = function (searchId, config) {
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
        };
        MrSearchService.prototype.getState$ = function (context, id) {
            var stateId = id ? context + "." + id : context;
            if (!this.state$[stateId]) {
                throw Error("Key \"" + stateId + "\" does not exist");
            }
            return this.state$[stateId];
        };
        MrSearchService.prototype.addStateContext = function (context) {
            if (this.state$[context]) {
                throw Error("State key \"" + context + "\" already exists");
            }
            // initial state
            this.contextState[context] = {};
            // create stream
            this.state$[context] = new rxjs.Subject();
        };
        MrSearchService.prototype.addState = function (context, id) {
            var stateId = context + "." + id;
            if (!this.state$[context]) {
                throw Error("\n        State context \"" + context + "\" does not exist.\n        You must add context first\n      ");
            }
            if (this.state$[stateId]) {
                throw Error("State key \"" + stateId + "\" already exists");
            }
            // create stream
            this.state$[stateId] = new rxjs.Subject();
        };
        MrSearchService.prototype.setState = function (context, id, newValue) {
            var stateId = context + "." + id;
            if (!this.state$[stateId]) {
                throw Error("Key \"" + stateId + "\" does not exist");
            }
            var value = newValue;
            // hook control
            if (this.beforeHook[stateId]) {
                value = this.beforeHook[stateId](value);
            }
            // update stream
            this.state$[stateId].next(value);
            // update context
            this.setContextState(context, id, value);
        };
        MrSearchService.prototype.setBeforeHook = function (context, id, hook) {
            var stateId = context + "." + id;
            if (!this.state$[stateId]) {
                throw Error("Key \"" + stateId + "\" does not exist");
            }
            this.beforeHook[stateId] = hook;
        };
        MrSearchService.prototype.reset = function () {
            var _this = this;
            // clear input states
            Object.keys(this.contextState[INPUT_STATE_CONTEXT])
                .filter(function (id) { return !_this.internalFilterKeys.includes(id); })
                .forEach(function (id) {
                _this.setState(INPUT_STATE_CONTEXT, id, null);
            });
        };
        MrSearchService.prototype.destroy = function () {
            this.destroyed$.next();
        };
        MrSearchService.prototype.clear = function () {
            this.contextState = {};
            this.state$ = {};
            this.beforeHook = {};
        };
        MrSearchService.prototype.setContextState = function (context, id, newValue) {
            var _a;
            this.contextState[context] = __assign(__assign({}, this.contextState[context]), (_a = {}, _a["" + id] = newValue, _a));
            this.state$[context].next({
                lastUpdated: id,
                state: this.contextState[context]
            });
        };
        MrSearchService.prototype.initInputState = function () {
            var _this = this;
            var _a = this.config, facets = _a.facets, layoutInputs = _a.layoutInputs;
            // add context state
            this.addStateContext(INPUT_STATE_CONTEXT);
            // set facets input state
            facets.sections.forEach(function (_a) {
                var header = _a.header, inputs = _a.inputs;
                __spread([header], inputs).filter(function (input) { return input; })
                    .forEach(function (_a) {
                    var id = _a.id, queryParam = _a.queryParam, schema = _a.schema, limit = _a.limit, type = _a.type, target = _a.target;
                    if (!id) {
                        return;
                    }
                    _this.addState(INPUT_STATE_CONTEXT, id);
                    // is query param?
                    if (queryParam) {
                        _this.queryParamKeys.push(id);
                    }
                    // schemas
                    if (schema) {
                        _this.inputSchemas[id] = schema;
                    }
                    // links internal state
                    if (type === 'link') {
                        _this.internalFilterState.facets[id] = {
                            id: id,
                            limit: limit,
                            offset: 0,
                            query: '',
                            loading: false,
                            values: []
                        };
                    }
                    // internal filters
                    if (target) {
                        _this.internalFilterKeys.push(id);
                    }
                });
            });
            // set layout input state
            layoutInputs.forEach(function (_a) {
                var id = _a.id, queryParam = _a.queryParam, schema = _a.schema;
                _this.addState(INPUT_STATE_CONTEXT, id);
                if (queryParam) {
                    _this.queryParamKeys.push(id);
                }
                // schemas
                if (schema) {
                    _this.inputSchemas[id] = schema;
                }
            });
        };
        MrSearchService.prototype.initFacetState = function () {
            var _this = this;
            var facets = this.config.facets;
            // add context state
            this.addStateContext(FACET_STATE_CONTEXT);
            // set input state
            facets.sections.forEach(function (_a) {
                var header = _a.header, inputs = _a.inputs;
                __spread([header], inputs).filter(function (input) { return input; })
                    .forEach(function (input) {
                    _this.addState(FACET_STATE_CONTEXT, input.id);
                });
            });
        };
        MrSearchService.prototype.initSectionState = function () {
            var _this = this;
            var facets = this.config.facets;
            // add context state
            this.addStateContext(SECTION_STATE_CONTEXT);
            // set input state
            facets.sections.forEach(function (_a) {
                var id = _a.id;
                _this.addState(SECTION_STATE_CONTEXT, id);
            });
        };
        MrSearchService.prototype.onRouteChange = function () {
            var _this = this;
            var results = this.config.request.results;
            // add context state
            this.addStateContext(RESULTS_REQUEST_STATE_CONTEXT);
            // default states
            ['loading', 'request', 'success', 'error'].forEach(function (id) {
                _this.addState(RESULTS_REQUEST_STATE_CONTEXT, id);
            });
            this.activatedRoute.queryParams.pipe(operators.takeUntil(this.destroyed$), 
            // fix initial listeners (symbolic timeout)
            operators.delay(1), 
            // query params to state
            operators.map(function (params) { return searchHelper.queryParamsToState(params, _this.inputSchemas); }), 
            // state != queryParams control
            operators.tap(function (params) {
                if (lodash.isEmpty(params)) {
                    _this.reset();
                }
                // update state
                if (!lodash.isEmpty(params)) {
                    var inputContext_1 = _this.contextState[INPUT_STATE_CONTEXT];
                    if (lodash.isEmpty(inputContext_1)) {
                        Object.keys(params)
                            .filter(function (inputId) { return _this.queryParamKeys.includes(inputId); })
                            .forEach(function (inputId) {
                            _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId]);
                        });
                    }
                    else {
                        Object.keys(params)
                            .filter(function (inputId) { return _this.queryParamKeys.includes(inputId); })
                            .filter(function (inputId) { return _this.notEquals(inputContext_1[inputId], params[inputId]); })
                            .forEach(function (inputId) {
                            _this.setState(INPUT_STATE_CONTEXT, inputId, params[inputId] || null);
                        });
                    }
                }
            }), operators.map(function (params) {
                _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'loading', params);
                return params;
            }), operators.debounceTime(results.delay || 1), operators.map(function (params) {
                _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'request', params);
                return params;
            }), operators.switchMap(function (state) { return _this.communication.request$(results.id, {
                params: __assign(__assign({}, state), { searchId: _this.searchId }),
                method: 'POST',
                onError: function (error) {
                    _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'error', error);
                }
            }, results.provider || null); })).subscribe(function (response) {
                _this.setState(RESULTS_REQUEST_STATE_CONTEXT, 'success', response);
            });
        };
        MrSearchService.prototype.onInputsChange = function () {
            var _this = this;
            this.getState$(INPUT_STATE_CONTEXT).pipe(operators.filter(function (_a) {
                var lastUpdated = _a.lastUpdated;
                return _this.queryParamKeys.indexOf(lastUpdated) !== -1;
            })).subscribe(function (_a) {
                var state = _a.state;
                var filteredState = {};
                Object.keys(state).forEach(function (id) {
                    if (_this.queryParamKeys.indexOf(id) !== -1) {
                        filteredState[id] = state[id];
                    }
                });
                var queryParams = searchHelper.stateToQueryParams(filteredState, _this.inputSchemas);
                _this.router.navigate([], {
                    queryParams: queryParams
                });
            });
        };
        MrSearchService.prototype.onInternalInputsChange = function () {
            var _this = this;
            this.getState$(INPUT_STATE_CONTEXT).pipe(operators.filter(function (_a) {
                var lastUpdated = _a.lastUpdated;
                return _this.queryParamKeys.indexOf(lastUpdated) === -1;
            }), operators.map(function (_a) {
                var lastUpdated = _a.lastUpdated, state = _a.state;
                var sections = _this.config.facets.sections;
                var inputConfig;
                sections.forEach(function (section) {
                    section.inputs.forEach(function (input) {
                        if (input.id === lastUpdated) {
                            inputConfig = input;
                        }
                    });
                });
                if (inputConfig && inputConfig.target) {
                    return {
                        inputConfig: inputConfig,
                        value: state[lastUpdated]
                    };
                }
                return null;
            }), operators.filter(function (data) { return data !== null; })).subscribe(function (_a) {
                var inputConfig = _a.inputConfig, value = _a.value;
                var target = inputConfig.target;
                // update internal filters
                _this.internalFilterState.facets[target].query = value;
                _this.internalFilterState.facets[target].offset = 0;
                _this.doSingleFacetRequest(target);
            });
        };
        MrSearchService.prototype.doSingleFacetRequest = function (target) {
            var _this = this;
            var facets = this.config.request.facets;
            var globalParams = this.internalFilterState.globalParams;
            var _a = this.internalFilterState.facets[target], id = _a.id, limit = _a.limit, offset = _a.offset, query = _a.query;
            this.communication.request$(facets.id, {
                params: __assign(__assign({}, globalParams), { facets: [{
                            id: id, limit: limit, offset: offset, query: query
                        }], searchId: this.searchId }),
                method: 'POST',
                onError: function (error) {
                    _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
                }
            }, facets.provider || null).subscribe(function (response) {
                _this.onFacetsRequestSuccess(response);
                // reset loading
                _this.internalFilterState.facets[target].loading = false;
            });
        };
        MrSearchService.prototype.onResultsLoading = function () {
            var _this = this;
            var facets = this.config.request.facets;
            if (!facets) {
                return;
            }
            // add context state
            this.addStateContext(FACETS_REQUEST_STATE_CONTEXT);
            // default states
            ['loading', 'request', 'success', 'error'].forEach(function (id) {
                _this.addState(FACETS_REQUEST_STATE_CONTEXT, id);
            });
            this.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(operators.map(function (params) {
                var facetsParams = __assign({}, params);
                _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'loading', facetsParams);
                // updated internal filter state
                _this.internalFilterState.globalParams = __assign({}, facetsParams);
                return facetsParams;
            }), operators.debounceTime(facets.delay || 1), operators.map(function (params) {
                params.facets = [];
                _this.config.facets.sections.forEach(function (_a) {
                    var inputs = _a.inputs;
                    inputs.filter(function (_a) {
                        var type = _a.type;
                        return type === 'link';
                    })
                        .forEach(function (_a) {
                        var id = _a.id;
                        // reset offset
                        _this.internalFilterState.facets[id].offset = 0;
                        var _b = _this.internalFilterState.facets[id], limit = _b.limit, query = _b.query, offset = _b.offset;
                        params.facets.push({
                            id: id, limit: limit, offset: offset, query: query
                        });
                    });
                });
                _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'request', params);
                return params;
            }), operators.switchMap(function (state) { return _this.communication.request$(facets.id, {
                params: __assign(__assign({}, state), { searchId: _this.searchId }),
                method: 'POST',
                onError: function (error) {
                    _this.setState(FACETS_REQUEST_STATE_CONTEXT, 'error', error);
                }
            }, facets.provider || null); })).subscribe(function (response) {
                _this.onFacetsRequestSuccess(response);
            });
            // update facet links
            this.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe(function (response) {
                var responseFacets = response.facets;
                Object.keys(responseFacets).forEach(function (id) {
                    var _a = responseFacets[id], responseValues = _a.values, filtered_total_count = _a.filtered_total_count;
                    var _b = _this.internalFilterState.facets[id], limit = _b.limit, offset = _b.offset, stateValues = _b.values;
                    var filterState = _this.internalFilterState.facets[id];
                    if (offset > 0) {
                        // delete loading element
                        filterState.values.pop();
                        // merge new results
                        filterState.values = __spread(stateValues, responseValues);
                    }
                    else {
                        filterState.values = __spread(responseValues);
                    }
                    if ((offset + limit) < filtered_total_count) {
                        filterState.values.push({
                            text: core$1._t('global#facet_loading_text'),
                            classes: 'loading-text-link',
                            payload: null,
                        });
                    }
                    _this.setState(FACET_STATE_CONTEXT, id, {
                        links: filterState.values
                    });
                });
            });
        };
        MrSearchService.prototype.onFacetsRequestSuccess = function (response) {
            var _this = this;
            var responseFacets = response.facets;
            Object.keys(responseFacets).forEach(function (inputKey) {
                // update internal filter state
                var filtered_total_count = responseFacets[inputKey].filtered_total_count;
                _this.internalFilterState.facets[inputKey].filtered_total_count = filtered_total_count;
                // responseFacets[inputKey].values = responseFacets[inputKey].values.map((item) => ({
                //   ...item,
                //   payload: item.payload && typeof item.payload === 'string'
                //     ? encodeURIComponent(item.payload)
                //     : item.payload
                // }));
            });
            this.setState(FACETS_REQUEST_STATE_CONTEXT, 'success', response);
        };
        MrSearchService.prototype.onFacetsScroll = function () {
            var _this = this;
            setTimeout(function () {
                var facets = _this.config.facets;
                facets.sections.forEach(function (_a) {
                    var inputs = _a.inputs;
                    inputs
                        .filter(function (input) { return input; })
                        .filter(function (input) { return input.type === 'link'; })
                        .forEach(function (_a) {
                        var id = _a.id;
                        var scrollEl = document.querySelector("#facet-container-" + id + " .n7-input-link");
                        var scroll$ = rxjs.fromEvent(scrollEl, 'scroll');
                        scroll$.pipe(operators.debounceTime(300)).subscribe(function (_a) {
                            var target = _a.target;
                            var _b = _this.internalFilterState.facets[id], limit = _b.limit, offset = _b.offset, loading = _b.loading, filtered_total_count = _b.filtered_total_count;
                            var _c = target, scrollTop = _c.scrollTop, clientHeight = _c.clientHeight, scrollHeight = _c.scrollHeight;
                            if ((scrollTop + clientHeight >= scrollHeight)
                                && (offset + limit < filtered_total_count)
                                && loading === false) {
                                _this.internalFilterState.facets[id].loading = true;
                                _this.internalFilterState.facets[id].offset = offset + limit;
                                _this.doSingleFacetRequest(id);
                            }
                        });
                    });
                });
            });
        };
        MrSearchService.prototype.notEquals = function (val1, val2) {
            if (Array.isArray(val1) && Array.isArray(val2)) {
                return !!lodash.xor(val1, val2).length;
            }
            return val1 !== val2;
        };
        MrSearchService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: CommunicationService }
        ]; };
        MrSearchService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                CommunicationService])
        ], MrSearchService);
        return MrSearchService;
    }());

    var LayoutState;
    (function (LayoutState) {
        LayoutState["IDLE"] = "IDLE";
        LayoutState["LOADING"] = "LOADING";
        LayoutState["SUCCESS"] = "SUCCESS";
        LayoutState["EMPTY"] = "EMPTY";
        LayoutState["ERROR"] = "ERROR";
    })(LayoutState || (LayoutState = {}));
    var MrLayoutStateService = /** @class */ (function () {
        function MrLayoutStateService() {
            this.stateContainers = {};
        }
        MrLayoutStateService.prototype.add = function (id) {
            var _this = this;
            var ids = Array.isArray(id) ? id : [id];
            ids.forEach(function (key) {
                _this.stateContainers[key] = new rxjs.ReplaySubject();
                // initial state
                _this.stateContainers[key].next(LayoutState.IDLE);
            });
        };
        MrLayoutStateService.prototype.get$ = function (id) {
            if (!this.stateContainers[id]) {
                throw Error("Layout state id '" + id + "' does not exists");
            }
            return this.stateContainers[id];
        };
        MrLayoutStateService.prototype.set = function (id, newState) {
            if (!this.stateContainers[id]) {
                throw Error("Layout state id '" + id + "' does not exists");
            }
            this.stateContainers[id].next(newState);
        };
        MrLayoutStateService = __decorate([
            core.Injectable()
        ], MrLayoutStateService);
        return MrLayoutStateService;
    }());

    var MrResourceModalService = /** @class */ (function () {
        function MrResourceModalService(configuration, communication) {
            this.configuration = configuration;
            this.communication = communication;
            this.state$ = new rxjs.Subject();
            // default state
            this.state$.next({ status: 'IDLE' });
        }
        MrResourceModalService.prototype.open = function (resourceId, configId) {
            var _this = this;
            this.state$.next({ status: 'LOADING' });
            var config = this.configuration.get("resource-modal-" + configId);
            // add translations
            ['top', 'content'].forEach(function (type) {
                config.sections[type] = config.sections[type].map(function (section) { return (__assign(__assign({}, section), { title: core$1._t(section.title) })); });
            });
            this.pageRequest$(resourceId, config, function (err) {
                console.warn("Error loading resource modal for " + resourceId, err.message);
                _this.state$.next({ status: 'ERROR' });
            }).subscribe(function (response) {
                _this.state$.next({ response: response, config: config, status: 'SUCCESS', });
            });
        };
        MrResourceModalService.prototype.close = function () {
            this.state$.next({ status: 'IDLE' });
        };
        MrResourceModalService.prototype.pageRequest$ = function (id, config, onError) {
            var _a = config.sections, top = _a.top, content = _a.content;
            var sections = top.concat(content);
            return this.communication.request$('resource', {
                onError: onError,
                method: 'POST',
                params: {
                    id: id,
                    type: config.type,
                    sections: sections.map(function (s) { return s.id; }),
                }
            });
        };
        MrResourceModalService.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: CommunicationService }
        ]; };
        MrResourceModalService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [ConfigurationService,
                CommunicationService])
        ], MrResourceModalService);
        return MrResourceModalService;
    }());

    var EscapeHtmlPipe = /** @class */ (function () {
        function EscapeHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        EscapeHtmlPipe.prototype.transform = function (content) {
            return this.sanitizer.bypassSecurityTrustHtml(content);
        };
        EscapeHtmlPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        EscapeHtmlPipe = __decorate([
            core.Pipe({ name: 'keepHtml', pure: false }),
            __metadata("design:paramtypes", [platformBrowser.DomSanitizer])
        ], EscapeHtmlPipe);
        return EscapeHtmlPipe;
    }());

    var MrAdvancedResultsLayoutDS = /** @class */ (function (_super) {
        __extends(MrAdvancedResultsLayoutDS, _super);
        function MrAdvancedResultsLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrAdvancedResultsLayoutDS.prototype.onInit = function (payload) {
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
        };
        MrAdvancedResultsLayoutDS.prototype.updateSearchTags = function (params) {
            if (!this.pageConfig.filters) {
                return;
            }
            var labels = this.pageConfig.filters.labels;
            var tags = [];
            Object.keys(labels)
                .filter(function (key) { return !!params[key]; })
                .forEach(function (key) {
                tags[key] = params[key];
            });
            this.one('mr-advanced-search-tags').updateOptions({ labels: labels });
            this.one('mr-advanced-search-tags').update(tags);
        };
        MrAdvancedResultsLayoutDS.prototype.request$ = function (params, onError) {
            var searchId = this.pageConfig.searchId;
            var searchParams = __assign({}, params);
            Object.keys(searchParams)
                .filter(function (key) { return ['page', 'limit', 'sort'].includes(key); })
                .forEach(function (key) {
                searchParams.results = searchParams.results || {};
                searchParams.results[key] = searchParams[key];
                delete searchParams[key];
            });
            // normalize results filters
            var resultsParams = {};
            var results = searchParams.results || {};
            var page = results.page ? +results.page : 1;
            resultsParams.limit = results.limit ? +results.limit : 12;
            resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
            resultsParams.sort = results.sort || 'sort_ASC';
            return this.communication.request$('advancedSearch', {
                method: 'POST',
                params: __assign(__assign({}, searchParams), { searchId: searchId, results: __assign({}, resultsParams) }),
                onError: onError
            });
        };
        MrAdvancedResultsLayoutDS.prototype.handleResponse = function (response) {
            this.some([
                'mr-search-results-title',
                'mr-search-results',
            ]).update(response);
            // pagination
            this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
            this.one('n7-smart-pagination').update(this.getPaginationParams(response));
        };
        MrAdvancedResultsLayoutDS.prototype.updateHeadTitle = function () {
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle)].join(' > '));
        };
        MrAdvancedResultsLayoutDS.prototype.addTranslations = function (config) {
            var _a;
            if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
                config.sort.label = core$1._t(config.sort.label);
                config.sort.options = config.sort.options.map(function (option) { return (__assign(__assign({}, option), { label: core$1._t(option.label) })); });
            }
            ['text', 'button'].forEach(function (key) {
                if (config.fallback) {
                    config.fallback[key] = core$1._t(config.fallback[key]);
                }
                if (config.ko) {
                    config.ko[key] = core$1._t(config.ko[key]);
                }
            });
            // filters
            var filters = this.pageConfig.filters;
            if (filters) {
                filters.title = core$1._t(filters.title);
                Object.keys(filters.labels).forEach(function (key) {
                    filters.labels[key] = core$1._t(filters.labels[key]);
                });
            }
        };
        MrAdvancedResultsLayoutDS.prototype.getPaginationParams = function (response) {
            var totalCount = response.total_count, offset = response.offset, limit = response.limit;
            var paginationConfig = this.pageConfig.pagination;
            return {
                totalPages: Math.ceil(totalCount / limit),
                currentPage: (offset + limit) / limit,
                pageLimit: paginationConfig.limit,
                sizes: {
                    label: paginationConfig.selectLabel ? core$1._t(paginationConfig.selectLabel) : null,
                    list: paginationConfig.options,
                    active: limit,
                },
            };
        };
        return MrAdvancedResultsLayoutDS;
    }(core$1.LayoutDataSource));

    var MrAdvancedResultsLayoutEH = /** @class */ (function (_super) {
        __extends(MrAdvancedResultsLayoutEH, _super);
        function MrAdvancedResultsLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrAdvancedResultsLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-advanced-results-layout.init':
                        _this.activatedRoute = payload.activatedRoute;
                        _this.router = payload.router;
                        _this.layoutState = payload.layoutState;
                        _this.modalService = payload.modalService;
                        _this.dataSource.onInit(payload);
                        // listen route changes
                        _this.listenToRouterChanges();
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'mr-advanced-results-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'n7-smart-pagination.click':
                        _this.updateRouter({ page: payload.page });
                        break;
                    case 'n7-smart-pagination.change':
                        _this.updateRouter({ limit: payload.value, page: 1 });
                        break;
                    case 'mr-search-results-title.change':
                        _this.updateRouter({ sort: payload.value, page: 1 });
                        break;
                    case 'mr-search-results.openresourcemodal': {
                        var id = payload.id, resourceType = payload.type;
                        _this.modalService.open(id, resourceType);
                        break;
                    }
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        /** URL changes */
        MrAdvancedResultsLayoutEH.prototype.listenToRouterChanges = function () {
            var _this = this;
            this.activatedRoute.queryParams.pipe(operators.takeUntil(this.destroy$), operators.tap(function () {
                _this.layoutState.set('results', LayoutState.LOADING);
            }), operators.switchMap(function (params) {
                _this.dataSource.updateSearchTags(params);
                return _this.dataSource.request$(params, function (error) {
                    console.warn('Advanced search error', error);
                    _this.layoutState.set('results', LayoutState.ERROR);
                });
            })).subscribe(function (response) {
                _this.dataSource.handleResponse(response);
                _this.layoutState.set('results', lodash.isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
                // scroll to ref element
                if (!_this.scrollRefElement) {
                    _this.scrollRefElement = document.querySelector('.scroll-ref');
                }
                else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                    _this.scrollRefElement.scrollIntoView();
                }
            });
        };
        MrAdvancedResultsLayoutEH.prototype.updateRouter = function (queryParams) {
            this.router.navigate([], {
                queryParams: queryParams,
                queryParamsHandling: 'merge'
            });
        };
        return MrAdvancedResultsLayoutEH;
    }(core$1.EventHandler));

    var MrBreadcrumbsDS = /** @class */ (function (_super) {
        __extends(MrBreadcrumbsDS, _super);
        function MrBreadcrumbsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrBreadcrumbsDS.prototype.transform = function (data) {
            var items = [];
            if (Array.isArray(data) && data.length) {
                var base = (this.options || {}).base;
                base = Array.isArray(base) ? base : [];
                items = __spread(base.map(function (_a) {
                    var link = _a.link, title = _a.title;
                    return ({
                        label: core$1._t(title),
                        anchor: { href: link }
                    });
                }), data.map(function (_a) {
                    var link = _a.link, title = _a.title;
                    return ({
                        label: title,
                        anchor: { href: link }
                    });
                }));
            }
            // remove last link
            if (items.length) {
                items[items.length - 1].anchor = null;
            }
            return { items: items };
        };
        return MrBreadcrumbsDS;
    }(core$1.DataSource));

    var extractQueryParams = function (queryParams) {
        var params = {};
        queryParams.split('&').forEach(function (param) {
            var _a = __read(param.split('='), 2), key = _a[0], value = _a[1];
            params[key] = value;
        });
        return params;
    };
    var ɵ0$2 = extractQueryParams;
    var linksHelper = {
        getQueryParams: function (href) {
            var queryParams = href.split('?')[1] ? extractQueryParams(href.split('?')[1]) : null;
            return this.isExternalLink(href) ? null : queryParams;
        },
        getRouterLink: function (href) {
            return this.isExternalLink(href) ? href : href.split('?')[0];
        },
        isExternalLink: function (href) {
            return /^http(?:s)?:\/{2}\S+$/.test(href);
        }
    };

    var ITEM_PREVIEW_DEFAULTS = {
        limit: 100,
        striptags: true
    };
    var MrCollectionDS = /** @class */ (function (_super) {
        __extends(MrCollectionDS, _super);
        function MrCollectionDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrCollectionDS.prototype.transform = function (data) {
            if (data === undefined) {
                return null;
            }
            var header = data.header, items = data.items;
            // items check
            if (Array.isArray(items) && !items.length) {
                return null;
            }
            var _a = this.options, classes = _a.classes, itemPreview = _a.itemPreview;
            var itemPreviewOptions = lodash.merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
            if ((header || {}).button) {
                var _b = header.button, link = _b.link, text = _b.text;
                header.button = [{
                        text: text,
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
                items: items.map(function (item) {
                    var anchor = null;
                    if (item.text) {
                        // Sanitize HTML tags from the text content
                        if (itemPreviewOptions.striptags) {
                            item.text = helpers.striptags(item.text);
                        }
                        // Limit the length of the item preview text content
                        if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                            item.text = item.text.substring(0, itemPreviewOptions.limit) + "...";
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
                            payload: __assign({}, item.payload)
                        };
                    }
                    return __assign(__assign({}, item), { anchor: anchor, classes: classes || '' });
                })
            };
        };
        return MrCollectionDS;
    }(core$1.DataSource));

    var MrContentDS = /** @class */ (function (_super) {
        __extends(MrContentDS, _super);
        function MrContentDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrContentDS.prototype.transform = function (data) {
            return data;
        };
        return MrContentDS;
    }(core$1.DataSource));

    var MrFiltersDS = /** @class */ (function (_super) {
        __extends(MrFiltersDS, _super);
        function MrFiltersDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        MrFiltersDS.prototype.transform = function (data) {
            return data;
        };
        return MrFiltersDS;
    }(core$1.DataSource));

    var MrHeroDS = /** @class */ (function (_super) {
        __extends(MrHeroDS, _super);
        function MrHeroDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrHeroDS.prototype.transform = function (data) {
            var _a = this.options, classes = _a.classes, background = _a.background;
            var text = data.text, image = data.image, title = data.title, button = data.button;
            var backgroundImage = background ? image : null;
            return {
                text: text,
                title: title,
                classes: classes,
                backgroundImage: backgroundImage,
                image: !backgroundImage ? image : null,
                button: button && button.link ? __assign(__assign({}, button), { anchor: {
                        href: linksHelper.getRouterLink(button.link),
                        queryParams: linksHelper.getQueryParams(button.link)
                    } }) : null
            };
        };
        return MrHeroDS;
    }(core$1.DataSource));

    var MrImageViewerDS = /** @class */ (function (_super) {
        __extends(MrImageViewerDS, _super);
        function MrImageViewerDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrImageViewerDS.prototype.transform = function (data) {
            var images = data.images, thumbs = data.thumbs;
            return {
                images: images,
                thumbs: thumbs,
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
                _setViewer: function (viewer) {
                    this.viewer = viewer;
                }
            };
        };
        return MrImageViewerDS;
    }(core$1.DataSource));

    var MrInfoBoxDS = /** @class */ (function (_super) {
        __extends(MrInfoBoxDS, _super);
        function MrInfoBoxDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrInfoBoxDS.prototype.transform = function (data) {
            return data;
        };
        return MrInfoBoxDS;
    }(core$1.DataSource));

    var MrInnerTitleDS = /** @class */ (function (_super) {
        __extends(MrInnerTitleDS, _super);
        function MrInnerTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrInnerTitleDS.prototype.transform = function (data) {
            var title = data.title, description = data.description, button = data.button;
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
        };
        return MrInnerTitleDS;
    }(core$1.DataSource));

    var ITEM_PREVIEW_DEFAULTS$1 = {
        limit: 100,
        striptags: true
    };
    var MrItemPreviewDS = /** @class */ (function (_super) {
        __extends(MrItemPreviewDS, _super);
        function MrItemPreviewDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrItemPreviewDS.prototype.transform = function (data) {
            var _a = this.options, classes = _a.classes, itemPreview = _a.itemPreview;
            var itemPreviewOptions = lodash.merge(ITEM_PREVIEW_DEFAULTS$1, (itemPreview || {}));
            // striptags
            if (itemPreviewOptions.striptags) {
                data.text = helpers.striptags(data.text);
            }
            // limit
            if (itemPreviewOptions.limit && (data.text.length > itemPreviewOptions.limit)) {
                data.text = data.text.substring(0, itemPreviewOptions.limit) + "...";
            }
            return __assign(__assign({}, data), { anchor: {
                    href: linksHelper.getRouterLink(data.link),
                    queryParams: linksHelper.getQueryParams(data.link)
                }, classes: classes || '' });
        };
        return MrItemPreviewDS;
    }(core$1.DataSource));

    var MrItemPreviewsDS = /** @class */ (function (_super) {
        __extends(MrItemPreviewsDS, _super);
        function MrItemPreviewsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // ===== MOCK DATA =====
            _this.mock = {
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
            return _this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        MrItemPreviewsDS.prototype.transform = function (data) {
            return this.mock[this.options.source];
        };
        return MrItemPreviewsDS;
    }(core$1.DataSource));

    var MARKER_ICON$1 = L.icon({
        iconUrl: '/assets/pin.png',
        iconSize: [30, 45.5],
        popupAnchor: [0, -25],
        className: 'marker-icon'
    });
    var MARKER_ICON_SELECTED$1 = L.icon({
        iconUrl: '/assets/pin-selected.png',
        iconSize: [30, 45.5],
        popupAnchor: [0, -25],
        className: 'marker-icon-selected'
    });
    var MrMapDS = /** @class */ (function (_super) {
        __extends(MrMapDS, _super);
        function MrMapDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mapLoaded$ = new rxjs.Subject();
            return _this;
        }
        // eslint-disable-next-line consistent-return
        MrMapDS.prototype.transform = function (data) {
            var _this = this;
            var markers;
            if (data.find(function (d) { return d.markers; })) {
                markers = data
                    .map(function (area) { return (area.markers
                    .map(function (m) {
                    var _a, _b;
                    return ({
                        // convert to leaflet marker format
                        coords: [+m.lat, +m.lng],
                        template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                        title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                        id: area.id,
                        slug: area.slug,
                    });
                })); })
                    // flatten the list of markers
                    .reduce(function (acc, val) { return acc.concat(val); }, []);
            }
            var initialView = {
                // center of europe (only for initial load)
                center: [54.5260, 15.2551],
                zoom: 5,
            };
            // if the map and the markers already exist
            // update the already existing layers.
            if (this.mapInstance && this.markerLayer) {
                this.buildMarkers(markers);
                this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
            }
            return {
                // only called once, on component init!
                _setInstance: function (instance) {
                    _this.mapInstance = instance;
                    // center the map on the markers
                    _this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
                    // load custom markers
                    _this.buildMarkers(markers);
                    _this.mapLoaded$.next({ map: instance, markers: _this.markerLayer });
                },
                containerId: 'map-canvas',
                libOptions: {
                    scrollWheelZoom: false,
                },
                tileLayers: [{
                        url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                        options: {}
                    }],
                initialView: initialView,
            };
        };
        MrMapDS.prototype.fitMapToBounds = function (bounds) {
            if (this.mapInstance) {
                this.mapInstance.fitBounds(bounds, {
                    maxZoom: 15,
                    padding: [20, 20],
                });
            }
            else {
                console.warn('map instance is missing');
            }
        };
        /**
         * Builds markers with a custom icon and adds them to the map.
         * @param markers an array of markers
         */
        MrMapDS.prototype.buildMarkers = function (markers) {
            if (!markers)
                return;
            // remove all existing markers
            if (this.markerLayer) {
                this.markerLayer.clearLayers();
                this.mapInstance.removeLayer(this.markerLayer);
            }
            var markerGroup = L.markerClusterGroup();
            markers.forEach(function (_a) {
                var coords = _a.coords, template = _a.template, id = _a.id, slug = _a.slug;
                // create custom icon marker
                var newMarker = L.marker(coords, { icon: MARKER_ICON$1 });
                if (id && slug) {
                    newMarker.id = id;
                    newMarker.slug = slug;
                }
                newMarker
                    // add the marker to the group
                    .addTo(markerGroup)
                    // add the on-click tooltip
                    .bindPopup(template);
                newMarker.getPopup().on('remove', function (_a) {
                    var target = _a.target;
                    target._source.setIcon(MARKER_ICON$1);
                });
                newMarker.getPopup().on('add', function (_a) {
                    var target = _a.target;
                    target._source.setIcon(MARKER_ICON_SELECTED$1);
                });
            });
            // add the markers to the map instance
            this.mapInstance.addLayer(markerGroup);
            // update the marker layer instance
            this.markerLayer = markerGroup;
        };
        return MrMapDS;
    }(core$1.DataSource));

    var MrMetadataDS = /** @class */ (function (_super) {
        __extends(MrMetadataDS, _super);
        function MrMetadataDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Test if a string is a valid URL */
            _this.isUrl = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
            /** Turn a string into an anchor element */
            _this.toUrl = function (string) { return "<a href=\"" + string + "\" target=\"_blank\">" + string + "<a>"; };
            return _this;
        }
        MrMetadataDS.prototype.transform = function (data) {
            var _this = this;
            var hideLabels = this.options.hideLabels;
            var group = data.group;
            if (!(group || []).length) {
                return null;
            }
            var result = { group: [] };
            group
                .filter(function (_a) {
                var items = _a.items;
                return Array.isArray(items);
            })
                .forEach(function (_a) {
                var items = _a.items;
                items
                    .filter(function (item) { return lodash.isObject(item); })
                    .forEach(function (_a) {
                    var label = _a.label, value = _a.value;
                    var itemLabel = label && !hideLabels ? label : null;
                    if (Array.isArray(value)) {
                        result.group.push({
                            group: [__assign({ title: core$1._t(itemLabel) }, _this.getItemGroup(value))]
                        });
                    }
                    else {
                        result.group.push({
                            group: [{
                                    items: value ? [{
                                            label: core$1._t(itemLabel),
                                            value: _this.getItemValue(value)
                                        }] : []
                                }]
                        });
                    }
                });
            });
            return result;
        };
        MrMetadataDS.prototype.getItemGroup = function (value) {
            var _this = this;
            if (Array.isArray(value) && Array.isArray(value[0])) {
                return {
                    group: value.map(function (val) { return (__assign({}, _this.getItemGroup(val))); })
                };
            }
            return {
                items: value
                    .filter(function (childItem) { return !!childItem.value; })
                    .map(function (childItem) { return ({
                    label: core$1._t(childItem.label),
                    value: _this.getItemValue(childItem.value)
                }); })
            };
        };
        MrMetadataDS.prototype.getItemValue = function (value) {
            return this.isUrl.test(value) ? this.toUrl(value) : value;
        };
        return MrMetadataDS;
    }(core$1.DataSource));

    var MrNavDS = /** @class */ (function (_super) {
        __extends(MrNavDS, _super);
        function MrNavDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        MrNavDS.prototype.transform = function (data) {
            var items = [];
            data.nav.forEach(function (el) {
                items.push({
                    text: el.title,
                    anchor: {
                        href: "http://localhost:4200/mr/static/" + el.id,
                        target: '_blank',
                        payload: el.id
                    }
                });
            });
            return {
                items: items,
            };
        };
        return MrNavDS;
    }(core$1.DataSource));

    var MrResourceTabsDS = /** @class */ (function (_super) {
        __extends(MrResourceTabsDS, _super);
        function MrResourceTabsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrResourceTabsDS.prototype.transform = function (data) {
            var _a = this.options, currentTab = _a.currentTab, root = _a.root, slug = _a.slug, resourceId = _a.id;
            return data.map(function (_a) {
                var id = _a.id, label = _a.label;
                return ({
                    label: core$1._t(label),
                    classes: currentTab === id ? 'is-active' : '',
                    anchor: {
                        href: "/" + root + "/" + resourceId + "/" + slug + "/" + id
                    }
                });
            });
        };
        return MrResourceTabsDS;
    }(core$1.DataSource));

    var MrTextViewerDS = /** @class */ (function (_super) {
        __extends(MrTextViewerDS, _super);
        function MrTextViewerDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrTextViewerDS.prototype.transform = function (data) {
            return data;
        };
        return MrTextViewerDS;
    }(core$1.DataSource));

    var MrTimelineDS = /** @class */ (function (_super) {
        __extends(MrTimelineDS, _super);
        function MrTimelineDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timelineLoaded$ = new rxjs.Subject();
            return _this;
        }
        MrTimelineDS.prototype.transform = function (data) {
            var _this = this;
            return {
                containerID: 'mr-timeline',
                libOptions: {
                    height: '500px',
                    locale: 'it_IT',
                    align: 'left',
                    showTooltips: false,
                    tooltip: {
                        followMouse: false,
                        template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                    },
                    width: '100%',
                    minHeight: '350px',
                    maxHeight: '800px',
                    zoomFriction: 8
                },
                dataSet: data.dataSet.map(function (d) {
                    // Show dates that have identical start and end dates as points
                    if (d.end && d.end === d.start) {
                        return __assign(__assign({}, d), { end: undefined });
                    }
                    return d;
                }),
                _setInstance: function (timeline) {
                    _this.timeline = timeline;
                    _this.timelineLoaded$.next(timeline);
                }
            };
        };
        return MrTimelineDS;
    }(core$1.DataSource));

    var MrYearHeaderDS = /** @class */ (function (_super) {
        __extends(MrYearHeaderDS, _super);
        function MrYearHeaderDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrYearHeaderDS.prototype.transform = function (data) {
            return data;
        };
        return MrYearHeaderDS;
    }(core$1.DataSource));

    var MrGalleryDS = /** @class */ (function (_super) {
        __extends(MrGalleryDS, _super);
        function MrGalleryDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrGalleryDS.prototype.transform = function (data) {
            if (!data) {
                return null;
            }
            return {
                selected: null,
                items: data.map(function (_a) {
                    var id = _a.id, title = _a.title, thumbnail = _a.thumbnail, image = _a.image;
                    return ({
                        id: id,
                        title: title,
                        thumbSrc: thumbnail,
                        fullSrc: image,
                        payload: id
                    });
                })
            };
        };
        MrGalleryDS.prototype.setSelected = function (itemId) {
            this.output.selected = this.output.items.find(function (_a) {
                var id = _a.id;
                return id === itemId;
            });
        };
        MrGalleryDS.prototype.removeSelected = function () {
            this.output.selected = null;
        };
        return MrGalleryDS;
    }(core$1.DataSource));

    var MrSearchPageTitleDS = /** @class */ (function (_super) {
        __extends(MrSearchPageTitleDS, _super);
        function MrSearchPageTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchPageTitleDS.prototype.transform = function () {
            var _a = this.options.config, title = _a.title, description = _a.description, searchId = _a.searchId;
            var data = {
                title: {
                    main: {
                        text: core$1._t(title)
                    }
                }
            };
            if (description && description.buttonText) {
                data.actions = {
                    buttons: [{
                            text: core$1._t(description.buttonText),
                            anchor: {
                                payload: searchId
                            }
                        }]
                };
            }
            return data;
        };
        return MrSearchPageTitleDS;
    }(core$1.DataSource));

    var MrSearchResultsTitleDS = /** @class */ (function (_super) {
        __extends(MrSearchResultsTitleDS, _super);
        function MrSearchResultsTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchResultsTitleDS.prototype.transform = function (data) {
            var _a = this.options.config, totalResultsText = _a.totalResultsText, sort = _a.sort;
            var totalCount = data.total_count, currentSort = data.sort;
            var mainText = core$1._t(totalResultsText, { total: totalCount }, function (key, _a) {
                var total = _a.total;
                if (total === 0) {
                    return key + "_0";
                }
                if (total === 1) {
                    return key + "_1";
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
                        options: sort.options.map(function (_a) {
                            var label = _a.label, value = _a.value, selected = _a.selected, disabled = _a.disabled;
                            return ({
                                value: value,
                                disabled: disabled,
                                selected: currentSort ? value === currentSort : selected,
                                text: label
                            });
                        }),
                        payload: 'sort'
                    }
                }
            };
        };
        MrSearchResultsTitleDS.prototype.OnInputQueryChange = function (value) {
            var sort = this.options.config.sort;
            sort.options.forEach(function (option) {
                if (option.value === '_score') {
                    option.disabled = !value;
                }
            });
            this.update(this.input);
        };
        return MrSearchResultsTitleDS;
    }(core$1.DataSource));

    var ITEM_PREVIEW_DEFAULTS$2 = {
        limit: 100,
        striptags: true
    };
    var MrSearchResultsDS = /** @class */ (function (_super) {
        __extends(MrSearchResultsDS, _super);
        function MrSearchResultsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchResultsDS.prototype.transform = function (data) {
            var results = data.results;
            var itemPreview = this.options.config.itemPreview;
            var itemPreviewOptions = lodash.merge(lodash.clone(ITEM_PREVIEW_DEFAULTS$2), (itemPreview || {}));
            return results.map(function (item) {
                if (typeof item.text === 'string') {
                    // striptags
                    if (itemPreviewOptions.striptags) {
                        item.text = helpers.striptags(item.text);
                    }
                    // limit
                    if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                        item.text = item.text.substring(0, itemPreviewOptions.limit) + "...";
                    }
                }
                // metadata
                var metadata = [];
                if (Array.isArray(item.metadata)) {
                    item.metadata.forEach(function (group) {
                        var items = [];
                        (group.items || []).forEach(function (metadataItem) {
                            items.push(__assign(__assign({}, metadataItem), { label: core$1._t(metadataItem.label) }));
                        });
                        metadata.push({ items: items });
                    });
                }
                /*
                  Add the highlights to the item's metadata with a custom group
                */
                var highlights = [];
                if (item.highlights) {
                    var highlightGroup_1 = {
                        title: core$1._t('advancedsearch#highlights_title'),
                        items: [],
                        classes: 'n7-item-preview__highlights'
                    };
                    item.highlights.forEach(function (highlight) {
                        var _a, _b;
                        // if the item is an array interpret it as [label, [value]]
                        if (Array.isArray(highlight)) {
                            highlightGroup_1.items.push({
                                label: core$1._t(highlight[0]),
                                value: core$1._t(highlight[1][0])
                            });
                            // if it's an object then it should have a custom hyperlink
                        }
                        else {
                            highlightGroup_1.items.push({
                                label: highlight.label ? core$1._t(highlight.label) : undefined,
                                value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                                href: (_b = "" + item.link + highlight.link) !== null && _b !== void 0 ? _b : undefined,
                            });
                        }
                    });
                    highlights.push(highlightGroup_1);
                }
                var anchor = null;
                if (item.link) {
                    anchor = {
                        href: linksHelper.getRouterLink(item.link),
                        queryParams: linksHelper.getQueryParams(item.link),
                        target: '_blank'
                    };
                }
                if (item.payload) {
                    anchor = {
                        payload: __assign({}, item.payload)
                    };
                }
                return __assign(__assign({}, item), { metadata: metadata,
                    anchor: anchor,
                    highlights: highlights, classes: itemPreviewOptions.classes });
            });
        };
        return MrSearchResultsDS;
    }(core$1.DataSource));

    var MrSearchTagsDS = /** @class */ (function (_super) {
        __extends(MrSearchTagsDS, _super);
        function MrSearchTagsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasFilters = false;
            return _this;
        }
        MrSearchTagsDS.prototype.transform = function (data) {
            var state = data.state, linksResponse = data.linksResponse, facetsConfig = data.facetsConfig;
            var facets = linksResponse.facets;
            var tags = [];
            // inputs config
            facetsConfig.sections.forEach(function (_a) {
                var inputs = _a.inputs;
                inputs
                    .filter(function (_a) {
                    var queryParam = _a.queryParam;
                    return queryParam;
                })
                    .forEach(function (_a) {
                    var id = _a.id;
                    if (state[id]) {
                        var values = Array.isArray(state[id]) ? state[id] : [state[id]];
                        values
                            .forEach(function (value) {
                            var text = value;
                            if (facets[id]) {
                                var selectedFacet = facets[id].values.find(function (_a) {
                                    var payload = _a.payload;
                                    return payload === value;
                                });
                                if (selectedFacet) {
                                    text = selectedFacet.text;
                                }
                            }
                            tags.push({
                                text: text,
                                icon: 'n7-icon-close',
                                payload: {
                                    id: id,
                                    value: value
                                }
                            });
                        });
                    }
                });
            });
            this.hasFilters = !!tags.length;
            return tags;
        };
        return MrSearchTagsDS;
    }(core$1.DataSource));

    var MrSearchPageDescriptionDS = /** @class */ (function (_super) {
        __extends(MrSearchPageDescriptionDS, _super);
        function MrSearchPageDescriptionDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchPageDescriptionDS.prototype.transform = function (data) {
            var description = this.options.config.description;
            if (!description) {
                return null;
            }
            var linkText = description.linkText;
            var text = data.text;
            return {
                text: text,
                link: {
                    text: core$1._t(linkText),
                    payload: true
                }
            };
        };
        return MrSearchPageDescriptionDS;
    }(core$1.DataSource));

    var dateHelper = {
        format: function (date, format) {
            return moment(date).format(format);
        }
    };

    var MrStaticMetadataDS = /** @class */ (function (_super) {
        __extends(MrStaticMetadataDS, _super);
        function MrStaticMetadataDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrStaticMetadataDS.prototype.transform = function (data) {
            var items = ['authors', 'date', 'time_to_read']
                .filter(function (metakey) { return data[metakey]; })
                .map(function (metakey) {
                var itemValue = metakey === 'date' ? dateHelper.format(data[metakey], core$1._t('global#date_human')) : data[metakey];
                return {
                    label: core$1._t("resource#" + metakey),
                    value: itemValue
                };
            });
            return { group: [{ items: items }] };
        };
        return MrStaticMetadataDS;
    }(core$1.DataSource));

    var ICON_OPEN = 'n7-icon-angle-up';
    var ICON_CLOSE = 'n7-icon-angle-down';
    var MrFormWrapperAccordionDS = /** @class */ (function (_super) {
        __extends(MrFormWrapperAccordionDS, _super);
        function MrFormWrapperAccordionDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrFormWrapperAccordionDS.prototype.transform = function (data) {
            var form = data.form;
            var groups = form.config.groups;
            // set accordion headers
            data.form.config.groups = groups.map(function (group) { return (__assign(__assign({}, group), { options: __assign(__assign({}, group.options), { text: group.options.label, payload: group.id, iconRight: group.options.isOpen ? ICON_OPEN : ICON_CLOSE, isOpen: group.options.isOpen }) })); });
            return data;
        };
        MrFormWrapperAccordionDS.prototype.toggleGroup = function (groupId) {
            this.output.form.config.groups.forEach(function (group) {
                if (group.id === groupId) {
                    var isOpen = group.options.isOpen;
                    group.options.iconRight = isOpen ? ICON_CLOSE : ICON_OPEN;
                    group.options.isOpen = !group.options.isOpen;
                }
            });
        };
        return MrFormWrapperAccordionDS;
    }(core$1.DataSource));

    var MrAdvancedSearchTagsDS = /** @class */ (function (_super) {
        __extends(MrAdvancedSearchTagsDS, _super);
        function MrAdvancedSearchTagsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrAdvancedSearchTagsDS.prototype.transform = function (data) {
            var labels = this.options.labels;
            return Object.keys(data).map(function (key) { return ({
                text: (labels[key] || key) + ": " + core$1._t(data[key])
            }); });
        };
        return MrAdvancedSearchTagsDS;
    }(core$1.DataSource));

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

    var MrDummyEH = /** @class */ (function (_super) {
        __extends(MrDummyEH, _super);
        function MrDummyEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrDummyEH.prototype.listen = function () {
            // TODO
        };
        return MrDummyEH;
    }(core$1.EventHandler));

    var MrFiltersEH = /** @class */ (function (_super) {
        __extends(MrFiltersEH, _super);
        function MrFiltersEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrFiltersEH.prototype.listen = function () {
            // TODO
        };
        return MrFiltersEH;
    }(core$1.EventHandler));

    var MrNavEH = /** @class */ (function (_super) {
        __extends(MrNavEH, _super);
        function MrNavEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrNavEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'dv-nav.click':
                        _this.emitOuter('navclick', payload);
                        break;
                    default:
                        console.warn('unhandled event of type', type);
                        break;
                }
            });
        };
        return MrNavEH;
    }(core$1.EventHandler));

    var MrTimelineEH = /** @class */ (function (_super) {
        __extends(MrTimelineEH, _super);
        function MrTimelineEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrTimelineEH.prototype.listen = function () {
            // this.innerEvents$.subscribe(({ type, payload }) => {
            //   switch (type) {
            //     case `${this.dataSource.id}.<event-type>`:
            //       // TODO
            //       break;
            //     default:
            //       break;
            //   }
            // });
        };
        return MrTimelineEH;
    }(core$1.EventHandler));

    var MrYearHeaderEH = /** @class */ (function (_super) {
        __extends(MrYearHeaderEH, _super);
        function MrYearHeaderEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrYearHeaderEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case 'mr-year-header.click':
                        _this.emitOuter('closeevent');
                        break;
                    default:
                        break;
                }
            });
        };
        return MrYearHeaderEH;
    }(core$1.EventHandler));

    var MrGalleryEH = /** @class */ (function (_super) {
        __extends(MrGalleryEH, _super);
        function MrGalleryEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrGalleryEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".click":
                        _this.dataSource.setSelected(payload);
                        break;
                    case _this.dataSource.id + ".close":
                        _this.dataSource.removeSelected();
                        break;
                    default:
                        break;
                }
            });
        };
        return MrGalleryEH;
    }(core$1.EventHandler));

    var MrCollectionEH = /** @class */ (function (_super) {
        __extends(MrCollectionEH, _super);
        function MrCollectionEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrCollectionEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".click": {
                        var action = payload.action;
                        if (action === 'resource-modal') {
                            _this.emitOuter('openresourcemodal', payload);
                        }
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        return MrCollectionEH;
    }(core$1.EventHandler));

    var MrSearchTagsEH = /** @class */ (function (_super) {
        __extends(MrSearchTagsEH, _super);
        function MrSearchTagsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchTagsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-tags.click':
                        _this.emitOuter('click', payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return MrSearchTagsEH;
    }(core$1.EventHandler));

    var MrSearchResultsTitleEH = /** @class */ (function (_super) {
        __extends(MrSearchResultsTitleEH, _super);
        function MrSearchResultsTitleEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchResultsTitleEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-results-title.change':
                        _this.emitOuter('change', payload);
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-layout.inputquerychange':
                        _this.dataSource.OnInputQueryChange(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return MrSearchResultsTitleEH;
    }(core$1.EventHandler));

    var MrSearchPageTitleEH = /** @class */ (function (_super) {
        __extends(MrSearchPageTitleEH, _super);
        function MrSearchPageTitleEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchPageTitleEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-page-title.click':
                        _this.emitOuter('click', payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return MrSearchPageTitleEH;
    }(core$1.EventHandler));

    var MrSearchPageDescriptionEH = /** @class */ (function (_super) {
        __extends(MrSearchPageDescriptionEH, _super);
        function MrSearchPageDescriptionEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchPageDescriptionEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-page-description.click':
                        _this.emitOuter('click', payload);
                        break;
                    default:
                        break;
                }
            });
        };
        return MrSearchPageDescriptionEH;
    }(core$1.EventHandler));

    var MrSearchResultsEH = /** @class */ (function (_super) {
        __extends(MrSearchResultsEH, _super);
        function MrSearchResultsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSearchResultsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-results.click': {
                        var action = payload.action;
                        if (action === 'resource-modal') {
                            _this.emitOuter('openresourcemodal', payload);
                        }
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        return MrSearchResultsEH;
    }(core$1.EventHandler));

    var MrFormWrapperAccordionEH = /** @class */ (function (_super) {
        __extends(MrFormWrapperAccordionEH, _super);
        function MrFormWrapperAccordionEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrFormWrapperAccordionEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-form-wrapper-accordion.init':
                        _this.listenKeyUpEvents();
                        break;
                    case 'mr-form-wrapper-accordion.destroy':
                        _this.destroy$.next();
                        break;
                    case 'mr-form-wrapper-accordion.submit': {
                        var form = _this.dataSource.output.form;
                        _this.emitOuter('submit', {
                            state: form.getState()
                        });
                        break;
                    }
                    case 'mr-form-wrapper-accordion.reset':
                        _this.emitOuter('reset');
                        break;
                    case 'mr-form-wrapper-accordion.click':
                        _this.dataSource.toggleGroup(payload);
                        break;
                    default:
                        break;
                }
            });
        };
        MrFormWrapperAccordionEH.prototype.listenKeyUpEvents = function () {
            var _this = this;
            var keyup$ = rxjs.fromEvent(window, 'keyup');
            keyup$.pipe(operators.filter(function (event) { return event.key === 'Enter'; }), operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.emitInner('submit');
            });
        };
        return MrFormWrapperAccordionEH;
    }(core$1.EventHandler));

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
        MrSearchResultsEH: MrSearchResultsEH,
        MrFormWrapperAccordionEH: MrFormWrapperAccordionEH
    });

    var MrAdvancedResultsLayoutConfig = {
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

    var MrAdvancedResultsLayoutComponent = /** @class */ (function (_super) {
        __extends(MrAdvancedResultsLayoutComponent, _super);
        function MrAdvancedResultsLayoutComponent(router, activatedRoute, mainState, configuration, communication, layoutState, modalService, layoutsConfiguration) {
            var _this = _super.call(this, layoutsConfiguration.get('MrAdvancedResultsLayoutConfig') || MrAdvancedResultsLayoutConfig) || this;
            _this.router = router;
            _this.activatedRoute = activatedRoute;
            _this.mainState = mainState;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.layoutState = layoutState;
            _this.modalService = modalService;
            return _this;
        }
        MrAdvancedResultsLayoutComponent.prototype.initPayload = function () {
            return {
                configId: this.configId,
                configuration: this.configuration,
                communication: this.communication,
                mainState: this.mainState,
                router: this.router,
                activatedRoute: this.activatedRoute,
                layoutState: this.layoutState,
                modalService: this.modalService,
                options: this.config.options || {},
            };
        };
        MrAdvancedResultsLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.configId = data.configId;
                // add layout states
                _this.layoutState.add(['results']);
                _this.onInit();
            });
        };
        MrAdvancedResultsLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrAdvancedResultsLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: MainStateService },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MrLayoutStateService },
            { type: MrResourceModalService },
            { type: LayoutsConfigurationService }
        ]; };
        MrAdvancedResultsLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-advanced-results-layout',
                template: "<div class=\"mr-advanced-results mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-advanced-results__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-advanced-results__results-content\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <div class=\"mr-advanced-results__results-wrapper\">\r\n                \r\n                <div class=\"mr-advanced-results__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-active-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-advanced-results__results\">\r\n                    \r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-advanced-results__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <!-- Use a custom item preview with clickable metadata items -->\r\n                                <mr-advanced-result\r\n                                    *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\r\n                                </mr-advanced-result>\r\n                                <!-- ../../components/advanced-result/advanced-result.html -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div *ngIf=\"lb.dataSource.pageConfig?.fallback?.text\" class=\"mr-advanced-results__results-fallback\">\r\n                                <p class=\"mr-advanced-results__feedback-text\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                    <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                        {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                    </button>\r\n                                </div> -->\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p *ngIf=\"lb.dataSource.pageConfig?.ko?.text\" class=\"mr-advanced-results__feedback-text\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <!-- <div class=\"mr-advanced-results__buttons\">\r\n                                <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.ko.button }}\r\n                                </button>\r\n                            </div> -->\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                \r\n                <n7-smart-pagination\r\n                    *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                MainStateService,
                ConfigurationService,
                CommunicationService,
                MrLayoutStateService,
                MrResourceModalService,
                LayoutsConfigurationService])
        ], MrAdvancedResultsLayoutComponent);
        return MrAdvancedResultsLayoutComponent;
    }(AbstractLayout));

    var MrInputTextDS = /** @class */ (function (_super) {
        __extends(MrInputTextDS, _super);
        function MrInputTextDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                value: null,
                disabled: false,
                hidden: false,
            };
            _this.getState = function () { return _this.state; };
            return _this;
        }
        MrInputTextDS.prototype.transform = function (data) {
            return __assign(__assign({}, data), { placeholder: core$1._t(data.placeholder) });
        };
        MrInputTextDS.prototype.setState = function (newState) {
            this.state = __assign(__assign({}, this.state), newState);
            this.refresh();
        };
        MrInputTextDS.prototype.clear = function () {
            this.setState({ value: null });
        };
        MrInputTextDS.prototype.refresh = function () {
            var _a = this.state, value = _a.value, hidden = _a.hidden, disabled = _a.disabled;
            // render value
            this.output.value = value;
            // fix element update
            var el = document.getElementById(this.id);
            if (el) {
                el.value = value;
            }
            // render disabled
            this.output.disabled = disabled;
            // render hidden
            this.output.classes = hidden ? 'is-hidden' : '';
        };
        return MrInputTextDS;
    }(core$1.DataSource));

    var MrInputTextEH = /** @class */ (function (_super) {
        __extends(MrInputTextEH, _super);
        function MrInputTextEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrInputTextEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change": {
                        var value = payload.value;
                        // set new value
                        _this.dataSource.setState({ value: value });
                        // emit changed signal
                        _this.changed$.next({
                            id: _this.dataSource.id,
                            state: _this.dataSource.getState()
                        });
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        return MrInputTextEH;
    }(core$1.EventHandler));

    var MrInputSelectDS = /** @class */ (function (_super) {
        __extends(MrInputSelectDS, _super);
        function MrInputSelectDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                value: null,
                disabled: false,
                hidden: false,
            };
            _this.getState = function () { return _this.state; };
            return _this;
        }
        MrInputSelectDS.prototype.transform = function (data) {
            return __assign(__assign({}, data), { options: this.getOptions(data.options) });
        };
        MrInputSelectDS.prototype.setState = function (newState) {
            this.state = __assign(__assign({}, this.state), newState);
            this.refresh();
        };
        MrInputSelectDS.prototype.clear = function () {
            this.setState({ value: null });
        };
        MrInputSelectDS.prototype.refresh = function () {
            var _a = this.state, hidden = _a.hidden, disabled = _a.disabled;
            // render value
            this.output.options = this.getOptions(this.output.options);
            // render disabled
            this.output.disabled = disabled;
            // render hidden
            this.output.classes = hidden ? 'is-hidden' : '';
        };
        MrInputSelectDS.prototype.getOptions = function (options) {
            var value = this.state.value;
            return options.map(function (option) { return (__assign(__assign({}, option), { label: core$1._t(option.label), selected: value === option.value })); });
        };
        return MrInputSelectDS;
    }(core$1.DataSource));

    var MrInputSelectEH = /** @class */ (function (_super) {
        __extends(MrInputSelectEH, _super);
        function MrInputSelectEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrInputSelectEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change": {
                        var value = payload.value;
                        // set new value
                        _this.dataSource.setState({ value: value });
                        // emit changed signal
                        _this.changed$.next({
                            id: _this.dataSource.id,
                            state: _this.dataSource.getState()
                        });
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        return MrInputSelectEH;
    }(core$1.EventHandler));

    // eslint-disable-next-line max-len
    var MrInputCheckboxDS = /** @class */ (function (_super) {
        __extends(MrInputCheckboxDS, _super);
        function MrInputCheckboxDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                value: [],
                disabled: false,
                hidden: false,
            };
            _this.getState = function () { return _this.state; };
            return _this;
        }
        MrInputCheckboxDS.prototype.transform = function (data) {
            return __assign(__assign({}, data), { checkboxes: this.getCheckboxes(data.checkboxes) });
        };
        MrInputCheckboxDS.prototype.setState = function (newState) {
            this.state = __assign(__assign({}, this.state), newState);
            this.refresh();
        };
        MrInputCheckboxDS.prototype.clear = function () {
            this.setState({ value: [] });
        };
        MrInputCheckboxDS.prototype.refresh = function () {
            var hidden = this.state.hidden;
            // render value
            this.output.checkboxes = this.getCheckboxes(this.output.checkboxes);
            // render hidden
            this.output.classes = hidden ? 'is-hidden' : '';
        };
        MrInputCheckboxDS.prototype.toggleValue = function (_a) {
            var inputPayload = _a.inputPayload, isChecked = _a.value;
            var value = this.state.value;
            var exists = !!(value.includes(inputPayload));
            if (isChecked && !exists) {
                value.push(inputPayload);
            }
            else if (!isChecked && exists) {
                value.splice(value.indexOf(inputPayload), 1);
            }
            this.setState({ value: value });
        };
        MrInputCheckboxDS.prototype.getCheckboxes = function (checkboxes) {
            var _this = this;
            var _a = this.state, value = _a.value, disabled = _a.disabled;
            return checkboxes.map(function (checkbox, index) { return (__assign(__assign({}, checkbox), { id: _this.id + "-" + index, disabled: disabled, label: core$1._t(checkbox.label), checked: !!(value.includes(checkbox.payload)) })); });
        };
        return MrInputCheckboxDS;
    }(core$1.DataSource));

    var MrInputCheckboxEH = /** @class */ (function (_super) {
        __extends(MrInputCheckboxEH, _super);
        function MrInputCheckboxEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrInputCheckboxEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change": {
                        // update value
                        _this.dataSource.toggleValue(payload);
                        // emit changed signal
                        _this.changed$.next({
                            id: _this.dataSource.id,
                            state: _this.dataSource.getState()
                        });
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        return MrInputCheckboxEH;
    }(core$1.EventHandler));

    var MrFormModel = /** @class */ (function () {
        function MrFormModel() {
            var _this = this;
            this.loaded$ = new rxjs.ReplaySubject();
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
            this.changed$ = new rxjs.Subject();
            this.getInput = function (id) { return _this.inputs[id].ds; };
            this.getInputs = function () {
                var inputs = {};
                Object.keys(_this.inputs).forEach(function (id) {
                    inputs[id] = _this.getInput(id);
                });
                return inputs;
            };
        }
        MrFormModel.prototype.init = function (config) {
            this.config = config;
            // init inputs
            this.initInputs();
            // emit signal
            this.loaded$.next(true);
        };
        MrFormModel.prototype.getState = function () {
            var _this = this;
            var state = {};
            Object.keys(this.inputs).forEach(function (key) {
                state[key] = _this.inputs[key].ds.getState();
            });
            return state;
        };
        MrFormModel.prototype.addInputType = function (type, ds, eh) {
            if (this.inputTypes[type]) {
                throw Error("input type " + type + " already exists!");
            }
            this.inputTypes[type] = { ds: ds, eh: eh };
        };
        MrFormModel.prototype.initInputs = function () {
            var _this = this;
            var sections = this.config.sections;
            sections.forEach(function (section) {
                section.inputs.forEach(function (_a) {
                    var id = _a.id, type = _a.type, options = _a.options, state = _a.state, data = _a.data;
                    var DSClass = _this.inputTypes[type].ds;
                    var EHClass = _this.inputTypes[type].eh;
                    var DSInstance = new DSClass(options || {});
                    var EHInstance = new EHClass();
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
                    EHInstance.changed$ = _this.changed$;
                    // listen to input events
                    EHInstance.listen();
                    // save it to input
                    _this.inputs[id] = {
                        ds: DSInstance,
                        eh: EHInstance,
                        emit: function (t, p) { return EHInstance.emitInner(t, p); }
                    };
                });
            });
        };
        return MrFormModel;
    }());

    var MrAdvancedSearchLayoutDS = /** @class */ (function (_super) {
        __extends(MrAdvancedSearchLayoutDS, _super);
        function MrAdvancedSearchLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.initialState = {};
            return _this;
        }
        MrAdvancedSearchLayoutDS.prototype.onInit = function (payload) {
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
            this.initialState = lodash.cloneDeep(this.form.getState());
            this.one('mr-form-wrapper-accordion').update({
                form: this.form
            });
            // update head title
            this.updateHeadTitle();
        };
        MrAdvancedSearchLayoutDS.prototype.updateHeadTitle = function () {
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle)].join(' > '));
        };
        MrAdvancedSearchLayoutDS.prototype.onSubmit = function (_a) {
            var state = _a.state;
            if (!lodash.isEmpty(state)) {
                var resultsUrl = this.pageConfig.resultsUrl;
                var params = Object.keys(state)
                    .filter(function (key) { return !(state[key].disabled || lodash.isEmpty(state[key].value)); })
                    .map(function (key) { return ({
                    key: key,
                    value: Array.isArray(state[key].value)
                        ? state[key].value.join(',')
                        : state[key].value
                }); })
                    .map(function (_a) {
                    var key = _a.key, value = _a.value;
                    return key + "=" + encodeURIComponent(value);
                });
                var url = resultsUrl + "?" + params.join('&');
                window.open(url, '_blank');
            }
        };
        MrAdvancedSearchLayoutDS.prototype.onReset = function () {
            var _this = this;
            Object.keys(this.initialState).forEach(function (key) {
                var inputState = lodash.cloneDeep(_this.initialState[key]);
                _this.form.getInput(key).setState(inputState);
            });
        };
        MrAdvancedSearchLayoutDS.prototype.addTranslations = function (pageConfig) {
            var formConfig = pageConfig.formConfig;
            // page title
            pageConfig.title = core$1._t(pageConfig.title);
            // submit
            if (formConfig.submitButton) {
                formConfig.submitButton.label = core$1._t(formConfig.submitButton.label);
            }
            // reset
            if (formConfig.resetButton) {
                formConfig.resetButton.label = core$1._t(formConfig.resetButton.label);
            }
            // groups
            formConfig.groups.forEach(function (group) {
                var _a;
                if ((_a = group.options) === null || _a === void 0 ? void 0 : _a.label) {
                    group.options.label = core$1._t(group.options.label);
                }
            });
            // sections
            formConfig.sections.forEach(function (section) {
                if (section.title) {
                    section.title = core$1._t(section.title);
                }
                if (section.description) {
                    section.description = core$1._t(section.description);
                }
                section.inputs.forEach(function (input) {
                    if (input.data.label) {
                        input.data.label = core$1._t(input.data.label);
                    }
                    // input text
                    if (input.type === 'text') {
                        if (input.data.placeholder) {
                            input.data.placeholder = core$1._t(input.data.placeholder);
                        }
                    }
                    // input checkbox
                    if (input.type === 'checkbox') {
                        input.data.checkboxes.forEach(function (checkbox) {
                            checkbox.label = core$1._t(checkbox.label);
                        });
                    }
                    // input select
                    if (input.type === 'select') {
                        input.data.options.forEach(function (option) {
                            option.label = core$1._t(option.label);
                        });
                    }
                });
            });
        };
        return MrAdvancedSearchLayoutDS;
    }(core$1.LayoutDataSource));

    var MrAdvancedSearchLayoutEH = /** @class */ (function (_super) {
        __extends(MrAdvancedSearchLayoutEH, _super);
        function MrAdvancedSearchLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrAdvancedSearchLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-advanced-search-layout.init':
                        _this.dataSource.onInit(payload);
                        // init hook
                        _this.onInit();
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'mr-advanced-search-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-form-wrapper-accordion.submit':
                        _this.dataSource.onSubmit(payload);
                        break;
                    case 'mr-form-wrapper-accordion.reset':
                        _this.dataSource.onReset();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        /**
         * @example
         * protected onInit() {
         *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
         *     console.log('changed$', { id, state });
         *   });
         * }
         */
        MrAdvancedSearchLayoutEH.prototype.onInit = function () {
            // to be extended on project
        };
        return MrAdvancedSearchLayoutEH;
    }(core$1.EventHandler));

    var MrAdvancedSearchLayoutConfig = {
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

    var MrAdvancedSearchLayoutComponent = /** @class */ (function (_super) {
        __extends(MrAdvancedSearchLayoutComponent, _super);
        function MrAdvancedSearchLayoutComponent(router, activatedRoute, mainState, configuration, layoutsConfiguration) {
            var _this = _super.call(this, layoutsConfiguration.get('MrAdvancedSearchLayoutConfig') || MrAdvancedSearchLayoutConfig) || this;
            _this.router = router;
            _this.activatedRoute = activatedRoute;
            _this.mainState = mainState;
            _this.configuration = configuration;
            return _this;
        }
        MrAdvancedSearchLayoutComponent.prototype.initPayload = function () {
            return {
                configId: this.configId,
                configuration: this.configuration,
                mainState: this.mainState,
                router: this.router,
                activatedRoute: this.activatedRoute,
                options: this.config.options || {},
            };
        };
        MrAdvancedSearchLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.configId = data.configId;
                _this.onInit();
            });
        };
        MrAdvancedSearchLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrAdvancedSearchLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: MainStateService },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService }
        ]; };
        MrAdvancedSearchLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-advanced-search-layout',
                template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search mr-layout\">\r\n    <div class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <n7-inner-title [data]=\"{\r\n            title: {\r\n                main: {\r\n                    text: lb.dataSource.pageConfig.title\r\n                }\r\n            }\r\n        }\"></n7-inner-title>\r\n\r\n        <mr-form-wrapper-accordion \r\n            [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\r\n        </mr-form-wrapper-accordion>\r\n    </div>\r\n</div>"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                MainStateService,
                ConfigurationService,
                LayoutsConfigurationService])
        ], MrAdvancedSearchLayoutComponent);
        return MrAdvancedSearchLayoutComponent;
    }(AbstractLayout));

    var MrGlossaryLayoutDS = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutDS, _super);
        function MrGlossaryLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // private communication;
        MrGlossaryLayoutDS.prototype.onInit = function () {
            // this.communication = payload.communication;
        };
        return MrGlossaryLayoutDS;
    }(core$1.LayoutDataSource));

    var MrGlossaryLayoutEH = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutEH, _super);
        function MrGlossaryLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrGlossaryLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-glossary-layout.init':
                        _this.dataSource.onInit(payload);
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        return MrGlossaryLayoutEH;
    }(core$1.EventHandler));

    var MrGlossaryLayoutConfig = {
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

    var MrGlossaryLayoutComponent = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutComponent, _super);
        function MrGlossaryLayoutComponent(layoutsConfiguration) {
            return _super.call(this, layoutsConfiguration.get('MrGlossaryLayoutConfig') || MrGlossaryLayoutConfig) || this;
        }
        MrGlossaryLayoutComponent.prototype.initPayload = function () {
            return {
                options: this.config.options || {}
            };
        };
        MrGlossaryLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        MrGlossaryLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrGlossaryLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService }
        ]; };
        MrGlossaryLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-glossary-layout',
                template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\r\n    Hello, from Glossary layout!\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService])
        ], MrGlossaryLayoutComponent);
        return MrGlossaryLayoutComponent;
    }(AbstractLayout));

    var MrHomeLayoutDS = /** @class */ (function (_super) {
        __extends(MrHomeLayoutDS, _super);
        function MrHomeLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorTitle = core$1._t('global#layout_error_title');
            _this.errorDescription = core$1._t('global#layout_error_description');
            return _this;
        }
        MrHomeLayoutDS.prototype.onInit = function (payload) {
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.mainState = payload.mainState;
            this.layoutState = payload.layoutState;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId) || {};
            this.doRequest();
            // update head title
            this.updateHeadTitle();
        };
        MrHomeLayoutDS.prototype.doRequest = function () {
            var _this = this;
            var sections = this.pageConfig.sections;
            if (!lodash.isEmpty(sections)) {
                this.layoutState.set('content', LayoutState.LOADING);
                this.communication.request$('home', {
                    method: 'POST',
                    params: sections.map(function (_a) {
                        var id = _a.id;
                        return id;
                    }),
                    onError: function (err) {
                        console.warn("Error loading " + _this.configId + " sections", err.message);
                        _this.layoutState.set('content', LayoutState.ERROR);
                    }
                }).subscribe(function (response) {
                    _this.layoutState.set('content', LayoutState.SUCCESS);
                    _this.initSections(response);
                });
            }
            else {
                console.warn("There are no sections configured for " + this.configId + " layout");
            }
        };
        MrHomeLayoutDS.prototype.initSections = function (response) {
            var _this = this;
            var sections = this.pageConfig.sections;
            if (sections) {
                sections.forEach(function (_a) {
                    var id = _a.id;
                    var widgetDataSource = _this.getWidgetDataSource(id);
                    var responseData = response[id];
                    // set id
                    widgetDataSource.id = id;
                    // update data
                    if (responseData) {
                        _this.one(id).update(responseData);
                    }
                });
            }
        };
        MrHomeLayoutDS.prototype.updateHeadTitle = function () {
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
        };
        return MrHomeLayoutDS;
    }(core$1.LayoutDataSource));

    var MrHomeLayoutEH = /** @class */ (function (_super) {
        __extends(MrHomeLayoutEH, _super);
        function MrHomeLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrHomeLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-home-layout.init':
                        _this.dataSource.onInit(payload);
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    default:
                        break;
                }
            });
        };
        return MrHomeLayoutEH;
    }(core$1.EventHandler));

    var MrHomeLayoutConfig = {
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

    var MrSliderDS = /** @class */ (function (_super) {
        __extends(MrSliderDS, _super);
        function MrSliderDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSliderDS.prototype.transform = function (data) {
            var slides = data.slides;
            return {
                slides: slides,
                containerId: "carousel-" + this.id,
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
        };
        return MrSliderDS;
    }(core$1.DataSource));

    var MrSliderEH = /** @class */ (function (_super) {
        __extends(MrSliderEH, _super);
        function MrSliderEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrSliderEH.prototype.listen = function () {
            // this.innerEvents$.subscribe(({ type, payload }) => {
            //   switch (type) {
            //     case `${this.dataSource.id}.<event-type>`:
            //       // TODO
            //       break;
            //     default:
            //       break;
            //   }
            // });
        };
        return MrSliderEH;
    }(core$1.EventHandler));

    var MrHeroEH = /** @class */ (function (_super) {
        __extends(MrHeroEH, _super);
        function MrHeroEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrHeroEH.prototype.listen = function () {
            // this.innerEvents$.subscribe(({ type, payload }) => {
            //   switch (type) {
            //     case `${this.dataSource.id}.<event-type>`:
            //       // TODO
            //       break;
            //     default:
            //       break;
            //   }
            // });
        };
        return MrHeroEH;
    }(core$1.EventHandler));

    var DATASOURCE_MAP = {
        slider: MrSliderDS,
        collection: MrCollectionDS,
        hero: MrHeroDS,
        content: MrContentDS,
    };
    var EVENTHANDLER_MAP = {
        slider: MrSliderEH,
        collection: MrCollectionEH,
        hero: MrHeroEH,
    };
    var MrHomeLayoutComponent = /** @class */ (function (_super) {
        __extends(MrHomeLayoutComponent, _super);
        function MrHomeLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, layoutState) {
            var _this = _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || MrHomeLayoutConfig) || this;
            _this.activatedRoute = activatedRoute;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.mainState = mainState;
            _this.layoutState = layoutState;
            return _this;
        }
        MrHomeLayoutComponent.prototype.initPayload = function () {
            return {
                configId: this.configId,
                mainState: this.mainState,
                configuration: this.configuration,
                communication: this.communication,
                layoutState: this.layoutState,
                options: this.config.options || {}
            };
        };
        MrHomeLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.configId = data.configId;
                _this.layoutState.add('content');
                _this.loadWidgets();
                _this.onInit();
            });
        };
        MrHomeLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrHomeLayoutComponent.prototype.loadWidgets = function () {
            var _this = this;
            var homeConfig = this.configuration.get(this.configId) || {};
            var sections = homeConfig.sections;
            this.widgets = [];
            if (sections) {
                sections.forEach(function (_a) {
                    var id = _a.id, type = _a.type, options = _a.options;
                    _this.widgets.push({
                        id: id,
                        options: options,
                        dataSource: DATASOURCE_MAP[type],
                        eventHandler: EVENTHANDLER_MAP[type]
                    });
                });
            }
        };
        MrHomeLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: MrLayoutStateService }
        ]; };
        MrHomeLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-home-layout',
                template: "<div class=\"mr-home mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- HOME CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\r\n                <ng-container [ngSwitch]=\"section.type\">\r\n        \r\n                    <!-- SLIDER -->\r\n                    <ng-container *ngSwitchCase=\"'slider'\">\r\n                        <n7-carousel \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-carousel> \r\n                    </ng-container>\r\n        \r\n                    <!-- COLLECTION -->\r\n                    <ng-container *ngSwitchCase=\"'collection'\">\r\n                        <div class=\"mr-layout__maxwidth mr-items-preview\">\r\n                            <n7-inner-title \r\n                            [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                            </n7-inner-title>\r\n                            <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview\r\n                                *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\r\n                                [data]=\"item\"\r\n                                [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n        \r\n                    <!-- HERO -->\r\n                    <ng-container *ngSwitchCase=\"'hero'\">\r\n                        <n7-hero \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-hero> \r\n                    </ng-container>\r\n        \r\n                    <!-- CONTENT -->\r\n                    <ng-container *ngSwitchCase=\"'content'\">\r\n                        <div [innerHTML]=\"lb.widgets[section.id].ds.out$ | async\"></div>\r\n                    </ng-container>\r\n                \r\n                </ng-container>\r\n            </section>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.ActivatedRoute,
                ConfigurationService,
                CommunicationService,
                MainStateService,
                MrLayoutStateService])
        ], MrHomeLayoutComponent);
        return MrHomeLayoutComponent;
    }(AbstractLayout));

    var MrItineraryLayoutDS = /** @class */ (function (_super) {
        __extends(MrItineraryLayoutDS, _super);
        function MrItineraryLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorTitle = core$1._t('global#layout_error_title');
            _this.errorDescription = core$1._t('global#layout_error_description');
            return _this;
        }
        MrItineraryLayoutDS.prototype.onInit = function (payload) {
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.mainState = payload.mainState;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId);
            // add translations
            this.pageConfig.sections = this.pageConfig.sections.map(function (section) { return (__assign(__assign({}, section), { title: core$1._t(section.title) })); });
        };
        MrItineraryLayoutDS.prototype.pageRequest$ = function (id, onError) {
            return this.communication.request$('itinerary', {
                onError: onError,
                method: 'GET',
                urlParams: id
            });
        };
        MrItineraryLayoutDS.prototype.handleResponse = function (response) {
            this.updateTitle(response);
            this.updateContent(response);
            this.updateMetadata(response);
            this.initSections(response);
            this.updateHeadTitle(response);
        };
        MrItineraryLayoutDS.prototype.updateTitle = function (_a) {
            var title = _a.title;
            this.title = title;
        };
        MrItineraryLayoutDS.prototype.updateContent = function (_a) {
            var content = _a.content;
            this.content = content;
        };
        MrItineraryLayoutDS.prototype.updateMetadata = function (response) {
            this.one('mr-static-metadata').update(response);
        };
        MrItineraryLayoutDS.prototype.initSections = function (response) {
            var _this = this;
            var sections = this.pageConfig.sections;
            sections.forEach(function (_a) {
                var id = _a.id;
                var widgetDataSource = _this.getWidgetDataSource(id);
                if (!widgetDataSource)
                    return;
                var responseSection = response.sections[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseSection) {
                    _this.one(id).update(responseSection);
                }
            });
        };
        MrItineraryLayoutDS.prototype.updateHeadTitle = function (_a) {
            var itineraryTitle = _a.title;
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle), itineraryTitle].join(' > '));
        };
        return MrItineraryLayoutDS;
    }(core$1.LayoutDataSource));

    var MrItineraryLayoutEH = /** @class */ (function (_super) {
        __extends(MrItineraryLayoutEH, _super);
        function MrItineraryLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrItineraryLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-itinerary-layout.init':
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this.layoutState = payload.layoutState;
                        _this.modalService = payload.modalService;
                        _this.dataSource.onInit(payload);
                        _this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'mr-resource-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type.indexOf('openresourcemodal') !== -1) {
                    var id = payload.id, resourceType = payload.type;
                    _this.modalService.open(id, resourceType);
                }
            });
        };
        MrItineraryLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.paramMap.pipe(operators.takeUntil(this.destroy$), operators.tap(function () {
                _this.layoutState.set('content', LayoutState.LOADING);
            }), operators.map(function (params) { return params.get('id'); }), operators.switchMap(function (id) { return _this.dataSource.pageRequest$(id, function (err) {
                if (err.status === 404) {
                    // getting not found path
                    var config = _this.router.config;
                    var route404 = config.find(function (_a) {
                        var data = _a.data;
                        return (data === null || data === void 0 ? void 0 : data.id) === 'page-404';
                    });
                    var path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                    _this.router.navigate([path404]);
                }
                console.warn("Error loading resource layout for " + id, err.message);
                _this.layoutState.set('content', LayoutState.ERROR);
            }); })).subscribe(function (response) {
                _this.layoutState.set('content', LayoutState.SUCCESS);
                _this.dataSource.handleResponse(response);
                // scroll top
                window.scrollTo(0, 0);
            });
        };
        return MrItineraryLayoutEH;
    }(core$1.EventHandler));

    var MrItineraryLayoutConfig = {
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

    var DATASOURCE_MAP$1 = {
        collection: MrCollectionDS,
        metadata: MrMetadataDS,
        gallery: MrGalleryDS,
    };
    var EVENTHANDLER_MAP$1 = {
        collection: MrCollectionEH,
        gallery: MrGalleryEH,
    };
    var MrItineraryLayoutComponent = /** @class */ (function (_super) {
        __extends(MrItineraryLayoutComponent, _super);
        function MrItineraryLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
            var _this = _super.call(this, layoutsConfiguration.get('MrItineraryLayoutConfig') || MrItineraryLayoutConfig) || this;
            _this.activatedRoute = activatedRoute;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.mainState = mainState;
            _this.route = route;
            _this.router = router;
            _this.layoutState = layoutState;
            _this.modalService = modalService;
            return _this;
        }
        MrItineraryLayoutComponent.prototype.initPayload = function () {
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
        };
        MrItineraryLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.layoutState.add('content');
                _this.configId = data.configId;
                _this.loadWidgets();
                _this.onInit();
            });
        };
        MrItineraryLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrItineraryLayoutComponent.prototype.loadWidgets = function () {
            var _this = this;
            var sections = this.configuration.get(this.configId).sections;
            if (sections) {
                sections.forEach(function (_a) {
                    var id = _a.id, type = _a.type, options = _a.options;
                    _this.widgets.push({
                        id: id,
                        options: options,
                        dataSource: DATASOURCE_MAP$1[type],
                        eventHandler: EVENTHANDLER_MAP$1[type]
                    });
                });
            }
        };
        MrItineraryLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: MrLayoutStateService },
            { type: MrResourceModalService }
        ]; };
        MrItineraryLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-itinerary-layout',
                template: "<div class=\"mr-static mr-layout\" \r\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- ITINERARY LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <div class=\"mr-static__top\">\r\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\r\n                <div class=\"mr-static__metadata\">\r\n                    <n7-metadata-viewer \r\n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"mr-static__content mr-side-margin\">\r\n                <!-- Page content html -->\r\n                <div class=\"mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\r\n    \r\n                <!-- Pass the list of blocks to render to the block template -->\r\n                <div class=\"mr-static__related-resources\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: lb.dataSource.pageConfig.sections }\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\r\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n    \r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    \r\n                    <div class=\"mr-content-block mr-content-block-metadata\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-read-more [data]=\"section.readmore\">\r\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                                    [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-metadata-viewer>\r\n                            </mr-read-more>\r\n                        </div>\r\n                    </div>\r\n\r\n                </ng-container>\r\n    \r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\r\n                        \r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- GALLERY -->\r\n                <ng-container *ngSwitchCase=\"'gallery'\">\r\n                    <div class=\"mr-content-block mr-content-block-gallery\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-gallery [grid]=\"section.grid\" [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \r\n                            </mr-gallery>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.ActivatedRoute,
                ConfigurationService,
                CommunicationService,
                MainStateService,
                router.ActivatedRoute,
                router.Router,
                MrLayoutStateService,
                MrResourceModalService])
        ], MrItineraryLayoutComponent);
        return MrItineraryLayoutComponent;
    }(AbstractLayout));

    var MrMapLayoutDS = /** @class */ (function (_super) {
        __extends(MrMapLayoutDS, _super);
        function MrMapLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.loading = {
                resourceDetails: true,
                timeline: true,
            };
            _this.eventDescription = '';
            _this.mapListener$ = new rxjs.Subject();
            return _this;
        }
        MrMapLayoutDS.prototype.onInit = function (payload) {
            var _this = this;
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.route = payload.route;
            this.location = payload.location;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId) || {};
            // update the map
            this.communication.request$('map', {
                method: 'GET',
                onError: function (e) { return console.error(e); }
            }).subscribe(function (_a) {
                var dataSet = _a.dataSet;
                if (dataSet) {
                    _this.one('mr-map').update(dataSet);
                }
            });
            this.getWidgetDataSource('mr-map').mapLoaded$
                .pipe(operators.first())
                .subscribe(function (_a) {
                var map = _a.map, markers = _a.markers;
                _this.mapListener$.next({ map: map, markers: markers });
            });
        };
        MrMapLayoutDS.prototype.loadDefaults = function (navigate) {
            this.eventDescription = core$1._t(this.pageConfig.defaultText);
            this.eventHeader = '';
            this.bibliographyData = undefined;
            this.collectionWitnessData = undefined;
            this.collectionWorksData = undefined;
            this.collectionGalleryData = undefined;
            if (navigate)
                this.location.go('/map/');
            this.one('mr-year-header').update({
                title: { main: { text: core$1._t(this.pageConfig.title) } },
            });
        };
        MrMapLayoutDS.prototype.updatePageDetails = function (id) {
            var _this = this;
            this.communication.request$('resource', {
                onError: function (e) { return console.error(e); },
                method: 'POST',
                params: {
                    id: id, type: 'views/places'
                }
            }).subscribe(function (res) {
                if (!res || res == null)
                    return;
                var _a = res.sections, 
                /* eslint-disable */
                bibData = _a["collection-bibliography"], placesData = _a["collection-places"], witnessData = _a["collection-witnesses"], worksData = _a["collection-works"], gallery = _a.gallery, header = _a.header;
                if (placesData) {
                    // this.hasMap = true;
                    _this.one('mr-map').update(placesData);
                }
                else {
                    // this.hasMap = false;
                }
                if (bibData) {
                    _this.bibliographyData = bibData;
                }
                else {
                    _this.bibliographyData = undefined;
                }
                if (witnessData) {
                    _this.collectionWitnessData = {
                        items: witnessData.items.map(function (witness) { return ({
                            title: witness.title,
                            anchor: {
                                href: witness.link,
                            }
                        }); }),
                        header: witnessData.header
                    };
                }
                else {
                    _this.collectionWitnessData = undefined;
                }
                if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                    _this.collectionWorksData = {
                        header: worksData.header,
                        items: worksData.items.map(function (item) { return ({
                            image: item.image,
                            title: item.title,
                            anchor: item.link ? {
                                href: item.link,
                            } : undefined,
                            text: item.text,
                        }); })
                    };
                }
                else {
                    _this.collectionWorksData = undefined;
                }
                if (gallery) {
                    _this.collectionGalleryData = gallery;
                }
                else {
                    _this.collectionGalleryData = undefined;
                }
                if (header) {
                    _this.eventDescription = header.content;
                    _this.eventHeader = res.title;
                    _this.one('mr-year-header').update({
                        title: { main: { text: res.title } },
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
                _this.loading.resourceDetails = false;
            });
        };
        return MrMapLayoutDS;
    }(core$1.LayoutDataSource));

    var MrMapLayoutEH = /** @class */ (function (_super) {
        __extends(MrMapLayoutEH, _super);
        function MrMapLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrMapLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-map-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this.location = payload.location;
                        _this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
                        // listen for clicks on the map markers
                        _this.dataSource.mapListener$
                            .subscribe(function (_a) {
                            var markers = _a.markers;
                            markers.on('click', function (_a) {
                                var marker = _a.layer;
                                if (!marker.id)
                                    return;
                                var isSelected = marker.getIcon().options.className.includes('selected');
                                if (isSelected) {
                                    // navigate to the clicked resource / marker
                                    _this.location.go("/map/" + marker.id + "/" + marker.slug);
                                    _this.dataSource.updatePageDetails(marker.id);
                                }
                                else {
                                    _this.location.go('/map/');
                                    _this.dataSource.loadDefaults();
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
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case 'mr-year-header.closeevent':
                        _this.dataSource.loadDefaults(true);
                        break;
                    default:
                        break;
                }
            });
        };
        MrMapLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.paramMap.subscribe(function (params) {
                var paramId = params.get('id');
                if (paramId) {
                    _this.dataSource.currentId = paramId;
                    _this.emitOuter('routechanged', paramId);
                    _this.dataSource.updatePageDetails(paramId);
                }
                else {
                    _this.dataSource.loadDefaults(true);
                }
            });
        };
        return MrMapLayoutEH;
    }(core$1.EventHandler));

    var MrMapLayoutConfig = {
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

    var MrMapLayoutComponent = /** @class */ (function (_super) {
        __extends(MrMapLayoutComponent, _super);
        function MrMapLayoutComponent(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
            var _this = _super.call(this, layoutsConfiguration.get('MrMapLayoutConfig') || MrMapLayoutConfig) || this;
            _this.route = route;
            _this.router = router;
            _this.location = location;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.mainState = mainState;
            _this.layoutState = layoutState;
            return _this;
        }
        MrMapLayoutComponent.prototype.initPayload = function () {
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
        };
        MrMapLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (data) {
                _this.configId = data.configId;
                _this.layoutState.add('content');
                _this.onInit();
            });
        };
        MrMapLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrMapLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: common.Location },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: MrLayoutStateService }
        ]; };
        MrMapLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-map-layout',
                template: "<div class=\"mr-map-layout mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-map-layout__map\">\r\n        <div class=\"mr-map-layout__map-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n        <!-- <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline> -->\r\n    </div>\r\n\r\n    <div class=\"mr-map-layout__page mr-side-margin\">\r\n        <div class=\"mr-map-layout__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <!--\r\n        <h1 class=\"mr-map-layout__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        -->\r\n        <div class=\"mr-map-layout__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\" *ngIf=\"lb.dataSource.eventDescription\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-map-layout__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.ActivatedRoute,
                router.Router,
                common.Location,
                ConfigurationService,
                CommunicationService,
                MainStateService,
                MrLayoutStateService])
        ], MrMapLayoutComponent);
        return MrMapLayoutComponent;
    }(AbstractLayout));

    var MrPostsLayoutDS = /** @class */ (function (_super) {
        __extends(MrPostsLayoutDS, _super);
        function MrPostsLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrPostsLayoutDS.prototype.onInit = function (payload) {
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
        };
        MrPostsLayoutDS.prototype.updateSearchTags = function (params) {
            if (!this.pageConfig.filters) {
                return;
            }
            var labels = this.pageConfig.filters.labels;
            var tags = [];
            Object.keys(labels)
                .filter(function (key) { return !!params[key]; })
                .forEach(function (key) {
                tags[key] = params[key];
            });
            this.one('mr-advanced-search-tags').updateOptions({ labels: labels });
            this.one('mr-advanced-search-tags').update(tags);
        };
        MrPostsLayoutDS.prototype.request$ = function (params, onError) {
            var searchId = this.pageConfig.searchId;
            var searchParams = __assign({}, params);
            Object.keys(searchParams)
                .filter(function (key) { return ['page', 'limit', 'sort'].includes(key); })
                .forEach(function (key) {
                searchParams.results = searchParams.results || {};
                searchParams.results[key] = searchParams[key];
                delete searchParams[key];
            });
            // normalize results filters
            var resultsParams = {};
            var results = searchParams.results || {};
            var page = results.page ? +results.page : 1;
            resultsParams.limit = results.limit ? +results.limit : 12;
            resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
            resultsParams.sort = results.sort || 'sort_ASC';
            return this.communication.request$('posts', {
                method: 'POST',
                params: __assign(__assign({}, searchParams), { searchId: searchId, results: __assign({}, resultsParams) }),
                onError: onError
            });
        };
        MrPostsLayoutDS.prototype.handleResponse = function (response) {
            this.some([
                'mr-search-results-title',
                'mr-search-results',
            ]).update(response);
            // pagination
            this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
            this.one('n7-smart-pagination').update(this.getPaginationParams(response));
        };
        MrPostsLayoutDS.prototype.updateHeadTitle = function () {
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle)].join(' > '));
        };
        MrPostsLayoutDS.prototype.addTranslations = function (config) {
            var _a;
            if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
                config.sort.label = core$1._t(config.sort.label);
                config.sort.options = config.sort.options.map(function (option) { return (__assign(__assign({}, option), { label: core$1._t(option.label) })); });
            }
            ['text', 'button'].forEach(function (key) {
                if (config.fallback) {
                    config.fallback[key] = core$1._t(config.fallback[key]);
                }
                if (config.ko) {
                    config.ko[key] = core$1._t(config.ko[key]);
                }
            });
            // filters
            var filters = this.pageConfig.filters;
            if (filters) {
                filters.title = core$1._t(filters.title);
                Object.keys(filters.labels).forEach(function (key) {
                    filters.labels[key] = core$1._t(filters.labels[key]);
                });
            }
        };
        MrPostsLayoutDS.prototype.getPaginationParams = function (response) {
            var totalCount = response.total_count, offset = response.offset, limit = response.limit;
            var paginationConfig = this.pageConfig.pagination;
            return {
                totalPages: Math.ceil(totalCount / limit),
                currentPage: (offset + limit) / limit,
                pageLimit: paginationConfig.limit,
                sizes: {
                    label: paginationConfig.selectLabel ? core$1._t(paginationConfig.selectLabel) : null,
                    list: paginationConfig.options,
                    active: limit,
                },
            };
        };
        return MrPostsLayoutDS;
    }(core$1.LayoutDataSource));

    var MrPostsLayoutEH = /** @class */ (function (_super) {
        __extends(MrPostsLayoutEH, _super);
        function MrPostsLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrPostsLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-posts-layout.init':
                        _this.activatedRoute = payload.activatedRoute;
                        _this.router = payload.router;
                        _this.layoutState = payload.layoutState;
                        _this.dataSource.onInit(payload);
                        // listen route changes
                        _this.listenToRouterChanges();
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'mr-posts-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'n7-smart-pagination.click':
                        _this.updateRouter({ page: payload.page });
                        break;
                    case 'n7-smart-pagination.change':
                        _this.updateRouter({ limit: payload.value, page: 1 });
                        break;
                    case 'mr-search-results-title.change':
                        _this.updateRouter({ sort: payload.value, page: 1 });
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        /** URL changes */
        MrPostsLayoutEH.prototype.listenToRouterChanges = function () {
            var _this = this;
            this.activatedRoute.queryParams.pipe(operators.takeUntil(this.destroy$), operators.tap(function () {
                _this.layoutState.set('results', LayoutState.LOADING);
            }), operators.switchMap(function (params) {
                _this.dataSource.updateSearchTags(params);
                return _this.dataSource.request$(params, function (error) {
                    console.warn('Posts search error', error);
                    _this.layoutState.set('results', LayoutState.ERROR);
                });
            })).subscribe(function (response) {
                _this.dataSource.handleResponse(response);
                _this.layoutState.set('results', lodash.isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
                // scroll to ref element
                if (!_this.scrollRefElement) {
                    _this.scrollRefElement = document.querySelector('.scroll-ref');
                }
                else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                    _this.scrollRefElement.scrollIntoView();
                }
            });
        };
        MrPostsLayoutEH.prototype.updateRouter = function (queryParams) {
            this.router.navigate([], {
                queryParams: queryParams,
                queryParamsHandling: 'merge'
            });
        };
        return MrPostsLayoutEH;
    }(core$1.EventHandler));

    var MrPostsLayoutConfig = {
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

    var MrPostsLayoutComponent = /** @class */ (function (_super) {
        __extends(MrPostsLayoutComponent, _super);
        function MrPostsLayoutComponent(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
            var _this = _super.call(this, layoutsConfiguration.get('MrPostsLayoutConfig') || MrPostsLayoutConfig) || this;
            _this.router = router;
            _this.activatedRoute = activatedRoute;
            _this.mainState = mainState;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.layoutState = layoutState;
            return _this;
        }
        MrPostsLayoutComponent.prototype.initPayload = function () {
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
        };
        MrPostsLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.configId = data.configId;
                // add layout states
                _this.layoutState.add(['results']);
                _this.onInit();
            });
        };
        MrPostsLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrPostsLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: MainStateService },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MrLayoutStateService },
            { type: LayoutsConfigurationService }
        ]; };
        MrPostsLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-posts-layout',
                template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                MainStateService,
                ConfigurationService,
                CommunicationService,
                MrLayoutStateService,
                LayoutsConfigurationService])
        ], MrPostsLayoutComponent);
        return MrPostsLayoutComponent;
    }(AbstractLayout));

    var MrResourceLayoutDS = /** @class */ (function (_super) {
        __extends(MrResourceLayoutDS, _super);
        function MrResourceLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorTitle = core$1._t('global#layout_error_title');
            _this.errorDescription = core$1._t('global#layout_error_description');
            return _this;
        }
        MrResourceLayoutDS.prototype.onInit = function (payload) {
            var _this = this;
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.mainState = payload.mainState;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId);
            // tabs config
            var tabs = this.configuration.get('tabs');
            var pageTabs = this.pageConfig.tabs;
            if (tabs && pageTabs) {
                this.tabConfig = tabs[pageTabs];
            }
            // add translations
            ['top', 'content'].forEach(function (type) {
                _this.pageConfig.sections[type] = _this.pageConfig.sections[type].map(function (section) { return (__assign(__assign({}, section), { title: core$1._t(section.title) })); });
            });
        };
        /** Request the configured widgets data */
        MrResourceLayoutDS.prototype.pageRequest$ = function (id, onError) {
            var _a = this.pageConfig.sections, top = _a.top, content = _a.content;
            var sections = top.concat(content);
            return this.communication.request$('resource', {
                onError: onError,
                method: 'POST',
                params: {
                    id: id,
                    type: this.pageConfig.type,
                    sections: sections.map(function (s) { return s.id; }),
                }
            });
        };
        MrResourceLayoutDS.prototype.handleResponse = function (response) {
            this.initSections(response);
            this.updateHeadTitle(response);
        };
        /** Load all the configured widgets */
        MrResourceLayoutDS.prototype.initSections = function (response) {
            var _this = this;
            var _a = this.pageConfig.sections, top = _a.top, content = _a.content;
            var sections = top.concat(content);
            sections.forEach(function (_a) {
                var id = _a.id;
                var widgetDataSource = _this.getWidgetDataSource(id);
                if (!widgetDataSource)
                    return;
                var responseSection = response.sections[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseSection) {
                    _this.one(id).update(responseSection);
                }
            });
            // update tabs
            if (this.tabConfig) {
                var tabSection = sections.find(function (_a) {
                    var type = _a.type;
                    return type === 'tabs';
                });
                this.one(tabSection.id).updateOptions({
                    id: this.id,
                    root: this.pageConfig.tabs,
                    slug: this.slug,
                    currentTab: this.tab
                });
                this.one(tabSection.id).update(this.tabConfig);
            }
        };
        MrResourceLayoutDS.prototype.updateHeadTitle = function (_a) {
            var resourceTitle = _a.title;
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle), resourceTitle].join(' > '));
        };
        return MrResourceLayoutDS;
    }(core$1.LayoutDataSource));

    var MrResourceLayoutEH = /** @class */ (function (_super) {
        __extends(MrResourceLayoutEH, _super);
        function MrResourceLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrResourceLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-resource-layout.init':
                        {
                            _this.route = payload.route;
                            _this.router = payload.router;
                            _this.modalService = payload.modalService;
                            var _b = _this.route.snapshot.params, slug = _b.slug, id = _b.id;
                            var url = _this.route.snapshot.url;
                            _this.dataSource.tab = url[url.length - 1].path;
                            _this.dataSource.slug = slug;
                            _this.dataSource.id = id;
                            _this.layoutState = payload.layoutState;
                            _this.dataSource.onInit(payload);
                            _this.listenRoute();
                            // scroll top
                            window.scrollTo(0, 0);
                        }
                        break;
                    case 'mr-resource-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type.indexOf('openresourcemodal') !== -1) {
                    var id = payload.id, resourceType = payload.type;
                    _this.modalService.open(id, resourceType);
                }
            });
        };
        MrResourceLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.paramMap.pipe(operators.takeUntil(this.destroy$), operators.tap(function () {
                _this.layoutState.set('content', LayoutState.LOADING);
            }), operators.map(function (params) { return params.get('id'); }), operators.switchMap(function (id) { return _this.dataSource.pageRequest$(id, function (err) {
                if (err.status === 404) {
                    // getting not found path
                    var config = _this.router.config;
                    var route404 = config.find(function (_a) {
                        var data = _a.data;
                        return (data === null || data === void 0 ? void 0 : data.id) === 'page-404';
                    });
                    var path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                    _this.router.navigate([path404]);
                }
                console.warn("Error loading resource layout for " + id, err.message);
                _this.dataSource.id = id;
                _this.layoutState.set('content', LayoutState.ERROR);
            }); })).subscribe(function (response) {
                _this.layoutState.set('content', LayoutState.SUCCESS);
                _this.dataSource.handleResponse(response);
                // scroll top
                window.scrollTo(0, 0);
            });
        };
        return MrResourceLayoutEH;
    }(core$1.EventHandler));

    var MrResourceLayoutConfig = {
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

    var MrImageViewerEH = /** @class */ (function (_super) {
        __extends(MrImageViewerEH, _super);
        function MrImageViewerEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrImageViewerEH.prototype.listen = function () {
            // this.innerEvents$.subscribe(({ type, payload }) => {
            //   switch (type) {
            //     case `${this.dataSource.id}.<event-type>`:
            //       // TODO
            //       break;
            //     default:
            //       break;
            //   }
            // });
        };
        return MrImageViewerEH;
    }(core$1.EventHandler));

    var DATASOURCE_MAP$2 = {
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
    var EVENTHANDLER_MAP$2 = {
        viewer: MrImageViewerEH,
        collection: MrCollectionEH,
    };
    var MrResourceLayoutComponent = /** @class */ (function (_super) {
        __extends(MrResourceLayoutComponent, _super);
        function MrResourceLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
            var _this = _super.call(this, layoutsConfiguration.get('MrResourceLayoutConfig') || MrResourceLayoutConfig) || this;
            _this.activatedRoute = activatedRoute;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.mainState = mainState;
            _this.route = route;
            _this.router = router;
            _this.layoutState = layoutState;
            _this.modalService = modalService;
            return _this;
        }
        MrResourceLayoutComponent.prototype.initPayload = function () {
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
        };
        MrResourceLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.layoutState.add('content');
                _this.configId = data.configId;
                _this.loadWidgets();
                _this.onInit();
            });
        };
        MrResourceLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrResourceLayoutComponent.prototype.loadWidgets = function () {
            var _this = this;
            var _a = this.configuration.get(this.configId).sections, top = _a.top, content = _a.content;
            var sections = top.concat(content);
            this.widgets = [];
            if (sections) {
                sections.forEach(function (_a) {
                    var id = _a.id, type = _a.type, options = _a.options;
                    _this.widgets.push({
                        id: id,
                        options: options,
                        dataSource: DATASOURCE_MAP$2[type],
                        eventHandler: EVENTHANDLER_MAP$2[type]
                    });
                });
            }
        };
        MrResourceLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: MrLayoutStateService },
            { type: MrResourceModalService }
        ]; };
        MrResourceLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-resource-layout',
                template: "<div class=\"mr-resource mr-layout\" \r\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- RESOURCE LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\r\n                <!-- Pass the list of blocks to render to the block template -->\r\n                <div class=\"mr-resource__top\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                </div>\r\n                <div class=\"mr-resource__content mr-side-margin\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\r\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n    \r\n                <!-- TABS -->\r\n                <ng-container *ngSwitchCase=\"'tabs'\">\r\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\r\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\r\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\r\n                        </n7-anchor-wrapper>\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <div class=\"mr-resource__title-content mr-side-margin\">\r\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-inner-title>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- IMAGE VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'viewer'\">\r\n                    <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\r\n                    </n7-image-viewer>\r\n                </ng-container>\r\n    \r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    \r\n                    <div class=\"mr-content-block mr-content-block-metadata\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-read-more [data]=\"section.readmore\">\r\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                                    [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-metadata-viewer>\r\n                            </mr-read-more>\r\n                        </div>\r\n                    </div>\r\n\r\n                </ng-container>\r\n    \r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\r\n                        \r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <div class=\"mr-content-block mr-content-block-item-preview\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \r\n                            </n7-item-preview>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- TEXT VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\r\n                  <div class=\"mr-content-block mr-content-block-text-viewer\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                          <n7-text-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\r\n                          </n7-text-viewer>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </ng-container>\r\n    \r\n                <!-- INFO BOX -->\r\n                <ng-container *ngSwitchCase=\"'info-box'\">\r\n                    <div class=\"mr-content-block mr-content-block-info-box\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <div class=\"info-box__mock\">info-box</div>    \r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- BREADCRUMBS -->\r\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\r\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\r\n                    </n7-breadcrumbs>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.ActivatedRoute,
                ConfigurationService,
                CommunicationService,
                MainStateService,
                router.ActivatedRoute,
                router.Router,
                MrLayoutStateService,
                MrResourceModalService])
        ], MrResourceLayoutComponent);
        return MrResourceLayoutComponent;
    }(AbstractLayout));

    var SearchFacetsLayoutDS = /** @class */ (function (_super) {
        __extends(SearchFacetsLayoutDS, _super);
        function SearchFacetsLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.inputsDS = {};
            return _this;
        }
        SearchFacetsLayoutDS.prototype.onInit = function (payload) {
            this.searchService = payload.searchService;
            this.searchConfig = this.searchService.getConfig();
            this.facets = this.searchConfig.facets;
            this.initInputs();
        };
        SearchFacetsLayoutDS.prototype.initInputs = function () {
            var _this = this;
            // set components data
            this.facets.sections.forEach(function (_a) {
                var header = _a.header, inputs = _a.inputs;
                __spread([header], inputs).filter(function (input) { return input; })
                    .forEach(function (input) {
                    // set id
                    var widgetDataSource = _this.getWidgetDataSource(input.id);
                    widgetDataSource.id = input.id;
                    // caching DS for next updates
                    _this.inputsDS[input.id] = widgetDataSource;
                    // first update
                    widgetDataSource.update(input.data);
                });
            });
        };
        SearchFacetsLayoutDS.prototype.updateInputValue = function (id, newValue) {
            var ds = this.inputsDS[id];
            ds.setValue(newValue, ds.value !== newValue);
        };
        SearchFacetsLayoutDS.prototype.updateInputData = function (id, newData) {
            var ds = this.inputsDS[id];
            ds.update(__assign(__assign({}, ds.input), newData));
            // refresh selected
            ds.setValue(ds.value, true);
        };
        SearchFacetsLayoutDS.prototype.clearInput = function (id) {
            var ds = this.inputsDS[id];
            ds.clear();
            ds.setValue(ds.value, true);
        };
        SearchFacetsLayoutDS.prototype.clearInputs = function () {
            var _this = this;
            Object.keys(this.inputsDS).forEach(function (id) {
                _this.clearInput(id);
            });
        };
        return SearchFacetsLayoutDS;
    }(core$1.LayoutDataSource));

    var SearchFacetsLayoutEH = /** @class */ (function (_super) {
        __extends(SearchFacetsLayoutEH, _super);
        function SearchFacetsLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changed$ = {};
            _this.destroyed$ = new rxjs.Subject();
            return _this;
        }
        SearchFacetsLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-facets-layout.init':
                        _this.searchService = payload.searchService;
                        // listeners
                        _this.initChangedListener(_this.searchService.getConfig());
                        _this.initStateListener();
                        // init
                        _this.dataSource.onInit(payload);
                        break;
                    case 'mr-search-facets-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    default:
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                if (type.indexOf('change')) {
                    _this.changed$[payload.id].next(payload);
                }
            });
        };
        SearchFacetsLayoutEH.prototype.initChangedListener = function (_a) {
            var _this = this;
            var facets = _a.facets;
            facets.sections.forEach(function (section) {
                var sources = [];
                if (section.header) {
                    var _a = section.header, id = _a.id, delay = _a.delay;
                    sources.push({ id: id, delay: delay });
                }
                section.inputs.forEach(function (_a) {
                    var id = _a.id, delay = _a.delay;
                    sources.push({ id: id, delay: delay });
                });
                sources.forEach(function (source) {
                    _this.changed$[source.id] = new rxjs.Subject();
                    _this.changed$[source.id].pipe(operators.debounceTime(source.delay || 1)).subscribe(function (_a) {
                        var id = _a.id, value = _a.value;
                        _this.searchService.setState(INPUT_STATE_CONTEXT, id, value);
                    });
                });
            });
        };
        SearchFacetsLayoutEH.prototype.initStateListener = function () {
            var _this = this;
            // listener for input updates
            this.searchService.getState$(INPUT_STATE_CONTEXT)
                .pipe(operators.takeUntil(this.destroyed$), operators.filter(function (_a) {
                var lastUpdated = _a.lastUpdated;
                return _this.dataSource.inputsDS[lastUpdated];
            })).subscribe(function (_a) {
                var lastUpdated = _a.lastUpdated, state = _a.state;
                var newValue = state[lastUpdated];
                if (newValue === null) {
                    _this.dataSource.clearInput(lastUpdated);
                }
                else {
                    _this.dataSource.updateInputValue(lastUpdated, newValue);
                }
            });
            // listener for facet updates
            this.searchService.getState$(FACET_STATE_CONTEXT)
                .pipe(operators.takeUntil(this.destroyed$), operators.filter(function (_a) {
                var lastUpdated = _a.lastUpdated;
                return _this.dataSource.inputsDS[lastUpdated];
            })).subscribe(function (_a) {
                var lastUpdated = _a.lastUpdated, state = _a.state;
                var newData = state[lastUpdated];
                _this.dataSource.updateInputData(lastUpdated, newData);
            });
            // listener for facet header updates
            this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
                .pipe(operators.takeUntil(this.destroyed$)).subscribe(function (response) {
                var facets = response.facets;
                Object.keys(facets).forEach(function (id) {
                    var totalCount = facets[id].total_count;
                    _this.dataSource.updateInputValue("header-" + id, totalCount);
                });
            });
        };
        return SearchFacetsLayoutEH;
    }(core$1.EventHandler));

    var SearchFacetsLayoutConfig = {
        layoutId: 'mr-search-facets-layout',
        widgets: [],
        layoutDS: SearchFacetsLayoutDS,
        layoutEH: SearchFacetsLayoutEH,
        widgetsDataSources: DS$3,
        widgetsEventHandlers: EH$3,
        layoutOptions: {}
    };

    var FacetTextDS = /** @class */ (function (_super) {
        __extends(FacetTextDS, _super);
        function FacetTextDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetTextDS.prototype.transform = function (data) {
            return __assign(__assign({}, data), { placeholder: core$1._t(data.placeholder) });
        };
        FacetTextDS.prototype.setValue = function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                this.update(__assign(__assign({}, this.input), { value: value }));
                // fix element update
                var el = document.getElementById(this.output.id);
                if (el) {
                    el.value = value;
                }
            }
        };
        FacetTextDS.prototype.clear = function () {
            this.value = null;
        };
        return FacetTextDS;
    }(core$1.DataSource));

    var FacetCheckboxDS = /** @class */ (function (_super) {
        __extends(FacetCheckboxDS, _super);
        function FacetCheckboxDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = [];
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetCheckboxDS.prototype.transform = function (data) {
            return data;
        };
        FacetCheckboxDS.prototype.setValue = function (value, update) {
            var _this = this;
            if (update === void 0) { update = false; }
            this.value = Array.isArray(value) ? value : [value];
            if (update) {
                var checkboxes = this.input.checkboxes;
                var updatedCheckboxes = checkboxes.map(function (checkbox) { return (__assign(__assign({}, checkbox), { checked: _this.value.indexOf(checkbox.payload) !== -1 })); });
                this.update(__assign(__assign({}, this.input), { checkboxes: updatedCheckboxes }));
            }
        };
        FacetCheckboxDS.prototype.toggleValue = function (_a) {
            var inputPayload = _a.inputPayload, isChecked = _a.value;
            var exists = this.value.indexOf(inputPayload) !== -1;
            if (isChecked && !exists) {
                this.value.push(inputPayload);
            }
            else if (!isChecked && exists) {
                this.value.splice(this.value.indexOf(inputPayload), 1);
            }
        };
        FacetCheckboxDS.prototype.clear = function () {
            this.value = [];
        };
        return FacetCheckboxDS;
    }(core$1.DataSource));

    var FacetSelectDS = /** @class */ (function (_super) {
        __extends(FacetSelectDS, _super);
        function FacetSelectDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetSelectDS.prototype.transform = function (data) {
            return data;
        };
        FacetSelectDS.prototype.setValue = function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                var options = this.input.options;
                var updatedOptions = options.map(function (option) { return (__assign(__assign({}, option), { selected: value === option.value })); });
                this.update(__assign(__assign({}, this.input), { options: updatedOptions }));
            }
        };
        FacetSelectDS.prototype.clear = function () {
            this.value = null;
        };
        return FacetSelectDS;
    }(core$1.DataSource));

    var ACTIVE_CLASS$1 = 'is-active';
    var FacetLinkDS = /** @class */ (function (_super) {
        __extends(FacetLinkDS, _super);
        function FacetLinkDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = null;
            _this.isUpdate = false;
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetLinkDS.prototype.transform = function (data) {
            var links = data.links;
            // empty state check
            if (this.isUpdate && !links.length) {
                return {
                    links: [{
                            text: core$1._t('global#facet_empty_text'),
                            classes: 'empty-text-link',
                            payload: null,
                        }]
                };
            }
            return data;
        };
        FacetLinkDS.prototype.setValue = function (value, update) {
            var _this = this;
            if (update === void 0) { update = false; }
            this.value = value;
            this.isUpdate = update;
            if (update) {
                var links = this.input.links;
                var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value === link.payload ? ACTIVE_CLASS$1 : '' })); });
                this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
            }
        };
        FacetLinkDS.prototype.toggleValue = function (linkValue) {
            // update
            this.setValue(this.value !== linkValue ? linkValue : null, true);
        };
        FacetLinkDS.prototype.clear = function () {
            this.value = null;
        };
        return FacetLinkDS;
    }(core$1.DataSource));

    var ICON_OPEN$1 = 'n7-icon-angle-up';
    var ICON_CLOSE$1 = 'n7-icon-angle-down';
    var FacetHeaderDS = /** @class */ (function (_super) {
        __extends(FacetHeaderDS, _super);
        function FacetHeaderDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetHeaderDS.prototype.transform = function (data) {
            return __assign(__assign({}, data), { text: core$1._t(data.text), iconRight: data.iconRight || ICON_OPEN$1 });
        };
        FacetHeaderDS.prototype.setValue = function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                this.update(__assign(__assign({}, this.input), { additionalText: value }));
            }
        };
        FacetHeaderDS.prototype.toggle = function () {
            var iconRight = this.output.iconRight;
            iconRight = iconRight === ICON_OPEN$1 ? ICON_CLOSE$1 : ICON_OPEN$1;
            this.update(__assign(__assign({}, this.input), { iconRight: iconRight }));
        };
        FacetHeaderDS.prototype.isOpen = function () {
            return this.output.iconRight === ICON_OPEN$1;
        };
        FacetHeaderDS.prototype.clear = function () {
            this.value = null;
        };
        return FacetHeaderDS;
    }(core$1.DataSource));

    var FacetHeaderEH = /** @class */ (function (_super) {
        __extends(FacetHeaderEH, _super);
        function FacetHeaderEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetHeaderEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case _this.dataSource.id + ".click":
                        _this.dataSource.toggle();
                        _this.emitOuter('change', {
                            isOpen: _this.dataSource.isOpen(),
                            id: _this.dataSource.id,
                            value: _this.dataSource.value
                        });
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetHeaderEH;
    }(core$1.EventHandler));

    var FacetTextEH = /** @class */ (function (_super) {
        __extends(FacetTextEH, _super);
        function FacetTextEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetTextEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change":
                        if (typeof payload.value === 'string') {
                            payload.value = payload.value.trim();
                        }
                        _this.dataSource.setValue(payload.value);
                        _this.emitOuter('change', __assign(__assign({}, payload), { id: _this.dataSource.id }));
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetTextEH;
    }(core$1.EventHandler));

    var FacetCheckboxEH = /** @class */ (function (_super) {
        __extends(FacetCheckboxEH, _super);
        function FacetCheckboxEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetCheckboxEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change":
                        _this.dataSource.toggleValue(payload);
                        _this.emitOuter('change', {
                            value: _this.dataSource.getValue(),
                            id: _this.dataSource.id
                        });
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetCheckboxEH;
    }(core$1.EventHandler));

    var FacetSelectEH = /** @class */ (function (_super) {
        __extends(FacetSelectEH, _super);
        function FacetSelectEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetSelectEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change":
                        _this.dataSource.setValue(payload.value);
                        _this.emitOuter('change', __assign(__assign({}, payload), { id: _this.dataSource.id }));
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetSelectEH;
    }(core$1.EventHandler));

    var FacetLinkEH = /** @class */ (function (_super) {
        __extends(FacetLinkEH, _super);
        function FacetLinkEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetLinkEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change":
                        if (payload) {
                            _this.dataSource.toggleValue(payload);
                            _this.emitOuter('change', {
                                value: _this.dataSource.getValue(),
                                id: _this.dataSource.id
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetLinkEH;
    }(core$1.EventHandler));

    var ACTIVE_CLASS$2 = 'is-active';
    var FacetLinkMultipleDS = /** @class */ (function (_super) {
        __extends(FacetLinkMultipleDS, _super);
        function FacetLinkMultipleDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = [];
            _this.isUpdate = false;
            _this.getValue = function () { return _this.value; };
            return _this;
        }
        FacetLinkMultipleDS.prototype.transform = function (data) {
            var links = data.links;
            // empty state check
            if (this.isUpdate && !links.length) {
                return {
                    links: [{
                            text: core$1._t('global#facet_empty_text'),
                            classes: 'empty-text-link',
                            payload: null,
                        }]
                };
            }
            return data;
        };
        FacetLinkMultipleDS.prototype.setValue = function (value, update) {
            var _this = this;
            if (update === void 0) { update = false; }
            this.value = value;
            this.isUpdate = update;
            if (update) {
                var links = this.input.links;
                var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value.includes(link.payload) ? ACTIVE_CLASS$2 : '' })); });
                this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
            }
        };
        FacetLinkMultipleDS.prototype.toggleValue = function (linkValue) {
            var exists = this.value.includes(linkValue);
            if (!exists) {
                this.value.push(linkValue);
            }
            else if (exists) {
                this.value.splice(this.value.indexOf(linkValue), 1);
            }
            // update
            this.setValue(this.value, true);
        };
        FacetLinkMultipleDS.prototype.clear = function () {
            this.value = [];
        };
        return FacetLinkMultipleDS;
    }(core$1.DataSource));

    var FacetLinkMultipleEH = /** @class */ (function (_super) {
        __extends(FacetLinkMultipleEH, _super);
        function FacetLinkMultipleEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FacetLinkMultipleEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case _this.dataSource.id + ".change":
                        if (payload) {
                            _this.dataSource.toggleValue(payload);
                            _this.emitOuter('change', {
                                value: _this.dataSource.getValue(),
                                id: _this.dataSource.id
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        return FacetLinkMultipleEH;
    }(core$1.EventHandler));

    var DATASOURCE_MAP$3 = {
        header: FacetHeaderDS,
        text: FacetTextDS,
        checkbox: FacetCheckboxDS,
        select: FacetSelectDS,
        link: FacetLinkDS,
        'link-multiple': FacetLinkMultipleDS,
    };
    var EVENTHANDLER_MAP$3 = {
        header: FacetHeaderEH,
        text: FacetTextEH,
        checkbox: FacetCheckboxEH,
        select: FacetSelectEH,
        link: FacetLinkEH,
        'link-multiple': FacetLinkMultipleEH,
    };
    var MrSearchFacetsLayoutComponent = /** @class */ (function (_super) {
        __extends(MrSearchFacetsLayoutComponent, _super);
        function MrSearchFacetsLayoutComponent() {
            return _super.call(this, SearchFacetsLayoutConfig) || this;
        }
        MrSearchFacetsLayoutComponent.prototype.initPayload = function () {
            return {
                searchService: this.searchService
            };
        };
        MrSearchFacetsLayoutComponent.prototype.ngOnInit = function () {
            this.loadWidgets();
            this.onInit();
        };
        MrSearchFacetsLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrSearchFacetsLayoutComponent.prototype.loadWidgets = function () {
            var _this = this;
            var facets = this.searchService.getConfig().facets;
            this.widgets = [];
            facets.sections.forEach(function (_a) {
                var header = _a.header, inputs = _a.inputs;
                if (header) {
                    _this.widgets.push({
                        id: header.id,
                        dataSource: DATASOURCE_MAP$3.header,
                        eventHandler: EVENTHANDLER_MAP$3.header
                    });
                }
                inputs.forEach(function (input) {
                    var inputType = input.type;
                    var multiple = input.schema.multiple;
                    // multiple control
                    if (multiple) {
                        inputType += '-multiple';
                    }
                    _this.widgets.push({
                        id: input.id,
                        dataSource: DATASOURCE_MAP$3[inputType],
                        eventHandler: EVENTHANDLER_MAP$3[inputType]
                    });
                });
            });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", MrSearchService)
        ], MrSearchFacetsLayoutComponent.prototype, "searchService", void 0);
        MrSearchFacetsLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-search-facets-layout',
                template: "<div *ngIf=\"lb.dataSource.facets\" class=\"mr-facets__facets-wrapper {{ lb.dataSource.facets.classes || '' }}\">\r\n    <div *ngFor=\"let section of lb.dataSource.facets.sections\" \r\n    class=\"mr-facets__single-facet {{ section.classes || '' }}\"\r\n    [ngClass]=\"lb.dataSource.searchService.getState$('section', section.id) | async\">\r\n        <n7-facet-header\r\n        *ngIf=\"section.header\"\r\n        [data]=\"lb.widgets[section.header.id].ds.out$ | async\"\r\n        [emit]=\"lb.widgets[section.header.id].emit\"\r\n        ></n7-facet-header>\r\n\r\n        <div [hidden]=\"section.header && !lb.widgets[section.header.id].ds.isOpen()\" class=\"mr-facets__single-facet-content\">\r\n            <div *ngFor=\"let input of section.inputs\" \r\n            [attr.id]=\"'facet-container-' + input.id\"\r\n            class=\"mr-facets__single-facet-inner-content {{ input.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n    \r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text \r\n                    *ngSwitchCase=\"'text'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\r\n    \r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox \r\n                    *ngSwitchCase=\"'checkbox'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\r\n                    \r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select \r\n                    *ngSwitchCase=\"'select'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\r\n                    \r\n                    <!-- INPUT LINK -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'link'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n\r\n                    <!-- INPUT LINKMULTI -->\r\n                    <n7-input-link \r\n                    *ngSwitchCase=\"'linkMulti'\"\r\n                    [data]=\"lb.widgets[input.id].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\r\n                \r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
            }),
            __metadata("design:paramtypes", [])
        ], MrSearchFacetsLayoutComponent);
        return MrSearchFacetsLayoutComponent;
    }(AbstractLayout));

    var localStorageHelper = {
        set: function (key, value) {
            localStorage.setItem(key, value);
        },
        get: function (key) {
            return localStorage.getItem(key);
        },
        remove: function (key) {
            localStorage.removeItem(key);
        },
        toggle: function (key, value) {
            if (!this.get(key)) {
                this.set(key, value);
            }
            else {
                this.remove(key);
            }
        }
    };

    var MrSearchLayoutDS = /** @class */ (function (_super) {
        __extends(MrSearchLayoutDS, _super);
        function MrSearchLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.totalResultsText = null;
            _this.descriptionLoaded = false;
            _this.showDescription = false;
            return _this;
        }
        MrSearchLayoutDS.prototype.onInit = function (payload) {
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.mainState = payload.mainState;
            this.searchService = payload.searchService;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId);
            this.hideDescriptionKey = "hide-description-" + this.configId;
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
        };
        MrSearchLayoutDS.prototype.handleResponse = function (response) {
            this.some([
                'mr-search-results-title',
                'mr-search-results',
            ]).update(response);
            // pagination
            this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
            this.one('n7-smart-pagination').update(this.getPaginationParams(response));
        };
        MrSearchLayoutDS.prototype.updateActiveFilters = function (state, linksResponse) {
            // active "tags" filters
            this.one('mr-search-tags').update({
                state: state,
                linksResponse: linksResponse,
                facetsConfig: this.searchService.getConfig().facets
            });
        };
        MrSearchLayoutDS.prototype.toggleDescription = function () {
            localStorageHelper.toggle(this.hideDescriptionKey, true);
            this.showDescription = !(localStorageHelper.get(this.hideDescriptionKey));
            if (this.showDescription && !this.descriptionLoaded) {
                this.getPageDescription();
            }
        };
        MrSearchLayoutDS.prototype.getPaginationParams = function (response) {
            var totalCount = response.total_count, offset = response.offset, limit = response.limit;
            var paginationConfig = this.pageConfig.pagination;
            return {
                totalPages: Math.ceil(totalCount / limit),
                currentPage: (offset + limit) / limit,
                pageLimit: paginationConfig.limit,
                sizes: {
                    label: paginationConfig.selectLabel ? core$1._t(paginationConfig.selectLabel) : null,
                    list: paginationConfig.options,
                    active: limit,
                },
            };
        };
        MrSearchLayoutDS.prototype.updateHeadTitle = function () {
            var appName = this.configuration.get('name');
            var pageTitle = this.pageConfig.title;
            this.mainState.update('headTitle', [appName, core$1._t(pageTitle)].join(' > '));
        };
        MrSearchLayoutDS.prototype.addTranslations = function (config) {
            var _a;
            if (config.facetsTitle) {
                config.facetsTitle = core$1._t(config.facetsTitle);
            }
            if (config.filtersTitle) {
                config.filtersTitle = core$1._t(config.filtersTitle);
            }
            if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
                config.sort.label = core$1._t(config.sort.label);
                config.sort.options = config.sort.options.map(function (option) { return (__assign(__assign({}, option), { label: core$1._t(option.label) })); });
            }
            ['text', 'button'].forEach(function (key) {
                if (config.fallback) {
                    config.fallback[key] = core$1._t(config.fallback[key]);
                }
                if (config.ko) {
                    config.ko[key] = core$1._t(config.ko[key]);
                }
            });
        };
        MrSearchLayoutDS.prototype.getPageDescription = function () {
            var _this = this;
            if (this.pageConfig.description && !localStorageHelper.get(this.hideDescriptionKey)) {
                var description = this.pageConfig.description;
                this.communication.request$('searchDescription', {
                    urlParams: description.id,
                }).subscribe(function (response) {
                    _this.one('mr-search-page-description').update(response);
                    _this.descriptionLoaded = true;
                    _this.showDescription = true;
                });
            }
        };
        return MrSearchLayoutDS;
    }(core$1.LayoutDataSource));

    var MrSearchLayoutEH = /** @class */ (function (_super) {
        __extends(MrSearchLayoutEH, _super);
        function MrSearchLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.searchState = {};
            return _this;
        }
        MrSearchLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-search-layout.init':
                        _this.searchService = payload.searchService;
                        _this.layoutState = payload.layoutState;
                        _this.modalService = payload.modalService;
                        _this.dataSource.onInit(payload);
                        // listeners
                        _this.initStateListener();
                        // scroll top
                        window.scrollTo(0, 0);
                        // reset scroll ref
                        _this.scrollRefElement = null;
                        break;
                    case 'mr-search-layout.destroy':
                        _this.searchService.destroy();
                        _this.destroyed$.next(true);
                        break;
                    case 'mr-search-layout.searchreset':
                        _this.searchService.reset();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'n7-smart-pagination.click':
                        _this.searchService.setState('input', 'page', payload.page);
                        break;
                    case 'n7-smart-pagination.change':
                        _this.searchService.setState('input', 'limit', payload.value);
                        break;
                    case 'mr-search-results-title.change':
                        _this.searchService.setState('input', 'sort', payload.value);
                        break;
                    case 'mr-search-page-description.click':
                    case 'mr-search-page-title.click':
                        _this.dataSource.toggleDescription();
                        break;
                    case 'mr-search-tags.click': {
                        var stateValue = _this.searchState[payload.id];
                        var newValue = null;
                        if (Array.isArray(stateValue)) {
                            newValue = stateValue.filter(function (value) { return value !== payload.value; });
                        }
                        _this.searchService.setState('input', payload.id, newValue);
                        break;
                    }
                    case 'mr-search-results.openresourcemodal': {
                        var id = payload.id, resourceType = payload.type;
                        _this.modalService.open(id, resourceType);
                        break;
                    }
                    default:
                        break;
                }
            });
        };
        MrSearchLayoutEH.prototype.initStateListener = function () {
            var _this = this;
            var _a;
            // default params
            var pageConfig = this.dataSource.pageConfig;
            var defaultLimit = pageConfig.pagination.options[0];
            var defaultSort = (_a = pageConfig.sort.options.find(function (option) { return option.selected === true; })) === null || _a === void 0 ? void 0 : _a.value;
            if (!defaultSort) {
                defaultSort = pageConfig.sort.options[0].value;
            }
            // inputs listener
            this.searchService.getState$(INPUT_STATE_CONTEXT).pipe(operators.filter(function (_a) {
                var lastUpdated = _a.lastUpdated;
                return _this.searchService.isQueryParamKey(lastUpdated);
            }), operators.takeUntil(this.destroyed$)).subscribe(function (_a) {
                var lastUpdated = _a.lastUpdated, state = _a.state;
                _this.searchState = state;
                if (lastUpdated !== 'page') {
                    _this.searchService.setState(INPUT_STATE_CONTEXT, 'page', 1);
                }
            });
            this.searchService.getState$(INPUT_STATE_CONTEXT, 'query').pipe(operators.takeUntil(this.destroyed$)).subscribe(function (val) {
                _this.emitOuter('inputquerychange', val);
                _this.searchService.setState(INPUT_STATE_CONTEXT, 'sort', val ? '_score' : 'sort_ASC');
            });
            this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').pipe(operators.takeUntil(this.destroyed$)).subscribe(function (response) {
                _this.linksResponse = response;
                _this.dataSource.updateActiveFilters(_this.searchState, _this.linksResponse);
                // update sections
                if (response) {
                    var facets_1 = response.facets;
                    Object.keys(facets_1).forEach(function (inputKey) {
                        var totalCount = facets_1[inputKey].total_count;
                        _this.searchService.setState(SECTION_STATE_CONTEXT, "section-" + inputKey, totalCount ? 'is-not-empty' : 'is-empty');
                    });
                }
            });
            this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').pipe(operators.takeUntil(this.destroyed$)).subscribe(function () {
                _this.layoutState.set('results', LayoutState.LOADING);
            });
            // results params hook
            this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', function (params) {
                if (params === void 0) { params = {}; }
                var results = {
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
                    .filter(function (key) { return ['sort', 'page', 'limit'].includes(key); })
                    .forEach(function (key) {
                    delete params[key];
                });
                return params;
            });
            // facets params hook
            this.searchService.setBeforeHook(FACETS_REQUEST_STATE_CONTEXT, 'loading', function (params) {
                if (params === void 0) { params = {}; }
                // clean up
                delete params.results;
                return params;
            });
            this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
                .subscribe(function (response) {
                _this.dataSource.handleResponse(response);
                // update layout state
                _this.layoutState.set('results', lodash.isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
                // scroll to ref element
                if (!_this.scrollRefElement) {
                    _this.scrollRefElement = document.querySelector('.scroll-ref');
                }
                else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                    _this.scrollRefElement.scrollIntoView();
                }
            });
            this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'error')
                .subscribe(function (error) {
                console.warn(RESULTS_REQUEST_STATE_CONTEXT, error);
                _this.layoutState.set('results', LayoutState.ERROR);
            });
        };
        return MrSearchLayoutEH;
    }(core$1.EventHandler));

    var MrSearchLayoutConfig = {
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

    var MrSearchLayoutComponent = /** @class */ (function (_super) {
        __extends(MrSearchLayoutComponent, _super);
        function MrSearchLayoutComponent(layoutsConfiguration, router, activatedRoute, communication, configuration, searchService, layoutState, mainState, modalService) {
            var _this = _super.call(this, layoutsConfiguration.get('MrSearchLayoutConfig') || MrSearchLayoutConfig) || this;
            _this.router = router;
            _this.activatedRoute = activatedRoute;
            _this.communication = communication;
            _this.configuration = configuration;
            _this.searchService = searchService;
            _this.layoutState = layoutState;
            _this.mainState = mainState;
            _this.modalService = modalService;
            return _this;
        }
        MrSearchLayoutComponent.prototype.initPayload = function () {
            return {
                configId: this.configId,
                configuration: this.configuration,
                mainState: this.mainState,
                router: this.router,
                activatedRoute: this.activatedRoute,
                communication: this.communication,
                searchService: this.searchService,
                layoutState: this.layoutState,
                modalService: this.modalService,
                options: this.config.options || {},
            };
        };
        MrSearchLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.configId = data.configId;
                var _a = _this.configuration.get(_this.configId), searchId = _a.searchId, searchConfig = _a.searchConfig;
                _this.searchService.init(searchId, searchConfig);
                // add layout states
                _this.layoutState.add(['results']);
                _this.onInit();
            });
        };
        MrSearchLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrSearchLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: CommunicationService },
            { type: ConfigurationService },
            { type: MrSearchService },
            { type: MrLayoutStateService },
            { type: MainStateService },
            { type: MrResourceModalService }
        ]; };
        MrSearchLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-search-layout',
                template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n\r\n        <div *ngIf=\"lb.dataSource.showDescription\" class=\"mr-search__description\">\r\n            <mr-search-page-description\r\n            [data]=\"lb.widgets['mr-search-page-description'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-description'].emit\">\r\n            </mr-search-page-description>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <aside class=\"mr-facets\">\r\n                <div class=\"scroll-ref\">&nbsp;</div>\r\n                <div class=\"mr-facets__contents\">\r\n                    <h2 class=\"mr-facets__title\" \r\n                        *ngIf=\"lb.dataSource.pageConfig['facetsTitle']\">\r\n                        {{ lb.dataSource.pageConfig['facetsTitle'] }}\r\n                    </h2>\r\n                    <mr-search-facets-layout \r\n                    [searchService]=\"lb.dataSource.searchService\">\r\n                    </mr-search-facets-layout>\r\n                </div>\r\n            </aside>\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                \r\n                <div *ngIf=\"(\r\n                    lb.dataSource.pageConfig['filtersTitle'] && \r\n                    lb.widgets['mr-search-tags'].ds.hasFilters\r\n                )\" \r\n                class=\"mr-active-filters\">\r\n                    <span class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filtersTitle'] }}</span>\r\n                    <div class=\"mr-active-filters__tags-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\r\n                        [data]=\"tag\"\r\n                        [emit]=\"lb.widgets['mr-search-tags'].emit\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.Router,
                router.ActivatedRoute,
                CommunicationService,
                ConfigurationService,
                MrSearchService,
                MrLayoutStateService,
                MainStateService,
                MrResourceModalService])
        ], MrSearchLayoutComponent);
        return MrSearchLayoutComponent;
    }(AbstractLayout));

    var MrStaticLayoutDS = /** @class */ (function (_super) {
        __extends(MrStaticLayoutDS, _super);
        function MrStaticLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorTitle = core$1._t('global#layout_error_title');
            _this.errorDescription = core$1._t('global#layout_error_description');
            return _this;
        }
        MrStaticLayoutDS.prototype.onInit = function (payload) {
            this.communication = payload.communication;
            this.configuration = payload.configuration;
            this.mainState = payload.mainState;
        };
        MrStaticLayoutDS.prototype.pageRequest$ = function (urlSegments, onError) {
            if (urlSegments.length > 1) {
                return this.communication.request$('post', {
                    onError: onError,
                    urlParams: urlSegments[1].path,
                });
            }
            return this.communication.request$('static', {
                onError: onError,
                urlParams: urlSegments[0].path,
            });
        };
        MrStaticLayoutDS.prototype.handleResponse = function (response) {
            this.setHtml(response);
            this.updateHeadTitle(response.title);
        };
        MrStaticLayoutDS.prototype.setHtml = function (response) {
            var content = response.content, title = response.title;
            this.title = title;
            this.content = content;
            this.one('mr-static-metadata').update(response);
        };
        MrStaticLayoutDS.prototype.updateHeadTitle = function (pageTitle) {
            var appName = this.configuration.get('name');
            this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
        };
        return MrStaticLayoutDS;
    }(core$1.LayoutDataSource));

    var MrStaticLayoutEH = /** @class */ (function (_super) {
        __extends(MrStaticLayoutEH, _super);
        function MrStaticLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MrStaticLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-static-layout.init':
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this.layoutState = payload.layoutState;
                        _this.dataSource.onInit(payload);
                        // listen route
                        _this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
                        break;
                    case 'mr-static-layout.destroy':
                        _this.destroy$.next();
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            });
        };
        MrStaticLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.url.pipe(operators.takeUntil(this.destroy$), operators.tap(function () {
                _this.layoutState.set('content', LayoutState.LOADING);
            }), operators.switchMap(function (urlSegments) { return _this.dataSource.pageRequest$(urlSegments, function (err) {
                if (err.status === 404) {
                    // getting not found path
                    var config = _this.router.config;
                    var route404 = config.find(function (_a) {
                        var data = _a.data;
                        return (data === null || data === void 0 ? void 0 : data.id) === 'page-404';
                    });
                    var path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                    _this.router.navigate([path404]);
                }
                console.warn("Error loading static layout for " + urlSegments, err.message);
                _this.layoutState.set('content', LayoutState.ERROR);
            }); })).subscribe(function (response) {
                _this.layoutState.set('content', LayoutState.SUCCESS);
                _this.dataSource.handleResponse(response);
            });
        };
        return MrStaticLayoutEH;
    }(core$1.EventHandler));

    var MrStaticLayoutConfig = {
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

    var MrStaticLayoutComponent = /** @class */ (function (_super) {
        __extends(MrStaticLayoutComponent, _super);
        function MrStaticLayoutComponent(communication, configuration, mainState, route, router, layoutState, layoutsConfiguration) {
            var _this = _super.call(this, layoutsConfiguration.get('MrStaticLayoutConfig') || MrStaticLayoutConfig) || this;
            _this.communication = communication;
            _this.configuration = configuration;
            _this.mainState = mainState;
            _this.route = route;
            _this.router = router;
            _this.layoutState = layoutState;
            return _this;
        }
        MrStaticLayoutComponent.prototype.initPayload = function () {
            return {
                communication: this.communication,
                configuration: this.configuration,
                mainState: this.mainState,
                layoutState: this.layoutState,
                route: this.route,
                router: this.router,
                options: this.config.options || {}
            };
        };
        MrStaticLayoutComponent.prototype.ngOnInit = function () {
            this.layoutState.add('content');
            this.onInit();
        };
        MrStaticLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrStaticLayoutComponent.ctorParameters = function () { return [
            { type: CommunicationService },
            { type: ConfigurationService },
            { type: MainStateService },
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: MrLayoutStateService },
            { type: LayoutsConfigurationService }
        ]; };
        MrStaticLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-static-layout',
                template: "<div class=\"mr-static mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- STATIC LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <div class=\"mr-static__top\">\r\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\r\n                <div class=\"mr-static__metadata\">\r\n                    <n7-metadata-viewer \r\n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"mr-static__content mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\r\n        </ng-container>\r\n    \r\n    </ng-container>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [CommunicationService,
                ConfigurationService,
                MainStateService,
                router.ActivatedRoute,
                router.Router,
                MrLayoutStateService,
                LayoutsConfigurationService])
        ], MrStaticLayoutComponent);
        return MrStaticLayoutComponent;
    }(AbstractLayout));

    // demo page: http://localhost:4200/timeline/2992/missione-venezia
    var MrTimelineLayoutDS = /** @class */ (function (_super) {
        __extends(MrTimelineLayoutDS, _super);
        function MrTimelineLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.loading = {
                resourceDetails: true,
                timeline: true,
            };
            _this.defaultDescription = '';
            _this.eventDescription = '';
            _this.hasMap = false;
            _this.mapHeader = core$1._t('timeline#mapheader');
            _this.timelineListener$ = new rxjs.Subject();
            return _this;
        }
        MrTimelineLayoutDS.prototype.onInit = function (payload) {
            var _this = this;
            this.configuration = payload.configuration;
            this.communication = payload.communication;
            this.route = payload.route;
            this.location = payload.location;
            this.configId = payload.configId;
            this.pageConfig = this.configuration.get(this.configId) || {};
            // update the timeline
            this.communication.request$('timeline', {
                method: 'GET',
                onError: function (e) { return console.error(e); }
            }).subscribe(function (d) {
                _this.timelineData = d;
                _this.loading.timeline = false;
                _this.one('mr-timeline').update(d);
            });
            this.getWidgetDataSource('mr-timeline').timelineLoaded$
                .pipe(operators.first())
                .subscribe(function (timeline) {
                _this.timelineListener$.next(timeline);
            });
            // update the description
            this.communication.request$('timelineDescription', {
                method: 'GET',
                onError: function (e) { return console.error(e); },
            }).subscribe(function (d) {
                _this.defaultDescription = d.text;
                _this.loadDefaults(false);
            });
        };
        MrTimelineLayoutDS.prototype.loadDefaults = function (navigate) {
            var timelineInstance = this.getWidgetDataSource('mr-timeline').timeline;
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
                title: { main: { text: core$1._t(this.pageConfig.title) } },
            });
        };
        MrTimelineLayoutDS.prototype.updatePageDetails = function (id) {
            var _this = this;
            this.communication.request$('resource', {
                onError: function (e) { return console.error(e); },
                method: 'POST',
                params: {
                    id: id, type: 'views/time-events'
                }
            }).subscribe(function (res) {
                if (!res || res == null)
                    return;
                var _a = res.sections, 
                /* eslint-disable */
                bibData = _a["collection-bibliography"], placesData = _a["collection-places"], witnessData = _a["collection-witnesses"], worksData = _a["collection-works"], gallery = _a.gallery, header = _a.header;
                if (placesData) {
                    _this.hasMap = true;
                    _this.one('mr-map').update(placesData);
                }
                else {
                    _this.hasMap = false;
                }
                if (bibData) {
                    _this.bibliographyData = bibData;
                }
                else {
                    _this.bibliographyData = undefined;
                }
                if (witnessData) {
                    _this.collectionWitnessData = {
                        items: witnessData.items.map(function (witness) { return ({
                            title: witness.title,
                            anchor: {
                                href: witness.link,
                            }
                        }); }),
                        header: witnessData.header
                    };
                }
                else {
                    _this.collectionWitnessData = undefined;
                }
                if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                    _this.collectionWorksData = {
                        header: worksData.header,
                        items: worksData.items.map(function (item) { return ({
                            image: item.image,
                            title: item.title,
                            anchor: item.link ? {
                                href: item.link,
                            } : undefined,
                            text: item.text,
                        }); })
                    };
                }
                else {
                    _this.collectionWorksData = undefined;
                }
                if (gallery) {
                    _this.collectionGalleryData = gallery;
                }
                else {
                    _this.collectionGalleryData = undefined;
                }
                if (header) {
                    _this.eventDescription = header.content;
                    _this.eventHeader = res.title;
                    _this.one('mr-year-header').update({
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
                _this.loading.resourceDetails = false;
            });
        };
        return MrTimelineLayoutDS;
    }(core$1.LayoutDataSource));

    var MrTimelineLayoutEH = /** @class */ (function (_super) {
        __extends(MrTimelineLayoutEH, _super);
        function MrTimelineLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MrTimelineLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'mr-timeline-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this.location = payload.location;
                        _this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
                        _this.dataSource.timelineListener$.subscribe(function (timeline) {
                            timeline.on('click', function (props) {
                                if (!props.item)
                                    return;
                                // build URL slug
                                var content = _this.dataSource.timelineData.dataSet
                                    .find(function (d) { return d.id === props.item; }).content;
                                var slug = helpers.slugify(content);
                                // navigate without reloading the layout
                                _this.location.go("/timeline/" + props.item + "/" + slug);
                                _this.dataSource.updatePageDetails(props.item);
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
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type;
                switch (type) {
                    case 'mr-year-header.closeevent':
                        _this.dataSource.loadDefaults(true);
                        break;
                    default:
                        break;
                }
            });
        };
        MrTimelineLayoutEH.prototype.listenRoute = function () {
            var _this = this;
            this.route.paramMap.subscribe(function (params) {
                var paramId = params.get('id');
                if (paramId) {
                    _this.dataSource.currentId = paramId;
                    _this.emitOuter('routechanged', paramId);
                    _this.dataSource.updatePageDetails(paramId);
                }
                else {
                    _this.dataSource.loadDefaults(true);
                }
            });
        };
        return MrTimelineLayoutEH;
    }(core$1.EventHandler));

    var MrTimelineLayoutConfig = {
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

    var MrTimelineLayoutComponent = /** @class */ (function (_super) {
        __extends(MrTimelineLayoutComponent, _super);
        function MrTimelineLayoutComponent(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
            var _this = _super.call(this, layoutsConfiguration.get('MrTimelineLayoutConfig') || MrTimelineLayoutConfig) || this;
            _this.route = route;
            _this.router = router;
            _this.location = location;
            _this.configuration = configuration;
            _this.communication = communication;
            _this.mainState = mainState;
            _this.layoutState = layoutState;
            return _this;
        }
        MrTimelineLayoutComponent.prototype.initPayload = function () {
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
        };
        MrTimelineLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (data) {
                _this.configId = data.configId;
                _this.layoutState.add('content');
                _this.onInit();
            });
        };
        MrTimelineLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        MrTimelineLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: common.Location },
            { type: ConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: MrLayoutStateService }
        ]; };
        MrTimelineLayoutComponent = __decorate([
            core.Component({
                selector: 'mr-timeline-layout',
                template: "<div class=\"mr-timeline mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-timeline__timeline\">\r\n        <div class=\"mr-timeline__timeline-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline>\r\n    </div>\r\n\r\n    <div class=\"mr-timeline__page mr-side-margin\">\r\n        <div class=\"mr-timeline__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <h1 class=\"mr-timeline__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        <div class=\"mr-timeline__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n                \r\n\r\n                <!-- MAPPA -->\r\n                <div class=\"mr-content-block mr-content-block-map\" *ngIf=\"lb.dataSource.hasMap\">\r\n                    <h3 class=\"mr-content-block__title\" *ngIf=\"lb.dataSource.mapHeader\">{{ lb.dataSource.mapHeader }}</h3>\r\n                    <div class=\"mr-content-block__content\">\r\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-timeline__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [LayoutsConfigurationService,
                router.ActivatedRoute,
                router.Router,
                common.Location,
                ConfigurationService,
                CommunicationService,
                MainStateService,
                MrLayoutStateService])
        ], MrTimelineLayoutComponent);
        return MrTimelineLayoutComponent;
    }(AbstractLayout));

    //---------------------------
    var HEIGHT_MARGIN = 50;
    var ReadMoreComponent = /** @class */ (function () {
        function ReadMoreComponent() {
            this.collapsed = true;
            this.hasReadmore = false;
            this._loaded = false;
        }
        /**
         * Determine if the view is taller than the given height limit,
         * if it is, render the "Read-more" button.
         */
        ReadMoreComponent.prototype.ngAfterViewChecked = function () {
            var _this = this;
            if (this._loaded || !this.data)
                return;
            if (this.root && this.root.nativeElement.clientHeight > 0) {
                this._loaded = true;
                this.clientHeight = this.root.nativeElement.clientHeight;
                var _a = this.data, height = _a.height, labels_1 = _a.labels;
                // translate labels
                Object.keys(labels_1).forEach(function (key) {
                    _this.data.labels[key] = core$1._t(labels_1[key]);
                });
                if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                    setTimeout(function () {
                        _this.hasReadmore = true;
                        _this.updateWrapperHeight();
                    });
                }
            }
        };
        ReadMoreComponent.prototype.handleToggle = function () {
            this.collapsed = !this.collapsed;
            this.updateWrapperHeight();
        };
        ReadMoreComponent.prototype.updateWrapperHeight = function () {
            this.wrapperHeight = this.collapsed
                ? this.data.height
                : this.clientHeight;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ReadMoreComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ReadMoreComponent.prototype, "emit", void 0);
        __decorate([
            core.ViewChild('root', { read: core.ElementRef }),
            __metadata("design:type", core.ElementRef)
        ], ReadMoreComponent.prototype, "root", void 0);
        ReadMoreComponent = __decorate([
            core.Component({
                selector: 'mr-read-more',
                template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n"
            })
        ], ReadMoreComponent);
        return ReadMoreComponent;
    }());

    var MrAdvancedResultComponent = /** @class */ (function () {
        function MrAdvancedResultComponent() {
        }
        MrAdvancedResultComponent.prototype.onClick = function (payload) {
            if (!this.emit)
                return;
            this.emit('click', payload);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrAdvancedResultComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrAdvancedResultComponent.prototype, "emit", void 0);
        MrAdvancedResultComponent = __decorate([
            core.Component({
                selector: 'mr-advanced-result',
                template: "<div *ngIf=\"data\"\r\n     class=\"mr-advanced-result\">\r\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\r\n    <div class=\"mr-advanced-result__content\"\r\n         *ngFor=\"let highlightGroup of data.highlights\">\r\n        <div class=\"mr-advanced-result__content-group\">\r\n            <!-- METADATA GROUP TITLE -->\r\n            <!--\r\n            <h3 class=\"mr-advanced-result__title\"\r\n                *ngIf=\"highlightGroup.title\"\r\n                [innerHTML]=\"highlightGroup.title\">\r\n            </h3>\r\n            -->\r\n            <!-- METADATA ITEM -->\r\n            <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\r\n                 *ngFor=\"let item of highlightGroup.items\">\r\n                <!-- ICON -->\r\n                <span class=\"mr-advanced-result__icon {{item.icon}}\"\r\n                      *ngIf=\"item.icon\">\r\n                </span>\r\n                <!-- LABEL -->\r\n                <span class=\"mr-advanced-result__label\"\r\n                      *ngIf=\"item.label\"\r\n                      [innerHTML]=\"item.label\">\r\n                </span>\r\n                <!-- VALUE W/ HREF -->\r\n                <a *ngIf=\"item.href\"\r\n                   [href]=\"item.href\">\r\n                    <span class=\"mr-advanced-result__value\"\r\n                          *ngIf=\"item.value\"\r\n                          [innerHTML]=\"item.value\">\r\n                    </span>\r\n                </a>\r\n                <!-- VALUE W/OUT HREF -->\r\n                <span class=\"mr-advanced-result__value\"\r\n                      *ngIf=\"item.value && !item.href\"\r\n                      [innerHTML]=\"item.value\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
            })
        ], MrAdvancedResultComponent);
        return MrAdvancedResultComponent;
    }());

    var MrFormComponent = /** @class */ (function () {
        function MrFormComponent() {
        }
        MrFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.group) {
                this.sections = this.form.config.sections
                    .filter(function (_a) {
                    var id = _a.id;
                    return _this.group.sections.includes(id);
                });
            }
            else {
                this.sections = this.form.config.sections;
            }
            // translations
            this.sections = this.sections.map(function (section) { return (__assign(__assign({}, section), { title: core$1._t(section.title), description: core$1._t(section.description) })); });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", MrFormModel)
        ], MrFormComponent.prototype, "form", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrFormComponent.prototype, "group", void 0);
        __decorate([
            core.ContentChild(core.TemplateRef),
            __metadata("design:type", core.TemplateRef)
        ], MrFormComponent.prototype, "templateRef", void 0);
        MrFormComponent = __decorate([
            core.Component({
                selector: 'mr-form',
                template: "<div *ngIf=\"form.loaded$ | async\" class=\"mr-form {{ group?.classes || '' }}\">\r\n    <div *ngFor=\"let section of sections\" class=\"mr-form__section {{ section.classes || '' }}\" \r\n         [ngClass]=\"{ 'mr-form__section-advanced' : section.advancedSection  }\" >\r\n        \r\n        <div class=\"mr-form__section-header\">\r\n            <h3 *ngIf=\"section.title\" class=\"mr-form__section-title\">{{ section.title }}</h3>\r\n            <p *ngIf=\"section.description\" class=\"mr-form__section-description\">{{ section.description }}</p>\r\n        </div>\r\n        \r\n        <div class=\"mr-form__section-content\">\r\n            <div *ngFor=\"let input of section.inputs\" class=\"mr-form__element {{ input.options?.classes || '' }}\">\r\n                <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                    <!-- INPUT TEXT -->\r\n                    <n7-input-text *ngSwitchCase=\"'text'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-text>\r\n\r\n                    <!-- INPUT CHECKBOX -->\r\n                    <n7-input-checkbox *ngSwitchCase=\"'checkbox'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-checkbox>\r\n\r\n                    <!-- INPUT SELECT -->\r\n                    <n7-input-select *ngSwitchCase=\"'select'\" \r\n                        [data]=\"form.inputs[input.id].ds.out$ | async\"\r\n                        [emit]=\"form.inputs[input.id].emit\"></n7-input-select>\r\n\r\n                    <!-- DEFAULT (external template) -->\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"\r\n                        templateRef; \r\n                        context: { \r\n                            type: input.type, \r\n                            input: form.inputs[input.id] \r\n                        }\"></ng-template>\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
            })
        ], MrFormComponent);
        return MrFormComponent;
    }());

    var MrFormWrapperAccordionComponent = /** @class */ (function () {
        function MrFormWrapperAccordionComponent() {
            var _this = this;
            this.fakeEmit = function (type, payload) {
                if (!_this.emit) {
                    return;
                }
                _this.emit(type, payload);
            };
        }
        MrFormWrapperAccordionComponent.prototype.ngOnInit = function () {
            this.fakeEmit('init');
        };
        MrFormWrapperAccordionComponent.prototype.ngOnDestroy = function () {
            this.fakeEmit('destroy');
        };
        MrFormWrapperAccordionComponent.prototype.onReset = function () {
            this.fakeEmit('reset');
        };
        MrFormWrapperAccordionComponent.prototype.onSubmit = function () {
            this.fakeEmit('submit');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrFormWrapperAccordionComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], MrFormWrapperAccordionComponent.prototype, "emit", void 0);
        MrFormWrapperAccordionComponent = __decorate([
            core.Component({
                selector: 'mr-form-wrapper-accordion',
                template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>"
            })
        ], MrFormWrapperAccordionComponent);
        return MrFormWrapperAccordionComponent;
    }());

    var MrSearchPageDescriptionComponent = /** @class */ (function () {
        function MrSearchPageDescriptionComponent() {
        }
        MrSearchPageDescriptionComponent.prototype.onClick = function (payload) {
            if (this.emit) {
                this.emit('click', payload);
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrSearchPageDescriptionComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], MrSearchPageDescriptionComponent.prototype, "emit", void 0);
        MrSearchPageDescriptionComponent = __decorate([
            core.Component({
                selector: 'mr-search-page-description',
                template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\r\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\r\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\r\n</div>"
            })
        ], MrSearchPageDescriptionComponent);
        return MrSearchPageDescriptionComponent;
    }());

    var DATASOURCE_MAP$4 = {
        collection: MrCollectionDS,
        metadata: MrMetadataDS,
        preview: MrItemPreviewDS,
        title: MrInnerTitleDS,
    };
    var MrResourceModalComponent = /** @class */ (function () {
        function MrResourceModalComponent(router, modalService) {
            this.router = router;
            this.modalService = modalService;
            this.destroy$ = new rxjs.Subject();
            this.status = 'IDLE';
            this.widgets = {};
            this.errorTitle = core$1._t('global#layout_error_title');
            this.errorDescription = core$1._t('global#layout_error_description');
        }
        MrResourceModalComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.modalService.state$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (_a) {
                var status = _a.status, config = _a.config, response = _a.response;
                _this.status = status;
                _this.config = config;
                if (status === 'SUCCESS') {
                    _this.loadWidgets(config, response);
                }
            });
            // on router change close
            this.router.events.pipe(operators.takeUntil(this.destroy$), operators.filter(function () { return !lodash.isEmpty(_this.widgets); }), operators.filter(function (event) { return event instanceof router.NavigationStart; })).subscribe(function () {
                _this.onClose();
            });
        };
        MrResourceModalComponent.prototype.ngOnDestroy = function () {
            // reset
            this.onClose();
            this.destroy$.next();
        };
        MrResourceModalComponent.prototype.onClose = function (target) {
            if (target && target.className !== 'mr-resource-modal__overlay') {
                return;
            }
            this.widgets = {};
            this.modalService.close();
        };
        MrResourceModalComponent.prototype.loadWidgets = function (config, response) {
            var _this = this;
            var _a = config.sections, top = _a.top, content = _a.content;
            var sections = top.concat(content);
            if (sections) {
                sections.forEach(function (_a) {
                    var id = _a.id, type = _a.type, options = _a.options;
                    var data = response.sections[id];
                    _this.widgets[id] = {
                        ds: new DATASOURCE_MAP$4[type]()
                    };
                    // update options
                    if (options) {
                        _this.widgets[id].ds.options = options;
                    }
                    // update data
                    if (data) {
                        _this.widgets[id].ds.update(data);
                    }
                });
            }
        };
        MrResourceModalComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: MrResourceModalService }
        ]; };
        MrResourceModalComponent = __decorate([
            core.Component({
                selector: 'mr-resource-modal',
                template: "<div *ngIf=\"status !== 'IDLE'\" class=\"mr-modal mr-resource-modal\" [ngClass]=\"{\r\n        'is-loading': status === 'LOADING',\r\n        'is-error': status === 'ERROR'\r\n      }\">\r\n    <div class=\"mr-modal__overlay\" (click)=\"onClose($event.target)\">\r\n        <div class=\"mr-modal__window mr-resource-modal__window\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n\r\n                <!-- Loading -->\r\n                <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                    <div class=\"mr-modal__loader\">\r\n                        <n7-loader></n7-loader>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Error -->\r\n                <ng-container *ngSwitchCase=\"'ERROR'\">\r\n\r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <h2 class=\"mr-modal__header-title\">\r\n                            {{ errorTitle }}\r\n                        </h2>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content\">\r\n                        <p class=\"mr-modal__error-text\">{{ errorDescription }}</p>\r\n                    </div>\r\n\r\n                </ng-container>\r\n\r\n                <!-- Success -->\r\n                <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                    \r\n                    <div class=\"mr-modal__header mr-resource-modal__header\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                        </ng-container>\r\n                        <div class=\"mr-modal__close\">\r\n                            <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mr-modal__content mr-resource-modal__content\">\r\n                        <ng-container *ngIf=\"config.sections as sections\">\r\n                            <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>                            \r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"widgets[section.id].ds && (widgets[section.id].ds.out$ | async)\"\r\n            class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n\r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <n7-inner-title [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-inner-title>\r\n                </ng-container>\r\n\r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    <div class=\"mr-resource-modal__metadata-content\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title mr-resource__metadata-title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <mr-read-more [data]=\"section.readmore\">\r\n                            <n7-metadata-viewer [data]=\"widgets[section.id].ds.out$ | async\">\r\n                            </n7-metadata-viewer>\r\n                        </mr-read-more>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"widgets[section.id].ds.out$ | async as collection$\">\r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-resource__collection-content\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div\r\n                                class=\"mr-resource__collection-grid {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\" [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource-modal__section-title\">\r\n                        {{ section.title }}\r\n                    </h3>\r\n                    <n7-item-preview [data]=\"widgets[section.id].ds.out$ | async\">\r\n                    </n7-item-preview>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
            }),
            __metadata("design:paramtypes", [router.Router,
                MrResourceModalService])
        ], MrResourceModalComponent);
        return MrResourceModalComponent;
    }());

    var MrGalleryComponent = /** @class */ (function () {
        function MrGalleryComponent() {
        }
        MrGalleryComponent.prototype.onClick = function (payload) {
            if (this.emit) {
                this.emit('click', payload);
            }
        };
        MrGalleryComponent.prototype.onClose = function () {
            if (this.emit) {
                this.emit('close');
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MrGalleryComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], MrGalleryComponent.prototype, "emit", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], MrGalleryComponent.prototype, "grid", void 0);
        MrGalleryComponent = __decorate([
            core.Component({
                selector: 'mr-gallery',
                template: "<div *ngIf=\"data\" class=\"mr-gallery mr-wp-content\">\r\n    <div class=\"mr-gallery__wrapper wp-block-gallery has-zoom {{ grid ? 'columns-' + grid : '' }}\">\r\n        <ul class=\"mr-gallery__items blocks-gallery-grid\">\r\n            <li *ngFor=\"let item of data.items\" class=\"mr-gallery__item blocks-gallery-item\">\r\n                <figure>\r\n                    <a (click)=\"onClick(item.payload)\" class=\"mr-gallery__link\">\r\n                        <img [src]=\"item.thumbSrc\" [alt]=\"item.title\" class=\"mr-gallery__image\">\r\n                    </a>\r\n                </figure>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"data.selected\" class=\"mr-modal mr-gallery-modal\" (click)=\"onClose()\">\r\n        <div class=\"mr-modal__overlay\">\r\n            <div class=\"mr-modal__window mr-gallery-modal__window\">\r\n                <div class=\"mr-modal__header mr-gallery-modal__header\">\r\n                    <div class=\"mr-modal__close\">\r\n                        <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mr-modal__content mr-gallery-modal__content\">\r\n                    <div class=\"mr-gallery__zoom-image-wrapper\">\r\n                        <img [src]=\"data.selected.fullSrc\" [alt]=\"data.selected.title\" class=\"mr-gallery__zoom-image\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
            })
        ], MrGalleryComponent);
        return MrGalleryComponent;
    }());

    var COMPONENTS$3 = [
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
    var N7BoilerplateMurucaModule = /** @class */ (function () {
        function N7BoilerplateMurucaModule() {
        }
        N7BoilerplateMurucaModule = __decorate([
            core.NgModule({
                declarations: [
                    EscapeHtmlPipe,
                    COMPONENTS$3
                ],
                imports: [
                    common.CommonModule,
                    components.DvComponentsLibModule,
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
        return N7BoilerplateMurucaModule;
    }());

    var SbExampleLayoutDS = /** @class */ (function (_super) {
        __extends(SbExampleLayoutDS, _super);
        function SbExampleLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbExampleLayoutDS.prototype.onInit = function () {
            // TODO
        };
        return SbExampleLayoutDS;
    }(core$1.LayoutDataSource));

    var SbExampleLayoutEH = /** @class */ (function (_super) {
        __extends(SbExampleLayoutEH, _super);
        function SbExampleLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbExampleLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-example-layout.init':
                        console.log('layout-inner', type, payload);
                        _this.emitOuter('init', payload);
                        _this.dataSource.onInit();
                        break;
                    default:
                        console.warn('unhandled event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-dummy.click':
                        console.log('layout-outer', type, payload);
                        break;
                    default:
                        console.warn('unhandled event of type', type);
                        break;
                }
            });
        };
        return SbExampleLayoutEH;
    }(core$1.EventHandler));

    var SbImageViewerDS = /** @class */ (function (_super) {
        __extends(SbImageViewerDS, _super);
        function SbImageViewerDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.viewer = null;
            _this.viewerLoaded$ = new rxjs.Subject();
            return _this;
        }
        SbImageViewerDS.prototype.transform = function () {
            var _this = this;
            var data = components.IMAGE_VIEWER_MOCK;
            data.images = [
                { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
                { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
                { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
            ];
            data.libOptions.showReferenceStrip = false;
            data._setViewer = function (viewer) {
                _this.viewer = viewer;
                _this.viewerLoaded$.next();
            };
            // data._pageCallback = (eventData) => eventData;
            return data;
        };
        SbImageViewerDS.prototype.changePage = function (index) {
            this.viewer.goToPage(index); // call to OpenSeadragon APIs
        };
        return SbImageViewerDS;
    }(core$1.DataSource));

    var SbImageViewerToolsDS = /** @class */ (function (_super) {
        __extends(SbImageViewerToolsDS, _super);
        function SbImageViewerToolsDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbImageViewerToolsDS.prototype.transform = function () {
            var data = components.IMAGE_VIEWER_TOOLS_MOCK;
            data.images = [
                { thumb: 'http://placekitten.com/200/130', payload: { thumbindex: 0 }, caption: 'Test caption <b>#1</b>' },
                { thumb: 'http://placekitten.com/90/180', payload: { thumbindex: 1 }, caption: 'Test caption <b>#2</b>' },
                { thumb: 'http://placekitten.com/90/110', payload: { thumbindex: 2 }, caption: 'Test caption <b>#3</b>' },
            ];
            var initialDescription = data.images[data.initial].caption;
            if (initialDescription !== undefined) {
                data.description = initialDescription;
            }
            return data;
        };
        SbImageViewerToolsDS.prototype.toggleDescription = function () {
            this.output.isVisible.description = !this.output.isVisible.description;
        };
        SbImageViewerToolsDS.prototype.toggleThumbs = function () {
            this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
        };
        SbImageViewerToolsDS.prototype.handleThumbs = function (index) {
            this.output.initial = index;
            this.updateDescription();
        };
        SbImageViewerToolsDS.prototype.handlePageChange = function (payload) {
            this.handleThumbs(payload.page);
        };
        SbImageViewerToolsDS.prototype.updateDescription = function () {
            var index = this.output.initial;
            var images = this.output.images;
            this.output.description = images[index].caption;
        };
        return SbImageViewerToolsDS;
    }(core$1.DataSource));

    var DS$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SbImageViewerDS: SbImageViewerDS,
        SbImageViewerToolsDS: SbImageViewerToolsDS
    });

    var SbImageViewerEH = /** @class */ (function (_super) {
        __extends(SbImageViewerEH, _super);
        function SbImageViewerEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbImageViewerEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer.click':
                        _this.emitOuter('click', payload);
                        break;
                    case 'sb-image-viewer.pagechange':
                        _this.emitOuter('pagechange', payload);
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer-layout.init':
                        _this.listenToViewer();
                        break;
                    case 'sb-image-viewer-layout.thumbclick':
                        _this.dataSource.changePage(payload);
                        break;
                    case 'sb-image-viewer-layout.pagechange':
                        // Silent
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
        };
        SbImageViewerEH.prototype.listenToViewer = function () {
            var _this = this;
            this.dataSource.viewerLoaded$.pipe(operators.first()).subscribe(function () {
                var viewer = _this.dataSource.viewer;
                viewer.addHandler('page', function (eventData) {
                    _this.emitOuter('pagechange', eventData);
                });
            });
        };
        return SbImageViewerEH;
    }(core$1.EventHandler));

    var SbImageViewerToolsEH = /** @class */ (function (_super) {
        __extends(SbImageViewerToolsEH, _super);
        function SbImageViewerToolsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbImageViewerToolsEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer-tools.click':
                        if (payload.thumbindex !== undefined) {
                            var index = payload.thumbindex;
                            _this.dataSource.handleThumbs(index);
                            _this.emitOuter('thumbclick', index);
                            break;
                        }
                        if (payload === 'close-description') {
                            _this.dataSource.toggleDescription();
                            break;
                        }
                        if (payload === 'toggle-description') {
                            _this.dataSource.toggleDescription();
                            break;
                        }
                        if (payload === 'toggle-thumbs') {
                            _this.dataSource.toggleThumbs();
                            break;
                        }
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer-layout.init':
                    case 'sb-image-viewer-layout.thumbclick':
                        // Silent
                        break;
                    case 'sb-image-viewer-layout.pagechange':
                        _this.dataSource.handlePageChange(payload);
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
        };
        return SbImageViewerToolsEH;
    }(core$1.EventHandler));

    var EH$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SbImageViewerEH: SbImageViewerEH,
        SbImageViewerToolsEH: SbImageViewerToolsEH
    });

    var SbExampleLayoutConfig = {
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

    var SbExampleLayoutComponent = /** @class */ (function (_super) {
        __extends(SbExampleLayoutComponent, _super);
        function SbExampleLayoutComponent() {
            return _super.call(this, SbExampleLayoutConfig) || this;
        }
        SbExampleLayoutComponent.prototype.initPayload = function () {
            return {};
        };
        SbExampleLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        SbExampleLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        SbExampleLayoutComponent = __decorate([
            core.Component({
                selector: 'sb-example-layout',
                template: "<div class=\"sb-example-layout\" id=\"example-layout\">\r\n    <n7-tag \r\n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\r\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \r\n</div>"
            }),
            __metadata("design:paramtypes", [])
        ], SbExampleLayoutComponent);
        return SbExampleLayoutComponent;
    }(AbstractLayout));

    var SbImageViewerLayoutDS = /** @class */ (function (_super) {
        __extends(SbImageViewerLayoutDS, _super);
        function SbImageViewerLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbImageViewerLayoutDS.prototype.onInit = function (_a) {
            var communication = _a.communication, configuration = _a.configuration;
            this.communication = communication;
            this.configuration = configuration;
            console.log('communication config', this.configuration.get('communication'));
            this.communication.request$('posts', {
                method: 'GET',
                params: {
                    id: 505
                },
                onError: function (err) {
                    console.warn('err', err);
                }
            }).subscribe(function (response) {
                console.log('response------------>', response);
            });
        };
        return SbImageViewerLayoutDS;
    }(core$1.LayoutDataSource));

    var SbImageViewerLayoutEH = /** @class */ (function (_super) {
        __extends(SbImageViewerLayoutEH, _super);
        function SbImageViewerLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SbImageViewerLayoutEH.prototype.listen = function () {
            var _this = this;
            this.innerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.emitOuter('init');
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
            this.outerEvents$.subscribe(function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'sb-image-viewer-tools.click':
                        // Silent
                        break;
                    case 'sb-image-viewer.pagechange':
                        _this.emitOuter('pagechange', payload);
                        break;
                    case 'sb-image-viewer-tools.thumbclick':
                        _this.emitOuter('thumbclick', payload);
                        break;
                    case 'sb-image-viewer.click':
                        _this.emitOuter('viewerclick', payload);
                        break;
                    default:
                        // console.warn('unhandled event of type', type);
                        break;
                }
            });
        };
        return SbImageViewerLayoutEH;
    }(core$1.EventHandler));

    var SbImageViewerLayoutConfig = {
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

    var SbImageViewerLayoutComponent = /** @class */ (function (_super) {
        __extends(SbImageViewerLayoutComponent, _super);
        function SbImageViewerLayoutComponent(configuration, communication) {
            var _this = _super.call(this, SbImageViewerLayoutConfig) || this;
            _this.configuration = configuration;
            _this.communication = communication;
            return _this;
        }
        SbImageViewerLayoutComponent.prototype.initPayload = function () {
            return {
                configuration: this.configuration,
                communication: this.communication,
            };
        };
        SbImageViewerLayoutComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        SbImageViewerLayoutComponent.prototype.ngOnDestroy = function () {
            this.onDestroy();
        };
        SbImageViewerLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: CommunicationService }
        ]; };
        SbImageViewerLayoutComponent = __decorate([
            core.Component({
                selector: 'sb-image-viewer-layout',
                template: "<div class=\"sb-image-viewer-layout\" id=\"image-viewer-layout\">\r\n    <n7-image-viewer \r\n        [data]=\"lb.widgets['sb-image-viewer'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer'].emit\">\r\n    </n7-image-viewer> \r\n    <n7-image-viewer-tools \r\n        [data]=\"lb.widgets['sb-image-viewer-tools'].ds.out$ | async\"\r\n        [emit]=\"lb.widgets['sb-image-viewer-tools'].emit\">\r\n    </n7-image-viewer-tools>\r\n</div>\r\n"
            }),
            __metadata("design:paramtypes", [ConfigurationService,
                CommunicationService])
        ], SbImageViewerLayoutComponent);
        return SbImageViewerLayoutComponent;
    }(AbstractLayout));

    var COMPONENTS$4 = [
        SbExampleLayoutComponent,
        SbImageViewerLayoutComponent,
    ];
    var N7BoilerplateSandboxModule = /** @class */ (function () {
        function N7BoilerplateSandboxModule() {
        }
        N7BoilerplateSandboxModule = __decorate([
            core.NgModule({
                declarations: COMPONENTS$4,
                imports: [
                    common.CommonModule,
                    components.DvComponentsLibModule,
                    N7BoilerplateCommonModule,
                ],
                providers: [],
                exports: COMPONENTS$4,
            })
        ], N7BoilerplateSandboxModule);
        return N7BoilerplateSandboxModule;
    }());

    var N7BoilerplateLibModule = /** @class */ (function () {
        function N7BoilerplateLibModule() {
        }
        N7BoilerplateLibModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
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
        return N7BoilerplateLibModule;
    }());

    var JsonConfigService = /** @class */ (function () {
        function JsonConfigService(http, config) {
            this.http = http;
            this.config = config;
        }
        JsonConfigService.prototype.load = function (path) {
            var _this = this;
            return this.http.get(path).pipe(operators.catchError(function () { return rxjs.of({}); }), operators.tap(function (response) { return _this._handleResponse(response); })).toPromise();
        };
        JsonConfigService.prototype._handleResponse = function (response) {
            var _this = this;
            // set loaded json config
            if (response) {
                Object.keys(response).forEach(function (key) {
                    var oldValue = _this.config.get(key);
                    var newValue = response[key];
                    _this.config.set(key, lodash.merge(oldValue, newValue));
                });
                // config keys colors
                if (response['config-keys']) {
                    var headTag = document.querySelector('head');
                    var styleElement = document.createElement('style');
                    var styles_1 = [];
                    Object.keys(response['config-keys']).forEach(function (key) {
                        var configKey = response['config-keys'][key] || {};
                        var className = configKey['class-name'];
                        if (configKey.color && configKey.color.hex) {
                            // add css class
                            styles_1.push("--color-" + className + ": " + configKey.color.hex + ";");
                        }
                    });
                    if (styles_1.length) {
                        styles_1.unshift(':root {');
                        styles_1.push('}');
                        styleElement.appendChild(document.createTextNode(styles_1.join('\n')));
                        headTag.appendChild(styleElement);
                    }
                }
            }
        };
        JsonConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        JsonConfigService.ɵprov = core.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
        JsonConfigService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient,
                ConfigurationService])
        ], JsonConfigService);
        return JsonConfigService;
    }());

    var LocalConfigService = /** @class */ (function () {
        function LocalConfigService(config) {
            this.config = config;
        }
        LocalConfigService.prototype.load = function (config) {
            var _this = this;
            return rxjs.of(true).pipe(operators.tap(function () {
                if (config) {
                    Object.keys(config).forEach(function (key) { return _this.config.set(key, config[key]); });
                    // config keys colors
                    if (config['config-keys']) {
                        var headTag = document.querySelector('head');
                        var styleElement = document.createElement('style');
                        var styles_1 = [];
                        Object.keys(config['config-keys']).forEach(function (key) {
                            var configKey = config['config-keys'][key] || {};
                            var className = configKey['class-name'];
                            if (configKey.color && configKey.color.hex) {
                                // add css class
                                styles_1.push("--color-" + className + ": " + configKey.color.hex + ";");
                            }
                        });
                        if (styles_1.length) {
                            styles_1.unshift(':root {');
                            styles_1.push('}');
                            styleElement.appendChild(document.createTextNode(styles_1.join('\n')));
                            headTag.appendChild(styleElement);
                        }
                    }
                }
            })).toPromise();
        };
        LocalConfigService.ctorParameters = function () { return [
            { type: ConfigurationService }
        ]; };
        LocalConfigService.ɵprov = core.ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(core.ɵɵinject(ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
        LocalConfigService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [ConfigurationService])
        ], LocalConfigService);
        return LocalConfigService;
    }());

    // main layout

    // home layout

    // example layout

    // home layout

    var MrMenuService = /** @class */ (function () {
        function MrMenuService(http, configuration) {
            var _this = this;
            this.http = http;
            this.configuration = configuration;
            this.dynamicPaths = [];
            this.isDynamicPath = function (path) { return _this.dynamicPaths.includes(path); };
        }
        MrMenuService.prototype.load = function () {
            var _this = this;
            var _a;
            var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
            var currentProvider = providers[defaultProvider] || {};
            var baseUrl = currentProvider.baseUrl;
            var menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.menu;
            if (baseUrl && menuPath) {
                var url = baseUrl + menuPath;
                return this.http.get(url).pipe(operators.catchError(function () { return rxjs.of(null); }), operators.tap(function (response) { return _this._handleResponse(response); })).toPromise();
            }
            return rxjs.of(null).toPromise();
        };
        MrMenuService.prototype._handleResponse = function (response) {
            var _this = this;
            if (response) {
                var headerConfig = this.configuration.get('header');
                headerConfig.nav.items = response.map(function (_a) {
                    var label = _a.label, slug = _a.slug, isStatic = _a.isStatic, subpages = _a.subpages, classes = _a.classes;
                    var href = "/" + slug;
                    // dynamic path control
                    if (!isStatic) {
                        _this.dynamicPaths.push(href);
                    }
                    var item = {
                        classes: classes,
                        text: label,
                        anchor: slug ? { href: href } : null,
                        _meta: {
                            id: href
                        }
                    };
                    if (subpages !== undefined) {
                        item.subnav = [];
                        subpages.forEach(function (el) {
                            var subHref = "/" + el.slug;
                            if (!el.isStatic) {
                                _this.dynamicPaths.push(subHref);
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
        };
        MrMenuService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        MrMenuService.ɵprov = core.ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
        MrMenuService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient,
                ConfigurationService])
        ], MrMenuService);
        return MrMenuService;
    }());

    var MrFooterService = /** @class */ (function () {
        function MrFooterService(http, configuration) {
            this.http = http;
            this.configuration = configuration;
        }
        MrFooterService.prototype.load = function () {
            var _this = this;
            var _a;
            var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
            var currentProvider = providers[defaultProvider] || {};
            var baseUrl = currentProvider.baseUrl;
            var menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.footer;
            if (baseUrl && menuPath) {
                var url = baseUrl + menuPath;
                return this.http.get(url).pipe(operators.catchError(function () { return rxjs.of(null); }), operators.tap(function (response) { return _this._handleResponse(response); })).toPromise();
            }
            return rxjs.of(null).toPromise();
        };
        MrFooterService.prototype._handleResponse = function (response) {
            if (response) {
                this.configuration.set('footer', response);
            }
        };
        MrFooterService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        MrFooterService.ɵprov = core.ɵɵdefineInjectable({ factory: function MrFooterService_Factory() { return new MrFooterService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: MrFooterService, providedIn: "root" });
        MrFooterService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient,
                ConfigurationService])
        ], MrFooterService);
        return MrFooterService;
    }());

    var MrTranslationsLoaderService = /** @class */ (function () {
        function MrTranslationsLoaderService(http, configuration) {
            this.http = http;
            this.configuration = configuration;
        }
        MrTranslationsLoaderService.prototype.load = function (langCode) {
            var _this = this;
            var _a;
            var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
            var currentProvider = providers[defaultProvider] || {};
            var baseUrl = currentProvider.baseUrl;
            var translationsPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.translation;
            if (baseUrl && translationsPath) {
                var url = baseUrl + translationsPath + langCode;
                return this.http.get(url).pipe(operators.catchError(function () { return rxjs.of(null); }), operators.tap(function (response) { return _this._handleResponse(response, langCode); })).toPromise();
            }
            return rxjs.of(null).toPromise();
        };
        MrTranslationsLoaderService.prototype._handleResponse = function (response, langCode) {
            if (response) {
                Object.keys(response).forEach(function (key) {
                    core$1.translate.setLangTranslation(langCode, key, response[key]);
                });
            }
        };
        MrTranslationsLoaderService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        MrTranslationsLoaderService.ɵprov = core.ɵɵdefineInjectable({ factory: function MrTranslationsLoaderService_Factory() { return new MrTranslationsLoaderService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: MrTranslationsLoaderService, providedIn: "root" });
        MrTranslationsLoaderService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient,
                ConfigurationService])
        ], MrTranslationsLoaderService);
        return MrTranslationsLoaderService;
    }());

    var DynamicPathGuard = /** @class */ (function () {
        function DynamicPathGuard(menuService, router) {
            this.menuService = menuService;
            this.router = router;
        }
        DynamicPathGuard.prototype.canActivate = function (next, state) {
            var url = state.url;
            if (!this.menuService.isDynamicPath(url)) {
                var notFoundPath = next.data.notFoundPath;
                this.router.navigate([notFoundPath ? "/" + notFoundPath : '/']);
                return false;
            }
            return true;
        };
        DynamicPathGuard.ctorParameters = function () { return [
            { type: MrMenuService },
            { type: router.Router }
        ]; };
        DynamicPathGuard.ɵprov = core.ɵɵdefineInjectable({ factory: function DynamicPathGuard_Factory() { return new DynamicPathGuard(core.ɵɵinject(MrMenuService), core.ɵɵinject(router.Router)); }, token: DynamicPathGuard, providedIn: "root" });
        DynamicPathGuard = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [MrMenuService,
                router.Router])
        ], DynamicPathGuard);
        return DynamicPathGuard;
    }());

    exports.AbstractLayout = AbstractLayout;
    exports.ApolloProvider = ApolloProvider;
    exports.AwAutocompleteWrapperDS = AwAutocompleteWrapperDS;
    exports.AwAutocompleteWrapperEH = AwAutocompleteWrapperEH;
    exports.AwBubbleChartDS = AwBubbleChartDS;
    exports.AwBubbleChartEH = AwBubbleChartEH;
    exports.AwCarouselDS = AwCarouselDS;
    exports.AwChartTippyDS = AwChartTippyDS;
    exports.AwChartTippyEH = AwChartTippyEH;
    exports.AwCollectionLayoutComponent = AwCollectionLayoutComponent;
    exports.AwCollectionLayoutConfig = AwCollectionLayoutConfig;
    exports.AwCollectionLayoutDS = AwCollectionLayoutDS;
    exports.AwCollectionLayoutEH = AwCollectionLayoutEH;
    exports.AwEntitaLayoutComponent = AwEntitaLayoutComponent;
    exports.AwEntitaLayoutConfig = AwEntitaLayoutConfig;
    exports.AwEntitaLayoutDS = AwEntitaLayoutDS;
    exports.AwEntitaLayoutEH = AwEntitaLayoutEH;
    exports.AwEntitaMetadataViewerDS = AwEntitaMetadataViewerDS;
    exports.AwEntitaNavDS = AwEntitaNavDS;
    exports.AwEntitaNavEH = AwEntitaNavEH;
    exports.AwFacetsWrapperComponent = AwFacetsWrapperComponent;
    exports.AwFacetsWrapperDS = AwFacetsWrapperDS;
    exports.AwFacetsWrapperEH = AwFacetsWrapperEH;
    exports.AwGalleryLayoutComponent = AwGalleryLayoutComponent;
    exports.AwGalleryLayoutConfig = AwGalleryLayoutConfig;
    exports.AwGalleryLayoutDS = AwGalleryLayoutDS;
    exports.AwGalleryLayoutEH = AwGalleryLayoutEH;
    exports.AwGalleryResultsDS = AwGalleryResultsDS;
    exports.AwGalleryResultsEH = AwGalleryResultsEH;
    exports.AwHeroDS = AwHeroDS;
    exports.AwHeroEH = AwHeroEH;
    exports.AwHomeAutocompleteDS = AwHomeAutocompleteDS;
    exports.AwHomeAutocompleteEH = AwHomeAutocompleteEH;
    exports.AwHomeFacetsWrapperDS = AwHomeFacetsWrapperDS;
    exports.AwHomeFacetsWrapperEH = AwHomeFacetsWrapperEH;
    exports.AwHomeHeroPatrimonioDS = AwHomeHeroPatrimonioDS;
    exports.AwHomeHeroPatrimonioEH = AwHomeHeroPatrimonioEH;
    exports.AwHomeItemTagsWrapperDS = AwHomeItemTagsWrapperDS;
    exports.AwHomeItemTagsWrapperEH = AwHomeItemTagsWrapperEH;
    exports.AwHomeLayoutComponent = AwHomeLayoutComponent;
    exports.AwHomeLayoutConfig = AwHomeLayoutConfig;
    exports.AwHomeLayoutDS = AwHomeLayoutDS;
    exports.AwHomeLayoutEH = AwHomeLayoutEH;
    exports.AwLinkedObjectsDS = AwLinkedObjectsDS;
    exports.AwLinkedObjectsEH = AwLinkedObjectsEH;
    exports.AwMapDS = AwMapDS;
    exports.AwMapEH = AwMapEH;
    exports.AwMapLayoutComponent = AwMapLayoutComponent;
    exports.AwMapLayoutConfig = AwMapLayoutConfig;
    exports.AwMapLayoutDS = AwMapLayoutDS;
    exports.AwMapLayoutEH = AwMapLayoutEH;
    exports.AwPatrimonioLayoutConfig = AwPatrimonioLayoutConfig;
    exports.AwRelatedEntitiesDS = AwRelatedEntitiesDS;
    exports.AwSchedaBreadcrumbsDS = AwSchedaBreadcrumbsDS;
    exports.AwSchedaDropdownDS = AwSchedaDropdownDS;
    exports.AwSchedaDropdownEH = AwSchedaDropdownEH;
    exports.AwSchedaImageDS = AwSchedaImageDS;
    exports.AwSchedaInnerTitleDS = AwSchedaInnerTitleDS;
    exports.AwSchedaLayoutComponent = AwSchedaLayoutComponent;
    exports.AwSchedaLayoutDS = AwSchedaLayoutDS;
    exports.AwSchedaLayoutEH = AwSchedaLayoutEH;
    exports.AwSchedaMetadataDS = AwSchedaMetadataDS;
    exports.AwSchedaPdfDS = AwSchedaPdfDS;
    exports.AwSchedaPdfEH = AwSchedaPdfEH;
    exports.AwSchedaSidebarEH = AwSchedaSidebarEH;
    exports.AwSearchLayoutComponent = AwSearchLayoutComponent;
    exports.AwSearchLayoutConfig = AwSearchLayoutConfig;
    exports.AwSearchLayoutDS = AwSearchLayoutDS;
    exports.AwSearchLayoutEH = AwSearchLayoutEH;
    exports.AwSearchLayoutTabsDS = AwSearchLayoutTabsDS;
    exports.AwSearchLayoutTabsEH = AwSearchLayoutTabsEH;
    exports.AwSidebarHeaderDS = AwSidebarHeaderDS;
    exports.AwSidebarHeaderEH = AwSidebarHeaderEH;
    exports.AwTableDS = AwTableDS;
    exports.AwTableEH = AwTableEH;
    exports.AwTimelineDS = AwTimelineDS;
    exports.AwTimelineEH = AwTimelineEH;
    exports.AwTimelineLayoutComponent = AwTimelineLayoutComponent;
    exports.AwTimelineLayoutConfig = AwTimelineLayoutConfig;
    exports.AwTimelineLayoutDS = AwTimelineLayoutDS;
    exports.AwTimelineLayoutEH = AwTimelineLayoutEH;
    exports.AwTreeDS = AwTreeDS;
    exports.AwTreeEH = AwTreeEH;
    exports.BreadcrumbsDS = BreadcrumbsDS;
    exports.BreadcrumbsEH = BreadcrumbsEH;
    exports.BubbleChartWrapperComponent = BubbleChartWrapperComponent;
    exports.ChartTippyComponent = ChartTippyComponent;
    exports.CommunicationService = CommunicationService;
    exports.ConfigurationService = ConfigurationService;
    exports.DataWidgetWrapperComponent = DataWidgetWrapperComponent;
    exports.DatepickerWrapperComponent = DatepickerWrapperComponent;
    exports.DvDataWidgetDS = DvDataWidgetDS;
    exports.DvDatepickerWrapperDS = DvDatepickerWrapperDS;
    exports.DvDatepickerWrapperEH = DvDatepickerWrapperEH;
    exports.DvExampleLayoutComponent = DvExampleLayoutComponent;
    exports.DvExampleLayoutConfig = DvExampleLayoutConfig;
    exports.DvExampleLayoutDS = DvExampleLayoutDS;
    exports.DvExampleLayoutEH = DvExampleLayoutEH;
    exports.DvGraphDS = DvGraphDS;
    exports.DvInnerTitleDS = DvInnerTitleDS;
    exports.DvWidgetDS = DvWidgetDS;
    exports.DynamicPathGuard = DynamicPathGuard;
    exports.FacetsDS = FacetsDS;
    exports.FooterDS = FooterDS;
    exports.FooterEH = FooterEH;
    exports.HeaderDS = HeaderDS;
    exports.HeaderEH = HeaderEH;
    exports.JsonConfigService = JsonConfigService;
    exports.LayoutsConfigurationService = LayoutsConfigurationService;
    exports.LocalConfigService = LocalConfigService;
    exports.MainLayoutComponent = MainLayoutComponent;
    exports.MainLayoutConfig = MainLayoutConfig;
    exports.MainLayoutDS = MainLayoutDS;
    exports.MainLayoutEH = MainLayoutEH;
    exports.MainStateService = MainStateService;
    exports.MrAdvancedResultComponent = MrAdvancedResultComponent;
    exports.MrAdvancedResultsLayoutComponent = MrAdvancedResultsLayoutComponent;
    exports.MrAdvancedResultsLayoutConfig = MrAdvancedResultsLayoutConfig;
    exports.MrAdvancedResultsLayoutDS = MrAdvancedResultsLayoutDS;
    exports.MrAdvancedResultsLayoutEH = MrAdvancedResultsLayoutEH;
    exports.MrAdvancedSearchLayoutComponent = MrAdvancedSearchLayoutComponent;
    exports.MrAdvancedSearchLayoutConfig = MrAdvancedSearchLayoutConfig;
    exports.MrAdvancedSearchLayoutDS = MrAdvancedSearchLayoutDS;
    exports.MrAdvancedSearchLayoutEH = MrAdvancedSearchLayoutEH;
    exports.MrAdvancedSearchTagsDS = MrAdvancedSearchTagsDS;
    exports.MrBreadcrumbsDS = MrBreadcrumbsDS;
    exports.MrCollectionDS = MrCollectionDS;
    exports.MrCollectionEH = MrCollectionEH;
    exports.MrContentDS = MrContentDS;
    exports.MrDummyEH = MrDummyEH;
    exports.MrFiltersDS = MrFiltersDS;
    exports.MrFiltersEH = MrFiltersEH;
    exports.MrFooterService = MrFooterService;
    exports.MrFormComponent = MrFormComponent;
    exports.MrFormWrapperAccordionComponent = MrFormWrapperAccordionComponent;
    exports.MrFormWrapperAccordionDS = MrFormWrapperAccordionDS;
    exports.MrFormWrapperAccordionEH = MrFormWrapperAccordionEH;
    exports.MrGalleryComponent = MrGalleryComponent;
    exports.MrGalleryDS = MrGalleryDS;
    exports.MrGalleryEH = MrGalleryEH;
    exports.MrGlossaryLayoutComponent = MrGlossaryLayoutComponent;
    exports.MrGlossaryLayoutConfig = MrGlossaryLayoutConfig;
    exports.MrGlossaryLayoutDS = MrGlossaryLayoutDS;
    exports.MrGlossaryLayoutEH = MrGlossaryLayoutEH;
    exports.MrHeroDS = MrHeroDS;
    exports.MrHomeLayoutComponent = MrHomeLayoutComponent;
    exports.MrHomeLayoutConfig = MrHomeLayoutConfig;
    exports.MrHomeLayoutDS = MrHomeLayoutDS;
    exports.MrHomeLayoutEH = MrHomeLayoutEH;
    exports.MrImageViewerDS = MrImageViewerDS;
    exports.MrInfoBoxDS = MrInfoBoxDS;
    exports.MrInnerTitleDS = MrInnerTitleDS;
    exports.MrItemPreviewDS = MrItemPreviewDS;
    exports.MrItemPreviewsDS = MrItemPreviewsDS;
    exports.MrItineraryLayoutComponent = MrItineraryLayoutComponent;
    exports.MrItineraryLayoutConfig = MrItineraryLayoutConfig;
    exports.MrItineraryLayoutDS = MrItineraryLayoutDS;
    exports.MrItineraryLayoutEH = MrItineraryLayoutEH;
    exports.MrMapDS = MrMapDS;
    exports.MrMapLayoutComponent = MrMapLayoutComponent;
    exports.MrMapLayoutConfig = MrMapLayoutConfig;
    exports.MrMapLayoutDS = MrMapLayoutDS;
    exports.MrMapLayoutEH = MrMapLayoutEH;
    exports.MrMenuService = MrMenuService;
    exports.MrMetadataDS = MrMetadataDS;
    exports.MrNavDS = MrNavDS;
    exports.MrNavEH = MrNavEH;
    exports.MrPostsLayoutComponent = MrPostsLayoutComponent;
    exports.MrPostsLayoutConfig = MrPostsLayoutConfig;
    exports.MrPostsLayoutDS = MrPostsLayoutDS;
    exports.MrPostsLayoutEH = MrPostsLayoutEH;
    exports.MrResourceLayoutComponent = MrResourceLayoutComponent;
    exports.MrResourceLayoutConfig = MrResourceLayoutConfig;
    exports.MrResourceLayoutDS = MrResourceLayoutDS;
    exports.MrResourceLayoutEH = MrResourceLayoutEH;
    exports.MrResourceModalComponent = MrResourceModalComponent;
    exports.MrResourceTabsDS = MrResourceTabsDS;
    exports.MrSearchFacetsLayoutComponent = MrSearchFacetsLayoutComponent;
    exports.MrSearchLayoutComponent = MrSearchLayoutComponent;
    exports.MrSearchLayoutConfig = MrSearchLayoutConfig;
    exports.MrSearchLayoutDS = MrSearchLayoutDS;
    exports.MrSearchLayoutEH = MrSearchLayoutEH;
    exports.MrSearchPageDescriptionComponent = MrSearchPageDescriptionComponent;
    exports.MrSearchPageDescriptionDS = MrSearchPageDescriptionDS;
    exports.MrSearchPageDescriptionEH = MrSearchPageDescriptionEH;
    exports.MrSearchPageTitleDS = MrSearchPageTitleDS;
    exports.MrSearchPageTitleEH = MrSearchPageTitleEH;
    exports.MrSearchResultsDS = MrSearchResultsDS;
    exports.MrSearchResultsEH = MrSearchResultsEH;
    exports.MrSearchResultsTitleDS = MrSearchResultsTitleDS;
    exports.MrSearchResultsTitleEH = MrSearchResultsTitleEH;
    exports.MrSearchTagsDS = MrSearchTagsDS;
    exports.MrSearchTagsEH = MrSearchTagsEH;
    exports.MrStaticLayoutComponent = MrStaticLayoutComponent;
    exports.MrStaticLayoutConfig = MrStaticLayoutConfig;
    exports.MrStaticLayoutDS = MrStaticLayoutDS;
    exports.MrStaticLayoutEH = MrStaticLayoutEH;
    exports.MrStaticMetadataDS = MrStaticMetadataDS;
    exports.MrTextViewerDS = MrTextViewerDS;
    exports.MrTimelineDS = MrTimelineDS;
    exports.MrTimelineEH = MrTimelineEH;
    exports.MrTimelineLayoutComponent = MrTimelineLayoutComponent;
    exports.MrTimelineLayoutConfig = MrTimelineLayoutConfig;
    exports.MrTimelineLayoutDS = MrTimelineLayoutDS;
    exports.MrTimelineLayoutEH = MrTimelineLayoutEH;
    exports.MrTranslationsLoaderService = MrTranslationsLoaderService;
    exports.MrYearHeaderDS = MrYearHeaderDS;
    exports.MrYearHeaderEH = MrYearHeaderEH;
    exports.N7BoilerplateAriannaWebModule = N7BoilerplateAriannaWebModule;
    exports.N7BoilerplateCommonModule = N7BoilerplateCommonModule;
    exports.N7BoilerplateDataVizModule = N7BoilerplateDataVizModule;
    exports.N7BoilerplateLibModule = N7BoilerplateLibModule;
    exports.N7BoilerplateMurucaModule = N7BoilerplateMurucaModule;
    exports.N7BoilerplateSandboxModule = N7BoilerplateSandboxModule;
    exports.Page404LayoutComponent = Page404LayoutComponent;
    exports.Page404LayoutConfig = Page404LayoutConfig;
    exports.Page404LayoutDS = Page404LayoutDS;
    exports.Page404LayoutEH = Page404LayoutEH;
    exports.PdfViewerComponent = PdfViewerComponent;
    exports.ReadMoreComponent = ReadMoreComponent;
    exports.RestProvider = RestProvider;
    exports.SbExampleLayoutComponent = SbExampleLayoutComponent;
    exports.SbExampleLayoutConfig = SbExampleLayoutConfig;
    exports.SbExampleLayoutDS = SbExampleLayoutDS;
    exports.SbExampleLayoutEH = SbExampleLayoutEH;
    exports.SbImageViewerDS = SbImageViewerDS;
    exports.SbImageViewerEH = SbImageViewerEH;
    exports.SbImageViewerLayoutComponent = SbImageViewerLayoutComponent;
    exports.SbImageViewerLayoutConfig = SbImageViewerLayoutConfig;
    exports.SbImageViewerLayoutDS = SbImageViewerLayoutDS;
    exports.SbImageViewerLayoutEH = SbImageViewerLayoutEH;
    exports.SbImageViewerToolsDS = SbImageViewerToolsDS;
    exports.SbImageViewerToolsEH = SbImageViewerToolsEH;
    exports.SchedaDropdownComponent = SchedaDropdownComponent;
    exports.SearchFacetsLayoutConfig = SearchFacetsLayoutConfig;
    exports.SearchFacetsLayoutDS = SearchFacetsLayoutDS;
    exports.SearchFacetsLayoutEH = SearchFacetsLayoutEH;
    exports.SmartBreadcrumbsComponent = SmartBreadcrumbsComponent;
    exports.SmartPaginationComponent = SmartPaginationComponent;
    exports.SmartPaginationDS = SmartPaginationDS;
    exports.SmartPaginationEH = SmartPaginationEH;
    exports.SubnavDS = SubnavDS;
    exports.SubnavEH = SubnavEH;
    exports.ɵa = MainLayoutComponent;
    exports.ɵb = AbstractLayout;
    exports.ɵba = DatepickerWrapperComponent;
    exports.ɵbb = DvExampleLayoutComponent;
    exports.ɵbc = EscapeHtmlPipe;
    exports.ɵbd = MrAdvancedResultsLayoutComponent;
    exports.ɵbe = MrLayoutStateService;
    exports.ɵbf = MrResourceModalService;
    exports.ɵbg = MrAdvancedSearchLayoutComponent;
    exports.ɵbh = MrGlossaryLayoutComponent;
    exports.ɵbi = MrHomeLayoutComponent;
    exports.ɵbj = MrItineraryLayoutComponent;
    exports.ɵbk = MrMapLayoutComponent;
    exports.ɵbl = MrPostsLayoutComponent;
    exports.ɵbm = MrResourceLayoutComponent;
    exports.ɵbn = MrSearchFacetsLayoutComponent;
    exports.ɵbo = MrSearchLayoutComponent;
    exports.ɵbp = MrSearchService;
    exports.ɵbq = MrStaticLayoutComponent;
    exports.ɵbr = MrTimelineLayoutComponent;
    exports.ɵbs = ReadMoreComponent;
    exports.ɵbt = MrFormComponent;
    exports.ɵbu = MrFormWrapperAccordionComponent;
    exports.ɵbv = MrSearchPageDescriptionComponent;
    exports.ɵbw = MrResourceModalComponent;
    exports.ɵbx = MrGalleryComponent;
    exports.ɵby = MrAdvancedResultComponent;
    exports.ɵbz = SbExampleLayoutComponent;
    exports.ɵc = ConfigurationService;
    exports.ɵca = SbImageViewerLayoutComponent;
    exports.ɵd = LayoutsConfigurationService;
    exports.ɵe = MainStateService;
    exports.ɵf = Page404LayoutComponent;
    exports.ɵg = SmartPaginationComponent;
    exports.ɵh = CommunicationService;
    exports.ɵi = ApolloProvider;
    exports.ɵj = RestProvider;
    exports.ɵk = AwCollectionLayoutComponent;
    exports.ɵl = AwEntitaLayoutComponent;
    exports.ɵm = AwFacetsWrapperComponent;
    exports.ɵn = AwGalleryLayoutComponent;
    exports.ɵo = AwSearchService;
    exports.ɵp = AwHomeLayoutComponent;
    exports.ɵq = AwMapLayoutComponent;
    exports.ɵr = AwSchedaLayoutComponent;
    exports.ɵs = AwSearchLayoutComponent;
    exports.ɵt = AwTimelineLayoutComponent;
    exports.ɵu = BubbleChartWrapperComponent;
    exports.ɵv = ChartTippyComponent;
    exports.ɵw = PdfViewerComponent;
    exports.ɵx = SchedaDropdownComponent;
    exports.ɵy = SmartBreadcrumbsComponent;
    exports.ɵz = DataWidgetWrapperComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=n7-frontend-boilerplate.umd.js.map
