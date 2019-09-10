/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { tap } from 'rxjs/operators';
export class MainLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.mainStateMap = [{
                widgetId: 'subnav',
                streamKey: 'subnav'
            }];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options }) {
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
        ({ widgetId, streamKey }) => {
            this.mainState.get$(streamKey).pipe(tap((/**
             * @param {?} val
             * @return {?}
             */
            val => console.log('stream', val)))).subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => this.one(widgetId).update(val)));
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
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onNavigate(payload) {
        // router navigation
        if (payload.handler === 'router') {
            // path control
            if (!payload.path)
                throw Error('onNavigate: no path for router navigate');
            this.router.navigate(payload.path);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtJQUFsRDs7UUFJWSxpQkFBWSxHQUFHLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsUUFBUTthQUNwQixDQUFDLENBQUM7SUErQ0wsQ0FBQzs7Ozs7SUEzQ0MsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTVELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNqQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBQyxDQUN2QyxDQUFDLFNBQVM7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFDLENBQUM7UUFFSCxpQkFBaUI7UUFDakI7Ozs7Ozs7Ozs7Ozs7OztvQkFlWTtJQUNkLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQU87UUFDaEIsb0JBQW9CO1FBQ3BCLElBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUM7WUFDOUIsZUFBZTtZQUNmLElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFBRSxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FDRjs7Ozs7O0lBckRDLHFDQUE2Qjs7Ozs7SUFDN0IsaUNBQXlCOzs7OztJQUN6Qiw4QkFBc0I7Ozs7O0lBQ3RCLG9DQUdHOztJQUVILCtCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGVNYXAgPSBbe1xuICAgIHdpZGdldElkOiAnc3VibmF2JyxcbiAgICBzdHJlYW1LZXk6ICdzdWJuYXYnXG4gIH1dO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMgfSl7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gdXBkYXRlIGhlYWRlclxuICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpO1xuXG4gICAgLy8gbWFpbiBzdGF0ZSB1cGRhdGVzXG4gICAgdGhpcy5tYWluU3RhdGVNYXAuZm9yRWFjaCgoeyB3aWRnZXRJZCwgc3RyZWFtS2V5IH0pID0+IHtcbiAgICAgIHRoaXMubWFpblN0YXRlLmdldCQoc3RyZWFtS2V5KS5waXBlKFxuICAgICAgICB0YXAodmFsID0+IGNvbnNvbGUubG9nKCdzdHJlYW0nLCB2YWwpKVxuICAgICAgKS5zdWJzY3JpYmUodmFsID0+IHRoaXMub25lKHdpZGdldElkKS51cGRhdGUodmFsKSk7XG4gICAgfSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2NoYW8nKTtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICd3b3JsZCEnfSk7XG4gICAgICBjb25zb2xlLmxvZygnaGFzJywge1xuICAgICAgICAncGFnZVN1YlRpdGxlJyA6IHRoaXMubWFpblN0YXRlLmhhcygncGFnZVN1YlRpdGxlJyksXG4gICAgICAgICdjdXN0b21OYXYnIDogdGhpcy5tYWluU3RhdGUuaGFzQ3VzdG9tKCdjdXN0b21OYXYnKSxcbiAgICAgICAgJ2N1c3RvbU5hdnMnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdjdXN0b21OYXZzJyksXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTsgKi9cbiAgfVxuXG4gIG9uTmF2aWdhdGUocGF5bG9hZCl7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZihwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKXtcbiAgICAgIC8vIHBhdGggY29udHJvbFxuICAgICAgaWYoIXBheWxvYWQucGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF5bG9hZC5wYXRoKTtcbiAgICB9XG4gIH1cbn0iXX0=