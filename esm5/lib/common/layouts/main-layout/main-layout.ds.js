/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import { Subject } from 'rxjs';
var MainLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MainLayoutDS, _super);
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
export { MainLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBa0Msd0NBQWdCO0lBQWxEOztJQWtGQSxDQUFDOzs7OztJQXhFQyw2QkFBTTs7OztJQUFOLFVBQU8sRUFBa0U7UUFBekUsaUJBMkNDO1lBM0NRLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQkFBSztRQUNyRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRXRELGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFB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b0I7O0lBQ3BCLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCByb3V0ZSB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLm1haW5TdGF0ZS5hZGRDdXN0b20oJ2N1cnJlbnROYXYnLCBuZXcgU3ViamVjdCgpKTtcblxuICAgIC8vIHVwZGF0ZSBoZWFkZXJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpIHtcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUoeyAnaXRlbXMnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZm9vdGVyJykpIHtcbiAgICAgIHRoaXMub25lKCdmb290ZXInKS51cGRhdGUoeyAnaXRlbXMnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSB9KTtcbiAgICB9XG5cbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdoZWFkVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5wYWdlVGl0bGUgPSB2YWwpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ3N1Ym5hdicpLnVwZGF0ZSh2YWwpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdicmVhZGNydW1icycpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ2JyZWFkY3J1bWJzJykudXBkYXRlKHZhbCkpO1xuXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VycmVudE5hdicpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh7IFwiaXRlbXNcIjogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyksICdzZWxlY3RlZCc6IHZhbCB9KSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnY2hhbycpO1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ3dvcmxkISd9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMnLCB7XG4gICAgICAgICdwYWdlU3ViVGl0bGUnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdwYWdlU3ViVGl0bGUnKSxcbiAgICAgICAgJ2N1c3RvbU5hdicgOiB0aGlzLm1haW5TdGF0ZS5oYXNDdXN0b20oJ2N1c3RvbU5hdicpLFxuICAgICAgICAnY3VzdG9tTmF2cycgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ2N1c3RvbU5hdnMnKSxcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApOyAqL1xuICB9XG5cbiAgb25OYXZpZ2F0ZShwYXlsb2FkKSB7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZiAocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJykge1xuICAgICAgY29uc3QgeyBwYXRoLCBxdWVyeVBhcmFtcyB9ID0gcGF5bG9hZDtcblxuICAgICAgLy8gcGF0aCBjb250cm9sXG4gICAgICBpZiAoIXBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcblxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHtcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyxcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG9uIGNoYW5nZVxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUm91dGVyTmF2aWdhdGUoKSB7XG4gICAgLy8gaGlkZSB0aXBweVxuICAgIHRpcHB5LmhpZGVBbGwoKTtcbiAgfVxufSJdfQ==