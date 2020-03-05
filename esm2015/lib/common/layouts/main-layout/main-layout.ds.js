/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { hideAll } from 'tippy.js';
export class MainLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, router, options, titleService, route, }) {
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
        (val) => this.titleService.setTitle(val)));
        this.mainState.get$('pageTitle').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => { this.pageTitle = val; }));
        this.mainState.get$('subnav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.one('subnav').update(val)));
        this.mainState.get$('breadcrumbs').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.one('breadcrumbs').update(val)));
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
    // navigate emitter (click) handler
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
                    queryParams,
                    queryParamsHandling: 'merge',
                });
            }
            else {
                this.router.navigate(path);
            }
            // on change
            this._onRouterNavigate();
        }
    }
    // links routerLink change handler
    /**
     * @return {?}
     */
    onRouterChanged() {
        hideAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRW5DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCOzs7OztJQWVoRCxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssR0FDL0Q7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4RTtRQUVELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFFM0YsaUJBQWlCO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7b0JBZVk7SUFDZCxDQUFDOzs7Ozs7SUFHRCxVQUFVLENBQUMsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtrQkFDMUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTztZQUVyQyxlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVsRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDdEIsV0FBVztvQkFDWCxtQkFBbUIsRUFBRSxPQUFPO2lCQUM3QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUVELFlBQVk7WUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBR0QsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGOzs7Ozs7SUEzRkMscUNBQTZCOzs7OztJQUU3QixpQ0FBeUI7Ozs7O0lBRXpCLDhCQUFzQjs7Ozs7SUFFdEIsNkJBQXFCOzs7OztJQUVyQixvQ0FBNEI7O0lBRTVCLCtCQUFvQjs7SUFFcEIsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgaGlkZUFsbCB9IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgcm91dGUsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWRlclxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUoeyBpdGVtczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdmb290ZXInKS51cGRhdGUoeyBpdGVtczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZm9vdGVyJykgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFpbiBzdGF0ZSB1cGRhdGVzXHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdoZWFkVGl0bGUnKS5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdwYWdlVGl0bGUnKS5zdWJzY3JpYmUoKHZhbCkgPT4geyB0aGlzLnBhZ2VUaXRsZSA9IHZhbDsgfSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdzdWJuYXYnKS5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy5vbmUoJ3N1Ym5hdicpLnVwZGF0ZSh2YWwpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2JyZWFkY3J1bWJzJykuc3Vic2NyaWJlKCh2YWwpID0+IHRoaXMub25lKCdicmVhZGNydW1icycpLnVwZGF0ZSh2YWwpKTtcclxuXHJcbiAgICAvLyBtYWluU3RhdGUgdGVzdFxyXG4gICAgLyogdGhpcy5tYWluU3RhdGUuYWRkQ3VzdG9tKCdjdXN0b21OYXYnLCBuZXcgU3ViamVjdCgpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ3BhZ2VUaXRsZScsIHZhbCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XHJcblxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnaG9sYScpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnY2hhbycpO1xyXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnd29ybGQhJ30pO1xyXG4gICAgICBjb25zb2xlLmxvZygnaGFzJywge1xyXG4gICAgICAgICdwYWdlU3ViVGl0bGUnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdwYWdlU3ViVGl0bGUnKSxcclxuICAgICAgICAnY3VzdG9tTmF2JyA6IHRoaXMubWFpblN0YXRlLmhhc0N1c3RvbSgnY3VzdG9tTmF2JyksXHJcbiAgICAgICAgJ2N1c3RvbU5hdnMnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdjdXN0b21OYXZzJyksXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgNTAwMCk7ICovXHJcbiAgfVxyXG5cclxuICAvLyBuYXZpZ2F0ZSBlbWl0dGVyIChjbGljaykgaGFuZGxlclxyXG4gIG9uTmF2aWdhdGUocGF5bG9hZCkge1xyXG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cclxuICAgIGlmIChwYXlsb2FkLmhhbmRsZXIgPT09ICdyb3V0ZXInKSB7XHJcbiAgICAgIGNvbnN0IHsgcGF0aCwgcXVlcnlQYXJhbXMgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgICAvLyBwYXRoIGNvbnRyb2xcclxuICAgICAgaWYgKCFwYXRoKSB0aHJvdyBFcnJvcignb25OYXZpZ2F0ZTogbm8gcGF0aCBmb3Igcm91dGVyIG5hdmlnYXRlJyk7XHJcblxyXG4gICAgICBpZiAocXVlcnlQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoLCB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBvbiBjaGFuZ2VcclxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbGlua3Mgcm91dGVyTGluayBjaGFuZ2UgaGFuZGxlclxyXG4gIG9uUm91dGVyQ2hhbmdlZCgpIHtcclxuICAgIGhpZGVBbGwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUm91dGVyTmF2aWdhdGUoKSB7XHJcbiAgICAvLyBoaWRlIHRpcHB5XHJcbiAgICBoaWRlQWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==