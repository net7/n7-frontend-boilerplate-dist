/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class MainLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService }) {
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
        val => this.titleService.setTitle(val)));
        this.mainState.get$('pageTitle').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.pageTitle = val));
        this.mainState.get$('subnav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.one('subnav').update(val)));
        this.mainState.get$('breadcrumbs').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => this.one('breadcrumbs').update(val)));
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
            // on change
            this._onRouterNavigate();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _onRouterNavigate() {
        // hide tippy
        tippy.hideAll();
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
    MainLayoutDS.prototype.titleService;
    /** @type {?} */
    MainLayoutDS.prototype.options;
    /** @type {?} */
    MainLayoutDS.prototype.pageTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjs7Ozs7SUFTaEQsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU1RCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUV6RixpQkFBaUI7UUFDakI7Ozs7Ozs7Ozs7Ozs7OztvQkFlWTtJQUNkLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQU87UUFDaEIsb0JBQW9CO1FBQ3BCLElBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUM7WUFDOUIsZUFBZTtZQUNmLElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFBRSxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuQyxZQUFZO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixhQUFhO1FBQ2IsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjs7Ozs7O0lBM0RDLHFDQUE2Qjs7Ozs7SUFDN0IsaUNBQXlCOzs7OztJQUN6Qiw4QkFBc0I7Ozs7O0lBQ3RCLG9DQUE0Qjs7SUFFNUIsK0JBQW9COztJQUNwQixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlIH0pe1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIHVwZGF0ZSBoZWFkZXJcbiAgICB0aGlzLm9uZSgnaGVhZGVyJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKTtcblxuICAgIC8vIG1haW4gc3RhdGUgdXBkYXRlc1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2hlYWRUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLnBhZ2VUaXRsZSA9IHZhbCk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnc3VibmF2Jykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2JyZWFkY3J1bWJzJykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm9uZSgnYnJlYWRjcnVtYnMnKS51cGRhdGUodmFsKSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2NoYW8nKTtcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICd3b3JsZCEnfSk7XG4gICAgICBjb25zb2xlLmxvZygnaGFzJywge1xuICAgICAgICAncGFnZVN1YlRpdGxlJyA6IHRoaXMubWFpblN0YXRlLmhhcygncGFnZVN1YlRpdGxlJyksXG4gICAgICAgICdjdXN0b21OYXYnIDogdGhpcy5tYWluU3RhdGUuaGFzQ3VzdG9tKCdjdXN0b21OYXYnKSxcbiAgICAgICAgJ2N1c3RvbU5hdnMnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdjdXN0b21OYXZzJyksXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTsgKi9cbiAgfVxuXG4gIG9uTmF2aWdhdGUocGF5bG9hZCl7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZihwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKXtcbiAgICAgIC8vIHBhdGggY29udHJvbFxuICAgICAgaWYoIXBheWxvYWQucGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF5bG9hZC5wYXRoKTtcblxuICAgICAgLy8gb24gY2hhbmdlXG4gICAgICB0aGlzLl9vblJvdXRlck5hdmlnYXRlKCk7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIF9vblJvdXRlck5hdmlnYXRlKCl7XG4gICAgLy8gaGlkZSB0aXBweVxuICAgIHRpcHB5LmhpZGVBbGwoKTtcbiAgfVxufSJdfQ==