/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { hideAll } from 'tippy.js';
export class MainLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, route }) {
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
            const { path, queryParams } = payload;
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
    }
    /**
     * @private
     * @return {?}
     */
    _onRouterNavigate() {
        // hide tippy
        hideAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFMUMsTUFBTSxPQUFPLFlBQWEsU0FBUSxnQkFBZ0I7Ozs7O0lBVWhELE1BQU0sQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFFekYsaUJBQWlCO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7b0JBZVk7SUFDZCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO2tCQUMxQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPO1lBRXJDLGVBQWU7WUFDZixJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBRWxFLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtvQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUN0QixXQUFXLEVBQUUsV0FBVztvQkFDeEIsbUJBQW1CLEVBQUUsT0FBTztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFFRCxZQUFZO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixhQUFhO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7Ozs7OztJQTlFQyxxQ0FBNkI7Ozs7O0lBQzdCLGlDQUF5Qjs7Ozs7SUFDekIsOEJBQXNCOzs7OztJQUN0Qiw2QkFBcUI7Ozs7O0lBQ3JCLG9DQUE0Qjs7SUFFNUIsK0JBQW9COztJQUNwQixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5LCB7IGhpZGVBbGwgfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZTogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIHJvdXRlIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gdXBkYXRlIGhlYWRlclxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSkge1xuICAgICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh7ICdpdGVtcyc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSkge1xuICAgICAgdGhpcy5vbmUoJ2Zvb3RlcicpLnVwZGF0ZSh7ICdpdGVtcyc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpIH0pO1xuICAgIH1cblxuICAgIC8vIG1haW4gc3RhdGUgdXBkYXRlc1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2hlYWRUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLnBhZ2VUaXRsZSA9IHZhbCk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnc3VibmF2Jykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2JyZWFkY3J1bWJzJykuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm9uZSgnYnJlYWRjcnVtYnMnKS51cGRhdGUodmFsKSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnY2hhbycpO1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ3dvcmxkISd9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMnLCB7XG4gICAgICAgICdwYWdlU3ViVGl0bGUnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdwYWdlU3ViVGl0bGUnKSxcbiAgICAgICAgJ2N1c3RvbU5hdicgOiB0aGlzLm1haW5TdGF0ZS5oYXNDdXN0b20oJ2N1c3RvbU5hdicpLFxuICAgICAgICAnY3VzdG9tTmF2cycgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ2N1c3RvbU5hdnMnKSxcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApOyAqL1xuICB9XG5cbiAgb25OYXZpZ2F0ZShwYXlsb2FkKSB7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZiAocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJykge1xuICAgICAgY29uc3QgeyBwYXRoLCBxdWVyeVBhcmFtcyB9ID0gcGF5bG9hZDtcblxuICAgICAgLy8gcGF0aCBjb250cm9sXG4gICAgICBpZiAoIXBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcblxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHtcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyxcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG9uIGNoYW5nZVxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUm91dGVyTmF2aWdhdGUoKSB7XG4gICAgLy8gaGlkZSB0aXBweVxuICAgIGhpZGVBbGwoKTtcbiAgfVxufSJdfQ==