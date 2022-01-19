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
        this.mainState.get$('headTitle').subscribe(function (val) {
            _this.titleService.setTitle(val);
        });
        this.mainState.get$('pageTitle').subscribe(function (val) {
            _this.pageTitle = val;
        });
        this.mainState.get$('subnav').subscribe(function (val) {
            _this.one('subnav').update(val);
        });
        this.mainState.get$('breadcrumbs').subscribe(function (val) {
            _this.one('breadcrumbs').update(val);
        });
        this.mainState.get$('header').subscribe(function (val) {
            _this.one('header').update(val);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbkM7SUFBa0MsZ0NBQWdCO0lBQWxEOztJQXVHQSxDQUFDO0lBeEZDLDZCQUFNLEdBQU4sVUFBTyxFQUVOO1FBRkQsaUJBcURDO1lBcERDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSxnQkFBSztRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzdDLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMxQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDL0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzFDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCO1FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7b0JBZVk7SUFDZCxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLGlDQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2hCLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3hCLElBQUEsbUJBQUksRUFBRSxpQ0FBVyxDQUFhO1lBRXRDLGVBQWU7WUFDZixJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBRWxFLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtvQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUN0QixXQUFXLGFBQUE7b0JBQ1gsbUJBQW1CLEVBQUUsT0FBTztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFFRCxZQUFZO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLHNDQUFlLEdBQWY7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyx3Q0FBaUIsR0FBekI7UUFDRSxhQUFhO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdkdELENBQWtDLGdCQUFnQixHQXVHakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBoaWRlQWxsIH0gZnJvbSAndGlwcHkuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCByb3V0ZSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZGVyXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpIHtcclxuICAgICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdmb290ZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZm9vdGVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gc3RhdGUgdXBkYXRlc1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZFRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5wYWdlVGl0bGUgPSB2YWw7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdzdWJuYXYnKS51cGRhdGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnYnJlYWRjcnVtYnMnKS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICB0aGlzLm9uZSgnYnJlYWRjcnVtYnMnKS51cGRhdGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZGVyJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpblN0YXRlIHRlc3RcclxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdwYWdlVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdwYWdlVGl0bGUnLCB2YWwpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldEN1c3RvbSQoJ2N1c3RvbU5hdicpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ2N1c3RvbU5hdicsIHZhbCkpO1xyXG5cclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2hvbGEnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICdtdW5kbyEnfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2NoYW8nKTtcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ3dvcmxkISd9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2hhcycsIHtcclxuICAgICAgICAncGFnZVN1YlRpdGxlJyA6IHRoaXMubWFpblN0YXRlLmhhcygncGFnZVN1YlRpdGxlJyksXHJcbiAgICAgICAgJ2N1c3RvbU5hdicgOiB0aGlzLm1haW5TdGF0ZS5oYXNDdXN0b20oJ2N1c3RvbU5hdicpLFxyXG4gICAgICAgICdjdXN0b21OYXZzJyA6IHRoaXMubWFpblN0YXRlLmhhcygnY3VzdG9tTmF2cycpLFxyXG4gICAgICB9KTtcclxuICAgIH0sIDUwMDApOyAqL1xyXG4gIH1cclxuXHJcbiAgLy8gbmF2aWdhdGUgZW1pdHRlciAoY2xpY2spIGhhbmRsZXJcclxuICBvbk5hdmlnYXRlKHBheWxvYWQpIHtcclxuICAgIC8vIHJvdXRlciBuYXZpZ2F0aW9uXHJcbiAgICBpZiAocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJykge1xyXG4gICAgICBjb25zdCB7IHBhdGgsIHF1ZXJ5UGFyYW1zIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgICAgLy8gcGF0aCBjb250cm9sXHJcbiAgICAgIGlmICghcGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xyXG5cclxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCwge1xyXG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gb24gY2hhbmdlXHJcbiAgICAgIHRoaXMuX29uUm91dGVyTmF2aWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGxpbmtzIHJvdXRlckxpbmsgY2hhbmdlIGhhbmRsZXJcclxuICBvblJvdXRlckNoYW5nZWQoKSB7XHJcbiAgICBoaWRlQWxsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblJvdXRlck5hdmlnYXRlKCkge1xyXG4gICAgLy8gaGlkZSB0aXBweVxyXG4gICAgaGlkZUFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=