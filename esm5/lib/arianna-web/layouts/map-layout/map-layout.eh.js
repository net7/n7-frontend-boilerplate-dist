import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import helpers from '../../../common/helpers';
var AwMapLayoutEH = /** @class */ (function (_super) {
    __extends(AwMapLayoutEH, _super);
    function AwMapLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
        // private listenRoute(selectedItem = '', forceReload = false) {
        //   // listen for "page" query param changes
        //   this.route.queryParams.pipe(
        //     map((params: any) => params.page),
        //   ).subscribe((page) => {
        //     if (this.dataSource.currentPage !== page) {
        //       this.dataSource.currentPage = page;
        //       this.dataSource.handlePageNavigation();
        //     }
        //   });
        //   // get URL parameters with angular's paramMap
        //   this.route.paramMap.subscribe((params) => {
        //     // look for id
        //     if (params.get('id')) {
        //       if (this.dataSource.currentId === params.get('id') && !forceReload) {
        //         if (this.dataSource.selectedTab !== params.get('tab')) {
        //           this.dataSource.handleNavUpdate(params.get('tab'));
        //         }
        //         return;
        //       }
        //       // get item from response with id === id and return as promise
        //       this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
        //         .subscribe((res) => {
        //           if (res) {
        //             this.dataSource.loadContent(res);
        //             // remove the entity of this page
        //             const entities = res.relatedEntities
        //               .filter((entity) => entity.id !== params.get('id'));
        //             this.dataSource.updateWidgets(res);
        //             if (selectedItem) {
        //               this.emitOuter('selectItem', selectedItem);
        //             }
        //             this.emitOuter('filterbubbleresponse', entities);
        //           }
        //         });
        //     } else {
        //       this.dataSource.loadItem();
        //     }
        //   });
        // }
    }
    AwMapLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-map-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.configuration = payload.configuration;
                    _this.route = payload.route;
                    // this.entityId = this.route.snapshot.params.id || '';
                    // this.listenRoute(this.entityId);
                    break;
                case 'aw-map-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     default:
        //       break;
        //   }
        // });
    };
    return AwMapLayoutEH;
}(EventHandler));
export { AwMapLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0Isd0NBQXdDO0FBQ3hDLGlEQUFpRDtBQUVqRDtJQUFtQyxpQ0FBWTtJQUEvQztRQUFBLHFFQTZFQztRQTVFUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztRQW9DakQsZ0VBQWdFO1FBQ2hFLDZDQUE2QztRQUM3QyxpQ0FBaUM7UUFDakMseUNBQXlDO1FBQ3pDLDRCQUE0QjtRQUM1QixrREFBa0Q7UUFDbEQsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxRQUFRO1FBQ1IsUUFBUTtRQUNSLGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5Qiw4RUFBOEU7UUFDOUUsbUVBQW1FO1FBQ25FLGdFQUFnRTtRQUNoRSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVix1RUFBdUU7UUFDdkUsMEZBQTBGO1FBQzFGLGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsZ0RBQWdEO1FBQ2hELGdEQUFnRDtRQUNoRCxtREFBbUQ7UUFDbkQscUVBQXFFO1FBQ3JFLGtEQUFrRDtRQUNsRCxrQ0FBa0M7UUFDbEMsNERBQTREO1FBQzVELGdCQUFnQjtRQUNoQixnRUFBZ0U7UUFDaEUsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLFFBQVE7UUFDUixRQUFRO1FBQ1IsSUFBSTtJQUNOLENBQUM7SUFwRVEsOEJBQU0sR0FBYjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLG9CQUFvQjtvQkFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQix1REFBdUQ7b0JBQ3ZELG1DQUFtQztvQkFDbkMsTUFBTTtnQkFFUixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILHVEQUF1RDtRQUN2RCxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGVBQWU7UUFDZixNQUFNO1FBQ04sTUFBTTtJQUNSLENBQUM7SUEwQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0VELENBQW1DLFlBQVksR0E2RTlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdNYXBMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LW1hcC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgLy8gdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xuICAgICAgICAgIC8vIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbWFwLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgLy8gICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbGlzdGVuUm91dGUoc2VsZWN0ZWRJdGVtID0gJycsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcbiAgLy8gICAvLyBsaXN0ZW4gZm9yIFwicGFnZVwiIHF1ZXJ5IHBhcmFtIGNoYW5nZXNcbiAgLy8gICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gIC8vICAgICBtYXAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMucGFnZSksXG4gIC8vICAgKS5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcbiAgLy8gICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgIT09IHBhZ2UpIHtcbiAgLy8gICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgLy8gICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VOYXZpZ2F0aW9uKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vICAgLy8gZ2V0IFVSTCBwYXJhbWV0ZXJzIHdpdGggYW5ndWxhcidzIHBhcmFtTWFwXG4gIC8vICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAvLyAgICAgLy8gbG9vayBmb3IgaWRcbiAgLy8gICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gIC8vICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID09PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkge1xuICAvLyAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgIT09IHBhcmFtcy5nZXQoJ3RhYicpKSB7XG4gIC8vICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBhcmFtcy5nZXQoJ3RhYicpKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gIC8vICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCdzbHVnJyksIHBhcmFtcy5nZXQoJ3RhYicpKVxuICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAvLyAgICAgICAgICAgaWYgKHJlcykge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgLy8gICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXG4gIC8vICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gcmVzLnJlbGF0ZWRFbnRpdGllc1xuICAvLyAgICAgICAgICAgICAgIC5maWx0ZXIoKGVudGl0eSkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcbiAgLy8gICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAvLyAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBlbnRpdGllcyk7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIl19