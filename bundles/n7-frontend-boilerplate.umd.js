(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@n7-frontend/components'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/platform-browser'), require('@n7-frontend/core'), require('tippy.js')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/boilerplate', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@n7-frontend/components', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/platform-browser', '@n7-frontend/core', 'tippy.js'], factory) :
    (global = global || self, factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].boilerplate = {}), global.ng.core, global.ng.common, global.ng.common.http, global.components, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.platformBrowser, global.core$1, global.tippy));
}(this, function (exports, core, common, http, components, rxjs, operators, router, platformBrowser, core$1, tippy) { 'use strict';

    tippy = tippy && tippy.hasOwnProperty('default') ? tippy['default'] : tippy;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
        ]; };
        /** @nocollapse */ ConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(core.ɵɵinject("config")); }, token: ConfigurationService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LayoutsConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
        ]; };
        /** @nocollapse */ LayoutsConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(core.ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
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
                headTitle: new rxjs.ReplaySubject(),
                pageTitle: new rxjs.ReplaySubject(),
                subnav: new rxjs.ReplaySubject(),
                breadcrumbs: new rxjs.ReplaySubject(),
                filters: new rxjs.ReplaySubject(),
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ MainStateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
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
            queryBody: "\n    {\n      getTreeOfItems(treeId: \"patrimonioId\" ) {\n        id\n        label\n        icon\n        branches {\n          label\n          id\n          icon\n          img\n          branches {\n            label\n            id\n            icon\n            img\n            branches {\n              label\n              id\n              icon\n              img\n            }\n          }\n        }\n      }\n    }\n    "
        },
        'globalFilter': {
            queryName: 'globalFilter',
            queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          countData {\n            type {\n              id\n              label\n              configKey\n            }\n            count\n          }\n          entitiesCountData {\n            entity {\n              id\n              label\n              typeOfEntity {\n                id\n              }\n            }\n            count\n          }\n        }\n        itemsPagination {\n          totalCount\n          items {\n            item {\n              id\n              label\n              info {\n                key\n                value\n              }\n            }\n            thumbnail\n            relatedTOEData {\n              type {\n                id\n                label\n                configKey\n              }\n              count\n            }\n          }\n        }\n      }\n    }"
        },
        'getEntityDetails': {
            queryName: 'getEntityDetails',
            queryBody: "{\n      getEntityDetails(__PARAMS__){\n        overviewTab\n        entity {\n          label\n          id\n          typeOfEntity {\n            configKey\n          }\n        }\n        fieldsTab {\n          label\n          fields {\n            key\n            value\n          }\n        }\n        entities {\n          entity {\n            id\n            label\n            typeOfEntity {\n              configKey\n            }\n          }\n          count\n        }\n        extraTab\n        wikiTab {\n          text\n          url\n        }\n        items {\n          breadcrumbs {\n            link\n            label\n          }\n          item {\n            id\n            label\n            info {\n              key\n              value\n            }\n          }\n          thumbnail\n          relatedTOEData {\n            type {\n              id\n              configKey\n            }\n            count\n          }\n        }\n      }\n    }\n    "
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
            return source$.pipe(operators.map((/**
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApolloProvider.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ ApolloProvider.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(core.ɵɵinject(ConfigurationService), core.ɵɵinject(http.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RestProvider.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ RestProvider.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(core.ɵɵinject(ConfigurationService), core.ɵɵinject(http.HttpClient)); }, token: RestProvider, providedIn: "root" });
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
                .pipe(operators.catchError((/**
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
            return rxjs.empty();
        };
        CommunicationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommunicationService.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: ApolloProvider },
            { type: RestProvider }
        ]; };
        /** @nocollapse */ CommunicationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(core.ɵɵinject(ConfigurationService), core.ɵɵinject(ApolloProvider), core.ɵɵinject(RestProvider)); }, token: CommunicationService, providedIn: "root" });
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
    var   /**
     * @abstract
     */
    AbstractLayout = /** @class */ (function () {
        function AbstractLayout(config) {
            this.config = config;
            this.widgets = this.config.widgets;
            this.lb = new core$1.LayoutBuilder(this.config.layoutId);
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
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, route = _a.route;
            this.configuration = configuration;
            this.mainState = mainState;
            this.router = router;
            this.route = route;
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
    }(core$1.LayoutDataSource));
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
    var MainLayoutEH = /** @class */ (function (_super) {
        __extends(MainLayoutEH, _super);
        function MainLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
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
            core$1.EventHandler.globalEvents$.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
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
            this.route.queryParams.pipe(operators.filter((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                if (Object.keys(params).length)
                    return true;
                return false;
            })), operators.first()).subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                // setTimeout for fixing route event timings
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.emitGlobal('queryparams', params);
                }));
            }));
        };
        return MainLayoutEH;
    }(core$1.EventHandler));
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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        FacetsDS.prototype.searchModel;
    }

    /**
     * @fileoverview added by tsickle
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
            /** @type {?} */
            var groups = [];
            if (!this.searchModel)
                this.searchModel = data.searchModel;
            /** @type {?} */
            var id = this.searchModel.getId();
            /** @type {?} */
            var fields = this.searchModel.getFields();
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
    }(core$1.DataSource));
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
            return components.FOOTER_MOCK;
        };
        return FooterDS;
    }(core$1.DataSource));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
            // listen to outer events
            core$1.EventHandler.globalEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'global.queryparams':
                        if (!_this._facetsChanged) {
                            _this.dataSource.updateFiltersFromQueryParams(payload);
                            _this.dataSource.updateInputsFromFilters();
                        }
                        break;
                    default:
                        break;
                }
            }));
        };
        return FacetsWrapperEH;
    }(core$1.EventHandler));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FacetsWrapperEH.prototype._facetsChanged;
    }

    /**
     * @fileoverview added by tsickle
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
    }(core$1.EventHandler));

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
    var MainLayoutConfig = {
        layoutId: 'main-layout',
        widgets: [{
                id: 'header'
            }, {
                id: 'subnav'
            }, {
                id: 'breadcrumbs'
            }, {
                id: 'footer',
                hasStaticData: true
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
            { type: core.Component, args: [{
                        selector: 'main-layout',
                        template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer \n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        MainLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
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
    }(core$1.LayoutDataSource));
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
            _this.destroyed$ = new rxjs.Subject();
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
    }(core$1.EventHandler));
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'n7-facets-wrapper',
                        template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
                    }] }
        ];
        FacetsWrapperComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS,
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            components.DvComponentsLibModule
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
    }(core$1.LayoutDataSource));

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
    }(core$1.EventHandler));

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
            var CONFIG = this.options.config;
            this.pageSize = this.options.size;
            this.currentPage = Number(this.options.page);
            this.totalPages = Math.floor(data.length / Number(this.pageSize));
            this.context = this.options.context;
            return unpackData(data, this.currentPage, this.pageSize, CONFIG, this.totalPages, this.context);
        };
        return AwLinkedObjectsDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        AwLinkedObjectsDS.prototype.totalPages;
        /** @type {?} */
        AwLinkedObjectsDS.prototype.currentPage;
        /** @type {?} */
        AwLinkedObjectsDS.prototype.pageSize;
        /** @type {?} */
        AwLinkedObjectsDS.prototype.context;
    }
    /**
     * @param {?} data
     * @param {?} page
     * @param {?} size
     * @param {?} config
     * @param {?} totalPages
     * @param {?} context
     * @return {?}
     */
    function unpackData(data, page, size, config, totalPages, context) {
        if (config) {
            /** @type {?} */
            var keys = config.get('config-keys');
            switch (context) {
                case 'home':
                    /** @type {?} */
                    var lengthLimit = config.get('home-layout')['max-item-length'];
                    break;
                default:
                    break;
            }
        }
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
                title: 
                // if there is a max string length in config, use it
                lengthLimit && el.item.label.length > lengthLimit ?
                    el.item.label.slice(0, lengthLimit) + '...' : el.item.label,
                payload: el.item.id,
                classes: context == 'entita' ? 'is-fullwidth' : '',
                metadata: [
                    {
                        classes: 'n7-objects__metadata-artist',
                        items: el.item.info.map((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var value = _a.value, key = _a.key;
                            return ({
                                label: key === 'author' ? 'Artista' : null,
                                value: value
                            });
                        }))
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
                                icon: keys[toe.type.configKey].icon,
                                classes: 'color-' + toe.type.configKey
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
        if (context === 'home') {
            return {
                result: result,
                actions: [
                    { label: 'Vedi Tutti 7805' },
                    { label: 'Vedi Altri 7795' }
                ]
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
            var append = [];
            /** @type {?} */
            var config = this.options.config;
            /** @type {?} */
            var maxLength = config.get('home-layout')['max-item-length'] / 2;
            response.items.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                // divide prefix and suffix
                // let match = el.item.label.match(regex)
                /** @type {?} */
                var match = regex.exec(el.item.label);
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
                    append.push({ prefix: prefix, suffix: suffix, payload: el.item.id });
                }
            }));
            return { typed: key, append: append };
        };
        return AwAutocompleteWrapperDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
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
            /** @type {?} */
            var response = data.source;
            // if ( !response || !response.entitiesData ) {return; }
            this.allBubbles = [];
            if (data.selectedBubbles) {
                this.selectedBubbles = data.selectedBubbles;
            }
            if (response.entitiesData) {
                for (var i = 0; i < response.entitiesData.length; i++) {
                    /** @type {?} */
                    var currentToE = response.entitiesData[i];
                    for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                        this.allBubbles.push(__assign({}, currentToE.entitiesCountData[j], { color: this.options.configKeys[currentToE.countData.type.configKey]['color']['hex'] }));
                    }
                }
            }
            else {
                for (var i = 0; i < response.connectedEntities.length; i++) {
                    /** @type {?} */
                    var color = this.options.configKeys[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.options.configKeys[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "";
                    this.allBubbles.push(__assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
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
            this.update(data);
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
            var result = this.allBubbles.filter((/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                for (var i = 0; i < _this.facetData.length; i++) {
                    if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id) {
                        if (!_this.facetData[i].enabled) {
                            return false;
                        }
                    }
                }
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
                rxjs.fromEvent(window, "resize").pipe(operators.debounce((/**
                 * @return {?}
                 */
                function () { return rxjs.interval(200); }))).
                    subscribe((/**
                 * @return {?}
                 */
                function () {
                    // only resets the bubbles if the window's width has changed
                    // (if the resize only effects the window's hight then the bubble chart
                    // doesn't get reset)
                    /** @type {?} */
                    var container = document.getElementById(_this.options.containerId);
                    /** @type {?} */
                    var bubblePayload = {
                        width: container.offsetWidth,
                        reset: true
                    };
                    _this.update(bubblePayload);
                }));
                this.windowResizeSet = true;
            }
        };
        return AwBubbleChartDS;
    }(core$1.DataSource));
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
    }(core$1.DataSource));

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
            return components.TABLE_MOCK;
        };
        return AwTableDS;
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.autoComplete = {};
            _this.tippyMaker = (/**
             * @param {?} res
             * @param {?} id
             * @return {?}
             */
            function (res, id) {
                // create data for this facet
                if (!_this.autoComplete[id]) {
                    _this.autoComplete[id] = {
                        // data: [],         // array of suggestions
                        template: undefined,
                        tippy: undefined,
                        // tippy data / config
                        open: true,
                    };
                    /** @type {?} */
                    var ac_1 = _this.autoComplete[id];
                    if (!ac_1.tippy) {
                        /** @type {?} */
                        var target = '.' + id;
                        ac_1.tippy = tippy(target, {
                            content: '<span>Loading results</span>',
                            trigger: 'manual',
                            interactive: true,
                            arrow: false,
                            flip: false,
                            appendTo: 'parent',
                            theme: 'light-border aw-home__facet-tippy',
                            placement: 'bottom-start',
                            maxWidth: '100%',
                            onHidden: (/**
                             * @return {?}
                             */
                            function () {
                                ac_1.open = false;
                            }),
                            onShow: (/**
                             * @return {?}
                             */
                            function () {
                                /** @type {?} */
                                var node = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace('-search', ''))[0]
                                // after I use this node, it becomes undefined
                                ;
                                // after I use this node, it becomes undefined
                                if (node) { // if I have the node, don't try to get it again
                                    node.setAttribute('style', 'display: block');
                                    ac_1.tippy.setContent(node);
                                }
                            }),
                        })[0];
                    }
                }
                /** @type {?} */
                var ac = _this.autoComplete[id];
                if (res.totalCount > 0) {
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
            var facetData = _a.facetData, lockedFacets = _a.lockedFacets;
            /** @type {?} */
            var headers = [];
            /** @type {?} */
            var inputs = [];
            facetData.forEach((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) {
                /*
                 For each facet on back-end, push a header-component
                 and a facet-component (search input only) to each array.
                 */
                if (lockedFacets[facet.type.id.replace('toe-', '')]) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
                /** @type {?} */
                var headerClasses = [];
                /** @type {?} */
                var iconClasses = [facet.icon];
                if (!facet.enabled)
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
                    classes: headerClasses.join(' ') + (facet.locked ? ' is-blocked' : ' not-blocked'),
                    payload: facet.type.id,
                });
                // make array of inputs data
                inputs.push({
                    sections: [{
                            inputs: [{
                                    type: 'text',
                                    placeholder: facet['input-placeholder'],
                                    icon: 'n7-icon-search',
                                    disabled: !facet.enabled,
                                    inputPayload: String(facet.type.id) + '-search',
                                    iconPayload: String(facet.type.id) + '-search',
                                    enterPayload: String(facet.type.id) + '-search',
                                    classes: String(facet.type.id) + '-search',
                                }]
                        }]
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
    }(core$1.DataSource));
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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
                group: AwEntitaMetadataViewerDS.unpackFields(data),
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
    }(core$1.DataSource));

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
                    if (classes.indexOf('is-expanded') > -1) {
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
                else if (parents.indexOf(it['_meta']) >= 0) {
                    it['classes'] = classes + ' is-expanded';
                }
                if (typeof it['items'] != 'undefined' && it['items'].length > 0) {
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
                    function (item) {
                        treeItem['items'].push(_this.parseTree(item, true, currParents));
                    }));
                }
            }));
            return treeItem;
        };
        return AwTreeDS;
    }(core$1.DataSource));
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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
    }(core$1.DataSource));

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
        AwSchedaInnerTitleDS: AwSchedaInnerTitleDS
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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
            this.innerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    // case 'your-event.click':
                    //   // do something
                    //   break;
                    default:
                        console.warn('unhandled event of type:', type);
                        break;
                }
            }));
        };
        return AwAutocompleteWrapperEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
                    case 'aw-bubble-chart.mouse_enter':
                        /** @type {?} */
                        var currBubble = _this.dataSource.onBubbleMouseEnter({
                            bubblePayload: event.payload.bubblePayload,
                            bubble: event.payload.bubble
                        });
                        event.payload.currBubble = currBubble;
                        _this.emitOuter('mouse_enter', event.payload);
                        break;
                    case 'aw-bubble-chart.mouse_leave':
                        /*   this.dataSource.onBubbleMouseLeave(
                             {
                               bubblePayload:event.payload.bubblePayload,
                               bubble:event.payload.bubble
                             });*/
                        _this.emitOuter('mouse_leave', event.payload);
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
                            _this.dataSource.setAllBubblesFromApolloQuery(payload);
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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
                    case 'aw-home-layout.facetswrapperresponse':
                        _this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                        break;
                    case 'aw-home-layout.filterbubbleresponse':
                        // console.log({type, payload})
                        break;
                    default:
                        // console.warn('unhandled outer event of type', type)
                        // silent ignore
                        break;
                }
            }));
        };
        return AwHomeFacetsWrapperEH;
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH$1 = /*#__PURE__*/Object.freeze({
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
            { type: core.Component, args: [{
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
            return this.http.get(path).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of({}); })), operators.tap((/**
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JsonConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        /** @nocollapse */ JsonConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
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
                var label = _a.label, value = _a.value, counter = _a.counter, hidden = _a.hidden;
                // normalize value
                value = '' + value;
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
                    classes: hidden ? 'is-hidden' : '',
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
            var isArray = this.config.filterConfig.isArray;
            this.output.forEach((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                    config.classes = 'is-active';
                }
                else if (facetValue === config._meta.value) {
                    config.classes = 'is-active';
                }
                else {
                    config.classes = null;
                }
            }));
        };
        return FacetInputLink;
    }(FacetInput));

    /**
     * @fileoverview added by tsickle
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
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
        ISearchConfig.prototype.facets;
        /** @type {?} */
        ISearchConfig.prototype.page;
        /** @type {?} */
        ISearchConfig.prototype.results;
        /** @type {?} */
        ISearchConfig.prototype.fields;
        /** @type {?} */
        ISearchConfig.prototype.baseUrl;
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
            this._results$ = new rxjs.Subject();
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
                _this._inputs
                    .filter((/**
                 * @param {?} input
                 * @return {?}
                 */
                function (input) { return input.getFacetId() === facetId; }))
                    .forEach((/**
                 * @param {?} input
                 * @return {?}
                 */
                function (input) {
                    input.setActive(value);
                }));
            }));
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
            this._inputs
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.getFacetId() === facetId; }))
                .forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.setData(data); }));
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
        SearchService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SearchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
        return SearchService;
    }());
    if (false) {
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
    var AwEntitaLayoutDS = /** @class */ (function (_super) {
        __extends(AwEntitaLayoutDS, _super);
        function AwEntitaLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.myResponse = {}; // backend response object
            // selected nav item
            _this.navHeader = {}; // nav-header (custom) data
            // pagination value (url param)
            _this.pageSize = 10; // linked objects page size
            _this.handleNavUpdate = (/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                /*
                  Updates selected tab on tab change
                */
                _this.selectedTab = tab;
                _this.updateWidgets(_this.myResponse);
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
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options, titleService = _a.titleService, communication = _a.communication;
            this.communication = communication;
            this.configuration = configuration;
            this.mainState = mainState;
            this.options = options;
            this.router = router;
            this.titleService = titleService;
            this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
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
            /** @type {?} */
            var selected = this.selectedTab;
            this.one('aw-entita-nav').update({ data: data, selected: selected });
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
                text: this.myResponse.entity.label,
                color: this.myResponse.entity.typeOfEntity.configKey
            };
            switch (this.selectedTab) { // make dynamic content depending on request
                case 'overview':
                    {
                        this.one('aw-bubble-chart').updateOptions({
                            context: 'scheda',
                            configKeys: this.configuration.get("config-keys"),
                            bubbleContainerId: 'overviewBubbleChartContainer',
                            containerId: 'bubble-chart-container-overview',
                        });
                        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab });
                        this.one('aw-entita-metadata-viewer').update(res.fieldsTab);
                        this.one('aw-linked-objects').updateOptions({ size: 3, config: this.configuration, context: 'entita' });
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
                            config: this.configuration,
                            page: this.currentPage,
                            size: this.pageSize,
                        });
                        this.one('aw-linked-objects').update(res.items);
                    }
                    break;
                case 'entita-collegate':
                    {
                        this.one('aw-bubble-chart').updateOptions({
                            context: 'scheda',
                            configKeys: this.configuration.get("config-keys"),
                            bubbleContainerId: 'bubbleChartContainer',
                            containerId: 'bubble-chart-container',
                        });
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
    }(core$1.LayoutDataSource));
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
        /** @type {?} */
        AwEntitaLayoutDS.prototype.bubblesEnabled;
        /**
         * @type {?}
         * @private
         */
        AwEntitaLayoutDS.prototype.communication;
        /** @type {?} */
        AwEntitaLayoutDS.prototype.handleNavUpdate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwEntitaLayoutEH = /** @class */ (function (_super) {
        __extends(AwEntitaLayoutEH, _super);
        function AwEntitaLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
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
                        _this.dataSource.currentPage = _this.route.snapshot.params.page || '';
                        _this.listenRoute();
                        _this.loadNavigation(_this.entityId);
                        break;
                    case 'aw-entita-layout.destroy':
                        _this.destroyed$.next();
                        break;
                    case 'aw-entita-layout.showmore':
                        if (payload) {
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
                    case "aw-bubble-chart.bubble-tooltip-goto-click":
                        if (!payload || !payload.entityId)
                            return;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: ["aw/entita/" + payload.entityId + "/overview"]
                        });
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
                            res['connectedEntities'] = res.entities;
                            /** @type {?} */
                            var connectedEntities = { source: res };
                            if (_this.dataSource.bubblesEnabled) {
                                _this.emitOuter('filterbubbleresponse', connectedEntities);
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
        AwEntitaLayoutEH.prototype.loadNavigation = /**
         * @private
         * @param {?} selectedItem
         * @return {?}
         */
        function (selectedItem) {
            var _this = this;
            console.log('LOAD NAVIGATION');
            this.dataSource.getNavigation(selectedItem).subscribe((/**
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
    }(core$1.EventHandler));
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
            { type: core.Component, args: [{
                        selector: 'aw-entita-layout',
                        template: "<div class=\"aw-entity\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <div class=\"aw-entity__content\" [ngSwitch]=\"lb.dataSource.selectedTab\">\n        <ng-container *ngSwitchCase=\"'overview'\">\n            <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'campi'\">\n            <ng-container *ngTemplateOutlet=\"campi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'oggetti-collegati'\">\n            <ng-container *ngTemplateOutlet=\"oggetti\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'entita-collegate'\">\n            <ng-container *ngTemplateOutlet=\"entita\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'maxxi'\">\n            <ng-container *ngTemplateOutlet=\"maxxi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'wiki'\">\n            <ng-container *ngTemplateOutlet=\"wiki\"></ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<!-- navigation page content templates -->\n<ng-template #overview>\n    <section>\n        <div class=\"aw-entity__content-section\">\n            <div class=\"aw-entity__overview-description\">\n                {{lb.dataSource.myResponse.extraTab}}\n            </div>\n            <div class=\"aw-entity-layout__button-wrapper\">\n                <button *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                    DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                </button>\n                <button *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                    DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n        </div>\n\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                    <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                        TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\" [data]=\"data\">\n                </n7-metadata-viewer>\n            </div>\n        </ng-container>\n\n        <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n            <div class=\"aw-entity__content-section-header\">\n                <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n                <button class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                    TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n            <ng-container *ngFor=\"let preview of lb.widgets['aw-linked-objects'].ds.out$ | async\">\n                <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                </n7-breadcrumbs>\n                <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n\n        <div\n            class=\"aw-entity__content-section aw-entity__content-section-overview\"\n            *ngIf=\"lb.dataSource.bubblesEnabled\"\n        >\n            <div class=\"aw-entity__content-section-header\">\n                <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\">\n                    TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n            <div  [style.overflow]=\"'hidden'\">\n                <aw-bubble-chart-wrapper\n                [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                [container]=\"'bubble-chart-container-overview'\"\n                [buttons]=\"['goto']\"\n                >\n                    <n7-bubble-chart\n                    [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </div>\n        </div>\n    </section>\n</ng-template>\n\n<ng-template #campi>\n    <div class=\"aw-entity__content-section aw-entity__content-section-fields\">\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n            </div>\n            <n7-metadata-viewer class=\"aw-entita-layout__metadata-viewer\" [data]=\"data\">\n            </n7-metadata-viewer>\n        </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #oggetti>\n    <div class=\"aw-entity__content-section aw-entity__content-section-objects\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n        </div>\n        <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n            <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n            </n7-breadcrumbs>\n            <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-item-preview>\n        </ng-container>\n        <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n        </n7-pagination>\n    </div>\n</ng-template>\n\n<ng-template #entita>\n    <div class=\"aw-entity__content-section aw-entity__content-section-entities\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n        </div>\n        <div  [style.overflow]=\"'hidden'\">\n            <aw-bubble-chart-wrapper\n            [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n            [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n            [container]=\"'bubble-chart-container'\"\n            [buttons]=\"['goto']\"\n            >\n                <n7-bubble-chart\n                [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #maxxi>\n    <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n        </div>\n        <div>\n            {{lb.dataSource.myResponse.extraTab}}\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #wiki>\n    <div class=\"aw-entity__content-section aw-entity__content-section-wiki\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n        </div>\n        <div>\n            {{lb.dataSource.myResponse.wikiTab.text}}\n        </div>\n        <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n            {{lb.dataSource.myResponse.wikiTab.url}}\n        </a>\n    </div>\n</ng-template>"
                    }] }
        ];
        /** @nocollapse */
        AwEntitaLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: CommunicationService },
            { type: MainStateService },
            { type: platformBrowser.Title }
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
            _this.lockedFacets = {};
            _this.facetInputs = {};
            // all the bubbles as they have been given by apollo
            // (the objects in the allBubbles are not the same bubble objects
            // present in the bubble chart)
            _this.allBubbles = null;
            _this.autocompletePopoverOpen = false;
            _this.autocompleteChanged$ = new rxjs.Subject();
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
            _this.loadingBubbles = false;
            _this.bubblesEnabled = false;
            _this.updateComponent = (/**
             * @param {?} id
             * @param {?} data
             * @param {?} options
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
            this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
            this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
            // update streams
            this.mainState.update('headTitle', 'Arianna Web > Home');
            this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
            // listen autocomplete changes
            this._listenAutoCompleteChanges();
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
            this.one('aw-home-facets-wrapper').update({
                facetData: this.facetData,
                lockedFacets: this.lockedFacets
            });
            this.one('aw-bubble-chart').updateOptions({
                context: 'home',
                configKeys: this.configuration.get("config-keys"),
                bubbleContainerId: 'bubbleChartContainer',
                containerId: 'bubble-chart-container',
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
            this.one('aw-linked-objects').updateOptions({ context: 'home', config: this.configuration });
            this.one('aw-linked-objects').update(response.itemsPagination.items);
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
            var bubblePayolad = {
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
            return bubblePayolad;
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
            /** @type {?} */
            var selectedEntitiesIds = [];
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
                        selectedEntitiesIds.push(entityId);
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
                    selectedEntitiesIds: selectedEntitiesIds,
                    itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
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
            function (f) { return f.enabled; })).length - 1;
            this.facetData.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                if (f.type.id === facetId && f.locked === true) {
                    // if user clicked on a locked facet, ignore it
                    return;
                }
                if (f.type.id === facetId) {
                    // if this is the clicked facet
                    if (f.enabled && enabledFacets >= 1) {
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
                else {
                    // if this is another facet
                    if (enabledFacets === 1 && f.enabled) {
                        f.locked = true;
                    }
                    else {
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
                            label: label, icon: "n7-icon-close",
                            payload: sBubble.id,
                            classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id
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
            var source$ = rxjs.fromEvent(document.getElementById('bubble-results-list'), 'scroll');
            // height control
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._setHasScrollBackground(el);
            }), 500);
            // scroll listen
            source$.pipe(operators.debounceTime(50)).subscribe((/**
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
            this.autocompleteChanged$.pipe(operators.debounceTime(500)).subscribe((/**
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
    }(core$1.LayoutDataSource));
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
        AwHomeLayoutDS.prototype.updateComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { takeUntil } from 'rxjs/operators';
    // import { debounce, debounceTime } from 'rxjs/operators';
    var   
    // import { takeUntil } from 'rxjs/operators';
    // import { debounce, debounceTime } from 'rxjs/operators';
    AwHomeLayoutEH = /** @class */ (function (_super) {
        __extends(AwHomeLayoutEH, _super);
        function AwHomeLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
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
                            var params = {
                                input: payload.value,
                                typeOfConfigKey: payload.inputPayload.replace('-search', ''),
                                itemsPagination: {
                                    // offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                                    offset: 0, limit: _this.configuration.get('home-layout')['results-limit']
                                }
                            };
                            _this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
                             * @param {?} response
                             * @return {?}
                             */
                            function (response) {
                                _this.emitOuter('facetswrapperresponse', { facetId: payload, response: response });
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response: response }, // DATA
                                { config: _this.configuration } // OPTIONS
                                );
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
                            path: ["aw/entita/" + payload.entityId + "/overview"]
                        });
                        break;
                    case "aw-bubble-chart.bubble-tooltip-select-click":
                        payload._bubbleChart = _this.dataSource._bubbleChart;
                        _this.emitOuter('bubble-tooltip-select-click', payload);
                        break;
                    case 'aw-bubble-chart.click':
                        if (payload.source === 'bubble') {
                            if (payload.bubble) {
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
        return AwHomeLayoutEH;
    }(core$1.EventHandler));
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
            { type: core.Component, args: [{
                        selector: 'aw-home-layout',
                        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\"\n        *ngIf=\"lb.dataSource.bubblesEnabled\"\n    >\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n        <div\n            class=\"aw-home__bubble-chart-wrapper\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\"\n        >\n            <aw-bubble-chart-wrapper\n                [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                [container]=\"'bubble-chart-container'\"\n                [buttons]=\"['select', 'goto']\"\n            >\n                    <n7-bubble-chart\n                        [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length > 0\" >\n            <div class=\"aw-home__bubble-results\"\n                id=\"home-bubble-results\"\n                [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column', 'transition': 'opacity 1s ease-in-out;' }\"\n                [style.opacity]=\"lb.dataSource.loadingBubbles ? '0' : '1'\"\n            >\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                        {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\" >\n                    <div class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\">\n                        <ng-container *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\" class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    <!-- aw-linked-objects__actions -->\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\" class=\"aw-home__bubble-results-list-actions\">\n                        <button class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                        <button class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-others\">\n                            {{action[1].label}}\n                        </button>\n                    </div>\n                </div>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-advanced-autocomplete\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n         class=\"aw-simple-autocomplete__{{widgetData.header.payload}}\"\n         style=\"display: none;\">\n         <n7-simple-autocomplete\n            [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n        </n7-simple-autocomplete>\n    </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        AwHomeLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: router.Router },
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
            this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
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
                this.contentParts = [];
                /** @type {?} */
                var content = {};
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
            /*if ( response.connectedEntities ) {
              this.hasBubbles = true;
              this.setAllBubblesFromApolloQuery(response);
            } else {
              this.hasBubbles = false;
              this.one('aw-scheda-bubble-chart').update(null);
            }*/
            /* Similar item */
            if (response.similarItems) {
                this.hasSimilarItems = true;
                this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
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
    }(core$1.LayoutDataSource));
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwSchedaLayoutEH = /** @class */ (function (_super) {
        __extends(AwSchedaLayoutEH, _super);
        function AwSchedaLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
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
                        if (response) {
                            _this.dataSource.loadContent(response);
                            if (response.connectedEntities) {
                                _this.dataSource.hasBubbles = true;
                                /** @type {?} */
                                var connectedEntities = { source: response, connectedEntities: response.connectedEntities };
                                if (_this.dataSource.bubblesEnabled) {
                                    _this.emitOuter('filterbubbleresponse', connectedEntities);
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
                    _this.dataSource.updateNavigation(response);
                    _this.emitOuter('navigationresponse', response);
                }
                if (selectedItem) {
                    _this.emitOuter('selectItem', selectedItem);
                }
            }));
        };
        return AwSchedaLayoutEH;
    }(core$1.EventHandler));
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
            { type: core.Component, args: [{
                        selector: 'aw-scheda-layout',
                        template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n\n         <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree\">\n            <n7-sidebar-header\n                [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"\n            ></n7-sidebar-header>\n            <n7-tree\n                [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-tree'].emit\"\n                [hidden]=\"lb.dataSource.sidebarCollapsed\"\n            ></n7-tree>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper\">\n            <n7-breadcrumbs\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\"\n            ></n7-breadcrumbs>\n\n            <n7-inner-title\n            [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\"\n            ></n7-inner-title>\n\n            <n7-image-viewer\n                [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\"\n            >\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\"\n                [hidden] = \"!lb.hasMetadata\"\n            >\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.metadataSectionTitle}}</div>\n                <n7-metadata-viewer\n                    [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section\n                class=\"aw-scheda__bubble-chart\"\n                *ngIf=\"lb.dataSource.bubblesEnabled\"\n            >\n                <div\n                    [hidden] = \"!lb.dataSource.hasBubbles\"\n                    class=\"aw-scheda__inner-title\">{{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <div  [style.overflow]=\"'hidden'\">\n                    <aw-bubble-chart-wrapper\n                    [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                    [container]=\"'bubble-chart-container'\"\n                    [buttons]=\"['goto']\"\n                    >\n                        <n7-bubble-chart\n                        [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </section>\n\n            <section\n                [hidden] = \"!lb.dataSource.hasSimilarItems\"\n                id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items\">\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                        <n7-item-preview\n                            [data]=\"widgetData\"\n                            >\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n             </section>\n        </div>\n    </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        AwSchedaLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: platformBrowser.Title },
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
    }(core$1.LayoutDataSource));

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
    }(core$1.EventHandler));

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
            { type: core.Component, args: [{
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
    var ɵ0 = [], ɵ1 = [{
            value: '1',
            label: 'Cerca in tutti campi delle schede'
        }], ɵ2 = [], ɵ3 = [], ɵ4 = [{
            value: 'milano',
            label: 'Milano',
            count: 1,
            metadata: {
                title: 'Milano',
                'entity-type': 'places'
            }
        }, {
            value: 'roma',
            label: 'Comune di Roma',
            count: 2,
            metadata: {
                title: 'Comune di Roma',
                'entity-type': 'places'
            }
        }, {
            value: 'spazio',
            label: 'Spazio',
            count: 3,
            metadata: {
                title: 'Spazio',
                'entity-type': 'concepts'
            }
        }, {
            value: 'rodolfo-marna',
            label: 'Rodolfo Marna',
            count: 4,
            metadata: {
                title: 'Rodolfo Marna',
                'entity-type': 'people'
            }
        }, {
            value: 'alighiero-boetti',
            label: 'Alighiero Boetti',
            count: 5,
            metadata: {
                title: 'Alighiero Boetti',
                'entity-type': 'people'
            }
        }], ɵ5 = [], ɵ6 = [];
    /** @type {?} */
    var SEARCH_CONFIG = {
        facets: [{
                id: 'query',
                type: 'value',
                data: ɵ0
            }, {
                id: 'query-all',
                type: 'value',
                data: ɵ1
            }, {
                id: 'query-links',
                type: 'value',
                data: ɵ2
            }, {
                id: 'entity-types',
                type: 'value',
                operator: 'OR',
                limit: 10,
                order: 'count',
            }, {
                id: 'entity-search',
                type: 'value',
                data: ɵ3
            }, {
                id: 'entity-links',
                type: 'value',
                metadata: ['title', 'entity-type'],
                data: ɵ4
            }, {
                id: 'date-from',
                type: 'value',
                data: ɵ5
            }, {
                id: 'date-to',
                type: 'value',
                data: ɵ6
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
                direction: 'ASC',
            },
            fields: {
                title: {
                    highlight: true,
                    limit: 50,
                }
            },
        },
        page: null,
        baseUrl: ''
    };
    /** @type {?} */
    var SEARCH_ID = 'search-facets';
    var AwSearchLayoutDS = /** @class */ (function (_super) {
        __extends(AwSearchLayoutDS, _super);
        function AwSearchLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
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
            var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
            this.configuration = configuration;
            this.mainState = mainState;
            this.communication = communication;
            this.search = search;
            this.options = options;
            // FIXME: togliere
            /** @type {?} */
            var configKeys = this.configuration.get('config-keys');
            /** @type {?} */
            var queryLinksData = Object.keys(configKeys).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var config = configKeys[key];
                return {
                    value: key,
                    label: config.label,
                    count: 1,
                    // questi vanno aggiunti a mano lato front-end
                    icon: config.icon,
                    classes: "color-" + key
                };
            }));
            /** @type {?} */
            var entityTypesData = Object.keys(configKeys).map((/**
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
            SEARCH_CONFIG.facets.filter((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) { return facet.id === 'query-links'; })).forEach((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) {
                facet.data = queryLinksData;
            }));
            SEARCH_CONFIG.facets.filter((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) { return facet.id === 'entity-types'; })).forEach((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) {
                facet.data = entityTypesData;
            }));
            if (!this.search.model(SEARCH_ID))
                this.search.add(SEARCH_ID, SEARCH_CONFIG);
            /** @type {?} */
            var searchModel = this.search.model(SEARCH_ID);
            this.one('facets-wrapper').update({ searchModel: searchModel });
        };
        return AwSearchLayoutDS;
    }(core$1.LayoutDataSource));
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
        /** @type {?} */
        AwSearchLayoutDS.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwSearchLayoutEH = /** @class */ (function (_super) {
        __extends(AwSearchLayoutEH, _super);
        function AwSearchLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
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
                    // TODO
                    default:
                        break;
                }
            }));
        };
        return AwSearchLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
            { type: core.Component, args: [{
                        selector: 'aw-search-layout',
                        template: "<div class=\"aw-search\" id=\"search-layout\">\n    <div class=\"aw-search__content\">\n\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-search__facets\">\n            <n7-facets-wrapper\n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n            </n7-facets-wrapper>\n        </div>\n\n        <!-- Search details -->\n        <div class=\"aw-search__search-wrapper\">\n            #TODO: results\n        </div>\n    </div>\n</div>\n"
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
        BubbleChartWrapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aw-bubble-chart-wrapper',
                        template: "<div class=\"aw-bubble-chart-wrapper\">\n    <button style=\"display: none;\" id=\"bubble-popup-menu_closebutton\"\n        (click)=\"onClick('bubble-tooltip-close-click',{entityId: (hover ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_gotobutton\"\n        (click)=\"onClick('bubble-tooltip-goto-click',{entityId:(hover  ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_selectbutton\"\n        (click)=\"onClick('bubble-tooltip-select-click',{entityId:(hover ? hover.id : null)} )\"></button>\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( hover ? hover.label : '' ) }}</h2>\n        <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n            onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( hover ? '\u00C8 collegato a '+ hover.count + ' entit\u00E0' : '' ) }}\n        </p>\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <ng-container *ngIf=\"buttons.length > 1\"></ng-container>\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n    <div [id]=\"container\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                    }] }
        ];
        BubbleChartWrapperComponent.propDecorators = {
            hover: [{ type: core.Input }],
            emit: [{ type: core.Input }],
            container: [{ type: core.Input }],
            buttons: [{ type: core.Input }]
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
        BubbleChartWrapperComponent
    ];
    var N7BoilerplateAriannaWebModule = /** @class */ (function () {
        function N7BoilerplateAriannaWebModule() {
        }
        N7BoilerplateAriannaWebModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS$1,
                        imports: [
                            common.CommonModule,
                            components.DvComponentsLibModule,
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.AbstractLayout = AbstractLayout;
    exports.ApolloProvider = ApolloProvider;
    exports.ApolloProviderConfig = ApolloProviderConfig;
    exports.AwAboutLayoutComponent = AwAboutLayoutComponent;
    exports.AwAboutLayoutConfig = AwAboutLayoutConfig;
    exports.AwAboutLayoutDS = AwAboutLayoutDS;
    exports.AwAboutLayoutEH = AwAboutLayoutEH;
    exports.AwAutocompleteWrapperDS = AwAutocompleteWrapperDS;
    exports.AwAutocompleteWrapperEH = AwAutocompleteWrapperEH;
    exports.AwBubbleChartDS = AwBubbleChartDS;
    exports.AwBubbleChartEH = AwBubbleChartEH;
    exports.AwEntitaLayoutComponent = AwEntitaLayoutComponent;
    exports.AwEntitaLayoutConfig = AwEntitaLayoutConfig;
    exports.AwEntitaLayoutDS = AwEntitaLayoutDS;
    exports.AwEntitaLayoutEH = AwEntitaLayoutEH;
    exports.AwEntitaMetadataViewerDS = AwEntitaMetadataViewerDS;
    exports.AwEntitaNavDS = AwEntitaNavDS;
    exports.AwEntitaNavEH = AwEntitaNavEH;
    exports.AwHeroDS = AwHeroDS;
    exports.AwHeroEH = AwHeroEH;
    exports.AwHomeAutocompleteDS = AwHomeAutocompleteDS;
    exports.AwHomeAutocompleteEH = AwHomeAutocompleteEH;
    exports.AwHomeBubbleChartDS = AwHomeBubbleChartDS;
    exports.AwHomeBubbleChartEH = AwHomeBubbleChartEH;
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
    exports.AwPatrimonioLayoutConfig = AwPatrimonioLayoutConfig;
    exports.AwSchedaBreadcrumbsDS = AwSchedaBreadcrumbsDS;
    exports.AwSchedaImageDS = AwSchedaImageDS;
    exports.AwSchedaInnerTitleDS = AwSchedaInnerTitleDS;
    exports.AwSchedaLayoutComponent = AwSchedaLayoutComponent;
    exports.AwSchedaLayoutDS = AwSchedaLayoutDS;
    exports.AwSchedaLayoutEH = AwSchedaLayoutEH;
    exports.AwSchedaMetadataDS = AwSchedaMetadataDS;
    exports.AwSchedaSidebarEH = AwSchedaSidebarEH;
    exports.AwSearchLayoutComponent = AwSearchLayoutComponent;
    exports.AwSearchLayoutConfig = AwSearchLayoutConfig;
    exports.AwSearchLayoutDS = AwSearchLayoutDS;
    exports.AwSearchLayoutEH = AwSearchLayoutEH;
    exports.AwSidebarHeaderDS = AwSidebarHeaderDS;
    exports.AwSidebarHeaderEH = AwSidebarHeaderEH;
    exports.AwTableDS = AwTableDS;
    exports.AwTableEH = AwTableEH;
    exports.AwTreeDS = AwTreeDS;
    exports.AwTreeEH = AwTreeEH;
    exports.AwWorksLayoutComponent = AwWorksLayoutComponent;
    exports.AwWorksLayoutConfig = AwWorksLayoutConfig;
    exports.AwWorksLayoutDS = AwWorksLayoutDS;
    exports.AwWorksLayoutEH = AwWorksLayoutEH;
    exports.BreadcrumbsDS = BreadcrumbsDS;
    exports.BreadcrumbsEH = BreadcrumbsEH;
    exports.BubbleChartWrapperComponent = BubbleChartWrapperComponent;
    exports.CommunicationService = CommunicationService;
    exports.ConfigurationService = ConfigurationService;
    exports.FacetInput = FacetInput;
    exports.FacetInputCheckbox = FacetInputCheckbox;
    exports.FacetInputLink = FacetInputLink;
    exports.FacetInputSelect = FacetInputSelect;
    exports.FacetInputText = FacetInputText;
    exports.FacetsDS = FacetsDS;
    exports.FacetsEH = FacetsEH;
    exports.FacetsWrapperComponent = FacetsWrapperComponent;
    exports.FacetsWrapperDS = FacetsWrapperDS;
    exports.FacetsWrapperEH = FacetsWrapperEH;
    exports.FooterDS = FooterDS;
    exports.FooterEH = FooterEH;
    exports.HeaderDS = HeaderDS;
    exports.HeaderEH = HeaderEH;
    exports.JsonConfigService = JsonConfigService;
    exports.LayoutsConfigurationService = LayoutsConfigurationService;
    exports.MainLayoutComponent = MainLayoutComponent;
    exports.MainLayoutConfig = MainLayoutConfig;
    exports.MainLayoutDS = MainLayoutDS;
    exports.MainLayoutEH = MainLayoutEH;
    exports.MainStateService = MainStateService;
    exports.N7BoilerplateAriannaWebModule = N7BoilerplateAriannaWebModule;
    exports.N7BoilerplateCommonModule = N7BoilerplateCommonModule;
    exports.N7BoilerplateLibModule = N7BoilerplateLibModule;
    exports.Page404LayoutComponent = Page404LayoutComponent;
    exports.Page404LayoutConfig = Page404LayoutConfig;
    exports.Page404LayoutDS = Page404LayoutDS;
    exports.Page404LayoutEH = Page404LayoutEH;
    exports.RestProvider = RestProvider;
    exports.RestProviderConfig = RestProviderConfig;
    exports.SearchModel = SearchModel;
    exports.SearchService = SearchService;
    exports.SubnavDS = SubnavDS;
    exports.SubnavEH = SubnavEH;
    exports.ɵa = MainLayoutComponent;
    exports.ɵb = AbstractLayout;
    exports.ɵc = ConfigurationService;
    exports.ɵd = LayoutsConfigurationService;
    exports.ɵe = MainStateService;
    exports.ɵf = Page404LayoutComponent;
    exports.ɵg = FacetsWrapperComponent;
    exports.ɵh = CommunicationService;
    exports.ɵi = ApolloProvider;
    exports.ɵj = RestProvider;
    exports.ɵk = AwAboutLayoutComponent;
    exports.ɵl = AwEntitaLayoutComponent;
    exports.ɵm = CommunicationService;
    exports.ɵn = MainStateService;
    exports.ɵo = AwHomeLayoutComponent;
    exports.ɵp = AwSchedaLayoutComponent;
    exports.ɵq = AwWorksLayoutComponent;
    exports.ɵr = AwSearchLayoutComponent;
    exports.ɵs = ConfigurationService;
    exports.ɵt = LayoutsConfigurationService;
    exports.ɵu = SearchService;
    exports.ɵv = BubbleChartWrapperComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=n7-frontend-boilerplate.umd.js.map
