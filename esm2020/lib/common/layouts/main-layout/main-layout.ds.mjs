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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9jb21tb24vbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRW5DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCO0lBZWhELE1BQU0sQ0FBQyxFQUNMLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxHQUMvRDtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7O29CQWVZO0lBQ2QsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxVQUFVLENBQUMsT0FBTztRQUNoQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNoQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUV0QyxlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVsRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDdEIsV0FBVztvQkFDWCxtQkFBbUIsRUFBRSxPQUFPO2lCQUM3QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUVELFlBQVk7WUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixhQUFhO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBoaWRlQWxsIH0gZnJvbSAndGlwcHkuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCByb3V0ZSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZGVyXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJykpIHtcclxuICAgICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Zvb3RlcicpKSB7XHJcbiAgICAgIHRoaXMub25lKCdmb290ZXInKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZm9vdGVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1haW4gc3RhdGUgdXBkYXRlc1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZFRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgncGFnZVRpdGxlJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5wYWdlVGl0bGUgPSB2YWw7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldCQoJ3N1Ym5hdicpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdzdWJuYXYnKS51cGRhdGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnYnJlYWRjcnVtYnMnKS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICB0aGlzLm9uZSgnYnJlYWRjcnVtYnMnKS51cGRhdGUodmFsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0JCgnaGVhZGVyJykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5vbmUoJ2hlYWRlcicpLnVwZGF0ZSh2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFpblN0YXRlIHRlc3RcclxuICAgIC8qIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VzdG9tTmF2JywgbmV3IFN1YmplY3QoKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXQkKCdwYWdlVGl0bGUnKS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKCdwYWdlVGl0bGUnLCB2YWwpKTtcclxuICAgIHRoaXMubWFpblN0YXRlLmdldEN1c3RvbSQoJ2N1c3RvbU5hdicpLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2coJ2N1c3RvbU5hdicsIHZhbCkpO1xyXG5cclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2hvbGEnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VzdG9tTmF2JywgeydoZWxsbyc6ICdtdW5kbyEnfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ2NoYW8nKTtcclxuICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXN0b21OYXYnLCB7J2hlbGxvJzogJ3dvcmxkISd9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2hhcycsIHtcclxuICAgICAgICAncGFnZVN1YlRpdGxlJyA6IHRoaXMubWFpblN0YXRlLmhhcygncGFnZVN1YlRpdGxlJyksXHJcbiAgICAgICAgJ2N1c3RvbU5hdicgOiB0aGlzLm1haW5TdGF0ZS5oYXNDdXN0b20oJ2N1c3RvbU5hdicpLFxyXG4gICAgICAgICdjdXN0b21OYXZzJyA6IHRoaXMubWFpblN0YXRlLmhhcygnY3VzdG9tTmF2cycpLFxyXG4gICAgICB9KTtcclxuICAgIH0sIDUwMDApOyAqL1xyXG4gIH1cclxuXHJcbiAgLy8gbmF2aWdhdGUgZW1pdHRlciAoY2xpY2spIGhhbmRsZXJcclxuICBvbk5hdmlnYXRlKHBheWxvYWQpIHtcclxuICAgIC8vIHJvdXRlciBuYXZpZ2F0aW9uXHJcbiAgICBpZiAocGF5bG9hZC5oYW5kbGVyID09PSAncm91dGVyJykge1xyXG4gICAgICBjb25zdCB7IHBhdGgsIHF1ZXJ5UGFyYW1zIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgICAgLy8gcGF0aCBjb250cm9sXHJcbiAgICAgIGlmICghcGF0aCkgdGhyb3cgRXJyb3IoJ29uTmF2aWdhdGU6IG5vIHBhdGggZm9yIHJvdXRlciBuYXZpZ2F0ZScpO1xyXG5cclxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCwge1xyXG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gb24gY2hhbmdlXHJcbiAgICAgIHRoaXMuX29uUm91dGVyTmF2aWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGxpbmtzIHJvdXRlckxpbmsgY2hhbmdlIGhhbmRsZXJcclxuICBvblJvdXRlckNoYW5nZWQoKSB7XHJcbiAgICBoaWRlQWxsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblJvdXRlck5hdmlnYXRlKCkge1xyXG4gICAgLy8gaGlkZSB0aXBweVxyXG4gICAgaGlkZUFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=