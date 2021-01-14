import { LayoutDataSource } from '@n7-frontend/core';
import { hideAll } from 'tippy.js';
export class MainLayoutDS extends LayoutDataSource {
    onInit({ configuration, mainState, router, options, titleService, route, }) {
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
        this.mainState.get$('headTitle').subscribe((val) => {
            this.titleService.setTitle(val);
        });
        this.mainState.get$('pageTitle').subscribe((val) => {
            this.pageTitle = val;
        });
        this.mainState.get$('subnav').subscribe((val) => {
            this.one('subnav').update(val);
        });
        this.mainState.get$('breadcrumbs').subscribe((val) => {
            this.one('breadcrumbs').update(val);
        });
        this.mainState.get$('header').subscribe((val) => {
            this.one('header').update(val);
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
    }
    // navigate emitter (click) handler
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
    onRouterChanged() {
        hideAll();
    }
    _onRouterNavigate() {
        // hide tippy
        hideAll();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtJQWVoRCxNQUFNLENBQUMsRUFDTCxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssR0FDL0Q7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQkFBaUI7UUFDakI7Ozs7Ozs7Ozs7Ozs7OztvQkFlWTtJQUNkLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsVUFBVSxDQUFDLE9BQU87UUFDaEIsb0JBQW9CO1FBQ3BCLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFFdEMsZUFBZTtZQUNmLElBQUksQ0FBQyxJQUFJO2dCQUFFLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFFbEUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFdBQVc7b0JBQ1gsbUJBQW1CLEVBQUUsT0FBTztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFFRCxZQUFZO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLGVBQWU7UUFDYixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaGlkZUFsbCB9IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgcm91dGUsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWRlclxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmb290ZXInKSkge1xyXG4gICAgICB0aGlzLm9uZSgnZm9vdGVyJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWluIHN0YXRlIHVwZGF0ZXNcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2hlYWRUaXRsZScpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3BhZ2VUaXRsZScpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gdmFsO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdzdWJuYXYnKS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICB0aGlzLm9uZSgnc3VibmF2JykudXBkYXRlKHZhbCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2JyZWFkY3J1bWJzJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5vbmUoJ2JyZWFkY3J1bWJzJykudXBkYXRlKHZhbCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ2hlYWRlcicpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdoZWFkZXInKS51cGRhdGUodmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1haW5TdGF0ZSB0ZXN0XHJcbiAgICAvKiB0aGlzLm1haW5TdGF0ZS5hZGRDdXN0b20oJ2N1c3RvbU5hdicsIG5ldyBTdWJqZWN0KCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZygncGFnZVRpdGxlJywgdmFsKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXRDdXN0b20kKCdjdXN0b21OYXYnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdjdXN0b21OYXYnLCB2YWwpKTtcclxuXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdob2xhJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1c3RvbU5hdicsIHsnaGVsbG8nOiAnbXVuZG8hJ30pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdjaGFvJyk7XHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICd3b3JsZCEnfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMnLCB7XHJcbiAgICAgICAgJ3BhZ2VTdWJUaXRsZScgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ3BhZ2VTdWJUaXRsZScpLFxyXG4gICAgICAgICdjdXN0b21OYXYnIDogdGhpcy5tYWluU3RhdGUuaGFzQ3VzdG9tKCdjdXN0b21OYXYnKSxcclxuICAgICAgICAnY3VzdG9tTmF2cycgOiB0aGlzLm1haW5TdGF0ZS5oYXMoJ2N1c3RvbU5hdnMnKSxcclxuICAgICAgfSk7XHJcbiAgICB9LCA1MDAwKTsgKi9cclxuICB9XHJcblxyXG4gIC8vIG5hdmlnYXRlIGVtaXR0ZXIgKGNsaWNrKSBoYW5kbGVyXHJcbiAgb25OYXZpZ2F0ZShwYXlsb2FkKSB7XHJcbiAgICAvLyByb3V0ZXIgbmF2aWdhdGlvblxyXG4gICAgaWYgKHBheWxvYWQuaGFuZGxlciA9PT0gJ3JvdXRlcicpIHtcclxuICAgICAgY29uc3QgeyBwYXRoLCBxdWVyeVBhcmFtcyB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAgIC8vIHBhdGggY29udHJvbFxyXG4gICAgICBpZiAoIXBhdGgpIHRocm93IEVycm9yKCdvbk5hdmlnYXRlOiBubyBwYXRoIGZvciByb3V0ZXIgbmF2aWdhdGUnKTtcclxuXHJcbiAgICAgIGlmIChxdWVyeVBhcmFtcykge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG9uIGNoYW5nZVxyXG4gICAgICB0aGlzLl9vblJvdXRlck5hdmlnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBsaW5rcyByb3V0ZXJMaW5rIGNoYW5nZSBoYW5kbGVyXHJcbiAgb25Sb3V0ZXJDaGFuZ2VkKCkge1xyXG4gICAgaGlkZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25Sb3V0ZXJOYXZpZ2F0ZSgpIHtcclxuICAgIC8vIGhpZGUgdGlwcHlcclxuICAgIGhpZGVBbGwoKTtcclxuICB9XHJcbn1cclxuIl19