/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
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
    MainLayoutDS.prototype.titleService;
    /** @type {?} */
    MainLayoutDS.prototype.options;
    /** @type {?} */
    MainLayoutDS.prototype.pageTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCOzs7OztJQVNoRCxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTVELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBRXpGLGlCQUFpQjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7O29CQWVZO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBRyxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBQztZQUM5QixlQUFlO1lBQ2YsSUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUFFLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUFuREMscUNBQTZCOzs7OztJQUM3QixpQ0FBeUI7Ozs7O0lBQ3pCLDhCQUFzQjs7Ozs7SUFDdEIsb0NBQTRCOztJQUU1QiwrQkFBb0I7O0lBQ3BCLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSB9KXtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAvLyB1cGRhdGUgaGVhZGVyXG4gICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSk7XG5cbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdoZWFkVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5wYWdlVGl0bGUgPSB2YWwpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ3N1Ym5hdicpLnVwZGF0ZSh2YWwpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdicmVhZGNydW1icycpLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5vbmUoJ2JyZWFkY3J1bWJzJykudXBkYXRlKHZhbCkpO1xuXG4gICAgLy8gbWFpblN0YXRlIHRlc3RcbiAgICAvKiB0aGlzLm1haW5TdGF0ZS5hZGRDdXN0b20oJ2N1c3RvbU5hdicsIG5ldyBTdWJqZWN0KCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ3BhZ2VUaXRsZScsIHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldEN1c3RvbSQoJ2N1c3RvbU5hdicpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ2N1c3RvbU5hdicsIHZhbCkpO1xuXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnaG9sYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICdtdW5kbyEnfSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdjaGFvJyk7XG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnd29ybGQhJ30pO1xuICAgICAgY29uc29sZS5sb2coJ2hhcycsIHtcbiAgICAgICAgJ3BhZ2VTdWJUaXRsZScgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ3BhZ2VTdWJUaXRsZScpLFxuICAgICAgICAnY3VzdG9tTmF2JyA6IHRoaXMubWFpblN0YXRlLmhhc0N1c3RvbSgnY3VzdG9tTmF2JyksXG4gICAgICAgICdjdXN0b21OYXZzJyA6IHRoaXMubWFpblN0YXRlLmhhcygnY3VzdG9tTmF2cycpLFxuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7ICovXG4gIH1cblxuICBvbk5hdmlnYXRlKHBheWxvYWQpe1xuICAgIC8vIHJvdXRlciBuYXZpZ2F0aW9uXG4gICAgaWYocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJyl7XG4gICAgICAvLyBwYXRoIGNvbnRyb2xcbiAgICAgIGlmKCFwYXlsb2FkLnBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBheWxvYWQucGF0aCk7XG4gICAgfVxuICB9XG59Il19