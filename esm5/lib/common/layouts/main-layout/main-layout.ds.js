/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuQztJQUFrQyx3Q0FBZ0I7SUFBbEQ7O0lBNEZBLENBQUM7Ozs7O0lBN0VDLDZCQUFNOzs7O0lBQU4sVUFBTyxFQUVOO1FBRkQsaUJBMENDO1lBekNDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQkFBSztRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4RTtRQUVELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBTyxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztRQUUzRixpQkFBaUI7UUFDakI7Ozs7Ozs7Ozs7Ozs7OztvQkFlWTtJQUNkLENBQUM7SUFFRCxtQ0FBbUM7Ozs7OztJQUNuQyxpQ0FBVTs7Ozs7O0lBQVYsVUFBVyxPQUFPO1FBQ2hCLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3hCLElBQUEsbUJBQUksRUFBRSxpQ0FBVztZQUV6QixlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVsRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDdEIsV0FBVyxhQUFBO29CQUNYLG1CQUFtQixFQUFFLE9BQU87aUJBQzdCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBRUQsWUFBWTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7SUFDbEMsc0NBQWU7Ozs7O0lBQWY7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRU8sd0NBQWlCOzs7O0lBQXpCO1FBQ0UsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVGRCxDQUFrQyxnQkFBZ0IsR0E0RmpEOzs7Ozs7O0lBM0ZDLHFDQUE2Qjs7Ozs7SUFFN0IsaUNBQXlCOzs7OztJQUV6Qiw4QkFBc0I7Ozs7O0lBRXRCLDZCQUFxQjs7Ozs7SUFFckIsb0NBQTRCOztJQUU1QiwrQkFBb0I7O0lBRXBCLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBoaWRlQWxsIH0gZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcblxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCByb3V0ZSxcbiAgfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAvLyB1cGRhdGUgaGVhZGVyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKSB7XG4gICAgICB0aGlzLm9uZSgnaGVhZGVyJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSkge1xuICAgICAgdGhpcy5vbmUoJ2Zvb3RlcicpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSB9KTtcbiAgICB9XG5cbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdoZWFkVGl0bGUnKS5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHsgdGhpcy5wYWdlVGl0bGUgPSB2YWw7IH0pO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSgodmFsKSA9PiB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2JyZWFkY3J1bWJzJykuc3Vic2NyaWJlKCh2YWwpID0+IHRoaXMub25lKCdicmVhZGNydW1icycpLnVwZGF0ZSh2YWwpKTtcblxuICAgIC8vIG1haW5TdGF0ZSB0ZXN0XG4gICAgLyogdGhpcy5tYWluU3RhdGUuYWRkQ3VzdG9tKCdjdXN0b21OYXYnLCBuZXcgU3ViamVjdCgpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdwYWdlVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdwYWdlVGl0bGUnLCB2YWwpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXRDdXN0b20kKCdjdXN0b21OYXYnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdjdXN0b21OYXYnLCB2YWwpKTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2hvbGEnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnbXVuZG8hJ30pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdjaGFvJyk7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnd29ybGQhJ30pO1xuICAgICAgY29uc29sZS5sb2coJ2hhcycsIHtcbiAgICAgICAgJ3BhZ2VTdWJUaXRsZScgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ3BhZ2VTdWJUaXRsZScpLFxuICAgICAgICAnY3VzdG9tTmF2JyA6IHRoaXMubWFpblN0YXRlLmhhc0N1c3RvbSgnY3VzdG9tTmF2JyksXG4gICAgICAgICdjdXN0b21OYXZzJyA6IHRoaXMubWFpblN0YXRlLmhhcygnY3VzdG9tTmF2cycpLFxuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7ICovXG4gIH1cblxuICAvLyBuYXZpZ2F0ZSBlbWl0dGVyIChjbGljaykgaGFuZGxlclxuICBvbk5hdmlnYXRlKHBheWxvYWQpIHtcbiAgICAvLyByb3V0ZXIgbmF2aWdhdGlvblxuICAgIGlmIChwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIHF1ZXJ5UGFyYW1zIH0gPSBwYXlsb2FkO1xuXG4gICAgICAvLyBwYXRoIGNvbnRyb2xcbiAgICAgIGlmICghcGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xuXG4gICAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCwge1xuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoKTtcbiAgICAgIH1cblxuICAgICAgLy8gb24gY2hhbmdlXG4gICAgICB0aGlzLl9vblJvdXRlck5hdmlnYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gbGlua3Mgcm91dGVyTGluayBjaGFuZ2UgaGFuZGxlclxuICBvblJvdXRlckNoYW5nZWQoKSB7XG4gICAgaGlkZUFsbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25Sb3V0ZXJOYXZpZ2F0ZSgpIHtcbiAgICAvLyBoaWRlIHRpcHB5XG4gICAgaGlkZUFsbCgpO1xuICB9XG59XG4iXX0=