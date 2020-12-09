import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { hideAll } from 'tippy.js';
var MainLayoutDS = /** @class */ (function (_super) {
    __extends(MainLayoutDS, _super);
    function MainLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainLayoutDS.prototype.onInit = function (_a) {
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
            this.one('header').update(this.configuration.get('header'));
        }
        if (this.configuration.get('footer')) {
            this.one('footer').update(this.configuration.get('footer'));
        }
        // main state updates
        this.mainState.get$('headTitle').subscribe(function (val) { return _this.titleService.setTitle(val); });
        this.mainState.get$('pageTitle').subscribe(function (val) { _this.pageTitle = val; });
        this.mainState.get$('subnav').subscribe(function (val) { return _this.one('subnav').update(val); });
        this.mainState.get$('breadcrumbs').subscribe(function (val) { return _this.one('breadcrumbs').update(val); });
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
    MainLayoutDS.prototype.onNavigate = function (payload) {
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
    MainLayoutDS.prototype.onRouterChanged = function () {
        hideAll();
    };
    MainLayoutDS.prototype._onRouterNavigate = function () {
        // hide tippy
        hideAll();
    };
    return MainLayoutDS;
}(LayoutDataSource));
export { MainLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbkM7SUFBa0MsZ0NBQWdCO0lBQWxEOztJQTRGQSxDQUFDO0lBN0VDLDZCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBMENDO1lBekNDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQkFBSztRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFPLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBRTNGLGlCQUFpQjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7O29CQWVZO0lBQ2QsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFBLG1CQUFJLEVBQUUsaUNBQVcsQ0FBYTtZQUV0QyxlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVsRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDdEIsV0FBVyxhQUFBO29CQUNYLG1CQUFtQixFQUFFLE9BQU87aUJBQzdCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBRUQsWUFBWTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQztJQUNsQyxzQ0FBZSxHQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sd0NBQWlCLEdBQXpCO1FBQ0UsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVGRCxDQUFrQyxnQkFBZ0IsR0E0RmpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGhpZGVBbGwgfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZTogYW55O1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIHJvdXRlLFxuICB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIHVwZGF0ZSBoZWFkZXJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpIHtcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSkge1xuICAgICAgdGhpcy5vbmUoJ2Zvb3RlcicpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSk7XG4gICAgfVxuXG4gICAgLy8gbWFpbiBzdGF0ZSB1cGRhdGVzXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZFRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSgodmFsKSA9PiB7IHRoaXMucGFnZVRpdGxlID0gdmFsOyB9KTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdzdWJuYXYnKS5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy5vbmUoJ3N1Ym5hdicpLnVwZGF0ZSh2YWwpKTtcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdicmVhZGNydW1icycpLnN1YnNjcmliZSgodmFsKSA9PiB0aGlzLm9uZSgnYnJlYWRjcnVtYnMnKS51cGRhdGUodmFsKSk7XG5cbiAgICAvLyBtYWluU3RhdGUgdGVzdFxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VzdG9tTmF2Jykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygnY3VzdG9tTmF2JywgdmFsKSk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ211bmRvISd9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnY2hhbycpO1xuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ3dvcmxkISd9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMnLCB7XG4gICAgICAgICdwYWdlU3ViVGl0bGUnIDogdGhpcy5tYWluU3RhdGUuaGFzKCdwYWdlU3ViVGl0bGUnKSxcbiAgICAgICAgJ2N1c3RvbU5hdicgOiB0aGlzLm1haW5TdGF0ZS5oYXNDdXN0b20oJ2N1c3RvbU5hdicpLFxuICAgICAgICAnY3VzdG9tTmF2cycgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ2N1c3RvbU5hdnMnKSxcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApOyAqL1xuICB9XG5cbiAgLy8gbmF2aWdhdGUgZW1pdHRlciAoY2xpY2spIGhhbmRsZXJcbiAgb25OYXZpZ2F0ZShwYXlsb2FkKSB7XG4gICAgLy8gcm91dGVyIG5hdmlnYXRpb25cbiAgICBpZiAocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJykge1xuICAgICAgY29uc3QgeyBwYXRoLCBxdWVyeVBhcmFtcyB9ID0gcGF5bG9hZDtcblxuICAgICAgLy8gcGF0aCBjb250cm9sXG4gICAgICBpZiAoIXBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcblxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHtcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG9uIGNoYW5nZVxuICAgICAgdGhpcy5fb25Sb3V0ZXJOYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxpbmtzIHJvdXRlckxpbmsgY2hhbmdlIGhhbmRsZXJcbiAgb25Sb3V0ZXJDaGFuZ2VkKCkge1xuICAgIGhpZGVBbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUm91dGVyTmF2aWdhdGUoKSB7XG4gICAgLy8gaGlkZSB0aXBweVxuICAgIGhpZGVBbGwoKTtcbiAgfVxufVxuIl19