(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@n7-frontend/components'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/platform-browser'), require('@n7-frontend/core'), require('@n7-frontend/core/dist/layout-data-source'), require('tippy.js'), require('lodash'), require('slugify'), require('@n7-frontend/core/dist/data-source')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/boilerplate', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@n7-frontend/components', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/platform-browser', '@n7-frontend/core', '@n7-frontend/core/dist/layout-data-source', 'tippy.js', 'lodash', 'slugify', '@n7-frontend/core/dist/data-source'], factory) :
    (global = global || self, factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].boilerplate = {}), global.ng.core, global.ng.common, global.ng.common.http, global.components, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.platformBrowser, global.core$1, global.layoutDataSource, global.tippy, global.lodash, global.slugify, global.dataSource));
}(this, function (exports, core, common, http, components, rxjs, operators, router, platformBrowser, core$1, layoutDataSource, tippy, lodash, slugify, dataSource) { 'use strict';

    var tippy__default = 'default' in tippy ? tippy['default'] : tippy;
    slugify = slugify && slugify.hasOwnProperty('default') ? slugify['default'] : slugify;

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
        function ConfigurationService() {
            var _this = this;
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
            function (key, value) { _this.defaults[key] = value; });
        }
        ConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
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
            function (key, value) { _this.defaults[key] = value; });
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
                        providedIn: 'root',
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
                        providedIn: 'root',
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
        getLastPosts: {
            queryName: 'getLastPosts',
            queryBody: "\n      {\n        getLastPosts(__PARAMS__) {\n          id\n          title\n        }\n      }\n    ",
        },
        getTree: {
            queryName: 'getTreeOfItems',
            queryBody: "\n    {\n      getTreeOfItems{\n        label\n        id\n        img\n        document_type\n        document_classification\n        branches {\n          label\n          id\n          img\n          document_type\n          document_classification\n          branches {\n            label\n            id\n            img\n            document_type\n            document_classification\n            branches {\n              label\n              id\n              img\n              document_type\n              document_classification\n              branches {\n                label\n                id\n                img\n                document_type\n                document_classification\n                branches {\n                  label\n                  id\n                  img\n                  document_type\n                  document_classification\n                  branches {\n                    label\n                    id\n                    img\n                    document_type\n                    document_classification\n                    branches {\n                      label\n                      id\n                      img\n                      document_type\n                      document_classification\n                      branches {\n                        label\n                        id\n                        img\n                        document_type\n                        document_classification\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ",
        },
        globalFilter: {
            queryName: 'globalFilter',
            queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          entity {\n              id\n              label\n              typeOfEntity\n          } count\n        }\n        typeOfEntityData {\n          type\n          count\n        }\n        itemsPagination {\n          totalCount\n          items {\n            thumbnail\n            item {\n              id\n              label\n              fields\n              {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n              breadcrumbs {\n                label\n                link\n              }\n              relatedTypesOfEntity {\n                type\n                count\n              }\n            }\n          }\n        }\n      }\n      }",
        },
        getEntityDetails: {
            queryName: 'getEntity',
            queryBody: "{\n      getEntity(__PARAMS__){\n        overviewTab\n        label\n        id\n        typeOfEntity\n        fields {\n          ...\n          on KeyValueField {\n            key\n            value\n          }\n          ... on\n          KeyValueFieldGroup {\n            label\n            fields\n            {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n          }\n        }\n        extraTab\n        wikiTab {\n          text\n          url\n        }\n        relatedItems {\n          thumbnail\n          relation\n          item {\n            label\n            id\n            fields\n            {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n          relatedTypesOfEntity {\n            type\n            count\n          }\n        }\n        relatedEntities {\n          entity {\n              id\n              label\n              typeOfEntity\n          }\n          count\n        }\n      }\n    }\n    ",
        },
        getItem: {
            queryName: 'getItem',
            queryBody: "{\n      getItem(__PARAMS__) {\n        id\n        label\n        icon\n        title\n        subTitle\n        image\n        text\n        fields {\n          ...\n          on KeyValueField {\n            key\n            value\n          }\n          ... on KeyValueFieldGroup {\n            label\n            fields {\n              ...\n              on KeyValueField {\n                key\n                value\n              }\n            }\n          }\n        }\n        relatedEntities {\n          count\n          entity{\n            id\n            label\n            typeOfEntity\n          }\n        }\n        relatedItems {\n          thumbnail\n          item {\n            label\n            id\n            relatedTypesOfEntity {\n              type\n              count\n            }\n          }\n        }\n        breadcrumbs {\n          label\n          link\n        }\n      }\n    }",
        },
        getNode: {
            queryName: 'getNode',
            queryBody: "{\n      getNode(__PARAMS__) {\n        ... on Item {\n          id\n          label\n          title\n          subTitle\n          image\n          text\n          document_type\n          fields {\n            ...\n            on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n          relatedEntities {\n              count\n              entity{\n                id\n                label\n                typeOfEntity\n                relation\n              }\n          }\n          relatedItems {\n              thumbnail\n              item {\n                label\n                id\n                fields {\n                  ...\n                  on KeyValueField {\n                    key\n                    value\n                  }\n                  ... on KeyValueFieldGroup {\n                    label\n                    fields {\n                      ...\n                      on KeyValueField {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n          breadcrumbs {\n            label\n            link\n          }\n        }\n        ... on Node {\n          id\n          label\n          img\n          document_type\n          fields {\n            ...\n            on KeyValueField {\n              key\n              value\n            }\n            ... on KeyValueFieldGroup {\n              label\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }",
        },
        autoComplete: {
            queryName: 'autoComplete',
            queryBody: "{\n      autoComplete(__PARAMS__){\n        totalCount\n        results {\n          ... on EntityCountData {\n            count\n            entity {\n              id\n              label\n              typeOfEntity\n              fields {\n                ... on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ... on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n          ... on ItemListing {\n            item {\n              id\n              label\n              document_type\n              fields {\n                ... on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ... on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }",
        },
        search: {
            queryName: 'search',
            queryBody: "{\n      search(__PARAMS__){\n        totalCount\n        facets {\n          id\n          type\n          operator\n          limit\n          order\n          data {\n            label\n            value\n            counter\n            searchData {\n              key\n              value\n            }\n          }\n        }\n        results {\n          order{\n            type\n            key\n            direction\n          }\n          fields\n          {\n            id\n            highlight\n            limit\n          }\n          items {\n            ... on Entity {\n              id\n              label\n              typeOfEntity\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n              relatedEntities {\n                  count\n                  entity{\n                    id\n                    label\n                    typeOfEntity\n                  }\n              }\n              relatedItems {\n                  thumbnail\n                  item {\n                    label\n                    id\n                    fields {\n                      ...\n                      on KeyValueField {\n                        key\n                        value\n                      }\n                      ... on KeyValueFieldGroup {\n                        label\n                        fields {\n                          ...\n                          on KeyValueField {\n                            key\n                            value\n                          }\n                        }\n                      }\n                    }\n                }\n                relatedTypesOfEntity {\n                  type\n                  count\n                }\n              }\n            }\n            ... on Item {\n              id\n              label\n              icon\n              title\n              subTitle\n              image\n              text\n              relatedTypesOfEntity {\n                type\n                count\n              }\n              breadcrumbs {\n                label\n                link\n              }\n              fields {\n                ...\n                on KeyValueField {\n                  key\n                  value\n                }\n                ... on KeyValueFieldGroup {\n                  label\n                  fields {\n                    ...\n                    on KeyValueField {\n                      key\n                      value\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }",
        },
        getMissingBubble: {
            queryName: 'getEntity',
            queryBody: "{\n      getEntity(__PARAMS__){\n        label\n        id\n        typeOfEntity\n      }\n    }",
        },
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
                        else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                            arrStr_1.push("" + val);
                        }
                        else {
                            arrStr_1.push("\"" + val + "\"");
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
                else if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                    paramsStr.push(key + ": " + params[key]);
                }
                else {
                    paramsStr.push(key + ": \"" + params[key] + "\"");
                }
            }));
            return paramsStr.join(' ');
        };
        ApolloProvider.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
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
        getLastPosts: 'posts',
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
            var params = options.params, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
            var method = options.method;
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
            if (method === 'GET' || method === 'DELETE') {
                return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
            }
            throw Error("Rest method " + method + " not supported");
        };
        RestProvider.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
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
            /** @type {?} */
            var activeProvider = provider || this.defaultProvider;
            if (!this[activeProvider])
                throw Error("There is no " + activeProvider + " provider");
            var onError = options.onError;
            return this[activeProvider].request$(requestId, options)
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
                        providedIn: 'root',
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
            /** @type {?} */
            var LayoutDS = this.config.layoutDS;
            /** @type {?} */
            var LayoutEH = this.config.layoutEH;
            this.lb.init({
                widgetsConfig: this.widgets,
                widgetsDataSources: this.config.widgetsDataSources,
                widgetsEventHandlers: this.config.widgetsEventHandlers,
                dataSource: new LayoutDS(),
                eventHandler: new LayoutEH(),
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
        /**
         * @abstract
         * @protected
         * @return {?}
         */
        AbstractLayout.prototype.initPayload = function () { };
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
            if (this.configuration.get('header')) {
                this.one('header').update({ items: this.configuration.get('header') });
            }
            if (this.configuration.get('footer')) {
                this.one('footer').update({ items: this.configuration.get('footer') });
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
            function (val) { _this.pageTitle = val; }));
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
        // navigate emitter (click) handler
        // navigate emitter (click) handler
        /**
         * @param {?} payload
         * @return {?}
         */
        MainLayoutDS.prototype.onNavigate = 
        // navigate emitter (click) handler
        /**
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
        // links routerLink change handler
        /**
         * @return {?}
         */
        MainLayoutDS.prototype.onRouterChanged = 
        // links routerLink change handler
        /**
         * @return {?}
         */
        function () {
            tippy.hideAll();
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
    }(layoutDataSource.LayoutDataSource));
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
         * @param {?=} staticConfig
         * @return {?}
         */
        JsonConfigService.prototype.load = /**
         * @param {?} path
         * @param {?=} staticConfig
         * @return {?}
         */
        function (path, staticConfig) {
            var _this = this;
            return this.http.get(path).pipe(operators.catchError((/**
             * @return {?}
             */
            function () { return rxjs.of({}); })), operators.tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this._handleResponse(response, staticConfig); }))).toPromise();
        };
        /**
         * @private
         * @param {?} response
         * @param {?} staticConfig
         * @return {?}
         */
        JsonConfigService.prototype._handleResponse = /**
         * @private
         * @param {?} response
         * @param {?} staticConfig
         * @return {?}
         */
        function (response, staticConfig) {
            var _this = this;
            // set config defaults
            if (staticConfig) {
                Object.keys(staticConfig).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return _this.config.set(key, staticConfig[key]); }));
            }
            // set loaded json config
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
                        /** @type {?} */
                        var className = configKey['class-name'];
                        if (configKey.color && configKey.color.hex) {
                            // add css class
                            styles_1.push("--color-" + className + ": " + configKey.color.hex + ";");
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
                        providedIn: 'root',
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
    function FacetInputData() { }
    if (false) {
        /** @type {?} */
        FacetInputData.prototype.value;
        /** @type {?} */
        FacetInputData.prototype.label;
        /** @type {?} */
        FacetInputData.prototype.counter;
        /** @type {?|undefined} */
        FacetInputData.prototype.hidden;
        /** @type {?|undefined} */
        FacetInputData.prototype.options;
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
            function () { _this.output = _this.transform(); });
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
            function (newData) { _this.data = newData; });
            this.config = config;
            this._setId();
            FacetInput.index += 1;
        }
        /**
         * @return {?}
         */
        FacetInput.prototype.clear = /**
         * @return {?}
         */
        function () { return null; };
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
    /** @type {?} */
    var domParser = new DOMParser();
    var helpers = {
        prettifySnakeCase: /**
         * @param {?} key
         * @param {?=} label
         * @return {?}
         */
        function (key, label) {
            var _this = this;
            if (typeof label === 'string') {
                return label;
            }
            return (key || '').split('_').map((/**
             * @param {?} word
             * @param {?} index
             * @return {?}
             */
            function (word, index) { return (index === 0 ? _this.ucFirst(word) : word); })).join(' ');
        },
        ucFirst: /**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        slugify: /**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (!str) {
                return '';
            }
            /** @type {?} */
            var parsedDoc = domParser.parseFromString(str, 'text/html');
            /** @type {?} */
            var parsedString = parsedDoc.body.textContent || '';
            return slugify(parsedString, {
                remove: /[*+~.()'"!:@,]/g,
                lower: true
            });
        },
        browserIsIE: /**
         * @return {?}
         */
        function () {
            return window.navigator.userAgent.match(/(MSIE|Trident)/);
        },
        escapeDoubleQuotes: /**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (str.search(/\\?(")([\w\s]+)\\?(")/g) >= 0) {
                // match piece of string between double quotes
                return str.replace(/\\?(")([\w\s]+)\\?(")/g, '\\$1$2\\$3'); // thanks @slevithan!
            }
            return str.replace(/\\([\s\S])|(")/g, '\\\\\\$1$2'); // thanks @slevithan!
        },
        unescapeDoubleQuotes: /**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return (str && str !== '') ? str.replace(/\\*(")/g, '$1') : str; // thanks @slevithan!
        },
    };

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
                source: 'input-text',
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
                _meta: { facetId: facetId },
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
            this.output.value = helpers.unescapeDoubleQuotes(facetValue) || null;
        };
        return FacetInputText;
    }(FacetInput));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RESULTS_LIMIT = 1000;
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
            var e_1, _a;
            /** @type {?} */
            var facetId = this.getFacetId();
            /** @type {?} */
            var results = [];
            /** @type {?} */
            var resultsCounter = 0;
            try {
                for (var _b = __values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var itemData = _c.value;
                    var label = itemData.label, counter = itemData.counter, hidden = itemData.hidden;
                    var value = itemData.value, options = itemData.options;
                    if (hidden) {
                        continue;
                    }
                    resultsCounter += 1;
                    if (resultsCounter > RESULTS_LIMIT) {
                        break;
                    }
                    // normalize value
                    value = "" + value;
                    options = options || {};
                    /** @type {?} */
                    var classes = [];
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
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
                        _meta: { facetId: emptyId, value: null },
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
            return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
                || (facetValue === value));
        };
        /**
         * @return {?}
         */
        FacetInputLink.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.facetValue = [];
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
                        value: "" + value,
                        label: label,
                    });
                })) : [],
                payload: {
                    facetId: facetId,
                    source: 'input-select',
                },
                _meta: { facetId: facetId },
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
            function (option) { option.selected = true; }));
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
        select: FacetInputSelect,
    };
    /** @type {?} */
    var FILTERS_MAP = {
        '=': '_filterDataEquals',
        '>': '_filterDataGreaterThan',
        '<': '_filterDataLessThan',
        '>=': '_filterDataGreaterOrEquals',
        '<=': '_filterDataLessOrEquals',
        '<>': '_filterDataNotEqual',
        LIKE: '_filterDataLike',
    };
    /**
     * @record
     */
    function SearchConfig() { }
    if (false) {
        /** @type {?} */
        SearchConfig.prototype.totalCount;
        /** @type {?} */
        SearchConfig.prototype.facets;
        /** @type {?} */
        SearchConfig.prototype.page;
        /** @type {?} */
        SearchConfig.prototype.results;
        /** @type {?} */
        SearchConfig.prototype.fields;
    }
    /**
     * @record
     */
    function Facet() { }
    if (false) {
        /** @type {?} */
        Facet.prototype.id;
        /** @type {?} */
        Facet.prototype.type;
        /** @type {?} */
        Facet.prototype.operator;
        /** @type {?|undefined} */
        Facet.prototype.hasStaticData;
        /** @type {?|undefined} */
        Facet.prototype.searchData;
        /** @type {?|undefined} */
        Facet.prototype.data;
    }
    /**
     * @record
     */
    function Filter() { }
    if (false) {
        /** @type {?} */
        Filter.prototype.facetId;
        /** @type {?} */
        Filter.prototype.value;
        /** @type {?} */
        Filter.prototype.searchIn;
        /** @type {?|undefined} */
        Filter.prototype.isArray;
        /** @type {?|undefined} */
        Filter.prototype.context;
        /** @type {?|undefined} */
        Filter.prototype.target;
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
            /* eslint-disable @typescript-eslint/no-use-before-define */
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
                else if (Array.isArray(filter.value)
                    && filter.value.indexOf(value) === -1) {
                    filter.value.push(value);
                }
                else {
                    filter.value = !remove ? helpers.escapeDoubleQuotes(value) : null;
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
            this._clearInputs();
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
                        filter.value = value || null;
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
            function (facet) { facet.data = data; }));
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
            function (filter) { filter.value = null; }));
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
                })),
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
            function (filter) { return (filter.context === 'internal'
                && ((Array.isArray(filter.value) && filter.value.length)
                    || (!Array.isArray(filter.value) && filter.value))); }))
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
                queryParams[filter.facetId] = Array.isArray(filter.value)
                    ? filter.value.join(',')
                    : filter.value;
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
         * @param {?} type
         * @return {?}
         */
        SearchModel.prototype.setSearchConfigType = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._config.results.order.type = type;
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
         * @return {?}
         */
        SearchModel.prototype._clearInputs = /**
         * @private
         * @return {?}
         */
        function () {
            this._inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
            }));
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
                    var inArray_1 = value.length === 0;
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
                return !(value && refValue.indexOf(value) !== -1);
            }
            if (Array.isArray(value)) {
                return !(!value.length || value.indexOf(refValue) !== -1);
            }
            return !(value && value === refValue);
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
            if (value
                && typeof value === 'string'
                && typeof refValue === 'string') {
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
                    var InputModel = INPUTS_MAP[inputConfig.type];
                    if (!InputModel) {
                        throw Error("Input type " + inputConfig.type + " not supported");
                    }
                    _this._inputs.push(new InputModel(__assign({}, inputConfig, { inputIndex: inputIndex, sectionIndex: sectionIndex })));
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
                        providedIn: 'root',
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
            // router changed
            this.router.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationStart; }))).subscribe((/**
             * @return {?}
             */
            function () {
                window.scrollTo(0, 0);
                _this.dataSource.onRouterChanged();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        MainLayoutEH.prototype._listenMainStateChanges = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.mainState.addCustom('currentNav', new rxjs.Subject());
            this.mainState.getCustom$('currentNav').subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.emitOuter('currentnavchange', val);
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
            return data.items;
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        HeaderDS.prototype.onCurrentNavChange = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            this.output.nav.items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item._meta.id === payload) {
                    item.classes = 'is-current';
                }
                else {
                    item.classes = '';
                }
            }));
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
                items: data,
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
            function (queryParams) {
                _this.searchModel.updateFiltersFromQueryParams(queryParams);
            });
            _this.getInputByFacetId = (/**
             * @param {?} facetId
             * @return {?}
             */
            function (facetId) { return _this.searchModel.getInputByFacetId(facetId); });
            _this.filterTarget = (/**
             * @param {?} target
             * @return {?}
             */
            function (target) {
                _this.searchModel.filterTarget(target);
            });
            _this.updateInputsFromFilters = (/**
             * @return {?}
             */
            function () {
                _this.searchModel.updateInputsFromFilters();
            });
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
                        output: input.getOutput(),
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
                            facetId: facetId,
                        },
                    });
                }));
                groups.push({
                    header: header,
                    facet: { sections: sections },
                    classes: "n7-facets-wrapper__" + groupId,
                    isOpen: true,
                    _meta: {
                        groupId: groupId,
                    },
                });
            }));
            return {
                groups: groups,
                classes: "n7-facets-wrapper__" + this.searchModel.getId(),
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
            var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
            /** @type {?} */
            var filterValue = filter.value;
            /** @type {?} */
            var remove = false;
            /** @type {?} */
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
                .forEach((/**
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
                .forEach((/**
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
                text: 'text',
                checkbox: 'checkboxes',
                link: 'links',
                select: 'select',
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
                    groupId: groupId,
                },
                _meta: {
                    id: groupId + "-header",
                },
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
                return null;
            }
            return data.items;
        };
        return FooterDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartPaginationDS = /** @class */ (function (_super) {
        __extends(SmartPaginationDS, _super);
        function SmartPaginationDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.paginationBuilder = (/**
             * @param {?} tp
             * @param {?} cp
             * @param {?} pl
             * @param {?} m
             * @param {?} href
             * @param {?} qp
             * @return {?}
             */
            function (tp, cp, pl, m, href, qp) {
                /** @type {?} */
                var result = [];
                /*
                      tp - total pages
                      cp - current page
                      pl - page limit
                      m - pagination mode (href or payloads)
                      href - href for anchor wrapper
                      qp - query params for pagination
                    */
                /** @type {?} */
                var limit = pl;
                if (tp <= limit) {
                    limit = tp - 1;
                }
                if (limit) {
                    /** @type {?} */
                    var lp = void 0;
                    // last page
                    /** @type {?} */
                    var fp = void 0;
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
            });
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        SmartPaginationDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
                    label: 'Numero di risultati',
                    options: sizes.list.map((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return ({
                        text: s,
                        selected: s === sizes.active,
                    }); })),
                    payload: 'select-size',
                } : null,
            };
        };
        /**
         * @private
         * @param {?} page
         * @param {?} mode
         * @param {?} href
         * @param {?} queryParams
         * @return {?}
         */
        SmartPaginationDS.prototype._getPaginationAnchor = /**
         * @private
         * @param {?} page
         * @param {?} mode
         * @param {?} href
         * @param {?} queryParams
         * @return {?}
         */
        function (page, mode, href, queryParams) {
            switch (mode) {
                case 'payload':
                    return {
                        payload: { source: 'pagination', page: page },
                    };
                case 'href':
                    return {
                        href: queryParams ? href : href + page,
                        queryParams: queryParams ? __assign({}, queryParams, { page: page }) : null,
                    };
                default:
                    break;
            }
            return {};
        };
        return SmartPaginationDS;
    }(core$1.DataSource));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SmartPaginationDS.prototype.paginationBuilder;
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
        FooterDS: FooterDS,
        SmartPaginationDS: SmartPaginationDS
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
            this.outerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'main-layout.currentnavchange':
                        _this.dataSource.onCurrentNavChange(payload);
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
                        {
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
                function (key) { queryParams[key] = queryParams[key] || null; }));
                // signal
                _this.emitOuter('facetschange');
                // reset page
                queryParams.page = 1;
                // router signal
                _this.emitGlobal('navigate', {
                    handler: 'router',
                    path: [],
                    queryParams: queryParams,
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
            // no events
        };
        return FooterEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartPaginationEH = /** @class */ (function (_super) {
        __extends(SmartPaginationEH, _super);
        function SmartPaginationEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SmartPaginationEH.prototype.listen = /**
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
            }));
        };
        return SmartPaginationEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH = /*#__PURE__*/Object.freeze({
        HeaderEH: HeaderEH,
        SubnavEH: SubnavEH,
        BreadcrumbsEH: BreadcrumbsEH,
        FacetsWrapperEH: FacetsWrapperEH,
        FooterEH: FooterEH,
        SmartPaginationEH: SmartPaginationEH
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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
                        template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer\n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>\n"
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
    }(layoutDataSource.LayoutDataSource));
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
        },
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
            if (!this.emit) {
                return;
            }
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
            if (!this.emit) {
                return;
            }
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
    var SmartPaginationComponent = /** @class */ (function () {
        function SmartPaginationComponent() {
            this.handlePaginationEvent.bind(this);
        }
        /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        SmartPaginationComponent.prototype.handlePaginationEvent = /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        function (type, payload) {
            if (!this.emit)
                return;
            this.emit('change', payload);
        };
        SmartPaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-smart-pagination',
                        template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        SmartPaginationComponent.ctorParameters = function () { return []; };
        SmartPaginationComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return SmartPaginationComponent;
    }());
    if (false) {
        /** @type {?} */
        SmartPaginationComponent.prototype.data;
        /** @type {?} */
        SmartPaginationComponent.prototype.emit;
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
        SmartPaginationComponent,
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
                    { provide: 'config', useValue: config },
                ],
            };
        };
        N7BoilerplateCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS,
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            components.DvComponentsLibModule,
                        ],
                        providers: [],
                        exports: COMPONENTS,
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
            // selected nav item
            _this.navHeader = {}; // nav-header (custom) data
            // pagination value (url param)
            _this.pageSize = 10; // linked objects page size
            // linked objects page size
            // ===== BUBBLE CHART =====
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
            _this.drawPagination = (/**
             * @return {?}
             */
            function () {
                var _a = _this._getPaginationParams(), href = _a.href, queryParams = _a.queryParams;
                _this.one('n7-smart-pagination').updateOptions({
                    mode: 'href',
                    href: href,
                    queryParams: queryParams,
                });
                _this.one('n7-smart-pagination').update({
                    totalPages: Math.ceil(_this.myResponse.relatedItems.length / _this.pageSize),
                    currentPage: _this.currentPage,
                    pageLimit: 5,
                    sizes: {
                        list: [10, 25, 50],
                        active: _this.pageSize,
                    },
                });
            });
            _this.handlePageNavigation = (/**
             * @return {?}
             */
            function () {
                /*
                  Updates selected tab on tab change
                */
                if (!_this.myResponse) {
                    return;
                }
                var _a = _this._getPaginationParams(), href = _a.href, queryParams = _a.queryParams;
                _this.drawPagination();
                _this.one('aw-linked-objects').updateOptions({
                    paginationParams: { href: href, queryParams: queryParams },
                    context: _this.selectedTab,
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    size: _this.pageSize,
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            });
            _this.handleNavUpdate = (/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                _this.selectedTab = tab;
                _this.updateWidgets(_this.myResponse);
                if (tab === 'oggetti-collegati') {
                    _this.one('aw-linked-objects').updateOptions({
                        context: _this.selectedTab,
                        config: _this.configuration,
                        page: _this.currentPage,
                        pagination: true,
                        paginationParams: _this._getPaginationParams(),
                        size: _this.pageSize,
                    });
                    _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
                }
                else if (tab === 'overview') {
                    _this.one('aw-linked-objects').updateOptions({
                        size: 3,
                        config: _this.configuration,
                        context: 'entita',
                    });
                    _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
                }
                if (tab === 'overview' || tab === 'entita-collegate') {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { _this.updateBubbes(_this.myResponse.relatedEntities); }), 800);
                }
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
            this.currentId = '';
            this.currentPage = +this.route.snapshot.queryParams.page;
            this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
            this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout').entitiesQuerySize : this.bubblesSize;
            this.one('aw-bubble-chart').updateOptions({
                selectable: false,
                simple: true,
                config: this.configuration,
                limit: this.configuration.get('bubble-chart').bubbleLimit,
                smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize,
            });
            this.one('aw-chart-tippy').updateOptions({
                basePath: this.configuration.get('paths').entitaBasePath,
            });
            // navigation update
            this.mainState.updateCustom('currentNav', 'entita');
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
                params: { entityId: id, entitiesListSize: this.bubblesSize },
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
            Object.keys(data).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                if (Array.isArray(data[k]) && data[k].length === 0) {
                    data[k] = null;
                }
            }));
            this.one('aw-entita-nav').update({
                data: data,
                selected: selected,
                basePath: this.getNavBasePath(),
            });
            this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
                context: this.selectedTab,
                config: this.configuration,
                labels: this.configuration.get('labels'),
            });
            this.drawPagination();
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
            /*
              Helper function to update the graph
            */
            this.one('aw-bubble-chart').update(data);
        };
        /**
         * @param {?} id
         * @param {?} slug
         * @param {?} tab
         * @return {?}
         */
        AwEntitaLayoutDS.prototype.loadItem = /**
         * @param {?} id
         * @param {?} slug
         * @param {?} tab
         * @return {?}
         */
        function (id, slug, tab) {
            /*
              Loads the data for the selected nav item, into the adjacent text block.
            */
            if (id && tab) {
                this.currentId = id; // store selected item from url
                this.currentSlug = slug; // store selected item from url
                this.selectedTab = tab; // store selected tab from url
                return this.communication.request$('getEntityDetails', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: { entityId: id, entitiesListSize: this.bubblesSize },
                });
            }
            this.pageTitle = 'Entità Test';
            return rxjs.of(null);
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
            /** @type {?} */
            var config = this.configuration.get('config-keys')[res.typeOfEntity];
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
                icon: config ? config.icon : '',
                text: this.myResponse.label,
                color: config['class-name'],
            };
            this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
            this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get('labels'), config: this.configuration });
            this.one('aw-entita-metadata-viewer').update(res.fields);
            if (this.selectedTab === 'oggetti-collegati') {
                this.one('aw-linked-objects').updateOptions({
                    context: this.selectedTab,
                    config: this.configuration,
                    page: this.currentPage,
                    pagination: true,
                    paginationParams: this._getPaginationParams(),
                    size: this.pageSize,
                });
            }
            else {
                this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: this.configuration,
                    context: 'entita',
                });
            }
            res.relatedItems.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                el.relationName = res.label.length > 30
                    ? res.label.substr(0, 30) + "... "
                    : res.label;
            }));
            this.one('aw-linked-objects').update({ items: res.relatedItems });
            this.drawPagination();
            // update head title
            this.mainState.update('headTitle', "Arianna Web > Entit\u00E0 > " + this.myResponse.label);
        };
        /**
         * @private
         * @return {?}
         */
        AwEntitaLayoutDS.prototype._getPaginationParams = /**
         * @private
         * @return {?}
         */
        function () {
            return {
                href: [
                    this.configuration.get('paths').entitaBasePath,
                    this.currentId + "/",
                    this.currentSlug,
                    '/oggetti-collegati/',
                ].join(''),
                queryParams: {
                    page: this.currentPage,
                },
            };
        };
        /**
         * @return {?}
         */
        AwEntitaLayoutDS.prototype.getNavBasePath = /**
         * @return {?}
         */
        function () {
            return [
                this.configuration.get('paths').entitaBasePath,
                this.currentId + "/",
                this.currentSlug,
            ].join('');
        };
        return AwEntitaLayoutDS;
    }(layoutDataSource.LayoutDataSource));
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
        AwEntitaLayoutDS.prototype.drawPagination;
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
            _this.handlePageSizeChange = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                _this.dataSource.pageSize = v;
                _this.dataSource.handleNavUpdate('oggetti-collegati');
            });
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
                        _this.entityId = _this.route.snapshot.params.id || '';
                        _this.dataSource.currentPage = _this.route.snapshot.params.page || 1;
                        _this.listenRoute(_this.entityId);
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
            }));
            this.outerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                        _this.emitOuter('d3end', payload);
                        break;
                    case 'aw-entita-nav.click':
                        if (payload) {
                            _this.dataSource.selectedTab = payload;
                            _this.dataSource.handleNavUpdate(payload);
                        }
                        break;
                    case 'aw-linked-objects.change':
                        { // changed page size value (pagination)
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
                        }
                        break;
                    case 'aw-bubble-chart.bubble-tooltip-goto-click':
                        {
                            var id = payload.id, label = payload.label;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [
                                    _this.configuration.get('paths').entitaBasePath,
                                    id,
                                    helpers.slugify(label),
                                    'overview',
                                ],
                            });
                        }
                        break;
                    case 'aw-bubble-chart.bubble-filtered':
                        if (_this.dataSource.selectedTab === 'overview' || _this.dataSource.selectedTab === 'entita-collegate') {
                            _this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                        }
                        break;
                    case 'n7-smart-pagination.change':
                        _this.handlePageSizeChange(payload.value);
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
            if (selectedItem === void 0) { selectedItem = ''; }
            if (forceReload === void 0) { forceReload = false; }
            // listen for "page" query param changes
            this.route.queryParams.pipe(operators.map((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params.page; }))).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.dataSource.currentPage !== page) {
                    _this.dataSource.currentPage = page;
                    _this.dataSource.handlePageNavigation();
                }
            }));
            // get URL parameters with angular's paramMap
            this.route.paramMap.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                // look for id
                if (params.get('id')) {
                    if (_this.dataSource.currentId === params.get('id') && !forceReload) {
                        if (_this.dataSource.selectedTab !== params.get('tab')) {
                            _this.dataSource.handleNavUpdate(params.get('tab'));
                        }
                        return;
                    }
                    // get item from response with id === id and return as promise
                    _this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab')).subscribe((/**
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
                            _this.dataSource.updateWidgets(res);
                            if (selectedItem) {
                                _this.emitOuter('selectItem', selectedItem);
                            }
                            _this.emitOuter('filterbubbleresponse', entities);
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
        /**
         * @type {?}
         * @private
         */
        AwEntitaLayoutEH.prototype.handlePageSizeChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwLinkedObjectsDS = /** @class */ (function (_super) {
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
                var config = _this.options.config;
                // app-config.json
                /** @type {?} */
                var paths = config.get('item-preview');
                // item preview dynamic paths
                var totalCount = data.totalCount;
                // total amount of items available on backend
                /** @type {?} */
                var page = _this.currentPage;
                // current page (if using pagination)
                var context = _this.context;
                // parent layout name
                /** @type {?} */
                var size = _this.pageSize;
                // items per page (if using pagination)
                /** @type {?} */
                var labels = config.get('labels');
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
                    if (config.get(context + "-layout")) {
                        lengthLimit = config.get(context + "-layout")['max-item-length'];
                        resultsLimit = config.get(context + "-layout")['results-limit'];
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
                    var itemData = el.item ? el.item : el;
                    /** @type {?} */
                    var infoData = lodash.get(el, paths.metadata.info.data, itemData.fields);
                    /** @type {?} */
                    var infoDataItems = infoData
                        ? infoData.filter((/**
                         * @param {?} info
                         * @return {?}
                         */
                        function (info) { return enabledKeys.indexOf(info.key) !== -1; }))
                        : [];
                    /** @type {?} */
                    var toeData = lodash.get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                    /** @type {?} */
                    var breadcrumbs = lodash.get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                    if (['entita', 'search'].includes(context)) {
                        if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                            infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                        }
                    }
                    /** @type {?} */
                    var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                    classes += itemData.typeOfEntity ? " is-" + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
                    // consider the lenght of <em> tags to exclude from count
                    /** @type {?} */
                    var highlights = lodash.get(el, paths.title, itemData.label).match(/<em>/g) ? lodash.get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                    /** @type {?} */
                    var itemTitle = +paths.title.maxLength
                        && lodash.get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                        ? lodash.get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights) + "\u2026"
                        : lodash.get(el, paths.title, itemData.label);
                    /** @type {?} */
                    var itemId = lodash.get(el, paths.payload, itemData.id);
                    /** @type {?} */
                    var itemType = itemData.typeOfEntity;
                    /** @type {?} */
                    var itemHref = [
                        itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                        itemId,
                        helpers.slugify(itemTitle),
                    ].join('/');
                    /** @type {?} */
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
                    /** @type {?} */
                    var item = {
                        text: text,
                        classes: classes,
                        breadcrumbs: breadcrumbs,
                        image: lodash.get(el, paths.image, itemData.image),
                        title: itemTitle,
                        anchor: {
                            href: itemHref,
                            target: context === 'search' ? '_blank' : '_self'
                        },
                        relation: { key: el.relationName, value: el.relation },
                        metadata: infoDataItems.length || toeData ? [] : null,
                    };
                    // metadata
                    if (infoDataItems.length) {
                        item.metadata.push({
                            classes: 'aw-item-preview_metadata',
                            items: infoDataItems.map((/**
                             * @param {?} infoDItem
                             * @return {?}
                             */
                            function (infoDItem) { return ({
                                label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                                value: infoDItem.value,
                            }); })),
                        });
                    }
                    if (toeData) {
                        item.metadata.push({
                            classes: 'aw-item-preview-entities',
                            items: toeData.map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            function (toe) { return ({
                                // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                value: lodash.get(toe, paths.metadata.toe.value, toe.count),
                                // icon: 'n7-icon-bell' // TODO: link icon to config key
                                icon: keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)]
                                    ? keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)].icon
                                    : '',
                                classes: "color-" + keys[lodash.get(toe, paths.metadata.toe.icon, toe.type)]['class-name'],
                            }); })),
                        });
                    }
                    // breadcrumbs
                    if (breadcrumbs) {
                        item.breadcrumbs = {
                            // n7-breadcrumbs uses this as it's own data
                            items: lodash.get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map((/**
                             * @param {?} crumb
                             * @return {?}
                             */
                            function (crumb) {
                                /** @type {?} */
                                var label = lodash.get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                                return {
                                    label: label,
                                    anchor: {
                                        href: itemHref,
                                    },
                                };
                            })),
                        };
                    }
                    result.push(item);
                }));
                if (context === 'home') {
                    /** @type {?} */
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.stringTrim = (/**
             * @param {?} string
             * @param {?} limit
             * @return {?}
             */
            function (string, limit) {
                /*
                  Slices the string and adds trailing ellipsis
                  TODO: Do not cut the string in the middle of an HTML tag!
                */
                if (string.length > limit) {
                    return string.slice(0, limit) + "\u2026";
                }
                return string;
            });
            return _this;
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
            var _this = this;
            var response = data.response;
            if (!response) {
                return { suggestion: [], loading: true };
            }
            /** @type {?} */
            var suggestion = [];
            var config = this.options.config;
            /** @type {?} */
            var maxLength = (config.get('home-layout')['max-item-length'] || 20);
            /** @type {?} */
            var fResults = response.results.filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return typeof el.entity === 'object'; }));
            // eslint-disable-next-line consistent-return
            fResults.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el.entity.id === 'fallback') { // build and return fallback data
                    suggestion.push({
                        text: el.entity.label,
                        payload: 'fallback-simple-autocomplete',
                    });
                    return { suggestion: suggestion };
                }
                /** @type {?} */
                var text = _this.stringTrim(el.entity.label, maxLength);
                suggestion.push({
                    text: text,
                    anchor: {
                        payload: el.entity.id,
                    },
                });
            }));
            return { suggestion: suggestion };
        };
        return AwAutocompleteWrapperDS;
    }(dataSource.DataSource));
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
            _this.closedEyes = []; // array of the activated eye filters
            // array of the activated eye filters
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
                /** @type {?} */
                var response = res;
                if (res === null) {
                    response = _this.chartData;
                }
                else {
                    _this.chartData = res;
                }
                if (_this.filters.length > 0) { // apply filters to the response
                    response = _this.chartData.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
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
            });
            _this.smartSlice = (/**
             * @param {?} d
             * @param {?=} length
             * @return {?}
             */
            function (d, length) {
                /** @type {?} */
                var l = length || _this.options.limit;
                if (l && l < d.length) {
                    return d.slice(0, l);
                }
                return d;
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
            return _this;
        }
        // list of tippy instances
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        AwBubbleChartDS.prototype.transform = 
        // list of tippy instances
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            var _a = this.options, config = _a.config, smallChartSize = _a.smallChartSize;
            var _b = config.get('bubble-chart'), fontRendering = _b.fontRendering, transition = _b.transition, shuffle = _b.shuffle;
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
                containerId: 'bubbleChartContainer',
                setDraw: (/**
                 * @param {?} draw
                 * @return {?}
                 */
                function (draw) { _this.draw = draw; }),
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
            return __assign({}, commonParams, { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: __assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
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
        AwBubbleChartDS.prototype.updateChart;
        /** @type {?} */
        AwBubbleChartDS.prototype.smartSlice;
        /** @type {?} */
        AwBubbleChartDS.prototype.handleBubbleClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwChartTippyDS = /** @class */ (function (_super) {
        __extends(AwChartTippyDS, _super);
        function AwChartTippyDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        AwChartTippyDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            // ====== DATA ======
            var bubbles = data.bubbles, selected = data.selected;
            var _a = this.options, basePath = _a.basePath, selectable = _a.selectable;
            // ==================
            /** @type {?} */
            var templates = bubbles.map((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                var count = b.count, entity = b.entity;
                var id = entity.id, label = entity.label, relation = entity.relation, relationName = entity.relationName;
                return {
                    id: id,
                    selectable: selectable,
                    title: label,
                    text: "\u00C8 collegato a " + count + " oggetti culturali",
                    isSelected: selected.includes(id),
                    anchorData: {
                        href: "" + basePath + id + "/" + helpers.slugify(label),
                    },
                    relation: {
                        key: relationName,
                        value: relation,
                    }
                };
            }));
            return templates;
        };
        return AwChartTippyDS;
    }(core$1.DataSource));

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
                    anchor: {
                        payload: 'cerca',
                    },
                },
                input: {
                    placeholder: input.placeholder,
                    payload: 'cerca-in-maxxi',
                },
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
         * @return {?}
         */
        AwTableDS.prototype.transform = /**
         * @protected
         * @return {?}
         */
        function () {
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
            return data;
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
            // store the last response so the component can be rendered again with the same data
            _this.lastData = {};
            _this.closedEyes = []; // list of closed eyes
            // list of closed eyes
            _this.openTippy = ''; // tipe of entity of the currently open tippy
            _this.tippyMaker = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /*
                      Builds or updates Tippy for the input in use (id)
                    */
                /** @type {?} */
                var newId = id.replace(/ /g, '-');
                // create data for this facet
                if (!_this.autoComplete[newId]) {
                    _this.autoComplete[newId] = {
                        tippy: undefined,
                        // tippy data / config
                        open: true,
                    };
                    /** @type {?} */
                    var ac_1 = _this.autoComplete[newId];
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
                        // target the correct this.autoComplete[id] input class
                        /** @type {?} */
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
                /** @type {?} */
                var ac = _this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.show();
                }
            });
            _this.tippyClose = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var newId = id.replace(/ /g, '-');
                if (_this.autoComplete[newId]) {
                    /** @type {?} */
                    var ac = _this.autoComplete[newId];
                    if (ac.tippy) {
                        ac.tippy.hide();
                    }
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
            var lockedFacets = this.lockedFacets;
            // locked means that the eye cannot be closed
            var closedEyes = this.closedEyes;
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
                 The second case is managed by pushing a "LOCK_LAST" string
                 to the lockedFacets array of the last
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
                    if (closedEyes.length === facetData.length - 1) {
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
            }));
            // zipping arrays to render widgets with separate data (see home-layout.html)
            return headers.map((/**
             * @param {?} h
             * @param {?} i
             * @return {?}
             */
            function (h, i) { return ({ header: h, input: inputs[i] }); }));
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
        /** @type {?} */
        AwHomeFacetsWrapperDS.prototype.tippyClose;
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
            var response = data.response, query = data.query;
            var results = response.results, totalCount = response.totalCount;
            var _a = this.options, keys = _a.keys, config = _a.config, paths = _a.paths;
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
                var groupId = entity ? entity.typeOfEntity : item.document_type;
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
                        classes: "color-" + groupConfig['class-name'],
                        items: [],
                        type: groupId,
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
                        anchor: {
                            href: paths[entity ? 'entitaBasePath' : 'schedaBasePath'] + "/" + currentItem.id + "/" + helpers.slugify(currentItem.label),
                        },
                    });
                }
            }));
            /** @type {?} */
            var grouplist = Object.keys(groups).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes,
                },
                items: groups[key].items,
            }); }));
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
                                // Query string
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
            if (!param) {
                return null;
            }
            var data = param.data;
            var selected = param.selected;
            /** @type {?} */
            var navigation = { items: [], payload: 'entita-nav' };
            navigation.items.push({
                text: 'OVERVIEW',
                anchor: { href: param.basePath + "/overview" },
                classes: selected === 'overview' ? 'is-selected' : '',
            });
            if (data.fields && data.fields.length > 0) {
                navigation.items.push({
                    text: 'CAMPI',
                    anchor: { href: param.basePath + "/campi" },
                    classes: selected === 'campi' ? 'is-selected' : '',
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
            if (data.relatedEntities && this.options.bubblesEnabled) {
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
            var _a = this.options, context = _a.context, config = _a.config;
            /** @type {?} */
            var labels = this.options.labels || {};
            /** @type {?} */
            var metadataToExclude = (config.get('entita-layout') || {})['metadata-to-exclude'];
            /** @type {?} */
            var unpackedData = [];
            if (context === 'overview' && data) {
                /** @type {?} */
                var configuredKeys_1 = ((config.get('entita-layout') || {}).overview || {}).campi;
                /** @type {?} */
                var filteredData = data.filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return configuredKeys_1.includes(d.key); }));
                unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData, metadataToExclude);
            }
            else {
                unpackedData = AwEntitaMetadataViewerDS.unpackFields(data, metadataToExclude);
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
                function (item) {
                    item.label = helpers.prettifySnakeCase(item.label, labels[item.label]);
                }));
            }));
            return {
                group: unpackedData,
            };
        };
        /**
         * @param {?} fields
         * @param {?=} metadataToExclude
         * @return {?}
         */
        AwEntitaMetadataViewerDS.unpackFields = /**
         * @param {?} fields
         * @param {?=} metadataToExclude
         * @return {?}
         */
        function (fields, metadataToExclude) {
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
                extracted = fields
                    .filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    if (Array.isArray(metadataToExclude) && metadataToExclude.length) {
                        return metadataToExclude.indexOf(el.key) === -1;
                    }
                    return true;
                }))
                    .map((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return ({ label: el.key, value: el.value }); }));
                return [{ items: extracted }];
            }
            if (!fields) {
                return [];
            } // if is empty → quit
            for (var i = 0; i < fields.length; i += 1) {
                /** @type {?} */
                var thisField = fields[i];
                // rename current field
                /** @type {?} */
                var title = thisField.label;
                // field title
                /** @type {?} */
                var label = thisField.key;
                // item label
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
            _this.transform = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data; });
            _this._getCachedData = (/**
             * @return {?}
             */
            function () { return AwTreeDS.dataCache[_this.rootId]; });
            _this._normalize = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches, type = _a.document_type, classification = _a.document_classification;
                /** @type {?} */
                var hasBranches = !!(Array.isArray(branches) && branches.length);
                _this._getCachedData().flatData[id] = {
                    id: id, label: label, icon: icon, img: img, hasBranches: hasBranches, type: type, classification: classification
                };
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
            function (id) { return _this._getCachedData().flatIds
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
            }))[0] || null; });
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
                var _a = _this._getCachedData().flatData[id], label = _a.label, img = _a.img, hasBranches = _a.hasBranches, type = _a.type, classification = _a.classification;
                /** @type {?} */
                var defaultIcon = (_this.options.config[type] || { icon: null }).icon;
                /** @type {?} */
                var specificIcon = '';
                /** @type {?} */
                var lastSegment = /.*\.(\w+)$/;
                if (classification && lastSegment.test(classification)) {
                    /** @type {?} */
                    var classID = classification
                        .match(lastSegment)[1] // get classification characters
                        .toUpperCase();
                    specificIcon = _this.options.config[type].classifications[classID].icon;
                }
                /** @type {?} */
                var arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
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
            });
            return _this;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        AwTreeDS.prototype.load = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var tree = data.tree, basePath = data.basePath;
            this.rootId = tree.id;
            this.basePath = basePath;
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
    }(dataSource.DataSource));
    if (false) {
        /** @type {?} */
        AwTreeDS.dataCache;
        /**
         * @type {?}
         * @private
         */
        AwTreeDS.prototype.basePath;
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
         * @protected
         */
        AwTreeDS.prototype.transform;
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
            return {
                iconLeft: 'n7-icon-tree-icon',
                text: data.text || '',
                iconRight: 'n7-icon-angle-left',
                classes: 'is-expanded',
                payload: 'header',
            };
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
            if (sidebarData.classes === 'is-expanded') {
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.transform = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data; });
            return _this;
        }
        /**
         * @return {?}
         */
        AwSchedaBreadcrumbsDS.prototype.toggleSidebar = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
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
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        AwSchedaBreadcrumbsDS.prototype.transform;
    }

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
            var _a = this.options, labels = _a.labels, metadataToExclude = _a.metadataToExclude;
            labels = labels || {};
            metadataToExclude = metadataToExclude || {};
            metadataToExclude = metadataToExclude[data.document_type] || [];
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
                        field.fields
                            .filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return metadataToExclude.indexOf(item.key) === -1; }))
                            .forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            items.push({
                                label: helpers.prettifySnakeCase(item.key, labels[item.key]),
                                value: item.value
                            });
                        }));
                        group.group.push({
                            items: items,
                            title: field.label,
                        });
                    }
                    else if (metadataToExclude.indexOf(field.key) === -1) {
                        items.push({
                            label: helpers.prettifySnakeCase(field.key, labels[field.key]),
                            value: field.value.replace(/(\|\|\|)/g, '\n') // replace repeat sequence ("|||") with end of line
                        });
                        group.group.push({
                            items: items,
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
         * @return {?}
         */
        AwSearchLayoutTabsDS.prototype.transform = /**
         * @protected
         * @return {?}
         */
        function () {
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
    var AwGalleryResultsDS = /** @class */ (function (_super) {
        __extends(AwGalleryResultsDS, _super);
        function AwGalleryResultsDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.GALLERY_RESULTS_MOCK = new Array(100);
            _this.addPagination = (/**
             * @param {?} page
             * @param {?} totalPages
             * @param {?} size
             * @return {?}
             */
            function (page, totalPages, size) {
                /** @type {?} */
                var sizeOptions = [12, 24, 48];
                _this.pagination = {
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
                var limit = 5 - 1;
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
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        AwGalleryResultsDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            data = this.GALLERY_RESULTS_MOCK;
            var _a = this.options, pageSize = _a.pageSize, currentPage = _a.currentPage;
            this.GALLERY_RESULTS_MOCK.fill({
                image: 'https://i.imgur.com/2xY0DWR.png',
                title: 'Costa di Sorrento',
                classes: 'is-vertical',
                metadata: [
                    {
                        items: [
                            { label: 'Artista', value: 'John Davies' },
                            { value: 'Fotografia' }
                        ]
                    }
                ]
            });
            // if the data doesn't fit on one page, render the pagination component
            if (data.length > pageSize) {
                this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
            }
            return {
                res: this.GALLERY_RESULTS_MOCK.slice(0, pageSize),
                pagination: this.pagination
            };
        };
        /**
         * @param {?} a
         * @param {?} size
         * @return {?}
         */
        AwGalleryResultsDS.prototype.chunks = /**
         * @param {?} a
         * @param {?} size
         * @return {?}
         */
        function (a, size) {
            /** @type {?} */
            var results = [];
            while (a.length) {
                results.push(a.splice(0, size));
            }
            return results;
        };
        return AwGalleryResultsDS;
    }(core$1.DataSource));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwGalleryResultsDS.prototype.GALLERY_RESULTS_MOCK;
        /**
         * @type {?}
         * @private
         */
        AwGalleryResultsDS.prototype.pagination;
        /** @type {?} */
        AwGalleryResultsDS.prototype.addPagination;
        /** @type {?} */
        AwGalleryResultsDS.prototype.makePagination;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DS$1 = /*#__PURE__*/Object.freeze({
        AwLinkedObjectsDS: AwLinkedObjectsDS,
        AwAutocompleteWrapperDS: AwAutocompleteWrapperDS,
        AwBubbleChartDS: AwBubbleChartDS,
        AwChartTippyDS: AwChartTippyDS,
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
        AwSearchLayoutTabsDS: AwSearchLayoutTabsDS,
        AwGalleryResultsDS: AwGalleryResultsDS
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
                var _a = selectedBubble.entity, id = _a.id, typeOfEntity = _a.typeOfEntity;
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
            // no events
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
                    case 'aw-home-item-tags-wrapper.click':
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
                    case 'aw-home-autocomplete.click':
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
                if (type === 'aw-sidebar-header.click') {
                    _this.dataSource.toggleSidebar();
                    _this.emitOuter(type, payload);
                }
            }));
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
                if (type === 'aw-sidebar-header.click') {
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.scrollLeafIntoView = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var treeNode = document.querySelector('div.aw-scheda__tree');
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var leafNode = treeNode.querySelector('.is-active');
                    if (leafNode && !_this.isInViewport(leafNode)) {
                        leafNode.scrollIntoView();
                        window.scrollTo(0, 0);
                    }
                }), 200);
            });
            _this.isInViewport = (/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var bounding = elem.getBoundingClientRect();
                return (bounding.top >= 0
                    && bounding.left >= 0
                    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
            });
            return _this;
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
                switch (type) {
                    case 'aw-tree.click':
                        if (payload.source === 'toggle') {
                            _this.dataSource.build(payload.id);
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
                    case 'aw-sidebar-header.click':
                        _this.dataSource.toggleSidebar();
                        break;
                    case 'aw-scheda-layout.selectItem':
                        _this.dataSource.build(payload);
                        break;
                    case 'aw-scheda-layout.navigationresponse':
                        {
                            if (payload.currentItem) {
                                _this.dataSource.setActive(payload.currentItem);
                            }
                            /** @type {?} */
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
                        _this.dataSource.out$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.scrollLeafIntoView();
                        }));
                        break;
                    default:
                        break;
                }
            }));
        };
        return AwTreeEH;
    }(core$1.EventHandler));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwTreeEH.prototype.scrollLeafIntoView;
        /**
         * @type {?}
         * @private
         */
        AwTreeEH.prototype.isInViewport;
    }

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
    var AwGalleryResultsEH = /** @class */ (function (_super) {
        __extends(AwGalleryResultsEH, _super);
        function AwGalleryResultsEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        AwGalleryResultsEH.prototype.listen = /**
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
                    case 'aw-gallery-results.change':
                        _this.emitOuter('change', +payload.value);
                        break;
                    case 'aw-gallery-results.click':
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
                    default:
                        console.warn('(gallery-results) unhandled inner event of type', type);
                        break;
                }
            }));
            /*
                this.outerEvents$.subscribe(event => {
                    
                });
            */
        };
        return AwGalleryResultsEH;
    }(core$1.EventHandler));

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
                if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                    && _this.dataSource.loadedData.isLoading === false) {
                    _this.dataSource.loadedData.isLoading = true;
                    _this.emitOuter('datarequest', {
                        currentPage: _this.dataSource.currentPage,
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
                        if (payload !== 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
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
            _this.initialLoad = false;
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
                        if (_this.dataSource.options.selectable !== false) {
                            _this.toggleSelection(payload);
                        }
                        _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return payload === el.entity.id; })));
                        break;
                    case 'aw-bubble-chart.d3end':
                        { // end of d3.js draw()
                            // end of d3.js draw()
                            /** @type {?} */
                            var filteredChartData = void 0;
                            // apply filters to the data before adding tooltips
                            if (_this.dataSource.filters.length > 0) {
                                filteredChartData = _this.dataSource.chartData.filter((/**
                                 * @param {?} el
                                 * @return {?}
                                 */
                                function (el) { return !_this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
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
            }));
            this.outerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    case 'aw-home-layout.select':
                        {
                            var id_1 = payload.id;
                            _this.toggleSelection(id_1);
                            /** @type {?} */
                            var foundBubble = _this.dataSource.chartData.find((/**
                             * @param {?} el
                             * @return {?}
                             */
                            function (el) { return id_1 === el.entity.id; }));
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
        AwBubbleChartEH.prototype.initialLoad;
        /** @type {?} */
        AwBubbleChartEH.prototype.toggleSelection;
        /** @type {?} */
        AwBubbleChartEH.prototype.toggleFilter;
    }

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
    var AwChartTippyEH = /** @class */ (function (_super) {
        __extends(AwChartTippyEH, _super);
        function AwChartTippyEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tippyList = []; // array of tippy instances
            _this.tippyMaker = (/**
             * @param {?} bubbles
             * @return {?}
             */
            function (bubbles) {
                /*
                  Destroys every existing tooltip,
                  then creates a new Tippy instance for each bubble.
                */
                // flush existing tooltips
                _this.tippyList.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) { if (t) {
                    t.destroy();
                } }));
                _this.tippyList = [];
                // create new tooltips
                bubbles.forEach((/**
                 * @param {?} b
                 * @return {?}
                 */
                function (b) {
                    // give a tooltip to each bubble
                    /** @type {?} */
                    var target = document.getElementById("g_" + b.entity.id);
                    if (target) {
                        _this.tippyList.push(// add this tippy to the array of instances
                        tippy__default(target, {
                            content: document.getElementById("template__" + b.entity.id),
                            interactive: true,
                            appendTo: document.body,
                            // suppress interactive warning
                            arrow: true,
                            flip: false,
                            theme: 'light-border no-padding',
                            placement: 'top',
                            delay: [150, 30],
                            updateDuration: 400,
                        }));
                    }
                }));
            });
            return _this;
        }
        // array of tippy instances
        /**
         * @return {?}
         */
        AwChartTippyEH.prototype.listen = 
        // array of tippy instances
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
                    case 'aw-chart-tippy.select':
                        _this.emitOuter('select', payload);
                        break;
                    default:
                        console.warn('(chart-tippy) unhandled inner event of type', type);
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
                    case 'aw-home-layout.d3end':
                    case 'aw-entita-layout.d3end':
                    case 'aw-scheda-layout.d3end':
                        _this.dataSource.update(payload); // creating DOM Elements (templates)
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                        }));
                        break;
                    default:
                        break;
                }
            }));
        };
        return AwChartTippyEH;
    }(core$1.EventHandler));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwChartTippyEH.prototype.tippyList;
        /** @type {?} */
        AwChartTippyEH.prototype.tippyMaker;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH$1 = /*#__PURE__*/Object.freeze({
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
        AwGalleryResultsEH: AwGalleryResultsEH,
        AwLinkedObjectsEH: AwLinkedObjectsEH,
        AwAutocompleteWrapperEH: AwAutocompleteWrapperEH,
        AwBubbleChartEH: AwBubbleChartEH,
        AwTableEH: AwTableEH,
        AwChartTippyEH: AwChartTippyEH
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
                        template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\"\n            class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\n            [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <!-- lb.dataSource.selectedTab -->\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\n        <div class=\"aw-entity__content-loading-title\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\"></n7-content-placeholder>\n        </div>\n\n        <div class=\"aw-entity__content-loading-items\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n            [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n    </div>\n\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <a class=\"n7-btn n7-btn-light\" [routerLink]=\"[lb.dataSource.getNavBasePath() + 'campi']\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </a>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\n                        [queryParams]=\"{ page: 1 }\" class=\"n7-btn n7-btn-light\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <div class=\"aw-entity__content-item-preview-wrapper\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                            <!-- relation -->\n                            <div class=\"aw-entity__relation\" *ngIf=\"preview.relation.value\">\n                                <p class=\"aw-entity__relation-description\">Relazione con \n                                <span class=\"aw-entity__relation-key\">{{preview.relation.key}}</span>:\n                                <span class=\"aw-entity__relation-value\"> {{preview.relation.value}}</span>\n                                </p>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <n7-smart-pagination \n                    *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\n                *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.myResponse.relatedEntities\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <!-- Small Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n                <!-- Big Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\n                </a>\n            </div>\n        </section>\n    </div>\n    <!-- Template for bubble chart tooltips -->\n    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\" [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n    </aw-chart-tippy>\n</div>"
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
            _this.homeAutocompleteIsLoading = false;
            _this.resultsListIsLoading = false;
            // ===== BUBBLE CHART =====
            _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
            // true if this Arianna Web project has the bubble chart module
            _this.selectedBubbles = []; // array of IDs
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
        // ========================
        // ========================
        /**
         * @param {?} __0
         * @return {?}
         */
        AwHomeLayoutDS.prototype.onInit = 
        // ========================
        /**
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
            this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
            this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
            this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
            // update streams
            this.mainState.update('headTitle', 'Arianna Web > Home');
            this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
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
                params: params,
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
                    entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
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
                var TOEconfigData = _this.configuration.get('config-keys')[toe.type];
                facetData.push(__assign({}, toe, { enabled: true, locked: false }, TOEconfigData));
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
            var _this = this;
            if (!response || !response.itemsPagination) {
                return;
            }
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
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._scrollBackgroundControl();
            }));
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
            var value = change.value;
            // store the entered text in facetInputs
            this.facetInputs[payload] = value;
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
            var queryList = [];
            // list of pending queries
            /** @type {?} */
            var tagsData = [];
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
                function (el) { return el.entity.id === b; }));
                if (theBubble) { // if a bubble was found
                    // if a bubble was found
                    /** @type {?} */
                    var bubbleConfig = _this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                    tagsData.push({
                        label: theBubble.entity.label,
                        icon: 'n7-icon-close',
                        payload: b,
                        classes: "tag-" + bubbleConfig['class-name'],
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
                        /** @type {?} */
                        var bubbleConfig = _this.configuration.get('config-keys')[r.typeOfEntity];
                        tagsData.push({
                            label: r.label,
                            icon: 'n7-icon-close',
                            payload: r.id,
                            classes: "tag-" + bubbleConfig['class-name'],
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
            if (value) {
                /** @type {?} */
                var escapedValue = helpers.escapeDoubleQuotes(value);
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
            var node = document.getElementById('bubble-results-list');
            if (!node)
                return;
            /** @type {?} */
            var source$ = rxjs.fromEvent(node, 'scroll');
            // height control
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._setHasScrollBackground(node);
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
         * @param {?} target
         * @return {?}
         */
        AwHomeLayoutDS.prototype._setHasScrollBackground = /**
         * @private
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
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
                labels: this.configuration.get('labels'),
                paths: this.configuration.get('paths'),
            });
            this.autocompleteChanged$.pipe(operators.debounceTime(500), operators.takeUntil(this.destroyed$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] },
                    },
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.homeAutocompleteIsLoading = false;
                    _this.one('aw-home-autocomplete').update({
                        response: response,
                        query: value,
                    });
                }));
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
                    onHidden: (/**
                     * @return {?}
                     */
                    function () { _this.autocompletePopoverOpen = false; }),
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
    }(layoutDataSource.LayoutDataSource));
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
        AwHomeLayoutDS.prototype.homeAutocompleteIsLoading;
        /** @type {?} */
        AwHomeLayoutDS.prototype.resultsListIsLoading;
        /** @type {?} */
        AwHomeLayoutDS.prototype.bubblesEnabled;
        /** @type {?} */
        AwHomeLayoutDS.prototype.selectedBubbles;
        /** @type {?} */
        AwHomeLayoutDS.prototype.lastBubbleResponse;
        /** @type {?} */
        AwHomeLayoutDS.prototype.firstBubbleResponse;
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
                _this.dataSource.resultsListIsLoading = true;
                _this.dataSource.makeRequest$('globalFilter', {
                    selectedEntitiesIds: selectedEntitiesIds,
                    entitiesListSize: _this.configuration.get('bubble-chart').bubbleLimit,
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
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
                            path: payload,
                        });
                        break;
                    case 'aw-home-layout.destroy':
                        _this.dataSource.onDestroy();
                        break;
                    case 'aw-home-layout.bubbleresultsviewallclick':
                        {
                            /** @type {?} */
                            var entityLinks = _this.dataSource.selectedBubbles.join(',');
                            /** @type {?} */
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
            }));
            this.outerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
                            /** @type {?} */
                            var query = payload.value;
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
                            /** @type {?} */
                            var params = {
                                input: payload.value,
                                typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                                itemsPagination: {
                                    offset: 0, limit: _this.configuration.get('home-layout')['results-limit'],
                                },
                            };
                            _this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
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
                            }));
                        }
                        break;
                    case 'aw-home-item-tags-wrapper.click':
                        _this.emitOuter('tagclick', payload);
                        break;
                    case 'aw-linked-objects.datarequest':
                        {
                            var currentPage = payload.currentPage;
                            /** @type {?} */
                            var params = {
                                selectedEntitiesIds: _this.dataSource.selectedBubbles,
                                itemsPagination: {
                                    offset: currentPage * _this.dataSource.resultsLimit,
                                    limit: _this.dataSource.resultsLimit,
                                },
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
                                    console.warn('Unable to fetch additional data.');
                                }
                            }));
                        }
                        break;
                    case 'aw-autocomplete-wrapper.clickresult':
                        _this.handleSimpleAutocompleteClick(payload);
                        break;
                    case 'aw-home-autocomplete.click':
                        {
                            var source = payload.source, payloadType = payload.type;
                            /** @type {?} */
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
                                /** @type {?} */
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
            window.open(payload, '_blank');
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
                        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                    {\n                        classes: 'facet-placeholder-item-1'\n                    }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\n            <aw-bubble-chart-wrapper>\n                <aw-chart-tippy \n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n                </aw-chart-tippy>\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\n                        <n7-content-placeholder \n                            *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n                            [data]=\"{\n                                blocks: [{\n                                    classes: 'search-result-placeholder-title'\n                                }, {\n                                    classes: 'search-result-placeholder-metadata'\n                                }]\n                        }\"></n7-content-placeholder>\n                    </div>\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n\n                        <div class=\"aw-home__bubble-results-fallback\"\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\n                            <p class=\"aw-home__bubble-results-fallback-text\">\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\n                            </p>\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\n                                Resetta la ricerca\n                            </button>\n                        </div>\n\n                        <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\"\n                                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                        <!-- <ng-container\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container> -->\n\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                </div>\n                <!-- aw-linked-objects__actions -->\n                <ng-container\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\n                        class=\"aw-home__bubble-results-list-actions\">\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                    </div>\n                </ng-container>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\n                </n7-item-preview>\n                <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\n            <n7-loader [data]=\"{}\"></n7-loader>\n        </div>\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\n                <n7-loader [data]=\"{}\"></n7-loader>\n            </div>\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n            </n7-simple-autocomplete>\n        </div>\n    </div>\n</div>\n"
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
            _this.contentIsLoading = false;
            _this.currentId = null;
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
            this.bubbleChartSectionTitle = this.configuration.get('scheda-layout')['bubble-chart'].title;
            this.similarItemsSectionTitle = this.configuration.get('scheda-layout')['related-items'].title;
            this.metadataSectionTitle = this.configuration.get('scheda-layout').metadata.title;
            this.hasSimilarItems = false;
            this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
            this.one('aw-bubble-chart').updateOptions({
                selectable: false,
                simple: true,
                config: this.configuration,
                limit: this.configuration.get('bubble-chart').bubbleLimit,
            });
            this.one('aw-chart-tippy').updateOptions({
                basePath: this.configuration.get('paths').entitaBasePath,
            });
            this.emptyLabel = this.configuration.get('scheda-layout')['empty-label'];
            this.one('aw-tree').updateOptions({ config: this.configuration.get('config-keys') });
            this.mainState.update('headTitle', 'Arianna Web > Patrimonio');
            this.mainState.update('pageTitle', 'Arianna Web: patrimonio Layout');
            this.mainState.updateCustom('currentNav', 'patrimonio');
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
                params: { treeId: id },
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
         * @param {?} text
         * @return {?}
         */
        AwSchedaLayoutDS.prototype.updateNavigation = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.one('aw-sidebar-header').update({ text: text });
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
            /** @type {?} */
            var maxSimilarItems = this.configuration.get('scheda-layout')['related-items']['max-related-items'];
            return this.communication.request$('getNode', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { id: id, maxSimilarItems: maxSimilarItems },
            });
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
                this.hasMetadata = Array.isArray(response.fields) && response.fields.length;
                this.hasSimilarItems = Array.isArray(response.relatedItems) && response.relatedItems.length;
                this.hasBreadcrumb = Array.isArray(response.breadcrumbs) && response.breadcrumbs.length;
                this.hasBubbles = Array.isArray(response.relatedEntities) && response.relatedEntities.length;
                this.hasImage = !!response.image;
                this.contentParts = [];
                /** @type {?} */
                var content = { content: null };
                if (response.text) {
                    content.content = response.text;
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
                        },
                    },
                    tools: response.subTitle,
                    actions: {},
                };
                this.one('aw-scheda-inner-title').update(titleObj);
                this.one('aw-scheda-metadata').updateOptions({
                    labels: this.configuration.get('labels'),
                    metadataToExclude: this.configuration.get('scheda-layout')['metadata-to-exclude']
                });
                this.one('aw-scheda-metadata').update(response);
                // Breadcrumb section
                /** @type {?} */
                var breadcrumbs_1 = {
                    items: [],
                };
                if (response.breadcrumbs) {
                    response.breadcrumbs.forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    function (element) {
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
                    }));
                    this.one('aw-scheda-breadcrumbs').update(breadcrumbs_1);
                }
                // update head title
                this.mainState.update('headTitle', "Arianna Web > Patrimonio > " + (response.title || response.label));
            }
            if (response.relatedItems) {
                this.one('aw-linked-objects').updateOptions({ context: 'scheda', config: this.configuration });
                this.one('aw-linked-objects').update(response);
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
            // no sticky for Internet Explorer
            if (helpers.browserIsIE()) {
                return;
            }
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
                var wrapper = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
                /** @type {?} */
                var wrapperTop = wrapper.offsetTop;
                /** @type {?} */
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
            }));
        };
        AwSchedaLayoutDS.tree = null;
        return AwSchedaLayoutDS;
    }(layoutDataSource.LayoutDataSource));
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
        AwSchedaLayoutDS.prototype.hasImage;
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
                        {
                            _this.dataSource.onInit(payload);
                            _this.configuration = payload.configuration;
                            _this.route = payload.route;
                            /** @type {?} */
                            var paramId = _this.route.snapshot.params.id || '';
                            if (paramId) {
                                _this.dataSource.currentId = paramId;
                            }
                            _this.listenRoute();
                            _this.loadNavigation(paramId);
                            _this.emitOuter('viewleaf');
                        }
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
                    case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                        _this.emitOuter('d3end', payload);
                        break;
                    case 'aw-sidebar-header.click':
                        _this.dataSource.collapseSidebar();
                        break;
                    case 'aw-bubble-chart.bubble-tooltip-goto-click':
                        {
                            var id = payload.id, label = payload.label;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [
                                    _this.configuration.get('paths').entitaBasePath,
                                    id,
                                    helpers.slugify(label),
                                    'overview',
                                ],
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
                    if (paramId) {
                        _this.dataSource.currentId = paramId;
                        _this.emitOuter('routechanged', paramId);
                    }
                    _this.dataSource.contentIsLoading = true;
                    _this.dataSource.loadItem(paramId).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        _this.dataSource.contentIsLoading = false;
                        if (response) {
                            _this.dataSource.loadContent(response);
                            if (Array.isArray(response.relatedEntities) && response.relatedEntities.length) {
                                if (_this.dataSource.bubblesEnabled) {
                                    response.relatedEntities.forEach((/**
                                     * @param {?} el
                                     * @return {?}
                                     */
                                    function (el) {
                                        el.entity.relationName = response.label.length > 30
                                            ? response.label.substr(0, 30) + "... "
                                            : response.label;
                                    }));
                                    _this.emitOuter('filterbubbleresponse', response.relatedEntities);
                                }
                            }
                        }
                    }));
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
            this.dataSource.updateNavigation('Loading...');
            this.dataSource.getNavigation('patrimonio').subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response) {
                    _this.dataSource.setTree(response);
                    _this.dataSource.updateNavigation(_this.dataSource.getTree().label);
                    _this.emitOuter('navigationresponse', {
                        tree: _this.dataSource.getTree(),
                        currentItem: selectedItem,
                        basePath: _this.configuration.get('paths').schedaBasePath,
                    });
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
                        template: "<div class=\"aw-scheda\"\n     id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n         [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree sticky-target\"\n             [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                               [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n            <div class=\"aw-scheda__tree-content-loading\"\n                 *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n                                        [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n            </div>\n            <div class=\"aw-scheda__tree-content\"\n                 [ngStyle]=\"{\n                    'max-height': lb.dataSource.treeMaxHeight,\n                    'overflow': 'auto'\n                }\">\n                <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\"\n                         [emit]=\"lb.widgets['aw-tree'].emit\"\n                         *ngIf=\"!lb.dataSource.sidebarCollapsed\">\n                </n7-tree>\n            </div>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper-loading\"\n             *ngIf=\"lb.dataSource.contentIsLoading\">\n            <!--\n                <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'content-placeholder-title'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }]\n            }\"></n7-content-placeholder>\n            -->\n        </div>\n        <div class=\"aw-scheda__scheda-wrapper\"\n             *ngIf=\"!lb.dataSource.contentIsLoading\">\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\n                                  [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                                  [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-smart-breadcrumbs>\n\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\"\n                 class=\"aw-scheda__fake-breadcrumbs\">\n            </div>\n\n            <div *ngIf=\"!lb.dataSource.currentId\"\n                 class=\"aw-scheda__intro-text\"\n                 [innerHTML]=\"lb.dataSource.emptyLabel\">\n            </div>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <n7-image-viewer *ngIf=\"lb.dataSource.hasImage\"\n                             [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\"\n                     *ngIf=\"lb.dataSource.contentParts.content\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\"\n                     *ngIf=\"lb.dataSource.hasMetadata\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.metadataSectionTitle}}\n                </div>\n                <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section class=\"aw-scheda__bubble-chart\"\n                     *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.hasBubbles\">\n                <div *ngIf=\"lb.dataSource.hasBubbles\"\n                     class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <aw-bubble-chart-wrapper>\n                    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\n                                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n                    </aw-chart-tippy>\n                    <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                                     [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </section>\n\n            <section *ngIf=\"lb.dataSource.hasSimilarItems && lb.dataSource.hasBubbles\"\n                     id=\"related-item-container\"\n                     class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.similarItemsSectionTitle}}\n                </div>\n                <div class=\"aw-scheda__related-items n7-grid-2\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-item-preview [data]=\"preview\"\n                                         [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>\n"
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
                type: 'value',
            },
            {
                id: 'query-all',
                type: 'value',
                hasStaticData: true,
                data: [
                    {
                        value: '1',
                        label: 'Cerca in tutti campi delle schede',
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
                        // icon: 'n7-icon-search',
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
                        // icon: 'n7-icon-search',
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
                type: 'score',
                // score | text | date
                key: '_score',
                // docPath, elastic key, ecc
                direction: 'DESC' // ASC | DESC
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
            _this.resultsLoading = false;
            _this.orderBy = '_score';
            _this.orderDirection = 'DESC';
            _this.orderByLabel = 'Ordina per';
            _this.orderByOptions = [
                {
                    value: '_score_DESC',
                    label: 'Ordine per pertinenza',
                    type: 'score',
                    selected: true
                },
                {
                    value: 'label_sort_ASC',
                    label: 'Ordine alfabetico (A→Z)',
                    type: 'text',
                    selected: false
                },
                {
                    value: 'label_sort_DESC',
                    label: 'Ordine alfabetico (Z→A)',
                    type: 'text',
                    selected: false
                }
            ];
            _this.drawPagination = (/**
             * @return {?}
             */
            function () {
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
                        list: [10, 25, 50],
                        active: _this.pageSize,
                    },
                });
            });
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
            this.mainState.updateCustom('currentNav', 'ricerca');
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
            /** @type {?} */
            var orderBy = payload.substring(0, payload.lastIndexOf('_'));
            /** @type {?} */
            var direction = payload.substring(payload.lastIndexOf('_') + 1);
            /** @type {?} */
            var type = '';
            // set selected
            this.orderByOptions.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option.value === payload) {
                    option.selected = true;
                    type = option.type;
                }
                else {
                    option.selected = false;
                }
            }));
            this.orderBy = orderBy;
            this.orderDirection = direction;
            this.searchModel.setSearchConfigOrderBy(orderBy);
            this.searchModel.setSearchConfigDirection(direction);
            this.searchModel.setSearchConfigType(type);
        };
        /**
         * @param {?} size
         * @return {?}
         */
        AwSearchLayoutDS.prototype.onPageSizeChange = /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this.pageSize = size;
            return this._updateSearchPage(this.currentPage);
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
            this.setLimit(payload);
            // reset page & offset
            this.currentPage = 1;
            this.searchModel.setPageConfigOffset(0);
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        AwSearchLayoutDS.prototype.setLimit = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            this.pageSize = payload;
            this.searchModel.setPageConfigLimit(payload);
            this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
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
                searchParameters: __assign({ totalCount: 100 }, requestParams),
            };
            return this.communication.request$('search', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: requestPayload,
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
                    paginationParams: _this._getPaginationParams(),
                    dynamicPagination: {
                        total: totalCount,
                    },
                    size: _this.pageSize,
                });
                _this.drawPagination();
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
                    var config = _this.configKeys[dataItem.value];
                    if (config) {
                        dataItem.options = {
                            icon: config.icon,
                            classes: "color-" + config['class-name'],
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
            // no sticky for Internet Explorer
            if (helpers.browserIsIE()) {
                return;
            }
            /** @type {?} */
            var source$ = rxjs.fromEvent(window, 'scroll');
            source$.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var windowOffsetTop = window.pageYOffset;
                /** @type {?} */
                var stickyParent = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
                /** @type {?} */
                var wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
                _this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        AwSearchLayoutDS.prototype._getPaginationParams = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var requestParams = this.searchModel.getRequestParams();
            /** @type {?} */
            var queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { queryParams[key] = queryParams[key] || null; }));
            // aditional params
            queryParams.orderby = this.orderBy;
            queryParams.orderdirection = this.orderDirection;
            queryParams.page = this.currentPage;
            queryParams.limit = this.pageSize;
            return {
                queryParams: queryParams,
                href: this.configuration.get('paths').searchBasePath,
            };
        };
        return AwSearchLayoutDS;
    }(layoutDataSource.LayoutDataSource));
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
        AwSearchLayoutDS.prototype.drawPagination;
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
            _this.aditionalParamsChange$ = new rxjs.Subject();
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
                        _this._listenToAditionalParamsChange();
                        _this._listenToRouterChanges();
                        break;
                    case 'aw-search-layout.destroy':
                        _this.dataSource.onDestroy();
                        _this.destroyed$.next();
                        break;
                    case 'aw-search-layout.orderbychange':
                        _this.dataSource.onOrderByChange(payload);
                        _this.aditionalParamsChange$.next();
                        break;
                    case 'aw-search-layout.searchreset':
                        _this.dataSource.resetButtonEnabled = false;
                        _this.dataSource.searchModel.clear();
                        _this.aditionalParamsChange$.next();
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
                    case 'n7-smart-pagination.change':
                        _this.dataSource.onResultsLimitChange(payload.value);
                        _this.aditionalParamsChange$.next();
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
                _this.dataSource.resultsLoading = true;
                _this.dataSource.doSearchRequest$().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.dataSource.resultsLoading = false;
                    _this.dataSource.onSearchResponse();
                    _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
                }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        AwSearchLayoutEH.prototype._listenToAditionalParamsChange = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.aditionalParamsChange$.subscribe((/**
             * @return {?}
             */
            function () {
                var searchModel = _this.dataSource.searchModel;
                /** @type {?} */
                var requestParams = searchModel.getRequestParams();
                /** @type {?} */
                var queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
                Object.keys(queryParams).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { queryParams[key] = queryParams[key] || null; }));
                // aditional params
                queryParams.orderby = _this.dataSource.orderBy;
                queryParams.orderdirection = _this.dataSource.orderDirection;
                queryParams.page = _this.dataSource.currentPage;
                queryParams.limit = _this.dataSource.pageSize;
                // router signal
                _this.emitGlobal('navigate', {
                    handler: 'router',
                    path: [],
                    queryParams: queryParams,
                });
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
                        template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>\n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper sticky-parent\">\n        <!-- Left sidebar: facets -->\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar-loading sticky-target\">\n            <div class=\"aw-search__facets-loading\">\n                <n7-content-placeholder [data]=\"{\n                    blocks: [{\n                        classes: 'search-placeholder-facet-input'\n                    }, {\n                        classes: 'search-placeholder-facet-check'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }, {\n                        classes: 'search-placeholder-facet-item'\n                    }]\n                }\">\n                </n7-content-placeholder>\n            </div>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar sticky-target\"\n            [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <div class=\"aw-search__facets\">\n                <n7-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </n7-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>\n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\"\n                        for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n                        id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\"\n                            [selected]=\"option.selected\">\n                            {{ option.label }}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- Search details -->\n            <div *ngIf=\"lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper-loading\">\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                    blocks: [\n                        { classes: 'search-result-placeholder-title' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' },\n                        { classes: 'search-result-placeholder-metadata' }\n                    ]\n                }\"></n7-content-placeholder>\n            </div>\n            <div *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper\">\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                    </n7-smart-breadcrumbs>\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n                    <div class=\"aw-search__fallback\">\n                        <p class=\"aw-search__fallback-string\">\n                            {{ lb.dataSource.fallback }}\n                        </p>\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-search__fallback-button\"\n                            (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\n                            Resetta la ricerca\n                        </button>\n                    </div>\n                </ng-container>\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n    </div>\n</div>"
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
    var ChartTippyComponent = /** @class */ (function () {
        function ChartTippyComponent() {
        }
        /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        ChartTippyComponent.prototype.onClick = /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        function (type, payload) {
            this.emit(type, payload);
        };
        ChartTippyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aw-chart-tippy',
                        template: "<div *ngIf=\"data\" style=\"display: none;\">\n  <div *ngFor=\"let d of data\" id=\"template__{{d.id}}\" class=\"bubble-chart__tippy-template\">\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n      <h2 class=\"aw-bubble-popup-menu__title\">{{ d.title }}</h2>\n      <p class=\"aw-bubble-popup-menu__text\">\n        {{ d.text }}\n      </p>\n\n      <div *ngIf=\"d.relation.value\" class=\"aw-bubble-popup-menu__relation\">\n        <p class=\"aw-bubble-popup-menu__relation-description\">Relazione con \n          <span class=\"aw-bubble-popup-menu__relation-key\">{{d.relation.key}}</span>: \n          <span class=\"aw-bubble-popup-menu__relation-label\"> {{d.relation.value}}</span>\n        </p>\n      </div>\n\n      <div class=\"aw-bubble-popup-menu__actions\">\n        <n7-anchor-wrapper [classes]=\"'aw-bubble-popup-menu__link'\" [data]=\"d.anchorData\">\n          Vai alla scheda\n        </n7-anchor-wrapper>\n        <span *ngIf=\"d.selectable\" class=\"aw-bubble-popup-menu__link\" (click)=\"onClick('select', {id: d.id})\">\n          {{ d.isSelected ? 'Deseleziona' : 'Seleziona'}}\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"
                    }] }
        ];
        ChartTippyComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }],
            anchorData: [{ type: core.Input }]
        };
        return ChartTippyComponent;
    }());
    if (false) {
        /** @type {?} */
        ChartTippyComponent.prototype.data;
        /** @type {?} */
        ChartTippyComponent.prototype.emit;
        /** @type {?} */
        ChartTippyComponent.prototype.anchorData;
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
                        template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>"
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
    function SmartBreadcrumbsItem() { }
    if (false) {
        /**
         * item's label
         * @type {?}
         */
        SmartBreadcrumbsItem.prototype.label;
        /**
         * action click's payload
         * @type {?}
         */
        SmartBreadcrumbsItem.prototype.payload;
        /**
         * additional html classes
         * @type {?|undefined}
         */
        SmartBreadcrumbsItem.prototype.classes;
        /**
         * additional info useful for the component's logic
         * @type {?|undefined}
         */
        SmartBreadcrumbsItem.prototype._meta;
    }
    /**
     * Interface for BreadcrumbsComponent's "Data"
     *
     * \@property items (required)
     * \@property classes (optional)
     *
     * @record
     */
    function SmartBreadcrumbsData() { }
    if (false) {
        /**
         * each item renders a breadcrumb level
         * @type {?}
         */
        SmartBreadcrumbsData.prototype.items;
        /**
         * additional html classes
         * @type {?|undefined}
         */
        SmartBreadcrumbsData.prototype.classes;
    }
    var SmartBreadcrumbsComponent = /** @class */ (function () {
        function SmartBreadcrumbsComponent() {
            var _this = this;
            /**
             * Builds tippy data for a node.
             */
            this.tippyBuilder = (/**
             * @param {?} node
             * @param {?} content
             * @return {?}
             */
            function (node, content) { return tippy__default(node, {
                content: content,
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                appendTo: document.body,
            }); });
            this.getWidths = (/**
             * @param {?} parent
             * @param {?} child
             * @return {?}
             */
            function (parent, child) {
                /** @type {?} */
                var pw = parent.nativeElement.clientWidth;
                /** @type {?} */
                var cw = child.nativeElement.clientWidth;
                /** @type {?} */
                var pp = _this.getSidePadding(parent.nativeElement);
                return { parentWidth: pw - pp, childWidth: cw };
            });
            this.getSidePadding = (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return (
            // returns an integer representing the sum of left and right paddings
            (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
                + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])); });
        }
        /**
         * @return {?}
         */
        SmartBreadcrumbsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _a;
            if (this.bcdiv && this.bcol) {
                var _b = this.getWidths(this.bcdiv, this.bcol), parentWidth = _b.parentWidth, childWidth = _b.childWidth;
                /** @type {?} */
                var liArray = this.bcol.nativeElement.children;
                if (parentWidth === childWidth) { // collapse condition
                    // collapse condition
                    /** @type {?} */
                    var i = 1;
                    while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                        // Skip last element
                        /** @type {?} */
                        var tippyData = document.createElement('ol');
                        tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                        tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                        liArray[i].children[0].innerText = '…'; // convert to ellipsis
                        liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                        this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                        i += 1;
                        // update widths
                        (_a = this.getWidths(this.bcdiv, this.bcol), parentWidth = _a.parentWidth, childWidth = _a.childWidth);
                    }
                }
            }
        };
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
                        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"item.classes\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>"
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
        /**
         * Builds tippy data for a node.
         * @type {?}
         */
        SmartBreadcrumbsComponent.prototype.tippyBuilder;
        /** @type {?} */
        SmartBreadcrumbsComponent.prototype.getWidths;
        /** @type {?} */
        SmartBreadcrumbsComponent.prototype.getSidePadding;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                        label: 'Cerca in tutti campi delle schede'
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
                header: {
                    label: 'Filtri di ricerca',
                    classes: 'search-filters-header'
                },
                inputs: [
                    {
                        type: 'text',
                        facetId: 'query',
                        placeholder: 'Cerca',
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
    var SEARCH_MODEL_ID$1 = 'aw-gallery-layout';
    var AwGalleryLayoutDS = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutDS, _super);
        function AwGalleryLayoutDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.pageTitle = 'Galleria';
            _this.sidebarIsSticky = true;
            _this.currentPage = 1; // pagination value (url param)
            // pagination value (url param)
            _this.pageSize = 12; // linked objects page size
            // linked objects page size
            _this.isFirstLoading = true; // initial URL check
            // initial URL check
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
            _this.totalCount = 12;
            _this.resultsTitle = 'Risultati';
            _this.resetButtonEnabled = true;
            _this.getGalleryModelId = (/**
             * @return {?}
             */
            function () { return SEARCH_MODEL_ID$1; });
            return _this;
        }
        /**
         * @param {?} __0
         * @return {?}
         */
        AwGalleryLayoutDS.prototype.onInit = /**
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
            // remove first
            // stateless search
            if (this.search.model(SEARCH_MODEL_ID$1)) {
                this.search.remove(SEARCH_MODEL_ID$1);
            }
            this.search.add(SEARCH_MODEL_ID$1, lodash.cloneDeep(facetsConfig$1));
            this.searchModel = this.search.model(SEARCH_MODEL_ID$1);
            // query params control
            if (SearchService.queryParams) {
                this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
                SearchService.queryParams = null;
            }
            this.one('aw-gallery-results').updateOptions({
                currentPage: this.currentPage,
                pageSize: this.pageSize,
            });
            this.one('aw-gallery-results').update(null);
            this.mainState.updateCustom('currentNav', 'galleria');
            this.mainState.update('headTitle', 'Arianna Web > Galleria');
        };
        /**
         * @return {?}
         */
        AwGalleryLayoutDS.prototype.onDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
            SearchService.queryParams = null;
        };
        /**
         * @return {?}
         */
        AwGalleryLayoutDS.prototype.onGalleryResponse = /**
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
        AwGalleryLayoutDS.prototype.onOrderByChange = /**
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
        AwGalleryLayoutDS.prototype.onPaginationChange = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var page = payload.replace('page-', '').replace('goto-', '');
            return this._updateSearchPage(page);
        };
        /**
         * @return {?}
         */
        AwGalleryLayoutDS.prototype.resetPagination = /**
         * @return {?}
         */
        function () {
            this._updateSearchPage(1);
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        AwGalleryLayoutDS.prototype.onResultsLimitChange = /**
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
        AwGalleryLayoutDS.prototype.doGalleryRequest$ = /**
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
                // this.one('aw-linked-objects').update({ items: this._normalizeItems(results.items) });
                _this.one('aw-gallery-results').updateOptions({
                    currentPage: _this.currentPage,
                    pageSize: _this.pageSize,
                });
                _this.one('aw-gallery-results').update(null);
            })));
        };
        /**
         * @private
         * @param {?} page
         * @return {?}
         */
        AwGalleryLayoutDS.prototype._updateSearchPage = /**
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
        AwGalleryLayoutDS.prototype._addFacetsLabels = /**
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
        AwGalleryLayoutDS.prototype._addFacetsOptions = /**
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
        AwGalleryLayoutDS.prototype._normalizeItems = /**
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
        AwGalleryLayoutDS.prototype._sidebarStickyControl = /**
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
        return AwGalleryLayoutDS;
    }(core$1.LayoutDataSource));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.destroyed$;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.communication;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.configuration;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.mainState;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.search;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.searchModel;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.pageTitle;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.sidebarIsSticky;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.currentPage;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.pageSize;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.isFirstLoading;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.orderByLabel;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.orderByOptions;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.totalCount;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.resultsTitle;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.options;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.prettifyLabels;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.configKeys;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.fallback;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutDS.prototype.resetButtonEnabled;
        /** @type {?} */
        AwGalleryLayoutDS.prototype.getGalleryModelId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwGalleryLayoutEH = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutEH, _super);
        function AwGalleryLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyed$ = new rxjs.Subject();
            _this.facetsChange$ = new rxjs.Subject();
            return _this;
        }
        /**
         * @return {?}
         */
        AwGalleryLayoutEH.prototype.listen = /**
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
                    case 'aw-gallery-layout.init':
                        _this.route = payload.route;
                        _this.configuration = payload.configuration;
                        _this.dataSource.onInit(payload);
                        _this._listenToFacetsChange();
                        _this._listenToRouterChanges();
                        break;
                    case 'aw-gallery-layout.destroy':
                        _this.dataSource.onDestroy();
                        _this.destroyed$.next();
                        break;
                    case 'aw-gallery-layout.orderbychange':
                        _this.dataSource.onOrderByChange(payload);
                        _this.facetsChange$.next();
                        break;
                    case 'aw-gallery-layout.galleryreset':
                        _this.dataSource.resetButtonEnabled = false;
                        _this.dataSource.galleryModel.clear();
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get('paths').galleryBasePath]
                        });
                        break;
                    default:
                        console.warn('(gallery) unhandled inner event of type', type);
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
                    case 'aw-gallery-results.pagination':
                    case 'aw-gallery-results.goto':
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
                    case 'aw-gallery-results.change':
                        _this.dataSource.onResultsLimitChange(payload);
                        _this.facetsChange$.next();
                        break;
                    case 'aw-gallery-results.click':
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
        AwGalleryLayoutEH.prototype._listenToFacetsChange = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.facetsChange$.pipe(operators.debounceTime(500)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.dataSource.doGalleryRequest$().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.dataSource.onGalleryResponse();
                    _this.emitGlobal('galleryresponse', _this.dataSource.getGalleryModelId());
                }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        AwGalleryLayoutEH.prototype._listenToRouterChanges = /**
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
        return AwGalleryLayoutEH;
    }(core$1.EventHandler));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutEH.prototype.destroyed$;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutEH.prototype.route;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutEH.prototype.facetsChange$;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutEH.prototype.configuration;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AwGalleryLayoutConfig = {
        layoutId: 'aw-gallery-layout',
        widgets: [
            { id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH },
            { id: 'aw-gallery-results', hasStaticData: true },
        ],
        layoutDS: AwGalleryLayoutDS,
        layoutEH: AwGalleryLayoutEH,
        widgetsDataSources: DS$1,
        widgetsEventHandlers: EH$1,
        layoutOptions: {}
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AwGalleryLayoutComponent = /** @class */ (function (_super) {
        __extends(AwGalleryLayoutComponent, _super);
        function AwGalleryLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search, route) {
            var _this = _super.call(this, AwGalleryLayoutConfig) || this;
            _this.configuration = configuration;
            _this.layoutsConfiguration = layoutsConfiguration;
            _this.mainState = mainState;
            _this.communication = communication;
            _this.search = search;
            _this.route = route;
            return _this;
        }
        /**
         * @protected
         * @return {?}
         */
        AwGalleryLayoutComponent.prototype.initPayload = /**
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
        AwGalleryLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        AwGalleryLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        AwGalleryLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aw-gallery-layout',
                        template: "<div class=\"aw-gallery\" *ngIf=\"lb.dataSource\">\n\n  <div class=\"aw-gallery__header\">\n    <div class=\"aw-gallery__header-left\">\n      <h1 class=\"aw-gallery__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n    </div>\n  </div>\n\n  <div class=\"aw-gallery__content-wrapper sticky-parent\">\n    \n    <!-- Left sidebar: facets -->\n    <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar-loading sticky-target\">\n        <div class=\"aw-gallery__facets-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'gallery-placeholder-facet-input'\n                }, {\n                    classes: 'gallery-placeholder-facet-check'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n    </div>\n    <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n        <div class=\"aw-gallery__facets\">\n            <!-- <n7-facet-header [data]=\"{\n                iconLeft: 'n7-icon-search1',\n                text: 'Filtri di ricerca',\n                iconRight: 'n7-icon-angle-down',\n                classes: 'is-expanded',\n                payload: 'header'\n                }\"></n7-facet-header> -->\n            <n7-facets-wrapper \n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n              </n7-facets-wrapper>\n        </div>\n    </div>\n\n    <div class=\"aw-gallery__content\">\n      <div class=\"aw-gallery__results-header\">\n        <div class=\"aw-gallery__results-header-left\">\n          <h3 class=\"aw-gallery__total\">\n            <span class=\"aw-gallery__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n            <span class=\"aw-gallery__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n          </h3>\n        </div>\n        <div class=\"aw-gallery__results-header-right\">\n          <label class=\"aw-gallery__results-select-orderby-label\"\n            for=\"aw-gallery__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n          <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n            id=\"aw-gallery__results-select-orderby\">\n            <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">\n              {{ option.label }}</option>\n          </select>\n        </div>\n      </div>\n      \n      <!-- Gallery details -->\n      <div class=\"aw-gallery__results-wrapper\">\n\n        <!-- Gallery results loader -->\n        <div *ngIf=\"!(lb.widgets['aw-gallery-results'].ds.out$ | async)\"\n             class=\"aw-gallery__results-wrapper-loader n7-grid-3\">\n             <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n        </div>\n\n        <!-- Gallery results and pagination -->\n        <div class=\"aw-gallery__results\">\n            <div class=\"aw-gallery__results-list n7-grid-3\">\n                <n7-item-preview \n                *ngFor=\"let item of (lb.widgets['aw-gallery-results'].ds.out$ | async)?.res\"\n                class=\"gallery-result is-vertical\"\n                [data]=\"item\">\n                </n7-item-preview>\n            </div>\n\n            <n7-pagination [data]=\"(lb.widgets['aw-gallery-results'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-gallery-results'].emit\">\n            </n7-pagination>\n\n            <!-- <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n            <div class=\"aw-gallery__fallback\">\n                <p class=\"aw-gallery__fallback-string\">\n                {{ lb.dataSource.fallback }}\n                </p>\n                <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-gallery__fallback-button\"\n                (click)=\"lb.eventHandler.emitInner('galleryreset', {})\">\n                Resetta la ricerca\n                </button>\n            </div>\n            </ng-container>\n            <n7-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-pagination> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        AwGalleryLayoutComponent.ctorParameters = function () { return [
            { type: ConfigurationService },
            { type: LayoutsConfigurationService },
            { type: MainStateService },
            { type: CommunicationService },
            { type: SearchService },
            { type: router.ActivatedRoute }
        ]; };
        return AwGalleryLayoutComponent;
    }(AbstractLayout));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.configuration;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.layoutsConfiguration;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.mainState;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.communication;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.search;
        /**
         * @type {?}
         * @private
         */
        AwGalleryLayoutComponent.prototype.route;
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
    var COMPONENTS$1 = [
        AwEntitaLayoutComponent,
        AwHomeLayoutComponent,
        AwSchedaLayoutComponent,
        AwSearchLayoutComponent,
        AwGalleryLayoutComponent,
        BubbleChartWrapperComponent,
        ChartTippyComponent,
        SmartBreadcrumbsComponent,
    ];
    var N7BoilerplateAriannaWebModule = /** @class */ (function () {
        function N7BoilerplateAriannaWebModule() {
        }
        N7BoilerplateAriannaWebModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS$1,
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            components.DvComponentsLibModule,
                            N7BoilerplateCommonModule,
                        ],
                        providers: [],
                        entryComponents: COMPONENTS$1,
                        exports: COMPONENTS$1,
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
    function DataWidgetWrapperData() { }
    if (false) {
        /** @type {?|undefined} */
        DataWidgetWrapperData.prototype.classes;
    }
    var DataWidgetWrapperComponent = /** @class */ (function () {
        function DataWidgetWrapperComponent() {
        }
        DataWidgetWrapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dv-data-widget-wrapper',
                        template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\n    <ng-content></ng-content>\n</div>"
                    }] }
        ];
        DataWidgetWrapperComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return DataWidgetWrapperComponent;
    }());
    if (false) {
        /** @type {?} */
        DataWidgetWrapperComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DatepickerWrapperData() { }
    if (false) {
        /** @type {?} */
        DatepickerWrapperData.prototype.select;
        /** @type {?} */
        DatepickerWrapperData.prototype.datepicker;
        /** @type {?|undefined} */
        DatepickerWrapperData.prototype.payload;
    }
    /**
     * @record
     */
    function Select() { }
    if (false) {
        /** @type {?} */
        Select.prototype.id;
        /** @type {?} */
        Select.prototype.hidden;
        /** @type {?|undefined} */
        Select.prototype.icon;
        /** @type {?} */
        Select.prototype.label;
        /** @type {?} */
        Select.prototype.items;
        /** @type {?|undefined} */
        Select.prototype.classes;
    }
    /**
     * @record
     */
    function DropdownItems() { }
    if (false) {
        /** @type {?} */
        DropdownItems.prototype.text;
        /** @type {?} */
        DropdownItems.prototype.payload;
        /** @type {?|undefined} */
        DropdownItems.prototype.classes;
    }
    var DatepickerWrapperComponent = /** @class */ (function () {
        function DatepickerWrapperComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        DatepickerWrapperComponent.prototype.onClick = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            if (!this.emit)
                return;
            this.emit('click', payload);
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        DatepickerWrapperComponent.prototype.toggleDropDown = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            if (!this.emit)
                return;
            this.emit('toggle', payload);
        };
        DatepickerWrapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dv-datepicker-wrapper',
                        template: "<div *ngIf=\"data\" class=\"dv-datepicker-wrapper {{ data.select.classes || '' }}\">\n    <div class=\"dv-datepicker-wrapper__label\" (click)=\"toggleDropDown(data.payload)\">\n        <input type=\"text\" [value]=\"data.select.label\" [readOnly]=\"true\"/>\n        <span class=\"{{data.select.icon}}\"></span>\n    </div>\n    <div class=\"dv-datepicker-wrapper__dropdown\" [hidden]=\"data.select.hidden\">\n        <ul class=\"dv-datepicker-wrapper__dropdown-list\">\n            <li class=\"dv-datepicker-wrapper__dropdown-list-option {{ opt.classes || '' }}\" *ngFor=\"let opt of data.select.items\" (click)=\"onClick(opt.payload)\">{{opt.text}}</li>\n        </ul>\n    </div>\n    <n7-datepicker\n        [data]=\"data.datepicker.data\"\n        [emit]=\"emit\">\n    </n7-datepicker>\n</div>\n"
                    }] }
        ];
        DatepickerWrapperComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return DatepickerWrapperComponent;
    }());
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
        /**
         * @return {?}
         */
        DvExampleLayoutDS.prototype.onInit = /**
         * @return {?}
         */
        function () {
            this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
        };
        return DvExampleLayoutDS;
    }(layoutDataSource.LayoutDataSource));
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
            var _this = this;
            this.innerEvents$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, payload = _a.payload;
                _this.dataSource.onInit();
            }));
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
            return null;
        };
        return DvDataWidgetDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DvDatepickerWrapperDS = /** @class */ (function (_super) {
        __extends(DvDatepickerWrapperDS, _super);
        function DvDatepickerWrapperDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._datepicker = null;
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        DvDatepickerWrapperDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
                        getInstance: (/**
                         * @param {?} datepicker
                         * @return {?}
                         */
                        function (datepicker) { _this._datepicker = datepicker; }),
                    },
                },
            };
        };
        /**
         * @return {?}
         */
        DvDatepickerWrapperDS.prototype.openDatepicker = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._datepicker.open(); }));
            this.output.select.hidden = true;
            this.output.datepicker.hidden = false;
        };
        /**
         * @return {?}
         */
        DvDatepickerWrapperDS.prototype.closeDatepicker = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._datepicker.close(); }));
            this.output.select.hidden = true;
            this.output.datepicker.hidden = true;
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        DvDatepickerWrapperDS.prototype.setLabel = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            this.output.select.label = payload;
            this.output.datepicker.hidden = true;
        };
        /**
         * @return {?}
         */
        DvDatepickerWrapperDS.prototype.toggleDropDown = /**
         * @return {?}
         */
        function () {
            if (this.output.select.hidden === false) {
                this.output.select.hidden = true;
            }
            else {
                this.output.select.hidden = false;
            }
        };
        return DvDatepickerWrapperDS;
    }(core$1.DataSource));
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
    var DvGraphDS = /** @class */ (function (_super) {
        __extends(DvGraphDS, _super);
        function DvGraphDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @protected
         * @return {?}
         */
        DvGraphDS.prototype.transform = /**
         * @protected
         * @return {?}
         */
        function () {
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
         * @return {?}
         */
        DvInnerTitleDS.prototype.transform = /**
         * @protected
         * @return {?}
         */
        function () {
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
         * @return {?}
         */
        DvWidgetDS.prototype.transform = /**
         * @protected
         * @return {?}
         */
        function () {
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
        DvDatepickerWrapperDS: DvDatepickerWrapperDS,
        DvGraphDS: DvGraphDS,
        DvInnerTitleDS: DvInnerTitleDS,
        DvWidgetDS: DvWidgetDS
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DvDatepickerWrapperEH = /** @class */ (function (_super) {
        __extends(DvDatepickerWrapperEH, _super);
        function DvDatepickerWrapperEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        DvDatepickerWrapperEH.prototype.listen = /**
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
            }));
        };
        return DvDatepickerWrapperEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH$2 = /*#__PURE__*/Object.freeze({
        DvDatepickerWrapperEH: DvDatepickerWrapperEH
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
        DvExampleLayoutComponent.prototype.initPayload = /**
         * @return {?}
         */
        function () {
            return {};
        };
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
                        template: "<div class=\"dv-example-layout\" id=\"example-layout\">\n\n    <!-- Data widget wrapper with not-fixed height, two rows -->\n    <dv-data-widget-wrapper>\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-chart\n                    [data]=\"lb.widgets['dv-graph'].ds.out$ | async\">\n                </n7-chart>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, two rows -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                Row content\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n\n    <!-- Data widget wrapper with fixed height, one row -->\n    <dv-data-widget-wrapper [data]=\"{ classes: 'dv-data-widget-wrapper-fixed-height' }\">\n        <div class=\"dv-data-widget-wrapper__title\">\n            <n7-inner-title\n                [data]=\"lb.widgets['dv-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        <div class=\"dv-data-widget-wrapper__content\">\n            <div class=\"dv-data-widget-wrapper__content-row\">\n                <n7-data-widget\n                    [data]=\"lb.widgets['dv-widget'].ds.out$ | async\">\n                </n7-data-widget>\n            </div>\n        </div>\n    </dv-data-widget-wrapper>\n    \n    <dv-datepicker-wrapper \n        [data]=\"lb.widgets['dv-datepicker-wrapper'].ds.out$ | async\"\n        [emit]=\"lb.widgets['dv-datepicker-wrapper'].emit\">\n    </dv-datepicker-wrapper>\n</div>"
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
        DatepickerWrapperComponent,
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
                        exports: COMPONENTS$2,
                    },] }
        ];
        return N7BoilerplateDataVizModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrHomeLayoutDS = /** @class */ (function (_super) {
        __extends(MrHomeLayoutDS, _super);
        function MrHomeLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrHomeLayoutDS.prototype.onInit = /**
         * @return {?}
         */
        function () {
            this.one('mr-resources').updateOptions({ source: 'resources' });
            this.one('mr-collections').updateOptions({ source: 'collections' });
            this.some(['mr-resources', 'mr-collections']).update({});
            this.one('mr-res-header').update({
                title: 'Le mappe',
                subtitle: 'Una selezione di alcune mappe di Totus Mundus.',
                button: {
                    text: 'Visita il catalogo',
                    link: '/catalogo'
                }
            });
            this.one('mr-coll-header').update({
                title: 'I percorsi',
                subtitle: 'Visita il mondo di Totus Mundus con una serie di percorsi per te.',
                button: {
                    text: 'Visita il catalogo',
                    link: '/catalogo'
                }
            });
            this.one('mr-hero').update({
                text: 'The Totus Mundus project presents a series of information and data about the jesuit Matteo Ricci, its life, the maps he created and the people he collaborated with',
                button: {
                    title: '',
                    text: 'Cerca',
                    anchor: {
                        href: '/button-url',
                        target: '_blank'
                    }
                },
                image: 'https://i.imgur.com/VHTbVbm.png'
            });
        };
        return MrHomeLayoutDS;
    }(layoutDataSource.LayoutDataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrHomeLayoutEH = /** @class */ (function (_super) {
        __extends(MrHomeLayoutEH, _super);
        function MrHomeLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrHomeLayoutEH.prototype.listen = /**
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
                    case 'mr-home-layout.init':
                        _this.dataSource.onInit(payload);
                        break;
                    default:
                        break;
                }
            }));
        };
        return MrHomeLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        MrItemPreviewsDS.prototype.transform = 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return this.mock[this.options.source];
        };
        return MrItemPreviewsDS;
    }(core$1.DataSource));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MrItemPreviewsDS.prototype.mock;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrInnerTitleDS = /** @class */ (function (_super) {
        __extends(MrInnerTitleDS, _super);
        function MrInnerTitleDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        MrInnerTitleDS.prototype.transform = 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var title = data.title, subtitle = data.subtitle, button = data.button;
            return {
                title: {
                    main: {
                        text: title,
                        classes: 'bold'
                    },
                    secondary: {
                        text: subtitle,
                        classes: 'italic'
                    }
                },
                actions: {
                    buttons: [
                        {
                            text: button.text,
                            payload: button.link,
                            classes: 'n7-btn-cta'
                        }
                    ]
                }
            };
        };
        return MrInnerTitleDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrHeroDS = /** @class */ (function (_super) {
        __extends(MrHeroDS, _super);
        function MrHeroDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        MrHeroDS.prototype.transform = 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        return MrHeroDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrFiltersDS = /** @class */ (function (_super) {
        __extends(MrFiltersDS, _super);
        function MrFiltersDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        MrFiltersDS.prototype.transform = 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        return MrFiltersDS;
    }(core$1.DataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DS$3 = /*#__PURE__*/Object.freeze({
        MrItemPreviewsDS: MrItemPreviewsDS,
        MrInnerTitleDS: MrInnerTitleDS,
        MrHeroDS: MrHeroDS,
        MrFiltersDS: MrFiltersDS
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrDummyEH = /** @class */ (function (_super) {
        __extends(MrDummyEH, _super);
        function MrDummyEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrDummyEH.prototype.listen = /**
         * @return {?}
         */
        function () {
            // TODO
        };
        return MrDummyEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrFiltersEH = /** @class */ (function (_super) {
        __extends(MrFiltersEH, _super);
        function MrFiltersEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrFiltersEH.prototype.listen = /**
         * @return {?}
         */
        function () {
            // TODO
        };
        return MrFiltersEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var EH$3 = /*#__PURE__*/Object.freeze({
        MrDummyEH: MrDummyEH,
        MrFiltersEH: MrFiltersEH
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MrHomeLayoutConfig = {
        layoutId: 'mr-home-layout',
        widgets: [{
                id: 'mr-resources', dataSource: MrItemPreviewsDS,
            }, {
                id: 'mr-collections', dataSource: MrItemPreviewsDS,
            }, {
                id: 'mr-res-header', dataSource: MrInnerTitleDS,
            }, {
                id: 'mr-coll-header', dataSource: MrInnerTitleDS,
            }, {
                id: 'mr-hero', dataSource: MrHeroDS,
            }],
        layoutDS: MrHomeLayoutDS,
        layoutEH: MrHomeLayoutEH,
        widgetsDataSources: DS$3,
        widgetsEventHandlers: EH$3,
        options: {
        // TODO
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrHomeLayoutComponent = /** @class */ (function (_super) {
        __extends(MrHomeLayoutComponent, _super);
        function MrHomeLayoutComponent(layoutsConfiguration) {
            return _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || MrHomeLayoutConfig) || this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrHomeLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                options: this.config.options || {}
            };
        };
        /**
         * @return {?}
         */
        MrHomeLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrHomeLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        MrHomeLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-home-layout',
                        template: "<div class=\"mr-home\" *ngIf=\"lb.dataSource\">\n    <!-- TODO: Replace with <n7-carousel-component> -->\n    <div style=\"\n        height: 300px;\n        border: 1px solid #dddddd;\n        line-height: 300px;\n        text-align: center;\">\n        <em>n7-carousel-component</em>\n    </div>\n    <!-- ========================================== -->\n    <n7-inner-title [data]=\"lb.widgets['mr-res-header'].ds.out$ | async\"></n7-inner-title>\n    <n7-item-preview\n        *ngFor=\"let resource of (lb.widgets['mr-resources'].ds.out$ | async)\"\n        [data]=\"resource\">\n    </n7-item-preview>\n    <n7-hero [data]=\"lb.widgets['mr-hero'].ds.out$ | async\">\n    </n7-hero>\n    <n7-inner-title [data]=\"lb.widgets['mr-coll-header'].ds.out$ | async\">\n    </n7-inner-title>\n    <n7-item-preview\n        *ngFor=\"let collection of (lb.widgets['mr-collections'].ds.out$ | async)\" \n        [data]=\"collection\">\n    </n7-item-preview>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MrHomeLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService }
        ]; };
        return MrHomeLayoutComponent;
    }(AbstractLayout));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var facetsConfig$2 = {
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
                        label: 'Cerca in tutti campi delle schede',
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
                // score | text | date
                key: 'label_sort',
                // docPath, elastic key, ecc
                direction: 'ASC',
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import helpers from '../../../common/helpers';
    /** @type {?} */
    var SEARCH_MODEL_ID$2 = 'mr-search-layout';
    var MrSearchLayoutDS = /** @class */ (function (_super) {
        __extends(MrSearchLayoutDS, _super);
        function MrSearchLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} __0
         * @return {?}
         */
        MrSearchLayoutDS.prototype.onInit = /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var 
            // configuration, mainState, options, communication,
            search = _a.search;
            this.search = search;
            if (this.search.model(SEARCH_MODEL_ID$2)) {
                this.search.remove(SEARCH_MODEL_ID$2);
            }
            this.search.add(SEARCH_MODEL_ID$2, lodash.cloneDeep(facetsConfig$2));
            this.searchModel = this.search.model(SEARCH_MODEL_ID$2);
            // this.one('facets-wrapper').update({ searchModel: this.searchModel });
            this.one('mr-resources').updateOptions({ source: 'search' });
            this.one('mr-resources').update({});
        };
        return MrSearchLayoutDS;
    }(core$1.LayoutDataSource));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MrSearchLayoutDS.prototype.search;
        /**
         * @type {?}
         * @private
         */
        MrSearchLayoutDS.prototype.searchModel;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrSearchLayoutEH = /** @class */ (function (_super) {
        __extends(MrSearchLayoutEH, _super);
        function MrSearchLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrSearchLayoutEH.prototype.listen = /**
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
                    case 'mr-search-layout.init':
                        _this.dataSource.onInit(payload);
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            }));
            /*
              this.outerEvents$.subscribe(({ type, payload }) => {
              });
            */
        };
        return MrSearchLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MrSearchLayoutConfig = {
        layoutId: 'mr-search-layout',
        widgets: [{
                id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { CommunicationService } from '../../../common/services/communication.service';
    var MrSearchLayoutComponent = /** @class */ (function (_super) {
        __extends(MrSearchLayoutComponent, _super);
        function MrSearchLayoutComponent(layoutsConfiguration, search) {
            var _this = _super.call(this, layoutsConfiguration.get('MrSearchLayoutConfig') || MrSearchLayoutConfig) || this;
            _this.search = search;
            return _this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrSearchLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                // configuration: this.configuration,
                // mainState: this.mainState,
                // communication: this.communication,
                search: this.search,
                // route: this.route,
                options: this.config.options || {},
            };
        };
        /**
         * @return {?}
         */
        MrSearchLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrSearchLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        MrSearchLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-search-layout',
                        template: "<div class=\"search-layout\" *ngIf=\"lb.dataSource\">\n    <div class=\"search-wrapper\">\n        <div class=\"filter-section\">\n            <h2>Filtra i risultati</h2>\n            <n7-facets-wrapper \n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\" \n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n            </n7-facets-wrapper>\n        </div>\n        <n7-item-preview \n            *ngFor=\"let resource of (lb.widgets['mr-resources'].ds.out$ | async)\" \n            [data]=\"resource\">\n        </n7-item-preview>\n    </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MrSearchLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService },
            { type: SearchService }
        ]; };
        return MrSearchLayoutComponent;
    }(AbstractLayout));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MrSearchLayoutComponent.prototype.search;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrGlossaryLayoutDS = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutDS, _super);
        function MrGlossaryLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // private communication;
        // private communication;
        /**
         * @return {?}
         */
        MrGlossaryLayoutDS.prototype.onInit = 
        // private communication;
        /**
         * @return {?}
         */
        function () {
            // this.communication = payload.communication;
        };
        return MrGlossaryLayoutDS;
    }(core$1.LayoutDataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrGlossaryLayoutEH = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutEH, _super);
        function MrGlossaryLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrGlossaryLayoutEH.prototype.listen = /**
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
                    case 'mr-glossary-layout.init':
                        _this.dataSource.onInit(payload);
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            }));
            /*
              this.outerEvents$.subscribe(({ type, payload }) => {
              });
            */
        };
        return MrGlossaryLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrGlossaryLayoutComponent = /** @class */ (function (_super) {
        __extends(MrGlossaryLayoutComponent, _super);
        function MrGlossaryLayoutComponent(layoutsConfiguration) {
            return _super.call(this, layoutsConfiguration.get('MrGlossaryLayoutConfig') || MrGlossaryLayoutConfig) || this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrGlossaryLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                options: this.config.options || {}
            };
        };
        /**
         * @return {?}
         */
        MrGlossaryLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrGlossaryLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        MrGlossaryLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-glossary-layout',
                        template: "<div class=\"glossary-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Glossary layout!\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MrGlossaryLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService }
        ]; };
        return MrGlossaryLayoutComponent;
    }(AbstractLayout));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrStaticLayoutDS = /** @class */ (function (_super) {
        __extends(MrStaticLayoutDS, _super);
        function MrStaticLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // private communication;
        // private communication;
        /**
         * @return {?}
         */
        MrStaticLayoutDS.prototype.onInit = 
        // private communication;
        /**
         * @return {?}
         */
        function () {
            // this.communication = payload.communication;
        };
        return MrStaticLayoutDS;
    }(core$1.LayoutDataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrStaticLayoutEH = /** @class */ (function (_super) {
        __extends(MrStaticLayoutEH, _super);
        function MrStaticLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        MrStaticLayoutEH.prototype.listen = /**
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
                    case 'mr-static-layout.init':
                        _this.dataSource.onInit(payload);
                        break;
                    default:
                        console.warn('unhandled inner event of type', type);
                        break;
                }
            }));
            /*
              this.outerEvents$.subscribe(({ type, payload }) => {
              });
            */
        };
        return MrStaticLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MrStaticLayoutConfig = {
        layoutId: 'n7-static-layout',
        widgets: [
        // {
        //   id: 'title',          ← Insert a component here.
        //   hasStaticData: true,  ← Renders the widget before this.one().update is called.
        // }
        ],
        layoutDS: MrStaticLayoutDS,
        layoutEH: MrStaticLayoutEH,
        widgetsDataSources: DS$3,
        widgetsEventHandlers: EH$3,
        layoutOptions: {}
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrStaticLayoutComponent = /** @class */ (function (_super) {
        __extends(MrStaticLayoutComponent, _super);
        function MrStaticLayoutComponent(layoutsConfiguration) {
            return _super.call(this, layoutsConfiguration.get('MrStaticLayoutConfig') || MrStaticLayoutConfig) || this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrStaticLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                options: this.config.options || {}
            };
        };
        /**
         * @return {?}
         */
        MrStaticLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrStaticLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        MrStaticLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-static-layout',
                        template: "<div class=\"static-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Static layout!\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MrStaticLayoutComponent.ctorParameters = function () { return [
            { type: LayoutsConfigurationService }
        ]; };
        return MrStaticLayoutComponent;
    }(AbstractLayout));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchFacetsLayoutDS = /** @class */ (function (_super) {
        __extends(SearchFacetsLayoutDS, _super);
        function SearchFacetsLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        SearchFacetsLayoutDS.prototype.onInit = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            this.data = payload.data;
            this.initInputs();
        };
        /**
         * @return {?}
         */
        SearchFacetsLayoutDS.prototype.onDestroy = /**
         * @return {?}
         */
        function () {
            // TODO
        };
        /**
         * @return {?}
         */
        SearchFacetsLayoutDS.prototype.initInputs = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.data.sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                section.inputs.forEach((/**
                 * @param {?} input
                 * @return {?}
                 */
                function (input) {
                    // set id
                    /** @type {?} */
                    var widgetDataSource = _this.getWidgetDataSource(input.id);
                    widgetDataSource.id = input.id;
                    // update data
                    _this.one(input.id).update(input.data);
                }));
            }));
        };
        return SearchFacetsLayoutDS;
    }(core$1.LayoutDataSource));
    if (false) {
        /** @type {?} */
        SearchFacetsLayoutDS.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ChangedSubjects() { }
    var SearchFacetsLayoutEH = /** @class */ (function (_super) {
        __extends(SearchFacetsLayoutEH, _super);
        function SearchFacetsLayoutEH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changed$ = {};
            return _this;
        }
        /**
         * @return {?}
         */
        SearchFacetsLayoutEH.prototype.listen = /**
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
                    case 'mr-search-facets-layout.init':
                        _this.dataSource.onInit(payload);
                        _this.initChangedListener(payload.data);
                        break;
                    case 'mr-search-facets-layout.destroy':
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
                if (type.indexOf('change')) {
                    _this.changed$[payload.id].next(payload);
                }
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        SearchFacetsLayoutEH.prototype.initChangedListener = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            data.sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                section.inputs.forEach((/**
                 * @param {?} input
                 * @return {?}
                 */
                function (input) {
                    _this.changed$[input.id] = new rxjs.Subject();
                    _this.changed$[input.id].pipe(operators.debounceTime(input.delay || 1)).subscribe((/**
                     * @param {?} payload
                     * @return {?}
                     */
                    function (payload) {
                        console.warn('#todo', payload);
                    }));
                }));
            }));
        };
        return SearchFacetsLayoutEH;
    }(core$1.EventHandler));
    if (false) {
        /** @type {?} */
        SearchFacetsLayoutEH.prototype.changed$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SearchFacetsLayoutConfig = {
        layoutId: 'mr-search-facets-layout',
        widgets: [],
        layoutDS: SearchFacetsLayoutDS,
        layoutEH: SearchFacetsLayoutEH,
        widgetsDataSources: DS$3,
        widgetsEventHandlers: EH$3,
        layoutOptions: {}
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacetTextDS = /** @class */ (function (_super) {
        __extends(FacetTextDS, _super);
        function FacetTextDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = (/**
             * @return {?}
             */
            function () { return _this.value; });
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        FacetTextDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        FacetTextDS.prototype.setValue = /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                this.update(__assign({}, this.input, { value: value }));
            }
        };
        /**
         * @return {?}
         */
        FacetTextDS.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.value = null;
        };
        return FacetTextDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        FacetTextDS.prototype.id;
        /** @type {?} */
        FacetTextDS.prototype.value;
        /** @type {?} */
        FacetTextDS.prototype.getValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacetCheckboxDS = /** @class */ (function (_super) {
        __extends(FacetCheckboxDS, _super);
        function FacetCheckboxDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = (/**
             * @return {?}
             */
            function () { return _this.value; });
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        FacetCheckboxDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        FacetCheckboxDS.prototype.setValue = /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                var checkboxes = this.input.checkboxes;
                /** @type {?} */
                var updatedCheckboxes = checkboxes.map((/**
                 * @param {?} checkbox
                 * @return {?}
                 */
                function (checkbox) { return (__assign({}, checkbox, { checked: value.indexOf(checkbox.payload) !== -1 })); }));
                this.update(__assign({}, this.input, { checkboxes: updatedCheckboxes }));
            }
        };
        /**
         * @return {?}
         */
        FacetCheckboxDS.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.value = [];
        };
        return FacetCheckboxDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        FacetCheckboxDS.prototype.id;
        /** @type {?} */
        FacetCheckboxDS.prototype.value;
        /** @type {?} */
        FacetCheckboxDS.prototype.getValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacetSelectDS = /** @class */ (function (_super) {
        __extends(FacetSelectDS, _super);
        function FacetSelectDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = (/**
             * @return {?}
             */
            function () { return _this.value; });
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        FacetSelectDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        FacetSelectDS.prototype.setValue = /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                var options = this.input.options;
                /** @type {?} */
                var updatedOptions = options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return (__assign({}, option, { selected: value === option.value })); }));
                this.update(__assign({}, this.input, { options: updatedOptions }));
            }
        };
        /**
         * @return {?}
         */
        FacetSelectDS.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.value = null;
        };
        return FacetSelectDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        FacetSelectDS.prototype.id;
        /** @type {?} */
        FacetSelectDS.prototype.value;
        /** @type {?} */
        FacetSelectDS.prototype.getValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ACTIVE_CLASS = 'is-active';
    var FacetLinkDS = /** @class */ (function (_super) {
        __extends(FacetLinkDS, _super);
        function FacetLinkDS() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getValue = (/**
             * @return {?}
             */
            function () { return _this.value; });
            return _this;
        }
        /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        FacetLinkDS.prototype.transform = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        };
        /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        FacetLinkDS.prototype.setValue = /**
         * @param {?} value
         * @param {?=} update
         * @return {?}
         */
        function (value, update) {
            if (update === void 0) { update = false; }
            this.value = value;
            if (update) {
                var links = this.input.links;
                /** @type {?} */
                var updatedLinks = links.map((/**
                 * @param {?} link
                 * @return {?}
                 */
                function (link) { return (__assign({}, link, { classes: value.indexOf(link.payload) !== -1 ? ACTIVE_CLASS : '' })); }));
                this.update(__assign({}, this.input, { links: updatedLinks }));
            }
        };
        /**
         * @return {?}
         */
        FacetLinkDS.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.value = [];
        };
        return FacetLinkDS;
    }(core$1.DataSource));
    if (false) {
        /** @type {?} */
        FacetLinkDS.prototype.id;
        /** @type {?} */
        FacetLinkDS.prototype.value;
        /** @type {?} */
        FacetLinkDS.prototype.getValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FacetGenericEH = /** @class */ (function (_super) {
        __extends(FacetGenericEH, _super);
        function FacetGenericEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        FacetGenericEH.prototype.listen = /**
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
                    case _this.dataSource.id + ".change":
                        _this.emitOuter('change', __assign({}, payload, { id: _this.dataSource.id }));
                        break;
                    default:
                        break;
                }
            }));
        };
        return FacetGenericEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATASOURCE_MAP = {
        text: FacetTextDS,
        checkbox: FacetCheckboxDS,
        select: FacetSelectDS,
        link: FacetLinkDS,
    };
    var MrSearchFacetsLayoutComponent = /** @class */ (function (_super) {
        __extends(MrSearchFacetsLayoutComponent, _super);
        function MrSearchFacetsLayoutComponent() {
            return _super.call(this, SearchFacetsLayoutConfig) || this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrSearchFacetsLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                data: this.data
            };
        };
        /**
         * @return {?}
         */
        MrSearchFacetsLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.loadWidgets();
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrSearchFacetsLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        /**
         * @return {?}
         */
        MrSearchFacetsLayoutComponent.prototype.loadWidgets = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.widgets = [];
            this.data.sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                section.inputs.forEach((/**
                 * @param {?} input
                 * @return {?}
                 */
                function (input) {
                    _this.widgets.push({
                        id: input.id,
                        dataSource: DATASOURCE_MAP[input.type],
                        eventHandler: FacetGenericEH
                    });
                }));
            }));
        };
        MrSearchFacetsLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-search-facets-layout',
                        template: "<div *ngIf=\"lb.dataSource.data\" class=\"mr-search-facets {{ lb.dataSource.data.classes || '' }}\">\n    <div *ngFor=\"let section of lb.dataSource.data.sections\" class=\"mr-search-facets__section {{ section.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"section.header\"\n        ></n7-facet-header>\n\n        <div *ngFor=\"let input of section.inputs\" class=\"mr-search-facets__input {{ input.classes || '' }}\">\n            <ng-container [ngSwitch]=\"input.type\">\n\n                <!-- INPUT TEXT -->\n                <n7-input-text \n                *ngSwitchCase=\"'text'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-text>\n\n                <!-- INPUT CHECKBOX -->\n                <n7-input-checkbox \n                *ngSwitchCase=\"'checkbox'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-checkbox>\n                \n                <!-- INPUT SELECT -->\n                <n7-input-select \n                *ngSwitchCase=\"'select'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-select>\n                \n                <!-- INPUT LINK -->\n                <n7-input-link \n                *ngSwitchCase=\"'link'\"\n                [data]=\"lb.widgets[input.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[input.id].emit\"></n7-input-link>\n            \n            </ng-container>\n        </div>\n        \n    </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        MrSearchFacetsLayoutComponent.ctorParameters = function () { return []; };
        MrSearchFacetsLayoutComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return MrSearchFacetsLayoutComponent;
    }(AbstractLayout));
    if (false) {
        /** @type {?} */
        MrSearchFacetsLayoutComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchTestLayoutDS = /** @class */ (function (_super) {
        __extends(SearchTestLayoutDS, _super);
        function SearchTestLayoutDS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SearchTestLayoutDS.prototype.onInit = /**
         * @return {?}
         */
        function () {
            // TODO
        };
        return SearchTestLayoutDS;
    }(core$1.LayoutDataSource));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchTestLayoutEH = /** @class */ (function (_super) {
        __extends(SearchTestLayoutEH, _super);
        function SearchTestLayoutEH() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SearchTestLayoutEH.prototype.listen = /**
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
                    case 'mr-search-test-layout.init':
                        _this.dataSource.onInit(payload);
                        break;
                    default:
                        break;
                }
            }));
            /* this.outerEvents$.subscribe(({ type, payload }) => {
              switch (type) {
                default:
                  break;
              }
            }); */
        };
        return SearchTestLayoutEH;
    }(core$1.EventHandler));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SearchTestLayoutConfig = {
        layoutId: 'mr-search-test-layout',
        widgets: [
        // TODO
        ],
        layoutDS: SearchTestLayoutDS,
        layoutEH: SearchTestLayoutEH,
        widgetsDataSources: DS$3,
        widgetsEventHandlers: EH$3,
        layoutOptions: {}
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MrSearchTestLayoutComponent = /** @class */ (function (_super) {
        __extends(MrSearchTestLayoutComponent, _super);
        function MrSearchTestLayoutComponent() {
            var _this = _super.call(this, SearchTestLayoutConfig) || this;
            _this.searchConfig = {
                classes: 'search-test-facets',
                sections: [{
                        header: {
                            text: 'Sezione I',
                            classes: 'first-section',
                        },
                        inputs: [{
                                id: 'fullsearch',
                                type: 'text',
                                delay: 300,
                                data: {
                                    id: 'fullsearch',
                                    placeholder: 'Search...',
                                    inputPayload: 'key-event',
                                    enterPayload: 'enter-event'
                                },
                            }]
                    }, {
                        header: {
                            text: 'Sezione II',
                            classes: 'second-section',
                        },
                        inputs: [{
                                id: 'hasinternal',
                                type: 'checkbox',
                                data: {
                                    checkboxes: [{
                                            id: 'hasinternal',
                                            label: 'Filtro interno',
                                            payload: 'click'
                                        }]
                                },
                            }, {
                                id: 'internalsearch',
                                type: 'text',
                                delay: 5000,
                                data: {
                                    id: 'internalsearch',
                                    placeholder: 'Internal...',
                                    inputPayload: 'key-event',
                                    enterPayload: 'enter-event'
                                },
                            }]
                    }]
            };
            return _this;
        }
        /**
         * @protected
         * @return {?}
         */
        MrSearchTestLayoutComponent.prototype.initPayload = /**
         * @protected
         * @return {?}
         */
        function () {
            return {};
        };
        /**
         * @return {?}
         */
        MrSearchTestLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit();
        };
        /**
         * @return {?}
         */
        MrSearchTestLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy();
        };
        MrSearchTestLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mr-search-test-layout',
                        template: "<div>\n    <mr-search-facets-layout\n    [data]=\"searchConfig\"></mr-search-facets-layout>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        MrSearchTestLayoutComponent.ctorParameters = function () { return []; };
        return MrSearchTestLayoutComponent;
    }(AbstractLayout));
    if (false) {
        /** @type {?} */
        MrSearchTestLayoutComponent.prototype.searchConfig;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS$3 = [
        MrHomeLayoutComponent,
        MrSearchLayoutComponent,
        MrGlossaryLayoutComponent,
        MrStaticLayoutComponent,
        MrSearchFacetsLayoutComponent,
        MrSearchTestLayoutComponent,
    ];
    var N7BoilerplateMurucaModule = /** @class */ (function () {
        function N7BoilerplateMurucaModule() {
        }
        N7BoilerplateMurucaModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS$3,
                        imports: [
                            common.CommonModule,
                            components.DvComponentsLibModule,
                            N7BoilerplateCommonModule,
                        ],
                        providers: [],
                        exports: COMPONENTS$3,
                    },] }
        ];
        return N7BoilerplateMurucaModule;
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
                        ],
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
    exports.AwChartTippyDS = AwChartTippyDS;
    exports.AwChartTippyEH = AwChartTippyEH;
    exports.AwEntitaLayoutComponent = AwEntitaLayoutComponent;
    exports.AwEntitaLayoutConfig = AwEntitaLayoutConfig;
    exports.AwEntitaLayoutDS = AwEntitaLayoutDS;
    exports.AwEntitaLayoutEH = AwEntitaLayoutEH;
    exports.AwEntitaMetadataViewerDS = AwEntitaMetadataViewerDS;
    exports.AwEntitaNavDS = AwEntitaNavDS;
    exports.AwEntitaNavEH = AwEntitaNavEH;
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
    exports.FacetInput = FacetInput;
    exports.FacetInputCheckbox = FacetInputCheckbox;
    exports.FacetInputLink = FacetInputLink;
    exports.FacetInputSelect = FacetInputSelect;
    exports.FacetInputText = FacetInputText;
    exports.FacetsDS = FacetsDS;
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
    exports.MrDummyEH = MrDummyEH;
    exports.MrFiltersDS = MrFiltersDS;
    exports.MrFiltersEH = MrFiltersEH;
    exports.MrGlossaryLayoutComponent = MrGlossaryLayoutComponent;
    exports.MrGlossaryLayoutConfig = MrGlossaryLayoutConfig;
    exports.MrGlossaryLayoutDS = MrGlossaryLayoutDS;
    exports.MrGlossaryLayoutEH = MrGlossaryLayoutEH;
    exports.MrHeroDS = MrHeroDS;
    exports.MrHomeLayoutComponent = MrHomeLayoutComponent;
    exports.MrHomeLayoutConfig = MrHomeLayoutConfig;
    exports.MrHomeLayoutDS = MrHomeLayoutDS;
    exports.MrHomeLayoutEH = MrHomeLayoutEH;
    exports.MrInnerTitleDS = MrInnerTitleDS;
    exports.MrItemPreviewsDS = MrItemPreviewsDS;
    exports.MrSearchLayoutComponent = MrSearchLayoutComponent;
    exports.MrSearchLayoutConfig = MrSearchLayoutConfig;
    exports.MrSearchLayoutDS = MrSearchLayoutDS;
    exports.MrSearchLayoutEH = MrSearchLayoutEH;
    exports.MrStaticLayoutComponent = MrStaticLayoutComponent;
    exports.MrStaticLayoutConfig = MrStaticLayoutConfig;
    exports.MrStaticLayoutDS = MrStaticLayoutDS;
    exports.MrStaticLayoutEH = MrStaticLayoutEH;
    exports.N7BoilerplateAriannaWebModule = N7BoilerplateAriannaWebModule;
    exports.N7BoilerplateCommonModule = N7BoilerplateCommonModule;
    exports.N7BoilerplateDataVizModule = N7BoilerplateDataVizModule;
    exports.N7BoilerplateLibModule = N7BoilerplateLibModule;
    exports.N7BoilerplateMurucaModule = N7BoilerplateMurucaModule;
    exports.Page404LayoutComponent = Page404LayoutComponent;
    exports.Page404LayoutConfig = Page404LayoutConfig;
    exports.Page404LayoutDS = Page404LayoutDS;
    exports.Page404LayoutEH = Page404LayoutEH;
    exports.RestProvider = RestProvider;
    exports.RestProviderConfig = RestProviderConfig;
    exports.SearchModel = SearchModel;
    exports.SearchService = SearchService;
    exports.SmartBreadcrumbsComponent = SmartBreadcrumbsComponent;
    exports.SmartPaginationComponent = SmartPaginationComponent;
    exports.SmartPaginationDS = SmartPaginationDS;
    exports.SmartPaginationEH = SmartPaginationEH;
    exports.SubnavDS = SubnavDS;
    exports.SubnavEH = SubnavEH;
    exports.ɵa = MainLayoutComponent;
    exports.ɵb = AbstractLayout;
    exports.ɵba = MrStaticLayoutComponent;
    exports.ɵbb = MrSearchFacetsLayoutComponent;
    exports.ɵbc = MrSearchTestLayoutComponent;
    exports.ɵc = ConfigurationService;
    exports.ɵd = LayoutsConfigurationService;
    exports.ɵe = MainStateService;
    exports.ɵf = Page404LayoutComponent;
    exports.ɵg = FacetsWrapperComponent;
    exports.ɵh = SmartPaginationComponent;
    exports.ɵi = CommunicationService;
    exports.ɵj = ApolloProvider;
    exports.ɵk = RestProvider;
    exports.ɵl = AwEntitaLayoutComponent;
    exports.ɵm = AwHomeLayoutComponent;
    exports.ɵn = AwSchedaLayoutComponent;
    exports.ɵo = AwSearchLayoutComponent;
    exports.ɵp = SearchService;
    exports.ɵq = AwGalleryLayoutComponent;
    exports.ɵr = BubbleChartWrapperComponent;
    exports.ɵs = ChartTippyComponent;
    exports.ɵt = SmartBreadcrumbsComponent;
    exports.ɵu = DataWidgetWrapperComponent;
    exports.ɵv = DatepickerWrapperComponent;
    exports.ɵw = DvExampleLayoutComponent;
    exports.ɵx = MrHomeLayoutComponent;
    exports.ɵy = MrSearchLayoutComponent;
    exports.ɵz = MrGlossaryLayoutComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=n7-frontend-boilerplate.umd.js.map
