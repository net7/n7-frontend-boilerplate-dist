/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { hideAll } from 'tippy.js';
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
        hideAll();
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
        hideAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxQztJQUFrQyx3Q0FBZ0I7SUFBbEQ7O0lBcUZBLENBQUM7Ozs7O0lBM0VDLDZCQUFNOzs7O0lBQU4sVUFBTyxFQUFrRTtRQUF6RSxpQkF3Q0M7WUF4Q1EsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSw4QkFBWSxFQUFFLGdCQUFLO1FBQ3JFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7UUFFekYsaUJBQWlCO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7b0JBZVk7SUFDZCxDQUFDO0lBRUQsbUNBQW1DOzs7Ozs7SUFDbkMsaUNBQVU7Ozs7OztJQUFWLFVBQVcsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFBLG1CQUFJLEVBQUUsaUNBQVc7WUFFekIsZUFBZTtZQUNmLElBQUksQ0FBQyxJQUFJO2dCQUFFLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFFbEUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFdBQVcsRUFBRSxXQUFXO29CQUN4QixtQkFBbUIsRUFBRSxPQUFPO2lCQUM3QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUVELFlBQVk7WUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7O0lBQ2xDLHNDQUFlOzs7OztJQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVPLHdDQUFpQjs7OztJQUF6QjtRQUNFLGFBQWE7UUFDYixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFyRkQsQ0FBa0MsZ0JBQWdCLEdBcUZqRDs7Ozs7OztJQXBGQyxxQ0FBNkI7Ozs7O0lBQzdCLGlDQUF5Qjs7Ozs7SUFDekIsOEJBQXNCOzs7OztJQUN0Qiw2QkFBcUI7Ozs7O0lBQ3JCLG9DQUE0Qjs7SUFFNUIsK0JBQW9COztJQUNwQixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHksIHsgaGlkZUFsbCB9IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgcm91dGUgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWRlclxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUoeyAnaXRlbXMnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZm9vdGVyJykpIHtcclxuICAgICAgdGhpcy5vbmUoJ2Zvb3RlcicpLnVwZGF0ZSh7ICdpdGVtcyc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gc3RhdGUgdXBkYXRlc1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZFRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh2YWwpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5wYWdlVGl0bGUgPSB2YWwpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnc3VibmF2Jykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnYnJlYWRjcnVtYnMnKS5zdWJzY3JpYmUodmFsID0+IHRoaXMub25lKCdicmVhZGNydW1icycpLnVwZGF0ZSh2YWwpKTtcclxuXHJcbiAgICAvLyBtYWluU3RhdGUgdGVzdFxyXG4gICAgLyogdGhpcy5tYWluU3RhdGUuYWRkQ3VzdG9tKCdjdXN0b21OYXYnLCBuZXcgU3ViamVjdCgpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ3BhZ2VUaXRsZScsIHZhbCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnaG9sYScpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnY2hhbycpO1xyXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnd29ybGQhJ30pO1xyXG4gICAgICBjb25zb2xlLmxvZygnaGFzJywge1xyXG4gICAgICAgICdwYWdlU3ViVGl0bGUnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdwYWdlU3ViVGl0bGUnKSxcclxuICAgICAgICAnY3VzdG9tTmF2JyA6IHRoaXMubWFpblN0YXRlLmhhc0N1c3RvbSgnY3VzdG9tTmF2JyksXHJcbiAgICAgICAgJ2N1c3RvbU5hdnMnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdjdXN0b21OYXZzJyksXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgNTAwMCk7ICovXHJcbiAgfVxyXG5cclxuICAvLyBuYXZpZ2F0ZSBlbWl0dGVyIChjbGljaykgaGFuZGxlclxyXG4gIG9uTmF2aWdhdGUocGF5bG9hZCkge1xyXG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cclxuICAgIGlmIChwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKSB7XHJcbiAgICAgIGNvbnN0IHsgcGF0aCwgcXVlcnlQYXJhbXMgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgICAvLyBwYXRoIGNvbnRyb2xcclxuICAgICAgaWYgKCFwYXRoKSB0aHJvdyBFcnJvcignb25OYXZpZ2F0ZTogbm8gcGF0aCBmb3Igcm91dGVyIG5hdmlnYXRlJyk7XHJcblxyXG4gICAgICBpZiAocXVlcnlQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoLCB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBvbiBjaGFuZ2VcclxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbGlua3Mgcm91dGVyTGluayBjaGFuZ2UgaGFuZGxlclxyXG4gIG9uUm91dGVyQ2hhbmdlZCgpIHtcclxuICAgIGhpZGVBbGwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUm91dGVyTmF2aWdhdGUoKSB7XHJcbiAgICAvLyBoaWRlIHRpcHB5XHJcbiAgICBoaWRlQWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==