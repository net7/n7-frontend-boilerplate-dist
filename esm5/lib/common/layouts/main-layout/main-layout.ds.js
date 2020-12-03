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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbkM7SUFBa0MsZ0NBQWdCO0lBQWxEOztJQTRGQSxDQUFDO0lBN0VDLDZCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBMENDO1lBekNDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQkFBSztRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFPLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBRTNGLGlCQUFpQjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7O29CQWVZO0lBQ2QsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFBLG1CQUFJLEVBQUUsaUNBQVcsQ0FBYTtZQUV0QyxlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVsRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDdEIsV0FBVyxhQUFBO29CQUNYLG1CQUFtQixFQUFFLE9BQU87aUJBQzdCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBRUQsWUFBWTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQztJQUNsQyxzQ0FBZSxHQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sd0NBQWlCLEdBQXpCO1FBQ0UsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVGRCxDQUFrQyxnQkFBZ0IsR0E0RmpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaGlkZUFsbCB9IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgcm91dGUsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWRlclxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSkge1xyXG4gICAgICB0aGlzLm9uZSgnZm9vdGVyJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2hlYWRUaXRsZScpLnN1YnNjcmliZSgodmFsKSA9PiB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh2YWwpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSgodmFsKSA9PiB7IHRoaXMucGFnZVRpdGxlID0gdmFsOyB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSgodmFsKSA9PiB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnYnJlYWRjcnVtYnMnKS5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy5vbmUoJ2JyZWFkY3J1bWJzJykudXBkYXRlKHZhbCkpO1xyXG5cclxuICAgIC8vIG1haW5TdGF0ZSB0ZXN0XHJcbiAgICAvKiB0aGlzLm1haW5TdGF0ZS5hZGRDdXN0b20oJ2N1c3RvbU5hdicsIG5ldyBTdWJqZWN0KCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXRDdXN0b20kKCdjdXN0b21OYXYnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdjdXN0b21OYXYnLCB2YWwpKTtcclxuXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnbXVuZG8hJ30pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdjaGFvJyk7XHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICd3b3JsZCEnfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMnLCB7XHJcbiAgICAgICAgJ3BhZ2VTdWJUaXRsZScgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ3BhZ2VTdWJUaXRsZScpLFxyXG4gICAgICAgICdjdXN0b21OYXYnIDogdGhpcy5tYWluU3RhdGUuaGFzQ3VzdG9tKCdjdXN0b21OYXYnKSxcclxuICAgICAgICAnY3VzdG9tTmF2cycgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ2N1c3RvbU5hdnMnKSxcclxuICAgICAgfSk7XHJcbiAgICB9LCA1MDAwKTsgKi9cclxuICB9XHJcblxyXG4gIC8vIG5hdmlnYXRlIGVtaXR0ZXIgKGNsaWNrKSBoYW5kbGVyXHJcbiAgb25OYXZpZ2F0ZShwYXlsb2FkKSB7XHJcbiAgICAvLyByb3V0ZXIgbmF2aWdhdGlvblxyXG4gICAgaWYgKHBheWxvYWQuaGFuZGxlciA9PT0gJ3JvdXRlcicpIHtcclxuICAgICAgY29uc3QgeyBwYXRoLCBxdWVyeVBhcmFtcyB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAgIC8vIHBhdGggY29udHJvbFxyXG4gICAgICBpZiAoIXBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcclxuXHJcbiAgICAgIGlmIChxdWVyeVBhcmFtcykge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG9uIGNoYW5nZVxyXG4gICAgICB0aGlzLl9vblJvdXRlck5hdmlnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBsaW5rcyByb3V0ZXJMaW5rIGNoYW5nZSBoYW5kbGVyXHJcbiAgb25Sb3V0ZXJDaGFuZ2VkKCkge1xyXG4gICAgaGlkZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25Sb3V0ZXJOYXZpZ2F0ZSgpIHtcclxuICAgIC8vIGhpZGUgdGlwcHlcclxuICAgIGhpZGVBbGwoKTtcclxuICB9XHJcbn1cclxuIl19