(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@n7-frontend/components'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/platform-browser'), require('@n7-frontend/core'), require('tippy.js'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/boilerplate', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@n7-frontend/components', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/platform-browser', '@n7-frontend/core', 'tippy.js', 'lodash'], factory) :
    (global = global || self, factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].boilerplate = {}), global.ng.core, global.ng.common, global.ng.common.http, global.components, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.platformBrowser, global.core$1, global.tippy, global.lodash));
}(this, function (exports, core, common, http, components, rxjs, operators, router, platformBrowser, core$1, tippy, lodash) { 'use strict';

    var tippy__default = 'default' in tippy ? tippy['default'] : tippy;

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
            queryBody: "{\n      search(__PARAMS__){\n        totalCount\n        facets {\n          id\n          type\n          operator\n          limit\n          order\n          data {\n            label\n            value\n            counter\n            searchData {\n              key\n              value\n            }\n          }\n        }\n        results {\n          order{\n            type\n            key\n            direction\n          }\n          fields\n          {\n            id\n            highlight\n            limit\n          }\n          items {\n            ... on Entity {\n              id\n              label\n              typeOfEntity\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on\n                KeyValueFieldGroup {\n                  label\n                  fields\n                  {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n            ... on Item {\n              id\n              label\n              icon\n              title\n              subTitle\n              image\n              text\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }"
        },
        'getMissingBubble': {
            queryName: 'getEntity',
            queryBody: "{\n      getEntity(__PARAMS__){\n        label\n        id\n        typeOfEntity\n      }\n    }"
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
            var queryName = query.queryName;
            var queryBody = query.queryBody;
            // config query control
            if (!queryName || !queryBody) {
                throw Error("No config found for requestId '" + requestId + "'");
            }
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
                        if (typeof val === 'object') {
                            /** @type {?} */
                            var subParamsStr = _this.makeParamsStr(val);
                            arrStr_1.push("{ " + subParamsStr + " }");
                        }
                        else {
                            if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                                arrStr_1.push("" + val);
                            }
                            else {
                                arrStr_1.push("\"" + val + "\"");
                            }
                        }
                    }));
                    paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
                }
                else if (typeof params[key] === 'object' && params[key]) {
                    /** @type {?} */
                    var subParamsStr = _this.makeParamsStr(params[key]);
                    paramsStr.push(key + ": { " + subParamsStr + " }");
                }
                else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                    paramsStr.push(key.replace('$', '') + ": " + params[key]);
                }
                else {
                    if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                        paramsStr.push(key + ": " + params[key]);
                    }
                    else {
                        paramsStr.push(key + ": \"" + params[key] + "\"");
                    }
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
            this.mainState.addCustom('currentNav', new rxjs.Subject());
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
            this.isEmpty = false;
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
            this.setIsEmpty = (/**
             * @param {?} empty
             * @return {?}
             */
            function (empty) {
                _this.isEmpty = empty;
            });
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
            /** @type {?} */
            var results = this.data.map((/**
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
                if (options.classes) {
                    classes.push(options.classes);
                }
                if (hidden) {
                    classes.push('is-hidden');
                }
                if (_this._isActive(_this.facetValue, value)) {
                    classes.push('is-active');
                }
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
            // empty state control
            /** @type {?} */
            var itemEmpty = results.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.id === 'empty'; }))[0];
            if (this.isEmpty) {
                if (itemEmpty) {
                    itemEmpty.classes = 'empty-text-link';
                }
                else {
                    var label = this.getConfig().emptyState.label;
                    /** @type {?} */
                    var emptyId = 'empty-link';
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
                var isActive = _this._isActive(facetValue, config._meta.value);
                /** @type {?} */
                var classes = config.classes ? config.classes.split(' ') : [];
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
                options: this.data ? this.data.map((/**
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
                })) : [],
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
        checkbox: FacetInputCheckbox,
        text: FacetInputText,
        link: FacetInputLink,
        select: FacetInputSelect
    };
    /** @type {?} */
    var FILTERS_MAP = {
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
                else if (Array.isArray(filter.value) &&
                    filter.value.indexOf(value) === -1) {
                    filter.value.push(value);
                }
                else {
                    filter.value = !remove ? value : null;
                }
            }));
        };
        /**
         * @return {?}
         */
        SearchModel.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.updateFiltersFromQueryParams({}, true);
        };
        /**
         * @param {?} queryParams
         * @param {?=} clearAll
         * @return {?}
         */
        SearchModel.prototype.updateFiltersFromQueryParams = /**
         * @param {?} queryParams
         * @param {?=} clearAll
         * @return {?}
         */
        function (queryParams, clearAll) {
            var _this = this;
            if (clearAll === void 0) { clearAll = false; }
            this._facets.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id;
                /** @type {?} */
                var selectedFilters = _this.getFiltersByFacetId(id);
                /** @type {?} */
                var value = queryParams[id];
                /** @type {?} */
                var isInternal = _this.getInputByFacetId(id).getContext() === 'internal';
                if (isInternal && !clearAll) {
                    return;
                }
                selectedFilters.forEach((/**
                 * @param {?} filter
                 * @return {?}
                 */
                function (filter) {
                    if (filter.isArray) {
                        filter.value = value ? value.split(',') : [];
                    }
                    else {
                        filter.value = value ? value : null;
                    }
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
                throw Error("Facet with id '" + facetId + "' does not exists");
            }
            selectedFacets.forEach((/**
             * @param {?} facet
             * @return {?}
             */
            function (facet) { return (facet.data = data); }));
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
            function (filter) { return (filter.value = null); }));
        };
        /**
         * @return {?}
         */
        SearchModel.prototype.getRequestParams = /**
         * @return {?}
         */
        function () {
            return {
                facets: this._getRequestFacets(),
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
                return (filter.context === 'internal' &&
                    ((Array.isArray(filter.value) && filter.value.length) ||
                        (!Array.isArray(filter.value) && filter.value)));
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
            function (filter) {
                return (queryParams[filter.facetId] = Array.isArray(filter.value)
                    ? filter.value.join(',')
                    : filter.value);
            }));
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
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.id === target; }))[0];
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
            if (targetInput.getConfig().emptyState) {
                /** @type {?} */
                var isEmpty = !facetData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return !data.hidden; })).length;
                targetInput.setIsEmpty(isEmpty);
            }
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
            this._config.results.order.key = orderBy;
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
            var _this = this;
            // reset
            item.hidden = false;
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
                    if (item.hidden) {
                        return;
                    }
                    /** @type {?} */
                    var refValue = lodash.get(item, key, null);
                    if (key.indexOf('searchData') !== -1 && Array.isArray(item.searchData)) {
                        /** @type {?} */
                        var searchDataKey_1 = key.replace('searchData.', '');
                        item.searchData.forEach((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var dataKey = _a.key, dataValue = _a.value;
                            if (dataKey === searchDataKey_1) {
                                refValue = dataValue;
                            }
                        }));
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
                }));
            }));
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataEquals = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (Array.isArray(refValue)) {
                if (Array.isArray(value)) {
                    /** @type {?} */
                    var inArray_1 = value.length === 0 ? true : false;
                    refValue.forEach((/**
                     * @param {?} rv
                     * @return {?}
                     */
                    function (rv) {
                        if (value.indexOf(rv) !== -1) {
                            inArray_1 = true;
                        }
                    }));
                    return !(inArray_1);
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
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataGreaterThan = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value > refValue);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataLessThan = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value < refValue);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataGreaterOrEquals = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value >= refValue);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataLessOrEquals = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value <= refValue);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataNotEqual = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (!Array.isArray(value)) {
                return !(value && value !== refValue);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        SearchModel.prototype._filterDataLike = /**
         * @private
         * @param {?} value
         * @param {?} refValue
         * @return {?}
         */
        function (value, refValue) {
            if (value &&
                refValue &&
                typeof value === 'string' &&
                typeof refValue === 'string') {
                /** @type {?} */
                var haystack = refValue.toLowerCase();
                /** @type {?} */
                var needle = value.toLocaleLowerCase();
                return !(haystack.indexOf(needle) !== -1);
            }
            return false;
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
                function (input) {
                    return _this._filters.push(__assign({}, input.filterConfig, { facetId: input.facetId, value: input.filterConfig.isArray ? [] : null }));
                }));
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
                    if (!inputModel) {
                        throw Error("Input type " + inputConfig.type + " not supported");
                    }
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
        /**
         * @private
         * @return {?}
         */
        SearchModel.prototype._getRequestFacets = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var results = [];
            this._facets.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                /** @type {?} */
                var facetConfig = __assign({}, f);
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
                    function (dataItem) { return typeof dataItem.searchData !== 'undefined'; }))
                        .forEach((/**
                     * @param {?} dataItem
                     * @return {?}
                     */
                    function (dataItem) {
                        delete dataItem.searchData;
                    }));
                }
                results.push(facetConfig);
            }));
            return results;
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
            if (this._models[id]) {
                throw Error("Search model '" + id + "' already exists!");
            }
            this._models[id] = new SearchModel(id, config);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SearchService.prototype.remove = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (this._models[id]) {
                delete this._models[id];
            }
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SearchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
            _this.updateInputsFromFilters = (/**
             * @return {?}
             */
            function () { return _this.searchModel.updateInputsFromFilters(); });
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
        /** @type {?} */
        FacetsWrapperDS.prototype.updateInputsFromFilters;
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
            if (!data) {
                return;
            }
            return data.items;
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
            _this.internalFacetsChange$ = new rxjs.Subject();
            _this.externalFacetsChange$ = new rxjs.Subject();
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
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
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
                            _this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            _this.externalFacetsChange$.next();
                        }
                        break;
                    case 'facets-wrapper.facetheader':
                        _this.dataSource.toggleGroup(payload);
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
                if (type.indexOf('queryparamschange') !== -1 && _this.dataSource.searchModel) {
                    _this.dataSource.updateFiltersFromQueryParams(payload);
                    _this.dataSource.updateInputsFromFilters();
                }
            }));
            // listen to global events
            core$1.EventHandler.globalEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'global.searchresponse':
                        if (_this.dataSource.searchModel && _this.dataSource.searchModel.getId() === payload) {
                            _this.dataSource.updateInputLinks();
                            /** @type {?} */
                            var internalFilters = _this.dataSource.searchModel.getInternalFilters();
                            internalFilters.forEach((/**
                             * @param {?} filter
                             * @return {?}
                             */
                            function (filter) {
                                /** @type {?} */
                                var input = _this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                                /** @type {?} */
                                var target = input.getTarget();
                                _this.dataSource.filterTarget(target);
                                _this.dataSource.updateFilteredTarget(target);
                            }));
                        }
                        break;
                    default:
                        break;
                }
            }));
            // internal facets change
            this.internalFacetsChange$.pipe(operators.debounceTime(500)).subscribe((/**
             * @param {?} target
             * @return {?}
             */
            function (target) {
                _this.dataSource.filterTarget(target);
                _this.dataSource.updateFilteredTarget(target);
            }));
            // internal facets change
            this.externalFacetsChange$.pipe(operators.debounceTime(500)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var requestParams = _this.dataSource.getRequestParams();
                /** @type {?} */
                var queryParams = _this.dataSource.filtersAsQueryParams(requestParams.filters);
                Object.keys(queryParams).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return queryParams[key] = queryParams[key] || null; }));
                // signal
                _this.emitOuter('facetschange');
                // router signal
                _this.emitGlobal('navigate', {
                    handler: 'router',
                    path: [],
                    queryParams: queryParams
                });
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
    var AwEntitaLayoutDS = /** @class */ (function (_super) {
        __extends(AwEntitaLayoutDS, _super);
        function AwEntitaLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.showFields = false;
            _this.myResponse = {}; // backend response object
            // selected nav item
            _this.navHeader = {}; // nav-header (custom) data
            // pagination value (url param)
            _this.pageSize = 10; // linked objects page size
            // linked objects page size
            // BUBBLE CHART DATA ↓
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
                _this.location.go("" + _this.configuration.get('paths').entitaBasePath + _this.currentId + "/oggetti-collegati/" + _this.currentPage);
            });
            _this.handleNavUpdate = (/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                _this.selectedTab = tab;
                // this.one('aw-bubble-chart').updateComponent(
                //   'aw-bubble-chart',
                //   this.myResponse.relatedEntities,
                //   {
                //     simple: true,
                //     config: this.configuration,
                //     limit: this.route.snapshot.params.tab == 'overview' ? 3 : this.configuration.get('bubble-chart').bubbleLimit
                //   }
                // );
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
                _this.location.go("" + _this.configuration.get('paths').entitaBasePath + _this.currentId + "/" + tab + page);
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
            var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, route = _a.route, location = _a.location, options = _a.options, titleService = _a.titleService, communication = _a.communication;
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
                simple: true,
                config: this.configuration,
                limit: this.configuration.get('bubble-chart').bubbleLimit,
                smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize
            });
            // update head title
            this.mainState.update('headTitle', 'Arianna Web > Entità');
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
            this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
                context: this.selectedTab,
                config: this.configuration,
                labels: this.configuration.get("labels")
            });
        };
        /*
          Helper function to update the graph
        */
        /*
            Helper function to update the graph
          */
        /**
         * @param {?} data
         * @return {?}
         */
        AwEntitaLayoutDS.prototype.updateBubbes = /*
            Helper function to update the graph
          */
        /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.one('aw-bubble-chart').update(data.relatedEntities);
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
            var _this = this;
            // console.log('(entita) Apollo responded with: ', { res })
            this.myResponse = res;
            if ((res.fields || []).filter((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return ((_this.configuration.get('entita-layout') || {}).overview || {}).campi.includes(field.key); })).length > 0) {
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
            this.mainState.update('headTitle', "Arianna Web > Entit\u00E0 > " + this.myResponse.label);
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
                            // this.dataSource.updateComponent(
                            //   'aw-entita-metadata-viewer',
                            //   this.dataSource.myResponse.fields,
                            //   { 
                            //     context: this.dataSource.selectedTab,
                            //     config: this.dataSource.configuration,
                            //     labels: this.dataSource.configuration.get("labels")
                            //   }
                            // )
                        }
                        break;
                    case 'aw-linked-objects.pagination':
                        console.log(payload);
                        _this.dataSource.currentPage = +payload.split('-')[1];
                        _this.dataSource.handlePageNavigation();
                        /*this.emitGlobal('navigate', {
                          handler: 'router',
                          path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                        });*/
                        break;
                    case 'aw-linked-objects.goto':
                        console.log(payload);
                        _this.dataSource.currentPage = +payload.replace('goto-', '');
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
                        break;
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
                            _this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                            //this.dataSource.updateBubbes(payload);
                        }
                        break;
                    case 'aw-linked-objects.click':
                        /** @type {?} */
                        var paths = _this.configuration.get('paths');
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id]
                        });
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
                            // remove the entity of this page
                            /** @type {?} */
                            var entities = res.relatedEntities.filter((/**
                             * @param {?} entity
                             * @return {?}
                             */
                            function (entity) { return entity.id !== params.get('id'); }));
                            _this.emitOuter('filterbubbleresponse', entities);
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
            return (key || '').split('_').map((/**
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
                  Called by infinite scroller, adds the incoming
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
                    first: { payload: "goto-" + 1, classes: page === 1 ? 'is-disabled' : '' },
                    prev: { payload: "goto-" + (page / 1 - 1), classes: page === 1 ? 'is-disabled' : '' },
                    next: { payload: "goto-" + (page / 1 + 1), classes: page === totalPages ? 'is-disabled' : '' },
                    last: { payload: "goto-" + totalPages, classes: page === totalPages ? 'is-disabled' : '' },
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
                                selected: o === size,
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
                var limit = _this.paths.paginationLimit - 1;
                if (totalPages <= limit) {
                    limit = totalPages - 1;
                }
                // always push the first page
                if (limit) {
                    /** @type {?} */
                    var lastPage = void 0;
                    /** @type {?} */
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
                    for (var i = firstPage; i <= lastPage; i++) {
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
                    for (var i = 1; i < totalPages; i++) {
                        result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
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
                labels = config.get('labels');
                var dynamicPagination = _this.options.dynamicPagination;
                /** @type {?} */
                var keys = config ? config.get('config-keys') : {};
                /** @type {?} */
                var lengthLimit;
                /** @type {?} */
                var resultsLimit;
                /** @type {?} */
                var d = data.items ? data.items : data.relatedItems;
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
                var result = [];
                /** @type {?} */
                var enabledKeys = paths.metadata.info.selection.map((/**
                 * @param {?} info
                 * @return {?}
                 */
                function (info) { return info.key; }));
                d.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    /** @type {?} */
                    var infoData = lodash.get(el, paths.metadata.info.data, el.item.fields);
                    /** @type {?} */
                    var infoDataItems = infoData ? infoData.filter((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return enabledKeys.indexOf(data.key) !== -1; })) : [];
                    /** @type {?} */
                    var toeData = lodash.get(el, paths.metadata.toe.data, el.relatedTypesOfEntity);
                    /** @type {?} */
                    var breadcrumbs = lodash.get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs);
                    /** @type {?} */
                    var item = {
                        image: lodash.get(el, paths.image, el.image),
                        title: 
                        // if there is a max string length in config, use it
                        +paths.title.maxLength && lodash.get(el, paths.title, el.item.label).length > +paths.title.maxLength ?
                            lodash.get(el, paths.title, el.item.label).slice(0, +paths.title.maxLength) + '…' :
                            lodash.get(el, paths.title, el.item.label),
                        text: !paths.text ? null : // make text block (in config) optional
                            +paths.text.maxLength && lodash.get(el, paths.text.data, el.item.text).length > +paths.text.maxLength ?
                                lodash.get(el, paths.text.data, el.item.text).slice(0, +paths.text.maxLength) + '…' :
                                lodash.get(el, paths.text.data, el.item.text),
                        payload: { id: lodash.get(el, paths.payload, el.item.id), type: el.item.typeOfEntity },
                        classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                        metadata: infoDataItems.length || toeData ? [] : null,
                        breadcrumbs: null
                    };
                    // metadata
                    if (infoDataItems.length) {
                        item.metadata.push({
                            classes: 'n7-objects__metadata-artist',
                            items: infoDataItems.map((/**
                             * @param {?} data
                             * @return {?}
                             */
                            function (data) { return ({
                                label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                                value: data.value
                            }); }))
                        });
                    }
                    if (toeData) {
                        item.metadata.push({
                            classes: 'n7-objects__metadata-linked',
                            items: toeData.map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            function (toe) {
                                return {
                                    // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                    value: lodash.get(toe, paths.metadata.toe.value, toe.count),
                                    // icon: 'n7-icon-bell' // TODO: link icon to config key
                                    icon: keys[lodash.get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')]
                                        ? keys[lodash.get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')].icon
                                        : '',
                                    classes: 'color-' + lodash.get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')
                                };
                            }))
                        });
                    }
                    // breadcrumbs
                    if (breadcrumbs) {
                        item['breadcrumbs'] = {
                            // n7-breadcrumbs uses this as it's own data
                            items: lodash.get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs).map((/**
                             * @param {?} crumb
                             * @return {?}
                             */
                            function (crumb) {
                                return {
                                    label: lodash.get(crumb, paths.metadata.breadcrumbs.label, crumb.label),
                                    payload: lodash.get(crumb, paths.metadata.breadcrumbs.payload, crumb.link),
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
                        fallback: config.get('home-layout')['linked-objects-fallback']
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
        };
        return AwLinkedObjectsDS;
    }(core$1.DataSource));
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
            function (el) { return typeof el.entity == 'object'; }));
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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwBubbleChartDS = /** @class */ (function (_super) {
        __extends(AwBubbleChartDS, _super);
        function AwBubbleChartDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.chartData = []; // data rendered into the graph
            // data rendered into the graph
            _this.draw = null; // exposed component draw function to update the view
            // exposed component draw function to update the view
            _this.selected = []; // list of selected bubbles
            // list of selected bubbles
            _this.filters = []; // list of active filters to show only some TypeOfEntity(s)
            // list of active filters to show only some TypeOfEntity(s)
            _this.closedEyes = [];
            _this.tippyList = []; // list of tippy instances
            _this.updateChart = (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /*
                  Redraws the graph with the incoming data.
                  "res" should be Apollo's "response.entitiesData".
                  When res is passed as null, the chart is rendered with the previous data.
                */
                if (res === null) {
                    res = _this.chartData;
                }
                else {
                    _this.chartData = res;
                }
                if (_this.filters.length > 0) { // apply filters to the response
                    res = _this.chartData.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
                }
                if (!_this.draw) {
                    _this.update(_this.smartSlice(res)); // component self-update
                }
                else {
                    _this.output.selected = _this.selected;
                    _this.output.data = _this.smartSlice(res);
                    _this.draw();
                }
            });
            _this.smartSlice = (/**
             * @param {?} d
             * @param {?=} length
             * @return {?}
             */
            function (d, length) {
                /** @type {?} */
                var l = length ? length : _this.options.limit;
                if (l && l < d.length) {
                    // return d.splice(d.length - l, l)
                    return d.slice(0, l);
                }
                else {
                    return d;
                }
            });
            _this.handleBubbleClick = (/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                /*
                      Toggles the selection of the clicked bubble.
                    */
                /** @type {?} */
                var id = payload;
                if (_this.selected.includes(id)) {
                    _this.selected.splice(_this.selected.indexOf(id), 1); // remove selection
                }
                else {
                    _this.selected.push(id); // add selection
                }
            });
            _this.tippyMaker = (/**
             * @param {?} bubbles
             * @return {?}
             */
            function (bubbles) {
                // flush existing tooltips
                _this.tippyList.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) { if (t) {
                    t.destroy();
                } }));
                _this.tippyList = [];
                /** @type {?} */
                var buildTooltip = (/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var element = (/** @type {?} */ (document.getElementsByClassName('bubble-chart__tippy-template')[0].cloneNode(true)));
                    /** @type {?} */
                    var gotoButton = element.getElementsByClassName('aw-bubble-popup-menu__text')[0];
                    gotoButton.innerHTML =
                        "\u00C8 collegato a " + bubble.count + " entit\u00E0";
                    element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                        "" + bubble.entity.label;
                    /** @type {?} */
                    var selectButton = element.getElementsByClassName('aw-bubble-popup-menu__link')[1];
                    if (_this.options.simple) {
                        if (selectButton)
                            selectButton.remove();
                    }
                    else {
                        /** @type {?} */
                        var toggleBubbleText = _this.selected.includes(bubble.entity.id) ? "Deseleziona" : "Seleziona";
                        selectButton.innerHTML = toggleBubbleText;
                    }
                    // console.log(element)
                    return element.innerHTML;
                });
                /** @type {?} */
                var focusBubble = (/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    _this.focusedBubble = id;
                });
                if (_this.filters.length > 0) { // apply filters to the data before adding tooltips
                    bubbles = bubbles.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
                }
                // make new tooltips
                bubbles.forEach((/**
                 * @param {?} b
                 * @return {?}
                 */
                function (b) {
                    /** @type {?} */
                    var el = document.getElementById(b.entity.id);
                    /** @type {?} */
                    var group = el ? el.parentElement : false // selects a <g> element
                    ;
                    if (group) {
                        _this.tippyList.push(// add this tippy to the array of instances
                        tippy__default(group, {
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
                            onMount: /**
                             * @return {?}
                             */
                            function () {
                                focusBubble(b.entity.id);
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
            return _this;
        }
        // public bubbleBasket: any[]
        // id of the focused bubble
        // public bubbleBasket: any[]
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        AwBubbleChartDS.prototype.transform = 
        // id of the focused bubble
        // public bubbleBasket: any[]
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            var config = this.options.config;
            var _a = config.get('bubble-chart'), fontRendering = _a.fontRendering, transition = _a.transition, shuffle = _a.shuffle;
            /** @type {?} */
            var domain = [];
            /** @type {?} */
            var range = [];
            /** @type {?} */
            var colorConfig = config.get('config-keys');
            Object.keys(colorConfig).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                domain.push(k.replace(/-/g, ' '));
                range.push(((colorConfig[k] || {}).color || {}).hex);
            }));
            /** @type {?} */
            var commonParams = {
                fontRendering: fontRendering,
                containerId: 'bubbleChartContainer',
                width: 500,
                height: 500,
                shuffle: shuffle,
                transition: transition,
                sizeRange: [.5, 500],
                selected: this.selected,
                colorMatch: { domain: domain, range: range },
            };
            return __assign({}, commonParams, { data: this.smartSlice(data), smallView: __assign({}, commonParams, { data: this.smartSlice(data, (this.options.smallChartSize || null)) }), setDraw: (/**
                 * @param {?} draw
                 * @return {?}
                 */
                function (draw) { return _this.draw = draw; }) });
        };
        return AwBubbleChartDS;
    }(core$1.DataSource));
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
    var AwHeroDS = /** @class */ (function (_super) {
        __extends(AwHeroDS, _super);
        function AwHeroDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.currentInputValue = '';
            return _this;
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
                    payload: 'cerca'
                },
                input: {
                    placeholder: input.placeholder,
                    payload: "cerca-in-maxxi"
                }
            };
        };
        return AwHeroDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        AwHeroDS.prototype.currentInputValue;
    }

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
    var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
        __extends(AwHomeFacetsWrapperDS, _super);
        function AwHomeFacetsWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.autoComplete = {}; // autocomplete data for each facet
            // autocomplete data for each facet
            _this.lockedFacets = {}; // locked means that the eye cannot be closed
            // locked means that the eye cannot be closed
            _this.lastData = {}; // store the last response so the component can be rendered again with the same data
            // store the last response so the component can be rendered again with the same data
            _this.closedEyes = []; // list of closed eyes
            // list of closed eyes
            _this.openTippy = ''; // tipe of entity of the currently open tippy
            _this.tippyMaker = (/**
             * @param {?} res
             * @param {?} id
             * @return {?}
             */
            function (res, id) {
                /*
                  Builds or updates Tippy for the input in use (id)
                */
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
                        var contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                        contentNode.setAttribute('style', 'display: block');
                        return contentNode;
                    });
                    if (!ac_1.tippy) {
                        /** @type {?} */
                        var target = document.getElementsByClassName(id)[1];
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
        // tipe of entity of the currently open tippy
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        AwHomeFacetsWrapperDS.prototype.transform = 
        // tipe of entity of the currently open tippy
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            this.lastData = data;
            /** @type {?} */
            var headers = [];
            /** @type {?} */
            var inputs = [];
            /** @type {?} */
            var facetData = data;
            /** @type {?} */
            var lockedFacets = this.lockedFacets // locked means that the eye cannot be closed
            ;
            // locked means that the eye cannot be closed
            /** @type {?} */
            var closedEyes = this.closedEyes // list of closed eyes
            // when facet data changes, destroy every tippy and reset autocomplete data.
            ;
            // when facet data changes, destroy every tippy and reset autocomplete data.
            Object.keys(this.autoComplete).forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                    _this.autoComplete[id].tippy.destroy(); // destroy
                }
            }));
            this.autoComplete = {}; // reset data
            facetData.forEach((/**
             * @param {?} facet
             * @param {?} j
             * @return {?}
             */
            function (facet, j) {
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
                function (key) {
                    // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                    /** @type {?} */
                    var index = lockedFacets[key].indexOf('LOCK_LAST');
                    if (index >= 0) {
                        lockedFacets[key].splice(index, 1);
                    }
                }));
                if (closedEyes) {
                    if (closedEyes.length == facetData.length - 1) {
                        /** @type {?} */
                        var lastFacet = facetData.find((/**
                         * @param {?} f
                         * @return {?}
                         */
                        function (f) { return !closedEyes.includes(f.type.replace(/ /g, '-')); }));
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
                            : ' not-blocked'),
                    payload: facet.locked === true ? null : facet.type.replace(/ /g, '-')
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
        AwHomeFacetsWrapperDS.prototype.lockedFacets;
        /** @type {?} */
        AwHomeFacetsWrapperDS.prototype.lastData;
        /** @type {?} */
        AwHomeFacetsWrapperDS.prototype.closedEyes;
        /** @type {?} */
        AwHomeFacetsWrapperDS.prototype.openTippy;
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
            var results = data.results, totalCount = data.totalCount;
            var _a = this.options, keys = _a.keys, config = _a.config;
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
                var groupConfig = keys[groupId];
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
                        items: [],
                        type: groupId
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
                            id: currentItem.id,
                            type: (groups[groupId] || {}).type
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
                fallback: ((config.get('home-layout') || {})["top-hero"] || {}).fallback
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
              Access and use this.options if the rendering
              changes based on context.
            */
            /*
                  Access and use this.options if the rendering
                  changes based on context.
                */
            var _a = this.options, context = _a.context, labels = _a.labels, config = _a.config;
            labels = labels || {};
            /** @type {?} */
            var unpackedData = [];
            if (context == 'overview') {
                /** @type {?} */
                var configuredKeys_1 = ((config.get('entita-layout') || {}).overview || {}).campi;
                /** @type {?} */
                var filteredData = data.filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return configuredKeys_1.includes(d.key); }));
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
        // tslint:disable-next-line: member-ordering
        // tslint:disable-next-line: member-ordering
        /**
         * @param {?} fields
         * @return {?}
         */
        AwEntitaMetadataViewerDS.unpackFields = 
        // tslint:disable-next-line: member-ordering
        /**
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
            if (!fields) {
                return [];
            } // if is empty → quit
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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwTreeDS = /** @class */ (function (_super) {
        __extends(AwTreeDS, _super);
        function AwTreeDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._getCachedData = (/**
             * @return {?}
             */
            function () {
                return AwTreeDS.dataCache[_this.rootId];
            });
            _this._normalize = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches;
                /** @type {?} */
                var hasBranches = !!(Array.isArray(branches) && branches.length);
                _this._getCachedData().flatData[id] = { id: id, label: label, icon: icon, img: img, hasBranches: hasBranches };
                if (hasBranches) {
                    branches.forEach((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this._getCachedData().flatIds.push([id, data.id]);
                        _this._normalize(data);
                    }));
                }
            });
            _this._getParent = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                return _this._getCachedData().flatIds
                    .filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 2), childId = _b[1];
                    return childId === id;
                }))
                    .map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 1), parentId = _b[0];
                    return parentId;
                }))[0] || null;
            });
            _this._getTreePath = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var ids = [id];
                /** @type {?} */
                var currentId = id;
                while (currentId) {
                    /** @type {?} */
                    var parentId = _this._getParent(currentId);
                    if (parentId) {
                        ids.push(parentId);
                    }
                    currentId = parentId;
                }
                return ids.reverse();
            });
            _this._getTree = (/**
             * @param {?} path
             * @return {?}
             */
            function (path) {
                /** @type {?} */
                var tree = {};
                /** @type {?} */
                var counter = 0;
                /** @type {?} */
                var loadItems = (/**
                 * @param {?} id
                 * @param {?} source
                 * @return {?}
                 */
                function (id, source) {
                    counter += 1;
                    /** @type {?} */
                    var nextParent = path[counter];
                    source.items = [];
                    _this._getCachedData().flatIds
                        .filter((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var _b = __read(_a, 1), parentId = _b[0];
                        return parentId === id;
                    }))
                        .forEach((/**
                     * @param {?} __0
                     * @param {?} index
                     * @return {?}
                     */
                    function (_a, index) {
                        var _b = __read(_a, 2), childId = _b[1];
                        /** @type {?} */
                        var inPath = childId === nextParent;
                        /** @type {?} */
                        var item = _this._getTreeItem(childId, inPath);
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
            _this._getTreeItem = (/**
             * @param {?} id
             * @param {?} inPath
             * @return {?}
             */
            function (id, inPath) {
                var _a = _this._getCachedData().flatData[id], label = _a.label, icon = _a.icon, img = _a.img, hasBranches = _a.hasBranches;
                /** @type {?} */
                var defaultIcon = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
                /** @type {?} */
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
                        id: id,
                        source: 'menuitem',
                    }
                };
            });
            return _this;
        }
        /**
         * @protected
         * @param {?} tree
         * @return {?}
         */
        AwTreeDS.prototype.transform = /**
         * @protected
         * @param {?} tree
         * @return {?}
         */
        function (tree) {
            if (!tree) {
                return;
            }
            return tree;
        };
        /**
         * @param {?} data
         * @return {?}
         */
        AwTreeDS.prototype.load = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var tree = data.tree;
            this.rootId = tree.id;
            // save in cache
            if (!AwTreeDS.dataCache[this.rootId]) {
                AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
                this._normalize(tree);
            }
        };
        /**
         * @param {?} id
         * @return {?}
         */
        AwTreeDS.prototype.build = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var path = this._getTreePath(id);
            /** @type {?} */
            var oldPath = this._getTreePath(this.currentId);
            /** @type {?} */
            var oldPathIndex = oldPath.indexOf(id);
            if (oldPathIndex > 0) {
                path.splice(oldPathIndex);
                this.currentId = null;
            }
            else if (this.currentId === id) {
                /** @type {?} */
                var idIndex = path.indexOf(this.currentId);
                path.splice(idIndex);
                this.currentId = null;
            }
            else {
                this.currentId = id;
            }
            /** @type {?} */
            var tree = this._getTree(path);
            this.update(tree);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        AwTreeDS.prototype.setActive = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.activeId = id;
        };
        /**
         * @return {?}
         */
        AwTreeDS.prototype.highlightActive = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var control = (/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var founded = item.meta === _this.activeId;
                    /** @type {?} */
                    var hasActive = item.classes.indexOf('is-active') !== -1;
                    // clear is-active
                    if (hasActive && !founded) {
                        /** @type {?} */
                        var currentClasses = item.classes.split(' ');
                        currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                        item.classes = currentClasses.join(' ');
                    }
                    if (founded) {
                        /** @type {?} */
                        var currentClasses = item.classes.split(' ');
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
        };
        AwTreeDS.dataCache = {};
        return AwTreeDS;
    }(core$1.DataSource));
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
    }(core$1.DataSource));
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
    var AwLinkedObjectsEH = /** @class */ (function (_super) {
        __extends(AwLinkedObjectsEH, _super);
        function AwLinkedObjectsEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleScroll = (/**
             * @param {?} target
             * @return {?}
             */
            function (target) {
                var _a = _this.dataSource, totalObjects = _a.totalObjects, loadedData = _a.loadedData;
                /** @type {?} */
                var loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
                if (loadedTotal >= totalObjects) {
                    return;
                }
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
                        if (typeof payload == 'string') { // click on pagination
                            if (payload.startsWith('page')) {
                                // pagination routing is handled by the parent layout
                                _this.emitOuter('pagination', payload);
                            }
                            else if (payload.startsWith('goto')) {
                                /** @type {?} */
                                var targetPage = +payload.replace('goto-', '')
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
                        }
                        else { // click on a linked object
                            _this.emitOuter('click', payload);
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
    }(core$1.EventHandler));
    if (false) {
        /** @type {?} */
        AwLinkedObjectsEH.prototype.handleScroll;
    }

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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwBubbleChartEH = /** @class */ (function (_super) {
        __extends(AwBubbleChartEH, _super);
        function AwBubbleChartEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toggleSelection = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /*
                  Expects the ID of a bubble.
                  Updates the graph with a new request
                */
                _this.dataSource.handleBubbleClick(id);
                _this.emitOuter('selection', _this.dataSource.selected);
            });
            _this.toggleFilter = (/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                /*
                  Toggle the clicked filter in the filteres array and
                  redraw the graph.
                */
                if (_this.dataSource.filters.includes(f)) {
                    _this.dataSource.filters.splice(_this.dataSource.filters.indexOf(f), 1);
                }
                else {
                    _this.dataSource.filters.push(f);
                }
                _this.dataSource.updateChart(null); // null means "keep using the same response"
            });
            return _this;
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
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-bubble-chart.click':
                        _this.toggleSelection(payload);
                        _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return payload == el.entity.id; })));
                        break;
                    case 'aw-bubble-chart.d3end': // end of d3.js draw()
                        _this.dataSource.tippyMaker(_this.dataSource.chartData); // make tooltips
                        break;
                    case 'aw-bubble-chart.bubble-tooltip-goto-click':
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: ["aw/entita/" + _this.dataSource.focusedBubble]
                        });
                        break;
                    case 'aw-bubble-chart.bubble-tooltip-select-click':
                        _this.toggleSelection(_this.dataSource.focusedBubble);
                        _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return _this.dataSource.focusedBubble == el.entity.id; })));
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
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
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
                    case 'aw-scheda-layout.filterbubbleresponse':
                    case 'aw-entita-layout.filterbubbleresponse':
                    case 'aw-home-layout.filterbubbleresponse':
                        _this.dataSource.updateChart(payload);
                        break;
                    default:
                        break;
                }
            }));
        };
        return AwBubbleChartEH;
    }(core$1.EventHandler));
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
                        _this.emitOuter('click', _this.dataSource.currentInputValue);
                        break;
                    case 'aw-hero.change':
                        _this.dataSource.currentInputValue = payload;
                        _this.emitOuter('change', payload);
                        break;
                    case 'aw-hero.enter':
                        _this.emitOuter('enter', payload);
                        break;
                    default:
                        console.log('(hero) unhandled event of type', type);
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
    var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
        __extends(AwHomeFacetsWrapperEH, _super);
        function AwHomeFacetsWrapperEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changedInput$ = new rxjs.Subject();
            _this.handleEyeClick = (/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /*
                  Toggles the status of the selected eye, then reloads the component.
                */
                if (_this.dataSource.closedEyes) {
                    /** @type {?} */
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
            });
            _this.updateFilters = (/**
             * @param {?} selectedBubble
             * @return {?}
             */
            function (selectedBubble) {
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
                var _a = selectedBubble.entity // payload is the selected bubble
                , id = _a.id, typeOfEntity = _a.typeOfEntity;
                if (!_this.dataSource.lockedFacets[typeOfEntity]) {
                    _this.dataSource.lockedFacets[typeOfEntity] = [];
                }
                if (_this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                    /** @type {?} */
                    var i = _this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                    _this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
                }
                else {
                    _this.dataSource.lockedFacets[typeOfEntity].push(id);
                }
                _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
            });
            return _this;
        }
        /**
         * @return {?}
         */
        AwHomeFacetsWrapperEH.prototype.listen = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.changedInput$.pipe(operators.debounceTime(500)).subscribe((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                _this.emitOuter('change', payload);
            }));
            this.innerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
                    case 'aw-home-layout.lockfilter':
                        _this.updateFilters(payload);
                        break;
                    case 'aw-home-layout.tagclick':
                        Object.keys(_this.dataSource.lockedFacets).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) {
                            if (_this.dataSource.lockedFacets[key].includes(payload)) {
                                _this.dataSource.lockedFacets[key].splice(_this.dataSource.lockedFacets[key].indexOf(payload), 1);
                            }
                        }));
                        _this.dataSource.update(_this.dataSource.lastData);
                        break;
                    case 'aw-home-layout.clearselection':
                        _this.dataSource.lockedFacets = {};
                        _this.dataSource.closedEyes = [];
                        _this.dataSource.update(_this.dataSource.lastData);
                        break;
                    case 'aw-home-layout.facetclick':
                        var openTippy = _this.dataSource.openTippy;
                        if (_this.dataSource.lockedFacets[openTippy]) {
                            if (_this.dataSource.lockedFacets[openTippy].indexOf(payload) == -1) {
                                _this.dataSource.lockedFacets[openTippy].push(payload);
                            }
                        }
                        else {
                            _this.dataSource.lockedFacets[openTippy] = [payload];
                        }
                        _this.dataSource.update(_this.dataSource.lastData);
                        break;
                    default:
                        break;
                }
            }));
        };
        return AwHomeFacetsWrapperEH;
    }(core$1.EventHandler));
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
                switch (payload.source) {
                    case 'toggle':
                        _this.dataSource.build(payload.id);
                        break;
                    case 'menuitem':
                        _this.dataSource.setActive(payload.id);
                        _this.dataSource.highlightActive();
                        _this.emitOuter('click', payload.id);
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
                    case 'aw-sidebar-header.click':
                        _this.dataSource.toggleSidebar();
                        break;
                    case 'aw-scheda-layout.selectItem':
                        _this.dataSource.build(payload);
                        break;
                    case 'aw-scheda-layout.navigationresponse':
                        if (payload.currentItem) {
                            _this.dataSource.setActive(payload.currentItem);
                        }
                        /** @type {?} */
                        var currentId = payload.currentItem || payload.tree.id;
                        _this.dataSource.load(payload);
                        _this.dataSource.build(currentId);
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
            { type: core.Component, args: [{
                        selector: 'aw-entita-layout',
                        template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n    <!-- lb.dataSource.selectedTab -->\n    <div class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <button *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                    <button *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </button>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <button class=\"n7-btn n7-btn-light\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                        </n7-smart-breadcrumbs>\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n                <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\n                *ngIf=\"lb.dataSource.bubblesEnabled\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <button class=\"n7-btn n7-btn-light\"\n                        (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\"\n                        *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <!-- SMALL BUBBLE CHART -->\n                <div class=\"aw-home__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                    <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                        [container]=\"'bubble-chart-container'\" [buttons]=\"['select', 'goto']\">\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n                <!-- NORMAL BUBBLE CHART -->\n                <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\n                    <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                        [container]=\"'bubble-chart-container'\" [buttons]=\"['select', 'goto']\">\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{lb.dataSource.myResponse.wikiTab.url}}\n                </a>\n            </div>\n        </section>\n    </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        AwEntitaLayoutComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: common.Location },
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
            // BUBBLE CHART DATA ↓
            _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
            // true if this Arianna Web project has the bubble chart module
            _this.selectedBubbles = []; // array of IDs
            // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
            // BUBBLE CHART DATA ↑
            _this.homeAutocompleteIsLoading = false;
            _this.updateComponent = (/**
             * @param {?} id
             * @param {?} data
             * @param {?=} options
             * @return {?}
             */
            function (id, data, options) {
                // update components from EH
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
            this.mainState.updateCustom('currentNav', 'aw/home');
            // listen autocomplete changes
            this._listenAutoCompleteChanges();
            this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
            this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
            this.one('aw-bubble-chart').updateOptions({ config: this.configuration, limit: this.configuration.get('bubble-chart').bubbleLimit });
        };
        /**
         * @return {?}
         */
        AwHomeLayoutDS.prototype.onDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
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
            // make request from EH
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
                    entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
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
            this.firstBubbleResponse = response.entitiesData;
            /** @type {?} */
            var facetData = [];
            response.typeOfEntityData.forEach((/**
             * @param {?} toe
             * @return {?}
             */
            function (toe) {
                /** @type {?} */
                var TOEconfigData = _this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
                facetData.push(__assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, TOEconfigData));
            }));
            this.one('aw-home-facets-wrapper').update(facetData);
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
                this.numOfItemsStr = '0';
            }
            this.one('aw-linked-objects').updateOptions({
                context: 'home',
                config: this.configuration,
            });
            this.one('aw-linked-objects').update(response.itemsPagination);
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
         * @return {?}
         */
        AwHomeLayoutDS.prototype.renderItemTags = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /*
                        Try to build an item tag for each selected query looking at the data from the
                        first response. If the needed bubble data cannot be found, ask the backend
                        for that bubble's data.
                    */
            /** @type {?} */
            var queryList = [] // list of pending queries
            ;
            // list of pending queries
            /** @type {?} */
            var tagsData = [] // list of tags data built from query
            ;
            this.selectedBubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                // try to get the data of each selected bubble
                /** @type {?} */
                var theBubble = _this.firstBubbleResponse.find((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return el.entity.id == b; }));
                if (theBubble) { // if a bubble was found
                    tagsData.push({
                        label: theBubble.entity.label,
                        icon: 'n7-icon-close',
                        payload: b,
                        classes: "tag-" + theBubble.entity.typeOfEntity.replace(/ /g, '-')
                    });
                }
                else { // if the bubble was not found, make a query
                    // if the bubble was not found, make a query
                    /** @type {?} */
                    var params = { entityId: b, entitiesListSize: 1 };
                    queryList.push(_this.makeRequest$('getMissingBubble', params));
                }
            }));
            if (queryList.length > 0) { // if there are pending bubble queries
                rxjs.forkJoin(queryList).subscribe((/**
                 * @param {?} forkres
                 * @return {?}
                 */
                function (forkres) {
                    forkres.forEach((/**
                     * @param {?} r
                     * @return {?}
                     */
                    function (r) {
                        tagsData.push({
                            label: r.label,
                            icon: 'n7-icon-close',
                            payload: r.id,
                            classes: "tag-" + r.typeOfEntity.replace(/ /g, '-')
                        });
                    }));
                    _this.one('aw-home-item-tags-wrapper').update(tagsData);
                }));
            }
            else {
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            }
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
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = value;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
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
            this.one('aw-home-autocomplete').updateOptions({
                keys: this.configuration.get('config-keys'),
                config: this.configuration,
                labels: this.configuration.get('labels')
            });
            this.autocompleteChanged$.pipe(operators.debounceTime(500), operators.takeUntil(this.destroyed$)).subscribe((/**
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
                        _this.homeAutocompleteIsLoading = false;
                        _this.one('aw-home-autocomplete').update(response);
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
        AwHomeLayoutDS.prototype.updateComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwHomeLayoutEH = /** @class */ (function (_super) {
        __extends(AwHomeLayoutEH, _super);
        function AwHomeLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.handleSimpleAutocompleteClick = (/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                _this.emitOuter('facetclick', payload);
            });
            _this.handleChartSelection = (/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                /** @type {?} */
                var selectedEntitiesIds = payload;
                _this.dataSource.selectedBubbles = payload;
                _this.dataSource.makeRequest$('globalFilter', {
                    selectedEntitiesIds: selectedEntitiesIds,
                    entitiesListSize: _this.configuration.get('home-layout')['entitiesQuerySize']
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res && res.entitiesData.length > 0) {
                        // if some linked objects exist for the selected entities:
                        _this.dataSource.lastBubbleResponse = res.entitiesData;
                        _this.emitOuter('filterbubbleresponse', res.entitiesData);
                        _this.dataSource.renderPreviewsFromApolloQuery(res);
                        _this.dataSource.renderItemTags();
                    }
                    else {
                        // if the backend returns an empty list of results:
                        /** @type {?} */
                        var queryList_1 = [];
                        _this.dataSource.selectedBubbles.forEach((/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            /** @type {?} */
                            var params = { entityId: b, entitiesListSize: 1 };
                            queryList_1.push(// make a query for each selected bubble
                            _this.dataSource.makeRequest$('getMissingBubble', params));
                        }));
                        // await for every missing bubble and build a custom response
                        rxjs.forkJoin(queryList_1).subscribe((/**
                         * @param {?} forkres
                         * @return {?}
                         */
                        function (forkres) {
                            /** @type {?} */
                            var customBubbles = [];
                            forkres.forEach((/**
                             * @param {?} r
                             * @return {?}
                             */
                            function (r) { customBubbles.push({ count: 0, entity: r }); }));
                            _this.emitOuter('filterbubbleresponse', customBubbles);
                            _this.dataSource.renderPreviewsFromApolloQuery(res);
                            _this.dataSource.renderItemTags();
                        }));
                    }
                }));
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
                        _this.dataSource.onDestroy();
                        break;
                    case 'aw-home-layout.bubbleresultsviewallclick':
                        /** @type {?} */
                        var entityLinks = _this.dataSource.selectedBubbles.join(',');
                        /** @type {?} */
                        var basePath = _this.configuration.get('paths').searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { 'entity-links': entityLinks }
                        });
                        break;
                    case 'aw-home-layout.clearselection':
                        _this.emitOuter('clearselection');
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
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-hero.enter':
                    case 'aw-hero.click':
                        /** @type {?} */
                        var query = payload.value;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get("paths").searchBasePath],
                            queryParams: { query: query }
                        });
                        break;
                    case 'aw-hero.change':
                        _this.dataSource.autocompleteValue = payload.value;
                        _this.dataSource.onHeroChange(payload.value);
                        break;
                    case 'aw-home-facets-wrapper.click':
                        _this.emitOuter('togglefilter', payload);
                        break;
                    case 'aw-home-facets-wrapper.change':
                        if (payload.value) {
                            /** @type {?} */
                            var params_1 = {
                                input: payload.value,
                                typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                                itemsPagination: {
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
                                        results: [
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
                    case 'aw-home-item-tags-wrapper.click':
                        _this.emitOuter('tagclick', payload);
                        break;
                    case 'aw-linked-objects.datarequest':
                        var currentPage = payload.currentPage;
                        /** @type {?} */
                        var params = {
                            selectedEntitiesIds: _this.dataSource.selectedBubbles,
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
                    case 'aw-linked-objects.click':
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get("paths").schedaBasePath, payload.id]
                        });
                        break;
                    case 'aw-autocomplete-wrapper.clickresult':
                        _this.handleSimpleAutocompleteClick(payload);
                        break;
                    case 'aw-home-autocomplete.click':
                        var source = payload.source, type_1 = payload.type;
                        /** @type {?} */
                        var basePath = void 0;
                        if (source === "item") {
                            if (type_1 === "oggetto-culturale") {
                                basePath = _this.configuration.get("paths").schedaBasePath;
                            }
                            else {
                                basePath = _this.configuration.get("paths").entitaBasePath;
                            }
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath, payload.id]
                            });
                        }
                        else if (source === "showMore") {
                            /** @type {?} */
                            var query_1 = _this.dataSource.homeAutocompleteQuery;
                            basePath = _this.configuration.get("paths").searchBasePath;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { query: query_1 }
                            });
                        }
                        break;
                    case 'aw-bubble-chart.selection':
                        _this.handleChartSelection(payload);
                        break;
                    case 'aw-bubble-chart.lockfilter':
                        _this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
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
                // console.log('(home) Apollo responded with:', response)
                if (!response) {
                    return;
                }
                _this.dataSource.parseInitialRequest(response);
                if (_this.dataSource.bubblesEnabled) {
                    _this.emitOuter('filterbubbleresponse', response.entitiesData);
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
                tippy: tippy__default,
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
                        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n        <div class=\"aw-home__bubble-chart-wrapper\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\n            <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\" [container]=\"'bubble-chart-container'\"\n                [buttons]=\"['select', 'goto']\">\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\"\n                        (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n\n                        <div class=\"aw-home__bubble-results-fallback\"\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\n                            <p class=\"aw-home__bubble-results-fallback-text\">\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\n                            </p>\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\n                                Resetta la ricerca\n                            </button>\n                        </div>\n\n                        <ng-container\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\"\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    <!-- aw-linked-objects__actions -->\n                    <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0;\">\n                        <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\n                            class=\"aw-home__bubble-results-list-actions\">\n                            <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\n                                class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                                {{action[0].label}}\n                            </button>\n                        </div>\n                    </ng-container>\n                </div>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\n                </n7-item-preview>\n                <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-loader data=\"{}\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\"></n7-loader>\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n        class=\"aw-simple-autocomplete__template\" style=\"display: none;\">\n        <div class=\"aw-simple-autocomplete__tippy-wrapper\">\n            <n7-simple-autocomplete [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n            </n7-simple-autocomplete>\n        </div>\n    </div>\n</div>"
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
            _this.destroyed$ = new rxjs.Subject();
            _this.stickyControlTrigger$ = new rxjs.Subject();
            _this.contentParts = {};
            _this.sidebarIsSticky = false;
            _this.treeMaxHeight = '100%';
            _this.getTree = (/**
             * @return {?}
             */
            function () { return AwSchedaLayoutDS.tree; });
            return _this;
        }
        /**
         * @param {?} __0
         * @return {?}
         */
        AwSchedaLayoutDS.prototype.onInit = /**
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
            this.one('aw-bubble-chart').updateOptions({ simple: true, config: this.configuration, limit: this.configuration.get('bubble-chart').bubbleLimit });
            this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
            this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
            this.mainState.updateCustom('currentNav', 'aw/patrimonio');
            // sidebar sticky control
            this._sidebarStickyControl();
        };
        /**
         * @return {?}
         */
        AwSchedaLayoutDS.prototype.onDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
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
            if (AwSchedaLayoutDS.tree) {
                return rxjs.of(AwSchedaLayoutDS.tree);
            }
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
         * @param {?} tree
         * @return {?}
         */
        AwSchedaLayoutDS.prototype.setTree = /**
         * @param {?} tree
         * @return {?}
         */
        function (tree) {
            AwSchedaLayoutDS.tree = tree;
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
                // update head title
                this.mainState.update('headTitle', "Arianna Web > Patrimonio > " + (response.title || response.label));
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
            function () {
                _this.stickyControlTrigger$.next();
            }));
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
         * @private
         * @return {?}
         */
        AwSchedaLayoutDS.prototype._sidebarStickyControl = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var source$ = rxjs.fromEvent(window, 'scroll');
            rxjs.merge(source$, this.stickyControlTrigger$).pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var windowTop = window.pageYOffset;
                /** @type {?} */
                var windowBottom = window.scrollY + window.innerHeight;
                /** @type {?} */
                var wrapper = document.getElementsByClassName('sticky-parent')[0];
                /** @type {?} */
                var wrapperTop = wrapper['offsetTop'];
                /** @type {?} */
                var wrapperBottom = wrapperTop + wrapper.clientHeight;
                _this.sidebarIsSticky = wrapperTop <= windowTop;
                // tree height control
                if (_this.sidebarIsSticky && windowBottom < wrapperBottom) {
                    _this.treeMaxHeight = (windowBottom - windowTop - 50) + 'px';
                }
                else if (_this.sidebarIsSticky && windowBottom >= wrapperBottom) {
                    _this.treeMaxHeight = (wrapperBottom - windowTop - 50) + 'px';
                }
                else if (windowBottom < wrapperBottom) {
                    _this.treeMaxHeight = (windowBottom - wrapperTop - 50) + 'px';
                }
                else {
                    _this.treeMaxHeight = (wrapperBottom - wrapperTop - 50) + 'px';
                }
            }));
        };
        AwSchedaLayoutDS.tree = null;
        return AwSchedaLayoutDS;
    }(core$1.LayoutDataSource));
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
        AwSchedaLayoutDS.prototype.getTree;
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
                        _this.dataSource.onDestroy();
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
                    case 'aw-linked-objects.click':
                        /** @type {?} */
                        var paths = _this.configuration.get('paths');
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [paths.schedaBasePath, payload.id]
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
                /** @type {?} */
                var paramId = params.get('id');
                if (paramId) {
                    _this.dataSource.loadItem(paramId).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            _this.dataSource.loadContent(response);
                            if (response.relatedEntities) {
                                _this.dataSource.hasBubbles = true;
                                if (_this.dataSource.bubblesEnabled) {
                                    _this.emitOuter('filterbubbleresponse', response.relatedEntities);
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
                    _this.dataSource.setTree(response);
                    _this.dataSource.updateNavigation(_this.dataSource.getTree());
                    _this.emitOuter('navigationresponse', { tree: _this.dataSource.getTree(), currentItem: selectedItem });
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
                        template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n        [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n            <div class=\"aw-scheda__tree-content\" \n                [ngStyle]=\"{ \n                    'max-height': lb.dataSource.treeMaxHeight, \n                    'overflow': 'auto' \n                }\"\n            >\n                <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\" [emit]=\"lb.widgets['aw-tree'].emit\"\n                    *ngIf=\"!lb.dataSource.sidebarCollapsed\"></n7-tree>\n            </div>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper\">\n            <n7-breadcrumbs [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-breadcrumbs>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <n7-image-viewer [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\" *ngIf=\"lb.dataSource.contentParts.content\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\" *ngIf=\"lb.dataSource.hasMetadata\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.metadataSectionTitle}}\n                </div>\n                <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section class=\"aw-scheda__bubble-chart\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n                <div *ngIf=\"lb.dataSource.hasBubbles\" class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <aw-bubble-chart-wrapper [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                    [container]=\"'bubble-chart-container'\" [buttons]=\"['goto']\">\n                    <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </section>\n\n            <section *ngIf=\"lb.dataSource.hasSimilarItems\" id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items\">\n                    <!--<ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">-->\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>"
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
    var SEARCH_MODEL_ID = 'aw-search-layout';
    var AwSearchLayoutDS = /** @class */ (function (_super) {
        __extends(AwSearchLayoutDS, _super);
        function AwSearchLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.resetButtonEnabled = true;
            _this.currentPage = 1; // pagination value (url param)
            // pagination value (url param)
            _this.pageSize = 10; // linked objects page size
            // linked objects page size
            _this.sidebarIsSticky = false;
            _this.isFirstLoading = true;
            _this.orderByLabel = 'Ordina per';
            _this.orderByOptions = [
                {
                    value: 'label_ASC',
                    label: 'Ordine alfabetico (A→Z)'
                },
                {
                    value: 'label_DESC',
                    label: 'Ordine alfabetico (Z→A)'
                }
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
            var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
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
            this.search.add(SEARCH_MODEL_ID, lodash.cloneDeep(facetsConfig));
            this.searchModel = this.search.model(SEARCH_MODEL_ID);
            // query params control
            if (SearchService.queryParams) {
                this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
                SearchService.queryParams = null;
            }
            // sidebar sticky control
            this._sidebarStickyControl();
            this.mainState.update('headTitle', 'Arianna Web > Ricerca');
        };
        /**
         * @return {?}
         */
        AwSearchLayoutDS.prototype.onDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
            SearchService.queryParams = null;
        };
        /**
         * @return {?}
         */
        AwSearchLayoutDS.prototype.onSearchResponse = /**
         * @return {?}
         */
        function () {
            this.resetButtonEnabled = true;
            if (this.isFirstLoading) {
                this.isFirstLoading = false;
                this.one('facets-wrapper').update({ searchModel: this.searchModel });
                this.searchModel.updateInputsFromFilters();
            }
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
            return this._updateSearchPage(page);
        };
        /**
         * @return {?}
         */
        AwSearchLayoutDS.prototype.resetPagination = /**
         * @return {?}
         */
        function () {
            this._updateSearchPage(1);
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
            var requestParams = this.searchModel.getRequestParams();
            /** @type {?} */
            var requestPayload = {
                searchParameters: __assign({ totalCount: 100 }, requestParams)
            };
            return this.communication.request$('search', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: requestPayload
            }).pipe(operators.tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var totalCount = _a.totalCount, results = _a.results, facets = _a.facets;
                _this.totalCount = totalCount;
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
                // facets labels
                _this._addFacetsLabels(facets);
                // facets options
                _this._addFacetsOptions(facets);
                _this.searchModel.updateFacets(facets);
                _this.searchModel.updateTotalCount(totalCount);
                _this.one('aw-linked-objects').updateOptions({
                    context: 'search',
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    dynamicPagination: {
                        total: totalCount
                    },
                    size: _this.pageSize
                });
                _this.one('aw-linked-objects').update({ items: _this._normalizeItems(results.items) });
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
            if (+page === this.currentPage) {
                return rxjs.of(false);
            }
            this.currentPage = +page;
            /** @type {?} */
            var searchConfig = this.searchModel.getConfig();
            /** @type {?} */
            var pageConfig = searchConfig.page;
            var limit = pageConfig.limit;
            /** @type {?} */
            var newOffset = (this.currentPage - 1) * limit;
            this.searchModel.setPageConfigOffset(newOffset);
            return rxjs.of(true);
        };
        /**
         * @private
         * @param {?} facets
         * @return {?}
         */
        AwSearchLayoutDS.prototype._addFacetsLabels = /**
         * @private
         * @param {?} facets
         * @return {?}
         */
        function (facets) {
            var _this = this;
            facets
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return Array.isArray(f.data); }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                f.data.forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                function (dataItem) {
                    /** @type {?} */
                    var key = dataItem.label;
                    dataItem.label = helpers.prettifySnakeCase(key, _this.prettifyLabels[key]);
                }));
            }));
        };
        /**
         * @private
         * @param {?} facets
         * @return {?}
         */
        AwSearchLayoutDS.prototype._addFacetsOptions = /**
         * @private
         * @param {?} facets
         * @return {?}
         */
        function (facets) {
            var _this = this;
            facets
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.id === 'query-links'; }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                f.data.forEach((/**
                 * @param {?} dataItem
                 * @return {?}
                 */
                function (dataItem) {
                    /** @type {?} */
                    var key = dataItem.value.replace(' ', '-');
                    /** @type {?} */
                    var config = _this.configKeys[key];
                    if (config) {
                        dataItem.options = {
                            icon: config.icon,
                            classes: "color-" + key
                        };
                    }
                }));
            }));
        };
        /**
         * @private
         * @param {?} items
         * @return {?}
         */
        AwSearchLayoutDS.prototype._normalizeItems = /**
         * @private
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return items.map((/**
             * @param {?} singleItem
             * @return {?}
             */
            function (singleItem) { return ({ item: __assign({}, singleItem) }); }));
        };
        /**
         * @private
         * @return {?}
         */
        AwSearchLayoutDS.prototype._sidebarStickyControl = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var source$ = rxjs.fromEvent(window, 'scroll');
            source$.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var windowOffsetTop = window.pageYOffset;
                /** @type {?} */
                var wrapperOffsetTop = document.getElementsByClassName('sticky-parent')[0]['offsetTop'];
                _this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
            }));
        };
        return AwSearchLayoutDS;
    }(core$1.LayoutDataSource));
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
    var AwSearchLayoutEH = /** @class */ (function (_super) {
        __extends(AwSearchLayoutEH, _super);
        function AwSearchLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.facetsChange$ = new rxjs.Subject();
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
                        _this.route = payload.route;
                        _this.configuration = payload.configuration;
                        _this.dataSource.onInit(payload);
                        _this._listenToFacetsChange();
                        _this._listenToRouterChanges();
                        break;
                    case 'aw-search-layout.destroy':
                        _this.dataSource.onDestroy();
                        _this.destroyed$.next();
                        break;
                    case 'aw-search-layout.orderbychange':
                        _this.dataSource.onOrderByChange(payload);
                        _this.facetsChange$.next();
                        break;
                    case 'aw-search-layout.searchreset':
                        _this.dataSource.resetButtonEnabled = false;
                        _this.dataSource.searchModel.clear();
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get('paths').searchBasePath]
                        });
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
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'facets-wrapper.facetschange':
                        _this.dataSource.resetPagination();
                        break;
                    case 'aw-linked-objects.pagination':
                        _this.dataSource.onPaginationChange(payload).subscribe((/**
                         * @param {?} changed
                         * @return {?}
                         */
                        function (changed) {
                            if (changed) {
                                _this.facetsChange$.next();
                            }
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
                            if (changed) {
                                _this.facetsChange$.next();
                            }
                        }));
                        break;
                    case 'aw-linked-objects.click':
                        /** @type {?} */
                        var paths = _this.dataSource.configuration.get('paths');
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id]
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
        AwSearchLayoutEH.prototype._listenToFacetsChange = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.facetsChange$.pipe(operators.debounceTime(500)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.dataSource.doSearchRequest$().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.dataSource.onSearchResponse();
                    _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
                }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        AwSearchLayoutEH.prototype._listenToRouterChanges = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.route.queryParams.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.emitOuter('queryparamschange', params);
                _this.facetsChange$.next();
            }));
        };
        return AwSearchLayoutEH;
    }(core$1.EventHandler));
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
        AwSearchLayoutEH.prototype.configuration;
    }

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
                route: this.route,
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
                        template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>\n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper sticky-parent\">\n        <!-- Left sidebar: facets -->\n        <div class=\"aw-search__sidebar sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <div class=\"aw-search__facets\">\n                <n7-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </n7-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>\n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\"\n                        for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n                        id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">\n                            {{ option.label }}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- Search details -->\n            <div class=\"aw-search__results-wrapper\">\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                    <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                    </n7-breadcrumbs>\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n                    <div class=\"aw-search__fallback\">\n                        <p class=\"aw-search__fallback-string\">\n                            {{ lb.dataSource.fallback }}\n                        </p>\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-search__fallback-button\" (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\n                            Resetta la ricerca\n                        </button>\n                    </div>\n                </ng-container>\n                <n7-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n                    [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n        </div>\n    </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        AwSearchLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: CommunicationService },
            { type: SearchService },
            { type: router.ActivatedRoute }
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
                        template: "<div class=\"aw-bubble-chart-wrapper\">\n    <div class=\"bubble-chart__tippy-template\" style=\"display: none;\">\n        <!-- <button id=\"bubble-popup-menu_closebutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-close-click')\"></button> -->\n        <button id=\"bubble-popup-menu_gotobutton\" class=\"bubble-popup-menu_gotobutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-goto-click', {})\"></button>\n        <button id=\"bubble-popup-menu_selectbutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-select-click', {})\"></button>\n        <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n            <h2 class=\"aw-bubble-popup-menu__title\">\n                <!-- Set by tippy builder fuction -->\n            </h2>\n            <!-- <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n                onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\">\n            </span> -->\n            <p class=\"aw-bubble-popup-menu__text\">\n                <!-- Set by tippy builder fuction -->\n            </p>\n            <div class=\"aw-bubble-popup-menu__actions\">\n                <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                    onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n                <ng-container>\n                    <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                        onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">\n                        <!-- Set by tippy builder function -->\n                    </span>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n\n    <ng-content></ng-content>\n</div>"
                    }] }
        ];
        BubbleChartWrapperComponent.propDecorators = {
            emit: [{ type: core.Input }],
            container: [{ type: core.Input }],
            buttons: [{ type: core.Input }]
        };
        return BubbleChartWrapperComponent;
    }());
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
                tippy__default(node, {
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
            { type: core.Component, args: [{
                        selector: 'n7-smart-breadcrumbs',
                        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>"
                    }] }
        ];
        SmartBreadcrumbsComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }],
            bcol: [{ type: core.ViewChild, args: ['bcol', { read: core.ElementRef, static: false },] }],
            bcdiv: [{ type: core.ViewChild, args: ['bcdiv', { read: core.ElementRef, static: false },] }]
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS$1 = [
        AwEntitaLayoutComponent,
        AwHomeLayoutComponent,
        AwSchedaLayoutComponent,
        AwSearchLayoutComponent,
        BubbleChartWrapperComponent,
        SmartBreadcrumbsComponent
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
            { type: core.Component, args: [{
                        selector: 'dv-data-widget-wrapper',
                        template: "<div class=\"dv-data-widget-wrapper\">\n    <ng-content></ng-content>\n</div>"
                    }] }
        ];
        DataWidgetWrapperComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DvExampleLayoutDS = /** @class */ (function (_super) {
        __extends(DvExampleLayoutDS, _super);
        function DvExampleLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DvExampleLayoutDS;
    }(core$1.LayoutDataSource));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
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
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
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
            return components.DATA_WIDGET_MOCK;
        };
        return DvWidgetDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DS$2 = /*#__PURE__*/Object.freeze({
        DvDataWidgetDS: DvDataWidgetDS,
        DvGraphDS: DvGraphDS,
        DvInnerTitleDS: DvInnerTitleDS,
        DvWidgetDS: DvWidgetDS
    });

    /**
     * @fileoverview added by tsickle
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
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH$2 = /*#__PURE__*/Object.freeze({
        DvDataWidgetEH: DvDataWidgetEH
    });

    /**
     * @fileoverview added by tsickle
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS$2,
                        imports: [
                            common.CommonModule,
                            components.DvComponentsLibModule,
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

    exports.AbstractLayout = AbstractLayout;
    exports.ApolloProvider = ApolloProvider;
    exports.ApolloProviderConfig = ApolloProviderConfig;
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
    exports.AwSearchLayoutTabsDS = AwSearchLayoutTabsDS;
    exports.AwSearchLayoutTabsEH = AwSearchLayoutTabsEH;
    exports.AwSidebarHeaderDS = AwSidebarHeaderDS;
    exports.AwSidebarHeaderEH = AwSidebarHeaderEH;
    exports.AwTableDS = AwTableDS;
    exports.AwTableEH = AwTableEH;
    exports.AwTreeDS = AwTreeDS;
    exports.AwTreeEH = AwTreeEH;
    exports.BreadcrumbsDS = BreadcrumbsDS;
    exports.BreadcrumbsEH = BreadcrumbsEH;
    exports.BubbleChartWrapperComponent = BubbleChartWrapperComponent;
    exports.CommunicationService = CommunicationService;
    exports.ConfigurationService = ConfigurationService;
    exports.DataWidgetWrapperComponent = DataWidgetWrapperComponent;
    exports.DvDataWidgetDS = DvDataWidgetDS;
    exports.DvDataWidgetEH = DvDataWidgetEH;
    exports.DvExampleLayoutComponent = DvExampleLayoutComponent;
    exports.DvExampleLayoutConfig = DvExampleLayoutConfig;
    exports.DvExampleLayoutDS = DvExampleLayoutDS;
    exports.DvExampleLayoutEH = DvExampleLayoutEH;
    exports.DvGraphDS = DvGraphDS;
    exports.DvInnerTitleDS = DvInnerTitleDS;
    exports.DvWidgetDS = DvWidgetDS;
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
    exports.N7BoilerplateDataVizModule = N7BoilerplateDataVizModule;
    exports.N7BoilerplateLibModule = N7BoilerplateLibModule;
    exports.Page404LayoutComponent = Page404LayoutComponent;
    exports.Page404LayoutConfig = Page404LayoutConfig;
    exports.Page404LayoutDS = Page404LayoutDS;
    exports.Page404LayoutEH = Page404LayoutEH;
    exports.RestProvider = RestProvider;
    exports.RestProviderConfig = RestProviderConfig;
    exports.SearchModel = SearchModel;
    exports.SearchService = SearchService;
    exports.SmartBreadcrumbsComponent = SmartBreadcrumbsComponent;
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
    exports.ɵk = AwEntitaLayoutComponent;
    exports.ɵl = CommunicationService;
    exports.ɵm = MainStateService;
    exports.ɵn = AwHomeLayoutComponent;
    exports.ɵo = AwSchedaLayoutComponent;
    exports.ɵp = AwSearchLayoutComponent;
    exports.ɵq = ConfigurationService;
    exports.ɵr = LayoutsConfigurationService;
    exports.ɵs = SearchService;
    exports.ɵt = BubbleChartWrapperComponent;
    exports.ɵu = SmartBreadcrumbsComponent;
    exports.ɵv = DataWidgetWrapperComponent;
    exports.ɵw = DvExampleLayoutComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=n7-frontend-boilerplate.umd.js.map
