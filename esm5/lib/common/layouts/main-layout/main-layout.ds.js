/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { tap } from 'rxjs/operators';
var MainLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MainLayoutDS, _super);
    function MainLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainStateMap = [{
                widgetId: 'subnav',
                streamKey: 'subnav'
            }];
        return _this;
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
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, options = _a.options;
        this.configuration = configuration;
        this.mainState = mainState;
        this.router = router;
        this.options = options;
        // update header
        this.one('header').update(this.configuration.get('header'));
        // main state updates
        this.mainStateMap.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var widgetId = _a.widgetId, streamKey = _a.streamKey;
            _this.mainState.get$(streamKey).pipe(tap((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return console.log('stream', val); }))).subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.one(widgetId).update(val); }));
        }));
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
    MainLayoutDS.prototype.mainStateMap;
    /** @type {?} */
    MainLayoutDS.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFBa0Msd0NBQWdCO0lBQWxEO1FBQUEscUVBc0RDO1FBbERXLGtCQUFZLEdBQUcsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxRQUFRO2FBQ3BCLENBQUMsQ0FBQzs7SUErQ0wsQ0FBQzs7Ozs7SUEzQ0MsNkJBQU07Ozs7SUFBTixVQUFPLEVBQTZDO1FBQXBELGlCQWlDQztZQWpDUSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxvQkFBTztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU1RCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUF1QjtnQkFBckIsc0JBQVEsRUFBRSx3QkFBUztZQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ2pDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQ3ZDLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLEVBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7O29CQWVZO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxpQ0FBVTs7OztJQUFWLFVBQVcsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBRyxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBQztZQUM5QixlQUFlO1lBQ2YsSUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUFFLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXRERCxDQUFrQyxnQkFBZ0IsR0FzRGpEOzs7Ozs7O0lBckRDLHFDQUE2Qjs7Ozs7SUFDN0IsaUNBQXlCOzs7OztJQUN6Qiw4QkFBc0I7Ozs7O0lBQ3RCLG9DQUdHOztJQUVILCtCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGVNYXAgPSBbe1xuICAgIHdpZGdldElkOiAnc3VibmF2JyxcbiAgICBzdHJlYW1LZXk6ICdzdWJuYXYnXG4gIH1dO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMgfSl7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gdXBkYXRlIGhlYWRlclxuICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpO1xuXG4gICAgLy8gbWFpbiBzdGF0ZSB1cGRhdGVzXG4gICAgdGhpcy5tYWluU3RhdGVNYXAuZm9yRWFjaCgoeyB3aWRnZXRJZCwgc3RyZWFtS2V5IH0pID0+IHtcbiAgICAgIHRoaXMubWFpblN0YXRlLmdldCQoc3RyZWFtS2V5KS5waXBlKFxuICAgICAgICB0YXAodmFsID0+IGNvbnNvbGUubG9nKCdzdHJlYW0nLCB2YWwpKVxuICAgICAgKS5zdWJzY3JpYmUodmFsID0+IHRoaXMub25lKHdpZGdldElkKS51cGRhdGUodmFsKSk7XG4gICAgfSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2NoYW8nKTtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICd3b3JsZCEnfSk7XG4gICAgICBjb25zb2xlLmxvZygnaGFzJywge1xuICAgICAgICAncGFnZVN1YlRpdGxlJyA6IHRoaXMubWFpblN0YXRlLmhhcygncGFnZVN1YlRpdGxlJyksXG4gICAgICAgICdjdXN0b21OYXYnIDogdGhpcy5tYWluU3RhdGUuaGFzQ3VzdG9tKCdjdXN0b21OYXYnKSxcbiAgICAgICAgJ2N1c3RvbU5hdnMnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdjdXN0b21OYXZzJyksXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTsgKi9cbiAgfVxuXG4gIG9uTmF2aWdhdGUocGF5bG9hZCl7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZihwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKXtcbiAgICAgIC8vIHBhdGggY29udHJvbFxuICAgICAgaWYoIXBheWxvYWQucGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF5bG9hZC5wYXRoKTtcbiAgICB9XG4gIH1cbn0iXX0=