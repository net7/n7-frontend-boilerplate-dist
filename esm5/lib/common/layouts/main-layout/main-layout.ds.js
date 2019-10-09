/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
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
    MainLayoutDS.prototype.titleService;
    /** @type {?} */
    MainLayoutDS.prototype.options;
    /** @type {?} */
    MainLayoutDS.prototype.pageTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBa0Msd0NBQWdCO0lBQWxEOztJQTREQSxDQUFDOzs7OztJQW5EQyw2QkFBTTs7OztJQUFOLFVBQU8sRUFBMkQ7UUFBbEUsaUJBaUNDO1lBakNRLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVk7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFNUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7UUFFekYsaUJBQWlCO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7b0JBZVk7SUFDZCxDQUFDOzs7OztJQUVELGlDQUFVOzs7O0lBQVYsVUFBVyxPQUFPO1FBQ2hCLG9CQUFvQjtRQUNwQixJQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFDO1lBQzlCLGVBQWU7WUFDZixJQUFHLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkMsWUFBWTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx3Q0FBaUI7Ozs7SUFBekI7UUFDRSxhQUFhO1FBQ2IsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE1REQsQ0FBa0MsZ0JBQWdCLEdBNERqRDs7Ozs7OztJQTNEQyxxQ0FBNkI7Ozs7O0lBQzdCLGlDQUF5Qjs7Ozs7SUFDekIsOEJBQXNCOzs7OztJQUN0QixvQ0FBNEI7O0lBRTVCLCtCQUFvQjs7SUFDcEIsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSB9KXtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAvLyB1cGRhdGUgaGVhZGVyXG4gICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSk7XG5cbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdoZWFkVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5wYWdlVGl0bGUgPSB2YWwpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ3N1Ym5hdicpLnVwZGF0ZSh2YWwpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdicmVhZGNydW1icycpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ2JyZWFkY3J1bWJzJykudXBkYXRlKHZhbCkpO1xuXG4gICAgLy8gbWFpblN0YXRlIHRlc3RcbiAgICAvKiB0aGlzLm1haW5TdGF0ZS5hZGRDdXN0b20oJ2N1c3RvbU5hdicsIG5ldyBTdWJqZWN0KCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ3BhZ2VUaXRsZScsIHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldEN1c3RvbSQoJ2N1c3RvbU5hdicpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ2N1c3RvbU5hdicsIHZhbCkpO1xuXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnaG9sYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICdtdW5kbyEnfSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdjaGFvJyk7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnd29ybGQhJ30pO1xuICAgICAgY29uc29sZS5sb2coJ2hhcycsIHtcbiAgICAgICAgJ3BhZ2VTdWJUaXRsZScgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ3BhZ2VTdWJUaXRsZScpLFxuICAgICAgICAnY3VzdG9tTmF2JyA6IHRoaXMubWFpblN0YXRlLmhhc0N1c3RvbSgnY3VzdG9tTmF2JyksXG4gICAgICAgICdjdXN0b21OYXZzJyA6IHRoaXMubWFpblN0YXRlLmhhcygnY3VzdG9tTmF2cycpLFxuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7ICovXG4gIH1cblxuICBvbk5hdmlnYXRlKHBheWxvYWQpe1xuICAgIC8vIHJvdXRlciBuYXZpZ2F0aW9uXG4gICAgaWYocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJyl7XG4gICAgICAvLyBwYXRoIGNvbnRyb2xcbiAgICAgIGlmKCFwYXlsb2FkLnBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBheWxvYWQucGF0aCk7XG5cbiAgICAgIC8vIG9uIGNoYW5nZVxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBfb25Sb3V0ZXJOYXZpZ2F0ZSgpe1xuICAgIC8vIGhpZGUgdGlwcHlcbiAgICB0aXBweS5oaWRlQWxsKCk7XG4gIH1cbn0iXX0=